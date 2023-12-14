<script setup lang="ts">
import { ref } from "vue";
import WorkInfoItem from "./WorkInfoItem.vue";
interface Props {
  modelValue: any;
}
const props = withDefaults(defineProps<Props>(), {});
const value = ref(props.modelValue);
const emit = defineEmits();
const onChange = (v: any, idx: number) => {
  value.value[idx] = v;
  emit("update:modelValue", value.value);
};
const onAdd = () => {
  value.value.push({});
  emit("update:modelValue", value.value);
};

</script>
<template>
  <div :class="$style.box">
    <WorkInfoItem
      :key="idx"
      :idx="idx"
      v-for="(_, idx) in value"
      @on-change="onChange"
    />
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
