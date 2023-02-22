import { sidebar } from "vuepress-theme-hope";
export const sidebarConfig = sidebar({
    // 必须放在最后面
    "/": [
        {
            text: "一、首页",
            link: "home",
        },
        {
            text: "二、面面基础",
            collapsible: true,
            children: [
                {
                    prefix: "overview/",
                    text: "2.1 Java概述及环境配置",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix: "basic-grammar/",
                    text: "2.2 Java语法基础",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix: "basic-grammar/",
                    text: "2.3 数组&字符串",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix: "basic-grammar/",
                    text: "2.4 面向对象编程",
                    collapsible: true,
                    children: [
                        "home",

                    ],
                },
                {
                    prefix: "basic-grammar/",
                    text: "2.5 集合框架（容器）",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.6 IO",
                    collapsible: true,
                    prefix:"io/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.7 异常处理",
                    collapsible: true,
                    prefix:"exception/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.8 常用工具类",
                    collapsible: true,
                    prefix:"common-tool/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.9 Java新特性",
                    prefix: "java8/",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.10 Java重要概念",
                    prefix:"basic-extra-meal/",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.11 网络相关",
                    collapsible: true,
                    prefix: "socket/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.12 AIO BIO NIO ",
                    collapsible: true,
                    prefix: "nio/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.13 并发编程",
                    collapsible: true,
                    prefix: "thread/",
                    children: [
                        "home",
                    ],
                },
                {
                    text: "2.14 JVM",
                    prefix: "jvm/",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
            ],
        },
        {
            text: "三、相关框架",
            collapsible: true,
            children: [
                {
                    prefix:"spring/",
                    text: "3.1 spring",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix:"springboot/",
                    text: "3.2 SpringBoot",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix:"springmvc/",
                    text: "3.3 SpringMvc",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix:"mybatis/",
                    text: "3.4 Mybatis",
                    collapsible: true,
                    children: [
                        "home",

                    ],
                },
                {
                    prefix:"springcloud/",
                    text: "3.5 SpringCloud全家桶",
                    collapsible: true,
                    children: [
                        {
                          "text":"注册中心",
                          "link":"home",
                        },
                        {
                            "text":"负载器Ribbon",
                            "link":"home",
                        },
                        {
                            "text":"断路器Hystrix",
                            "link":"home",
                        },
                        {
                            "text":"网关",
                            "link":"home",
                        },
                    ],
                },
            ],
        },
        {
            text: "四、数据库",
            collapsible: true,
            children: [
                {
                    prefix:"db/",
                    text: "4.1 mysql",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix:"db/",
                    text: "4.2 oracle",
                    collapsible: true,
                    children: [
                        "home",
                    ],
                },
                {
                    prefix:"db/",
                    text: "4.3 redis",
                    collapsible: true,
                    children: [
                        "home",
                        "redis-mianshi1",
                    ],
                },
            ],
        },

    ],
});



