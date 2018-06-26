<template>
  <div class="profile">
    <h1>{{ msg }}</h1>
    <p> {{text}}</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'これは/profileに表示されます',
      text: '私はiOSエンジニアです。 '.repeat(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  background-color: pink;
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
