---
title: zerotier
date: 2024/06/19
---

# zerotier

 下载

```bash
curl -s https://install.zerotier.com | sudo bash
```

加入网络

```bash
sudo zerotier-cli join 48d6023c46f284a3
```

查看当前连接的网络，如果列表中出现网络号说明连接成功

```bash
sudo zerotier-cli listnetworks
```

手动启动zerotier和开机自启动服务：

```bash
sudo systemctl start zerotier-one.service
sudo systemctl enable zerotier-one.service
```

断开当前加入的网络：

```bash
sudo zerotier-cli leave 48d6023c46f284a3
```

