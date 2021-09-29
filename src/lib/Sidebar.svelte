<script>
    import { page } from '$app/stores'

    import home from '../../static/sidebarIcons/home.svg'
    import blog from '../../static/sidebarIcons/blog.svg'
    import glossary from '../../static/sidebarIcons/glossary.svg'
    import profile from '../../static/sidebarIcons/profile.svg'
    import about from '../../static/sidebarIcons/about.svg'

    let current = '/'
    let selected
</script>

<section class="bg-purple-blue rounded-xl min-h-screen">
    <div class="font-semibold text-center mt-8 px-10">DASHBOARD</div>

    <div class="mt-8 space-y-5 px-8">
        <div class="flex ">
            <a
                href="/"
                class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
            >
                <div
                    class="flex space-x-1 cursor-pointer rounded-md"
                    class:active={$page.path === '/'}
                >
                    <img src={home} alt="home" class="w-5 h-5 mt-1" />

                    <p>Home</p>
                </div>
            </a>
        </div>

        <div class="flex">
            <a
                href="/blog"
                class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
            >
                <div
                    class="flex space-x-1 cursor-pointer"
                    class:active={$page.path === '/blog'}
                >
                    <img src={blog} alt="blog" class="w-5 h-5 mt-1" />

                    <p>Blog</p>
                </div>
            </a>
        </div>

        <div class="flex">
            <a
                href="/glossary"
                class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
            >
                <div
                    class="flex space-x-1 cursor-pointer"
                    class:active={$page.path === '/glossary'}
                >
                    <img src={glossary} alt="glossary" class="w-5 h-5 mt-1" />

                    <p>Glossary</p>
                </div>
            </a>
        </div>

        <div class="flex">
            <a
                href="/profile"
                class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
            >
                <div
                    class="flex space-x-1 cursor-pointer"
                    class:active={$page.path === '/profile'}
                >
                    <img src={profile} alt="profile" class="w-5 h-5 mt-1" />

                    <p>Profile</p>
                </div>
            </a>
        </div>

        {#if $page.path === '/about'}
            <div class="flex">
                <a
                    href="/about"
                    class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
                >
                    <div
                        class="flex space-x-1 cursor-pointer"
                        class:active={$page.path === '/about'}
                    >
                        <img src={about} alt="about" class="w-5 h-5 mt-1" />

                        <p>About</p>
                    </div>
                </a>
            </div>
        {:else}
            <div class="flex">
                <a
                    href="/about"
                    class="text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
                >
                    <div
                        class="flex space-x-1 cursor-pointer"
                        class:active={$page.path === '/about'}
                    >
                        <img src={about} alt="about" class="w-5 h-5 mt-1" />

                        <p>About</p>
                    </div>
                </a>
            </div>
        {/if}
    </div>
</section>

<style>
    .active {
        --tw-bg-opacity: 12;
        border-radius: 0.375rem /* 6px */;
        padding-left: 0.25rem /* 4px */;
        padding-right: 0.25rem /* 4px */;

        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #312e81;
        --tw-gradient-to: #312e87;

        --tw-gradient-stops: var(--tw-gradient-from), rgb(164, 83, 218),
            var(--tw-gradient-to, rgba(55, 48, 163, 0));
    }
</style>
