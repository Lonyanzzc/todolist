<template>
    <div class="todo">
	  <van-row justify="center">
        <van-col span="21">
          <van-cell-group>
            <van-field v-model="input" label="todo" 
              @keydown.enter="enter"
              :colon="true" 
              :center="true" 
              placeholder="请随意输入" 
              :autofocus="true" ref="field">
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
    let field = ref(null)

    const submit = () => {
      context.emit("add-list", input.value)
      input.value =''
      field.value.focus()
    }

    const enter = () => {
      context.emit("add-list", input.value)
      input.value =''
      field.value.focus()
    }
    
    return {
      input,
      field,
      submit,
      enter
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
