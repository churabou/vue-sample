<template>
  <div class="output">
    <h1>{{ msg }}</h1>
    <p> {{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Output',
  data () {
    return {
      msg: 'これは#/outputに表示されます',
      text: 'カメラアプリをリリースしました。 '.repeat(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  background-color: lime;
  height: 500px;
}

h1 {
  color: white;
}

p {
  width: 60%;
  display: inline-block;
}

</style>
