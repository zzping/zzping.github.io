(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{416:function(e,s,r){"use strict";r.r(s);var a=r(45),t=Object(a.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-安装"}},[e._v("#")]),e._v(" Docker 安装")]),e._v(" "),r("blockquote",[r("p",[e._v("根据上面对 Docker 架构的描述：我们安装 Docker 只需要安装 docker 引擎即可，因为 docker 引擎包含：")]),e._v(" "),r("ul",[r("li",[e._v("服务端的守护进程")]),e._v(" "),r("li",[e._v("命令行界面的客户端")]),e._v(" "),r("li",[e._v("REST API， 指定程序和守护进程进行通信")])])]),e._v(" "),r("p",[e._v("官方安装文档："),r("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CentOS 上安装 Docker"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"安装方式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装方式"}},[e._v("#")]),e._v(" 安装方式")]),e._v(" "),r("blockquote",[r("p",[e._v("您可以根据需要以不同的方式安装 Docker Engine：")]),e._v(" "),r("p",[e._v("（1）大多数用户会设置Docker的存储库并从中进行安装，以简化安装和升级任务。 （推荐方式）")]),e._v(" "),r("p",[e._v("（2）一些用户下载并手动安装RPM软件包，并完全手动管理升级。 这在诸如在无法访问互联网的空白系统上安装Docker的情况下非常有用。")]),e._v(" "),r("p",[e._v("（3）在测试和开发环境中，可以通过通用的脚本来安装 Docker。")])]),e._v(" "),r("h2",{attrs:{id:"安装-docker-通过-docker-仓库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-通过-docker-仓库"}},[e._v("#")]),e._v(" 安装 Docker（通过 docker 仓库）")]),e._v(" "),r("p",[r("code",[e._v("官方文档")]),e._v("："),r("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/#install-using-the-repository",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过使用Docker仓库安装"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("（1）卸载系统中之前的 docker")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum remove docker \\\n                  docker-client \\\n                  docker-client-latest \\\n                  docker-common \\\n                  docker-latest \\\n                  docker-latest-logrotate \\\n                  docker-logrotate \\\n                  docker-engine\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br")])]),r("p",[e._v("（2）设置 docker 仓库")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum install -y yum-utils\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("（3）安装 docker 引擎和容器")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum install docker-ce docker-ce-cli containerd.io\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("（4）启动 docker")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("systemctl start docker\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("（5）验证 docker 是否安装和启动成功")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker -v\ndocker ps\ndocker images\ndocker run hello-world\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br")])]),r("p",[e._v("（6）设置 docker 开机自启动")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("systemctl enable docker\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("（7）配置 docker 阿里云镜像加速")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('mkdir -p /etc/docker\ntee /etc/docker/daemon.json <<-\'EOF\'\n{\n  "registry-mirrors": ["https://88v8abtj.mirror.aliyuncs.com"]\n}\nEOF\nsystemctl daemon-reload\nsystemctl restart docker\n\ndocker info 查看  docker 信息，可以看到镜像已经配置成功了\n')])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br")])]),r("blockquote",[r("p",[e._v("/etc/docker/daemon.json   是 docker 的核心配置文件！")])]),e._v(" "),r("h2",{attrs:{id:"安装-docker-通过脚本安装"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-通过脚本安装"}},[e._v("#")]),e._v(" 安装 Docker（通过脚本安装）")]),e._v(" "),r("p",[r("code",[e._v("官方文档")]),e._v("： "),r("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/#install-using-the-convenience-script",target:"_blank",rel:"noopener noreferrer"}},[e._v("通过脚本安装 Docker"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本。可以通过自动化脚本快速安装Docker。另外可以通过 "),r("code",[e._v("--mirror")]),e._v(" 选项使用国内源进行安装：执行这个命令后，脚本就会自动的将一切准备工作做好，并且把 Docker 的稳定(stable)版本安装在系统中。")]),e._v(" "),r("blockquote",[r("div",{staticClass:"language-shell line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[e._v("$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("curl")]),e._v(" -fsSL https://get.docker.com -o get-docker.sh\n$ "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" get-docker.sh\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])])]),e._v(" "),r("h2",{attrs:{id:"安装指定版本的-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本的-docker"}},[e._v("#")]),e._v(" 安装指定版本的 Docker")]),e._v(" "),r("p",[e._v("官方文档： "),r("a",{attrs:{href:"https://docs.docker.com/engine/install/centos/",target:"_blank",rel:"noopener noreferrer"}},[e._v("安装指定版本的 Docker"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("（1）首先列出当前仓库所有可用的 docker 的版本，并按照版本号从高到低排列")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum list docker-ce --showduplicates | sort -r\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("（2）安装指定版本的 Docker（以 19.03.12 为例）")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum install docker-ce-19.03.12 docker-ce-cli-19.03.12 containerd.io\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("h2",{attrs:{id:"卸载-docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#卸载-docker"}},[e._v("#")]),e._v(" 卸载 Docker")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo yum remove docker-ce docker-ce-cli containerd.io\nsudo rm -rf /var/lib/docker\nsudo rm -rf /var/lib/containerd\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);