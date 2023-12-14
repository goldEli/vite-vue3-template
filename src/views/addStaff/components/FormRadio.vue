<script setup lang="ts">
import { ref } from "vue";

interface Props {
  modelValue: string;
  name: string;
  label: string;
  options: { value: string | number; label: string }[];
}
const props = withDefaults(defineProps<Props>(), {});
const emit = defineEmits();
const value = ref(props.modelValue);
emit("update:modelValue", value);
</script>
<template>
  <van-field :name="name" :label="label">
    <template #input>
      <van-radio-group v-model="value" direction="horizontal">
        <van-radio v-for="item in options" :name="item.value">{{
          item.label
        }}</van-radio>
      </van-radio-group>
    </template>
  </van-field>
</template>
<style module lang="less"></style>
