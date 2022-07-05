<template>
  <div class="mc-course_icon">
    <img :src="`/icon/${getCourse}.png`" />
  </div>
</template>

<script>
export default {
  props: ['course'],
  computed: {
    getCourse() {
      return this.course;
    }
  }
};
</script>

<style scoped>
.mc-course_icon img {
  width: 64px;
  margin: 0 4px;
}
</style>
