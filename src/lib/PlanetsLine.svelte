<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'

    import PlanetCard from '$lib/PlanetCard.svelte'

    import { onMount } from 'svelte'

    import mercury from '../../static/pics/mercury.png'
    import venus from '../../static/pics/venus.png'
    import earth from '../../static/pics/earth.png'
    import mars from '../../static/pics/mars2.png'
    import jupiter from '../../static/pics/jupiter.png'
    import saturn from '../../static/pics/saturn.png'
    import uran from '../../static/pics/uranus.png'
    import neptune from '../../static/pics/neptune.png'
    import pluto from '../../static/pics/pluto.png'

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

    var planets = [
        ['Меркурий', mercury],
        ['Венера', venus],
        ['Земля', earth],
        ['Марс', mars],
        ['Юпитер', jupiter],
        ['Сатурн', saturn],
        ['Уран', uran],
        ['Нептун', neptune],
        // ['Плутон', pluto],
    ]
</script>

<!-- {#await getCollectionDocs('Planets')}
    Данные будут завтра...
{:then planets}
    <div class="m-auto">
        <svelte:component
            this={Carousel}
            bind:this={carousel}
            dots={false}
            particlesToShow={5}
            particlesToScroll={1}
            initialPageIndex={4}
        >
            {#each planets as planet}
                <div class="flex flex-row justify-center ">
                    <a href={`./${planet.name}`} class="">
                        <PlanetCard {planet} />
                    </a>
                </div>
            {/each}
        </svelte:component>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await} -->

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

<section>
    <div class=" m-auto w-60">
        <svelte:component
            this={Carousel}
            bind:this={carousel}
            dots={false}
            particlesToShow={1}
            particlesToScroll={1}
            initialPageIndex={0}
        >
            {#each planets as planet}
                <div class="flex flex-row justify-center ">
                    <PlanetCard {planet} />
                </div>
            {/each}
        </svelte:component>
    </div>
</section>

<style>
    .fukk {
        max-width: 960px;
    }
</style>
