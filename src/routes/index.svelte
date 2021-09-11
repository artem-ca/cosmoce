<script>
    import { firestore } from '$lib/firebase'
    import { PhoneMultiFactorGenerator } from '@firebase/auth'
    import { collection, getDocs } from 'firebase/firestore'

    import Planet from '$lib/Planet.svelte'

    const getCollectionDocs = async (collectionName) => {
        const collectionRef = collection(firestore, collectionName)
        const querySnapshot = await getDocs(collectionRef)

        let docs = []

        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })

        return docs
    }

    let getPlanets = getCollectionDocs('Planets')
</script>

<h1>Welcome to SvelteKit</h1>

{#await getPlanets}
    <p>...loading planets info</p>
{:then planets}
    {#each planets as planet}
        <Planet {planet} />
    {/each}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<p>Hello</p>
