pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'abhinavtodmal/mern-todo-app'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        MONGODB_ATLAS_URI = credentials('mongodb-atlas-uri')
        JWT_SECRET = credentials('jwt-secret')
    }
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Abhinavtodmal/MERN-TODO-APP.git'
            }
        }
        
        stage('Build Images') {
            steps {
                script {
                    bat """
                        docker build -t ${env.DOCKER_IMAGE}-server:${env.DOCKER_TAG} ./server
                        docker build -t ${env.DOCKER_IMAGE}-client:${env.DOCKER_TAG} ./client
                    """
                }
            }
        }
        
        stage('Push Images') {
            steps {
                script {
                    withCredentials([usernamePassword(
                        credentialsId: 'docker-hub-credentials',
                        usernameVariable: 'DOCKER_USERNAME',
                        passwordVariable: 'DOCKER_PASSWORD'
                    )]) {
                        bat """
                            echo %DOCKER_PASSWORD% | docker login -u %DOCKER_USERNAME% --password-stdin
                            docker push ${env.DOCKER_IMAGE}-server:${env.DOCKER_TAG}
                            docker push ${env.DOCKER_IMAGE}-client:${env.DOCKER_TAG}
                        """
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    bat """
                        docker-compose down
                        set MONGODB_ATLAS_URI=${env.MONGODB_ATLAS_URI}
                        set JWT_SECRET=${env.JWT_SECRET}
                        docker-compose up -d
                    """
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
