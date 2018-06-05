# Coffee Shop CLI
## ¿Qué debes hacer?
1. Clona este repositorio `git clone https://github.com/CodeRoomMX/coffee-shop-cli.git`

2. En la terminal ve a la carpeta clonada, y usando el comando `npm install`, instala las bibliotecas de código necesarias:
  * [**inquirer**](https://www.npmjs.com/package/inquirer)
  * [**commander**](https://www.npmjs.com/package/commander)
  * [**colors**](https://www.npmjs.com/package/colors)

4. El código ya escrito en `index.js` te muestra como usar la biblioteca `inquirer` con una sola pregunta, ejecuta el comando `./index.js` para que lo veas en acción.

5. Completa el código con las  preguntas a continuación. Algunas tienen diferente interfaz por lo que es recomendable que leas [la documentación de esta biblioteca](https://www.npmjs.com/package/inquirer).
  * ¿Nombre? [Cualquier nombre]
  * ¿Tipo de café? [Americano, Latte, Expreso]
  * ¿Tipo de leche? [Entera, Deslactosada, Light]
  * ¿Prefieres que el café esté descafeinado? [V | F]
  * ¿Prefieres que el café esté frío? [V | F]
  * Clave del vendedor [Password oculto]

5. Basado en [la documentación de commander](https://www.npmjs.com/package/commander), debes lograr que el comando `guide` muestre una guía de las posibles respuestas a las preguntas anteriores.

6. También debes crear un comando `order` que levante una orden de café implementando el script de inquirer que creaste anteriormente.

**En este reto cuenta mucho el como se ve la información reflejada(usando colores o estilos de texto) y que tan fácil es entender la lista mostrada.**

## Bonus!!!
1. Instala [**mongoose**](https://www.npmjs.com/package/mongoose).
2. Configura un modelo `Coffee` para que  la orden de café que se levantó con order, se pueda guardar en una base de datos.
3. Crea un comando `list` que muestre las ordenes de café levantadas hasta el momento.
