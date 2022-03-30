<template>
	<div class="todolist">
		<van-row justify="center">
			<van-col span="20" class="todolist-col">
				<van-checkbox-group>
					<van-cell-group inset>
						<van-cell v-for="(item, index) in lists" clickable :key="item.value" 
							@click="toggle(index)">
							<template #title>
								<span v-show="selectInput !== index">{{item.value}}</span>
								<input v-if="selectInput === index" class="input"
									:value="item.value" 
									@click.stop
									@blur="blur(item, $event)">
								<input class="input" style="visibility:hidden">
							</template>
							<template #icon>
								<van-checkbox
								:name="item.value"
								v-model="item.checked"
								@click.stop/>
							</template>
							<template #right-icon>
								<van-button round type="primary"
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
import { defineComponent, ref, inject} from 'vue';

export default defineComponent({
	props: {
		lists: Array
	},
	setup(props, context) {	
		const axios = inject('axios')

		let selectInput = ref()
		let timer = null

		const toggle = (index) => {
			if(timer){
				clearTimeout(timer)
				timer = null
				selectInput.value = index;
			}else{
				timer = setTimeout(() => {
					context.emit("checked", index);
					timer = null
				}, 150);
			}

		};

		const removeItem = (index) => {
			context.emit("removeItem", index)
		};

		const blur = (item, e) => {
			selectInput.value = -1
			if(item.value === e.target.value)
				return ;

			item.value = e.target.value
			axios({
				method: 'POST',
				url: 'change',
				data: item,
			})
		}

		return {
			toggle,
			removeItem,
			blur,
			selectInput,
		};
	},
})
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
	font-size: 20px;
}

.input{
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 100;
	top: 0;
	left: 0;
	font-size: 22px;
	text-decoration:underline
}
</style>
