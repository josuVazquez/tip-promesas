function incorrect() {
    var promise = funcionQueDevuelvePromesa();

    return new Promise(function(resolve, reject) {
        promise.then(function(data) {
            data = doSomething(data);
            resolve(data);
        }, function(error) {
            reject(error);
        });
    });
}