function incorrect() {
    return promesa1().then(function() {
        return promesa2().then(function() {
            return promesa3().then(function() {
                return promesa4().then(function() {
                    endOfPromises();
                });
            });
        });
    });
}
