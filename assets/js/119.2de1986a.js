(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{630:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"screen对象的方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen对象的方法"}},[t._v("#")]),t._v(" Screen对象的方法")]),t._v(" "),s("h3",{attrs:{id:"screen-orientation-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#screen-orientation-api"}},[t._v("#")]),t._v(" Screen Orientation API")]),t._v(" "),s("p",[t._v("Screen Orientation API是一个能让Web开发者能控制屏幕旋转方向的API，开发者可以利用该API检测屏幕的当前方向，在屏幕方向发生改变时得到消息通知，并能通过API将屏幕方向锁定到指定状态。目前主流的浏览器都已经部分支持或决定支持该API，FireFox 26 和 IE 11 都支持了 "),s("code",[t._v("lockOrientation")]),t._v(" 和 "),s("code",[t._v("unlockOrientation")]),t._v(" API，Crosswalk 4（基于 Chromium 的 Web Runtime）也支持了该 API，Android 上的 Chrome 也正在实现该 API，估计2014年一季度之前能够完成。")]),t._v(" "),s("h4",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("h5",{attrs:{id:"lockorientation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#lockorientation"}},[t._v("#")]),t._v(" lockOrientation()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lockedAllowed "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("orientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("参数介绍")])]),t._v(" "),s("ul",[s("li",[t._v("orientation：需要锁定屏幕的方向。这个参数是一个字符串或者是一个由字符串组成的数组。通过多个字符串可以让屏幕只在选定的方向上进行旋转。")])]),t._v(" "),s("p",[t._v("以下字符串即表示你也许会指定的一些可能的方向。")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("portrait-primary")])]),t._v(" "),s("p",[t._v("它表示屏幕处于主要的肖像模式时的方向。如果设备处于正常位置且该位置处于纵向位置，或设备的正常位置处于横向并且设备保持顺时针转动90°，则会在主肖像模式下考虑屏幕。正常的位置是依赖于设备的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("portrait-secondary")])]),t._v(" "),s("p",[t._v("它表示屏幕处于辅助肖像模式时的方向。如果设备与正常位置保持180°，并且该位置处于纵向位置，或者设备的正常位置处于横向位置，并且持有的设备逆时针转动90°，则屏幕将处于辅助人像模式。正常的位置是依赖于设备的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("landscape-primary")])]),t._v(" "),s("p",[t._v("它代表了屏幕处于主要风景模式时的方向。 如果设备保持在正常位置，并且该位置处于横向位置，或者设备的正常位置处于纵向位置，并且所保持的设备顺时针旋转90°，则会将其视为主要横向模式。正常的位置是依赖于设备的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("landscape-secondary")])]),t._v(" "),s("p",[t._v("它代表了屏幕处于次要风景模式时的方向。如果设备与其正常位置保持180°并且该位置处于横向，或者如果设备的正常位置是纵向的，并且所保持的设备逆时针旋转90°，则将其视为次要横向模式。正常的位置是依赖于设备的。")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("portrait")])]),t._v(" "),s("p",[t._v("它表示同时包含 "),s("code",[t._v("portrait-primary")]),t._v(" 和 "),s("code",[t._v("portrait-secondary")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("landscape")])]),t._v(" "),s("p",[t._v("它表示同时包含 "),s("code",[t._v("landscape-primary")]),t._v(" 和 "),s("code",[t._v("landscape-secondary")]),t._v(".")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("default")])]),t._v(" "),s("p",[t._v("它代表 "),s("code",[t._v("portrait-primary")]),t._v(" 和 "),s("code",[t._v("landscape-primary")]),t._v(" 主要取决于设备的自然方向。例如，如果面板分辨率为1280 * 800，则 "),s("code",[t._v("default")]),t._v(" 为横向，如果分辨率为800 * 1280，则 "),s("code",[t._v("default")]),t._v(" 为纵向。")])])]),t._v(" "),s("blockquote",[s("p",[t._v("⚠️注意：可同时设置多个锁定值。因此，如果锁定设置为只有一个方向，屏幕方向将永远不会改变，知道屏幕方向解锁。否则，只要方向在设备锁定的方向之中，屏幕方向就会从一个方向改变到另一个方向。")])]),t._v(" "),s("p",[s("strong",[t._v("返回值")])]),t._v(" "),s("p",[t._v("如果方向被授权锁定，则返回 true；如果方向锁定被拒绝，则返回 false。请注意，返回值并不表示屏幕方向确实被锁定：可能会有延迟。")]),t._v(" "),s("h5",{attrs:{id:"unlockorientation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#unlockorientation"}},[t._v("#")]),t._v(" unlockOrientation()")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" unlocked "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("strong",[t._v("返回值")])]),t._v(" "),s("p",[t._v("如果方向授权解锁成功，则返回 true；如果方向锁定解除失败，则返回 false。")]),t._v(" "),s("h4",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 锁定屏幕为竖屏模式，不能设备如何旋转，屏幕都不会切换到横屏模式。")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("“portrait"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("primary”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“portrait"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("secondary”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 锁定屏幕为横屏模式，无论设备如何旋转，屏幕都不会切换到竖屏模式。")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("“landscape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("primary”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("“landscape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("secondary”"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 取消屏幕的锁屏，屏幕回到原始状态，")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unlockOrientation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"兼容性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#兼容性"}},[t._v("#")]),t._v(" 兼容性")]),t._v(" "),s("p",[t._v("另外需要注意的是 Screen Orientation API 的文档规范还处于开发阶段，浏览器的实现可能带有前缀，例如 Firefox 带有 moz 前缀，IE 带有 ms 前缀。在使用前我们需要添加一些代码，保持更好的兼容性。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lockOrientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lockOrientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozLockOrientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msLockOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unlockOrientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("unlockOrientation"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mozUnLockOrientation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" screen"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msUnLockOrientation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);