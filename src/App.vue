<template>
  <div>
    <el-container>
      <el-header height="auto" class="u-header">
        <u-header></u-header>
      </el-header>
      <el-main class="u-main">
        <transition name="router-fade" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header/header";
export default {
  name: "App",
  components: {
    "u-header": Header
  },
  created: function() {
    //刷新界面会回到首页
    this.$router.push("/");
  }
};
</script>

<style >
@import "element-ui/lib/theme-chalk/index.css";
.u-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}
.u-main {
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave-active {
  opacity: 0;
}
* {
  /* 清零 */
  margin: 0;
  padding: 0;
}
</style>
