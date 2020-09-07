<template>
  <div class="que">{{ text }}</div>
</template>

<script>
export default {
  props: ['text']
};
</script>

<style scoped>
.que {
  letter-spacing: 2px;
  padding: 4px 12px;
  border: 3px solid #fff;
  border-radius: 10px;
  background-color: #eeeeee;
  width: fit-content;
  min-width: 40%;
  margin: 32px auto;
  font-weight: 300;
  font-size: 14pt;
  text-align: center;
}
</style>
