(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{386:function(v,e,_){"use strict";_.r(e);var a=_(45),l=Object(a.a)({},(function(){var v=this,e=v.$createElement,_=v._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h1",{attrs:{id:"垃圾回收器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器"}},[v._v("#")]),v._v(" 垃圾回收器")]),v._v(" "),_("p",[v._v("如果说垃圾收集算法是内存回收的方法论，那么垃圾收集器就是内存回收的实践者！《Java 虚拟机规范》中对垃圾收集器应该如何实现并没有做出任何规定，因此不同的厂商、不同版本的虚拟机所包含的垃圾收集器都可能会有很大差别，不同的虚拟机一般也会提供各种参数供用户根据自己的应用特点和要求组合出各个内存分代所使用的垃圾收集器。")]),v._v(" "),_("h2",{attrs:{id:"垃圾回收器概述与性能指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器概述与性能指标"}},[v._v("#")]),v._v(" 垃圾回收器概述与性能指标")]),v._v(" "),_("p",[v._v("评价垃圾回收器性能的两个主要指标：")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("内存占用（Footprint）：垃圾收集器运行时占用的内存空间大小")])]),v._v(" "),_("li",[_("p",[v._v("吞吐量（throughput）：运行用户代码时间 / （运行用户代码时间  + 运行垃圾收集时间）")])]),v._v(" "),_("li",[_("p",[v._v("暂停时间（pause time）STW 时间，即执行垃圾收集时，用户程序被暂停的时间")])])]),v._v(" "),_("p",[_("strong",[v._v("（1）7 款经典的垃圾收集器的简介")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/images/jvm/7%E6%AC%BE%E7%BB%8F%E5%85%B8%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8.png",alt:"7款经典的垃圾收集器"}})]),v._v(" "),_("p",[_("strong",[v._v("（2）7 经典的垃圾收集器的组合关系")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/images/jvm/%E5%9E%83%E5%9C%BE%E6%94%B6%E9%9B%86%E5%99%A8%E7%9A%84%E7%BB%84%E5%90%88%E5%85%B3%E7%B3%BB.png",alt:"7款经典的垃圾收集器组合关系"}})]),v._v(" "),_("blockquote",[_("ol",[_("li",[v._v("两个收集器之间有连线表示他们可以组合使用")]),v._v(" "),_("li",[v._v("Serial Old 作为 CMS 出现 Concurrent Mode Failure 时的后备方案")]),v._v(" "),_("li",[v._v("JDK14 中，删除了 CMS 收集器，并且弃用了 Parallel Scavenge 和 SerialOld GC 的组合")])])]),v._v(" "),_("p",[_("strong",[v._v("（3）如何查看默认的垃圾收集器？")])]),v._v(" "),_("blockquote",[_("p",[v._v("-XX:+PrintCommandLineFlags\t查看命令行相关参数（包含使用的垃圾收集器）")]),v._v(" "),_("p",[v._v("使用命令行指令：  jinfo -flag 相关垃圾收集器参数 pid")])]),v._v(" "),_("h2",{attrs:{id:"serial-serial-old-回收器-串行优先"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#serial-serial-old-回收器-串行优先"}},[v._v("#")]),v._v(" Serial / Serial Old 回收器 - 串行优先")]),v._v(" "),_("p",[v._v("Serial 收集器是最基础、历史最悠久的收集器，曾经（在 JDK1.3.1 之前）是 HotSpot 虚拟机新生代的唯一选择。Serial 收集器见名知意，它是一款串行的收集器，即它是单线程工作，并且它在进行垃圾收集的时，必须暂停其他所有工作线程（STW），直到它收集结束。Serial 收集器采用的是"),_("code",[v._v("复制算法")]),v._v("。。")]),v._v(" "),_("p",[v._v("Serial 收集器是运行在 Client 模式的默认的新生代收集器，而除了新生代，Serial 还提供了运行在老年代的 Serial Old 收集器。Serial Old 和 Serial 收集器一样也是串行模式，只不过使用的算法是"),_("code",[v._v("标记-整理算法")])]),v._v(" "),_("p",[v._v("Serial Old 在 Server 模式下有两个用途：")]),v._v(" "),_("ul",[_("li",[v._v("与新生代的 Parallel Scavenge 配合使用（JDK14 被弃用了）")]),v._v(" "),_("li",[v._v("作为 CMS 的后备垃圾收集器")])]),v._v(" "),_("blockquote",[_("p",[v._v("在 HotSpot 虚拟机中，使用参数 "),_("code",[v._v("-XX:+UseSerialGC")]),v._v(" 可以指定年轻代和老年代分别使用 Serial 收集器和 Serial Old 收集器，都是串行。")]),v._v(" "),_("p",[v._v("注意： 没有 -XX:UseSerialOldGC 这个参数")])]),v._v(" "),_("h2",{attrs:{id:"parnew-回收器-并行回收"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parnew-回收器-并行回收"}},[v._v("#")]),v._v(" ParNew 回收器 - 并行回收")]),v._v(" "),_("p",[v._v("ParNew 收集器实质上是 Serial 收集器的多线程并行版本。他们共用了很多代码，所以除了 ParNew 是同时使用多个线程进行并行垃圾收集之外，其他方面几乎都一样。")]),v._v(" "),_("p",[v._v("ParNew 也是工作在新生代，使用的是"),_("code",[v._v("复制算法")]),v._v("。")]),v._v(" "),_("p",[v._v("ParNew 可以和 CMS 组合使用，也可以和 Serial Old 组合使用。")]),v._v(" "),_("blockquote",[_("p",[v._v("在 HotSpot 虚拟机中，使用参数 "),_("code",[v._v("-XX:UseParNewGC")]),v._v(" 指定新生代使用 ParNew 收集器工作，老年代不受影响。")])]),v._v(" "),_("h2",{attrs:{id:"parallel-回收器-吞吐量优先"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#parallel-回收器-吞吐量优先"}},[v._v("#")]),v._v(" Parallel 回收器 - 吞吐量优先")]),v._v(" "),_("p",[v._v("Parallel Scavenge 收集器也是一款新生代收集器，和 ParNew、Serial 一样也是采用"),_("code",[v._v("复制算法")]),v._v("。并且也是并行的多线程收集器，看似和 ParNew 一样，但是他们的不同之处在于两者关注点不一样！")]),v._v(" "),_("p",[v._v("Parallel Scavenge 收集器的特点是它的关注点和其他收集器不同，CMS 等收集器的关注点是尽可能的缩短垃圾收集时用户线程的停顿时间（低延迟），而 Parallel Scavenge 收集器的目标则是达到一个可控制的吞吐量（Throughout）")]),v._v(" "),_("p",[_("strong",[v._v("Parallel 收集器的相关参数")])]),v._v(" "),_("blockquote",[_("p",[v._v("-XX:UseParallelGC： 设置新生代使用 Parallel Scavenge 收集器")]),v._v(" "),_("p",[v._v("-XX:UseParallelOldGC： 设置老年代使用 Parallel Old 收集器")]),v._v(" "),_("p",[v._v("-XX:MaxGCPauseMillis： 设置最大垃圾收集停顿时间")]),v._v(" "),_("p",[v._v("-XX:GCTimeRatio：设置吞吐量大小")]),v._v(" "),_("p",[v._v("-XX:+UseAdapitiveSizePolicy： 打开垃圾收集器的自适应调整策略")]),v._v(" "),_("p",[_("code",[v._v("在JDK8中默认就是 Parallel Scavenge + Parallel Old 的组合")])]),v._v(" "),_("p",[_("code",[v._v("在JDK9中默认的垃圾收集器是 G1")])])]),v._v(" "),_("h2",{attrs:{id:"cms-回收器-低延迟"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cms-回收器-低延迟"}},[v._v("#")]),v._v(" CMS 回收器 - 低延迟")]),v._v(" "),_("p",[v._v("CMS（Concurrent Mark Sweep）垃圾收集器是 JDK1.5 推出的一款真正意义上的支持并发的垃圾收集器。它首次实现了让垃圾收集线程和用户线程（基本上）同时工作。CMS 收集器是作为"),_("code",[v._v("老年代")]),v._v("的收集器。")]),v._v(" "),_("p",[v._v("CMS 的整体工作步骤分为 4 步："),_("code",[v._v("初始标记")]),v._v("、"),_("code",[v._v("并发标记")]),v._v("、"),_("code",[v._v("重新标记")]),v._v("、"),_("code",[v._v("并发清除")])]),v._v(" "),_("p",[_("img",{attrs:{src:"/images/jvm/CMS%E5%B7%A5%E4%BD%9C%E6%AD%A5%E9%AA%A4.png",alt:"CMS工作步骤"}})]),v._v(" "),_("p",[v._v("（1）初始标记")]),v._v(" "),_("p",[v._v("标记 GC Roots 能直接关联的对象，速度很快，需要 STW。")]),v._v(" "),_("p",[v._v("（2）并发标记")]),v._v(" "),_("p",[v._v("从 GC Roots 直接关联的对象开始遍历所有对象，这个过程是耗时最长，但不需要停止用户线程，即不需要 STW。")]),v._v(" "),_("p",[v._v("（3）重新标记")]),v._v(" "),_("p",[v._v("因为上一步并发标记过程中，用户线程仍在执行，所以会有一些对象的标记产生变动，而重新标记的阶段就是为了修正这些变动的对象标记。重新标记也需要 STW")]),v._v(" "),_("p",[v._v("（4）并发清除")]),v._v(" "),_("p",[v._v("清理掉被标记的垃圾对象，因为不用移动存活对象，所以并发清除阶段也是不需要 STW，和用户线程并发执行。")]),v._v(" "),_("p",[_("strong",[v._v("CMS 收集器的优缺点分析")])]),v._v(" "),_("p",[v._v("优点：用户线程和垃圾收集线程并发执行，能够使得系统停顿时间尽可能的短。")]),v._v(" "),_("p",[v._v("缺点：")]),v._v(" "),_("ul",[_("li",[v._v("CMS 收集器对处理器资源非常敏感，因为在并发标记和并发清理阶段 CMS 收集器工作时不需要停顿用户线程，虽然不会导致用户线程停顿，但是却占用了一部分线程（系统资源），在整体系统资源有限的情况下会影响很大。")]),v._v(" "),_("li",[v._v("CMS 垃圾收集器无法处理"),_("code",[v._v("浮动垃圾")]),v._v("。因为在 CMS 工作的并发标记和并发清理两个阶段，用户线程仍在继续运行还会伴随着新的垃圾对象产生。这些垃圾对象只能留在下一次垃圾收集时才能清理。同样也是由于用户线程还在继续运行，因此要提前进行垃圾收集，因为要预留一部分空间给在并发标记和并发清理阶段仍产生的对象使用。但是这样又会有新的问题，如果CMS 运行期间预留的空间无法满足新对象的分配，就会出现一次"),_("code",[v._v("并发失败（Concurrent Mode Failure）")]),v._v("，这个时候虚拟机将启动预备方案 - 冻结用户线程的执行，临时启用 Serial Old 收集器重新进行老年代的垃圾收集，这样停顿时间就会很长了。")]),v._v(" "),_("li",[v._v("CMS 收集器无法处理内存碎片的问题，因为它使用的是标记 - 清除算法。")])]),v._v(" "),_("p",[_("strong",[v._v("CMS 收集器的相关参数设置")])]),v._v(" "),_("blockquote",[_("p",[v._v("-XX:UseConcMarkSweepGC：设置使用 CMS 收集器作为老年代的收集器")]),v._v(" "),_("ul",[_("li",[v._v("开启该参数后会自动将参数 -XX:UseParNewGC 打开。即新生代 ParNew + 老年代 CMS 组合")])]),v._v(" "),_("p",[v._v("-XX:CMSInitiatingOccupanyFraction：CMS 的触发百分比，达到该值就会进行回收")]),v._v(" "),_("p",[v._v("-XX:ParallelCMSThreads：设置 CMS 的线程数量")]),v._v(" "),_("p",[v._v("-XX:CMSFullGCsBeforeCompation： 设置在执行多少次 Full GC 后对内存空间进行压缩整理")]),v._v(" "),_("p",[v._v("-XX:+UseCMSCompactAtFullCollection：指定在执行完 Full GC 后进行内存空间整理")])]),v._v(" "),_("p",[_("strong",[v._v("CMS 收集器在 JDK 后续版本中的变化")])]),v._v(" "),_("ul",[_("li",[_("p",[v._v("JDK9 中将 CMS 标记为了 Deprecated （JEP291），如果在 JDK9 及其以上版本的 HotSpot 虚拟机中设置参数")]),v._v(" "),_("p",[v._v("-XX:UseConcMarkSweep 来开启 CMS 收集器的话会收到警告信息提示 CMS 未来会被废弃。")])]),v._v(" "),_("li",[_("p",[v._v("JDK14 中将 CMS 收集器删除了（JEP363），如果在 JDK14 及其以上版本的 HotSpot 虚拟机中设置参数")]),v._v(" "),_("p",[v._v("-XX:UseConcMarkSweep 来开启 CMS 收集器的话，JVM 不会报错，会给出警告信息，并自动退回到默认 GC 方式启动 JVM。")])])]),v._v(" "),_("h2",{attrs:{id:"g1-回收器-区域分代化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#g1-回收器-区域分代化"}},[v._v("#")]),v._v(" G1 回收器 - 区域分代化")]),v._v(" "),_("p",[v._v("G1 收集器概述")]),v._v(" "),_("p",[v._v("G1（Garbage First）收集器是 JDK7 update 4 引入的一个新的垃圾收集器，在 JDK9 中宣布取代了 Parallel Scavenge + Parallel Old 的组成，成为了服务端模式下默认的垃圾收集器，并且也将 CMS 标记为 Deprecated，G1 收集器可以同时回收新生代和老年代，不需要和其他收集器组合使用。")]),v._v(" "),_("p",[v._v('G1 收集器的目标： 在延迟可控的情况下获得尽可能高的吞吐量，承担着 "全功能收集器" 的重任。')]),v._v(" "),_("p",[_("code",[v._v("G1 的核心思想是化整为零，将堆空间划分为若干个大小相等的区域（Region）,每次回收部分 Region 以达到低延迟和吞吐量之间的一个平衡")])]),v._v(" "),_("p",[v._v("G1 收集器的相关参数")]),v._v(" "),_("blockquote",[_("p",[v._v("-XX:+UseG1GC： 设置使用 G1 收集器，JDK9 开始默认是使用的 G1")]),v._v(" "),_("p",[v._v("-XX:G1HeapRegionSize ： 设置每个 Region 的大小，值是 2 的幂。范围是 1M 到 32 M 之间，目标是根据最小的 Java 堆大小划分出 2048 个区域。")]),v._v(" "),_("p",[v._v("-XX:MaxGCPauseMillis： 设置期望的最大 GC 停顿时间")]),v._v(" "),_("p",[v._v("-XX:ParallelGCThread")]),v._v(" "),_("p",[v._v("-XX:ConcGCThreads")]),v._v(" "),_("p",[v._v("-XX:InitiatingHeapOccupancyPercent")])]),v._v(" "),_("h2",{attrs:{id:"垃圾回收器的新发展"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#垃圾回收器的新发展"}},[v._v("#")]),v._v(" 垃圾回收器的新发展")]),v._v(" "),_("blockquote",[_("p",[v._v("Epsilon、Open JDK12 的 Shenandoah GC、JDK11 的 ZGC")])])])}),[],!1,null,null,null);e.default=l.exports}}]);