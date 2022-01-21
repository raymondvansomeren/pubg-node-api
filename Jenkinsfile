pipeline {
    agent any

    tools {nodejs "node_16.13.2"}

    stages {
        stage('Get changes from git')
        {
            steps
            {
                git 'https://github.com/raymondvansomeren/pubg-node-api'
            }
        }
        stage('NPM install dependencies')
        {
            steps
            {
                sh 'npm clean-install'
            }
        }
        stage('Run tests')
        {
            steps
            {
                sh 'npm run test'
            }
        }
    }
}