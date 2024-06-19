import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'

export default defineUserConfig({
  title: "cd ~",
  description: "Just playing around",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "zhigang.liu",
    authorAvatar: "/me.jpg",
    docsRepo: "https://github.com/exereyer/myblog",
    docsBranch: "main",
    docsDir: '',
    lastUpdatedText: "",
    // 自动设置分类
    autoSetBlogCategories: true,
    catalogTitle: '此页内容',
    primaryColor: '#004e89',
    // series
    series: {
      "/docs/notes/": [
        {
          text: "k8s",
          children: ["k8s/k8s", "k8s/cka"],
        },
        {
          text: "Linux",
          children: ["linux/basic", "linux/advance"],
        },
        {
          text: "版本控制",
          children: ["git/git"],
        },
        {
          text: "自动化",
          children: ["cicd/jenkins"],
        },
        {
          text: "web服务器",
          children: ["webserver/nginx", "webserver/tomcat"],
        },
        {
          text: "容器化",
          children: ["container/docker", "container/containerd"],
        },
        {
          text: "数据库",
          children: ["db/mysql", "db/oracle"],
        },
        {
          text: "网络",
          children: ["net/zerotier",],
        },
      ],
    },
    navbar: [
      { text: "Home", link: "/" },
      { text: "简历", link: "/docs/cv/mycv" },
      { text: "收藏夹", link: "/docs/favs/favorites", icon: 'Star' },
      {
        text: "Docs",
        children: [
          { text: "学习笔记", link: "/docs/notes/GoOn" },
          { text: "多多反思", link: "/blogs/index/welcome" },
        ],
        icon: 'Document' 
      },
    ],
  }),
});