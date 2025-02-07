# Sistema de Gestión de Alumnos

Este proyecto consiste en un sistema para gestionar alumnos, grados y secciones. Está compuesto por un frontend desarrollado en React y un backend desarrollado en .NET.

---

## **Tecnologías Utilizadas**
Node.js (para el frontend en React).

.NET SDK (para el backend en .NET).

---

1. Backend (API en .NET)
Pasos:
Clona el repositorio:

bash
Copy
git clone 
cd tu-repositorio/Backend
Configura la base de datos:

Abre el archivo appsettings.json y configura la cadena de conexión (ConnectionStrings) para que apunte a tu instancia a la base de datos.

Ejemplo:

json
"ConnectionStrings": {
  "DefaultConnection": "Server=TU_SERVIDOR;Database=NombreDeLaBaseDeDatos;User Id=TU_USUARIO;Password=TU_CONTRASEÑA;"
}


Levanta la API:

Ejecuta el proyecto:
La API estará disponible en https://localhost:7029

2. Frontend (React)
Pasos:
Navega a la carpeta del frontend:

cd ../Frontend
Instala las dependencias:
npm install



Inicia la aplicación:
npm run dev

## **Funcionalidades**

### Backend
- **Alumnos**:
  - Crear un nuevo alumno.
  - Listar todos los alumnos.
  - Consultar alumnos por grado.
- **Grados**:
  - Crear un nuevo grado.
  - Listar todos los grados.
- **Secciones**:
  - Crear una nueva sección.
  - Listar todas las secciones.

### Frontend
- **Alumnos**:
  - Formulario para crear un nuevo alumno.
  - Lista de todos los alumnos con opción de búsqueda.
  - Filtrado de alumnos por grado.
- **Grados**:
  - Formulario para crear un nuevo grado.
- **Secciones**:
  - Formulario para crear una nueva sección.

---

## **Resumen de Endpoints**

A continuación se detallan los endpoints disponibles en el backend:

| Acción                     | Método | URL                        |
|----------------------------|--------|----------------------------|
| Crear Grado                | POST   | `/crear-grado/`            |
| Crear Sección              | POST   | `/crear-seccion/`          |
| Crear Alumno               | POST   | `/crear-alumno/`           |
| Listar Todos los Alumnos   | GET    | `/listar-alumnos/`         |
| Consultar Alumnos por Grado| GET    | `/consultar-alumnos-grado/{idGrado}/` |
| Listar Todos los Grados    | GET    | `/listar-grados/`          |
| Listar Todas las Secciones | GET    | `/listar-secciones/`       |


## **Pruebas**
**Listado de alumnos**

![image_alt](https://github.com/ManfredoPerez/Evaluaci-n.NetReact/blob/feature/ElfegoPerez/frontend/src/assets/Captura%20de%20pantalla%202025-02-07%20164120.png?raw=true)

**Agregar alumnos**

![image_alt](https://github.com/ManfredoPerez/Evaluaci-n.NetReact/blob/feature/ElfegoPerez/frontend/src/assets/Captura%20de%20pantalla%202025-02-07%20164132.png?raw=true)

**Consultar alumno por grado**

![image_alt](https://github.com/ManfredoPerez/Evaluaci-n.NetReact/blob/feature/ElfegoPerez/frontend/src/assets/Captura%20de%20pantalla%202025-02-07%20164145.png?raw=true)

**Pruebas en Swagger**

![image_alt](https://github.com/ManfredoPerez/Evaluaci-n.NetReact/blob/feature/ElfegoPerez/frontend/src/assets/Captura%20de%20pantalla%202025-02-07%20164256.png?raw=true)

