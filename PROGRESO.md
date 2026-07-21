# Progreso del curso Playwright con JavaScript

## Video procesado: Video 1.mkv

**Tema:** Instalacion inicial del proyecto, ejemplo base, Codegen, campos input con `fill`, `type`, `press`, y radio buttons.

**Archivos creados:**
- `Curso/tests/Codegen.spec.js`
- `Curso/tests/Demo2.spec.js`
- `Curso/tests/example.spec.js`
- `Curso/tests/Input1.spec.js`
- `Curso/tests/Input2.spec.js`
- `Curso/tests/Radio.spec.js`
- `e2e/example.spec.js`
- `e2e/test-1.spec.ts`
- `e2e/test-2.spec.ts`

**Archivos modificados:**
- `Curso/package.json`
- `Curso/package-lock.json`

**Codigo eliminado:**
- Se elimino codigo mas moderno que no aparecia en el video para dejar los ejercicios con el estilo del profesor.

**Dependencias instaladas:**
- `@playwright/test`
- `@types/node`

**Configuracion realizada:**
- Se dejo `Curso` como carpeta de trabajo principal, con su propio `node_modules`.
- Se usaron archivos `.spec.js` con `require('@playwright/test')`, como en el video.
- Se mantuvo `test.only('test2', ...)` en `Radio.spec.js`, porque asi aparece en la clase.

**Errores encontrados:**
- Al ejecutar varias pruebas en paralelo con navegador visible y video activo, los procesos se quedaron abiertos y las ejecuciones llegaron a timeout.

**Solucion aplicada:**
- Se cerraron los procesos de navegador que quedaron activos.
- Se verificaron los archivos de prueba de forma individual con `--workers=1`, igual al flujo manual del profesor.

**Estado del proyecto:**
- `Codegen.spec.js`: aprobado.
- `Input1.spec.js`: aprobado.
- `Input2.spec.js`: aprobado.
- `Radio.spec.js`: aprobado ejecutando `test2`, como en el video.
- `example.spec.js`: aprobado.

## Video procesado: Video 2.mkv

**Tema:** Archivo de configuracion `playwright.config.js`, `trace`, `headless`, `viewport`, `browserName`, `ignoreHTTPSErrors`, `screenshot`, `video` e introduccion visual a Page Object Model.

**Archivos creados:**
- `Curso/playwright.config_base.js`

**Archivos modificados:**
- `Curso/playwright.config.js`
- `Curso/package.json`

**Codigo eliminado:**
- `Curso/tests/POM_UNO.spec.js`
- `Curso/tests/POM_DOS.spec.js`
- `Curso/Funciones/`

**Dependencias instaladas:**
- No se agregaron dependencias nuevas en este video.

**Configuracion realizada:**
- `testDir: './tests'`
- `timeout: 30 * 1000`
- `expect.timeout: 5000`
- `fullyParallel: true`
- `forbidOnly: !!process.env.CI`
- `retries: process.env.CI ? 2 : 0`
- `workers: process.env.CI ? 1 : undefined`
- `reporter: 'html'`
- `actionTimeout: 0`
- `trace: 'on-first-retry'`
- `headless: false`
- `viewport: { width: 1850, height: 800 }`
- `browserName: 'chromium'`
- `ignoreHTTPSErrors: true`
- `screenshot: 'only-on-failure'`
- `video: 'on'`

**Errores encontrados:**
- `video: 'on'` hace que las pruebas tarden mas al cerrar el contexto del navegador.
- Ejecutar varios archivos al mismo tiempo abre muchos navegadores visibles y vuelve inestable la verificacion.

**Solucion aplicada:**
- Se mantuvo la configuracion del profesor.
- Las verificaciones se hicieron por archivo con `--workers=1`.

**Estado del proyecto:**
- `Curso/playwright.config.js` queda alineado con el video.
- `Curso/tests` queda con los archivos visibles en la clase:
  - `Codegen.spec.js`
  - `Demo2.spec.js`
  - `example.spec.js`
  - `Input1.spec.js`
  - `Input2.spec.js`
  - `Radio.spec.js`
- Proyecto estable para continuar con las siguientes clases.

## Comandos de verificacion ejecutados

```bash
npm.cmd run test:demo -- --workers=1
npm.cmd run test:input -- --workers=1
npm.cmd run test:radio -- --workers=1
npx.cmd playwright test Codegen.spec.js --workers=1
npx.cmd playwright test Input1.spec.js --workers=1
npx.cmd playwright test example.spec.js --workers=1
npm.cmd test -- --list
```

## Resultado general

El proyecto quedo preparado para continuar el curso desde la carpeta:

```text
C:\Users\User\Documents\PLAYWRIGHT_JAVASCRIPT\Curso
```

## Video procesado: video 3.mkv

**Tema:** Page Object Model uno y dos. Creacion de funciones reutilizables con una clase `FJ`, constructor con `page`, metodos `open`, `openURL`, `tiempo`, `scroll`, `texto`, `click`, `validar_texto` y `validar_url`.

**Archivos creados:**
- `Curso/tests/Funciones_curso.js`
- `Curso/tests/Funciones.js`
- `Curso/tests/PO_UNO.spec.js`
- `Curso/tests/PO_DOS.spec.js`

**Archivos modificados:**
- `PROGRESO.md`

**Codigo eliminado:**
- No aplica para este video.

**Dependencias instaladas:**
- No se instalaron dependencias nuevas.

**Configuracion realizada:**
- Se mantuvo la estructura usada por el profesor: los archivos de funciones y specs quedaron directamente dentro de `Curso/tests`.
- Se uso `exports.FJ=class FJ` en `Funciones_curso.js`, igual al estilo visible en el video.
- Se uso `require('./Funciones_curso')` desde `PO_UNO.spec.js` y `PO_DOS.spec.js`.

**Errores encontrados:**
- La ejecucion de `PO_UNO.spec.js` falla en `page.goto` porque el dominio del video `https://testingqarvn.com.es/prueba-de-campos-checkbox/` no resuelve DNS desde esta maquina.
- Se verifico tambien una variante reciente encontrada del instructor, `https://testingqaraven.com.mx/prueba-de-campos-checkbox/`, pero tampoco resuelve DNS desde esta maquina.

**Solucion aplicada:**
- Se dejo el codigo con la URL vista en el video para respetar la clase.
- Se valido la sintaxis JavaScript de los archivos nuevos con `node.exe --check`.
- No se cambio a otra pagina de practica porque eso ya no seria el mismo ejercicio del profesor.

**Estado del proyecto:**
- Archivos creados y con sintaxis valida.
- `npm.cmd test -- --list` detecta `PO_UNO.spec.js` y `PO_DOS.spec.js`.
- La ejecucion real de los specs POM queda bloqueada por disponibilidad DNS del sitio externo del profesor.

**Comandos de verificacion ejecutados:**

```bash
npm.cmd test -- --list
npx.cmd playwright test PO_UNO.spec.js --workers=1
node.exe --check .\tests\Funciones_curso.js
node.exe --check .\tests\Funciones.js
node.exe --check .\tests\PO_UNO.spec.js
node.exe --check .\tests\PO_DOS.spec.js
```

## Video procesado: Video 4.mkv

**Tema:** Continuacion de Page Object Model. Validaciones con `expect`, `expect.soft`, manejo de errores con `try/catch`, captura del valor de un campo y condicionales para cambiar datos del formulario.

**Archivos creados:**
- No se crearon archivos nuevos en este video.

**Archivos modificados:**
- `Curso/tests/Funciones_curso.js`
- `Curso/tests/PO_DOS.spec.js`
- `PROGRESO.md`

**Codigo eliminado:**
- Se rehizo `PO_DOS.spec.js` para dejarlo con el estado visible del video 4.

**Dependencias instaladas:**
- No se instalaron dependencias nuevas.

**Configuracion realizada:**
- Se agregaron metodos reutilizables a `Funciones_curso.js`:
  - `texto_val(selector,val,tiempo=tie)`
  - `texto_try(selector,val,tiempo=tie)`
  - `validar_url_lig(url,tiempo=tie)`
  - `validar_titulo(titulo,tiempo=tie)`
  - `valor_campo(selector,tiempo=tie)`
- Se mantuvo el estilo del profesor con `exports.FJ=class FJ`, `require('./Funciones_curso')`, `const tp=300`, `if/else if/else` y selectores XPath.

**Errores encontrados:**
- `PO_DOS.spec.js` vuelve a fallar al abrir `https://testingqarvn.com.es/prueba-de-campos-checkbox/` porque el dominio no resuelve DNS desde esta maquina.

**Solucion aplicada:**
- Se dejo la URL del video para respetar el ejercicio.
- Se verifico sintaxis de los archivos modificados con `node.exe --check`.
- Se ejecuto `npm.cmd test -- --list` para confirmar que Playwright detecta el test.

**Estado del proyecto:**
- Codigo del video 4 replicado con los nombres de archivos del profesor.
- Sintaxis valida.
- Test detectado por Playwright.
- Ejecucion real bloqueada por DNS del sitio externo del profesor.

**Comandos de verificacion ejecutados:**

```bash
node.exe --check .\tests\Funciones_curso.js
node.exe --check .\tests\PO_DOS.spec.js
npm.cmd test -- --list
npx.cmd playwright test PO_DOS.spec.js --workers=1
```

## Video procesado: Video 5.mkv

**Tema:** Ajustes de configuracion, retries, valores aleatorios en formularios, combos/selects, combos multiples y acciones de mouse.

**Archivos creados:**
- `Curso/tests/Actions.spec.js`
- `Curso/tests/PO_TRES.spec.js`

**Archivos modificados:**
- `Curso/playwright.config.js`
- `Curso/tests/Funciones_curso.js`
- `Curso/tests/PO_DOS.spec.js`
- `PROGRESO.md`

**Codigo eliminado:**
- No se eliminaron archivos.
- En `Actions.spec.js` se dejo comentado el selector dinamico `#JhpQ8`, igual al estado final del video, porque ese ID cambia entre ejecuciones.

**Dependencias instaladas:**
- No se instalaron dependencias nuevas.

**Configuracion realizada:**
- `expect.timeout` se bajo a `3000`.
- Se comento `retries: process.env.CI ? 2 : 0`.
- Se agrego `retries: 7`.

**Funciones agregadas en `Funciones_curso.js`:**
- `valor_texto(selector,tiempo=tie)`
- `terminar(tiempo=tie)`
- `combo_value(selector,val,tiempo=tie)`
- `combo_Label(selector,val,tiempo=tie)`
- `combo_multiples(selector,arg=defaultValue,tiempo=tie)`
- `click_dinamico(texto,tiempo=tie)`
- `click_derecho_dinamico(texto,tiempo=tie)`
- `dobleClick_dinamico(texto,tiempo=tie)`
- `dobleClick(selector,val,tiempo=tie)`
- `click_derecho(selector,val,tiempo=tie)`
- `mouse_over(selector,val,tiempo=tie)`

**Pruebas agregadas en `Actions.spec.js`:**
- `test`
- `Combox Multiples`
- `Combox Multiples Dos`
- `Opciones Click`
- `Opciones Over`

**Errores encontrados:**
- La primera ejecucion de `Actions.spec.js` llego a timeout porque el selector `#JhpQ8` es dinamico en DemoQA y no existe en la sesion actual.

**Solucion aplicada:**
- Se dejo comentado `#JhpQ8` como en el final del video.
- Se activo `click_dinamico("Click Me",tp)` y `click_derecho_dinamico("Right Click Me",tp)`.
- Se ajustaron los metodos dinamicos para usar `getByRole('button', { name: texto, exact: true })`.

**Estado del proyecto:**
- `Actions.spec.js` ejecuta correctamente el `test.only('Opciones Click', ...)`.
- `PO_TRES.spec.js` queda creado con el patron POM del instructor.
- El proyecto detecta 17 tests en 10 archivos.

**Comandos de verificacion ejecutados:**

```bash
node.exe --check .\tests\Funciones_curso.js
node.exe --check .\tests\Actions.spec.js
node.exe --check .\tests\PO_TRES.spec.js
npx.cmd playwright test Actions.spec.js --workers=1
npm.cmd test -- --list
```

## Video procesado: Video 6.mkv

**Tema:** Acciones avanzadas en Playwright: `dragTo`, copiar y pegar con teclado, copiar texto desde la pagina, carga y limpieza de archivos, manejo de calendario con `Tab`, y ejecucion repetida/paralela con ciclo `for`.

**Archivos creados:**
- `Curso/tests/archivos/CURSOS.txt`
- `Curso/tests/Paralelo.spec.js`

**Archivos modificados:**
- `Curso/tests/Funciones_curso.js`
- `Curso/tests/Actions.spec.js`
- `PROGRESO.md`

**Codigo eliminado:**
- No se eliminaron archivos ni ejercicios del curso.

**Dependencias instaladas:**
- No se instalaron dependencias nuevas.

**Configuracion realizada:**
- Se mantuvo la configuracion del video anterior.
- En `Actions.spec.js` se agregaron las pruebas:
  - `Drag and Drop`
  - `Copiar y Pegar Input`
  - `Copiar Texto`
  - `Upload files`
  - `Calendarios`
- En `Paralelo.spec.js` se creo el ciclo `for(x=1;x<=50;x++)` con pruebas `Combo numero_${x}`.

**Funciones agregadas en `Funciones_curso.js`:**
- `drag_drop(ori,des,tiempo=tie)`
- `copiar_input(selector,tiempo=tie)`
- `pegar_input(selector,tiempo=tie)`
- `copiar_texto(selector,pegar,tiempo=tie)`
- `Upload_file(selector,archivo,tiempo=tie)`
- `Mover_Upload_file(selector,tiempo=tie)`
- `Tab(selector,tiempo=tie)`

**Errores encontrados:**
- La prueba `Drag and Drop` fallo inicialmente porque DemoQA cambio el contenido visible: el selector del profesor buscaba `Drop here`, pero en la version actual el cuadro visible aparece como `Drop Here`, mientras que las coincidencias `Drop here` quedan ocultas con tamano cero.
- Los ejercicios que usan `https://testingqarvn.com.es/` no pueden ejecutarse completos ahora mismo porque el dominio externo del profesor no resuelve DNS desde esta maquina.

**Solucion aplicada:**
- Se mantuvo el selector del ejercicio en `Actions.spec.js`.
- Se ajusto `drag_drop` en `Funciones_curso.js` para detectar el caso actual de DemoQA y usar internamente el cuadro visible `Drop Here`, conservando el estilo y nombres del curso.
- Se verifico `Drag and Drop` con reintentos desactivados para evitar esperas largas por la configuracion `retries: 7`.

**Estado del proyecto:**
- Sintaxis valida en `Funciones_curso.js`, `Actions.spec.js` y `Paralelo.spec.js`.
- `Drag and Drop` aprobado.
- Playwright detecta 72 pruebas en 11 archivos.
- El proyecto queda listo para continuar con el siguiente video.

**Comandos de verificacion ejecutados:**

```bash
node.exe --check .\tests\Funciones_curso.js
node.exe --check .\tests\Actions.spec.js
node.exe --check .\tests\Paralelo.spec.js
npx.cmd playwright test Actions.spec.js -g "Drag and Drop" --workers=1 --retries=0
npm.cmd test -- --list
Resolve-DnsName testingqarvn.com.es
```

## Video procesado: Video 7.mkv

**Tema:** Parametros en pruebas, variables de ambiente con `.env`, instalacion de paquetes npm, lectura de datos desde Excel con `xlsx`, y ejecucion enfocada con `test.only`.

**Archivos creados:**
- `Curso/.env`
- `Curso/Data.xlsx`
- `Curso/tests/Parametros.spec.js`

**Archivos modificados:**
- `Curso/package.json`
- `Curso/package-lock.json`
- `Curso/playwright.config.js`
- `PROGRESO.md`

**Codigo eliminado:**
- No se eliminaron archivos ni ejercicios del curso.

**Dependencias instaladas:**
- `dotenv`
- `xlsx`

**Configuracion realizada:**
- `timeout` se cambio a `40 * 1000`.
- `expect.timeout` se cambio a `60000`.
- `retries` se cambio a `0`.
- Se agrego la linea comentada `//workers: 30`.
- `viewport` quedo en `{ width: 1850, height: 700 }`.
- Se agrego el script `test1`: `npx playwright test Parametros.spec.js`.

**Pruebas agregadas en `Parametros.spec.js`:**
- `Parametros Uno`
- `Parametros Dos`
- `Variables de Ambiente`
- `Data Excel`

**Datos creados:**
- `.env` con `NOMBRE`, `APELLIDO`, `EMAIL`, `TELEFONO` y `DIRECCION`.
- `Data.xlsx` con la hoja `Hoja1` y columnas:
  - `nombre`
  - `apellido`
  - `email`
  - `tel`
  - `direccion`

**Errores encontrados:**
- `npm install` reporto una vulnerabilidad alta asociada a dependencias instaladas, manteniendo `xlsx` porque es la libreria usada en el video.
- La ejecucion de `Data Excel` falla al abrir `https://testingqarvn.com.es/prueba-de-campos-checkbox/` por `net::ERR_NAME_NOT_RESOLVED`.

**Solucion aplicada:**
- Se mantuvo la URL del instructor para respetar el curso.
- Se verifico que Playwright carga `Parametros.spec.js`.
- Se verifico que `Data.xlsx` se puede leer correctamente con `xlsx`.
- El fallo de ejecucion queda documentado como bloqueo externo del dominio del profesor, no como error del codigo local.

**Estado del proyecto:**
- `Parametros.spec.js` queda creado con el flujo mostrado en la clase.
- `Data Excel` queda con `test.only`, como se ve en el video.
- Playwright detecta 76 pruebas en 12 archivos.
- El proyecto queda listo para continuar con el siguiente video.

**Comandos de verificacion ejecutados:**

```bash
npm.cmd install dotenv@^16.0.3 xlsx@^0.18.5
npx.cmd playwright test Parametros.spec.js --list
node.exe -e "const XLSX=require('xlsx'); const wb=XLSX.readFile('Data.xlsx'); console.log(wb.SheetNames[0]); console.log(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]));"
npm.cmd test -- --list
Resolve-DnsName testingqarvn.com.es
npx.cmd playwright test Parametros.spec.js -g "Data Excel" --workers=1 --retries=0
```

## Video procesado: Video 8.mkv

**Tema:** Preparacion de entorno para integracion continua con Jenkins, NodeJS, Git y GitHub.

**Archivos creados:**
- `Curso/Jenkins_Git_Video8.md`

**Archivos modificados:**
- `PROGRESO.md`

**Codigo eliminado:**
- No se elimino codigo.

**Dependencias instaladas:**
- No se instalaron dependencias nuevas en el proyecto Playwright.

**Configuracion realizada:**
- No se cambio la configuracion global Git del equipo.
- No se ejecuto `git config --global user.name "Rodrigo"` ni `git config --global user.email "rodrigodrupal1@gmail.com"` porque son datos personales del instructor y cambiarian la identidad Git global de esta maquina.
- Se documento la configuracion mostrada en el video:
  - Jenkins en `localhost:8080`.
  - Plugin/configuracion de NodeJS.
  - Herramienta `NODE_JS`.
  - Version mostrada por el instructor: NodeJS 19.6.0.
  - Comandos `git --version`, `git config --global ...` y `git init`.

**Errores encontrados:**
- `npm --version` desde PowerShell intento cargar `npm.ps1` y fallo por la politica de ejecucion de scripts de Windows.

**Solucion aplicada:**
- Se verifico con `npm.cmd --version`, que funciona correctamente.
- Se confirmo Git instalado con `git --version`.
- Se dejo una guia en `Curso/Jenkins_Git_Video8.md` con los comandos equivalentes para usar tus propios datos.

**Estado del proyecto:**
- Este video no agrega pruebas Playwright nuevas.
- Playwright sigue detectando 76 pruebas en 12 archivos.
- El proyecto queda estable para continuar con el siguiente video.

**Comandos de verificacion ejecutados:**

```bash
git --version
node --version
npm.cmd --version
npm.cmd test -- --list
```
