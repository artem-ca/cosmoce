<script>
  import { firestore } from '$lib/firebase'
  import { collection, getDocs, getDocData } from 'firebase/firestore'

  const getCollectionDocs = async (collectionName) => {
    let docs = []
    const collectionRef = collection(firestore, collectionName)
    const querySnapshot = await getDocs(collectionRef)

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
