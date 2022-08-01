pipeline {
    agent {
        any {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true' 
    }
    
    tools {nodejs "nodejs"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('SonarQube analysis') {
            steps {
             def scannerHome = tool 'SonarScanner 4.0';
             withSonarQubeEnv('My SonarQube Server') // If you have configured more than one global server connection, you can specify its name
             sh "${scannerHome}/bin/sonar-scanner"
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
