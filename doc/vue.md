
# 安装vue并启动项目
* 前提是你已经安装了nodejs，否则你连npm都用不了（前提，如果你安装了nodejs,那你可能也安装了cnpm,阿里镜像，下载依赖包很快）
* 终端输入命令  cnpm install vue-cli -g (安装vue-cli)
* 终端输入命令  vue -V (查看版本，本人使用的是2.9.6版本)
* 创建项目 vue init <template-name> <project-name>

```
<template-name>：表示模板名称，vue-cli官方为我们提供了5种模板：
1 webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。
2 webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
3 browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
4 browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。
5 simple-一个最简单的单页应用模板。

<project-name>：表示项目名称，这个你可以根据自己的项目来起名字

例如在终端输入命令 vue init webpack my-vue

输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。

Project name :项目名称 ，如果不需要更改直接回车就可以了。注意：这里不能使用大写
Project description:项目描述，默认为A Vue.js project,直接回车，不用编写。
Author：作者，如果你有配置git的作者，他会读取。
Install vue-router? 是否安装vue的路由插件，我们这里需要安装，所以选择y
Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
setup unit tests with Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n

输入命令 cd my-vue 生成的文件目录有

|-- build       // 项目构建(webpack)相关代码
| |-- build.js      // 生产环境构建代码
| |-- check-version.js    // 检查node、npm等版本
| |-- logo.png      // logo图片
| |-- utils.js      // 构建工具相关
| |-- vue-loader.conf.js    // vue-loader配置
| |-- webpack.base.conf.js   // webpack基础配置
| |-- webpack.dev.conf.js    // webpack开发环境配置
| |-- webpack.prod.conf.js   // webpack生产环境配置
|-- config       // 项目开发环境配置
| |-- dev.env.js      // 开发环境配置
| |-- index.js      // 项目主要配置(包括监听端口，打包路径等)
| |-- prod.env.js      // 生产环境配置
|-- src        // 源码目录
| |-- assets       // 静态资源
| |-- components      // vue公共组件
| |-- router       // vue路由
| |-- App.vue      // 页面入口文件
| |-- main.js      // 程序入口文件，加载各种公共组件
|-- static       // 静态文件，比如一些图片，json数据等
| |-- data       // 群聊分析得到的数据用于数据可视化
|-- .babelrc       // ES6语法编译配置
|-- .editorconfig     // 定义代码格式
|-- .gitignore      // git上传需要忽略的文件格式
|-- .postcssrc.js     // post-loader的插件配置文件
|-- index.html      // 入口页面
|-- package.json      // 项目基本信息
|-- package-lock.json    // 锁定当前安装的包的依赖
|-- README.md      // 项目说明


开发环境启动程序命令  npm run dev

注意：
1 如果想要执行完npm run dev(或npm start) 后能自动打开网页，则需要进行如下设置config/index.js 找到autoOpenBrowser属性，将对应的值改为true就可以
2 如果端口8080被占用了则需要进行如下设置config/index.js 找到port属性将对应的值改为8088或者其他没有被占用的端口就可以


vue项目的启动流程

1 在执行npm run dev的时候，会去在当前文件夹下的项目中找package.json文件，
运行脚本 "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js" 来启动开发服务器。默认端口是8080

找到src的main.js文件，在该文件中new Vue的实例，要加载的模板内容App，App是src目录下的App.vue结尾的文件，在App.vue所对应的模板当中，有一个router-view

在src目录下有一个router文件夹，该文件夹有个index.js文件，该文件是配置路由词典，指定了路由地址是空，加载Hello组件




Vue项目 如何 部署在真正的服务器端

在工程所在的目录中，执行npm run build，
会生成一个dist的文件夹

就是我们可以直接部署（deploy）在服务器端的文件。


```
.

# 单文件组件概念
1 文件扩展名为 .vue
2 有3个标记：template(是html) script（组件的设置） style（样式的设置）



# 如何使用组件
 * 步骤1：创建.vue结尾的文件 创建组件MyHeader.vue
 * 步骤2：在main.js文件中，引入要使用的组件MyHeader

 ```
 import MyHeader from '@/components/MyHeader'
 Vue.component('my-header',MyHeader)
 ```

 * 步骤3：使用组件

 ```
 MyList.vue中使用
 <template>
 <my-header>	</my-header>
 </template>
 ```

# Vue项目 如何 部署在真正的服务器端
 * 在工程所在的目录中，执行npm run build，会生成一个dist的文件夹
 * 就是我们可以直接部署（deploy）在服务器端的文件。


