<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="项目名称" prop="name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="项目介绍" prop="detail">
            <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="form.detail">
            </el-input>
        </el-form-item>

  <el-form-item>
    <el-button type="primary" @click= "onSubmit('form')" >创建</el-button>
    <el-button @click = "resetForm('form')">重置</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        detail: "",
      },
      rules:{
          name: [
            { required: true, message: '请输入项目名称', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
          ],
      }
    };
  },
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            this.$message({
                message:'表单校验不通过',
                type: 'warning'});
            return false;
          }
        });
    },
    resetForm(formName) {
        console.log(this);
        this.$refs[formName].resetFields();
    }
  }
};
</script>
