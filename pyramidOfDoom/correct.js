function correct() {
    return promesa1().then(() => {
        return promesa2();
    }).then(() => {
        return promesa3();
    })
    .then(() => {
        return promesa4();
    })
    .then(() => {
        finalFunction();
    });
}
