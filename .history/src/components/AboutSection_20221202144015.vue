<template>
      <!-- about section -->

    <section class="about-section">
            <div class="img-box">
                <img src="../assets/images/about-img.jpg" alt="">
            </div>
            <div class="detail-box">
                <div class="title-container">
                <hr>
                <h2>About our Business</h2>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                <a href="">Read More</a>
            </div>
    </section>

    <!-- end about section -->
</template>



<script>
    export default {
        name: 'AboutSection'
    }   
</script>



<style scoped>
    .about-section {
        display: flex;
        margin-top: 100px;
    }

    .about-section .img-box {
        width: 50%;
        padding: 35px 0;
        background-color: #ececec;
    }

    .about-section .img-box img {
        width: 100%;
        -webkit-transform: translateX(45px);
        transform: translateX(45px);
    }

    .about-section .detail-box {
        text-align: center;
        padding: 35px 45px;
        margin: 0 20px;
    }

    .about-section .detail-box .title-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .about-section .detail-box .title-container hr {
        width: 1px;
        height: 145px;
        margin: 0;
        border: none;
        background-color: #b7b7b7;
        margin-bottom: 10px;
    }

    .about-section .detail-box .title-container h2 {
        font-size: 28px;
        font-weight: 500;
    }

    .about-section .detail-box p {
        margin-top: 10px;
    }

    .about-section .detail-box a {
        display: inline-block;
        padding: 10px 40px;
        background-color: #313131;
        border: 1px solid #313131;
        color: #ffffff;
        margin-top: 10px;
        text-decoration: none;
    }

    .about-section .detail-box a:hover {
        background-color: transparent;
        color: #313131;
    }


    @media (max-width: 992px) {
        .about-section {
            flex-direction: column;
        }

        .about-section .img-box {
            width: 100%;
            padding: 0;
            display: flex;
            justify-content: center;
            margin: 0 0 60px 0;
        }

        .about-section .img-box img {
            width: 95%;
            transform: translate(0, 60px)
        }
    }
</style>