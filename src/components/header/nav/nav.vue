<template>
  <div>
    <!-- 全屏显示菜单 -->
    <el-menu
    :default-active="activeIndex"
    class="hidden-xs-only"
    mode= "horizontal"
    @select="handleSelect"
    background-color="#5283c9"
    text-color="#fff"
    active-text-color="#ffd04b"
    router > 
        <el-menu-item index="/">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">平台项目</template>
            <el-menu-item index="/questionPlatform">问题平台</el-menu-item>
            <el-menu-item index="/blog">博客</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="/about" >关于我们</el-menu-item>
    </el-menu>
    <!-- 小屏幕显示菜单 -->
    <el-menu
    :default-active="activeIndex"
    class="hidden-sm-and-up"
    mode= "horizontal"
    @select="handleSelect"
    background-color="#5283c9"
    text-color="#fff"
    active-text-color="#ffd04b"
    router > 
        <el-submenu index="1">
          <template slot="title">
              <i class="icon iconfont icon-category local">
              </i>
          </template>
          <el-menu-item index="/">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">平台项目</template>
            <el-menu-item index="/questionPlatform">问题平台</el-menu-item>
            <el-menu-item index="/blog">博客</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
                <template slot="title">选项4</template>
                <el-menu-item index="2-4-1">选项1</el-menu-item>
                <el-menu-item index="2-4-2">选项2</el-menu-item>
                <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="/about" >关于我们</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "/"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
      this.activeIndex = key;
    }
  }
};
</script>

<style scoped>
.el-menu {
  border-bottom: 0px;
}
.local {
  color: white;
}
</style>
