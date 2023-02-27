# vue3_ts_cms

## 项目架构

Vue3、TS、Pinia、Axios、Element Plus、Echarts，使用 Vite 进行搭建

## 项目要点

- 根据用户的权限动态注册路由，展示其对应的菜单目录以及 CRUD 按钮的展示
- 对 Axios 进行二次封装，拓展其功能，可以给不同的 request 实例与请求添加不同的请求响应拦截器
- 使用 Element Plus 的 menu 组件结合 vue-router 实现点击菜单切换路由
- 在 Element Plus 基础上封装了 search、content、dialog 三个通用组件，可接收配置信息结合 hook 快速开发页面

项目启动步骤 安装包（这里需要使用 npm 进行安装，如果用 cnpm 或者 yarn 会有热更新失效的问题） npm install 开发运行 npm run dev 生产打包 npm run build

## 项目启动步骤

```sh
npm install
```

### 开发运行

```sh
npm run dev
```

### 打包

```sh
npm run build
```
