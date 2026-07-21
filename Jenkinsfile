pipeline {
    agent any

    tools {
        nodejs 'NODE_JS'
    }

    options {
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        CI = 'true'
        PLAYWRIGHT_BROWSERS_PATH = "${WORKSPACE}\\.playwright-browsers"
    }

    stages {
        stage('Instalar dependencias') {
            steps {
                dir('Curso') {
                    bat 'npm.cmd ci'
                    bat 'npx.cmd playwright install chromium'
                }
            }
        }

        stage('Validar proyecto') {
            steps {
                dir('Curso') {
                    bat 'npm.cmd run check'
                }
            }
        }

        stage('Ejecutar pruebas CI') {
            steps {
                dir('Curso') {
                    bat 'npm.cmd run test:ci'
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: 'Curso/test-results/results.xml'
            archiveArtifacts allowEmptyArchive: true, artifacts: 'Curso/playwright-report/**/*, Curso/test-results/**/*'
        }
    }
}

