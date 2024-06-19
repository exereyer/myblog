# nginx



https://blog.csdn.net/qq_39420519/article/details/126322909



```bash
yum -y install gcc
yum -y install pcre-devel
yum -y install zlib
yum -y install zlib-devel
```

安装

下载解压后进入目录执行

./confi~~~

查看缺少的依赖项进行安装

```bash
Configuration summary
  + using system PCRE library
  + OpenSSL library is not used
  + using system zlib library

  nginx path prefix: "/usr/local/nginx"
  nginx binary file: "/usr/local/nginx/sbin/nginx"
  nginx modules path: "/usr/local/nginx/modules"
  nginx configuration prefix: "/usr/local/nginx/conf"
  nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
  nginx pid file: "/usr/local/nginx/logs/nginx.pid"
  nginx error log file: "/usr/local/nginx/logs/error.log"
  nginx http access log file: "/usr/local/nginx/logs/access.log"
  nginx http client request body temporary files: "client_body_temp"
  nginx http proxy temporary files: "proxy_temp"
  nginx http fastcgi temporary files: "fastcgi_temp"
  nginx http uwsgi temporary files: "uwsgi_temp"
  nginx http scgi temporary files: "scgi_temp"

```

```
make install
```

```
systemctl stop firewalld
systemctl disable firewalld
```

待配置开机自启动