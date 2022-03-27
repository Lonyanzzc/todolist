<template>
	<div class='root'>
		<!--请别在意为什么header组件和footer组件没解耦-->
		<header class="header">
			<van-nav-bar title="TodoList" 
				left-text="返回"
				left-arrow
				@click-left="show=true">
			</van-nav-bar>
			<van-dialog v-model:show="show" title="其余功能正在开发中……，敬请期待！"></van-dialog>
		</header>
		<article class="article">
			<todo-input @add-list="addList"/>
			<todo-list :lists="lists"
				@checked="checked"
				@removeItem="removeItem">
			</todo-list>
		</article>
		<footer class="footer">
			<van-sticky position="bottom">
				<van-tabbar v-model="active" class="tabbar">
					<van-tabbar-item icon="add-o" @click="allSelect">全选</van-tabbar-item>
					<van-tabbar-item icon="replay" @click="cancelSelect">全不选</van-tabbar-item>
					<van-tabbar-item icon="cross" @click="deleteSelect">删除已选</van-tabbar-item>
				</van-tabbar>
			</van-sticky>
		</footer>
	</div>
</template>

<script>
import { reactive, ref, inject, created} from 'vue'
import qs from 'qs'

import TodoInput from '../../components/todoInput.vue'
import TodoList from '../../components/todoList.vue'

export default {
	name: 'Index',
	components: {
		TodoInput,
		TodoList
	},
	setup(){
		const axios = inject('axios')

		let lists = reactive([]);
		let show = ref(false)
		let active = ref()

		axios.get('posts').then( res => {
			res.data.forEach(list => {
				lists.push(list)
			})
		})

		//选择某个数据
		const checked = (index) => {
			lists[index].checked = !lists[index].checked
		}
		//添加和删除单个数据
		const addList = (value) => {
			const list = reactive({
				value,
				id: lists.length+1,
				checked: false,
			})
			lists.push(list);
			console.log(list)
			axios({
				method: 'POST',
				url: 'posts',
				data: list,
			})
		}
		const removeItem = (index) => {
			const list = lists.splice(index,1)
			axios({
				method: 'delete',
				url: 'posts',
				data: [list.index],
			})
		}

		//全选后全不选或者删除所有已选
		const allSelect = () => {
			lists.forEach(list => {
				list.checked = true;
			})
		}
		const cancelSelect = () => {
			lists.forEach(list => {
				list.checked = false;
			})
		}
		const deleteSelect = () => {
			let deleteLists = []
			for(let i = 0; i<lists.length; i++){
				if(lists[i].checked === true){
					deleteLists.push(lists[i].index)
					lists.splice(i, 1);
					i--
				}
			}
			axios({
				method: 'delete',
				url: 'posts',
				data: deleteLists,
			})
		}
			
		return {
			lists,show,active,
			addList,
			checked,removeItem,
			allSelect,cancelSelect,deleteSelect
		}
	}
}
</script>

<style>
.root{
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.header{
	height: 100%;
	width: 100%;
	/* max-width: 700px; */
	min-width: 400px;
	text-align: center;
}

.footer{
	height: 100%;
	width: 100%;
	max-width: 900px;
	min-width: 400px;
}

.article{
	height: 100%;
	width: 100%;
	max-width: 800px;
	min-width: 400px;
	text-align: center;
	color: #55aaff;
	margin-bottom: 20px;
}

.tabbar{
	position: relative;
	width: 100%;
}
</style>