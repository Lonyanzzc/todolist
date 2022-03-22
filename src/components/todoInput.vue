<template>
    <div class="todo">
	  <van-row justify="center">
        <van-col span="20">
          <van-cell-group>
            <van-field v-model="task" label="todo " :colon="true" :center="true" placeholder="请随意输入" :autofocus="true">
            	<template #button>
            		<van-button size="small" type="primary" @click="submit">提交</van-button>
            	</template>
                </van-field>
            </van-cell-group>
        </van-col>
      </van-row>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup () {
    let state = reactive({id : 0, obj:{name:'1'}});
    return {
      state
    }
  }
})
</script>

<style>
.todo{
  margin: 20px;
}
.todo label{
	font-size: 22px;
	font-weight: 600;
}
</style>
