<template>
  <div class="page">
    <p>登陆</p>
    <el-form ref="loginForm" :model= "loginForm" :rules="rules" status-icon>
        <el-form-item label="用户名" prop = "username">
        <el-input v-model= "loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop = "password" >
        <el-input type="password" v-model= "loginForm.password"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onLogin('loginForm')">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
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
  methods: {
    ...mapMutations(["store_Login"]),
    onLogin(formName) {
      //确认登陆按钮
      this.$refs[formName].validate(valid => {
        if (valid) {
          //TODO 请求后台登陆,登陆成功后调用
          const user = login(this.loginForm);
          this.$store.commit("store_Login", {
            userName: this.loginForm.username
          });
          this.$router.go(-1);
        } else {
          this.$message({
            message: "请输入用户名及密码",
            type: "warning"
          });
          return false;
        }
      });
    },
  },
}
</script>

<style scoped>
.page{
  width: 300px;
  margin:50px auto;
  border-radius: 10px;
  border: #c0c0c0 3px solid;
  text-align: center;
  font-size: 24px;
  padding: 20px
  }

</style>
