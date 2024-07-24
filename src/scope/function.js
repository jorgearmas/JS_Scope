function greeting(){
    let userName = 'Ana'; //Scope function
    console.log(userName);

    if(userName === 'Ana') {
        console.log("Hello "+userName+"!"); // Se invoca en bloque anidado
    }
}

greeting();

