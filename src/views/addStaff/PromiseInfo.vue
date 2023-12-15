<script setup lang="ts">
import Gap from "@/components/Gap.vue";
import FormDatePicker from "./components/FormDatePicker.vue";
import { ref } from "vue";

const createName = ref("");
</script>
<template>
  <div :class="$style.container">
    <div>
      <div>
        1、本人承诺以上所填信息真实有效，且可以作为审查依据；本人所提供的身份证及其他相关证件，均为本人有效证件，如有伪造、不实或借用他人身份证件及其他相关证件，本人愿意接受公司解除劳动合同且无需支付任何经济补偿金。
      </div>
      <div>2、若本人身份证及其他证件变更，将在一周内向公司提供最新证件。</div>
      <div>
        3、本人所填通讯地址为法定送达地址，如有变更，将在一周内书面通知公司，否则自己愿意承担一切后果。
      </div>
    </div>
    <Gap height="8" />
    <div>本人签名：</div>
    <Gap height="8" />
    <FormDatePicker label="时间" name="createName" v-model="createName" />
  </div>
</template>
<style module lang="less">
.container {
  padding: 16px;
}
</style>
