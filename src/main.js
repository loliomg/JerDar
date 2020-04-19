import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/components/icon'
import {
	Icon,
	Divider,
	Button,
	Message
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Icon)
Vue.use(Divider)
Vue.use(Button)

Vue.prototype.$message = Message
Vue.prototype.Call = new Vue()

new Vue({
	store,
	render: h => h(App)
}).$mount('#OHMYGA233')

if (process.env.NODE_ENV === 'production') {
	console.clear()
	console.log(
		"\n %c \u26a1OHMYGA233 %c https://github.com/loliomg/JerDar %c BY%c LF112  \n\n",
		"color: #ffffff; background: rgb(0, 145, 228); padding:5px 0;",
		"background:rgba(197, 197, 197, 0.89); padding:5px 0;",
		"color: #ffffff; background: rgba(49, 49, 49, 0.85); padding:5px 0;", "color: rgb(0, 145, 228); background: rgba(49, 49, 49, 0.85); padding:5px 0;"
	)
}