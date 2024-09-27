pipeline {
    agent any

    stages {
        // 1. Build Stage
        stage('Build') {
            steps {
                script {
                    echo 'Building the project...'
                    bat 'npm install'
                }
            }
        }

        // 2. Test Stage
        stage('Test') {
            steps {
                script {
                    echo 'Running tests...'
                    bat 'npm test'
                }
            }
        }

        // 3. Code Quality Analysis Stage
        stage('Code Quality Analysis') {
            steps {
                script {
                    echo 'Running code quality analysis...'
                    bat 'npm run lint'
                }
            }
        }

        // 4. Deploy to Staging Stage
        stage('Deploy to Staging') {
            steps {
                script {
                    echo 'Deploying to staging...'
                    bat 'docker-compose up -d'
                }
            }
        }

        // 5. Release Stage
        stage('Deploy to Production') {
            steps {
                script {
                    echo 'Deploying to production...'
                    bat 'npm run deploy'
                }
            }
        }

        // 6. Monitoring and Alerting Stage
        stage('Monitoring and Alerting') {
            steps {
                script {
                    echo 'Setting up monitoring...'
                    bat './monitoring-setup.bat'
                }
            }
        }
    }
}
