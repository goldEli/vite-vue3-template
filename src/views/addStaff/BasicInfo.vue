<script setup lang="ts">
import { ref } from "vue";
import FormRadio from "./components/FormRadio.vue";

const name = ref("张三");
const phone = ref("");
const job = ref("");
const department = ref("");
const gender = ref("");
const englishName = ref("");
</script>
<template>
  <van-cell-group inset>
    <van-field disabled v-model="name" name="name" label="姓名" />
    <van-field v-model="phone" name="phone" label="手机号" />
    <van-field v-model="job" name="job" label="岗位" />
    <van-field v-model="department" name="department" label="部门" />
    <FormRadio
      name="gender"
      label="性别"
      v-model="gender"
      :options="[
        { label: '男', value: 1 },
        { label: '女', value: 2 },
      ]"
    />

    <van-field v-model="englishName" name="englishName" label="英文名" />
  </van-cell-group>
</template>
<style module lang="less"></style>
