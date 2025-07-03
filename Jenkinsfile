pipeline {
    agent any
    
    environment {
        DOCKER_IMAGE = 'abhinavtodmal/mern-todo-app'
        DOCKER_TAG = "${env.BUILD_NUMBER}"
        MONGODB_ATLAS_URI = credentials('mongodb-atlas-uri')  // From Jenkins credentials
        JWT_SECRET = credentials('jwt-secret')                // From Jenkins credentials
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
            // For Windows agents, use double quotes and escape special characters
            def serverBuildCommand = """
                docker build \
                --build-arg MONGODB_ATLAS_URI=\"${env.MONGODB_ATLAS_URI}\" \
                --build-arg JWT_SECRET=\"${env.JWT_SECRET}\" \
                -t ${env.DOCKER_IMAGE}-server:${env.DOCKER_TAG} ./server
            """.stripIndent().trim()

            def clientBuildCommand = """
                docker build \
                -t ${env.DOCKER_IMAGE}-client:${env.DOCKER_TAG} ./client
            """.stripIndent().trim()

            // Execute commands
            bat serverBuildCommand
            bat clientBuildCommand
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
                sh '''
                    docker-compose down
                    MONGODB_ATLAS_URI=${MONGODB_ATLAS_URI} JWT_SECRET=${JWT_SECRET} docker-compose up -d
                '''
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
