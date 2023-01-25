<template>

	<div class="products-section">

		<div class="title-container">
			<hr>
			<h2> Our Products </h2>
		</div>

		<div class="products-container">
			<div class="product-box" v-for="item in portfolio" :key="item.id">
				<img :src="require(`../assets/images/products/${item.image}`)" alt="">
				<div class="box-overlay">
					<h5>{{item.name}}</h5>
					<p>{{item.description}}</p>
					<a href="">Buy Now</a>
				</div>
			</div>
		</div>

	</div>

</template>



<script>

	export default {
		name: 'ProductsSection',
		
		
		data() {
			return {
				portfolio: [
					{
						id: 1,
						name: 'Orange',
						description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
						image: 'f-1.jpg'
					},
					{
						id: 2,
						name: 'Blueberry',
						description: 'efgh',
						image: 'f-2.jpg'
					},
					{
						id: 3,
						name: 'Banana',
						description: 'ijkl',
						image: 'f-3.jpg'
					},
					{
						id: 4,
						name: 'Apple',
						description: 'mnop',
						image: 'f-4.jpg'
					},
					{
						id: 5,
						name: 'Mango',
						description: 'qrst',
						image: 'f-5.jpg'
					},
					{
						id: 6,
						name: 'Strawberry',
						description: 'uvwx',
						image: 'f-6.jpg'
					},
				]
			}
		},
	}

</script>



<style scoped>
	.products-section {
		overflow: hidden;
		padding: 40px 0;
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
	}

	.products-section .products-container .product-box .box-overlay h5 {
		text-transform: uppercase;
		margin-bottom: 25px;
	}

	.products-section .products-container .product-box .box-overlay p {
		/* text-transform: uppercase; */
		padding: 15px;
		margin-bottom: 25px;
		text-align: center;
	}

	.products-section .products-container .product-box .box-overlay a {
		display: inline-block;
		padding: 7px 35px;
		border: 1px solid #ffffff;
		color: #ffffff;
		font-size: 15px;
		text-decoration: none;
	}

	.products-section .products-container .product-box .box-overlay a:hover {
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