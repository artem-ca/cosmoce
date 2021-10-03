<script context="module">
    export const ssr = false
    export const prerender = true
</script>

<script>
    import Search from '$lib/Search.svelte'
    import Navbar from '$lib/Navbar.svelte'
    import HomePosts from '$lib/HomePosts.svelte'

    import menu from '../../static/menu.svg'
    import chart from '../../static/chart-square.svg'

    import jupiter from '../../static/pics/jupiter.png'
</script>

<section class="w-full min-h-screen m-auto p-7 rounded-xl bg-purple-blue">
    <div class="flex ">
        <img
            src={menu}
            alt="menu"
            class="block sm:hidden w-6 h-6 mr-5 self-center "
        />

        <Search />
        <Navbar />
    </div>

    <div class="mt-7">
        <div class="flex my-3">
            <a class="flex space-x-2 hover:opacity-80" href="/blog">
                <img src={chart} alt="menu" class=" w-6 h-6 self-center " />

                <p class="">Recommended</p>
            </a>
        </div>
        <HomePosts />
    </div>

    <div class="mt-7">
        <div class="flex my-3">
            <a class="flex space-x-2 hover:opacity-80" href="/blog">
                <img src={chart} alt="menu" class=" w-6 h-6 self-center " />

                <p class="">Recommended</p>
            </a>
        </div>
        <HomePosts />
    </div>

    <div class="mt-7">
        <div class="flex my-3">
            <a class="flex space-x-2 hover:opacity-80" href="/blog">
                <img src={chart} alt="menu" class=" w-6 h-6 self-center " />

                <p class="">Recommended</p>
            </a>
        </div>
        <HomePosts />
    </div>

    <div class="mt-5">
        <div class="m-auto border-2 w-80 h-32 bg-gray-300 rounded-lg flex">
            <div class="bg-red-400 w-20 h-20 rounded-full relative" />
            <div class="bg-red-400 w-20 h-20 rounded-full relative" />
        </div>
    </div>

    <div class="mt-10">
        <div class="text-center">DESIGN</div>
    </div>
</section>

<style>
    .back {
        background: rgba(255, 255, 255, 0.07);
        box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
        backdrop-filter: blur(7px);
        -webkit-backdrop-filter: blur(7px);
    }
</style>
