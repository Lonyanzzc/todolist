<template>
	<div class="todolist">
		<van-row justify="center">
			<van-col span="20" class="todolist-col">
				<van-checkbox-group>
					<van-cell-group inset>
						<van-cell	v-for="(item, index) in list" icon="flower-o"
							clickable
							:key="item"
							:title="`复选框 ${item}`"
							@click="toggle(index)">
							<template #right-icon>
								<van-checkbox
								:name="item"
								v-model="checkboxRefs[index]"
								@click.stop/>
							</template>
						</van-cell>
					</van-cell-group>
				</van-checkbox-group>
			</van-col>
		</van-row>
	</div>
</template>

<script>
import { ref, onBeforeUpdate } from 'vue';

export default {
	setup(props, context) {
		const checkboxRefs = ref([]);
		const toggle = (index) => {
			checkboxRefs.value[index] = !checkboxRefs.value[index];
		};

		onBeforeUpdate(() => {
			checkboxRefs.value = [];
		});

		return {
			list: ['a', 'b'],
			toggle,
			checkboxRefs,
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
