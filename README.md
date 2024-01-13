El proyecto de trabajo versión 2.0 está enfocado en la creación de un landing page y un formulario donde obtener los datos de las personas interesadas. 

ACTUALIZACIONES 2.3.4
HECHO: 
1) Trabajo de la página principal con las secciones HERO, MAIN, NAV, FOOTER.
2) Todavía no se agrega un ASIDE.
3) Se agrega un FAVICON respecto a la versión 1.0
4) Se terminó de hacer un formulario de contacto en contact.html

EN PROCESO: 
1) Página about.html todavía está llena de LOREM
2) find-calendar.html y system.html no han sido trabajadas al completo
3) Se ha puesto en .gitignore los paquetes de .json y SASS por ahora

ACTUALIZACIONES 3.0.1
HECHO:
1) Se corrige el problema que hubo con insertar el favicon
2) Se pasa la mayoría del style.css hacia estilo.scss
3) Se crea rama de .git que especifica que estoy trabajando en el SASS

EN PROCESO:
1) Se comenzará a crear variables placeholders en SASS por si son necesarias
2) Queda pendiente traspasar las media queries al lenguaje SASS
3) Hay que investigar si es necesario crear bucles, mapas u otro tipo de variables para la siguiente entrega

ACTUALIZACIONES 3.1.1

HECHO:
1) Se crearon variables de SASS para integrar en el SCSS | CSS estilos.css
2) Se establece una corrección a los nth-child debido a una mala escritura en SCSS.
3) Se corrigen bugs del formato de HTML y se definen ciertos parámetros del @screen media and {}

EN PROCESO: 
1) Queda pendiente el trabajar sobre la priorización de efectos de algunos bugs que hay por cruce de clases e ID. Se buscará establecer una métrica de CSS en modo in-line, algo poco ortodoxo pero funcional para sacar el código. 

ACTUALIZACIONES 3.5.4

HECHO: 
1) ¡Nuevo diseño! Se ha preparado una paleta de colores blanca con degradados y sombras en cajas con borde circular. Se busca mayor elegencia y sencillez minimalista para posibles clientes.
2) Generalización del footer y del header con una estructura limpia. 
3) Corrección de errores en la anidación SCSS. 
4) Se crearon nuevas variables de colores en SCSS. 
5) La rama renovación fue unida al main.

EN PROCESO: 
1) Se creará para las siguientes versiones una nueva rama llamada "Animations"
2) HTML 3, 4 y 5 serán los siguientes en quedar listos.
3) Se aplicará la misma paleta de colores. 

VERSIÓN FINAL

Se ha subido a Webhot, a GITHUB Pages y se ha corregido los pormenores finales de la pre entrega. 

NUEVA VERSIÓN CON JS 

Para mejorar la interactividad con la página web, se ha propuesto una inclusión de JS para darle mayor dinamismo al sitio. 

1) El primer trabajo que se hará en el código será agregar un arreglo dentro de la página contact.html que permitirá construir una pequeña base de dato con las personas que manden el contacto al host. 

VERSIÓN 1.2.0 --> JS EN EL FORMULARIO DE CONTACTO

1) Se agrega una clase que permite construir cada usuario que ingresa información en el formulario
2) Se crea una variable let que es un array para el ingreso de datos
3) Se crea un evento para cuando se hace click en el formulario tanto para cuando se aprieta el botón de borrar+
4) Se hacen dos funciones para acompañar todas estas expresiones
5) Se regresa el valor del array con los datos del usuario creado gracias a la clase y el constructor.
6) Se crea un filtro para que en el array se pueda buscar por región. En este mismo principio se puede conseguir más filtros necesarios por si se quiere manejar una base de datos en un servidor externo.

VERSIÓN 1.5.2   --> API | NODE.JS | PREPARACIÓN PARA MONGODB 

1) Se configura una API que responde con la aplicación POSTMAN a los requerimientos POST de testeo.
2) Queda pendiente construir el enlace para que el formulario de contacto pueda hacer esto de forma automática. 
3) Se instalan las dependencias NPM de express(), body-parser(), cors() y morgan() para manejo de errores, 
creación de middleware, y creación de un localhost:3000. 
4) Se crea carpeta API con rutas específicas para configurar el formulario de contacto con la app.js y también con el contact.js y contact.html

VERSIÓN 1.5.3 --> API | SE AGREGA MONGODB COMO UN SERVIDOR EXTERNO 

1) Funcionamientos con POSTMAN están correctos. 
2) Es necesario actualizar la forma en que la información sea recibida por Mongo DB. 
3) Creación de la carpeta routes en conjunto con actualización del server.js

