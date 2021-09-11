<script context="module">
  import { amp, browser, dev, mode, prerendering } from '$app/env'

  import { firestore } from '$lib/firebase'
  import {
    collection,
    getDocs,
    getDocsFromServer,
    getDoc,
    getDocFromServer,
    doc,
  } from 'firebase/firestore'

  export async function load({ page, fetch }) {
    let planetData
    if (browser) {
      const docRef = doc(firestore, 'Planets', 'CI1124UjwsZe7b7w9eZx')
      console.log('=== BROWSER docRef: ', docRef)
      const planetDoc = await getDoc(docRef)
      planetData = planetDoc.data()

      console.log('=== BROWSER planetData: ', planetData)
    }

    return {
      props: {
        planet: planetData,
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
