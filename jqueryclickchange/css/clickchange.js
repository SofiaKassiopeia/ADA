/* elemento actual que se traie con id

$(this)

obtener el padre
(obtengo el nodo que me contiene)

$(this).parent()

obtengo los ancestros
(obtengo un arreglo de nodos con los elementos de mayor jerarquia)

$(this)parents()

//obtengo hermanos:

arreglo de nodos que tienen el mismo padre que el elemento actual

$(this).siblings()

$(this).next()

//elemento anterior

$(this).prev();

//hijos(devuelve arreglo de nodos con los hijos)

$(this).children()

se podria hacer: $(this).parent().parent()
                 $(this).parent().first()

---------------------------filtros--------------------------------------------
.not()
aplica cambios a todos los elementosque no cumlpen con el parametro de la funcion

$("li").not(document.getElementById("notli"))

//filter

.filter('div')
$(this).css('color', 'pink')

$(this).addClass('nombreClass')
$(this).removeClass('nombreClass')
$(this).toggleClass('clase1 clase2')

$(this).attr('id')
$(this).
*/