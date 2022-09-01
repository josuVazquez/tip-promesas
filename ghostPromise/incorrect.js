function incorrect() {
    if (test) {
        return funcionQueDevuelvePromesa();
    } else {
        return 42;
    }
}

var result = incorrect();

if (typeof incorrect === 'object' && typeof incorrect.then === 'function') {
    // ...
} else {
    // ...
}