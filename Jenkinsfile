pipeline {
    agent any

    tools {nodejs "node_16.13.2"}

    stages {
        stage('Get changes from git')
        {
            steps
            {
                git url: 'https://github.com/raymondvansomeren/pubg-node-api', branch: 'development'
            }
        }
        stage('NPM install dependencies')
        {
            steps
            {
                sh 'npm clean-install && npm install mocha --no-save'
            }
        }
        stage('Run tests')
        {
            steps
            {
                sh 'npm run test'
            }
        }
        stage('Post webhook')
        {
            steps
            {
                withCredentials([string(credentialsId: 'pubg-node-api-webhook', variable: 'WEBHOOK')])
                {
                    discordSend description: "PUBG node api NPM package build", footer: "https://www.npmjs.com/package/pubg-node-api", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "${WEBHOOK}"
                }
            }
        }
    }
}