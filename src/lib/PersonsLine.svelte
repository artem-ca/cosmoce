<script>
    import { firestore } from '$lib/firebase'
    import { collection, getDocs } from 'firebase/firestore'

    import PersonCard from '$lib/PersonCard.svelte'

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

<a class="my-3 flex space-x-2" href="/people">
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
            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>

    <p>People</p>
</a>

<div
    class="flex flex-wrap sm:flex-row gap-x-10 gap-y-7 justify-center xl:justify-start"
>
    {#await getCollectionDocs('Persons')}
        Данные будут завтра...
    {:then persons}
        {#each persons as person}
            <!-- <a href={`./${person.name}`}> -->
            <PersonCard {person} />
            <!-- </a> -->
        {/each}
    {:catch error}
        <p style="color: red">{error.message}</p>
    {/await}
</div>
