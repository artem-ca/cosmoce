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
                    class="h-48 w-full object-cover md:h-full md:w-48  rounded-xl 
                    bg-gradient-to-tr from-indigo-600 to-indigo-500"
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

                    <div class="flex">
                        Дата рождения: {birthday.toLocaleDateString()}

                        <!-- &#8291
                        <p class="text-xs self-center">
                            {#if age % 10 === 1}
                                ({age} год)
                            {:else if age % 10 === 0}
                                ({age} лет)
                            {:else if age % 10 <= 4}
                                ({age} года)
                            {:else}
                                ({age} лет)
                            {/if}
                        </p> -->
                    </div>

                    {#if person.time_in_space}
                        <p>Время в космосе: {person.time_in_space}</p>
                    {/if}

                    <p>Достижения: <br /> {person.achievement}</p>
                </div>
            </div>
        </div>
    </div>
</section>
