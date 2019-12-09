(window.webpackJsonp=window.webpackJsonp||[]).push([[235],{351:function(e,v,_){"use strict";_.r(v);var t=_(0),i=Object(t.a)({},(function(){var e=this,v=e.$createElement,_=e._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("h2",{attrs:{id:"移动web开发"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动web开发"}},[e._v("#")]),e._v(" 移动Web开发")]),e._v(" "),_("p",[e._v("移动 Web 开发也称无线 Web 开发，无线Web开发是基于智能手机上的浏览器进行的 Web 开发。现在智能手机主要有 Android和 iOS 两种操作系统的，因此基于手机 Web 的开发，主要是基于 Android 和 iOS 两种操作系统上的 Web 开发。")]),e._v(" "),_("h3",{attrs:{id:"操作系统"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作系统"}},[e._v("#")]),e._v(" 操作系统")]),e._v(" "),_("p",[e._v("基于两种操作系统的 Web 开发的共同点与不同点。")]),e._v(" "),_("p",[_("strong",[e._v("共同点：")])]),e._v(" "),_("ul",[_("li",[e._v("两者的浏览器引擎是基于 Webkit 的，因此基于手机上的 Web 开发，主要是基于 Webkit 的浏览器开发，对于其他浏览器，例如 Firefox、IE 和 Opera 等浏览器，可以不用做兼容考虑。")]),e._v(" "),_("li",[e._v("两者都是按照 HTML5 规范开发，因此对于 HTML5 的特性支持性都比较好。")])]),e._v(" "),_("p",[_("strong",[e._v("不同点：")])]),e._v(" "),_("ul",[_("li",[e._v("Android 的厂商碎片化比较严重，加上由于 Webkit 的开源特性，导致市面上有非常多的修改版 Webkit 浏览器， 这些修改版的 Webkit，厂商会根据自己的需求对 Webkit进行修改，导致对 HTML5 的特性碎片化严重。 同时 HTML5 标准不同厂商的实现不同，造成对于 HTML5 特性的支持度不同。 以 "),_("code",[e._v("<input type=date>")]),e._v(" 日期控件为例，有些厂商实现了该标准，有些厂商没有实现该标准，就算实现了标准的厂商， 对于日期控件的展现、交互也不尽相同。")]),e._v(" "),_("li",[e._v("Android 的版本碎片化，Android 到本文档撰写为止，发展到了4.4的版本，对于 Web 开发而言，主要分为两个阶段 "),_("code",[e._v("2.x")]),e._v(" 和 "),_("code",[e._v("4.x")]),e._v(" 的阶段，由于 "),_("code",[e._v("3.x")]),e._v(" 是为 TV 等操作系统而做，"),_("code",[e._v("2.x")]),e._v(" 采用的 Webkit 核心的版本是 "),_("code",[e._v("533.x")]),e._v(" 版本，是谷歌专门为当时的手机性能定制的，由于当时的手机，硬件性能不是很好，因此对于533版本的 Webkit 浏览器的实现是精简版的，因此对于 HTML5 标砖的实现不是非常彻底，并且对于某些实现还做了特定保留。此系列版本又可分为 2.2 以及以下和 2.3 版本，对于 2.2 以及下面的版本，对于 HTML5 的支持性不是很好，并且即使实现了，对于某些细节实现的比较有问题。2.3 版本可以说是一次飞跃，在 2.3 的版本上，开始移植 PC 版 Chrome 的核心代码实现，因此从2.3开始，Android 的 Web 开发开始了新的旅程。")]),e._v(" "),_("li",[e._v("iOS 由于其封闭性，并且苹果公司严格按照 HTML5 的规范来进行实现，因此在 iOS 上 HTML5 的规范实现的较好。")]),e._v(" "),_("li",[e._v("iOS 和 Android 对于 HTML5 的规范实现在界面层和交互层的实现是不同的，就拿上面的列子来说 "),_("code",[e._v('<input type="date">')]),e._v(" 的日期控件，iOS 和 Android 的交互实现，完全不同。虽然都按照 W3C 的标准进行了实现。这个也是在日常 Web 开发中需要注意的。")])]),e._v(" "),_("h3",{attrs:{id:"手机相关"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手机相关"}},[e._v("#")]),e._v(" 手机相关")]),e._v(" "),_("h4",{attrs:{id:"手机性能"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#手机性能"}},[e._v("#")]),e._v(" 手机性能")]),e._v(" "),_("p",[e._v("智能手机是这两年发展起来的，其硬件发展的非常迅速，不过无论其硬件发展多块，由于手机的特点，性能和功能是一个平衡点。因为谁也不会用一个性能超好，但是手机非常烫并且只能用1个小时的机器。因此在很多方面，手机上的性能是受到一定限制。Web 这块受这个影响叫 Native 的方面要大很多。因此 Web 这块不是编译型语言，只能动态在手机上运行，再加之 Webkit 核心所占的内存较大，是单进程单线程应用，其受 CPU、内存的影响更大。")]),e._v(" "),_("h4",{attrs:{id:"页面渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面渲染"}},[e._v("#")]),e._v(" 页面渲染")]),e._v(" "),_("p",[e._v("手机 Web 开发在性能上影响较大的是页面渲染问题，而 JS 脚本性能问题不再突出，这个主要归功于在 Android 上使用了 V8 引擎，大大提升了脚本的执行性能。这个和 PC 上的情况完全不同，因为在 PC 上，由于其高性能的硬件，加上强劲的显卡，使得页面渲染的性能非常之高。而在手机上完全不同，有限的硬件性能，加上没有显卡这类专门处理显示的硬件，使得所有页面渲染的工作都由 CPU 来执行。加上 CPU 本身的执行频率有限，就会造成页面渲染缓慢。因此在手机上，会发现当页面出现大量的渲染变化的时候，会出现卡顿现象。比如长列表滑动，页面切换动画等等。这些条件都限制了 HTML5 的功能发挥，因此在涉及到动态变化的时候，更加需要小心处理。")]),e._v(" "),_("h4",{attrs:{id:"键盘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#键盘"}},[e._v("#")]),e._v(" 键盘")]),e._v(" "),_("p",[e._v("键盘也是和 PC 不同之处，在刚刚做手机 Web 开发的时候，会经常忘记的。由于现在的手机使用了软键盘，因此软键盘在某些时候，会成为页面的一部分。键盘是一个非常特别的设备，说特别是因为，不同的手机对于键盘对于 HTML 页面的布局的实现不同。下面通过以下几个方面，阐述手机键盘的特点：")]),e._v(" "),_("ul",[_("li",[e._v("键盘的布局 由于手机界面非常小，因此键盘会占住手机屏幕的一大部分，对于键盘对 HTML 的页面布局影响，如果从来没有做过的人，也许不会注意到，Android 和 iOS 的处理方式，Android 中各个厂商处理的方式又有所不同。iOS 对于从下方推出键盘的时候，如果输入控件在页面推出之后，在键盘的高度的上方的话，则键盘是以一个浮层的方式弹出，并且将那个触发的控件推到键盘的上方。如果那个控件在页面底部，如果推出的键盘会覆盖该控件，系统会将整个页面向上推，直到将那个控件推到键盘上方为止。而android的实现的不同，有部分的 Android 的实现和 iOS 一样，有些 Android 的机型的实现却不同，如果发现触发的 "),_("code",[e._v("<input>")]),e._v(" 控件比键盘的高度底的时候，会自动将整个 "),_("code",[e._v("document")]),e._v(" 的高度增加，增加到这个控件的高度超过键盘的高度为止。由于实现的不同，会造成以下两个问题，\n"),_("ol",[_("li",[e._v("对于某些 JS 模拟弹窗类型，会造成定位问题。一个比较经典的案例，就是 "),_("code",[e._v("toast")]),e._v(" 的提示，"),_("code",[e._v("toast")]),e._v(" 会出现在手机靠底部的位置，通常使用的是 "),_("code",[e._v("fixed")]),e._v(" 的属性，如果按照 iOS 的方式，将整个文档往上推，则不会出现问题，不过如果是将整个 "),_("code",[e._v("document")]),e._v(" 动态增高，就会出现 "),_("code",[e._v("toast")]),e._v(" 出现在键盘的下面，位置不好的话，会正好出现在键盘的中间，由于键盘是在整个浏览器的上层，因此通过 "),_("code",[e._v("z-index")]),e._v(" 的方式是无法将定位的元素覆盖在键盘之上的。解决方案是出现 "),_("code",[e._v("toast")]),e._v(" 的时候，监听所有控件的事件，出现 "),_("code",[e._v("focus")]),e._v(" 的时候，动态计算当前的位置，重新设置。")]),e._v(" "),_("li",[e._v("如果触发的 "),_("code",[e._v("<input>")]),e._v(" 在过于复杂的布局中，某些 Android 机在计算 "),_("code",[e._v("<input>")]),e._v(" 的实际位置的时候，会出现计算错误，特别是通过 CSS 设置过 "),_("code",[e._v("trasnlate")]),e._v(" 等高级特性的时候，曾经碰到一个机器，由于计算的错误，键盘弹起的时候，没有将 "),_("code",[e._v("<input>")]),e._v(" 框拉伸到键盘的上方，完全被键盘盖住，造成输入问题。因此，由于各种比较龊的 Android 的手机存在的时候，"),_("code",[e._v("<input>")]),e._v(" 竟可能不要嵌入过于复杂的层次中，加上比较复杂的 CSS 的位置属性，以免造成计算错误。")])])]),e._v(" "),_("li",[e._v("键盘的类型在手机上有各种键盘类型，比较常用的键盘有全键盘、数字键盘、符号键盘、email 键盘、搜索键盘、金额键盘、电话键盘等。不过由于 Web 的限制，能真正使用的可以说非常的有限，并且在 iOS 和 Android 上的实现不同。而且弹出的键盘类型也不禁相同。这个在下述 "),_("code",[e._v("<input>")]),e._v(" 有详述，这个就不重复说了。总结一句话，键盘的弹起，完全依赖系统和厂商的实现。键盘的类型是无法定制的。")]),e._v(" "),_("li",[e._v("键盘的事件弹起和收起键盘。这个也是非常纠结的问题。在 iOS6之前，当控件获得 "),_("code",[e._v("focus")]),e._v(" 的时候，如果不是用户触发的事件，键盘是不会弹起的，在 iOS6 之后，设置了一个属性可以做到，在 Android 上，只要不是用户触发的事件都无法触发。暂时还没有解决方案。键盘的收起，可以通过 JS 的 "),_("code",[e._v("blur")]),e._v(" 的方式来实现。")])]),e._v(" "),_("h4",{attrs:{id:"页面滚动"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面滚动"}},[e._v("#")]),e._v(" 页面滚动")]),e._v(" "),_("p",[e._v("页面滚动是非常常用的功能，不过在原生手机上，无法支持局部滚动的，不过 iOS5 之后，出现了一个支持局部滚动的 CSS 属性，"),_("code",[e._v("-webkit-overflow-scrolling: touch")]),e._v(" 的属性，不过里面有一定的缺陷，在某些滚动中，会失效，因此建议不使用。")]),e._v(" "),_("p",[e._v("就页面需要说一个非常的规则，因为这个会直接影响 Web 的开发。就是在页面进行惯性滑动的时候（手指松开的滑动），处于性能的考虑，浏览器是会把页面上的渲染进行锁定的状态。也就说，当页面进行滑动的时候，JavaScript 动态修改上面的元素是无效的。直到页面滚动停止，这是个非常特殊的规则。在 iOS 和 Android 上都会存在，在 iOS 上显得突出。在日常评估的时候，一定需要这个特性，这个特性决定了某些滑动中的功能是无法实现的，比如说某个元素到某个位置从 "),_("code",[e._v("static")]),e._v(" 编程 "),_("code",[e._v("fixed")]),e._v(" 的状态，或者进行状态转换。在滑动的时候，即使 JS 动态设置了，页面也不会响应，直到滚动结束。因此在 Native 中很多触摸控制的效果，在 Web 上却无法完美实现。")]),e._v(" "),_("p",[e._v("附注：对于 iOS 的滚动的系统细节实现可以参考此地址："),_("a",{attrs:{href:"http://www.iunbug.com/archives/2012/09/19/411.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("运用Webkit绘制渲染页面原理解决iscroll4闪动的问题"),_("OutboundLink")],1)]),e._v(" "),_("p",[e._v("页面滚动有个其他的问题，就是在 iOS 的系统里，就算网页头了，还能继续往上面拉，有一个力反馈的效果，并且这个效果是无法取消的，看上去很酷和很美。但是在实际项目中，几乎是用不到这个看上去很美的效果，反而会造成很奇怪的感觉，特别是做成 WebApp的时候，一个完整的界面有导航头的时候，还能在往上拉动，极其诡异的感觉对于用户而言。并且这个滚动是系统实现的，没有方法去除，因此判断一个 App 是 Web 还是 Native 的，就可以通过这种方式来判断，拉到顶，再往上拉，如果能网上拉，并且出现的不是上拉刷新，而是一个 iOS 的默认背景，则就是 Web 了，不过反之不一定是 Native，因为 Web 可以直接禁用滚动，通过 CSS3 或 JS来实现模拟滚动，不过这类滚动会造成很严重的性能问题，特别是对整个长页面的滚动。")]),e._v(" "),_("h4",{attrs:{id:"模态窗口"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#模态窗口"}},[e._v("#")]),e._v(" 模态窗口")]),e._v(" "),_("p",[e._v("模态窗口在项目中也是非常常用的一种功能，模态窗口可以通过 JS 的 "),_("code",[e._v("alert")]),e._v("、"),_("code",[e._v("confirm")]),e._v(" 等调用，不过移动模态的窗口，有一个问题，就是在模态窗口的头部，会出现当前 URL 的地址，并且无法去除，这个在交互的眼中，是无法接受的。因此模态窗口，在实际场景中，使用的较少。大家在今后评估项目的时候，需要注意。")]),e._v(" "),_("hr"),e._v(" "),_("p",[e._v("**参考资料： **")]),e._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://caibaojian.com/toutiao/7794",target:"_blank",rel:"noopener noreferrer"}},[e._v("无线Web开发经验谈"),_("OutboundLink")],1)])])])}),[],!1,null,null,null);v.default=i.exports}}]);