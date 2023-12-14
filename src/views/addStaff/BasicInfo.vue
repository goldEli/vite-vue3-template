<script setup lang="ts">
import { ref } from "vue";

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
    <van-field name="gender" label="性别" :rules="[{ required: true, message: '请选择性别' }]">
      <template #input>
        <van-radio-group v-model="gender" direction="horizontal">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </template>
    </van-field>
    <van-field v-model="englishName" name="englishName" label="英文名" />
  </van-cell-group>
</template>
<style module lang="less"></style>
