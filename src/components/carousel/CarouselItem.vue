<template>

    <transition :name="transitionEffect">
        <div class="carousel-item" v-show="currentSlideNumber === index" :style="styles.carouselItemStyle">

            <div class="img-box" :style="styles.imageBoxStyle">
                <img :src="require(`../../assets/images/${(mode === 'hero-display' ? 'hero-display/' : 'client-pictures/') + slide.picture}`)" alt="" :style="styles.imageStyle">
            </div>

            <div class="detail-box" v-if="mode === 'clients-display'">
                <h3>{{slide.name}}</h3>
                <p>
                    <img src="../../assets/images/quotation-marks/left-quote.png" alt="">
                        {{slide.testimonial}}
                    <img src="../../assets/images/quotation-marks/right-quote.png" alt="">
                </p>
            </div>

        </div>
    </transition>


</template>



<script>
    export default {
        props: ['slide', 'currentSlideNumber', 'index', 'direction', 'mode'],


        data: () => ({
            styles: {
                carouselItemStyle: undefined,
                imageBoxStyle: undefined,
                imageStyle: undefined
            }
        }),


        computed: {
            transitionEffect() {
                return this.direction === 'left' ? 'slide-in' : 'slide-out';
            }
        },


        created() {
            if(this.mode === 'clients-display') {
                this.styles.carouselItemStyle = 'padding: 30px';
                this.styles.imageBoxStyle = 'margin: 20px 0';
                this.styles.imageStyle = 'display : block; width: 250px; height: 300px; border: 2px solid goldenrod; border-radius: 50%'
            } else {
                this.styles.carouselItemStyle = 'padding: 0px; width: 100%; height: 100%;';
                this.styles.imageBoxStyle = 'margin: 0px; width: 100%; height: 100%;';
                this.styles.imageStyle = 'display : block; width: 100%; height: 100%;'
            }
        }
    }
</script>



<style scoped>
    .carousel-item {
        height: fit-content;

        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }

    .carousel-item .img-box > img {
        object-fit: cover;
        object-position: center;
    }

    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active {
        transition: all 1s ease-in-out;
    }

    .slide-in-enter-from {
        transform: translateX(-100%);
    }

    .slide-in-leave-to {
        transform: translateX(100%);
    }

    .slide-out-enter-from {
        transform: translateX(100%);
    }

    .slide-out-leave-to {
        transform: translateX(-100%);
    }


    .carousel-item .detail-box {
        width: 500px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .carousel-item .detail-box > p {
        text-align: center;
        margin: 10px 0;
    }


    @media (max-width: 992px) {
        .carousel-item .detail-box {
            width: 290px;
        }
    }
</style>