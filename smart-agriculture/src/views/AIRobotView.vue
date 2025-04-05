<template>
  <div class="container">
    <div class="ai-robot-container">
      <div class="ai-header">
        <h1 class="ai-title">伯旺 —— 智能农业AI助手</h1>
        <p class="ai-desc">您的专业农业知识顾问，随时解答您关于农业的各类问题</p>
      </div>

      <div class="chat-container">
        <div class="chat-messages" ref="chatMessages">
          <div class="message bot">
            <div class="message-avatar">
              <img src="../assets/images/BoWang_AI.png" alt="Bo Wang AI">
            </div>
            <div class="message-content">
              <div class="message-text">
                您好！我是伯旺，您的智能农业助手。我可以回答您关于农作物种植、病虫害防治、农业政策、市场行情等问题。请问有什么我可以帮助您的吗？
              </div>
              <div class="message-time">{{ getCurrentTime() }}</div>
            </div>
          </div>

          <div v-for="(message, index) in messages" :key="index" :class="['message', message.type]">
            <div class="message-avatar" v-if="message.type === 'bot'">
              <img src="../assets/images/BoWang_AI.png" alt="Bo Wang AI">
            </div>
            <div class="message-content">
              <div class="message-text" v-html="message.text"></div>
              <div class="message-time">{{ message.time }}</div>
            </div>
            <div class="message-avatar" v-if="message.type === 'user'">
              <img src="../assets/images/user-avatar.png" alt="用户">
            </div>
          </div>

          <div class="typing-indicator" v-if="isTyping">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div class="chat-input">
          <textarea
            v-model="userInput"
            placeholder="请输入您的问题..."
            @keyup.enter="sendMessage"
            ref="userInput"
          ></textarea>
          <div class="input-actions">
            <button class="action-button voice">
              <i class="mic-icon"></i>
            </button>
            <button class="action-button send" @click="sendMessage" :disabled="!userInput.trim()">
              <i class="send-icon"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="ai-features">
        <h2 class="features-title">伯旺AI的专业能力</h2>
        <div class="features-grid">
          <div class="feature-item" v-for="(feature, index) in features" :key="index">
            <div class="feature-icon" :style="{ backgroundColor: feature.color }">
              <i :class="feature.icon"></i>
            </div>
            <h3 class="feature-name">{{ feature.name }}</h3>
            <p class="feature-text">{{ feature.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AIRobotView',
  data() {
    return {
      userInput: '',
      messages: [],
      isTyping: false,
      features: [
        {
          name: '农作物种植',
          text: '提供关于各类农作物的种植技术、田间管理、土壤改良等专业指导。',
          icon: 'icon-plant',
          color: '#4CAF50'
        },
        {
          name: '病虫害防控',
          text: '识别常见农作物病虫害，提供科学防治方案和用药建议。',
          icon: 'icon-bug',
          color: '#F44336'
        },
        {
          name: '农业政策',
          text: '了解最新农业政策法规、补贴信息和产业发展方向。',
          icon: 'icon-policy',
          color: '#2196F3'
        },
        {
          name: '市场行情',
          text: '提供农产品市场价格走势、供需分析和销售渠道建议。',
          icon: 'icon-market',
          color: '#FF9800'
        },
        {
          name: '智慧农业',
          text: '介绍现代农业技术、智能装备和数字化农业解决方案。',
          icon: 'icon-smart',
          color: '#9C27B0'
        },
        {
          name: '农产品加工',
          text: '分享农产品加工技术、质量安全控制和产品增值方法。',
          icon: 'icon-process',
          color: '#795548'
        }
      ],
      // 模拟问答库
      qaDatabase: {
        '水稻': '水稻是我国主要粮食作物之一，适宜在水田环境中生长。水稻种植一般分为育秧和本田种植两个阶段。育秧可采用旱育或水育，本田种植需要保持适宜的水层和营养管理。水稻的主要病害有稻瘟病、纹枯病等，虫害有稻飞虱、稻纵卷叶螟等。',
        '小麦': '小麦是世界上最重要的粮食作物之一，适合在温带和亚热带地区种植。小麦对水分要求不高，但需要疏松肥沃的土壤。小麦播种前需进行整地、施基肥，生长期需要适时浇水、追肥和防治病虫害。小麦的主要病害有锈病、白粉病等，虫害有麦蚜、红蜘蛛等。',
        '玉米': '玉米是重要的粮食和饲料作物，适应性强，可在多种气候条件下种植。玉米需要充足的阳光和水分，以及肥沃的土壤。种植时需注意合理密植、科学施肥和及时防治病虫害。玉米的主要病害有茎腐病、大斑病等，虫害有玉米螟、粘虫等。',
        '苹果': '苹果是温带水果的代表，种植需要适宜的光照、温度和水分条件。苹果树的种植包括选地、挖坑、定植、修剪、施肥、病虫害防治等环节。苹果主要病害有轮纹病、炭疽病等，虫害有蚜虫、红蜘蛛等。苹果的种植周期较长，需要3-5年才能进入丰产期。',
        '葡萄': '葡萄是世界上广泛种植的水果之一，适合在阳光充足、排水良好的地区种植。葡萄种植需注意品种选择、定植、搭架、修剪、肥水管理和病虫害防治。葡萄主要病害有霜霉病、白粉病等，虫害有葡萄蓟马、葡萄根瘤蚜等。',
        '肥料': '肥料是提供植物生长所需养分的物质，主要分为有机肥和无机肥。常用的有机肥有农家肥、堆肥、绿肥等；无机肥主要包括氮肥、磷肥、钾肥和复合肥等。施肥应遵循适时、适量、适地、适作物的原则，根据不同作物的需肥特点和生长阶段进行科学施用。',
        '农药': '农药是用于防治病、虫、草等有害生物的化学物质，主要分为杀虫剂、杀菌剂、除草剂等。使用农药应遵循"预防为主，综合防治"的原则，严格按照农药标签上的使用说明操作，注意安全间隔期，减少农药对环境和人体的危害。',
        '灌溉': '灌溉是人工向农田供水的措施，主要方式有沟灌、喷灌、滴灌等。不同灌溉方式适用于不同的作物和土壤条件。科学灌溉应掌握作物需水规律，合理确定灌溉时间、灌水量和灌水次数，避免水资源浪费和土壤盐碱化。',
        '土壤改良': '土壤改良是通过物理、化学或生物方法改善土壤理化性质和肥力的措施。常见的土壤改良方法包括深耕、翻耕、施用有机肥、石灰、石膏等改良剂，以及种植绿肥作物等。不同类型的问题土壤需采用不同的改良方法。',
        '设施农业': '设施农业是在一定设施内，通过调控农作物的生长环境进行集约化生产的农业方式，主要包括温室、大棚等保护地栽培。设施农业可以减轻自然条件的限制，提高土地利用率和作物产量，实现反季节生产和提质增效。',
        '有机农业': '有机农业是遵循自然规律和生态学原理，不使用化学合成的农药、化肥、生长调节剂、饲料添加剂等物质，强调生态平衡和可持续发展的农业生产方式。有机农业产品需要经过严格的认证才能进入市场。',
        '农业补贴': '农业补贴是国家为支持农业发展而给予农民的经济援助，主要包括粮食直补、良种补贴、农机购置补贴、农资综合补贴等。农民可通过当地农业部门了解具体的补贴政策和申请程序。',
        '精准农业': '精准农业是运用现代信息技术和装备，实现农业生产的精确管理和决策的现代农业模式。其主要技术包括GPS定位、GIS、遥感、变量施肥施药、自动导航等。精准农业能够提高资源利用效率，减少环境污染，提升农产品质量和产量。'
      }
    }
  },
  methods: {
    getCurrentTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    },
    sendMessage() {
      if (!this.userInput.trim()) return;
      
      // 添加用户消息
      this.messages.push({
        type: 'user',
        text: this.userInput,
        time: this.getCurrentTime()
      });
      
      const userQuestion = this.userInput.trim();
      this.userInput = '';
      
      // 显示机器人正在输入
      this.isTyping = true;
      
      // 模拟API请求延迟
      setTimeout(() => {
        this.isTyping = false;
        
        // 生成回答
        const answer = this.generateAnswer(userQuestion);
        
        // 添加机器人回复
        this.messages.push({
          type: 'bot',
          text: answer,
          time: this.getCurrentTime()
        });
        
        // 滚动到底部
        this.$nextTick(() => {
          this.scrollToBottom();
        });
      }, 1000);
      
      // 滚动到底部
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      const chatContainer = this.$refs.chatMessages;
      chatContainer.scrollTop = chatContainer.scrollHeight;
    },
    generateAnswer(question) {
      // 简单的问答匹配逻辑
      for (const keyword in this.qaDatabase) {
        if (question.includes(keyword)) {
          return this.qaDatabase[keyword];
        }
      }
      
      // 如果没有匹配的关键词，返回默认回复
      return '非常抱歉，我目前还无法回答这个问题。您可以尝试询问关于水稻、小麦、玉米、苹果、葡萄等常见农作物的种植技术，或者关于肥料、农药、灌溉、土壤改良等农业技术问题。';
    }
  },
  mounted() {
    // 设置输入框自动调整高度
    const textarea = this.$refs.userInput;
    textarea.addEventListener('input', function() {
      this.style.height = 'auto';
      this.style.height = (this.scrollHeight) + 'px';
    });
  }
}
</script>

<style scoped>
.ai-robot-container {
  padding: 30px 0;
}

.ai-header {
  text-align: center;
  margin-bottom: 30px;
}

.ai-title {
  font-size: 28px;
  margin-bottom: 15px;
  color: var(--gray-900);
}

.ai-desc {
  font-size: 16px;
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
}

.chat-container {
  max-width: 800px;
  margin: 0 auto 50px;
  background-color: var(--white);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.chat-messages {
  height: 500px;
  overflow-y: auto;
  padding: 20px;
  background-color: var(--gray-100);
}

.message {
  display: flex;
  margin-bottom: 20px;
  align-items: flex-start;
}

.message.bot {
  justify-content: flex-start;
}

.message.user {
  justify-content: flex-end;
}

.message-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
}

.message.bot .message-avatar {
  margin-right: 12px;
}

.message.user .message-avatar {
  margin-left: 12px;
}

.message-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.message-content {
  max-width: 70%;
}

.message-text {
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 14px;
  line-height: 1.5;
}

.message.bot .message-text {
  background-color: var(--white);
  border: 1px solid var(--gray-200);
  border-bottom-left-radius: 5px;
}

.message.user .message-text {
  background-color: var(--primary-color);
  color: var(--white);
  border-bottom-right-radius: 5px;
}

.message-time {
  font-size: 12px;
  color: var(--gray-500);
  margin-top: 5px;
  text-align: right;
}

.typing-indicator {
  display: inline-flex;
  align-items: center;
  background-color: var(--white);
  padding: 10px 15px;
  border-radius: 18px;
  margin-left: 52px;
  margin-bottom: 20px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background-color: var(--gray-400);
  border-radius: 50%;
  margin: 0 3px;
  animation: typing 1.5s infinite ease-in-out;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.6;
  }
  30% {
    transform: translateY(-6px);
    opacity: 1;
  }
}

.chat-input {
  padding: 15px;
  border-top: 1px solid var(--gray-200);
  background-color: var(--white);
}

textarea {
  width: 100%;
  min-height: 50px;
  max-height: 120px;
  padding: 12px 15px;
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  font-size: 14px;
  resize: none;
  outline: none;
  margin-bottom: 10px;
  font-family: inherit;
}

textarea:focus {
  border-color: var(--primary-color);
}

.input-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.action-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.3s;
}

.action-button.voice {
  background-color: var(--gray-100);
}

.action-button.send {
  background-color: var(--primary-color);
}

.action-button.send:disabled {
  background-color: var(--gray-300);
  cursor: not-allowed;
}

.mic-icon,
.send-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
}

.mic-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23616161"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm-1-9c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1V5zm6 6c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>');
}

.send-icon {
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>');
}

.ai-features {
  margin-top: 50px;
}

.features-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  position: relative;
}

.features-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.feature-item {
  background-color: var(--white);
  border-radius: 10px;
  padding: 25px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;
}

.feature-item:hover {
  transform: translateY(-5px);
}

.feature-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: var(--white);
  font-size: 20px;
}

.feature-name {
  font-size: 18px;
  margin-bottom: 10px;
  color: var(--gray-800);
}

.feature-text {
  font-size: 14px;
  color: var(--gray-600);
  line-height: 1.6;
}

/* 响应式设计 */
@media (max-width: 991px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 767px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .chat-messages {
    height: 400px;
  }
  
  .message-content {
    max-width: 85%;
  }
}
</style> 