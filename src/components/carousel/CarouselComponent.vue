<template>

    <div class="carousel" :style="styles.carouselStyle">
        <div class="carousel-inner" :style="styles.carouselInnerStyle">
            <carousel-item 
                v-for="(slide, index) in slides" 
                :key="`item-${index}`" 
                :slide="slide"
                :currentSlideNumber="currentSlideNumber"
                :index="index"
                :direction="direction"
                :mode="mode"
            ></carousel-item>
            <carousel-controls :mode="mode" @prev="changeCurrentSlide" @next="changeCurrentSlide"></carousel-controls>
        </div>
    </div>

</template>



<script>

    import CarouselItem from './CarouselItem.vue';
    import CarouselControls from './CarouselControls.vue';

    export default {
        props: ['slides', 'mode'],


        components: { CarouselItem, CarouselControls },


        data: () => ({
            currentSlideNumber: 0,
            slideInterval: null,
            direction: 'right',
            styles: {
                carouselStyle: undefined,
                carouselInnerStyle: undefined,
            }
        }),


        created() {
            if(this.mode === 'clients-display') {
                this.styles.carouselStyle = 'padding: 30px',
                this.styles.carouselInnerStyle = 'width: 900px; height: 700px;'
            } else {
                this.styles.carouselStyle = 'padding: 0; width: 100%; height: 100%',
                this.styles.carouselInnerStyle = 'width: 100%; height: 100%'
            }
        },


        mounted() {
            this.startSlideTimer();
        },


        beforeUnmount() {
            this.stopSlideTimer();
        },


        methods: {
            setCurrentSlide(index) {
                this.currentSlideNumber = index;
            },

            changeCurrentSlide(action) {
                this.stopSlideTimer();

                const index = action === "prev" ? (this.currentSlideNumber > 0 ? this.currentSlideNumber - 1 : this.slides.length - 1) : (this.currentSlideNumber < this.slides.length - 1 ? this.currentSlideNumber + 1 : 0);
                this.direction = action === "prev" ? "left" : "right";
                this.setCurrentSlide(index);
                
                this.startSlideTimer();
            },

            stopSlideTimer() {
                clearInterval(this.slideInterval);
            },

            startSlideTimer() {
                this.slideInterval = setInterval(() => {
                    this.changeCurrentSlide('next')
                }, 5000);
            }
        }
    }

</script>



<style scoped>
    .carousel {
        display: flex;
        justify-content: center;
    }

    .carousel-inner {
        position: relative;
        overflow: hidden;
    }   
</style>