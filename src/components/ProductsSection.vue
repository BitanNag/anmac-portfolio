<template>
	<div class="products-section" id="products-section">
		<div class="title-container">
			<hr />
			<h2>Our Products</h2>
		</div>

		<div class="products-container" v-if="isProductsSection">
			<div class="product-box" v-for="item in portfolio" :key="item.id">
				<img :src="require(`../assets/images/products/${item.image}`)" alt="" />
				<div class="box-overlay">
					<h5>{{ item.name }}</h5>
					<span>
						<p>{{ item.description }}</p>
						<ul class="item-variety" v-if="item.variety.length > 0">
							<li v-for="element in item.variety" :key="element">
								{{ element }}
							</li>
						</ul>
					</span>
					<button
						v-if="item.buttonName"
						@click="scrollToElement('#contact-section')"
					>
						{{ item.buttonName }}
					</button>
				</div>
			</div>
		</div>
		<div class="slider-container" v-else>
			<div class="card-wrapper">
				<div class="list-wrapper">
					<h2 class="card-title">Rice Varieties</h2>

					<ul class="card-list">
						<li class="card-item" v-for="item in ricePortfolio" :key="item">
							<a href="#" class="card-link">
								<img
									:src="require(`../assets/images/products/${item.image}`)"
									alt=""
									class="card-image"
								/>
								<p class="badge rice">Rice</p>
							</a>
						</li>
					</ul>
				</div>

				<div class="list-wrapper">
					<h2 class="card-title">Millet Varieties</h2>

					<ul class="card-list">
						<li class="card-item" v-for="item in milletsPortfolio" :key="item">
							<a href="#" class="card-link">
								<img
									:src="require(`../assets/images/products/${item.image}`)"
									alt=""
									class="card-image"
								/>
								<p class="badge millets">Millets</p>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import VueScrollTo from "vue-scrollto";

	export default {
		name: "ProductsSection",

		props: {
			isProductsSection: {
				type: Boolean,
				default: false,
			},
		},

		computed: {
			portfolio() {
				return this.$store.state.portfolio;
			},
			ricePortfolio() {
				return this.$store.state.ricePortfolio;
			},
			milletsPortfolio() {
				return this.$store.state.milletsPortfolio;
			},
		},

		methods: {
			scrollToElement(element) {
				VueScrollTo.scrollTo(element, 500, {
					easing: "ease-in-out",
					offset: -100,
					force: false,
					cancelable: true,
					onStart: function () {
						console.log("Scroll started");
					},
					onDone: function () {
						console.log("Scroll finished");
					},
					onCancel: function () {
						console.log("Scroll canceled");
					},
					x: false,
					y: true,
				});
			},
		},
	};
</script>

<style scoped>
	.products-section {
		overflow: hidden;
		padding: 40px 0;
		margin-top: 100px;
	}

	.products-section .title-container {
		display: flex;
		align-items: center;
		margin-bottom: 35px;
		transform: translateX(15%);
	}

	.products-section .title-container hr {
		width: 15%;
		height: 1px;
		border: none;
		margin: 0 10px;
		background-color: #b7b7b7;
	}

	.products-section .title-container h2 {
		margin: 0;
		font-weight: 500;
		font-size: 28px;
	}

	.products-section .products-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.products-section .products-container .product-box {
		flex: 0 0 31.33%;
		height: 550px;
		margin: 1%;
		position: relative;
		overflow: hidden;
	}

	.products-section .products-container .product-box img {
		width: 100%;
		height: 100%;
	}

	.products-section .products-container .product-box .box-overlay {
		position: absolute;
		left: 0;
		top: 100%;
		width: 100%;
		height: 100%;
		opacity: 0;
		background-color: #252525;
		color: #ffffff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: all 0.3s;
		padding: 20px;
	}

	.products-section .products-container .product-box .box-overlay h5 {
		text-transform: uppercase;
		margin-bottom: 25px;
	}

	.products-section .products-container .product-box .box-overlay span {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		flex-direction: column;
		width: 100%;
		height: fit-content;
		/* padding: 15px; */
		margin-bottom: 25px;
		gap: 20px;
	}

	.products-section .products-container .product-box .box-overlay span > p {
		width: 100%;
		text-align: left;
	}

	.products-section
		.products-container
		.product-box
		.box-overlay
		span
		.item-variety
		li {
		margin-left: 15px;
	}

	.products-section .products-container .product-box .box-overlay button {
		display: inline-block;
		background: transparent;
		padding: 7px 35px;
		border: 1px solid #ffffff;
		color: #ffffff;
		font-size: 15px;
		text-decoration: none;
		margin-top: 30px;
		cursor: pointer;
	}

	.products-section .products-container .product-box .box-overlay button:hover {
		background-color: #ffffff;
		color: #000000;
	}

	.products-section .products-container .product-box:hover .box-overlay {
		top: 0;
		opacity: 0.9;
	}

	@media (max-width: 992px) {
		.products-section .products-container .product-box {
			flex: 0 0 90%;
			margin: 1.5%;
		}
	}

	.products-section .slider-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.card-wrapper,
	.list-wrapper {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.list-wrapper {
		margin: 30px;
		border: 3px solid saddlebrown;
		border-radius: 20px;
		padding-top: 20px;
		padding-bottom: 20px;
	}

	.card-list {
		width: 100%;
		display: flex;
		justify-content: center;
		gap: 20px;
		padding: 20px;
		align-items: center;
		flex-wrap: wrap;
	}

	.card-list .card-item {
		list-style: none;
	}

	.card-list .card-item .card-link {
		width: 400px;
		display: block;
		background: lightyellow;
		padding: 20px;
		border: 2px solid transparent;
		border-radius: 12px;
		text-decoration: none;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
		transition: 0.2s ease;
	}

	.card-list .card-item .card-link:hover {
		border-color: #5372f0;
	}

	.card-list .card-link .card-image {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
		border-radius: 10px;
	}

	.card-list .card-link .badge {
		color: #5372f0;
		padding: 8px 16px;
		margin: 16px 0 18px;
		font-size: 0.95rem;
		font-weight: 500;
		background-color: #dde4ff;
		width: fit-content;
		border-radius: 50px;
	}

	.card-list .card-link .badge.rice {
		color: #b25a2b;
		background-color: #ffe3d2;
	}

	.card-list .card-link .badge.millets {
		color: #205c20;
		background-color: #d6f8d6;
	}

	.card-list .card-link .card-title {
		font-size: 1.19rem;
		font-weight: 600;
		color: black;
	}
</style>
