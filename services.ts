
import * as firebase from 'firebase/app'
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

const data = <TIn = firebase.firestore.DocumentData>(array: firebase.firestore.QuerySnapshot<TIn>): any[] =>  {
  let result: any[] = []
  array.forEach(x => {
    result.push(x.data() as any)
  })
  return result
}

type Ingredient = string

interface IngredientCategory {
  category: string
  ingredients: Ingredient[]
  order: number
}

export const ingredients = async () => db
  .collection('ingredients')
  .get()
  .then<IngredientCategory[]>(data)
  .then(x => x.sort((a, b) => a.order - b.order))
  .then<Ingredient[]>(cat => cat.flatMap(x => x.ingredients))

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
