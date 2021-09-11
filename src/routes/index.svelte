<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs, getDocData } from 'firebase/firestore'

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

    export async function load({ page, fetch }) {
        const planet = getDocData('Planets', '')

        console.log(planet)

        const planets = [{ name: 'TEST' }]

        return {
            props: {
                planet: planets[0],
            },
        }
    }
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
