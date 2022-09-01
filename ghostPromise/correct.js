function correct() {
    if (test) {
        return funcionQueDevuelvePromesa();
    } else {
        return Promise.resolve(42); // devuelve una promesa que se auto resuelve con el valor 42
    }
}