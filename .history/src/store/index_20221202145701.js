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
		]		
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
