<script setup lang="ts">
import { ref } from "vue";
interface Props {
  modelValue: string;
  name: string;
  label: string;
}
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits();
const date = ref(props.modelValue);

const showPicker = ref(false);
const onConfirm = ({ selectedValues }: any) => {
  date.value = selectedValues.join("/");
  showPicker.value = false;
  emit("update:modelValue", date.value);
};
</script>
<template>
  <van-field
    is-link
    readonly
    v-model="date"
    :name="name"
    :label="label"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-date-picker
      :min-date="new Date(1900, 0, 1)"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
</template>
<style module lang="less"></style>
