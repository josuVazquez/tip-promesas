function test() {
    return funcionQueDevuelvePromesa().then(function(data) {
        return doSomething(data);
    });
}