import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// const swiper = new Swiper(".card-wrapper", {
// 	// configure Swiper to use modules
// 	modules: [Navigation, Pagination],
// 	// init: true,
// 	// loop: true,
// 	// preloadImages: true,

// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},

// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},

// 	/* THIS PAL RIGHT HERE*/
// 	slidesPerView: "auto",
// });

const app = createApp(App);
app.use(store);
app.use(router);
// app.use(swiper);
app.mount("#app");
