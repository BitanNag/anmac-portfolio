<template>

    <div class="header-section">

        <div class="title">
            <p>Anmac</p>
        </div>

        <div class="header-img">
            <img :src="require(`../assets/images/hero-display/${$store.state.heroDisplay[0].picture}`)" alt="">
        </div>

        <nav class="nav-bar">
            <ul class="nav-list">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>  
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>  
                <li class="nav-item">
                    <router-link class="nav-link" to="/products">Our Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/testimonial">Testimonial</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/contactUs">Contact Us</router-link>
                </li>
            </ul>
        </nav>       

    </div>

</template>



<script>
    export default {
        name: 'HeaderSection'   
    }
</script>



<style scoped>

    .header-section {
		height: 200px;
		width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
	} 

    .header-section .title {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        top: 2px;
    }

    .header-section .title > p {
        color: white;
        font-size: 35px;
        font-weight: bold;
        letter-spacing: -2px;
        margin-top: 5px;
    }


    .header-section .header-img {
        width: 100%;
        height: 100%;
    }

    .header-section .header-img > img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    .header-section .nav-bar {
        position: relative;
        width: 100%;
        z-index: 10; 
    }

    .header-section .nav-bar .nav-list {
        position: absolute;
        width: 100%;
        padding: 15px 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #252525;
        list-style-type: none;
    }

    .header-section .nav-bar .nav-list .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 0;
        border-radius: 10px;
        color: white;
    }

    .header-section .nav-bar .nav-list .nav-item:hover {
        background-color: lightgray;
        color: black;
    }

    .header-section .nav-bar .nav-list .nav-item .nav-link {
        text-decoration: none;
        color: inherit;
        margin: 0 30px;
        padding: 0;
        text-align: center;
    }


    @media (max-width: 680px) {
        .header-section {
            overflow: hidden;
            height: 300px;
        }

        .header-section .nav-bar {
            position: absolute;
            padding: 5px;
            display: grid;
        }

        .header-section .nav-bar .nav-list {
            padding: 10px 0;
            display: flex;
            flex-flow: wrap;
        }

        .header-section .nav-bar .nav-list .nav-item .nav-link {
            text-align: center;
            flex-basis: 33.333%;
        }
    }
</style>