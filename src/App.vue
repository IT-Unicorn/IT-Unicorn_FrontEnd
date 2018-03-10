<template>
  <div>
    <el-container>
      <el-header height="auto" class="u-header">
        <u-header></u-header>
      </el-header>
      <el-main class="u-main">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/header/header'
export default {
  name: 'App',
  components: {
    'u-header':Header
  }
}
</script>

<style >
@import 'element-ui/lib/theme-chalk/index.css';
.u-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;
  }
.u-main{
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
*{
  /* 清零 */
  margin: 0;
  padding: 0;
}
</style>
