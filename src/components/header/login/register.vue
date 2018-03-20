<template>
  <div class="page">
    <p>注册</p>
    <el-form ref="registerForm" :model= "registerForm" :rules="rules" status-icon>
        <el-form-item label="用户名" prop = "username">
        <el-input v-model= "registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop = "password" >
        <el-input type="password" v-model= "registerForm.password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop = "checkPassword" >
        <el-input type="password" v-model= "registerForm.checkPassword"></el-input>
        </el-form-item>
        <el-button type="primary" @click="onRegister('registerForm')">注册</el-button>
    </el-form>
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
import { register } from "@/service/transaction";
export default {
  data() {
    return {
      registerForm: {
        username: "",
        password: "",
        checkPassword: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPassword: [
          {
            validator: (rule, value, callback) => {
              if (value === "") {
                callback(new Error("请再次输入密码"));
              } else if (value !== this.registerForm.password) {
                callback(new Error("两次输入密码不一致!"));
              } else {
                callback();
              }
            },
            required: true,
            trigger: "blur"
          }
        ]
      }
    };
  },
  created() {
    if (this.isLogin) {
      //登陆成功后会返回上一个页面, 如果上一个页面是注册页,有点奇怪,所以跳转到首页
      this.$router.push("/");
    }
  },
  computed: {
    ...mapState(["isLogin"])
  },
  methods: {
    onRegister(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //TODO 请求后台登陆,登陆成功后调用
          const user = register(this.loginForm);
          this.$router.push('/login');
        } else {
          this.$message({
            message: "请按要求输入注册信息",
            type: "warning"
          });
          return false;
        }
      });
    }
  }
};
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