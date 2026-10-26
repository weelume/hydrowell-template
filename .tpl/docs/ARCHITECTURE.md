# 架构

React / Next.js / TypeScript，动效使用现有 framer-motion。业务源码在 src/features/site-templates/catalog/hydrowell。

config/brand.ts 集中品牌、联系方式、年份与视频地址。content/index.ts 和 policies.ts 维护双语；theme.css 管理主题令牌、三端布局与滚动条。components/ 包含 Shell、Motion、Compare、Modal、Reviews、ContactForm。pages/ 组合页面，src/app 负责独立路由。

host.tsx 声明可选品牌和外部入口注入；通用模板不依赖任何具体消费方。运行素材归 public/templates/hydrowell，展示截图归 .tpl/assets。
