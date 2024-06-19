# 使用官方的 Nginx 镜像作为基础镜像
FROM nginx:latest

# 将你的静态网页文件复制到 Nginx 默认的网页目录
COPY ./dist /usr/share/nginx/html

# 暴露 Nginx 默认的 HTTP 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
