<template>
  <header>
    <nav class="main-nav">
      <div class="container nav-container">
        <div class="logo">
          <img src="./assets/images/logo.png" alt="智慧农业平台logo">
        </div>
        
        <ul class="nav-menu">
          <li :class="{ active: route.path === '/' }">
            <router-link to="/">首页</router-link>
          </li>
          <li :class="{ active: route.path === '/agriculture-info' }">
            <router-link to="/agriculture-info">拾农——前沿农业资讯</router-link>
          </li>
          <li :class="{ active: route.path === '/ai-robot' }">
            <router-link to="/ai-robot">伯旺——AI对话工具</router-link>
          </li>
          <li :class="{ active: route.path === '/community' }">
            <router-link to="/community">农乎——云端农业社区</router-link>
          </li>
          <li :class="{ active: route.path === '/custom-service' }">
            <router-link to="/custom-service">智云——一对一定制服务</router-link>
          </li>
          <li :class="{ active: route.path === '/about' }">
            <router-link to="/about">公司介绍</router-link>
          </li>
          <li :class="{ active: route.path === '/contact' }">
            <router-link to="/contact">联系我们</router-link>
          </li>
        </ul>
        
        <div class="auth-buttons">
          <router-link to="/login" class="auth-btn login-btn">登录</router-link>
          <router-link to="/register" class="auth-btn register-btn">注册</router-link>
        </div>
      </div>
    </nav>
    
    <div class="sub-nav" v-if="route.path === '/agriculture-info'">
      <div class="container sub-nav-container">
        <div class="sub-nav-title">拾农——前沿农业资讯</div>
        
        <div class="search-bar">
          <input type="text" placeholder="欢迎您使用智多农云服务系统！" class="search-input">
          <button class="search-button">
            <i class="search-icon"></i>
          </button>
        </div>
        
        <div class="user-panel">
          <div class="user-avatar">
            <img src="./assets/images/用户头像.jpg" alt="用户头像">
          </div>
          <a href="/member" class="user-link">会员中心</a>
          <a href="/messages" class="user-link">消息<span class="badge">1</span></a>
          <a href="/history" class="user-link">历史</a>
          <a href="/creator" class="user-link">创作中心</a>
        </div>
      </div>
    </div>
    
    <div class="sub-nav" v-if="route.path === '/custom-service'">
      <div class="container sub-nav-container">
        <div class="sub-nav-title">智云——一对一定制服务</div>
        
        <div class="search-bar">
          <input type="text" placeholder="欢迎您使用智多农云服务系统！" class="search-input">
          <button class="search-button">
            <i class="search-icon"></i>
          </button>
        </div>
        
        <div class="user-panel">
          <div class="user-avatar">
            <img src="./assets/images/用户头像.jpg" alt="用户头像">
          </div>
          <a href="/member" class="user-link">会员中心</a>
          <a href="/messages" class="user-link">消息<span class="badge">1</span></a>
          <a href="/history" class="user-link">历史</a>
          <a href="/creator" class="user-link">创作中心</a>
        </div>
      </div>
    </div>
    
    <div class="sub-nav" v-if="route.path === '/community'">
      <div class="container sub-nav-container">
        <div class="sub-nav-title">农乎——云端农业社区</div>
        
        <div class="search-bar">
          <input type="text" placeholder="欢迎您使用智慧农云服务系统！" class="search-input">
          <button class="search-button">
            <i class="search-icon"></i>
          </button>
        </div>
        
        <div class="user-panel">
          <div class="knowledge-bean-display">
            <img src="./assets/images/知农豆.png" alt="知农豆" class="bean-icon">
            <span class="bean-count">知农豆：986</span>
          </div>
          <a href="/community-admin" class="user-link" style="margin-right: 15px;">农乎管理平台</a>
          <div class="user-avatar">
            <img src="./assets/images/用户头像.jpg" alt="用户头像">
          </div>
          <a href="/messages" class="user-link">
            <i class="notification-icon">🔔</i>
            <span class="badge">1</span>
          </a>
        </div>
      </div>
    </div>
    
    <div class="site-links" v-if="route.path === '/agriculture-info'">
      <div class="container">
        <div class="links-wrapper">
          <a href="http://www.agri.cn/" target="_blank" class="site-link">中国农业农村信息网</a>
          <a href="http://nyzy.com/" target="_blank" class="site-link">农业之友网</a>
          <a href="https://tv.cctv.com/" target="_blank" class="site-link">央视网</a>
          <a href="https://www.thepaper.cn/news" target="_blank" class="site-link">澎湃新闻</a>
          <a href="https://www.moa.gov.cn/" target="_blank" class="site-link">中华人民共和国农业农村部</a>
          <a href="http://journals.caass.org.cn/zgnykx/CN/current" target="_blank" class="site-link">中国农业科学网</a>
          <a href="http://finance.aweb.com.cn/" target="_blank" class="site-link">农业财经_农博网</a>
          <a href="https://www.usda.gov/" target="_blank" class="site-link">美国农业部(USDA)</a>
          <a href="https://agriculture.canada.ca/en" target="_blank" class="site-link">加拿大农业和农业食品部</a>
          <a href="https://www.agriculture.gov.au/" target="_blank" class="site-link">澳大利亚农业和水资源部</a>
          <a href="https://agriculture.ec.europa.eu/index_en" target="_blank" class="site-link">欧盟委员会农业和农村发展</a>
          <a href="https://www.gov.br/agricultura/pt-br/" target="_blank" class="site-link">巴西农业部</a>
          <a href="https://www.india.gov.in/topics/agriculture" target="_blank" class="site-link">印度农业部</a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <router-view />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style>
.main-nav {
  background-color: var(--primary-color);
  color: var(--white);
  height: 60px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.logo {
  height: 40px;
  margin-right: 20px;
  flex-shrink: 0;
}

.logo img {
  height: 100%;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
}

.nav-menu::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.nav-menu li {
  position: relative;
  margin-right: 2px;
  white-space: nowrap;
}

.nav-menu li a {
  display: block;
  padding: 0 10px;
  line-height: 60px;
  color: var(--white);
  font-size: 15px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.nav-menu li a:hover,
.nav-menu li.active a {
  background-color: var(--primary-dark);
}

.sub-nav {
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  padding: 10px 0;
}

.sub-nav-container {
  display: flex;
  align-items: center;
}

.sub-nav-title {
  font-size: 16px;
  font-weight: bold;
  color: var(--gray-800);
  margin-right: 20px;
}

.search-bar {
  display: flex;
  align-items: center;
  background-color: var(--white);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--gray-300);
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  /* margin-right: 5px; */
}

.search-input {
  flex: 1;
  border: none;
  padding: 10px 15px;
  outline: none;
  font-size: 14px;
  color: var(--gray-700);
}

.search-button {
  background-color: var(--primary-color);
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-icon {
  width: 20px;
  height: 20px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');
  background-size: contain;
  background-repeat: no-repeat;
}

.user-panel {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}

.user-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-link {
  font-size: 14px;
  color: var(--gray-800);
  margin-left: 15px;
  text-decoration: none;
  position: relative;
}

.badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--danger);
  color: var(--white);
  font-size: 12px;
  min-width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  border-radius: 9px;
  padding: 0 5px;
}

.knowledge-bean-display {
  display: flex;
  align-items: center;
  margin-right: 15px;
  background-color: #f8f9fa;
  padding: 5px 10px;
  border-radius: 20px;
  border: 1px solid #e9ecef;
}

.bean-icon {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.bean-count {
  font-weight: bold;
  color: #FF9800;
}

.notification-icon {
  font-size: 18px;
  color: var(--gray-700);
}

.site-links {
  background-color: var(--gray-100);
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-200);
}

.links-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  column-gap: 15px;
}

.site-link {
  color: var(--gray-700);
  font-size: 16px;
  text-decoration: none;
  white-space: nowrap;
}

.site-link:hover {
  color: var(--primary-color);
}

.auth-buttons {
  display: flex;
  gap: 10px;
  margin-left: 10px;
  flex-shrink: 0;
}

.auth-btn {
  padding: 8px 15px;
  border-radius: 4px;
  font-size: 14px;
  text-decoration: none;
  transition: all 0.3s;
}

.login-btn {
  color: var(--white);
  border: 1px solid var(--white);
}

.login-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.register-btn {
  background-color: var(--white);
  color: var(--primary-color);
}

.register-btn:hover {
  background-color: var(--gray-100);
}

/* 响应式设计 */
@media (max-width: 991px) {
  .nav-menu {
    display: none;
  }
  
  .sub-nav-container {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .sub-nav-title {
    margin-bottom: 10px;
  }
  
  .search-bar {
    margin: 10px 0;
    width: 100%;
  }
  
  .user-panel {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    flex-wrap: wrap;
  }
  
  .knowledge-bean-display {
    margin-bottom: 10px;
  }
  
  .auth-buttons {
    display: none;
  }
}

@media (max-width: 1200px) and (min-width: 992px) {
  .nav-menu li a {
    padding: 0 8px;
    font-size: 14px;
  }
  
  .auth-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style> 