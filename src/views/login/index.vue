<template>
  <div class="home" id="app" >


    <el-main>  
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2"  class="demo-ruleForm">
        <el-form-item  prop="username">
            <label> 用户名 </label>
          <el-input type="text" v-model="ruleForm2.username" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="password">
          <label> 密码 </label>
          <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item  prop="code">
          <label> 验证码 </label>
          <el-row :gutter="20">
            <el-col :span="18"><div class="grid-content bg-purple"><el-input v-model.number="ruleForm2.code"></el-input></div></el-col>
           <el-col :span="6"><div class="grid-content bg-purple"> <el-button type="success">获取验证码</el-button>   </div></el-col>
         </el-row>
          
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
    </el-form>
    </el-main>
  </div>
</template>

<script>
// @ is an alias to /src
export default {

   data() {
      var checkCode = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        callback();
      };
      var validateUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.username !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
          callback();
        
      };
      return {
        ruleForm2: {
          username: '',
          password: '',
          code: ''
        },
        rules2: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ],
          code: [
            { validator: checkCode, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style lang="scss" scoped>


</style>
