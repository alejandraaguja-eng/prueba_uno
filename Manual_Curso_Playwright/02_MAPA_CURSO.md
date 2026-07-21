# Mapa general del curso

Este mapa combina tres fuentes:

- Videos locales disponibles.
- Transcripcion DOCX con secciones numeradas.
- Proyecto local reconstruido en `Curso`.

## Matriz de cobertura por videos locales

| Sesion | Tema principal | Subtemas | Archivos utilizados | Comandos | Codigo creado o modificado | Resultado | Evidencia |
| ------ | -------------- | -------- | ------------------- | -------- | -------------------------- | --------- | --------- |
| V01 | Primeros ejercicios Playwright | Proyecto inicial, Codegen, input, radio buttons | `Codegen.spec.js`, `Demo2.spec.js`, `example.spec.js`, `Input1.spec.js`, `Input2.spec.js`, `Radio.spec.js` | `npm install`, `npx playwright test`, comandos Playwright de ejecucion individual | Specs iniciales | Proyecto con pruebas base | `PROGRESO.md`, codigo local, fotogramas video 1 |
| V02 | Configuracion Playwright | `playwright.config.js`, reportes, trace, video, screenshot | `playwright.config.js`, `playwright.config_base.js`, `package.json` | `npx playwright test`, `npx playwright show-report` | Configuracion del runner | Reportes HTML y capturas configuradas | `PROGRESO.md`, codigo local, fotogramas video 2 |
| V03 | Page Object Model inicial | Clase `FJ`, metodos reutilizables, POM uno y dos | `Funciones_curso.js`, `Funciones.js`, `PO_UNO.spec.js`, `PO_DOS.spec.js` | `npm.cmd test -- --list`, ejecucion de specs | Clase `FJ` inicial | Specs POM detectados por Playwright | `PROGRESO.md`, codigo local |
| V04 | Validaciones y manejo de errores | `expect`, `expect.soft`, `try/catch`, captura de valores | `Funciones_curso.js`, `PO_DOS.spec.js` | `node --check`, `npx playwright test PO_DOS.spec.js` | Nuevos metodos de validacion | POM ampliado | `PROGRESO.md`, codigo local |
| V05 | Combos y acciones de mouse | Selects, multiples, clicks dinamicos, mouse over | `Actions.spec.js`, `PO_TRES.spec.js`, `Funciones_curso.js`, `playwright.config.js` | `npx playwright test Actions.spec.js` | Metodos de combos y clicks | Acciones de UI automatizadas | `PROGRESO.md`, codigo local |
| V06 | Acciones avanzadas y paralelizacion | Drag/drop, portapapeles, upload, calendario, ciclo `for` | `Actions.spec.js`, `Paralelo.spec.js`, `CURSOS.txt`, `Funciones_curso.js` | `npx playwright test Actions.spec.js -g "Drag and Drop"`, `npm.cmd test -- --list` | Nuevos metodos y 50 pruebas paralelas | 72 pruebas detectadas; `Drag and Drop` verificado | `PROGRESO.md`, codigo local |
| V07 | Parametros, variables y Excel | Arrays, `.env`, `dotenv`, `xlsx`, `Data.xlsx` | `Parametros.spec.js`, `.env`, `Data.xlsx`, `package.json`, `playwright.config.js` | `npm install dotenv xlsx`, `npm.cmd test -- --list`, `npx playwright test Parametros.spec.js --list` | Spec de parametros y archivo Excel | 76 pruebas detectadas | `PROGRESO.md`, codigo local |
| V08 | Jenkins, NodeJS, Git y GitHub | Jenkins local, NodeJS tool, `git --version`, `git config`, `git init` | `Jenkins_Git_Video8.md` | `git --version`, `node --version`, `npm.cmd --version`, `git init` | No agrega specs Playwright | Guia de entorno CI creada | `PROGRESO.md`, capturas video 8 |

## Matriz de secciones transcritas

| Seccion | Tema principal | Subtemas | Archivos utilizados | Comandos | Codigo creado o modificado | Resultado | Evidencia |
| ------- | -------------- | -------- | ------------------- | -------- | -------------------------- | --------- | --------- |
| 1 | Introduccion | Objetivo del curso, Playwright con JavaScript, POM, validaciones, Jenkins/GitHub | No aplica | No aplica | No aplica | Vision general del curso | `Resumen curso playwright.docx` |
| 2 | Node.Js 2023 | Instalacion de Node.js en Windows, verificacion de version | No confirmado | `node --version`, posible ayuda de Node | No aplica | Node.js instalado | `Resumen curso playwright.docx` |
| 3 | Instalando Visual Stude Code | Descarga e instalacion de VS Code, extensiones | No confirmado | No confirmado | No aplica | VS Code instalado | `Resumen curso playwright.docx` |
| 5 | Obtener Ruta CMDER | Ruta de CMDER, acceso por consola | No confirmado | No confirmado | No aplica | Terminal preparada | `Resumen curso playwright.docx` |
| 6 | Configurar Visual Stude Code y Cmder | Integracion de terminal en VS Code | No confirmado | No confirmado | Configuracion de terminal | VS Code usando CMDER | `Resumen curso playwright.docx` |
| 7 | Instalacion, Prueba Uno | Instalacion inicial de Playwright | Proyecto inicial | Comandos Playwright pendientes de detallar | Primer test | Prueba inicial | `Resumen curso playwright.docx` |
| 9 | Instalacion desde Visual de Playwright | Instalacion desde VS Code | Proyecto inicial | Comandos Playwright pendientes de detallar | Configuracion generada | Proyecto Playwright creado | `Resumen curso playwright.docx` |
| 10 | Ejemplo desde Codegen | Uso de Codegen | `Codegen.spec.js` | `npx playwright codegen` probable; pendiente confirmar | Test generado | Script grabado | `Resumen curso playwright.docx`, proyecto local |
| 11 | Fill,Type, Only | Llenado de campos, `test.only` | `Input1.spec.js`, `Input2.spec.js` | `npx playwright test` | Pruebas con inputs | Automatizacion de formularios | `Resumen curso playwright.docx`, proyecto local |
| 12 | Radio Buttons | Radio buttons | `Radio.spec.js` | `npx playwright test` | Test de radio buttons | Radio buttons automatizados | `Resumen curso playwright.docx`, proyecto local |
| 13 | Archivo de Configuracion (config.js) | Configuracion base | `playwright.config.js` | `npx playwright test` | Config Playwright | Runner configurado | `Resumen curso playwright.docx`, proyecto local |
| 14 | Archivo config (Trace) | Trace, reportes, screenshots/video | `playwright.config.js` | `npx playwright show-report` | Ajustes de evidencia | Reportes y trazas | `Resumen curso playwright.docx`, proyecto local |
| 15 | Introduccion Page Object Model | Concepto POM | No aplica | No aplica | No aplica | Comprension de POM | `Resumen curso playwright.docx` |
| 16 | POM UNO | Primer POM | `Funciones_curso.js`, `PO_UNO.spec.js` | Pendiente confirmar | Clase y prueba POM | Reutilizacion de metodos | `Resumen curso playwright.docx`, proyecto local |
| 17 | POM DOS | Segundo POM | `PO_DOS.spec.js`, `Funciones_curso.js` | Pendiente confirmar | Nuevos metodos | POM ampliado | `Resumen curso playwright.docx`, proyecto local |
| 18 | POM TRES | Tercer POM | `PO_TRES.spec.js` | Pendiente confirmar | Datos/formulario | POM con variaciones | `Resumen curso playwright.docx`, proyecto local |
| 19 | POM CUATRO | Continuacion POM | Pendiente relacionar | Pendiente confirmar | Pendiente confirmar | Pendiente confirmar | `Resumen curso playwright.docx` |
| 20 | POM CINCO | Continuacion POM | Pendiente relacionar | Pendiente confirmar | Pendiente confirmar | Pendiente confirmar | `Resumen curso playwright.docx` |
| 21 | POM SEIS | Continuacion POM | Pendiente relacionar | Pendiente confirmar | Pendiente confirmar | Pendiente confirmar | `Resumen curso playwright.docx` |
| 22 | POM_SIETE | Continuacion POM | Pendiente relacionar | Pendiente confirmar | Pendiente confirmar | Pendiente confirmar | `Resumen curso playwright.docx` |

## Dependencias entre sesiones

| Dependencia | Explicacion |
| ----------- | ----------- |
| Node.js antes de Playwright | Playwright se instala y ejecuta mediante Node.js y npm. |
| VS Code/CMDER antes de ejecutar comandos | El instructor utiliza un editor y terminal integrados para crear archivos y lanzar pruebas. |
| Instalacion Playwright antes de specs | Los archivos `.spec.js` requieren `@playwright/test`. |
| Configuracion antes de evidencias | Screenshots, videos, trace y reportes dependen de `playwright.config.js`. |
| POM antes de ejercicios avanzados | `Actions.spec.js`, `Paralelo.spec.js` y `Parametros.spec.js` dependen de la clase `FJ`. |
| Excel/ENV antes de `Parametros.spec.js` | `Parametros.spec.js` requiere `dotenv`, `xlsx`, `.env` y `Data.xlsx`. |
| Git/Jenkins despues de pruebas locales | La integracion continua tiene sentido cuando ya existe un proyecto automatizado. |

## Inconsistencias y pendientes detectados

> **Advertencia de consistencia**
> En la transcripcion el curso aparece como "Playground" o "dramaturgo de Microsoft", pero por contexto tecnico y archivos del proyecto corresponde a Playwright. El manual usara "Playwright" y registrara esta correccion como interpretacion tecnica.

> **Advertencia de consistencia**
> La transcripcion salta de seccion 3 a seccion 5 y de seccion 7 a seccion 9. Informacion no mostrada o no confirmada en el material del curso.

> **Advertencia de consistencia**
> El dominio `https://testingqarvn.com.es/` no resuelve DNS desde esta maquina. Los ejercicios que dependen de ese sitio se documentaran como "requiere servicio externo".

## Estructura propuesta del manual final

1. Portada.
2. Control de versiones.
3. Introduccion.
4. Objetivos del curso.
5. Requisitos previos.
6. Arquitectura general.
7. Instalacion y configuracion del entorno.
8. Capitulos por sesion.
9. Pruebas integrales.
10. Solucion de problemas.
11. Preguntas frecuentes.
12. Glosario.
13. Tabla consolidada de comandos.
14. Tabla consolidada de archivos.
15. Tabla consolidada de dependencias.
16. Anexos con codigo final completo.
17. Matriz de cobertura.
18. Informe de auditoria.

