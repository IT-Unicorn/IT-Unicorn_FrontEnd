<template>
  <div class="page">
    <el-row type="flex" justify="space-between">
        <el-col :span="4">
            <div class="grid-content bg-purple-dark">
                logo
            </div>
        </el-col>
        <el-col :span="12">
                <u-nav></u-nav>
        </el-col>
        <el-col :span="8">
            <div class="grid-content bg-purple-dark">
                登陆|注册
            </div>
        </el-col>
    </el-row> 
  </div>
</template>

<script>
import Nav from './nav/nav'
export default {
  data() {
    return {
      msg: "Unicorn"
    };
  },
  components: {
      'u-nav' : Nav
  }
};
</script>

<style scoped>
.page{
  background-color: #5283c9;
  border-bottom: 1px solid #ffffff
}
</style>
