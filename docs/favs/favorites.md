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





