# Creando una Red Social

## Índice

* [1. INTRODUCCIÓN](#1-introducción)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Consideraciones generales](#3-consideraciones-generales)
* [4. Historias de Usuario](#4-historias-de-usuarios)

## 1. Introducción

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes
sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos
vivir sin ellas. Hay redes sociales de todo tipo y para todo tipo de intereses. 

## 2. Resumen del proyecto

MusiClub es una red social creada para conectar gente a través de su gusto por la música. 

Es una Single-page Application (SPA) que cuenta con una pantalla de inicio que te da la opción de registrarte o iniciar sesión, en ambas opciones puedes ligar tu cuenta de google para acceder. Una vez iniciada la sesión te encontrarás el muro de las publicaciones donde aparecerá el email del usuario para identificarse en la parte superior de la página, encontraras un contenedor donde puedes escribir un post y debajo podrás ver las diferentes publicaciones creadas con respectivo correo de su autor para identificarlo. Podrás dar y quitar like a las publicaciones y también podrás editar y eliminar tus publicaciones.

[Pantalla de inicio](musiClubinicio.PNG)

[Pantalla de registro](musiClubregistro.PNG)

[Pantalla de inicio de sesión](musiClubinicioSesion.PNG)

[Pantalla de registro](musiClubmuro.PNG)

### Los objetivos generales de este proyecto fueron los siguientes

* Desarrollar una SPA con temática de red social
* Aplicar los conceptos de responsividad en el desarrollo de las vistas (templates)
* Implementar un router para la navegación entre las diferentes vistas de la aplicación
* Emplear un servicio externo para la persistencia de datos de la aplicación (Firebase)
### Firebase
- **Firebase Auth**
- **Firestore**

## 3. Consideraciones generales

Se utilizó [Vite](https://es.vitejs.dev/) para empaquetar los módulos y arrancar
el servidor de desarrollo, el cual provee archivos utilizando
la estrategia `Hot Module Replacement`, esto significa que al hacer cambios en los archivos que estén siendo
servidos, el navegador automáticamente se actualizará sin tener que refrescar
y volver a cargar todo el sitio.

### Pégina web responsive

### Consideraciones del comportamiento de la interfaz de usuario (UI)

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña es secreto.
* Comportamiento:
  - Si hay errores, se mostra mensajes descriptivos del error

#### Muro/timeline

* Comportamiento:
  - Publicar un _post_.
  - Dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, se permite editar el texto y luego guardar los cambios.
  - Al guardar los cambios cambia de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página se pueden ver los textos editados.

### Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas.(SPA).
* Alterar y persistir datos. Los datos que agregues o modifiques persisten a lo largo de la aplicación.

### Consideraciones técnicas UX

* Se realizó una encuesta mediate un formulario de google para obtener la opinion de posibles usuarios.
* Se realizaron prototipos de baj y alta fidelidad.
* Se siguieron los lineamientos de Visual design.

## 4. Historias de usuario

### Diseño de la Interfaz de Usuario (prototipo de baja y alta fidelidad)

[Prototipo de baja fidelidad](bajaFid1.jpg)

[Prototipo alta fidelidad 1](pantalla_1.jpg)

[Prototipo alta fidelidad 2](pantalla_2.jpg)

[Prototipo alta fidelidad 3](muro.png)
