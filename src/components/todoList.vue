<template>
	<div class="todolist">
		<van-row justify="center">
			<van-col span="20" class="todolist-col">
				<van-checkbox-group>
					<van-cell-group inset>
						<van-cell v-for="(item, index) in lists" clickable :key="item.value"
							:title="item.value"
							@click="toggle(index)">
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
		const toggle = (index) => {
			context.emit("checked", index)
		};

		const removeItem = (index) => {
			context.emit("removeItem", index)
		};

		return {
			toggle,
			removeItem
		};
	},
}
</script>

<style>

.todolist div[class="van-cell__title"]{
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	padding: 0 40px;
	box-sizing: border-box;
	width: 100%;
}
</style>
