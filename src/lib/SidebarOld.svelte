<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'
    // import { goto, invalidate, prefetch, prefetchRoutes } from '$app/navigation'

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

<nav
    class="p-10 flex flex-col bg-black text-pale-white space-y-5 border-r w-48 h-screen fixed"
>
    <div class="flex flex-col text-3xl space-y-5">
        <p class="text-base">←Menu</p>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </div>
    <div class="flex flex-col text-3xl space-y-5">
        <p class="text-base">Planets</p>
        {#await getCollectionDocs('Planets')}
            <p>...loading planets</p>
        {:then planets}
            <ul class="space-y-5">
                {#each planets as planet}
                    <li>
                        <a sveltekit:prefetch href={`./${planet.name}`}
                            >{planet.name}</a
                        >
                    </li>
                {/each}
            </ul>
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
</nav>
