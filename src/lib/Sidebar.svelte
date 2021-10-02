<script>
    import { page } from '$app/stores'

    import home from '../../static/sidebarIcons/home.svg'
    import blog from '../../static/sidebarIcons/blog.svg'
    import glossary from '../../static/sidebarIcons/glossary.svg'
    import profile from '../../static/sidebarIcons/profile.svg'
    import about from '../../static/sidebarIcons/about.svg'
    import logoPlanet from '../../static/sidebarIcons/logoPlanet.svg'

    import logout from '../../static/logout.svg'

    let current = '/'
    let selected
</script>

<section
    class="h-screen bg-purple-blue rounded-xl mr-6 px-5 lg:px-10 py-10 pb-28  hidden sm:block"
>
    <div class="w-max min-h-full  text-lg space-y-5">
        <div class="mb-7 flex justify-center">
            <a href="/" alt="home">
                <img src={logoPlanet} alt="logoPlanet" class="w-8 h-8" />
            </a>
        </div>
        <a
            href="/"
            class="hover:bg-indigo-400 hover:bg-opacity-25 rounded-md w-full flex"
            class:active={$page.path === '/'}
        >
            <div class="flex space-x-1 px-1 ">
                <img src={home} alt="home" class="w-5 h-5 my-1" />

                <p class="hidden lg:block">Home</p>
            </div>
        </a>

        <a
            href="/blog"
            class="hover:bg-indigo-400 hover:bg-opacity-25 rounded-md w-full flex"
            class:active={$page.path === '/blog'}
        >
            <div class="flex space-x-1 px-1">
                <img src={blog} alt="blog" class="w-5 h-5 my-1" />

                <p class="hidden lg:block">Blog</p>
            </div>
        </a>

        <a
            href="/glossary"
            class="hover:bg-indigo-400 hover:bg-opacity-25 rounded-md w-full flex"
            class:active={$page.path === '/glossary'}
        >
            <div class="flex space-x-1 px-1">
                <img src={glossary} alt="glossary" class="w-5 h-5 my-1" />

                <p class="hidden lg:block">Glossary</p>
            </div>
        </a>

        <a
            href="/profile"
            class="flex text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
            class:active={$page.path === '/profile'}
        >
            <div class="flex space-x-1 px-1">
                <img src={profile} alt="profile" class="w-5 h-5 my-1" />

                <p class="hidden lg:block">Profile</p>
            </div>
        </a>

        <a
            href="/about"
            class="flex text-lg w-full hover:bg-indigo-400 hover:bg-opacity-25 rounded-md"
        >
            <div
                class="flex space-x-1 px-1"
                class:active={$page.path === '/about'}
            >
                <img src={about} alt="about" class="w-5 h-5 my-1" />

                <p class="hidden lg:block">About</p>
            </div>
        </a>
    </div>

    <div class="space-y-2">
        <a
            class="mx-4 rounded-xl bg-gradient-to-r text-center 
            from-indigo-600 via-purple-600 to-pink-500 hover:opacity-90
            hidden lg:block"
            href="/login">Log in</a
        >

        <a
            href="/login"
            class="hover:bg-indigo-400 hover:bg-opacity-25 rounded-md flex"
            class:active={$page.path === '/login'}
        >
            <div class="flex space-x-1 px-1">
                <img src={logout} alt="logout" class="w-5 h-5 my-1" />

                <p class="hidden lg:block mt-0.5">Logout</p>
            </div>
        </a>
    </div>
</section>

<style>
    .active {
        --tw-bg-opacity: 12;
        border-radius: 0.375rem /* 6px */;

        background-image: linear-gradient(to right, var(--tw-gradient-stops));
        --tw-gradient-from: #312e81;
        --tw-gradient-to: #312e87;

        --tw-gradient-stops: var(--tw-gradient-from), rgb(164, 83, 218),
            var(--tw-gradient-to, rgba(55, 48, 163, 0));
    }
</style>
