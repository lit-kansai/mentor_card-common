<template>
  <div class="courses" v-if="courses.length > 0">
    <CourseSnsHeader>-Course-</CourseSnsHeader>
    <div class="flex">
      <CourseIcon v-for="c in courses" :course="c" :key="c" />
    </div>
  </div>
</template>

<script>
import CourseSnsHeader from '@/components/parts/CourseSnsHeader.vue';
import CourseIcon from '@/components/parts/CourseIcon.vue';

export default {
  props: ['courses'],
  components: { CourseSnsHeader, CourseIcon }
};
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
