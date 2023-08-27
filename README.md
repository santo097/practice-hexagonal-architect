Hola el README es con el fin de documentar los avances correspondientes para la implementacion de la arquitectura hexagonal 

Version 0.1 -> Creacion de proyecto e instalacion de dependencias
1. Se instalaron las siguientes dependencias para el funcionamiento del microservicio
 - dotenv -> para manejo de variables de entorno
 - express -> Framework para el manejo de la capa de infraestructura
 - mongodb -> base de datos no relacional conectada desde la capa de infraestructura 
 - mongoose -> permite la conexion de nuestra base de datos 

2. Se instalaron las siguientes dependencias para el ambiente de desarrollo con el fin de realizar cambios
 - @types/express 
 - @types/jest
 - @types/node
 - @typescript-eslint/eslint-plugin
 - @typescript-eslint/parser
 - eslint
 - jest
 - nodemon
 - rimraf
 - supertest
 - ts-jest
 - ts-node
 - typescript

version 0.2 -> Configuracion de typescript en el proyecto 

1. Se crea un archivo tsconfig.json para la configuracion de la lectura de archivos typescript el cual tiene formato .ts

version 0.3 -> Configuracion de nodemon para la escucha de cambios en el proyecto

1. Se crea un archivo nodemon.json para configurar que extension, directorio y comando para ejecutar el proyecto

version 0.4 -> Creacion de directorios para el ambiente de desarrollo usando JEST para el tema de pruebas

1. Se crea la carpeta test para consolidad un ambiente de pruebas en la carpeta llamada tests.

2. Se crea un archivo jest.config.ts para la configuracion del ambiente de pruebas.

version 0.5 -> Instalacion y configuracion de la dependencia ESlint 

1. Se crea el archivo .eslintrc.json 

2. Se configura con normas generales para y lectura de de archivos typescript

Version 0.6 

1. Se crea un modulo llamado Shared el cual tiene servicios y tecnologias 
 - Domain: Contiene las entidades que seran manejadas en la tablas
 - infrastructure: Servicios con los cuales emplearemos dentro de los otros modulos

Version 0.7 -> Creacion de la estructura del modulo users
 
1. Se crean las siguientes carpetas: 
- application
- domain
- infrastructure

2. Se crean los siguientes archivos
    a. application:
     -  WelcomeMessageSender.ts
    b. domain:
     -  User.ts
     -  UserRepository.ts

Version 0.8 -> Se consolida e implementa lo necesario para el modulo users

1. Se implementa el modulo de infrastructure 

2. Se implementar los componentes de la capa de datos en el domain

3. Se implementar los compoenentes de la capa de servicios que interactura con el domain

Version 0.9 -> Se implementa variables de entorno entrega beta de hexagonal architecture FASE 1