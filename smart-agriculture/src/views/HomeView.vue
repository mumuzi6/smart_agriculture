<template>
  <div class="container">
    <div class="home-banner">
      <h1 class="welcome-text">欢迎访问智慧农业与农村云平台</h1>
      <p class="sub-text">数字农业 · 智慧乡村 · 农产品资讯</p>
      <div class="action-buttons">
        <router-link to="/agriculture-info" class="action-button">
          浏览农业资讯
        </router-link>
        <router-link to="/ai-robot" class="action-button secondary">
          咨询AI助手
        </router-link>
      </div>
    </div>

    <div class="feature-section">
      <h2 class="section-title">平台功能</h2>
      <div class="feature-grid">
        <div class="feature-card" v-for="(feature, index) in features" :key="index">
          <div class="feature-icon" :style="{ backgroundColor: feature.color }">
            <i :class="feature.icon"></i>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.description }}</p>
          <router-link :to="feature.link" class="feature-link">
            了解更多
          </router-link>
        </div>
      </div>
    </div>

    <div class="news-section">
      <h2 class="section-title">最新农业资讯</h2>
      <div class="news-grid">
        <div class="news-card" v-for="(news, index) in latestNews" :key="index">
          <div class="news-image">
            <img :src="news.image" :alt="news.title">
          </div>
          <div class="news-content">
            <h3 class="news-title">{{ news.title }}</h3>
            <p class="news-excerpt">{{ news.excerpt }}</p>
            <span class="news-date">{{ news.date }}</span>
          </div>
        </div>
      </div>
      <div class="text-center">
        <router-link to="/agriculture-info" class="more-link">查看更多资讯</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      features: [
        {
          title: '拾农——前沿农业资讯',
          description: '提供最新的农业政策、技术动态、市场行情分析等信息。',
          icon: 'icon-news',
          color: '#4CAF50',
          link: '/agriculture-info'
        },
        {
          title: '伯旺——AI对话工具',
          description: '智能AI助手，解答各类农业问题，提供专业知识支持。',
          icon: 'icon-ai',
          color: '#2196F3',
          link: '/ai-robot'
        },
        {
          title: '农乎——云端农业社区',
          description: '连接农民、专家和各类从业者的社区平台，共享经验与知识。',
          icon: 'icon-community',
          color: '#FF9800',
          link: '/community'
        },
        {
          title: '智云——一对一定制服务',
          description: '针对农业企业和个人提供定制化的专业咨询和解决方案。',
          icon: 'icon-service',
          color: '#9C27B0',
          link: '/custom-service'
        }
      ],
      latestNews: [
        {
          title: '全国绿色农业发展论坛成功举办',
          excerpt: '由农业农村部主办的全国绿色农业发展论坛在北京成功举办，来自全国各地的专家学者共同探讨绿色农业发展路径...',
          image: '/src/assets/images/news5.jpg',
          date: '2023-04-20'
        },
        {
          title: '数字农业技术创新推进会在京举行',
          excerpt: '数字农业技术创新推进会日前在北京举行，会议发布了最新的数字农业技术方案和成果，推动数字技术与农业深度融合...',
          image: '/src/assets/images/news3.jpg',
          date: '2023-04-15'
        },
        {
          title: '2023年全国春耕备耕工作顺利开展',
          excerpt: '全国各地积极组织春耕备耕工作，确保农资供应，强化技术指导，为全年粮食丰收打下坚实基础...',
          image: '/src/assets/images/news2.jpg',
          date: '2023-04-10'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home-banner {
  text-align: center;
  padding: 60px 20px;
  background: linear-gradient(rgba(76, 175, 80, 0.7), rgba(76, 175, 80, 0.9)), url('/src/assets/images/banner.jpg');
  background-size: cover;
  background-position: center;
  color: var(--white);
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.welcome-text {
  font-size: 32px;
  margin-bottom: 15px;
}

.sub-text {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.9;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.action-button {
  display: inline-block;
  padding: 12px 30px;
  background-color: var(--white);
  color: var(--primary-color);
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.3s;
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.action-button.secondary {
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--white);
}

.feature-section {
  margin-bottom: 50px;
}

.section-title {
  font-size: 24px;
  margin-bottom: 30px;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.feature-card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px 20px;
  text-align: center;
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
}

.feature-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: var(--white);
  font-size: 24px;
}

.feature-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--gray-800);
}

.feature-desc {
  color: var(--gray-600);
  margin-bottom: 20px;
  font-size: 14px;
  line-height: 1.5;
}

.feature-link {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

.news-section {
  margin-bottom: 50px;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.news-card {
  background-color: var(--white);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
}

.news-image {
  height: 200px;
  overflow: hidden;
}

.news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.news-card:hover .news-image img {
  transform: scale(1.05);
}

.news-content {
  padding: 20px;
}

.news-title {
  font-size: 16px;
  margin-bottom: 10px;
  color: var(--gray-800);
}

.news-excerpt {
  font-size: 14px;
  color: var(--gray-600);
  margin-bottom: 15px;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.news-date {
  display: block;
  font-size: 12px;
  color: var(--gray-500);
}

.text-center {
  text-align: center;
}

.more-link {
  display: inline-block;
  padding: 10px 25px;
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s;
}

.more-link:hover {
  background-color: var(--primary-dark);
}

/* 响应式设计 */
@media (max-width: 991px) {
  .feature-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
  
  .news-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .news-grid {
    grid-template-columns: 1fr;
  }
  
  .welcome-text {
    font-size: 26px;
  }
  
  .sub-text {
    font-size: 16px;
  }
  
  .action-buttons {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 