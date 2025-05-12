<template>
  <div class="full-page-image">
    <img src="../assets/images/联系我们页面.png" alt="联系我们" class="full-image">
  </div>
</template>

<script>
export default {
  name: 'ContactView'
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