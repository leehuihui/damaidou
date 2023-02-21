import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { commentPlugin } from "vuepress-plugin-comment2";
import { pwaPlugin } from "vuepress-plugin-pwa2";
import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
    // 中文
    lang: "zh-CN",
    // 标题
    title: "野路子进阶",
    // 描述
    description: "野路子进阶 的描述！",
    // HTML 打包目录
    dest: "./dist",
    // 如果你正在使用 PWA 插件，我们推荐在你的 VuePress 配置文件中设置
    shouldPrefetch: false,

    head: [
        // meta
        ["meta", { name: "robots", content: "all" }],
        ["meta", { name: "author", content: "damaidou" }],
        [
            "meta",
            {
                "http-equiv": "Cache-Control",
                content: "no-cache, no-store, must-revalidate",
            },
        ],
        ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
        ["meta", { "http-equiv": "Expires", content: "0" }],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "Java, Java基础, 并发编程, JVM, 虚拟机, 数据库, MySQL, Spring, Redis, MyBatis, SpringBoot, IDEA, 求职面试, 面渣逆袭, 学习路线",
            },
        ],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "script",{},
            `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?43eec3725b948534d8bcab05c83368a3";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "//at.alicdn.com/t/font_3180624_7cy10l7jqqh.css",
            },
        ],
    ],

    plugins: [
        // Progressive Web app，即渐进式网络应用程序，
        // 允许网站通过支持该特性的浏览器将网站作为 App 安装在对应平台上。
        pwaPlugin({
            // favicon.ico一般用于作为缩略的网站标志,它显示位于浏览器的地址栏或者在标签上,用于显示网站的logo,
            favicon: "/assets/icon/favicon.ico",
            // 主题色
            themeColor: "#096dd9",
            apple: {
                icon: "/assets/icon/favicon.ico",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/favicon.ico",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/favicon.ico",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/favicon.ico",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/favicon.ico",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/favicon.ico",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
            },
        }),
        // 留言
        commentPlugin({
            provider: "Giscus",
            repo :"leehuihui/BlogGiscus",
            repoId:"R_kgDOJAHBsw",
            category:"Announcements",
            categoryId:"DIC_kwDOJAHBs84CUU_W",
        }),
        // 只能搜索
        docsearchPlugin({
            appId: "OH8MDN026V",
            apiKey: "5dc964704bd63ba542e1059f40df38fd",
            indexName: "blog_index",
            locales: {
                "/": {
                    placeholder: "搜索文档",
                    translations: {
                        button: {
                            buttonText: "搜索文档",
                            buttonAriaLabel: "搜索文档",
                        },
                        modal: {
                            searchBox: {
                                resetButtonTitle: "清除查询条件",
                                resetButtonAriaLabel: "清除查询条件",
                                cancelButtonText: "取消",
                                cancelButtonAriaLabel: "取消",
                            },
                            startScreen: {
                                recentSearchesTitle: "搜索历史",
                                noRecentSearchesText: "没有搜索历史",
                                saveRecentSearchButtonTitle: "保存至搜索历史",
                                removeRecentSearchButtonTitle: "从搜索历史中移除",
                                favoriteSearchesTitle: "收藏",
                                removeFavoriteSearchButtonTitle: "从收藏中移除",
                            },
                            errorScreen: {
                                titleText: "无法获取结果",
                                helpText: "你可能需要检查你的网络连接",
                            },
                            footer: {
                                selectText: "选择",
                                navigateText: "切换",
                                closeText: "关闭",
                                searchByText: "搜索提供者",
                            },
                            noResultsScreen: {
                                noResultsText: "无法找到相关结果",
                                suggestedQueryText: "你可以尝试查询",
                            },
                        },
                    },
                },
            },
        }),
    ],

    theme,
});
