<template>
  <div class="qsns">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.qsns {
  font-family: 'Noto Sans JP';
  letter-spacing: 2px;
  font-size: 20px;
  text-align: center;
  margin-top: 12px;
  margin-bottom: 8px;
  color: #fff;
  -webkit-text-stroke: 1px #808080;
  font-weight: 700;
  font-style: italic;
}
</style>
