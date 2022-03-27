import { createApp } from 'vue'
import obj from './vantUI'
import axios from 'axios'
import VueAxios from 'vue-axios'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

axios.defaults.baseURL = 'http://localhost:3000/'

App.use(VueAxios, axios)
App.provide('axios', App.config.globalProperties.axios)
App.use(obj)
export default App
