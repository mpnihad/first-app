var url='http://mylogger.io/log';



const EventEmmiter = require('events');


class Logger extends EventEmmiter{
     log(message){
        //http request 
        console.log(message);
        this.emit('messageLogged',{id: 1,url: message});
    }
}






module.exports=Logger;
module.exports.baseURL=url