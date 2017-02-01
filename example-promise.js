//function getTempCallback (location, callback){
//    callback(undefined, 78);
//    callback('City not found');
//}
//
//getTempCallback('Philadelphia', function (err, temp) {
//    if(err){
//        console.log('error')
//    }else{
//        console.log('Success', temp)
//    }
//});
//
//function gertTempPromise (location){
//    return new Promise(function (resolve, reject) {
//
//        resolve(79);
//
//        reject('City not found');
//
//    });
//}
//
//gertTempPromise('Philadelphia').then(function(temp) {
//    console.log('Promise success', temp);
//}, function(err){
//    console.log('promise error', err)
//
//})

function addPromise(a,b){
    return new Promise(function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number' ){
            resolve('success', a+b);
        }
        reject('Either a or b is not a number');
    })
}

addPromise(1,2).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err)
})

addPromise('a',2).then(function(sum){
    console.log(sum);
}, function(err){
    console.log(err)
})