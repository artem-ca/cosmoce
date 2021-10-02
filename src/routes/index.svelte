<script context="module">
    export const ssr = false
    export const prerender = true
</script>

<script>
    import HomePosts from '$lib/HomePosts.svelte'
    import Navbar from '$lib/Navbar.svelte'
    import PersonCard from '$lib/PersonCard.svelte'
    import PlanetCard from '$lib/PlanetCard.svelte'
    import PlanetsLine from '$lib/PlanetsLine.svelte'
    import PeopleLine from '$lib/PeopleLine.svelte'

    import Search from '$lib/Search.svelte'

    import menu from '../../static/menu.svg'
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
        <a class="my-3 flex space-x-2" href="/blog">
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
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>

            <p class="">Recommended</p>
        </a>
        <HomePosts />
    </div>

    <div class="mt-5">
        <a class="flex my-3 space-x-2" href="/planets">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>

            <p>Planets</p>
        </a>
    </div>

    <PlanetsLine />

    <div class="mt-5">
        <PeopleLine />
    </div>
    <!-- <div class="mt-5">
        <div class="m-auto border-2 w-80 h-32 bg-gray-300 rounded-lg flex">
            <div class="bg-red-400 w-20 h-20 rounded-full relative" />
            <div class="bg-red-400 w-20 h-20 rounded-full relative" />
        </div>
    </div> -->

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
