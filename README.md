
# EasyForm

**EasyForm** es una aplicación que permite a los usuarios crear cuentas y acceder a sus perfiles, donde pueden crear formularios cuyas respuestas quedan almacenadas. Para acceder a un formulario específico, los usuarios deben introducir un valor numérico único en la barra de búsqueda. Una vez completado, el formulario aparece en la sección "Mis formularios", donde se puede acceder a las respuestas y, si es necesario, modificar la información.

## Inicio de Sesión y Registro

Al ingresar, los usuarios se encuentran con la estructura básica para iniciar sesión o registrarse. Una vez autenticados, se presenta la siguiente vista:

![HomeView](https://res.cloudinary.com/dwdosvfpx/image/upload/v1694137132/Captura_nyxqtj.png)

![HomeDetail](https://res.cloudinary.com/dwdosvfpx/image/upload/v1694137432/Captura_uh0xn4.jpg)

## Generación Dinámica de Formularios

**EasyForm** genera formularios de manera dinámica, teniendo en cuenta diferentes casos para cada tipo de opción e input, como checkbox, select y texto. Cada formulario se crea como un archivo JSON y contiene opciones agrupadas, cada una identificada con un tipo (type) específico. En el frontend, estos formularios se renderizan siguiendo una estructura común, pero adaptada según el tipo especificado en el archivo JSON.

## Uso de la App

**EasyForm** esta deployado para que puedas acceder en [EasyForm App](https://easyform.onrender.com/) pero si deseas iniciar este proyecto localmente necesitas descargar el repositorio, correr "npm i" para instalar las dependencias y luego cambiar las rutas en las Actions, vas a encontrar comentadas muchas rutas de localhost, debes descomentarlas y comentar las que llevan al back que esta tambien deployado en [EasyForm Backend](https://formserver-t5jb.onrender.com/forms). Alli puedes encontrar los formularios disponibles que van del 1 al 25, puedes crear mas formularios utilizando la ruta POST form que hay en el repositorio de backend.

Un saludo! Fabri V.
