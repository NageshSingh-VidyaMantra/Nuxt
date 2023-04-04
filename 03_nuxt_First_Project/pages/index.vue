<template>
    <div>
        <header>
            <nav>
                <main><NuxtLink to="/">Main Link</NuxtLink></main>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/aboutUs">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                </ul>
                <!-- if we use 'anchor tag', it will make a fresh request  to the server for that about route, server will accept that request and pre-render that page and it will send it back to browser-->
                <!-- But it is desired for our website to behave as a SPA, so it is NOT desired to send additional request to the server for other pages, instead we want Nuxt to swap components as per the request made. -->
            </nav>
        </header>
    </div>
    <div>
        <h2>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos totam possimus aliquam ratione est, vitae voluptatibus. Perferendis, aperiam similique?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos totam possimus aliquam ratione est, vitae voluptatibus. Perferendis, aperiam similique?</p>
    </div>
</template>

<script>

</script>