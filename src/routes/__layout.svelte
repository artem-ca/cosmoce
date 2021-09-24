<script>
    import '../app.postcss'

    import Sidebar from '$lib/Sidebar.svelte'
</script>

<section
    class="min-h-screen p-5 flex text-pale-white 
                bg-deep-purple-blue"
>
    <div class="max-w-7xl w-full m-auto flex">
        <Sidebar />

        <slot />
    </div>
</section>
