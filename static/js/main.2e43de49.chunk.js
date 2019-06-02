(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t){},116:function(e,t){},128:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),o=n.n(i),c=n(12),l=n.n(c),s=n(25),u=n(68),m=n(69),h=n(77),d=n(70),p=n(10),v=n(76),f=n(135),E=n(134),b=function(){return r.a.createElement(f.a,{bg:"light",expand:"lg"},r.a.createElement(f.a.Brand,{href:"/"},"Translink Trains"),r.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(E.a,{className:"mr-auto"},r.a.createElement(E.a.Link,{href:"https://github.com/AnalogueMachine"},"GitHub"),r.a.createElement(E.a.Link,{href:"http://twitter.com/AnalogueMachine"},"Twitter"))))},S=n(130),w=n(131),k=n(75),x=n(132),y=n(129),g=n(136),C=function(e){return r.a.createElement(g.a,{style:{margin:"10px 0 10px 0",boxShadow:"2px 4px 4px #888888"}},r.a.createElement(g.a.Body,null,r.a.createElement(g.a.Title,null,"Destination: ",e.service.Destination1.$.name),r.a.createElement(g.a.Text,null,"Origin: ",e.service.Origin1.$.name,r.a.createElement("br",null),"Due: ",e.service.ArriveTime.$.time,r.a.createElement("br",null),"Departing: ",e.service.DepartTime.$.time,r.a.createElement("br",null),"Status: ",e.service.ServiceStatus.$.Status,r.a.createElement("br",null),"Delay: ",e.service.Delay.$.Minutes," minutes",r.a.createElement("br",null),"Platform: ",e.service.Platform.$.Number,r.a.createElement("br",null)),r.a.createElement(y.a,{onClick:e.onClick,value:e.index},"View Stops")))},j=n(133),O=function(e){return r.a.createElement(j.a,{show:e.show,onHide:e.onHide,centered:!0},r.a.createElement(j.a.Header,{closeButton:!0},r.a.createElement(j.a.Title,null,e.service.Destination1.$.name)),r.a.createElement(j.a.Body,null,e.service.Dest1CallingPoints.CallingPoint.map(function(e,t){return r.a.createElement("div",{key:t},e.$.etarr," - ",e.$.Name)})))},M=n(109),$=function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors.io/?https://apis.opendatani.gov.uk/translink/").then(function(e){return e.json()}).then(function(e){t=e.stations});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://cors.io/?https://apis.opendatani.gov.uk/translink/".concat((void 0).state.selectedStation,".xml"),{method:"GET",headers:{Accept:"application/xml"}}).then(function(e){return e.text()}).then(function(e){t=JSON.parse(M.xml2json(e,{compact:!0,textKey:"_",attributesKey:"$",commentKey:"value"}))});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),T=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(h.a)(this,Object(d.a)(t).call(this,e))).getStations=Object(s.a)(l.a.mark(function e(){var t;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/stations").then(function(e){return e.json()}).then(function(e){t=e});case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}},e)})),n.state={selectedStation:"None selected",stationInformation:"",selectedService:null,showStationModal:!1},n.handleClick=n.handleClick.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.viewStops=n.viewStops.bind(Object(p.a)(n)),n.handleModalClose=n.handleModalClose.bind(Object(p.a)(n)),n}return Object(v.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(s.a)(l.a.mark(function e(){var t,n=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:return t=e.sent,e.next=5,t.map(function(e,t){return r.a.createElement("option",{key:t,value:e.code,onClick:n.handleClick},e.name)});case 5:t=e.sent,this.setState({stations:t});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"handleClick",value:function(e){this.setState({selectedStation:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({stationInformation:D()})}},{key:"viewStops",value:function(e){console.log(this.state.stationInformation.StationBoard.Service[e.target.value]),this.setState({selectedService:this.state.stationInformation.StationBoard.Service[e.target.value]}),this.setState({showStationModal:!0})}},{key:"handleModalClose",value:function(){this.setState({showStationModal:!1})}},{key:"renderServices",value:function(){var e=this,t=this.state.stationInformation.StationBoard.Service;return t?t.map(function(t,n){return r.a.createElement(C,{key:n,service:t,onClick:e.viewStops,index:n})}):r.a.createElement("p",{className:"noTrains"},"No trains due here for at least 90min.")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),this.state.selectedService&&r.a.createElement(O,{service:this.state.selectedService,show:this.state.showStationModal,onHide:this.handleModalClose}),r.a.createElement(S.a,null,r.a.createElement(w.a,null,r.a.createElement(k.a,{md:{span:8,offset:2}},r.a.createElement(x.a,{onSubmit:this.handleSubmit},r.a.createElement(x.a.Group,{style:{textAlign:"center"}},r.a.createElement(x.a.Label,null,"Choose your station..."),r.a.createElement(x.a.Control,{as:"select"},r.a.createElement("option",null,"Please select..."),this.state.stations)),r.a.createElement(w.a,null,r.a.createElement(k.a,null),r.a.createElement(k.a,{className:"text-center"},r.a.createElement(y.a,{variant:"primary",type:"submit"},"Submit")),r.a.createElement(k.a,null))))),r.a.createElement(w.a,null,r.a.createElement(k.a,{md:{span:8,offset:2}},this.state.stationInformation.StationBoard&&r.a.createElement("div",null,this.renderServices())))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(127);o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},78:function(e,t,n){e.exports=n(128)}},[[78,1,2]]]);
//# sourceMappingURL=main.2e43de49.chunk.js.map