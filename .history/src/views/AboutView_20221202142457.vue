<template>

    <Header />

    <About />

    <Info />

    <Footer />

</template>



<script>
    import Header from '../components/HeaderSection.vue';
    import About from '../components/AboutSection.vue';
    import Info from '../components/InfoSection.vue';
    import Footer from '../components/FooterSection.vue'

    export default {
        name: 'AboutPage',
        
        
        components: { 
            Header,
            About,
            Info,
            Footer
        }
    }
</script>