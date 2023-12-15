<script setup lang="ts">
// import { Signature } from "vant";
import { onMounted, ref, watch } from "vue";
import Sign from "./Sign.vue";

const signPic = ref("");
const show = ref(false);
const signRef = ref();
onMounted(() => {
  signRef.value = ref("signRef").value;
});
watch(show, (v) => {
  if (v) {
    signRef?.value?.reset?.()
    return;
  }
  signRef.value.generate().then((res: any) => {
    signPic.value = res;
  });
});
// const formatter = () => {
//   return ''
// }
</script>
<template>
  <van-field
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
    <Sign ref="signRef" />
  </van-dialog>
</template>
<style module lang="less">
.container {
  padding: 16px;
}
</style>
