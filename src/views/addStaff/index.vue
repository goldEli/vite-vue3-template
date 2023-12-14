<script setup lang="ts">
import BasicInfo from "./BasicInfo.vue";

const onSubmit = (values: any) => {
  console.log("submit", values);
};
</script>
<template>
  <div :class="$style.container">
    <div :class="$style.banner">新入职资料填写</div>
    <van-form @submit="onSubmit">
      <div :class="$style.title">基础信息</div>
      <BasicInfo />
      <div :class="$style.title">基础信息</div>
      <div :class="$style.title">个人信息</div>
      <div :class="$style.title">银行卡信息</div>
      <div :class="$style.title">工作经历</div>
      <div :class="$style.title">承诺</div>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<style module lang="less">
.container {
}
.title {
  font-size: 14px;
  height: 25px;
  border-bottom: 1px solid rgb(185, 180, 180);
  padding-left: 0px;
  font-family: SiYuanMedium;
  margin: 0 20px;
}
.banner {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-family: SiYuanMedium;
}
</style>
