# Manual tecnico y pedagogico del curso Playwright con JavaScript

Version inicial de trabajo: 0.1.

Estado: borrador en construccion.

## Portada

**Nombre del curso:** Curso Playwright con JavaScript en espanol.

**Instructor:** Rodrigo Villanueva, segun la transcripcion disponible.

**Autor de documentacion:** Codex, a partir de videos, transcripcion y proyecto local proporcionados por el usuario.

**Tecnologias principales:** JavaScript, Node.js, npm, Playwright, Visual Studio Code, CMDER, Git, GitHub, Jenkins, dotenv, xlsx.

**Sistema operativo observado:** Windows.

**Nivel objetivo:** principiante absoluto con explicaciones utiles para nivel intermedio.

## Control de versiones

| Version | Fecha | Cambio realizado | Responsable |
| ------- | ----- | ---------------- | ----------- |
| 0.1 | 2026-07-09 | Inventario inicial, mapa general y comienzo de la sesion 1 | Codex |

## Introduccion general

Este manual reconstruye el curso de Playwright con JavaScript a partir de los materiales disponibles en la maquina del usuario. El objetivo es que una persona pueda reproducir el proyecto sin volver a mirar los videos, entendiendo que hace cada comando, que archivo se crea, por que se modifica y como verificar el resultado.

> **Nota:** La transcripcion contiene errores tipicos de reconocimiento de voz. Por ejemplo, aparece "Playground" o "dramaturgo de Microsoft", pero el proyecto, los comandos y el contexto corresponden a Playwright.

## Arquitectura general del curso

```text
Usuario
  ↓
Visual Studio Code + Terminal
  ↓
Node.js + npm
  ↓
Playwright Test
  ↓
Archivos .spec.js
  ↓
Clase FJ con funciones reutilizables
  ↓
Navegador Chromium automatizado
  ↓
Reportes, screenshots, videos y trace
  ↓
Git/GitHub/Jenkins para integracion continua
```

## SESION 1: Introduccion

### 1. Informacion de la sesion

| Campo | Detalle |
| ----- | ------- |
| Fuente principal | `Resumen curso playwright.docx` |
| Seccion detectada | `1. Introduccion` |
| Video local relacionado | No confirmado. Los videos locales empiezan con ejercicios ya practicos. |
| Duracion | Informacion no mostrada o no confirmada en el material del curso. |
| Tema | Presentacion del curso, objetivos, tecnologias y alcance general |
| Resultado esperado | Comprender que se construira durante el curso y que herramientas se usaran |
| Archivos utilizados | No se crean archivos en esta sesion |
| Conocimientos previos | Ninguno obligatorio, aunque el instructor menciona que conocer JavaScript ayuda |

### 2. Que ensena el instructor

El instructor presenta el curso como una formacion de Playwright con JavaScript desde cero. Explica que el curso cubrira la instalacion de Node.js, la configuracion del entorno, automatizacion de paginas demo, uso de Playwright con JavaScript, Page Object Model, validaciones, manejo de errores, formularios, combos, radio buttons, checkboxes, paralelizacion, parametros, carga desde Excel, Git, GitHub y Jenkins.

### 3. Para que sirve esta sesion

Esta sesion sirve para ubicar el alcance completo del curso. No busca que el estudiante escriba codigo todavia, sino que entienda que herramientas necesitara y que tipo de proyecto terminara construyendo.

### 4. Conceptos fundamentales

#### Playwright

**Explicacion sencilla:** Playwright es una herramienta que permite controlar un navegador automaticamente, como si una persona hiciera clics, escribiera texto y verificara resultados.

**Explicacion tecnica:** Playwright es un framework de automatizacion end-to-end creado por Microsoft. Permite ejecutar pruebas sobre navegadores como Chromium, Firefox y WebKit.

**Ejemplo practico:** En el proyecto local, Playwright ejecuta archivos como `Input1.spec.js`, `Radio.spec.js`, `Actions.spec.js` y `Parametros.spec.js`.

#### Node.js

**Explicacion sencilla:** Node.js permite ejecutar JavaScript fuera del navegador.

**Explicacion tecnica:** Node.js es un entorno de ejecucion que incluye acceso a npm, el gestor de paquetes usado para instalar Playwright y librerias como `dotenv` y `xlsx`.

**Ejemplo practico:** El proyecto usa `package.json` y `package-lock.json`, que son archivos propios de proyectos Node.js.

#### Page Object Model

**Explicacion sencilla:** Page Object Model es una forma de organizar el codigo para no repetir las mismas acciones muchas veces.

**Explicacion tecnica:** En lugar de escribir directamente `page.locator(...).click()` en cada prueba, se crean metodos reutilizables dentro de una clase. En este curso esa clase se llama `FJ` y se encuentra en `Curso\tests\Funciones_curso.js`.

**Ejemplo practico:**

```javascript
const f = new FJ(page);
await f.openURL("https://demoqa.com/buttons")
await f.click_dinamico("Click Me",tp)
```

#### Integracion continua

**Explicacion sencilla:** Integracion continua significa ejecutar pruebas automaticamente cuando el codigo cambia.

**Explicacion tecnica:** El instructor menciona Git, GitHub y Jenkins como herramientas para versionar el proyecto y ejecutarlo en un servidor de automatizacion.

### 5. Preparacion

En esta sesion no se instala nada todavia. La preparacion consiste en conocer las herramientas que se instalaran despues:

- Node.js.
- Visual Studio Code.
- CMDER o terminal.
- Playwright.
- Git.
- GitHub.
- Jenkins.

### 6. Procedimiento paso a paso

1. Escuchar la presentacion del instructor.
2. Identificar que el curso se trabajara con JavaScript y Playwright.
3. Reconocer que Node.js sera necesario antes de instalar Playwright.
4. Entender que las pruebas se organizaran progresivamente:
   - pruebas simples,
   - formularios,
   - validaciones,
   - Page Object Model,
   - acciones avanzadas,
   - parametros,
   - integracion continua.
5. Confirmar que el estudiante trabajara en Windows, segun lo observado en los videos y rutas del proyecto.

### 7. Comandos utilizados

No se identifican comandos ejecutados durante la seccion 1 de la transcripcion.

### 8. Codigo creado o modificado

No se crea codigo en esta sesion.

### 9. Cambios respecto de la sesion anterior

No aplica. Es la primera sesion detectada en la transcripcion.

### 10. Resultado esperado

Al finalizar esta sesion, el estudiante debe poder explicar con sus palabras:

- Que Playwright automatiza navegadores.
- Que JavaScript sera el lenguaje del curso.
- Que Node.js y npm seran necesarios.
- Que el proyecto crecera desde pruebas simples hasta POM, parametros, Excel y Jenkins.

### 11. Prueba practica

No hay prueba practica en esta sesion.

### 12. Errores frecuentes

| Error | Causa probable | Solucion |
| ----- | -------------- | -------- |
| Confundir Playwright con "Playground" | Error de transcripcion automatica | Usar el nombre correcto: Playwright |
| Pensar que Node.js es un framework de pruebas | Node.js es mencionado al inicio y puede confundirse | Recordar que Node.js ejecuta JavaScript; Playwright es la herramienta de pruebas |
| Creer que Jenkins se usa desde el principio | Jenkins se menciona en la introduccion | Jenkins aparece mas adelante como parte de integracion continua |

### 13. Recomendaciones del instructor

El instructor recomienda tomar o repasar JavaScript si el estudiante no conoce nada del lenguaje. Tambien presenta el curso como un recorrido desde cero.

### 14. Buenas practicas adicionales

> **Buena practica adicional:** Antes de instalar herramientas, conviene crear una carpeta de trabajo estable, por ejemplo `C:\Users\User\Documents\PLAYWRIGHT_JAVASCRIPT`, para evitar perder archivos o mezclar proyectos.

### 15. Resumen de la sesion

La sesion 1 presenta el alcance del curso. No se escribe codigo, pero se establece que el proyecto final incluira automatizacion con Playwright, organizacion con Page Object Model, validaciones, parametros, Excel, Git, GitHub y Jenkins.

### 16. Lista de verificacion

- [ ] Entendi que el curso usa Playwright con JavaScript.
- [ ] Entendi que Node.js sera necesario.
- [ ] Identifique que se usara Visual Studio Code.
- [ ] Entendi que el curso avanzara hacia Page Object Model.
- [ ] Entendi que mas adelante se usaran Git, GitHub y Jenkins.

### 17. Preparacion para la siguiente sesion

Para la siguiente sesion debe quedar claro que el primer paso tecnico sera instalar o verificar Node.js en Windows.

