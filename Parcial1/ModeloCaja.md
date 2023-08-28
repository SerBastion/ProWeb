## Modelo Caja

El modelo de caja es un concepto fundamental en la construcción de páginas web utilizando HTML y CSS. Se refiere a cómo se representan y se organizan los elementos en una página web dentro de cajas rectangulares. Cada elemento en una página web se considera una "caja" que tiene propiedades como el ancho, el alto, los márgenes, los rellenos y el borde.

En HTML y CSS, cada elemento se representa como una caja rectangular que consiste en las siguientes partes:

|Parte   |Descripción|  
|:---------:|:----------|
|Contenido  | Es el contenido real del elemento, como texto, imágenes u otros elementos anidados.
|Relleno (padding)| Es un espacio transparente alrededor del contenido del elemento. Puedes ajustar el relleno para controlar la separación entre el contenido y el borde de la caja. |
|Borde| Es una línea que rodea el contenido y el relleno de la caja. Puedes definir su estilo, grosor y color.|
|Margen| Es un espacio transparente que rodea la caja en su totalidad. Controla la separación entre la caja y otros elementos circundantes.|

La combinación de estas partes forma la "caja" que delimita visualmente cada elemento en una página web. Al comprender y controlar las propiedades de la caja, los diseñadores web pueden crear diseños precisos y consistentes.  

![Alt](https://www.eniun.com/wp-content/uploads/Modelo-de-cajas-margenes-relleno-bordes.png)    
  
## Display
La propiedad CSS display controla cómo un elemento HTML se muestra en la página web, es decir, cómo se comporta visualmente en términos de su presentación y su interacción con otros elementos. Esta propiedad tiene varios valores que determinan cómo se renderiza un elemento en la página. Aquí están los valores más comunes para la propiedad display:  

|Valor| Descripción|  
|:-----:|:----------|
|**block:**| Los elementos con esta propiedad ocupan todo el ancho disponible en su contenedor principal y generan una nueva línea antes y después de ellos. Ejemplos de elementos que son de tipo bloque son los encabezados ((h1), (h2), etc.), los párrafos ((p)), las divisiones ((div)), entre otros.|
|**inline:**| Los elementos con esta propiedad se comportan como si fueran parte del flujo de texto normal y solo ocupan el espacio necesario para su contenido. No generan nuevas líneas antes ni después de ellos. Ejemplos de elementos en línea son los enlaces ((a)), las imágenes ((img)), los énfasis ((em)) y los elementos de texto en general.|
|**inline-block:**| Esta opción combina las características de elementos en línea y elementos de bloque. Los elementos en línea-bloque se comportan como elementos en línea, pero permiten definir ancho, alto, márgenes y relleno, como lo harías con elementos de bloque. Esto es útil para crear diseños en línea con ciertas características de bloque.|
|**none:**| Cuando un elemento tiene esta propiedad, se oculta completamente y no ocupa espacio en la maquetación. Es como si el elemento no estuviera en el documento.|
|**flex:**| Esta propiedad permite crear un contenedor flexible que puede organizar sus elementos secundarios en una dirección (fila o columna), ajustando automáticamente sus tamaños para llenar el espacio disponible. Se utiliza junto con propiedades relacionadas con flexbox para lograr diseños flexibles y adaptables.|
|**grid:**| Similar a flex, esta propiedad crea un contenedor de cuadrícula que organiza los elementos secundarios en filas y columnas. La cuadrícula es más avanzada y permite un mayor control sobre la disposición y el tamaño de los elementos en comparación con flexbox.|

![Alt](https://static.platzi.com/media/articlases/Images/frontend_developer19.png)


