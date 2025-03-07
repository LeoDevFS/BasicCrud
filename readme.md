# Lista de contactos. Ejercicio de CRUD con React, Node.js (Express) y MongoDB

Este proyecto consiste en una aplicación web de gestión de contactos utilizando React para el frontend, Node.js con Express para el backend, y MongoDB como base de datos.

Tendremos dos repositorios, uno con el Backend (API con los endpoints) y otro con el Frontend

## Instrucciones

1. Configurar la conexión a la base de datos MongoDB. Pon tu BBDD sin restricciones para que luego podamos corregirla cuando nos pases la `MONGO_URI`
2. El modelo de datos será sencillo 

- Nombre completo
- Telefono
- Email

3. En el back tendremos el CRUD completo para poder acceder desde el FRONT
4. Desde el front tendremos la ruta principal `/` donde estarán todos nuestros contactos que hayamos creado
5. Desde el front tendremos una ruta `/create` donde podremos crear nuevos contactos
6. Desde el front tendremos rutas individuales donde podremos acceder a cada uno de los contactos, pudiéndolos ver, actualizar y eliminar.

## Estructura del Proyecto

### Backend

- Contiene el código del servidor Node.js con Express.
- `index.js` es el punto de entrada del servidor.
- `/routes` contiene los archivos de rutas para el CRUD de contactos.
- `/controllers` contiene los controladores para manejar las operaciones CRUD.
- `/models` contiene los modelos de datos de la aplicación.

### Frontend

- Contiene el código de React.
- `/src` contiene los archivos fuente de la aplicación React.
- `/src/components` contiene los componentes de React para la interfaz de usuario.

Puedes crear más archivos o carpetas tanto en el front como en el back si lo ves necesario.

## Implementación del CRUD

### Backend

1. **Crear Rutas**: Define las rutas en `/routes` para realizar las operaciones CRUD (GET, POST, PUT, DELETE) en los contactos.

2. **Crear Controladores**: Implementa los controladores en `/controllers` para manejar las solicitudes de las rutas y operaciones CRUD en la base de datos MongoDB.

3. **Definir Modelos**: Define el modelos de datos en `/models` para representar la estructura de los contactos en la base de datos.

### Frontend

1. **Crear Componentes**: Crea componentes en `/src/components` para mostrar la interfaz de usuario, como la lista de contactos, el formulario de añadir/editar contactos, etc.

3. **Actualizar Interfaz de Usuario**: Actualiza la interfaz de usuario para mostrar la información de los contactos (en general `/`), permitir la creación (`/create`). Actualización y eliminación de contactos en su página individual.

## Uso de la aplicación

- Ver todos los contactos en una sola página.
- Añadir un nuevo contacto.
- Ver detalles de un contacto individual.
- Actualizar información de un contacto.
- Eliminar un contacto.

