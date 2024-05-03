const report = require('multiple-cucumber-html-reporter');
const path = require('path');
const projectName = path.basename(__dirname);
const projectVersion = process.env.npm_package_version;
const reportGenerationTime = new Date().toISOString();

report.generate({
  reportName: "Testcafe report",
  jsonDir: "./reports/jsonReports/",
  reportPath: "./reports/",
  customData: {
    title: "Run info",
    data: [
      { label: "Project", value: `${projectName}` },
      { label: "Release", value: `${projectVersion}` },
      { label: "Execution End Time", value: `${reportGenerationTime}` },
    ],
  },
});