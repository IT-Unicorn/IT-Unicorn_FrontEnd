<template>
  <div class="page">
    <el-row type="flex" justify="space-between">
        <el-col :xs="1" :sm="6" class="hidden-xs-only" >
            <div class="logo">
                IT-Unicorn
            </div>
        </el-col>
        <el-col :xs="7" :sm="10">
            <u-nav></u-nav>
        </el-col>
        <el-col :xs="10" class="hidden-sm-and-up" >
            <div class="logo">
               IT-Unicorn
            </div>
        </el-col>
        <el-col :xs="7" :sm="8">
            <u-login></u-login>
        </el-col>
    </el-row> 
  </div>
</template>

<script>
import Nav from "./nav/nav";
import Login from "./login";
export default {
  components: {
    "u-nav": Nav,
    "u-login":Login
  }
};
</script>

<style scoped>
.page {
  background-color: #5283c9;
  border-bottom: 1px solid #ffffff;
}
.logo{
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}
</style>
