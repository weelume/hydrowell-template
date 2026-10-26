# 修改指南

品牌改 config/brand.ts；双语文案同时修改 content 中 zh/en。修改颜色、字体、间距与圆角使用 theme.css 的主题令牌。替换图片应保持内容数据中的文件名映射并记录来源许可。动效修改在对应组件，尊重 prefers-reduced-motion。增删页面同步 routes.ts、独立路由与模板元数据。

修改后执行 typecheck 与 lint；交互、路由与发布改动执行 build，并实际验证受影响页面。表单不得未经明确授权改为真实发送。
