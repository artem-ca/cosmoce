<script context="module">
    export const ssr = false
    export const prerender = true
</script>

<script>
    import '../app.postcss'

    import Sidebar from '$lib/Sidebar.svelte'
</script>

<svelte:head>
    <title>COSMOCE</title>
</svelte:head>

<section
    class="min-h-screen flex p-3 sm:p-5 bg-deep-purple-blue text-pale-white"
>
    <div class="max-w-7xl w-full m-auto flex min-h-screen">
        <Sidebar />
        <slot />
    </div>
</section>
