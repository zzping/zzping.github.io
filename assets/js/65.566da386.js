(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{441:function(t,v,_){"use strict";_.r(v);var a=_(45),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"mybatis-整体架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-整体架构"}},[t._v("#")]),t._v(" Mybatis 整体架构")]),t._v(" "),_("h2",{attrs:{id:"整体三层架构简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#整体三层架构简介"}},[t._v("#")]),t._v(" 整体三层架构简介")]),t._v(" "),_("blockquote",[_("p",[t._v("Mybatis 整体架构分为三层：")]),t._v(" "),_("ul",[_("li",[_("p",[_("code",[t._v("基础支撑层")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("核心处理层")])])]),t._v(" "),_("li",[_("p",[_("code",[t._v("接口层")])])])]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/mybatis/2-Mybatis%E6%95%B4%E4%BD%93%E4%B8%89%E5%B1%82%E6%9E%B6%E6%9E%84.png",alt:"三层架构"}})]),t._v(" "),_("hr"),t._v(" "),_("p",[t._v("Mybatis 的源码中基本上也是一个 package 对应一个模块：")]),t._v(" "),_("p",[_("img",{attrs:{src:"/images/mybatis/3-mybatis%E6%BA%90%E7%A0%81package%E6%8E%A5%E5%8F%A3.png",alt:"源码package结构"}})])]),t._v(" "),_("h2",{attrs:{id:"基础支撑层介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础支撑层介绍"}},[t._v("#")]),t._v(" 基础支撑层介绍")]),t._v(" "),_("blockquote",[_("p",[t._v("基础支撑层包含了整个 Mybatis 的基础模块，这些基础模块为核心处理层的功能提供了良好的支撑。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("模块名称")]),t._v(" "),_("th",[t._v("对应的 package")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("反射模块")]),t._v(" "),_("td",[t._v("reflection")]),t._v(" "),_("td",[t._v("对原生反射进行封装，提供更强大、方便的调用")])]),t._v(" "),_("tr",[_("td",[t._v("类型转换模块")]),t._v(" "),_("td",[t._v("type")]),t._v(" "),_("td",[t._v("1、实现JDBC类型和Java类型相互转换；2、提供别名机制")])]),t._v(" "),_("tr",[_("td",[t._v("日志模块")]),t._v(" "),_("td",[t._v("logging")]),t._v(" "),_("td",[t._v("集成第三方日志框架，提供日志处理功能")])]),t._v(" "),_("tr",[_("td",[t._v("资源加载模块")]),t._v(" "),_("td",[t._v("io")]),t._v(" "),_("td",[t._v("对类加载器进行封装，提供加载各种资源文件的功能")])]),t._v(" "),_("tr",[_("td",[t._v("解析器模块")]),t._v(" "),_("td",[t._v("parsing")]),t._v(" "),_("td",[t._v("解析xml配置文件")])]),t._v(" "),_("tr",[_("td",[t._v("数据源模块")]),t._v(" "),_("td",[t._v("datasource")]),t._v(" "),_("td",[t._v("提供了数据源实现，也提供了和第三方数据源集成的接口")])]),t._v(" "),_("tr",[_("td",[t._v("事物管理模块")]),t._v(" "),_("td",[t._v("transaction")]),t._v(" "),_("td",[t._v("自身提供了事物接口和简单实现，支持和Spring集成")])]),t._v(" "),_("tr",[_("td",[t._v("缓存模块")]),t._v(" "),_("td",[t._v("cache")]),t._v(" "),_("td",[t._v("持久层框架都少不了缓存处理")])]),t._v(" "),_("tr",[_("td",[t._v("Binding 模块")]),t._v(" "),_("td",[t._v("binding")]),t._v(" "),_("td",[t._v("映射绑定，将用户自定义的Mapper接口与映射配置文件关联")])])])])]),t._v(" "),_("h2",{attrs:{id:"核心处理层介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#核心处理层介绍"}},[t._v("#")]),t._v(" 核心处理层介绍")]),t._v(" "),_("blockquote",[_("p",[t._v("核心处理层实现了 Mybatis 的核心处理流程。包括： Mybatis 的初始化和一次操作数据库涉及的全部流程。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("模块名称")]),t._v(" "),_("th",[t._v("对应的 package")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("模块解析")]),t._v(" "),_("td",[t._v("builder")]),t._v(" "),_("td",[t._v("解析Mybatis的全局配置文件和SQL映射文件，包括xml和注解两种形式")])]),t._v(" "),_("tr",[_("td",[t._v("参数映射")]),t._v(" "),_("td",[t._v("mapping")]),t._v(" "),_("td",[t._v("主要处理 ParameterMap，对输入参数的判断、组装等")])]),t._v(" "),_("tr",[_("td",[t._v("SQL解析")]),t._v(" "),_("td",[t._v("scripting")]),t._v(" "),_("td",[t._v("根据传入参数解析SQL映射文件中的动态SQL、占位符等处理成真正SQL")])]),t._v(" "),_("tr",[_("td",[t._v("SQL执行")]),t._v(" "),_("td",[t._v("executor")]),t._v(" "),_("td",[t._v("在SQL解析完成后执行SQL语句并将结果返回")])]),t._v(" "),_("tr",[_("td",[t._v("结果集映射")]),t._v(" "),_("td",[t._v("mapping")]),t._v(" "),_("td",[t._v("主要处理 ResultMap 等，和 ParameterMap 类似")])]),t._v(" "),_("tr",[_("td",[t._v("插件")]),t._v(" "),_("td",[t._v("plugin")]),t._v(" "),_("td",[t._v("可以通过自定义插件对 Mybatis 进行功能扩展，例如： Mybatis Helper")])])])])]),t._v(" "),_("h2",{attrs:{id:"接口层介绍"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接口层介绍"}},[t._v("#")]),t._v(" 接口层介绍")]),t._v(" "),_("blockquote",[_("p",[t._v("接口层核心是 SqlSession 接口，提供了一系列操作数据的增删改查的 API。当接口层收到调用请求时会调用核心处理层的模块来配合完成具体的数据库操作。")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("模块名称")]),t._v(" "),_("th",[t._v("对应的 package")]),t._v(" "),_("th",[t._v("作用")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("session")]),t._v(" "),_("td",[t._v("session")]),t._v(" "),_("td",[t._v("提供一系列操作数据库的增删改查API")])])])])])])}),[],!1,null,null,null);v.default=r.exports}}]);