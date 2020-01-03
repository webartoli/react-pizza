
import firebase from 'firebase'

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

const data = <TOut = firebase.firestore.DocumentData, TIn = firebase.firestore.DocumentData>(array: firebase.firestore.QuerySnapshot<TIn>): TOut[] =>  {
  let result: TOut[] = []
  array.forEach(x => {
    result.push(x.data() as any)
  })
  return result
}

type Ingredient = string

interface IngredientCategory {
  category: string
  ingredients: Ingredient[]
}

export const ingredients = async () => db
  .collection('ingredients')
  .get()
  .then(x => data<IngredientCategory>(x))

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

  try {
    const data = await ingredients()
    console.log(data.flatMap(x => x))
  }
  catch(err) {
    console.warn(err)
  }
}

fire()
