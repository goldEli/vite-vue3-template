<script setup lang="ts">
import { infoList } from "@/_api/assetsAsset/infoList";
// import request from "@/utils/request";
// request({params})
infoList({ assetCode: "123" });
</script>
<template>
  <!-- <div :class="$style.container">
    <div :class="$style.box"></div>
    home
  </div> -->
</template>
<style module lang="less">
.container {
}
.box {
  width: 750px;
  height: 20px;
  background-color: red;
}
</style>
