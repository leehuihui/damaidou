import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import { sidebarConfig } from "./sidebar";

export default hopeTheme({
    hostname: "https://blog.hellolaws.com",
    // 网站图标
    logo: "/image/logo.jpg",
    // Git 仓库和编辑链接
    repo: "https://github.com/leehuihui/damaidou",
    repoLabel: "GitHub",
    docsDir: "docs",
    // 以前的默认仓库分支名，方便提交 pr 和 issue
    docsBranch: "master",

    // 全屏按钮
    fullscreen: true,
    // 在深色模式，浅色模式和自动之间切换 (默认)
    darkmode: "switch",
    // 纯净模式，会禁用一些花哨的动画以及一些色彩
    // pure: true,

    // 阿里妈妈图标的前缀
    iconPrefix: "iconfont icon-",
    // Iconfont 精选图标 和 阿里妈妈的互斥
    // iconAssets: "iconfont",

    // 全局默认作者
    author: {
        name: "打麦兜",
        url: "/about-the-author/",
    },

    // 加密
    encrypt: {
        config: {
            // 这只会加密 config/page.html
            "/nice-article/itmind/ideapjazjczxjhmzcmyjjhcxgxz.html": ["1110", "5210"],
            "/nice-article/itmind/webstormjhmwebstormwdzsjhmxbxt.html": ["1110", "5210"],
            "/nice-article/itmind/sublimetextzcmpjazjcqckyxbxt.html": ["1110", "5210"],
        },
    },
    // 提示文字
    encryptLocales: {
        placeholder: "微信搜‘沉默王二’回复‘密码’获取口令",

        /**
         * Passwrod error hint
         */
        errorHint: "哈哈，别调戏人家啦，按规则来嘛",
    },

    // navbar
    navbar: navbar,

    // sidebar
    sidebar: sidebarConfig,

    // 页脚支持
    footer: '<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备18008429号-2</a>'
        +'<img src="/images/beian.png" height="15px" width="15px" />'
        +'<a target="_blank" href="http://www.beian.gov.cn">'
        // +'<span>皖ICP备18008429号-2</span>'
        +'</a>',
    displayFooter: true,

    // 文章信息，可以填入数组，数组的顺序是各条目显示的顺序
    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "Word","ReadingTime"],

    blog: {
        // 个人介绍页地址
        intro: "/about-author/",
        sidebarDisplay: "mobile",
        // 博主头像
        avatar: "/assets/icon/favicon.ico",
        // 圆角
        roundAvatar: true,
        // 座右铭
        description:"敢问码农路在何方？ 看大门？",
        medias: {
            Zhihu: "https://baidu.com",
        },
    },

    plugins: {
        // 启用博客自动摘要
        blog: {
            autoExcerpt: true,
        },
        // 该插件会监听页面滚动事件。当页面滚动至某个 标题锚点 后，如果存在对应的 标题链接 ，那么该插件会将路由 Hash 更改为该 标题锚点 。
        activeHeaderLinks: true,

        mdEnhance: {
            // 添加选项卡支持
            tabs: true,
            // 流程图
            mermaid: true,
            // 支持任务列表
            tasklist: true,

            // 启用图片懒加载
            imageLazyload: true,
            // 启用图片标记
            imageMark: true,
            // 启用图片大小
            imageSize: true,
            // 启用图片标题
            imageTitle: true,

            // 自定义对齐
            align: true,

            // 支持幻灯片
            presentation: true,

            // 链接检查
            linkCheck: "always",

            // 你的 Markdown 行为与 GitHub 保持一致
            gfm: true,
        },
    },
});
