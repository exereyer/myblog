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
            children: ["k8s", "cka"],
          },
          {
            text: "代理服务器",
            children: ["nginx", "tomcat"],
          },
          {
            text: "数据库",
            children: ["mysql", "oracle"],
          },
          {
            text: "容器化",
            children: ["docker", "containerd"],
          },
          {
            text: "Linux",
            children: ["basic", "advance"],
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
            { text: "多多反思", link: "/blogs/index/guide" },
          ],
          icon: 'Document' 
        },
      ],
    }),
  });
