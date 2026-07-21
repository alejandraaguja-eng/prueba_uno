# Curso de Playwright con JavaScript

Proyecto de práctica del curso de automatización con Playwright, Git, GitHub y Jenkins.

## Requisitos

- Node.js 20 o superior
- Git
- Jenkins con el plugin **NodeJS** y una instalación llamada `NODE_JS`

## Ejecución local

```powershell
cd Curso
npm.cmd ci
npx.cmd playwright install chromium
npm.cmd test
```

Algunas pruebas del curso utilizan sitios externos que pueden no estar disponibles. La comprobación de integración continua usa una prueba local e independiente:

```powershell
cd Curso
npm.cmd run test:ci
```

## Jenkins

El archivo `Jenkinsfile` define el pipeline. En un Job tipo **Pipeline**:

1. Seleccionar **Pipeline script from SCM**.
2. Elegir **Git** e ingresar la URL de este repositorio.
3. Usar la rama `*/main`.
4. Dejar `Jenkinsfile` como ruta del script.
5. Guardar y ejecutar **Build Now**.

El pipeline instala dependencias, descarga Chromium, valida la sintaxis, ejecuta la prueba CI y publica el reporte HTML y los resultados JUnit.

La trazabilidad de las clases está en [PROGRESO.md](PROGRESO.md).
