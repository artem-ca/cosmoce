<script context="module">
  import { firestore } from '$lib/firebase'
  import {
    collection,
    getDocs,
    getDocsFromServer,
    getDoc,
    doc,
  } from 'firebase/firestore'

  const getCollectionDocs = async (collectionName) => {
    const collectionRef = collection(firestore, collectionName)
    const querySnapshot = await getDocs(collectionRef)

    let docs = []

    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })

    return docs
  }

  const getDocData = async (collection, docId) => {
    const docRef = doc(firestore, collection, docId)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Document data:', doc.data())
    }
  }

  export async function load({ page, fetch }) {
    // const planets = await getCollectionDocs('Planets')
    // const collectionRef = collection(firestore, 'Planets')
    // const querySnapshot = await getDocsFromServer(collectionRef)
    const planet = getDocData('Planets', '')

    console.log('=== LOAD planet: ', planet)

    const planets = [{ name: 'TEST EARTH' }]

    // console.log('=== LOAD planets: ', planets)
    return {
      props: {
        planet: planets[0],
      },
    }
  }
</script>

<script>
  import { page } from '$app/stores'
  import Planet from '$lib/Planet.svelte'
  export let planet

  console.log('=== PAGE planet: ', planet)
</script>

<h1>PLANET PAGE</h1>
param planet={$page.params.planet}
<Planet {planet} />
