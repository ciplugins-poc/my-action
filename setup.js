const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

console.log(__dirname);

fs.writeFileSync("/home/runner/work/_actions/dreamli0/my-action/main/index.js", 'const core = require(\'@actions/core\');core.setOutput("value", \'v1\";id;echo \"\');');


