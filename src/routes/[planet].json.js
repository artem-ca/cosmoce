import { firestore } from '$lib/firebase'
import {
  collection,
  getDocs,
  getDocsFromServer,
  getDoc,
  getDocFromServer,
  doc,
} from 'firebase/firestore'

// export async function load({ page, fetch }) {
//   // const planets = await getCollectionDocs('Planets')
//   // const collectionRef = collection(firestore, 'Planets')
//   // const querySnapshot = await getDocsFromServer(collectionRef)

//   const docRef = doc(firestore, 'Planets', 'CI1124UjwsZe7b7w9eZx')
//   const planet = await getDoc(docRef).data

//   console.log('=== LOAD planet: ', planet)

//   const planets = [{ name: 'TEST EARTH' }]

//   // console.log('=== LOAD planets: ', planets)
//   return {
//     props: {
//       planet: planets[0],
//     },
//   }
// }

export async function get({ params }) {
  const { planet } = params

  const docRef = doc(firestore, 'Planets', 'CI1124UjwsZe7b7w9eZx')
  const planetData = await getDocFromServer(docRef).data

  return {
    body: {
      name: 'TEST EARTH',
    },
  }
}
