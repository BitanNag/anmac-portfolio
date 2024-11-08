<template>

    <div class="client-section">

        <div class="title-container">
            <h2> What our Customers Say </h2>
            <hr>
        </div>     

        <!-- image slider section starts -->
        <carousel-component :slides="$store.state.clients" :mode="'clients-display'" :key="2"></carousel-component>
        <!-- image slider section ends -->

    </div>

</template>



<script>

    import CarouselComponent from './carousel/CarouselComponent.vue'

    export default {
        name: 'ClientsSection',


        components: { CarouselComponent },
    }
</script>



<style scoped>
    /* .client-section {
        
    } */

    .client-section .title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 100px;
        padding: 10px 0;
    }

    .client-section .title-container h2 {
        font-size: 28px;
        font-weight: 500;
    }

    .client-section .title-container hr {
        width: 20%;
        height: 1px;
        border: none;
        margin: 0;
        margin-left: 10px;
        background-color: #b7b7b7;
    }

</style>