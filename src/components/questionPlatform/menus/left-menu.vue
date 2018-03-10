<template>
  <div>
      <el-menu :default-openeds="['1']" router>
      <el-submenu index="/">
        <template slot="title"><i class="el-icon-message"></i>项目管理</template>
          <el-menu-item index="/questionPlatform/createProject">创建项目</el-menu-item>
          <el-menu-item index="/questionPlatform/projectList">已有项目管理</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
