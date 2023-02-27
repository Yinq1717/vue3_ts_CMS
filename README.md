项目架构：Vue3、TS、Pinia、Axios、Element Plus、Echarts，使用Vite进行搭建

项目要点
根据用户的权限动态注册路由，展示其对应的菜单目录以及CRUD按钮的展示
对Axios进行二次封装，拓展其功能，可以给不同的request实例与请求添加不同的请求响应拦截器
使用Element Plus的menu组件结合vue-router实现点击菜单切换路由
在Element Plus基础上封装了search、content、dialog三个通用组件，可接收配置信息结合hook快速开发页面

项目启动步骤
安装包（这里需要使用npm进行安装，如果用cnpm或者yarn会有热更新失效的问题） npm install
开发运行 npm run dev
生产打包 npm run build 
