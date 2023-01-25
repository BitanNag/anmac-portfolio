import { createStore } from 'vuex'

export default createStore({
	state: {
		heroDisplay: [
			{
				id: 1,
				picture: 'slider-img.jpg'
			},
			{
				id: 2,
				picture: 'test.jpg'
			},
			{
				id: 3,
				picture: 'test2.jpg'
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
		mapLink: 'https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France',
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
