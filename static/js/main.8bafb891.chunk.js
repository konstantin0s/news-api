(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(43)},24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),s=a.n(r),l=(a(24),a(2)),i=a(3),o=a(5),m=a(4),u=a(6),d=(a(25),function(e){var t=e.item;return c.a.createElement("div",{className:"col-md-12 col-lg-12 newsingle"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image col-xs-auto col-md-auto col-lg-8"},c.a.createElement("img",{src:t.urlToImage,alt:t.title}),c.a.createElement("span",{className:"card-title"},t.source.name)),c.a.createElement("div",{className:"card-content"},c.a.createElement("p",null,t.title)),c.a.createElement("div",{className:"card-action"},c.a.createElement("a",{href:t.url,target:"_blank",className:"link btn btn-primary"},"Full Article"))))}),h=a(7),p=a.n(h),v=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).renderItems=function(){return a.state.news.map(function(e){return c.a.createElement(d,{key:e.url,item:e})})},a.state={news:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/".concat(this.props.news.type,"?").concat(this.props.news.query,"&apiKey=").concat("1e541de75e614c66a58503cecd5cfdd4");p.a.get(t).then(function(e){return e.data}).then(function(t){e.setState({news:t.articles})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"row"},this.renderItems())}}]),t}(n.Component),w=function(e){var t=e.item;return c.a.createElement("div",{className:"divider"},c.a.createElement("a",{href:t.url,target:"_blank",className:"lin"},c.a.createElement("div",{className:"section"},c.a.createElement("h5",null,t.source.name),c.a.createElement("p",null,t.title))))},f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).renderItems=function(){return a.state.sidenews.map(function(e){return c.a.createElement(w,{key:e.url,item:e})})},a.state={sidenews:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://newsapi.org/v2/".concat(this.props.news.type,"?").concat(this.props.news.query,"&apiKey=").concat("1e541de75e614c66a58503cecd5cfdd4");p.a.get(t).then(function(t){e.setState({sidenews:t.data.articles})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement("h2",null,this.renderItems()))}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={news1:{type:"top-headlines",query:"sources=bbc-news"},news2:{type:"everything",query:"domains=techcrunch.com&language=en"},news3:{type:"everything",query:"domains=comicbookmovie.com&language=en"}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"navbar-fixed"},c.a.createElement("h1",null,"News Feed"),c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper indigo lighten-4"},c.a.createElement("a",{href:"/news-api",className:"brand-logo center"},"My Feed")))),c.a.createElement("div",{className:"container-fluid mt-5 ml-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col xs-8 col-md-8 col-lg-8 container-wrapper"},c.a.createElement(v,{news:this.state.news1}),c.a.createElement(v,{news:this.state.news2})),c.a.createElement("div",{className:"col-md-4"},c.a.createElement(f,{news:this.state.news3})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.8bafb891.chunk.js.map