(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(t,e,n){"use strict";n.r(e);var u=n("5c40"),c=n("9ff4");function o(t,e){return Object(u["q"])(),Object(u["e"])(u["b"],null,[Object(u["i"])("h1",null,"vue3-ref："+Object(c["E"])(t.number),1),Object(u["i"])("h2",null,"computed：当前数据的两倍："+Object(c["E"])(t.doubleNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"增加")]),Object(u["i"])("h2",null,"获取Vuex中的值："+Object(c["E"])(t.testNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[2]||(e[2]=function(e){return t.update(e)})},"更新Vuex中的值")])],64)}var b=n("a1e9"),l={name:"About",setup:function(){var t=Object(u["k"])(),e=t.ctx,n=Object(b["h"])(12),c=function(){n.value++},o=function(){e.$store.commit("setTest",n)},l=Object(u["d"])((function(){return 2*n.value})),i=Object(u["d"])((function(){return e.$store.state.test}));return Object(u["x"])(n,(function(){console.log("监控number数据为".concat(n.value))}),{lazy:!0}),Object(u["x"])(l,(function(){console.log("监控doubleNum数据为".concat(l.value))})),Object(u["o"])((function(){console.log(e)})),{number:n,doubleNum:l,testNum:i,add:c,update:o}}};l.render=o;e["default"]=l}}]);