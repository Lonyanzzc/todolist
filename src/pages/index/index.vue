<template>
	<div class='root'>
		<article class="article">
			<todo-input/>
			<todo-list/>
		</article>
	</div>
</template>

<script>
import TodoInput from '../../components/todoInput.vue'
import TodoList from '../../components/todoList.vue'

export default {
  name: 'Index',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
.root{
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
	align-items: center;
}

.article{
	height: 100%;
	width: 100%;
	max-width: 800px;
	min-width: 400px;
	text-align: center;
	color: #55aaff;
}
</style>