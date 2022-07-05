<template>
  <div class="mc-answer">{{ getAnswer }}</div>
</template>

<script>
export default {
  props: ['body'],
  computed: {
    getAnswer() {
      return this.body;
    }
  }
};
</script>

<style scoped>
.mc-answer {
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
