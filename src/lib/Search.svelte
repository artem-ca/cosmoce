<script>
    import search from '../../static/search.svg'
</script>

<section class="w-full min-w-52">
    <div
        class="flex p-2 bg-deep-purple-blue bg-opacity-90 rounded-lg shadow-md"
    >
        <img
            src={search}
            alt="search"
            class="h-5 w-5 self-center mx-2 opacity-80"
        />

        <input type="text" class="bg-transparent outline-none w-full mx-1" />

        <button
            class="px-4 bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 rounded-lg
                    hover:via-indigo-900"
        >
            Go!
        </button>
    </div>
</section>
