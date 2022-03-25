import vantUI from './importVantUI'

interface init {
	install? : (vue: any) => void
}

const obj : init = {}

obj.install = function(Vue){
	Object.keys(vantUI).forEach( item => {
		Vue.use(vantUI[item]);
	})
}

export default obj