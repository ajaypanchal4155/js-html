// Immediately Invoked function Expression (IIFE)

(function chai(){
    console.log('DB connected');
})();
//(function aurcode(){
    //console.log('DB connected Two');
//})()

((name) => {
    console.log(`DB Connected Two ${name}`);
})('hitesh')
 