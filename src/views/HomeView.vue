<template>
	<div class="main-container">
		<!-- ***** Home Page ***** -->
		<Hero />

		<div class="display-section">
			<div class="container">
				<div class="box">
					<div class="detail-box">
						<h2>Anmac Exports</h2>
						<p>Member of FIEO (Federation of Indian Exporters Organisation)</p>
					</div>
				</div>
			</div>
		</div>

		<About />

		<Products :isProductsSection="true" />

		<ContactForm />

		<Info />

		<Footer />
	</div>
</template>

<script>
	import Hero from "../components/HeroSection.vue";
	import About from "../components/AboutSection.vue";
	import Products from "../components/ProductsSection.vue";
	import ContactForm from "../components/ContactSection.vue";
	import Info from "../components/InfoSection.vue";
	import Footer from "../components/FooterSection.vue";

	export default {
		name: "App",

		components: {
			Hero,
			About,
			Products,
			ContactForm,
			Info,
			Footer,
		},
	};
</script>

<style scoped>
	/* styling for display section starts */
	.display-section {
		padding: 30px 0;
	}

	.display-section .box {
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		text-align: center;
	}

	.display-section .box .detail-box h2 {
		font-weight: bold;
		font-size: 3rem;
		text-transform: uppercase;
		margin-top: 5px;
	}

	.display-section .box .detail-box p {
		margin-bottom: 0;
	}

	.display-section .box .img-box img {
		max-width: 100%;
	}

	.display-section .box .btn-box {
		margin-top: 25px;
	}

	.display-section .box .btn-box a {
		display: inline-block;
		padding: 8px 40px;
		background-color: #313131;
		border: 1px solid #313131;
		color: #ffffff;
		text-decoration: none;
	}

	.display-section .box .btn-box a:hover {
		background-color: transparent;
		color: #313131;
	}

	@media (max-width: 992px) {
		.display-section {
			margin-top: 115px;
		}
	}

	/* styling for display section ends */

	/* styling for scrollbar */
	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background: transparent;
	}

	::-webkit-scrollbar-thumb {
		background: #fd9e2e;
		border-radius: 10px;
	}
	/* styling for scrollbar */
</style>
