const EventEmitter=require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfall', () => {
  console.log('Please turn off the motor');
  setTimeout(()=>{
    console.log('Please turn off the motor! Its a gental remainder');
  },3000);
});
console.log("Script is running");
myEmitter.emit('Waterfall');
console.log("Script is still running");