(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{447:function(a,s,t){"use strict";t.r(s);var e=t(45),i=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"mybatis-概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-概述"}},[a._v("#")]),a._v(" Mybatis 概述")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/mybatis/1-logo.png",alt:"logo"}})]),a._v(" "),t("h2",{attrs:{id:"mybatis-简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-简介"}},[a._v("#")]),a._v(" Mybatis 简介")]),a._v(" "),t("blockquote",[t("p",[a._v("官方文档： https://mybatis.org/mybatis-3/zh/index.html")]),a._v(" "),t("p",[a._v("Github 地址： https://github.com/mybatis/mybatis-3")])]),a._v(" "),t("p",[a._v("（1）Mybatis 是一个基于 Java 语言、"),t("code",[a._v("基于 JDBC 的持久层")]),a._v("的框架。")]),a._v(" "),t("p",[a._v("（2）Mybatis 的前身是 Apache 的一个开源项目 iBatis。2010年6月这个项目由 Apache 软件基金会转义到了     Google Code，并且从 iBatis3.x 版本开始正式更名为 Mybatis，2013年11月代码迁移至 Github。")]),a._v(" "),t("p",[a._v("（3）Mybatis 支持定制化 SQL、存储过程、高级映射等等。")]),a._v(" "),t("p",[a._v("（4）MyBatis 免除了几乎所有的 JDBC 代码以及设置参数和获取结果集的工作，可以通过简单的 XML 或注解来配置和映射原始类型、接口和 Java POJO（Plain Old Java Objects，普通老式 Java 对象）为数据库中的记录。")]),a._v(" "),t("p",[a._v("（5）Mybatis 也被称为一个"),t("code",[a._v("半自动")]),a._v("的 "),t("code",[a._v("ORM框架")]),a._v("（ORM：Object Relational Mapping）。")]),a._v(" "),t("h2",{attrs:{id:"回顾-jdbc-编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾-jdbc-编程"}},[a._v("#")]),a._v(" 回顾 JDBC 编程")]),a._v(" "),t("p",[a._v("（1）通过 JDBC 操作数据库的步骤")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(1) 加载数据库驱动\n(2) 建立连接\n(3) 通过连接获取 PreparedStatement 对象, 并对 SQL 预编译\n(4) 通过 PreparedStatement 对象设置参数, 并执行 SQL 语句\n(5) 处理结果集,将结果集记录和java对象进行映射\n(6) 回收数据库资源(关闭 ResultSet、PreparedStatement、Connection 等资源)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("（2）JDBC 操作数据库的缺点")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("(1) 代码重复率高, 开发效率低。\n(2) 频繁的手动创建、销毁数据库连接影响系统性能, 可以通过使用数据库连接池解决该问题。\n(3) SQL 语句硬编码在 Java 代码中, 修改 SQL 时需要修改源代码, 不容易维护。\n(4) 对于底层事务处理、数据类型转换等都需要手动通过编写代码实现。增加了除了业务之外的其他工作量。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("h2",{attrs:{id:"orm-模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orm-模型"}},[a._v("#")]),a._v(" ORM 模型")]),a._v(" "),t("p",[a._v("由于原生的 JDBC 编程比较复杂繁琐，实际工作中很少直接使用原生的 JDBC 进行编程，于是提出了对象关系映射（Object Relational Mapping，简称 ORM，或者 O/RM，或者 O/R Mapping）。")]),a._v(" "),t("p",[a._v("ORM 模型指的是： 数据库中的表和普通的 Java 对象（Plain Ordinary Java Object， 简称 POJO）的映射关系模型。它将数据库中的表和 Java 对象进行映射，表中的每个字段对应 Java 对象的每个属性。")]),a._v(" "),t("h2",{attrs:{id:"mybatis-和其他持久层技术对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mybatis-和其他持久层技术对比"}},[a._v("#")]),a._v(" Mybatis 和其他持久层技术对比")]),a._v(" "),t("p",[a._v("持久层技术有很多种：")]),a._v(" "),t("ul",[t("li",[a._v("原生的 JDBC")]),a._v(" "),t("li",[a._v("Apache 提供的 commons-dbutils（QueryRunner 完成增删改查）")]),a._v(" "),t("li",[a._v("Spring 提供的 JdbcTemplate")]),a._v(" "),t("li",[a._v("Mybatis")]),a._v(" "),t("li",[a._v("Hibernate")]),a._v(" "),t("li",[a._v("JPA")]),a._v(" "),t("li",[a._v("......")])]),a._v(" "),t("p",[a._v("我们主要对比一下原生的JDBC、Mybatis、Hibernate 这三种技术。")]),a._v(" "),t("p",[a._v("（1）原生的 JDBC")]),a._v(" "),t("div",{staticClass:"language-markdown line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("原生的 JDBC 操作数据, SQL 硬编码在 Java 代码中, 需要手动的创建和销毁数据库连接, 开发效率低, 不利于维护。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("（2）Hibernate")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Hibernate 是全自动的 ORM 框架, 无需编写任何 SQL, 旨在消除 SQL, 通过使用 HQL 来完成对数据库的操作, 入门简单, 但是由于 SQL 是自动生成的, 对开发人员不可见。因此对于复杂功能的场景下需要定制和优化 SQL 比较麻烦, 需要深入学习 HQL 才行。增加了额外的学习成本。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("（3）Mybatis")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("Mybatis 是半自动的 ORM 框架, 它比 Hibernate 更好的一个点在于它将 SQL 的编写放给了开发人员, 这样可以大大增加开发的灵活性。也无需额外学习其他知识, 开发人员只需要掌握好 SQL 即可。并且 SQL 和 Java 代码分离, 也解决了原生 JDBC 中的 SQL 硬编码问题。\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])}),[],!1,null,null,null);s.default=i.exports}}]);