<template>

    <Header />

    <Products />

    <Info />

    <Footer />

</template>



<script>
    import Header from '../components/HeaderSection.vue';
    import Products from '../components/ProductsSection.vue';
    import Info from '../components/InfoSection.vue';
    import Footer from '../components/FooterSection.vue'

    export default {
        name: 'ProductsView',


        components: {
            Header,
            Products,
            Info,
            Footer
        }
    }
</script>