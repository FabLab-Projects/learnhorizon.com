1. primero copias y pegas el microserviceo default dentro de apps
2. Ahora dentro de nest-cli.json copiamos y pegamos dentro del json los projectss segun los microservicios que tengamos cambiando el nombre de los microservicioss de "schemify-microservice-nestjs" al que corresponda
3. dentro del tsconfig.app.json dentro del microservicio debemos cambiar el "outDir" por el nombre del microservicio que corresponde
4. Modificamos segun nuestros interese las configuraciones del esquema de prisma dentro del microservicio en la ruta `/prisma/schema.prisma` 
5. Ahora generamos npx prisma generate --schema=apps/usuarios/prisma/schema.prisma
6. Una vez levantada la base de datos ahora generamos las migraciones con npx prisma migrate deploy --schema=apps/usuarios/prisma/schema.prisma --env-file=.env
7. ahora debemos dentro de nuestor directorio de docker en databases coopiar y pegar la base de datos con sus respectivas variables de entorno, y un ejemplo de esta, debemos ejecutar desde el directorio root (./) el siguiente comando para ejecutar el contenedor de nuestras bases de datos docker compose -f docker/databases/usuarios/docker-compose.usuarios-db.yml --env-file docker/databases/usuarios/.env up -d
bajarlo docker compose -f docker/databases/usuarios/docker-compose.usuarios-db.yml --env-file docker/databases/usuarios/.env down

8. Ahora dentro de nuestro directorio libs/src/services, creamos el directorio de nuestro microservicio y dentro creamos el NOMBRE.proto
9.  Ahora compilamos nuestro proto con el siguiente comando : 
```bash
npx protoc --plugin=./node_modules/.bin/protoc-gen-ts_proto.cmd --ts_proto_out=./ --ts_proto_opt=nestJs=true ./libs/proto/src/services/servicio_usuarios/usuario.proto
```
1.  Dentro del microservicio en /src/main.ts debemos configuar la ruta a nuestro proto
2.  Dentro del mismo main configutamos el nombre que tendra el microservicio para consumir ante kafka
3.  

configurar todo lo relacionado a la base de datos antes