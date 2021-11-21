console.log("nihad");
function hello(name){
console.log('hello'+name);
}
hello("nihad");
console.log(module);

const EventEmmiter = require('events');
const emmiter= new EventEmmiter();




const Logger=require('./logger');
const logger=new Logger();

console.log(logger);

logger.log('cool');

logger.emmiter.on('messageLogged',(eventArg) => {
    console.log('Losterner',eventArg);
})

const fs = require('fs');
const file=fs.readdirSync('./');
logger.log(file);

fs.readdir('./',function(err,files){

    if(err) console.log('Error',err);
    else console.log('Files',file)
});








