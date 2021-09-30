<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'

    import PlanetCard from '$lib/PlanetCard.svelte'

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

    let Carousel // for saving Carousel component class
    let carousel // for calling methods of carousel instance

    onMount(async () => {
        const module = await import('svelte-carousel')
        Carousel = module.default
    })
</script>

{#await getCollectionDocs('Planets')}
    Данные будут завтра...
{:then planets}
    <div class="flex max-w-xs m-auto">
        <svelte:component this={Carousel} bind:this={carousel}>
            {#each planets as planet}
                <a href={`./${planet.name}`}>
                    <PlanetCard {planet} />
                </a>
            {/each}
        </svelte:component>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<!-- <svelte:component this={Carousel} bind:this={carousel}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
</svelte:component> -->

<!-- <section class="">
    <div class="flex flex-row space-x-10 ">
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
</section> -->
