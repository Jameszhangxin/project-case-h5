<template>
    <div class="dashboard-container">
        <img src="../../assets/logo.png" alt="">
        <span>dashboard页面</span>
        <div style="width: 200px; height: 2000px; background: skyblue;"></div>
    </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .dashboard-container {
    width: 100%;
    height: 100vh;
    overflow: auto;
  }
</style>
