<template>
    <div class="hero-section" id="home-section">

        <!-- title section starts -->
        <!-- <div class="title">
            <p> ANMAC</p>
        </div> -->
        <!-- title section ends -->

        <!-- image slider section starts -->
        <carousel-component :slides="$store.state.heroDisplay" :mode="'hero-display'" :key="1"></carousel-component>
        <!-- image slider section ends -->

        <!-- navigation bar section starts -->
        <nav class="nav-bar">
            <ul class="nav-list">
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/">Home</router-link> -->
                    <button @click="scrollToElement('#home-section')">Home</button>
                </li>  
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/about">About</router-link> -->
                    <button @click="scrollToElement('#about-section')">About</button>
                </li>  
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/products">Products</router-link> -->
                    <button @click="scrollToElement('#products-section')">Products</button>
                </li>
                <!-- <li class="nav-item">
                    <router-link class="nav-link" to="/testimonial">Testimonial</router-link>
                    <button>Testimonial</button>
                </li> -->
                <li class="nav-item">
                    <!-- <router-link class="nav-link" to="/contactUs">Contact</router-link> -->
                    <button @click="scrollToElement('#contact-section')">Contact</button>
                </li>
            </ul>
        </nav>   

    </div>
</template>

<script>
    import VueScrollTo from 'vue-scrollto';
    import CarouselComponent from './carousel/CarouselComponent.vue';

    export default {
        name: 'HeroArea',


        components: { CarouselComponent },


        methods: {
            scrollToElement(element) {
                VueScrollTo.scrollTo(element, 500, {
                    easing: 'ease-in-out',
                    offset: -100,
                    force: false,
                    cancelable: true,
                    onStart: function () {
                        console.log('Scroll started');
                    },
                    onDone: function () {
                        console.log('Scroll finished');
                    },
                    onCancel: function () {
                        console.log('Scroll canceled');
                    },
                    x: false,
                    y: true
                });
            }
        }
    }

</script>



<style scoped>
    
    .hero-section {
		height: 700px;
		width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 0 50px 0;
	} 

    .hero-section .title {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        top: 2px;
    }

    .hero-section .title > p {
        color: white;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: -2px;
        margin-top: 5px;
    }

    .hero-section .nav-bar {
        position: relative;
        transform: translateY(-40px);
        width: 60%;
        z-index: 10; 
    }

    .hero-section .nav-bar .nav-list {
        position: absolute;
        width: 100%;
        padding: 15px 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #252525;
        list-style-type: none;
        border-radius: 10px;
        gap: 30px;
    }

    .hero-section .nav-bar .nav-list .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .hero-section .nav-bar .nav-list .nav-item button {
        background: transparent;
        outline: none;
        border: none;
        padding: 10px;
        width: 100px;
        color: white;
        font-size: 16px;
        border-radius: 10px;
        cursor: pointer;
    }

    .hero-section .nav-bar .nav-list .nav-item button:hover {
        background-color: lightgray;
        color: black;
    }

    .hero-section .nav-bar .nav-list .nav-item .nav-link {
        text-decoration: none;
        color: inherit;
        margin: 0 30px;
        padding: 0;
        text-align: center;
    }


    @media (max-width: 992px) and (min-width: 863px) {
        .hero-section .nav-bar {
            width: 90%;
        }
    }


    @media (max-width: 863px) {
        .hero-section {
            overflow: hidden;
            height: 700px;
        }

        .hero-section .nav-bar {
            position: relative;
            padding: 5px;
            display: grid;
            width: 80%;
            bottom: 25%;
        }

        .hero-section .nav-bar .nav-list {
            padding: 10px 0;
            top: 100%;
            display: flex;
            flex-flow: wrap;
            height: fit-content;
        }

        .hero-section .nav-bar .nav-list .nav-item .nav-link {
            text-align: center;
            flex-basis: 33.333%;
        }
    }
</style>
