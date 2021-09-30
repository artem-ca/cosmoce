<script>
    export let person

    let now = new Date()
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    let birthday = person.dob.toDate()
    let age
    if (person.dod) {
        let death = person.dod.toDate()
        age = death.getFullYear() - birthday.getFullYear()
    } else {
        age = today.getFullYear() - birthday.getFullYear()
    }
</script>

<section>
    <div class="bg-steel-blue flex rounded-xl">
        <div class="px-12 py-24 bg-red-400 rounded-xl">Person photo</div>
        <div class="flex flex-col p-5 pr-7">
            <p class="font-bold">
                {person.name}
                {#if person.middle_name}
                    {person.middle_name}
                {/if}
                {person.surname}
            </p>

            <p>
                Дата рождения: {birthday.toLocaleDateString()}
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
</section>
