<template>
<el-container class="page">
  <el-aside class="left-aside" width="200px">
    <u-Menu></u-Menu>
  </el-aside>
  <el-container>
    <!-- <el-header>
      <el-dropdown>
        <i class="el-icon-setting"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>已有项目</span>
    </el-header> -->
    
    <el-main>
      <router-view></router-view>
      <!-- <el-table :data="tableData" height="500" border>
        <el-table-column prop="name" label="项目名称" ></el-table-column>
        <el-table-column prop="state" label="项目状态" ></el-table-column>
        <el-table-column prop="author" label="创建人"></el-table-column>
        <el-table-column prop="operate" label="操作">
          <template slot-scope="scope">
          <el-button size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table> -->
    </el-main>
  </el-container>
</el-container>
</template>


<script>
import menu from './menus/left-menu'
export default {
  data() {
    const item = {
      state: "正常",
      name: "项目1",
      author: "张三"
    };
    return {
      tableData: Array(5).fill(item)
    };
  },
  components: {
    "u-Menu" :menu
  }
};
</script>

<style>
/* .t_column{
  height: 20px;
} */
.el-table{
  width: 100%;
}
.left-aside {
  background-color: #ffffff;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  /* line-height: 60px; */
}
.el-aside {
  color: #333;
}
/* .page {
  height: 100%;
} */
</style>
