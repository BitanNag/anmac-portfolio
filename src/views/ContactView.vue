<template>

    <Header />

    <ContactForm />

    <Info />

    <Footer />

</template>



<script>
    import Header from '../components/HeaderSection.vue';
    import ContactForm from '../components/ContactSection.vue';
    import Info from '../components/InfoSection.vue';
    import Footer from '../components/FooterSection.vue'

    export default {
        name: 'AboutPage',
        
        
        components: { 
            Header,
            ContactForm,
            Info,
            Footer
        }
    }
</script>