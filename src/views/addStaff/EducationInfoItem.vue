<script setup lang="ts">
import { ref } from "vue";
import FormDatePicker from "./components/FormDatePicker.vue";
import FormRadio from "./components/FormRadio.vue";

interface Props {
  idx: string;
}
const props = withDefaults(defineProps<Props>(), {});

const graduationInstitution = ref("");
const educationLevel = ref("");
const enrollmentDate = ref("");
const graduationDate = ref("");
const typeOfEducation = ref("");
const majorAreaOfStudy = ref("");
const canItBeChecked = ref("");
const additionalInformation = ref("");
const educationalCertificate = ref("");
const towOneOneAndNineEightFive = ref("");

const key = "educationInfo";
</script>
<template>
  <div :class="$style.box">
    <!-- <van-button type="primary">删除</van-button> -->
    <van-cell-group inset>
      <van-field
        v-model="graduationInstitution"
        :name="`${key}-${props.idx}-graduationInstitution`"
        label="毕业院校"
      />
      <van-field
        v-model="educationLevel"
        :name="`${key}-${props.idx}-educationLevel`"
        label="学历"
      />
      <FormDatePicker
        v-model="enrollmentDate"
        :name="`${key}-${props.idx}-enrollmentDate`"
        label="入学时间"
      />
      <FormDatePicker
        v-model="graduationDate"
        :name="`${key}-${props.idx}-graduationDate`"
        label="毕业时间"
      />
      <van-field
        v-model="typeOfEducation"
        :name="`${key}-${props.idx}-typeOfEducation`"
        label="教育类型"
      />
      <van-field
        v-model="majorAreaOfStudy"
        :name="`${key}-${props.idx}-majorAreaOfStudy`"
        label="所学专业"
      />

      <FormRadio
        v-model="canItBeChecked"
        :name="`${key}-${props.idx}-canItBeChecked`"
        label="学信网可查"
        :options="[
          { label: '是', value: 1 },
          { label: '否', value: 2 },
        ]"
      />
      <FormRadio
        v-model="towOneOneAndNineEightFive"
        :name="`${key}-${props.idx}-towOneOneAndNineEightFive`"
        label="211/985"
        :options="[
          { label: '是', value: 1 },
          { label: '否', value: 2 },
        ]"
      />
      <van-field
        v-model="additionalInformation"
        :name="`${key}-${props.idx}-additionalInformation`"
        label="备注信息"
      />
      <van-field
        v-model="educationalCertificate"
        :name="`${key}-${props.idx}-educationalCertificate`"
        label="学历证书"
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
