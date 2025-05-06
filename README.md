# Super proyecto aca bien machín

-----------

## Instrucciones de instalacion

1. Tener instalados `nodejs` y `XAMPP`
2. Conseguir el nombre de usuario y contraseña para la base de datos de MySQL

3. Con el proyecto abierto en `Visual Studio Code`, ejecutar en la terminal:

    - `npm install`: Instala las librerías (`express` para el servidor, `prisma` para la base de datos)
    - `npx prisma generate`: genera el cliente de `prisma`, paso importante para que pueda acceder a la base de datos

4. Crear un archivo `.env` en la raíz del proyecto (hasta afuera, dentro de ninguna carpeta extra)

    - `DATABASE_URL="mysql://USUARIO:CONTRASEÑA@localhost:3306/eml`

5. Generar la base de datos

    - `prisma` es capaz de generar los archivos SQL y las tablas de manera automatica, habiendo escrito el archivo `
      prisma/schema.prisma` (el cual fue generado con el SQL que hizo ceci)
    - Para replicar la base de datos segun el esquema de Prisma, hay que correr
      
      - `npx prisma db push`
    - Para comprobar, conectense a la base con Heidi y verifiquen que las tablas se hayan creado correctamente