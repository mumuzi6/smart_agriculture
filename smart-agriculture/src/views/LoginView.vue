<template>
  <div class="login-page">
    <div class="login-container">
      <h2 class="login-title">用户登录</h2>
      <form class="login-form" @submit.prevent="handleLogin">
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
          <label for="password">密码</label>
          <input 
            type="password" 
            id="password" 
            v-model="password" 
            placeholder="请输入密码"
            required
          >
        </div>
        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe"> 记住我
          </label>
          <a href="#" class="forgot-password">忘记密码?</a>
        </div>
        <button type="submit" class="login-btn">登录</button>
        <div class="register-link">
          还没有账号? <router-link to="/register">立即注册</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false
    }
  },
  methods: {
    handleLogin() {
      // 登录逻辑将在此处实现
      console.log('登录请求:', {
        username: this.username,
        password: this.password,
        rememberMe: this.rememberMe
      });
      // 在实际应用中，这里会调用API进行用户验证
      alert('登录功能将在后续实现');
    }
  }
}
</script>

<style scoped>
.login-page {
  width: 100%;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  position: relative;
  background-image: url('../assets/images/登陆页面背景.png');
  background-size: cover;
  background-position: center;
  /* padding-right: 30%; */
}

.login-container {
  width: 400px;
  padding: 40px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: absolute;
  top: 50%;
  right: -5%;
  transform: translate(-50%, -55%);
}

.login-title {
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

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.remember-me {
  display: flex;
  align-items: center;
  color: var(--gray-700);
  font-size: 14px;
}

.remember-me input {
  margin-right: 8px;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
  font-size: 14px;
}

.login-btn {
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

.login-btn:hover {
  background-color: var(--primary-dark);
}

.register-link {
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: var(--gray-700);
}

.register-link a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}
</style> 