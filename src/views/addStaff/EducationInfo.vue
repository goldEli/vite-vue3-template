<script setup lang="ts">
import { ref } from "vue";
import EducationInfoItem from "./EducationInfoItem.vue";
import {generateUniqueId} from "@/utils/generateUniqueId"


const arr = ref([generateUniqueId()]);
const onAdd = () => {
  arr.value.push(generateUniqueId());
};
</script>
<template>
  <div :class="$style.box">
    <EducationInfoItem :key="idx" :idx="item" v-for="(item, idx) in arr" />
    <div :class="$style.btnBox">
      <van-button @click="onAdd" type="primary">添加一条</van-button>
    </div>
  </div>
</template>
<style module lang="less">
.box {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.btnBox {
  display: flex;
  justify-content: flex-end;
  padding-right: 8px;
}
</style>
