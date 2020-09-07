<template>
  <div class="course_icon">
    <img :src="`/icon/${course}.png`" />
  </div>
</template>

<script>
export default {
  props: ['course']
};
</script>

<style scoped>
.course_icon img {
  width: 64px;
  margin: 0 4px;
}
</style>
