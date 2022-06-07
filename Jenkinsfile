pipeline {
     agent
     stages {
        stage("Build") {
            steps {
                sh "git clone https://github.com/tumikole/Jenkins-app-example.git"
                sh "sudo npm install"
                sh "sudo npm run build"
                echo"Application succesfully bulded"

            }
        }
        stage("Test") {
            steps {
                echo"------------------------------"
                echo"This is a test  stage"
                echo"------------------------------"
            }
        }
        stage("Deploy") {
            steps {
                echo"------------------------------"
                echo"This is a deploy stage"
                echo"------------------------------"
            }
        }
    }
}