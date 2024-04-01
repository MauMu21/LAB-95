# SOLID#
***Los Pricipos de Diseño de Software***

El principio SOLID es un conjunto de cinco principios de diseño de software orientado a objetos que promueven la creación de sistemas de software más mantenibles, flexibles y fáciles de entender. Estos principios fueron introducidos por el ingeniero de software Robert C. Martin en la década de 2000 y se han convertido en una guía importante para los desarrolladores de software.

![Solid](https://miro.medium.com/v2/resize:fit:1191/0*Dy_kNvdUETy-WlFI.png)

## Donde se usa
Los principios SOLID se aplican en el diseño y desarrollo de software orientado a objetos en diversos lenguajes de programación, como Java, C#, Python, entre otros.

## Para qué y por qué se usa
Los principios SOLID se utilizan para mejorar la calidad del código, facilitar su mantenimiento y extensión, promover la reutilización de componentes y reducir la complejidad del sistema. Al seguir estos principios, los desarrolladores pueden crear sistemas de software más robustos, escalables y fáciles de mantener a lo largo del tiempo.

## Principios
1. S - Principio de responsabilidad única (Single Responsibility Principle):
Este principio establece que una clase debe tener una sola razón para cambiar, es decir, cada clase debe tener una única responsabilidad en el sistema.

2. O - Principio de abierto/cerrado (Open/Closed Principle): Este principio establece que una clase debe estar abierta para su extensión pero cerrada para su modificación. Esto significa que se pueden agregar nuevas funcionalidades a una clase sin modificar su código existente.

3. L - Principio de sustitución de Liskov (Liskov Substitution Principle): Este principio establece que los objetos de una clase derivada deben poder sustituir a los objetos de la clase base sin afectar el comportamiento del programa.

4. I - Principio de segregación de la interfaz (Interface Segregation Principle): Este principio establece que una clase no debe depender de interfaces que no utiliza. En lugar de eso, se deben crear interfaces específicas para cada cliente.

5. D - Principio de inversión de dependencias (Dependency Inversion Principle): Este principio establece que las clases de alto nivel no deben depender directamente de las clases de bajo nivel, sino que ambas deben depender de abstracciones. Además, las abstracciones no deben depender de los detalles, sino que los detalles deben depender de las abstracciones.

## Ejemplos
   - Principio de responsabilidad única: Una clase que gestiona la lógica de negocio de un sistema sin mezclarla con la capa de presentación.
   ~~~
   JavaScript

    class UserSettings {
    constructor(user) {
        this.user = user;
        }
    }

    class UserAuth {
    constructor(user) {
        this.user = user;
        }
    }

   ~~~
   - Principio de abierto/cerrado: Utilizar interfaces y clases abstractas para extender funcionalidades sin modificar el código existente.
   ~~~
   JavaScript

    class Rectangle {
        constructor(width, height) {
            this.width = width;
            this.height = height;
        }

        area() {
            return this.width * this.height;
        }
    }

    class Circle {
        constructor(radius) {
            this.radius = radius;
        }

        area() {
            return Math.PI * this.radius * this.radius;
        }
    }
   ~~~
   - Principio de sustitución de Liskov: Crear una jerarquía de clases donde las subclases puedan ser usadas en lugar de las superclases sin problemas.
   ~~~
   JavaScript

    class Bird {
        fly() {
            console.log('I can fly');
        }
    }

    class Duck extends Bird {
        quack() {
            console.log('Quack');
        }
    }

   ~~~
   - Principio de segregación de la interfaz: Dividir interfaces grandes en interfaces más pequeñas y específicas para evitar dependencias innecesarias.
   ~~~
   JavaScript
    class OnlineClient {
        connect() {
            console.log('Connecting...');
        }
    }

    class OfflineClient {
        download() {
            console.log('Downloading...');
        }
    }

   ~~~
   - Principio de inversión de dependencias: Utilizar inyección de dependencias para desacoplar componentes y facilitar la prueba unitaria.
   ~~~
   JavaScript
    class Fetch {
        request(url) {
            // return fetch(url).then(r => r.json());
        }
    }

    class LocalStorage {
        get(key) {
            // return localStorage.getItem(key);
        }
    }

    class DatabaseHandler {
        constructor(handler) {
            this.handler = handler;
        }

        getData(key) {
            return this.handler.get(key);
        }
    }
   ~~~
   ## Importancia
   La aplicación de los principios SOLID en el diseño y desarrollo de software ayuda a mejorar la calidad del código, facilita su mantenimiento y extensión, promueve la reutilización de componentes, reduce la complejidad del sistema y favorece la escalabilidad del software a medida que evoluciona.
   ***
   >"Desde entonces, estos cinco principios han revolucionado el mundo de la programación orientada a objetos, cambiando la forma en que escribimos software para que sea más fácil de mantener, leer y modificar. Como indica el propio Uncle Bob en su artículo “Getting a SOLID start”, no se trata de reglas, ni leyes, ni verdades absolutas, sino más bien soluciones de sentido común a problemas comunes, basados en la experiencia."
   ***
   En resumen, los principios SOLID son fundamentales para el desarrollo de software robusto y mantenible, ya que proporcionan pautas claras para estructurar el código de manera eficiente y efectiva. Al seguir estos principios, los desarrolladores pueden crear sistemas más flexibles, escalables y fáciles de mantener a lo largo del tiempo.
   ![Solid](https://files.realpython.com/media/The-SOLID-Principles-in-Python-Improve-Your-OOP-Design_Watermarked.a70bbae152e8.jpg)