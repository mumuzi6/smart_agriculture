<template>
  <div class="custom-service-wrapper">
    <!-- 主要内容区域 -->
    <div class="service-main-content">
      <!-- 主标题区域 -->
      <div class="service-hero">
        <h1 class="service-title">一对一专家服务</h1>
        <p class="service-description">
          智多农云技术专家为您一对一提供服务，涵盖专业一对一专业知识服务、常见第三方软件安装部署、异常排查、性能优化以及专业教育培训团队服务。
        </p>
      </div>
      
      <!-- 服务内容导航 -->
      <div class="service-tabs">
        <a href="#advantages" class="service-tab active">服务优势</a>
        <a href="#content-pricing" class="service-tab">服务内容与定价</a>
        <a href="#fixed-pricing" class="service-tab">服务内容与定价</a>
        <a href="#standards" class="service-tab">服务验收标准</a>
        <a href="#process" class="service-tab">服务流程与分工</a>
        <a href="#resources" class="service-tab">其他团队对接资源</a>
      </div>
    </div>
    
    <!-- 服务优势展示区域 -->
    <div class="advantages-section">
      <h2 class="section-title">服务优势</h2>
      
      <div class="advantages-grid">
        <!-- 24小时响应 -->
        <div class="advantage-card">
          <div class="advantage-icon">
            <div class="clock-icon"></div>
          </div>
          <h3 class="advantage-title">24小时内快速响应</h3>
        </div>
        
        <!-- 专家团队 -->
        <div class="advantage-card">
          <div class="advantage-icon">
            <div class="expert-icon"></div>
          </div>
          <h3 class="advantage-title">专家团队经验丰富</h3>
        </div>
        
        <!-- 数据备份 -->
        <div class="advantage-card">
          <div class="advantage-icon">
            <div class="security-icon"></div>
          </div>
          <h3 class="advantage-title">数据备份安全可靠</h3>
        </div>
        
        <!-- 在线社群 -->
        <div class="advantage-card">
          <div class="advantage-icon">
            <div class="community-icon"></div>
          </div>
          <h3 class="advantage-title">在线社群即时跟进</h3>
        </div>
      </div>
    </div>
    
    <!-- 其他服务内容部分可以根据需要添加 -->
  </div>
</template>

<script>
export default {
  name: 'CustomServiceView',
  data() {
    return {
      activeTab: 'advantages'
    }
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    }
  }
}
</script>

<style scoped>
.custom-service-wrapper {
  background: url('../assets/images/service-bg.jpg') no-repeat center center;
  background-size: cover;
  min-height: 600px;
  padding: 40px 0;
  position: relative;
}

.custom-service-wrapper::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1;
}

.service-main-content {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.service-hero {
  text-align: left;
  margin-bottom: 40px;
}

.service-title {
  font-size: 36px;
  font-weight: bold;
  color: #000;
  margin-bottom: 20px;
}

.service-description {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
  max-width: 800px;
}

.service-tabs {
  display: flex;
  margin-bottom: 40px;
  border-bottom: 1px solid #e0e0e0;
}

.service-tab {
  padding: 15px 20px;
  font-size: 16px;
  color: #666;
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
}

.service-tab.active,
.service-tab:hover {
  color: #4CAF50;
}

.service-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #4CAF50;
}

.advantages-section {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 20px auto 60px;
  padding: 0 20px;
}

.section-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
}

.advantages-grid {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.advantage-card {
  width: 22%;
  min-width: 220px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  transition: transform 0.3s;
}

.advantage-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.advantage-icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 图标使用CSS绘制，也可替换为图片 */
.clock-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 3px solid #4CAF50;
  position: relative;
}

.clock-icon::before {
  content: '24';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  font-weight: bold;
  color: #4CAF50;
}

.expert-icon {
  width: 60px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 50%;
  position: relative;
}

.expert-icon::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
}

.expert-icon::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 20px;
  background-color: white;
  border-radius: 10px 10px 0 0;
}

.security-icon {
  width: 60px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 10px;
  position: relative;
}

.security-icon::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 20px;
  border: 3px solid white;
  border-radius: 5px;
}

.community-icon {
  width: 60px;
  height: 60px;
  background-color: #4CAF50;
  border-radius: 50%;
  position: relative;
}

.community-icon::before {
  content: '';
  position: absolute;
  top: 15px;
  left: 15px;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
}

.advantage-title {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 10px;
}

@media (max-width: 991px) {
  .advantages-grid {
    justify-content: center;
    gap: 20px;
  }
  
  .advantage-card {
    width: 45%;
  }
}

@media (max-width: 767px) {
  .service-tabs {
    flex-wrap: wrap;
  }
  
  .service-tab {
    width: 50%;
    padding: 10px 15px;
    text-align: center;
  }
  
  .advantage-card {
    width: 100%;
    max-width: 300px;
  }
}
</style> 