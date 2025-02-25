# Test_Dev

Este proyecto es una aplicación de React que muestra una lista de modelos de autos y detalles de cada uno. Utiliza Bootstrap para el diseño y contexto para gestionar el estado global de los autos.

Este proyecto fue desarrollado como parte de un proceso de selección.


## Para Correr el Proyecto Localmente

1. Asegúrate de tener Node.js y npm instalados en tu máquina.
3. Dentro de la raiz del proyecto crea un archivo `.env` con las siguiente `variable de entorno`:
   ```bash
    REACT_APP_API_URL = <RUTA_API>
    ```
4. Ejecuta `npm install` para instalar las dependencias.
5. Usa `npm start` para lanzar la aplicación en el entorno de desarrollo local. Esto iniciará el servidor de desarrollo y podrás ver la aplicación en tu navegador en la siguiente URL:
   ```bash
    http://localhost:3000
   ```

## Estructura del Proyecto
Este es un proyecto basado en componentes, lo que significa que puedes fácilmente extenderlo y agregar nuevas funcionalidades sin afectar el rendimiento.
- **src/**: Contiene todos los archivos fuente de la aplicación.
  - **components/**: Componentes reutilizables, como el Navbar y el Footer.
  - **context/**: Contiene el proveedor de contexto `CarsContext`.
  - **pages/**: Componentes de las diferentes páginas de la aplicación, como `Home` y `ModelDetails`.
  - **App.js**: Componente principal que integra todos los elementos de la aplicación.
