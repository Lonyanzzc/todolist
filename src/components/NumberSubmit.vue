<template>
    <div>----------------------</div>
    <input v-model="number" type="string" class="input" />
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const number = ref("")

    return {
      number,
    }
  }
}
</script>

<style>
.input {
  border: 1px solid lightgray;
  margin: 10px;
}
</style>
