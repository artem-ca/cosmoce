<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'

    const getCollectionDocs = async (collectionName) => {
        let docs = []
        const collectionRef = collection(firestore, collectionName)
        const querySnapshot = await getDocs(collectionRef)

        querySnapshot.forEach((doc) => {
            docs.push(doc.data())
        })

        return docs
    }

    let title = 'cosmoce'
</script>

<div class="text-center">
    Welcome to <a class="uppercase" href="/">{title}</a>
</div>

<div>
    {#await getCollectionDocs('Planets')}
        <p>...loading list</p>
    {:then planets}
        <ul>
            {#each planets as planet}
                <li><a href={`./${planet.name}`}>{planet.name}</a></li>
            {/each}
        </ul>
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
