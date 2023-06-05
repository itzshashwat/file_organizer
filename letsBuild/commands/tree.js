let fs = require("fs");
let path = require("path");
function treeFn(dirPath)
{
    if(dirPath == undefined)
    {
        // treeHelper(process.cwd,"");
        // return;
        dirPath = process.cwd();
    }
    // else 
    {
        let doesExist = fs.existsSync(dirPath);
         if(doesExist)
        {
            treeHelper(dirPath, "");
            
        }
        else
        {
            console.log("Please input correct path");
            return;

        }

    }
}
function treeHelper(dirPath, indent){
    // is file or folder
    let isFile = fs.lstatSync(dirPath).isFile();
    if(isFile==true){
        let fileName = path.basename(dirPath);
        console.log(indent + "├──" + fileName);
    }
    else{
        let dirName =  path.basename(dirPath);
        console.log(indent + "└──" + dirName);
       let childrens = fs.readdirSync(dirPath);
         for(let i = 0; i<childrens.length; i++){
           let childPath = path.join(dirPath, childrens[i]);
              treeHelper(childPath, indent + "\t");

    }

}
}
let myTreeObj = {
    treeKey: treeFn
};
module.exports = myTreeObj; 