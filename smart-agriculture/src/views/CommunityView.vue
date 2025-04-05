<template>
  <div class="container">
    <div class="community-container">
      <div class="community-header">
        <h1 class="page-title">农乎 —— 云端农业社区</h1>
        <p class="page-desc">一键登录、知农豆变现、专业智库、文件库管理、创建农社区</p>
      </div>

      <div class="main-content">
        <div class="content-left">
          <div class="category-nav">
            <h3 class="nav-title">我的社区</h3>
            <ul class="category-list">
              <li class="active">
                创建/管理的社区
                <span class="count">3</span>
              </li>
              <li>
                加入的社区
                <span class="count">8</span>
              </li>
              <li>
                关注的社区
                <span class="count">12</span>
              </li>
              <li>
                专业数据分析
                <span class="count">5</span>
              </li>
            </ul>
          </div>

          <div class="action-panel">
            <button class="create-community-btn">创建我的农社区</button>
            <button class="file-manager-btn">文件库管理</button>
          </div>
        </div>

        <div class="content-right">
          <div class="tab-nav">
            <span :class="{ active: activeTab === 'newest' }" @click="activeTab = 'newest'">最新</span>
            <span :class="{ active: activeTab === 'featured' }" @click="activeTab = 'featured'">精华</span>
            <span :class="{ active: activeTab === 'expert' }" @click="activeTab = 'expert'">专家</span>
            <span :class="{ active: activeTab === 'qa' }" @click="activeTab = 'qa'">问答</span>
            <span :class="{ active: activeTab === 'checkin' }" @click="activeTab = 'checkin'">打卡</span>
          </div>

          <div class="publish-box">
            <div class="publish-header">
              <img src="../assets/images/avatar.png" alt="用户头像" class="user-avatar-small">
              <input type="text" placeholder="分享农业知识，提问或发起讨论..." class="publish-input">
            </div>
            <div class="publish-footer">
              <div class="publish-tools">
                <button class="tool-btn"><span class="icon">📷</span> 图片</button>
                <button class="tool-btn"><span class="icon">📁</span> 文件</button>
                <button class="tool-btn"><span class="icon">🏷️</span> 标签</button>
                <button class="tool-btn"><span class="icon">💰</span> 设置知农豆</button>
              </div>
              <button class="publish-btn">发布</button>
            </div>
          </div>

          <div class="content-list">
            <div class="content-item" v-for="(item, index) in contentItems" :key="index">
              <div class="content-header">
                <div class="author-info">
                  <img :src="item.avatar" alt="作者头像" class="author-avatar">
                  <div class="author-meta">
                    <span class="author-name">{{ item.author }}</span>
                    <span class="author-badge" v-if="item.isExpert">认证专家</span>
                    <span class="post-time">{{ item.time }}</span>
                  </div>
                </div>
                <div class="content-tag" v-if="item.tag">{{ item.tag }}</div>
              </div>
              <div class="content-body">
                <h3 class="content-title">{{ item.title }}</h3>
                <p class="content-text">{{ item.content }}</p>
                <div class="content-media" v-if="item.image">
                  <img :src="item.image" alt="内容图片" class="content-image">
                </div>
                <div class="content-file" v-if="item.file">
                  <div class="file-icon">📄</div>
                  <div class="file-info">
                    <span class="file-name">{{ item.file.name }}</span>
                    <span class="file-size">{{ item.file.size }}</span>
                  </div>
                  <button class="file-download">下载</button>
                </div>
                <div class="knowledge-bean-tag" v-if="item.beanPrice">
                  <span class="bean-icon">🌱</span>
                  <span class="bean-price">{{ item.beanPrice }} 知农豆</span>
                </div>
              </div>
              <div class="content-footer">
                <div class="interaction-btns">
                  <button class="interact-btn like">
                    <span class="icon">👍</span>
                    <span class="count">{{ item.likes }}</span>
                  </button>
                  <button class="interact-btn comment">
                    <span class="icon">💬</span>
                    <span class="count">{{ item.comments }}</span>
                  </button>
                  <button class="interact-btn share">
                    <span class="icon">🔄</span>
                    <span class="count">{{ item.shares }}</span>
                  </button>
                </div>
                <button class="reward-btn" v-if="!item.beanPrice">
                  <span class="icon">🌱</span>
                  <span>打赏知农豆</span>
                </button>
              </div>
            </div>
          </div>

          <div class="pagination">
            <button class="page-btn prev">上一页</button>
            <span class="page active">1</span>
            <span class="page">2</span>
            <span class="page">3</span>
            <span class="dots">...</span>
            <span class="page">10</span>
            <button class="page-btn next">下一页</button>
          </div>
        </div>

        <div class="content-sidebar">
          <div class="ai-assistant">
            <div class="assistant-header">
              <h3>伯旺AI助手</h3>
            </div>
            <div class="assistant-body">
              <div class="ai-message">
                <p>您好！我是伯旺AI助手，有任何农业问题都可以问我！</p>
              </div>
              <div class="user-input">
                <input type="text" placeholder="输入您的问题..." class="ai-input">
                <button class="ai-send">发送</button>
              </div>
            </div>
          </div>
          
          <div class="featured-topics">
            <div class="section-header">
              <h3>精华主题</h3>
              <a href="#" class="more-link">更多</a>
            </div>
            <div class="topic-list">
              <div class="topic-item" v-for="(topic, index) in featuredTopics" :key="index">
                <div class="topic-title">{{ topic.title }}</div>
                <div class="topic-meta">
                  <span class="view-count">{{ topic.views }} 阅读</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="file-library">
            <div class="section-header">
              <h3>热门文件</h3>
              <a href="#" class="more-link">进入文件库</a>
            </div>
            <div class="file-items">
              <div class="file-item" v-for="(file, index) in popularFiles" :key="index">
                <div class="file-type-icon" :class="file.type">{{ file.icon }}</div>
                <div class="file-details">
                  <div class="file-title">{{ file.name }}</div>
                  <div class="file-meta">
                    <span class="file-downloads">{{ file.downloads }}下载</span>
                    <span class="file-price" v-if="file.price">{{ file.price }}知农豆</span>
                    <span class="file-free" v-else>免费</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="year-selector">
            <div class="section-header">
              <h3>年份筛选</h3>
            </div>
            <div class="year-options">
              <span class="year-option active">全部</span>
              <span class="year-option">2023</span>
              <span class="year-option">2022</span>
              <span class="year-option">2021</span>
              <span class="year-option">2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityView',
  data() {
    return {
      activeTab: 'newest',
      contentItems: [
        {
          author: '农业技术专家',
          avatar: '../assets/images/expert-avatar.png',
          isExpert: true,
          time: '1小时前',
          title: '夏季水稻高温防治技术指南',
          content: '随着全球气候变暖，水稻种植过程中的高温胁迫问题日益严重。本文总结了几种有效的夏季水稻高温防治技术，包括水分管理、叶面喷施降温剂和科学调整肥料配方等方法...',
          image: '../assets/images/rice-field.jpg',
          tag: '技术指南',
          likes: 56,
          comments: 23,
          shares: 12
        },
        {
          author: '有机农场主',
          avatar: '../assets/images/farmer-avatar.png',
          isExpert: false,
          time: '3小时前',
          title: '我的有机蔬菜种植经验分享',
          content: '从事有机蔬菜种植三年，积累了一些实用的经验，特别是关于天然防虫和土壤改良的方法，希望对同行有所帮助。以下是我在实践中总结的几点经验...',
          likes: 42,
          comments: 15,
          shares: 8,
          beanPrice: 5
        },
        {
          author: '乡村振兴官',
          avatar: '../assets/images/official-avatar.png',
          isExpert: true,
          time: '昨天',
          title: '最新农业补贴政策解读',
          content: '近日，国家发布了新一轮农业补贴政策，本文将详细解读补贴的申请条件、流程及注意事项，帮助广大农户及时获取相关信息...',
          file: {
            name: '2023年农业补贴政策解读.pdf',
            size: '1.2MB'
          },
          tag: '政策解读',
          likes: 98,
          comments: 34,
          shares: 56
        },
        {
          author: '新手农民',
          avatar: '../assets/images/novice-avatar.png',
          isExpert: false,
          time: '2天前',
          title: '请教：玉米苗期出现黄叶，是什么原因？',
          content: '我的玉米刚出苗一周，发现有些叶片开始发黄，不知道是缺素还是病虫害导致，请有经验的前辈们指点一下，附上照片...',
          image: '../assets/images/corn-yellow-leaf.jpg',
          likes: 12,
          comments: 18,
          shares: 3
        }
      ],
      featuredTopics: [
        {
          title: '水肥一体化技术在果园中的应用',
          views: 1256
        },
        {
          title: '农产品电商运营经验分享',
          views: 986
        },
        {
          title: '设施农业智能化管理系统搭建',
          views: 852
        },
        {
          title: '农业碳汇项目实施案例分析',
          views: 734
        },
        {
          title: '特色农产品品牌打造策略',
          views: 651
        }
      ],
      popularFiles: [
        {
          name: '水稻病虫害图谱.pdf',
          icon: '📄',
          type: 'pdf',
          downloads: 328,
          price: 10
        },
        {
          name: '现代农业技术手册.docx',
          icon: '📝',
          type: 'doc',
          downloads: 245,
          price: null
        },
        {
          name: '土壤改良指南.pdf',
          icon: '📄',
          type: 'pdf',
          downloads: 189,
          price: 5
        },
        {
          name: '农业政策汇编2023.xlsx',
          icon: '📊',
          type: 'excel',
          downloads: 156,
          price: null
        }
      ]
    }
  }
}
</script>

<style scoped>
.community-container {
  padding: 30px 0;
}

.community-header {
  text-align: center;
  margin-bottom: 30px;
}

.page-title {
  font-size: 28px;
  margin-bottom: 10px;
  color: var(--gray-900);
}

.page-desc {
  font-size: 16px;
  color: var(--gray-600);
}

.main-content {
  display: flex;
  margin-top: 20px;
  gap: 20px;
}

.content-left {
  width: 220px;
  flex-shrink: 0;
}

.content-right {
  flex: 1;
}

.content-sidebar {
  width: 280px;
  flex-shrink: 0;
}

.category-nav {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  overflow: hidden;
}

.nav-title {
  padding: 15px;
  background-color: var(--primary-light);
  margin: 0;
  font-size: 16px;
  color: var(--primary-dark);
  border-bottom: 1px solid var(--gray-200);
}

.category-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.category-list li {
  padding: 12px 15px;
  border-bottom: 1px solid var(--gray-200);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.2s;
}

.category-list li:last-child {
  border-bottom: none;
}

.category-list li:hover {
  background-color: var(--gray-100);
}

.category-list li.active {
  background-color: var(--primary-light);
  color: var(--primary-dark);
  font-weight: bold;
}

.count {
  background-color: var(--gray-200);
  border-radius: 10px;
  padding: 2px 8px;
  font-size: 12px;
  color: var(--gray-700);
}

.action-panel {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.create-community-btn, .file-manager-btn {
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
}

.create-community-btn {
  background-color: var(--primary-color);
  color: white;
}

.file-manager-btn {
  background-color: var(--gray-200);
  color: var(--gray-800);
}

.tab-nav {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 1px solid var(--gray-200);
  background-color: white;
  border-radius: 8px 8px 0 0;
  padding: 0 15px;
}

.tab-nav span {
  padding: 15px 20px;
  cursor: pointer;
  color: var(--gray-600);
  position: relative;
}

.tab-nav span.active {
  color: var(--primary-color);
  font-weight: bold;
}

.tab-nav span.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.publish-box {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  padding: 15px;
}

.publish-header {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.user-avatar-small {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
}

.publish-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid var(--gray-300);
  border-radius: 20px;
  font-size: 14px;
  outline: none;
}

.publish-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.publish-tools {
  display: flex;
  gap: 10px;
}

.tool-btn {
  background: none;
  border: none;
  padding: 5px 10px;
  color: var(--gray-600);
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 5px;
}

.publish-btn {
  padding: 8px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.content-list {
  margin-bottom: 20px;
}

.content-item {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 15px;
  padding: 20px;
}

.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.author-meta {
  display: flex;
  flex-direction: column;
}

.author-name {
  font-weight: bold;
  margin-bottom: 3px;
}

.author-badge {
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  margin-bottom: 3px;
}

.post-time {
  color: var(--gray-500);
  font-size: 12px;
}

.content-tag {
  background-color: var(--gray-100);
  color: var(--gray-700);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}

.content-body {
  margin-bottom: 15px;
}

.content-title {
  font-size: 18px;
  margin-bottom: 10px;
}

.content-text {
  color: var(--gray-700);
  margin-bottom: 15px;
  line-height: 1.5;
}

.content-media {
  margin-bottom: 15px;
}

.content-image {
  max-width: 100%;
  border-radius: 8px;
}

.content-file {
  display: flex;
  align-items: center;
  background-color: var(--gray-100);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 15px;
}

.file-icon {
  font-size: 24px;
  margin-right: 10px;
}

.file-info {
  flex: 1;
}

.file-name {
  font-weight: bold;
  margin-bottom: 3px;
  display: block;
}

.file-size {
  color: var(--gray-500);
  font-size: 12px;
}

.file-download {
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
}

.knowledge-bean-tag {
  display: inline-flex;
  align-items: center;
  background-color: #fff8e1;
  color: #ff8f00;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: bold;
}

.bean-icon {
  margin-right: 5px;
}

.content-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--gray-200);
  padding-top: 15px;
}

.interaction-btns {
  display: flex;
  gap: 15px;
}

.interact-btn {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  color: var(--gray-600);
  cursor: pointer;
}

.interact-btn .count {
  background: none;
  padding: 0;
  margin-left: 5px;
}

.reward-btn {
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.ai-assistant, .featured-topics, .file-library, .year-selector {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  margin-bottom: 20px;
  overflow: hidden;
}

.assistant-header, .section-header {
  padding: 15px;
  background-color: var(--primary-light);
  margin: 0;
}

.assistant-header h3, .section-header h3 {
  margin: 0;
  font-size: 16px;
  color: var(--primary-dark);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.more-link {
  color: var(--primary-color);
  font-size: 12px;
  text-decoration: none;
}

.assistant-body {
  padding: 15px;
}

.ai-message {
  background-color: var(--gray-100);
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.ai-message p {
  margin: 0;
}

.user-input {
  display: flex;
}

.ai-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--gray-300);
  border-radius: 4px 0 0 4px;
  font-size: 14px;
  outline: none;
}

.ai-send {
  padding: 8px 15px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.topic-list, .file-items {
  padding: 15px;
}

.topic-item {
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-200);
}

.topic-item:last-child {
  border-bottom: none;
}

.topic-title {
  font-size: 14px;
  margin-bottom: 5px;
  color: var(--gray-800);
}

.topic-meta {
  color: var(--gray-500);
  font-size: 12px;
}

.file-item {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-200);
}

.file-item:last-child {
  border-bottom: none;
}

.file-type-icon {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 18px;
}

.file-type-icon.pdf {
  background-color: #f44336;
  color: white;
}

.file-type-icon.doc {
  background-color: #2196f3;
  color: white;
}

.file-type-icon.excel {
  background-color: #4caf50;
  color: white;
}

.file-details {
  flex: 1;
}

.file-title {
  font-size: 14px;
  margin-bottom: 3px;
}

.file-meta {
  font-size: 12px;
  color: var(--gray-500);
  display: flex;
  justify-content: space-between;
}

.file-price {
  color: #ff9800;
  font-weight: bold;
}

.file-free {
  color: #4caf50;
}

.year-options {
  display: flex;
  flex-wrap: wrap;
  padding: 15px;
  gap: 10px;
}

.year-option {
  padding: 5px 10px;
  border-radius: 15px;
  background-color: var(--gray-100);
  cursor: pointer;
  font-size: 14px;
}

.year-option.active {
  background-color: var(--primary-color);
  color: white;
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.page, .dots {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  color: var(--gray-700);
  font-size: 14px;
}

.page:hover {
  background-color: var(--gray-100);
}

.page.active {
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
}

.page-btn {
  padding: 0 15px;
  height: 36px;
  background-color: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  cursor: pointer;
  color: var(--gray-700);
  margin: 0 5px;
  font-size: 14px;
  transition: all 0.2s;
}

.page-btn:hover {
  background-color: var(--gray-100);
  border-color: var(--gray-400);
}

.page-btn.prev {
  margin-right: 5px;
}

.page-btn.next {
  margin-left: 5px;
}

/* 响应式设计 */
@media (max-width: 1200px) {
  .content-sidebar {
    width: 250px;
  }
}

@media (max-width: 991px) {
  .main-content {
    flex-direction: column;
  }
  
  .content-left {
    width: 100%;
    margin-bottom: 20px;
  }
  
  .content-sidebar {
    width: 100%;
    margin-top: 20px;
  }
  
  .category-nav, .action-panel {
    margin-bottom: 15px;
  }
  
  .action-panel {
    flex-direction: row;
  }
  
  .create-community-btn, .file-manager-btn {
    flex: 1;
  }
}

@media (max-width: 767px) {
  .search-section {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .search-box {
    width: 100%;
    max-width: none;
    margin-bottom: 15px;
  }
  
  .user-panel {
    width: 100%;
    justify-content: space-between;
  }
  
  .tab-nav {
    overflow-x: auto;
    white-space: nowrap;
    padding: 0;
  }
  
  .tab-nav span {
    padding: 15px 15px;
  }
  
  .publish-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .publish-tools {
    width: 100%;
    justify-content: space-between;
  }
  
  .publish-btn {
    width: 100%;
  }
  
  .content-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .content-tag {
    margin-top: 10px;
  }
  
  .content-footer {
    flex-direction: column;
    gap: 10px;
  }
  
  .interaction-btns {
    width: 100%;
    justify-content: space-between;
  }
  
  .reward-btn {
    width: 100%;
    justify-content: center;
  }
}
</style> 