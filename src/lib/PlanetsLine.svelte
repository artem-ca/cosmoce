<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'

    import PlanetCard from '$lib/PlanetCard.svelte'

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

<section>
    <a class="flex my-3 space-x-2" href="/planets">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>

        <p>Planets</p>
    </a>

    <div class="flex flex-row space-x-10">
        {#await getCollectionDocs('Planets')}
            Данные будут завтра...
        {:then planets}
            {#each planets as planet}
                <a href={`./${planet.name}`}>
                    <PlanetCard {planet} />
                </a>
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
</section>
