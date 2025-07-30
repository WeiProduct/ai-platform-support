# AI平台官方网站

这是AI平台的官方支持网站，为用户提供产品信息、下载链接、使用指南和技术支持。

## 网站结构

```
ai-platform-support/
├── index.html          # 主页
├── support.html        # 用户支持页面
├── privacy.html        # 隐私政策页面
├── terms.html          # 使用条款页面
├── css/
│   └── styles.css      # 主要样式文件
├── js/
│   └── main.js         # 主要JavaScript文件
├── assets/
│   ├── app-icon.png    # 应用图标
│   ├── app-preview.png # 应用预览图
│   ├── screenshot-*.png # 应用截图
│   ├── app-store-badge.png # App Store徽章
│   ├── qr-code.png     # 下载二维码
│   └── favicon.ico     # 网站图标
└── README.md           # 项目说明
```

## 功能特性

### 📱 响应式设计
- 支持桌面、平板和移动设备
- 流畅的动画效果
- 现代化的UI设计

### 🎯 核心页面
- **主页**: 产品介绍、功能展示、下载链接
- **支持页面**: 常见问题、使用指南、联系方式
- **隐私政策**: 详细的隐私保护说明
- **使用条款**: 完整的服务条款

### ⚡ 交互功能
- 平滑滚动导航
- FAQ折叠展开
- 联系表单验证
- 消息通知系统
- 图片懒加载

### 🎨 视觉效果
- 渐变背景和按钮
- 卡片悬停效果
- 滚动动画
- 视差滚动

## 技术栈

- **HTML5**: 语义化标记
- **CSS3**: Flexbox、Grid、动画
- **JavaScript**: ES6+、DOM操作、事件处理
- **设计系统**: iOS风格的颜色和字体

## 部署说明

### GitHub Pages部署
1. 将代码推送到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 选择主分支作为源
4. 网站将在 `https://username.github.io/repo-name` 可用

### 自定义域名
1. 在根目录创建 `CNAME` 文件
2. 添加你的域名（如：`ai-platform.com`）
3. 在域名提供商处配置DNS指向GitHub Pages

## 本地开发

1. 克隆仓库
```bash
git clone https://github.com/WeiProduct/ai-platform-support.git
cd ai-platform-support
```

2. 使用本地服务器运行
```bash
# 使用Python
python -m http.server 8000

# 使用Node.js
npx http-server

# 使用PHP
php -S localhost:8000
```

3. 在浏览器中访问 `http://localhost:8000`

## 自定义配置

### 修改应用信息
编辑各HTML文件中的以下内容：
- 应用名称和描述
- 下载链接
- 联系邮箱
- 社交媒体链接

### 更新样式
修改 `css/styles.css` 中的CSS变量：
```css
:root {
    --primary-color: #007AFF;  /* 主要颜色 */
    --secondary-color: #34C759; /* 次要颜色 */
    /* ... 其他变量 */
}
```

### 添加新页面
1. 创建新的HTML文件
2. 使用现有页面作为模板
3. 在导航菜单中添加链接
4. 更新sitemap和robots.txt

## 资源文件

需要准备以下图片资源：

### 必需文件
- `app-icon.png` (512x512px) - 应用图标
- `app-preview.png` (600x400px) - 应用预览图
- `favicon.ico` (32x32px) - 网站图标

### 可选文件
- `screenshot-1.png` - `screenshot-4.png` - 应用截图
- `app-store-badge.png` - App Store下载徽章
- `qr-code.png` (200x200px) - 下载二维码
- `og-image.png` (1200x630px) - 社交媒体分享图

## SEO优化

### 已包含的SEO功能
- 语义化HTML结构
- Meta标签优化
- Open Graph标签
- 结构化数据
- 移动友好设计
- 快速加载速度

### 建议的额外优化
1. 添加Google Analytics
2. 配置Google Search Console
3. 创建XML网站地图
4. 优化图片大小和格式
5. 启用HTTPS

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- iOS Safari 12+
- Android Chrome 60+

## 贡献指南

欢迎提交问题和改进建议：

1. Fork本仓库
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 许可证

本项目采用MIT许可证 - 查看LICENSE文件了解详情。

## 联系我们

- 邮箱: support@ai-platform.com
- GitHub: [@WeiProduct](https://github.com/WeiProduct)

---

© 2024 AI平台. All rights reserved.