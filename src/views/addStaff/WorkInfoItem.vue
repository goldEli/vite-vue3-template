<script setup lang="ts">
import { ref } from "vue";
import FormDatePicker from "./components/FormDatePicker.vue";

interface Props {
  idx: number;
}
const props = withDefaults(defineProps<Props>(), {});

const companyName = ref("");
const job = ref("");
const hiredate = ref("");
const leavedate = ref("");
const resignationSalary = ref("");
const achievement = ref("");
</script>
<template>
  <div :class="$style.box">
    <!-- <van-button type="primary">删除</van-button> -->
    <van-cell-group inset>
      <van-field
        v-model="companyName"
        :name="`workInfo-${props.idx}-companyName`"
        label="公司名称"
      />
      <van-field
        v-model="job"
        :name="`workInfo-${props.idx}-job`"
        label="职位"
      />
      <FormDatePicker
        v-model="hiredate"
        :name="`workInfo-${props.idx}-hiredate`"
        label="入职时间"
      />
      <FormDatePicker
        v-model="leavedate"
        :name="`workInfo-${props.idx}-leavedate`"
        label="离职时间"
      />
      <van-field
        v-model="resignationSalary"
        :name="`workInfo-${props.idx}-resignationSalary`"
        label="离职薪资"
      />
      <van-field
        v-model="achievement"
        :name="`workInfo-${props.idx}-achievement`"
        label="项目业绩"
      />
    </van-cell-group>
  </div>
</template>
<style module lang="less">
.box {
  width: calc(100% - 16px);
  border: 1px solid #e9e9e9;
  margin: 8px;
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
