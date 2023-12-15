<script setup lang="ts">
import { ref, watchEffect } from 'vue';

interface Props {
  gap?: number;
  block?: boolean;
  direction?: "row" | "column";
  spaceBetween?: boolean;
}
function pxToVW(px: number) {
  // return (100 * px) / 375;
  return (px / 375) * 100 + "vw";
}
const props = withDefaults(defineProps<Props>(), {
  gap: 8,
  block: false,
  direction: "row",
});
const styles = ref({});
watchEffect(() => {
  const base = {
    gap: `${pxToVW(props.gap)}`,
    display: `${props.block ? "flex" : "inline-flex"}`,
    flexDirection: props.direction,
  };
  if (props.spaceBetween) {
    styles.value = {
      ...base,
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    };
    return;
  }
  if (props.direction === "row") {
    styles.value = {
      alignItems: "center",
      ...base,
    };
    return;
  }
  styles.value = {
    ...base,
  };
});
// const styles = {
//     display: 'flex',
//     flexDirection: 'row',
// }
</script>
<template>
  <div :style="styles" :class="$style.container">
    <slot />
  </div>
</template>
<style module lang="less">
.container {
}
</style>
