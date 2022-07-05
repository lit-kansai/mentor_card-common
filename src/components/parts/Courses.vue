<template>
  <div class="mc-courses" v-if="getCourses.length > 0">
    <CourseSnsHeader>-Course-</CourseSnsHeader>
    <div class="mc-flex">
      <CourseIcon v-for="c in getCourses" :course="c" :key="c" />
    </div>
  </div>
</template>

<script>
import CourseSnsHeader from '@/components/parts/CourseSnsHeader.vue';
import CourseIcon from '@/components/parts/CourseIcon.vue';

export default {
  props: ['courses'],
  components: { CourseSnsHeader, CourseIcon },
  computed: {
    getCourses() {
      return this.courses;
    }
  }
};
</script>

<style scoped>
.mc-flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
