function fruits() {
    if(true){
        var fruit1 = 'Apple'; //Scope function, por ser var
        let fruit2 = 'Kiwi'; //Scope block por ser let
        const fruit3 = 'Banana'; //Scope block por ser const
    }
    console.log(fruit1); // Se ejecuta
    console.log(fruit2); // No se ejecuta
    console.log(fruit3); // No se ejecuta
}

fruits();

