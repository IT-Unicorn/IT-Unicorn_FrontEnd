<template>
  <div>
    <div v-if="!isLogin">
        <el-button type="text" @click="onSignIn">登陆</el-button>
        <el-button type="text" @click="onSignUp">注册</el-button>
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
  </div>
</template>


<script>
import { mapState, mapMutations } from "vuex";
import {login} from '@/service/transaction';
export default {
  methods: {
    ...mapMutations(["store_SignOut"]),
    onSignIn() {
      //登陆按钮
      this.$router.push("/login");
    },
    onSignUp() {
      //注册按钮
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
          this.$router.push("/");
          break;
      }
    }
  },
  computed: {
    ...mapState(["isLogin", "users"])
  },
}
</script>

<style>
.dropSpan{
  color: white
}
</style>
