import VueAgile from './Agile.vue'

const install = (Vue) => {
	Vue.component('Agile', VueAgile)
}

export default {
	install
}

export { VueAgile }
