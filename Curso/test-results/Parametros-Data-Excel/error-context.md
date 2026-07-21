# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Parametros.spec.js >> Data Excel
- Location: tests\Parametros.spec.js:90:6

# Error details

```
Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://testingqarvn.com.es/prueba-de-campos-checkbox/
Call log:
  - navigating to "https://testingqarvn.com.es/prueba-de-campos-checkbox/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "No se puede acceder a este sitio" [level=1] [ref=e7]
    - paragraph [ref=e8]: Revisa que no haya errores de ortografía en testingqarvn.com.es.
    - generic [ref=e9]:
      - paragraph
      - list [ref=e10]:
        - listitem [ref=e11]:
          - text: Si no hay errores,
          - link "prueba ejecutar el diagnóstico de red de Windows" [ref=e12] [cursor=pointer]:
            - /url: javascript:diagnoseErrors()
          - text: .
    - generic [ref=e13]: DNS_PROBE_FINISHED_NXDOMAIN
  - button "Volver a cargar" [ref=e16] [cursor=pointer]
```

# Test source

```ts
  1   | const { test, expect } = require('@playwright/test');
  2   | 
  3   | const sleep = (ms) => {
  4   |     return new Promise((resolve) => setTimeout(resolve, ms));
  5   | };
  6   | 
  7   | var tie=3000
  8   | 
  9   | exports.FJ=class FJ{
  10  | 
  11  |     constructor(page){
  12  |         this.page=page;
  13  |     }
  14  | 
  15  |     async open(){
  16  |         await this.page.goto('https://testingqarvn.com.es/prueba-de-campos-checkbox/')
  17  |     }
  18  | 
  19  |     async openURL(url,tiempo=tie){
> 20  |         await this.page.goto(url)
      |                         ^ Error: page.goto: net::ERR_NAME_NOT_RESOLVED at https://testingqarvn.com.es/prueba-de-campos-checkbox/
  21  |         await sleep(tiempo)
  22  |     }
  23  | 
  24  |     async tiempo(t){
  25  |         await sleep(t)
  26  |     }
  27  | 
  28  |     async scroll(x,y,tiempo=tie){
  29  |         await this.page.mouse.wheel(x,y)
  30  |         await sleep(tiempo)
  31  |     }
  32  | 
  33  |     async texto(selector,val,tiempo=tie){
  34  |         await this.page.locator(selector).fill(val)
  35  |         await sleep(tiempo)
  36  |     }
  37  | 
  38  |     async texto_val(selector,val,tiempo=tie){
  39  |         const locator = this.page.locator(selector);
  40  |         await expect(locator).toBeVisible();
  41  |         await expect(locator).toBeEnabled();
  42  |         await expect(locator).toBeEmpty();
  43  |         await this.page.locator(selector).fill(val)
  44  |         await sleep(tiempo)
  45  |     }
  46  | 
  47  |     async texto_try(selector,val,tiempo=tie){
  48  |         try{
  49  |             const locator = this.page.locator(selector);
  50  |             await expect(locator).toBeVisible();
  51  |             await expect(locator).toBeEnabled();
  52  |             await expect(locator).toBeEmpty();
  53  |             await this.page.locator(selector).fill(val)
  54  |             await sleep(tiempo)
  55  |         }catch(error){
  56  |             console.log("Campo con algun Error")
  57  |         }
  58  | 
  59  |     }
  60  | 
  61  |     async click(selector,tiempo=tie){
  62  |         await this.page.locator(selector).click()
  63  |         await sleep(tiempo)
  64  |     }
  65  | 
  66  |     async validar_texto(selector,val,tiempo=tie){
  67  |         const locator = this.page.locator(selector);
  68  |         await expect(locator).toContainText(val);
  69  |         await sleep(tiempo)
  70  |     }
  71  | 
  72  |     async validar_url(url,tiempo=tie){
  73  |         await expect(this.page).toHaveURL(url);
  74  |         await sleep(tiempo)
  75  |     }
  76  | 
  77  |     async validar_url_lig(url,tiempo=tie){
  78  |         await expect.soft(this.page).toHaveURL(url);
  79  |         await sleep(tiempo)
  80  |     }
  81  | 
  82  |     async validar_titulo(titulo,tiempo=tie){
  83  |         await expect(this.page).toHaveTitle(titulo);
  84  |         await sleep(tiempo)
  85  |     }
  86  | 
  87  |     async valor_campo(selector,tiempo=tie){
  88  |         const value = await this.page.locator(selector).inputValue();
  89  |         await sleep(tiempo)
  90  |         return value
  91  |     }
  92  | 
  93  |     async valor_texto(selector,tiempo=tie){
  94  |         //const value = await this.page.locator(selector).textContent();
  95  |         const value = await this.page.locator(selector).innerText();
  96  |         await sleep(tiempo)
  97  |         return value
  98  |     }
  99  | 
  100 |     async terminar(tiempo=tie){
  101 |         await this.page.close()
  102 |         // await this.page.clear()
  103 |         await sleep(tiempo)
  104 |     }
  105 | 
  106 |     async combo_value(selector,val,tiempo=tie){
  107 |         const cam = await this.page.locator(selector)
  108 |         await cam.selectOption(val)
  109 |         await sleep(tiempo)
  110 |     }
  111 | 
  112 |     async combo_Label(selector,val,tiempo=tie){
  113 |         const cam = await this.page.locator(selector)
  114 |         await cam.selectOption({ label: val });
  115 |         await sleep(tiempo)
  116 |     }
  117 | 
  118 |     async combo_multiples(selector,arg=defaultValue,tiempo=tie){
  119 |         const cam = await this.page.locator(selector)
  120 |         //const val=new Array()
```