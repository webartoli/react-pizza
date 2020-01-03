
import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) 
  firebase.initializeApp({
    apiKey: "AIzaSyAR3-QXrpEa9O62TtUcgqWwEiudtLYjmEw",
    authDomain: "pizza-c568d.firebaseapp.com",
    databaseURL: "https://pizza-c568d.firebaseio.com",
    projectId: "pizza-c568d",
    storageBucket: "pizza-c568d.appspot.com",
    messagingSenderId: "189632465397",
    appId: "1:189632465397:web:d03f87c4ca4106734678bc",
    measurementId: "G-XGP6HHNRCD"
  });

var db = firebase.firestore();
export const ingredients = async () => db.collection('ingredients').get()

export const availableIngredients = () => [
    // Base
    'Pomodoro', 'Mozzarella', 
    // Affettati
    'Prosciutto', 'Crudo', 'Salsiccia', 'Wurstel',  'Speck', 'Salamino Piccante', 'Pancetta',
    // Verdure
    'Funghi', 'Cipolla', 'Verdure grigliate', 'Peperoni',
    // Formaggi
    'Scamorza', 'Gorgonzola',
    // Sottoli e sottaceti
    'Capperi', 'Olive', 'Acciughe'
  ]

const fire = async () => {
  ingredients()
    .then(data => console.log(data))
    .catch(err => console.warn(err))
}

fire()