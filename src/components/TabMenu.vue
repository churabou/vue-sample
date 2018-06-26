<template>
  <div>
    <ol>
      <li v-for="(item, index) in items" :key=index>
        <a v-bind:href="item.path">
          {{ item.title }}
        </a>
        <!-- {{item.title}}
        v-on:click="load(item.path)" -->
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'TabMenu',
  data () {
    return {
      items: [
        { title: 'top', path: '#/' },
        { title: 'profile', path: '#/profile' },
        { title: 'skills', path: '#/skills' },
        { title: 'outputs', path: '#/outputs' }
      ]
    }
  },
  methods: {
    load: function (path) {
      // window.load()
      window.location.href = path
    }
  }
}
</script>

<style scoped>

ol {
  margin-left: auto;
  width: 480px;
  display:flex;
  justify-content: center;
  padding: 0;
  list-style: none;
}

li {
  width: 100px;
  height: 50px;
  margin-left:10px;
  margin-right:10px;
  font-size: 14px;
  background-color: skyblue;
  border-radius: 8px;
  position: relative;
}

li:hover {
  opacity: 0.4;
}

a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  color: white;
  text-decoration: none;
  line-height: 50px;
}

</style>
