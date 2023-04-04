<script setup>
// /products/:id
const { productId } = useRoute().params;
</script>

<template>
    <div>
        <h2>Product detail for {{ productId }}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos totam possimus aliquam ratione est,
            vitae voluptatibus. Perferendis, aperiam similique?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eos totam possimus aliquam ratione est,
            vitae voluptatibus. Perferendis, aperiam similique?</p>
    </div>
</template>