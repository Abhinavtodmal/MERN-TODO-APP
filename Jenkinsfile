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
        
<<<<<<< HEAD:Jenkinsfile
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
=======
        stage('Build Images') {
            steps {
                script {
                    // Build server image (secrets will be passed at runtime)
                    docker.build("${env.DOCKER_IMAGE}-server:${env.DOCKER_TAG}", "./server")
                    
                    // Build client image with nginx.conf
                    docker.build("${env.DOCKER_IMAGE}-client:${env.DOCKER_TAG}", "./client")
                }
            }
>>>>>>> d9f484c (WIP: Ongoing changes before rebase):jenkinsfile
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
                    // For Windows compatibility using bat and set
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
                // Clean up Docker images to save space
                sh 'docker system prune -af || true'
            }
        }
    }
}
}
