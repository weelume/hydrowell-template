# Hydrowell 水暖服务模板

响应式水暖品牌官网，包含首页、隐私政策和使用条款，中文默认、英文 `/en`。首页包含服务、优势折叠区、前后对比、评价、价格、FAQ、视频浮层和联系表单。

包含 9 页、18 条双语路由。独立服务页、知识列表/三篇文章与联系页为演示扩展；原站为首页、隐私政策和使用条款。素材已本地托管。实际验证和动效对照限制见 .tpl/docs/VERIFICATION.md。

Node 24.16.0、pnpm 9.15.4。`pnpm install --frozen-lockfile` 安装，`pnpm dev` 启动，默认地址由 `.env.example` 中 PORT 决定。终端 Ctrl+C 停止。`pnpm typecheck`、`pnpm lint`、`pnpm build` 检查。安装与构建必须在本地 Linux 文件系统完成。

品牌：`src/features/site-templates/catalog/hydrowell/config/brand.ts`；双语：`content/`；主题：`theme.css`；公共交互：`components/`；页面：`pages/`；独立路由：`src/app/`。表单只本地校验，不发送、不存储，不处理支付。视频在用户打开浮层后嵌入 YouTube，依赖其服务可达性。

原站图片授权尚未确认，不声明商业再分发许可。详见 `.tpl/docs/LICENSE.md`。
