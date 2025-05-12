<template>
  <div class="full-page-image">
    <img src="../assets/images/公司介绍页面.png" alt="公司介绍" class="full-image">
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.full-page-image {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

.full-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
</style> 