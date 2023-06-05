#!/usr/bin/env node
let fs = require("fs");
let path = require("path");
let inputArray = process.argv.slice(2);
let command = inputArray[0];
let helpObj = require("./commands/help");   //help.js
let treeObj = require("./commands/tree");   //tree.js
let organizeObj = require("./commands/organize");  //organize.js

let types = {
media: ["mp4", "mkv"],
archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
app: ["exe", "dmg", "pkg", "deb"],
programs : ["c", "cpp", "java", "py", "js", "html", "css", "php", "sql", "rb", "sh", "bat", "pl", "swift", "go", "dart", "json", "xml"]
}
switch(command)
{

    case "tree":
        treeObj.treeKey(inputArray[1]);
        break;
    case "organize":
        organizeObj.organizeKey(inputArray[1]);
        break;
        case "help":
        helpObj.helpKey();
            break;
    default:
        console.log("Please input right command");
        break;
}