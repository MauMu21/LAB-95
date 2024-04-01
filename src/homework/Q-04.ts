(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  function calculateOperation(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

    console.log(calculateOperation(1, 2, 3));
    console.log(calculateOperation(4, 5, 6));
  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

    console.log(calculateRectangleArea(5, 6));

  
  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  console.log(calculateCircleArea(7));

  //Resp Pregunta2.- Las funciones para calcular el area de un rectangulo y un circulo son difierentes por lo que no 
  //se podria aplicar DRY, no tienen redundancia


  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //añadi la constante solo para verificar la validacion del correo solo para ejemplificar
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase());/**/
  }
    //definimos un email solo para verificar si es valido
    let email = "example@email.com";
    let isValids = validateEmail(email);

     console.log(isValids);


  function validateUsername(username: string): boolean {
    //añadi la constante solo para verificar la validacion del usuario solo para ejemplificar
    const re = /^[a-zA-Z0-9_]{4,15}$/;
    return re.test(username);

  }
    //definimos un nombre solo para verificar si es valido
    let username= "Auxi";
    let isValid = validateUsername(username);

    console.log(isValid)


  //Una consideracion para aplicar DRY en el ejecicio 3 seria //
  /*function validate(input: string, type: 'emails' | 'usernames'): boolean {
    if (type === 'emails') {
      //añadi la constante solo para verificar la validacion del correo solo para ejemplificar
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(input).toLowerCase());
    } 
        else if (type === 'usernames') 
    {
      añadi la constante solo para verificar la validacion del usuario solo para ejemplificar
      const re = /^[a-zA-Z0-9_]{4,15}$/;
      return re.test(input);
    }
    return false;
  }

  let emails = "example@email.com";
  let isValidEmail = validate(emails, 'emails');
  console.log(isValidEmail);

  let usernames = "user_name";
  let isValidUsername = validate(usernames, 'usernames');
  console.log(isValidUsername);

  //en este caso podemos usar la misma funcion para validar el correo y usuario a la vez
*/
})();