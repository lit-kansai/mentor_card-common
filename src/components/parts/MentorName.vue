<template>
  <div class="mc-name">{{ getName }}</div>
</template>

<script>
export default {
  props: ['name'],
  computed: {
    getName() {
      return this.name;
    }
  }
};
</script>

<style scoped>
.mc-name {
  border: 3px solid #fff;
  border-radius: 100px;
  text-align: center;
  background-color: #eeeeee;
  width: fit-content;
  margin: 0 auto;
  padding: 4px 16px;
  font-size: 14pt;
  font-weight: 500;
  margin-bottom: 24px;
}
</style>
