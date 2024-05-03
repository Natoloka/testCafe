npm init -y
npm install testcafe --save-dev

# install reporter

npm i testcafe-reporter-html

# TODO: clarify why it's broken

npm install --save testcafe-reporter-cucumber-json --force
npm install --save-dev multiple-cucumber-html-reporter --force
#visual check differences between screenshots
npm install visual-check-testcafe --save-dev --force

reports with allure
npm i allure-commandline --save --force
npm install --save testcafe-reporter-allure-plus --force

npx testcafe chrome tests/ -e
npm run test
