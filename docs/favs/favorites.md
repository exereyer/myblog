---
lang: zh-CN
title: Favorites
description: 页面的描述
---

:::: code-group
::: code-group-item bash
```bash

mkdir -p ~/minio/data

docker run \
   -p 7788:9000 \
   -p 8899:9001 \
   --name minio \
   -v ~/minio/data:/data \
   -e "MINIO_ROOT_USER=gang" \
   -e "MINIO_ROOT_PASSWORD=@Lzg412828" \
   quay.io/minio/minio server /data --console-address ":9001"
```
:::
::::

:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::


使用 git add 命令将文件添加到暂存区。例如，如果你想添加所有未跟踪的文件，可以使用：
bash
复制代码
git add .
这个命令会添加当前目录下的所有文件。如果你只想添加某些文件，可以指定文件名，例如：

bash
复制代码
git add README.md .gitignore
然后，进行提交：
bash
复制代码
git commit -m "初始提交"


git push -u origin main






