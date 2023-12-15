export function pxToVW(px: number) {
  // return (100 * px) / 375;
  return (px / 375) * 100 + "vw";
}
