function correct() {
    return funcionQueDevuelvePromesa().then(function(data) {
        doSomething(data);
    });
}