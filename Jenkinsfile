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
                withSonarQubeEnv('SonarQube') {
                    script {
                        def mvnHome = tool name: 'Apache Maven 3.6.0', type: 'maven'
                        sh "${mvnHome}/bin/mvn -B -DskipTests clean package"
                    }
                } // submitted SonarQube taskId is automatically attached to the pipeline context
            }
        }
        stage("Quality gate") {
            steps {
                waitForQualityGate abortPipeline: true
            }
        }
    }
}
