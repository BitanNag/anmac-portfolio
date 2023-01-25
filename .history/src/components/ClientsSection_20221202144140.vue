<template>

    <div class="client-section">

        <div class="title-container">
            <h2> What our Customers Say </h2>
            <hr>
        </div>     

        <!-- image slider section starts -->
        <carousel-component :slides="clients" :mode="'clients-display'" :key="2"></carousel-component>
        <!-- image slider section ends -->

    </div>

</template>



<script>

    import CarouselComponent from './carousel/CarouselComponent.vue'

    export default {
        name: 'ClientsSection',


        components: { CarouselComponent },


        data() {
            return {
                clients: [
                    {
                        picture: 'client1.jpg',
                        name: 'Anirban Hazra',
                        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
                    },
                    {
                        picture: 'client2.jpg',
                        name: 'Aritra Banerjee',
                        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
                    },
                    {
                        picture: 'client3.jpg',
                        name: 'Subhadeep Datta',
                        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
                    },
                ]
            }
        },
    }
</script>



<style scoped>
    /* .client-section {
        
    } */

    .client-section .title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 110px;
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