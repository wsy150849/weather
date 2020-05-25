<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <ul>
          <router-link tag="li" to="/">天气</router-link>

          <router-link tag="li" to="/read">ONE·一个 每日阅读</router-link>

          <router-link tag="li" to="/todo">todoList</router-link>
        </ul>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  methods: {
    getNowWeather() {
      this.$store.dispatch("getWeather", this.$store.state.Cityid);
    }
  },
  created() {
    this.getNowWeather();
  }
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.el-aside {
  // overflow: hidden;
  background-color: #d3dce6;
  text-align: center;
  position: fixed;
  height: 100vh;
  ul {
    width: 100%;
    height: 100%;
    list-style: none;
    padding-top: 40px;
    background-image: linear-gradient(#0f62c2, #3a99db);
    li {
      width: 100%;
      height: 50px;
      line-height: 50px;
      background: #3a99db;
      border-bottom: 1px solid #ccc;
      cursor: pointer;
      color: blanchedalmond;
      font-weight: 600;
    }
  }
}

.el-main {
  // background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0 !important;
  margin-left: 200px;
  height: auto;
}
#app > .el-container {
  margin-bottom: 40px;
  height: 100%;
}
</style>
