// Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";

// console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

// function fullName(name, lastname, nickname, completeName) {
//   return ` My name is ${name} ${lastname}
//             My nickname is ${nickname} and my
//             fullname is ${name + lastname}`;
// }

// console.log(fullName("Denis", "Ortiz", "DenisDev"));

// ------------------------------------
// Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

// const tipoDeSuscripcion = "Basic";
// if (tipoDeSuscripcion === "Free") {
//   console.log("Solo puedes tomar los cursos gratis");
// } else if (tipoDeSuscripcion === "Basic") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// } else if (tipoDeSuscripcion === "Expert") {
//   console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// } else if (tipoDeSuscripcion === "ExpertPlus") {
//   console.log(
//     "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
//   );
// }

// ? ------------------
// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

// for (let i = 0; i < 5; i++) {
// }

// let i = 0;
// while (i < 5) {
//   console.log("El valor de i es: " + i);
//   i;
//   i++;
// }
// console.log(i);

// for (let i = 10; i >= 2; i--) {
// }
// let i = 10;

// while (i >= 2) {
//   console.log("El valor de i es: " + i);
//   i--;
// }

// //  ? 3
// function suma() {
//   let mensaje = prompt("Cuanto es 2 + 2 ?");
//   if (mensaje === "4") {
//     prompt("felicidades correct answer");
//   } else {
//     prompt("sumaste mal, burro");
//   }
// }
// suma();

const newArray = ["Enero", "Febrero", "Marzo"];

function leerArray() {
  newArray.forEach((arr) => {
    arr[0];
  });
}
leerArray();
