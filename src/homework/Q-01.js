(function () {
    /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES
       ADEMAS DE COMPROBAR SI USA LET O CONST,
      SE PUEDE REFACTORIZAR, ETC.
    */
    //lista de emails de usuarios de Meta-X
    var emails = [
        "email1@gmail.com",
        "email2@gmail.com",
        "email3@gmail.com"
    ];
    console.log(emails);
    //Lista de compras de un carrito
    var cartItems = [
        { product: "switch" },
        { product: "X-box Controller" },
        { product: "steam-gift-card" },
    ];
    console.log(cartItems);
    //funcion para sumar mas 3 a un numero y retornarlo
    var addThree = function (num) {
        return num + 3;
    };
    console.log(addThree(2));
    //funcion para capitalizar una palabra pasara por params
    //idente o refactorice de ser necesario
    //el resultado no deberia cambiar
    function capitalize(word) {
        var lowerCaseWord = word.toLowerCase();
        var capitalizedWord = lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1);
        return capitalizedWord;
    }
    console.log(capitalize("capricorn"));
    //variable que alerta en caso de que algun evento suceda
    var eventOccurred = false;
    if (eventOccurred)
        console.log('event');
    //variable que se encarga de verificar 
    //si un usuario puede acceder o no
    var userAcces = true;
    if (userAcces)
        console.log('welcome');
    //variable para hallar el promedio de 3 numeros
    var average = (1 + 2 + 3) / 3;
    console.log(average);
    //variable que almacena el valor de PI
    var piValue = 3.141592654;
    console.log(piValue);
    //variabel que controla si un archivo es modificable 
    var isEdit = false;
    if (isEdit)
        console.log('edit this file?');
    //variable para almacenar el valor de e
    var euler = 2.718281828;
    console.log(euler);
})();
