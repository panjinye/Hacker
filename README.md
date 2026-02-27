# Hacker 主题

Hacker是一款选择回归本源，专注于写作并且易于阅读的的简洁博客主题。它具有完全响应式设计，支持视网膜显示，且易于自定义。每个元素都能响应，为你的读者在浏览博客的全过程中提供最佳的用户体验。
一开始是moyo为Wordpress所创作的一个主题，后由DaraW移植到Hexo。
本主题由作者Ficor从Wordpress移植而来，基于Astro构建，响应式设计，静态站点生成，支持Markdown格式的博客文章和页面。

## 主题特点

### 核心功能
- **响应式设计**：适配各种屏幕尺寸，从移动设备到桌面端
- **静态站点生成**：使用 Astro 构建，加载速度快，SEO 友好
- **内容管理**：支持 Markdown 格式的博客文章和页面
- **分类与标签**：自动生成分类和标签页面
- **归档系统**：按年份和月份组织文章
- **友链页面**：展示友情链接，支持头像和描述
- **关于页面**：展示站点、主题和博主信息
- **RSS 订阅**：提供 RSS 订阅链接
- **评论系统**：集成 Twikoo 评论系统

### 交互特性
- **日夜模式切换**：支持亮色和暗色主题，自动保存用户偏好
- **客户端分页**：实现无刷新分页导航
- **文章摘要**：自动生成文章摘要，优化列表页展示
- **社交网络图标**：集成 Font Awesome 图标，展示社交链接

### 设计特点
- **简洁现代**：干净的布局，注重内容可读性
- **自定义配色**：支持亮色和暗色主题的自定义配色
- **响应式布局**：在各种设备上都能提供良好的用户体验
- **平滑过渡**：添加适当的动画和过渡效果

## 快速开始

### 安装

1. **克隆仓库**
   ```bash
   git clone https://github.com/panjinye/hacker-astro.git
   cd hacker-astro
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   pnpm install
   ```

3. **开发服务器**
   ```bash
   npm run dev
   # 或
   pnpm run dev
   ```

4. **构建生产版本**
   ```bash
   npm run build
   # 或
   pnpm run build
   ```

## 配置

### 站点配置

修改 `src/config/site.ts` 文件来配置站点信息：

```typescript
// 站点配置文件
export const siteConfig = {
  title: "荒野菲克",
  description: "在路上的思绪与脚印",
  author: "Ficor",
  email: "i@ficor.cc",
  url: "https://ficor.net",
  language: "zh-CN",
  timezone: "Asia/Shanghai",
  dateFormat: "yyyy-MM-dd",
  buildDate: "2008-10-08",
  twikoo: {
    envId: "https://twikoo.yourdomain.com",
    lang: "zh-CN"
  },
  social: {
    github: "https://github.com/panjinye/Hacker",
    twitter: "https://twitter.com/",
    qq: "https://wpa.qq.com/msgrd?v=3&uin=123456&site=qq&menu=yes",
    mastodon: "https://mastodon.social/",
    email: "mailto:i@ficor.cc",
    rss: "https://ficor.net/feed"
  },
  navigation: [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Category", url: "/category" },
    { name: "Links", url: "/links" }
  ]
};
```

### 友链配置

修改 `src/config/links.ts` 文件来添加友情链接：

```typescript
// 友链配置文件
export const linksConfig = [
  {
    title: "荒野菲克",
    url: "https://ficor.net",
    feed: "https://ficor.net/feed",
    image: "https://img.ficor.net/uploads/2026/01/6960704808a61.webp",
    description: "在路上的思绪与脚印",
    type: "lifestyle"
  },
  // 更多友链...
];
```

## 内容管理

### 博客文章

在 `src/content/blog/` 目录下创建 Markdown 文件来添加博客文章：

```markdown
---
title: 文章标题
date: 2026-02-27
tags: [标签1, 标签2]
series: 分类
---

文章内容...
```

### 页面

在 `src/content/pages/` 目录下创建 Markdown 文件来添加页面内容，如 `about.md`：

```markdown
---
title: 关于本站
---

页面内容...
```

## 自定义

### 样式自定义

修改 `public/style.css` 文件来自定义主题样式，特别是日夜模式的配色：

- **亮色模式**：默认样式
- **暗色模式**：`body.dark` 相关样式

### 组件自定义

修改 `src/components/` 目录下的组件文件来自定义主题组件：

- `Header.astro` - 网站头部
- `Footer.astro` - 网站底部
- `Twikoo.astro` - 评论组件

### 页面自定义

修改 `src/pages/` 目录下的页面文件来自定义页面结构：

- `index.astro` - 首页
- `about.astro` - 关于页面
- `category.astro` - 分类页面
- `links.astro` - 友链页面
- `archive/[year]/[month].astro` - 归档页面
- `post/[slug].astro` - 文章详情页
- `tag/[slug].astro` - 标签页面

## 技术栈

- **前端框架**：Astro
- **样式**：原生 CSS
- **图标**：Font Awesome
- **评论系统**：Twikoo
- **构建工具**：Vite

## 浏览器支持

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)

## 许可证

MIT License

## 更新日志

### v1.0.0
- 初始版本
- 实现基本博客功能
- 添加响应式设计
- 集成日夜模式切换
- 支持分类、标签和归档
- 添加友链页面
- 集成评论系统

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个主题！

## 致谢

- [Astro](https://astro.build/) - 现代化静态站点生成器
- [Font Awesome](https://fontawesome.com/) - 图标库
- [Twikoo](https://twikoo.js.org/) - 评论系统

---

**Hacker 主题** - 一个专注于内容的现代化博客主题，为你的想法提供完美的展示平台。