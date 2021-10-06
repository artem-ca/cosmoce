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

    <div class="flex justify-center my-10 gap-x-5">
        <div
            class="bg-red-400 w-32 h-32 md:w-44 md:h-44 lg:h-56 lg:w-56 rounded-2xl"
        />
        <div
            class="bg-red-400 w-32 h-32 md:w-44 md:h-44 lg:h-56 lg:w-56 rounded-2xl"
        />
        <div
            class="bg-red-400 w-32 h-32 md:w-44 md:h-44 lg:h-56 lg:w-56 rounded-2xl"
        />
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

    <div class="mt-10">
        <div class="text-center">DESIGN</div>
    </div>
</section>
