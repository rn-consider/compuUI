# 使用nginx镜像开始部署
FROM nginx:1.15.8-alpine

# 将本地的dist文件夹挂载到容器的/usr/share/nginx/html/目录
COPY dist/ /usr/share/nginx/html/

# 将nginx的配置文件nginx.conf拷贝到容器的/etc/nginx/conf.d/目录下面
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 容器对外暴露的端口号
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
