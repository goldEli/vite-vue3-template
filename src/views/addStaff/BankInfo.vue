<script setup lang="ts">
import { ref } from "vue";

const bankID = ref("");
const bankName = ref("");
</script>
<template>
  <van-cell-group inset>
    <van-field v-model="bankName" name="bankName" label="银行名称" />
    <van-field v-model="bankID" name="bankID" label="银行卡号" />
  </van-cell-group>
</template>
<style module lang="less"></style>
