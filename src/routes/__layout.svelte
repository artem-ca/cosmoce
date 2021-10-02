<script context="module">
    export const ssr = false
    export const prerender = true
</script>

<script>
    import '../app.postcss'

    import Sidebar from '$lib/Sidebar.svelte'
</script>

<!-- <svelte:head>
    {#if $page.path === '/'}
        <title>COSMOCE</title>
    {:else}
        <title>
            COSMOCE | {$page.path}
        </title>
    {/if}
</svelte:head> -->

<section
    class="w-full min-h-screen flex p-5 bg-deep-purple-blue text-pale-white "
>
    <div class="max-w-7xl w-full m-auto flex">
        <Sidebar />
        <slot />
    </div>
</section>
