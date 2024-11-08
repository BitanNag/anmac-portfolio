<template>

    <div class="contact-section">

        <div class="title">
            <div class="title-container">
                <hr>
                <h2>Request a Callback</h2>
            </div>
        </div>

        <div class="body">
            <div class="form-container">
                <form @submit.prevent>
                    <small style="color: red;" v-if="errorMessage">{{errorMessage}}</small>
                    <input type="text" placeholder="Full Name" class="name-input" v-model="name">
                    <input type="email" placeholder="Email" class="email-input" v-model="email">
                    <input type="number" placeholder="Phone Number" class="number-input" v-model="phoneNumber">
                    <textarea name="text" placeholder="Message" class="message-input" rows="14" cols="10" wrap="soft" maxlength="500" v-model="message"></textarea>
                    <button class="submit-button" @click="submitInput()">Send</button>
                </form>           
            </div>
            <div class="map-container">
                <iframe :src="$store.state.mapLink" frameborder="0"></iframe>
            </div>
        </div>

    </div>

</template>



<script>
    import axios from 'axios';

    export default {
        name: 'ContactSection',


        data() {
            return {
                name: null,
                email: null,
                phoneNumber: null,
                message: null,

                errorMessage: null
            }
        },


        methods: {
            validateEmail(email) {
                return (String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) !== null ? true : false;
            },

            validatePhoneNumber(phoneNumber) {
                try{
                    return (String(phoneNumber).match(/(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g)) !== null ? true: false;
                } catch(error) {
                    return false
                } 
            },

            async submitInput() {
                this.errorMessage = null
                if(!this.name || !this.email || !this.phoneNumber || !this.message) this.errorMessage = 'Please fill out all fields';
                else if(!(this.validateEmail(this.email) && this.validatePhoneNumber(this.phoneNumber))) this.errorMessage = 'Please fill all fields correctly';
                else {
                    try {
                        axios.defaults.headers.post['Content-Type'] = 'application/json';
                        const result = await axios.post('https://formsubmit.co/ajax/bitannag@gmail.com', {
                            name: this.name,
                            email: this.email,
                            message: `${this.message} \n Please contact me at my number: ${this.phoneNumber}`
                        });
                        console.log(result)
                    } catch(error) {
                        this.errorMessage = 'There was an error submitting your form. Please try again later, or contact us at the number provided below.';
                        console.log(error);
                    }
                }
            }
        }
    }
</script>



<style scoped>
    .contact-section {
        position: relative;
        overflow: hidden;
        margin-top: 100px;
        padding: 20px 0;
    }

    .contact-section .title .title-container {
        display: flex;
        align-items: center;
        margin-bottom: 35px;
        transform: translateX(15%);
        padding: 0 0 40px 0;
    }

    .contact-section .title .title-container hr {
        width: 20%;
        height: 1px;
        border: none;
        margin: 0 10px;
        background-color: #b7b7b7;
    }

    .contact-section .title .title-container h2 {
        margin: 0;
        font-size: 28px;
        font-weight: 500;
    }

    .contact-section .body {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contact-section .body .form-container {
        width: 50%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin: 20px 30px;
    }

    .contact-section .body .form-container > form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        width: 70%;
    }

    .contact-section .body .form-container > form > input {
        margin: 20px 0 0 0;
        padding: 10px;
        width: 100%;
        font-size: 16px;
        border: 1px solid transparent;
        box-shadow: 0px 0px 10px lightgray;
    }

    .contact-section .body .form-container > form > input[type=number]::-webkit-inner-spin-button, 
    .contact-section .body .form-container > form > input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }

    .contact-section .body .form-container > form > textarea {
        margin: 20px 0 0 0;
        padding: 10px;
        width: 100%;
        height: 100px;
        font-size: 16px;
        border: 1px solid transparent;
        box-shadow: 0px 0px 10px lightgray;
    }

    /* .contact-section .body .form-container > form > textarea::placeholder {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    } */

    .contact-section .body .form-container > form > input:focus,
    .contact-section .body .form-container > form > textarea:focus {
        outline: none;
    }

    .contact-section .body .form-container > form .submit-button {
        margin: 40px auto 0 0;
        padding: 10px 20px;
        width: 150px;
        font-size: 16px;
        border: 1px solid transparent;
        background-color: #fd9e2e;
        color: white;
        cursor: pointer;
    }

    .contact-section .body .form-container > form .submit-button:hover {
        background-color: white;
        color: #fd9e2e;
        border: 1px solid #fd9e2e;
    }

    .contact-section .body .map-container {
        width: 50%;
        height: 450px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin: 20px 0 0 0;
    }

    .contact-section .body .map-container iframe {
        width: 100%;
        height: 82%;
    }


    @media (max-width: 992px) {
        .contact-section .title .title-container {
            transform: translate(20px, 0);
            margin: 40px auto 0 auto;
        }

        .contact-section .body {
            flex-direction: column;
        }

        .contact-section .body .form-container {
            width: 100%;
            justify-content: center;
        }

        .contact-section .body .form-container > form {
            width: 90%;
        }

        .contact-section .body .map-container {
            width: 100%;
        }
    }

</style>