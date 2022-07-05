<template>
  <div class="mc-course_icon">
    <img :src="courseIcon" />
  </div>
</template>

<script>
export default {
  props: ['course'],
  data() {
    return {
      courseIcon: require(`@/assets/course/${this.course}.png`)
    };
  }
};
</script>

<style scoped>
.mc-course_icon img {
  width: 64px;
  margin: 0 4px;
}
</style>
