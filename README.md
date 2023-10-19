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