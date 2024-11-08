<template>

    <Header />

    <Clients />

    <Info />

    <Footer />

</template>



<script>
    import Header from '../components/HeaderSection.vue';
    import Clients from '../components/ClientsSection.vue';
    import Info from '../components/InfoSection.vue';
    import Footer from '../components/FooterSection.vue'

    export default {
        name: 'AboutPage',
        
        
        components: { 
            Header,
            Clients,
            Info,
            Footer
        }
    }
</script>