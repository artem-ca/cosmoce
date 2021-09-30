<script context="module">
    export const prerender = true
</script>

<script>
    import { page } from '$app/stores'
    import { firestore } from '$lib/firebase'
    import { collection, getDocs, query, where } from 'firebase/firestore'
    import { onMount } from 'svelte'

    const getCollectionDocs = async (collectionName) => {
        let docs = []
        const collectionRef = collection(firestore, collectionName)
        const querySnapshot = await getDocs(collectionRef)

        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })

        return docs
    }

    async function getPlanetData() {
        let docs = []
        const collectionRef = collection(firestore, 'Planets')
        const collectionQuery = query(
            collectionRef,
            where('name', '==', $page.params.planet)
        )

        const querySnapshot = await getDocs(collectionQuery)
        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })
        return docs[0]
    }
</script>

<!-- {#await getCollectionDocs('Planets')}
    <p>...loading list</p>
{:then planets}
    <ul>
        {#each planets as planet}
            <li><a href={`./${planet.name}`}>{planet.name}</a></li>
        {/each}
    </ul>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await} -->

<section class="flex m-auto p-20">
    <div class="text-center text-3xl font-bold">
        {#await getPlanetData()}
            <p class="p-5">
                ... loading planet {$page.params.planet}
            </p>
        {:then planet}
            <div class="p-5">
                <p class="text-5xl font-bold">
                    {planet.name}
                </p>
                <p>От Солцна: {planet.seq_number}</p>
                <p>Спутников: {planet.satellites}</p>
                <div>
                    Средняя температура:
                    <b class="font-semibold">
                        {planet.temp_average}
                    </b>
                </div>
            </div>
        {/await}
    </div>
</section>
