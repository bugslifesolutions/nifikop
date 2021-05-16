(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{170:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(258)),l={id:"2_read_only_config",title:"Read only configurations",sidebar_label:"Read only configurations"},o={unversionedId:"5_references/1_nifi_cluster/2_read_only_config",id:"version-v0.6.1/5_references/1_nifi_cluster/2_read_only_config",isDocsHomePage:!1,title:"Read only configurations",description:"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node.",source:"@site/versioned_docs/version-v0.6.1/5_references/1_nifi_cluster/2_read_only_config.md",slug:"/5_references/1_nifi_cluster/2_read_only_config",permalink:"/nifikop/docs/5_references/1_nifi_cluster/2_read_only_config",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.6.1/5_references/1_nifi_cluster/2_read_only_config.md",version:"v0.6.1",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1621194888,sidebar_label:"Read only configurations",sidebar:"version-v0.6.1/docs",previous:{title:"NiFi cluster",permalink:"/nifikop/docs/5_references/1_nifi_cluster/1_nifi_cluster"},next:{title:"Node configuration",permalink:"/nifikop/docs/5_references/1_nifi_cluster/3_node_config"}},b=[{value:"ReadOnlyConfig",id:"readonlyconfig",children:[]},{value:"NifiProperties",id:"nifiproperties",children:[]},{value:"ZookeeperProperties",id:"zookeeperproperties",children:[]},{value:"BootstrapProperties",id:"bootstrapproperties",children:[]},{value:"LogbackConfig",id:"logbackconfig",children:[]},{value:"BootstrapNotificationServicesConfig",id:"bootstrapnotificationservicesconfig",children:[]},{value:"ConfigmapReference",id:"configmapreference",children:[]},{value:"SecretConfigReference",id:"secretconfigreference",children:[]}],c={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"ReadOnlyConfig object specifies the read-only type Nifi config cluster wide, all theses will be merged with node specified readOnly configurations, so it can be overwritten per node."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),'readOnlyConfig:\n  # MaximumTimerDrivenThreadCount define the maximum number of threads for timer driven processors available to the system.\n  maximumTimerDrivenThreadCount: 30\n  # Logback configuration that will be applied to the node\n  logbackConfig:\n    # logback.xml configuration that will replace the one produced based on template\n    replaceConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # logback.xml configuration that will replace the one produced based on template and overrideConfigMap\n    replaceSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: logback.xml\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n  # NifiProperties configuration that will be applied to the node.\n  nifiProperties:\n    # Additionnals nifi.properties configuration that will override the one produced based on template and\n    # configuration\n    overrideConfigMap:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop.\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations, overrideConfigMap and overrideConfigs.\n    overrideSecretConfig:\n      # The key of the value,in data content, that we want use.\n      data: nifi.properties\n      # Name of the configmap that we want to refer.\n      name: raw\n      # Namespace where is located the secret that we want to refer.\n      namespace: nifikop\n    # Additionnals nifi.properties configuration that will override the one produced based\n    #   on template, configurations and overrideConfigMap\n    overrideConfigs: |\n      nifi.ui.banner.text=NiFiKop by Orange\n    # A comma separated list of allowed HTTP Host header values to consider when NiFi\n    # is running securely and will be receiving requests to a different host[:port] than it is bound to.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties\n    #      webProxyHosts:\n    # Nifi security client auth\n    needClientAuth: false\n    # Indicates which of the configured authorizers in the authorizers.xml file to use\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration\n  #      authorizer:\n  # ZookeeperProperties configuration that will be applied to the node.\n  zookeeperProperties:\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals zookeeeper.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: zookeeeper.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # Additionnals zookeeper.properties configuration that will override the one produced based\n    # on template and configurations.\n    overrideConfigs: |\n      initLimit=15\n      autopurge.purgeInterval=24\n      syncLimit=5\n      tickTime=2000\n      dataDir=./state/zookeeper\n      autopurge.snapRetainCount=30\n  # BootstrapProperties configuration that will be applied to the node.\n  bootstrapProperties:\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based on template and\n    #      # configuration\n    #      overrideConfigMap:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop.\n    #      # Additionnals bootstrap.properties configuration that will override the one produced based\n    #      #    on template, configurations, overrideConfigMap and overrideConfigs.\n    #      overrideSecretConfig:\n    #        # The key of the value,in data content, that we want use.\n    #        data: bootstrap.properties\n    #        # Name of the configmap that we want to refer.\n    #        name: raw\n    #        # Namespace where is located the secret that we want to refer.\n    #        namespace: nifikop\n    # JVM memory settings\n    nifiJvmMemory: "512m"\n    # Additionnals bootstrap.properties configuration that will override the one produced based\n    # on template and configurations.\n    # https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#bootstrap_properties\n    overrideConfigs: |\n      # java.arg.4=-Djava.net.preferIPv4Stack=true\n')),Object(i.b)("h2",{id:"readonlyconfig"},"ReadOnlyConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"maximumTimerDrivenThreadCount"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"int32"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"define the maximum number of threads for timer driven processors available to the system."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nifiProperties"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#nifiproperties"}),"NifiProperties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nifi.properties configuration that will be applied to the node."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zookeeperProperties"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#zookeeperproperties"}),"ZookeeperProperties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"zookeeper.properties configuration that will be applied to the node."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrapProperties"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#bootstrapproperties"}),"BootstrapProperties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrap.conf configuration that will be applied to the node."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logbackConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#logbackconfig"}),"LogbackConfig")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logback.xml configuration that will be applied to the node."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrapNotificationServicesConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#bootstrapnotificationservices"}),"BootstrapNotificationServices")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrap_notification_services.xml configuration that will be applied to the node."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"nifiproperties"},"NifiProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigMap"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#configmapreference"}),"ConfigmapReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals nifi.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals nifi.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideSecretConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#secretconfigreference"}),"SecretConfigReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals nifi.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"webProxyHosts"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"["," ","]","string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"A list of allowed HTTP Host header values to consider when NiFi is running securely and will be receiving requests to a different host","[:port]"," than it is bound to. ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#web-properties"}),"web-properties")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"needClientAuth"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Nifi security client auth."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"false")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"authorizer"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Indicates which of the configured authorizers in the authorizers.xml file to use ",Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#authorizer-configuration"}),"authorizer-configuration")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"managed-authorizer"')))),Object(i.b)("h2",{id:"zookeeperproperties"},"ZookeeperProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigMap"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#configmapreference"}),"ConfigmapReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals zookeeper.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideSecretConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#secretconfigreference"}),"SecretConfigReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals zookeeper.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"bootstrapproperties"},"BootstrapProperties"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigMap"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#configmapreference"}),"ConfigmapReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals bootstrap.properties configuration that will override the one produced based on template and configuration."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideConfigs"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations and overrideConfigMap."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"overrideSecretConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#secretconfigreference"}),"SecretConfigReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Additionnals bootstrap.properties configuration that will override the one produced based on template, configurations, overrideConfigMap and overrideConfigs."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"NifiJvmMemory"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"JVM memory settings."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'"512m"')))),Object(i.b)("h2",{id:"logbackconfig"},"LogbackConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replaceConfigMap"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#configmapreference"}),"ConfigmapReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logback.xml configuration that will replace the one produced based on template."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replaceSecretConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#secretconfigreference"}),"SecretConfigReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"logback.xml configuration that will replace the one produced based on template and overrideConfigMap."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"bootstrapnotificationservicesconfig"},"BootstrapNotificationServicesConfig"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replaceConfigMap"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#configmapreference"}),"ConfigmapReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrap_notifications_services.xml configuration that will replace the one produced based on template."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"replaceSecretConfig"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"#secretconfigreference"}),"SecretConfigReference")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"bootstrap_notifications_services.xml configuration that will replace the one produced based on template and overrideConfigMap."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"nil")))),Object(i.b)("h2",{id:"configmapreference"},"ConfigmapReference"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the configmap that we want to refer."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"namespace"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Namespace where is located the configmap that we want to refer."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The key of the value,in data content, that we want use."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')))),Object(i.b)("h2",{id:"secretconfigreference"},"SecretConfigReference"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Field"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Name of the secret that we want to refer."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"namespace"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Namespace where is located the secret that we want to refer."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"data"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The key of the value,in data content, that we want use."),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'""')))))}p.isMDXComponent=!0},258:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(a),j=n,u=d["".concat(l,".").concat(j)]||d[j]||O[j]||i;return a?r.a.createElement(u,o(o({ref:t},c),{},{components:a})):r.a.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=j;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);