(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var c=a(0),r=a.n(c);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,c)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,c,r=function(e,t){if(null==e)return{};var a,c,r={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),f=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=f(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,b=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=f(a),u=c,s=p["".concat(b,".").concat(u)]||p[u]||d[u]||n;return a?r.a.createElement(s,i(i({ref:t},o),{},{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,b=new Array(n);b[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,b[1]=i;for(var o=2;o<n;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return f}));var c=a(2),r=a(6),n=(a(0),a(101)),b={title:"\u4f7f\u7528solidity\u8a9e\u8a00\u64b0\u5beb\u667a\u80fd\u5408\u7d04"},i={unversionedId:"write-smart-contract-with-solidity",id:"write-smart-contract-with-solidity",isDocsHomePage:!1,title:"\u4f7f\u7528solidity\u8a9e\u8a00\u64b0\u5beb\u667a\u80fd\u5408\u7d04",description:"\u524d\u5e7e\u7ae0\u4ecb\u7d39\u4e86\u667a\u80fd\u5408\u7d04\ud83d\udcd2\u662f\u4ec0\u9ebc\uff0c\u4e5f\u6982\u7565\u63cf\u8ff0\u4e86\u5f9e\u7de8\u8b6f\u5230\u90e8\u7f72\u667a\u80fd\u5408\u7d04\u7684\u6d41\u7a0b\uff0c\u63a5\u4e0b\u4f86\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528solidity\u8a9e\u8a00\u4f86\u5beb\u667a\u80fd\u5408\u7d04\u3002",source:"@site/docs/write-smart-contract-with-solidity.md",slug:"/write-smart-contract-with-solidity",permalink:"/learndapp/write-smart-contract-with-solidity",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/write-smart-contract-with-solidity.md",version:"current",sidebar:"someSidebar",previous:{title:"\u5982\u4f55\u90e8\u7f72\u667a\u80fd\u5408\u7d04\uff1f",permalink:"/learndapp/deploy-smart-contract"},next:{title:"\u5efa\u7acb\u7b2c\u4e00\u500b\u667a\u80fd\u5408\u7d04\u5c08\u6848",permalink:"/learndapp/create-first-smart-contract-project"}},l=[{value:"Solidity \u8a9e\u8a00",id:"solidity-\u8a9e\u8a00",children:[]},{value:"\u958b\u767c\u524d\u7684\u6e96\u5099",id:"\u958b\u767c\u524d\u7684\u6e96\u5099",children:[{value:"\u5b89\u88dd\u6240\u9700\u5de5\u5177",id:"\u5b89\u88dd\u6240\u9700\u5de5\u5177",children:[]},{value:"\u555f\u52d5 ganache-cli",id:"\u555f\u52d5-ganache-cli",children:[]}]},{value:"\u5347\u7d1atruffle",id:"\u5347\u7d1atruffle",children:[]},{value:"\u53c3\u8003\u8cc7\u6599",id:"\u53c3\u8003\u8cc7\u6599",children:[]}],o={rightToc:l};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(c.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"\u524d\u5e7e\u7ae0\u4ecb\u7d39\u4e86\u667a\u80fd\u5408\u7d04\ud83d\udcd2\u662f\u4ec0\u9ebc\uff0c\u4e5f\u6982\u7565\u63cf\u8ff0\u4e86\u5f9e\u7de8\u8b6f\u5230\u90e8\u7f72\u667a\u80fd\u5408\u7d04\u7684\u6d41\u7a0b\uff0c\u63a5\u4e0b\u4f86\u5c07\u4ecb\u7d39\u5982\u4f55\u4f7f\u7528solidity\u8a9e\u8a00\u4f86\u5beb\u667a\u80fd\u5408\u7d04\u3002"),Object(n.b)("h2",{id:"solidity-\u8a9e\u8a00"},"Solidity \u8a9e\u8a00"),Object(n.b)("p",null,"Ethereum\u4e0a\u7684\u667a\u80fd\u5408\u7d04\u9700\u8981\u4f7f\u7528",Object(n.b)("inlineCode",{parentName:"p"},"solidity"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-1"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-1",className:"footnote-ref"}),"1")),"\u8a9e\u8a00\u4f86\u64b0\u5beb\u3002\u96d6\u7136\u9084\u6709\u5176\u4ed6\u80fd\u7528\u4f86\u64b0\u5beb\u667a\u80fd\u5408\u7d04\u7684\u8a9e\u8a00\u5982",Object(n.b)("inlineCode",{parentName:"p"},"Serpent"),"(\u985ePython)\u3001",Object(n.b)("inlineCode",{parentName:"p"},"lll"),"(\u985eFortran)\uff0c\u4f46\u76ee\u524d\u770b\u5230\u6240\u6709\u516c\u958b\u7684\u667a\u80fd\u5408\u7d04\u90fd\u662f\u4f7f\u7528solidity\u64b0\u5beb\u3002"),Object(n.b)("p",null,"\u5ba3\u50b3\u4e0a\u8aaa\uff0csolidity\u662f\u4e00\u7a2e\u985e\u4f3cJavascript\u7684\u8a9e\u8a00\uff0c\u4f46\u6211\u89ba\u5f97solidity\u9084\u662f\u6bd4\u8f03\u50cfJava\u6216Go\u8a9e\u8a00\u3002\u56e0\u70ba\u548cJavascript\u4e0d\u540c\uff0csolidity\u8207Java\u6216Go\u540c\u5c6c\u65bc\u5f37\u578b\u5225(Strong Type\uff0c\u5728\u5b9a\u7fa9\u8b8a\u6578\u6642\u9700\u8981\u6307\u5b9a\u578b\u5225)\u8a9e\u8a00\u3001\u5728\u5b9a\u7fa9\u51fd\u5f0f(function)\u6642\u540c\u6a23\u9700\u6307\u5b9a\u56de\u50b3\u7684\u578b\u5225(type)\u3001\u540c\u6a23\u4e5f\u9700\u8981\u5148\u7de8\u8b6f\u624d\u80fd\u57f7\u884c\u3002\u9019\u4e9b\u7279\u6027\u90fd\u662fJavascript\u6240\u4e0d\u5177\u5099\u7684\u3002"),Object(n.b)("p",null,"\u570d\u7e5e\u8457solidity\u7684\u5404\u7a2e\u958b\u767c\u5de5\u5177\u93c8\uff0c\u90fd\u662f\u4f7f\u7528\u5c6c\u65bcJavascript\u751f\u614b\u7cfb\u7684npm\u4f86\u63d0\u4f9b\u7684\u3002\u5728\u5f8c\u7e8c\u958b\u767cDApp\u6642\uff0c\u80fd\u904b\u7528\u540c\u4e00\u5957\u5efa\u69cb(Build)\u74b0\u5883\u7684\u512a\u52e2\u5c31\u7a81\u986f\u51fa\u4f86\u4e86\u3002"),Object(n.b)("h2",{id:"\u958b\u767c\u524d\u7684\u6e96\u5099"},"\u958b\u767c\u524d\u7684\u6e96\u5099"),Object(n.b)("p",null,"\u672c\u6587\u5c07\u4f7f\u7528\u7576\u524d\u6700\u6d3b\u8e8d\u7684\u667a\u80fd\u5408\u7d04\u958b\u767c\u6846\u67b6",Object(n.b)("inlineCode",{parentName:"p"},"truffle"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-3"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-3",className:"footnote-ref"}),"3")),"\u70ba\u57fa\u790e\u4f86\u958b\u767c\u3002\u76ee\u524d\u591a\u6578\u667a\u80fd\u5408\u7d04\u7686\u63a1\u7528truffle\u6846\u67b6\u958b\u767c\u3002\u5176\u4ed6\u9078\u64c7\u9084\u6709",Object(n.b)("inlineCode",{parentName:"p"},"embark"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-4"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-4",className:"footnote-ref"}),"4")),"\u7b49\u3002"),Object(n.b)("p",null,"\u5c31\u50cf\u4e00\u822c\u7db2\u7ad9\u6216App\u958b\u767c\u4e00\u6a23\uff0c\u5728\u63d0\u4f9b\u516c\u958b\u670d\u52d9\u4e4b\u524d\uff0c\u958b\u767c\u8005\u6703\u5728\u81ea\u5df1\u7528\u65bc\u5beb\u7a0b\u5f0f\u7684\u96fb\u8166(\u53c8\u7a31\u4f5c\u672c\u6a5f)\ud83d\udcbb\u6216\u900f\u904e\u6e2c\u8a66\u7db2\u8def\ud83d\udd78\u4f86\u6e2c\u8a66\u7a0b\u5f0f\u57f7\u884c\u7684\u6548\u679c\uff0c\u6e2c\u8a66\u5b8c\u6210\u5f8c\uff0c\u624d\u6703\u90e8\u7f72\u5230\u516c\u958b\u7684\u7db2\u8def\u4e0a\u63d0\u4f9b\u670d\u52d9\u3002 \u958b\u767c\u5340\u584a\u93c8\u667a\u80fd\u5408\u7d04(\u7a0b\u5f0f)\u7684\u904e\u7a0b\u4e5f\u662f\u5982\u6b64\u3002\u7279\u5225\u662f\u516c\u958b\u93c8\u4e0a\u6240\u6709\u5beb\u5165\u6216\u8b80\u53d6\u8a08\u7b97\u7d50\u679c\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u771f\u91d1\u767d\u9280(\u865b\u64ec\u4ee3\u5e63)\ud83d\udcb8\uff0c\u800c\u4e14\u6839\u64da\u7db2\u8def\u72c0\u6cc1\uff0c\u6bcf\u500b\u516c\u958b\u93c8\u4e0a\u7684\u64cd\u4f5c\u90fd\u9700\u8981\u8981\u4e00\u5c0f\u6bb5\u53cd\u61c9\u6642\u9593(15\u79d2 ~ \u6578\u5206\u9418)\uff0c\u9019\u4e9b\u7b49\u5f85\u9817\u6d6a\u8cbb\u5bf6\u8cb4\u7684\u958b\u767c\u6642\u9593\u23f3\u3002 \u56e0\u6b64\u5728\u958b\u767c\u7684\u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u5c07\u4f7f\u7528",Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-9"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-9",className:"footnote-ref"}),"9")),"\u5de5\u5177\u5728\u96fb\u8166\u4e0a\u6a21\u64ec\u667a\u80fd\u5408\u7d04\u6240\u9700\u7684\u4e59\u592a\u574a\u5340\u584a\u93c8\u6e2c\u8a66\u74b0\u5883\u3002"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),"\u4e2d\u4e5f\u5305\u542b\u4e86Javascript\u7248\u672c\u7684Ethereum\u865b\u64ec\u6a5f(Ethereum Virtual Machine)",Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-7"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-7",className:"footnote-ref"}),"7")),"\uff0c\u56e0\u6b64\u53ef\u4ee5\u5b8c\u6574\u5730\u57f7\u884c\u667a\u80fd\u5408\u7d04\ud83d\ude07\u3002"),Object(n.b)("p",null,"\u6b64\u5916\uff0c\u958b\u767c\u524d\u9084\u9700\u6e96\u5099\u4e00\u500b\u5408\u624b\u7684\u7de8\u8f2f\u5668\u3002\u6211\u76ee\u524d\u662f\u4f7f\u7528",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://code.visualstudio.com"}),"Visual Studio Code"),"\u642d\u914d",Object(n.b)("a",Object(c.a)({parentName:"p"},{href:"https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity"}),"solidity"),"\u63d2\u4ef6\u4f86\u958b\u767c\u3002solidity\u63d2\u4ef6\u9664\u4e86\u652f\u63f4\u8a9e\u6cd5\u9ad8\u4eae\u4e4b\u5916\uff0c\u4e5f\u6703\u900f\u904eSolium",Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-11"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-11",className:"footnote-ref"}),"11")),"\u6aa2\u67e5\u4e26\u63d0\u793a\u57fa\u672c\u7684\u8a9e\u6cd5\u932f\u8aa4\uff0c\u76f8\u7576\u65b9\u4fbf\u3002\u5176\u4ed6\u7de8\u8f2f\u5668\u61c9\u8a72\u4e5f\u6709\u985e\u4f3c\u7684\u63d2\u4ef6\u53ef\u9078\u64c7\u3002"),Object(n.b)("h3",{id:"\u5b89\u88dd\u6240\u9700\u5de5\u5177"},"\u5b89\u88dd\u6240\u9700\u5de5\u5177"),Object(n.b)("p",null,"\u9996\u5148\u958b\u767c\u6a5f\u4e0a\u5fc5\u9808\u88dd\u597dNode.js\uff0c\u518d\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u5b89\u88dd\u6240\u9700\u7684\u5de5\u5177\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ npm install -g truffle ganache-cli\n")),Object(n.b)("h3",{id:"\u555f\u52d5-ganache-cli"},"\u555f\u52d5 ganache-cli"),Object(n.b)("p",null,"\u5b89\u88dd\u597d\u5f8c\u96a8\u6642\u53ef\u4ee5\u4f7f\u7528",Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-9"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-9",className:"footnote-ref"}),"9")),"\u547d\u4ee4\u4f86\u555f\u52d5\u4e59\u592a\u574a\u6e2c\u8a66\u74b0\u5883\u3002",Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),"\u7684\u524d\u8eab\u662f",Object(n.b)("inlineCode",{parentName:"p"},"ethereumjs-testrpc"),"(testrpc)",Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-6"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-6",className:"footnote-ref"}),"6")),"\u3002\u53ef\u4ee5\u5728\u5f88\u591a\u5730\u65b9\u770b\u5230\u9019\u500b\u5de5\u5177\u3002"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{className:"language-sh"}),"$ ganache-cli\nGanache CLI v6.4.3 (ganache-core: 2.5.5)\n\nAvailable Accounts\n==================\n(0) 0xc9caaa064d688aebcd38ed2a6b8331cc677e58af\n(1) 0x227591bc0ad6405e1872a65be4dedf43ac9d887d\n(2) 0x1d656818acfe449d000b270a40ef642e7db16756\n(3) 0x6f5cc46b12b79e61decf52e22d2212aaa198eebb\n(4) 0xea8037431fb895d8486d702bf45b1740f68c50e8\n(5) 0x1725197577c94c318aa1d9b948a6de6c36975e19\n(6) 0x641e7cdefdff32b6c829d548c8b7f09efecf28cd\n(7) 0x0c7f8c8e4f1cdc9f80ae555b4af8abd4afb129bd\n(8) 0x4678c54cccd849e3e8e493511f7740ffc8a63943\n(9) 0xbae12ea1b761b8bee6e21c4379c0da6411206073\n\nPrivate Keys\n==================\n(0) aede214f4da9c155d2ad27c37b6e491d51255fa8d5b123f9d325a2c098646910\n(1) 47963c15c1f7153a81af4abeabefabd64ab3e1e738372301b8f5d109afb32f86\n(2) 8fca5773c047cda6a88a7c8f9922282d2b52f4589395832ce547674198338251\n(3) 4e164f1cdede376c4f0f6a35fe219e8084ca2134c1ef92fd6fa614a26167745f\n(4) c7f88f379bd8d48e47a8b6f527d524bf5657ed9cf1f64e75c6d130e01dc8d4b9\n(5) 666a5e244bc092266908f355405be2d850abe056c50b5ce7691f1f8d200f6c46\n(6) 344709a8596627fb14160fa1e90ec6fd995ca13468d78f34a2d999ad30e96826\n(7) 1e21bd0b40587b06a513c59217174fc960a943c219b86ada7593665a8528682b\n(8) dc8f0890d08c1d2139d2102159ddea1b7d7cc6d820b6af8e0ef4df4c7509ef73\n(9) 1f413b8917d3701e494c866687082f3b3aceb03fd2c949c3accb8b3d452e045b\n")),Object(n.b)("p",null,"\u53ef\u4ee5\u770b\u5230",Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),"\u555f\u52d5\u5f8c\u81ea\u52d5\u5efa\u7acb\u4e8610\u500b\u5e33\u6236","(","Accounts",")","\uff0c\u8207\u6bcf\u500b\u5e33\u6236\u5c0d\u61c9\u7684\u79c1\u9470","(","Private Key",")","\ud83d\udd11\u3002\u6bcf\u500b\u5e33\u6236\u4e2d\u90fd\u6709100\u500b\u6e2c\u8a66\u7528\u7684\u4ee5\u592a\u5e63","(","Ether",")","\ud83d\udcb5\u3002\u8981\u6ce8\u610f",Object(n.b)("inlineCode",{parentName:"p"},"ganache-cli"),"\u50c5\u904b\u884c\u5728\u8a18\u61b6\u9ad4\u4e2d\uff0c\u56e0\u6b64\u6bcf\u6b21\u91cd\u958b\u6642\u90fd\u6703\u56de\u5230\u5168\u65b0\u7684\u72c0\u614b\u3002"),Object(n.b)("p",null,"\u5982\u679c\u4e0d\u7fd2\u6163\u547d\u4ee4\u884c\u754c\u9762\uff0c\u4e5f\u53ef\u4ee5\u8a66\u8a66\u540c\u6a23\u662fTruffle\u5718\u968a\u958b\u767c\u7684\u5716\u5f62\u5316\u5340\u584a\u93c8\u6e2c\u8a66\u8edf\u9ad4",Object(n.b)("inlineCode",{parentName:"p"},"ganache"),Object(n.b)("sup",Object(c.a)({parentName:"p"},{id:"fnref-8"}),Object(n.b)("a",Object(c.a)({parentName:"sup"},{href:"#fn-8",className:"footnote-ref"}),"8")),"\u3002\u96d6\u7136\u754c\u9762\u5716\u5f62\u5316\u4e86\uff0c\u4f46\u57fa\u672c\u7684\u6982\u5ff5\u90fd\u662f\u76f8\u901a\u7684\u3002"),Object(n.b)("h2",{id:"\u5347\u7d1atruffle"},"\u5347\u7d1atruffle"),Object(n.b)("p",null,"\u7531\u65bcEthereum\u4ecd\u5728\u5feb\u901f\u767c\u5c55\u968e\u6bb5\uff0c\u958b\u767c\u5de5\u5177\u4e5f\u4e0d\u65b7\u5730\u5728\u66f4\u65b0\u3002\u8981\u5b89\u88dd\u65b0\u7248\u672c\u7684truffle\u6642\uff0c\u9700\u8981\u5148\u53cd\u5b89\u88dd\u5f8c\u518d\u91cd\u65b0\u5b89\u88dd\u3002\u8f38\u5165\u4ee5\u4e0b\u547d\u4ee4\u5373\u53ef\u91cd\u65b0\u5b89\u88ddtruffle\uff1a"),Object(n.b)("pre",null,Object(n.b)("code",Object(c.a)({parentName:"pre"},{}),"$ npm uninstall -g truffle\n$ npm install -g truffle\n")),Object(n.b)("p",null,"\u4e00\u5207\u6e96\u5099\u5c31\u7dd2\uff0c\u6211\u5011\u53ef\u4ee5\u958b\u59cb\u5efa\u7acb\u7b2c\u4e00\u4efd\u667a\u80fd\u5408\u7d04\u5c08\u6848\u4e86\u3002"),Object(n.b)("h2",{id:"\u53c3\u8003\u8cc7\u6599"},"\u53c3\u8003\u8cc7\u6599"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"[1]"," Solidity ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"http://solidity.readthedocs.io/en/latest/index.html"}),"http://solidity.readthedocs.io/en/latest/index.html")),Object(n.b)("li",{parentName:"ul"},"[2]"," Solidity\u7dda\u4e0a\u7de8\u8f2f\u5668\u3000",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://ethereum.github.io/browser-solidity/"}),"https://ethereum.github.io/browser-solidity/")),Object(n.b)("li",{parentName:"ul"},"[3]"," Truffle Framework ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"http://truffleframework.com/"}),"http://truffleframework.com/")),Object(n.b)("li",{parentName:"ul"},"[4]"," Embark Framework ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/iurimatias/embark-framework"}),"https://github.com/iurimatias/embark-framework")),Object(n.b)("li",{parentName:"ul"},"[5]"," ENS\u4e5f\u4f7f\u7528Truffle\u6846\u67b6 ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ethereum/ens"}),"https://github.com/ethereum/ens")),Object(n.b)("li",{parentName:"ul"},"[6]"," ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ethereumjs/testrpc"}),"https://github.com/ethereumjs/testrpc")),Object(n.b)("li",{parentName:"ul"},"[7]"," ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/ethereumjs/ethereumjs-vm"}),"https://github.com/ethereumjs/ethereumjs-vm")),Object(n.b)("li",{parentName:"ul"},"[8]"," ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"http://truffleframework.com/docs/ganache/using"}),"http://truffleframework.com/docs/ganache/using")),Object(n.b)("li",{parentName:"ul"},"[9]"," ",Object(n.b)("a",Object(c.a)({parentName:"li"},{href:"https://github.com/trufflesuite/ganache-cli"}),"https://github.com/trufflesuite/ganache-cli"))))}f.isMDXComponent=!0}}]);