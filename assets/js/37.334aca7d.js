(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{434:function(a,v,_){"use strict";_.r(v);var s=_(45),t=Object(s.a)({},(function(){var a=this,v=a.$createElement,_=a._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[_("h1",{attrs:{id:"类加载器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类加载器"}},[a._v("#")]),a._v(" 类加载器")]),a._v(" "),_("p",[a._v('Java 虚拟机设计团队有意把类加载阶段中的 "通过一个类的全限定名来获取描述该类的二进制字节流" 这个动作放到 Java 虚拟机外部去实现。以便让应用程序自己决定如何去获取所需的类。实现这个动作的代码被称为 "类加载器"（Class Loader）。')]),a._v(" "),_("h2",{attrs:{id:"类与类加载器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类与类加载器"}},[a._v("#")]),a._v(" 类与类加载器")]),a._v(" "),_("p",[a._v("类加载器虽然只用于实现类的加载动作，但它在 Java 程序中起到的作用却远远超过类加载阶段。")]),a._v(" "),_("blockquote",[_("p",[a._v("对于任意一个类，都必须由加载它的类加载和这个类本身一起共同确立其在 Java 虚拟机中的唯一性。")]),a._v(" "),_("p",[a._v("即： 比较两个类是否相等，只有在这两个类是由同一个类加载器加载的前提下才有意义，否则，即使这两个类来源于同一个 Class 文件，被同一个 java 虚拟机加载，只要加载他们的类加载器不同，那这两个类就必定不相等。")]),a._v(" "),_("p",[a._v("这里的相等，包括代表类的的 Class 对象的 equals() 方法、isAssignableFrom() 方法、isInstance() 方法的返回结果。也包括了使用 instanceof关键字做对象所属关系判定等各种情况。")])]),a._v(" "),_("h2",{attrs:{id:"类加载器分类"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#类加载器分类"}},[a._v("#")]),a._v(" 类加载器分类")]),a._v(" "),_("p",[_("code",[a._v("站在 Java 虚拟机的角度,类加载分为两类")]),a._v("：")]),a._v(" "),_("blockquote",[_("p",[_("strong",[a._v("启动类加载器（Bootstrap ClassLoader）")]),a._v("： 这个类加载器使用 C++ 语言实现，是虚拟机自身的一部分。")]),a._v(" "),_("p",[_("strong",[a._v("除了启动类加载的其他类加载器")]),a._v("：这些类加载都由 Java 语言实现，不是虚拟机自身的一部分，并且全部都继承自抽象类 java.lang.ClassLoader。")])]),a._v(" "),_("p",[_("code",[a._v("站在 Java 开发人员的角度,类加载分为三类")]),a._v("：")]),a._v(" "),_("blockquote",[_("p",[_("strong",[a._v("启动类加载器（Bootstrap ClassLoader）")]),a._v("：")]),a._v(" "),_("p",[_("strong",[a._v("扩展类加载器（Extension ClassLoader）")]),a._v("：")]),a._v(" "),_("p",[_("strong",[a._v("应用程序类加载器（Application ClassLoader）")]),a._v("：")])]),a._v(" "),_("h2",{attrs:{id:"双亲委派模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#双亲委派模型"}},[a._v("#")]),a._v(" 双亲委派模型")]),a._v(" "),_("p",[a._v("双亲委派模型指的是： 当一个类加载器收到类的加载请求时，它首先不会自己去尝试加载这个类，而是把这个请求委派给父类加载器去完成，每一层的类加载器都是如此，直到加载请求最终委派到最顶层的启动类加载器中，只有当父加载器无法完成这个加载请求，子加载器才会尝试自己去加载完成。")]),a._v(" "),_("p",[a._v("双亲委派模型对于保证 Java 程序的稳定运行极为重要，但是它的实现却非常简单，在 java.lang.ClassLoader 类中的 loadClass() 方法中十几行代码就完成了实现。")]),a._v(" "),_("p",[_("img",{attrs:{src:"/images/jvm/%E5%8F%8C%E4%BA%B2%E5%A7%94%E6%B4%BE%E6%A8%A1%E5%9E%8B%E6%A8%A1%E5%9E%8B.png",alt:"双亲委派模型"}})]),a._v(" "),_("blockquote",[_("p",[a._v("为什么需要双亲委派模型？")]),a._v(" "),_("p",[a._v("其实就是为了"),_("strong",[a._v("让基础类得以正确地统一地加载")]),a._v("。从上面的图可以看出，如果你也定义了一个 "),_("code",[a._v("java.lang.Object")]),a._v("类，通过双亲委派模式是会把这个请求委托给启动类加载器，它扫描"),_("code",[a._v("<JAVA_HOME>\\lib")]),a._v("目录就找到了 jdk 定义的 "),_("code",[a._v("java.lang.Object")]),a._v(" 类来加载，所以压根不会加载你写的 "),_("code",[a._v("java.lang.Object")]),a._v("类，这就可以避免一些程序不小心或者有意的覆盖基础类。")])]),a._v(" "),_("h2",{attrs:{id:"破坏双亲委派模型-3次破坏"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#破坏双亲委派模型-3次破坏"}},[a._v("#")]),a._v(" 破坏双亲委派模型（3次破坏）")]),a._v(" "),_("p",[a._v("双亲委派模型是 Java 设计者推荐的一种类加载器实现方式，在 Java 的世界里大部分的类加载都遵循这个模型，但在 Java 的发展历史中出现过 3 次较大规模的双亲委派模型"),_("code",[a._v("被破坏")]),a._v("的情况。")]),a._v(" "),_("p",[a._v("（1）第一次被破坏")]),a._v(" "),_("p",[a._v("第一次被破坏是在 JDK1.2 时，因为在 JDK1.2 之前并没有双亲委派模型，这个模型是在 JDK1.2 才开始提出的。但是在 JDK1.2 之前已经有 ClassLoader 这个抽象类了。所以已经有人继承这个抽象类，通过重写 loadClass 方法来实现自定义的类加载器了。为了兼容以前的代码，设计者又在 ClassLoader 中添加了一个新的 protected 方法 findClass()，并引导开发者在自定义类加载器的时候重写 findClass 方法而不是 loadClass 方法。")]),a._v(" "),_("blockquote",[_("p",[a._v("这是第一次破坏双亲委派机制，因为双亲委派的逻辑是写在 loadClass 方法中的，但是因为又可以重写 loadClass 方法，重写之后就可以破坏双亲委派逻辑了。")])]),a._v(" "),_("p",[a._v("（2）第二次被破坏")]),a._v(" "),_("blockquote",[_("p",[a._v("第二次破坏是指 JNDI、JDBC 之类的情况。")])]),a._v(" "),_("p",[a._v("首先需要知道 SPI（Service Provider Interface），它指的是定义好一个规范，具体如何实现由扩展者或者实现厂商决定。JDBC 就是典型的场景，Java 中定义 JDBC 的接口，但是不提供具体实现，具体实现由具体的数据库厂商完成，比如 MySQL 有 MySQL 的 JDBC 实现，Oracle 有 Oracle 的 JDBC 实现。")]),a._v(" "),_("p",[a._v("JDBC 的接口属于 Java 中的基础类，会由引导类加载器进行加载，但是 JDBC 的具体实现是在 classpath 下，只能由应用程序类加载器去加载，就产生了启动类加载器要委托应用程序类加载器去加载具体的 JDBC 实现 ，这就违反了自下而上的委托加载机制。")]),a._v(" "),_("p",[a._v("具体的解决办法是：加了一个线程上下文类加载器，这个类加载器通过 java.lang.Thread 的 setContextLoader() 方法进行设置，默认设置的就是应用程序类加载器，然后通过 Thread.current.currentThread().getContextClassLoader() 获得类加载器来加载。")]),a._v(" "),_("p",[a._v("（3）第三次被破坏")]),a._v(" "),_("blockquote",[_("p",[a._v("第三次破坏是为了满足热部署的需求。不停机更新这对企业来说至关重要，毕竟停机是大事。")]),a._v(" "),_("p",[a._v("OSGI 就是利用自定义的类加载器机制来完成模块化热部署，而它实现的类加载机制就没有完全遵循自下而上的委托，有很多平级之间的类加载器查找，具体就不展开了，有兴趣可以自行研究一下。")])]),a._v(" "),_("p",[a._v("（4）第四次被破坏")]),a._v(" "),_("blockquote",[_("p",[a._v("第四次被破坏是 JDK9 引入了模块化，类加载器的实现做了一些更新变动。")]),a._v(" "),_("p",[a._v("像扩展类加载器被重命名为平台类加载器，核心类加载归属了做了一些划分，平台类加载器承担了更多的类加载。"),_("code",[a._v("当收到类加载请求，会先判断该类在具名模块中是否有定义，如果有定义就自己加载了，没的话再委派给父类。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);