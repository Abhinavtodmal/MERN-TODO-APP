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
                    docker.build("${env.DOCKER_IMAGE}-server:${env.DOCKER_TAG}", "./server")
                    docker.build("${env.DOCKER_IMAGE}-client:${env.DOCKER_TAG}", "./client")
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
                        sh '''
                            echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
                            docker push ${DOCKER_IMAGE}-server:${DOCKER_TAG}
                            docker push ${DOCKER_IMAGE}-client:${DOCKER_TAG}
                        '''
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    if (isUnix()) {
                        sh '''
                            docker-compose down
                            export MONGODB_ATLAS_URI=${MONGODB_ATLAS_URI}
                            export JWT_SECRET=${JWT_SECRET}
                            docker-compose up -d
                        '''
                    } else {
                        bat '''
                            docker-compose down
                            set MONGODB_ATLAS_URI=%MONGODB_ATLAS_URI%
                            set JWT_SECRET=%JWT_SECRET%
                            docker-compose up -d
                        '''
                    }
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
            script {
                sh 'docker system prune -af || true'
            }
        }
    }
}
