let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odp", "odg", "odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"],
    programs : ["c", "cpp", "java", "py", "js", "html", "css", "php", "sql", "rb", "sh", "bat", "pl", "swift", "go", "dart", "json", "xml"]
    }
function organizeFn(dirPath)
{
    console.log("organize command implemented for ", dirPath);
    // 1. input - directoy path ->
    let destPath;
    if(dirPath == undefined)
    {
        dirPath = process.cwd();
    }

        let doesExist = fs.existsSync(dirPath);
        if(doesExist)
        {
            // 2. create directory "oragnized_files" ->
             destPath = path.join(dirPath, "organized_files");
            if(fs.existsSync(destPath) === false)
            {

                fs.mkdirSync(destPath); 
            }
            
        }
        else
        {
            console.log("Please input correct path");
            return;

        }

    
     organisedHelper(dirPath, destPath);
     
    }
    function organisedHelper(src, dest)
    {
    // 3. identify categories of all the files present in that input directory ->
    let childNames = fs.readdirSync(src);
    for(let i =0; i<childNames.length;i++)
    {
        let childAddress = path.join(src, childNames[i]);
        let isFile = fs.lstatSync(childAddress).isFile();
        if(isFile)
        {
            // console.log(childNames[i]);
              
            let category = getCategory(childNames[i]);
            console.log(childNames[i], "belongs to -->", category);
            // 4. copy / cut files to that organized directory inside of any of category folder ->
            sendFiles(childAddress, dest, category);



        }

    }



    }
    function sendFiles(srcFilePath, dest, category){
        let categoryPath = path.join(dest, category);
        if(fs.existsSync(categoryPath) == false)
        {
        fs.mkdirSync(categoryPath);
        }
        let fileName = path.basename(srcFilePath);
       let destFilePath = path.join(categoryPath, fileName);
       fs.copyFileSync(srcFilePath, destFilePath);
    //    fs.unlinkSync(srcFilePath);
       console.log(fileName, "moved to", category);

    
    }


    
    function getCategory(name)
    {
       let ext = path.extname(name);
       ext = ext.slice(1);
       for (let type in types)
       {
        let cTypeArray = types[type];
        for(let i =0; i<cTypeArray.length;i++)
        {
            if (ext == cTypeArray[i])
            {
                return type;
            } 
        }

       }
       return "others";
    }
    let myOrganizeObj = {
        organizeKey: organizeFn
    }
    module.exports = myOrganizeObj;