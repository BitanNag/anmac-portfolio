<template>

	<div class="products-section" id="products-section">

		<div class="title-container">
			<hr>
			<h2> Our Products </h2>
		</div>

		<div class="products-container">
			<div class="product-box" v-for="item in $store.state.portfolio" :key="item.id">
				<img :src="require(`../assets/images/products/${item.image}`)" alt="">
				<div class="box-overlay">
					<h5>{{item.name}}</h5>
					<span>
						<p>{{item.description}}</p>
						<ul class="item-variety" v-if="item.variety.length > 0">
							<li v-for="element in item.variety" :key="element">{{ element }}</li>
						</ul>
					</span>
					<button @click="scrollToElement('#contact-section')">{{ item.buttonName }}</button>
				</div>
			</div>
		</div>

	</div>

</template>



<script>
	import VueScrollTo from 'vue-scrollto';
	export default {
		name: 'ProductsSection',

		methods: {
			scrollToElement(element) {
                VueScrollTo.scrollTo(element, 500, {
                    easing: 'ease-in-out',
                    offset: -100,
                    force: false,
                    cancelable: true,
                    onStart: function () {
                        console.log('Scroll started');
                    },
                    onDone: function () {
                        console.log('Scroll finished');
                    },
                    onCancel: function () {
                        console.log('Scroll canceled');
                    },
                    x: false,
                    y: true
                });
            }
		}
	}

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

	.products-section .products-container .product-box .box-overlay span .item-variety li {
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
</style>