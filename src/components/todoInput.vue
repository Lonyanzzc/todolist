<template>
    <div class="todo">
	  <van-row justify="center">
        <van-col span="21">
          <van-cell-group>
            <van-field v-model="input" label="todo" :colon="true" :center="true" placeholder="请随意输入" :autofocus="true">
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
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup (props, context) {
    let input = ref(null)
    
    const submit = () => {
      context.emit("add-list", input.value)
    }
    
    return {
      input,
      submit
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
