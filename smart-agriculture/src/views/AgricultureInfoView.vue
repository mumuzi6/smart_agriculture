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
              <a :href="slide.link" target="_blank">
                <img :src="slide.image" :alt="slide.title">
                <div class="carousel-caption">{{ slide.title }}</div>
              </a>
            </div>
            <button class="carousel-next" @click="nextSlide">&gt;</button>
            <div class="carousel-indicator">{{ currentSlide + 1 }} / {{ carouselSlides.length }}</div>
          </div>
        </div>

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
              :class="{ active: activeTab === 'policy' }"
              @click.prevent="activeTab = 'policy'">
              政策文件
            </a>
          </div>
          
          <ul class="news-items">
            <li class="news-item" v-for="(news, index) in newsItems" :key="index">
              <a :href="news.link" target="_blank">{{ news.title }}</a>
            </li>
          </ul>
        </div>

        <!-- 价格指数(前三个标签) -->
        <div class="price-index market-indices">
          <div class="index-tabs">
            <a href="#" 
              class="index-tab" 
              :class="{ active: activeIndexTab === 'price' }"
              @click.prevent="handleIndexTabChange('price')">
              价格指数
            </a>
            <a href="#" 
              class="index-tab" 
              :class="{ active: activeIndexTab === '200' }"
              @click.prevent="handleIndexTabChange('200')">
              200指数
            </a>
            <a href="#" 
              class="index-tab" 
              :class="{ active: activeIndexTab === 'wholesale' }"
              @click.prevent="handleIndexTabChange('wholesale')">
              批发价格
            </a>
          </div>
          
          <div class="index-content" v-if="activeIndexTab === 'price'">
            <h4 class="index-title">瘦肉型白条猪肉出厂价格总指数</h4>
            <div class="index-value">19.18</div>
            <div class="index-chart">
              <!-- 这里会用ECharts展示图表 -->
              <div ref="priceChart" style="width: 100%; height: 150px;"></div>
            </div>
            <div class="index-change">
              <span class="rate negative">-0.52%</span>
              <span class="direction">环比</span>
            </div>
            <div class="index-time">发布时间：2025-04-03</div>
          </div>
          
          <!-- 200指数内容 -->
          <div class="index-content" v-if="activeIndexTab === '200'">
            <h4 class="index-title">农产品批发价格200指数</h4>
            <div class="index-value">120.05</div>
            <div class="index-change" style="margin-top: -15px;">
              <span class="rate positive">+0.22</span>
              <span class="direction">较昨日</span>
            </div>
            <div class="index-chart">
              <!-- 这里会用ECharts展示图表 -->
              <div ref="indexChart" style="width: 100%; height: 150px;"></div>
            </div>
            <div class="index-time">发布时间：2025-04-03</div>
          </div>
          
          <!-- 批发价格内容 -->
          <div class="index-content wholesale-content" v-if="activeIndexTab === 'wholesale'">
            <div class="wholesale-tabs">
              <a href="#" 
                class="wholesale-tab" 
                :class="{ active: activeWholesaleTab === 'grain' }"
                @click.prevent="activeWholesaleTab = 'grain'">
                粮食
              </a>
              <a href="#" 
                class="wholesale-tab" 
                :class="{ active: activeWholesaleTab === 'vegetable' }"
                @click.prevent="activeWholesaleTab = 'vegetable'">
                蔬菜
              </a>
              <a href="#" 
                class="wholesale-tab" 
                :class="{ active: activeWholesaleTab === 'livestock' }"
                @click.prevent="activeWholesaleTab = 'livestock'">
                畜产品
              </a>
              <a href="#" 
                class="wholesale-tab" 
                :class="{ active: activeWholesaleTab === 'aquatic' }"
                @click.prevent="activeWholesaleTab = 'aquatic'">
                水产品
              </a>
            </div>
            <div class="table-container">
              <table class="price-table">
                <thead>
                  <tr>
                    <th>品种</th>
                    <th>批发市场</th>
                    <th>最高价</th>
                    <th>最低价</th>
                    <th>大宗价</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in wholesalePriceData" :key="index">
                    <td>{{item.variety}}</td>
                    <td>{{item.market}}</td>
                    <td>{{item.maxPrice}}</td>
                    <td>{{item.minPrice}}</td>
                    <td>{{item.avgPrice}}</td>
                  </tr>
                </tbody>
              </table>
              <div class="more-link">
                <a href="https://pfsc.agri.cn/#/priceMarket" target="_blank">更多 +</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 第二行: 专题报告 + 农业课堂和文化生活 -->
      <div class="bottom-row">
        <!-- 专题报告 -->
        <div class="special-reports">
          <div class="title">
            <h2 class="section-title">专题报告</h2>
            <a href="./zt/" target="_blank" class="more">更多</a>
          </div>
          <div class="zt_main">
            <div class="zt_wrap">
              <div class="sfq-slide-con">
                <div v-for="(topic, index) in topicItems" :key="index" 
                     class="slide-item" 
                     :class="{ 'on': currentTopic === index }"
                     @click="currentTopic = index">
                  <span>{{ topic.title }}</span>
                  <div class="onwidth">
                    <a :href="topic.link" target="_blank">
                      <img :src="topic.image" :alt="topic.title">
                    </a>
                  </div>
                </div>
              </div>
              <button class="topic-prev" @click="prevTopic">&lt;</button>
              <button class="topic-next" @click="nextTopic">&gt;</button>
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
            <div v-if="activeEducationTab === 'class'" class="video-content">
              <div class="swiper-slide">
                <a href="http://www.agri.cn/video/jzpx/202003/t20200324_6339712.htm" target="_blank" title="荆楚农时课：瓜豆类保温育苗技术要点">
                  <div class="img"><img src="/src/assets/images/农业课堂.jpg" alt="荆楚农时课：瓜豆类保温育苗技术要点"></div>
                  <p>荆楚农时课：瓜豆类保温育苗技术要点</p>
                  <div class="play"></div>
                </a>
              </div>
            </div>
            
            <div v-if="activeEducationTab === 'culture'" class="video-content">
              <div class="swiper-slide">
                <a href="http://www.agri.cn/video/whsh/202504/t20250403_6472769.htm" target="_blank" title="高手来了·赏鲤尝鲜 福运绵长">
                  <div class="img"><img src="/src/assets/images/文化生活.jpg" alt="高手来了·赏鲤尝鲜 福运绵长"></div>
                  <p>高手来了·赏鲤尝鲜 福运绵长</p>
                  <div class="play"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

export default {
  name: 'AgricultureInfoView',
  setup() {
    const currentSlide = ref(0);
    const activeTab = ref('news');
    const activeIndexTab = ref('price');
    const activeEducationTab = ref('class');
    const activeWholesaleTab = ref('grain');
    const priceChart = ref(null);
    const indexChart = ref(null);
    const isHovered = ref(false);
    const currentTopic = ref(0);

    // 轮播图数据
    const carouselSlides = [
      { 
        image: '/src/assets/images/nyNews1.jpg', 
        title: '"万企兴万村"行动推进会在京召开', 
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250404_8723851.htm'
      },
      { 
        image: '/src/assets/images/nyNews2.jpg', 
        title: '农业农村部与西藏自治区政府举行工作会谈', 
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250402_8723409.htm'
      },
      { 
        image: '/src/assets/images/nyNews3.jpg', 
        title: '农业农村部与宁夏回族自治区党委政府举行工作会谈', 
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250402_8723378.htm'
      },
      { 
        image: '/src/assets/images/nyNews4.jpg', 
        title: '农业农村部召开2025年全面从严治党工作会暨警示教育会强调 一刻不停纵深推进部系统全面从严治党 为推进乡村全面振兴提供坚强有力保障', 
        link: 'http://www.agri.cn/zx/nyyw/202503/t20250331_8722738.htm'
      },
      { 
        image: '/src/assets/images/nyNews5.jpg', 
        title: '农业农村部召开全国粮油作物大面积单产提升工作推进视频会强调 突出关键抓好大面积单产提升 为保障国家粮食安全提供强有力支撑', 
        link: 'http://www.agri.cn/zx/nyyw/202503/t20250328_8722270.htm'
      }
    ];

    // 专题栏目数据
    const topicItems = [
      { 
        title: '春耕进行时', 
        image: '/src/assets/images/春耕进行时.png', 
        link: 'http://www.moa.gov.cn/ztzl/2024cg/'
      },
      { 
        title: '钢联农产品', 
        image: '/src/assets/images/钢联农产品.png', 
        link: 'http://www.agri.cn/zt/2024/glncp/'
      },
      { 
        title: '第三次土壤普查', 
        image: '/src/assets/images/第三次全国土壤普查.png', 
        link: 'http://www.moa.gov.cn/ztzl/dscqgtrpc/'
      },
      { 
        title: '智慧渔业', 
        image: '/src/assets/images/智慧渔业.png',
        link: 'http://www.agri.cn/zt/2024/zhyy/'
      },
      { 
        title: '智慧种植', 
        image: '/src/assets/images/智慧种植.png',
        link: 'http://www.agri.cn/zt/zhzz/'
      },
      { 
        title: '土地流转', 
        image: '/src/assets/images/土地流转.png',
        link: 'https://agri.tuliu.com/'
      },
      { 
        title: '物联网', 
        image: '/src/assets/images/物联网.png',
        link: 'https://wlw.hx3n.com/datav/indexinfo.do'
      },
      { 
        title: '茶叶进出口信息', 
        image: '/src/assets/images/中国茶叶进出口信息平台.png',
        link: 'https://www.capiaccti.org.cn/teaTrade'
      }
    ];

    // 新闻列表数据
    const newsItems = [
      {
        title: '第二届中国—塞拉利昂渔业联合委员会会议在京召开',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723758.htm'
      },
      {
        title: '2025"名优茶出省 大宗茶出海"产销对接暨第三届咸丰白茶文化交流活动将于4月26日启幕',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723702.htm'
      },
      {
        title: '全国大部分产区苹果花期较常年提前 花期冻害风险等级为轻至中度',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723667.htm'
      },
      {
        title: '2024年全国休闲农业营收近9000亿元',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723444.htm'
      },
      {
        title: '2025青年科技工作者智能农机装备技术发展论坛举办',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723441.htm'
      },
      {
        title: '从"引活水"到"强保障"——金融服务为农业发展持续注入活力',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723435.htm'
      },
      {
        title: '2025全国"村跑"首站江西婺源开跑',
        link: 'http://www.agri.cn/zx/nyyw/202504/t20250403_8723437.htm'
      },
    ];

    // 批发价格数据
    const wholesalePriceData = [
      {
        variety: '面粉',
        market: '内蒙古保全庄农产品批发市场',
        maxPrice: '4.0',
        minPrice: '3.4',
        avgPrice: '3.6'
      },
      {
        variety: '面粉',
        market: '南昌深圳农产品中心批发市场有限公司',
        maxPrice: '10.0',
        minPrice: '4.1',
        avgPrice: '4.2'
      },
      {
        variety: '面粉',
        market: '北京新发地农副产品批发市场信息中心',
        maxPrice: '3.26',
        minPrice: '3.26',
        avgPrice: '3.26'
      },
      {
        variety: '面粉',
        market: '江苏凌家塘市场发展有限公司',
        maxPrice: '4.04',
        minPrice: '3.22',
        avgPrice: '3.54'
      }
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

    // 标签页切换后初始化对应图表
    const updateCharts = () => {
      setTimeout(() => {
        if (activeIndexTab.value === 'price' && priceChart.value) {
          initPriceEChart();
        } else if (activeIndexTab.value === '200' && indexChart.value) {
          init200IndexChart();
        }
      }, 0);
    };
    
    // 监听标签页变化
    const handleIndexTabChange = (tab) => {
      activeIndexTab.value = tab;
      updateCharts();
    };

    // 价格指数图表初始化函数拆分为两个独立函数
    const initPriceEChart = () => {
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
            data: ['2025-01-02', '2025-02-18', '2025-03-27'],
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              fontSize: 10,
              rotate: 30
            }
          },
          yAxis: {
            type: 'value',
            min: 0,
            max: 25,
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
            data: [20.5, 19.2, 19.18],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            itemStyle: {
              color: '#f8caac'
            },
            lineStyle: {
              color: '#f8caac',
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
                  color: 'rgba(248, 202, 172, 0.3)'
                }, {
                  offset: 1,
                  color: 'rgba(248, 202, 172, 0.05)'
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
    
    const init200IndexChart = () => {
      if (indexChart.value) {
        const chart = echarts.init(indexChart.value);
        
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
            data: ['3/28', '3/29', '3/30', '3/31', '4/1', '4/2', '4/3'],
            axisLine: {
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              fontSize: 10,
            }
          },
          yAxis: {
            type: 'value',
            min: 118,
            max: 122,
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
            data: [119.58, 119.62, 119.68, 119.85, 119.92, 119.83, 120.05],
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
    
    // 初始化所有图表
    const initPriceChart = () => {
      initPriceEChart();
      init200IndexChart();
    };

    // 专题报告控制
    const nextTopic = () => {
      if (currentTopic.value < topicItems.length - 1) {
        currentTopic.value++;
      } else {
        currentTopic.value = 0;
      }
    };
    
    const prevTopic = () => {
      if (currentTopic.value > 0) {
        currentTopic.value--;
      } else {
        currentTopic.value = topicItems.length - 1;
      }
    };
    
    // 添加定时器，自动切换专题
    let autoTopicInterval;
    const startAutoTopic = () => {
      autoTopicInterval = setInterval(() => {
        nextTopic();
      }, 5000);
    };

    onMounted(() => {
      startAutoSlide();
      startAutoTopic();
      // 初始根据当前标签页初始化对应图表
      updateCharts();
    });
    
    onUnmounted(() => {
      // 清理定时器，避免内存泄漏
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
      if (autoTopicInterval) {
        clearInterval(autoTopicInterval);
      }
    });

    return {
      currentSlide,
      currentTopic,
      carouselSlides,
      topicItems,
      newsItems,
      activeTab,
      activeIndexTab,
      activeEducationTab,
      activeWholesaleTab,
      priceChart,
      indexChart,
      wholesalePriceData,
      nextSlide,
      prevSlide,
      nextTopic,
      prevTopic,
      isHovered,
      handleIndexTabChange
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
  justify-content: space-between; /* 平均分配空间 */
}

.news-carousel {
  flex: 1.4; /* 调整宽度比例 - 轮播图区域稍大一些 */
  margin-bottom: 0;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.news-list {
  flex: 1.0; /* 调整宽度比例 - 新闻列表区域稍小一些 */
  background-color: var(--white);
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: 0;
  max-width: 32%; /* 进一步限制最大宽度，确保标题可以显示省略号 */
}

.market-indices {
  flex: 0.8; /* 调整宽度比例 - 与下方教育文化区域相同 */
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 230px; /* 确保有足够宽度显示标签 */
}

.special-reports {
  flex: 2.4; 
  margin-bottom: 0;
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 15px;
  overflow: hidden;
  position: relative;
  min-height: 300px;
  width: calc(100% - 260px - 20px);
  max-width: calc(100% - 260px - 20px);
}

.special-reports .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.special-reports .more {
  color: var(--gray-600);
  font-size: 14px;
  text-decoration: none;
}

.special-reports .more:hover {
  color: var(--primary-color);
}

.zt_main {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.zt_wrap {
  position: relative;
  height: 100%;
}

.sfq-slide-con {
  display: flex;
  height: 100%;
}

.slide-item {
  position: relative;
  flex: 1;
  height: 100%;
  overflow: hidden;
  margin-right: 15px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  flex-basis: 80px;
}

.slide-item span {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0.4);
  writing-mode: vertical-rl;
  text-orientation: upright;
  letter-spacing: 4px;
  transition: all 0.3s ease;
  z-index: 2;
}

.slide-item.on {
  flex-basis: 480px;
}

.slide-item.on span {
  width: 80px;
  right: 0;
  left: auto;
  opacity: 0;
  visibility: hidden;
}

.onwidth {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.onwidth img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.slide-item:hover:not(.on) span {
  background-color: rgba(0, 0, 0, 0.6);
}

.education-culture {
  flex: 0.8; /* 调整宽度比例，与market-indices宽度相同 */
  background-color: var(--white);
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 260px; /* 固定宽度，与上方价格指数区域一致 */
  min-width: 230px;
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
  width: 100%;
  height: 100%;
}

.carousel-item {
  position: relative;
  width: 100%;
  height: 250px; /* 固定高度确保图片占满区域 */
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
  object-position: center;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.carousel-item a {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-decoration: none;
  color: inherit;
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
  overflow: hidden; /* 添加溢出控制 */
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
  width: 100%; /* 确保宽度占满父元素 */
  max-width: 100%; /* 限制最大宽度 */
}

.news-item a:hover {
  color: var(--primary-color);
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

.rate.positive {
  color: #4CAF50;
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

/* 批发价格样式 */
.wholesale-content {
  padding: 15px 10px;
}

.wholesale-tabs {
  display: flex;
  overflow-x: auto;
  border-bottom: 1px solid var(--gray-200);
  margin-bottom: 10px;
}

.wholesale-tab {
  padding: 8px 12px;
  white-space: nowrap;
  color: var(--gray-700);
  text-decoration: none;
  position: relative;
  font-size: 14px;
}

.wholesale-tab.active {
  color: var(--primary-color);
  font-weight: bold;
}

.wholesale-tab.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--primary-color);
}

.table-container {
  max-height: 220px;
  overflow-y: auto;
}

.price-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
}

.price-table th,
.price-table td {
  padding: 6px 4px;
  text-align: center;
  border-bottom: 1px solid var(--gray-200);
}

.price-table th {
  background-color: var(--gray-100);
  color: var(--gray-700);
  font-weight: 600;
  white-space: nowrap;
}

.price-table td {
  color: var(--gray-800);
}

.more-link {
  text-align: center;
  margin-top: 10px;
}

.more-link a {
  color: var(--gray-600);
  text-decoration: none;
  font-size: 14px;
}

.more-link a:hover {
  color: var(--primary-color);
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
@media (max-width: 1200px) {
  .news-list {
    max-width: none; /* 在小屏幕上取消最大宽度限制 */
  }
  
  .market-indices {
    min-width: auto; /* 在小屏幕上取消最小宽度限制 */
  }
  
  .slide-item.on {
    flex-basis: 320px;
  }
}

@media (max-width: 991px) {
  .top-row, .bottom-row {
    flex-direction: column;
  }
  
  .news-carousel, .news-list, .market-indices, .special-reports, .education-culture {
    flex: 1;
    width: 100%;
    margin-bottom: 20px;
    max-width: 100%;
  }
  
  .sfq-slide-con {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .slide-item {
    flex-basis: 30%;
    margin-bottom: 10px;
    height: 120px;
  }
  
  .slide-item.on {
    flex-basis: 100%;
    height: 200px;
  }
  
  .slide-item span {
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    letter-spacing: normal;
  }
  
  .slide-item.on span {
    width: 100%;
    height: 40px;
    top: auto;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
  }
}

@media (max-width: 767px) {
  .slide-item {
    flex-basis: 45%;
  }
}

/* 专题报告导航按钮 */
.topic-prev,
.topic-next {
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
  opacity: 0.3;
  transition: opacity 0.3s ease;
}

.topic-prev {
  left: 10px;
}

.topic-next {
  right: 10px;
}

.zt_wrap:hover .topic-prev,
.zt_wrap:hover .topic-next {
  opacity: 1;
}

/* 视频内容样式 */
.video-content {
  width: 100%;
  height: 100%;
}

.video-content .swiper-slide {
  width: 100%;
  height: 100%;
}

.video-content .swiper-slide a {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  text-decoration: none;
  color: var(--gray-800);
}

.video-content .swiper-slide .img {
  width: 100%;
  height: 80%;
  overflow: hidden;
  border-radius: 4px;
  position: relative;
}

.video-content .swiper-slide .img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.video-content .swiper-slide a:hover .img img {
  transform: scale(1.05);
}

.video-content .swiper-slide p {
  margin-top: 10px;
  font-size: 15px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.video-content .swiper-slide .play {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-content .swiper-slide .play:before {
  content: '';
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 10px 15px;
  border-color: transparent transparent transparent var(--white);
  margin-left: 5px;
}
</style> 