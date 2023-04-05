<template>
    <nav class="fixed w-full flex justify-between py-5 px-10 bg-gray-100 shadow-sm border-b-[1px]">
        <main><a v-on:click="onClickHandler('logo')" href="#">LOGO</a></main>
        <ul class="flex space-x-10">
            <li><a v-on:click="onClickHandler('home')" class="hover:border-b-2 border-gray-400"
                    :class="{'border-b-2 border-gray-400' : homeSelected}" href="#home">Home</a></li>
            <li><a v-on:click="onClickHandler('about')" class="hover:border-b-2 border-gray-400"
                    :class="{'border-b-2 border-gray-400' : aboutSelected}" href="#about">About</a></li>
            <li><a v-on:click="onClickHandler('login')" class="hover:border-b-2 border-gray-400"
                    :class="{'border-b-2 border-gray-400' : loginSelected}" href="#login">Login</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const homeSelected = ref(false)
const aboutSelected = ref(false)
const loginSelected = ref(false)
const logoSelected = ref(false)

function onClickHandler(type) {
    switch (type) {
        case 'home':
            homeSelected.value = true;
            aboutSelected.value = false;
            loginSelected.value = false;
            logoSelected.value = false;
            break;

        case 'about':
            homeSelected.value = false;
            aboutSelected.value = true;
            loginSelected.value = false;
            logoSelected.value = false;
            break;

        case 'login':
            homeSelected.value = false;
            aboutSelected.value = false;
            loginSelected.value = true;
            logoSelected.value = false;
            break;

        case 'logo':
            homeSelected.value = false;
            aboutSelected.value = false;
            loginSelected.value = false;
            logoSelected.value = true;
            break;

        default:
            break;
    }
}
</script>