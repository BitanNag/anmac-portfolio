<template>
    <div class="hero-section">

        <!-- title section starts -->
        <div class="title">
            <p> ANMAC</p>
        </div>
        <!-- title section ends -->

        <!-- image slider section starts -->
        <carousel-component :slides="heroDisplay" :mode="'hero-display'" :key="1"></carousel-component>
        <!-- image slider section ends -->

        <!-- navigation bar section starts -->
        <nav class="nav-bar">
            <ul class="nav-list">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                </li>  <li class="nav-item">
                    <a class="nav-link" href="about.html">About </a>
                </li>  <li class="nav-item">
                    <a class="nav-link" href="fruit.html">Our Products </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="testimonial.html">Testimonial</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contact Us</a>
                </li>
            </ul>
        </nav>

    </div>
</template>

<script>

    import CarouselComponent from './carousel/CarouselComponent.vue'

    export default {
        name: 'HeroArea',


        components: { CarouselComponent },


        data() {
            return {
                heroDisplay: [
                    {
                        id: 1,
                        picture: 'slider-img.jpg'
                    },
                    {
                        id: 2,
                        picture: 'test.jpg'
                    },
                    {
                        id: 3,
                        picture: 'test2.jpg'
                    },
                ]
            }
        },


        mounted() {
        },


        methods: {
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
    }

    .hero-section .nav-bar .nav-list .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-radius: 10px;
        color: white;
    }

    .hero-section .nav-bar .nav-list .nav-item:hover {
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
            position: absolute;
            padding: 5px;
            display: grid;
            width: 80%;
            top: 0;
            left: 50%;
            transform: translate(-50%);
        }

        .hero-section .nav-bar .nav-list {
            padding: 10px 0;
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
