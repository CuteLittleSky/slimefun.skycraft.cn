module.exports = {
  theme:"vuepress-theme-antdocs",
  title: "粘液科技Slimefun教程指南网",
  description: "粘液科技Slimefun教程指南网，提供给服主/玩家的粘液科技教程",
  base: "/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }],
    ["meta",{ rel: "keywords",content: "Minecraft,我的世界,粘液科技,Slimefun,MC,我的世界论坛,MCBBS,创世神,我的世界中文论坛,worldedit" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    docsDir: 'docs',
    docsBranch: 'main',
    smoothScroll: true,
    editLinks: true,
    editLinkText: '帮助我们完善粘液科技教程指南',
  },
};
