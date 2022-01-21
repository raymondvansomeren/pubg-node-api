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
                discordSend title: currentBuild.currentResult, description: "PUBG node api NPM package build", footer: "https://www.npmjs.com/package/pubg-node-api", link: env.BUILD_URL, result: currentBuild.currentResult, title: JOB_NAME, webhookURL: "https://discord.com/api/webhooks/934100516647092276/JINhtmnCjttAISMlpM8bli2f7uaJ4BfF3uzHRbYzCc87MJ66Lt7_bxSP8y111WIA-1So"
            }
        }
    }
}