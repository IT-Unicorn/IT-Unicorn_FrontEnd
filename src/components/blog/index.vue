<template>
  <el-container>
    <el-header>
        <el-button type="primary" icon="el-icon-edit" circle @click="newStory"></el-button> 
        <p>搜索框</p>
    </el-header>
    <el-main>
        <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
    export default {
        methods: {
            newStory(){
                this.$router.push("/blog/newStory");
            }
        }
    }
</script>

<style scoped>


</style>
