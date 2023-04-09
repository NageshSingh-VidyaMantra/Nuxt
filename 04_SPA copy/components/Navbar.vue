<template>
    <nav
        class="z-50 fixed w-full flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between items-center py-5 px-10 bg-gray-100 shadow-sm border-b-[1px]">
        <main><a class="text-2xl" v-on:click="onClickHandler('logo')" href="#">LOGO</a></main>
        <ul class="flex justify-evenly space-x-10 bg-gray-300 p-2 rounded-lg w-[300px]">
            <li><a v-on:click="onClickHandler('home')" class="hover:border-b-2 border-gray-400"
                    :class="{ 'border-b-2 border-gray-400': homeSelected }" href="#home">Home</a></li>
            <li><a v-on:click="onClickHandler('about')" class="hover:border-b-2 border-gray-400"
                    :class="{ 'border-b-2 border-gray-400': aboutSelected }" href="#about">About</a></li>
            <li><a v-on:click="onClickHandler('login')" class="hover:border-b-2 border-gray-400"
                    :class="{ 'border-b-2 border-gray-400': loginSelected }" href="#login">Login</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const homeSelected = ref(false)
const aboutSelected = ref(false)
const loginSelected = ref(false)

function onClickHandler(type) {
    switch (type) {
        case 'home':
            homeSelected.value = true;
            aboutSelected.value = false;
            loginSelected.value = false;
            break;

        case 'about':
            homeSelected.value = false;
            aboutSelected.value = true;
            loginSelected.value = false;
            break;

        case 'login':
            homeSelected.value = false;
            aboutSelected.value = false;
            loginSelected.value = true;
            break;

        case 'logo':
            homeSelected.value = false;
            aboutSelected.value = false;
            loginSelected.value = false;
            break;

        default:
            break;
    }
}
</script>