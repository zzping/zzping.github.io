(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{379:function(s,a,n){"use strict";n.r(a);var e=n(45),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"docker-常用命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-常用命令"}},[s._v("#")]),s._v(" Docker 常用命令")]),s._v(" "),n("p",[n("code",[s._v("Docker 官方命令大全")]),s._v("： https://docs.docker.com/reference/")]),s._v(" "),n("h2",{attrs:{id:"系统帮助命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#系统帮助命令"}},[s._v("#")]),s._v(" 系统帮助命令")]),s._v(" "),n("blockquote",[n("p",[s._v("（1）docker version： 查询 docker 版本")]),s._v(" "),n("p",[s._v("（2）docker info： 查看 docker 详细信息")]),s._v(" "),n("p",[s._v("（3）docker --help：帮助命令")]),s._v(" "),n("p",[s._v("（4）docker image --help： 查看单个命令的帮助说明")]),s._v(" "),n("p",[s._v("（5）docker： 和 docker --help 一样用于显示 docker 的命令帮助")]),s._v(" "),n("p",[s._v("（6）docker system： docker 管理相关命令（通过 docker system -help 得知它包含四个子命令）")]),s._v(" "),n("blockquote",[n("p",[s._v("docker system  df\t查看 docker 整体磁盘占用情况")])]),s._v(" "),n("blockquote",[n("p",[s._v("docker system info")])]),s._v(" "),n("blockquote",[n("p",[s._v("docker system prune")])]),s._v(" "),n("blockquote",[n("p",[s._v("docker system events")])])]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/7-docker%E5%91%BD%E4%BB%A4%E5%B8%AE%E5%8A%A9.png",alt:"docker帮助指令"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/8-docker%E5%B8%AE%E5%8A%A9%E5%91%BD%E4%BB%A42.png",alt:"查看docke磁盘占用"}})]),s._v(" "),n("h2",{attrs:{id:"镜像相关命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#镜像相关命令"}},[s._v("#")]),s._v(" 镜像相关命令")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/9-%E9%95%9C%E5%83%8F%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A4.png",alt:"镜像相关命令"}})]),s._v(" "),n("p",[s._v("（1）"),n("code",[s._v("查看镜像")]),s._v("： docker image ls / docker images")]),s._v(" "),n("blockquote",[n("p",[s._v("docker images -a\t\t列出所有镜像，包含中间层镜像\ndocker images -q\t\t列出所有镜像的 id")]),s._v(" "),n("p",[s._v("docker images tomcat\t\t列出 tomcat 的所有版本的镜像")])]),s._v(" "),n("p",[s._v("（2）"),n("code",[s._v("拉取镜像")]),s._v("： docker image pull / docker pull")]),s._v(" "),n("blockquote",[n("p",[s._v("docker pull tomcat\t\t拉取最新版本的 tomcat，等价于 docker pull tomcat:latest")]),s._v(" "),n("p",[s._v("docker pull tomcat:8.5.61\t\t拉取 8.5.61 版本的 tomcat 镜像")])]),s._v(" "),n("p",[s._v("（3）"),n("code",[s._v("删除镜像")]),s._v("： docker image rm / docker rmi")]),s._v(" "),n("blockquote",[n("p",[s._v("docker rmi tomcat:8.5.61\t\t删除 8.5.61 版本的镜像")]),s._v(" "),n("p",[s._v("docker rmi -f tomcat\t\t 强制删除 tomcat 镜像")]),s._v(" "),n("p",[s._v("docker rmi -f $(docker images -qa)\t\t强制删除所有的镜像")])]),s._v(" "),n("p",[s._v("（4）"),n("code",[s._v("查看镜像细节")]),s._v("： docker image inspect / docker inspect")]),s._v(" "),n("blockquote",[n("p",[s._v("docker inspect 镜像id\t\t查看镜像的内部详细信息")])]),s._v(" "),n("p",[s._v("（5）"),n("code",[s._v("导入镜像")]),s._v("： docker image load / docker load")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("-i\t指定导入 tar 格式的文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("【用法】")]),s._v(" "),n("p",[s._v("docker load -i xxx.tar\t\t将 xxx.tar 导入成镜像文件并放到本地镜像仓库中")])]),s._v(" "),n("p",[s._v("（6）"),n("code",[s._v("导出镜像")]),s._v("： docker image save / docker save")]),s._v(" "),n("blockquote",[n("p",[s._v("【作用】 将 docker 镜像导出为 tar 文件")]),s._v(" "),n("p",[s._v("【用法】 docker  save  镜像名  -o  名称.tar")])]),s._v(" "),n("h2",{attrs:{id:"容器相关命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器相关命令"}},[s._v("#")]),s._v(" 容器相关命令")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/10-%E5%AE%B9%E5%99%A8%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A41.png",alt:"容器相关命令1"}})]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/11-%E5%AE%B9%E5%99%A8%E7%9B%B8%E5%85%B3%E5%91%BD%E4%BB%A42.png",alt:"容器相关命令2"}})]),s._v(" "),n("p",[s._v("（1）"),n("code",[s._v("查看容器")]),s._v("： docker container ls / docker ps")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("-a\t\t查看所有的容器（正在运行的 + 没有运行的），-a 是 --all 的缩写\n-q\t\t查看所有正在运行的容器的id，-q 是 --quiet 的缩写\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("【示例】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\t\t\t\t 查看正在运行的容器\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\t\t\t查看所有的容器\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -q\t\t\t查看所有正在运行的容器的 ID\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -qa\t\t 查看所有容器（正在运行 + 未运行）的 ID\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("p",[s._v("（2）"),n("code",[s._v("运行容器")]),s._v("：docker container run / docker run")]),s._v(" "),n("p",[s._v("官方的运行容器的命令选项大全： "),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/container_run/",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker run"),n("OutboundLink")],1),s._v("，也可以通过 docker run --help 获取查看该命令的选项参数")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("-p\t\t\t\t端口映射，-p 宿主机端口:容器内端口，-p 是 --publish 的缩写。可以写多个 -p，代表映射多个端口\n-e\t\t\t\t设置环境变量，-e 是 --env 的缩写\n-d\t\t\t\t容器以后台方式运行并返回容器 ID，默认是以前台方式启动\n-v\t\t\t\t数据卷，实现宿主机的文件/目录和容器内的文件/目录的共享\n--name\t 指定容器的名字\n\n-v 宿主机目录:容器目录\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("【示例】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker run -p "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name tomcat01 -d tomcat:8.0.52 \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])]),s._v(" "),n("p",[s._v("（3）"),n("code",[s._v("启动容器")]),s._v("： docker container start / docker start")]),s._v(" "),n("p",[s._v("（4）"),n("code",[s._v("停止容器")]),s._v("： docker container stop / docker stop")]),s._v(" "),n("p",[s._v("（5）"),n("code",[s._v("重启容器")]),s._v("： docker container restart / docker restart")]),s._v(" "),n("p",[s._v("（6）"),n("code",[s._v("删除容器")]),s._v("： docker container rm / docker rm")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("-f\t\t强制删除容器（可以删除正在运行的容器），-f 是 --force 的缩写。\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("【示例】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" 容器id\t\t删除容器，如果该容器正在运行，则会报错\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f 容器id\t\t强制删除容器，可以删除正在运行的容器\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -qa"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\t\t强制删除所有的容器\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("p",[s._v("（7）"),n("code",[s._v("删除无用的容器")]),s._v("：")]),s._v(" "),n("p",[s._v("（7）"),n("code",[s._v("杀死容器")]),s._v("： docker container kill / docker kill")]),s._v(" "),n("p",[s._v("（8）"),n("code",[s._v("查看日志")]),s._v("： docker container logs / docker logs")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("-f\t\t实时查看日志\n\n-t\t\t显示时间戳\n\n--tail\t显示日志的最后多少行， --tail "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 表示显示日志的最后10行\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("【示例】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker logs tomcat01\t\t查看名称为 tomcat01 容器的日志\ndocker logs -f tomcat01\t\t实时查看名称为 tomcat01 容器的日志\ndocker logs -tf tomcat\t\t\t实时查看日志并显示时间戳\ndocker logs -f --tail "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" tomcat01\t\t实时查看 tomcat01 容器的最后10行日志\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])])]),s._v(" "),n("p",[s._v("（10）"),n("code",[s._v("查看容器细节")]),s._v("： docker container inspect / docker inspect")]),s._v(" "),n("blockquote",[n("p",[s._v("【用法】docker inspect 容器id/容器名称")]),s._v(" "),n("p",[s._v("【作用】查看容器内部细节：网络、数据卷、状态、端口暴露时间、id、名称、创建时间等等")]),s._v(" "),n("div",{staticClass:"language-shel line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('[\n{\n"Id": "13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d",\n"Created": "2021-01-28T11:15:37.324217186Z",\n"Path": "catalina.sh",\n"Args": [\n "run"\n],\n"State": {\n "Status": "running",\n "Running": true,\n "Paused": false,\n "Restarting": false,\n "OOMKilled": false,\n "Dead": false,\n "Pid": 1487,\n "ExitCode": 0,\n "Error": "",\n "StartedAt": "2021-01-28T12:00:35.118892057Z",\n "FinishedAt": "2021-01-28T19:59:50.080273708+08:00"\n},\n"Image": "sha256:b4b762737ed4b8e790749d95dbd13c49e21ffbb2fbf12d9609ab1ffa519aa70c",\n"ResolvConfPath": "/var/lib/docker/containers/13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d/resolv.conf",\n"HostnamePath": "/var/lib/docker/containers/13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d/hostname",\n"HostsPath": "/var/lib/docker/containers/13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d/hosts",\n"LogPath": "/var/lib/docker/containers/13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d/13a79917c0376aae59ef5f079935146714f4d61358483c9549d2adaecb6e4c0d-json.log",\n"Name": "/tomcat01",\n"RestartCount": 0,\n"Driver": "overlay2",\n"Platform": "linux",\n"MountLabel": "",\n"ProcessLabel": "",\n"AppArmorProfile": "",\n"ExecIDs": null,\n"HostConfig": {\n "Binds": null,\n "ContainerIDFile": "",\n "LogConfig": {\n     "Type": "json-file",\n     "Config": {}\n },\n "NetworkMode": "default",\n "PortBindings": {\n     "8080/tcp": [\n         {\n             "HostIp": "",\n             "HostPort": "8080"\n         }\n     ]\n },\n "RestartPolicy": {\n     "Name": "no",\n     "MaximumRetryCount": 0\n },\n "AutoRemove": false,\n "VolumeDriver": "",\n "VolumesFrom": null,\n "CapAdd": null,\n "CapDrop": null,\n "Capabilities": null,\n "Dns": [],\n "DnsOptions": [],\n "DnsSearch": [],\n "ExtraHosts": null,\n "GroupAdd": null,\n "IpcMode": "private",\n "Cgroup": "",\n "Links": null,\n "OomScoreAdj": 0,\n "PidMode": "",\n "Privileged": false,\n "PublishAllPorts": false,\n "ReadonlyRootfs": false,\n "SecurityOpt": null,\n "UTSMode": "",\n "UsernsMode": "",\n "ShmSize": 67108864,\n "Runtime": "runc",\n "ConsoleSize": [\n     0,\n     0\n ],\n "Isolation": "",\n "CpuShares": 0,\n "Memory": 0,\n "NanoCpus": 0,\n "CgroupParent": "",\n "BlkioWeight": 0,\n "BlkioWeightDevice": [],\n "BlkioDeviceReadBps": null,\n "BlkioDeviceWriteBps": null,\n "BlkioDeviceReadIOps": null,\n "BlkioDeviceWriteIOps": null,\n "CpuPeriod": 0,\n "CpuQuota": 0,\n "CpuRealtimePeriod": 0,\n "CpuRealtimeRuntime": 0,\n "CpusetCpus": "",\n "CpusetMems": "",\n "Devices": [],\n "DeviceCgroupRules": null,\n "DeviceRequests": null,\n "KernelMemory": 0,\n "KernelMemoryTCP": 0,\n "MemoryReservation": 0,\n "MemorySwap": 0,\n "MemorySwappiness": null,\n "OomKillDisable": false,\n "PidsLimit": null,\n "Ulimits": null,\n "CpuCount": 0,\n "CpuPercent": 0,\n "IOMaximumIOps": 0,\n "IOMaximumBandwidth": 0,\n "MaskedPaths": [\n     "/proc/asound",\n     "/proc/acpi",\n     "/proc/kcore",\n     "/proc/keys",\n     "/proc/latency_stats",\n     "/proc/timer_list",\n     "/proc/timer_stats",\n     "/proc/sched_debug",\n     "/proc/scsi",\n     "/sys/firmware"\n ],\n "ReadonlyPaths": [\n     "/proc/bus",\n     "/proc/fs",\n     "/proc/irq",\n     "/proc/sys",\n     "/proc/sysrq-trigger"\n ]\n},\n"GraphDriver": {\n "Data": {\n     "LowerDir": "/var/lib/docker/overlay2/20b3f0bba2e02188a30d5665fbcbcf7dac0ef303a45b0f1f18c30d4678c7248e-init/diff:/var/lib/docker/overlay2/56135837a07b429c6a7f661ddcb78d01d88d91658c1c77cbde67f380de0bd3a0/diff:/var/lib/docker/overlay2/b336da99705cd776b5aa0d0ceb6467e85b00504b59e7b139ffeba1af178e6292/diff:/var/lib/docker/overlay2/412fc5ae4bbe8124bfc61ccabe71e541b337c1e3bb27c25bd2db91af8df96db9/diff:/var/lib/docker/overlay2/df6c77f85adb2bc7ef6270dbab4d7b1b90336ee8b99b2836475eade53af6d5a5/diff:/var/lib/docker/overlay2/b4867f11abd58e7541ff0a76f168be7651de23c37ac5b44ff2f04a0c3e4e2786/diff:/var/lib/docker/overlay2/1e4fc579c7bdc873991722fe3a3638596a87743a62b5c15e00014b5ac0836c57/diff:/var/lib/docker/overlay2/65d67a788eda3bf398187b9319e466d7dca3b7155cad5a395bd27590210d56e9/diff:/var/lib/docker/overlay2/f5b6be894306def088d7dd3c2d2150ace512532b1bf992f70ce944df6666a6da/diff:/var/lib/docker/overlay2/90438072f7dfa630101d6c46175506f3d8aa3be0e3cc2989b289460720fe4e22/diff:/var/lib/docker/overlay2/b380b718c853d40fb2194c49471e9cbba80182e97b86c0744545ba2bf79d1f79/diff:/var/lib/docker/overlay2/21d4c6b258429980c6234bf5ab9d2458c23cebeb13c06ac3bc657151c7da874a/diff",\n     "MergedDir": "/var/lib/docker/overlay2/20b3f0bba2e02188a30d5665fbcbcf7dac0ef303a45b0f1f18c30d4678c7248e/merged",\n     "UpperDir": "/var/lib/docker/overlay2/20b3f0bba2e02188a30d5665fbcbcf7dac0ef303a45b0f1f18c30d4678c7248e/diff",\n     "WorkDir": "/var/lib/docker/overlay2/20b3f0bba2e02188a30d5665fbcbcf7dac0ef303a45b0f1f18c30d4678c7248e/work"\n },\n "Name": "overlay2"\n},\n"Mounts": [],\n"Config": {\n "Hostname": "13a79917c037",\n "Domainname": "",\n "User": "",\n "AttachStdin": false,\n "AttachStdout": false,\n "AttachStderr": false,\n "ExposedPorts": {\n     "8080/tcp": {}\n },\n "Tty": false,\n "OpenStdin": false,\n "StdinOnce": false,\n "Env": [\n     "PATH=/usr/local/tomcat/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin",\n     "LANG=C.UTF-8",\n     "JAVA_HOME=/docker-java-home/jre",\n     "JAVA_VERSION=7u181",\n     "JAVA_DEBIAN_VERSION=7u181-2.6.14-1~deb8u1",\n     "CATALINA_HOME=/usr/local/tomcat",\n     "TOMCAT_NATIVE_LIBDIR=/usr/local/tomcat/native-jni-lib",\n     "LD_LIBRARY_PATH=/usr/local/tomcat/native-jni-lib",\n     "OPENSSL_VERSION=1.1.0f-3+deb9u2",\n     "GPG_KEYS=05AB33110949707C93A279E3D3EFE6B686867BA6 07E48665A34DCAFAE522E5E6266191C37C037D42 47309207D818FFD8DCD3F83F1931D684307A10A5 541FBE7D8F78B25E055DDEE13C370389288584E7 61B832AC2F1C5A90F0F9B00A1C506407564C17A3 713DA88BE50911535FE716F5208B0AB1D63011C7 79F7026C690BAA50B92CD8B66A3AD3F4F22C4FED 9BA44C2621385CB966EBA586F72C284D731FABEE A27677289986DB50844682F8ACB77FC2E86E29AC A9C5DF4D22E99998D9875A5110C01C5A2F6059E7 DCFD35E0BF8CA7344752DE8B6FB21E8933C60243 F3A04C595DB5B6A5F1ECA43E3B7BBB100D811BBE F7DA48BB64BCB84ECBA7EE6935CD23C10D498E23",\n     "TOMCAT_MAJOR=8",\n     "TOMCAT_VERSION=8.0.52",\n     "TOMCAT_SHA512=23ba3c005d2e1bff30360a7aca5882ba7acaef0001395b1f77eb182c1f9c6a48db7f39b9f71ebdfb20668eca32c5f03bf00364f77d47e368850a794f6d65ea56",\n     "TOMCAT_TGZ_URLS=https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz \\thttps://www-us.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz \\thttps://www.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz \\thttps://archive.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz",\n     "TOMCAT_ASC_URLS=https://www.apache.org/dyn/closer.cgi?action=download&filename=tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz.asc \\thttps://www-us.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz.asc \\thttps://www.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz.asc \\thttps://archive.apache.org/dist/tomcat/tomcat-8/v8.0.52/bin/apache-tomcat-8.0.52.tar.gz.asc"\n ],\n "Cmd": [\n     "catalina.sh",\n     "run"\n ],\n "Image": "tomcat:8.0.52",\n "Volumes": null,\n "WorkingDir": "/usr/local/tomcat",\n "Entrypoint": null,\n "OnBuild": null,\n "Labels": {}\n},\n"NetworkSettings": {\n "Bridge": "",\n "SandboxID": "6f4c4f1adbeefd5d86cc00a19e8113326e924017351e25828e4d944496305818",\n "HairpinMode": false,\n "LinkLocalIPv6Address": "",\n "LinkLocalIPv6PrefixLen": 0,\n "Ports": {\n     "8080/tcp": [\n         {\n             "HostIp": "0.0.0.0",\n             "HostPort": "8080"\n         }\n     ]\n },\n "SandboxKey": "/var/run/docker/netns/6f4c4f1adbee",\n "SecondaryIPAddresses": null,\n "SecondaryIPv6Addresses": null,\n "EndpointID": "e6354e92f2a7f4da8d8205e675dd2ff20bceb180223981c25e39cde4f1bca136",\n "Gateway": "172.17.0.1",\n "GlobalIPv6Address": "",\n "GlobalIPv6PrefixLen": 0,\n "IPAddress": "172.17.0.2",\n "IPPrefixLen": 16,\n "IPv6Gateway": "",\n "MacAddress": "02:42:ac:11:00:02",\n "Networks": {\n     "bridge": {\n         "IPAMConfig": null,\n         "Links": null,\n         "Aliases": null,\n         "NetworkID": "5c0412f63fb286d692c3a248984cc433ec5fc967974fef8ed64a75f6262bf643",\n         "EndpointID": "e6354e92f2a7f4da8d8205e675dd2ff20bceb180223981c25e39cde4f1bca136",\n         "Gateway": "172.17.0.1",\n         "IPAddress": "172.17.0.2",\n         "IPPrefixLen": 16,\n         "IPv6Gateway": "",\n         "GlobalIPv6Address": "",\n         "GlobalIPv6PrefixLen": 0,\n         "MacAddress": "02:42:ac:11:00:02",\n         "DriverOpts": null\n     }\n }\n}\n}\n]\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br"),n("span",{staticClass:"line-number"},[s._v("171")]),n("br"),n("span",{staticClass:"line-number"},[s._v("172")]),n("br"),n("span",{staticClass:"line-number"},[s._v("173")]),n("br"),n("span",{staticClass:"line-number"},[s._v("174")]),n("br"),n("span",{staticClass:"line-number"},[s._v("175")]),n("br"),n("span",{staticClass:"line-number"},[s._v("176")]),n("br"),n("span",{staticClass:"line-number"},[s._v("177")]),n("br"),n("span",{staticClass:"line-number"},[s._v("178")]),n("br"),n("span",{staticClass:"line-number"},[s._v("179")]),n("br"),n("span",{staticClass:"line-number"},[s._v("180")]),n("br"),n("span",{staticClass:"line-number"},[s._v("181")]),n("br"),n("span",{staticClass:"line-number"},[s._v("182")]),n("br"),n("span",{staticClass:"line-number"},[s._v("183")]),n("br"),n("span",{staticClass:"line-number"},[s._v("184")]),n("br"),n("span",{staticClass:"line-number"},[s._v("185")]),n("br"),n("span",{staticClass:"line-number"},[s._v("186")]),n("br"),n("span",{staticClass:"line-number"},[s._v("187")]),n("br"),n("span",{staticClass:"line-number"},[s._v("188")]),n("br"),n("span",{staticClass:"line-number"},[s._v("189")]),n("br"),n("span",{staticClass:"line-number"},[s._v("190")]),n("br"),n("span",{staticClass:"line-number"},[s._v("191")]),n("br"),n("span",{staticClass:"line-number"},[s._v("192")]),n("br"),n("span",{staticClass:"line-number"},[s._v("193")]),n("br"),n("span",{staticClass:"line-number"},[s._v("194")]),n("br"),n("span",{staticClass:"line-number"},[s._v("195")]),n("br"),n("span",{staticClass:"line-number"},[s._v("196")]),n("br"),n("span",{staticClass:"line-number"},[s._v("197")]),n("br"),n("span",{staticClass:"line-number"},[s._v("198")]),n("br"),n("span",{staticClass:"line-number"},[s._v("199")]),n("br"),n("span",{staticClass:"line-number"},[s._v("200")]),n("br"),n("span",{staticClass:"line-number"},[s._v("201")]),n("br"),n("span",{staticClass:"line-number"},[s._v("202")]),n("br"),n("span",{staticClass:"line-number"},[s._v("203")]),n("br"),n("span",{staticClass:"line-number"},[s._v("204")]),n("br"),n("span",{staticClass:"line-number"},[s._v("205")]),n("br"),n("span",{staticClass:"line-number"},[s._v("206")]),n("br"),n("span",{staticClass:"line-number"},[s._v("207")]),n("br"),n("span",{staticClass:"line-number"},[s._v("208")]),n("br"),n("span",{staticClass:"line-number"},[s._v("209")]),n("br"),n("span",{staticClass:"line-number"},[s._v("210")]),n("br"),n("span",{staticClass:"line-number"},[s._v("211")]),n("br"),n("span",{staticClass:"line-number"},[s._v("212")]),n("br"),n("span",{staticClass:"line-number"},[s._v("213")]),n("br"),n("span",{staticClass:"line-number"},[s._v("214")]),n("br"),n("span",{staticClass:"line-number"},[s._v("215")]),n("br"),n("span",{staticClass:"line-number"},[s._v("216")]),n("br"),n("span",{staticClass:"line-number"},[s._v("217")]),n("br"),n("span",{staticClass:"line-number"},[s._v("218")]),n("br"),n("span",{staticClass:"line-number"},[s._v("219")]),n("br"),n("span",{staticClass:"line-number"},[s._v("220")]),n("br"),n("span",{staticClass:"line-number"},[s._v("221")]),n("br"),n("span",{staticClass:"line-number"},[s._v("222")]),n("br"),n("span",{staticClass:"line-number"},[s._v("223")]),n("br"),n("span",{staticClass:"line-number"},[s._v("224")]),n("br"),n("span",{staticClass:"line-number"},[s._v("225")]),n("br"),n("span",{staticClass:"line-number"},[s._v("226")]),n("br"),n("span",{staticClass:"line-number"},[s._v("227")]),n("br"),n("span",{staticClass:"line-number"},[s._v("228")]),n("br"),n("span",{staticClass:"line-number"},[s._v("229")]),n("br"),n("span",{staticClass:"line-number"},[s._v("230")]),n("br")])])]),s._v(" "),n("p",[s._v("（10）"),n("code",[s._v("进入容器内部")]),s._v("： docker exec")]),s._v(" "),n("blockquote",[n("p",[s._v("【用法】")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以交互模式进入容器内部，并通过 bash 控制台和容器进行交互")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it 容器id/容器名称 "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("注意顺序不能错： bash 要写在容器id后面")])]),s._v(" "),n("p",[s._v("（11）"),n("code",[s._v("容器和宿主机之间复制文件")]),s._v("： docker container cp / docker cp")]),s._v(" "),n("blockquote",[n("p",[s._v("【用法】")]),s._v(" "),n("p",[s._v("（1）从容器中复制文件到宿主机：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 容器ID:容器内的路径  宿主机路径\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("（2）从宿主机复制文件到容器内：")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("docker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" 文件"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("目录  容器ID:容器路径\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("【示例】")]),s._v(" "),n("p",[s._v("（1）将容器内的目录/文件复制到宿主机")]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 tomcat01 容器中的 webapps 目录下的 tt.txt 文件复制到宿主机的当前目录下")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" tomcat01:/usr/local/tomcat/webapps/tt.txt ./\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将 tomcat01 容器中的 webapps 目录复制到宿主机的当前目录下")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" tomcat01:/usr/local/tomcat/webapps/ ./\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("（2）将宿主机的目录/文件复制到容器内")]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将宿主机当前目录下的 a.txt 文件复制到 tomcat01 容器下的 tomcat 目录下")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./a.txt tomcat01:usr/local/tomcat/\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将宿主机当前目录下的 a.txt 文件复制到 tomcat01 容器下的 tomcat 目录下并重命名为 b.txt")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ./a.txt tomcat01:usr/local/tomcat/b.txt\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将宿主机的当前目录中的 test 目录复制到 tomcat01 容器的 tomcat 目录下")]),s._v("\ndocker "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" test/ tomcat01:/usr/local/tomcat/\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])])]),s._v(" "),n("p",[s._v("（12）"),n("code",[s._v("查看容器内进程")]),s._v("： docker top")]),s._v(" "),n("p",[s._v("（13）"),n("code",[s._v("容器打包成镜像")]),s._v("： docker container commit / docker commit")]),s._v(" "),n("blockquote",[n("p",[s._v("【选项】")]),s._v(" "),n("p",[s._v("-a\t\t作者信息")]),s._v(" "),n("p",[s._v("-m\t\t提交信息")]),s._v(" "),n("p",[s._v("-p\t\t提交的时候暂停容器，默认的值就是 ture。即将当前容器提交成镜像的时候，容器会有短暂的暂停状态")]),s._v(" "),n("p",[s._v("【示例】")]),s._v(" "),n("p",[s._v('docker  commit  -a "zzp"  -m  "我的第一个 tomcat 镜像"   容器id  mytomcat:1.0.0')])]),s._v(" "),n("h2",{attrs:{id:"docker-1-13-命令管理升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-1-13-命令管理升级"}},[s._v("#")]),s._v(" Docker 1.13 命令管理升级")]),s._v(" "),n("p",[s._v("在 1.13 版本中， Docker 向 CLI 添加了一些有用的命令，让环境更加整洁。对命令做了更好的分类管理。")]),s._v(" "),n("blockquote",[n("p",[s._v("英文博客： https://blog.couchbase.com/docker-1-13-management-commands/")]),s._v(" "),n("p",[s._v("中文博客： https://developer.aliyun.com/article/225201")]),s._v(" "),n("p",[s._v("备用链接： https://www.cnblogs.com/me115/p/6366391.html")])]),s._v(" "),n("h2",{attrs:{id:"docker-核心命令总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-核心命令总结"}},[s._v("#")]),s._v(" Docker 核心命令总结")]),s._v(" "),n("p",[n("img",{attrs:{src:"/images/docker/100.docker%E7%9A%84%E6%A0%B8%E5%BF%83%E5%91%BD%E4%BB%A4%E6%80%BB%E7%BB%93.png",alt:"docker核心命令总结"}})])])}),[],!1,null,null,null);a.default=t.exports}}]);