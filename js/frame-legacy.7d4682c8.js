(function(e){function t(t){for(var r,a,u=t[0],c=t[1],f=t[2],l=0,d=[];l<u.length;l++)a=u[l],o[a]&&d.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(d.length)d.shift()();return i.push.apply(i,f||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var c=n[u];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={frame:0},i=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(){return Promise.resolve()},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var s=c;i.push([5,"chunk-vendors"]),n()})({0:function(e,t){},1:function(e,t){},2:function(e,t){},3:function(e,t){},5:function(e,t,n){e.exports=n("825d")},"825d":function(e,t,n){"use strict";n.r(t);var r=n("dbd9"),o=n.n(r),i=n("8707"),a=n.n(i),u=n("b86e"),c=n("b671"),f=n("2330"),s=n("1c46");function l(){var e;do{e=s.randomBytes(32)}while(!f.privateKeyVerify(e));var t=c.privateToAddress(e);return new u["a"](c.bufferToHex(t),c.bufferToHex(e))}var d,p=window.localStorage.getItem("buidl");try{d=JSON.parse(p).wallet.all}catch(w){d=[]}if(0===d.length){for(var v=0;v<5;v++){var g=l();d.push(g)}var b=JSON.parse(p);null===b&&(b={}),b.wallet={all:d},window.localStorage.setItem("buidl",JSON.stringify(b))}function m(e,t,n,r,i){for(var u="",c=0;c<d.length;c++)d[c].address===t&&(u=d[c].privateKey);var f={nonce:n,gasPrice:"0x"+Number(0).toString(16),gasLimit:"0x"+Number(8192e6).toString(16),to:r,value:0,data:i,chainId:Number(e)},s=new o.a(f),l=a.a.Buffer.from(u.replace("0x",""),"hex");return s.sign(l),"0x"+s.serialize().toString("hex")}function h(e){var t=e.data;if(t.signTx){var n=t.signTx,r=m(n.chainId,n.account,n.nonce,n.to,n.data);window.parent.postMessage({signedTx:r},"*")}}window.parent.postMessage({accounts:d.map(function(e){return e.address})},"*"),window.addEventListener("message",h,!1)},b86e:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(){function e(e,t){this.address=e,this.privateKey=t}return e}();t["b"]={namespaced:!0,state:{all:[],default:void 0},mutations:{addSig:function(e,t){e.all.push(t)},removeSig:function(e,t){e.all.splice(t,1)},setDefault:function(e,t){e.default=t}},actions:{addSig:function(e,t){e.commit("addSig",t)},removeSig:function(e,t){e.commit("removeSig",t)},setDefault:function(e,t){e.commit("setDefault",t)}}}}});
//# sourceMappingURL=frame-legacy.7d4682c8.js.map