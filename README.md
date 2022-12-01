# TP LABORATORIO
## UNIVERSIDAD NACIONAL DEL COMAHUE

![CAACEP](./client/assets/img/Logo_caacep.png)


### Full Stack Developers
      Alaniz Gustavo
      Bustamante Leonel
---
## Index
1. [Asignacion dada](#asignacion-dada)
2. [Requerimientos](#requerimientos)
3. [Uso](#uso)
4. [Documentation](#annex---documentation)
---

## Asignacion dada 

### WEB ESTÁTICA

El trabajo consiste en realizar una página web estática sobre un dominio a elección de cada
grupo. Ante la duda si el dominio cumple con los requisitos para realizar el presente trabajo,
cada grupo deberá consultar con los docentes y tener alguna confirmación.
El dominio elegido deberá soportar:
a) Obtener datos del día de “hoy” (puede ser uno o más datos). Por ejemplo:
i) Dominio Clima: Temperatura actual, máxima/mínimo del día. Probabilidad de
lluvia
ii) Dominio Monedas: Cotización de USD, EU, Bitcoin del día. Diferentes
cotizaciones según casas de cambio o bancos, etc
iii) Dominio Acciones: Valor acción YPF, volumen operado, cantidad de
operaciones del día, etc.
b) Obtener un rango de datos de 10 días antes o después al día de hoy. Ejemplo: la
temperatura de los próximos 10 días; precios de productos antes del hotsale de los
últimos 10 días.
Aclaración: para esta entrega, los datos deben estar de manera estática en las páginas, no
hace falta que sean dinámicos ni que cambien al cambiar los días.
Ejemplos de dominios podrían ser: El clima, Cotización de monedas o acciones, etc. Precios
históricos de productos. Pensar positivamente ;)
La entrega deberá tener al menos las siguientes características:
1. Al menos dos páginas estáticas que se puedan navegar de una a otra y volver,
utilizando hipervínculos.
    a. La primer página, portada, que muestra el valor del día de hoy
    b. La segunda página que muestre el historial
2. Elementos comunes: Una tabla; un menú, imágenes donde crea necesario
3. Responsive: el sitio debe adaptarse correctamente entre 640-1280px
4. Respetar conceptos básicos de accesibilidad
5. Tecnologías css recomendadas: bootstrap, foundation
En esta entrega, no deberá utilizarse ningún framework ni librería de Javascript.
Fecha límite de entrega: 22/10/20
Las defensas comenzarán el jueves 15 de octubre, con los grupos que lo tengan listo. La
duración prevista para cada defensa es de 20 minutos

### WEB DINAMICA

Desarrollar una API Rest para el dominio seleccionado en el TPO 2. La misma, debe
cumplir con las siguientes características, aplicándola al dominio de cada grupo:
1. Proveer al menos 1 endpoint para crear o actualizar recursos. Ejemplo, para crear
un usuario: POST /api/usuarios; para actualizar una casa PUT /api/casas/:idCasa
2. Proveer 1 endpoint para obtener 1 recurso (ejemplo: obtener 1 usuario por id). En
caso de no encontrarse, el servidor debe devolver un 404.
3. Proveer 1 endpoint para buscar varios recursos, permitiendo fijar la cantidad de
elementos. Ejemplo: GET /api/mascotas?cantidad=10&from=0 (trae las primeras
10 mascotas luego, si el usuario quiere las siguientes 10 mascotas, GET
/api/mascotas?cantidad=10&from=10)
4. Cada endpoint debe validar los datos de entrada. Por ejemplo, si para crear una
mascota es necesario el nombre de ella, el servidor debe validar que el campo
“nombre” sea enviado y sea del tipo esperado (string). De lo contrario, deberá
devolver un 400 explicando lo sucedido.
5. El servidor debe poder “servir” los archivos html/css/javascript desarrollados en el
TPO2.
6. Actualizar los archivos del TPO 2 para poder consumir la API desarrollada en este
TP.
7. De ser necesario, el servidor puede consumir datos de otro servidor REST (por
ejemplo, consumir los datos del clima de una API abierta)
a. De hacer esto, deberá consumir y guardar en una variable global los datos y
pedir nuevamente datos al servidor si pasaron más de N minutos, a fin de no
cargar la API externa.
b. Si usa una api. considerar al leer los nuevos datos de no pisar todo, si no
actualizar (Agregar o borrar) datos que tenga localmente.
8. Nota: Se debe entregar una colección de Postman para poder probar la REST API
Consideraciones:
1. Preferentemente, el servidor será desarrollado con Express.js. En caso negativo,
deberá realizarse en Node directamente
2. Los endpoints deberán siempre empezar con /api
3. No es necesario tener una base de datos. Los recursos pueden estar almacenados
en memoria (usando arreglos/listas, o la estructura de datos que consideren
oportuna)

---

## Requerimientos:

- node>=18
```bash
        # instalacion NVM
        $ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
        # install node v18.12.1
        $ nvm install 18.12.1
        # use node version v18.12.1
        $ nvm use v18.12.1
```
---

## Uso

1. Clone el repositorio
```bash
#Clone con HTTPS
$ git clone https://github.com/AlanizGustavo/tp3-LabProgramacion.git
#Clone con SSH
$ git clone git@github.com:AlanizGustavo/tp3-LabProgramacion.git
```
2. Ejucute el comando `npm install`.
```bash
$ npm install
```
3. Cree un archivo `.env` siguiendo el formato del archivo `example.env`.
4. Para la variable IMGBB_API_KEY necesitaras seguir los siguientes pasos:
    1. Ir a <https://api.imgbb.com/>.
    2. Crear una cuenta si no tienes una.
    3. Crear una API key y copiarla como asignacion de la variable mencionada anteriormente.
5. Para la variable MONGODB_URI necesitaras seguir los siguientes pasos:
    1. Ir a <https://www.mongodb.com/cloud/atlas/register>   
    2. Crear una cuenta si no tienes una
    3. Ir a Quickstart
    4. Crear un nombre de usuario and password
    5. Ir a deployment/ database
    6. Ir a "connect your application"
    7. Copiar el "application code" and remplazar el "password" y "username"
6. Ejecute el siguiente comando para iniciar la aplicacion.
```bash
$ npm run start
```

---
### Annex - Documentation

- [***Mongo***: ](https://www.mongodb.com/es) MongoDB
- [***Mongoose:***](https://mongoosejs.com/) Mongoose es una librería para Node.js que nos permite escribir consultas para una base de datos de MongooDB
- [***Express-validator:***](https://express-validator.github.io/docs/) Es un conjunto de middlewares que envuelve las funciones de validación y sanitización de validator.js.
- [***Multer:***](https://www.npmjs.com/package/multer) Middleware para el manejo de multipart/form-data que son usados principalmente para la subida de archivos
- [***Informe de Laboratorio:***](https://www.canva.com/design/DAFM4xAwIaU/X6FzGLwGumu_VRPwEPPpRw/view?utm_content=DAFM4xAwIaU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) Informe de laboratorio 2022
- [***Wireframe:***](https://whimsical.com/caacep-index-9dZySwoLNUY7cYUAjTa2kn) Wireframe utilizado para una maquetacion inicial del proyecto