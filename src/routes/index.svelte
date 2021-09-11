<script>
  import { firestore } from '$lib/firebase'
  import { collection, getDocs } from 'firebase/firestore'

  const getCollectionDocs = async (collectionName) => {
    const collectionRef = collection(firestore, collectionName)
    const querySnapshot = await getDocs(collectionRef)

    let docs = []

    querySnapshot.forEach((doc) => {
      docs.push(doc.data())
    })

    return docs
  }
</script>

<h1>Welcome to SvelteKit</h1>

{#await getCollectionDocs('Planets')}
  <p>...loading planets</p>
{:then planets}
  <ul>
    {#each planets as planet}
      <li><a href={`./${planet.name}`}>{planet.name}</a></li>
    {/each}
  </ul>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
