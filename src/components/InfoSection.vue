<template>
    
    <div class="info-section">

        <div class="info-logo">
            <h1>Anmac &nbsp; Exports</h1>
        </div>

        <div class="contact-info">
            <div class="column general-info">
                <div class="row-item address">
                    <img src="../assets/images/icons/location.png" alt="">
                    <p>212, SN Banerjee Road, Manirampore, PO&PS Barrackpore, Kolkata-700120</p>
                </div>
                <div class="row-item phone">
                    <img src="../assets/images/icons/call.png" alt="">
                    <span>(+91)8777421268</span>
                </div>
                <div class="row-item email">
                    <img src="../assets/images/icons/mail.png" alt="">
                    <span>anmacexports@gmail.com</span>
                </div>
            </div>

            <div class="column social-links">
                <a class="link" href=""><img src="../assets/images/social-links/facebook-logo.png" alt=""><span>&nbsp;&nbsp;Facebook</span></a>
                <a class="link" href=""><img src="../assets/images/social-links/instagram-logo.png" alt=""><span>&nbsp;&nbsp;Instagram</span></a>
                <a class="link" href=""><img src="../assets/images/social-links/linkedin-logo.png" alt=""><span>&nbsp;&nbsp;LinkedIn</span></a>
                <!-- <a class="link" href=""><img src="../assets/images/social-links/twitter-logo.png" alt=""><span>&nbsp;&nbsp;Twitter</span></a> -->
            </div>

            <div class="column page-links">
                <router-link class="link" to="/">Home</router-link>
                <router-link class="link" to="/about">About</router-link>
                <router-link class="link" to="/products">Our Products</router-link>
                <router-link class="link" to="/testimonial">Testimonial</router-link>
                <router-link class="link" to="/contactUs">Contact Us</router-link>
            </div>
        </div>

    </div>

</template>



<script>
export default {
    name: 'InfoSection'
}
</script>



<style scoped>
    .info-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 90px 0;
        margin-top: 50px;
        background-color: #2e2e2e;
    }

    .info-section .info-logo {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
    }

    .info-section .info-logo > h1 {
        color: white;
        font-size: 36px;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: -2px;
    }

    .info-section .contact-info {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info-section .contact-info .column {
        width: 33%;
        height: 300px;
        display: flex;
        padding: 20px;
        margin: 20px 0;
    }

    .info-section .contact-info .column.general-info {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info-section .contact-info .column.general-info .row-item {
        position: relative;
        width: 70%;
        display: flex;
        margin: 20px 0;
        color: white;
        transform: translateX(50px);
    }

    .info-section .contact-info .column.general-info .row-item.email {
        margin: 35px 0 20px -25px;
    }

    .info-section .contact-info .column.general-info .row-item > img {
        margin: 0 10px;
        display: block;
        height: 25px;
    }

    .info-section .contact-info .column.social-links {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .info-section .contact-info .column.social-links .link {
        margin: 20px;
        display: flex;
        align-items: center;
        color: white;
        text-decoration: none;
        width: 120px;
    }

    .info-section .contact-info .column.page-links {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .info-section .contact-info .column.page-links > a {
        position: relative;
        transform: translateX(150px);
        margin: 20px 0;
        color: white;
        text-decoration: none;
    }


    @media (max-width: 992px) {
        .info-section .contact-info {
            flex-direction: column;
        }

        .info-section .contact-info .column {
            width: 100%;
        }

        .info-section .contact-info .column.general-info .row-item {
            width: 80%;
            transform: translate(0);
        }

        .info-section .contact-info .column.social-links {
            flex-direction: row;
            height: 100px;
        }

        .info-section .contact-info .column.social-links .link {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .info-section .contact-info .column.social-links .link > span {
            display: none;
        }

        .info-section .contact-info .column.page-links {
            display: none;
        }
    }
</style>