# Video 8 - Jenkins, NodeJS y Git

## Tema del video

El instructor explica la preparacion del entorno para integracion continua:

- Instalacion y desbloqueo inicial de Jenkins.
- Instalacion de plugins sugeridos.
- Creacion del primer usuario administrador.
- Configuracion global de herramientas en Jenkins.
- Configuracion de NodeJS dentro de Jenkins.
- Instalacion/verificacion de Git.
- Configuracion global de usuario y correo en Git.
- Inicializacion de un repositorio con `git init`.

## Configuracion mostrada

En Jenkins:

```text
Manage Jenkins
Global Tool Configuration
NodeJS
Name: NODE_JS
Install automatically
Version: NodeJS 19.6.0
```

En consola:

```bash
git --version
git config --global user.name "Rodrigo"
git config --global user.email "rodrigodrupal1@gmail.com"
git init
```

## Adaptacion para este proyecto

En esta maquina Git ya esta instalado:

```bash
git version 2.52.0.windows.1
```

No se aplico `git config --global` con los datos del profesor porque eso cambiaria la identidad Git global de este equipo. Para usar tus propios datos, reemplaza nombre y correo:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-correo@example.com"
```

Para iniciar Git especificamente en el proyecto del curso:

```bash
cd C:\Users\User\Documents\PLAYWRIGHT_JAVASCRIPT\Curso
git init
```

## Estado

Este video no agrega pruebas nuevas de Playwright. Es una preparacion de entorno para usar Jenkins/Git/GitHub mas adelante.
