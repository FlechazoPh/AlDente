!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(t){"use strict";function e(t,e){function i(t){clearTimeout(n.doRedraw),n.doRedraw=setTimeout(function(){n.redraw()},t)}this.cm=t,this.options=e,this.buttonHeight=e.scrollButtonHeight||t.getOption("scrollButtonHeight"),this.annotations=[],this.doRedraw=this.doUpdate=null,this.div=t.getWrapperElement().appendChild(document.createElement("div")),this.div.style.cssText="position: absolute; right: 0; top: 0; z-index: 7; pointer-events: none",this.computeScale();var n=this;t.on("refresh",this.resizeHandler=function(){clearTimeout(n.doUpdate),n.doUpdate=setTimeout(function(){n.computeScale()&&i(20)},100)}),t.on("markerAdded",this.resizeHandler),t.on("markerCleared",this.resizeHandler),!1!==e.listenForChanges&&t.on("changes",this.changeHandler=function(){i(250)})}t.defineExtension("annotateScrollbar",function(t){return new e(this,t="string"==typeof t?{className:t}:t)}),t.defineOption("scrollButtonHeight",0),e.prototype.computeScale=function(){var t=this.cm,t=(t.getWrapperElement().clientHeight-t.display.barHeight-2*this.buttonHeight)/t.getScrollerElement().scrollHeight;if(t!=this.hScale)return this.hScale=t,!0},e.prototype.update=function(t){this.annotations=t,this.redraw()},e.prototype.redraw=function(t){!1!==t&&this.computeScale();var n=this.cm,e=this.hScale,i=document.createDocumentFragment(),o=this.annotations,r=n.getOption("lineWrapping"),a=r&&1.5*n.defaultTextHeight(),s=null,h=null;function l(t,e){var i;return s!=t.line&&(s=t.line,h=n.getLineHandle(t.line),(i=n.getLineHandleVisualStart(h))!=h&&(s=n.getLineNumber(i),h=i)),h.widgets&&h.widgets.length||r&&h.height>a?n.charCoords(t,"local")[e?"top":"bottom"]:n.heightAtLine(h,"local")+(e?0:h.height)}var d=n.lastLine();if(n.display.barWidth)for(var c,p=0;p<o.length;p++){var u=o[p];if(!(u.to.line>d)){for(var m,f,g=c||l(u.from,!0)*e,H=l(u.to,!1)*e;p<o.length-1&&!(o[p+1].to.line>d)&&!(H+.9<(c=l(o[p+1].from,!0)*e));)H=l((u=o[++p]).to,!1)*e;H!=g&&(m=Math.max(H-g,3),(f=i.appendChild(document.createElement("div"))).style.cssText="position: absolute; right: 0px; width: "+Math.max(n.display.barWidth-1,2)+"px; top: "+(g+this.buttonHeight)+"px; height: "+m+"px",f.className=this.options.className,u.id&&f.setAttribute("annotation-id",u.id))}}this.div.textContent="",this.div.appendChild(i)},e.prototype.clear=function(){this.cm.off("refresh",this.resizeHandler),this.cm.off("markerAdded",this.resizeHandler),this.cm.off("markerCleared",this.resizeHandler),this.changeHandler&&this.cm.off("changes",this.changeHandler),this.div.parentNode.removeChild(this.div)}});