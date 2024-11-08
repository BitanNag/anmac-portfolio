<template>

    <div class="carousel-controls" :style="styles.carouselControlsStyle">
        <button class="carousel-button prev" @click="$emit('prev', 'prev')" :style="styles.carouselButtonStyle"><span>&lt;</span></button>
        <button class="carousel-button next" @click="$emit('next', 'next')" :style="styles.carouselButtonStyle"><span>&gt;</span></button>
    </div>

</template>



<script>
    export default {
        props: ['mode'],


        data: () => ({
            styles: {
                carouselControlsStyle: undefined,
                carouselButtonStyle: undefined
            }
        }),
        
        
        created() {
            if(this.mode === 'clients-display') {
                this.styles.carouselControlsStyle = 'top: 30%';
                this.styles.carouselButtonStyle = 'background-color: black; border: 1px solid transparent; border-radius: 50%;'
            } else {
                this.styles.carouselControlsStyle = 'top: 50%';
                this.styles.carouselButtonStyle = 'background-color: rgba(0, 0, 0, 0.3); border: 1px solid transparent; border-radius: 20px;'
            }
        }
    }
</script>



<style scoped>
    .carousel-controls {
        position: absolute;
        width: calc(100% - 20px);
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;    
        top: 50%;
        transform: translateY(-50%);   
        margin: 5px;
    }

    .carousel-button {
        cursor: pointer;
        z-index: 10;
        color: white;
        padding: 20px;
        font-size: 18px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* outline: 1px solid transparent; */
    }

    .carousel-button:hover {
        border: 2px solid black !important;
        background-color: rgba(211, 211, 211, 0.5) !important;
        color: black;
    }
</style>