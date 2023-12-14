<script setup lang="ts">
import { ref, watchEffect } from "vue";
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

const emit = defineEmits();
watchEffect(() => {
  emit(
    "on-change",
    {
      companyName: companyName.value,
      job: job.value,
      hiredate: hiredate.value,
      leavedate: leavedate.value,
      resignationSalary: resignationSalary.value,
      achievement: achievement.value,
    },
    props.idx
  );
});

</script>
<template>
  <div :class="$style.box">
    <van-form>
      <!-- <van-button type="primary">删除</van-button> -->
      <van-cell-group inset>
        <van-field v-model="companyName" name="companyName" label="公司名称" />
        <van-field v-model="job" name="job" label="职位" />
        <FormDatePicker v-model="hiredate" name="hiredate" label="入职时间" />
        <FormDatePicker v-model="leavedate" name="leavedate" label="离职时间" />
        <van-field
          v-model="resignationSalary"
          name="resignationSalary"
          label="离职薪资"
        />
        <van-field v-model="achievement" name="achievement" label="项目业绩" />
      </van-cell-group>
    </van-form>
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
