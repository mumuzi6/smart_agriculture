# 智慧农业与农村云平台

智慧农业与农村云平台是一个集农业资讯、AI智能问答、农业社区和专业服务于一体的综合性农业服务平台。平台旨在通过数字技术赋能农业发展，促进农业现代化和乡村振兴。

## 功能特点

平台主要包含以下功能模块：

1. **拾农 —— 前沿农业资讯**
   - 新闻资讯轮播展示
   - 农业核心信息整合
   - 专题报告分类展示
   - 农产品价格指数监测

2. **伯旺 —— AI智能助手**
   - 智能农业问答系统
   - 专业农业知识库支持
   - 语音交互功能

3. **农乎 —— 云端农业社区**
   - 一键登录智能推送
   - 独创“知农豆”实现知识变现
   - 专业智库掌握前沿
   - 文件库智能管理
   - 创建自己的“农社区”

4. **智云 —— 一对一定制服务**
   - 个性化农业解决方案
   - 专业咨询服务
   - 农业生产指导

## 技术栈

- 前端框架：Vue.js 3
- 构建工具：Vite
- UI设计：自定义CSS
- 图表库：ECharts
- HTTP客户端：Axios
- 路由管理：Vue Router

## 项目结构

```
smart-agriculture/
├── public/               # 静态资源
├── src/
│   ├── assets/           # 项目资源文件
│   │   ├── images/       # 图片资源
│   │   └── main.css      # 全局样式
│   ├── components/       # 公共组件
│   ├── router/           # 路由配置
│   ├── views/            # 页面视图
│   ├── App.vue           # 根组件
│   └── main.js           # 入口文件
├── index.html            # HTML模板
├── vite.config.js        # Vite配置
├── package.json          # 项目依赖
└── README.md             # 项目说明
```

## 开发与运行

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

默认在 [http://localhost:5173](http://localhost:5173) 启动开发服务器

### 构建生产版本

```bash
npm run build
```

构建完成后的文件将放在 `dist` 目录中

### 预览生产版本

```bash
npm run preview
```

## 浏览器兼容性

- Chrome (最新版)
- Firefox (最新版)
- Edge (最新版)
- Safari (最新版)

## 贡献指南

1. Fork 项目仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开一个 Pull Request

## 许可证

[MIT](LICENSE) © Smart Agriculture Platform 