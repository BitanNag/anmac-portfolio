<template>
    <div class="footer-section">
        <p>&copy;{{currentYear}}&nbsp; All Rights Reserved.</p>
    </div>
</template>



<script>
    export default {
        name: 'FooterSection',


        data() {
            return {
                currentYear: new Date().getFullYear()
            }
        }
    }
</script>



<style scoped>
    .footer-section {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .footer-section > p {
        margin: 0;
        height: 30px;
    }
</style>