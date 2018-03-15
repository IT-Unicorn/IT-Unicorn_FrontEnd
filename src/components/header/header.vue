<template>
  <div class="page">
    <el-row type="flex" justify="space-between">
        <el-col :span="6"  class="hidden-xs-only" >
            <div class="logo">
                IT-Unicorn
            </div>
        </el-col>
        <el-col :span="10">
            <u-nav></u-nav>
        </el-col>
        <el-col :span="8">
          <div class="grid-content bg-purple-dark" v-if="!isLogin">
            <el-button type="text" @click="store_LoginDialog(true)">登陆</el-button>
            <el-button type="text" @click="onSignUp">注册</el-button>
              <el-dialog title="登陆" :visible.sync="loginDialog" width="40%" :before-close="handleClose">
                <el-form ref="loginForm" :model= "loginForm" :rules="rules">
                  <el-form-item label="用户名" prop = "username">
                    <el-input v-model= "loginForm.username"></el-input>
                  </el-form-item>
                  <el-form-item label="密码" prop = "password" >
                    <el-input type="password" v-model= "loginForm.password"></el-input>
                  </el-form-item>
                  <el-button type="primary" @click="onLogin('loginForm')">登陆</el-button>
                  <p>
                    <el-button type="text" @click="onSignUp">注册</el-button>
                  </p>
                </el-form>
              </el-dialog>
            </div>
            <div v-else>
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link dropSpan">
                  {{users.userName}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command = "personInfo">个人信息</el-dropdown-item>
                  <el-dropdown-item command = "signOut">退出登陆</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
        </el-col>
    </el-row> 
  </div>
</template>

<script>
import Nav from "./nav/nav";
import { mapState, mapMutations } from "vuex";
import {login} from '@/service/transaction';
export default {
  data() {
    return {
      loginForm: {
        //登陆数据对象
        username: "",
        password: ""
      },
      rules: {
        //登陆表单数据校验对象
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  components: {
    "u-nav": Nav
  },
  methods: {
    ...mapMutations(["store_LoginDialog", "store_Onlogin", "store_SignOut"]),
    handleClose(done) {
      //关闭登录框
      this.loginForm = {};
      this.$store.commit("store_LoginDialog", false);
      // done();
    },
    onLogin(formName) {
      //确认登陆按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          //TODO 请求后台登陆,登陆成功后调用
          const user = login(this.loginForm);
          console.log(user);
          this.$store.commit("store_Onlogin", {
            userName: this.loginForm.username
          });
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
      //注册按钮
      this.$store.commit("store_LoginDialog", false);
      this.loginForm={};
      this.$router.push("/register");
    },
    handleCommand(command) {
      //登录名处下拉菜单
      switch (command) {
        case "personInfo":
          console.log(command);
          break;
        case "signOut":
          this.$store.commit("store_SignOut");
          this.loginForm = {};
          this.$router.push("/");
          break;
      }
    }
  },
  computed: {
    ...mapState(["isLogin", "users", "loginDialog"])
  },
  
};
</script>

<style scoped>
.page {
  background-color: #5283c9;
  border-bottom: 1px solid #ffffff;
}
.dropSpan {
  color: aliceblue;
}
.logo{
  color: #ffffff;
  font-weight: bold;
  font-size: 24px;
}
</style>
