<template>
  <div class="LoginMain">
    <span class="spa">></span>
    <van-form @submit="handelLogin">
      <van-field class="input"
        v-model="username"
        name="用户名"
        label=" "
        placeholder="请随意输入信息"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import Child from './NumberSubmit.vue';

export default defineComponent({
  components: {
    Child
  },
  setup () {
    let state = reactive({id : 0, obj:{name:'1'}});
    return {
      state
    }
  }
})
</script>

<style scoped>
.root{
  position: relative;
  width: 800px;
}

.todo {
    height: 70px;
    width: 550px;
    border: none;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
}

.input{
    position: relative;
    font-size: 24px;
}

.spa{
    position: absolute;
	margin: 0.21333rem;
	z-index: 6999;
    width:127px;
    height: 56px;
	box-sizing: content-box;
    background: red;
}
</style>
