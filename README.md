# wumeng-voc-vue3 乌蒙问卷平台

- 乌蒙问卷管理平台，包含前端和后端、前台和后台。
- 后端有两种模式：mock 模拟数据、基于 Java Spring Boot 真实数据。mock 模拟数据服务器包含在本项目中，Java真实后台在仓库 `wumeng-voc-springboot` 中。
- 前台包括官网、C端用户提交问卷；后台包括问卷管理、可视化编辑器、数据统计。
- 本项目技术栈为 vue3 、nuxt、微前端，涉及的知识点较多，非常适合初中级人员学习。

## 前端技术栈

- pnpm + monorepo
- TypeScript
- vue3 + Element Plus + Pinia
- nuxt4 服务端渲染
- UnoCSS
- Vue3 独立组件库打包构建
- wujie 微前端
- 响应式布局

## 后端技术栈

- Java 17
- Spring Boot 3.5.7
- Spring Security 6.5.6
- MySQL 8
- Liquibase 数据库版本管理
- MyBatis Plus / Generator

## 工程模块

工程使用 pnpm + monorepo 方式实现多包管理，涉及到的模块（即子包，后文均称为模块或服务）包括：

### voc-portal

- 单独的应用
- 开发运行端口：8080
- 功能点：
  - 官网，介绍整个平台的功能、使用技术，侧重于动画交互、样式效果；
  - 用户注册、登录、token和用户信息存储
  - 问卷管理：创建、删除、复制、收藏/取消收藏
  - 微前端基座：加载编辑器子应用
- 技术栈：
  - Nuxt4 + Element Plus + Pinia + UnoCSS + Wujie

### voc-editor
- 单独的应用
- 开发运行端口：8081
- 功能点：
  - 问卷编辑：可视化方式编辑问卷（no-code）
  - 发布问卷
  - 预览问卷
- 技术栈：
  - Vue3 + Element Plus + Pinia + UnoCSS

### voc-components
- 组件库
- 开发运行端口：5173
- 功能点：
  - 库模式打包，导出 JS、CSS、类型声明文件
  - 为 `voc-editor` 和 `voc-client` 提供组件库
  - 提供默认渲染表单组件
- 技术栈：
  - Vue3 + Element Plus + UnoCSS
  
### voc-client
- 单独的应用
- 开发运行端口：9090
- 功能点：
  - C端用户使用，提交问卷
  - 查询并渲染问卷
- 技术栈：
  - Nuxt4 服务端渲染


### voc-mock
- 单独的应用
- 开发运行端口：8000
- 功能点：
  - 为 voc-portal、 voc-editor、voc-client 提供接口
  - 使用 MockJS 提供模拟数据
- 技术栈：
  - koa、koa-router、MockJS

## 本地运行

安装依赖：
```shell
pnpm i
```

打包组件库：
```shell
pnpm run components:build
```

组件库打包后，再次执行安装依赖命令：
```shell
pnpm i
```

依次启动 mock、editor、portal、client
```shell
pnpm run mock:dev
pnpm run editor:dev
pnpm run portal:dev
pnpm run client:dev
```

在浏览器中访问 portal：
```shell
http://localhost:8080
```



nuxt:
- 多级动态参数路由
- 定义插件集成 wujie-vue3
- 子应用预加载

