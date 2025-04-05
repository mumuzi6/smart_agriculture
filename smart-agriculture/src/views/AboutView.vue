<template>
  <div class="container">
    <div class="about-container">
      <div class="about-header">
        <h1 class="page-title">公司介绍</h1>
        <p class="page-desc">智慧农业与农村云平台 —— 用科技创新引领农业现代化</p>
      </div>

      <div class="company-intro">
        <div class="intro-content">
          <h2 class="section-title">公司简介</h2>
          <p>
            智慧农业与农村云平台是一家专注于农业信息化和数字化服务的高科技企业，成立于2020年，总部位于北京。我们致力于通过先进的信息技术和数据分析能力，为农业生产、管理和销售各环节提供智能化解决方案，助力农业产业升级和乡村振兴。
          </p>
          <p>
            公司拥有一支由农业专家、信息技术工程师、数据分析师和营销专家组成的专业团队，不断探索和实践"互联网+农业"的创新模式，为用户提供全方位的农业信息服务和技术支持。
          </p>
        </div>
        <div class="intro-image">
          <img src="../assets/images/company.jpg" alt="公司图片">
        </div>
      </div>

      <div class="vision-mission">
        <div class="vision">
          <h2 class="section-title">我们的愿景</h2>
          <p>成为中国领先的农业数字化服务提供商，用科技创新助力乡村振兴和农业现代化，打造可持续发展的智慧农业生态系统。</p>
        </div>
        <div class="mission">
          <h2 class="section-title">我们的使命</h2>
          <p>通过先进技术连接农业生产和市场需求，提高农业生产效率和农产品质量，增强农民收入，促进农业产业可持续发展。</p>
        </div>
      </div>

      <div class="core-values">
        <h2 class="section-title center">核心价值观</h2>
        <div class="values-grid">
          <div class="value-item" v-for="(value, index) in coreValues" :key="index">
            <div class="value-icon" :style="{ backgroundColor: value.color }">
              <i :class="value.icon"></i>
            </div>
            <h3 class="value-title">{{ value.title }}</h3>
            <p class="value-desc">{{ value.description }}</p>
          </div>
        </div>
      </div>

      <div class="team-section">
        <h2 class="section-title center">核心团队</h2>
        <div class="team-grid">
          <div class="team-member" v-for="(member, index) in coreTeam" :key="index">
            <div class="member-avatar">
              <img :src="member.avatar" :alt="member.name">
            </div>
            <h3 class="member-name">{{ member.name }}</h3>
            <p class="member-title">{{ member.title }}</p>
            <p class="member-desc">{{ member.description }}</p>
          </div>
        </div>
      </div>

      <div class="partners-section">
        <h2 class="section-title center">合作伙伴</h2>
        <div class="partners-grid">
          <div class="partner-item" v-for="(partner, index) in partners" :key="index">
            <div class="partner-logo">
              <img :src="partner.logo" :alt="partner.name">
            </div>
            <h3 class="partner-name">{{ partner.name }}</h3>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2 class="section-title center">联系我们</h2>
        <div class="contact-info">
          <div class="contact-item">
            <div class="contact-icon">
              <i class="icon-location"></i>
            </div>
            <div class="contact-detail">
              <h3>公司地址</h3>
              <p>北京市海淀区中关村南大街5号</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="icon-phone"></i>
            </div>
            <div class="contact-detail">
              <h3>联系电话</h3>
              <p>010-12345678</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="icon-email"></i>
            </div>
            <div class="contact-detail">
              <h3>电子邮箱</h3>
              <p>info@smartagriculture.com</p>
            </div>
          </div>
          <div class="contact-item">
            <div class="contact-icon">
              <i class="icon-wechat"></i>
            </div>
            <div class="contact-detail">
              <h3>官方微信</h3>
              <p>SmartAgTech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      coreValues: [
        {
          title: '创新驱动',
          description: '不断探索和应用新技术、新理念，推动农业生产和管理方式的创新。',
          icon: 'icon-innovation',
          color: '#4CAF50'
        },
        {
          title: '专业专注',
          description: '专注于农业领域，提供专业化、精细化的服务，持续提升技术水平和服务质量。',
          icon: 'icon-professional',
          color: '#2196F3'
        },
        {
          title: '协作共赢',
          description: '与农民、企业、政府和科研机构紧密合作，构建开放共赢的农业生态系统。',
          icon: 'icon-collaboration',
          color: '#FF9800'
        },
        {
          title: '责任担当',
          description: '秉持社会责任感，推动农业可持续发展，为乡村振兴和农民增收贡献力量。',
          icon: 'icon-responsibility',
          color: '#9C27B0'
        }
      ],
      coreTeam: [
        {
          name: '张伟',
          title: '创始人 & CEO',
          description: '原农业部信息中心技术总监，20年农业信息化领域经验，带领团队打造多个国家级农业信息平台。',
          avatar: '/src/assets/images/team1.jpg'
        },
        {
          name: '李梅',
          title: '首席技术官',
          description: '前阿里云资深技术专家，物联网和大数据领域专家，拥有多项智慧农业相关技术专利。',
          avatar: '/src/assets/images/team2.jpg'
        },
        {
          name: '王强',
          title: '农业科学顾问',
          description: '中国农业大学教授，作物学博士，长期从事数字农业和精准农业研究，多个国家科技项目负责人。',
          avatar: '/src/assets/images/team3.jpg'
        },
        {
          name: '赵芳',
          title: '市场运营总监',
          description: '资深农业市场专家，曾任农业电商平台副总裁，对农产品市场和供应链有丰富实战经验。',
          avatar: '/src/assets/images/team4.jpg'
        }
      ],
      partners: [
        { name: '中国农业科学院', logo: '/src/assets/images/partner1.jpg' },
        { name: '国家农业信息中心', logo: '/src/assets/images/partner2.jpg' },
        { name: '北京农业大学', logo: '/src/assets/images/partner3.jpg' },
        { name: '智慧农业产业联盟', logo: '/src/assets/images/partner4.jpg' },
        { name: '云计算技术服务商', logo: '/src/assets/images/partner5.jpg' },
        { name: '农业物联网技术公司', logo: '/src/assets/images/partner6.jpg' }
      ]
    }
  }
}
</script>

<style scoped>
.about-container {
  padding: 30px 0 50px;
}

.about-header {
  text-align: center;
  margin-bottom: 50px;
}

.page-title {
  font-size: 32px;
  margin-bottom: 15px;
  color: var(--gray-900);
}

.page-desc {
  font-size: 18px;
  color: var(--gray-600);
}

.company-intro {
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  align-items: center;
}

.intro-content {
  flex: 1;
}

.intro-image {
  flex: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.intro-image img {
  width: 100%;
  height: auto;
  display: block;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
  color: var(--gray-900);
  position: relative;
}

.section-title.center {
  text-align: center;
  margin-bottom: 40px;
}

.section-title.center::after {
  content: '';
  width: 60px;
  height: 3px;
  background-color: var(--primary-color);
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.intro-content p {
  margin-bottom: 20px;
  line-height: 1.6;
  color: var(--gray-700);
}

.vision-mission {
  display: flex;
  gap: 30px;
  margin-bottom: 60px;
}

.vision, .mission {
  flex: 1;
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.vision-mission p {
  line-height: 1.6;
  color: var(--gray-700);
}

.core-values {
  margin-bottom: 60px;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.value-item {
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
}

.value-item:hover {
  transform: translateY(-10px);
}

.value-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 24px;
}

.value-title {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--gray-800);
}

.value-desc {
  color: var(--gray-600);
  font-size: 14px;
  line-height: 1.6;
}

.team-section {
  margin-bottom: 60px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.team-member {
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.team-member:hover {
  transform: translateY(-10px);
}

.member-avatar {
  height: 250px;
  overflow: hidden;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-name {
  font-size: 18px;
  margin: 15px 0 5px;
  padding: 0 20px;
  color: var(--gray-800);
}

.member-title {
  font-size: 14px;
  color: var(--primary-color);
  margin-bottom: 10px;
  padding: 0 20px;
  font-weight: bold;
}

.member-desc {
  font-size: 14px;
  color: var(--gray-600);
  margin-bottom: 20px;
  padding: 0 20px;
  line-height: 1.5;
}

.partners-section {
  margin-bottom: 60px;
}

.partners-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
}

.partner-item {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s;
}

.partner-item:hover {
  transform: scale(1.05);
}

.partner-logo {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.partner-logo img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.partner-name {
  font-size: 14px;
  color: var(--gray-700);
  margin: 0;
}

.contact-section {
  margin-bottom: 30px;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.contact-item {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
}

.contact-icon {
  width: 50px;
  height: 50px;
  background-color: var(--primary-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  color: var(--primary-dark);
  font-size: 20px;
  flex-shrink: 0;
}

.contact-detail h3 {
  font-size: 16px;
  margin: 0 0 5px;
  color: var(--gray-800);
}

.contact-detail p {
  font-size: 14px;
  color: var(--gray-600);
  margin: 0;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .company-intro {
    flex-direction: column;
  }
  
  .vision-mission {
    flex-direction: column;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .partners-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .contact-info {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .partners-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .contact-info {
    grid-template-columns: 1fr;
  }
  
  .page-title {
    font-size: 26px;
  }
  
  .page-desc {
    font-size: 16px;
  }
}
</style> 