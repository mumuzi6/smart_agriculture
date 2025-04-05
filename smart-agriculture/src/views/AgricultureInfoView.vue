<template>
  <div class="container">
    <div class="page-content">
      <!-- 第一行: 新闻资讯 + 新闻列表 + 价格指数(前三个标签) -->
      <div class="top-row">
        <!-- 新闻资讯 轮播 -->
        <div class="news-carousel">
          <h2 class="section-title">新闻资讯</h2>
          <div class="carousel-container">
            <button class="carousel-prev" @click="prevSlide">&lt;</button>
            <div v-for="(slide, index) in carouselSlides" :key="index" 
                class="carousel-item" 
                :class="{ active: currentSlide === index }">
              <img :src="slide.image" :alt="slide.title">
              <div class="carousel-caption">{{ slide.title }}</div>
            </div>
            <button class="carousel-next" @click="nextSlide">&gt;</button>
            <div class="carousel-indicator">{{ currentSlide + 1 }} / {{ carouselSlides.length }}</div>
          </div>
        </div>

        <div class="right-section">
          <!-- 新闻列表 -->
          <div class="news-list">
            <div class="news-tabs">
              <a href="#" 
                class="news-tab" 
                :class="{ active: activeTab === 'news' }"
                @click.prevent="activeTab = 'news'">
                农业要闻
              </a>
              <a href="#" 
                class="news-tab" 
                :class="{ active: activeTab === 'core' }"
                @click.prevent="activeTab = 'core'">
                核心信息
              </a>
              <a href="#" 
                class="news-tab" 
                :class="{ active: activeTab === 'national' }"
                @click.prevent="activeTab = 'national'">
                全国信息联播
              </a>
              <a href="#" 
                class="news-tab" 
                :class="{ active: activeTab === 'notice' }"
                @click.prevent="activeTab = 'notice'">
                通知
              </a>
            </div>
            
            <ul class="news-items">
              <li class="news-item" v-for="(news, index) in newsItems" :key="index">
                <a href="#">{{ news }}</a>
              </li>
            </ul>
            
            <div class="more-link">
              <a href="#">更多</a>
            </div>
          </div>

          <!-- 价格指数(前三个标签) -->
          <div class="price-index market-indices">
            <div class="index-tabs">
              <a href="#" 
                class="index-tab" 
                :class="{ active: activeIndexTab === 'price' }"
                @click.prevent="activeIndexTab = 'price'">
                价格指数
              </a>
              <a href="#" 
                class="index-tab" 
                :class="{ active: activeIndexTab === '200' }"
                @click.prevent="activeIndexTab = '200'">
                200指数
              </a>
              <a href="#" 
                class="index-tab" 
                :class="{ active: activeIndexTab === 'wholesale' }"
                @click.prevent="activeIndexTab = 'wholesale'">
                批发价格
              </a>
            </div>
            
            <div class="index-content">
              <h4 class="index-title">宠物食品原料价格指数</h4>
              <div class="index-value">108.89</div>
              <div class="index-chart">
                <!-- 这里会用ECharts展示图表 -->
                <div ref="priceChart" style="width: 100%; height: 150px;"></div>
              </div>
              <div class="index-change">
                <span class="rate">0.00%</span>
                <span class="direction">环比</span>
              </div>
              <div class="index-time">发布时间：2023年第19周</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二行: 专题报告 + 农业课堂和文化生活 -->
      <div class="bottom-row">
        <!-- 专题报告 -->
        <div class="special-reports">
          <h2 class="section-title">专题报告</h2>
          <div class="banner-image">
            <img src="../assets/images/spring-farming.jpg" alt="春耕进行时">
          </div>
          <div class="topic-grid">
            <div class="topic-item" v-for="(topic, index) in topicItems" :key="index">
              <div class="topic-icon" :style="{ backgroundColor: topic.color }">
                <i :class="topic.icon"></i>
              </div>
              <div class="topic-title">{{ topic.title }}</div>
            </div>
          </div>
        </div>

        <!-- 农业课堂和文化生活 -->
        <div class="education-culture">
          <div class="index-tabs">
            <a href="#" 
              class="index-tab" 
              :class="{ active: activeEducationTab === 'class' }"
              @click.prevent="activeEducationTab = 'class'">
              农业课堂
            </a>
            <a href="#" 
              class="index-tab" 
              :class="{ active: activeEducationTab === 'culture' }"
              @click.prevent="activeEducationTab = 'culture'">
              文化生活
            </a>
          </div>
          
          <div class="education-content">
            <!-- 农业课堂和文化生活的内容 -->
            <div class="education-placeholder">
              <h4>农业课堂与文化生活内容区域</h4>
              <p>这里可以展示农业相关教育和文化内容</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'AgricultureInfoView',
  setup() {
    const currentSlide = ref(0);
    const activeTab = ref('core');
    const activeIndexTab = ref('price');
    const activeEducationTab = ref('class');
    const priceChart = ref(null);

    // 轮播图数据
    const carouselSlides = [
      { 
        image: '/src/assets/images/news1.jpg', 
        title: '中印农业联合会第五次会议召开' 
      },
      { 
        image: '/src/assets/images/news2.jpg', 
        title: '2023年全国春耕备耕工作顺利开展' 
      },
      { 
        image: '/src/assets/images/news3.jpg', 
        title: '数字农业技术创新推进会在京举行' 
      },
      { 
        image: '/src/assets/images/news4.jpg', 
        title: '农业农村部发布重要农产品市场监测预警' 
      },
      { 
        image: '/src/assets/images/news5.jpg', 
        title: '全国绿色农业发展论坛成功举办' 
      }
    ];

    // 专题栏目数据
    const topicItems = [
      { title: '钢联农产品', color: '#DD6B55', icon: 'icon-product' },
      { title: '第三次土壤普查', color: '#5F7A8A', icon: 'icon-soil' },
      { title: '智慧道', color: '#2E8AE6', icon: 'icon-smart-road' },
      { title: '智慧种植', color: '#4DC6B0', icon: 'icon-planting' },
      { title: '土地流转', color: '#8E7BAD', icon: 'icon-land' },
      { title: '物联网', color: '#F2994A', icon: 'icon-iot' },
      { title: '茶叶进出口信息', color: '#3FAE29', icon: 'icon-tea' }
    ];

    // 新闻列表数据
    const newsItems = [
      '全国农业农村信息中心系统现代信息技术及部省业务协同培训...',
      '太部分产区苹果花期较常年持平或偏晚且集中在东山东等产区需防范...',
      '弘扬乡家精神 强化使命担当——信息中心党委组织党员和干部...',
      '农业农村部信息中心2024年度公开招聘应届毕业生补充公告',
      '强化纪法教育 筑牢思想防线——信息中心纪委组织开展典型案...',
      '以数字化智能化赋能乡村全面振兴——信息中心举办2024年...',
      '王小兵主任参加2024中国农产品商高层研讨会并作发言'
    ];

    // 轮播图控制
    const nextSlide = () => {
      if (currentSlide.value < carouselSlides.length - 1) {
        currentSlide.value++;
      } else {
        currentSlide.value = 0;
      }
    };

    const prevSlide = () => {
      if (currentSlide.value > 0) {
        currentSlide.value--;
      } else {
        currentSlide.value = carouselSlides.length - 1;
      }
    };

    // 自动轮播
    let autoSlideInterval;
    const startAutoSlide = () => {
      autoSlideInterval = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    // 价格指数图表初始化
    const initPriceChart = () => {
      if (priceChart.value) {
        const chart = echarts.init(priceChart.value);
        
        const option = {
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: '10%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月'],
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              fontSize: 10
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: '#eee'
              }
            },
            axisLabel: {
              fontSize: 10
            }
          },
          series: [{
            data: [105.2, 106.8, 107.5, 108.2, 108.5, 108.7, 108.85, 108.89, 108.89],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              color: '#4CAF50'
            },
            lineStyle: {
              color: '#4CAF50',
              width: 3
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(76, 175, 80, 0.3)'
                }, {
                  offset: 1,
                  color: 'rgba(76, 175, 80, 0.05)'
                }]
              }
            }
          }]
        };
        
        chart.setOption(option);
        
        // 响应窗口大小变化
        window.addEventListener('resize', () => {
          chart.resize();
        });
      }
    };

    onMounted(() => {
      startAutoSlide();
      initPriceChart();
    });

    return {
      currentSlide,
      carouselSlides,
      topicItems,
      newsItems,
      activeTab,
      activeIndexTab,
      activeEducationTab,
      priceChart,
      nextSlide,
      prevSlide
    };
  }
};
</script>

<style scoped>
/* 整体布局 */
.page-content {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  gap: 20px;
}

.top-row, .bottom-row {
  display: flex;
  gap: 20px;
  width: 100%;
}

.news-carousel {
  flex: 2; /* 占据左侧更多空间 */
  margin-bottom: 0;
}

.right-section {
  flex: 3; /* 右侧区域比例 */
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.news-list {
  flex: 1;
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
}

.market-indices {
  flex: 1;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.special-reports {
  flex: 2; /* 使专题报告的宽度与上排的新闻资讯+新闻列表的总长度相等 */
  margin-bottom: 0;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.education-culture {
  flex: 3; /* 保持与右上方区域相同的宽度比例 */
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

/* 新闻轮播 */
.section-title {
  font-size: 20px;
  margin-bottom: 15px;
  position: relative;
  padding-left: 15px;
}

.section-title::before {
  content: '';
  width: 5px;
  height: 20px;
  background-color: var(--primary-color);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.carousel-container {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 比例 */
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-item img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--white);
  font-size: 16px;
}

.carousel-prev,
.carousel-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--white);
  border: none;
  border-radius: 50%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
}

.carousel-prev {
  left: 10px;
}

.carousel-next {
  right: 10px;
}

.carousel-indicator {
  position: absolute;
  right: 15px;
  top: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  color: var(--white);
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 12px;
}

/* 新闻列表 */
.news-tabs {
  display: flex;
  border-bottom: 1px solid var(--gray-200);
}

.news-tab {
  padding: 12px 20px;
  color: var(--gray-700);
  font-size: 16px;
  text-decoration: none;
  position: relative;
}

.news-tab.active {
  color: var(--primary-color);
  font-weight: bold;
}

.news-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.news-items {
  list-style: none;
  padding: 0;
  margin: 0;
}

.news-item {
  padding: 12px 20px;
  border-bottom: 1px solid var(--gray-200);
}

.news-item:last-child {
  border-bottom: none;
}

.news-item a {
  color: var(--gray-800);
  text-decoration: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s;
}

.news-item a:hover {
  color: var(--primary-color);
}

.more-link {
  text-align: right;
  padding: 10px 20px;
  border-top: 1px solid var(--gray-200);
}

.more-link a {
  color: var(--gray-600);
  font-size: 14px;
}

/* 价格指数和教育文化 */
.index-tabs {
  display: flex;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  border-bottom: 1px solid var(--gray-200);
}

.index-tabs::-webkit-scrollbar {
  display: none; /* Chrome, Safari, Opera */
}

.index-tab {
  padding: 12px 15px;
  white-space: nowrap;
  color: var(--gray-700);
  text-decoration: none;
  position: relative;
}

.index-tab.active {
  color: var(--primary-color);
  font-weight: bold;
}

.index-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.index-content {
  padding: 20px;
}

.index-title {
  font-size: 16px;
  margin-bottom: 15px;
  color: var(--gray-700);
}

.index-value {
  font-size: 36px;
  font-weight: bold;
  color: var(--gray-900);
  margin-bottom: 15px;
}

.index-chart {
  height: 150px;
  margin-bottom: 15px;
}

.index-change {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.rate {
  font-size: 16px;
  font-weight: bold;
  color: var(--success);
}

.rate.negative {
  color: var(--danger);
}

.direction {
  font-size: 12px;
  color: var(--gray-600);
  margin-left: 5px;
}

.index-time {
  font-size: 12px;
  color: var(--gray-600);
}

/* 农业课堂和文化生活 */
.education-placeholder {
  padding: 20px;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.education-content {
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  padding: 15px;
}

.education-placeholder h4 {
  font-size: 18px;
  color: var(--gray-800);
  margin-bottom: 10px;
}

.education-placeholder p {
  color: var(--gray-600);
  font-size: 14px;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .top-row, .bottom-row {
    flex-direction: column;
  }
  
  .news-carousel, .right-section, .special-reports, .education-culture {
    flex: 1;
    width: 100%;
  }
  
  .topic-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 767px) {
  .topic-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 