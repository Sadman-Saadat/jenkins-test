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
                sh 'npm install'
            }
        }
        stage('SonarQube analysis') {
            steps {
                script {
                def scannerHome = tool 'sonarscan';
                withSonarQubeEnv('sonarqube') {
                    sh "${tool("sonarscan ")}/bin/sonar-scanner -Dsonar.projectKey=reactapp -Dsonar.projectName=jenkins-test"
                    }
                }
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
