<script setup lang="ts">
interface Props {
  height?: number | string;
  width?: number | string;
}
const props = withDefaults(defineProps<Props>(), {
  height: 8,
  width: 8,
});

function pxToVW(px: number) {
  // return (100 * px) / 375;
  return (px / 375) * 100 + "vw";
}

const styles = props.height
  ? {
      height: pxToVW(
        typeof props.height === "number"
          ? props.height
          : parseInt(props.height, 10)
      ),
      width: "100%",
    }
  : {
      width: pxToVW(
        typeof props.width === "number"
          ? props.width
          : parseInt(props.width, 10)
      ),
      height: "1px",
    };
</script>
<template>
  <div :style="styles" :class="$style.container"></div>
</template>
<style module lang="less">
.container {
  // background-color: var(--theme-neutral-n8-F8F9FA);
}
</style>
