<template>
  <div class="register-page">
    <div class="register-container">
      <h2 class="register-title">用户注册</h2>
      <form class="register-form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="username">用户名</label>
          <input 
            type="text" 
            id="username" 
            v-model="username" 
            placeholder="请输入用户名"
            required
          >
        </div>
        <div class="form-group">
          <label for="email">电子邮箱</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            placeholder="请输入电子邮箱"
            required
          >
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="请输入密码"
            required
          >
        </div>
        <div class="form-group">
          <label for="confirmPassword">确认密码</label>
          <input 
            type="password" 
            id="confirmPassword" 
            v-model="confirmPassword" 
            placeholder="请再次输入密码"
            required
          >
        </div>
        <div class="agreement">
          <label>
            <input type="checkbox" v-model="agreeTerms" required>
            我已阅读并同意<a href="#" class="terms-link">服务条款</a>和<a href="#" class="terms-link">隐私政策</a>
          </label>
        </div>
        <button type="submit" class="register-btn" :disabled="!agreeTerms">注册</button>
        <div class="login-link">
          已有账号? <router-link to="/login">立即登录</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false
    }
  },
  methods: {
    handleRegister() {
      if (this.password !== this.confirmPassword) {
        alert('两次输入的密码不一致');
        return;
      }
      
      // 注册逻辑将在此处实现
      console.log('注册请求:', {
        username: this.username,
        email: this.email,
        password: this.password
      });
      // 在实际应用中，这里会调用API进行用户注册
      alert('注册功能将在后续实现');
    }
  }
}
</script>

<style scoped>
.register-page {
  width: 100%;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  background-image: url('../assets/images/登陆页面背景.png');
  background-size: cover;
  background-position: center;
}

.register-container {
  width: 450px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  right: -8%;
  transform: translate(-50%, -50%);
}

.register-title {
  text-align: center;
  font-size: 28px;
  color: var(--primary-color);
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--gray-700);
}

.form-group input {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid var(--gray-300);
  border-radius: 5px;
  font-size: 16px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
}

.agreement {
  margin-bottom: 20px;
  color: var(--gray-700);
  font-size: 14px;
}

.terms-link {
  color: var(--primary-color);
  text-decoration: none;
}

.terms-link:hover {
  text-decoration: underline;
}

.register-btn {
  width: 100%;
  padding: 12px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-btn:hover {
  background-color: var(--primary-dark);
}

.register-btn:disabled {
  background-color: var(--gray-400);
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-700);
}

.login-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}
</style> 