pipeline {
    agent any

    stages {
        // 1. Build Stage
        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    sh 'npm install' 
                }
            }
        }

        // 2. Test Stage
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    sh 'npm test' 
                }
            }
        }

        // 3. Code Quality Analysis Stage
        stage('Code Quality Analysis') {
            steps {
                script {
                    echo 'Running code quality analysis...'
                    sh 'npm run lint'
                }
            }
        }

        // 4. Deploy to Staging Stage
        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to staging...'
                    sh 'docker-compose up -d'
                }
            }
        }

        // 5. Release Stage
        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to production...'
                    sh 'npm run deploy'
                }
            }
        }

        // 6. Monitoring and Alerting Stage
        stage('Monitoring and Alerting') {
            steps {
                script {
                    echo 'Setting up monitoring...'
                    sh './monitoring-setup.sh'
                }
            }
        }
    }
}
