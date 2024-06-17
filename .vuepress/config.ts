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
      authorAvatar: "/me02.jpg",
      docsRepo: "https://github.com/exereyer/myblog",
      docsBranch: "main",
      docsDir: '/docs',
      lastUpdatedText: "",
      primaryColor: '#004e89',
      // series 为原 sidebar
      series: {
        "/docs/theme-reco/": [
          {
            text: "module one",
            children: ["home", "theme"],
          },
          {
            text: "module two",
            children: ["api", "plugin"],
          },
        ],
      },
      navbar: [
        { text: "Home", link: "/" },
        { text: "简历", link: "/docs/cv/" },
        { text: "cfg-36", link: "/tags/tag1/1/" },
        {
          text: "Docs",
          children: [
            { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
            { text: "vuepress-theme-reco", link: "/blogs/other/guide" },
          ],
        },
      ],
      // commentConfig: {
      //   type: 'valine',
      //   // options 与 1.x 的 valineConfig 配置一致
      //   options: {
      //     // appId: 'xxx',
      //     // appKey: 'xxx',
      //     // placeholder: '填写邮箱可以收到回复提醒哦！',
      //     // verify: true, // 验证码服务
      //     // notify: true,
      //     // recordIP: true,
      //     // hideComments: true // 隐藏评论
      //   },
      // },
    }),
    // debug: true,
  });
