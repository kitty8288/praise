# praise手势点赞
- css3绘制手势
- ES6完成点赞+1功能的父类PraiseButton
- 子类Thumb实现点击点赞，点击10次后手指变灰。
- 用babel编译ES6代码，使用System.js加载对应编译文件
- 将编译文件挂载为jQuery的组件
- 实现Selenium-webdriver的e2e功能测试
- 实现Karma完成点赞+1组件的单元测试


## 安装
#### 安装node_modules
```shell
npm install 
```

## 编译
#### babel编译es6代码
```shell
npm run build
```
## 启动
#### 本人是在XAMPP环境下运行的
```shell
localhost:8080/src/index.html
```

## 功能测试
#### 使用的是 selenium-webdriver，在firefox上的测试
```shell
node e2e.js
```

## 单元测试
#### 使用karma进行简单的单元测试
```shell
karma start
```
