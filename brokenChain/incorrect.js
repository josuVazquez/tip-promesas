function incorrect() {
    var promise = funcionQueDevuelvePromesa();

    promise.then(function(data) {
        doSomething(data);
    });

    return promise;
}