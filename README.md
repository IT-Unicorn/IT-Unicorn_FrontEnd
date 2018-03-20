# IT-Unicorn
来自一群对技术热爱的小伙伴组成的团队,用实践验证自身成长

前端技术栈: Vue+VueRoute+Vuex+elementUI+Axios 

---

## 使用方法
1. 打开终端,输入命令,将程序下载到本地目录
    ```
    $ git clone https://github.com/IT-Unicorn/IT-Unicorn_FrontEnd.git
    ```
2. 移动到IT-Unicorn_FrontEnd目录,
    ```
    $ cd IT-Unicorn_FrontEnd
    ```
3. 安装程序依赖项
    ```
    $ npm install
    ```
4. 启动程序
    ```
    $ npm run dev
    ```
5. 浏览器打开
>     http://localhost:8080

==PS:此工程为前端工程,需要跟后端共同使用==



## 1.声明

下面是程序的一些开发思路,如有不正确的地方还请大神们指点

主要是思路,具体实现还是看代码

## 2.构建

1. 首先需要先安装Node
    
    当下的前端开发怎能少了Node[(官网)](https://nodejs.org/zh-cn/),参照官网进行安装就行,相信作为程序猿的你一定能安装明白,跟安装QQ一样简单, 安装好Node之后,我们就可以使用它的[npm](https://www.npmjs.com/)包管理器了,这是目前世界上最大的开源库生态系统。

2. 安装Vue构建工具 Vue-cli (-g全局安装)
    ```
    $ npm install vue-cli -g
    ```
3. 初始化构建工程
    ```
    $ vue init webpack <ProjectName>
    ```
    安装时提示是否安装一些组件,包括vue-route,eslink,test,e2e等
    
    本项目只安装Vue-route, 对其他有兴趣的小伙伴可以自行研究一下
    
    生成基本目录结构
    ```
    -- build                     // 项目构建(webpack)相关代码
        |-- build.js             // 生产环境构建代码
        |-- check-version.js     // 检查node、npm等版本
        |-- utils.js             // 构建工具相关
        |-- vue-loader.conf.js   // vue自带的加载器
        |-- webpack.base.conf.js // webpack基础配置
        |-- webpack.dev.conf.js  // webpack开发环境配置
        |-- webpack.prod.conf.js // webpack生产环境配置
    -- config                    // 项目开发环境配置
        |-- dev.env.js           // 开发环境变量
        |-- index.js             // 项目一些配置变量
        |-- prod.env.js          // 生产环境变量
    -- src                       // 源码目录
        |-- assets               // 资源文件存放目录
        |-- components           // vue公共组件
        |-- router               // 选择安装vue-route的话会生成此文件,配置路由相关信息
        |-- App.vue              // 页面入口文件
        |-- main.js              // 程序入口文件，加载各种公共组件
    -- static                    // 静态文件，比如一些图片，json数据等
    -- .babelrc                  // ES6语法编译配置
    -- .editorconfig             // 定义代码格式
    -- .gitignore                // git上传需要忽略的文件格式
    -- README.md                 // 项目说明
    -- index.html                // 入口页面
    -- package.json              // 项目基本信息
    ```
    
4. 初始化结束之后,进入目录,安装工程依赖项
    ```
    $ npm install
    ```
5. 现在,我们就可以运行程序看看效果了
    ```
    $ npm run dev
    ```
    
    
## 3.开始编写自己的程序
### 3.1 基本结构
1.首先,我们找到入口文件src/main.js,千里之行始于足下,这里就是我们开始的地方,可能有人会说,index.html才是入口,但那只是形式上的,是html的入口, 但是我们现在正在使用Vue, 就从Vue的入口开始
```
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
作为入口,代码并不多, 简单定义了

+ 程序的第一页显示什么 <App/> 
+ 路由配置的引用    router

如果需要引用一些全局的东西,需要在这里引用,下面我们就来引用一下我们将要使用的Element-UI框架

```
$ npm install element-ui --save
```
安装完之后,在main.js中引用
    
```
import ElementUI from 'element-ui'
Vue.use(ElementUI);
```
在Element[官方](http://element-cn.eleme.io/#/zh-CN)推荐中,在引用的时候还需要引入
```
import 'element-ui/lib/theme-chalk/index.css';
```
但是不知道是我用的Vue版本问题,还是别的原因, 引入这个之后webpack打包的时候就会报错,在网上找一下,好像需要配置Vue自带的loader加载器,没弄明白,  但是发现了另外的可行办法,将这个引用放在App.vue中,就不在报错了,目前也没发现其他问题,接下来我们就开始介绍App.vue

2.App.vue, 通过main.js中的第一个页面指向,我们来看看这个页面
```
<template>
  <div id="app">
        <router-view/>
  </div>
</template>

<script>
    export default {
      name: 'App'
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
通过这个页面,可以看出, Vue的每个组件主要分成三部分
+ template   页面元素
+ script     页面代码
+ style      页面样式

我们先把上面Element的问题解决, 在App.vue的style中加入代码
```
@import 'element-ui/lib/theme-chalk/index.css';
```
这样引用之后,就不在报错了

然后我们来看看template,这是从开始到现在,第一个涉及页面显示的地方, <router-view/> 代表着路由配置中,配置的组件显示的位置, 也就可以理解为,遇到这个标签的地方,说明这个地方是一个可动态的区域,根据路由的配置,显示不同的东西

我们看看src/router/index.js中是如何配置的
```
{
   path: '/',
   name: 'HelloWorld',
   component: HelloWorld
},
```
当我们在输入网址首页的时候,就会显示HelloWorld组件中的内容

我们可以更改成我们的欢迎页面


现在我们要做一个上边是固定的头部,然后下边是可变化的区域,怎么做?
```
<template>
    <div>
        <el-container>
          <el-header>
            这里写头部样式及代码
          </el-header>
          <el-main>
            <router-view/>   //这里是路由变化区域
          </el-main>
        </el-container>     
    <div>
</template>
```

这里使用的 <el-container>,<el-header> 和<el-main> 是Element-UI框架中的布局标签

### 3.2 Header 的开发思路
在头部标签中,可以设计自己的样式了, 可以编写网站LOGO, 导航栏,登入信息等等,这里我们可以自定义一个组件,放在里面

在src/components中新加header文件夹,新建header.vue文件

在App.vue中的<script>标签中引用
```
import Header from '@/components/header/header'

...
//构造器中引入组件
components: {
    'u-header':Header
  }
```
然后<el-header>中使用自定义组件
```
<el-header>
   <u-header></u-header>
</el-header>
```
#### 3.2.1 Header的布局

大体分为三部分, LOGO,NAV菜单,LOGIN登陆注册按钮

在大屏幕的时候,左边LOGO,中间菜单,右边登陆注册按钮

在小屏幕的时候,左边是一个图标按钮下拉菜单, 中间是LOGO, 右边是登陆注册按钮

这个效果主要是用Element-UI的响应式布局实现的

#### 3.2.2 Header中的Nav

使用<el-menu>定义导航栏,<el-menu-item>菜单项,<el-submenu>带下拉选项的菜单
```
<el-menu router>
    <el-menu-item index="/">首页</el-menu-item>
    <el-submenu index="2">
        <template slot="title">项目</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
        </el-submenu>
    </el-submenu>
    <el-menu-item index="/about" >关于我们</el-menu-item>
</el-menu>
```

当<el-menu>中定义router属性时, <el-menu-item>中的index属性直接填写path, 可实现路由跳转

菜单需要定义两套, 一套是大屏幕横向显示的, 一套是按钮下拉菜单

#### 3.2.3 Header中的login

在Header的最右侧是登陆和注册两个按钮, 点击分别跳转到响应的页面

如果已经登陆,最右侧则显示登陆名,并且有下来菜单,可以登出和查看个人信息

这里要用到Vuex的全局状态,  记录是否为登陆状态

在用v-if  v-else 来控制标签是否显示



## 遇到一些问题的解决方法(问题解决了,但不一定是最合理的,欢迎提供意见)

### Vue-cil构建出来的工程引用CSS样式报错
以引用Element-UI为例,在Element[官方](http://element-cn.eleme.io/#/zh-CN)推荐中,在引用的时候还需要引入
```
import 'element-ui/lib/theme-chalk/index.css';
```
但是不知道是我用的Vue版本问题,还是别的原因, 引入这个之后webpack打包的时候就会报错,在网上找一下,好像需要配置CSS-loader和style-loader,没去研究,因为我发现了另外的可行办法,将这个引用放在App.vue中的style标签中,就不在报错了.不知道这样会不会有其他问题, 待观察
```
<style >
    @import "element-ui/lib/theme-chalk/index.css";
</style>
```

### Vue前端跨域请求node后端的问题

安装完Axios之后,向后端发起了一个请求,发现控制台提示错误
```
Failed to load http://localhost:3000/login: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access.
```
在网上找了一些资料, 有说用CORS的, 有说用 Proxy 代理的, 有说用Nginx的,  最后我选择了一个最简单的方法,在node的app.js中加入
```
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");  //这个地方填写允许访问的地址,  * 表示任何地址
  if (req.method == 'OPTIONS') {
      /*让options请求快速返回*/
      res.send(200);
  }
  else {
    /*防止异步造成多次响应，出现错误*/
    var _send = res.send;
        var sent = false;
        res.send = function (data) {
            if (sent) return;
            _send.bind(res)(data);
            sent = true;
        };
      next();
  }
});
```

加完之后, 在发起请求就不报错了,   

注意,  这个只是在开发期间能够方便前后台通信, 正式环境慎用, 应该有更好的方法, 等用到的时候我在维护上
