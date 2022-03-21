import * as vantUI from './importVantUI'

const obj = {
	install : function(Vue){
		Object.keys(vantUI).forEach( item => {
			Vue.use(vantUI[item]);
		})
	}
}

export default obj