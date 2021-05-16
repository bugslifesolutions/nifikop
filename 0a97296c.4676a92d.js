(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{258:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(258)),i={id:"1_introduction",title:"Introduction",sidebar_label:"Introduction"},c={unversionedId:"1_concepts/1_introduction",id:"version-v0.6.0/1_concepts/1_introduction",isDocsHomePage:!1,title:"Introduction",description:"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of Apache NiFi clusters deployed to K8s.",source:"@site/versioned_docs/version-v0.6.0/1_concepts/1_introduction.md",slug:"/1_concepts/1_introduction",permalink:"/nifikop/docs/v0.6.0/1_concepts/1_introduction",editUrl:"https://github.com/Orange-OpenSource/nifikop/edit/master/site/website/versioned_docs/version-v0.6.0/1_concepts/1_introduction.md",version:"v0.6.0",lastUpdatedBy:"Alexandre Guitton",lastUpdatedAt:1617027075,sidebar_label:"Introduction",sidebar:"version-v0.6.0/docs",next:{title:"Design Principes",permalink:"/nifikop/docs/v0.6.0/1_concepts/2_design_principes"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Motivation",id:"motivation",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Orange NiFi operator is a Kubernetes operator to automate provisioning, management, autoscaling and operations of ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://nifi.apache.org/"}),"Apache NiFi")," clusters deployed to K8s."),Object(o.b)("h2",{id:"overview"},"Overview"),Object(o.b)("p",null,"Apache NiFi is an open-source solution that support powerful and scalable directed graphs of data routing, transformation, and system mediation logic.\nSome of the high-level capabilities and objectives of Apache NiFi include, and some of the main features of the ",Object(o.b)("strong",{parentName:"p"},"NiFiKop")," are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Fine grained")," node configuration support"),Object(o.b)("li",{parentName:"ul"},"Graceful rolling upgrade"),Object(o.b)("li",{parentName:"ul"},"graceful NiFi cluster ",Object(o.b)("strong",{parentName:"li"},"scaling")),Object(o.b)("li",{parentName:"ul"},"Encrypted communication using SSL"),Object(o.b)("li",{parentName:"ul"},"the provisioning of secure NiFi clusters"),Object(o.b)("li",{parentName:"ul"},"Advanced Dataflow and user management via CRD")),Object(o.b)("p",null,"Some of the roadmap features :"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Monitoring via ",Object(o.b)("strong",{parentName:"li"},"Prometheus")),Object(o.b)("li",{parentName:"ul"},"Automatic reaction and self healing based on alerts (plugin system, with meaningful default alert plugins)"),Object(o.b)("li",{parentName:"ul"},"graceful NiFi cluster ",Object(o.b)("strong",{parentName:"li"},"scaling and rebalancing"))),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"At ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://opensource.orange.com/fr/accueil/"}),"Orange")," we are building some ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Orange-OpenSource?utf8=%E2%9C%93&q=operator&type=&language="}),"Kubernetes operator"),", that operate NiFi and Cassandra clusters (among other types) for our business cases."),Object(o.b)("p",null,"There are already some approaches to operating NiFi on Kubernetes, however, we did not find them appropriate for use in a highly dynamic environment, nor capable of meeting our needs."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/cetic/helm-nifi"}),"Helm chart")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://blog.cloudera.com/cloudera-flow-management-goes-cloud-native-with-apache-nifi-on-red-hat-openshift-kubernetes-platform/"}),"Cloudera Nifi Operator"))),Object(o.b)("p",null,"Finally, our motivation is to build an open source solution and a community which drives the innovation and features of this operator."))}p.isMDXComponent=!0}}]);