import { createStore } from 'vuex'



export default createStore({
	state: {
		heroDisplay: [
			{
				id: 1,
				picture: 'slider-img-coffee.jpg'
			},
			{
				id: 2,
				picture: 'slider-img-eggs.jpg'
			},
			{
				id: 3,
				picture: 'slider-img-rice.jpg'
			},
		],
		portfolio: [
			{
				id: 1,
				name: 'Eggs',
				description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
				image: 'eggs-img-1.jpg'
			},
			{
				id: 2,
				name: 'Rice',
				description: 'efgh',
				image: 'rice-img-1.jpg'
			},
			{
				id: 3,
				name: 'Coffee',
				description: 'ijkl',
				image: 'coffee-img-1.jpg'
			},
		],
		clients: [
			{
				picture: 'client1.jpg',
				name: 'Anirban Hazra',
				testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
			},
			{
				picture: 'client2.jpg',
				name: 'Aritra Banerjee',
				testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
			},
			{
				picture: 'client3.jpg',
				name: 'Subhadeep Datta',
				testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse'
			},
		],
		mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.791965926584!2d88.3355280508284!3d22.773100431246387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89b8d5d9f488f%3A0xe024e1517f9196ac!2sBong%20Bawarchi!5e0!3m2!1sen!2sin!4v1673199321435!5m2!1sen!2sin',
	},


	getters: {},


	mutations: {},


	actions: {},


	modules: {}
})
