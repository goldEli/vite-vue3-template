<script setup lang="ts">
import { ref } from "vue";
import FormDatePicker from "./components/FormDatePicker.vue";

const idCardName = ref("张三");
const idCard = ref("");
const dateOfBirth = ref("");
const nation = ref("");
const validityPeriodOfIDCard = ref("");
const idAddress = ref("");
const currentResidence = ref("");
const registeredResidenceType = ref("");
const maritalStatus = ref("");
const politicalLandscape = ref("");
</script>
<template>
  <van-cell-group inset>
    <van-field v-model="idCardName" name="idCardName" label="身份证姓名" />
    <van-field v-model="idCard" name="idCard" label="身份证" />
    <FormDatePicker v-model="dateOfBirth" name="dateOfBirth" label="出生日期" />
    <van-field v-model="nation" name="nation" label="民族" />
    <FormDatePicker
      v-model="validityPeriodOfIDCard"
      name="validityPeriodOfIDCard"
      label="身份证有效期"
    />
    <van-field v-model="idAddress" name="idAddress" label="身份证地址" />
    <van-field
      v-model="currentResidence"
      name="currentResidence"
      label="现住址"
    />
    <van-field
      v-model="registeredResidenceType"
      name="registeredResidenceType"
      label="户籍类型"
    />
    <van-field v-model="maritalStatus" name="maritalStatus" label="婚姻状态" />
    <van-field
      v-model="politicalLandscape"
      name="politicalLandscape"
      label="政治面貌"
    />
    <!-- <van-field name="gender" label="性别" :rules="[{ required: true, message: '请选择性别' }]">
      <template #input>
        <van-radio-group v-model="gender" direction="horizontal">
          <van-radio name="1">男</van-radio>
          <van-radio name="2">女</van-radio>
        </van-radio-group>
      </template>
    </van-field> -->
  </van-cell-group>
</template>
<style module lang="less"></style>
