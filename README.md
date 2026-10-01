<p align="center">
    <img height="256px" src="https://raw.githubusercontent.com/NicoBenialgo/TrabajoGrupal-Lenguajes1-UNAHUR/refs/heads/main/portadaTPG-Lenguajes1.png" alt="Trabajo Práctico Grupal // Lenguajes Informáticos 1 (UNAHUR)" />
</p>

# Trabajo Práctico Grupal

El siguiente repositorio corresponde a la materia **Lenguajes Informáticos 1** del área de Tecnología e Ingeniería de la **Universidad Nacional de Hurlingham**, la cuál corresponde a poner en práctica todo el contenido visto durante el cuatrimestre. Para ello haremos un grupo con 4 personas para desarrollar un sitio web de información y promoción de una ciudad ficticia.

Cada equipo deberá crear la identidad de la ciudad, incluyendo su nombre, características principales, lugares de interés, propuestas culturales, actividades y eventos. El contenido puede ser completamente inventado, siempre que mantenga coherencia dentro del sitio.

El sitio se construirá de forma incremental a lo largo del cuatrimestre, incorporando las tecnologías que se vayan trabajando en clase: **primero se desarrollará la estructura y el contenido utilizando HTML, luego se incorporarán estilos mediante CSS**, posteriormente se mejorará el diseño y la adaptación a distintos dispositivos utilizando Bootstrap, y finalmente se agregarán funcionalidades e interacciones mediante JavaScript.

Cada etapa deberá construirse sobre la anterior, de manera que el proyecto evolucione progresivamente hasta obtener un sitio web completo, navegable, adaptable e interactivo. El objetivo del trabajo no es solamente obtener un sitio terminado, sino también poner en práctica el proceso de desarrollo colaborativo: organizar las tareas, distribuir el trabajo entre los integrantes, utilizar Git y GitHub para registrar los avances y aplicar progresivamente los conceptos trabajados durante la materia.

# Organización del proyecto

StackEdit stores your files in your browser, which means all your files are automatically saved locally and are accessible **offline!**

## Alumnos que conforman el grupo

El siguiente grupo de alumnos forman parte de la **Comisión 9** de la materia de **Lenguajes Informáticos 1**, cuya cursada se realiza los jueves de 18 a 22 horas.

 - Lucas García
 - Ludmila Cabral
 - Nicolas Federico Benialgo
 - Emanuel Santiago Alonso

## Calendario de commits obligatorios

Commit  | Fecha de entrega      | Etapa             | Contenido esperado
------: | :--------: | :---------------: | :------------------------------------------------------------------
C1 (CLASE 5)      | 13 de septiembre    | Estructura HTML   | index.html + páginas secundarias con HTML semántico completo.
C2 (CLASE 8)     | 4 de octubre    | Estilos CSS       | Hoja de estilos vinculada. Layout, colores y tipografía aplicados.
C3 (CLASE 12)     | Clase 12   | Framework CSS     | Grilla responsiva y componentes de Bootstrap integrados.
C4 (CLASE 15)     | Clase 15   | JavaScript        | Al menos una interacción dinámica funcionando en el sitio.

## Estructura de archivos

El repositorio principal **main** debe quedar estructurada con el siguiente esquema base:

mi-ciudad/
├── index.html ← **nota**
├── ciudad.html
├── lugares.html
├── contacto.html
├── css/		← carpeta donde se añade archivos css
│ └── estilos.css ← archivo nuevo del segundo commit
└── img/		← carpeta donde se añade todas las imágenes
└── ...

**Nota:** Todos los archivos HTML deben tener un mismo '<header>', un mismo '<footer>' y una misma estructura de la etiqueta '<nav>'.

Por el momento, el uso del branch **beta** se realizará únicamente para hacer pruebas del manejo de Git Bash en el escritorio y sus formas de realizar cambios rápidos "de nube a local" y "de local a nube", haciendo uso del pdf "Git_ La Guía Sencilla para Principiantes".

## Estado actual del repositorio

Actualmente se encuentra en preparación el **segundo commit (C2)**. Los pasos a seguir para continuar con el trabajo práctico grupal son los siguientes:

 1. Crear la vinculación del `index.html` a la hoja de estilos que se creará en un nuevo archivo llamado `estilos.css` mediante la etiqueta `<link rel=stylesheet href=css/estilos.css>`. 
 2. Subir de forma individual al repositorio el esquema básico CSS modelizado, siguiendo el ejemplo usado en la CLASE 6 para el mini-desafío de ConnectHub, declarando cuáles serán los colores principales a usar mediante variables `--var(nombre-variable)`, el cuál primero deben declararse en el desglose de código en el selector`:root` ubicado al principio de la hoja de `estilos.css`, así como la fuente general de todo el texto el cuál debe estar previamente importado en la sección `head` del `index.html`. 
 3. Agregarle a esto el modelo de reset básico para modelizar todo el contenido html bajo el selector `* {...}` y el modelado del selector `body`, lo cuál quedaría de esta forma:

```
/*** Acá se definen los colores principales para su uso en el sitio web  ***/
/*** ESTOS NO SON LOS COLORES REALES PARA EL PROYECTO, la fuente tampoco ***/
:root {
	--color-texto: #FFFFFF;
	--color-fondo: #000000;
	--color-primario: #333333;
	--color-secundario: #d33d4e;
	--fuente: "OpenSans", sans-serif;`
}

/*** Reset básico ***/
* {
	box-sizing: border-box;
	margin: 0; padding: 0;
}

body {
    font-family: var(--fuente);
	font-size: 16px;
	color: var(--color-texto);
    max-width: 1100px;
    margin: 0 auto;
	padding: 0 1rem;
}
```

 4. Cada uno de los integrantes debe realizar en el momento acordado en conjunto la instalación de la aplicacion GIT a su computadora personal, instalando sin realizar modificaciones a las sugerencias mostradas más allá de apretar "Siguiente" o "Next". Con GIT instalado, usar su variante llamado **Git Bash**, el cuál se abrirá una ventana negra tipo Terminal cuya primer línea dirá los nombres con los que se identifica a su PC personal. **Cada miembro del equipo tendrá que escribir las siguientes líneas de código en Git Bash** ni bien lo hayan instalado:

Primer línea:

```
	git config --global user.name "NombreDeUsuario"
```
Segunda línea:

```
    git config --global user.mail "SuCorreoPersonal"
```

	Cabe destacar que dentro de las comillas de "NombreDeUsuario" deben reemplazarlo por el nombre de usuario de su GitHub o más bien por su nombre y apellido personal, y que dentro de las comillas de "SuCorreoPersonal" deben reemplazarlo por un correo electrónico existente que usen actualmente, preferentemente el que usen de acceso a GitHub y recomendable que no sea el correo institucional de alumno, salvo que se aclare lo contrario.
	**NOTA: Si estás realizando este paso en una computadora que no es suya sino compartida o pública, coloca el mismo tipeo de arriba sin** `--global`. Exactamente así:

Primer línea:

```
	git config user.name "NombreDeUsuario"
```
Segunda línea:

```
	git config user.mail "SuCorreoPersonal"
```

**Ejemplo de aclaración**:

Primer línea:

```
	git config --global user.name "EstebanSanzo"
```
Segunda línea:

```
	git config --global user.mail "estebansanzo@hotmail.com"
```

 5. Cada alumno debe **clonar el repositorio** del Trabajo Grupal: debes entrar al repositorio en el GitHub, presionar en el botón verde que dice **<> Code** y allí dentro de la pestaña Local verás el apartado llamado **Clone**, el cuál tendrás que copiar al portapapeles el link que aparece en opción HTTPS. Luego, elegirás o crearás una carpeta de tu computadora personal, abrirás esta carpeta, darás click al botón derecho del mouse y presionarás del menú la opción **Open Git Bash Here** para abrir Git Bash y configurar esa carpeta en específico. Si lograste hacer esto, salteate el punto 6 y continuá en el punto 7.
 
 6. Si querés trabajar en la misma Git Bash sin reiniciar la terminal, tendrás que entrar a la carpeta que hayas creado, copiarás la ruta de dirección de esa carpeta en sí (como ejemplo, si eliges la carpeta "YoPracticoGit" colocada en la carpeta Escritorio, tu link se vería algo así: `C:\Users\NOMBREDELACOMPU\Desktop\YoPracticoGit` (en cada dispositivo, el NOMBREDELACOMPU será distinto en el link de carpeta local. Luego, en el Git Bash escribirás `cd` y pegarás el link que copiaste inmediatamente despues de haber escrito `cd`, apretar un espacio, hacer click derecho y seleccionar "Pegar". A continuación presiona ENTER.
 7. En la terminal del Git Bash,  habiendo hecho los pasos anteriores, escribirás el siguiente comando:

	`git init`
        
 8. Posterior a esto, escribirás: 

	`git clone URLCOPIADA`
        
	En el caso de Nicolas Benialgo, por ejemplo, le aparecerá el link de esta forma:

	`git clone https://github.com/NicoBenialgo/TrabajoGrupal-Lenguajes1-UNAHUR.git`
        
	A continuación, presioná ENTER para que todo el contenido del repositorio de GitHub se guarde en tu computadora personal. Desde este momento, tendrás una copia exacta del repositorio de GitHub en tu computadora, e incluso desde ahí mismo podrás realizar ediciones para luego subirlos a GitHub mediante Git.