// index

let alumno = new Alumno("Pepe", "Feliz", "12-07-1999", "4350")

console.log(alumno);

let materia = new Materia("fisica", "lu y mie 19:00 a 22:00 hs");

materia.addNota(9);

console.log(materia);

materia.addNota(8);

console.log(materia);

let promedioMateria = materia.calcularPromedio();

console.log("promedioMateria:", promedioMateria);

alumno.addMateria(materia); //agrego la materia al alumno

let m2 = new Materia("quimica", "lu y ju 19:00 a 22:00 hs");

m2.addNota(7);
m2.addNota(4);

alumno.addMateria(m2)

let promAlumno = alumno.calcularPromedio();

console.log("promedio gral.")
