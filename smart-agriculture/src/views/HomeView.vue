<template>
  <div class="full-page-image">
    <img src="../assets/images/首页.png" alt="智慧农业平台首页" class="full-image">
  </div>
</template>

<script>
export default {
  name: 'HomeView'
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