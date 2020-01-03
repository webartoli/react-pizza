
import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) 
  firebase.initializeApp({
    apiKey: "AIzaSyAR3-QXrpEa9O62TtUcgqWwEiudtLYjmEw",
    authDomain: "pizza-c568d.appspot.com",
    projectId: "pizza-c568d"
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
