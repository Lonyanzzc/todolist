<template>
	<div class="todolist">
		<van-row justify="center">
			<van-col span="20" class="todolist-col">
				<van-checkbox-group>
					<van-cell-group inset>
						<van-cell v-for="(item, index) in lists" clickable :key="item.value"
							@dblclick="selectInput = index"
							@click="toggle(index)">
							<template #title>
								<span v-show="selectInput !== index">{{item.value}}</span>
								<input v-if="selectInput === index" class="input" :value="item.value" @blur="blur(item, $event)">
							</template>
							<template #icon>
								<van-checkbox
								:name="item.value"
								v-model="item.checked"
								@click.stop/>
							</template>
							<template #right-icon>
								<van-button round type="primary" class="delete"
									@click.stop="removeItem(index)"
									size="small" color="#f56d79">
									删除
								</van-button>
							</template>
						</van-cell>
					</van-cell-group>
				</van-checkbox-group>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios'

export default {
	props: {
		lists: Array
	},
	setup(props, context) {	
		let selectInput = ref()
		const toggle = (index) => {
			context.emit("checked", index)
		};

		const removeItem = (index) => {
			context.emit("removeItem", index)
		};

		const blur = (item, e) => {
			selectInput.value = -1
			item.value = e.target.value
			console.log(item);
		}

		return {
			toggle,
			removeItem,
			blur,
			selectInput
		};
	},
}
</script>

<style>
.todolist div[class="van-cell__title"]{
	position: relative;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	padding: 0 40px;
	box-sizing: border-box;
	width: 100%;
}

.input{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 100;
	top: 0;
	left: 0;
	font-size: 20px;
}
</style>
