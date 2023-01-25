<template>

    <Header />

    <Contact />

    <Info />

    <Footer />

</template>



<script>
    import Header from '../components/HeaderSection.vue';
    import Contact from '../components/ContactsSection.vue';
    import Info from '../components/InfoSection.vue';
    import Footer from '../components/FooterSection.vue'

    export default {
        name: 'AboutPage',
        
        
        components: { 
            Header,
            Contact,
            Info,
            Footer
        }
    }
</script>