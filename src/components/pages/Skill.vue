<template>
  <div class="skill">
    <h1>{{ msg }}</h1>
    <h4> {{text}}</h4>
  </div>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      msg: 'これは#/Skillに表示されます',
      text: 'swiftとgo言語ができます。 '.repeat(10)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div {
  background-color: orange;
  height: 300px;
}

h1 {
  color: white;
}

p {
  width: 60%;
  display: inline-block;
}

</style>
