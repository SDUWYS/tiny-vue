<template>
  <div class="content">
    <tiny-button @click="baseClick" :reset-time="0">默认3000ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="successClick" :reset-time="0">500ms 后自动关闭提示框</tiny-button>
    <tiny-button @click="errorClick" :reset-time="0">5000ms 后自动关闭提示框</tiny-button>
  </div>
</template>

<script>
import { Button, Modal } from '@opentiny/vue'

export default {
  components: {
    TinyButton: Button
  },
  methods: {
    baseClick() {
      Modal.message({ status: 'info', message: `默认3000ms 后自动关闭提示框` })
    },
    successClick() {
      Modal.message({
        status: 'success',
        message: `500ms 后自动关闭提示框`,
        duration: '500'
      })
    },
    errorClick() {
      Modal.message({
        status: 'console.error();',
        message: `5000ms 后自动关闭提示框`,
        duration: '5000'
      })
    }
  }
}
</script>
