<template>
  <div class="top">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'welcome to my home page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  background-color: white;
  height: 500px;
}

h1 {
  color: black;
}

</style>
