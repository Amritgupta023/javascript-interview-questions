//promise.

var p1 = new Promise((resolve,reject)=>{
    if(true){
        resolve('this is resolved promise');
    }else{
        reject('reject');
    }
})

p1.then((data)=>{
    console.log('data',data);
}).catch((err)=>{
    console.log('if error');
}).finally((data)=>{
    console.log('finally run');
})