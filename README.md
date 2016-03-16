# Práctica OOP en JS. Eliminación del Code Smell.

![Resultado](http://files.catbox.moe/utpomf.png)

Este repositorio aloja la práctica de conversión de tipos, realizada con html, css y javascript, usando POO y haciendo uso de la herencia en javascript. Se ha realizado una eliminación del Code Smell, y una estructuración que permite el principio Open/Close.

- Primero se realizó la clase **Medida**, que recibe un valor y un tipo opcional.

- A continuación, se creó la clase **Temperatura** que hereda de Medida, y por lo tanto llama a su constructor.

- Se crearon las clases **Fahrenheit**, **Celsius**, y **Kelvin**. Todas heredan de Temperatura, por lo que llaman a su constructor y además cada una implementa los **métodos de conversión** a las otras temperaturas.

- Se hizo uso de **XRegExp**, y se colocó **fuera** de convertir(). Para poder usarlo hubo que añadir el fichero *xregexp.js* en el repositorio y cargarlo en el HTML.

- Se separaron en **distintos ficheros** las diversas funcionalidades, y convertir es un método de Medida.

- Cada clase **sabe a que medida** tiene que convertir, y mediante un **hash** llamado measures se ha eliminado del smell code de los switch.

- El código se encuentra **encapsulado**.

**Repositorio GitHuB**

* [Repositorio trabajado](https://github.com/alu0100816761/eliminacion-del-switch-nataliealexis)

**Página de la práctica**

* [Web](http://ull-esit-gradoii-pl.github.io/eliminacion-del-switch-nataliealexis)

**Página de los autores**

* [Alexis Daniel Fuentes Pérez](http://alu0100816761.github.io/)
* [Natalie Dajakaj](http://alu0100818369.github.io/)

**Campus Virtual**

* [Taller de la práctica](https://campusvirtual.ull.es/1516/mod/workshop/view.php?id=180218)
