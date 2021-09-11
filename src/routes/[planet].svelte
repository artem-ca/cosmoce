<script>
    import { page } from '$app/stores'
    import { firestore } from '$lib/firebase'
    import { collection, getDocs, query, where } from 'firebase/firestore'

    async function getPlanetData() {
        const collectionRef = collection(firestore, 'Planets')
        const collectionQuery = query(
            collectionRef,
            where('name', '==', $page.params.planet)
        )
        const querySnapshot = await getDocs(collectionQuery)
        let docs = []

        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })

        return docs[0]
    }
</script>

<h1>PLANET PAGE</h1>
{#await getPlanetData()}
    ... loading planet {$page.params.planet}
{:then planet}
    <div>
        NAME: {planet.name}<br />
        DATA: <br />

        {JSON.stringify(planet)}
    </div>
{/await}
