# 快速开始

首先修改nginx配置文件（nginx.conf）：

```
server {
    listen       80;
    server_name  localhost:8010;

    #charset koi8-r;
    access_log  /var/log/nginx/host.access.log  main;
    error_log  /var/log/nginx/error.log  error;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }

    location /api {
        rewrite ^/api(/.*)$ $1 break;
        proxy_pass http://0.0.0.0:8010; # 把这里的0.0.0.0换成你的服务器ip
    }


    #error_page  404              /404.html;

    # redirect server error pages to the static page /50x.html
    #
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

1. ```
   git clone https://github.com/rn-consider/compuUI.git
   ```
2. ```
   cd compuUI
   ```
3. ```
   docker-compose up -d
   ```

```
├── .github # github workflows 相关
├── .husky # husky 配置
├── .vscode # vscode 配置
├── mock # 自定义 mock 数据及配置
├── public # 静态资源
├── src # 项目代码
│   ├── api # api接口管理
│   ├── assets # 静态资源
│   ├── components # 公用组件
│   ├── hooks # 常用hooks
│   ├── layout # 布局组件
│   ├── locales # 语言文件
│   ├── plugins # 外部插件
│   ├── router # 路由配置
│   ├── store # 状态管理
│   ├── styles # 全局样式
│   ├── utils # 全局工具类
│   ├── views # 路由页面
│   ├── App.vue # 入口vue文件
│   ├── main.ts # 主入口文件
│   └── permission.ts # 路由拦截
├── types # 全局类型
├── .env.base # 本地开发环境 环境变量配置
├── .env.dev # 打包到开发环境 环境变量配置
├── .env.gitee # 针对 gitee 的环境变量 可忽略
├── .env.pro # 打包到生产环境 环境变量配置
├── .env.test # 打包到测试环境 环境变量配置
├── .eslintignore # eslint 跳过检测配置
├── .eslintrc.js # eslint 配置
├── .gitignore # git 跳过配置
├── .prettierignore # prettier 跳过检测配置
├── .stylelintignore # stylelint 跳过检测配置
├── .versionrc 自动生成版本号及更新记录配置
├── CHANGELOG.md # 更新记录
├── commitlint.config.js # git commit 提交规范配置
├── index.html # 入口页面
├── package.json
├── .postcssrc.js # postcss 配置
├── prettier.config.js # prettier 配置
├── README.md # 英文 README
├── README.zh-CN.md # 中文 README
├── stylelint.config.js # stylelint 配置
├── tsconfig.json # typescript 配置
├── vite.config.ts # vite 配置
└── windi.config.ts # windicss 配置
```
