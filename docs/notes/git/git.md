---
lang: zh-CN
title: git
description: 页面的描述
---

使用 git add 命令将文件添加到暂存区。例如，如果你想添加所有未跟踪的文件，可以使用：

```bash
git add .
```

这个命令会添加当前目录下的所有文件。如果你只想添加某些文件，可以指定文件名，例如：git add 

```bash
README.md .gitignore
```

提交到本地

```bash
git commit -m "初始提交"
```

推送到主分支

```bash
git push -u origin main
```



