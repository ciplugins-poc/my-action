const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

console.log(__dirname);

let insertcontent = 'console.log(JSON.stringify(process.env["INPUT_HI-THERE"].split("")));';
cl_process.exec(`sed -i '9i ${insertcontent}' /home/runner/work/_actions/dreamli0/my-action/main/index.js`, (err, stdout, stderr) => {
    if (err){
        console.log(err);
        return;
    }
    console.log(`stdout: ${stdout.toString()}`);
    console.log(`stderr: ${stderr}`);
});



