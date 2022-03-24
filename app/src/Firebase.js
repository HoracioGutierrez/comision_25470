//Con esto me traigo una funcion que sirve para autenticarme con la plataforma de google "Firebase"
import { initializeApp } from "firebase/app";

//Con esto me traigo la funcion que me permite traer una referencia de la base de datos
import { getFirestore } from "firebase/firestore";

//Estas son las credenciales de la plataforma de google "Firebase" que obtuvimos cuando creamos la aplicacion
const firebaseConfig = {
    apiKey: "AIzaSyBTSslAj_tm-T43k9eRPb1yCIxQJGBUayg",
    authDomain: "comision-25470.firebaseapp.com",
    projectId: "comision-25470",
    storageBucket: "comision-25470.appspot.com",
    messagingSenderId: "301113949522",
    appId: "1:301113949522:web:6e533cc3400abcb6f04e8b"
};

//Inicializamos la aplicacion de firebase
const app = initializeApp(firebaseConfig);

//Obtenemos una referencia de la base de datos
export const db = getFirestore(app);