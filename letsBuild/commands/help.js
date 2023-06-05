function helpFn()
{
    console.log(`List of all the commands:
    1. node main.js tree "directoryPath"
    2. node main.js organize "directoryPath"
    3. node main.js help`);
}
let myHelpObject = {
    helpKey: helpFn
};  
module.exports = myHelpObject;