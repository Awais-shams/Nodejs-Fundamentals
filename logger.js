//  * Logger.js is a module because in node we use module file system which means that every var and fun
//  * in this module will be private and cannot access to other module/files so to access in other module/file
//  * so we have to import and export the functions and variables in module object and require function
//  * Following will be the details of implementation


const url = "http://dummyurlforexample";
const name = "Awais Shams";
const id = "02880";
const department = "Mern Stack";


function Hello(message) {
  console.log("Hello" + " " + message);
}


function Hello1(message) {
    console.log("Hello1" + " " + message);
  }

// ? exporting the module object with different ways to understand it
// module.exports.fun = Hello;
// module.exports=Hello
const expObj={
    url:url,
    name:name,
    id:id,
    department:department,
    hello:Hello,
    hello1:Hello1
}

module.exports=expObj