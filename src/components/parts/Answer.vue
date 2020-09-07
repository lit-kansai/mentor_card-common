<template>
  <div class="answer">{{ body }}</div>
</template>

<script>
export default {
  props: ['body']
};
</script>

<style scoped>
.answer {
  font-family: 'Noto Sans JP';
  letter-spacing: 1px;
  font-size: 15px;
  text-align: center;
  color: #fff;
  white-space: pre-wrap;
  word-wrap: break-word;
  margin-top: 16px;
  padding: 0 16px;
}
</style>
