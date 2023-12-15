<script setup lang="ts">
// import { Signature } from "vant";
import { onMounted, reactive, ref, watch } from "vue";
// import Sign from "./Sign.vue";
import Vue3Signature from "vue3-signature";

import { pxToVW } from "@/utils/pxToVW";

const signPic = ref("");
const show = ref(false);
const signRef = ref();
onMounted(() => {
  signRef.value = ref("signRef").value;
});
watch(show, (v) => {
  if (v) {
    signRef?.value?.clear?.();
    return;
  }
  signPic.value = signRef.value.save("image/jpeg");
});
const state = reactive({
  count: 0,
  option: {
    penColor: "rgb(0, 0, 0)",
    backgroundColor: "rgb(255,255,255)",
  },
  disabled: false,
});
// const formatter = () => {
//   return ''
// }
</script>
<template>
  <van-field
    :class="$style.sign"
    v-model="signPic"
    readonly
    input-align="right"
    label="接收人签字"
    name="signPic"
    required
  >
    <template #button>
      <img
        v-if="signPic"
        @click="show = true"
        :src="signPic"
        alt=""
        style="width: 100px"
      />
      <a
        v-else
        style="color: var(--van-primary-color); cursor: pointer"
        @click="show = true"
        >点击签字</a
      >
    </template>
  </van-field>
  <van-dialog v-model:show="show" title="签名" show-cancel-button>
    <!-- <img src="https://fastly.jsdelivr.net/npm/@vant/assets/apple-3.jpeg" /> -->
    <!-- <Signature /> -->
    <!-- <Sign ref="signRef" /> -->
    <Vue3Signature
      ref="signRef"
      :sigOption="state.option"
      :disabled="state.disabled"
      :h="pxToVW(120)"
      :class="$style.example"
    ></Vue3Signature>
  </van-dialog>
</template>
<style module lang="less">
.example {
  margin: 0 auto;
}
.container {
  padding: 16px;
}
.sign {
  input {
    display: none;
  }
}
</style>
