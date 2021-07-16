<template>
  <div class="nofound-container">
    <h1>404</h1>
  </div>
</template>

<script>
export default {
  name: "nofound",
  data() {
    return {
      msg: '404 nofound'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.nofound-container {
    h1 {
        color: #000;
        font-size: 48px;
    }
}
</style>
