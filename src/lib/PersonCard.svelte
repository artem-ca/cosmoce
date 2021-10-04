<script>
    export let person

    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let birthday = person.dob.toDate()
    let death
    let age
    if (person.dod) {
        death = person.dod.toDate()
        age = death.getFullYear() - birthday.getFullYear()
    } else {
        age = today.getFullYear() - birthday.getFullYear()
    }
</script>

<section>
    <div
        class="m-auto bg-steel-blue rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:brightness-105 cursor-pointer"
    >
        <div class="md:flex">
            <div class="md:flex-shrink-0">
                <div
                    class="h-48 w-full object-cover md:h-full md:w-48 bg-red-400 rounded-xl"
                />
            </div>
            <div class="p-7">
                <div class="flex flex-col md:h-52 md:w-60 w-44">
                    <p class="font-bold">
                        {person.name}
                        {#if person.middle_name}
                            {person.middle_name}
                        {/if}
                        {person.surname}
                    </p>

                    <p>
                        Дата рождения: {birthday.toLocaleDateString()}
                    </p>

                    <!-- <div>
                        {#if !person.dod}
                            <p class="text-sm self-center">
                                {#if age % 10 === 1}
                                    ({age} год)
                                {:else if age % 10 === 0}
                                    ({age} лет)
                                {:else if age % 10 <= 4}
                                    ({age} года)
                                {:else}
                                    ({age} лет)
                                {/if}
                            </p>
                        {:else}
                            <br />
                            <div class="flex">
                                Дата смерти: {death.toLocaleDateString()}
                                &#8291
                                <p class="text-sm self-center">
                                    {#if age % 10 === 1}
                                        ({age} год)
                                    {:else if age % 10 === 0}
                                        ({age} лет)
                                    {:else if age % 10 <= 4}
                                        ({age} года)
                                    {:else}
                                        ({age} лет)
                                    {/if}
                                </p>
                            </div>
                        {/if}
                    </div> -->

                    <!-- <div class="flex">
                        {#if person.dod}
                            Дата смерти: {death.toLocaleDateString()}
                            &#8291
                            <p class="text-sm self-center">
                                {#if age % 10 === 1}
                                    ({age} год)
                                {:else if age % 10 === 0}
                                    ({age} лет)
                                {:else if age % 10 <= 4}
                                    ({age} года)
                                {:else}
                                    ({age} лет)
                                {/if}
                            </p>
                        {/if}
                    </div> -->

                    {#if person.time_in_space}
                        <p>Время в космосе: {person.time_in_space}</p>
                    {/if}

                    <p>Достижения: <br /> {person.achievement}</p>
                </div>

                <!-- <p class="mt-2 text-gray-500">
                
            </p> -->
            </div>
        </div>
    </div>
</section>

<!-- <section>
    <div
        class="bg-steel-blue md:flex rounded-xl md:flex-shrink-0 sm-max-w md-max-w "
    >
        <div class="md:px-12 py-16 md:py-24  min-w-44 bg-red-400 rounded-xl ">
            Person photo
        </div>
        <div class="flex flex-col p-5 px-7  w-60 md:w-full">
            <p class="font-bold">
                {person.name}
                {#if person.middle_name}
                    {person.middle_name}
                {/if}
                {person.surname}
            </p>

            <p>
                Дата рождения: {birthday.toLocaleDateString()}
                <br />
                {#if age % 10 === 1}
                    ({age} год)
                {:else if age % 10 === 0}
                    ({age} лет)
                {:else if age % 10 <= 4}
                    ({age} года)
                {:else}
                    ({age} лет)
                {/if}
            </p>

            {#if person.time_in_space}
                <p>Время в космосе: {person.time_in_space}</p>
            {/if}

            <p>Достижения: <br /> {person.achievement}</p>
        </div>
    </div>
</section> -->
<style>
    .sm-max-w {
        max-width: 300px;
    }

    .md-max-w {
        max-width: 450px;
    }
</style>
