(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{449:function(a,t,s){"use strict";s.r(t);var v=s(45),e=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"运行时数据区域之-方法区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行时数据区域之-方法区"}},[a._v("#")]),a._v(" 运行时数据区域之 - 方法区")]),a._v(" "),s("h2",{attrs:{id:"方法区概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区概述"}},[a._v("#")]),a._v(" 方法区概述")]),a._v(" "),s("p",[a._v('方法区（Method Area）与 Java 堆一样，是各个线程共享的内存区域。方法区主要用于存储被虚拟机加载的类型信息、常量、静态常量、即时编译器编译后的代码缓存等数据。虽然在《Java 虚拟机规范中》把方法区描述为堆的一个逻辑部分，但是它却有一个别名叫做 "非堆"（Non-Heap），目的是与 Java 堆区分开来。')]),a._v(" "),s("p",[a._v("《Java 虚拟机规范》对方法区的约束是非常宽松的，除了和 Java 堆一样不需要连续的内存和可以选择固定大小或者可扩展外，甚至还可以选择不实现垃圾收集。")]),a._v(" "),s("p",[a._v("方法区在 JVM 启动的时候被创建，JVM 退出就会释放方法区的内存，方法区的大小决定了可以加载的类的数量，如果加载了太多的类导致方法区溢出，虚拟机同样也会报出内存溢出的异常：")]),a._v(" "),s("ul",[s("li",[a._v("JDK 8 以前： java.lang.OutOfMemoryError:PermGen space")]),a._v(" "),s("li",[a._v("JDK 8 开始： java.lang.OutOfMemoryError:Metaspace")])]),a._v(" "),s("h2",{attrs:{id:"设置方法区大小与-oom"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置方法区大小与-oom"}},[a._v("#")]),a._v(" 设置方法区大小与 OOM")]),a._v(" "),s("p",[a._v("方法区可以设置成固定大小，也可以设置成动态扩展的。设置方法区大小的参数在 JDK8 前后是不同的：")]),a._v(" "),s("p",[a._v("（1）JDK8 之前")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("-XX:PermSize\t设置永久代初始大小，例如： -XX:PermSize=100m，默认为 20.75M")]),a._v(" "),s("li",[a._v("-XX:MaxPermSize    设置永久代最大空间，32位系统默认是64M, 64位系统默认是 82 M")])])]),a._v(" "),s("p",[a._v("（2）JDK8 开始")]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("-XX:MetaspaceSize\t设置元空间初始大小，例如：-XX:MetaspaceSize=100m ，windows 下默认值是 21 M")]),a._v(" "),s("li",[a._v("-XX:MaxMetaspaceSize    设置元空间最大值，默认值 -1， 即没有限制，具体和本地内存大小一致")])])]),a._v(" "),s("p",[a._v("（3）关于方法区的 OOM")]),a._v(" "),s("blockquote",[s("p",[a._v("根据《Java 虚拟机规范》的规定，如果方法区无法满足新的内存分配需求时，将抛出 OutOfMemoryError 异常")]),a._v(" "),s("ul",[s("li",[a._v("JDK8 之前： java.lang.OutOfMemoryError:PermGen space")]),a._v(" "),s("li",[a._v("JDK8 开始： java.lang.OutOfMemoryError:Metaspace")])])]),a._v(" "),s("h2",{attrs:{id:"方法区的内部结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区的内部结构"}},[a._v("#")]),a._v(" 方法区的内部结构")]),a._v(" "),s("blockquote",[s("p",[a._v("方法区用于存储被虚拟机加载的类型信息、常量、静态变量、即时编译器编译后的代码缓存等数据。")])]),a._v(" "),s("h2",{attrs:{id:"常量池-vs-运行时常量池"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常量池-vs-运行时常量池"}},[a._v("#")]),a._v(" 常量池 VS 运行时常量池")]),a._v(" "),s("p",[s("strong",[a._v("（1）常量池（Constant Pool Table）")])]),a._v(" "),s("p",[a._v("常量池是 Class 文件中的一部分，用于存放编译期生成的各种"),s("code",[a._v("字面量")]),a._v("和"),s("code",[a._v("符号引用")]),a._v("。")]),a._v(" "),s("blockquote",[s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConstantPoolTest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"abc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("p",[s("img",{attrs:{src:"/images/jvm/Class%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E5%B8%B8%E9%87%8F%E6%B1%A0.png",alt:"Class文件中的常量池"}})])]),a._v(" "),s("p",[s("strong",[a._v("（2）运行时常量池（Runtime Constant Pool）")])]),a._v(" "),s("p",[a._v("Class 文件被类加载器加载到运行时数据区后，Class 文件中的常量池就变成了方法区中的运行时常量池。")]),a._v(" "),s("p",[s("strong",[a._v("（3）总结")])]),a._v(" "),s("blockquote",[s("ul",[s("li",[a._v("常量池是 Class 文件的一部分，用于存放编译期产生的各种字面量和符号引用。这部分内容经过类加载后会放到方法区的运行时常量池中。"),s("code",[a._v("常量池可以看做成一张表，虚拟机指令根据这张表找到要执行的类名、方法名、参数类型、字面量等数据")])]),a._v(" "),s("li",[a._v("运行时常量池是方法区的一部分。")]),a._v(" "),s("li",[a._v("运行时常量池中包含多种不同的常量，其中包括编译期就确定的各种字面量值，也包括到了运行期解析后才能获得的方法或者字段引用，此时已经不再是常量池中的符号引用了，而是真实的地址。")]),a._v(" "),s("li",[a._v("运行时常量池，相对于 Class 文件中的常量池还有一个重要特性： 具备动态性【String 的 intern 方法】")])])]),a._v(" "),s("h2",{attrs:{id:"hotspot-中方法区的演进"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hotspot-中方法区的演进"}},[a._v("#")]),a._v(" HotSpot 中方法区的演进")]),a._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"http://openjdk.java.net/jeps/122",target:"_blank",rel:"noopener noreferrer"}},[a._v("为什么要用元空间来替换永久代？"),s("OutboundLink")],1)]),a._v(" "),s("ul",[s("li",[a._v("为永久代设置空间大小是很难确定的。")]),a._v(" "),s("li",[a._v("对永久代进行调优很困难。")])])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("JDK 版本")]),a._v(" "),s("th",[a._v("方法区的变化")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("JDK 6 及以前")]),a._v(" "),s("td",[a._v("有永久代，静态变量存放在永久代中")])]),a._v(" "),s("tr",[s("td",[a._v("JDK 7")]),a._v(" "),s("td",[a._v('有永久代，但已经逐步"去永久代"，字符串常量池、静态变量从永久代移到了 Java 堆中')])]),a._v(" "),s("tr",[s("td",[a._v("JDK8 及以后")]),a._v(" "),s("td",[a._v("无永久代，类型信息等保存在本地内存的元空间中，但字符串常量池、静态变量还在堆中")])])])]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/jvm/%E6%96%B9%E6%B3%95%E5%8C%BA-jdk6.png",alt:"方法区-jdk6"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/jvm/%E6%96%B9%E6%B3%95%E5%8C%BA-jdk7.png",alt:"方法区-jdk7"}})]),a._v(" "),s("p",[s("img",{attrs:{src:"/images/jvm/%E6%96%B9%E6%B3%95%E5%8C%BA-jdk8.png",alt:"方法区-jdk8"}})]),a._v(" "),s("h2",{attrs:{id:"方法区的垃圾回收"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法区的垃圾回收"}},[a._v("#")]),a._v(" 方法区的垃圾回收")]),a._v(" "),s("p",[a._v("方法区存储的最主要的有： 类型信息、运行时常量池")]),a._v(" "),s("p",[a._v("所以方法区垃圾收集主要回收两部分内容：运行时常量池中废弃的常量、不再使用的类型")]),a._v(" "),s("h2",{attrs:{id:"字符串常量池为什么要调整"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字符串常量池为什么要调整"}},[a._v("#")]),a._v(" 字符串常量池为什么要调整")]),a._v(" "),s("p",[a._v("JDK 7 之前字符串常量池是在方法区中的运行时常量池中。JDK7 开始将字符串常量池移到了 Java 堆中。")]),a._v(" "),s("p",[a._v("原因是： 因为方法区的回收频次比较低，回收效率也很低。基本上是在 Full GC 的时候才会回收方法区。但是在开发中经常会有大量的字符串被创建，这就会导致字符串常量池中的字符串不能及时得到回收。放到堆中相对来说能够更好的进行回收。")]),a._v(" "),s("h2",{attrs:{id:"静态变量的存储位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态变量的存储位置"}},[a._v("#")]),a._v(" 静态变量的存储位置")]),a._v(" "),s("p",[a._v("首先注意： 这里的静态变量我们探讨的是变量的引用，而不是变量内容本身。")]),a._v(" "),s("p",[a._v("成员变量")]),a._v(" "),s("ul",[s("li",[a._v("静态变量： 变量引用在jdk7以前放在方法区，jdk7以后放在堆中，变量引用指向的对象始终在堆中。")]),a._v(" "),s("li",[a._v("实例变量： 实例变量是存在堆中的，因为实例变量属于对象的内容。跟随对象的生命周期。")])]),a._v(" "),s("p",[a._v("局部变量")]),a._v(" "),s("ul",[s("li",[a._v("方法中的局部变量，如果声明的是基本类型的变量,其变量名及其值放在栈中，如果声明的是引用类型的变量，变量名放在栈中，引用变量指向的内容放在堆中。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);