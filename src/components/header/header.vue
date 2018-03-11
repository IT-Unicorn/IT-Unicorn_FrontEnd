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
            <el-button type="text" @click="dialogVisible = true">登陆</el-button>
            <el-button type="text" @click="onSignUp">注册</el-button>
              <el-dialog title="登陆" :visible.sync="dialogVisible" width="40%" :before-close="handleClose">
                <el-form ref="loginForm" :model= "loginForm" :rules="rules">
                  <el-form-item label="用户名" prop = "name">
                    <el-input v-model= "loginForm.name"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop = "pwd" >
                    <el-input type="password" v-model= "loginForm.pwd"></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="onLogin('loginForm')">登陆</el-button>
                  <p>
                    <el-button type="text" @click="onSignUp">注册</el-button>
                  </p>
                </el-form>
              </el-dialog>
            </div>
        </el-col>
    </el-row> 
  </div>
</template>

<script>
import Nav from "./nav/nav";
export default {
  data() {
    return {
      dialogVisible: false,  //登陆弹出框 控制开关
      loginForm: {   //登陆数据对象
        name: "",
        pwd: ""
      },
      rules: { //登陆表单数据校验对象
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {
    "u-nav": Nav
  },
  methods: {
    handleClose(done) {
      this.loginForm.name = "";
      this.loginForm.pwd = "";
      done();
    },
    onLogin(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          this.$message({
            message: "请输入用户名及密码",
            type: "warning"
          });
          return false;
        }
      });
    },
    onSignUp() {
      this.dialogVisible = false;
      this.loginForm.name = "";
      this.loginForm.pwd = "";
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.page {
  background-color: #5283c9;
  border-bottom: 1px solid #ffffff;
}
</style>
