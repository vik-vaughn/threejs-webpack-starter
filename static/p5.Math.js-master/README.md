Javascript implementation of the following Processing convenience methods declared in http://www.google.com/codesearch/p?hl=en#Ej56LtI_pY0/trunk/processing/core/methods/demo/PApplet.java

p5.[sq()](http://processing.org/reference/sq_.html)<br />
p5.[constrain()](http://processing.org/reference/constrain_.html)<br />
p5.[degrees()](http://processing.org/reference/degrees_.html)<br />
p5.[mag()](http://processing.org/reference/mag_.html)<br />
p5.[dist()](http://processing.org/reference/dist_.html)<br />
p5.[lerp()](http://processing.org/reference/lerp_.html)<br />
p5.[norm()](http://processing.org/reference/norm_.html)<br />
p5.[map()](http://processing.org/reference/map_.html)<br />

Very small in size, probably better to copy the minified version into your project, rather than linking to it.

Added optional extensions to the main Math object:

Math.[sq()](http://processing.org/reference/sq_.html)<br />
Math.[constrain()](http://processing.org/reference/constrain_.html)<br />
Math.[degrees()](http://processing.org/reference/degrees_.html)<br />
Math.[mag()](http://processing.org/reference/mag_.html)<br />
Math.[dist()](http://processing.org/reference/dist_.html)<br />
Math.[lerp()](http://processing.org/reference/lerp_.html)<br />
Math.[norm()](http://processing.org/reference/norm_.html)<br />
Math.[map()](http://processing.org/reference/map_.html)<br />

This code is not checking whether the methods already exist, use it at your own peril.

*Note: Math does not get constructed and instantiated, but rather initialized. Adding methods with Math.prototype.myMethod does not work, rather use Math.myMethod*