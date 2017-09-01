# praise手势点赞
- css3绘制手势
- ES6完成点赞+1功能的父类PraiseButton
- 子类Thumb实现点击点赞，点击10次后手指变灰。
- 用babel编译ES6代码，使用System.js加载对应编译文件
- 将编译文件挂载为jQuery的组件
- 实现Selenium-webdriver的e2e功能测试
- 实现Karma完成点赞+1组件的单元测试

## 目录结构
```shell
├── LICENSE
├── README.md
├── dist
├── e2e.js
├── geckodriver
├── index.html
├── karma.conf.js
├── package-lock.json
├── package.json
├── src
│   ├── css
│   │   └── main.css
│   └── js
│       ├── index.js
│       └── thumb.js
├── test
│   ├── test.js
│   └── test.spec.js
└── tree.js

5 directories, 14 files
```

## 下载
#### 下载当前项目
```shell
git clone https://github.com/pengxiaohua/praise
cd praise 
```

## 安装
#### 安装node_modules
```shell
npm install 
```

## 编译
#### babel编译es6代码
```shell
babel src/js/index.js -o dist/index-es5.js
babel src/js/thumb.js -o dist/thumb-es5.js
```
## 启动
#### 本人是在XAMPP环境下运行的
```shell
localhost:8080/praise/
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
