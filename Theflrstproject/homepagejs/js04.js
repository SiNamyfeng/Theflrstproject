(window.webpackJsonp = window.webpackJsonp || []).push([[2], [, function (t, e, n) {
    "use strict";

    function r(t, e, n, r, i, o, a, s) {
        var c, u = "function" == typeof t ? t.options : t;
        if (e && (u.render = e, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), o && (u._scopeId = "data-v-" + o), a ? (c = function (t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
        }, u._ssrRegister = c) : i && (c = s ? function () {
            i.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot)
        } : i), c) if (u.functional) {
            u._injectStyles = c;
            var l = u.render;
            u.render = function (t, e) {
                return c.call(e), l(t, e)
            }
        } else {
            var h = u.beforeCreate;
            u.beforeCreate = h ? [].concat(h, c) : [c]
        }
        return {exports: t, options: u}
    }

    n.d(e, "a", (function () {
        return r
    }))
}, function (t, e, n) {
    t.exports = n(407)
}, function (t, e, n) {
    t.exports = n(404)
}, function (t, e, n) {
    t.exports = n(400)
}, function (t, e, n) {
    t.exports = n(465)
}, function (t, e, n) {
    t.exports = n(430)
}, function (t, e, n) {
    t.exports = n(419)
}, function (t, e, n) {
    t.exports = n(423)
}, function (t, e, n) {
    t.exports = n(426)
}, function (t, e, n) {
    t.exports = n(458)
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    n.d(e, "a", (function () {
        return r
    }))
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var r = n(10), i = n.n(r);

    function o(t, e, n) {
        return e in t ? i()(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}) : t[e] = n, t
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var r = n(10), i = n.n(r);

    function o(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), i()(t, r.key, r)
        }
    }

    function a(t, e, n) {
        return e && o(t.prototype, e), n && o(t, n), t
    }
}, function (t, e, n) {
    t.exports = n(416)
}, function (t, e, n) {
    t.exports = n(462)
}, function (t, e, n) {
    "use strict";
    var r = n(41), i = n(108).f, o = n(196), a = n(31), s = n(62), c = n(75), u = n(63), l = function (t) {
        var e = function (e, n, r) {
            if (this instanceof t) {
                switch (arguments.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e);
                    case 2:
                        return new t(e, n)
                }
                return new t(e, n, r)
            }
            return t.apply(this, arguments)
        };
        return e.prototype = t.prototype, e
    };
    t.exports = function (t, e) {
        var n, h, f, d, p, m, v, g, _ = t.target, y = t.global, b = t.stat, w = t.proto,
            x = y ? r : b ? r[_] : (r[_] || {}).prototype, C = y ? a : a[_] || (a[_] = {}), k = C.prototype;
        for (f in e) n = !o(y ? f : _ + (b ? "." : "#") + f, t.forced) && x && u(x, f), p = C[f], n && (m = t.noTargetGet ? (g = i(x, f)) && g.value : x[f]), d = n && m ? m : e[f], n && typeof p == typeof d || (v = t.bind && n ? s(d, r) : t.wrap && n ? l(d) : w && "function" == typeof d ? s(Function.call, d) : d, (t.sham || d && d.sham || p && p.sham) && c(v, "sham", !0), C[f] = v, w && (u(a, h = _ + "Prototype") || c(a, h, {}), a[h][f] = d, t.real && k && !k[f] && c(k, f, d)))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var r = n(150), i = n.n(r), o = n(60), a = n.n(o);

    function s(t) {
        return (s = "function" == typeof a.a && "symbol" == typeof i.a ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof a.a && t.constructor === a.a && t !== a.a.prototype ? "symbol" : typeof t
        })(t)
    }
}, function (t, e, n) {
    t.exports = n(468)
}, function (t, e, n) {
    t.exports = n(507)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return r
    }));
    var r = function () {
        return (r = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }).apply(this, arguments)
    }
}, function (t, e, n) {
    t.exports = n(563)
}, function (t, e, n) {
    t.exports = n(376)
}, function (t, e, n) {
    t.exports = n(501)
}, function (t, e, n) {
    t.exports = n(494)
}, function (t, e, n) {
    t.exports = n(497)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return f
    }));
    var r = n(23), i = n.n(r);
    var o = n(116), a = n.n(o), s = n(156), c = n.n(s), u = n(60), l = n.n(u);
    var h = n(157);

    function f(t, e) {
        return function (t) {
            if (i()(t)) return t
        }(t) || function (t, e) {
            if (void 0 !== l.a && c()(Object(t))) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var s, u = a()(t); !(r = (s = u.next()).done) && (n.push(s.value), !e || n.length !== e); r = !0) ;
                } catch (h) {
                    i = !0, o = h
                } finally {
                    try {
                        r || null == u.return || u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            }
        }(t, e) || Object(h.a)(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return s
    }));
    var r = n(135), i = n.n(r), o = n(153), a = n.n(o);

    function s(t) {
        return (s = a.a ? i.a : function (t) {
            return t.__proto__ || i()(t)
        })(t)
    }
}, function (t, e, n) {
    t.exports = n(413)
}, function (t, e, n) {
    t.exports = n(395)
}, function (t, e, n) {
    t.exports = n(475)
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(59);
    t.exports = function (t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, , , function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    t.exports = n(573)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return d
    }));
    var r = n(23), i = n.n(r), o = n(136);
    var a = n(89), s = n.n(a), c = n(156), u = n.n(c), l = n(60), h = n.n(l);
    var f = n(157);

    function d(t) {
        return function (t) {
            if (i()(t)) return Object(o.a)(t)
        }(t) || function (t) {
            if (void 0 !== h.a && u()(Object(t))) return s()(t)
        }(t) || Object(f.a)(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (e) {
            return !0
        }
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var r = n(152), i = n.n(r), o = n(114);

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = i()(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && Object(o.a)(t, e)
    }
}, function (t, e) {
    t.exports = Launcher
}, function (t, e, n) {
    (function (e) {
        var n = function (t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
            return this
        }() || Function("return this")()
    }).call(this, n(61))
}, function (t, e, n) {
    var r = n(41), i = n(168), o = n(63), a = n(142), s = n(174), c = n(201), u = i("wks"), l = r.Symbol,
        h = c ? l : l && l.withoutSetter || a;
    t.exports = function (t) {
        return o(u, t) || (s && o(l, t) ? u[t] = l[t] : u[t] = h("Symbol." + t)), u[t]
    }
}, , function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var r = n(17), i = n(154);

    function o(t, e) {
        return !e || "object" !== Object(r.a)(e) && "function" != typeof e ? Object(i.a)(t) : e
    }
}, function (t, e, n) {
    (function (e) {
        var n;
        n = function () {
            "use strict";
            var t = function (t) {
                var e = t.id, n = t.viewBox, r = t.content;
                this.id = e, this.viewBox = n, this.content = r
            };

            function n(t, e) {
                return t(e = {exports: {}}, e.exports), e.exports
            }

            t.prototype.stringify = function () {
                return this.content
            }, t.prototype.toString = function () {
                return this.stringify()
            }, t.prototype.destroy = function () {
                var t = this;
                ["id", "viewBox", "content"].forEach((function (e) {
                    return delete t[e]
                }))
            }, "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
            var r = n((function (t, e) {
                t.exports = function () {
                    function t(t) {
                        return t && "object" == typeof t && "[object RegExp]" !== Object.prototype.toString.call(t) && "[object Date]" !== Object.prototype.toString.call(t)
                    }

                    function e(e, n) {
                        var i;
                        return n && !0 === n.clone && t(e) ? r((i = e, Array.isArray(i) ? [] : {}), e, n) : e
                    }

                    function n(n, i, o) {
                        var a = n.slice();
                        return i.forEach((function (i, s) {
                            void 0 === a[s] ? a[s] = e(i, o) : t(i) ? a[s] = r(n[s], i, o) : -1 === n.indexOf(i) && a.push(e(i, o))
                        })), a
                    }

                    function r(i, o, a) {
                        var s = Array.isArray(o), c = (a || {arrayMerge: n}).arrayMerge || n;
                        return s ? Array.isArray(i) ? c(i, o, a) : e(o, a) : function (n, i, o) {
                            var a = {};
                            return t(n) && Object.keys(n).forEach((function (t) {
                                a[t] = e(n[t], o)
                            })), Object.keys(i).forEach((function (s) {
                                t(i[s]) && n[s] ? a[s] = r(n[s], i[s], o) : a[s] = e(i[s], o)
                            })), a
                        }(i, o, a)
                    }

                    return r.all = function (t, e) {
                        if (!Array.isArray(t) || t.length < 2) throw new Error("first argument should be an array with at least two elements");
                        return t.reduce((function (t, n) {
                            return r(t, n, e)
                        }))
                    }, r
                }()
            })), i = n((function (t, e) {
                e.default = {
                    svg: {name: "xmlns", uri: "http://www.w3.org/2000/svg"},
                    xlink: {name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink"}
                }, t.exports = e.default
            })), o = i.svg, a = i.xlink, s = {};
            s[o.name] = o.uri, s[a.name] = a.uri;
            var c = function (t, e) {
                return void 0 === t && (t = ""), "<svg " + function (t) {
                    return Object.keys(t).map((function (e) {
                        return e + '="' + t[e].toString().replace(/"/g, "&quot;") + '"'
                    })).join(" ")
                }(r(s, e || {})) + ">" + t + "</svg>"
            };
            return function (t) {
                function e() {
                    t.apply(this, arguments)
                }

                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var n = {isMounted: {}};
                return n.isMounted.get = function () {
                    return !!this.node
                }, e.createFromExistingNode = function (t) {
                    return new e({id: t.getAttribute("id"), viewBox: t.getAttribute("viewBox"), content: t.outerHTML})
                }, e.prototype.destroy = function () {
                    this.isMounted && this.unmount(), t.prototype.destroy.call(this)
                }, e.prototype.mount = function (t) {
                    if (this.isMounted) return this.node;
                    var e = "string" == typeof t ? document.querySelector(t) : t, n = this.render();
                    return this.node = n, e.appendChild(n), n
                }, e.prototype.render = function () {
                    var t = this.stringify();
                    return function (t) {
                        var e = !!document.importNode,
                            n = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement;
                        return e ? document.importNode(n, !0) : n
                    }(c(t)).childNodes[0]
                }, e.prototype.unmount = function () {
                    this.node.parentNode.removeChild(this.node)
                }, Object.defineProperties(e.prototype, n), e
            }(t)
        }, t.exports = n()
    }).call(this, n(61))
}, function (t, e, n) {
    (function (e) {
        var n;
        n = function () {
            "use strict";

            function t(t, e) {
                return t(e = {exports: {}}, e.exports), e.exports
            }

            "undefined" != typeof window ? window : void 0 !== e || "undefined" != typeof self && self;
            var n = t((function (t, e) {
                t.exports = function () {
                    function t(t) {
                        return t && "object" == typeof t && "[object RegExp]" !== Object.prototype.toString.call(t) && "[object Date]" !== Object.prototype.toString.call(t)
                    }

                    function e(e, n) {
                        var i;
                        return n && !0 === n.clone && t(e) ? r((i = e, Array.isArray(i) ? [] : {}), e, n) : e
                    }

                    function n(n, i, o) {
                        var a = n.slice();
                        return i.forEach((function (i, s) {
                            void 0 === a[s] ? a[s] = e(i, o) : t(i) ? a[s] = r(n[s], i, o) : -1 === n.indexOf(i) && a.push(e(i, o))
                        })), a
                    }

                    function r(i, o, a) {
                        var s = Array.isArray(o), c = (a || {arrayMerge: n}).arrayMerge || n;
                        return s ? Array.isArray(i) ? c(i, o, a) : e(o, a) : function (n, i, o) {
                            var a = {};
                            return t(n) && Object.keys(n).forEach((function (t) {
                                a[t] = e(n[t], o)
                            })), Object.keys(i).forEach((function (s) {
                                t(i[s]) && n[s] ? a[s] = r(n[s], i[s], o) : a[s] = e(i[s], o)
                            })), a
                        }(i, o, a)
                    }

                    return r.all = function (t, e) {
                        if (!Array.isArray(t) || t.length < 2) throw new Error("first argument should be an array with at least two elements");
                        return t.reduce((function (t, n) {
                            return r(t, n, e)
                        }))
                    }, r
                }()
            })), r = t((function (t, e) {
                e.default = {
                    svg: {name: "xmlns", uri: "http://www.w3.org/2000/svg"},
                    xlink: {name: "xmlns:xlink", uri: "http://www.w3.org/1999/xlink"}
                }, t.exports = e.default
            })), i = r.svg, o = r.xlink, a = {};
            a[i.name] = i.uri, a[o.name] = o.uri;
            var s, c = function (t, e) {
                return void 0 === t && (t = ""), "<svg " + function (t) {
                    return Object.keys(t).map((function (e) {
                        return e + '="' + t[e].toString().replace(/"/g, "&quot;") + '"'
                    })).join(" ")
                }(n(a, e || {})) + ">" + t + "</svg>"
            }, u = r.svg, l = r.xlink, h = {
                attrs: (s = {
                    style: ["position: absolute", "width: 0", "height: 0"].join("; "),
                    "aria-hidden": "true"
                }, s[u.name] = u.uri, s[l.name] = l.uri, s)
            }, f = function (t) {
                this.config = n(h, t || {}), this.symbols = []
            };
            f.prototype.add = function (t) {
                var e = this.symbols, n = this.find(t.id);
                return n ? (e[e.indexOf(n)] = t, !1) : (e.push(t), !0)
            }, f.prototype.remove = function (t) {
                var e = this.symbols, n = this.find(t);
                return !!n && (e.splice(e.indexOf(n), 1), n.destroy(), !0)
            }, f.prototype.find = function (t) {
                return this.symbols.filter((function (e) {
                    return e.id === t
                }))[0] || null
            }, f.prototype.has = function (t) {
                return null !== this.find(t)
            }, f.prototype.stringify = function () {
                var t = this.config.attrs, e = this.symbols.map((function (t) {
                    return t.stringify()
                })).join("");
                return c(e, t)
            }, f.prototype.toString = function () {
                return this.stringify()
            }, f.prototype.destroy = function () {
                this.symbols.forEach((function (t) {
                    return t.destroy()
                }))
            };
            var d = function (t) {
                var e = t.id, n = t.viewBox, r = t.content;
                this.id = e, this.viewBox = n, this.content = r
            };
            d.prototype.stringify = function () {
                return this.content
            }, d.prototype.toString = function () {
                return this.stringify()
            }, d.prototype.destroy = function () {
                var t = this;
                ["id", "viewBox", "content"].forEach((function (e) {
                    return delete t[e]
                }))
            };
            var p = function (t) {
                var e = !!document.importNode, n = (new DOMParser).parseFromString(t, "image/svg+xml").documentElement;
                return e ? document.importNode(n, !0) : n
            }, m = function (t) {
                function e() {
                    t.apply(this, arguments)
                }

                t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                var n = {isMounted: {}};
                return n.isMounted.get = function () {
                    return !!this.node
                }, e.createFromExistingNode = function (t) {
                    return new e({id: t.getAttribute("id"), viewBox: t.getAttribute("viewBox"), content: t.outerHTML})
                }, e.prototype.destroy = function () {
                    this.isMounted && this.unmount(), t.prototype.destroy.call(this)
                }, e.prototype.mount = function (t) {
                    if (this.isMounted) return this.node;
                    var e = "string" == typeof t ? document.querySelector(t) : t, n = this.render();
                    return this.node = n, e.appendChild(n), n
                }, e.prototype.render = function () {
                    var t = this.stringify();
                    return p(c(t)).childNodes[0]
                }, e.prototype.unmount = function () {
                    this.node.parentNode.removeChild(this.node)
                }, Object.defineProperties(e.prototype, n), e
            }(d), v = {
                autoConfigure: !0,
                mountTo: "body",
                syncUrlsWithBaseTag: !1,
                listenLocationChangeEvent: !0,
                locationChangeEvent: "locationChange",
                locationChangeAngularEmitter: !1,
                usagesToUpdate: "use[*|href]",
                moveGradientsOutsideSymbol: !1
            }, g = function (t) {
                return Array.prototype.slice.call(t, 0)
            }, _ = function () {
                return /firefox/i.test(navigator.userAgent)
            }, y = function () {
                return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent)
            }, b = function () {
                return /edge/i.test(navigator.userAgent)
            }, w = function (t) {
                return (t || window.location.href).split("#")[0]
            }, x = function (t) {
                angular.module("ng").run(["$rootScope", function (e) {
                    e.$on("$locationChangeSuccess", (function (e, n, r) {
                        var i, o, a;
                        i = t, o = {
                            oldUrl: r,
                            newUrl: n
                        }, (a = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, o), window.dispatchEvent(a)
                    }))
                }])
            }, C = function (t, e) {
                return void 0 === e && (e = "linearGradient, radialGradient, pattern, mask, clipPath"), g(t.querySelectorAll("symbol")).forEach((function (t) {
                    g(t.querySelectorAll(e)).forEach((function (e) {
                        t.parentNode.insertBefore(e, t)
                    }))
                })), t
            }, k = r.xlink.uri, S = /[{}|\\\^\[\]`"<>]/g;

            function I(t) {
                return t.replace(S, (function (t) {
                    return "%" + t[0].charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            var E,
                T = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke", "style"],
                O = T.map((function (t) {
                    return "[" + t + "]"
                })).join(","), A = function (t, e, n, r) {
                    var i = I(n), o = I(r);
                    (function (t, e) {
                        return g(t).reduce((function (t, n) {
                            if (!n.attributes) return t;
                            var r = g(n.attributes), i = e ? r.filter(e) : r;
                            return t.concat(i)
                        }), [])
                    })(t.querySelectorAll(O), (function (t) {
                        var e = t.localName, n = t.value;
                        return -1 !== T.indexOf(e) && -1 !== n.indexOf("url(" + i)
                    })).forEach((function (t) {
                        return t.value = t.value.replace(new RegExp(i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), o)
                    })), function (t, e, n) {
                        g(t).forEach((function (t) {
                            var r = t.getAttribute("xlink:href");
                            if (r && 0 === r.indexOf(e)) {
                                var i = r.replace(e, n);
                                t.setAttributeNS(k, "xlink:href", i)
                            }
                        }))
                    }(e, i, o)
                }, N = "mount", j = "symbol_mount", L = function (t) {
                    function e(e) {
                        var r = this;
                        void 0 === e && (e = {}), t.call(this, n(v, e));
                        var i, o = (i = i || Object.create(null), {
                            on: function (t, e) {
                                (i[t] || (i[t] = [])).push(e)
                            }, off: function (t, e) {
                                i[t] && i[t].splice(i[t].indexOf(e) >>> 0, 1)
                            }, emit: function (t, e) {
                                (i[t] || []).map((function (t) {
                                    t(e)
                                })), (i["*"] || []).map((function (n) {
                                    n(t, e)
                                }))
                            }
                        });
                        this._emitter = o, this.node = null;
                        var a = this.config;
                        if (a.autoConfigure && this._autoConfigure(e), a.syncUrlsWithBaseTag) {
                            var s = document.getElementsByTagName("base")[0].getAttribute("href");
                            o.on(N, (function () {
                                return r.updateUrls("#", s)
                            }))
                        }
                        var c = this._handleLocationChange.bind(this);
                        this._handleLocationChange = c, a.listenLocationChangeEvent && window.addEventListener(a.locationChangeEvent, c), a.locationChangeAngularEmitter && x(a.locationChangeEvent), o.on(N, (function (t) {
                            a.moveGradientsOutsideSymbol && C(t)
                        })), o.on(j, (function (t) {
                            var e;
                            a.moveGradientsOutsideSymbol && C(t.parentNode), (y() || b()) && (e = [], g(t.querySelectorAll("style")).forEach((function (t) {
                                t.textContent += "", e.push(t)
                            })))
                        }))
                    }

                    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
                    var r = {isMounted: {}};
                    return r.isMounted.get = function () {
                        return !!this.node
                    }, e.prototype._autoConfigure = function (t) {
                        var e = this.config;
                        void 0 === t.syncUrlsWithBaseTag && (e.syncUrlsWithBaseTag = void 0 !== document.getElementsByTagName("base")[0]), void 0 === t.locationChangeAngularEmitter && (e.locationChangeAngularEmitter = void 0 !== window.angular), void 0 === t.moveGradientsOutsideSymbol && (e.moveGradientsOutsideSymbol = _())
                    }, e.prototype._handleLocationChange = function (t) {
                        var e = t.detail, n = e.oldUrl, r = e.newUrl;
                        this.updateUrls(n, r)
                    }, e.prototype.add = function (e) {
                        var n = t.prototype.add.call(this, e);
                        return this.isMounted && n && (e.mount(this.node), this._emitter.emit(j, e.node)), n
                    }, e.prototype.attach = function (t) {
                        var e = this, n = this;
                        if (n.isMounted) return n.node;
                        var r = "string" == typeof t ? document.querySelector(t) : t;
                        return n.node = r, this.symbols.forEach((function (t) {
                            t.mount(n.node), e._emitter.emit(j, t.node)
                        })), g(r.querySelectorAll("symbol")).forEach((function (t) {
                            var e = m.createFromExistingNode(t);
                            e.node = t, n.add(e)
                        })), this._emitter.emit(N, r), r
                    }, e.prototype.destroy = function () {
                        var t = this.config, e = this.symbols, n = this._emitter;
                        e.forEach((function (t) {
                            return t.destroy()
                        })), n.off("*"), window.removeEventListener(t.locationChangeEvent, this._handleLocationChange), this.isMounted && this.unmount()
                    }, e.prototype.mount = function (t, e) {
                        if (void 0 === t && (t = this.config.mountTo), void 0 === e && (e = !1), this.isMounted) return this.node;
                        var n = "string" == typeof t ? document.querySelector(t) : t, r = this.render();
                        return this.node = r, e && n.childNodes[0] ? n.insertBefore(r, n.childNodes[0]) : n.appendChild(r), this._emitter.emit(N, r), r
                    }, e.prototype.render = function () {
                        return p(this.stringify())
                    }, e.prototype.unmount = function () {
                        this.node.parentNode.removeChild(this.node)
                    }, e.prototype.updateUrls = function (t, e) {
                        if (!this.isMounted) return !1;
                        var n = document.querySelectorAll(this.config.usagesToUpdate);
                        return A(this.node, n, w(t) + "#", w(e) + "#"), !0
                    }, Object.defineProperties(e.prototype, r), e
                }(f), P = t((function (t) {
                    var e, n, r, i, o;
                    t.exports = (n = [], r = document, i = r.documentElement.doScroll, (o = (i ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState)) || r.addEventListener("DOMContentLoaded", e = function () {
                        for (r.removeEventListener("DOMContentLoaded", e), o = 1; e = n.shift();) e()
                    }), function (t) {
                        o ? setTimeout(t, 0) : n.push(t)
                    })
                }));
            window.__SVG_SPRITE__ ? E = window.__SVG_SPRITE__ : (E = new L({attrs: {id: "__SVG_SPRITE_NODE__"}}), window.__SVG_SPRITE__ = E);
            var M = function () {
                var t = document.getElementById("__SVG_SPRITE_NODE__");
                t ? E.attach(t) : E.mount(document.body, !0)
            };
            return document.body ? M() : P(M), E
        }, t.exports = n()
    }).call(this, n(61))
}, , , , , function (t, e) {
    t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function (t, e, n) {
    var r = n(32), i = n(200), o = n(79), a = n(62), s = n(126), c = n(202), u = function (t, e) {
        this.stopped = t, this.result = e
    };
    t.exports = function (t, e, n) {
        var l, h, f, d, p, m, v, g = n && n.that, _ = !(!n || !n.AS_ENTRIES), y = !(!n || !n.IS_ITERATOR),
            b = !(!n || !n.INTERRUPTED), w = a(e, g, 1 + _ + b), x = function (t) {
                return l && c(l), new u(!0, t)
            }, C = function (t) {
                return _ ? (r(t), b ? w(t[0], t[1], x) : w(t[0], t[1])) : b ? w(t, x) : w(t)
            };
        if (y) l = t; else {
            if ("function" != typeof (h = s(t))) throw TypeError("Target is not iterable");
            if (i(h)) {
                for (f = 0, d = o(t.length); d > f; f++) if ((p = C(t[f])) && p instanceof u) return p;
                return new u(!1)
            }
            l = h.call(t)
        }
        for (m = l.next; !(v = m.call(l)).done;) {
            try {
                p = C(v.value)
            } catch (k) {
                throw c(l), k
            }
            if ("object" == typeof p && p && p instanceof u) return p
        }
        return new u(!1)
    }
}, , function (t, e, n) {
    var r = n(31), i = n(63), o = n(183), a = n(76).f;
    t.exports = function (t) {
        var e = r.Symbol || (r.Symbol = {});
        i(e, t) || a(e, t, {value: o.f(t)})
    }
}, function (t, e, n) {
    var r = n(31);
    t.exports = function (t) {
        return r[t + "Prototype"]
    }
}, , function (t, e, n) {
    t.exports = n(461)
}, function (t, e, n) {
    var r = n(38);
    t.exports = !r((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (t, e) {
    t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function (t, e, n) {
    t.exports = n(435)
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (r) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var r = n(51);
    t.exports = function (t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function () {
                    return t.call(e)
                };
            case 1:
                return function (n) {
                    return t.call(e, n)
                };
            case 2:
                return function (n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function (n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function (t, e) {
        return n.call(t, e)
    }
}, function (t, e, n) {
    var r = n(31), i = n(41), o = function (t) {
        return "function" == typeof t ? t : void 0
    };
    t.exports = function (t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
    }
}, function (t, e, n) {
    t.exports = n(569)
}, function (t, e, n) {
    t.exports = n(622)
}, , , function (t, e, n) {
    t.exports = n(487)
}, , , function (t, e, n) {
    var r = n(109);
    t.exports = function (t) {
        return Object(r(t))
    }
}, , , function (t, e, n) {
    var r = n(58), i = n(76), o = n(95);
    t.exports = r ? function (t, e, n) {
        return i.f(t, e, o(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var r = n(58), i = n(195), o = n(32), a = n(139), s = Object.defineProperty;
    e.f = r ? s : function (t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try {
            return s(t, e, n)
        } catch (r) {
        }
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    var r = n(58), i = n(38), o = n(63), a = Object.defineProperty, s = {}, c = function (t) {
        throw t
    };
    t.exports = function (t, e) {
        if (o(s, t)) return s[t];
        e || (e = {});
        var n = [][t], u = !!o(e, "ACCESSORS") && e.ACCESSORS, l = o(e, 0) ? e[0] : c, h = o(e, 1) ? e[1] : void 0;
        return s[t] = !!n && !i((function () {
            if (u && !r) return !0;
            var t = {length: -1};
            u ? a(t, 1, {enumerable: !0, get: c}) : t[1] = 1, n.call(t, l, h)
        }))
    }
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return a
    }));
    var r = n(22), i = n.n(r);

    function o(t, e, n, r, o, a, s) {
        try {
            var c = t[a](s), u = c.value
        } catch (l) {
            return void n(l)
        }
        c.done ? e(u) : i.a.resolve(u).then(r, o)
    }

    function a(t) {
        return function () {
            var e = this, n = arguments;
            return new i.a((function (r, i) {
                var a = t.apply(e, n);

                function s(t) {
                    o(a, r, i, s, c, "next", t)
                }

                function c(t) {
                    o(a, r, i, s, c, "throw", t)
                }

                s(void 0)
            }))
        }
    }
}, function (t, e, n) {
    var r = n(144), i = Math.min;
    t.exports = function (t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function (t, e, n) {
    var r = n(35), i = n(185);
    t.exports = r ? i : function (t) {
        return Map.prototype.entries.call(t)
    }
}, function (t, e, n) {
    t.exports = n(550)
}, function (t, e, n) {
    var r = n(138), i = n(109);
    t.exports = function (t) {
        return r(i(t))
    }
}, , function (t, e, n) {
    var r = n(175), i = n(76).f, o = n(75), a = n(63), s = n(381), c = n(42)("toStringTag");
    t.exports = function (t, e, n, u) {
        if (t) {
            var l = n ? t : t.prototype;
            a(l, c) || i(l, c, {configurable: !0, value: e}), u && !r && o(l, "toString", s)
        }
    }
}, function (t, e, n) {
    var r, i, o, a = n(384), s = n(41), c = n(59), u = n(75), l = n(63), h = n(169), f = n(141), d = n(125),
        p = s.WeakMap;
    if (a) {
        var m = h.state || (h.state = new p), v = m.get, g = m.has, _ = m.set;
        r = function (t, e) {
            return e.facade = t, _.call(m, t, e), e
        }, i = function (t) {
            return v.call(m, t) || {}
        }, o = function (t) {
            return g.call(m, t)
        }
    } else {
        var y = f("state");
        d[y] = !0, r = function (t, e) {
            return e.facade = t, u(t, y, e), e
        }, i = function (t) {
            return l(t, y) ? t[y] : {}
        }, o = function (t) {
            return l(t, y)
        }
    }
    t.exports = {
        set: r, get: i, has: o, enforce: function (t) {
            return o(t) ? i(t) : r(t, {})
        }, getterFor: function (t) {
            return function (e) {
                var n;
                if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = n(212).charAt, i = n(85), o = n(179), a = i.set, s = i.getterFor("String Iterator");
    o(String, "String", (function (t) {
        a(this, {type: "String Iterator", string: String(t), index: 0})
    }), (function () {
        var t, e = s(this), n = e.string, i = e.index;
        return i >= n.length ? {value: void 0, done: !0} : (t = r(n, i), e.index += t.length, {value: t, done: !1})
    }))
}, function (t, e, n) {
    var r = n(62), i = n(138), o = n(72), a = n(79), s = n(180), c = [].push, u = function (t) {
        var e = 1 == t, n = 2 == t, u = 3 == t, l = 4 == t, h = 6 == t, f = 5 == t || h;
        return function (d, p, m, v) {
            for (var g, _, y = o(d), b = i(y), w = r(p, m, 3), x = a(b.length), C = 0, k = v || s, S = e ? k(d, x) : n ? k(d, 0) : void 0; x > C; C++) if ((f || C in b) && (_ = w(g = b[C], C, y), t)) if (e) S[C] = _; else if (_) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return g;
                case 6:
                    return C;
                case 2:
                    c.call(S, g)
            } else if (l) return !1;
            return h ? -1 : u || l ? l : S
        }
    };
    t.exports = {forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6)}
}, function (t, e, n) {
    t.exports = n(472)
}, function (t, e, n) {
    t.exports = n(558)
}, function (t, e, n) {
    t.exports = n(590)
}, function (t, e, n) {
    t.exports = n(616)
}, , function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return u
    }));
    var r = n(4), i = n.n(r), o = n(6), a = n.n(o), s = n(5), c = n.n(s);

    function u(t, e) {
        if (null == t) return {};
        var n, r, o = function (t, e) {
            if (null == t) return {};
            var n, r, o = {}, a = c()(t);
            for (r = 0; r < a.length; r++) n = a[r], i()(e).call(e, n) >= 0 || (o[n] = t[n]);
            return o
        }(t, e);
        if (a.a) {
            var s = a()(t);
            for (r = 0; r < s.length; r++) n = s[r], i()(e).call(e, n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n])
        }
        return o
    }
}, , function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var r, i = n(32), o = n(171), a = n(173), s = n(125), c = n(199), u = n(167), l = n(141), h = l("IE_PROTO"),
        f = function () {
        }, d = function (t) {
            return "<script>" + t + "<\/script>"
        }, p = function () {
            try {
                r = document.domain && new ActiveXObject("htmlfile")
            } catch (i) {
            }
            var t, e;
            p = r ? function (t) {
                t.write(d("")), t.close();
                var e = t.parentWindow.Object;
                return t = null, e
            }(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(d("document.F=Object")), t.close(), t.F);
            for (var n = a.length; n--;) delete p.prototype[a[n]];
            return p()
        };
    s[h] = !0, t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (f.prototype = i(t), n = new f, f.prototype = null, n[h] = t) : n = p(), void 0 === e ? n : o(n, e)
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(75);
    t.exports = function (t, e, n, i) {
        i && i.enumerable ? t[e] = n : r(t, e, n)
    }
}, function (t, e, n) {
    n(215);
    var r = n(386), i = n(41), o = n(110), a = n(75), s = n(97), c = n(42)("toStringTag");
    for (var u in r) {
        var l = i[u], h = l && l.prototype;
        h && o(h) !== c && a(h, c, u), s[u] = s.Array
    }
}, , , function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return g
    }));
    var r = n(152), i = n.n(r), o = n(189), a = n.n(o), s = n(27), c = n(114), u = n(4), l = n.n(u);
    var h = n(81), f = n.n(h), d = n(19), p = n.n(d);

    function m() {
        if ("undefined" == typeof Reflect || !p.a) return !1;
        if (p.a.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Date.prototype.toString.call(p()(Date, [], (function () {
            }))), !0
        } catch (t) {
            return !1
        }
    }

    function v(t, e, n) {
        return (v = m() ? p.a : function (t, e, n) {
            var r = [null];
            r.push.apply(r, e);
            var i = new (f()(Function).apply(t, r));
            return n && Object(c.a)(i, n.prototype), i
        }).apply(null, arguments)
    }

    function g(t) {
        var e = "function" == typeof a.a ? new a.a : void 0;
        return (g = function (t) {
            if (null === t || (n = t, -1 === l()(r = Function.toString.call(n)).call(r, "[native code]"))) return t;
            var n, r;
            if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== e) {
                if (e.has(t)) return e.get(t);
                e.set(t, o)
            }

            function o() {
                return v(t, arguments, Object(s.a)(this).constructor)
            }

            return o.prototype = i()(t.prototype, {
                constructor: {
                    value: o,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), Object(c.a)(o, t)
        })(t)
    }
}, , , , , , function (t, e, n) {
    var r = n(58), i = n(166), o = n(95), a = n(82), s = n(139), c = n(63), u = n(195),
        l = Object.getOwnPropertyDescriptor;
    e.f = r ? l : function (t, e) {
        if (t = a(t), e = s(e, !0), u) try {
            return l(t, e)
        } catch (n) {
        }
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function (t, e) {
    t.exports = function (t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function (t, e, n) {
    var r = n(175), i = n(124), o = n(42)("toStringTag"), a = "Arguments" == i(function () {
        return arguments
    }());
    t.exports = r ? i : function (t) {
        var e, n, r;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (n) {
            }
        }(e = Object(t), o)) ? n : a ? i(e) : "Object" == (r = i(e)) && "function" == typeof e.callee ? "Arguments" : r
    }
}, , , function (t, e, n) {
    t.exports = n(599)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return o
    }));
    var r = n(153), i = n.n(r);

    function o(t, e) {
        return (o = i.a || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }
}, , function (t, e, n) {
    t.exports = n(568)
}, , , , , function (t, e, n) {
    t.exports = n(672)
}, function (t, e, n) {
    t.exports = n(578)
}, function (t, e, n) {
    var r = n(124);
    t.exports = Array.isArray || function (t) {
        return "Array" == r(t)
    }
}, function (t, e) {
    var n = {}.toString;
    t.exports = function (t) {
        return n.call(t).slice(8, -1)
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var r = n(110), i = n(97), o = n(42)("iterator");
    t.exports = function (t) {
        if (null != t) return t[o] || t["@@iterator"] || i[r(t)]
    }
}, function (t, e) {
    t.exports = function (t, e, n) {
        if (!(t instanceof e)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
        return t
    }
}, function (t, e, n) {
    var r = n(32), i = n(51), o = n(42)("species");
    t.exports = function (t, e) {
        var n, a = r(t).constructor;
        return void 0 === a || null == (n = r(a)[o]) ? e : i(n)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(51), i = function (t) {
        var e, n;
        this.promise = new t((function (t, r) {
            if (void 0 !== e || void 0 !== n) throw TypeError("Bad Promise constructor");
            e = t, n = r
        })), this.resolve = r(e), this.reject = r(n)
    };
    t.exports.f = function (t) {
        return new i(t)
    }
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    "use strict";
    var r = n(38);
    t.exports = function (t, e) {
        var n = [][t];
        return !!n && r((function () {
            n.call(null, e || function () {
                throw 1
            }, 1)
        }))
    }
}, function (t, e, n) {
    "use strict";
    var r = n(139), i = n(76), o = n(95);
    t.exports = function (t, e, n) {
        var a = r(e);
        a in t ? i.f(t, a, o(0, n)) : t[a] = n
    }
}, function (t, e, n) {
    var r = n(38), i = n(42), o = n(148), a = i("species");
    t.exports = function (t) {
        return o >= 51 || !r((function () {
            var e = [];
            return (e.constructor = {})[a] = function () {
                return {foo: 1}
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, , function (t, e, n) {
    t.exports = n(516)
}, function (t, e, n) {
    "use strict";

    function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    n.d(e, "a", (function () {
        return r
    }))
}, , function (t, e, n) {
    var r = n(38), i = n(124), o = "".split;
    t.exports = r((function () {
        return !Object("z").propertyIsEnumerable(0)
    })) ? function (t) {
        return "String" == i(t) ? o.call(t, "") : Object(t)
    } : Object
}, function (t, e, n) {
    var r = n(59);
    t.exports = function (t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof (n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof (n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var r = n(63), i = n(72), o = n(141), a = n(197), s = o("IE_PROTO"), c = Object.prototype;
    t.exports = a ? Object.getPrototypeOf : function (t) {
        return t = i(t), r(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? c : null
    }
}, function (t, e, n) {
    var r = n(168), i = n(142), o = r("keys");
    t.exports = function (t) {
        return o[t] || (o[t] = i(t))
    }
}, function (t, e) {
    var n = 0, r = Math.random();
    t.exports = function (t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
}, function (t, e, n) {
    var r = n(198), i = n(173);
    t.exports = Object.keys || function (t) {
        return r(t, i)
    }
}, function (t, e) {
    var n = Math.ceil, r = Math.floor;
    t.exports = function (t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function (t, e, n) {
    var r = n(144), i = Math.max, o = Math.min;
    t.exports = function (t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function (t, e, n) {
    var r = n(124), i = n(41);
    t.exports = "process" == r(i.process)
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {error: !1, value: t()}
        } catch (e) {
            return {error: !0, value: e}
        }
    }
}, function (t, e, n) {
    var r, i, o = n(41), a = n(178), s = o.process, c = s && s.versions, u = c && c.v8;
    u ? i = (r = u.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), t.exports = i && +i
}, function (t, e) {
    t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
}, function (t, e, n) {
    t.exports = n(433)
}, function (t, e, n) {
    t.exports = n(504)
}, function (t, e, n) {
    t.exports = n(510)
}, function (t, e, n) {
    t.exports = n(513)
}, function (t, e, n) {
    "use strict";

    function r(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    n.d(e, "a", (function () {
        return r
    }))
}, , function (t, e, n) {
    t.exports = n(561)
}, function (t, e, n) {
    "use strict";
    n.d(e, "a", (function () {
        return c
    }));
    var r = n(89), i = n.n(r), o = n(21), a = n.n(o), s = n(136);

    function c(t, e) {
        var n;
        if (t) {
            if ("string" == typeof t) return Object(s.a)(t, e);
            var r = a()(n = Object.prototype.toString.call(t)).call(n, 8, -1);
            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? i()(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Object(s.a)(t, e) : void 0
        }
    }
}, , , , , function (t, e, n) {
    t.exports = n(627)
}, , , , function (t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({1: 2}, 1);
    e.f = o ? function (t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function (t, e, n) {
    var r = n(41), i = n(59), o = r.document, a = i(o) && i(o.createElement);
    t.exports = function (t) {
        return a ? o.createElement(t) : {}
    }
}, function (t, e, n) {
    var r = n(35), i = n(169);
    (t.exports = function (t, e) {
        return i[t] || (i[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.7.0",
        mode: r ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
}, function (t, e, n) {
    var r = n(41), i = n(378), o = r["__core-js_shared__"] || i("__core-js_shared__", {});
    t.exports = o
}, function (t, e, n) {
    var r = n(32), i = n(379);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var t, e = !1, n = {};
        try {
            (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), e = n instanceof Array
        } catch (o) {
        }
        return function (n, o) {
            return r(n), i(o), e ? t.call(n, o) : n.__proto__ = o, n
        }
    }() : void 0)
}, function (t, e, n) {
    var r = n(58), i = n(76), o = n(32), a = n(143);
    t.exports = r ? Object.defineProperties : function (t, e) {
        o(t);
        for (var n, r = a(e), s = r.length, c = 0; s > c;) i.f(t, n = r[c++], e[n]);
        return t
    }
}, function (t, e, n) {
    var r = n(82), i = n(79), o = n(145), a = function (t) {
        return function (e, n, a) {
            var s, c = r(e), u = i(c.length), l = o(a, u);
            if (t && n != n) {
                for (; u > l;) if ((s = c[l++]) != s) return !0
            } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
            return !t && -1
        }
    };
    t.exports = {includes: a(!0), indexOf: a(!1)}
}, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, n) {
    var r = n(38);
    t.exports = !!Object.getOwnPropertySymbols && !r((function () {
        return !String(Symbol())
    }))
}, function (t, e, n) {
    var r = {};
    r[n(42)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
}, function (t, e) {
}, function (t, e, n) {
    var r = n(98);
    t.exports = function (t, e, n) {
        for (var i in e) n && n.unsafe && t[i] ? t[i] = e[i] : r(t, i, e[i], n);
        return t
    }
}, function (t, e, n) {
    var r = n(64);
    t.exports = r("navigator", "userAgent") || ""
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(213), o = n(140), a = n(170), s = n(84), c = n(75), u = n(98), l = n(42), h = n(35), f = n(97),
        d = n(214), p = d.IteratorPrototype, m = d.BUGGY_SAFARI_ITERATORS, v = l("iterator"), g = function () {
            return this
        };
    t.exports = function (t, e, n, l, d, _, y) {
        i(n, e, l);
        var b, w, x, C = function (t) {
                if (t === d && T) return T;
                if (!m && t in I) return I[t];
                switch (t) {
                    case"keys":
                    case"values":
                    case"entries":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this)
                }
            }, k = e + " Iterator", S = !1, I = t.prototype, E = I[v] || I["@@iterator"] || d && I[d], T = !m && E || C(d),
            O = "Array" == e && I.entries || E;
        if (O && (b = o(O.call(new t)), p !== Object.prototype && b.next && (h || o(b) === p || (a ? a(b, p) : "function" != typeof b[v] && c(b, v, g)), s(b, k, !0, !0), h && (f[k] = g))), "values" == d && E && "values" !== E.name && (S = !0, T = function () {
            return E.call(this)
        }), h && !y || I[v] === T || c(I, v, T), f[e] = T, d) if (w = {
            values: C("values"),
            keys: _ ? T : C("keys"),
            entries: C("entries")
        }, y) for (x in w) (m || S || !(x in I)) && u(I, x, w[x]); else r({target: e, proto: !0, forced: m || S}, w);
        return w
    }
}, function (t, e, n) {
    var r = n(59), i = n(123), o = n(42)("species");
    t.exports = function (t, e) {
        var n;
        return i(t) && ("function" != typeof (n = t.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new (void 0 === n ? Array : n)(0 === e ? 0 : e)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(198), i = n(173).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return r(t, i)
    }
}, function (t, e, n) {
    var r = n(42);
    e.f = r
}, function (t, e, n) {
    "use strict";
    n(215);
    var r = n(16), i = n(64), o = n(220), a = n(98), s = n(177), c = n(84), u = n(213), l = n(85), h = n(127),
        f = n(63), d = n(62), p = n(110), m = n(32), v = n(59), g = n(96), _ = n(95), y = n(185), b = n(126), w = n(42),
        x = i("fetch"), C = i("Headers"), k = w("iterator"), S = l.set, I = l.getterFor("URLSearchParams"),
        E = l.getterFor("URLSearchParamsIterator"), T = /\+/g, O = Array(4), A = function (t) {
            return O[t - 1] || (O[t - 1] = RegExp("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        }, N = function (t) {
            try {
                return decodeURIComponent(t)
            } catch (e) {
                return t
            }
        }, j = function (t) {
            var e = t.replace(T, " "), n = 4;
            try {
                return decodeURIComponent(e)
            } catch (r) {
                for (; n;) e = e.replace(A(n--), N);
                return e
            }
        }, L = /[!'()~]|%20/g, P = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
        M = function (t) {
            return P[t]
        }, R = function (t) {
            return encodeURIComponent(t).replace(L, M)
        }, B = function (t, e) {
            if (e) for (var n, r, i = e.split("&"), o = 0; o < i.length;) (n = i[o++]).length && (r = n.split("="), t.push({
                key: j(r.shift()),
                value: j(r.join("="))
            }))
        }, D = function (t) {
            this.entries.length = 0, B(this.entries, t)
        }, U = function (t, e) {
            if (t < e) throw TypeError("Not enough arguments")
        }, $ = u((function (t, e) {
            S(this, {type: "URLSearchParamsIterator", iterator: y(I(t).entries), kind: e})
        }), "Iterator", (function () {
            var t = E(this), e = t.kind, n = t.iterator.next(), r = n.value;
            return n.done || (n.value = "keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value]), n
        })), q = function () {
            h(this, q, "URLSearchParams");
            var t, e, n, r, i, o, a, s, c, u = arguments.length > 0 ? arguments[0] : void 0, l = this, d = [];
            if (S(l, {
                type: "URLSearchParams", entries: d, updateURL: function () {
                }, updateSearchParams: D
            }), void 0 !== u) if (v(u)) if ("function" == typeof (t = b(u))) for (n = (e = t.call(u)).next; !(r = n.call(e)).done;) {
                if ((a = (o = (i = y(m(r.value))).next).call(i)).done || (s = o.call(i)).done || !o.call(i).done) throw TypeError("Expected sequence with length 2");
                d.push({key: a.value + "", value: s.value + ""})
            } else for (c in u) f(u, c) && d.push({
                key: c,
                value: u[c] + ""
            }); else B(d, "string" == typeof u ? "?" === u.charAt(0) ? u.slice(1) : u : u + "")
        }, F = q.prototype;
    s(F, {
        append: function (t, e) {
            U(arguments.length, 2);
            var n = I(this);
            n.entries.push({key: t + "", value: e + ""}), n.updateURL()
        }, delete: function (t) {
            U(arguments.length, 1);
            for (var e = I(this), n = e.entries, r = t + "", i = 0; i < n.length;) n[i].key === r ? n.splice(i, 1) : i++;
            e.updateURL()
        }, get: function (t) {
            U(arguments.length, 1);
            for (var e = I(this).entries, n = t + "", r = 0; r < e.length; r++) if (e[r].key === n) return e[r].value;
            return null
        }, getAll: function (t) {
            U(arguments.length, 1);
            for (var e = I(this).entries, n = t + "", r = [], i = 0; i < e.length; i++) e[i].key === n && r.push(e[i].value);
            return r
        }, has: function (t) {
            U(arguments.length, 1);
            for (var e = I(this).entries, n = t + "", r = 0; r < e.length;) if (e[r++].key === n) return !0;
            return !1
        }, set: function (t, e) {
            U(arguments.length, 1);
            for (var n, r = I(this), i = r.entries, o = !1, a = t + "", s = e + "", c = 0; c < i.length; c++) (n = i[c]).key === a && (o ? i.splice(c--, 1) : (o = !0, n.value = s));
            o || i.push({key: a, value: s}), r.updateURL()
        }, sort: function () {
            var t, e, n, r = I(this), i = r.entries, o = i.slice();
            for (i.length = 0, n = 0; n < o.length; n++) {
                for (t = o[n], e = 0; e < n; e++) if (i[e].key > t.key) {
                    i.splice(e, 0, t);
                    break
                }
                e === n && i.push(t)
            }
            r.updateURL()
        }, forEach: function (t) {
            for (var e, n = I(this).entries, r = d(t, arguments.length > 1 ? arguments[1] : void 0, 3), i = 0; i < n.length;) r((e = n[i++]).value, e.key, this)
        }, keys: function () {
            return new $(this, "keys")
        }, values: function () {
            return new $(this, "values")
        }, entries: function () {
            return new $(this, "entries")
        }
    }, {enumerable: !0}), a(F, k, F.entries), a(F, "toString", (function () {
        for (var t, e = I(this).entries, n = [], r = 0; r < e.length;) t = e[r++], n.push(R(t.key) + "=" + R(t.value));
        return n.join("&")
    }), {enumerable: !0}), c(q, "URLSearchParams"), r({
        global: !0,
        forced: !o
    }, {URLSearchParams: q}), o || "function" != typeof x || "function" != typeof C || r({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (t) {
            var e, n, r, i = [t];
            return arguments.length > 1 && (v(e = arguments[1]) && (n = e.body, "URLSearchParams" === p(n) && ((r = e.headers ? new C(e.headers) : new C).has("content-type") || r.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), e = g(e, {
                body: _(0, String(n)),
                headers: _(0, r)
            }))), i.push(e)), x.apply(this, i)
        }
    }), t.exports = {URLSearchParams: q, getState: I}
}, function (t, e, n) {
    var r = n(32), i = n(126);
    t.exports = function (t) {
        var e = i(t);
        if ("function" != typeof e) throw TypeError(String(t) + " is not iterable");
        return r(e.call(t))
    }
}, function (t, e, n) {
    var r = n(109), i = "[" + n(149) + "]", o = RegExp("^" + i + i + "*"), a = RegExp(i + i + "*$"), s = function (t) {
        return function (e) {
            var n = String(r(e));
            return 1 & t && (n = n.replace(o, "")), 2 & t && (n = n.replace(a, "")), n
        }
    };
    t.exports = {start: s(1), end: s(2), trim: s(3)}
}, , , function (t, e, n) {
    t.exports = n(519)
}, function (t, e, n) {
    t.exports = n(554)
}, function (t, e, n) {
    t.exports = n(632)
}, , , function (t, e, n) {
    "use strict";
    var r = n(16), i = n(140), o = n(170), a = n(96), s = n(75), c = n(95), u = n(52), l = function (t, e) {
        var n = this;
        if (!(n instanceof l)) return new l(t, e);
        o && (n = o(new Error(void 0), i(n))), void 0 !== e && s(n, "message", String(e));
        var r = [];
        return u(t, r.push, {that: r}), s(n, "errors", r), n
    };
    l.prototype = a(Error.prototype, {
        constructor: c(5, l),
        message: c(5, ""),
        name: c(5, "AggregateError")
    }), r({global: !0}, {AggregateError: l})
}, function (t, e, n) {
    var r = n(58), i = n(38), o = n(167);
    t.exports = !r && !i((function () {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (t, e, n) {
    var r = n(38), i = /#|\.prototype\./, o = function (t, e) {
        var n = s[a(t)];
        return n == u || n != c && ("function" == typeof e ? r(e) : !!e)
    }, a = o.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase()
    }, s = o.data = {}, c = o.NATIVE = "N", u = o.POLYFILL = "P";
    t.exports = o
}, function (t, e, n) {
    var r = n(38);
    t.exports = !r((function () {
        function t() {
        }

        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function (t, e, n) {
    var r = n(63), i = n(82), o = n(172).indexOf, a = n(125);
    t.exports = function (t, e) {
        var n, s = i(t), c = 0, u = [];
        for (n in s) !r(a, n) && r(s, n) && u.push(n);
        for (; e.length > c;) r(s, n = e[c++]) && (~o(u, n) || u.push(n));
        return u
    }
}, function (t, e, n) {
    var r = n(64);
    t.exports = r("document", "documentElement")
}, function (t, e, n) {
    var r = n(42), i = n(97), o = r("iterator"), a = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (i.Array === t || a[o] === t)
    }
}, function (t, e, n) {
    var r = n(174);
    t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (t, e, n) {
    var r = n(32);
    t.exports = function (t) {
        var e = t.return;
        if (void 0 !== e) return r(e.call(t)).value
    }
}, function (t, e, n) {
    var r = n(41);
    t.exports = r.Promise
}, function (t, e, n) {
    "use strict";
    var r = n(64), i = n(76), o = n(42), a = n(58), s = o("species");
    t.exports = function (t) {
        var e = r(t), n = i.f;
        a && e && !e[s] && n(e, s, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    var r = n(169), i = Function.toString;
    "function" != typeof r.inspectSource && (r.inspectSource = function (t) {
        return i.call(t)
    }), t.exports = r.inspectSource
}, function (t, e, n) {
    var r = n(42)("iterator"), i = !1;
    try {
        var o = 0, a = {
            next: function () {
                return {done: !!o++}
            }, return: function () {
                i = !0
            }
        };
        a[r] = function () {
            return this
        }, Array.from(a, (function () {
            throw 2
        }))
    } catch (s) {
    }
    t.exports = function (t, e) {
        if (!e && !i) return !1;
        var n = !1;
        try {
            var o = {};
            o[r] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, t(o)
        } catch (s) {
        }
        return n
    }
}, function (t, e, n) {
    var r, i, o, a = n(41), s = n(38), c = n(62), u = n(199), l = n(167), h = n(208), f = n(146), d = a.location,
        p = a.setImmediate, m = a.clearImmediate, v = a.process, g = a.MessageChannel, _ = a.Dispatch, y = 0, b = {},
        w = function (t) {
            if (b.hasOwnProperty(t)) {
                var e = b[t];
                delete b[t], e()
            }
        }, x = function (t) {
            return function () {
                w(t)
            }
        }, C = function (t) {
            w(t.data)
        }, k = function (t) {
            a.postMessage(t + "", d.protocol + "//" + d.host)
        };
    p && m || (p = function (t) {
        for (var e = [], n = 1; arguments.length > n;) e.push(arguments[n++]);
        return b[++y] = function () {
            ("function" == typeof t ? t : Function(t)).apply(void 0, e)
        }, r(y), y
    }, m = function (t) {
        delete b[t]
    }, f ? r = function (t) {
        v.nextTick(x(t))
    } : _ && _.now ? r = function (t) {
        _.now(x(t))
    } : g && !h ? (o = (i = new g).port2, i.port1.onmessage = C, r = c(o.postMessage, o, 1)) : a.addEventListener && "function" == typeof postMessage && !a.importScripts && d && "file:" !== d.protocol && !s(k) ? (r = k, a.addEventListener("message", C, !1)) : r = "onreadystatechange" in l("script") ? function (t) {
        u.appendChild(l("script")).onreadystatechange = function () {
            u.removeChild(this), w(t)
        }
    } : function (t) {
        setTimeout(x(t), 0)
    }), t.exports = {set: p, clear: m}
}, function (t, e, n) {
    var r = n(178);
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
}, function (t, e, n) {
    var r = n(32), i = n(59), o = n(129);
    t.exports = function (t, e) {
        if (r(t), i(e) && e.constructor === t) return e;
        var n = o.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(51), o = n(129), a = n(147), s = n(52);
    r({target: "Promise", stat: !0}, {
        allSettled: function (t) {
            var e = this, n = o.f(e), r = n.resolve, c = n.reject, u = a((function () {
                var n = i(e.resolve), o = [], a = 0, c = 1;
                s(t, (function (t) {
                    var i = a++, s = !1;
                    o.push(void 0), c++, n.call(e, t).then((function (t) {
                        s || (s = !0, o[i] = {status: "fulfilled", value: t}, --c || r(o))
                    }), (function (t) {
                        s || (s = !0, o[i] = {status: "rejected", reason: t}, --c || r(o))
                    }))
                })), --c || r(o)
            }));
            return u.error && c(u.value), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(51), o = n(64), a = n(129), s = n(147), c = n(52);
    r({target: "Promise", stat: !0}, {
        any: function (t) {
            var e = this, n = a.f(e), r = n.resolve, u = n.reject, l = s((function () {
                var n = i(e.resolve), a = [], s = 0, l = 1, h = !1;
                c(t, (function (t) {
                    var i = s++, c = !1;
                    a.push(void 0), l++, n.call(e, t).then((function (t) {
                        c || h || (h = !0, r(t))
                    }), (function (t) {
                        c || h || (c = !0, a[i] = t, --l || u(new (o("AggregateError"))(a, "No one promise resolved")))
                    }))
                })), --l || u(new (o("AggregateError"))(a, "No one promise resolved"))
            }));
            return l.error && u(l.value), n.promise
        }
    })
}, function (t, e, n) {
    var r = n(144), i = n(109), o = function (t) {
        return function (e, n) {
            var o, a, s = String(i(e)), c = r(n), u = s.length;
            return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
        }
    };
    t.exports = {codeAt: o(!1), charAt: o(!0)}
}, function (t, e, n) {
    "use strict";
    var r = n(214).IteratorPrototype, i = n(96), o = n(95), a = n(84), s = n(97), c = function () {
        return this
    };
    t.exports = function (t, e, n) {
        var u = e + " Iterator";
        return t.prototype = i(r, {next: o(1, n)}), a(t, u, !1, !0), s[u] = c, t
    }
}, function (t, e, n) {
    "use strict";
    var r, i, o, a = n(140), s = n(75), c = n(63), u = n(42), l = n(35), h = u("iterator"), f = !1;
    [].keys && ("next" in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : f = !0), null == r && (r = {}), l || c(r, h) || s(r, h, (function () {
        return this
    })), t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: f}
}, function (t, e, n) {
    "use strict";
    var r = n(82), i = n(130), o = n(97), a = n(85), s = n(179), c = a.set, u = a.getterFor("Array Iterator");
    t.exports = s(Array, "Array", (function (t, e) {
        c(this, {type: "Array Iterator", target: r(t), index: 0, kind: e})
    }), (function () {
        var t = u(this), e = t.target, n = t.kind, r = t.index++;
        return !e || r >= e.length ? (t.target = void 0, {value: void 0, done: !0}) : "keys" == n ? {
            value: r,
            done: !1
        } : "values" == n ? {value: e[r], done: !1} : {value: [r, e[r]], done: !1}
    }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(38), o = n(123), a = n(59), s = n(72), c = n(79), u = n(132), l = n(180), h = n(133),
        f = n(42), d = n(148), p = f("isConcatSpreadable"), m = d >= 51 || !i((function () {
            var t = [];
            return t[p] = !1, t.concat()[0] !== t
        })), v = h("concat"), g = function (t) {
            if (!a(t)) return !1;
            var e = t[p];
            return void 0 !== e ? !!e : o(t)
        };
    r({target: "Array", proto: !0, forced: !m || !v}, {
        concat: function (t) {
            var e, n, r, i, o, a = s(this), h = l(a, 0), f = 0;
            for (e = -1, r = arguments.length; e < r; e++) if (g(o = -1 === e ? a : arguments[e])) {
                if (f + (i = c(o.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                for (n = 0; n < i; n++, f++) n in o && u(h, f, o[n])
            } else {
                if (f >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                u(h, f++, o)
            }
            return h.length = f, h
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(58), i = n(38), o = n(143), a = n(181), s = n(166), c = n(72), u = n(138), l = Object.assign,
        h = Object.defineProperty;
    t.exports = !l || i((function () {
        if (r && 1 !== l({b: 1}, l(h({}, "a", {
            enumerable: !0, get: function () {
                h(this, "b", {value: 3, enumerable: !1})
            }
        }), {b: 2})).b) return !0;
        var t = {}, e = {}, n = Symbol();
        return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (t) {
            e[t] = t
        })), 7 != l({}, t)[n] || "abcdefghijklmnopqrst" != o(l({}, e)).join("")
    })) ? function (t, e) {
        for (var n = c(t), i = arguments.length, l = 1, h = a.f, f = s.f; i > l;) for (var d, p = u(arguments[l++]), m = h ? o(p).concat(h(p)) : o(p), v = m.length, g = 0; v > g;) d = m[g++], r && !f.call(p, d) || (n[d] = p[d]);
        return n
    } : l
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(41), o = n(64), a = n(35), s = n(58), c = n(174), u = n(201), l = n(38), h = n(63), f = n(123),
        d = n(59), p = n(32), m = n(72), v = n(82), g = n(139), _ = n(95), y = n(96), b = n(143), w = n(182),
        x = n(432), C = n(181), k = n(108), S = n(76), I = n(166), E = n(75), T = n(98), O = n(168), A = n(141),
        N = n(125), j = n(142), L = n(42), P = n(183), M = n(54), R = n(84), B = n(85), D = n(87).forEach,
        U = A("hidden"), $ = L("toPrimitive"), q = B.set, F = B.getterFor("Symbol"), X = Object.prototype, z = i.Symbol,
        H = o("JSON", "stringify"), G = k.f, W = S.f, V = x.f, J = I.f, K = O("symbols"), Q = O("op-symbols"),
        Y = O("string-to-symbol-registry"), Z = O("symbol-to-string-registry"), tt = O("wks"), et = i.QObject,
        nt = !et || !et.prototype || !et.prototype.findChild, rt = s && l((function () {
            return 7 != y(W({}, "a", {
                get: function () {
                    return W(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (t, e, n) {
            var r = G(X, e);
            r && delete X[e], W(t, e, n), r && t !== X && W(X, e, r)
        } : W, it = function (t, e) {
            var n = K[t] = y(z.prototype);
            return q(n, {type: "Symbol", tag: t, description: e}), s || (n.description = e), n
        }, ot = u ? function (t) {
            return "symbol" == typeof t
        } : function (t) {
            return Object(t) instanceof z
        }, at = function (t, e, n) {
            t === X && at(Q, e, n), p(t);
            var r = g(e, !0);
            return p(n), h(K, r) ? (n.enumerable ? (h(t, U) && t[U][r] && (t[U][r] = !1), n = y(n, {enumerable: _(0, !1)})) : (h(t, U) || W(t, U, _(1, {})), t[U][r] = !0), rt(t, r, n)) : W(t, r, n)
        }, st = function (t, e) {
            p(t);
            var n = v(e), r = b(n).concat(ht(n));
            return D(r, (function (e) {
                s && !ct.call(n, e) || at(t, e, n[e])
            })), t
        }, ct = function (t) {
            var e = g(t, !0), n = J.call(this, e);
            return !(this === X && h(K, e) && !h(Q, e)) && (!(n || !h(this, e) || !h(K, e) || h(this, U) && this[U][e]) || n)
        }, ut = function (t, e) {
            var n = v(t), r = g(e, !0);
            if (n !== X || !h(K, r) || h(Q, r)) {
                var i = G(n, r);
                return !i || !h(K, r) || h(n, U) && n[U][r] || (i.enumerable = !0), i
            }
        }, lt = function (t) {
            var e = V(v(t)), n = [];
            return D(e, (function (t) {
                h(K, t) || h(N, t) || n.push(t)
            })), n
        }, ht = function (t) {
            var e = t === X, n = V(e ? Q : v(t)), r = [];
            return D(n, (function (t) {
                !h(K, t) || e && !h(X, t) || r.push(K[t])
            })), r
        };
    (c || (T((z = function () {
        if (this instanceof z) throw TypeError("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0, e = j(t),
            n = function (t) {
                this === X && n.call(Q, t), h(this, U) && h(this[U], e) && (this[U][e] = !1), rt(this, e, _(1, t))
            };
        return s && nt && rt(X, e, {configurable: !0, set: n}), it(e, t)
    }).prototype, "toString", (function () {
        return F(this).tag
    })), T(z, "withoutSetter", (function (t) {
        return it(j(t), t)
    })), I.f = ct, S.f = at, k.f = ut, w.f = x.f = lt, C.f = ht, P.f = function (t) {
        return it(L(t), t)
    }, s && (W(z.prototype, "description", {
        configurable: !0, get: function () {
            return F(this).description
        }
    }), a || T(X, "propertyIsEnumerable", ct, {unsafe: !0}))), r({
        global: !0,
        wrap: !0,
        forced: !c,
        sham: !c
    }, {Symbol: z}), D(b(tt), (function (t) {
        M(t)
    })), r({target: "Symbol", stat: !0, forced: !c}, {
        for: function (t) {
            var e = String(t);
            if (h(Y, e)) return Y[e];
            var n = z(e);
            return Y[e] = n, Z[n] = e, n
        }, keyFor: function (t) {
            if (!ot(t)) throw TypeError(t + " is not a symbol");
            if (h(Z, t)) return Z[t]
        }, useSetter: function () {
            nt = !0
        }, useSimple: function () {
            nt = !1
        }
    }), r({target: "Object", stat: !0, forced: !c, sham: !s}, {
        create: function (t, e) {
            return void 0 === e ? y(t) : st(y(t), e)
        }, defineProperty: at, defineProperties: st, getOwnPropertyDescriptor: ut
    }), r({target: "Object", stat: !0, forced: !c}, {
        getOwnPropertyNames: lt,
        getOwnPropertySymbols: ht
    }), r({
        target: "Object", stat: !0, forced: l((function () {
            C.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            return C.f(m(t))
        }
    }), H) && r({
        target: "JSON", stat: !0, forced: !c || l((function () {
            var t = z();
            return "[null]" != H([t]) || "{}" != H({a: t}) || "{}" != H(Object(t))
        }))
    }, {
        stringify: function (t, e, n) {
            for (var r, i = [t], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (r = e, (d(e) || void 0 !== t) && !ot(t)) return f(e) || (e = function (t, e) {
                if ("function" == typeof r && (e = r.call(this, t, e)), !ot(e)) return e
            }), i[1] = e, H.apply(null, i)
        }
    });
    z.prototype[$] || E(z.prototype, $, z.prototype.valueOf), R(z, "Symbol"), N[U] = !0
}, function (t, e, n) {
    n(54)("iterator")
}, function (t, e, n) {
    var r = n(38), i = n(42), o = n(35), a = i("iterator");
    t.exports = !r((function () {
        var t = new URL("b?a=1&b=2&c=3", ""), e = t.searchParams, n = "";
        return t.pathname = "c%20d", e.forEach((function (t, r) {
            e.delete("b"), n += r + t
        })), o && !t.toJSON || !e.sort || "" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[a] || "a" !== new URL("").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("").host || "" !== new URL("").hash || "" !== n || "x" !== new URL("", void 0).host    }))
}, function (t, e, n) {
    t.exports = n(480)
}, function (t, e, n) {
    "use strict";
    var r = n(62), i = n(72), o = n(484), a = n(200), s = n(79), c = n(132), u = n(126);
    t.exports = function (t) {
        var e, n, l, h, f, d, p = i(t), m = "function" == typeof this ? this : Array, v = arguments.length,
            g = v > 1 ? arguments[1] : void 0, _ = void 0 !== g, y = u(p), b = 0;
        if (_ && (g = r(g, v > 2 ? arguments[2] : void 0, 2)), null == y || m == Array && a(y)) for (n = new m(e = s(p.length)); e > b; b++) d = _ ? g(p[b], b) : p[b], c(n, b, d); else for (f = (h = y.call(p)).next, n = new m; !(l = f.call(h)).done; b++) d = _ ? o(h, g, [l.value, b], !0) : l.value, c(n, b, d);
        return n.length = b, n
    }
}, function (t, e, n) {
    var r = n(493);
    t.exports = function (t) {
        if (r(t)) throw TypeError("The method doesn't accept regular expressions");
        return t
    }
}, function (t, e, n) {
    var r = n(42)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[r] = !1, "/./"[t](e)
            } catch (i) {
            }
        }
        return !1
    }
}, function (t, e, n) {
    var r = n(41), i = n(186).trim, o = n(149), a = r.parseInt, s = /^[+-]?0[Xx]/,
        c = 8 !== a(o + "08") || 22 !== a(o + "0x16");
    t.exports = c ? function (t, e) {
        var n = i(String(t));
        return a(n, e >>> 0 || (s.test(n) ? 16 : 10))
    } : a
}, function (t, e, n) {
    var r = n(16), i = n(41), o = n(178), a = [].slice, s = function (t) {
        return function (e, n) {
            var r = arguments.length > 2, i = r ? a.call(arguments, 2) : void 0;
            return t(r ? function () {
                ("function" == typeof e ? e : Function(e)).apply(this, i)
            } : e, n)
        }
    };
    r({global: !0, bind: !0, forced: /MSIE .\./.test(o)}, {setTimeout: s(i.setTimeout), setInterval: s(i.setInterval)})
}, function (t, e, n) {
    "use strict";
    var r = n(51), i = n(59), o = [].slice, a = {}, s = function (t, e, n) {
        if (!(e in a)) {
            for (var r = [], i = 0; i < e; i++) r[i] = "a[" + i + "]";
            a[e] = Function("C,a", "return new C(" + r.join(",") + ")")
        }
        return a[e](t, n)
    };
    t.exports = Function.bind || function (t) {
        var e = r(this), n = o.call(arguments, 1), a = function () {
            var r = n.concat(o.call(arguments));
            return this instanceof a ? s(e, r.length, r) : e.apply(t, r)
        };
        return i(e.prototype) && (a.prototype = e.prototype), a
    }
}, function (t, e, n) {
    var r = n(125), i = n(59), o = n(63), a = n(76).f, s = n(142), c = n(523), u = s("meta"), l = 0,
        h = Object.isExtensible || function () {
            return !0
        }, f = function (t) {
            a(t, u, {value: {objectID: "O" + ++l, weakData: {}}})
        }, d = t.exports = {
            REQUIRED: !1, fastKey: function (t, e) {
                if (!i(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                if (!o(t, u)) {
                    if (!h(t)) return "F";
                    if (!e) return "E";
                    f(t)
                }
                return t[u].objectID
            }, getWeakData: function (t, e) {
                if (!o(t, u)) {
                    if (!h(t)) return !0;
                    if (!e) return !1;
                    f(t)
                }
                return t[u].weakData
            }, onFreeze: function (t) {
                return c && d.REQUIRED && h(t) && !o(t, u) && f(t), t
            }
        };
    r[u] = !0
}, function (t, e, n) {
    "use strict";
    var r = n(32);
    t.exports = function (t, e) {
        var n, i = r(this), o = arguments.length > 2 ? arguments[2] : void 0;
        if ("function" != typeof e && "function" != typeof o) throw TypeError("At least one callback required");
        return i.has(t) ? (n = i.get(t), "function" == typeof e && (n = e(n), i.set(t, n))) : "function" == typeof o && (n = o(), i.set(t, n)), n
    }
}, function (t, e) {
    var n, r, i = t.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (t) {
            r = a
        }
    }();
    var c, u = [], l = !1, h = -1;

    function f() {
        l && c && (l = !1, c.length ? u = c.concat(u) : h = -1, u.length && d())
    }

    function d() {
        if (!l) {
            var t = s(f);
            l = !0;
            for (var e = u.length; e;) {
                for (c = u, u = []; ++h < e;) c && c[h].run();
                h = -1, e = u.length
            }
            c = null, l = !1, function (t) {
                if (r === clearTimeout) return clearTimeout(t);
                if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
                try {
                    r(t)
                } catch (e) {
                    try {
                        return r.call(null, t)
                    } catch (e) {
                        return r.call(this, t)
                    }
                }
            }(t)
        }
    }

    function p(t, e) {
        this.fun = t, this.array = e
    }

    function m() {
    }

    i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        u.push(new p(t, e)), 1 !== u.length || l || s(d)
    }, p.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function (t) {
        return []
    }, i.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function () {
        return "/"
    }, i.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function () {
        return 0
    }
}, , function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, , , , , , , , function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, , , , , , function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, , , , , function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, function (t, e, n) {
}, , , , , , , , , , , , function (t, e, n) {
    t.exports = n(605)
}, , , , , , , , function (t, e, n) {
    t.exports = n(716)
}, , , , , , , , , , , function (t, e, n) {
    var r = n(377);
    n(387), n(388), n(389), n(390), t.exports = r
}, function (t, e, n) {
    n(194), n(176), n(380), n(210), n(211), n(385), n(86), n(99);
    var r = n(31);
    t.exports = r.Promise
}, function (t, e, n) {
    var r = n(41), i = n(75);
    t.exports = function (t, e) {
        try {
            i(r, t, e)
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function (t, e, n) {
    var r = n(59);
    t.exports = function (t) {
        if (!r(t) && null !== t) throw TypeError("Can't set " + String(t) + " as a prototype");
        return t
    }
}, function (t, e, n) {
    "use strict";
    var r, i, o, a, s = n(16), c = n(35), u = n(41), l = n(64), h = n(203), f = n(98), d = n(177), p = n(84),
        m = n(204), v = n(59), g = n(51), _ = n(127), y = n(205), b = n(52), w = n(206), x = n(128), C = n(207).set,
        k = n(382), S = n(209), I = n(383), E = n(129), T = n(147), O = n(85), A = n(196), N = n(42), j = n(146),
        L = n(148), P = N("species"), M = "Promise", R = O.get, B = O.set, D = O.getterFor(M), U = h, $ = u.TypeError,
        q = u.document, F = u.process, X = l("fetch"), z = E.f, H = z, G = !!(q && q.createEvent && u.dispatchEvent),
        W = "function" == typeof PromiseRejectionEvent, V = A(M, (function () {
            if (!(y(U) !== String(U))) {
                if (66 === L) return !0;
                if (!j && !W) return !0
            }
            if (c && !U.prototype.finally) return !0;
            if (L >= 51 && /native code/.test(U)) return !1;
            var t = U.resolve(1), e = function (t) {
                t((function () {
                }), (function () {
                }))
            };
            return (t.constructor = {})[P] = e, !(t.then((function () {
            })) instanceof e)
        })), J = V || !w((function (t) {
            U.all(t).catch((function () {
            }))
        })), K = function (t) {
            var e;
            return !(!v(t) || "function" != typeof (e = t.then)) && e
        }, Q = function (t, e) {
            if (!t.notified) {
                t.notified = !0;
                var n = t.reactions;
                k((function () {
                    for (var r = t.value, i = 1 == t.state, o = 0; n.length > o;) {
                        var a, s, c, u = n[o++], l = i ? u.ok : u.fail, h = u.resolve, f = u.reject, d = u.domain;
                        try {
                            l ? (i || (2 === t.rejection && et(t), t.rejection = 1), !0 === l ? a = r : (d && d.enter(), a = l(r), d && (d.exit(), c = !0)), a === u.promise ? f($("Promise-chain cycle")) : (s = K(a)) ? s.call(a, h, f) : h(a)) : f(r)
                        } catch (p) {
                            d && !c && d.exit(), f(p)
                        }
                    }
                    t.reactions = [], t.notified = !1, e && !t.rejection && Z(t)
                }))
            }
        }, Y = function (t, e, n) {
            var r, i;
            G ? ((r = q.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), u.dispatchEvent(r)) : r = {
                promise: e,
                reason: n
            }, !W && (i = u["on" + t]) ? i(r) : "unhandledrejection" === t && I("Unhandled promise rejection", n)
        }, Z = function (t) {
            C.call(u, (function () {
                var e, n = t.facade, r = t.value;
                if (tt(t) && (e = T((function () {
                    j ? F.emit("unhandledRejection", r, n) : Y("unhandledrejection", n, r)
                })), t.rejection = j || tt(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, tt = function (t) {
            return 1 !== t.rejection && !t.parent
        }, et = function (t) {
            C.call(u, (function () {
                var e = t.facade;
                j ? F.emit("rejectionHandled", e) : Y("rejectionhandled", e, t.value)
            }))
        }, nt = function (t, e, n) {
            return function (r) {
                t(e, r, n)
            }
        }, rt = function (t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, Q(t, !0))
        }, it = function (t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if(t===n)throw q("Promise can't be resolved itself");
                    var r = K(e);
                    r ? k((function () {
                        var n = {done: !1};
                        try {
                            r.call(e, nt(it, n, t), nt(rt, n, t))
                        } catch (i) {
                            rt(n, i, t)
                        }
                    })) : (t.value = e, t.state = 1, Q(t, !1))
                } catch (i) {
                    rt({done: !1}, i, t)
                }
            }
        };
    V && (U = function (t) {
        _(this, U, M), g(t), r.call(this);
        var e = R(this);
        try {
            t(nt(it, e), nt(rt, e))
        } catch (n) {
            rt(e, n)
        }
    }, (r = function (t) {
        B(this, {type: M, done: !1, notified: !1, parent: !1, reactions: [], rejection: !1, state: 0, value: void 0})
    }).prototype = d(U.prototype, {
        then: function (t, e) {
            var n = D(this), r = z(x(this, U));
            return r.ok = "function" != typeof t || t, r.fail = "function" == typeof e && e, r.domain = j ? F.domain : void 0, n.parent = !0, n.reactions.push(r), 0 != n.state && Q(n, !1), r.promise
        }, catch: function (t) {
            return this.then(void 0, t)
        }
    }), i = function () {
        var t = new r, e = R(t);
        this.promise = t, this.resolve = nt(it, e), this.reject = nt(rt, e)
    }, E.f = z = function (t) {
        return t === U || t === o ? new i(t) : H(t)
    }, c || "function" != typeof h || (a = h.prototype.then, f(h.prototype, "then", (function (t, e) {
        var n = this;
        return new U((function (t, e) {
            a.call(n, t, e)
        })).then(t, e)
    }), {unsafe: !0}), "function" == typeof X && s({global: !0, enumerable: !0, forced: !0}, {
        fetch: function (t) {
            return S(U, X.apply(u, arguments))
        }
    }))), s({global: !0, wrap: !0, forced: V}, {Promise: U}), p(U, M, !1, !0), m(M), o = l(M), s({
        target: M,
        stat: !0,
        forced: V
    }, {
        reject: function (t) {
            var e = z(this);
            return e.reject.call(void 0, t), e.promise
        }
    }), s({target: M, stat: !0, forced: c || V}, {
        resolve: function (t) {
            return S(c && this === o ? U : this, t)
        }
    }), s({target: M, stat: !0, forced: J}, {
        all: function (t) {
            var e = this, n = z(e), r = n.resolve, i = n.reject, o = T((function () {
                var n = g(e.resolve), o = [], a = 0, s = 1;
                b(t, (function (t) {
                    var c = a++, u = !1;
                    o.push(void 0), s++, n.call(e, t).then((function (t) {
                        u || (u = !0, o[c] = t, --s || r(o))
                    }), i)
                })), --s || r(o)
            }));
            return o.error && i(o.value), n.promise
        }, race: function (t) {
            var e = this, n = z(e), r = n.reject, i = T((function () {
                var i = g(e.resolve);
                b(t, (function (t) {
                    i.call(e, t).then(n.resolve, r)
                }))
            }));
            return i.error && r(i.value), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(175), i = n(110);
    t.exports = r ? {}.toString : function () {
        return "[object " + i(this) + "]"
    }
}, function (t, e, n) {
    var r, i, o, a, s, c, u, l, h = n(41), f = n(108).f, d = n(207).set, p = n(208), m = n(146),
        v = h.MutationObserver || h.WebKitMutationObserver, g = h.document, _ = h.process, y = h.Promise,
        b = f(h, "queueMicrotask"), w = b && b.value;
    w || (r = function () {
        var t, e;
        for (m && (t = _.domain) && t.exit(); i;) {
            e = i.fn, i = i.next;
            try {
                e()
            } catch (n) {
                throw i ? a() : o = void 0, n
            }
        }
        o = void 0, t && t.enter()
    }, !p && !m && v && g ? (s = !0, c = g.createTextNode(""), new v(r).observe(c, {characterData: !0}), a = function () {
        c.data = s = !s
    }) : y && y.resolve ? (u = y.resolve(void 0), l = u.then, a = function () {
        l.call(u, r)
    }) : a = m ? function () {
        _.nextTick(r)
    } : function () {
        d.call(h, r)
    }), t.exports = w || function (t) {
        var e = {fn: t, next: void 0};
        o && (o.next = e), i || (i = e, a()), o = e
    }
}, function (t, e, n) {
    var r = n(41);
    t.exports = function (t, e) {
        var n = r.console;
        n && n.error && (1 === arguments.length ? n.error(t) : n.error(t, e))
    }
}, function (t, e, n) {
    var r = n(41), i = n(205), o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i(o))
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(203), a = n(38), s = n(64), c = n(128), u = n(209), l = n(98);
    r({
        target: "Promise", proto: !0, real: !0, forced: !!o && a((function () {
            o.prototype.finally.call({
                then: function () {
                }
            }, (function () {
            }))
        }))
    }, {
        finally: function (t) {
            var e = c(this, s("Promise")), n = "function" == typeof t;
            return this.then(n ? function (n) {
                return u(e, t()).then((function () {
                    return n
                }))
            } : t, n ? function (n) {
                return u(e, t()).then((function () {
                    throw n
                }))
            } : t)
        }
    }), i || "function" != typeof o || o.prototype.finally || l(o.prototype, "finally", s("Promise").prototype.finally)
}, function (t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (t, e, n) {
    n(194)
}, function (t, e, n) {
    n(210)
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(129), o = n(147);
    r({target: "Promise", stat: !0}, {
        try: function (t) {
            var e = i.f(this), n = o(t);
            return (n.error ? e.reject : e.resolve)(n.value), e.promise
        }
    })
}, function (t, e, n) {
    n(211)
}, , , , , function (t, e, n) {
    var r = n(396);
    t.exports = r
}, function (t, e, n) {
    var r = n(397), i = Array.prototype;
    t.exports = function (t) {
        var e = t.reduce;
        return t === i || t instanceof Array && e === i.reduce ? r : e
    }
}, function (t, e, n) {
    n(398);
    var r = n(55);
    t.exports = r("Array").reduce
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(399).left, o = n(131), a = n(77), s = n(148), c = n(146), u = o("reduce"),
        l = a("reduce", {1: 0});
    r({target: "Array", proto: !0, forced: !u || !l || !c && s > 79 && s < 83}, {
        reduce: function (t) {
            return i(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(51), i = n(72), o = n(138), a = n(79), s = function (t) {
        return function (e, n, s, c) {
            r(n);
            var u = i(e), l = o(u), h = a(u.length), f = t ? h - 1 : 0, d = t ? -1 : 1;
            if (s < 2) for (; ;) {
                if (f in l) {
                    c = l[f], f += d;
                    break
                }
                if (f += d, t ? f < 0 : h <= f) throw TypeError("Reduce of empty array with no initial value")
            }
            for (; t ? f >= 0 : h > f; f += d) f in l && (c = n(c, l[f], f, u));
            return c
        }
    };
    t.exports = {left: s(!1), right: s(!0)}
}, function (t, e, n) {
    var r = n(401);
    t.exports = r
}, function (t, e, n) {
    var r = n(402), i = Array.prototype;
    t.exports = function (t) {
        var e = t.indexOf;
        return t === i || t instanceof Array && e === i.indexOf ? r : e
    }
}, function (t, e, n) {
    n(403);
    var r = n(55);
    t.exports = r("Array").indexOf
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(172).indexOf, o = n(131), a = n(77), s = [].indexOf, c = !!s && 1 / [1].indexOf(1, -0) < 0,
        u = o("indexOf"), l = a("indexOf", {ACCESSORS: !0, 1: 0});
    r({target: "Array", proto: !0, forced: c || !u || !l}, {
        indexOf: function (t) {
            return c ? s.apply(this, arguments) || 0 : i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(405);
    t.exports = r
}, function (t, e, n) {
    var r = n(406), i = Array.prototype;
    t.exports = function (t) {
        var e = t.concat;
        return t === i || t instanceof Array && e === i.concat ? r : e
    }
}, function (t, e, n) {
    n(216);
    var r = n(55);
    t.exports = r("Array").concat
}, function (t, e, n) {
    var r = n(408);
    t.exports = r
}, function (t, e, n) {
    n(99);
    var r = n(409), i = n(110), o = Array.prototype, a = {DOMTokenList: !0, NodeList: !0};
    t.exports = function (t) {
        var e = t.forEach;
        return t === o || t instanceof Array && e === o.forEach || a.hasOwnProperty(i(t)) ? r : e
    }
}, function (t, e, n) {
    var r = n(410);
    t.exports = r
}, function (t, e, n) {
    n(411);
    var r = n(55);
    t.exports = r("Array").forEach
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(412);
    r({target: "Array", proto: !0, forced: [].forEach != i}, {forEach: i})
}, function (t, e, n) {
    "use strict";
    var r = n(87).forEach, i = n(131), o = n(77), a = i("forEach"), s = o("forEach");
    t.exports = a && s ? [].forEach : function (t) {
        return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function (t, e, n) {
    var r = n(414);
    t.exports = r
}, function (t, e, n) {
    n(415);
    var r = n(31);
    t.exports = r.Object.assign
}, function (t, e, n) {
    var r = n(16), i = n(217);
    r({target: "Object", stat: !0, forced: Object.assign !== i}, {assign: i})
}, function (t, e, n) {
    var r = n(417);
    t.exports = r
}, function (t, e, n) {
    n(418);
    var r = n(31).Object, i = t.exports = function (t, e) {
        return r.defineProperties(t, e)
    };
    r.defineProperties.sham && (i.sham = !0)
}, function (t, e, n) {
    var r = n(16), i = n(58);
    r({target: "Object", stat: !0, forced: !i, sham: !i}, {defineProperties: n(171)})
}, function (t, e, n) {
    var r = n(420);
    t.exports = r
}, function (t, e, n) {
    n(421);
    var r = n(31);
    t.exports = r.Object.getOwnPropertyDescriptors
}, function (t, e, n) {
    var r = n(16), i = n(58), o = n(422), a = n(82), s = n(108), c = n(132);
    r({target: "Object", stat: !0, sham: !i}, {
        getOwnPropertyDescriptors: function (t) {
            for (var e, n, r = a(t), i = s.f, u = o(r), l = {}, h = 0; u.length > h;) void 0 !== (n = i(r, e = u[h++])) && c(l, e, n);
            return l
        }
    })
}, function (t, e, n) {
    var r = n(64), i = n(182), o = n(181), a = n(32);
    t.exports = r("Reflect", "ownKeys") || function (t) {
        var e = i.f(a(t)), n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function (t, e, n) {
    var r = n(424);
    t.exports = r
}, function (t, e, n) {
    n(425);
    var r = n(31).Object, i = t.exports = function (t, e) {
        return r.getOwnPropertyDescriptor(t, e)
    };
    r.getOwnPropertyDescriptor.sham && (i.sham = !0)
}, function (t, e, n) {
    var r = n(16), i = n(38), o = n(82), a = n(108).f, s = n(58), c = i((function () {
        a(1)
    }));
    r({target: "Object", stat: !0, forced: !s || c, sham: !s}, {
        getOwnPropertyDescriptor: function (t, e) {
            return a(o(t), e)
        }
    })
}, function (t, e, n) {
    var r = n(427);
    t.exports = r
}, function (t, e, n) {
    var r = n(428), i = Array.prototype;
    t.exports = function (t) {
        var e = t.filter;
        return t === i || t instanceof Array && e === i.filter ? r : e
    }
}, function (t, e, n) {
    n(429);
    var r = n(55);
    t.exports = r("Array").filter
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(87).filter, o = n(133), a = n(77), s = o("filter"), c = a("filter");
    r({target: "Array", proto: !0, forced: !s || !c}, {
        filter: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(431);
    t.exports = r
}, function (t, e, n) {
    n(218);
    var r = n(31);
    t.exports = r.Object.getOwnPropertySymbols
}, function (t, e, n) {
    var r = n(82), i = n(182).f, o = {}.toString,
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return a && "[object Window]" == o.call(t) ? function (t) {
            try {
                return i(t)
            } catch (e) {
                return a.slice()
            }
        }(t) : i(r(t))
    }
}, function (t, e, n) {
    var r = n(434);
    t.exports = r
}, function (t, e, n) {
    n(219), n(86), n(99);
    var r = n(183);
    t.exports = r.f("iterator")
}, function (t, e, n) {
    var r = n(436);
    n(453), n(454), n(455), n(456), n(457), t.exports = r
}, function (t, e, n) {
    n(216), n(176), n(218), n(437), n(438), n(439), n(440), n(219), n(441), n(442), n(443), n(444), n(445), n(446), n(447), n(448), n(449), n(450), n(451), n(452);
    var r = n(31);
    t.exports = r.Symbol
}, function (t, e, n) {
    n(54)("asyncIterator")
}, function (t, e) {
}, function (t, e, n) {
    n(54)("hasInstance")
}, function (t, e, n) {
    n(54)("isConcatSpreadable")
}, function (t, e, n) {
    n(54)("match")
}, function (t, e, n) {
    n(54)("matchAll")
}, function (t, e, n) {
    n(54)("replace")
}, function (t, e, n) {
    n(54)("search")
}, function (t, e, n) {
    n(54)("species")
}, function (t, e, n) {
    n(54)("split")
}, function (t, e, n) {
    n(54)("toPrimitive")
}, function (t, e, n) {
    n(54)("toStringTag")
}, function (t, e, n) {
    n(54)("unscopables")
}, function (t, e, n) {
    var r = n(41);
    n(84)(r.JSON, "JSON", !0)
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
    n(54)("asyncDispose")
}, function (t, e, n) {
    n(54)("dispose")
}, function (t, e, n) {
    n(54)("observable")
}, function (t, e, n) {
    n(54)("patternMatch")
}, function (t, e, n) {
    n(54)("replaceAll")
}, function (t, e, n) {
    var r = n(459);
    t.exports = r
}, function (t, e, n) {
    n(460);
    var r = n(31).Object, i = t.exports = function (t, e, n) {
        return r.defineProperty(t, e, n)
    };
    r.defineProperty.sham && (i.sham = !0)
}, function (t, e, n) {
    var r = n(16), i = n(58);
    r({target: "Object", stat: !0, forced: !i, sham: !i}, {defineProperty: n(76).f})
}, function (t, e, n) {
    var r = function (t) {
        "use strict";
        var e = Object.prototype, n = e.hasOwnProperty, r = "function" == typeof Symbol ? Symbol : {},
            i = r.iterator || "@@iterator", o = r.asyncIterator || "@@asyncIterator",
            a = r.toStringTag || "@@toStringTag";

        function s(t, e, n) {
            return Object.defineProperty(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
        }

        try {
            s({}, "")
        } catch (I) {
            s = function (t, e, n) {
                return t[e] = n
            }
        }

        function c(t, e, n, r) {
            var i = e && e.prototype instanceof h ? e : h, o = Object.create(i.prototype), a = new C(r || []);
            return o._invoke = function (t, e, n) {
                var r = "suspendedStart";
                return function (i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return S()
                    }
                    for (n.method = i, n.arg = o; ;) {
                        var a = n.delegate;
                        if (a) {
                            var s = b(a, n);
                            if (s) {
                                if (s === l) continue;
                                return s
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var c = u(t, e, n);
                        if ("normal" === c.type) {
                            if (r = n.done ? "completed" : "suspendedYield", c.arg === l) continue;
                            return {value: c.arg, done: n.done}
                        }
                        "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                    }
                }
            }(t, n, a), o
        }

        function u(t, e, n) {
            try {
                return {type: "normal", arg: t.call(e, n)}
            } catch (I) {
                return {type: "throw", arg: I}
            }
        }

        t.wrap = c;
        var l = {};

        function h() {
        }

        function f() {
        }

        function d() {
        }

        var p = {};
        p[i] = function () {
            return this
        };
        var m = Object.getPrototypeOf, v = m && m(m(k([])));
        v && v !== e && n.call(v, i) && (p = v);
        var g = d.prototype = h.prototype = Object.create(p);

        function _(t) {
            ["next", "throw", "return"].forEach((function (e) {
                s(t, e, (function (t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function y(t, e) {
            var r;
            this._invoke = function (i, o) {
                function a() {
                    return new e((function (r, a) {
                        !function r(i, o, a, s) {
                            var c = u(t[i], t, o);
                            if ("throw" !== c.type) {
                                var l = c.arg, h = l.value;
                                return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then((function (t) {
                                    r("next", t, a, s)
                                }), (function (t) {
                                    r("throw", t, a, s)
                                })) : e.resolve(h).then((function (t) {
                                    l.value = t, a(l)
                                }), (function (t) {
                                    return r("throw", t, a, s)
                                }))
                            }
                            s(c.arg)
                        }(i, o, r, a)
                    }))
                }

                return r = r ? r.then(a, a) : a()
            }
        }

        function b(t, e) {
            var n = t.iterator[e.method];
            if (void 0 === n) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, b(t, e), "throw" === e.method)) return l;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var r = u(n, t.iterator, e.arg);
            if ("throw" === r.type) return e.method = "throw", e.arg = r.arg, e.delegate = null, l;
            var i = r.arg;
            return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, l) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, l)
        }

        function w(t) {
            var e = {tryLoc: t[0]};
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function x(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function C(t) {
            this.tryEntries = [{tryLoc: "root"}], t.forEach(w, this), this.reset(!0)
        }

        function k(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1, o = function e() {
                        for (; ++r < t.length;) if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                        return e.value = void 0, e.done = !0, e
                    };
                    return o.next = o
                }
            }
            return {next: S}
        }

        function S() {
            return {value: void 0, done: !0}
        }

        return f.prototype = g.constructor = d, d.constructor = f, f.displayName = s(d, a, "GeneratorFunction"), t.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name))
        }, t.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, d) : (t.__proto__ = d, s(t, a, "GeneratorFunction")), t.prototype = Object.create(g), t
        }, t.awrap = function (t) {
            return {__await: t}
        }, _(y.prototype), y.prototype[o] = function () {
            return this
        }, t.AsyncIterator = y, t.async = function (e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new y(c(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function (t) {
                return t.done ? t.value : a.next()
            }))
        }, _(g), s(g, a, "Generator"), g[i] = function () {
            return this
        }, g.toString = function () {
            return "[object Generator]"
        }, t.keys = function (t) {
            var e = [];
            for (var n in t) e.push(n);
            return e.reverse(), function n() {
                for (; e.length;) {
                    var r = e.pop();
                    if (r in t) return n.value = r, n.done = !1, n
                }
                return n.done = !0, n
            }
        }, t.values = k, C.prototype = {
            constructor: C, reset: function (t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !t) for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            }, stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            }, dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;

                function r(n, r) {
                    return a.type = "throw", a.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i], a = o.completion;
                    if ("root" === o.tryLoc) return r("end");
                    if (o.tryLoc <= this.prev) {
                        var s = n.call(o, "catchLoc"), c = n.call(o, "finallyLoc");
                        if (s && c) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        } else if (s) {
                            if (this.prev < o.catchLoc) return r(o.catchLoc, !0)
                        } else {
                            if (!c) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return r(o.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var i = this.tryEntries[r];
                    if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, l) : this.complete(a)
            }, complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), l
            }, finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), l
                }
            }, catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            x(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (t, e, n) {
                return this.delegate = {
                    iterator: k(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, t
    }(t.exports);
    try {
        regeneratorRuntime = r
    } catch (i) {
        Function("r", "regeneratorRuntime = r")(r)
    }
}, function (t, e, n) {
    var r = n(463);
    t.exports = r
}, function (t, e, n) {
    n(464);
    var r = n(31);
    r.JSON || (r.JSON = {stringify: JSON.stringify}), t.exports = function (t, e, n) {
        return r.JSON.stringify.apply(null, arguments)
    }
}, function (t, e, n) {
    var r = n(16), i = n(64), o = n(38), a = i("JSON", "stringify"), s = /[\uD800-\uDFFF]/g, c = /^[\uD800-\uDBFF]$/,
        u = /^[\uDC00-\uDFFF]$/, l = function (t, e, n) {
            var r = n.charAt(e - 1), i = n.charAt(e + 1);
            return c.test(t) && !u.test(i) || u.test(t) && !c.test(r) ? "\\u" + t.charCodeAt(0).toString(16) : t
        }, h = o((function () {
            return '"\\udf06\\ud834"' !== a("\udf06\ud834") || '"\\udead"' !== a("\udead")
        }));
    a && r({target: "JSON", stat: !0, forced: h}, {
        stringify: function (t, e, n) {
            var r = a.apply(null, arguments);
            return "string" == typeof r ? r.replace(s, l) : r
        }
    })
}, function (t, e, n) {
    var r = n(466);
    t.exports = r
}, function (t, e, n) {
    n(467);
    var r = n(31);
    t.exports = r.Object.keys
}, function (t, e, n) {
    var r = n(16), i = n(72), o = n(143);
    r({
        target: "Object", stat: !0, forced: n(38)((function () {
            o(1)
        }))
    }, {
        keys: function (t) {
            return o(i(t))
        }
    })
}, function (t, e, n) {
    var r = n(469);
    t.exports = r
}, function (t, e, n) {
    var r = n(470), i = Array.prototype;
    t.exports = function (t) {
        var e = t.map;
        return t === i || t instanceof Array && e === i.map ? r : e
    }
}, function (t, e, n) {
    n(471);
    var r = n(55);
    t.exports = r("Array").map
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(87).map, o = n(133), a = n(77), s = o("map"), c = a("map");
    r({target: "Array", proto: !0, forced: !s || !c}, {
        map: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(473);
    t.exports = r
}, function (t, e, n) {
    var r = n(474);
    t.exports = r
}, function (t, e, n) {
    n(184);
    var r = n(31);
    t.exports = r.URLSearchParams
}, function (t, e, n) {
    var r = n(476);
    t.exports = r
}, function (t, e, n) {
    var r = n(477), i = RegExp.prototype;
    t.exports = function (t) {
        return (t === i || t instanceof RegExp) && !("flags" in t) ? r(t) : t.flags
    }
}, function (t, e, n) {
    n(478);
    var r = n(479);
    t.exports = function (t) {
        return r.call(t)
    }
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var r = n(32);
    t.exports = function () {
        var t = r(this), e = "";
        return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    var r = n(481);
    t.exports = r
}, function (t, e, n) {
    var r = n(482);
    t.exports = r
}, function (t, e, n) {
    n(483), n(486), n(184);
    var r = n(31);
    t.exports = r.URL
}, function (t, e, n) {
    "use strict";
    n(86);
    var r, i = n(16), o = n(58), a = n(220), s = n(41), c = n(171), u = n(98), l = n(127), h = n(63), f = n(217),
        d = n(222), p = n(212).codeAt, m = n(485), v = n(84), g = n(184), _ = n(85), y = s.URL, b = g.URLSearchParams,
        w = g.getState, x = _.set, C = _.getterFor("URL"), k = Math.floor, S = Math.pow, I = /[A-Za-z]/,
        E = /[\d+-.A-Za-z]/, T = /\d/, O = /^(0x|0X)/, A = /^[0-7]+$/, N = /^\d+$/, j = /^[\dA-Fa-f]+$/,
        L = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/, P = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        M = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g, R = /[\u0009\u000A\u000D]/g, B = function (t, e) {
            var n, r, i;
            if ("[" == e.charAt(0)) {
                if ("]" != e.charAt(e.length - 1)) return "Invalid host";
                if (!(n = U(e.slice(1, -1)))) return "Invalid host";
                t.host = n
            } else if (W(t)) {
                if (e = m(e), L.test(e)) return "Invalid host";
                if (null === (n = D(e))) return "Invalid host";
                t.host = n
            } else {
                if (P.test(e)) return "Invalid host";
                for (n = "", r = d(e), i = 0; i < r.length; i++) n += H(r[i], q);
                t.host = n
            }
        }, D = function (t) {
            var e, n, r, i, o, a, s, c = t.split(".");
            if (c.length && "" == c[c.length - 1] && c.pop(), (e = c.length) > 4) return t;
            for (n = [], r = 0; r < e; r++) {
                if ("" == (i = c[r])) return t;
                if (o = 10, i.length > 1 && "0" == i.charAt(0) && (o = O.test(i) ? 16 : 8, i = i.slice(8 == o ? 1 : 2)), "" === i) a = 0; else {
                    if (!(10 == o ? N : 8 == o ? A : j).test(i)) return t;
                    a = parseInt(i, o)
                }
                n.push(a)
            }
            for (r = 0; r < e; r++) if (a = n[r], r == e - 1) {
                if (a >= S(256, 5 - e)) return null
            } else if (a > 255) return null;
            for (s = n.pop(), r = 0; r < n.length; r++) s += n[r] * S(256, 3 - r);
            return s
        }, U = function (t) {
            var e, n, r, i, o, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, l = null, h = 0, f = function () {
                return t.charAt(h)
            };
            if (":" == f()) {
                if (":" != t.charAt(1)) return;
                h += 2, l = ++u
            }
            for (; f();) {
                if (8 == u) return;
                if (":" != f()) {
                    for (e = n = 0; n < 4 && j.test(f());) e = 16 * e + parseInt(f(), 16), h++, n++;
                    if ("." == f()) {
                        if (0 == n) return;
                        if (h -= n, u > 6) return;
                        for (r = 0; f();) {
                            if (i = null, r > 0) {
                                if (!("." == f() && r < 4)) return;
                                h++
                            }
                            if (!T.test(f())) return;
                            for (; T.test(f());) {
                                if (o = parseInt(f(), 10), null === i) i = o; else {
                                    if (0 == i) return;
                                    i = 10 * i + o
                                }
                                if (i > 255) return;
                                h++
                            }
                            c[u] = 256 * c[u] + i, 2 != ++r && 4 != r || u++
                        }
                        if (4 != r) return;
                        break
                    }
                    if (":" == f()) {
                        if (h++, !f()) return
                    } else if (f()) return;
                    c[u++] = e
                } else {
                    if (null !== l) return;
                    h++, l = ++u
                }
            }
            if (null !== l) for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s; else if (8 != u) return;
            return c
        }, $ = function (t) {
            var e, n, r, i;
            if ("number" == typeof t) {
                for (e = [], n = 0; n < 4; n++) e.unshift(t % 256), t = k(t / 256);
                return e.join(".")
            }
            if ("object" == typeof t) {
                for (e = "", r = function (t) {
                    for (var e = null, n = 1, r = null, i = 0, o = 0; o < 8; o++) 0 !== t[o] ? (i > n && (e = r, n = i), r = null, i = 0) : (null === r && (r = o), ++i);
                    return i > n && (e = r, n = i), e
                }(t), n = 0; n < 8; n++) i && 0 === t[n] || (i && (i = !1), r === n ? (e += n ? ":" : "::", i = !0) : (e += t[n].toString(16), n < 7 && (e += ":")));
                return "[" + e + "]"
            }
            return t
        }, q = {}, F = f({}, q, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}), X = f({}, F, {"#": 1, "?": 1, "{": 1, "}": 1}),
        z = f({}, X, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
        H = function (t, e) {
            var n = p(t, 0);
            return n > 32 && n < 127 && !h(e, t) ? t : encodeURIComponent(t)
        }, G = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, W = function (t) {
            return h(G, t.scheme)
        }, V = function (t) {
            return "" != t.username || "" != t.password
        }, J = function (t) {
            return !t.host || t.cannotBeABaseURL || "file" == t.scheme
        }, K = function (t, e) {
            var n;
            return 2 == t.length && I.test(t.charAt(0)) && (":" == (n = t.charAt(1)) || !e && "|" == n)
        }, Q = function (t) {
            var e;
            return t.length > 1 && K(t.slice(0, 2)) && (2 == t.length || "/" === (e = t.charAt(2)) || "\\" === e || "?" === e || "#" === e)
        }, Y = function (t) {
            var e = t.path, n = e.length;
            !n || "file" == t.scheme && 1 == n && K(e[0], !0) || e.pop()
        }, Z = function (t) {
            return "." === t || "%2e" === t.toLowerCase()
        }, tt = {}, et = {}, nt = {}, rt = {}, it = {}, ot = {}, at = {}, st = {}, ct = {}, ut = {}, lt = {}, ht = {},
        ft = {}, dt = {}, pt = {}, mt = {}, vt = {}, gt = {}, _t = {}, yt = {}, bt = {}, wt = function (t, e, n, i) {
            var o, a, s, c, u, l = n || tt, f = 0, p = "", m = !1, v = !1, g = !1;
            for (n || (t.scheme = "", t.username = "", t.password = "", t.host = null, t.port = null, t.path = [], t.query = null, t.fragment = null, t.cannotBeABaseURL = !1, e = e.replace(M, "")), e = e.replace(R, ""), o = d(e); f <= o.length;) {
                switch (a = o[f], l) {
                    case tt:
                        if (!a || !I.test(a)) {
                            if (n) return "Invalid scheme";
                            l = nt;
                            continue
                        }
                        p += a.toLowerCase(), l = et;
                        break;
                    case et:
                        if (a && (E.test(a) || "+" == a || "-" == a || "." == a)) p += a.toLowerCase(); else {
                            if (":" != a) {
                                if (n) return "Invalid scheme";
                                p = "", l = nt, f = 0;
                                continue
                            }
                            if (n && (W(t) != h(G, p) || "file" == p && (V(t) || null !== t.port) || "file" == t.scheme && !t.host)) return;
                            if (t.scheme = p, n) return void (W(t) && G[t.scheme] == t.port && (t.port = null));
                            p = "", "file" == t.scheme ? l = dt : W(t) && i && i.scheme == t.scheme ? l = rt : W(t) ? l = st : "/" == o[f + 1] ? (l = it, f++) : (t.cannotBeABaseURL = !0, t.path.push(""), l = _t)
                        }
                        break;
                    case nt:
                        if (!i || i.cannotBeABaseURL && "#" != a) return "Invalid scheme";
                        if (i.cannotBeABaseURL && "#" == a) {
                            t.scheme = i.scheme, t.path = i.path.slice(), t.query = i.query, t.fragment = "", t.cannotBeABaseURL = !0, l = bt;
                            break
                        }
                        l = "file" == i.scheme ? dt : ot;
                        continue;
                    case rt:
                        if ("/" != a || "/" != o[f + 1]) {
                            l = ot;
                            continue
                        }
                        l = ct, f++;
                        break;
                    case it:
                        if ("/" == a) {
                            l = ut;
                            break
                        }
                        l = gt;
                        continue;
                    case ot:
                        if (t.scheme = i.scheme, a == r) t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = i.query; else if ("/" == a || "\\" == a && W(t)) l = at; else if ("?" == a) t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = "", l = yt; else {
                            if ("#" != a) {
                                t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.path.pop(), l = gt;
                                continue
                            }
                            t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, t.path = i.path.slice(), t.query = i.query, t.fragment = "", l = bt
                        }
                        break;
                    case at:
                        if (!W(t) || "/" != a && "\\" != a) {
                            if ("/" != a) {
                                t.username = i.username, t.password = i.password, t.host = i.host, t.port = i.port, l = gt;
                                continue
                            }
                            l = ut
                        } else l = ct;
                        break;
                    case st:
                        if (l = ct, "/" != a || "/" != p.charAt(f + 1)) continue;
                        f++;
                        break;
                    case ct:
                        if ("/" != a && "\\" != a) {
                            l = ut;
                            continue
                        }
                        break;
                    case ut:
                        if ("@" == a) {
                            m && (p = "%40" + p), m = !0, s = d(p);
                            for (var _ = 0; _ < s.length; _++) {
                                var y = s[_];
                                if (":" != y || g) {
                                    var b = H(y, z);
                                    g ? t.password += b : t.username += b
                                } else g = !0
                            }
                            p = ""
                        } else if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && W(t)) {
                            if (m && "" == p) return "Invalid authority";
                            f -= d(p).length + 1, p = "", l = lt
                        } else p += a;
                        break;
                    case lt:
                    case ht:
                        if (n && "file" == t.scheme) {
                            l = mt;
                            continue
                        }
                        if (":" != a || v) {
                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && W(t)) {
                                if (W(t) && "" == p) return "Invalid host";
                                if (n && "" == p && (V(t) || null !== t.port)) return;
                                if (c = B(t, p)) return c;
                                if (p = "", l = vt, n) return;
                                continue
                            }
                            "[" == a ? v = !0 : "]" == a && (v = !1), p += a
                        } else {
                            if ("" == p) return "Invalid host";
                            if (c = B(t, p)) return c;
                            if (p = "", l = ft, n == ht) return
                        }
                        break;
                    case ft:
                        if (!T.test(a)) {
                            if (a == r || "/" == a || "?" == a || "#" == a || "\\" == a && W(t) || n) {
                                if ("" != p) {
                                    var w = parseInt(p, 10);
                                    if (w > 65535) return "Invalid port";
                                    t.port = W(t) && w === G[t.scheme] ? null : w, p = ""
                                }
                                if (n) return;
                                l = vt;
                                continue
                            }
                            return "Invalid port"
                        }
                        p += a;
                        break;
                    case dt:
                        if (t.scheme = "file", "/" == a || "\\" == a) l = pt; else {
                            if (!i || "file" != i.scheme) {
                                l = gt;
                                continue
                            }
                            if (a == r) t.host = i.host, t.path = i.path.slice(), t.query = i.query; else if ("?" == a) t.host = i.host, t.path = i.path.slice(), t.query = "", l = yt; else {
                                if ("#" != a) {
                                    Q(o.slice(f).join("")) || (t.host = i.host, t.path = i.path.slice(), Y(t)), l = gt;
                                    continue
                                }
                                t.host = i.host, t.path = i.path.slice(), t.query = i.query, t.fragment = "", l = bt
                            }
                        }
                        break;
                    case pt:
                        if ("/" == a || "\\" == a) {
                            l = mt;
                            break
                        }
                        i && "file" == i.scheme && !Q(o.slice(f).join("")) && (K(i.path[0], !0) ? t.path.push(i.path[0]) : t.host = i.host), l = gt;
                        continue;
                    case mt:
                        if (a == r || "/" == a || "\\" == a || "?" == a || "#" == a) {
                            if (!n && K(p)) l = gt; else if ("" == p) {
                                if (t.host = "", n) return;
                                l = vt
                            } else {
                                if (c = B(t, p)) return c;
                                if ("localhost" == t.host && (t.host = ""), n) return;
                                p = "", l = vt
                            }
                            continue
                        }
                        p += a;
                        break;
                    case vt:
                        if (W(t)) {
                            if (l = gt, "/" != a && "\\" != a) continue
                        } else if (n || "?" != a) if (n || "#" != a) {
                            if (a != r && (l = gt, "/" != a)) continue
                        } else t.fragment = "", l = bt; else t.query = "", l = yt;
                        break;
                    case gt:
                        if (a == r || "/" == a || "\\" == a && W(t) || !n && ("?" == a || "#" == a)) {
                            if (".." === (u = (u = p).toLowerCase()) || "%2e." === u || ".%2e" === u || "%2e%2e" === u ? (Y(t), "/" == a || "\\" == a && W(t) || t.path.push("")) : Z(p) ? "/" == a || "\\" == a && W(t) || t.path.push("") : ("file" == t.scheme && !t.path.length && K(p) && (t.host && (t.host = ""), p = p.charAt(0) + ":"), t.path.push(p)), p = "", "file" == t.scheme && (a == r || "?" == a || "#" == a)) for (; t.path.length > 1 && "" === t.path[0];) t.path.shift();
                            "?" == a ? (t.query = "", l = yt) : "#" == a && (t.fragment = "", l = bt)
                        } else p += H(a, X);
                        break;
                    case _t:
                        "?" == a ? (t.query = "", l = yt) : "#" == a ? (t.fragment = "", l = bt) : a != r && (t.path[0] += H(a, q));
                        break;
                    case yt:
                        n || "#" != a ? a != r && ("'" == a && W(t) ? t.query += "%27" : t.query += "#" == a ? "%23" : H(a, q)) : (t.fragment = "", l = bt);
                        break;
                    case bt:
                        a != r && (t.fragment += H(a, F))
                }
                f++
            }
        }, xt = function (t) {
            var e, n, r = l(this, xt, "URL"), i = arguments.length > 1 ? arguments[1] : void 0, a = String(t),
                s = x(r, {type: "URL"});
            if (void 0 !== i) if (i instanceof xt) e = C(i); else if (n = wt(e = {}, String(i))) throw TypeError(n);
            if (n = wt(s, a, null, e)) throw TypeError(n);
            var c = s.searchParams = new b, u = w(c);
            u.updateSearchParams(s.query), u.updateURL = function () {
                s.query = String(c) || null
            }, o || (r.href = kt.call(r), r.origin = St.call(r), r.protocol = It.call(r), r.username = Et.call(r), r.password = Tt.call(r), r.host = Ot.call(r), r.hostname = At.call(r), r.port = Nt.call(r), r.pathname = jt.call(r), r.search = Lt.call(r), r.searchParams = Pt.call(r), r.hash = Mt.call(r))
        }, Ct = xt.prototype, kt = function () {
            var t = C(this), e = t.scheme, n = t.username, r = t.password, i = t.host, o = t.port, a = t.path, s = t.query,
                c = t.fragment, u = e + ":";
            return null !== i ? (u += "//", V(t) && (u += n + (r ? ":" + r : "") + "@"), u += $(i), null !== o && (u += ":" + o)) : "file" == e && (u += "//"), u += t.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
        }, St = function () {
            var t = C(this), e = t.scheme, n = t.port;
            if ("blob" == e) try {
                return new URL(e.path[0]).origin
            } catch (r) {
                return "null"
            }
            return "file" != e && W(t) ? e + "://" + $(t.host) + (null !== n ? ":" + n : "") : "null"
        }, It = function () {
            return C(this).scheme + ":"
        }, Et = function () {
            return C(this).username
        }, Tt = function () {
            return C(this).password
        }, Ot = function () {
            var t = C(this), e = t.host, n = t.port;
            return null === e ? "" : null === n ? $(e) : $(e) + ":" + n
        }, At = function () {
            var t = C(this).host;
            return null === t ? "" : $(t)
        }, Nt = function () {
            var t = C(this).port;
            return null === t ? "" : String(t)
        }, jt = function () {
            var t = C(this), e = t.path;
            return t.cannotBeABaseURL ? e[0] : e.length ? "/" + e.join("/") : ""
        }, Lt = function () {
            var t = C(this).query;
            return t ? "?" + t : ""
        }, Pt = function () {
            return C(this).searchParams
        }, Mt = function () {
            var t = C(this).fragment;
            return t ? "#" + t : ""
        }, Rt = function (t, e) {
            return {get: t, set: e, configurable: !0, enumerable: !0}
        };
    if (o && c(Ct, {
        href: Rt(kt, (function (t) {
            var e = C(this), n = String(t), r = wt(e, n);
            if (r) throw TypeError(r);
            w(e.searchParams).updateSearchParams(e.query)
        })), origin: Rt(St), protocol: Rt(It, (function (t) {
            var e = C(this);
            wt(e, String(t) + ":", tt)
        })), username: Rt(Et, (function (t) {
            var e = C(this), n = d(String(t));
            if (!J(e)) {
                e.username = "";
                for (var r = 0; r < n.length; r++) e.username += H(n[r], z)
            }
        })), password: Rt(Tt, (function (t) {
            var e = C(this), n = d(String(t));
            if (!J(e)) {
                e.password = "";
                for (var r = 0; r < n.length; r++) e.password += H(n[r], z)
            }
        })), host: Rt(Ot, (function (t) {
            var e = C(this);
            e.cannotBeABaseURL || wt(e, String(t), lt)
        })), hostname: Rt(At, (function (t) {
            var e = C(this);
            e.cannotBeABaseURL || wt(e, String(t), ht)
        })), port: Rt(Nt, (function (t) {
            var e = C(this);
            J(e) || ("" == (t = String(t)) ? e.port = null : wt(e, t, ft))
        })), pathname: Rt(jt, (function (t) {
            var e = C(this);
            e.cannotBeABaseURL || (e.path = [], wt(e, t + "", vt))
        })), search: Rt(Lt, (function (t) {
            var e = C(this);
            "" == (t = String(t)) ? e.query = null : ("?" == t.charAt(0) && (t = t.slice(1)), e.query = "", wt(e, t, yt)), w(e.searchParams).updateSearchParams(e.query)
        })), searchParams: Rt(Pt), hash: Rt(Mt, (function (t) {
            var e = C(this);
            "" != (t = String(t)) ? ("#" == t.charAt(0) && (t = t.slice(1)), e.fragment = "", wt(e, t, bt)) : e.fragment = null
        }))
    }), u(Ct, "toJSON", (function () {
        return kt.call(this)
    }), {enumerable: !0}), u(Ct, "toString", (function () {
        return kt.call(this)
    }), {enumerable: !0}), y) {
        var Bt = y.createObjectURL, Dt = y.revokeObjectURL;
        Bt && u(xt, "createObjectURL", (function (t) {
            return Bt.apply(y, arguments)
        })), Dt && u(xt, "revokeObjectURL", (function (t) {
            return Dt.apply(y, arguments)
        }))
    }
    v(xt, "URL"), i({global: !0, forced: !a, sham: !o}, {URL: xt})
}, function (t, e, n) {
    var r = n(32), i = n(202);
    t.exports = function (t, e, n, o) {
        try {
            return o ? e(r(n)[0], n[1]) : e(n)
        } catch (a) {
            throw i(t), a
        }
    }
}, function (t, e, n) {
    "use strict";
    var r = /[^\0-\u007E]/, i = /[.\u3002\uFF0E\uFF61]/g, o = "Overflow: input needs wider integers to process",
        a = Math.floor, s = String.fromCharCode, c = function (t) {
            return t + 22 + 75 * (t < 26)
        }, u = function (t, e, n) {
            var r = 0;
            for (t = n ? a(t / 700) : t >> 1, t += a(t / e); t > 455; r += 36) t = a(t / 35);
            return a(r + 36 * t / (t + 38))
        }, l = function (t) {
            var e, n, r = [], i = (t = function (t) {
                for (var e = [], n = 0, r = t.length; n < r;) {
                    var i = t.charCodeAt(n++);
                    if (i >= 55296 && i <= 56319 && n < r) {
                        var o = t.charCodeAt(n++);
                        56320 == (64512 & o) ? e.push(((1023 & i) << 10) + (1023 & o) + 65536) : (e.push(i), n--)
                    } else e.push(i)
                }
                return e
            }(t)).length, l = 128, h = 0, f = 72;
            for (e = 0; e < t.length; e++) (n = t[e]) < 128 && r.push(s(n));
            var d = r.length, p = d;
            for (d && r.push("-"); p < i;) {
                var m = 2147483647;
                for (e = 0; e < t.length; e++) (n = t[e]) >= l && n < m && (m = n);
                var v = p + 1;
                if (m - l > a((2147483647 - h) / v)) throw RangeError(o);
                for (h += (m - l) * v, l = m, e = 0; e < t.length; e++) {
                    if ((n = t[e]) < l && ++h > 2147483647) throw RangeError(o);
                    if (n == l) {
                        for (var g = h, _ = 36; ; _ += 36) {
                            var y = _ <= f ? 1 : _ >= f + 26 ? 26 : _ - f;
                            if (g < y) break;
                            var b = g - y, w = 36 - y;
                            r.push(s(c(y + b % w))), g = a(b / w)
                        }
                        r.push(s(c(g))), f = u(h, v, p == d), h = 0, ++p
                    }
                }
                ++h, ++l
            }
            return r.join("")
        };
    t.exports = function (t) {
        var e, n, o = [], a = t.toLowerCase().replace(i, ".").split(".");
        for (e = 0; e < a.length; e++) n = a[e], o.push(r.test(n) ? "xn--" + l(n) : n);
        return o.join(".")
    }
}, function (t, e) {
}, function (t, e, n) {
    var r = n(488);
    t.exports = r
}, function (t, e, n) {
    var r = n(489), i = n(491), o = Array.prototype, a = String.prototype;
    t.exports = function (t) {
        var e = t.includes;
        return t === o || t instanceof Array && e === o.includes ? r : "string" == typeof t || t === a || t instanceof String && e === a.includes ? i : e
    }
}, function (t, e, n) {
    n(490);
    var r = n(55);
    t.exports = r("Array").includes
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(172).includes, o = n(130);
    r({target: "Array", proto: !0, forced: !n(77)("indexOf", {ACCESSORS: !0, 1: 0})}, {
        includes: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (t, e, n) {
    n(492);
    var r = n(55);
    t.exports = r("String").includes
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(223), o = n(109);
    r({target: "String", proto: !0, forced: !n(224)("includes")}, {
        includes: function (t) {
            return !!~String(o(this)).indexOf(i(t), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(59), i = n(124), o = n(42)("match");
    t.exports = function (t) {
        var e;
        return r(t) && (void 0 !== (e = t[o]) ? !!e : "RegExp" == i(t))
    }
}, function (t, e, n) {
    var r = n(495);
    t.exports = r
}, function (t, e, n) {
    n(496);
    var r = n(31);
    t.exports = r.parseInt
}, function (t, e, n) {
    var r = n(16), i = n(225);
    r({global: !0, forced: parseInt != i}, {parseInt: i})
}, function (t, e, n) {
    var r = n(498);
    t.exports = r
}, function (t, e, n) {
    n(226);
    var r = n(31);
    t.exports = r.setTimeout
}, , , function (t, e, n) {
    var r = n(502);
    t.exports = r
}, function (t, e, n) {
    n(503);
    var r = n(31);
    t.exports = r.Array.isArray
}, function (t, e, n) {
    n(16)({target: "Array", stat: !0}, {isArray: n(123)})
}, function (t, e, n) {
    var r = n(505);
    t.exports = r
}, function (t, e, n) {
    n(506);
    var r = n(31);
    t.exports = r.Number.parseInt
}, function (t, e, n) {
    var r = n(16), i = n(225);
    r({target: "Number", stat: !0, forced: Number.parseInt != i}, {parseInt: i})
}, function (t, e, n) {
    var r = n(508);
    t.exports = r
}, function (t, e, n) {
    n(509);
    var r = n(31);
    t.exports = r.Reflect.construct
}, function (t, e, n) {
    var r = n(16), i = n(64), o = n(51), a = n(32), s = n(59), c = n(96), u = n(227), l = n(38),
        h = i("Reflect", "construct"), f = l((function () {
            function t() {
            }

            return !(h((function () {
            }), [], t) instanceof t)
        })), d = !l((function () {
            h((function () {
            }))
        })), p = f || d;
    r({target: "Reflect", stat: !0, forced: p, sham: p}, {
        construct: function (t, e) {
            o(t), a(e);
            var n = arguments.length < 3 ? t : o(arguments[2]);
            if (d && !f) return h(t, e, n);
            if (t == n) {
                switch (e.length) {
                    case 0:
                        return new t;
                    case 1:
                        return new t(e[0]);
                    case 2:
                        return new t(e[0], e[1]);
                    case 3:
                        return new t(e[0], e[1], e[2]);
                    case 4:
                        return new t(e[0], e[1], e[2], e[3])
                }
                var r = [null];
                return r.push.apply(r, e), new (u.apply(t, r))
            }
            var i = n.prototype, l = c(s(i) ? i : Object.prototype), p = Function.apply.call(t, l, e);
            return s(p) ? p : l
        }
    })
}, function (t, e, n) {
    var r = n(511);
    t.exports = r
}, function (t, e, n) {
    n(512);
    var r = n(31).Object;
    t.exports = function (t, e) {
        return r.create(t, e)
    }
}, function (t, e, n) {
    n(16)({target: "Object", stat: !0, sham: !n(58)}, {create: n(96)})
}, function (t, e, n) {
    var r = n(514);
    t.exports = r
}, function (t, e, n) {
    n(515);
    var r = n(31);
    t.exports = r.Object.setPrototypeOf
}, function (t, e, n) {
    n(16)({target: "Object", stat: !0}, {setPrototypeOf: n(170)})
}, function (t, e, n) {
    var r = n(517);
    t.exports = r
}, function (t, e, n) {
    n(518);
    var r = n(31);
    t.exports = r.Object.getPrototypeOf
}, function (t, e, n) {
    var r = n(16), i = n(38), o = n(72), a = n(140), s = n(197);
    r({
        target: "Object", stat: !0, forced: i((function () {
            a(1)
        })), sham: !s
    }, {
        getPrototypeOf: function (t) {
            return a(o(t))
        }
    })
}, function (t, e, n) {
    var r = n(520);
    n(525), n(527), n(529), n(531), n(533), n(534), n(535), n(536), n(537), n(538), n(540), n(541), n(542), n(543), n(544), n(545), n(546), n(547), n(548), n(549), t.exports = r
}, function (t, e, n) {
    n(521), n(176), n(86), n(99);
    var r = n(31);
    t.exports = r.Map
}, function (t, e, n) {
    "use strict";
    var r = n(522), i = n(524);
    t.exports = r("Map", (function (t) {
        return function () {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    }), i)
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(41), o = n(228), a = n(38), s = n(75), c = n(52), u = n(127), l = n(59), h = n(84),
        f = n(76).f, d = n(87).forEach, p = n(58), m = n(85), v = m.set, g = m.getterFor;
    t.exports = function (t, e, n) {
        var m, _ = -1 !== t.indexOf("Map"), y = -1 !== t.indexOf("Weak"), b = _ ? "set" : "add", w = i[t],
            x = w && w.prototype, C = {};
        if (p && "function" == typeof w && (y || x.forEach && !a((function () {
            (new w).entries().next()
        })))) {
            m = e((function (e, n) {
                v(u(e, m, t), {type: t, collection: new w}), null != n && c(n, e[b], {that: e, AS_ENTRIES: _})
            }));
            var k = g(t);
            d(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], (function (t) {
                var e = "add" == t || "set" == t;
                !(t in x) || y && "clear" == t || s(m.prototype, t, (function (n, r) {
                    var i = k(this).collection;
                    if (!e && y && !l(n)) return "get" == t && void 0;
                    var o = i[t](0 === n ? 0 : n, r);
                    return e ? this : o
                }))
            })), y || f(m.prototype, "size", {
                configurable: !0, get: function () {
                    return k(this).collection.size
                }
            })
        } else m = n.getConstructor(e, t, _, b), o.REQUIRED = !0;
        return h(m, t, !1, !0), C[t] = m, r({global: !0, forced: !0}, C), y || n.setStrong(m, t, _), m
    }
}, function (t, e, n) {
    var r = n(38);
    t.exports = !r((function () {
        return Object.isExtensible(Object.preventExtensions({}))
    }))
}, function (t, e, n) {
    "use strict";
    var r = n(76).f, i = n(96), o = n(177), a = n(62), s = n(127), c = n(52), u = n(179), l = n(204), h = n(58),
        f = n(228).fastKey, d = n(85), p = d.set, m = d.getterFor;
    t.exports = {
        getConstructor: function (t, e, n, u) {
            var l = t((function (t, r) {
                s(t, l, e), p(t, {
                    type: e,
                    index: i(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                }), h || (t.size = 0), null != r && c(r, t[u], {that: t, AS_ENTRIES: n})
            })), d = m(e), v = function (t, e, n) {
                var r, i, o = d(t), a = g(t, e);
                return a ? a.value = n : (o.last = a = {
                    index: i = f(e, !0),
                    key: e,
                    value: n,
                    previous: r = o.last,
                    next: void 0,
                    removed: !1
                }, o.first || (o.first = a), r && (r.next = a), h ? o.size++ : t.size++, "F" !== i && (o.index[i] = a)), t
            }, g = function (t, e) {
                var n, r = d(t), i = f(e);
                if ("F" !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key == e) return n
            };
            return o(l.prototype, {
                clear: function () {
                    for (var t = d(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                    t.first = t.last = void 0, h ? t.size = 0 : this.size = 0
                }, delete: function (t) {
                    var e = d(this), n = g(this, t);
                    if (n) {
                        var r = n.next, i = n.previous;
                        delete e.index[n.index], n.removed = !0, i && (i.next = r), r && (r.previous = i), e.first == n && (e.first = r), e.last == n && (e.last = i), h ? e.size-- : this.size--
                    }
                    return !!n
                }, forEach: function (t) {
                    for (var e, n = d(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.next : n.first;) for (r(e.value, e.key, this); e && e.removed;) e = e.previous
                }, has: function (t) {
                    return !!g(this, t)
                }
            }), o(l.prototype, n ? {
                get: function (t) {
                    var e = g(this, t);
                    return e && e.value
                }, set: function (t, e) {
                    return v(this, 0 === t ? 0 : t, e)
                }
            } : {
                add: function (t) {
                    return v(this, t = 0 === t ? 0 : t, t)
                }
            }), h && r(l.prototype, "size", {
                get: function () {
                    return d(this).size
                }
            }), l
        }, setStrong: function (t, e, n) {
            var r = e + " Iterator", i = m(e), o = m(r);
            u(t, e, (function (t, e) {
                p(this, {type: r, target: t, state: i(t), kind: e, last: void 0})
            }), (function () {
                for (var t = o(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first) ? "keys" == e ? {
                    value: n.key,
                    done: !1
                } : "values" == e ? {value: n.value, done: !1} : {
                    value: [n.key, n.value],
                    done: !1
                } : (t.target = void 0, {value: void 0, done: !0})
            }), n ? "entries" : "values", !n, !0), l(e)
        }
    }
}, function (t, e, n) {
    n(16)({target: "Map", stat: !0}, {from: n(526)})
}, function (t, e, n) {
    "use strict";
    var r = n(51), i = n(62), o = n(52);
    t.exports = function (t) {
        var e, n, a, s, c = arguments.length, u = c > 1 ? arguments[1] : void 0;
        return r(this), (e = void 0 !== u) && r(u), null == t ? new this : (n = [], e ? (a = 0, s = i(u, c > 2 ? arguments[2] : void 0, 2), o(t, (function (t) {
            n.push(s(t, a++))
        }))) : o(t, n.push, {that: n}), new this(n))
    }
}, function (t, e, n) {
    n(16)({target: "Map", stat: !0}, {of: n(528)})
}, function (t, e, n) {
    "use strict";
    t.exports = function () {
        for (var t = arguments.length, e = new Array(t); t--;) e[t] = arguments[t];
        return new this(e)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(530);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        deleteAll: function () {
            return o.apply(this, arguments)
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(32), i = n(51);
    t.exports = function () {
        for (var t, e = r(this), n = i(e.delete), o = !0, a = 0, s = arguments.length; a < s; a++) t = n.call(e, arguments[a]), o = o && t;
        return !!o
    }
}, function (t, e, n) {
    "use strict";
    n(16)({target: "Map", proto: !0, real: !0, forced: n(35)}, {emplace: n(532)})
}, function (t, e, n) {
    "use strict";
    var r = n(32);
    t.exports = function (t, e) {
        var n = r(this), i = n.has(t) && "update" in e ? e.update(n.get(t), t, n) : e.insert(t, n);
        return n.set(t, i), i
    }
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(62), s = n(80), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        every: function (t) {
            var e = o(this), n = s(e), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
            return !c(n, (function (t, n, i) {
                if (!r(n, t, e)) return i()
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(64), a = n(32), s = n(51), c = n(62), u = n(128), l = n(80), h = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        filter: function (t) {
            var e = a(this), n = l(e), r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (u(e, o("Map"))), f = s(i.set);
            return h(n, (function (t, n) {
                r(n, t, e) && f.call(i, t, n)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0}), i
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(62), s = n(80), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        find: function (t) {
            var e = o(this), n = s(e), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
            return c(n, (function (t, n, i) {
                if (r(n, t, e)) return i(n)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).result
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(62), s = n(80), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        findKey: function (t) {
            var e = o(this), n = s(e), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
            return c(n, (function (t, n, i) {
                if (r(n, t, e)) return i(t)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).result
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(52), o = n(51);
    r({target: "Map", stat: !0}, {
        groupBy: function (t, e) {
            var n = new this;
            o(e);
            var r = o(n.has), a = o(n.get), s = o(n.set);
            return i(t, (function (t) {
                var i = e(t);
                r.call(n, i) ? a.call(n, i).push(t) : s.call(n, i, [t])
            })), n
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(80), s = n(539), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        includes: function (t) {
            return c(a(o(this)), (function (e, n, r) {
                if (s(n, t)) return r()
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
        }
    })
}, function (t, e) {
    t.exports = function (t, e) {
        return t === e || t != t && e != e
    }
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(52), o = n(51);
    r({target: "Map", stat: !0}, {
        keyBy: function (t, e) {
            var n = new this;
            o(e);
            var r = o(n.set);
            return i(t, (function (t) {
                r.call(n, e(t), t)
            })), n
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(80), s = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        keyOf: function (t) {
            return s(a(o(this)), (function (e, n, r) {
                if (n === t) return r(e)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).result
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(64), a = n(32), s = n(51), c = n(62), u = n(128), l = n(80), h = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        mapKeys: function (t) {
            var e = a(this), n = l(e), r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (u(e, o("Map"))), f = s(i.set);
            return h(n, (function (t, n) {
                f.call(i, r(n, t, e), n)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0}), i
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(64), a = n(32), s = n(51), c = n(62), u = n(128), l = n(80), h = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        mapValues: function (t) {
            var e = a(this), n = l(e), r = c(t, arguments.length > 1 ? arguments[1] : void 0, 3),
                i = new (u(e, o("Map"))), f = s(i.set);
            return h(n, (function (t, n) {
                f.call(i, t, r(n, t, e))
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0}), i
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(51), s = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        merge: function (t) {
            for (var e = o(this), n = a(e.set), r = 0; r < arguments.length;) s(arguments[r++], n, {
                that: e,
                AS_ENTRIES: !0
            });
            return e
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(51), s = n(80), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        reduce: function (t) {
            var e = o(this), n = s(e), r = arguments.length < 2, i = r ? void 0 : arguments[1];
            if (a(t), c(n, (function (n, o) {
                r ? (r = !1, i = o) : i = t(i, o, n, e)
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0}), r) throw TypeError("Reduce of empty map with no initial value");
            return i
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(62), s = n(80), c = n(52);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        some: function (t) {
            var e = o(this), n = s(e), r = a(t, arguments.length > 1 ? arguments[1] : void 0, 3);
            return c(n, (function (t, n, i) {
                if (r(n, t, e)) return i()
            }), {AS_ENTRIES: !0, IS_ITERATOR: !0, INTERRUPTED: !0}).stopped
        }
    })
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(35), o = n(32), a = n(51);
    r({target: "Map", proto: !0, real: !0, forced: i}, {
        update: function (t, e) {
            var n = o(this), r = arguments.length;
            a(e);
            var i = n.has(t);
            if (!i && r < 3) throw TypeError("Updating absent value");
            var s = i ? n.get(t) : a(r > 2 ? arguments[2] : void 0)(t, n);
            return n.set(t, e(s, t, n)), n
        }
    })
}, function (t, e, n) {
    "use strict";
    n(16)({target: "Map", proto: !0, real: !0, forced: n(35)}, {upsert: n(229)})
}, function (t, e, n) {
    "use strict";
    n(16)({target: "Map", proto: !0, real: !0, forced: n(35)}, {updateOrInsert: n(229)})
}, function (t, e, n) {
    var r = n(551);
    t.exports = r
}, function (t, e, n) {
    var r = n(552), i = Function.prototype;
    t.exports = function (t) {
        var e = t.bind;
        return t === i || t instanceof Function && e === i.bind ? r : e
    }
}, function (t, e, n) {
    n(553);
    var r = n(55);
    t.exports = r("Function").bind
}, function (t, e, n) {
    n(16)({target: "Function", proto: !0}, {bind: n(227)})
}, function (t, e, n) {
    var r = n(555);
    t.exports = r
}, function (t, e, n) {
    var r = n(556), i = String.prototype;
    t.exports = function (t) {
        var e = t.startsWith;
        return "string" == typeof t || t === i || t instanceof String && e === i.startsWith ? r : e
    }
}, function (t, e, n) {
    n(557);
    var r = n(55);
    t.exports = r("String").startsWith
}, function (t, e, n) {
    "use strict";
    var r, i = n(16), o = n(108).f, a = n(79), s = n(223), c = n(109), u = n(224), l = n(35), h = "".startsWith,
        f = Math.min, d = u("startsWith");
    i({
        target: "String",
        proto: !0,
        forced: !!(l || d || (r = o(String.prototype, "startsWith"), !r || r.writable)) && !d
    }, {
        startsWith: function (t) {
            var e = String(c(this));
            s(t);
            var n = a(f(arguments.length > 1 ? arguments[1] : void 0, e.length)), r = String(t);
            return h ? h.call(e, r, n) : e.slice(n, n + r.length) === r
        }
    })
}, function (t, e, n) {
    var r = n(559);
    t.exports = r
}, function (t, e, n) {
    n(86), n(560);
    var r = n(31);
    t.exports = r.Array.from
}, function (t, e, n) {
    var r = n(16), i = n(222);
    r({
        target: "Array", stat: !0, forced: !n(206)((function (t) {
            Array.from(t)
        }))
    }, {from: i})
}, function (t, e, n) {
    n(99), n(86);
    var r = n(562);
    t.exports = r
}, function (t, e, n) {
    var r = n(110), i = n(42), o = n(97), a = i("iterator");
    t.exports = function (t) {
        var e = Object(t);
        return void 0 !== e[a] || "@@iterator" in e || o.hasOwnProperty(r(e))
    }
}, function (t, e, n) {
    var r = n(564);
    t.exports = r
}, function (t, e, n) {
    var r = n(565), i = Array.prototype;
    t.exports = function (t) {
        var e = t.slice;
        return t === i || t instanceof Array && e === i.slice ? r : e
    }
}, function (t, e, n) {
    n(566);
    var r = n(55);
    t.exports = r("Array").slice
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(59), o = n(123), a = n(145), s = n(79), c = n(82), u = n(132), l = n(42), h = n(133),
        f = n(77), d = h("slice"), p = f("slice", {ACCESSORS: !0, 0: 0, 1: 2}), m = l("species"), v = [].slice,
        g = Math.max;
    r({target: "Array", proto: !0, forced: !d || !p}, {
        slice: function (t, e) {
            var n, r, l, h = c(this), f = s(h.length), d = a(t, f), p = a(void 0 === e ? f : e, f);
            if (o(h) && ("function" != typeof (n = h.constructor) || n !== Array && !o(n.prototype) ? i(n) && null === (n = n[m]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return v.call(h, d, p);
            for (r = new (void 0 === n ? Array : n)(g(p - d, 0)), l = 0; d < p; d++, l++) d in h && u(r, l, h[d]);
            return r.length = l, r
        }
    })
}, , function (t, e, n) {
    n(99), n(86);
    var r = n(185);
    t.exports = r
}, function (t, e, n) {
    var r = n(570);
    t.exports = r
}, function (t, e, n) {
    var r = n(571), i = Array.prototype;
    t.exports = function (t) {
        var e = t.some;
        return t === i || t instanceof Array && e === i.some ? r : e
    }
}, function (t, e, n) {
    n(572);
    var r = n(55);
    t.exports = r("Array").some
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(87).some, o = n(131), a = n(77), s = o("some"), c = a("some");
    r({target: "Array", proto: !0, forced: !s || !c}, {
        some: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var r = n(574);
    t.exports = r
}, function (t, e, n) {
    n(575);
    var r = n(31);
    t.exports = r.Date.now
}, function (t, e, n) {
    n(16)({target: "Date", stat: !0}, {
        now: function () {
            return (new Date).getTime()
        }
    })
}, , , function (t, e, n) {
    var r = n(579);
    t.exports = r
}, function (t, e, n) {
    var r = n(580), i = Array.prototype;
    t.exports = function (t) {
        var e = t.findIndex;
        return t === i || t instanceof Array && e === i.findIndex ? r : e
    }
}, function (t, e, n) {
    n(581);
    var r = n(55);
    t.exports = r("Array").findIndex
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(87).findIndex, o = n(130), a = n(77), s = !0, c = a("findIndex");
    "findIndex" in [] && Array(1).findIndex((function () {
        s = !1
    })), r({target: "Array", proto: !0, forced: s || !c}, {
        findIndex: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("findIndex")
}, function (t, e, n) {
    "use strict";
    n(232)
}, function (t, e, n) {
    "use strict";
    n(233)
}, function (t, e, n) {
    "use strict";
    n(234)
}, function (t, e, n) {
    "use strict";
    n(235)
}, function (t, e, n) {
    "use strict";
    n(236)
}, function (t, e, n) {
    "use strict";
    n(237)
}, function (t, e, n) {
    "use strict";
    n(238)
}, function (t, e, n) {
    "use strict";
    n(239)
}, function (t, e, n) {
    var r = n(591);
    t.exports = r
}, function (t, e, n) {
    n(592);
    var r = n(31);
    t.exports = r.parseFloat
}, function (t, e, n) {
    var r = n(16), i = n(593);
    r({global: !0, forced: parseFloat != i}, {parseFloat: i})
}, function (t, e, n) {
    var r = n(41), i = n(186).trim, o = n(149), a = r.parseFloat, s = 1 / a(o + "-0") != -1 / 0;
    t.exports = s ? function (t) {
        var e = i(String(t)), n = a(e);
        return 0 === n && "-" == e.charAt(0) ? -0 : n
    } : a
}, function (t, e, n) {
    "use strict";
    n(240)
}, function (t, e, n) {
    "use strict";
    n(241)
}, function (t, e, n) {
    "use strict";
    n(242)
}, function (t, e, n) {
    "use strict";
    n(243)
}, function (t, e, n) {
    "use strict";
    n(244)
}, function (t, e, n) {
    var r = n(600);
    t.exports = r
}, function (t, e, n) {
    var r = n(601), i = Array.prototype;
    t.exports = function (t) {
        var e = t.find;
        return t === i || t instanceof Array && e === i.find ? r : e
    }
}, function (t, e, n) {
    n(602);
    var r = n(55);
    t.exports = r("Array").find
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(87).find, o = n(130), a = n(77), s = !0, c = a("find");
    "find" in [] && Array(1).find((function () {
        s = !1
    })), r({target: "Array", proto: !0, forced: s || !c}, {
        find: function (t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("find")
}, function (t, e, n) {
    "use strict";
    n(245)
}, function (t, e, n) {
    "use strict";
    n(246)
}, function (t, e, n) {
    var r = n(606);
    t.exports = r
}, function (t, e, n) {
    n(226);
    var r = n(31);
    t.exports = r.setInterval
}, function (t, e, n) {
    "use strict";
    n(247)
}, function (t, e, n) {
    "use strict";
    n(248)
}, function (t, e, n) {
    "use strict";
    n(249)
}, function (t, e, n) {
    "use strict";
    n(250)
}, function (t, e, n) {
    "use strict";
    n(251)
}, function (t, e, n) {
    "use strict";
    n(252)
}, function (t, e, n) {
    "use strict";
    n(253)
}, function (t, e, n) {
    "use strict";
    n(254)
}, function (t, e, n) {
    "use strict";
    n(255)
}, function (t, e, n) {
    var r = n(617);
    t.exports = r
}, function (t, e, n) {
    var r = n(618), i = Array.prototype;
    t.exports = function (t) {
        var e = t.splice;
        return t === i || t instanceof Array && e === i.splice ? r : e
    }
}, function (t, e, n) {
    n(619);
    var r = n(55);
    t.exports = r("Array").splice
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(145), o = n(144), a = n(79), s = n(72), c = n(180), u = n(132), l = n(133), h = n(77),
        f = l("splice"), d = h("splice", {ACCESSORS: !0, 0: 0, 1: 2}), p = Math.max, m = Math.min;
    r({target: "Array", proto: !0, forced: !f || !d}, {
        splice: function (t, e) {
            var n, r, l, h, f, d, v = s(this), g = a(v.length), _ = i(t, g), y = arguments.length;
            if (0 === y ? n = r = 0 : 1 === y ? (n = 0, r = g - _) : (n = y - 2, r = m(p(o(e), 0), g - _)), g + n - r > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (l = c(v, r), h = 0; h < r; h++) (f = _ + h) in v && u(l, h, v[f]);
            if (l.length = r, n < r) {
                for (h = _; h < g - r; h++) d = h + n, (f = h + r) in v ? v[d] = v[f] : delete v[d];
                for (h = g; h > g - r + n; h--) delete v[h - 1]
            } else if (n > r) for (h = g - r; h > _; h--) d = h + n - 1, (f = h + r - 1) in v ? v[d] = v[f] : delete v[d];
            for (h = 0; h < n; h++) v[h + _] = arguments[h + 2];
            return v.length = g - r + n, l
        }
    })
}, , , function (t, e, n) {
    var r = n(623);
    t.exports = r
}, function (t, e, n) {
    var r = n(624), i = String.prototype;
    t.exports = function (t) {
        var e = t.trim;
        return "string" == typeof t || t === i || t instanceof String && e === i.trim ? r : e
    }
}, function (t, e, n) {
    n(625);
    var r = n(55);
    t.exports = r("String").trim
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(186).trim;
    r({target: "String", proto: !0, forced: n(626)("trim")}, {
        trim: function () {
            return i(this)
        }
    })
}, function (t, e, n) {
    var r = n(38), i = n(149);
    t.exports = function (t) {
        return r((function () {
            return !!i[t]() || "​᠎" != "​᠎"[t]() || i[t].name !== t
        }))
    }
}, function (t, e, n) {
    n(99), n(86);
    var r = n(126);
    t.exports = r
}, , function (t, e, n) {
    "use strict";
    n(256)
}, function (t, e, n) {
    "use strict";
    n(257)
}, function (t, e, n) {
    "use strict";
    n(258)
}, function (t, e, n) {
    var r = n(633);
    t.exports = r
}, function (t, e, n) {
    var r = n(634), i = Array.prototype;
    t.exports = function (t) {
        var e = t.fill;
        return t === i || t instanceof Array && e === i.fill ? r : e
    }
}, function (t, e, n) {
    n(635);
    var r = n(55);
    t.exports = r("Array").fill
}, function (t, e, n) {
    var r = n(16), i = n(636), o = n(130);
    r({target: "Array", proto: !0}, {fill: i}), o("fill")
}, function (t, e, n) {
    "use strict";
    var r = n(72), i = n(145), o = n(79);
    t.exports = function (t) {
        for (var e = r(this), n = o(e.length), a = arguments.length, s = i(a > 1 ? arguments[1] : void 0, n), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? n : i(c, n); u > s;) e[s++] = t;
        return e
    }
}, function (t, e, n) {
    "use strict";
    n(259)
}, function (t, e, n) {
    "use strict";
    n(260)
}, function (t, e, n) {
    "use strict";
    n(261)
}, function (t, e, n) {
    "use strict";
    n(262)
}, function (t, e, n) {
    "use strict";
    n(263)
}, function (t, e, n) {
    "use strict";
    n(264)
}, function (t, e, n) {
    "use strict";
    n(265)
}, function (t, e, n) {
    "use strict";
    n(266)
}, function (t, e, n) {
    "use strict";
    n(267)
}, function (t, e, n) {
    "use strict";
    n(268)
}, function (t, e, n) {
    "use strict";
    n(269)
}, , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n(277)
}, function (t, e, n) {
    "use strict";
    n(278)
}, function (t, e, n) {
    "use strict";
    n(279)
}, , , , , , function (t, e, n) {
    var r = n(673);
    t.exports = r
}, function (t, e, n) {
    var r = n(674), i = Array.prototype;
    t.exports = function (t) {
        var e = t.sort;
        return t === i || t instanceof Array && e === i.sort ? r : e
    }
}, function (t, e, n) {
    n(675);
    var r = n(55);
    t.exports = r("Array").sort
}, function (t, e, n) {
    "use strict";
    var r = n(16), i = n(51), o = n(72), a = n(38), s = n(131), c = [], u = c.sort, l = a((function () {
        c.sort(void 0)
    })), h = a((function () {
        c.sort(null)
    })), f = s("sort");
    r({target: "Array", proto: !0, forced: l || !h || !f}, {
        sort: function (t) {
            return void 0 === t ? u.call(o(this)) : u.call(o(this), i(t))
        }
    })
}, , function (t, e, n) {
    "use strict";
    n(285)
}, function (t, e, n) {
    "use strict";
    n(286)
}, function (t, e, n) {
    "use strict";
    n(287)
}, function (t, e, n) {
    "use strict";
    n(288)
}, function (t, e, n) {
    "use strict";
    n(289)
}, function (t, e, n) {
    "use strict";
    n(290)
}, , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n(295)
}, function (t, e, n) {
    "use strict";
    n(296)
}, function (t, e, n) {
    "use strict";
    n(297)
}, function (t, e, n) {
    "use strict";
    n(298)
}, function (t, e, n) {
    "use strict";
    n(299)
}, function (t, e, n) {
    "use strict";
    n(300)
}, , , , , , , , function (t, e, n) {
    var r = n(717);
    t.exports = r
}, function (t, e, n) {
    n(718);
    var r = n(31);
    t.exports = r.Number.isNaN
}, function (t, e, n) {
    n(16)({target: "Number", stat: !0}, {
        isNaN: function (t) {
            return t != t
        }
    })
}, , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, n) {
    "use strict";
    n(333)
}, function (t, e, n) {
    "use strict";
    n(334)
}, function (t, e, n) {
    "use strict";
    n(335)
}, function (t, e, n) {
    "use strict";
    n(336)
}, function (t, e, n) {
    "use strict";
    n(337)
}, function (t, e, n) {
    "use strict";
    n(338)
}, function (t, e, n) {
    "use strict";
    n(339)
}, function (t, e, n) {
    "use strict";
    n(340)
}, function (t, e, n) {
    "use strict";
    n(341)
}, function (t, e, n) {
    "use strict";
    n(342)
}, function (t, e, n) {
    "use strict";
    n(343)
}, function (t, e, n) {
    "use strict";
    n(344)
}, function (t, e, n) {
    "use strict";
    n(345)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var r = n(22), i = n.n(r), o = (n(391), n(393), n(40)), a = n.n(o), s = n(372), c = n(373), u = n(83), l = n(368),
        h = n(370), f = n(94), d = n.n(f), p = {
            BASE_URL: {development: "https://logan.devops.xiaohongshu.com/proxy/grwoth", production: ""},
            API_LIST: {
                NOTE_EXPLORE: "/fe_api/burdock/v2/homefeed/notes",
                NOTE_DETAIL: {url: "/fe_api/burdock/v2/note/${id}", level: 0},
                NOTE_COMMENT: {url: "/fe_api/burdock/v2/notes/${noteId}/comments", level: 1},
                RELATED_NOTE: {url: "/fe_api/burdock/v2/note/${noteId}/related", level: 1},
                NOTE_USER_INFO: "/fe_api/burdock/v2/user/${userId}",
                USER_NOTES: "/fe_api/burdock/v2/user/${userId}/notes",
                USER_ALBUM: "/fe_api/burdock/v2/user/${userId}/board",
                BRAND_RELATED_NOTES: "/fe_api/burdock/v2/board/${id}/notes",
                BOARD_INFO: "/fe_api/burdock/v2/board/${id}"
            },
            BASE_CONFIG: {defaults: {transform: !0, timeout: 6e3, withCredentials: !0}}
        }, m = n(5), v = n.n(m), g = n(2), _ = n.n(g), y = n(4), b = n.n(y), w = n(122), x = n.n(w), C = n(69), k = n.n(C),
        S = ["Explore", "V2Explore", "LiabilityItem", "Partnership", "NewPartnership", "NoteView", "User", "Join", "Board", "NotFound", "KeywordPage", "Terms", "Privacy", "ContentDisputeView", "RatingTerms", "SearchExplore", "ActivityItem", "Brand", "My", "Login", "ThirdStore", "CommunityRule"],
        I = o.http.post, E = o.http.get;
    var T = {
            name: "userInfo", components: {}, props: {needDark: Boolean, currentUser: Object}, data: function () {
                return {}
            }, methods: {
                login: function () {
                    this.$router.push({name: "Login"})
                }, jumpMy: function () {
                    this.$router.push({name: "My"})
                }, logout: function () {
                    I("LOGOUT", {}).then((function () {
                        window.location = "/index"
                    }))
                }
            }
        }, O = (n(582), n(1)), A = {
            name: "RedHeader",
            components: {
                UserInfo: Object(O.a)(T, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "user-info-container"}, [n("div", {class: ["line", {"line-dark": !t.needDark}]}), t._v(" "), t.currentUser ? n("div", [n("div", {staticClass: "avatar"}, [n("img", {
                        attrs: {
                            src: t.currentUser.image,
                            alt: ""
                        }
                    }), t._v(" "), n("div", {staticClass: "list"}, [n("p", {
                        staticClass: "item",
                        on: {click: t.jumpMy}
                    }, [t._v("我的主页")]), t._v(" "), n("p", {
                        staticClass: "item",
                        on: {click: t.logout}
                    }, [t._v("退出登录")])])])]) : n("div", {staticClass: "login-box"}, [n("p", {
                        class: ["login", {dark: !t.needDark}],
                        on: {click: t.login}
                    }, [t._v("登录")])])])
                }), [], !1, null, "c9ca4dc8", null).exports
            },
            props: {
                darkTheme: {type: Boolean, default: !1},
                logoFill: {type: String, default: "#FF2442"},
                currentUser: {type: Object},
                showUserInfo: {type: Boolean, default: !1}
            },
            computed: {
                fillColor: function () {
                    return this.needDark ? "#fff" : "#ff2442"
                }, needDark: function () {
                    return !k()(S).call(S, this.$route.name)
                }, navBar: function () {
                    return this.$locale.global.state.navBar
                }, currentLang: {
                    get: function () {
                        return this.currentLanguage
                    }, set: function (t) {
                        this.$i18n.setLang(t), this.currentLanguage = this.corpus[this.$i18n.getLang()]
                    }
                }
            },
            data: function () {
                return {
                    showPopOver: !1,
                    currentLanguage: "",
                    corpus: {"en-US": "English(US)", "zh-CN": "中文(简体)"},
                    englishSupportRoute: ["Home", "Terms", "Privacy", "ContentDisputeView", "RatingTerms", "About", "News", "Trophy", "Activities", "ActivityItem"]
                }
            },
            methods: {
                handleGoToExplore: function () {
                    window.location.replace("/explore")
                }, gotoHome: function () {
                    this.$router.push({name: "Home"})
                }, setLang: function (t) {
                    var e, n;
                    this.currentLang = t, "en-US" !== t || k()(e = this.englishSupportRoute).call(e, this.$route.name) || this.$router.push({
                        name: "Home",
                        query: {language: t}
                    });
                    var r = this.$route.path, i = this.$route.query, o = {};
                    _()(n = v()(i)).call(n, (function (t) {
                        o[t] = i[t]
                    })), o.language = t;
                    var a = {path: r, query: o};
                    this.$router.push(a)
                }, judgeExplore: function () {
                    var t = this, e = ["Explore", "NoteView", "SearchExplore"];
                    return x()(e).call(e, (function (e) {
                        return t.$route.name === e
                    })) >= 0
                }, judgeNews: function () {
                    var t = this, e = ["ActivityItem", "Reports", "Activities", "Trophy", "News"];
                    return x()(e).call(e, (function (e) {
                        return t.$route.name === e
                    })) >= 0
                }, judgeLiability: function () {
                    var t = this, e = ["LiabilityItem", "Liability"];
                    return x()(e).call(e, (function (e) {
                        return t.$route.name === e
                    })) >= 0
                }, judgePartnership: function () {
                    var t = this, e = ["Partnership", "Brand", "ThirdStore"];
                    return x()(e).call(e, (function (e) {
                        return t.$route.name === e
                    })) >= 0
                }, showSearchBar: function () {
                    var t = this, e = ["SearchExplore", "Explore", "NoteView"];
                    return x()(e).call(e, (function (e) {
                        return t.$route.name === e
                    })) >= 0
                }, gotoBusiness: function (t) {
                    if ("number" == typeof t) window.open(["", "", ""][t], "_blank"); else {
                        var e = this.$router.resolve({name: t}).href;
                        window.open(e, "_self")
                    }
                }, gotoRecruit: function () {
                    window.open("h", "_blank")
                }, gotoVideoPost: function () {
                    window.open("", "_blank")
                }, gotoLiveOBS: function () {
                    window.open("", "_blank")
                }
            },
            created: function () {
                this.currentLanguage = this.corpus[this.$i18n.getLang()]
            }
        }, N = (n(583), Object(O.a)(A, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "header",
                class: t.needDark ? "dark-theme" : "light-theme"
            }, [n("div", {staticClass: "RED"}, [n("div", {
                staticClass: "logo",
                on: {click: t.gotoHome}
            }, [t.needDark ? n("img", {
                staticClass: "dark-logo",
                attrs: {src: ""}
            }) : n("img", {
                staticClass: "light-logo",
                attrs: {src: ""}
            })]), t._v(" "), t.showUserInfo && "Login" !== t.$route.name ? n("UserInfo", {
                attrs: {
                    currentUser: t.currentUser,
                    needDark: t.needDark
                }
            }) : t._e()], 1), t._v(" "), n("ul", {staticClass: "navigation-bar"}, [t.showSearchBar() ? n("li", {staticClass: "search-bar"}) : t._e(), t._v(" "), t.navBar.home ? n("router-link", {
                staticClass: "active",
                attrs: {exact: "", to: "/", owl: "home_tab"}
            }, [n("li", {
                staticClass: "navigation-item home",
                class: {"current-tab": "Home" === t.$route.name}
            }, [t._v(t._s(t.navBar.home))])]) : t._e(), t._v(" "), t.navBar.trending ? n("div", {
                staticClass: "active",
                on: {click: t.handleGoToExplore}
            }, [n("li", {
                staticClass: "navigation-item community-delicate",
                class: {"current-tab": t.judgeExplore()}
            }, [t._v(t._s(t.navBar.trending))])]) : t._e(), t._v(" "), t.navBar.businessCooperation ? n("router-link", {
                staticClass: "active business-link",
                attrs: {to: ""}
            }, [n("li", {
                staticClass: "navigation-item business",
                class: {"current-tab": t.judgePartnership()}
            }, [t._v(t._s(t.navBar.businessCooperation) + "\n        "), t.judgeExplore() || t.judgePartnership() ? n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            }) : n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            })]), t._v(" "), n("div", {staticClass: "drop-down-wrapper"}, [n("div", {staticClass: "dropdown-content"}, [n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoBusiness(0)
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfBusinessCooperation.brand))]), t._v(" "), n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoBusiness("Brand")
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfBusinessCooperation.advertisement))]), t._v(" "), n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoBusiness(1)
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfBusinessCooperation.partnership))]), t._v(" "), n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoBusiness(2)
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfBusinessCooperation.business))])])])]) : t._e(), t._v(" "), t.navBar.creativeTool ? n("router-link", {
                staticClass: "active business-link creative-link",
                attrs: {to: ""}
            }, [n("div", {staticClass: "sticker img"}, [t._v("视频上传")]), t._v(" "), n("li", {
                staticClass: "navigation-item creative",
                on: {click: t.gotoVideoPost}
            }, [t._v(t._s(t.navBar.creativeTool) + "\n        "), t.judgeExplore() || t.judgePartnership() ? n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            }) : n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            })]), t._v(" "), n("div", {staticClass: "drop-down-wrapper"}, [n("div", {staticClass: "dropdown-content"}, [n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoVideoPost(e)
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfCreativeTool.video))]), t._v(" "), n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.gotoLiveOBS(e)
                    }
                }
            }, [t._v(t._s(t.navBar.childrenOfCreativeTool.obs))])])])]) : t._e(), t._v(" "), t.navBar.newsCenter ? n("router-link", {
                staticClass: "active",
                attrs: {to: "/protocols/news"}
            }, [n("li", {
                staticClass: "navigation-item news-center",
                class: {"current-tab": t.judgeNews()}
            }, [t._v(t._s(t.navBar.newsCenter))])]) : t._e(), t._v(" "), t.navBar.aboutUs ? n("router-link", {
                staticClass: "active",
                attrs: {to: "/protocols/about"}
            }, [n("li", {
                staticClass: "navigation-item about-us",
                class: {"current-tab": "About" === t.$route.name}
            }, [t._v(t._s(t.navBar.aboutUs))])]) : t._e(), t._v(" "), t.navBar.socialResponsibility ? n("router-link", {
                staticClass: "active",
                attrs: {to: "/protocols/liability"}
            }, [n("li", {
                staticClass: "navigation-item liability",
                class: {"current-tab": t.judgeLiability()}
            }, [t._v(t._s(t.navBar.socialResponsibility))])]) : t._e(), t._v(" "), t.navBar.joinUs ? n("router-link", {
                staticClass: "active",
                attrs: {to: ""}
            }, [n("li", {
                staticClass: "navigation-item",
                on: {click: t.gotoRecruit}
            }, [t._v(t._s(t.navBar.joinUs))])]) : t._e(), t._v(" "), n("router-link", {
                staticClass: "active translation-wrapper",
                attrs: {to: ""}
            }, [n("li", {staticClass: "navigation-item translation"}, [t._v("\n        " + t._s("zh-CN" === t.$i18n.getLang() ? "中文" : "EN") + "\n        "), t.judgeExplore() || t.judgePartnership() ? n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            }) : n("img", {
                staticClass: "arrow",
                attrs: {src: ""}
            })]), t._v(" "), n("div", {
                staticClass: "drop-up-wrapper",
                class: ["zh-CN" === t.$i18n.getLang() ? "chinese" : "english"]
            }, [n("div", {staticClass: "drop-up-content"}, ["zh-CN" !== t.$i18n.getLang() ? n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.setLang("zh-CN")
                    }
                }
            }, [t._v("中文(简体)")]) : n("span", {
                on: {
                    click: function (e) {
                        return e.preventDefault(), t.setLang("en-US")
                    }
                }
            }, [t._v("English(US)")])])])])], 1)])
        }), [], !1, null, "088be86e", null).exports), j = {
            name: "Footer",
            props: {darkTheme: {type: Boolean, default: !1}},
            computed: {
                currentLang: {
                    get: function () {
                        return this.currentLanguage
                    }, set: function (t) {
                        this.$i18n.setLang(t), this.currentLanguage = this.corpus[this.$i18n.getLang()]
                    }
                }, policy: function () {
                    return this.$locale.global.state.policy
                }
            },
            data: function () {
                return {
                    currentLanguage: "",
                    corpus: {"en-US": "English(US)", "zh-CN": "中文(简体)"},
                    showPopOver: !1,
                    timer: {},
                    showList: {
                        four: ["Partnership", "Explore", "Home", "CommunityRule", "Board", "NoteView", "User"],
                        communityRule: ["Explore", "Home", "CommunityRule", "Board", "NoteView", "User"],
                        ratingTerms: ["Partnership", "RatingTerms"]
                    }
                }
            },
            methods: {
                gotoPage: function (t) {
                    this.$router.push({name: t})
                }, setLang: function (t) {
                    var e;
                    this.currentLang = t;
                    var n = this.$route.path, r = this.$route.query, i = {};
                    _()(e = v()(r)).call(e, (function (t) {
                        i[t] = r[t]
                    })), i.language = t;
                    var o = {path: n, query: i};
                    this.$router.push(o)
                }
            },
            created: function () {
                this.currentLanguage = this.corpus[this.$i18n.getLang()]
            }
        }, L = (n(584), Object(O.a)(j, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "footer",
                class: [t.darkTheme ? "dark-theme" : "light-theme", {white: ["ThirdStore", "About"].includes(t.$route.name)}, {transparent: "Home" === t.$route.name}]
            }, [n("div", {staticClass: "top"}, [n("div", {staticClass: "navigation-bar-wrapper"}, [n("ul", {
                staticClass: "navigation-bar",
                class: [t.showList.four.includes(t.$route.name) ? "four" : "three", "中文(简体)" !== t.currentLang ? "english" : "chinese"]
            }, [n("li", {
                staticClass: "navigation-item sign-up", on: {
                    click: function (e) {
                        return t.gotoPage("Terms")
                    }
                }
            }, [t._v(t._s(t.policy.registrationAgreement))]), t._v(" "), n("li", {
                staticClass: "navigation-item privacy",
                on: {
                    click: function (e) {
                        return t.gotoPage("Privacy")
                    }
                }
            }, [t._v(t._s(t.policy.privacyPolicy))]), t._v(" "), n("li", {
                staticClass: "navigation-item complaint",
                on: {
                    click: function (e) {
                        return t.gotoPage("ContentDisputeView")
                    }
                }
            }, [t._v(t._s(t.policy.contentDispute))]), t._v(" "), t.showList.ratingTerms.includes(t.$route.name) ? n("li", {
                staticClass: "navigation-item remark",
                on: {
                    click: function (e) {
                        return t.gotoPage("RatingTerms")
                    }
                }
            }, [t._v(t._s(t.policy.ratingTerms))]) : t._e(), t._v(" "), t.showList.communityRule.includes(t.$route.name) ? n("li", {
                staticClass: "navigation-item community",
                on: {
                    click: function (e) {
                        return t.gotoPage("CommunityRule")
                    }
                }
            }, [t._v(t._s(t.policy.communityRule))]) : t._e()])])]), t._v(" "), n("div", {staticClass: "bottom"}, [n("div", {staticClass: "info"}, [n("span", {staticClass: "line"}, [n("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [t._v("" + t._s((new Date).getFullYear()) + " ")]), t._v(" "), n("span", [t._v("")]), t._v(" "), n("span", [t._v("")]), t._v(" "), t._m(0), t._v(" "), n("span", [t._v("| "), n("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [t._v(t._s((new Date).getFullYear()) + "  "), n("i", {staticClass: "police"})])])]), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), t._m(3)])])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", [this._v("| "), e("a", {
                attrs: {
                    target: "_blank",
                    href: ""
                }
            }, [this._v("")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", {staticClass: "line"}, [e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v(" ")]), this._v("\n          | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v("")]), this._v("\n          | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [e("i", {staticClass: "rank"}), this._v(" ")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", {staticClass: "line"}, [e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v("")]), this._v("\n        | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v("")]), this._v("\n        | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v(" ")])])
        }, function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", {staticClass: "line"}, [e("span", {attrs: {title: ""}}, [this._v("")]), this._v("\n        | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v("")]), this._v("\n        | "), e("a", {
                attrs: {
                    target: "_blank",
                    href: "",
                    title: ""
                }
            }, [this._v("")])])
        }], !1, null, "299452bf", null).exports), P = {
            data: function () {
                return {bigewm: !1}
            }, methods: {
                enter: function () {
                    this.bigewm = !0
                }, out: function () {
                    this.bigewm = !1
                }
            }
        }, M = (n(585), {
            name: "RedAppLayout", components: {
                RedHeader: N, RedFooter: L, QrCode: Object(O.a)(P, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("div", {staticClass: "ewm"}, [e("div", {
                        staticClass: "smallewm",
                        on: {mouseenter: this.enter, mouseout: this.out}
                    }), this._v(" "), e("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: this.bigewm,
                            expression: "bigewm"
                        }], staticClass: "bigewm"
                    }, [e("img", {
                        staticClass: "ewimg",
                        attrs: {src: ""}
                    }), this._v(" "), e("p", {staticClass: "title"}, [this._v("")])])])
                }), [], !1, null, "0c11e705", null).exports
            }, data: function () {
                return {currentUser: null, needLogin: !1}
            }, computed: {
                showRed101Section: function () {
                    return (new Date).getTime() < 16021728e5 && "Home" === this.$route.name
                }, logoFil: function () {
                    return "Home" === this.$route.name ? "#fff" : "#ff2442"
                }, darkTheme: function () {
                    return "Home" === this.$route.name
                }, isGray: function () {
                    var t, e = b()(t = ["Home", "Explore"]).call(t, this.$route.name) >= 0, n = this.$route.query.isGray,
                        r = (new Date).getTime(), i = new Date("2020/04/04 00:00").getTime(),
                        o = new Date("2020/04/05 00:00").getTime();
                    return r >= i && r <= o && e || "yes" === n && e
                }
            }, created: function () {
                if (this.$route.query.language) this.$i18n.setLang(this.$route.query.language); else if ("en-US" === this.$i18n.getLang()) {
                    var t, e = this.$route.query, n = {};
                    _()(t = v()(e)).call(t, (function (t) {
                        n[t] = e[t]
                    })), n.language = this.$i18n.getLang();
                    var r = {path: this.$route.path, query: n};
                    this.$router.push(r)
                }
            }, mounted: function () {
                var t = this;
                this.needLogin && E("myInfo", {}).then((function (e) {
                    t.currentUser = e
                }))
            }
        }), R = (n(586), n(587), Object(O.a)(M, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "pc-wrapper notranslate",
                class: {"gray-filter": t.isGray, relative: t.showRed101Section}
            }, [t.showRed101Section ? n("div", {staticClass: "red101-top-section"}, [n("div", {staticClass: "red101-top-section-item left-top-section-item"}), t._v(" "), n("div", {staticClass: "red101-top-section-item center-top-section-item"}), t._v(" "), n("div", {staticClass: "red101-top-section-item right-top-section-item"})]) : t._e(), t._v(" "), n("red-header", {
                staticClass: "red-header",
                class: {"home-header": "Home" === t.$route.name, red101: t.showRed101Section},
                attrs: {
                    showUserInfo: t.needLogin,
                    currentUser: t.currentUser,
                    "logo-fill": t.logoFil,
                    "dark-theme": t.darkTheme
                }
            }), t._v(" "), n("router-view", {
                staticClass: "pc-container",
                attrs: {currentUser: t.currentUser}
            }), t._v(" "), "Home" !== t.$route.name ? n("qr-code", {staticClass: "fixed-qr-code"}) : t._e(), t._v(" "), n("red-footer", {
                staticClass: "footer",
                class: {"home-footer": "Home" === t.$route.name},
                attrs: {"dark-theme": t.darkTheme}
            })], 1)
        }), [], !1, null, "64799b5b", null).exports), B = n(10), D = n.n(B), U = n(14), $ = n.n(U), q = n(7), F = n.n(q),
        X = n(8), z = n.n(X), H = n(9), G = n.n(H), W = n(6), V = n.n(W), J = n(12), K = {
            name: "NewBanner",
            props: {
                imgSrc: {type: String, default: ""}, showText: {
                    type: Object, default: function () {
                        return {}
                    }
                }, innerStyle: {
                    type: Object, default: function () {
                        return {}
                    }
                }, bannerStyle: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            },
            data: function () {
                return {}
            }
        }, Q = (n(588), Object(O.a)(K, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                staticClass: "oneBanner",
                style: {backgroundImage: "url(" + t.imgSrc + ")"}
            }, [n("div", {
                staticClass: "inner",
                style: t.innerStyle
            }), t._v(" "), n("span", {staticClass: "title"}, [t._v(t._s(t.showText.title))]), t._v(" "), t.showText.content ? n("span", {staticClass: "line"}) : t._e(), t._v(" "), t.showText.content ? n("span", {staticClass: "content"}, [t._v(t._s(t.showText.content))]) : t._e()])
        }), [], !1, null, "d4ca39ea", null).exports), Y = n(21), Z = n.n(Y), tt = n(3), et = n.n(tt),
        nt = {name: "ArrowRight"}, rt = {
            name: "CommonNews", components: {
                ArrowRight: Object(O.a)(nt, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("svg", {
                        attrs: {
                            width: "22px",
                            height: "13px",
                            viewBox: "0 0 22 13",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Page-1",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "新闻中心1440-",
                            transform: "translate(-1169.000000, -1388.000000)",
                            fill: "#FF2442",
                            "fill-rule": "nonzero"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Group-16",
                            transform: "translate(1.000000, 500.000000)"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Group-8-Copy",
                            transform: "translate(250.000000, 552.000000)"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Group-11",
                            transform: "translate(842.000000, 330.000000)"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "arrow2-copy-2",
                            transform: "translate(87.000000, 12.500000) scale(-1, 1) translate(-87.000000, -12.500000) translate(76.000000, 6.000000)"
                        }
                    }, [e("path", {
                        attrs: {
                            d: "M19.5635935,5.90909091 L14.7256921,0.971232891 L15.6772644,0 L22,6.45337063 L15.6772644,12.9067413 L14.7256921,11.9355084 L19.4722226,7.09090909 L-4.54747351e-13,7.09090909 L-4.54747351e-13,5.90909091 L19.5635935,5.90909091 Z",
                            id: "Combined-Shape",
                            transform: "translate(11.000000, 6.453371) scale(-1, 1) translate(-11.000000, -6.453371) "
                        }
                    })])])])])])])])
                }), [], !1, null, "6f0f9140", null).exports
            }, props: {
                news: {
                    type: Array, default: function () {
                        return []
                    }
                }, limit: {type: Number, default: 5}
            }, computed: {
                sliceNews: function () {
                    var t, e = [];
                    return _()(t = this.news).call(t, (function (t) {
                        e = et()(e).call(e, t.activities)
                    })), Z()(e).call(e, 0, this.limit)
                }, more: function () {
                    return this.$locale.global.state.newsCenter.more
                }
            }, data: function () {
                return {}
            }, methods: {
                forMore: function () {
                    this.$emit("forMore")
                }, viewReport: function (t) {
                    if (t.src && window.open(t.src, "_blank"), t.index) {
                        var e = this.$router.resolve({
                            name: "ActivityItem",
                            query: {id: t.index, language: this.$i18n.getLang()}
                        }).href;
                        window.open(e, "_self")
                    }
                }
            }
        }, it = (n(589), Object(O.a)(rt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "news-list"}, [t._l(t.sliceNews, (function (e) {
                return n("div", {
                    key: e.id,
                    staticClass: "news-item",
                    class: {hoverable: e.src || e.index},
                    on: {
                        click: function (n) {
                            return t.viewReport(e)
                        }
                    }
                }, [n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("span", {staticClass: "date-press"}, [e.press ? n("span", {staticClass: "press"}, [t._v(t._s(e.press))]) : t._e(), t._v(" "), n("span", {staticClass: "date"}, [t._v(t._s(e.date))])])])
            })), t._v(" "), n("div", {staticClass: "more-item"}, [n("span", {
                staticClass: "more",
                on: {click: t.forMore}
            }, [n("span", [t._v(t._s(t.more))]), n("arrow-right", {staticClass: "right-icon"})], 1)])], 2)
        }), [], !1, null, "5bcf5a13", null).exports), ot = n(90), at = n.n(ot), st = {name: "ArrowLeft"},
        ct = Object(O.a)(st, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    width: "16px",
                    height: "10px",
                    viewBox: "0 0 16 10",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [e("g", {
                attrs: {
                    id: "设计稿*1",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                }
            }, [e("g", {
                attrs: {
                    id: "Artboard",
                    transform: "translate(-267.000000, -493.000000)",
                    fill: "#FFFFFF",
                    "fill-rule": "nonzero"
                }
            }, [e("g", {attrs: {id: "Group-3"}}, [e("g", {
                attrs: {
                    id: "Group-9",
                    transform: "translate(267.000000, 490.000000)"
                }
            }, [e("g", {
                attrs: {
                    id: "arrow2",
                    transform: "translate(0.000000, 3.000000)"
                }
            }, [e("path", {
                attrs: {
                    d: "M14.228068,4.59090909 L10.7095942,1.172392 L11.4016468,0.5 L16,4.96771813 L11.4016468,9.43543626 L10.7095942,8.76304426 L14.1616164,5.40909091 L-3.41060513e-13,5.40909091 L-3.41060513e-13,4.59090909 L14.228068,4.59090909 Z",
                    id: "Combined-Shape",
                    transform: "translate(8.000000, 4.967718) scale(-1, 1) translate(-8.000000, -4.967718) "
                }
            })])])])])])])
        }), [], !1, null, "12d852f0", null).exports, ut = {name: "ArrowRight"}, lt = Object(O.a)(ut, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    width: "16px",
                    height: "10px",
                    viewBox: "0 0 16 10",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [e("g", {
                attrs: {
                    id: "设计稿*1",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd"
                }
            }, [e("g", {
                attrs: {
                    id: "Artboard",
                    transform: "translate(-423.000000, -493.000000)",
                    fill: "#FFFFFF",
                    "fill-rule": "nonzero"
                }
            }, [e("g", {attrs: {id: "Group-3"}}, [e("g", {
                attrs: {
                    id: "Group-9",
                    transform: "translate(267.000000, 490.000000)"
                }
            }, [e("g", {
                attrs: {
                    id: "arrow2-copy",
                    transform: "translate(164.000000, 8.000000) scale(-1, 1) translate(-164.000000, -8.000000) translate(156.000000, 3.000000)"
                }
            }, [e("path", {
                attrs: {
                    d: "M14.228068,4.59090909 L10.7095942,1.172392 L11.4016468,0.5 L16,4.96771813 L11.4016468,9.43543626 L10.7095942,8.76304426 L14.1616164,5.40909091 L-3.41060513e-13,5.40909091 L-3.41060513e-13,4.59090909 L14.228068,4.59090909 Z",
                    id: "Combined-Shape",
                    transform: "translate(8.000000, 4.967718) scale(-1, 1) translate(-8.000000, -4.967718) "
                }
            })])])])])])])
        }), [], !1, null, "315fd204", null).exports, ht = {
            name: "FairyTale", props: {
                stories: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {}, components: {ArrowLeft: ct, ArrowRight: lt}, data: function () {
                return {
                    currentIndex: 0,
                    leftCurrentIndex: 0,
                    middleCurrentIndex: 0,
                    rightCurrentIndex: 0,
                    playerItem: {},
                    currentStories: [],
                    fairyAmount: 0,
                    translationComplete: !0,
                    currTransl: [],
                    moveOffset: 0,
                    clickedVideo: !1,
                    leftTranslationComplete: !0,
                    middleTranslationComplete: !0,
                    rightTranslationComplete: !0,
                    leftMoveOffset: 0,
                    middleMoveOffset: 0,
                    rightMoveOffset: 0,
                    leftCurrTransl: [],
                    middleCurrTransl: [],
                    rightCurrTransl: [],
                    storiesSum: 0
                }
            }, methods: {
                leftCarouselDisplay: function () {
                    var t = this, e = function () {
                        t.leftTranslationComplete = !0
                    }, n = document.querySelector(".left-content-container");
                    this.storiesSum = document.getElementsByClassName("left-content").length, this.leftMoveOffset = Math.round(at()(window.getComputedStyle(document.querySelector(".left-content-window")).width)), document.querySelector(".left-content-container").style.width = "".concat(this.storiesSum * this.leftMoveOffset, "px");
                    for (var r = 0; r < this.storiesSum; r++) this.leftCurrTransl[r] = -this.leftMoveOffset, document.getElementsByClassName("left-content")[r].addEventListener("transitionend", e, !0), document.getElementsByClassName("left-content")[r].addEventListener("webkitTransitionEnd", e, !0), document.getElementsByClassName("left-content")[r].addEventListener("oTransitionEnd", e, !0), document.getElementsByClassName("left-content")[r].addEventListener("MSTransitionEnd", e, !0);
                    n.insertBefore(document.querySelector(".left-content-container").children[this.storiesSum - 1], document.querySelector(".left-content-container").children[0])
                }, middleCarouselDisplay: function () {
                    var t = this, e = function () {
                        t.middleTranslationComplete = !0
                    }, n = document.querySelector(".middle-container");
                    this.storiesSum = document.getElementsByClassName("middle").length, this.middleMoveOffset = Math.round(at()(window.getComputedStyle(document.querySelector(".middle-window")).width)), document.querySelector(".middle-container").style.width = "".concat(this.storiesSum * this.middleMoveOffset, "px");
                    for (var r = 0; r < this.storiesSum; r++) this.middleCurrTransl[r] = -this.middleMoveOffset, document.getElementsByClassName("middle")[r].addEventListener("transitionend", e, !0), document.getElementsByClassName("middle")[r].addEventListener("webkitTransitionEnd", e, !0), document.getElementsByClassName("middle")[r].addEventListener("oTransitionEnd", e, !0), document.getElementsByClassName("middle")[r].addEventListener("MSTransitionEnd", e, !0);
                    n.insertBefore(document.querySelector(".middle-container").children[this.storiesSum - 1], document.querySelector(".middle-container").children[0])
                }, rightCarouselDisplay: function () {
                    var t = this, e = function () {
                        t.rightTranslationComplete = !0
                    }, n = document.querySelector(".right-container");
                    this.storiesSum = document.getElementsByClassName("right").length, this.rightMoveOffset = Math.round(at()(window.getComputedStyle(document.querySelector(".right-window")).width)), document.querySelector(".right-container").style.width = "".concat(this.storiesSum * this.rightMoveOffset, "px");
                    for (var r = 0; r < this.storiesSum; r++) this.rightCurrTransl[r] = -2 * this.rightMoveOffset, document.getElementsByClassName("right")[r].addEventListener("transitionend", e, !0), document.getElementsByClassName("right")[r].addEventListener("webkitTransitionEnd", e, !0), document.getElementsByClassName("right")[r].addEventListener("oTransitionEnd", e, !0), document.getElementsByClassName("right")[r].addEventListener("MSTransitionEnd", e, !0);
                    n.insertBefore(document.querySelector(".right-container").children[this.storiesSum - 1], document.querySelector(".right-container").children[0])
                }, allPrev: function () {
                    if (this.pauseVideo(), !0 === this.leftTranslationComplete) {
                        this.leftTranslationComplete = !1, this.leftCurrentIndex -= 1, -1 === this.leftCurrentIndex && (this.leftCurrentIndex = this.storiesSum - 1);
                        for (var t = this.leftCurrentIndex % this.storiesSum, e = 0; e < this.storiesSum; e++) {
                            var n = document.getElementsByClassName("left-content")[e];
                            n.style.opacity = "1", n.style.transform = "translateX(".concat(this.leftCurrTransl[e] + this.leftMoveOffset, "px)"), this.leftCurrTransl[e] = this.leftCurrTransl[e] + this.leftMoveOffset
                        }
                        var r = document.getElementsByClassName("left-content")[t];
                        r.style.transform = "translateX(".concat(this.leftCurrTransl[t] - this.leftMoveOffset * this.storiesSum, "px)"), r.style.opacity = "0", this.leftCurrTransl[t] = this.leftCurrTransl[t] - this.leftMoveOffset * this.storiesSum
                    }
                    if (!0 === this.middleTranslationComplete) {
                        this.middleTranslationComplete = !1, this.middleCurrentIndex -= 1, -1 === this.middleCurrentIndex && (this.middleCurrentIndex = this.storiesSum - 1);
                        for (var i = this.middleCurrentIndex % this.storiesSum, o = 0; o < this.storiesSum; o++) {
                            var a = document.getElementsByClassName("middle")[o];
                            a.style.opacity = "1", a.style.transform = "translateX(".concat(this.middleCurrTransl[o] + this.middleMoveOffset, "px)"), this.middleCurrTransl[o] = this.middleCurrTransl[o] + this.middleMoveOffset
                        }
                        var s = document.getElementsByClassName("middle")[i];
                        s.style.transform = "translateX(".concat(this.middleCurrTransl[i] - this.middleMoveOffset * this.storiesSum, "px)"), s.style.opacity = "0", this.middleCurrTransl[i] = this.middleCurrTransl[i] - this.middleMoveOffset * this.storiesSum
                    }
                    if (!0 === this.rightTranslationComplete) {
                        this.rightTranslationComplete = !1, this.rightCurrentIndex -= 1, -1 === this.rightCurrentIndex && (this.rightCurrentIndex = this.storiesSum - 1);
                        for (var c = this.rightCurrentIndex % this.storiesSum, u = 0; u < this.storiesSum; u++) {
                            var l = document.getElementsByClassName("right")[u];
                            l.style.opacity = "1", l.style.transform = "translateX(".concat(this.rightCurrTransl[u] + this.rightMoveOffset, "px)"), this.rightCurrTransl[u] = this.rightCurrTransl[u] + this.rightMoveOffset
                        }
                        var h = document.getElementsByClassName("right")[c];
                        h.style.transform = "translateX(".concat(this.rightCurrTransl[c] - this.rightMoveOffset * this.storiesSum, "px)"), h.style.opacity = "0", this.rightCurrTransl[c] = this.rightCurrTransl[c] - this.rightMoveOffset * this.storiesSum
                    }
                }, allNext: function () {
                    if (this.pauseVideo(), !0 === this.leftTranslationComplete) {
                        this.leftTranslationComplete = !1;
                        var t = this.leftCurrentIndex % this.storiesSum;
                        this.leftCurrentIndex += 1;
                        for (var e = 0; e < this.storiesSum; e++) {
                            var n = document.getElementsByClassName("left-content")[e];
                            n.style.opacity = "1", n.style.transform = "translateX(".concat(this.leftCurrTransl[e] - this.leftMoveOffset, "px)"), this.leftCurrTransl[e] = this.leftCurrTransl[e] - this.leftMoveOffset
                        }
                        var r = document.getElementsByClassName("left-content")[t];
                        r.style.transform = "translateX(".concat(this.leftCurrTransl[t] + this.leftMoveOffset * this.storiesSum, "px)"), r.style.opacity = "0", this.leftCurrTransl[t] = this.leftCurrTransl[t] + this.leftMoveOffset * this.storiesSum
                    }
                    if (!0 === this.middleTranslationComplete) {
                        this.middleTranslationComplete = !1;
                        var i = this.middleCurrentIndex % this.storiesSum;
                        this.middleCurrentIndex += 1;
                        for (var o = 0; o < this.storiesSum; o++) {
                            var a = document.getElementsByClassName("middle")[o];
                            a.style.opacity = "1", a.style.transform = "translateX(".concat(this.middleCurrTransl[o] - this.middleMoveOffset, "px)"), this.middleCurrTransl[o] = this.middleCurrTransl[o] - this.middleMoveOffset
                        }
                        var s = document.getElementsByClassName("middle")[i];
                        s.style.transform = "translateX(".concat(this.middleCurrTransl[i] + this.middleMoveOffset * this.storiesSum, "px)"), s.style.opacity = "0", this.middleCurrTransl[i] = this.middleCurrTransl[i] + this.middleMoveOffset * this.storiesSum
                    }
                    if (!0 === this.rightTranslationComplete) {
                        this.rightTranslationComplete = !1;
                        var c = this.rightCurrentIndex % this.storiesSum;
                        this.rightCurrentIndex += 1;
                        for (var u = 0; u < this.storiesSum; u++) {
                            var l = document.getElementsByClassName("right")[u];
                            l.style.opacity = "1", l.style.transform = "translateX(".concat(this.rightCurrTransl[u] - this.rightMoveOffset, "px)"), this.rightCurrTransl[u] = this.rightCurrTransl[u] - this.rightMoveOffset
                        }
                        var h = document.getElementsByClassName("right")[c];
                        h.style.transform = "translateX(".concat(this.rightCurrTransl[c] + this.rightMoveOffset * this.storiesSum, "px)"), h.style.opacity = "0", this.rightCurrTransl[c] = this.rightCurrTransl[c] + this.rightMoveOffset * this.storiesSum
                    }
                }, playVideo: function () {
                    this.playerItem = document.getElementsByClassName("video-tag")[(this.middleCurrentIndex + 1) % this.storiesSum], this.playerItem.play(), this.clickedVideo = !0
                }, pauseVideo: function () {
                    this.playerItem = document.getElementsByClassName("video-tag")[(this.middleCurrentIndex + 1) % this.storiesSum], this.playerItem.pause(), this.clickedVideo = !1
                }, playSubVideo: function () {
                    this.allNext(), this.playVideo()
                }
            }, mounted: function () {
                this.leftCarouselDisplay(), this.middleCarouselDisplay(), this.rightCarouselDisplay()
            }
        }, ft = (n(594), Object(O.a)(ht, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "fairy-tale-container"}, [n("div", {staticClass: "left"}, [n("div", {staticClass: "left-content-window"}, [n("div", {staticClass: "left-content-wrapper"}, [n("div", {staticClass: "left-content-container animate"}, t._l(t.stories, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "left-content animate"
                }, [e.term ? n("span", {staticClass: "header"}, [t._v(t._s(e.term) + ":")]) : t._e(), t._v(" "), n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("span", {staticClass: "content"}, [t._v(t._s(e.content))])])
            })), 0)])]), t._v(" "), n("div", {staticClass: "footer"}, [n("span", {
                staticClass: "arrow-left",
                on: {
                    click: function (e) {
                        return t.allPrev()
                    }
                }
            }, [n("arrow-left")], 1), t._v(" "), n("span", {staticClass: "index"}, [t._v("\n        " + t._s(("0" + (t.leftCurrentIndex % t.stories.length + 1)).slice(-2)) + " / " + t._s(("0" + t.stories.length).slice(-2)) + "\n      ")]), t._v(" "), n("span", {
                staticClass: "arrow-right",
                on: {
                    click: function (e) {
                        return t.allNext()
                    }
                }
            }, [n("arrow-right")], 1)])]), t._v(" "), n("div", {staticClass: "middle-window"}, [n("div", {staticClass: "middle-wrapper"}, [n("div", {staticClass: "middle-container animate"}, t._l(t.stories, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "middle animate"
                }, [n("div", {staticClass: "video-wrapper"}, [n("video", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.clickedVideo,
                        expression: "clickedVideo"
                    }],
                    staticClass: "video-tag",
                    attrs: {controls: "", autoplay: !1, loop: !1, preload: "none"},
                    domProps: {muted: !1}
                }, [n("source", {
                    attrs: {
                        src: e.videoSrc,
                        type: "video/mp4"
                    }
                })]), t._v(" "), t.clickedVideo ? t._e() : n("div", {
                    staticClass: "video-mask",
                    style: {backgroundImage: "url(" + e.src + ")"}
                })])])
            })), 0)]), t._v(" "), t.clickedVideo ? t._e() : n("i", {
                staticClass: "play-button",
                on: {click: t.playVideo}
            })]), t._v(" "), n("div", {staticClass: "right-window"}, [n("div", {staticClass: "right-wrapper"}, [n("div", {staticClass: "right-container animate"}, t._l(t.stories, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "right animate"
                }, [e.term ? n("span", {staticClass: "header"}, [t._v(t._s(e.term))]) : t._e(), t._v(" "), n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("div", {
                    staticClass: "sub-video",
                    style: {backgroundImage: "url(" + e.src + ")"},
                    on: {click: t.playSubVideo}
                })])
            })), 0)]), t._v(" "), n("i", {staticClass: "sub-play-button", on: {click: t.playSubVideo}})])])
        }), [], !1, null, "ec74193e", null).exports), dt = {
            "zh-CN": [{
                year: 2019,
                activities: [{title: "新商业引领者", press: "36氪", date: "2019.07"}, {
                    title: "创始人瞿芳获“中国商业创变者50人”称号",
                    press: "36氪",
                    date: "2019.07"
                }, {title: "蝉联“福布斯中国最具创新力企业榜”", press: "福布斯", date: "2019.06"}, {
                    title: "创始人瞿芳获“2019全球商业最具创意人物”称号",
                    press: "快公司",
                    date: "2019.06"
                }, {title: "“全球颠覆者50”榜单TOP 10", press: "CNBC", date: "2019.05"}, {
                    title: "上海市第八届“优秀网站提名网站”",
                    press: "网信办",
                    date: "2019.04"
                }, {title: "2019中国最佳创新公司", press: "快公司", date: "2019.03.26"}]
            }, {
                year: 2018,
                activities: [{title: "21未来之星年度最具成长性的新兴企业榜", press: "中国企业家", date: "2018"}, {
                    title: "2018年度社区社交之王",
                    press: "36氪",
                    date: "2018"
                }, {title: "2018年度新电商", press: "36氪", date: "2018"}, {
                    title: "2018年度社交零售十大影响力平台",
                    press: "虎嗅",
                    date: "2018"
                }, {title: "2018中国最具创新力企业榜TOP 50", press: "福布斯", date: "2018"}, {
                    title: "创始人瞿芳获2018中国商界25位潜力女性",
                    press: "福布斯",
                    date: "2018"
                }, {title: "创始人瞿芳获36位36岁以下了不起的创业者称号", press: "36氪", date: "2018"}, {
                    title: "创始人瞿芳获2018中国十大经济潮流人物",
                    press: "新浪",
                    date: "2018"
                }, {title: "国际创新创业奖", press: "共青团中央", date: "2018"}]
            }, {
                year: 2017,
                activities: [{title: "中国品牌奖", press: "人民日报", date: "2017"}, {title: "电子商务示范企业", press: "商务部", date: "2017"}]
            }, {year: 2016, activities: [{title: "互联网+百佳实践案例", press: "国家发改委", date: "2016"}]}, {
                year: 2015,
                activities: [{title: '"星APP全民榜"时尚购物类年度最具突破应用', press: "腾讯应用宝", date: "2015"}]
            }],
            "en-US": [{
                year: 2019,
                activities: [{
                    title: "New Business Leader",
                    press: "36Kr",
                    date: "2019.07"
                }, {
                    title: 'The founder Miranda Qu won the title of "50 business innovators in China"',
                    press: "36Kr",
                    date: "2019.07"
                }, {
                    title: '"Forbes China\'s Most Innovative Enterprise 2019"',
                    press: "Forbes",
                    date: "2019.06"
                }, {
                    title: 'The founder Miranda Qu won "Globe Business Most Innovative People 2019"',
                    press: "Fast Company",
                    date: "2019.06"
                }, {
                    title: "Top 10 of CNBC's “Disruptor 50\" in 2019",
                    press: "CNBC",
                    date: "2019.05"
                }, {title: "China's Most Innovative Company 2019", press: "Fast Company", date: "2019.03.26"}]
            }, {
                year: 2018,
                activities: [{
                    title: "The Most Growing Emerging Companies of the Year in the 21 Future Stars List",
                    press: "CHINA ENTREPRENEUR",
                    date: "2018"
                }, {title: "Social Community King2018", press: "36Kr", date: "2018"}, {
                    title: "New E-commerce 2018",
                    press: "36Kr",
                    date: "2018"
                }, {
                    title: "Top 10 Influential Platforms for Social Retail 2018",
                    press: "HUXIU",
                    date: "2018"
                }, {
                    title: "Top 50 China’s Most Innovative Companies 2018",
                    press: "Forbes",
                    date: "2018"
                }, {
                    title: 'The founder Miranda Qu won "25 Potential Women of Chinese Business Community" in 2018',
                    press: "Forbes",
                    date: "2018"
                }, {
                    title: 'The founder Miranda Qu won the title of "36 Outstanding Entrepreneurs Under 36"',
                    press: "36Kr",
                    date: "2018"
                }, {
                    title: 'The founder Miranda Qu won "Top10 China\'s Economic Figures 2018"',
                    press: "SINA",
                    date: "2018"
                }]
            }, {year: 2017, activities: [{title: "China Brand Award", press: "People's Daily", date: "2017"}]}, {
                year: 2015,
                activities: [{
                    title: "The Most Breakthrough APP of fashion shopping category in the annual national Star APP list",
                    press: "Tencent YingYongBao",
                    date: "2015"
                }]
            }]
        }, pt = {
            "zh-CN": [{
                year: 2020,
                activities: [{
                    title: "民宿预定首次亮相小红书直播间 交易量转化率领跑行业",
                    press: "中国经济网",
                    date: "2020.10.20",
                    src: ""
                }, {
                    title: "小红书创始人瞿芳：品牌与用户沟通正从“教学模式”转向“恋爱模式”",
                    press: "新华网",
                    date: "2020.10.22",
                    src: ""
                }, {
                    title: "小红书啄木鸟计划处置账号7383个 处理21.3万篇笔记",
                    press: "中国日报网",
                    date: "2020.10.23",
                    src: ""
                }, {
                    title: "小红书：发力在线新经济 让年轻一代找到归属",
                    press: "人民网",
                    date: "2020.10.12",
                    src: ""
                }, {
                    title: "小红书测试视频互动功能 降低用户视频创作门槛",
                    press: "环球网",
                    date: "2020.10.15",
                    src: ""
                }, {
                    title: "小红书捧红新品牌 直播带货为Spes洗发水贡献70%销量",
                    press: "中国网",
                    date: "2020.10.16",
                    src: ""
                }, {
                    title: "小红书发布十一出行消费数据，“周边游”热度暴涨377%",
                    press: "新华网",
                    date: "2020.10.10",
                    src: ""
                }, {
                    title: "“云看秀”来袭，小红书助上海时装周解锁新玩法",
                    press: "米娜时尚网",
                    date: "2020.10.12",
                    src: ""
                }, {
                    title: "付鹏宣布10月21日将在小红书直播带货首秀",
                    press: "财经网",
                    date: "2020.9.27",
                    src: ""
                }, {
                    title: "小红书宣布月活数据超1亿 每天笔记曝光量达80亿次",
                    press: "网易科技",
                    date: "2020.9.28",
                    src: ""
                }, {
                    title: "近20万人参与新生入学经验讨论 小红书成00后入学必备攻略",
                    press: "环球网",
                    date: "2020.9.14",
                    src: ""
                }, {
                    title: "小红书00后“时尚新星”诞生 粉丝六成以上为22岁以下人群",
                    press: "Techweb",
                    date: "2020.9.14",
                    src: ""
                }, {
                    title: "小红书启动“啄木鸟”计划，专项严打社区虚假推广",
                    press: "新华网",
                    date: "2020.09.23",
                    src: ""
                }, {
                    title: "小红书联合COSMO破圈直播，美妆大咖助力嘉宾完成惊喜“换头”",
                    press: "中国日报网",
                    date: "2020.09.14",
                    src: ""
                }, {
                    title: "开学季小红书学习需求增强 有道店播带货破百万",
                    press: "中国网",
                    date: "2020.09.10",
                    src: ""
                }, {
                    title: "海南白沙：“黎锦”传人借小红书等直播“带货”秀非遗技艺",
                    press: "人民日报客户端",
                    date: "2020.09.07",
                    src: ""
                }, {
                    title: "小红书与时尚集团达成全面深度合作，共同孵化头部创作者",
                    press: "环球网",
                    date: "2020.08.26",
                    src: ""
                }, {
                    title: "益普索联合小红书发布2020小红书年中美妆洞察报告",
                    press: "财经网",
                    date: "2020.08.21",
                    src: ""
                }, {
                    title: "小红书首次对外详解百亿流量扶持计划 每月扶持30个共创新品",
                    press: "环球网",
                    date: "2020.08.13",
                    src: ""
                }, {
                    title: "杨天真小红书直播带货首秀 个人大码女装预售超3000件",
                    press: "中国经济网",
                    date: "2020.07.26",
                    src: ""
                }, {
                    title: "未来品牌是“滚”出来的，不是“造”出来的 | 瞿芳X杨天真X雕爷对谈",
                    press: "中国经济网",
                    date: "2020.07.23",
                    src: ""
                }, {
                    title: "小红书CEO毛文超：未来品牌都是生活方式品牌",
                    press: "人民网上海",
                    date: "2020.07.22",
                    src: ""
                }, {
                    title: "小红书7月22日办首届品牌大会 杨天真、雕爷同台话直播",
                    press: "中国日报网",
                    date: "2020.07.20",
                    src: ""
                }, {
                    title: "小红书博主闪现肯德基 直播种草成新品推广标配",
                    press: "经济日报",
                    date: "2020.07.13",
                    src: ""
                }, {
                    title: "小猪与小红书达战略合作 超2000家优质品牌民宿入驻",
                    press: "新旅界",
                    date: "2020.07.10",
                    src: ""
                }]
            }, {
                year: 2019,
                activities: [{
                    title: "小红书博主：别叫我网红！",
                    press: "PingWest品玩",
                    date: "2019.07.18",
                    src: ""
                }, {
                    title: "做个小红书博主，成了这代人的职业新选择",
                    press: "中国青年网",
                    date: "2019.07.16",
                    src: ""
                }, {
                    title: "生活方式领先者小红书，荣获36氪“新商业引领者”",
                    press: "消费日报网",
                    date: "2019.07.11",
                    src: ""
                }, {
                    title: "小红书蝉联 “福布斯中国最具创新力企业榜”",
                    press: "福布斯中国",
                    date: "2019.06.11",
                    src: ""
                }, {
                    title: "小红书瞿芳入选《快公司》2019年商界最具创新力100人榜",
                    press: "快公司",
                    date: "2019.05.29",
                    src: ""
                }, {
                    title: "小红书位列CNBC“颠覆者”榜单全球前十",
                    press: "CNBC",
                    date: "2019.05.15",
                    src: ""
                }, {
                    title: "小红书荣获上海市第八届“优秀网站提名网站”称号",
                    press: "新民晚报",
                    date: "2019.04.29",
                    src: ""
                }, {
                    title: "小红书助力年轻人找到美好生活",
                    press: "新华网",
                    date: "2019.03.19",
                    src: ""
                }, {
                    title: "小红书的进化与坚守",
                    press: "砺石商业评论",
                    date: "2019.02.25",
                    src: ""
                }, {
                    title: "外媒眼中的“中国最佳创新公司”，小红书凭什么这么火",
                    press: "凤凰网商业",
                    date: "2019.02.26",
                    src: ""
                }, {
                    title: "用户突破2亿，小红书之城不断打破边界",
                    press: "腾讯网",
                    date: "2019.01.17",
                    src: ""
                }]
            }, {
                year: 2018,
                activities: [{
                    title: "小红书邓超：社区即城市 内容即服务",
                    press: "亿邦动力网",
                    date: "2018.12.17",
                    src: ""
                }, {
                    title: "小红书高速增长中的技术升级",
                    press: "科技媒体DONews",
                    date: "2018.11.22",
                    src: ""
                }, {
                    title: "小红书进驻腾讯全球合作伙伴大会 将美好生活照进现实",
                    press: "腾讯科技",
                    date: "2018.11.02",
                    src: ""
                }, {
                    title: "杀入娱乐圈的小红书",
                    press: "娱乐资本论",
                    date: "2018.05.29",
                    src: ""
                }, {
                    title: "《小红书进博会海量正品直采，共享全球美好生活》",
                    press: "人民日报客户端",
                    date: "2018.11.07",
                    src: ""
                }, {
                    title: "小红书之城：生活方式社区的终极想象",
                    press: "极客公园",
                    date: "2018.07.25",
                    src: ""
                }, {
                    title: "36氪独家｜小红书完成超3亿美金D轮融资，阿里巴巴领投，估值30亿美金",
                    press: "36氪",
                    date: "2018.06.01",
                    src: ""
                }, {
                    title: "深度｜小红书能成为中国的Instagram吗？",
                    press: "BoF时装行业评论",
                    date: "2018.05.31",
                    src: ""
                }, {
                    title: "Xiaohongshu Connects Overseas Buyers with Chinese Buyers",
                    press: "彭博社",
                    date: "2018.04.09",
                    src: ""
                }, {
                    title: "小红书：年轻人信任的中国品牌",
                    press: "解放日报",
                    date: "2018.03.13",
                    src: ""
                }]
            }, {
                year: 2017,
                activities: [{
                    title: "新商业NEO100 | 小红书瞿芳：别再提海淘了，来谈谈95后",
                    press: "36氪",
                    date: "2017.11.22",
                    src: ""
                }, {
                    title: "尝鲜“最美菜市场” 小红书打造年轻人社区电商平台",
                    press: "中新网上海",
                    date: "2017.11.01",
                    src: ""
                }, {
                    title: "国家监测中心与小红书 签订质量安全共治合作协议",
                    press: "每日商报",
                    date: "2017.08.25",
                    src: ""
                }]
            }, {
                year: 2016,
                activities: [{
                    title: "小红书用三个“不一样“成就红色星期五，未来征途是星辰大海！",
                    press: "搜狐财经",
                    date: "2016.12.09",
                    src: ""
                }, {
                    title: "小红书：3年2400万用户，最红社区电商大起底 #独家封面#",
                    press: "创业邦",
                    date: "2016.07.08",
                    src: ""
                }]
            }, {
                year: 2015,
                activities: [{
                    title: "小红书：社区转型电商的故事有哪些可学之处？",
                    press: "阑夕",
                    date: "2015.11.23",
                    src: ""
                }, {
                    title: "两年时间，小红书从「香港购物指南」冲向「独角兽俱乐部」",
                    press: "B座12楼",
                    date: "2015.10.22",
                    src: ""
                }, {
                    title: "总理200元“下单”小红书",
                    press: "网易",
                    date: "2015.09.25",
                    src: ""
                }, {
                    title: "上海市委书记韩正到访小红书 对商业模式予以肯定",
                    press: "飞象网",
                    date: "2015.07.13",
                    src: ""
                }]
            }, {
                year: 2014,
                activities: [{
                    title: "创业像追梦",
                    press: "中国经济时报",
                    date: "2014.10.06",
                    src: ""
                }, {
                    title: "瞿芳：走出创业新境界",
                    press: "中国青年报",
                    date: "2014.01.12",
                    src: ""
                }]
            }, {
                year: 2013,
                activities: [{
                    title: "为什么会有小红书和香港购物指南？",
                    press: "36氪",
                    date: "2013.12.12",
                    src: ""
                }]
            }]
        }, mt = {
            "zh-CN": [{
                year: 2019,
                activities: [{
                    title: "小红书联合“国际商标协会”，将共同推进“正品”保护",
                    index: "14",
                    date: "2019.10.15"
                }, {
                    title: "央视来访小红书宁波保税仓：货物分拨提速让商品“跑”起来",
                    index: "13",
                    date: "2019.07.17"
                }, {
                    title: "小红书推出Living Inspired系列活动，第一站落地洛杉矶",
                    index: "12",
                    date: "2019.07.14"
                }, {title: "小红书六周年，月活突破8500万", index: "11", date: "2019.06.06"}, {
                    title: "小红书推出“小红心”评分体系，一人一票选出年轻人的生活方式",
                    index: "10",
                    date: "2019.05.27"
                }, {title: "小红书上榜领英最受职场人欢迎公司", index: "9", date: "2019.04.03"}, {
                    title: "小红书品牌号总经理施启伟出席BoF峰会",
                    index: "8",
                    date: "2019.03.28"
                }, {title: "小红书上线品牌号 从内容到交易一站打通", index: "7", date: "2019.03.20"}, {
                    title: "小红书上线新产品Hey 逗趣打卡生活日常",
                    index: "5",
                    date: "2019.03.15"
                }, {title: " 小红书创始人瞿芳出席苹果女性圆桌论坛", index: "6", date: "2019.03.08"}, {
                    title: " 小红书内测社交电商产品小红店",
                    index: "4",
                    date: "2019.03.11"
                }, {title: "小红书上榜快公司“中国最佳创新公司”", index: "3", date: "2019.02.22"}, {
                    title: "小红书第三家线下体验店REDhome在常州开业",
                    index: "2",
                    date: "2019.01.18"
                }, {title: "小红书品牌合作人平台上线", index: "1", date: "2019.01.04"}]
            }], "en-US": [{
                year: 2019,
                activities: [{
                    title: "CCTV visit the Ningbo Bonded Warehouse of Xiaohongshu: Speedy Goods Distribution Expedite Flow for its Products",
                    index: "13",
                    date: "2019.07.17"
                }, {
                    title: "Xiaohongshu launches Living Inspired series event, the first stop landed in Los Angeles",
                    index: "12",
                    date: "2019.07.14"
                }, {
                    title: "Xiaohongshu Breakthrough 85 Million Monthly Active Users in Its 6th Anniversary",
                    index: "11",
                    date: "2019.06.06"
                }, {
                    title: "Xiaohongshu Launched the Xiaohongxin Rating System",
                    index: "10",
                    date: "2019.05.27"
                }, {
                    title: "Xiaohongshu Ranks One of the Most Popular Companies on Linkedin",
                    index: "9",
                    date: "2019.04.03"
                }, {
                    title: "Gary SHI, the General Manager of Brand Account Department of Xiaohongshu, Attended the BoF Summit",
                    index: "8",
                    date: "2019.03.28"
                }, {
                    title: "Xiaohongshu Launched Brand Account, the One-stop Solution Connected Content to Transaction",
                    index: "7",
                    date: "2019.03.20"
                }, {
                    title: "The New Product “hey” is Launched on Xiaohongshu to Record Highlight Moments in Daily Life",
                    index: "6",
                    date: "2019.03.15"
                }, {
                    title: "Miranda Qu, the Founder of Xiaohongshu, Attended Women's Roundtable Forum of Apple",
                    index: "5",
                    date: "2019.03.08"
                }, {
                    title: "Xiaohongshu Ranked Top 3 Most Innovative Companies by Fast Company in China",
                    index: "3",
                    date: "2019.02.22"
                }, {
                    title: "Xiaohongshu settled its third offline store, REDhome, in Changzhou, Jiangsu",
                    index: "2",
                    date: "2019.01.18"
                }, {title: "Xiaohongshu launches its brand partner platform", index: "1", date: "2019.01.04"}]
            }]
        }, vt = {
            "zh-CN": [{
                id: "1",
                title: "",
                date: "",
                content: [{img: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}]
            }, {
                id: "2",
                title: "",
                date: "",
                content: [{paragraph: ""}, {img: ""}, {paragraph: ""}, {img: ""}, {paragraph: ""}]
            }, {
                id: "3",
                title: "",
                date: "",
                content: [{img: ""}, {paragraph: ""}, {img: ""}, {paragraph: ""}, {paragraph: ""}]
            }, {
                id: "4",
                title: "",
                date: "",
                content: [{paragraph: ""}, {img: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}, {paragraph: ""}]
            }, {
                id: "5",
                title: "",
                date: "",
                content: [{img: ""}, {paragraph: "2019年3月15日，小红书短视频产品hey上线。用户通过APP可以实现3秒钟快速发布段视频，打卡生活体验。"}, {paragraph: "目前，hey提供了“学习打卡、健身打卡、心情打卡、减肥打卡、早餐打卡、自拍打卡、败家打卡”等场景，用户在贴纸中可以基于LBS的地点打卡，通过场景化的运营鼓励用户使用短视频来打卡日常生活。"}, {paragraph: "同时，hey提供“设定你的健身目标”功能，帮助用户设定目标、频率、提醒用户每日打卡，坚持完成目标。"}, {paragraph: "作为生活方式平台小红书的新产品，hey仍在不断迭代，产品希望鼓励用户可以轻松、充满乐趣地打卡生活。目前hey只在iOS端发布，安卓端近期也将上线测试，后续还会有新的个性化功能上线。"}]
            }, {
                id: "6",
                title: "小红书创始人瞿芳出席苹果女性圆桌论坛",
                date: "2019.03.08",
                content: [{img: ""}, {paragraph: "2019年3月8日国际妇女节，小红书创始人瞿芳参加了苹果中国举办的女性圆桌论坛。与苹果大中华区董事总经理葛越探讨科技为女性工作和生活带来的变革。"}, {paragraph: "作为深受年轻人喜爱的互联网企业创始人，瞿芳表示，技术和互联网大大提升了生活效率，更好地帮助女性平衡工作和生活。在创业过程中，她并不认为女性企业家和男性企业家有本质区别。 “比起性别，现在的年轻人更认同彼此的社会身份。”"}, {paragraph: "瞿芳指出，小红书正在改变亿万人的生活，也在打破社会对于性别的刻板印象，帮助这个世界变得更加平等、多元。现在，越来越多男性用户开始用起粉底、学习护肤和穿搭。小红书通过不断进化的算法技术，把更广阔的世界带到这些男生和女生的面前，鼓励他们追求自己想要的生活。"}, {paragraph: "小红书也为女性创造了更多就业机会。瞿芳在论坛上提到，小红书企业内部，有很多女性工程师和技术工作者。比起性别，小红书更在乎员工的文化价值观，不仅要把事情做大，更要把事情做对，同时鼓励在创新的过程中试错。这样的企业精神得到了葛越的认可：“小红书所提倡的勇气、包容、做正确的事，我也非常认同。”"}]
            }, {
                id: "7",
                title: "小红书上线品牌号 从内容到交易一站打通",
                date: "2019.03.20",
                content: [{img: ""}, {paragraph: "2019年3月20日，小红书上线品牌号，帮助品牌更好地连接消费者，在小红书完成一站式闭环营销。"}, {paragraph: "“品牌号”的前身是小红书的品牌账号。品牌号可以帮助品牌获得官方认证，邀请品牌合作人发布合作笔记，同时，品牌号还可以通过与粉丝互动，了解多维度的数据；并可以直接配置小红书品牌旗舰店，促成交易转化。而已经在小红书开过品牌账号的不需要重新开品牌号，原有粉丝不会有影响。"}, {paragraph: "品牌号在原有的品牌账号基础上进行五大模块升级。"}, {paragraph: "一，官方认证，官方认证标识，拥有更多展示入口。"}, {paragraph: "二，品牌运营，搜索发现及内容分发，引导用户关注。"}, {paragraph: "三，粉丝互动，多种运营工具推动更多粉丝互动，增加用户粘性。"}, {paragraph: "四，数据洞察，通过品牌号后台洞察多维数据报告，赋能内容营销。"}, {paragraph: "五，打通交易，配置小红书品牌旗舰店，实现流量高效转化。"}, {img: ""}]
            }, {
                id: "8",
                title: "小红书品牌号总经理施启伟出席BoF峰会",
                date: "2019.03.28",
                content: [{img: ""}, {paragraph: "2019年3月28日，小红书品牌号总经理施启伟出席2019年“论道”BoF时装商业评论中国峰会。"}, {paragraph: "BoF是全球最具权威性的时尚行业媒体之一，BoF论坛汇集国际与中国时装产业高管、创业家和行业领袖， BoF创始人兼主编Imran Amed、路威酩轩集团大中华区总裁吴越、Clot 联合创始人兼创意总监陈冠希等均出席了该论坛。在论坛上，施启伟与 Magmode名堂首席执行官蔡崇达、OIB China 创始人吴志刚、《第一财经》杂志总编辑赵嘉共同探讨新时代消费趋势的变化。"}, {paragraph: "施启伟提到，在互联网时代，由于渠道的丰富，购物的“效率”问题已经得到解决，消费者所追求的已经不再是商品的无限丰富和无限低价，而是它是否能够满足我的个性表达，是否适应我的使用场景。"}, {paragraph: "小红书作为年轻人的生活方式平台，为用户提供丰富多元的消费场景。用户在小红书上的消费决策路径，是先看到特定的场景，例如运动、出行、商务，再看到想要的商品，最终对应到特定的品牌。反推而言，用户对于品牌和商品的感知因为场景的丰富而变得更加立体，最终的消费决策也会更精准，更有效。"}, {paragraph: "在谈及品牌在新消费时代如何获得成功时，施启伟提到，对于品牌，用户不再是被动“膜拜”，而形成了“养成式”心态。即用户认为，品牌为我而生，应当满足我的需要。5年来，从小红书上脱颖而出的好品牌，如钟薛糕、完美日记等等，都没有用 “喊话”式的单项营销，而是用设计吸引用户，用内容触动用户，用口碑留住用户。"}]
            }, {
                id: "9",
                title: "小红书上榜领英最受职场人欢迎公司",
                date: "2019.04.03",
                content: [{img: ""}, {paragraph: "2019年4月3日,LinkedIn领英中国发布顶尖公司排行榜,列出25家中国职场人最向往、一旦加入便愿意长期效力的公司。生活方式平台小红书紧随阿里、华为、欧莱雅、迪士尼、苹果等,成为中国职场人最向往的企业之一。"}, {img: ""}, {paragraph: "“顶尖公司排行榜”为国际权威职场社交平台LinkedIn领英面向全球发布的榜单，其考量的标准是用户对公司的认知度、职位关注度和公司员工留存率。公司是否能帮助员工快速成长、提供完善的人才培育体系,成为重要的考核指标。"}, {paragraph: "小红书作为互联网公司中高速发展的独角兽,其独特的“四有文化”、“薯名文化”和扁平化的管理体系,充分鼓励员工创新。这种共创精神,对优秀人才持续发挥着影响力和吸引力。"}, {paragraph: "小红书的“四有文化”:有结果、有洞察、有信任、有格局,也成为人才选拔和培育的重要标准。小红书创始人瞿芳曾在苹果圆桌论坛上指出:“四有文化不仅是墙上的海报,而是招聘、考核和晋升的重要标准。我们希望公司的人才能够不仅把事情做大,更要把事情做对。“"}, {paragraph: "成立五年来,小红书始终致力于吸纳优秀人才。截至2019年6月底,员工数量会再增加300人左右,主要为技术和商业化人才。"}]
            }, {
                id: "10",
                title: "小红书推出“小红心”评分体系，一人一票选出年轻人的生活方式",
                date: "2019.05.27",
                content: [{img: ""}, {paragraph: '2019年5 月 27 日，小红书联合近 50 万用户共同出品 " 小红心 " 评分体系。这款产品以小红书真实体验用户和 " 一人一票，每票同权 " 为原则，用评分还原三千余款单品的用户口碑。'}, {paragraph: "小红书产品负责人邓超表示，小红书一直相信普通人的力量，通过把普通消费者的真实使用体验和评价转化为产品的参数，小红心将帮助用户做出更高效的消费决策。小红心的推出，是因为小红书相信普通人的力量。小红心的目标，是帮每一个消费者回归最真实的想法，让他们便捷地了解来自每个普通消费者对产品的推荐心得和使用评价。"}, {paragraph: '此次推出的 " 小红心 "是小红书与用户共同出品的商品评分体系。小红书用户对真实体验过的商品，根据特定维度进行评分，最终形成该商品的 " 小红心 "。小红书用户对商品每个维度的评分，都被平等、客观的反映到小红心上，为更多人的消费决策做参考。'}, {paragraph: '小红心强调 " 客观 " 和 " 平等 " 两大原则，一方面要求 " 一人一票 "，以平等投票还原真实评价；另一方是基于客观数据处理，独立筛选评价。'}, {paragraph: "据小红心项目团队介绍，首先，在评测单品选择上，项目组会根据社区热度和商城销量的综合排名筛选即将参与评分的单品，目前有 3108 款单品进入小红心评分体系；其次，在参与评测用户的选择上，小红心筛选出在一年内购买过评测品类产品的用户，再根据用户的社区行为数据综合计算出活跃度高的用户成为小红心出品人，出品人会为每个品类的产品选出 5-10个评测维度。最后，针对每款单品的评测问卷会被推送给符合标准的小红心出品人进行打分，经过计算汇总，形成每个单品的小红心评分。"}, {paragraph: '此外，基于小红心评分体系，小红书还在各个品类不同维度下出品了“小红心大赏”榜单。本次发布的“2019小红心大赏”共有近50万出品人参与评分，共计产生93个细分榜单，656个单品上榜。小红心的评分每月根据用户口碑的回收不断更新，小红心覆盖的单品和品类也会不断迭代。" 我们会努力让小红心尽量覆盖全网卖得好、全网讨论度高的单品。"小红书产品负责人邓超表示。'}]
            }, {
                id: "11",
                title: "小红书六周年，月活突破8500万",
                date: "2019.06.06",
                content: [{img: ""}, {paragraph: "2019年6月6日，是小红书成立6周年的周年庆。小红书创始人瞿芳（薯名：木兰）、毛文超（薯名：星矢）向全体员工发布内部信。信中公布，小红书月活用户量已经突破8500万，过去一年，数码、家居、婚庆等生活方式的UGC内容，获得了10倍以上的增长。"}, {paragraph: "以下为内部信全文："}, {paragraph: "各位小红书的同学们，又是一年6月6日，首先分享一个好消息，小红书成立六周年之际，我们的月度活跃用户数（MAU）已经突破了8500万。"}, {paragraph: "对于一个生活方式社区来说，这是一个值得庆祝的数字。感谢各位坚韧不拔的拼搏。"}, {paragraph: "这也是用户的反馈，我们用心陪伴用户，用户也选择陪伴我们。"}, {paragraph: "小红书在2013年成立，大家还记得那年自己的样子吗？"}, {paragraph: "那时的你，有没有想过2019年的这个夏天，会和身边这群有趣的人，一起做这样一件有意义的事儿？"}, {paragraph: "2013年，大洋彼岸，卡戴珊用一张穿着白色泳衣的自拍照在Instagram上创造了年度热词#Belfie——bum-selfie的缩写。"}, {paragraph: "2019年，这位在ins上拥有最高人气的明星，也成为了千千万万小红薯中的一员。"}, {paragraph: "2013年，中国首次成为世界第一大出境游国家，出境游人次几乎破亿，其中超过4000万人选择了香港。同时，境外购物花销占了整体境外消费的35%，买东西成了人们出国花钱最多的地方。这一年的圣诞节，打折季的香港，各大商场都比往年拥挤了许多，小红书的第一批用户也身在其中，他们在这款全新的App上不断刷新着信息，也开始源源不断地生产着内容。"}, {paragraph: "2019年，在我们的社区已经沉淀了超过100万篇关于#香港的笔记，一位上海的大四学生告诉我们，她按照小红书上的攻略，可以“带着香港朋友玩香港”，感觉还“挺自豪的”。"}, {paragraph: "在过去一年，我们的社区内容获得了如下的增长：科技数码11.4倍，家居装修10.1倍，养生11.6倍，宠物8.6倍，婚庆10.4倍，音乐8.5倍……这些丰富的内容背后，是多元的生活方式。把各不相同的大家在这个世界上联系起来，正是我们工作的价值。"}, {paragraph: "有的同学也许还记得，2013年的冬天，一位在北京念书的大学生给我们寄来了一袋哈尔滨红肠和一张卡片，她感谢小红书让她看到了未来更多的可能性，她说毕业了也要去外面的世界看看。"}, {paragraph: "2019年，我们认识了一位33岁的用户，她和老公在广东一个70万人口的县级市，开服装店开了十多年。她说她现在想做的，就是把新潮的东西引进家乡，“就像小红书这样，把吃住旅行各方面新潮的东西引进来，让大家都知道”。"}, {paragraph: "生活方式的改变，始于意识的改变。"}, {paragraph: "有更多的人想走出去，看看全世界的好生活；"}, {paragraph: "也有更多的人想把自己在小红书看到的好生活，带回现实；"}, {paragraph: "各位亲爱的同学们，这一切都是因为你们的努力而成真。"}, {paragraph: "所以未来，请一起继续努力，让小红书这座真实、美好、多元的虚拟城市，陪伴一代人，过上他们想要的生活。"}, {paragraph: "木兰 & 星矢"}]
            }, {
                id: "12",
                title: "小红书推出Living Inspired系列活动，第一站落地洛杉矶",
                date: "2019.07.14",
                content: [{img: ""}, {paragraph: "2019年7月10日，小红书邀请7位持续在平台上产生优质内容的博主前往美国洛杉矶，共同开启Living Inspired博主活动。五天四晚的旅程，小红书博主们和创始人瞿芳、粉丝们一起共赴全球规模最大的内容创作者交流盛会“美国红人节”VidCon，探索迪士尼的奇妙之旅。"}, {paragraph: "小红书策划此次Living Inspired活动，旨在激发博主创造力，持续产出好内容，并希望博主们通过好的内容给平台上更多的用户带来价值。在此次活动过程中，不仅博主和博主之间、博主与粉丝之间，交流了自己在小红书的分享与收获，更难得的是，小红书提供了一个博主与国际知名内容创作者交流的机会。在Living Inspired活动中，小红书博主们与国际知名内容创者们在内容制作、粉丝运营、商业化等方面进行交流，还与VidCon CEO、 FBE CEO等美国视频行业领军人物进行探讨交流。这些跨国界、跨文化的交流碰撞也大大启发了大家的创作灵感。"}, {paragraph: "洛杉矶只是小红书博主活动的第一站，接下来，小红书将推出一系列Living Inspired活动，持续鼓励博主，支持他们参与行业和国际交流，激发更多创作灵感。 "}]
            }, {
                id: "13",
                title: "央视来访小红书宁波保税仓：货物分拨提速让商品“跑”起来",
                date: "2019.07.17",
                content: [{paragraph: "近几年中国电子商务的发展可谓是非常的迅猛，根据商务部发布的最新报告显示，2018年中国电子商务的交易额是31.63万亿元，同比增长8.5%，其中跨境电商进出口商品的总额同比增长50%。"}, {img: ""}, {paragraph: "越来越多的海外商品正在满足着国内消费者不同层次的需求，为了促进跨境电商更好的发展，近期宁波海关出台了新政，帮助跨境电商降成本，让消费者有更好的购物体验。"}, {img: ""}, {paragraph: "在宁波的一个保税区内，一家物流公司的员工们正在将一些印有中文标签的货物与其它跨境商品一同打包发货，物流企业的负责人告诉记者，这些印有中文标签的是一般贸易商品，也就是交过税的。以前消费者想要同时购买跨境商品和一般贸易商品需要分别下单、分别配送，耽误收货时间，又影响购物体验，而现在，宁波海关创新的同仓存储、同包发货措施不仅为消费者带来便利，更降低了物流企业的成本。"}, {img: ""}, {paragraph: "宁波海关还推出了一系列减少企业周转成本和时间的新措施，小红书宁波保税仓关务负责人向记者解释说，这几年公司的业务量增长的很快，平台上的一些爆款产品也吸引了一些其他电商平台来他们这里采购。新措施实施后，他们从海外采购的跨境商品进入保税区后，只要完成海关申报，就可以直接分拨给其他电商平台，而不需要再进入国内的采购环节。"}, {paragraph: "与此同时，他们在保税仓内的货物也只需要一次申报，就可以在跨区周转的过程中进行点对点直转。"}, {img: ""}, {paragraph: "小红书宁波关务负责人陈莉：“我记得以前第一次做调拨的时候，差不多花了两个工作日，现在用新的政策以后，差不多半天半个工作日就可以完成。”"}, {img: ""}, {paragraph: "创新措施的推出，满足了跨境电商企业在仓储物流上的需求。今年上半年，宁波保税区累计入驻的跨境电商企业达到620多家，区内仓储面积达到60万平方米。"}]
            }, {
                id: "14",
                title: "小红书联合“国际商标协会”，共同推进“正品”保护",
                date: "2019.10.15",
                content: [{img: ""}, {paragraph: "近日，国际商标协会（INTA）一行到访小红书，双方未来在知识产权领域，将推进更深度的对话与合作，推动“正品”保护。"}, {paragraph: "小红书是近年来国内崛起最快的生活方式平台，截至2019年7月，小红书累计用户已经超过3亿，月活跃用户超过1亿。4年前，小红书展开商城业务来解决用户“看到买不到”的难题。目前小红书商城已发展成全品类的“潮流商品的购物中心”。"}, {paragraph: "然而，如何辨识“正品”及找到买“正品”的途径，仍是全市场面临的难题。在今年7月INTA对10个不同国家的Z世代年轻消费者调查中，高达99％的中国受访者表示他们了解知识产权，有94％认为知识产权与有形产权同等重要或更重要。"}, {paragraph: "小红书知识产权保护部门人员介绍，目前小红书正在借助自身大数据、人工智能等新技术，构建数字时代的新型知识产权保护体系，并构建了“ 涉假评价、高危客诉、舆情监控”全流程的THEMIS系统，多维度分析可疑售假店铺行为，一经发现一键清除。"}, {paragraph: "针对外界误解的“种草=导购”，小红书合规部门负责人表示，小红书一直在进行社区反作弊和违规账户治理，运用机器学习来限制软性营销、导流类内容发布，同时还在社区推行“社区生态观”，让更多用户参与到内容判断中，为社区营造了良好的氛围。"}, {paragraph: "此次来访的INTA驻中国代表苏红表示，INTA非常关注新兴的社交媒体和新业态下的打击假冒伪劣商品的发展趋势，尤其是小红书作为年轻人生活方式分享与消费品口碑聚集地，发展势头强劲，期待能与新兴的社交媒体开展更深入的对话与合作。"}, {paragraph: "为了帮助国际及国内知名品牌进行“正品”保护，小红书正与更多知识产权保护的第三方国际组织展开合作。国际商标协会（以下简称：INTA）成立于1878年，总部位于美国纽约，是一个由商标所有人和专业人士组成的国际性团体，致力于支持商标及相关的知识产权以保护消费者的利益并促进公平有效的商业贸易秩序。其成员包括来自190多个国家的7200多个商标所有人、专业人士和专业学者。"}]
            }], "en-US": [{
                id: "1",
                title: "Xiaohongshu launches its brand partner platform",
                date: "January 4th, 2019",
                content: [{img: ""}, {paragraph: "On January 4th, 2019, the Brand Partner Platform of Xiaohongshu was officially launched, which serves as an efficient bridge between brand parties and brand partners. On the landing page of the Brand Partner Platform, Xiaohongshu provides the brand parties, brand partners, and content cooperation organizations with different login identities. The separate identity takes the brand parties to Xiaohongshu's official advertising marketing platform, takes MCN users to the joining information page, and takes brand partners to the personal page (including feeds). "}, {paragraph: "The brand parties can view the list of its brand partners and content of cooperation organizations through the platform. They can also view detailed information of the brand's partners (number of followers, data, quotation and cooperation organizations) and cooperation organizations' detailed information (organization introduction, data insights of collaborators) for selecting suitable brand partners for content cooperation."}, {paragraph: "The cooperation organizations can see the collaborators' information, including personal introduction, number of followers, data of feeds, quotation, as well as the list of its brand parties."}, {paragraph: "The brand partners can show multi-dimensional data, including their personal introduction, number of followers, data of feeds, quotation, and view the list of the brand parties."}, {paragraph: "Xiaogongshu Brand Partner Platform helps brand parties, brand partners, and content cooperation organizations to improve cooperation efficiency and quality through transparent rules, comprehensive information, and real data. The platform will also help the parties to better collaborate on content by continuously improving functionality and improving the experience in the future."}]
            }, {
                id: "2",
                title: "Xiaohongshu settled its third offline store, REDhome, in Changzhou, Jiangsu",
                date: "January 18th , 2019",
                content: [{img: ""}, {paragraph: "On January 18th, 2019, the REDhome, an offline experience concept store of Xiaohongshu, settled in Changzhou, Jiangsu. It's the third REDhome following the ones in Jingan and Jiading of Shanghai. Also, REDhome provides meticulous beauty services from makeup to skincare with detailed guidance for customers. In addition, the customers will automatically become offline store member and earn credits when they pay a bill by using their Xiaohongshu App account. The credits can exchange for products. Also, the customers can explore product information and users' comments at the in-store interactive screen."}, {img: ""}]
            }, {
                id: "3",
                title: "Xiaohongshu Ranked Top 3 Most Innovative Companies by Fast Company in China",
                date: "February 22nd, 2019",
                content: [{img: ""}, {paragraph: 'On February 22nd, 2019, Fast Company, the US authoritative commercial magazine, announced the top 3 most innovative companies in China. In selecting Xiaohongshu, Fast Company stated that "Xiaohongshu combines user-recommendation notes with purchase platform to recommend products from world to Chinese consumers." Fast Company is one of the most influential business magazines in the United States. The magazine looks for companies with creative business ideas on a global scale each year.'}, {img: ""}]
            }, {
                id: "5",
                title: "Miranda Qu, the Founder of Xiaohongshu, Attended Women's Roundtable Forum of Apple",
                date: "Mar 8th, 2019",
                content: [{img: ""}, {paragraph: "The founder of Xiaohongshu, Miranda Qu, participated in the Women's Roundtable Forum held by Apple China and discussed the changes that technology brings to women's work and life with the Managing Director of Apple Greater China, Yue GE, on International Women's Day of March 8th, 2019."}, {paragraph: "Miranda said that technology and the Internet had greatly improved women's life efficiency and work balance. She did not think that there is an essential difference between men and women in the entrepreneurial process."}, {paragraph: "Miranda pointed out that Xiaohongshu is changing the lifestyle of millions of people and breaking the gender stereotype in society to help the world become more equal and diverse. Nowadays, more and more male users are starting to use a foundation, learn skincare, and dress in nice outfits. Moreover, Xiaohongshu is bringing the world to users through the evolution of algorithmic techniques, encouraging them to pursue the life they want."}]
            }, {
                id: "6",
                title: "The New Product “hey” is Launched on Xiaohongshu to Record Highlight Moments in Daily Life",
                date: "March 15th, 2019",
                content: [{img: ""}, {paragraph: 'On March 15th, 2019, the new short video product, "hey" went live. Users can quickly post short videos in their daily life through Xiaohongshu. Currently "hey" provides the scenarios of "learning, fitness, mood, weight loss, breakfast and selfie" which can be operated to encourage users to record their daily life by using short videos. "hey" also offers the function of "set your fitness goals" to help users set goals, frequency, and remind users to take action to complete their goals on a daily basis. As a new product of Xiaohongshu, the lifestyle platform, "hey" is still iterating, and encouraging users to record their life experiences in more accessible and more exciting ways.'}]
            }, {
                id: "7",
                title: "Xiaohongshu Launched Brand Account, the One-stop Solution Connected Content to Transaction",
                date: "March 20th, 2019",
                content: [{img: ""}, {paragraph: "On March 20th, 2019, Xiaohongshu launched the Brand Account to help brands better connect with consumers with a one-stop closed-loop marketing solution. The predecessor of the Brand Account of Xiaohongshu is commercial brands' user account. A Brand Account can help a brand obtain an official certification, as well as invite brand partners to publish business cooperation feeds. In addition, the interaction between followers can help a brand to understand multidimensional data, and directly configure their brand flagship store, which contributes to transaction conversion."}, {paragraph: "Those who have already opened the brand account in Xiaohongshu do not need to reopen an account again. Their original followers will be unaffected. Xiaohongshu will upgrade five modules for the brand's user account to the Brand Account:"}, {paragraph: "1.   Official certification: Official certification mark, with more channel exposure"}, {paragraph: "2.   Brand operation management: More channels to gain users' attention by exposing on search result page with content distribution in the Xiaohongshu community."}, {paragraph: "3. Interaction between followers: The brand account offers multiple operation tools to boost follower interaction, as well as increasing their loyalty."}, {paragraph: "4. Data insight: The backend of the Brand Account provides productive insight to empower content marketing, driven by the accumulated multidimensional data."}, {paragraph: "5. Conversion of transactions: The Brand Account provides the brand flagship store function to convert online traffic to transaction efficiently."}, {img: ""}]
            }, {
                id: "8",
                title: "Gary SHI, the General Manager of Brand Account Department of Xiaohongshu, Attended the BoF Summit",
                date: "March 28th, 2019",
                content: [{img: ""}, {paragraph: "On March 28th, 2019, Gary SHI, the general manager of Xiaohongshu's Brand Account Department, attended the BoF China Summit in 2019. At the forum, Gary SHI discussed the consumer trends in the new era with Chongda CAI (CEO of Magmode), Zhigang Wu (Founder of OIB China), and Jia Zhao (Chief Editor of China Business Network). Gary SHI mentioned that due to the abundant resources in the Internet era, consumers are no longer pursuing the variety and low price of commodities, but the satisfaction of their expression and adaption to the usage scenarios. As a lifestyle platform for young people, Xiaohongshu provides a wide range of consumer scenarios to the users. The user's decision-making path on Xiaohongshu is to have the users see a specific scene first, such as sports, travel, or business before exploring the desired products, and finally to the corresponding particular brand. When talking about how brands achieve success in the new consumption era, Gary Shi mentioned that users are more likely to choose the brand they are suitable for, that is, users believe that brands are born for them and should meet their needs. Those great brands standing out in Xiaohongshu to attract users by design, content, and retain by word of mouth."}]
            }, {
                id: "9",
                title: "Xiaohongshu Ranks One of the Most Popular Companies on Linkedin",
                date: "April 3rd, 2019",
                content: [{img: ""}, {paragraph: 'On April 3rd, 2019, LinkedIn China published The Top Ranked Companies and listed 25 companies that are the most desired for employees to work in China. The lifestyle platform, Xiaohongshu, has become one of the most desirable companies for Chinese job seekers. The "Top Companies" is a global ranking published by LinkedIn, an international authoritative workplace social platform. The evaluation criteria include the company\'s recognition, job attention, employee retention rate, and whether the company is helping employees to grow with a comprehensive talent development program.'}, {img: ""}, {paragraph: 'As a fast-growing unicorn company in the Internet industry, Xiaohongshu\'s unique corporate culture and flat management structure fully encourage employees to innovate. The innovative spirit continues to influence and attract talent. Also, Xiaohongshu\'s "Four Must-Haves" culture (including "must have a result, must focus, must trust, and must have a vision") is another important criterion for selecting and cultivating talent. Miranda QU, the founder of Xiaohongshu, says that the "Four Must-Haves" culture is not only a poster on the wall but the crucial criteria for recruitment, assessment, and promotion. We hope that our talents not only make things greater but also do them right."'}]
            }, {
                id: "10",
                title: "Xiaohongshu Launched the Xiaohongxin Rating System",
                date: "May 27th, 2019",
                content: [{img: ""}, {paragraph: 'On May 27th, 2019, Xiaohongshu produced the "Xiaohongxin" rating system with nearly 500,000 users. The product based on real consumer experience and "one person, one vote; one vote, one right" principle for providing reputation for 3000+ items from consumer\'s reviews.'}, {paragraph: 'Chao Deng, the Chief Product Manager of Xiaohongshu, indicate that Xiaohongshu always believed in the power of general users. By turning the real experience and evaluation of products from general consumers into data, "Xiaohongxin" helps users make efficient consumption decisions. "Xiaohongshu" believes the power of general consumers. The goal of "Xiaohongxin" is to help consumers easily understand the value of the product (review and recommendation by other users).'}, {paragraph: '"Xiaohongxin" is the product rating system produced by Xiaohongshu and users. The Xiaohongshu users grade the products that they have used according to specific criteria.  The grades on each test are objectively reflected on "Xiaohongxin," helping users make consumption decisions.'}, {paragraph: '"Xiaohongxin" emphasizes the two principles of "objectivity" and "equality" with "one person, one vote" to give evaluation reflect by the unbiased voting system, as well as the data processing and evaluation system.'}, {paragraph: 'According to the Xiaohongxin project team, at first, the team will select items to be graded according to sales and ranking of Xiaohongshu community. There are currently 3,108 items chosen for the Xiaohongxin grading system. Secondly, in the selection of participated users, "Xiaohongxin" select the users who have purchased the selected products within one year, filtered the users with high community activity to be the "Xiaohongxin" producers. A producer will choose 5 to 10 evaluation criteria for each product. Finally, "Xiaohongxin" sent each item\'s evaluation questionnaire to the "Xiaohongxin" producers who qualified for grading. Each product will be graded.'}, {paragraph: 'Additionally, based on the "Xiaohongxin" grading system, Xiaohongshu also built a "Xiaohongxin Awards" list in different categories. There are nearly 500,000 participants joined the evaluation for "Xiaohongxin Award 2019", which made 93 sub-lists of 656 individual items on the list. The "Xiaohongxin" selected items and the grades are updating each month according to the updated questionnaires. We will let "Xiaohongxin" cover all the popular products in the market." Chao Deng, the Xiaohongshu Chief Product Manager, said. '}]
            }, {
                id: "11",
                title: "Xiaohongshu Breakthrough 85 Million Monthly Active Users in Its 6th Anniversary",
                date: "June 6th, 2019",
                content: [{img: ""}, {paragraph: "On June 6th, 2019, Xiaohongshu celebrated its 6th anniversary of establishment. The founder of Xiaohongshu, Miranda QU, and Charlwin Mao issued an internal letter to all employees. The letter announced that the number of monthly active users of Xiaohongshu had exceeded 85 million. In the past year, the UGC content of digital, home, wedding, and other lifestyles has increased by more than ten times."}, {paragraph: "The following is the full text of the internal letter:"}, {paragraph: "Dear REDers,"}, {paragraph: "We are glad to share the great news. Xiaogongshu has exceeded 85 million monthly active users (MAUs) on Jun 6th, the 6th anniversary of the establishment. "}, {paragraph: "It's a significant number worth celebrating for Xiaohongshu as a lifestyle community. Thank you all for your hard work. The result is also reflecting the user's feedback. We put our effort with our heart, and the users even choose to accompany us."}, {paragraph: "Xiaohongshu established in 2013. Do you guys still remember back to then? Have you ever thought that you will have a group of exciting people to do such meaningful things together in the summer of 2019? "}, {paragraph: "In 2013, Kardashian took a selfie in a white swimsuit and created the annual hot word #Belfie - the abbreviation of bum-selfie on Instagram. In 2019, the celebrity who has the highest popularity on Instagram also became one member of our users."}, {paragraph: "In 2013, China became the world's largest outbound tourism country for the first time. The number of outbound tourists almost achieve 100 million, of which more than 40 million chose Hong Kong as their destination. The overseas shopping expenses accounted for 35% of the total foreign consumption, and shopping became where people spend the most when traveling abroad. The major shopping malls are crowded at HongKong's Christmas season more than any previous years at 2013. Xiaohongshu's very first users regularly update and explore information on the Xiaohongshu APP, in returns more and more of them continuously produce contents."}, {paragraph: 'In 2019, more than 1 million feeds about #HongKong have published in our community. A senior college student in Shanghai told us that she could "plan a HongKong trip for local Hongkong friends" only according to the posts on Xiaohongshu, which made her feel "very proud. "'}, {paragraph: "In the previous year, our community has achieved the following growth: technology & digital increased 11.4 times, home decoration increased 10.1 times, healthcare increased 11.6 times, pet products increased 8.6 times, wedding products & services increased 10.4 times, music products increased 8.5 times. Behind the abundant contents were user's multi-lifestyles. It is the value of our work to connect people in this world."}, {paragraph: "Some REDers may still remember that in the winter of 2013, a college student studying in Beijing sent us a bag of Harbin sausage with a card. She thanked Xiaohongshu for letting her know more possibilities in the future. She would also like to see a bigger world after she graduated."}, {paragraph: 'In 2019, we met a 33-years-old user who was operating a clothing store for more than a decade in the countryside with 700,000 population in Guangdong. She said that she likes to introduce new things to her hometown, "Just like Xiaohongshu, we introduce popular things in all aspects of life, and let more people know."'}, {paragraph: "The change in lifestyle begins with a shift in consciousness. There are more and more people who like to explore a bigger world; Some users want to bring the life that they saw on Xiaohongshu in real life."}, {paragraph: "Dear REDers, the dream came true is because of you. In the future, please continue to work together to make Xiaohongsh, the sincerity, beautiful, diversified online virtual city keep this generation company and create the life they want."}, {paragraph: "Miranda Qu & Charlwin Mao"}, {paragraph: "Jun 6th, 2019"}]
            }, {
                id: "12",
                title: "Xiaohongshu launches Living Inspired series event, the first stop landed in Los Angeles",
                date: "July 14th, 2019",
                content: [{img: ""}, {paragraph: "On July 10th, 2019, Xiaohong invited seven content creators who continued to produce high-quality content on the platform to Los Angeles to launch the Living Inspired series event. In the journey, Xiaohongshu’s creators and the founder, Miranda QU, and fans went together to explore the world's largest content creator convention, Vidcon, and experienced Disney’s wonderful trp."}, {paragraph: "Xiaohongshu plans the Living Inspired campaign aimed at inspiring creators' creativity and consistently producing good content, and hoping that creators will bring value to more users on the platform through sharing their great experience. During this event, creators shared and exchanged their own experience from Xiaohongshu. What is more, Xiaohongshu provides several opportunities for creators to communicate with international renowned content creators. They talked about topics in content production, fan operations, commercialization, etc., and also discussed with the US video industry’s leaders such as the CEO of VidCon and Fine Brothers Entertainment. These cross-border and cross-cultural experiences have also greatly inspired Xiaohongshu creators’ creation."}, {paragraph: "Los Angeles is just the first stop, in the next Xiaohongshu will launch a series of events to continuing encourage creators, supporting them to participate in industry and international exchanges, and inspiring lives."}]
            }, {
                id: "13",
                title: "CCTV visit the Ningbo Bonded Warehouse of Xiaohongshu: Speedy Goods Distribution Expedite Flow for its Products",
                date: "July 17th, 2019",
                content: [{paragraph: "In recent years, e-commerce development in China is increasing tremendously. Based on the latest report released by the Ministry of Commerce, the 2018 transactional volume in China’s e-commerce market is 31.63 trillion yuan, a year-on-year increase of 8.5%, of which the total volume of cross border e-commerce imports and exports increased by 50%."}, {img: ""}, {paragraph: "As cross-border products needed to satisfy the different demands of local consumers, to better promote the development of cross-border e-commerce, Ningbo customs introduced a new policy to reduce cross-border e-commerce costs, thus improving the retail experience of the consumers."}, {img: ""}, {paragraph: "Within the Ningbo Free Trade Zone, the workers of a logistic company are packing and shipping Chinese-labeled products together with other cross-border products. The manager of the logistics company explains to the reporter that these Chinese-labeled goods are general trade goods have taxed. In the past, if a consumer purchases both the cross-border product and the general trade product, the order has to be placed separately, and delivered separately, causing a delay to receive the products, which disrupt the retail experience. Whereas now, Ningbo Custom’s innovative measures allow same area storage and same packing shipment not only brought convenience to consumers, it also reduced the costs for logistics companies."}, {img: ""}, {paragraph: "Ningbo Customs also launched a series of new measures to reduce the turnover cost and time of companies. One officer of Ningbo bonded warehouse of Xiaohongshu explains to the reporter that the company’s business volume has rapidly increased in recent years, and some popular products also attract other e-commerce platforms to purchase from Xiaohongshu. After the implementation of the new measures, as long as the customs declaration completed, the cross-border goods can enter the bonded area and directly allocated to other e-commerce platforms without internal procurement process. Also, the goods in the bonded warehouses only need to be declared once to an inter-regional point to point transmission."}, {img: ""}, {paragraph: "Li CHEN, head of the Xiaohongshu Ningbo customs office: “I remember that it took almost two business days at the first time I made the transfer. Now It can be completed in half a business day with the new policy.”"}, {img: ""}, {paragraph: "The innovative measures have met the warehousing and logistics needs of cross-border e-commerce companies. In the first half of this year, there were more than 620 cross-border e-commerce companies joined Ningbo Free Trade Zone, and the storage area in the zone has reached 600,000 square meters."}]
            }]
        }, gt = {
            "zh-CN": [{
                term: "第一期",
                title: "有音乐，生活才有style",
                content: "小红薯们合奏一曲在小红书上被pick了1200万次的单曲 I Remember，实力诠释什么叫有音乐，生活才有style",
                src: "",
                videoSrc: ""
            }, {
                term: "第二期",
                title: "有舞蹈，生活才有style！",
                content: "怀孕四十周跳舞的孕妈、跳着舞步入婚姻殿堂的新婚夫妇、刚刚上学但已经拥有C位舞姿的小朋友……他们在车库、在海边、在广场上、甚至在小红书办公室，实力诠释了什么叫做有舞蹈，生活才有Style!",
                src: "",
                videoSrc: ""
            }, {
                term: "第三期",
                title: "巴黎圣母院：感谢曾经屹立，期待来日重逢",
                content: "文明是脆弱的，但也是永恒的。在小红书上，有4700多位小红薯发布过关于巴黎圣母院的笔记，每一张照片、每一段视频，都是她在我们真实生活中美好的存在。小红书将这些和巴黎圣母院相关的记忆织成集锦，记录下和她有关的爱与美，愿美好永存，生活继续。",
                src: "",
                videoSrc: ""
            }, {
                term: "第四期",
                title: "别让直男这个词，限制了你的想象力",
                content: "直男干嘛把人生浪费在买衣服上？”“整天研究穿搭，你不够man。”社会对直男的偏见，也太多了吧！小红书邀请四位很会生活的“新直男”用户实名diss社会上的各种直男标签：别让直男这个词，限制了你的想象力！",
                src: "",
                videoSrc: ""
            }, {
                term: "第五期",
                title: "小红书上的宝藏妈妈",
                content: "谁能想到，那些小红书上精致的猪猪女孩，最后都变成了“宝藏妈妈”。她们读得了绘本，拼得出乐高，念得完博士，连得出腹肌，拼得成事业，抗得过抑郁。当得了妈妈，更做得好自己。她们在小红书上真实地分享这一切。母亲节，小红书记录了三位“宝藏妈妈”的生活片段，希望将温暖传递给更多人。\n",
                src: "",
                videoSrc: ""
            }],
            "en-US": [{
                term: "Vol.1",
                title: "Music breathes life into everything we do",
                content: "Users on Xiaohongshu performed a rendition of I Remember, a song that has been played over 12 million times on the platform, adding a dash of panache and style to everyday life.",
                src: "",
                videoSrc: ""
            }, {
                term: "Vol.2",
                title: "Celebrating life with some groovy dance moves",
                content: "Mothers dancing through their final trimester, newlyweds dancing their way into married life, children taking center stage on the dance floor…. dance moves are everywhere around us, from the beach to the park to even Xiaohongshu’s office. There is nothing quite like expressing your individuality and celebrating life through dance.",
                src: "",
                videoSrc: ""
            }, {
                term: "Vol.3",
                title: "The Notre Dame in Paris: We look forward to reuniting soon.",
                content: "Over 4,700 users on Xiaohongshu have published notes about Notre Dame. Every photograph, every footage, documents its beautiful and perpetual presence. Xiaohongshu has catalogued all of these documentations and memories, a record of the beauty and the love people have for this stunning cathedral.",
                src: "",
                videoSrc: ""
            }, {
                term: "Vol.4",
                title: "Do not be constrained by traditional definitions of masculinity.",
                content: "Xiaohongshu has invited four male users to demonstrate how they break away from traditional stereotypes to define their own perceptions of masculinity. Do not let traditional definitions of “what is a man” to limit your imagination.",
                src: "",
                videoSrc: ""
            }, {
                term: "Vol.5",
                title: "“Hidden Treasures” on Xiaohongshu",
                content: "Many young female users on Xiaohongshu have grown up with the platform and are now spreading joy and documenting precious moments in life with their children and families. They are extraordinary, multifaceted “hidden treasures”, from stacking Lego blocks with their children to completing PhDs and building phenomenal careers. In honor of Mother’s Day, Xiaohongshu dived deep into the lives of three mothers, providing a window into their day-to-day experiences and journey of self-discovery.",
                src: "",
                videoSrc: ""
            }]
        };

    function _t(t, e) {
        var n = v()(t);
        if (V.a) {
            var r = V()(t);
            e && (r = G()(r).call(r, (function (e) {
                return z()(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function yt(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n, r = null != arguments[e] ? arguments[e] : {};
            if (e % 2) _()(n = _t(Object(r), !0)).call(n, (function (e) {
                Object(J.a)(t, e, r[e])
            })); else if (F.a) $()(t, F()(r)); else {
                var i;
                _()(i = _t(Object(r))).call(i, (function (e) {
                    D()(t, e, z()(r, e))
                }))
            }
        }
        return t
    }

    var bt = {
            name: "Main",
            components: {NewBanner: Q, FairyTale: ft, CommonNews: it},
            computed: {
                newsCenter: function () {
                    var t = this.$i18n.getLang() || "zh-CN";
                    return yt(yt({}, this.$locale.global.state.newsCenter), {}, {
                        activities: mt[t],
                        news: pt[t],
                        trophys: dt[t],
                        stories: gt[t]
                    })
                }
            },
            data: function () {
                return {imgSrc: ""}
            },
            methods: {
                forMore: function (t) {
                    this.$router.push({name: t})
                }
            }
        }, wt = (n(595), Object(O.a)(bt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("NewBanner", {
                staticClass: "banner",
                attrs: {
                    imgSrc: t.imgSrc,
                    showText: t.newsCenter.showText,
                    "inner-style": {backgroundColor: "rgba(51, 51, 51, 0.3)"}
                }
            }), t._v(" "), n("div", {staticClass: "content"}, [t.newsCenter.newsTitle ? n("div", {staticClass: "report"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.newsCenter.newsTitle))]), t._v(" "), n("common-news", {
                attrs: {
                    news: t.newsCenter.news,
                    limit: 5
                }, on: {
                    forMore: function (e) {
                        return t.forMore("Reports")
                    }
                }
            })], 1) : t._e(), t._v(" "), n("div", {staticClass: "activity"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.newsCenter.activitiesTitle))]), t._v(" "), n("common-news", {
                attrs: {
                    news: t.newsCenter.activities,
                    limit: 5
                }, on: {
                    forMore: function (e) {
                        return t.forMore("Activities")
                    }
                }
            })], 1), t._v(" "), n("div", {staticClass: "trophy"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.newsCenter.trophyTitle))]), t._v(" "), n("common-news", {
                attrs: {
                    news: t.newsCenter.trophys,
                    limit: 5
                }, on: {
                    forMore: function (e) {
                        return t.forMore("Trophy")
                    }
                }
            })], 1), t._v(" "), n("div", {staticClass: "fairyTale"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.newsCenter.storiesTitle))]), t._v(" "), n("div", {staticClass: "musicLife"}, [n("fairy-tale", {attrs: {stories: t.newsCenter.stories}})], 1)])])], 1)
        }), [], !1, null, "26c73f1b", null).exports), xt = {
            name: "CommonNewsList", props: {
                newsList: {
                    type: Array, default: function () {
                        return []
                    }
                }, compulsoryStyle: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, data: function () {
                return {}
            }, methods: {
                viewReport: function (t) {
                    if (t.src && window.open(t.src, "_blank"), t.index) {
                        var e = this.$router.resolve({name: "ActivityItem", query: {id: t.index}}).href;
                        window.open(e, "_self")
                    }
                }
            }
        }, Ct = (n(596), Object(O.a)(xt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "news-list"}, t._l(t.newsList, (function (e) {
                return n("div", {key: e.id, staticClass: "list"}, t._l(e.activities, (function (e) {
                    return n("div", {
                        key: e.id,
                        staticClass: "news-item",
                        class: {hoverable: e.src || e.index},
                        style: t.compulsoryStyle,
                        on: {
                            click: function (n) {
                                return t.viewReport(e)
                            }
                        }
                    }, [n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("span", {staticClass: "date-press"}, [e.press ? n("span", {staticClass: "press"}, [t._v(t._s(e.press))]) : t._e(), t._v(" "), n("span", {staticClass: "date"}, [t._v(t._s(e.date))])])])
                })), 0)
            })), 0)
        }), [], !1, null, "4b5360a4", null).exports), kt = {
            name: "Trophy", components: {NewBanner: Q, CommonNewsList: Ct}, computed: {
                showText: function () {
                    return this.$locale.global.state.newsCenter.subRoute.trophy.showText
                }, trophyContent: function () {
                    var t = this.$i18n.getLang() || "zh-CN";
                    return dt[t]
                }
            }, data: function () {
                return {imgSrc: ""}
            }
        }, St = (n(597), Object(O.a)(kt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("NewBanner", {
                attrs: {
                    imgSrc: t.imgSrc,
                    showText: t.showText,
                    "inner-style": {backgroundColor: "rgba(51, 51, 51, 0.3)"}
                }
            }), t._v(" "), n("div", {staticClass: "trophy-wrapper"}, [n("h2", {staticClass: "title"}, [t._v(t._s(t.showText.title))]), t._v(" "), n("common-news-list", {attrs: {"news-list": t.trophyContent}})], 1)], 1)
        }), [], !1, null, "19c6e176", null).exports), It = {
            name: "Activities", components: {NewBanner: Q, CommonNewsList: Ct}, computed: {
                showText: function () {
                    return this.$locale.global.state.newsCenter.subRoute.activities.showText
                }, activityContent: function () {
                    var t = this.$i18n.getLang() || "zh-CN";
                    return mt[t]
                }
            }, data: function () {
                return {imgSrc: ""}
            }
        }, Et = (n(598), Object(O.a)(It, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("NewBanner", {
                attrs: {
                    imgSrc: t.imgSrc,
                    showText: t.showText,
                    "inner-style": {backgroundColor: "rgba(51, 51, 51, 0.3)"}
                }
            }), t._v(" "), n("div", {staticClass: "activities-wrapper"}, [n("h2", {staticClass: "title"}, [t._v(t._s(t.showText.title))]), t._v(" "), n("common-news-list", {attrs: {"news-list": t.activityContent}})], 1)], 1)
        }), [], !1, null, "d9a12658", null).exports), Tt = n(113), Ot = n.n(Tt), At = {
            name: "Main", computed: {
                passage: function () {
                    var t, e = this, n = this.$i18n.getLang() || "zh-CN";
                    return Ot()(t = vt[n]).call(t, (function (t) {
                        return t.id === e.$route.query.id
                    }))
                }, releaseTime: function () {
                    return this.$locale.global.state.releaseTime
                }
            }, data: function () {
                return {}
            }
        }, Nt = (n(603), Object(O.a)(At, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "passage-wrapper"}, [n("div", {staticClass: "passage"}, [n("h2", {staticClass: "title"}, [t._v(t._s(t.passage.title))]), t._v(" "), n("span", {staticClass: "subtitle"}, [n("span", {staticClass: "date"}, [t._v(t._s(t.releaseTime) + ": " + t._s(t.passage.date || "2019-4-18 12:35"))])]), t._v(" "), n("div", {staticClass: "content-wrapper"}, t._l(t.passage.content, (function (e) {
                return n("span", {
                    key: e.id,
                    staticClass: "content"
                }, [e.paragraph ? n("span", {staticClass: "paragraph"}, [t._v(t._s(e.paragraph))]) : e.img ? n("img", {
                    staticClass: "inline-picture",
                    attrs: {src: e.img}
                }) : t._e()])
            })), 0)])])
        }), [], !1, null, "1f0a990b", null).exports), jt = {
            name: "Reports", components: {NewBanner: Q, CommonNewsList: Ct}, computed: {
                showText: function () {
                    return this.$locale.global.state.newsCenter.subRoute.report.showText
                }, reportContent: function () {
                    var t = this.$i18n.getLang() || "zh-CN";
                    return pt[t]
                }
            }, data: function () {
                return {imgSrc: ""}
            }
        }, Lt = (n(604), Object(O.a)(jt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("NewBanner", {
                attrs: {
                    imgSrc: t.imgSrc,
                    showText: t.showText,
                    "inner-style": {backgroundColor: "rgba(51, 51, 51, 0.3)"}
                }
            }), t._v(" "), n("div", {staticClass: "reports-wrapper"}, [n("h2", {staticClass: "title"}, [t._v(t._s(t.showText.title))]), t._v(" "), n("common-news-list", {attrs: {"news-list": t.reportContent}})], 1)], 1)
        }), [], !1, null, "783e0793", null).exports), Pt = n(357), Mt = n.n(Pt), Rt = {name: "growthArrowLeft"},
        Bt = {name: "growthArrowRight"}, Dt = {
            name: "GrowthHistory", components: {
                growthArrowLeft: Object(O.a)(Rt, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("svg", {
                        attrs: {
                            width: "10px",
                            height: "16px",
                            viewBox: "0 0 10 16",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "设计稿*4",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Artboard",
                            transform: "translate(-250.000000, -230.000000)",
                            fill: "#000000",
                            "fill-rule": "nonzero"
                        }
                    }, [e("g", {attrs: {id: "发展史"}}, [e("g", {
                        attrs: {
                            id: "Group-4",
                            transform: "translate(221.000000, 200.000000)"
                        }
                    }, [e("g", {attrs: {id: "Group-6"}}, [e("path", {
                        attrs: {
                            d: "M37.4175272,38.0877336 L30.1124015,31.5945249 C29.9503662,31.4322747 29.78745,30.9450729 30.1124015,30.7828228 C30.274888,30.6205726 30.7614023,30.4583224 30.9243185,30.7828228 L38.5535149,37.7632332 C38.5535149,37.7632332 38.7160014,37.7632332 38.7160014,37.9255049 C38.8784879,38.0877551 38.8784879,38.2500053 38.8784879,38.2500053 C38.8784879,38.4127066 38.8784879,38.5742908 38.7160014,38.5742908 L38.5535149,38.7372285 L30.7614023,45.5553458 C30.5993669,45.7178323 30.1124015,45.7178323 29.9503662,45.5553458 C29.78745,45.3928593 29.78745,44.9058939 30.1124015,44.7438585 L37.4175272,38.0877336 Z M37.4175272,38.0877336 L30.1124015,31.4322747 C29.9503662,31.2700245 29.78745,30.7828228 30.1124015,30.6205726 C30.274888,30.4583224 30.7614023,30.2960722 30.9243185,30.6205726 L38.5535149,37.600983 C38.5535149,37.600983 38.7160014,37.600983 38.7160014,37.7632332 C38.8784879,37.7632332 38.8784879,37.9255049 38.8784879,38.0877336 C38.8784879,38.2499623 38.8784879,38.4126852 38.7160014,38.4126852 L38.5535149,38.5742693 L30.9243185,45.5553458 C30.5993669,45.7178323 30.2748665,45.7178323 29.9503662,45.5553458 C29.6254146,45.3928593 29.78745,44.9058939 29.9503662,44.7438585 L37.4175272,38.0877336 Z",
                            id: "形状",
                            transform: "translate(34.320553, 38.055216) scale(-1, 1) translate(-34.320553, -38.055216) "
                        }
                    })])])])])])])
                }), [], !1, null, "ad04de72", null).exports, growthArrowRight: Object(O.a)(Bt, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("svg", {
                        attrs: {
                            width: "10px",
                            height: "16px",
                            viewBox: "0 0 10 16",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "设计稿*4",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Artboard",
                            transform: "translate(-1180.000000, -230.000000)",
                            fill: "#000000",
                            "fill-rule": "nonzero"
                        }
                    }, [e("g", {attrs: {id: "发展史"}}, [e("g", {
                        attrs: {
                            id: "Group-4",
                            transform: "translate(221.000000, 200.000000)"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "后退-copy",
                            transform: "translate(963.500000, 38.000000) scale(-1, 1) translate(-963.500000, -38.000000) translate(929.000000, 0.000000)"
                        }
                    }, [e("g", {attrs: {id: "Group-6"}}, [e("path", {
                        attrs: {
                            d: "M37.4175272,38.0877336 L30.1124015,31.5945249 C29.9503662,31.4322747 29.78745,30.9450729 30.1124015,30.7828228 C30.274888,30.6205726 30.7614023,30.4583224 30.9243185,30.7828228 L38.5535149,37.7632332 C38.5535149,37.7632332 38.7160014,37.7632332 38.7160014,37.9255049 C38.8784879,38.0877551 38.8784879,38.2500053 38.8784879,38.2500053 C38.8784879,38.4127066 38.8784879,38.5742908 38.7160014,38.5742908 L38.5535149,38.7372285 L30.7614023,45.5553458 C30.5993669,45.7178323 30.1124015,45.7178323 29.9503662,45.5553458 C29.78745,45.3928593 29.78745,44.9058939 30.1124015,44.7438585 L37.4175272,38.0877336 Z M37.4175272,38.0877336 L30.1124015,31.4322747 C29.9503662,31.2700245 29.78745,30.7828228 30.1124015,30.6205726 C30.274888,30.4583224 30.7614023,30.2960722 30.9243185,30.6205726 L38.5535149,37.600983 C38.5535149,37.600983 38.7160014,37.600983 38.7160014,37.7632332 C38.8784879,37.7632332 38.8784879,37.9255049 38.8784879,38.0877336 C38.8784879,38.2499623 38.8784879,38.4126852 38.7160014,38.4126852 L38.5535149,38.5742693 L30.9243185,45.5553458 C30.5993669,45.7178323 30.2748665,45.7178323 29.9503662,45.5553458 C29.6254146,45.3928593 29.78745,44.9058939 29.9503662,44.7438585 L37.4175272,38.0877336 Z",
                            id: "形状",
                            transform: "translate(34.320553, 38.055216) scale(-1, 1) translate(-34.320553, -38.055216) "
                        }
                    })])])])])])])])
                }), [], !1, null, "6df3c03f", null).exports
            }, props: {
                limit: {type: Number, default: 4}, growthHistory: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, data: function () {
                return {currentIndex: 0, currentMonth: 0, task: "", noChange: !1, arrOfGrowthArr: []}
            }, methods: {
                yearsuffix: function () {
                    return "zh-CN" === this.$i18n.getLang() ? "年大事件" : " Major Events"
                }, ifShowing: function (t) {
                    return this.noChange || this.changeArrBoolean(t), this.arrOfGrowthArr[t] || !1
                }, changeArrBoolean: function (t) {
                    var e = this.growthHistory.length, n = Math.round(this.limit / 2);
                    if (this.currentIndex >= n && this.currentIndex <= e - n) this.arrOfGrowthArr[t] = this.currentIndex - t <= n && this.currentIndex - t > -n; else {
                        var r = e - this.currentIndex - 1;
                        this.arrOfGrowthArr[t] = r <= n ? t > e - this.limit - 1 : t < this.limit
                    }
                }, showPrevYear: function () {
                    0 !== this.currentIndex && (this.noChange = !1, this.currentIndex -= 1, this.initInterval(this.task), this.play())
                }, showCurrentYear: function (t) {
                    this.noChange = !0, this.currentIndex = t, this.initInterval(this.task), this.play()
                }, showNextYear: function () {
                    this.currentIndex !== this.growthHistory.length - 1 && (this.noChange = !1, this.currentIndex += 1, this.initInterval(this.task), this.play())
                }, isFollowers: function (t) {
                    return 0 !== t && this.growthHistory[this.currentIndex].events[t].month === this.growthHistory[this.currentIndex].events[t - 1].month
                }, initInterval: function (t) {
                    this.currentMonth = 0, clearInterval(t)
                }, autoPlay: function () {
                    this.currentMonth = this.currentMonth === this.growthHistory[this.currentIndex].events.length - 1 ? 0 : this.currentMonth + 1
                }, play: function () {
                    this.task = Mt()(this.autoPlay, 2e3)
                }, viewContent: function (t) {
                    t.src && window.open(t.src, "_blank")
                }
            }, mounted: function () {
                this.currentIndex = this.growthHistory.length - 1, this.play()
            }
        }, Ut = (n(607), Object(O.a)(Dt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "event-wrapper"}, [n("div", {staticClass: "selector-wrapper"}, [n("div", {
                staticClass: "left arrow",
                on: {click: t.showPrevYear}
            }, [n("growth-arrow-left")], 1), t._v(" "), t._l(t.growthHistory, (function (e, r) {
                return t.ifShowing(r) ? n("div", {
                    key: r,
                    staticClass: "selector",
                    class: {current: r === t.currentIndex},
                    on: {
                        click: function (e) {
                            return t.showCurrentYear(r)
                        }
                    }
                }, [t._v(t._s(e.year))]) : t._e()
            })), t._v(" "), n("div", {
                staticClass: "right arrow",
                on: {click: t.showNextYear}
            }, [n("growth-arrow-right")], 1)], 2), t._v(" "), n("div", {staticClass: "breaking-news"}, [n("h2", {staticClass: "year"}, [t._v(t._s(t.growthHistory[t.currentIndex].year + t.yearsuffix()))]), t._v(" "), n("div", {staticClass: "item-wrapper"}, t._l(t.growthHistory[t.currentIndex].events, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "each-item",
                    class: {selected: r === t.currentMonth}
                }, [n("span", {
                    staticClass: "month",
                    class: {followers: t.isFollowers(r)}
                }, [t._v(t._s(e.month))]), t._v(" "), t._m(0, !0), t._v(" "), n("span", {
                    staticClass: "content",
                    class: {hoverable: e.src},
                    on: {
                        click: function (n) {
                            return t.viewContent(e)
                        }
                    }
                }, [t._v(t._s(e.news))])])
            })), 0)])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("span", {staticClass: "progress"}, [e("span", {staticClass: "dot"}), this._v(" "), e("i", {staticClass: "line"}, [e("i", {staticClass: "process"})])])
        }], !1, null, "87298b4a", null).exports), $t = {
            name: "DetailWrapper", props: {
                item: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }
        }, qt = (n(608), Object(O.a)($t, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "details-wrapper"}, [e("h2", {staticClass: "title"}, [this._v(this._s(this.item.title))]), this._v(" "), e("p", {staticClass: "details"}, [this._v(this._s(this.item.detail))])])
        }), [], !1, null, "ad932cf8", null).exports), Ft = {
            name: "AmbitionList", props: {
                ambitionList: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }
        }, Xt = (n(609), Object(O.a)(Ft, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", t._l(t.ambitionList, (function (e, r) {
                return n("p", {
                    key: r,
                    staticClass: "item"
                }, [n("span", {staticClass: "detail-wrapper"}, [n("span", {staticClass: "image-wrapper"}, [n("img", {
                    staticClass: "image",
                    attrs: {src: e.imgSrc}
                })]), t._v(" "), n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("span", {staticClass: "detail"}, [t._v(t._s(e.detail))])]), t._v(" "), r !== t.ambitionList.length - 1 ? n("span", {staticClass: "line"}) : t._e()])
            })), 0)
        }), [], !1, null, "49e31a27", null).exports), zt = {
            name: "FlipCards", props: {
                cards: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {
                currentLang: function () {
                    return this.$i18n.getLang()
                }
            }, filters: {
                appendZero: function (t) {
                    return t < 10 && t > 0 ? "0".concat(t) : t
                }
            }
        }, Ht = (n(610), Object(O.a)(zt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, t._l(t.cards, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "card-wrapper"
                }, [n("div", {staticClass: "img-card"}, [n("div", {
                    staticClass: "card-front",
                    style: {backgroundImage: "url(" + e.imgSrc + ")"}
                }, [n("div", {staticClass: "mask-front"}, [n("span", {staticClass: "index"}, [t._v(t._s(t._f("appendZero")(r + 1)))]), t._v(" "), n("span", {staticClass: "tab"}, [t._v(t._s(e.tab))])])]), t._v(" "), n("div", {staticClass: "card-back"}, [n("div", {staticClass: "mask-back"}, [n("span", {staticClass: "index"}, [t._v(t._s(t._f("appendZero")(r + 1)))]), t._v(" "), n("span", {staticClass: "tab"}, [t._v(t._s(e.tab))]), t._v(" "), n("span", {staticClass: "line"}), t._v(" "), n("span", {
                    staticClass: "description",
                    class: ["zh-CN" !== t.currentLang ? "english" : "chinese"]
                }, [t._v(t._s(e.description))])])])])])
            })), 0)
        }), [], !1, null, "1d5dea92", null).exports), Gt = {
            name: "OtherTabs", props: {
                otherTabs: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, methods: {
                gotoTab: function () {
                }
            }
        }, Wt = (n(611), Object(O.a)(Gt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", t._l(t.otherTabs, (function (e) {
                return n("div", {
                    key: e,
                    staticClass: "tab",
                    on: {click: t.gotoTab}
                }, [n("h2", {staticClass: "title"}, [t._v(t._s(e.tab))]), t._v(" "), n("p", {staticClass: "description"}, [t._v(t._s(e.description))])])
            })), 0)
        }), [], !1, null, "600c5ed7", null).exports), Vt = {
            name: "OfficeDisplay", props: {
                officeList: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {
                currentImgs: function () {
                    return this.officeList[this.currentIndex] ? this.officeList[this.currentIndex].imgList : []
                }
            }, data: function () {
                return {currentIndex: 0}
            }, methods: {
                changeOffice: function (t) {
                    this.currentIndex = t
                }
            }
        }, Jt = (n(612), Object(O.a)(Vt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {staticClass: "office-list"}, t._l(t.officeList, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "office",
                    class: {current: t.currentIndex === r},
                    on: {
                        click: function (e) {
                            return t.changeOffice(r)
                        }
                    }
                }, [n("span", {staticClass: "office-name"}, [t._v(t._s(e.name))])])
            })), 0), t._v(" "), n("div", {staticClass: "image-wrapper"}, t._l(t.currentImgs, (function (t, e) {
                return n("div", {key: e, staticClass: "image-list", style: {backgroundImage: "url(" + t + ")"}})
            })), 0)])
        }), [], !1, null, "66d9ac46", null).exports), Kt = {
            name: "TitleWrapper", props: {
                item: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }
        }, Qt = (n(613), Object(O.a)(Kt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "title-wrapper"}, [n("h2", {staticClass: "top"}, [t._v(t._s(t.item.top))]), t._v(" "), n("p", {staticClass: "title"}, [t._v(t._s(t.item.title))]), t._v(" "), n("div", {staticClass: "line"})])
        }), [], !1, null, "cc16d084", null).exports), Yt = {
            name: "Qrcodes", props: {
                qrcodes: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, methods: {
                gotoWebsite: function (t) {
                    t.webSite && window.open(t.webSite, "_blank")
                }
            }
        }, Zt = (n(614), Object(O.a)(Yt, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {staticClass: "qrcode-group"}, t._l(t.qrcodes, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "qrcode",
                    class: {hoverable: e.webSite},
                    attrs: {src: e.src},
                    on: {
                        click: function (n) {
                            return t.gotoWebsite(e)
                        }
                    }
                }, [n("img", {
                    staticClass: "image",
                    attrs: {src: e.src}
                }), t._v(" "), n("span", {staticClass: "description"}, [t._v(t._s(e.description))])])
            })), 0)])
        }), [], !1, null, "1e27da67", null).exports), te = {
            "zh-CN": [{name: "美妆", mail: "bd_beauty@xiaohongshu.com"}, {
                name: "家居",
                mail: "bd_home@xiaohongshu.com"
            }, {name: "母婴", mail: "bd_baby@xiaohongshu.com"}, {
                name: "食品/保健",
                mail: "bd_food@xiaohongshu.com"
            }, {name: "时尚轻奢", mail: "bd_fashion@xiaohongshu.com"}, {
                name: "家电数码",
                mail: "bd_appliance@xiaohongshu.com"
            }, {name: "仓储物流", mail: "bd_storage@xiaohongshu.com"}, {
                name: "薯队长",
                mail: "shuduizhang@xiaohongshu.com"
            }, {name: "人事/招聘", mail: "career@xiaohongshu.com"}, {
                name: "媒体/采访",
                mail: "media@xiaohongshu.com"
            }, {name: "市场/品牌", mail: "marketing@xiaohongshu.com"}, {
                name: "产品反馈",
                mail: "app_feedback@xiaohongshu.com"
            }, {name: "社区反馈", mail: "community@xiaohongshu.com"}, {
                name: "客服反馈",
                mail: "service@xiaohongshu.com"
            }, {name: "明星入驻", mail: "superstar@xiaohongshu.com"}, {
                name: "推广合作",
                mail: "RED.AD@xiaohongshu.com"
            }, {name: "品牌合作人平台", mail: "influencer@xiaohongshu.com"}, {
                name: "品牌号",
                mail: "brandaccount@xiaohongshu.com"
            }, {name: "平台规则", mail: "rule@xiaohongshu.com"}, {name: "广告合作", mail: "red.ad@xiaohongshu.com"}],
            "en-US": [{name: "Beauty", mail: "bd_beauty@xiaohongshu.com"}, {
                name: "Home",
                mail: "bd_home@xiaohongshu.com"
            }, {name: "Baby Care", mail: "bd_baby@xiaohongshu.com"}, {
                name: "Food/ Health",
                mail: "bd_food@xiaohongshu.com"
            }, {name: "Fashion", mail: "bd_fashion@xiaohongshu.com"}, {
                name: "Home Appliance/ Digital",
                mail: "bd_appliance@xiaohongshu.com"
            }, {name: "Storage/ Logistics", mail: "bd_storage@xiaohongshu.com"}, {
                name: "Captain Xiaohongshu",
                mail: "shuduizhang@xiaohongshu.com"
            }, {name: "Career", mail: "career@xiaohongshu.com"}, {
                name: "Media",
                mail: "media@xiaohongshu.com"
            }, {name: "Marketing", mail: "marketing@xiaohongshu.com"}, {
                name: "APP Feedback",
                mail: "app_feedback@xiaohongshu.com"
            }, {name: "Community Feedback", mail: "community@xiaohongshu.com"}, {
                name: "Customer Service Feedback",
                mail: "service@xiaohongshu.com"
            }, {name: "Celebrity Entering", mail: "superstar@xiaohongshu.com"}, {
                name: "Promotion& Cooperation",
                mail: "RED.AD@xiaohongshu.com"
            }, {name: "Influencer Platform", mail: "influencer@xiaohongshu.com"}, {
                name: "Brand Account",
                mail: "brandaccount@xiaohongshu.com"
            }, {name: "Rules of Xiaohongshu", mail: "rule@xiaohongshu.com"}, {
                name: "Advertising Partnership",
                mail: "red.ad@xiaohongshu.com"
            }]
        }, ee = {
            "zh-CN": [{
                imgSrc: "",
                tab: "社区",
                description: "小红书社区目前内容覆盖时尚、个护、彩妆、美食、旅行、娱乐、读书、健身、母婴等各个生活方式领域，每天产生超过70亿次的笔记曝光，其中超过95%为UGC内容"
            }, {
                imgSrc: "",
                tab: "企业号",
                description: "小红书企业号部门围绕“企业号”这一核心产品，整合公司从社区营销一直到交易闭环的资源，更好地连接消费者和品牌，帮助品牌在小红书完成一站式闭环营销，提供全链条服务"
            }, {
                imgSrc: "",
                tab: "福利社",
                description: "小红书福利社是小红书的自营电商平台，在小红书福利社，用户可以一键购买来自全世界的优质美妆、时尚、家电、零食商品"
            }],
            "en-US": [{
                imgSrc: "",
                tab: "Community",
                description: "Established in 2013, Xiaohongshu is a thriving lifestyle community platform with over 300 million users as of July 2019."
            }, {
                imgSrc: "",
                tab: "Brand Account",
                description: "Xiaohongshu’s Brand Account department integrates the company’s resources from community marketing to closed-loop e-commerce..."
            }, {
                imgSrc: "",
                tab: "Fulishe E-commerce",
                description: "Fulishe is Xiaohongshu’s self-operated e-commerce platform, which integrates merchandising, warehousing, and customer service functions to provide users with a seamless e-commerce experience."
            }, {
                imgSrc: "",
                tab: "REDhome",
                description: "Five REDhomes are located in Shanghai, Changzhou, Suzhou, and Ningbo. Gathering featured products of high reputation, REDhome presents a tangible Xiaohongshu."
            }]
        }, ne = {
            "zh-CN": [{
                imgSrc: "",
                title: "使命",
                detail: "Inspire Lives 分享和发现世界的精彩"
            }, {
                imgSrc: "",
                title: "愿景",
                detail: "成为最受用户信任的互联网公司"
            }, {
                imgSrc: "",
                title: "企业价值观",
                detail: "向上、走进用户、开放心态、务实、担当"
            }],
            "en-US": [{
                imgSrc: "",
                title: "Vision",
                detail: "Become the most trusted online company"
            }, {
                imgSrc: "",
                title: "Mission",
                detail: "Inspire Lives"
            }, {
                imgSrc: "",
                title: "Culture",
                detail: "Result Focus, Judgement, Trust, Leadership"
            }]
        }, re = {
            "zh-CN": [{
                name: "上海总部",
                info: {position: "办公走廊", address: "上海办公室"},
                imgList: ["", "", ""]
            }, {
                name: "北京",
                info: {position: "办公走廊", address: "北京办公室"},
                imgList: ["", "", ""]
            }, {
                name: "武汉",
                info: {position: "办公走廊", address: "武汉办公室"},
                imgList: ["", "", ""]
            }],
            "en-US": [{
                name: "Shanghai Headquarter",
                info: {position: "办公走廊", address: "上海办公室"},
                imgList: ["", "", ""]
            }, {
                name: "Beijing",
                info: {position: "办公走廊", address: "北京办公室"},
                imgList: ["", "", ""]
            }, {
                name: "Wuhan",
                info: {position: "办公走廊", address: "武汉办公室"},
                imgList: ["", "", ""]
            }]
        }, ie = {
            "zh-CN": [{
                year: 2013,
                events: [{news: "小红书在上海成立", month: "6月"}, {news: "小红书推出海外购物分享社区", month: "12月"}]
            }, {
                year: 2014,
                events: [{
                    news: "小红书正式上线电商平台“福利社”",
                    src: "",
                    month: "12月"
                }, {news: "小红书发布第一届全球大赏榜单", month: "12月"}]
            }, {
                year: 2015,
                events: [{news: "小红书郑州自营保税仓正式投入运营", month: "3月"}, {
                    news: "小红书深圳自营保税仓投入运营",
                    month: "6月"
                }, {
                    news: "6月6日周年庆期间，小红书APP登上了苹果应用商店总榜第4。用户达到1500万。",
                    src: "",
                    month: "6月"
                }, {news: "上海市委书记韩正到访小红书 对商业模式予以肯定", month: "7月"}, {
                    news: "总理200元“下单”小红书",
                    src: "",
                    month: "9月"
                }]
            }, {
                year: 2016,
                events: [{news: "小红书将人工运营内容改成了机器分发的形式", month: "1月"}, {
                    news: "国务院副总理汪洋视察小红书上海总部",
                    month: "7月"
                }, {
                    news: "小红书被国家发改委评为“互联网+百佳实践案例”并在全国宣传推广。",
                    src: "",
                    month: "7月"
                }, {news: "小红书拓展了第三方平台和品牌商家，全品类SKU快速成长", month: "下半年"}]
            }, {
                year: 2017,
                events: [{
                    news: "《人民日报》头版专题报道称小红书已成为“全球最大的社区电商平台”",
                    src: "",
                    month: "5月"
                }, {
                    news: "REDelivery国际物流系统正式上线",
                    src: "",
                    month: "5月"
                }, {
                    news: "小红书第三个“66周年庆大促”，开卖2小时即突破1亿销售额，在苹果App Store购物类下载排名第一。小红书用户突破5000万",
                    src: "",
                    month: "6月"
                }, {
                    news: "国家监测中心与小红书签订质量安全共治合作协议。",
                    src: "",
                    month: "8月"
                }, {
                    news: "小红书于武汉建立全球科技总部",
                    src: "",
                    month: "8月"
                }, {
                    news: "小红书被国家商务部评为全国电子商务示范企业",
                    src: "",
                    month: "9月"
                }, {news: "小红书与华为等优秀公司一起，被《人民日报》评选为“中国品牌”", month: "12月"}]
            }, {
                year: 2018,
                events: [{
                    news: "创始人瞿芳获福布斯“2018中国商界25位潜力女性”称号",
                    src: "",
                    month: "3月"
                }, {
                    news: "《解放日报》报道小红书为“年轻人信任的中国品牌”",
                    src: "",
                    month: "3月"
                }, {
                    news: "小红书参加博鳌亚洲论坛2018年年会，被彭博社称作“连接中外消费者的桥梁”",
                    src: "",
                    month: "4月"
                }, {
                    news: "小红书完成超过3亿美元D轮融资，估值超过30亿美元，用户突破1亿",
                    src: "",
                    month: "6月"
                }, {
                    news: "小红书第一家线下零售店REDhome在上海开业",
                    src: "",
                    month: "6月"
                }, {
                    news: "小红书荣登福布斯《2018中国最具创新力企业榜TOP 50》榜单",
                    src: "",
                    month: "8月"
                }, {news: "小红书用户突破1.5亿", month: "10月"}, {
                    news: "小红书参加首届中国国际进口博览会",
                    src: "",
                    month: "11月"
                }, {
                    news: "创始人瞿芳获评新浪财经“2018中国十大经济潮流人物”",
                    src: "",
                    month: "12月"
                }]
            }, {
                year: 2019,
                events: [{
                    news: "小红书用户突破2亿",
                    src: "",
                    month: "1月"
                }, {
                    news: "小红书上线品牌合作人平台",
                    src: "",
                    month: "1月"
                }, {
                    news: "小红书获评Fast Company中国最佳创新公司",
                    src: "",
                    month: "2月"
                }, {
                    news: "小红书创始人瞿芳出席女性圆桌论坛",
                    src: "",
                    month: "3月"
                }, {
                    news: "小红书正式上线品牌号功能",
                    src: "",
                    month: "3月"
                }, {
                    news: "小红书上榜领英最受职场人欢迎公司",
                    src: "",
                    month: "4月"
                }, {news: "2019年7月，用户数突破3亿，月活突破1亿", month: "7月"}]
            }],
            "en-US": [{
                year: 2013,
                events: [{
                    news: "Xiaohongshu launches its overseas shopping community.",
                    month: "December"
                }, {news: "Xiaohongshu is founded in Shanghai.", month: "June"}]
            }, {
                year: 2014,
                events: [{
                    news: "Xiaohongshu launches fulishe, its self-operated e-commerce platform.",
                    src: "",
                    month: "December"
                }]
            }, {
                year: 2015,
                events: [{
                    news: "Xiaohongshu’s self-operated warehouse was officially put into operation in Zhengzhou.",
                    month: "March"
                }]
            }, {
                year: 2016,
                events: [{
                    news: "Xiaohongshu transitions to using AI and machine learning to manage and distribute content.",
                    month: "January"
                }]
            }, {
                year: 2017,
                events: [{
                    news: "Xiaohongshu sets up its global technology headquarters in Wuhan.",
                    src: "",
                    month: "August"
                }, {
                    news: " Xiaohongshu launches its REDelivery international logistics system.",
                    src: "",
                    month: "May"
                }]
            }, {
                year: 2018,
                events: [{
                    news: " Xiaohongshu’s first offline retail store, REDhome, opens in Shanghai.",
                    src: "",
                    month: "June"
                }, {
                    news: "Xiaohongshu raises over $300 million in its Series D fundraising, with a valuation of over $3 billion. The number of users on Xiaohongshu passes 100 million.",
                    src: "",
                    month: "June"
                }]
            }, {
                year: 2019,
                events: [{
                    news: "In July 2019, registered users exceeded 300 million, and MAU made a break-through of 100 million.",
                    month: "July "
                }, {
                    news: "Xiaohongshu launches xiaohongxin, a product rating system jointly developed with users on the platform.",
                    month: "May"
                }, {
                    news: "Xiaohongshu launches its Brand Account.",
                    src: "",
                    month: "March"
                }, {
                    news: "Xiaohongshu launches its Influencer Platform.",
                    src: "",
                    month: "January"
                }]
            }]
        }, oe = {
            "zh-CN": [{
                name: "general",
                src: "",
                description: "下载小红书"
            }, {
                name: "weibo",
                src: "",
                webSite: "",
                description: "关注小红书微博"
            }, {
                name: "wechat",
                src: "",
                description: "关注微信公众号"
            }, {
                name: "miniProgram",
                src: "",
                description: "关注微信小程序"
            }],
            "en-US": [{
                name: "general",
                src: "",
                description: "Download Xiaohongshu"
            }, {
                name: "weibo",
                src: "",
                webSite: "",
                description: "Follow the Weibo"
            }, {
                name: "wechat",
                src: "",
                description: "Follow the Wechat official account"
            }, {
                name: "miniProgram",
                src: "",
                description: "Follow the WeChat applet"
            }]
        }, ae = {
            "zh-CN": [{name: "上海总部", address: "上海市 黄浦区 马当路388号 SOHO复兴广场C座"}, {
                name: "北京",
                address: "北京市 朝阳区 安定路 中海国际B座18楼"
            }, {name: "武汉", address: "武汉市 光谷大道 现代光谷世贸中心B座10楼"}],
            "en-US": [{
                name: "Shanghai Headquarter:",
                address: "Block C, SOHO Fuxing Plaza, No. 388 Madang Road, Huangpu District, Shanghai, China"
            }, {
                name: "Beijing:",
                address: "Floor 18, Block B, Zhonghai International Center, Anding Road, Chaoyang District, Beijing, China"
            }, {
                name: "Wuhan:",
                address: "Floor 10, Block B, Modern Optics Valley World Trade Center, Guanggu Avenue, Wuhan, China"
            }]
        }, se = {
            "zh-CN": {
                title: "小红书关心每一位用户与合作伙伴的声音",
                paragraphs: [{content: "如您在小红书的使用或与小红书的合作中遇到难以解决的问题，以及任何对平台发展有益的意见及建议，欢迎您直接写信到CEO邮箱：<strong>ceo@xiaohongshu.com</strong>。"}, {
                    content: "为了您的来信能够得到更高效的处理，请您在邮件中标注以下信息：",
                    list: ["您的个人或工作单位信息（公司/品牌/部门/岗位/姓名 等）", "您的联系方式（邮箱地址/直线电话 等）", "相关问题、意见或建议的具体描述（背景/案例/各类支持性材料 等）"]
                }]
            },
            "en-US": {
                title: "Xiaohongshu listens to every user and partner's voice",
                paragraphs: [{content: "If you encounter any difficulties using or working with Xiaohongshu, or if you have any suggestions for the development of the platform, you are welcome to write directly to our CEO at <strong>ceo@xiaohongshu.com.</strong>"}, {
                    content: "To help us process your request more efficiently, please provide the following information in your email:",
                    list: ["Your personal or work information (company/brand/department/position/name, etc.)", "Your contact information (email address/direct line, etc.)", "Specific description of relevant issues, opinions, or suggestions (background/case/various supporting materials, etc.)"]
                }]
            }
        };

    function ce(t, e) {
        var n = v()(t);
        if (V.a) {
            var r = V()(t);
            e && (r = G()(r).call(r, (function (e) {
                return z()(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ue(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n, r = null != arguments[e] ? arguments[e] : {};
            if (e % 2) _()(n = ce(Object(r), !0)).call(n, (function (e) {
                Object(J.a)(t, e, r[e])
            })); else if (F.a) $()(t, F()(r)); else {
                var i;
                _()(i = ce(Object(r))).call(i, (function (e) {
                    D()(t, e, z()(r, e))
                }))
            }
        }
        return t
    }

    var le = {
            name: "Main",
            components: {
                GrowthHistory: Ut,
                NewBanner: Q,
                DetailWrapper: qt,
                AmbitionList: Xt,
                OtherTabs: Wt,
                FlipCards: Ht,
                OfficeDisplay: Jt,
                TitleWrapper: Qt,
                Qrcodes: Zt
            },
            computed: {
                aboutUs: function () {
                    var t = this.$i18n.getLang() || "zh-CN";
                    return ue(ue({}, this.$locale.global.state.aboutUs), {}, {
                        ambitionList: ne[t],
                        otherTabs: ee[t],
                        officeList: re[t],
                        mails: te[t],
                        officeAddress: ae[t],
                        growthHistory: ie[t],
                        qrcodes: oe[t],
                        ceoMailBox: se[t]
                    })
                }
            },
            data: function () {
                return {
                    imgSrc: "",
                    context: {title: "公司环境", detail: "干净、清新、梦幻，为你提供"},
                    cooperation: {top: "COOPERATIONS", title: "合作邮箱"},
                    address: {top: "ADDRESS", title: "我们在这里"},
                    addressIcon: "",
                    contact: {top: "CONTACT", title: "更多方式关注小红书"}
                }
            },
            methods: {
                goToMap: function (t) {
                    window.open("" + {
                        Shanghai: "121.474731,31.215878",
                        Beijing: "116.488539,40.002106",
                        Wuhan: "114.421449,30.472741"
                    }[t], "_blank")
                }
            }
        }, he = (n(615), Object(O.a)(le, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("new-banner", {
                staticClass: "banner",
                attrs: {
                    "img-src": t.imgSrc,
                    "show-text": t.aboutUs.showText,
                    "inner-style": {backgroundColor: "rgba(0, 0, 0, 0.5)"}
                }
            }), t._v(" "), n("div", {staticClass: "content"}, [n("div", {staticClass: "introduction"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.introduction.title))]), t._v(" "), n("span", {
                staticClass: "description-wrapper",
                class: ["en-US" === t.$i18n.getLang() ? "english" : "chinese"]
            }, t._l(t.aboutUs.introduction.detail, (function (e, r) {
                return n("p", {key: r, staticClass: "description"}, [t._v(t._s(e))])
            })), 0), t._v(" "), n("flip-cards", {attrs: {cards: t.aboutUs.otherTabs}}), t._v(" "), n("ambition-list", {
                staticClass: "ambition-list",
                attrs: {"ambition-list": t.aboutUs.ambitionList}
            })], 1), t._v(" "), n("div", {staticClass: "context"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.officeEnvironment))]), t._v(" "), n("office-display", {attrs: {"office-list": t.aboutUs.officeList}})], 1), t._v(" "), n("div", {staticClass: "growth"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.growthTitle))]), t._v(" "), n("growth-history", {attrs: {"growth-history": t.aboutUs.growthHistory}})], 1), t._v(" "), n("div", {staticClass: "cooperation"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.contactUs))]), t._v(" "), n("div", {staticClass: "mails"}, t._l(t.aboutUs.mails, (function (e, r) {
                return n("span", {
                    key: r,
                    staticClass: "mail"
                }, [n("span", {staticClass: "mail-name"}, [t._v(t._s(e.name))]), n("span", {staticClass: "mail-mail"}, [t._v(t._s(e.mail))])])
            })), 0)]), t._v(" "), n("div", {staticClass: "address"}, [n("div", {staticClass: "address-container"}, [n("div", {
                staticClass: "office-address-wrapper",
                class: ["en-US" === t.$i18n.getLang() ? "english" : "chinese"]
            }, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.officeAddressTitle))]), t._v(" "), t._l(t.aboutUs.officeAddress, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "office"
                }, [n("span", {staticClass: "office-name"}, [t._v(t._s(e.name))]), t._v(" "), n("span", {staticClass: "office-address"}, [t._v(t._s(e.address))])])
            }))], 2), t._v(" "), n("div", {staticClass: "map"}, [n("img", {
                staticClass: "shanghai",
                attrs: {src: t.addressIcon},
                on: {
                    click: function (e) {
                        return t.goToMap("Shanghai")
                    }
                }
            }), t._v(" "), n("img", {
                staticClass: "beijing", attrs: {src: t.addressIcon}, on: {
                    click: function (e) {
                        return t.goToMap("Beijing")
                    }
                }
            }), t._v(" "), n("img", {
                staticClass: "wuhan", attrs: {src: t.addressIcon}, on: {
                    click: function (e) {
                        return t.goToMap("Wuhan")
                    }
                }
            })])])]), t._v(" "), n("div", {staticClass: "ceo-mail-box"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.ceoMailBox.title))]), t._v(" "), n("div", {staticClass: "paragraphs-container"}, t._l(t.aboutUs.ceoMailBox.paragraphs, (function (e) {
                return n("div", {key: e.id, staticClass: "paragraph"}, [n("p", {
                    staticClass: "content",
                    domProps: {innerHTML: t._s(e.content)}
                }), t._v(" "), e.list ? n("ul", {staticClass: "list"}, t._l(e.list, (function (e) {
                    return n("li", {key: e.key, staticClass: "list-item"}, [t._v(t._s(e))])
                })), 0) : t._e()])
            })), 0)]), t._v(" "), n("div", {staticClass: "contact"}, [n("span", {staticClass: "title"}, [t._v(t._s(t.aboutUs.contactTitle))]), t._v(" "), n("qrcodes", {attrs: {qrcodes: t.aboutUs.qrcodes}})], 1)])], 1)
        }), [], !1, null, "07347443", null).exports), fe = n(24), de = n.n(fe), pe = n(25), me = n.n(pe), ve = n(74),
        ge = function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return Object(ve.a)({sourceUrl: t, type: "jpg", options: e})
        }, _e = {
            name: "LiabilityList", components: {}, props: {
                list: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {
                totalPage: function () {
                    var t = this.list.length;
                    return 0 !== t ? Math.ceil(t / this.splitNum) : 0
                }, slicedList: function () {
                    var t;
                    return Z()(t = this.list).call(t, this.currentIndex * this.splitNum, this.currentIndex * this.splitNum + 5)
                }
            }, watch: {
                currentIndex: function () {
                    !function t(e, n, r) {
                        if (!(r < 0)) {
                            var i = (n - window.scrollY) / r * 10;
                            me()((function () {
                                !isNaN(de()(i, 10)) && window.scrollTo && (window.scrollTo(0, window.scrollY + i), t(e, n, r - 10))
                            }), 10)
                        }
                    }(window, 486, 300)
                }
            }, data: function () {
                return {currentIndex: 0, splitNum: 5}
            }, methods: {
                viewItem: function (t) {
                    var e = this.$router.resolve({name: "LiabilityItem", query: {id: t.id}}).href;
                    window.open(e, "_self")
                }, prevPage: function () {
                    this.currentIndex > 0 && (this.currentIndex -= 1)
                }, nextPage: function () {
                    this.currentIndex < this.totalPage - 1 && (this.currentIndex += 1)
                }, changeCurrentPage: function (t) {
                    this.currentIndex = t - 1
                }
            }
        }, ye = (n(629), Object(O.a)(_e, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "outline"}, [t._l(t.slicedList, (function (e, r) {
                return n("div", {
                    key: r, staticClass: "item-wrapper", on: {
                        click: function (n) {
                            return t.viewItem(e)
                        }
                    }
                }, [n("div", {staticClass: "image-wrapper"}, [n("img", {
                    staticClass: "image",
                    attrs: {src: e.imgSrc || ""}
                })]), t._v(" "), n("div", {staticClass: "item"}, [n("div", {staticClass: "title-wrapper"}, [n("h3", {staticClass: "title"}, [e.tag ? n("span", {staticClass: "tag"}, [t._v("【" + t._s(e.tag) + "】")]) : t._e(), t._v(t._s(e.title))])]), t._v(" "), n("span", {staticClass: "content"}, [t._v(t._s(e.content[0].paragraph || e.content[1].paragraph || e.content[2].paragraph))]), t._v(" "), n("span", {staticClass: "date"}, [t._v(t._s(e.date))])])])
            })), t._v(" "), n("div", {staticClass: "pagination"}, [n("span", {
                staticClass: "prev page",
                class: {disabled: 0 === t.currentIndex},
                on: {click: t.prevPage}
            }, [t._v("上一页")]), t._v(" "), t._l(t.totalPage, (function (e) {
                return n("span", {
                    key: e,
                    staticClass: "pages page",
                    class: {current: e === t.currentIndex + 1},
                    on: {
                        click: function (n) {
                            return t.changeCurrentPage(e)
                        }
                    }
                }, [t._v(t._s(e))])
            })), t._v(" "), n("span", {
                staticClass: "next page",
                class: {disabled: t.currentIndex === t.totalPage - 1},
                on: {click: t.nextPage}
            }, [t._v("下一页")])], 2)], 2)
        }), [], !1, null, "8adc6184", null).exports), be = [{
            id: "7",
            imgSrc: "",
            title: "小红书新一批援助物资运达武汉 已定向捐赠同济、协和等四家医院",
            content: [{paragraph: "2月17日，继首批20万件物资运达武汉后，小红书的第二批援助物资也于日前运达武汉。这批9万件N95医用口罩已定向捐赠给同济医院中法新城院区、协和医院西院、武汉大学人民医院东院、同济医院光谷院区四家医院，用于新型冠状肺炎的疫情防疫工作。"}, {img: ""}, {paragraph: "此外，小红书发起的“武汉加油”公益直播活动收益和春节“小红签”活动中用户的自愿捐赠共计22.4万余元，小红书平台出资配捐至50万元人民币，已通过湖北省慈善总会定向捐赠给武汉市精神卫生中心。"}, {paragraph: "“这些口罩漂洋过海来到武汉，实在太不容易了。”小红书网友“牛牛妈妈”在昨天的笔记中分享表示。“牛牛妈妈”是一名奋战在一线的医护人员，小年夜她自愿从武汉同济医院肿瘤科调去发热门诊，也开始在小红书上发布自己的“抗疫日记”，她所在的医院同济医院中法新城院区，刚好是此次小红书定向捐赠的医院之一。物资签收现场，“牛牛妈妈”还特地带去了儿子牛牛为感谢小红书写的书法作品。"}, {img: ""}, {paragraph: "小红书计划出资1000万人民币用于此次新冠肺炎的专项援助，涵盖物资采购与捐赠、心理援助基金以及平台公益活动的配捐。小红书物资援助仍在持续，除了此前已到达武汉的物资，一批防护服正在定向运往武汉的三家疫情防控重点医院。"}, {paragraph: "2月10日，小红书上线抗疫心理援助平台，联合湖北省心理咨询师协会、壹点灵、壹心理、简单心理、抑郁研究所等5家专业心理咨询机构，超1000名专业咨询师，为受疫情影响的一线医护人员、患者及有需求的普通公众提供7*24小时的免费心理咨询。"}],
            date: "2020-02-17 12:00"
        }, {
            id: "6",
            imgSrc: "",
            title: "小红书上线抗疫心理援助平台 逾千名咨询师提供免费心理咨询",
            content: [{img: ""}, {paragraph: "2月10日，小红书上线抗疫心理援助平台，为受疫情影响的一线医护人员、患者及有需求的普通公众提供7*24小时的免费心理咨询。小红书会将援助专题页定向推送给湖北地区用户，以帮助热线直达疫情严重地区。"}, {paragraph: "此次提供心理援助的“暖心行动”由小红书联合湖北省心理咨询师协会、壹点灵、壹心理、简单心理、抑郁研究所等5家专业心理咨询机构发起，超过1000名专业咨询师参与。"}, {paragraph: "公众在小红书搜索“暖心行动”或“心理援助”后进入相关页面直接选择相关机构进行预约，进行一对一免费心理咨询。值得一提的是，对一线医护人员咨询需求，各机构将派出有过专业医护沟通经验的咨询师对接。"}, {img: ""}, {paragraph: "湖北省心理咨询师协会会长、武汉大学中南医院神经科教授肖劲松表示，对于疫情的恐慌心理会带来医疗资源的浪费、医疗秩序的混乱；不良的心理状态会影响人体免疫功能，导致免疫力下降，这些都不利于防病治病。在重大疫情出现时，心理干预在理论上和实践上的意义都相当突出。"}, {paragraph: "在心理援助平台上线之前，小红书已邀请湖北省心理咨询师协会、壹点灵、壹心理、简单心理、抑郁研究所等咨询机构的专家在小红书参与“武汉加油”的公益直播，通过直播连线等方式，向普通用户科普疫情期间心理调节的重要性及简单的自我调节方式，辅助调节心理状态。"}, {
                img: "",
                desc: "（心理专家与小红书创作者直播连线）"
            }, {paragraph: "湖北心协肖劲松教授是首位在小红书通过直播向公众普及疫情心理健康知识的咨询专家。肖劲松通过讲述自己经手的案例，详细解析了特殊时期如何正确面对医患关系、如何劝说父母在家隔离以及面对可能产生的恐慌如何自我缓解等心理知识。"}, {paragraph: "此外，在近几天的公益直播中，以上多家机构内有应激创伤心理辅导经验的专业心理专家，分别围绕“疫情当下缓解焦虑情绪的N种方法”、“疫情期心理保健生活方式指南”、“居家隔离期间，如何调整自己的情绪”等不同主题，进行心理健康知识的科普和指导。"}, {paragraph: "中国心理卫生协会心理咨询师专业委员会委员、简单心理创始人简里里提到他们发起免费咨询的初衷时表示，“在灾害的不同阶段，心理援助的工作介入不同。心理的修复是一项漫长的工作。在初期，我们希望通过科普、免费热线等，帮助人们在不稳定的情况下提供稳定感。”"}, {paragraph: '小红书计划出资1000万人民币用于此次新冠肺炎的专项援助，涵盖三个方向，一是在国内外持续采购口罩、防护服等防疫物资，直接对口支援主要疫区；二是启动专项心理援助基金，联合专业心理咨询机构，为此次受疫情影响的医护人员、患者以及普通市民，提供免费的心理疏导，对小红书社区内的疫区用户提供必要的主动心理干预；三是针对社区"武汉加油"公益直播活动收益和春节"小红签"活动的用户自愿捐赠进行平台配捐，定向捐赠给疫区相关公益慈善组织。'}, {paragraph: "1月31日，由小红书捐赠武汉地区的首批20万件防护口罩已陆续到达武汉，小红书在海外采购的9万件欧标FFP2医用口罩物资，也已在定向发往武汉地区主要医院途中。"}],
            date: "2020-02-10 12:00"
        }, {
            id: "5",
            imgSrc: "",
            title: "小红书出资1000万元用于新冠肺炎专项援助 支援武汉疫区",
            content: [{paragraph: "1月31日，由小红书捐赠武汉疫区的首批20万件防护口罩已陆续到达武汉，相关物资已移交武汉东湖高新区防控指挥部，统一调度配给急需物资的医院及社区。同时，小红书在海外采购的包括欧标FFP2医用口罩在内的超过10万件医疗防疫物资，也已启程发往国内。"}, {img: ""}, {paragraph: '小红书计划出资1000万人民币用于此次新冠肺炎的专项援助，涵盖三个方向，一是在国内外持续采购口罩、防护服等防疫物资，直接对口支援主要疫区；二是启动专项心理援助基金，联合专业心理咨询机构，为此次受疫情影响的医护人员、患者以及普通市民，提供免费的心理疏导，对小红书社区内的疫区用户提供必要的主动心理干预；三是针对社区"武汉加油"公益直播活动收益和春节"小红签"活动的用户自愿捐赠进行平台配捐，定向捐赠给疫区相关公益慈善组织。'}, {paragraph: "1月26日开始，小红书社区将“武汉加油”话题置顶，并发起同题公益直播活动。过去几天的直播中，@雷靖-、@瓦妮莎胡、@米克和@猫酱去旅行等在内的武汉创作者，展示了隔离中普通武汉市民的生活状态，对网友的关注和关心的问题一一进行了解答。"}, {img: ""}, {paragraph: "此外，包括@如酱在东京、@韩承浩、@知你者葵葵也 和@Winnie Tang等在内的身处国内外其他地区的小红书创作者也踊跃参与“武汉加油”主题直播，并与身在武汉的创作者进行直播连线，聊怎么戴口罩，聊武汉的美食，聊怎么在家里“旅游”，大家都希望能够通过自己的力量帮助武汉，鼓励武汉。包括知名主持人张大大和梁田在内的小红书明星创作者也陆续参与到公益直播中，生动有趣的讲解防疫知识点，呼吁大家务必要戴口罩，少出门。"}, {paragraph: "目前“武汉加油”在小红书社区成为热搜话题，有超过6万人参与该话题，浏览量超过2.4亿，而截止1月31日，已有71个创作者开启了公益直播，29万用户参与，用332万次互动为武汉加油、打气。“武汉加油”公益直播第一阶段预期2月9号结束，而本次活动创作者和平台在直播中获得的所有收益，都将捐赠给疫区相关公益慈善组织。"}],
            date: "2020-02-01 12:00"
        }, {
            id: "4",
            imgSrc: "",
            title: "小红书积极响应“争做中国好网民 上海网民在行动”网络举报宣传月活动",
            content: [{paragraph: "9月10日上午，2019年上海市网络举报宣传月启动式暨网络举报志愿者培训开班仪式在上海报业大厦2楼报告厅举行，网络举报知识竞赛也同日上线。该活动由上海市委网信办指导，新民晚报新民网和上海互联网新闻研究中心（上海市互联网违法和不良信息举报中心）主办。这也是2019年上海市“争做中国好网民 上海网民在行动”有关“网络乱象我举报”活动的重要组成部分。"}, {img: ""}, {paragraph: "启动仪式上，市委网信办网研中心介绍了本市网络举报工作的进展和网络举报宣传月活动的主要内容。目前，上海举报中心已将本市121家属地重点网站纳入举报工作范围，覆盖全国数亿网民，夯实了举报工作的群众基础。"}, {paragraph: "网络举报志愿者代表宣读了网络举报志愿者倡议书，号召广大网民自觉增强网络素养、主动传播正能量、积极举报网络乱象。全场140名网络举报志愿者一起发出“争做中国好网民 网络乱象我举报”的庄重承诺。"}, {img: ""}, {paragraph: "市政协委员代表在发言中表示，政协委员肩负重大社会责任，愿意与社会各阶层志愿者组成合力，共同为打造健康清朗向上的网络空间而努力。新民晚报新民网领导介绍了新民网在网络举报方面的工作情况，指出主流媒体在整治网络乱象中应当承担起主体责任，弘扬正能量，唱响主旋律。"}, {paragraph: "启动仪式上，市委网信办与新民晚报新民网相关负责人共同按下网络举报知识竞赛上线“启动球”，这标志着网络举报宣传月活动正式拉开帷幕。"}, {paragraph: "市委网信办组织专家现场给网络举报志愿者讲授了网络举报体系、举报处置流程和适用法律法规的有关知识，对大家最关心的举报案例进行了集中解释。"}, {paragraph: "会议透露，今年的网络举报宣传月活动还将邀请举报志愿者们参与网信专项行动，举报中心将对网络举报志愿者们的举报信息进行优先受理，并与志愿者代表定期保持工作交流与联系，继续指导各网站不断畅通举报渠道，积极受理网民举报，共同与网上违法和不良信息作斗争。"}, {paragraph: "会议指出，网络空间的治理离不开每一位网民的共同参与，为提高社会各界网络举报的有效性与针对性，组建网络举报志愿者队伍意义重大，希望本市网络举报志愿者们发挥好示范引领作用，支持网络举报工作，积极举报网上违法和不良信息，助力共建清朗网络空间。"}, {paragraph: "市委网信办和新民晚报新民网有关负责同志以及由政协委员、民主党派、各委办局、网络社会组织、本市重点网站等组成的网络举报志愿者代表共150人出席了本次启动仪式。"}, {img: ""}, {paragraph: "网络举报知识竞赛链接："}, {src: ""}],
            date: "2019-9-10 12:00"
        }, {
            id: "1",
            imgSrc: "",
            title: "2019环保聚焦 小红书上“生活垃圾分类”一直在行动",
            content: [{paragraph: "用新眼光审视环保，用“垃圾日记”为绿色生活代言，新青年们正通过新的生活方式，参与对“环保”这个宏大命题的独特理解和表达。"}, {paragraph: "《上海市生活垃圾管理条例》(以下简称：《条例》)全文于日前正式公布，并将于7月1日正式开始实施。无数年轻人正通过视频的方式记录自己及身边关于垃圾分类的点点滴滴，引领更多年轻人的美好生活。作为全国2亿新青年生活方式的载体，小红书也在让更多人看见并追寻这种健康环保的生活方式，从思想到行动，引领一代年轻人的美好生活。"}, {paragraph: "早在2018年7月，小红书用户Ritatawang发起有关废物垃圾再利用的话题 #我的垃圾日记，把手边的垃圾，改造成一件件可爱的工艺品，并和好友一起跑步捡垃圾，做城市的美容师。这一行动，引发了近万位小红书用户参与行动。"}, {img: ""}, {paragraph: "如今，“我的垃圾日记”还在小红书上继续生根发芽。小红书正在运用移动社区美好的能量，让环保随手可行，撬动更多年轻人参与其中。"}, {paragraph: "小红书在上海成立发展，拥有大量年轻用户，现在只要在小红书里搜索生活垃圾分类，小红书的公益薯邀请大家一起分享、学习更多生活垃圾分类管理好的做法，进行《条例》相关宣传法规，和上海用户分享积极向上的垃圾分类举措内容，鼓励倡导垃圾分类从你我开始，以笔记、图片、短视频的分享笔记形式发动年轻人从我做起，参与垃圾分类管理，成就“美家美沪”。"}],
            date: "2019-4-18 12:35"
        }, {
            id: "2",
            imgSrc: "",
            title: "【净网2019】小红书积极参与净网行动！",
            content: [{paragraph: "为维护清朗有序的网络空间，夯实属地企业主体责任，结合公安部“净网2019”专项行动要求，今年以来，上海公安网安部门在全市范围内开展了网络安全执法检查专项行动。"}, {paragraph: "在执法检查中发现，有12家企业存在未向公安机关履行备案义务，未落实用户实名制要求，未落实网络安全技术措施等违法违规行为。"}, {paragraph: "上海公安网安部门根据《中华人民共和国网络安全法》、《计算机信息网络国际联网安全保护管理办法》等相关法律法规，依法对12家企业予以行政处罚。"}],
            date: "2019-4-18 12:35"
        }, {
            id: "3",
            imgSrc: "",
            title: "小红书积极响应上海市电信和互联网行业网络安全检查",
            content: [{paragraph: "2019年上海市电信和互联网行业网络安全行政检查已经启动。"}, {paragraph: "小红书按照检查规定，加强自身学习，充分认识网络安全行政检查是电信主管部门依法开展行政管理和推进网络安全防护工作落实的重要举措，积极配合上海电信主管部门做好监督检查，全面深入开展自查工作。"}, {img: ""}],
            date: "2019-6-24 10:00"
        }], we = {
            name: "Main", components: {NewBanner: Q, LiabilityList: ye}, computed: {
                liability: function () {
                    return this.$locale.global.state.liability
                }
            }, data: function () {
                return {
                    imgSrc: "",
                    innerStyle: {},
                    bannerStyle: {height: "436px"},
                    liabilityList: be
                }
            }
        }, xe = (n(630), Object(O.a)(we, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "container"}, [e("new-banner", {
                staticClass: "banner",
                attrs: {
                    "img-src": this.imgSrc,
                    "show-text": this.liability.showText,
                    "inner-style": {backgroundColor: "rgba(51, 51, 51, 0.3)"}
                }
            }), this._v(" "), e("div", {staticClass: "liability-wrapper"}, [e("liability-list", {attrs: {list: this.liabilityList}})], 1)], 1)
        }), [], !1, null, "d2551142", null).exports), Ce = {
            name: "Main", computed: {
                testArrays: function () {
                    return this.$locale.global.state.liability.testArray ? this.$locale.global.state.liability.testArray : []
                }, releaseTime: function () {
                    return this.$locale.global.state.releaseTime
                }
            }, filters: {
                modifyContent: function (t) {
                    return t
                }
            }, data: function () {
                return {item: {}, passage: {}}
            }, methods: {
                gotoSrc: function (t) {
                    t && window.open(t, "_blank")
                }
            }, created: function () {
                var t = this;
                this.passage = Ot()(be).call(be, (function (e) {
                    return e.id === t.$route.query.id
                }))
            }
        }, ke = (n(631), Object(O.a)(Ce, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "passage-wrapper"}, [n("div", {staticClass: "passage"}, [n("h2", {staticClass: "title"}, [t._v(t._s(t.passage.title))]), t._v(" "), n("span", {staticClass: "subtitle"}, [n("span", {staticClass: "date"}, [t._v(t._s(t.releaseTime) + ": " + t._s(t.passage.date))])]), t._v(" "), n("div", {staticClass: "content-wrapper"}, t._l(t.passage.content, (function (e, r) {
                return n("span", {key: r, staticClass: "content"}, [e.htmlPara ? n("span", {
                    staticClass: "paragraph-html",
                    domProps: {innerHTML: t._s(e.htmlPara)}
                }) : t._e(), t._v(" "), e.paragraph ? n("span", {staticClass: "paragraph"}, [t._v(t._s(e.paragraph))]) : e.img ? n("img", {
                    staticClass: "inline-picture",
                    attrs: {src: e.img}
                }) : e.src ? n("span", {
                    staticClass: "clickable-url", on: {
                        click: function (n) {
                            return t.gotoSrc(e.src)
                        }
                    }
                }, [t._v(t._s(e.src))]) : t._e()])
            })), 0)])])
        }), [], !1, null, "71b4ebb4", null).exports), Se = n(73), Ie = {
            name: "Iphone", computed: {
                videoSelector: function () {
                    return "zh-CN" === this.$i18n.getLang() ? {
                        poster: "",
                        src: ""
                    } : {
                        poster: "",
                        src: ""
                    }
                }
            }, data: function () {
                return {ifMuted: !0}
            }, methods: {
                loadPhoneVideo: function () {
                    var t = document.querySelector(" .my-video");
                    t.addEventListener("loadeddata", (function () {
                        t.readyState >= 2 && t.play()
                    }))
                }
            }, mounted: function () {
                this.loadPhoneVideo()
            }
        }, Ee = (n(637), Object(O.a)(Ie, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: ""}, [e("div", {staticClass: ""}, [e("video", {
                staticClass: "my-video",
                attrs: {poster: this.videoSelector.poster, loop: "", src: this.videoSelector.src, preload: "auto"},
                domProps: {muted: this.ifMuted}
            })]), this._v(" "), e("div", {staticClass: ""})])
        }), [], !1, null, "42a72052", null).exports), Te = n(45), Oe = n.n(Te), Ae = n(46), Ne = n.n(Ae), je = new Oe.a({
            id: "IOS",
            use: "IOS-usage",
            viewBox: "0 0 24 28",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" id="IOS"><path d="M20.54 18.423c.768 1.089 1.65 1.793 2.644 2.112-.431 1.334-1.116 2.723-2.054 4.17-1.444 2.178-2.87 3.267-4.277 3.267-.525 0-1.303-.179-2.335-.535-.956-.357-1.791-.536-2.504-.536-.713 0-1.5.188-2.363.564-.9.357-1.642.535-2.223.535-1.688 0-3.348-1.437-4.98-4.31C.816 20.854 0 18.066 0 15.324c0-2.535.619-4.61 1.857-6.225 1.275-1.615 2.851-2.423 4.727-2.423.412 0 .872.052 1.378.155a6.09 6.09 0 011.576.577c.582.32 1.06.54 1.435.662s.666.184.872.184c.244 0 .62-.057 1.126-.17a5.189 5.189 0 001.519-.62 11.44 11.44 0 011.407-.675c.394-.15.797-.226 1.21-.226 1.313 0 2.494.357 3.545 1.07.562.376 1.135.93 1.716 1.663-.863.75-1.491 1.408-1.885 1.972-.732 1.051-1.097 2.197-1.097 3.436 0 1.371.384 2.61 1.153 3.719zM14.883 5.268c-.657.62-1.257 1.023-1.8 1.21a5.748 5.748 0 01-.718.156c-.291.047-.624.089-1 .127.02-1.653.451-3.08 1.295-4.282C13.505 1.277 14.893.45 16.825 0c.038.188.066.32.085.394v.31c0 .676-.16 1.437-.479 2.282-.337.826-.853 1.587-1.547 2.282z" fill="#333" fill-rule="nonzero" /></symbol>'
        }), Le = (Ne.a.add(je), new Oe.a({
            id: "Android",
            use: "Android-usage",
            viewBox: "0 0 24 28",
            content: '<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 28" id="Android"><path d="M8.2 5.974a.62.62 0 00.457-.194.635.635 0 00.191-.463.635.635 0 00-.19-.462.62.62 0 00-.458-.194.594.594 0 00-.45.194.65.65 0 00-.182.462c0 .18.06.334.183.463a.594.594 0 00.449.194zm7.018 0a.594.594 0 00.45-.194.65.65 0 00.183-.463.65.65 0 00-.183-.462.594.594 0 00-.45-.194.62.62 0 00-.457.194.635.635 0 00-.191.462c0 .18.064.334.191.463a.62.62 0 00.457.194zM1.713 9.07c.466 0 .865.168 1.198.505.332.336.499.74.499 1.211v7.236c0 .482-.164.891-.491 1.228a1.616 1.616 0 01-1.206.505c-.477 0-.881-.168-1.214-.505A1.682 1.682 0 010 18.022v-7.236c0-.471.166-.875.499-1.211a1.643 1.643 0 011.214-.505zm17.63.32v11.206c0 .516-.177.954-.532 1.313a1.736 1.736 0 01-1.28.538h-1.248v3.82c0 .482-.166.892-.499 1.228A1.643 1.643 0 0114.57 28c-.477 0-.882-.168-1.214-.505a1.682 1.682 0 01-.5-1.228v-3.82h-2.295v3.82c0 .482-.166.892-.498 1.228A1.643 1.643 0 018.848 28c-.465 0-.865-.168-1.197-.505a1.682 1.682 0 01-.5-1.228l-.016-3.82h-1.23c-.51 0-.943-.18-1.298-.538a1.797 1.797 0 01-.532-1.313V9.39h15.268zm-3.858-6.815a7.344 7.344 0 012.844 2.582 6.578 6.578 0 011.064 3.627H4.008c0-1.313.355-2.522 1.065-3.627a7.314 7.314 0 012.86-2.582L6.754.37c-.078-.146-.05-.258.083-.336.144-.068.255-.034.332.1l1.198 2.222a8.096 8.096 0 013.343-.707c1.175 0 2.29.236 3.343.707L16.25.135c.077-.135.188-.169.332-.101.133.078.161.19.083.336l-1.18 2.205zm7.933 8.211v7.236c0 .482-.166.891-.499 1.228a1.643 1.643 0 01-1.214.505c-.466 0-.865-.168-1.197-.505a1.682 1.682 0 01-.5-1.228v-7.236c0-.482.167-.889.5-1.22.332-.33.731-.496 1.197-.496.477 0 .882.165 1.214.496.333.331.5.738.5 1.22z" fill="#333" fill-rule="nonzero" /></symbol>'
        })), Pe = (Ne.a.add(Le), {
            name: "Main",
            components: {RedHeader: N, RedFooter: L, Iphone: Ee, CubeIcon: Se.b},
            props: {currentUser: Object},
            computed: {
                home: function () {
                    return this.$locale.global.state.home
                }
            },
            data: function () {
                return {ifMuted: !0, headerStyle: {color: "#333"}}
            },
            methods: {
                loadVideo: function () {
                    var t = document.querySelector(".video-bg .my-video");
                    t.addEventListener("loadeddata", (function () {
                        t.readyState >= 2 && t.play()
                    }))
                }
            },
            mounted: function () {
                this.loadVideo()
            }
        }), Me = (n(638), Object(O.a)(Pe, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("div", {staticClass: "video-bg"}, [n("video", {
                staticClass: "my-video",
                attrs: {poster: "/img/123.jpg", muted: "", loop: "loop", src: "/imges/1200.mp4", preload: "auto"},
                domProps: {muted: !0}
            })]), t._v(" "), n("div", {staticClass: "content"}, [n("div", {staticClass: "middle"}, [n("div", {staticClass: "middle-wrapper"}, [n("div", {staticClass: "iphone-wrapper"}, [n("iphone")], 1), t._v(" "), n("div", {staticClass: "description"}, [n("div", {staticClass: "logo-big"}), t._v(" "), n("h2", {staticClass: "lifestyle"}, [t._v("标记我的生活")]), t._v(" "), n("h5", {staticClass: "lifestyle-english"}), t._v(" "), n("div", {staticClass: "qrcodes"}, [n("div", {staticClass: "ios"}, [n("span", {staticClass: "ios-icon"}, [n("cube-icon", {
                attrs: {
                    svg: "IOS",
                    size: "100%"
                }
            })], 1), t._v(t._s(t.home.ios))]), t._v(" "), n("div", {staticClass: "android"}, [n("span", {staticClass: "android-icon"}, [n("cube-icon", {
                attrs: {
                    svg: "Android",
                    size: "100%"
                }
            })], 1), t._v(t._s(t.home.android))])])])])])])])
        }), [], !1, null, "6c1a67b4", null).exports), Re = n(29), Be = n.n(Re), De = [];
    var Ue = ["get", "post", "put", "del", "head", "patch"], $e = {};
    function qe(t, e) {
        var n = v()(t);
        if (V.a) {
            var r = V()(t);
            e && (r = G()(r).call(r, (function (e) {
                return z()(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function Fe(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n, r = null != arguments[e] ? arguments[e] : {};
            if (e % 2) _()(n = qe(Object(r), !0)).call(n, (function (e) {
                Object(J.a)(t, e, r[e])
            })); else if (F.a) $()(t, F()(r)); else {
                var i;
                _()(i = qe(Object(r))).call(i, (function (e) {
                    D()(t, e, z()(r, e))
                }))
            }
        }
        return t
    }

    _()(Ue).call(Ue, (function (t) {
        if (o.http[t]) {
            var e = o.http[t];
            $e[t] = function (t, n) {
                return e(t, n).catch((function (e) {
                    var n;
                    if (b()(De).call(De, t) >= 0) throw{
                        statusCode: e.statusCode,
                        err: et()(n = "API ".concat(t, " called failed: ")).call(n, e)
                    };
                    throw console.warn("API ".concat(t, " called failed: "), e), e
                }))
            }
        }
    }));
    var Xe = $e.get;

    function ze(t) {
        return Xe("NOTE_EXPLORE", {params: Fe({pageSize: 20}, t), transform: !1}).then((function (t) {
            return {notes: t}
        }))
    }

    function He(t, e) {
        return Xe("RELATED_NOTE", {params: Fe({pageSize: 20}, e || {}), resourceParams: {noteId: t}, transform: !1})
    }

    function Ge(t) {
        return Xe("NOTE_COMMENT", {resourceParams: {noteId: t}, params: {pageSize: 5}, transform: !1})
    }

    function We(t, e, n) {
        return Xe("USER_NOTES", {resourceParams: {userId: t}, params: {page: e, pageSize: n}})
    }

    function Ve(t, e) {
        return Xe("USER_ALBUM", {resourceParams: {userId: t}, params: {page: e}}).catch((function () {
            return []
        }))
    }

    function Je(t) {
        return Xe("BRAND_RELATED_NOTES", {resourceParams: {id: t}, transform: !1})
    }

    var Ke = {
            name: "DownloadPopOver", methods: {
                close: function () {
                    this.$emit("close")
                }
            }
        }, Qe = (n(639), Object(O.a)(Ke, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "pop-over-container"}, [n("div", {staticClass: "download-app"}, [n("i", {staticClass: "sweet-potato"}), t._v(" "), t._m(0), t._v(" "), n("p", [t._v("扫码下载小红书app")]), t._v(" "), n("p", [t._v("与全世界的小红薯一起标记生活")]), t._v(" "), n("div", {
                staticClass: "close",
                on: {click: t.close}
            }, [t._v("关闭")])])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "image-box"}, [e("img", {attrs: {src: ""}})])
        }], !1, null, "1d2e7d24", null).exports), Ye = {name: "LoadingSpinner"},
        Ze = (n(640), Object(O.a)(Ye, (function () {
            var t = this.$createElement;
            this._self._c;
            return this._m(0)
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("div", {staticClass: "spinner-container"}, [e("div", {staticClass: "spinner spinnerTwo"}, [e("span")])])])
        }], !1, null, "c346134c", null).exports), tn = n(66), en = n.n(tn), nn = n(28), rn = n.n(nn), on = {
            options: {
                isAll: !0,
                distance: 500,
                errorUrl: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADGCAMAAAC+RQ9vAAAAeFBMVEUAAAD////////y8vL////////////////////////////+/v7+/v7////////+/v7////////////+/v7////////////////+/v7////+/v7////+/v7+/v78/Pz////+/v7////////9/f3+/v7////////y8vJbPJ5cAAAAKHRSTlMAgEGAEHp9XwUDNAgMaVtyUxRuTRh1ZDooHB54Ri44MStJI1k9Q3luTHIlPgAABexJREFUeNrtndt22jAQRUfGGBvfMWBsLiZpCP//h21pK40jQC5SjYZqv5WsdLEzYiydSAo4HA6Hw+FwOBwOh8Ph+G8Jj15dAnWWOfvBG9AmWbELHpCmYL+YhkCYhv2hAcKsucYS6NJxiy3hQRXmXKMGupy4xYJwMfyAa2yALt+4xQzo0jIO4clIlF4MqE9F5qLZJkCWeMU15kCXN26RRkCWUjTbd6BLxi2+AV023CKg3GwXXOMEdKm5xSoGsiRbrrEHulSi2QJdlozTAl1m3KKAf07cFemUGWCatYA5iq/4YiHoLdB3pEUXgwmSKmDGCI4gCMX7/RAvrqXvqRLQZr9lJvmMgePxV/MQvSiz3YMmO2aYvSizGKioRgt2jZ1lFmj4FPy1NQgCZt5jz4yzl2NCtgRFNfSejsknM81nLMeEFSA8dp1tYuAZa75TdcIsAY7cqZDsg8R4nBp6bqhjQvzcwASxdq4aeH4EnPFiwsj3xI+yg8couEULiHFjwjbQna/w4nogMB0TZqDA050D88eTD4Zp/2Ll6vNPFjwG+0MEnPFjwoj9QVcDOMZjwhiU2KrRiwnpauCYkK5GLyakq4FjQroaKCb06WqgmNADuho4JqSr0YsJ6WpUaOVKVwPHhIQ1cExIVwPHhHQ1whzlPHQ1cExIV8PHMSFdjQJtcKGr8SUmlEmOh3kb2a7Riwll4mryk/PGbo1eTCjjnye/+bBZIxbN9gAy0XnC2VissRMxYQQy3URwjqzVUMWE3yaI1loNVUyYY425rRrvqphwgjlYqhGlqt9+nbHG0VKNg3LlusMaiZ0aA2LCEllUMLJGWVdF1fkmYsKD6LfxuBrNml0ICl8zJsQeZx9G1TgwznQ+LCYs7truzpP82z6CUTUODDPz/yomtGai3vCRIgqijglt0+BPAmVBarRytU7jg3HuFyT5RDGhbRp8Wa0sCI4JrdPgzUdREBwTNtZpHBnnbfqlIMnNmNA2jThHb86fsR7rCAR7FBNap/HW3x407xdkcyMmtE1jyfozvS8FebseE9qmEa3l5oMLUl3rZxuwTUPMQgIem+GCdFdjQts0kk95JYcLsgivnINbWqdRyOMdF2RRXo0JbdN4l1oS+tpptxdqHepntmmgDdnZ4JXrAWzT8NDzbHhMaJsGWo/Wg2PCd7BNY4bCgeExoW0aHeO0w2NC2zTQp7b6i5jQNo0KhX/DY0LbNNrB+/fjLZqaWKaBBsps+Dm4yDaNj8Gf2jK41gmi0AYNNOv2HtjgsswClnbP18ju7PFXx4RtwKOTp2psmPKpLE+7PCk6nM6fp/E1RbjPx5WZfIOzrGdpSCmChCom3MhZ1vgacoogc/8c3FIKF5+hgVOECGTUMWEqh4vja8yHr6qFcNGzW0lp7+gacoogI8eEibRSlwoyrgZKEeLHdxMeplJBxtVgg1MzT3pGqgsyvkamucFlLhXkGRpTX3c3oVyQ8TSUKYIiJlQUZGyNNDJxDk4uyMgaraHrsuSCjKlRgUZMqCjIaBrqbGAnjT79gpjX2Gudg1MXZByNmcY5OJ2C6GsETBCUGrsJtQoS8/8XHmPFBJ7GbkKNguCfz0rzBI86RZBjQmMFida6vz88DZ8SJlJMaKggsUjmT/onFbaF16NuVDFhU3uDeFuwHkHmIYqt/p4TSNltsvjeObg4Y6ZJNU7h3vO4FxOas9DcIKB+N83tmLBhxsngcZKc3aa+HRPWzDR5AhqUK7WGHBOa11iVoIWfqgaVfF2W+UGV+qBJeAoUg1WKCU1/xINTCPr4p/x2w5XPwZluuPnJB0OUx1p6/Ck2uDS19wBVllX43/WxhDHAMSHhi55f5FZ9z92qbw+vdqs+6Yue3a369tCLCemyc7fq28Nr3Kr/jleuZIkWKCaky+HVbtXvgC74HBxd3K36FoGuyyLcbC8rV/p/8hHFhIRXruEWxYR0Wb5Es4XmJf5sJYRTHhOSxmMXVoRXruKIck56SF0oa+9IuNc6HA6Hw+FwOBwOh8Ph0OQ7gKhS9qDGh20AAAAASUVORK5CYII=",
                isThrottle: !0,
                minInternal: 1e3,
                delay: 500,
                container: "",
                windowWidth: window.innerWidth,
                windowHeight: window.innerHeight
            }, setOptions: function (t) {
                rn()(this.options, t)
            }
        }, an = {
            name: "ImageLazyload",
            data: function () {
                return {
                    currentUrl: "",
                    container: null,
                    state: "init",
                    funCallback: null,
                    commonOptions: null,
                    showThumbnail: !0,
                    thumbnailUrl: ""
                }
            },
            props: {
                defaultUrl: {type: String, default: ""},
                url: {type: String, default: ""},
                width: {type: Number, default: 100},
                height: {type: Number, default: 100}
            },
            watch: {
                url: function () {
                    this.initData(), this.initElement(), this.bindEvent()
                }
            },
            methods: {
                initData: function () {
                    this.commonOptions = on.options, this.state = "init";
                    var t = this.defaultUrl;
                    en()(t).call(t) || (t = this.url.split("@")[0] || this.url.split("?")[0]), this.thumbnailUrl = "".concat(t, "?imageView2/format/jpg/h/20/q/1").replace("", "")
                }, initElement: function () {
                    this.commonOptions.isAll ? this.container = document : this.container = document.getElementById(this.commonOptions.container)
                }, bindEvent: function () {
                    var t, e, n, r, i;
                    this.funCallback = this.detect, this.commonOptions.isThrottle && (this.funCallback = (t = this.detect, e = this.commonOptions.minInternal, n = this.commonOptions.delay, r = null, i = (new Date).getTime(), function () {
                        var o = (new Date).getTime();
                        clearTimeout(r), o - i > e ? (t(), i = o) : r = me()((function () {
                            t()
                        }), n)
                    })), this.container.addEventListener("scroll", this.funCallback), this.funCallback()
                }, detect: function () {
                    var t = this.isInView();
                    "init" === this.state && t && this.loadImage()
                }, isInView: function () {
                    var t = this.$el.getBoundingClientRect(), e = t.top, n = t.left, r = t.right, i = t.bottom,
                        o = this.commonOptions.windowWidth, a = this.commonOptions.windowHeight,
                        s = this.commonOptions.distance;
                    return e < a + s && i >= -1 * s && n < o + s && r >= -1 * s
                }, loadImage: function () {
                    this.currentUrl = this.url.replace("http://", "https://"), this.state = "loading", this.$emit("image-loading"), this.showThumbnail = !0, this.removeEvent()
                }, renderImage: function () {
                    var t = this;
                    "loading" === this.state && (this.state = "loaded", this.$emit("image-loaded"), me()((function () {
                        t.showThumbnail = !1
                    }), 500))
                }, removeEvent: function () {
                    this.container.removeEventListener("scroll", this.funCallback)
                }, errorCallback: function () {
                    this.currentUrl = this.commonOptions.errorUrl, this.state = "fail", this.$emit("image-loadfail"), this.showThumbnail = !1
                }
            },
            created: function () {
                this.initData()
            },
            mounted: function () {
                var t = this;
                this.initElement(), this.bindEvent(), me()((function () {
                    t.showThumbnail = !1
                }), 5e3)
            }
        }, sn = (n(641), Object(O.a)(an, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "lazyload-block"}, [n("div", {
                staticClass: "lazyload-container",
                class: [t.state]
            }, ["" !== t.currentUrl ? n("img", {
                staticClass: "lazyload lazyload-image",
                class: [t.state],
                style: {width: t.width + "px", height: t.height + "px"},
                attrs: {src: t.currentUrl},
                on: {load: t.renderImage, error: t.errorCallback}
            }) : t._e(), t._v(" "), t.showThumbnail ? n("img", {
                staticClass: "thumbnail",
                class: [t.state],
                style: {width: t.width + "px", height: t.height + "px"},
                attrs: {src: t.thumbnailUrl}
            }) : t._e()])])
        }), [], !1, null, null, null).exports), cn = {
            name: "NoteList",
            components: {ImageLazyload: sn},
            props: {
                columnNotes: {
                    type: Array, default: function () {
                        return []
                    }
                }, splitNumber: {type: Number, default: 5}
            },
            filters: {
                removeEmotion: function (t) {
                    return null == t ? void 0 : t.replace(/(#[^#]+)\[[^#]+]#/g, "$1").replace(/\[.{1,5}\]/g, "")
                }
            },
            computed: {
                columnNote: function () {
                    return this.cutArrays(this.columnNotes, this.splitNumber)
                }
            },
            data: function () {
                return {nodeWidth: 220}
            },
            methods: {
                handleClickNote: function (t) {
                    this.$emit("handleClick", t)
                }, originalHeight: function (t) {
                    return t.height * (this.nodeWidth / t.width)
                }, cutArrays: function (t, e) {
                    if (e < 2) return [t];
                    for (var n = e, r = []; n > 0;) r.push([]), n -= 1;
                    for (var i = 0; i < t.length; i++) r[i % e].push(t[i]);
                    return r
                }
            }
        }, un = (n(642), Object(O.a)(cn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "note-container"}, [n("div", {staticClass: "note-wrapper"}, t._l(t.columnNote, (function (e, r) {
                return n("div", {key: r, staticClass: "note-column"}, t._l(e, (function (e, r) {
                    return n("div", {
                        key: r, staticClass: "note", on: {
                            click: function (n) {
                                return t.handleClickNote(e.id)
                            }
                        }
                    }, [n("div", {staticClass: "note-info"}, [n("div", {staticClass: "note-image"}, [n("image-lazyload", {
                        attrs: {
                            url: e.cover.url,
                            width: t.nodeWidth,
                            height: t.originalHeight(e.cover)
                        }
                    }), t._v(" "), n("i", {class: e.type})], 1), t._v(" "), n("a", {
                        staticClass: "info",
                        attrs: {href: "/discovery/item/" + e.id}
                    }, [t._v(t._s(t._f("removeEmotion")(e.title ? e.title : e.desc)))])]), t._v(" "), n("div", {staticClass: "note-append"}, [n("div", {staticClass: "user"}, [n("div", {staticClass: "user-image-wrapper"}, [n("img", {
                        staticClass: "user-image",
                        attrs: {src: e.user.image}
                    }), t._v(" "), n("i", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.user.officialVerified,
                            expression: "note.user.officialVerified"
                        }], staticClass: "official"
                    })]), t._v(" "), n("span", {staticClass: "name"}, [t._v(t._s(e.user.nickname))])]), t._v(" "), n("div", {staticClass: "like"}, [n("i", {staticClass: "heart"}), t._v(" "), n("span", {staticClass: "likes"}, [t._v(t._s(e.likes))])])])])
                })), 0)
            })), 0)])
        }), [], !1, null, "4b8d7cce", null).exports), ln = {
            name: "Main", components: {DownloadPopOver: Qe, NoteList: un, LoadingSpinner: Ze}, data: function () {
                return {
                    showDownloadPopOver: !1,
                    columnNotes: [],
                    currentCategoryIndex: 0,
                    pagination: {page: 1},
                    categoryValue: "recommend",
                    isLoading: !1
                }
            }, methods: {
                fetchNoteList: function () {
                    var t = this;
                    return this.isLoading = !0, ze({
                        oid: this.categoryValue,
                        page: this.pagination.page
                    }).then((function (e) {
                        var n = e.notes;
                        t.columnNotes = n, t.isLoading = !1
                    }))
                }, gotoNote: function (t) {
                    var e = this.$router.resolve({name: "NoteView", params: {id: t}}).href;
                    window.open(e, "_blank")
                }, togglePopOver: function () {
                    this.showDownloadPopOver = !this.showDownloadPopOver
                }
            }, prefetch: function () {
                return ze({oid: "recommend", page: 1}).then((function (t) {
                    return {columnNotes: t.notes}
                }))
            }
        }, hn = (n(643), Object(O.a)(ln, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "explore-container"}, [n("div", {staticClass: "note-list-wrapper"}, [t.isLoading ? t._e() : n("note-list", {
                staticClass: "note-list",
                attrs: {"column-notes": t.columnNotes},
                on: {handleClick: t.gotoNote}
            }), t._v(" "), t.isLoading ? n("loading-spinner", {staticClass: "loading-spinner"}) : t._e()], 1), t._v(" "), n("div", {
                staticClass: "more",
                on: {click: t.togglePopOver}
            }, [t._v("查看更多")]), t._v(" "), n("download-pop-over", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDownloadPopOver,
                    expression: "showDownloadPopOver"
                }], staticClass: "pop-over", on: {close: t.togglePopOver}
            })], 1)
        }), [], !1, null, "176ddf86", null).exports), fn = n(26), dn = n(70), pn = {
            name: "AuthorCard",
            components: {ImageLazyload: sn},
            props: {
                userDetail: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            },
            data: function () {
                return {}
            },
            filters: {
                formatNum: function (t) {
                    return t ? ve.b.shortenNumber(t) : 0
                }
            },
            methods: {
                format: function (t) {
                    return t ? ge(t) : ""
                }, userImgfit: function (t) {
                    return t || ""
                }
            }
        }, mn = (n(644), Object(O.a)(pn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "author-container"}, [n("div", {staticClass: "left"}, [n("div", {staticClass: "image-wrapper"}, [n("image-lazyload", {
                attrs: {
                    url: t.userImgfit(t.userDetail.image),
                    width: 160,
                    height: 160
                }
            })], 1), t._v(" "), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.userDetail.officialVerified,
                    expression: "userDetail.officialVerified"
                }], class: ["badge-icon", {blue: 2 === t.userDetail.redOfficialVerifyIconType}]
            })]), t._v(" "), n("div", {staticClass: "right"}, [n("div", {staticClass: "user-name"}, [n("span", {staticClass: "name-detail"}, [t._v(t._s(t.userDetail.nickname))]), t._v(" "), t.userDetail.level ? n("i", {
                staticClass: "level-detail",
                style: {"background-image": "url(" + t.format(t.userDetail.level.image) + ")"}
            }) : t._e()]), t._v(" "), n("div", {staticClass: "user-brief"}, [t._v(t._s(t.userDetail.desc || "暂时还没有个性签名哦～"))]), t._v(" "), n("div", {staticClass: "location"}, [n("div", {staticClass: "location-icon"}, [n("image-lazyload", {
                attrs: {
                    url: "",
                    width: 20,
                    height: 20
                }
            })], 1), t._v(" "), n("span", {staticClass: "location-text"}, [t._v(t._s(t.userDetail.location))])]), t._v(" "), n("div", {staticClass: "card-info"}, [n("div", {staticClass: "info"}, [n("span", {staticClass: "info-text"}, [t._v("关注")]), t._v(" "), n("span", {staticClass: "info-number"}, [t._v(t._s(t._f("formatNum")(t.userDetail.follows)))])]), t._v(" "), n("div", {staticClass: "info"}, [n("span", {staticClass: "info-text"}, [t._v("粉丝")]), t._v(" "), n("span", {staticClass: "info-number"}, [t._v(t._s(t._f("formatNum")(t.userDetail.fans)))])]), t._v(" "), n("div", {staticClass: "info"}, [n("span", {staticClass: "info-text"}, [t._v("获赞与收藏")]), t._v(" "), n("span", {staticClass: "info-number"}, [t._v(t._s(t._f("formatNum")(t.userDetail.liked + t.userDetail.collected)))])])])])])
        }), [], !1, null, "63b34ede", null).exports), vn = {
            name: "AlbumList",
            components: {ImageLazyload: sn},
            props: {
                albumDetail: {
                    type: Array, default: function () {
                        return []
                    }
                }
            },
            data: function () {
                return {list: ["", "", "", ""]}
            },
            methods: {
                showAnAlbum: function (t) {
                    this.$emit("handleClick", t)
                }
            }
        }, gn = (n(645), Object(O.a)(vn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "album-container"}, t._l(t.albumDetail, (function (e, r) {
                return n("div", {
                    key: r, staticClass: "each-album", on: {
                        click: function (n) {
                            return t.showAnAlbum(e.id)
                        }
                    }
                }, [n("div", {staticClass: "top-info"}, [n("span", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("div", {staticClass: "info"}, [n("span", {staticClass: "note"}, [t._v("笔记"), n("i", {staticClass: "dot"}), t._v(t._s(e.notes))]), t._v(" "), n("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: e.fans > 0,
                        expression: "item.fans > 0"
                    }], staticClass: "fans"
                }, [t._v("粉丝"), n("i", {staticClass: "dot"}), t._v(t._s(e.fans))])])]), t._v(" "), e.images.length ? n("div", {staticClass: "bottom-img"}, t._l(e.images, (function (t, e) {
                    return n("div", {key: e, staticClass: "small-img img-item"}, [n("image-lazyload", {
                        attrs: {
                            url: t,
                            width: 90,
                            height: 90
                        }
                    })], 1)
                })), 0) : n("div", {staticClass: "bottom-img"}, t._l(t.list, (function (t, e) {
                    return n("div", {key: e, staticClass: "present-pic img-item"}, [n("image-lazyload", {
                        attrs: {
                            url: t,
                            width: 90,
                            height: 90
                        }
                    })], 1)
                })), 0)])
            })), 0)
        }), [], !1, null, "6442c56f", null).exports);
    var _n = {
            name: "Main",
            props: {currentUser: Object},
            components: {ImageLazyload: sn, AlbumList: gn, NoteList: un, AuthorCard: mn, DownloadPopOver: Qe},
            data: function () {
                return {showDownloadPopOver: !1, userDetail: {}, notesDetail: [], albumDetail: [], isNote: !0}
            },
            computed: {
                showMore: function () {
                    return this.isNote && this.notesDetail.length || !this.isNote && this.albumDetail.length
                }
            },
            prefetch: function (t) {
                var e, n = t.router.currentRoute.params.id;
                return i.a.all([(e = n, Xe("NOTE_USER_INFO", {resourceParams: {userId: e}})), We(n, 1, 12), Ve(n, 1)]).then((function (t) {
                    var e = Object(fn.a)(t, 3);
                    return {userDetail: e[0], notesDetail: e[1], albumDetail: e[2]}
                })).catch((function (t) {
                    if (t.statusCode > 200) throw t;
                    throw{statusCode: 404}
                }))
            },
            methods: {
                togglePopOver: function () {
                    this.showDownloadPopOver = !this.showDownloadPopOver
                }, chooseType: function (t) {
                    this.isNote = "note" === t
                }, viewNote: function (t) {
                    var e = this.$router.resolve({name: "NoteView", params: {id: t}}).href;
                    window.open(e, "_blank")
                }, viewAlbum: function (t) {
                    var e = this.$router.resolve({name: "Board", params: {id: t}}).href;
                    window.open(e, "_blank")
                }, getSeoMeta: function () {
                    var t = function () {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return "string" != typeof t ? "" : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
                        }(this.userDetail.nickname), e = Object(dn.a)(this.userDetail.fans),
                        n = Object(dn.a)(this.userDetail.follows), r = Object(dn.a)(this.userDetail.notes), i = "";
                    if (t) {
                        var o, a = [];
                        if ("0" !== r && a.push("发布了".concat(r, "篇笔记")), "0" !== e && a.push("有".concat(e, "位粉丝")), "0" !== n && a.push("已关注".concat(n, "人")), a.push("来「小红书」查看更多".concat(t, "分享的视频和笔记")), i = a.join("，"), a.length > 1) i = et()(o = "".concat(t, "在「小红书」上")).call(o, i)
                    } else i = "";
                    return {
                        title: t ? "".concat(t, " •  / RED") : "",
                        desc: i,
                        keywords: ",red,RED,little red book,xiaohongshu"
                    }
                }
            },
            watch: {
                currentUser: function (t) {
                    t.id === this.$route.params.id && (window.location = "/user/profile/my")
                }
            },
            created: function () {
                var t = this;
                this.$on("prefetchSuccess", (function () {
                    var e = t.getSeoMeta(), n = e.title, r = e.desc, i = e.keywords;
                    t.$setTitle(n), t.$setMeta([{name: "description", content: r}, {name: "keywords", content: i}])
                }))
            }
        }, yn = (n(646), Object(O.a)(_n, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "user-container"}, [n("div", {staticClass: "author-card"}, [n("author-card", {attrs: {"user-detail": t.userDetail}})], 1), t._v(" "), n("div", {staticClass: "note-album"}, [n("span", {
                staticClass: "type",
                class: {"current-type": t.isNote},
                on: {
                    click: function (e) {
                        return t.chooseType("note")
                    }
                }
            }, [t._v("笔记")]), t._v(" "), n("span", {
                staticClass: "type",
                class: {"current-type": !t.isNote},
                on: {
                    click: function (e) {
                        return t.chooseType("album")
                    }
                }
            }, [t._v("专辑")])]), t._v(" "), n("div", {staticClass: "display-zone"}, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isNote,
                    expression: "isNote"
                }], staticClass: "note-wrapper"
            }, [t.notesDetail.length ? n("note-list", {
                attrs: {"column-notes": t.notesDetail, "split-number": 4},
                on: {handleClick: t.viewNote}
            }) : n("div", {staticClass: "no-notes"}, [n("image-lazyload", {
                attrs: {
                    url: "",
                    width: 170,
                    height: 126
                }
            }), t._v(" "), n("span", {staticClass: "words"}, [t._v("啊欧，还没有笔记哦～")])], 1)], 1), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !t.isNote,
                    expression: "!isNote"
                }], staticClass: "album-wrapper"
            }, [t.albumDetail.length ? n("album-list", {
                attrs: {"album-detail": t.albumDetail},
                on: {handleClick: t.viewAlbum}
            }) : n("div", {staticClass: "no-album"}, [n("image-lazyload", {
                attrs: {
                    url: "",
                    width: 170,
                    height: 118
                }
            }), t._v(" "), n("span", {staticClass: "words"}, [t._v("啊欧，还没有专辑哦～")])], 1)], 1)]), t._v(" "), t.showMore ? n("div", {
                staticClass: "more",
                on: {click: t.togglePopOver}
            }, [t._v("查看更多")]) : t._e(), t._v(" "), n("download-pop-over", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.showDownloadPopOver,
                    expression: "showDownloadPopOver"
                }], staticClass: "pop-over", on: {close: t.togglePopOver}
            })], 1)
        }), [], !1, null, "418a31b8", null).exports), bn = {
            name: "Main", components: {NoteList: un}, prefetch: function (t) {
                var e, n = t.router.currentRoute.params.id;
                return i.a.all([(e = n, Xe("BOARD_INFO", {
                    resourceParams: {id: e},
                    transform: !1
                })), Je(n)]).then((function (t) {
                    var e = Object(fn.a)(t, 2);
                    return {albumInfo: e[0], notesDetail: e[1]}
                }))
            }, data: function () {
                return {albumInfo: {user: {}}, notesDetail: []}
            }, methods: {
                viewAuthor: function () {
                    var t = this.$router.resolve({name: "User", params: {id: this.albumInfo.user.userId}}).href;
                    window.open(t, "_blank")
                }, viewNote: function (t) {
                    var e = this.$router.resolve({name: "NoteView", params: {id: t}}).href;
                    window.open(e, "_blank")
                }
            }
        }, wn = (n(647), Object(O.a)(bn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "board-container"}, [n("div", {staticClass: "personal-board"}, [t.albumInfo ? n("div", {staticClass: "album-info"}, [n("div", {staticClass: "author-album"}, [n("h1", {staticClass: "album-name"}, [t._v(t._s(t.albumInfo.name || "默认专辑"))]), t._v("\n        来自"), n("span", {
                staticClass: "user-info",
                on: {click: t.viewAuthor}
            }, [n("img", {attrs: {src: t.albumInfo.user.images}}), t._v(t._s(t.albumInfo.user.nickname))])]), t._v(" "), n("div", {staticClass: "details"}, [n("span", [t._v(t._s(t.albumInfo.noteCount) + "篇笔记")]), t._v(" "), n("i", {staticClass: "dot"}), t._v(" "), n("span", [t._v(t._s(t.albumInfo.fanCount) + "个粉丝")])])]) : t._e()]), t._v(" "), n("div", {staticClass: "note-list"}, [n("div", {staticClass: "note-list-wrapper"}, [n("note-list", {
                attrs: {
                    "column-notes": t.notesDetail,
                    "split-number": 4
                }, on: {handleClick: t.viewNote}
            })], 1)])])
        }), [], !1, null, "f138f5ca", null).exports), xn = n(57), Cn = n.n(xn), kn = n(78), Sn = n(18), In = n.n(Sn),
        En = n(369), Tn = n(362), On = {
            name: "KeywordPage", components: {NoteList: un}, data: function () {
                return {notes: [], recommendKeywords: [], name: ""}
            }, created: function () {
                var t = this;
                this.$on("prefetchSuccess", (function () {
                    var e, n, r;
                    t.$setTitle("小红书标签 • ".concat(t.name)), t.$setMeta([{
                        name: "description",
                        content: In()(e = Z()(n = t.notes).call(n, 0, 3)).call(e, (function (t) {
                            return t.title
                        })).join(",")
                    }, {
                        name: "keywords", content: In()(r = t.recommendKeywords).call(r, (function (t) {
                            return t.name
                        })).join(",")
                    }])
                }))
            }, prefetch: function (t) {
                return Object(kn.a)(Cn.a.mark((function e() {
                    var n, r, i, o, a, s;
                    return Cn.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return n = t.router, r = n.currentRoute.params.id, i = n.currentRoute.query.name, e.next = 5, Object(Tn.a)(En.a, {
                                    params: {id: r},
                                    query: {name: i}
                                });
                            case 5:
                                return o = e.sent, a = o.notes, s = o.recommendKeywords, e.abrupt("return", {
                                    notes: a,
                                    recommendKeywords: s,
                                    name: i
                                });
                            case 9:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))()
            }, methods: {
                keywordClicked: function (t) {
                    window.owl.push({type: "se", action: "click", label: "keyword_clicked", property: t.name})
                }, noteClicked: function (t) {
                    window.owl.push({
                        type: "se",
                        action: "click",
                        label: "note_clicked",
                        property: ""
                    }), window.location.href = "".concat(t)
                }
            }
        }, An = (n(664), Object(O.a)(On, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return t.name ? n("div", {staticClass: "keyword-page"}, [n("div", {staticClass: "top"}, [n("p", {staticClass: "title"}, [t._v(t._s(t.name))]), t._v(" "), n("div", {staticClass: "sub-title"}, [t._v("推荐标签")]), t._v(" "), t.recommendKeywords.length ? n("div", {staticClass: "recommend-keywords"}, t._l(t.recommendKeywords, (function (e) {
                return n("a", {
                    key: e.id,
                    staticClass: "keyword",
                    attrs: {href: "/mobile/tags/" + e.id + "?name=" + encodeURIComponent(e.name)},
                    on: {
                        click: function (n) {
                            return t.keywordClicked(e)
                        }
                    }
                }, [t._v("\n          " + t._s(e.name) + "\n        ")])
            })), 0) : t._e()]), t._v(" "), n("div", {staticClass: "note-list-wrap"}, [t.notes.length ? n("note-list", {
                attrs: {
                    "column-notes": t.notes,
                    "split-number": 4
                }, on: {handleClick: t.noteClicked}
            }) : t._e()], 1)]) : t._e()
        }), [], !1, null, "14276eb7", null).exports), Nn = n(374), jn = n(192), Ln = {
            props: {
                noteInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                }
            }, filters: {
                formatUserUrl: function (t) {
                    return "".concat(t)
                }, formatNumber: dn.a
            }
        }, Pn = (n(665), Object(O.a)(Ln, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "tags"}, [n("div", {staticClass: "operation-block"}, [n("span", {staticClass: "like"}, [n("i"), t._v(" "), n("span", [t._v(t._s(t._f("formatNumber")(t.noteInfo.likes)))])]), t._v(" "), n("span", {staticClass: "comment"}, [n("i"), t._v(" "), n("span", [t._v(t._s(t._f("formatNumber")(t.noteInfo.comments)))])]), t._v(" "), n("span", {staticClass: "star"}, [n("i"), t._v(" "), n("span", [t._v(t._s(t._f("formatNumber")(t.noteInfo.collects)))])])]), t._v(" "), n("div", {staticClass: "publish-date"}, [n("span", [t._v("发布于 " + t._s(t.noteInfo.time))]), t._v(" "), t.noteInfo.cooperateBinds.length ? n("span", [t._v("\n        与\n        "), t._l(t.noteInfo.cooperateBinds, (function (e) {
                return n("a", {
                    key: e.bindId,
                    staticClass: "brand-link",
                    attrs: {href: t._f("formatUserUrl")(e.bindId)}
                }, [t._v("\n          @" + t._s(e.name) + "\n        ")])
            })), t._v("\n        品牌合作\n      ")], 2) : t._e()])])
        }), [], !1, null, "5e3e939c", null).exports), Mn = {
            props: {jumpShow: {type: Boolean, default: !1}}, methods: {
                closeApp: function () {
                    this.$emit("close-app")
                }
            }
        }, Rn = (n(666), Object(O.a)(Mn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.jumpShow,
                    expression: "jumpShow"
                }]
            }, [n("div", {staticClass: "gray-layer"}), t._v(" "), n("div", {staticClass: "down-app"}, [n("i"), t._v(" "), t._m(0), t._v(" "), n("p", [t._v("扫码下载小红书app")]), t._v(" "), n("p", [t._v("与全世界的小红薯一起标记生活")]), t._v(" "), n("a", {
                staticClass: "close",
                on: {click: t.closeApp}
            }, [t._v("确定")])])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "img-box"}, [e("img", {attrs: {src: ""}})])
        }], !1, null, "4ee45db7", null).exports), Bn = n(15), Dn = n.n(Bn), Un = n(67), $n = n.n(Un), qn = n(371), Fn = {
            name: "CommentLine",
            mixins: [n(120).b],
            props: {
                mentions: {type: Array, required: !0},
                hashTags: {type: Array, required: !0},
                text: {type: String, required: !0}
            },
            methods: {
                createParagraph: function (t, e) {
                    return e("p", t)
                }
            },
            render: function (t) {
                var e = this.text, n = JSON.parse(Dn()(this.hashTags)), r = JSON.parse(Dn()(this.mentions));
                return n = In()(n).call(n, (function (t) {
                    return "country" === t.type && (t.type = "area"), t
                })), t("p", this.renderRichContentLines(e, n, r, t))
            }
        }, Xn = (n(677), Object(O.a)(Fn, void 0, void 0, !1, null, "516400f0", null).exports), zn = {name: "AgreeIcon"},
        Hn = Object(O.a)(zn, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("svg", {
                attrs: {
                    width: "17px",
                    height: "17px",
                    viewBox: "0 0 17 17",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                }
            }, [e("g", {
                attrs: {
                    id: "Page-1",
                    stroke: "none",
                    "stroke-width": "1",
                    fill: "none",
                    "fill-rule": "evenodd",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }
            }, [e("g", {
                attrs: {
                    id: "2",
                    transform: "translate(-752.000000, -1386.000000)",
                    stroke: "#999999",
                    "stroke-width": "1.5"
                }
            }, [e("g", {
                attrs: {
                    id: "Group-30",
                    transform: "translate(300.000000, 1333.000000)"
                }
            }, [e("g", {
                attrs: {
                    id: "Group-19",
                    transform: "translate(0.000000, 42.000000)"
                }
            }, [e("g", {attrs: {id: "Group-17"}}, [e("g", {attrs: {id: "Group-16"}}, [e("g", {attrs: {id: "Group-15"}}, [e("g", {attrs: {id: "Group-11"}}, [e("g", {
                attrs: {
                    id: "Group-55",
                    transform: "translate(453.000000, 10.000000)"
                }
            }, [e("g", {
                attrs: {
                    id: "Group-53",
                    transform: "translate(0.000000, 2.000000)"
                }
            }, [e("path", {
                attrs: {
                    d: "M2.31606717,13.7040937 L2.31606717,5.9695405 C2.31606717,5.40265829 2.75411161,4.94309345 3.29384494,4.94309345 L3.38868939,4.94309345 C4.83042272,4.94309345 5.99837828,3.71536214 5.99837828,2.20213581 L5.99837828,1.70149255 C5.99837828,0.820873901 6.67842272,0.107136335 7.51637828,0.107136335 C8.35482272,0.107136335 9.03437828,0.820873901 9.03437828,1.70149255 L9.03437828,4.24270637 C9.03437828,4.62935701 9.33308939,4.94309345 9.70024494,4.94309345 L11.9823783,4.92974296 C13.9384227,4.90560939 15.3679338,6.86145571 14.8414005,8.83989517 L13.5634449,13.2722568 C13.3136227,14.138498 12.5534005,14.7310542 11.6919783,14.7310542 L3.29384494,14.7310542 C2.75411161,14.7310542 2.31606717,14.2709759 2.31606717,13.7040937 Z",
                    id: "Stroke-1"
                }
            }), this._v(" "), e("path", {
                attrs: {
                    d: "M0.329956055,5.3489996 L0.329956055,14.5916443",
                    id: "Stroke-3"
                }
            })])])])])])])])])])])])
        }), [], !1, null, "4995e9d6", null).exports;
    var Gn = {
        name: "NoteComment",
        components: {CubeImage: $n.a, CubeAvatar: qn.a, CommentLine: Xn, AgreeIcon: Hn},
        data: function () {
            return {}
        },
        props: {
            comment: {
                type: Object, default: function () {
                    return {likes: 0, time: "", user: {image: "", nickname: "", id: ""}}
                }, required: !0
            }, noteAuthorId: {type: String, required: !0}
        },
        filters: {
            formatPublishTime: function (t) {
                return Object(dn.a)(dn.c.dateStringToTimestamp(t), dn.b.timeInWord)
            }, formatLikes: function (t) {
                return Object(dn.a)(t)
            }
        },
        computed: {
            showLikeNum: function () {
                return this.comment.likes > 0
            }, commenter: function () {
                return this.comment.user
            }, commenterIntro: function () {
                if (!this.commenter.nickname) return "";
                var t = [this.commenter.nickname];
                return this.noteAuthorId === this.commenter.id && t.push("(作者)"), t.join("")
            }, hasReplies: function () {
                return this.comment.subComments.length > 0
            }, replies: function () {
                return this.comment.subComments
            }, commenterURL: function () {
                return "/user/profile/".concat(this.comment.user.id)
            }
        },
        methods: {
            emitEvent: function (t) {
                this.$emit("clicked", t)
            }, handleLinkClicked: function (t) {
                this.$emit("clicked", "link", function (t) {
                    return "mention" === t.type ? {type: "user", user: {id: t.id, nickname: t.name}} : {
                        type: "hashTag",
                        hashTag: {
                            type: t.type,
                            link: t.link,
                            id: "goods" === t.type ? t.itemIds[0] : t.id,
                            name: t.name
                        }
                    }
                }(t))
            }, emitUser: function () {
                this.$emit("clicked", "user", {type: "user", user: JSON.parse(Dn()(this.comment.user))})
            }, handleClicked: function (t, e) {
                this.$emit("clicked", t, e)
            }
        }
    }, Wn = (n(678), Object(O.a)(Gn, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("div", {staticClass: "comment"}, [n("div", {staticClass: "comment-info"}, [n("div", {staticClass: "user"}, [n("cube-avatar", {
            staticClass: "avatar",
            attrs: {user: t.commenter, size: "XS"},
            on: {clicked: t.emitUser}
        }), t._v(" "), n("div", {staticClass: "user-info"}, [n("h4", {staticClass: "user-nickname"}, [n("a", {
            attrs: {href: t.commenterURL},
            on: {
                click: function (e) {
                    return e.preventDefault(), t.emitUser(e)
                }
            }
        }, [t._v(t._s(t.commenterIntro))])]), t._v(" "), n("span", {staticClass: "publish-time"}, [t._v(t._s(t._f("formatPublishTime")(t.comment.time)))])])], 1), t._v(" "), n("div", {staticClass: "comment-stats"}, [n("span", {
            staticClass: "likes",
            on: {
                click: function (e) {
                    return t.emitEvent("like")
                }
            }
        }, [n("i", {class: {"m-right": t.showLikeNum}}, [n("agree-icon")], 1), t._v(" "), t.showLikeNum ? n("span", {staticClass: "like-sum"}, [t._v(t._s(t._f("formatLikes")(t.comment.likes)))]) : t._e()]), t._v(" "), n("span", {
            staticClass: "reply-action",
            on: {
                click: function (e) {
                    return t.emitEvent("reply")
                }
            }
        }, [t._v("回复")])])]), t._v(" "), n("comment-line", {
            staticClass: "content",
            attrs: {text: t.comment.content, mentions: t.comment.ats, hashTags: t.comment.hashTags},
            on: {"link-clicked": t.handleLinkClicked}
        }), t._v(" "), t.hasReplies ? n("div", {staticClass: "replies"}, [t._t("replies"), t._v(" "), t._t("bottom")], 2) : t._e()], 1)
    }), [], !1, null, "a7a94d88", null).exports);
    var Vn = {
            name: "NoteShortReply",
            components: {CommentLine: Xn},
            computed: {
                replierText: function () {
                    var t = [];
                    return t.push(this.reply.user.nickname), this.noteAuthorId === this.reply.user.id && t.push("(作者)"), this.reply.targetComment && this.reply.targetComment.user.id !== this.noteCommenterId && t.push(" 回复 ".concat(this.reply.targetComment.user.nickname)), t.push(" : "), t.join("")
                }
            },
            props: {
                noteAuthorId: {type: String, default: "", required: !0},
                noteCommenterId: {type: String, default: "", required: !0},
                reply: {
                    type: Object, required: !0, default: function () {
                        return {
                            id: "",
                            content: "",
                            ats: [],
                            hashTags: [],
                            likes: 0,
                            time: "",
                            user: {id: "", image: "", nickname: ""},
                            targetComment: {id: "", user: {id: "", image: "", nickname: ""}}
                        }
                    }
                }
            },
            methods: {
                handleLinkClicked: function (t) {
                    this.$emit("clicked", "link", function (t) {
                        return "mention" === t.type ? {type: "user", user: {id: t.id, nickname: t.name}} : {
                            type: "hashTag",
                            hashTag: {
                                type: t.type,
                                link: t.link,
                                id: "goods" === t.type ? t.itemIds[0] : t.id,
                                name: t.name
                            }
                        }
                    }(t))
                }, handleItemClicked: function (t) {
                    this.$emit("clicked", "item", t)
                }
            }
        }, Jn = (n(679), {
            name: "CommentSection",
            components: {
                DownloadPopOver: Qe, NoteComment: Wn, NoteShortReply: Object(O.a)(Vn, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "reply"}, [n("span", {staticClass: "replier"}, [t._v(t._s(t.replierText))]), t._v(" "), n("comment-line", {
                        staticClass: "reply-content",
                        attrs: {text: t.reply.content, mentions: t.reply.ats, hashTags: t.reply.hashTags},
                        on: {"link-clicked": t.handleLinkClicked, "item-clicked": t.handleItemClicked}
                    })], 1)
                }), [], !1, null, "48e04a23", null).exports, JumpApp: Rn
            },
            props: {
                commentInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                }, authorId: {type: String, required: !0}
            },
            data: function () {
                return {jumpShow: !1}
            },
            computed: {
                commentLength: function () {
                    var t = this.commentInfo.comments;
                    return !!t && t.length
                }, searchMoreText: function () {
                    return this.commentLength ? "查看更多评论" : "查看更多精彩内容"
                }, authorName: function () {
                    return this.commentInfo.targetNote.user.nickname ? this.commentInfo.targetNote.user.nickname : ""
                }
            },
            methods: {
                handleContentClicked: function () {
                    this.jumpShow = !0
                }, handleClickJumpApp: function () {
                    this.jumpShow = !0
                }, handleClickCloseApp: function () {
                    this.jumpShow = !this.jumpShow
                }, authorInfo: function (t) {
                    return "//www.xiaohongshu.com/user/profile/".concat(t)
                }, collectNum: function (t) {
                    return ve.b.shortenNumber(t)
                }
            }
        }), Kn = (n(680), Object(O.a)(Jn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "all-tip"}, [t._m(0), t._v(" "), t.commentLength ? n("div", {staticClass: "content"}, [t._l(t.commentInfo.comments, (function (e, r) {
                return n("note-comment", {
                    key: r,
                    attrs: {comment: e, "note-author-id": t.authorId},
                    on: {clicked: t.handleContentClicked}
                }, t._l(e.subComments, (function (r) {
                    return n("note-short-reply", {
                        key: r.id,
                        attrs: {slot: "replies", reply: r, "note-author-id": t.authorId, "note-commenter-id": e.user.id},
                        on: {clicked: t.handleContentClicked},
                        slot: "replies"
                    })
                })), 1)
            })), t._v(" "), n("div", {
                staticClass: "bottom",
                attrs: {owl: "comment/bottom_total_link"},
                on: {click: t.handleClickJumpApp}
            }, [t._v(t._s(t.searchMoreText))])], 2) : n("div", {staticClass: "nocomment"}, [n("img", {
                staticClass: "smallpic",
                attrs: {src: ""}
            }), t._v(" "), n("h3", {staticClass: "remain"}, [t._v("啊欧，还没有评论哦～")])]), t._v(" "), n("download-pop-over", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.jumpShow,
                    expression: "jumpShow"
                }], staticClass: "pop-over", on: {close: t.handleClickCloseApp}
            })], 1)
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("h3", {staticClass: "top"}, [e("i", {staticClass: "remain"}), this._v(" "), e("span", {staticClass: "brief"}, [this._v("笔记评论")])])
        }], !1, null, "24ec9bec", null).exports), Qn = {
            created: function () {
                this.clickPlay()
            }, data: function () {
                return {mark: 0, lengthPic: 0, transitionName: ""}
            }, watch: {noteInfo: "setSmallpic"}, props: {
                noteInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                }, carouWidth: {type: String, default: ""}, carouHeight: {type: String, default: ""}
            }, methods: {
                leftslidePic: function (t) {
                    this.transitionName = "leftpic", this.slideControl(t)
                }, rightslidePic: function (t) {
                    this.transitionName = "rightpic", this.slideControl(t)
                }, slideControl: function (t) {
                    this.lengthPic = this.noteInfo.imageList.length, t < 0 && (this.mark = this.lengthPic - 1), t >= this.lengthPic - 1 && (this.mark = 0), t >= 0 && t < this.lengthPic && (this.mark = t)
                }, changePic: function (t) {
                    this.lengthPic = this.noteInfo.imageList.length, t >= 0 && t < this.lengthPic && (this.mark = t)
                }, clickPlay: function () {
                    this.mark === this.lengthPic && (this.mark = 0)
                }, setSmallpic: function () {
                    this.mark = 0
                }, format: function (t) {
                    return ge(t, {width: 100, height: 100})
                }
            }
        }, Yn = (n(681), Object(O.a)(Qn, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {
                staticClass: "carousel",
                style: {width: t.carouWidth, height: t.carouHeight}
            }, [n("transition-group", {
                staticClass: "slide",
                attrs: {tag: "ul", name: t.transitionName}
            }, t._l(t.noteInfo.imageList, (function (e, r) {
                return n("li", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: r === t.mark,
                        expression: "index === mark"
                    }], key: e.url, style: {width: t.carouWidth, height: t.carouHeight}
                }, [n("span", {staticClass: "inner", style: {backgroundImage: "url(" + e.url + ")"}})])
            })), 0), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.noteInfo.imageList.length > 1,
                    expression: "noteInfo.imageList.length>1"
                }], staticClass: "change-pic"
            }, [n("span", {
                staticClass: "left", on: {
                    click: function (e) {
                        return t.leftslidePic(--t.mark)
                    }
                }
            }), t._v(" "), n("span", {
                staticClass: "right", on: {
                    click: function (e) {
                        return t.rightslidePic(++t.mark)
                    }
                }
            })]), t._v(" "), n("div", {
                directives: [{name: "show", rawName: "v-show", value: !1, expression: "false"}],
                staticClass: "pages"
            }, [n("span", [t._v(t._s(t.mark + 1))]), t._v(" "), n("i", [t._v("/")]), t._v(" "), n("span", [t._v(t._s(t.noteInfo.imageList.length))])])], 1), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.noteInfo.imageList.length > 1,
                    expression: "noteInfo.imageList.length>1"
                }], staticClass: "small-pic", style: {width: t.carouWidth}
            }, t._l(t.noteInfo.imageList, (function (e, r) {
                return n("div", {
                    key: r, staticClass: "each", class: {active: r === t.mark}, on: {
                        click: function (e) {
                            return t.changePic(r)
                        }
                    }
                }, [n("i", {staticClass: "img", style: {backgroundImage: "url(" + t.format(e.url) + ")"}})])
            })), 0)])
        }), [], !1, null, "7cfa9c29", null).exports), Zn = {name: "LikeIcon"}, tr = {
            data: function () {
                return {jumpShow: !1, thresholdHeight: 200}
            }, components: {
                DownloadPopOver: Qe, JumpApp: Rn, LikeIcon: Object(O.a)(Zn, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("svg", {
                        attrs: {
                            width: "15px",
                            height: "14px",
                            viewBox: "0 0 15 14",
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            "xmlns:xlink": "http://www.w3.org/1999/xlink"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "Symbols",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [e("g", {
                        attrs: {
                            id: "相关笔记",
                            transform: "translate(-110.000000, -114.000000)"
                        }
                    }, [e("g", {attrs: {id: "Group-35"}}, [e("g", {attrs: {transform: "translate(20.000000, 53.000000)"}}, [e("g", {
                        attrs: {
                            id: "Group",
                            transform: "translate(90.000000, 60.000000)"
                        }
                    }, [e("g", {attrs: {id: "like;15px"}}, [e("g", [e("rect", {
                        attrs: {
                            id: "Rectangle-13",
                            x: "0",
                            y: "0",
                            width: "15",
                            height: "15"
                        }
                    }), this._v(" "), e("path", {
                        attrs: {
                            d: "M10.1907516,2 C9.21701093,2 8.24371067,2.37082299 7.50030306,3.11246898 C6.75645504,2.3712634 5.78315478,2 4.80941412,2 C3.83435224,2 2.85973077,2.37214421 2.11588275,3.11599224 C0.629067518,4.60236706 0.628186703,7.0122761 2.11235949,8.50041255 L7.20258769,13.5906407 C7.36685963,13.7544723 7.63330608,13.7544723 7.79713762,13.5906407 L12.8847234,8.50393581 C14.3724194,7.0122761 14.3710982,4.60236706 12.8847234,3.11599224 C12.1408754,2.37214421 11.1653731,2 10.1907516,2 Z",
                            id: "Page-1",
                            stroke: "#999999",
                            "stroke-linejoin": "round"
                        }
                    })])])])])])])])])
                }), [], !1, null, "219efdf8", null).exports
            }, mixins: [], props: {
                panelData: {
                    type: Array, default: function () {
                        return []
                    }
                }, panelContent: {type: String, default: ""}, fixed: {
                    type: Boolean, default: function () {
                        return !1
                    }
                }
            }, filters: {
                removeEmotion: function (t) {
                    return null == t ? void 0 : t.replace(/(#[^#]+)\[[^#]+]#/g, "$1").replace(/\[.{1,5}\]/g, "")
                }
            }, methods: {
                eachPanel: function (t) {
                    return "/discovery/item/".concat(t)
                }, handleClickJumpApp: function () {
                    this.jumpShow = !0
                }, handleClickCloseApp: function () {
                    this.jumpShow = !this.jumpShow
                }, collectNum: function (t) {
                    return ve.b.shortenNumber(t)
                }, format: function (t) {
                    return ge(t, {width: 200, height: 200})
                }
            }
        }, er = (n(682), Object(O.a)(tr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.panelData.length,
                    expression: "panelData.length"
                }], class: {"panel-card": !0, "panel-fixed": t.fixed}
            }, [n("h3", [t._v(t._s(t.panelContent))]), t._v(" "), n("div", {
                staticClass: "panel-list",
                staticStyle: {"max-height": "400px", "overflow-y": "auto"}
            }, t._l(t.panelData, (function (e, r) {
                return n("a", {
                    key: r,
                    staticClass: "inner",
                    attrs: {href: t.eachPanel(e.id), owl: "panel_card"}
                }, [n("div", {staticClass: "picture"}, [n("span", {
                    staticClass: "photo",
                    style: {"background-image": "url(" + t.format(e.cover.url) + ")"}
                }), t._v(" "), n("i", {class: e.type})]), t._v(" "), n("div", {staticClass: "content"}, [e.title ? n("p", {staticClass: "desc"}, [t._v(t._s(t._f("removeEmotion")(e.title)))]) : n("p", {staticClass: "desc"}, [t._v(t._s(t._f("removeEmotion")(e.desc)))]), t._v(" "), n("div", {staticClass: "info"}, [n("img", {
                    staticClass: "like-icon",
                    attrs: {src: ""}
                }), t._v(" "), n("span", {staticClass: "counts"}, [t._v(t._s(t.collectNum(e.likes)))])])])])
            })), 0), t._v(" "), n("div", {
                staticClass: "more",
                attrs: {owl: "panel_more"},
                on: {click: t.handleClickJumpApp}
            }, [t._v("查看更多")])]), t._v(" "), n("download-pop-over", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.jumpShow,
                    expression: "jumpShow"
                }], staticClass: "pop-over", on: {close: t.handleClickCloseApp}
            })], 1)
        }), [], !1, null, "1c0b4c4e", null).exports), nr = n(363), rr = n.n(nr), ir = {
            props: {
                signName: {type: String, default: ""},
                isBottom: {type: Boolean, default: !0},
                phaWidth: {type: Number, default: 190},
                noteInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                },
                activeWidth: {type: String, default: ""},
                activeHeight: {type: String, default: ""},
                fontName: {type: String, default: ""},
                fontBrief: {type: String, default: ""}
            }, methods: {
                authorInfo: function (t) {
                    var e = this.$router.resolve({name: "User", params: {id: t}}).href;
                    window.open(e, "_blank")
                }, briefTitle: function (t) {
                    return "" === t ? "暂时还没有个性签名哦～" : t
                }, format: function (t) {
                    return t ? ge(t.replace(/^https?:\/\//, "//")) : ""
                }
            }
        }, or = (n(703), Object(O.a)(ir, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("span", {
                staticClass: "author-info", on: {
                    click: function (e) {
                        return t.authorInfo(t.noteInfo.user.id)
                    }
                }
            }, [n("div", {staticClass: "left"}, [n("div", {staticClass: "left-img"}, [n("img", {
                style: {
                    width: t.activeWidth,
                    height: t.activeHeight
                }, attrs: {src: t.noteInfo.user.image}
            }), t._v(" "), n("i", {
                staticClass: "border-img",
                style: {width: t.activeWidth, height: t.activeHeight}
            })]), t._v(" "), n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.noteInfo.user.officialVerified,
                    expression: "noteInfo.user.officialVerified"
                }], staticClass: "add-v"
            })]), t._v(" "), t.isBottom ? n("div", {
                staticClass: "right",
                style: {width: t.phaWidth + "px"}
            }, [n("h6", {
                staticClass: "name",
                style: {fontSize: t.fontName}
            }, [n("span", {staticClass: "name-detail"}, [t._v(t._s(t.noteInfo.user.nickname))]), t._v(" "), n("i", {
                staticClass: "level-detail",
                style: {"background-image": "url(" + t.format(t.noteInfo.user.level.image) + ")"}
            })]), t._v(" "), n("p", {
                staticClass: "brief",
                style: {fontSize: t.fontBrief}
            }, [t._v(t._s(t.briefTitle(t.signName)))])]) : t._e(), t._v(" "), t.isBottom ? t._e() : n("div", {
                staticClass: "right",
                style: {width: t.phaWidth + "px"}
            }, [n("h6", {
                staticClass: "name-bottom",
                style: {fontSize: t.fontName}
            }, [t._v("\n\t\t\t\t" + t._s(t.noteInfo.user.nickname) + "\n\t\t\t")])])])
        }), [], !1, null, "c2507842", null).exports), ar = {
            data: function () {
                return {
                    activeWidth: "".concat(30, "px"),
                    activeHeight: "".concat(30, "px"),
                    fontName: "".concat(14, "px"),
                    thresholdHeight: 0,
                    qrcodeUrl: "",
                    isShow: !1,
                    phaWidth: 82,
                    isBottom: !1
                }
            }, props: {
                noteInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                }, isfixed: {
                    type: Boolean, default: function () {
                        return !1
                    }
                }, signName: {type: String, default: ""}
            }, components: {AuthorInfo: or}, methods: {
                qqShare: function () {
                    var t, e, n, r, i, o,
                        a = encodeURI("".concat(this.noteInfo.id)),
                        s = encodeURI(Z()(t = this.noteInfo.title).call(t, 0, 20)),
                        c = encodeURI(Z()(e = this.noteInfo.desc).call(e, 0, 20)),
                        u = encodeURI(this.noteInfo.cover.original),
                        l = et()(n = et()(r = et()(i = et()(o = "url=".concat(a, "&title=")).call(o, s, "&desc=")).call(i, c, "&pics=")).call(r, u, "&summary=")).call(n, c);
                    window.open(l)
                }, webShare: function () {
                    var t, e, n, r = encodeURI("".concat(this.noteInfo.id)),
                        i = encodeURI(Z()(t = this.noteInfo.title).call(t, 0, 20)),
                        o = encodeURI(this.noteInfo.cover.original),
                        a = et()(e = et()(n = "".concat(r, "&title=")).call(n, i, "&pic=")).call(e, o);
                    window.open(a)
                }, wxShare: function () {
                    var t = this, e = encodeURI("".concat(this.noteInfo.id));
                    rr.a.toDataURL(e).then((function (e) {
                        t.qrcodeUrl = e, t.isShow = !0
                    }))
                }, wxShareclose: function () {
                    this.isShow = !1
                }
            }
        }, sr = (n(704), Object(O.a)(ar, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {
                class: {
                    "bottom-info": !0,
                    "bottom-fixed": t.isfixed
                }
            }, [n("author-info", {
                attrs: {
                    "note-info": t.noteInfo,
                    "active-width": t.activeWidth,
                    "active-height": t.activeHeight,
                    "font-name": t.fontName,
                    "sign-name": t.signName,
                    "is-bottom": t.isBottom,
                    "pha-width": t.phaWidth
                }
            }), t._v(" "), n("div", {staticClass: "share-item"}, [n("span", {staticClass: "apart-border"}), t._v(" "), n("p", {staticClass: "title"}, [t._v("一起来分享给朋友们看看吧：")]), t._v(" "), n("div", {staticClass: "all-icons"}, [n("a", {
                staticClass: "icon wechat-item",
                attrs: {owl: "wx_share"},
                on: {mouseenter: t.wxShare, mouseleave: t.wxShareclose}
            }), t._v(" "), n("a", {
                staticClass: "icon weibo-item",
                attrs: {target: "_blank", owl: "web_share"},
                on: {click: t.webShare}
            }), t._v(" "), n("a", {
                staticClass: "icon qq-item",
                attrs: {target: "_blank", owl: "qq_share"},
                on: {click: t.qqShare}
            })])]), t._v(" "), n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isShow,
                    expression: "isShow"
                }], staticClass: "codeShow"
            }, [n("img", {attrs: {src: t.qrcodeUrl}}), t._v(" "), n("p", [t._v("分享至微信")])])], 1)
        }), [], !1, null, "3686bccf", null).exports), cr = {
            data: function () {
                return {
                    activeWidth: "".concat(50, "px"),
                    activeHeight: "".concat(50, "px"),
                    fontName: "".concat(16, "px"),
                    fontBrief: "".concat(14, "px")
                }
            }, props: {
                noteInfo: {
                    type: Object, default: function () {
                        return {}
                    }
                }, signName: {type: String, default: ""}
            }, components: {AuthorInfo: or}, computed: {
                notesNum: function () {
                    return ve.b.shortenNumber(this.noteInfo.user.notes)
                }, fansNum: function () {
                    return ve.b.shortenNumber(this.noteInfo.user.fans)
                }, collectNum: function () {
                    return ve.b.shortenNumber(this.noteInfo.user.collected + this.noteInfo.user.liked)
                }
            }
        }, ur = (n(705), Object(O.a)(cr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "author-item"}, [n("h3", {staticClass: "title"}, [t._v("笔记作者")]), t._v(" "), n("author-info", {
                attrs: {
                    "note-info": t.noteInfo,
                    "active-width": t.activeWidth,
                    "active-height": t.activeHeight,
                    "font-name": t.fontName,
                    "font-brief": t.fontBrief,
                    "sign-name": t.signName
                }
            }), t._v(" "), n("div", {staticClass: "card-info"}, [n("div", {staticClass: "inner"}, [n("span", [t._v("笔记")]), t._v(" "), n("span", {staticClass: "note"}, [t._v(t._s(t.notesNum))])]), t._v(" "), n("div", {staticClass: "inner"}, [n("span", [t._v("粉丝")]), t._v(" "), n("span", {staticClass: "fans"}, [t._v(t._s(t.fansNum))])]), t._v(" "), n("div", {staticClass: "inner"}, [n("span", [t._v("获赞与收藏")]), t._v(" "), n("span", {staticClass: "collect"}, [t._v(t._s(t.collectNum))])])])], 1)
        }), [], !1, null, "0d757e92", null).exports), lr = {props: {title: String}}, hr = (n(706), {
            components: {
                PanelCardWrap: Object(O.a)(lr, (function () {
                    var t = this.$createElement, e = this._self._c || t;
                    return e("div", {staticClass: "panel-card-wrap"}, [e("h3", {staticClass: "title"}, [this._v(this._s(this.title))]), this._v(" "), this._t("default")], 2)
                }), [], !1, null, "1b71db8c", null).exports
            }, props: {
                keywords: Array, categories: Array, categoriesIndex: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {
                tax1Url: function () {
                    return "".concat(this.categoriesIndex[0], "/0")
                }, tax2Url: function () {
                    var t;
                    return et()(t = "".concat(this.categoriesIndex[0], "/")).call(t, this.categoriesIndex[1])
                }
            }, methods: {
                keywordClicked: function (t) {
                    window.owl.push({type: "se", action: "click", label: "keyword_clicked", property: t.name})
                }
            }
        }), fr = (n(707), Object(O.a)(hr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("panel-card-wrap", {attrs: {title: "相关标签"}}, [n("div", {staticClass: "keywords"}, [t.categoriesIndex[0] >= 0 ? n("a", {
                staticClass: "keyword category",
                attrs: {href: t.tax1Url}
            }, [t._v("\n      " + t._s(t.categories[0]) + "\n    ")]) : t._e(), t._v(" "), t.categoriesIndex[0] >= 0 && t.categoriesIndex[1] >= 0 ? n("a", {
                staticClass: "keyword category",
                attrs: {href: t.tax2Url}
            }, [t._v("\n      " + t._s(t.categories[1]) + "\n    ")]) : t._e(), t._v(" "), t._l(t.keywords, (function (e) {
                return n("a", {
                    key: e.id,
                    staticClass: "keyword",
                    attrs: {href: "" + e.id + "?name=" + encodeURIComponent(e.name)},
                    on: {
                        click: function (n) {
                            return t.keywordClicked(e)
                        }
                    }
                }, [t._v("\n      " + t._s(e.name) + "\n    ")])
            }))], 2)])
        }), [], !1, null, "881cc458", null).exports), dr = (n(708), Object(O.a)({}, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "load"}, [e("img", {
                attrs: {
                    src: "",
                    width: 50,
                    height: 50
                }
            })])
        }), [], !1, null, "527759ae", null).exports), pr = n(367),
        mr = {normal: "NormalNote", video: "NormalNote", multi: "MultiNote"}, vr = ["normal", "video", "multi"];
    var gr = {
        name: "NoteContent",
        components: {NormalNote: pr.a},
        props: {
            content: {
                type: Object, required: !0, default: function () {
                    return {desc: "", hashTags: [], ats: []}
                }
            }, type: {
                type: String, required: !0, validator: function (t) {
                    return b()(vr).call(vr, t) >= 0
                }
            }, needFirstLineAsHeading: {type: Boolean, default: !1}
        },
        computed: {
            noteType: function () {
                return mr[this.type]
            }, noteTitle: function () {
                return this.content.title
            }
        },
        methods: {
            handleLinkClicked: function (t) {
                this.$emit("clicked", "link", function (t) {
                    return "mention" === t.type ? {type: "user", user: {id: t.id, nickname: t.name}} : {
                        type: "hashTag",
                        hashTag: {
                            type: t.type,
                            link: t.link,
                            id: "goods" === t.type ? t.itemIds[0] : t.id,
                            name: t.name
                        }
                    }
                }(t))
            }, handleItemClicked: function (t) {
                this.$emit("clicked", "item", t)
            }, linkClicked: function (t) {
                var e;
                if ("mention" !== t.type) {
                    var n;
                    if (b()(e = t.link).call(e, "xhsdiscover://") >= 0) {
                        var r, i, o = "location" === t.type ? "poi" : "topic" === t.type ? "huati" : t.type;
                        if ("poi" === o) n = et()(r = "".concat(o, "/")).call(r, t.id); else n = et()(i = "".concat(o, "/")).call(i, t.id)
                    } else n = t.link, "custom" === t.type && (n = n.replace(/&?naviHidden=yese/, ""));
                    n && window.open(n)
                } else window.open("".concat(t.id))
            }
        },
        updated: function () {
            this.$emit("rendered", this.$el.scrollHeight)
        },
        mounted: function () {
            this.$emit("rendered", this.$el.scrollHeight)
        }
    }, _r = (n(744), Object(O.a)(gr, (function () {
        var t = this, e = t.$createElement, n = t._self._c || e;
        return n("main", [n("NormalNote", {
            attrs: {
                content: t.content,
                "need-first-line-as-heading": t.needFirstLineAsHeading
            }, on: {"item-clicked": t.handleItemClicked, "link-clicked": t.linkClicked}
        }), t._v(" "), "video" === t.content.type && t.content.video.generatedText ? n("p", {staticClass: "generated-text"}, [t._v("\n    " + t._s(t.content.video.generatedText) + "\n  ")]) : t._e()], 1)
    }), [], !1, null, null, null).exports), yr = v()({
        "58e9def8f5a2635e3a11ad59": "明星账号组",
        "5abb574ff5a2635c8b0e9aa9": "明星博主组",
        "5ad48e47f5a263015651c00d": "创造101选手",
        "5afd31e6f5a26372b2ed78bd": "潜力明星组",
        "5a94c6e6f5a263174d4f314a": "偶像练习生选手"
    });

    function br(t, e, n, r) {
        var i, o = t.split("\n"), a = 0, s = Be()(o).call(o, (function (t, e) {
            var n, i = t, o = (n = e, en()(n).call(n).replace(/#([^#]+)\[[^#]+]#/g, " $1"));
            return (a = i.length) < 10 && (i += 0 === a ? o : " ".concat(o), a = i.length), a < 10 ? i = function (t, e) {
                var n, r, i = t, o = In()(n = G()(e).call(e, (function (e) {
                    return -1 === b()(t).call(t, e.name)
                }))).call(n, (function (t) {
                    return t.name
                }));
                return o.length > 0 ? et()(r = "".concat(i, "_")).call(r, Z()(o).call(o, 0, 2).join("_")) : i
            }(i, r) : a > 30 && (i = function (t) {
                for (var e, n, r, i, o = !1, a = function (t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], i = t;
                    return o || (i.length < 30 && (!r || (i + e).length < 40) ? i += 0 === i.length ? e : n + e : o = !0), i
                }, s = ["。", "！!", "？?", "……", "～~"], c = t, u = function (t) {
                    var e, n, r = new RegExp("[".concat(s[t], "]"), "g");
                    if (o = !1, (c = Be()(e = G()(n = c.split(r)).call(n, (function (t) {
                        return "" !== t
                    }))).call(e, (function (e, n) {
                        return a(e, n, s[t][0])
                    }))).length < 30) return "break"
                }, l = 0; l < s.length; l++) {
                    if ("break" === u(l)) break
                }
                return c.length > 30 && (o = !1, c = Be()(e = G()(n = c.split(/\[.{1,5}\]/g)).call(n, (function (t) {
                    return "" !== t
                }))).call(e, (function (t, e) {
                    return a(t, e, " ")
                }))), c.length > 30 && (o = !1, c = Be()(r = G()(i = c.split(/[，,]/g)).call(i, (function (t) {
                    return "" !== t
                }))).call(r, (function (t, e) {
                    return a(t, e, "，", !0)
                }))), Z()(c).call(c, 0, 45)
            }(i)), i
        }), "");
        (s = s.replace(/\[.{1,5}\]/g, "").replace(/^[\s_。！!？?……～~，、,#]*(.*?)[\s_。！!？?……～~，、,#]*$/, "$1"), -1 !== b()(yr).call(yr, e)) && (s = et()(i = "".concat(n, "：")).call(i, s));
        return s
    }

    var wr = {
            name: "NoteView",
            mixins: [Object(Nn.a)([{ref: "cardfix", location: 70}, {ref: "lovefix", location: .999}], 100, 50)],
            components: {
                KeywordCard: fr,
                RedLoading: dr,
                AuthorCard: ur,
                BottomInfo: sr,
                PanelCard: er,
                PictureSlide: Yn,
                CommentSection: Kn,
                LoveCollection: Pn,
                NoteContent: _r
            },
            computed: {
                noteId: function () {
                    return this.$route.params.id
                }, allNotes: function () {
                    return this.$store.state.note.allNotes
                }, needFirstLineAsHeading: function () {
                    return "multi" !== this.noteType && !this.noteInfo.title
                }
            },
            data: function () {
                return {
                    noteInfo: {},
                    noteType: "normal",
                    commentInfo: {},
                    panelData: [],
                    isLoading: !0,
                    panelContent: "",
                    cardfix: !1,
                    lovefix: !1,
                    video: "",
                    userId: "",
                    signName: " ",
                    isSougou: !1
                }
            },
            prefetch: function (t) {
                var e = t.router, n = t.requestContext, r = e.currentRoute.params.id, a = !1;
                n && n.header && n.header["user-agent"].search("sogou") > -1 && (a = !0);
                return i.a.all([Object(jn.a)(o.http, {
                    params: {noteId: r},
                    query: {isGoogle: !1}
                }), He(r, {pageSize: 10}).catch((function () {
                    return []
                })), Ge(r).catch((function () {
                    return {comments: []}
                }))]).then((function (t) {
                    var e = Object(fn.a)(t, 3), n = e[0], r = e[1], i = void 0 === r ? [] : r;
                    return {
                        commentInfo: e[2],
                        noteInfo: n,
                        noteType: n.type,
                        userId: n.user.id,
                        player: null,
                        panelData: i,
                        panelContent: "相关笔记",
                        isLoading: !1,
                        isSougou: a
                    }
                }))
            },
            methods: {
                bottomBarShouldFix: function () {
                    return this.$refs.lovefix.offsetTop > (window.innerHeight || document.documentElement.clientHeight)
                }, getNoteDetail: function () {
                    var t = this;
                    return Object(jn.a)(this.noteId).then((function (e) {
                        t.noteInfo = e, t.noteType = e.type
                    }))
                }, getNoteComment: function () {
                    var t = this;
                    return Ge(this.noteId).then((function (e) {
                        t.commentInfo = e
                    }))
                }, getRelatedNoteList: function () {
                    var t = this;
                    return He(this.noteId, {pageSize: 4}).then((function (e) {
                        t.panelData = e, t.panelContent = "相关笔记"
                    }))
                }, initContent: function (t) {
                    this.$router.push({name: "NoteView", params: {id: t}})
                }, scrollToRefer: function (t) {
                    "cardfix" === t.ref && (this.cardfix = "down" === t.direction), "bottom" === t.ref && (this.cardfix = "up" === t.direction, this.bottomfix = "up" === t.direction), "lovefix" === t.ref && (this.lovefix = "down" !== t.direction)
                }, getSeoMeta: function () {
                    var t = this.noteInfo.seoMeta;
                    return {title: t.title, desc: t.description.replace(/[\r\n]/g, " "), keywords: t.keywords}
                }, formatUrl: ge
            },
            mounted: function () {
                this.lovefix = this.bottomBarShouldFix()
            },
            created: function () {
                var t = this;
                this.$on("prefetchSuccess", (function () {
                    var e, n = "".concat(t.$route.path), r = function (t, e) {
                        var n, r, i;

                        function o(t) {
                            var e = t;
                            return e = t.replace(/^\/\//, "https://"), b()(e).call(e, "") > 0 ? (b()(e).call(e, "?") > 0 && (e = Z()(e).call(e, 0, b()(t).call(t, "?"))), b()(e).call(e, "@") > 0 && (e = Z()(e).call(e, 0, b()(t).call(t, "@"))), "".concat(e, "?imageMogr2/format/jpg/quality/92/auto-orient/strip/crop/450x300/gravity/center")) : (b()(e).call(e, "o4.xiaohongshu.com") > 0 && (e = e.replace(/(w|_)(1280)/g, "$1640")), e)
                        }

                        var a = /(#[^#]+)\[[^#]+]#/g, s = /\[.{1,5}\]/g,
                            c = t.title ? t.title : "小红书_标记我的生活" !== t.generatedTitle ? t.generatedTitle : br(t.desc, t.user.groupid, t.user.nickname, t.hashTags);
                        c = c.replace(/[\r\n]/g, " ").replace(a, "$1").replace(s, "");
                        var u = "video" === t.type || "multi" === t.type ? [o(t.cover.url)] : In()(n = t.imageList).call(n, (function (t) {
                                return o(t.url)
                            })), l = "".concat(t.time.replace(" ", "T"), ":00"), h = {
                                name: t.user.nickname,
                                image: t.user.image,
                                url: "".concat(t.user.id)
                            }, f = Z()(r = t.desc.replace(/[\r\n]/g, " ").replace(a, "$1").replace(s, "")).call(r, 0, 100),
                            d = t.categories.join(";"), p = In()(i = t.keywords).call(i, (function (t) {
                                return t.name || t
                            })).join(";"), m = "video" === t.type ? t.video.duration : 0, v = "";
                        if (m >= 60) {
                            var g, _ = Math.floor(m / 60), y = m % 60, w = _ >= 10 ? _ : "0".concat(_),
                                x = y >= 10 ? y : "0".concat(y);
                            v = et()(g = "".concat(w, ":")).call(g, x)
                        } else v = m >= 10 ? "00:".concat(m) : "00:0".concat(m);
                        return {
                            id: "".concat(t.id),
                            noteType: t.type,
                            title: c,
                            images: u,
                            author: h,
                            pubDate: l,
                            url: e,
                            description: f,
                            sgType: d,
                            sgTag: p,
                            videotime: v,
                            videoquality: "高清"
                        }
                    }(t.noteInfo, n), i = t.getSeoMeta();
                    In()(e = t.noteInfo.hashTags).call(e, (function (t) {
                        return "custom" === t.type && (t.link = ""), t
                    })), t.$setHeadInfo(r), t.$setTitle(t.isSougou ? t.noteInfo.title : i.title), t.$setMeta([{
                        name: "description",
                        content: i.desc
                    }, {name: "keywords", content: i.keywords}])
                }))
            }
        }, xr = (n(745), Object(O.a)(wr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "card-note"}, [n("div", {staticClass: "left-card"}, ["multi" === t.noteType ? n("div", [n("img", {
                staticClass: "onePhoto",
                attrs: {src: t.formatUrl(t.noteInfo.cover.url)}
            })]) : t._e(), t._v(" "), t.noteInfo.imageList && "normal" === t.noteType ? n("picture-slide", {
                staticClass: "bottom-gap",
                attrs: {"note-info": t.noteInfo, "carou-width": "500px", "carou-height": "500px"}
            }) : "video" === t.noteType ? n("div", {staticClass: "videoframe"}, [n("video", {
                staticClass: "videocontent",
                attrs: {poster: t.noteInfo.cover.url, src: t.noteInfo.video.url, controls: "true", objectFit: "contain"}
            })]) : t._e(), t._v(" "), n("div", {staticClass: "note-top"}, [n("h1", {staticClass: "title"}, [t._v("\n        " + t._s(t.noteInfo.title) + "\n        "), t.noteInfo.inCensor ? n("span", {staticClass: "status"}, [n("img", {
                staticClass: "clock-icon",
                attrs: {src: ""}
            }), t._v(" "), n("span", {staticClass: "text"}, [t._v(t._s(t.noteInfo.censorTip || "审核中"))])]) : t._e()])]), t._v(" "), n("note-content", {
                ref: "content",
                attrs: {content: t.noteInfo, "need-first-line-as-heading": t.needFirstLineAsHeading, type: t.noteType}
            }), t._v(" "), n("div", {ref: "lovefix"}), t._v(" "), t.noteInfo.id ? n("love-collection", {
                staticClass: "bottom-gap-add",
                attrs: {"note-info": t.noteInfo}
            }) : t._e(), t._v(" "), t.noteInfo.id ? n("bottom-info", {
                attrs: {
                    isfixed: t.lovefix,
                    "note-info": t.noteInfo,
                    "sign-name": t.signName
                }
            }) : t._e(), t._v(" "), n("comment-section", {
                attrs: {
                    "comment-info": t.commentInfo,
                    "author-id": t.userId
                }
            }), t._v(" "), n("div", {ref: "bottom"})], 1), t._v(" "), n("div", {staticClass: "right-card"}, [t.noteInfo.id ? n("author-card", {
                staticClass: "bottom-gap",
                attrs: {"note-info": t.noteInfo, "sign-name": t.signName}
            }) : t._e(), t._v(" "), n("div", {ref: "cardfix"}), t._v(" "), t.noteInfo.keywords && t.noteInfo.keywords.length ? n("keyword-card", {
                attrs: {
                    keywords: t.noteInfo.keywords,
                    categories: t.noteInfo.categories,
                    categoriesIndex: t.noteInfo.categoriesIndex
                }
            }) : t._e(), t._v(" "), n("panel-card", {
                staticClass: "bottom-gap",
                attrs: {fixed: t.cardfix, "panel-data": t.panelData, "panel-content": t.panelContent}
            })], 1), t._v(" "), n("red-loading", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: t.isLoading,
                    expression: "isLoading"
                }]
            })], 1)
        }), [], !1, null, "51f90222", null).exports), Cr = {
            name: "BriefCards", props: {
                brandCards: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }
        }, kr = (n(746), Object(O.a)(Cr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", [n("div", {staticClass: "inner-brief"}, [n("div", {staticClass: "content"}, [n("div", {staticClass: "red-background"}), t._v(" "), n("div", {staticClass: "all-list"}, t._l(t.brandCards, (function (e, r) {
                return n("div", {key: r, staticClass: "each-card"}, [n("img", {
                    staticClass: "pic",
                    attrs: {src: e.imgSrc}
                }), t._v(" "), n("h6", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("p", {staticClass: "pra-one"}, [t._v(t._s(e.topContent))]), t._v(" "), n("p", {staticClass: "pra-two"}, [t._v(t._s(e.bottomContent))])])
            })), 0), t._v(" "), n("div", {staticClass: "bottom-back"}), t._v(" "), n("div", {staticClass: "red-shadow"}), t._v(" "), t._m(0)])])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {staticClass: "button-group"}, [e("a", {
                staticClass: "btn",
                attrs: {href: "", target: "_blank"}
            }, [this._v("立即申请")])])
        }], !1, null, "2e8e4752", null).exports), Sr = {
            name: "ProcessCards", props: {
                processCards: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }
        }, Ir = (n(747), Object(O.a)(Sr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "process-card-container"}, [n("div", {staticClass: "inner-enter"}, [n("div", {staticClass: "inner-flow"}, t._l(t.processCards, (function (e, r) {
                return n("div", {
                    key: r,
                    staticClass: "list"
                }, [n("div", {staticClass: "title-icon"}, [t._v("SETP 0" + t._s(r + 1))]), t._v(" "), n("p", {staticClass: "title"}, [t._v(t._s(e.title))]), t._v(" "), n("div", {staticClass: "content"}, [n("p", {staticClass: "pra-one"}, [t._v(t._s(e.topContent))]), t._v(" "), n("div", [e.prefix ? n("span", {staticClass: "prefix-link"}, [t._v(t._s(e.prefix))]) : t._e(), t._v(" "), e.link ? n("a", {
                    staticClass: "pra-two link",
                    attrs: {href: "" + e.link, target: "_blank"}
                }, [t._v(t._s(e.bottomContent))]) : n("p", {staticClass: "pra-two"}, [t._v(t._s(e.bottomContent))])])])])
            })), 0)])])
        }), [], !1, null, "3f391a1f", null).exports), Er = {
            name: "BrandIssue", props: {
                groupIssues: {
                    type: Array, default: function () {
                        return []
                    }
                }
            }, computed: {
                normalIssue: function () {
                    var t, e = this;
                    return Ot()(t = this.groupIssues).call(t, (function (t) {
                        return t.groupName === e.currentName
                    })).groupContent
                }
            }, data: function () {
                return {currentName: "认证流程"}
            }, methods: {
                changeCurrent: function (t) {
                    this.currentName = t
                }
            }
        }, Tr = (n(748), {
            name: "EconomyEdition",
            components: {
                BriefCards: kr, ProcessCards: Ir, BrandIssue: Object(O.a)(Er, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", [n("div", {staticClass: "all-issue"}, [n("div", {staticClass: "issue-wrapper"}, [n("div", {staticClass: "issue-selector"}, t._l(t.groupIssues, (function (e, r) {
                        return n("span", {
                            key: r,
                            staticClass: "selector",
                            class: {selected: t.currentName === e.groupName},
                            on: {
                                click: function (n) {
                                    return t.changeCurrent(e.groupName)
                                }
                            }
                        }, [t._v(t._s(e.groupName) + "\n          "), n("span", {staticClass: "tooltip-text"}, [t._v(t._s(e.groupName))])])
                    })), 0), t._v(" "), t._l(t.normalIssue, (function (e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "inner"
                        }, [n("h4", {staticClass: "question"}, [t._v("Q：" + t._s(e.question))]), t._v(" "), n("p", {staticClass: "content"}, [t._v("A：" + t._s(e.content))])])
                    }))], 2)])])
                }), [], !1, null, "348173d2", null).exports
            },
            data: function () {
                return {
                    normalIssue: [],
                    domesticIssue: "",
                    abroadIssue: "",
                    middleOne: !0,
                    middleTwo: !1,
                    brandCards: [],
                    processCards: []
                }
            },
            methods: {
                viewProduct: function () {
                }, middleOnetype: function () {
                    this.middleOne = !0, this.middleTwo = !1
                }, middleTwotype: function () {
                    this.middleOne = !1, this.middleTwo = !0
                }, assignBrandCards: function () {
                    this.brandCards = [{
                        imgSrc: "",
                        title: "人群",
                        topContent: "具有强大社交驱动力的年轻人",
                        bottomContent: ""
                    }, {
                        imgSrc: "",
                        title: "场景",
                        topContent: "分享生活方式，直击消费决策",
                        bottomContent: ""
                    }, {
                        imgSrc: "",
                        title: "内容",
                        topContent: "美好、真实、多元的社区氛围",
                        bottomContent: ""
                    }, {
                        imgSrc: "",
                        title: "效果",
                        topContent: "真实口碑成就年轻人热爱的品牌",
                        bottomContent: ""
                    }]
                }, assignProcessCards: function () {
                    this.processCards = [{
                        title: "1.点击立即申请",
                        topContent: "使用小红书App账号",
                        prefix: "登录",
                        bottomContent: "Business系统",
                        link: "//business.xiaohongshu.com/"
                    }, {
                        title: "2.提交认证材料",
                        topContent: "根据提示要求，提交认证材料",
                        bottomContent: "小红书效果广告开户手册",
                        link: ""
                    }, {title: "3.开启投放", topContent: "开始投放广告"}, {
                        title: "4.关注助手",
                        topContent: "打开小红书 app 搜索并关注「企业号推广助手」获取更多资讯"
                    }]
                }, assignNormalIssue: function () {
                    this.normalIssue = [{
                        groupName: "认证流程",
                        groupContent: [{
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }, {
                            question: "",
                            content: ""
                        }, {
                            question: "",
                            content: ""
                        }, {question: ""}]
                    }, {
                        groupName: "",
                        groupContent: [{
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: "？"
                        }, {content: "", question: ""}]
                    }, {
                        groupName: "",
                        groupContent: [{
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }]
                    }, {
                        groupName: "",
                        groupContent: [{
                            content: "",
                            question: ""
                        }, {content: "", question: ""}, {
                            question: "",
                            content: ""
                        }, {
                            question: "",
                            content: ""
                        }, {
                            question: "",
                            content: ""
                        }, {
                            question: "",}]
                    }, {
                        groupName: "",
                        groupContent: [{
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }, {
                            content: "",
                            question: ""
                        }]
                    }, {groupName: "其他", groupContent: [{question: "如有其他疑问", content: "可邮件咨询 red.ads@xiaohongshu.com；"}]}]
                }, assignDomesticIssue: function () {
                    this.domesticIssue = [{
                        title: "基础信息",
                        content: [{info: "账号名字"}, {info: "品牌介绍"}, {info: "行业类别"}, {info: "所在地"}]
                    }, {
                        title: "头像/证明材料",
                        content: [{info: "头像", item: [{main: "头像必须为品牌形象，如品牌LOGO或企业商标"}]}, {
                            info: "认证公函",
                            item: [{
                                example: !0,
                                exampleurl: "",
                                letter: !0,
                                letterurl: "",
                                mainone: "",
                                mainred: "",
                                maintwo: ""
                            }]
                        }, {
                            info: "企业营业执照",
                            item: [{
                                example: !0,
                                exampleurl: "",
                                mainone: "上传",
                                mainred: "品牌方",
                                maintwo: "的中国大陆工商局或市场监督管理局的最新工商营业执照（三证合一）"
                            }]
                        }, {info: "商标注册证", item: [{main: "若品牌认证名称/信息包含品牌，需上传商标注册证"}]}, {
                            info: "网站ICP备案截图",
                            item: [{main: "若品牌账号认证内容为网站，需上传网站在工信部网站备案查询的截图，要求内容真实完整、清晰可识别，需加盖网站主办单位公章"}]
                        }, {info: "软件著作证", item: [{main: "若品牌账号认证内容为软件/APP，需提供软件著作权登记证书原件彩色扫描件"}]}]
                    }, {
                        title: "企业信息",
                        content: [{info: "企业名称"}, {info: "统一社会信用代码"}, {info: "营业期限"}, {info: "运营者姓名"}, {info: "运营者手机号"}]
                    }]
                }, assignAbroadIssue: function () {
                    this.abroadIssue = [{
                        title: "基础信息",
                        content: [{info: "账号名字"}, {info: "品牌简介"}, {info: "行业类别"}, {info: "所在地"}]
                    }, {
                        title: "头像/证明材料",
                        content: [{info: "头像", item: [{main: "头像必须为品牌形象，如品牌LOGO或企业商标"}]}, {
                            info: "认证公函",
                            item: [{
                                mainone: "公函需下载打印填写，并加盖",
                                mainred: "品牌方",
                                maintwo: "的实体公章后拍摄上传，公函中的“小红书账号名字”需与商标注册证一致 "
                            }]
                        }, {
                            info: "公司注册文件",
                            item: [{main: "Business registration（简称“BR”）或Certificate of incorporation（简称“CR”）的原件彩色扫描件，若为香港公司，BR和CR均需上传。"}]
                        }, {info: "商标注册证", item: [{main: "若品牌认证名称/信息包含品牌，需上传商标注册证"}]}]
                    }, {title: "企业信息", content: [{info: "企业名称"}, {info: "运营者姓名"}, {info: "运营者手机号"}]}]
                }
            },
            created: function () {
                this.assignBrandCards(), this.assignProcessCards(), this.assignNormalIssue(), this.assignDomesticIssue(), this.assignAbroadIssue()
            }
        }), Or = (n(749), Object(O.a)(Tr, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "business-page"}, [n("div", {staticClass: "container"}, [n("div", {staticClass: "brief-cards-wrapper"}, [n("h2", {staticClass: "title"}, [t._v("为什么选择小红书")]), t._v(" "), t._m(0), t._v(" "), n("brief-cards", {attrs: {"brand-cards": t.brandCards}})], 1), t._v(" "), n("div", {staticClass: "process-cards-wrapper"}, [n("h2", {staticClass: "title"}, [t._v("广告投放申请流程")]), t._v(" "), n("p", {staticClass: "subtitle"}, [t._v("提交资质申请，通过后开启广告投放")]), t._v(" "), n("process-cards", {attrs: {"process-cards": t.processCards}})], 1), t._v(" "), n("div", {staticClass: "inner-issue"}, [n("h2", [t._v("常见问题")]), t._v(" "), n("brand-issue", {attrs: {"group-issues": t.normalIssue}})], 1)])])
        }), [function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("p", {staticClass: "subtitle"}, [this._v("\n        年轻人热爱的生活分享平台\n        "), e("a", {
                staticClass: "subtitle-link",
                attrs: {
                    target: "_blank",
                    href: "",
                    title: "小红书_广告产品介绍"
                }
            }, [this._v("下载广告产品介绍")])])
        }], !1, null, "dbce18c4", null).exports), Ar = {
            methods: {
                jump: function (t) {
                    var e = t.target.dataset.id, n = document.querySelector(e);
                    window.scrollTo(0, n.offsetTop - 40)
                }
            }
        }, Nr = (n(750), {
            name: "media", data: function () {
                return {reportData: [], bannerUrl: ""}
            }, components: {
                PrivacyPolicy: Object(O.a)(Ar, (function () {
                    var t = this.$createElement;
                    this._self._c;
                    return this._m(0)
                }), [function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "privacy"}, [n("div", {staticClass: "inner"}, [n("div", {staticClass: "left-nav"}, [n("h2", {staticClass: "title"}, [t._v("小红书用户隐私政策")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#0", "data-id": "#item_0"}
                    }, [t._v("一、我们如何收集和使用您的个人信息")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#1", "data-id": "#item_1"}
                    }, [t._v("二、我们如何共享、转让、公开披露您的个人信息")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#2", "data-id": "#item_2"}
                    }, [t._v("三、我们如何存储和保护您的个人信息")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#3", "data-id": "#item_3"}
                    }, [t._v("四、您如何管理您的个人信息")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#4", "data-id": "#item_4"}
                    }, [t._v("五、您如何注销您的账号")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#5", "data-id": "#item_5"}
                    }, [t._v("六、有关第三方提供产品和/或服务的特别说明")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#6", "data-id": "#item_6"}
                    }, [t._v("七、我们如何使用Cookie和其他同类技术")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#7", "data-id": "#item_7"}
                    }, [t._v("八、未成年人保护")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#8", "data-id": "#item_8"}
                    }, [t._v("九、我们如何更新隐私政策")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#9", "data-id": "#item_9"}
                    }, [t._v("十、如何联系我们")]), t._v(" "), n("a", {
                        staticClass: "list",
                        attrs: {href: "#10", "data-id": "#item_10"}
                    }, [t._v("十一、其他")])]), t._v(" "), n("div", {staticClass: "right-content"}, [n("h2", {staticClass: "title"}, [t._v("小红书用户隐私政策")]), t._v(" "), n("p", {staticClass: "update-date"}, [t._v("更新日期：2020年8月24日")]), t._v(" "), n("p", {staticClass: "release-date"}, [t._v("\n        生效日期：2020年8月31日\n      ")]), t._v(" "), n("div", {staticClass: "intro"}, [n("h3", [t._v("引言")]), t._v(" "), n("p", [t._v("\n          小红书（以下简称为“我们”）尊重并保护所有小红书用户的个人信息及隐私安全。为同时给您提供更准确、有个性化的服务和更安全的互联网环境，我们依据《中华人民共和国网络安全法》、《信息安全技术\n          个人信息安全规范》以及其他相关法律法规和技术规范明确了我们收集/使用/对外提供个人信息的原则，进一步阐述了关于您个人信息的相关权利。\n        ")]), t._v(" "), n("p", [t._v("\n          本政策与您所使用的我们的产品与/或服务息息相关，您在下载、安装、启动、浏览、注册、登录、使用我们的产品与/或服务（以下统称“使用我们的产品与/或服务”）时，我们将按照本政策的约定处理和保护您的个人信息。我们尽量以简明扼要的表述向您解释本政策所涉及的技术词汇，以便于您理解。"), n("em", [t._v("本政策中与您权益（可能）存在重大关系的条款，我们已使用加粗字体予以区别，请您重点查阅。")])]), t._v(" "), n("p", [n("em", [t._v("小红书特别提请未满18周岁的未成年（特别是未满十四周岁的儿童）及其监护人的注意，我们已明确未成年保护专门章节（以粗体提示），请您仔细阅读。")])]), t._v(" "), n("p", [t._v("\n          请在使用/继续使用我们的各项产品与服务前，仔细阅读并充分理解本政策，并在需要时，按照本政策的指引，做出适当的选择。如果您不同意本政策的内容，将可能导致我们的产品与/或服务无法正常运行，或者无法达到我们拟达到的服务效果，您应立即停止访问/使用我们的产品与/或服务。您使用或继续使用我们提供的产品与/或服务的行为，都表示您充分理解和同意本《小红书用户隐私政策》（包括更新版本）的全部内容。\n        ")])]), t._v(" "), n("div", {staticClass: "about"}, [n("h3", [t._v("关于我们")]), t._v(" "), n("p", [t._v("小红书网站及APP的经营者为行吟信息科技（上海）有限公司及其关联公司。")]), t._v(" "), n("p", [t._v("注册地址为上海嘉定区曹安公路1611号4D67室。")])]), t._v(" "), n("p", {attrs: {id: "0"}}, [n("strong", [t._v("一、")]), t._v(" "), n("strong", [t._v("我们如何收集和使用您的个人信息")])]), t._v(" "), n("p", [t._v("\n        我们会遵循正当、合法、必要的原则，出于本政策所述的以下目的，收集和使用您在使用我们服务过程中主动提供或因使用我们产品和/或服务而产生的个人信息。如果我们要将您的个人信息用于本政策未载明的其它用途，或基于特定目的将已经收集的信息用于其他目的，我们将以合理的方式向您告知，并在使用前再次征得您的同意：\n      ")]), t._v(" "), n("p", [t._v("\n        1. 账号注册及登录\n      ")]), t._v(" "), n("p", [t._v("\n        1.1.\n        当您注册及登录时，如您使用一键登录的功能，基于我们与通信运营商的合作，我们会收集您的"), n("strong", [t._v("手机号码和手机运营商信息")]), t._v("，以便为您提供快捷的登录服务；同时，为帮助您完成注册过程，我们还将收集您的\n        "), n("strong", [t._v("兴趣")]), t._v("，以为您提供小红书初始服务。\n      ")]), t._v(" "), n("p", [t._v("\n        1.2.\n        "), n("strong", [t._v("\n          如您使用第三方账号进行登录，为了满足网络实名制要求，在您使用发布、评论及其他要求实名认证的功能与服务前，我们将另行收集您的手机号码以完成实名认证\n        ")]), t._v("\n        。请您谨慎考虑后提供这类信息，若您拒绝提供，您可能无法正常使用相应的功能。\n      ")]), t._v(" "), n("p", [t._v("\n        1.3.\n        您还可以根据自身需求选择填写或更改性别、出生年月日、教育经历（院校及入学时间）、地区及个人介绍来完善您的信息，但如您不提供此类信息，不会影响您使用本产品和相关服务。\n      ")]), t._v(" "), n("p", [t._v("\n        1.4.\n        如果您成功注册小红书账号，我们会在小红书应用程序及网站中显示您的用户名、头像、地区、个人介绍信息。\n      ")]), t._v(" "), n("p", [t._v("\n        2. 向您提供产品和/或服务\n      ")]), t._v(" "), n("p", [n("strong", [t._v("2.1. ")]), t._v("\n        信息浏览、发布、点赞、收藏、分享功能。"), n("strong")]), t._v(" "), n("p", [t._v("\n        2.1.1.为了向您提供我们最核心的信息展示服务并向您推荐可能感兴趣的笔记及相关信息，我们会收集您的"), n("strong", [t._v("您的浏览记录（如您的关注、浏览）和点击操作记录（如兴趣、点击、搜索、点赞、收藏、分享、评论、发布记录）")]), t._v("。其中，\n        "), n("strong", [t._v("您的浏览记录和点击操作记录属于个人敏感信息，但属于提供小红书最核心的信息展示和信息发布服务所必需的信息。")])]), t._v(" "), n("p", [t._v("\n        2.1.2.当您使用发布、编辑笔记、图片、音视频功能时，我们会请求您授权照片、相机、麦克风权限。您如果拒绝授权提供，将无法使用相应功能，但不影响您正常使用小红书的其他功能。\n      ")]), t._v(" "), n("p", [t._v("\n        2.1.3.当您使用发布、评论、点赞、收藏、分享功能时，\n        "), n("strong", [t._v("您发布的文字、照片、视频、音频、评论、点赞、收藏、分享记录信息会存储在我们的服务器中")]), t._v("\n        ，因为存储是实现这一功能所必需的。我们会以加密的方式存储，您也可以随时删除这些信息。\n      ")]), t._v(" "), n("p", [t._v("\n        2.2.\n        安全运行。为了保障软件与服务的安全运行，我们会收集您的设备型号、设备名称、设备唯一标识符、浏览器类型和设置、语言设置、操作系统和应用程序版本、网络设备硬件地址、登录IP地址、接入网络的方式、网络质量数据、移动网络信息（包括运营商名称）、产品版本号。\n      ")]), t._v(" "), n("p", [t._v("\n        2.3. 搜索功能。当您使用小红书搜索功能时，我们会收集"), n("strong", [t._v("您查询的关键词、阅读记录和访问时间、评论和互动记录")]), t._v("\n        。收集此信息可以向您提供您所需要的内容和可能更感兴趣的服务，同时亦可以改进我们的产品和服务。\n      ")]), t._v(" "), n("p", [t._v("\n        2.4.\n        定位功能。当您开启设备定位功能并使用小红书基于位置提供的相关服务（含发布功能的定位标签、打卡功能、附近功能）时，我们可能会收集有关\n        "), n("strong", [t._v("您的GPS位置信息。GPS位置信息属于个人敏感信息，拒绝提供该信息您将无法使用上述基于位置提供的相关服务")]), t._v("\n        ，但不影响您正常使用小红书的其他功能。\n      ")]), t._v(" "), n("p", [t._v("\n        2.5. 互动功能与服务。\n      ")]), t._v(" "), n("p", [t._v("\n        2.5.1.当您关注您感兴趣的账号、进行浏览、评论、点赞、收藏、分享内容时，我们会收集"), n("strong", [t._v("您关注的账号和前述信息")]), t._v("\n        ，并向您展示您关注账号发布的内容；同时，您点赞或收藏的内容会向您的粉丝展示，您可将收藏的内容设置仅自己可见，可以在我-收藏-收藏专辑中开启仅自己可见。\n      ")]), t._v(" "), n("p", [t._v("\n        2.5.2.当您使用推荐通讯录好友功能时，在获得您明示同意后，我们会收集"), n("strong", [t._v("您的通讯录信息")]), t._v("\n        ，用于向您推荐通信录中的好友，您的好友也能看到您使用小红书服务。"), n("strong", [t._v("如果您不希望被推荐，可以在我-设置-隐私-不把我推荐给通讯录好友中选择关闭")]), t._v("。\n        "), n("strong", [t._v("通讯录信息属于个人敏感信息，拒绝提供该信息仅会使您无法使用上述功能")]), t._v("，但不影响您正常使用小红书及相关服务的其他功能。\n      ")]), t._v(" "), n("p", [t._v("\n        2.5.3.当您选择使用扫码添加好友时，"), n("strong", [t._v("我们可能会向您请求摄像头权限")]), t._v("\n        ，摄像头权限是敏感权限，拒绝提供仅会使您无法通过扫码途径添加好友，不影响其他功能的使用。\n      ")]), t._v(" "), n("p", [t._v("\n        2.6. 购买、查询、使用虚拟财产。为了方便您查询虚拟财产，并尽量降低可能存在的风险，\n        "), n("strong", [t._v("钱包会记录您的充值、余额与使用情况")]), t._v("。\n      ")]), t._v(" "), n("p", [t._v("\n        2.7. 身份认证功能及账号找回。\n      ")]), t._v(" "), n("p", [t._v("\n        2.7.1.当您使用身份认证功能申请成为认证用户时，我们可能会收集您的身份信息，包括\n        "), n("strong", [t._v("您的真实姓名、身份证号码、面部识别信息，用于证实您的个人身份")]), t._v("。\n      ")]), t._v(" "), n("p", [t._v("\n        2.7.2.当您使用账号找回功能时，我们可能会收集您的身份信息，包括您的真实姓名、身份证号码、面部识别信息，用于核实您的身份，便于您找回小红书账号。\n      ")]), t._v(" "), n("p", [t._v("\n        2.7.3.当您申请开通直播功能时，根据法律法规的要求，我们可能会收集您的身份信息，包括\n        "), n("strong", [t._v("您的真实姓名、身份证号码、面部识别信息，用于证实您的个人身份")]), t._v("。\n      ")]), t._v(" "), n("p", [n("strong", [t._v("这些信息是个人敏感信息，您可以拒绝提供，且不会影响小红书其他功能的正常使用")]), t._v("\n        。\n      ")]), t._v(" "), n("p", [t._v("\n        2.8.\n        商品购买功能。您可以在小红书商城订购商品/服务。为了帮助您顺利完成交易、保障您的交易安全、查询订单信息、提供物流服务，在您下单交易或为了完成交易时，我们会收集您的\n        "), n("strong", [t._v("交易商品/服务信息、订单号、下单时间、交易金额、支付方式、收货人姓名、地址、联系电话、物流信息")]), t._v("。\n      ")]), t._v(" "), n("p", [t._v("\n        2.9. 客服和售后服务功能\n      ")]), t._v(" "), n("p", [t._v("\n        当您联系我们的客服或提出我们的产品与/或服务的售后申请时，为了您的账号与系统安全，我们可能需要您提供相关个人信息与您之前提供的个人信息相匹配以验证您的用户身份。验证成功后，我们可能会收集您与我们的沟通信息（例如：账号信息、订单信息、您为了证明相关事实而提供的图片/视频/文字信息）、您的联系方式以及您与我们的沟通记录，包括线上沟通记录、电话录音，以便尽快为您解决问题和改进我们的产品与/或服务。\n      ")]), t._v(" "), n("p", [t._v("\n        2.10.\n        支付功能。您可以在小红书购买商品/服务以及小红书会员服务。在您使用该功能的过程中可能会需要进行支付，在支付过程中，我们可能会收集\n        "), n("strong", [t._v("您的第三方支付账号")]), t._v("（例如支付宝账号、微信账号、银联账号）。\n      ")]), t._v(" "), n("p", [t._v("\n        2.11.\n        信息预填写功能。您在小红书平台填写表单或订单信息时，为帮您节省填写时间，我们会根据您注册、购物时向平台提供的姓名、性别（如有）、手机号码、地区（如有）帮您自动填充表单信息。\n      ")]), t._v(" "), n("p", [t._v("\n        2.12.\n        测肤、试妆功能。当您使用小红书提供的测肤或试妆功能时，我们可能需要您的照片、相机权限或面部信息以为您提供该项服务。\n      ")]), t._v(" "), n("p", [t._v("\n        2.13.\n        保证您在使用小红书平台服务时能够与后台服务器保持即时通信、您能够及时收到个性化内容推送，我们会i）"), n("strong", [t._v("向您获取及调用您的开机广播权限用于启动小红书或其关联公司移动客户端软件")]), t._v("，ii）\n        "), n("strong", [t._v("采用第三方消息推送服务为您生成标识ID用于区分您的设备的唯一性")]), t._v("。\n      ")]), t._v(" "), n("p", [t._v("\n        2.14. 为向您展示个性化的笔记内容，确保您能获知更为适宜的内容，我们可能会收集在\n        "), n("strong", [t._v("您在小红书平台上搜索/播放/展示推荐内容的记录、音视频播放记录")]), t._v("\n        。如您对推送内容不感兴趣，您可选择关闭推送信息，具体可前往我-设置-隐私-个性化选项关闭个性化推荐机制。\n      ")]), t._v(" "), n("p", [t._v("\n        2.15.\n        为向您提供更便捷、更符合您个性化需求的商品信息展示、搜索及推送服务，我们会根据您的设备信息和您使用小红书客户端时的浏览使用信息、购买记录，提取您的偏好特征，并基于特征标签产出间接人群画像，用于向您展示、推送信息和可能的商业广告。我们努力保障您的浏览体验。如果您不想接受我们给您发送的商业广告，您可通过短信提示回复退订或提供的其他方式进行退订或关闭。\n      ")]), t._v(" "), n("p", [t._v("\n        3. 我们可能从第三方间接获取您的个人信息\n      ")]), t._v(" "), n("p", [t._v("\n        3.1. 如您使用第三方平台的账号登录时，经过您明确授权账号绑定后，\n        "), n("strong", [t._v("第三方平台会向我们同步您在该平台上使用的头像、昵称、地区（如有）、性别（如有）及好友信息（针对微博平台）")]), t._v("\n        ，以使您可以直接登录并使用小红书。\n      ")]), t._v(" "), n("p", [t._v("\n        如您不希望被推荐给微博好友，可以在我-设置-隐私-不把我推荐给微博好友中选择关闭。\n      ")]), t._v(" "), n("p", [t._v("\n        4. 征得授权同意的例外\n      ")]), t._v(" "), n("p", [t._v("\n        根据相关法律法规的规定，在以下情形中，我们可以在不征得您的授权同意的情况下收集、使用一些必要的个人信息：\n      ")]), t._v(" "), n("p", [t._v("\n        （1） 与我们履行法律法规规定的义务相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （2） 与国家安全、国防安全直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （3） 与公共安全、公共卫生、重大公共利益直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （4） 与犯罪侦查、起诉、审判和判决执行等直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （5） 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；\n      ")]), t._v(" "), n("p", [t._v("\n        （6） 所收集的个人信息是您自行向社会公众公开的；\n      ")]), t._v(" "), n("p", [t._v("\n        （7） 从合法公开披露的信息中收集到您的个人信息，如从合法的新闻报道、政府信息公开等渠道；\n      ")]), t._v(" "), n("p", [t._v("\n        （8） 根据您与平台签署的在线协议或合同所必需的；\n      ")]), t._v(" "), n("p", [t._v("\n        （9） 用于维护我们产品和/或服务的安全稳定运行所必需的，例如发现、处置产品或服务的故障；\n      ")]), t._v(" "), n("p", [t._v("\n        （10） 法律法规规定的其他情形。\n      ")]), t._v(" "), n("p", {attrs: {id: "1"}}, [n("strong", [t._v("二、")]), t._v(" "), n("strong", [t._v("我们如何共享、转让、公开披露您的个人信息")])]), t._v(" "), n("p", [t._v("\n        1. 共享：\n      ")]), t._v(" "), n("p", [t._v("\n        对于您的个人信息，我们不会与任何公司、组织和个人进行共享，除非存在以下一种或多种情形：\n      ")]), t._v(" "), n("p", [n("strong", [t._v("（1） ")]), t._v(" "), n("strong", [t._v("事先已得到您的授权；")])]), t._v(" "), n("p", [n("strong", [t._v("（2） ")]), t._v(" "), n("strong", [t._v("您自行提出的；")])]), t._v(" "), n("p", [n("strong", [t._v("（3） ")]), t._v(" "), n("strong", [t._v("与商业合作伙伴的必要共享：")])]), t._v(" "), n("p", [n("strong", [t._v("\n          您理解并知悉，为了向您提供更完善、优质的产品和服务，我们将授权商业合作伙伴为您提供部分服务。此种情形下，我们可能会与合作伙伴共享您的某些个人信息，以提供更好的客户服务和用户体验。请您注意，我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的个人信息。我们将对信息数据的输出形式、流转、使用进行安全评估与处理，以保护数据安全\n        ")]), t._v("\n        。\n      ")]), t._v(" "), n("p", [t._v("\n        目前，我们的合作伙伴包括以下类型：\n      ")]), t._v(" "), n("p", [t._v("\n        A.\n        平台的第三方商家：为帮助您实现产品或服务的购买或者为您提供售后服务，我们会与平台的第三方商家共享\n        "), n("strong", [t._v("您的订单和交易相关信息")]), t._v("。\n      ")]), t._v(" "), n("p", [t._v("\n        B.\n        第三方物流服务商：当您成功下单后，如商品需第三方配送的，我们为了准确、安全向您完成货物的交付及配送。第三方物流公司在发货及配送环节内不可避免地会获知\n        "), n("strong", [t._v("您的相关配送信息")]), t._v("\n        。我们向您承诺，我们会以最大努力保障您的个人信息安全，我们会严格要求第三方物流公司对您的个人信息保密，只以配送之目的获悉和使用，不得对外泄露或做其他任何用途。\n      ")]), t._v(" "), n("p", [t._v("\n        C.\n        数据服务供应商：包括网络广告监测的合作伙伴。为维护/改进我们的产品/服务、为您提供更好的内容，我们可能会与提供该服务的指定合作伙伴共享您的相关信息（\n        "), n("strong", [t._v("含广告播放/展示记录、设备标识符")]), t._v("\n        ）。请您知悉，为了您的信息安全，我们目前仅与已签署严格数据安全保密协议的合作伙伴进行合作；\n        "), n("strong", [t._v("但我们承诺：未经您的同意，我们不会与其共享可以识别您身份的个人信息。")])]), t._v(" "), n("p", [t._v("\n        D.\n        内容审核服务商：为保证用户在互联网信息平台上发布的内容是安全的，我们可能会向委托的第三方内容审核服务商共享您在平台上发布的内容信息；\n      ")]), t._v(" "), n("p", [t._v("\n        E.\n        实名认证审核服务商：当您进行实名认证或使用找回账号功能时，我们会向第三方审核服务商共享您的个人信息，以便您顺利找回账号。\n      ")]), t._v(" "), n("p", [t._v("\n        F.\n        测肤功能的服务商：具体测肤功能由与小红书合作的第三方服务商提供，当您使用该功能时，我们会向第三方服务商共享您基于此功能向平台提供的个人信息，以便您顺利体验该功能。\n      ")]), t._v(" "), n("p", [t._v("\n        G.\n        第三方小程序：当您使用第三方小程序时，未经您同意，我们不会向这些开发者、运营者共享您的个人信息。当您使用小程序时，小程序可能会使用您授权的相关系统权限，您可以在相应的小程序中撤回该等授权；\n      ")]), t._v(" "), n("p", [t._v("\n        H.\n        其他业务合作伙伴：例如：委托我们进行推广和广告投放的合作伙伴等。您授权我们有权与委托我们进行推广和广告投放的合作伙伴共享我们使用您的相关信息集合形成的"), n("strong", [t._v("间接用户画像")]), t._v("，以帮助其进行广告或决策建议、提高广告有效触达率、进一步了解用户需求。\n        "), n("strong", [t._v("但我们承诺：未经您的同意，我们不会与其共享可以识别您身份的个人信息。")])]), t._v(" "), n("p", [t._v("\n        I.\n        合作的第三方SDK服务商：当您使用小红书APP中由第三方提供的功能时，我们可能会接入由第三方提供的软件开发包（SDK）以实现相关功能。此时，第三方SDK服务商可能会收集您相关的个人信息：\n      ")]), t._v(" "), n("p", [t._v("\n        a.\n        一键登录功能：为给您提供账号登录——一键登录功能，第三方服务商可能会获取您的必要设备信息、网络相关信息、地理位置信息;\n      ")]), t._v(" "), n("p", [t._v("\n        b.\n        第三方账号登录功能：为给您提供第三方账号登录的功能，第三方服务商可能会获取您的必要设备信息、网络相关信息、地理位置信息；\n      ")]), t._v(" "), n("p", [t._v("\n        c.\n        消息推送服务：为给您提供消息推送，第三方推送服务商可能会获取您的推送SDK版本号、必要设备信息、手机状态信息、地理位置信息、网络相关信息以便推送您可能更感兴趣的信息；\n      ")]), t._v(" "), n("p", [t._v("\n        d.\n        地理位置服务：为给您提供位置服务（如发现功能、附近功能、打卡功能），第三方地理位置服务商会收集您的设备信息及精准地理位置信息以便可以向您推送附近内容；\n      ")]), t._v(" "), n("p", [t._v("\n        e.\n        云储存服务：为给您提供云端储存服务（如您上传至小红书的图片、音视频内容会储存在云端），第三方服务商可能会收集您的设备信息、网络相关信息、运营商信息；\n      ")]), t._v(" "), n("p", [t._v("\n        f.\n        账号安全服务：为保障您和其他用户的账号与财产安全，使您和我们的正当合法权益免受不法侵害，第三方安全服务商可能会收集您的必要设备信息、网络相关信息、运营商信息、日志信息以提供账号安全服务；\n      ")]), t._v(" "), n("p", [t._v("\n        g.\n        支付服务：为保障您顺利购买平台上的商品/服务、虚拟商品，第三方支付服务商可能会收集您的设备信息、网络信息、运营商信息以实现顺利完成支付以及保证支付安全。\n      ")]), t._v(" "), n("p", [t._v("\n        h.\n        直播服务：为保障平台直播功能的顺利使用，第三方服务商可能会收集您的设备信息、网络相关信息、推送SDK版本号、运营商信息。\n      ")]), t._v(" "), n("p", [t._v("\n        （4）\n        当您选择参加我们及我们的关联方或平台上的第三方举办的营销活动时，"), n("strong", [t._v("可能需要您提供姓名、性别、通信地址、联系方式、银行账号信息")]), t._v("。\n        "), n("strong", [t._v("这些信息是个人敏感信息，拒绝提供可能会影响您参加相关活动，但不会影响其他功能。")]), t._v("\n        只有经过您的同意，我们才会将这些信息与关联方或第三方共享，以保障您在活动中获得体验一致的服务，或委托第三方及时向您兑现奖励。\n      ")]), t._v(" "), n("p", [t._v("\n        （5）\n        与我们的关联公司必要共享：我们可能会与我们的关联公司共享您的个人信息。我们只会共享必要的个人信息，且这种共享受本政策所声明的目的的约束。关联公司如要改变个人信息的处理目的，将再次征得您的授权和同意；\n      ")]), t._v(" "), n("p", [t._v("\n        （6）\n        您可以基于小红书平台与第三人（包括不特定对象）共享您的个人信息或其他信息，但因您的共享行为而导致的信息泄露、被使用等情况，与小红书无关，小红书不因此承担法律责任。\n      ")]), t._v(" "), n("p", [t._v("\n        2. 转让：\n      ")]), t._v(" "), n("p", [t._v("\n        转让是指将取得您个人信息的控制权转让给其他公司、组织或个人。除非获取您的明确同意，否则我们不会将您的个人信息转让给任何公司、组织或个人。但下述情形除外：\n      ")]), t._v(" "), n("p", [t._v("\n        （1） 事先已征得您的同意；\n      ")]), t._v(" "), n("p", [t._v("\n        （2） 您自行提出的；\n      ")]), t._v(" "), n("p", [t._v("\n        （3）\n        如果公司发生合并、收购或破产清算，将可能涉及到个人信息转让，此种情况下我们会告知您有关情况并要求新的持有您个人信息的公司、组织继续受本政策的约束。否则我们将要求其重新获取您的明示同意。\n      ")]), t._v(" "), n("p", [t._v("\n        （4） 其他法律法规规定的情形。\n      ")]), t._v(" "), n("p", [t._v("\n        3. 公开披露：\n      ")]), t._v(" "), n("p", [t._v("\n        公开披露是指向社会或不特定人群发布信息的行为。原则上，我们不会对您的个人信息进行公开披露。但下述情况除外：\n      ")]), t._v(" "), n("p", [t._v("\n        （1） 因公布账号中奖、处罚通知时展示必要的相关脱敏信息；\n      ")]), t._v(" "), n("p", [t._v("\n        （2） 取得您的明示同意后。\n      ")]), t._v(" "), n("p", [t._v("\n        4. 共享、转让、公开披露个人信息授权同意的例外情形\n      ")]), t._v(" "), n("p", [t._v("\n        根据相关法律法规的规定，在以下情形中，我们可能在未事先征得您的授权同意的情况下共享、转让、公开披露您的个人信息：\n      ")]), t._v(" "), n("p", [t._v("\n        （1）\n        与我们履行法律法规规定的义务相关的，含依照法律规定、司法机关或行政机关强制性要求向有权机关披露您的个人信息；在该种情形下，我们会要求披露请求方出具与其请求相应的有效法律文件，并对被披露的信息采取符合法律和业界标准的安全防护措施；\n      ")]), t._v(" "), n("p", [t._v("\n        （2） 与国家安全、国防安全直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （3） 与公共安全、公共卫生、重大公共利益直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （4） 与犯罪侦查、起诉、审判和判决执行等直接相关的；\n      ")]), t._v(" "), n("p", [t._v("\n        （5） 出于维护您或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；\n      ")]), t._v(" "), n("p", [t._v("\n        （6） 您自行向社会公众公开的个人信息；\n      ")]), t._v(" "), n("p", [t._v("\n        （7） 从合法公开披露的信息中收集到的个人信息的，如合法的新闻报道、政府信息公开等渠道。\n      ")]), t._v(" "), n("p", [t._v("\n        （8） 法律法规规定的其他情形。\n      ")]), t._v(" "), n("p", [t._v("\n        请您了解，根据现行法律规定及监管要求，共享、转让经去标识化处理的个人信息，且确保数据接收方无法复原并重新识别个人信息主体的，无需另行向您通知并征得您的同意。\n      ")]), t._v(" "), n("p", {attrs: {id: "2"}}, [n("strong", [t._v("三、")]), t._v(" "), n("strong", [t._v("我们如何存储和保护您的个人信息")])]), t._v(" "), n("p", [t._v("\n        1. 存储：\n      ")]), t._v(" "), n("p", [t._v("\n        存储地点：我们将从中华人民共和国境内获得的个人信息存放于中华人民共和国境内。如果发生个人信息的跨境传输，我们会单独向您以站内通知或邮件的方式告知您个人信息出境的目的、接收方，并征得您的授权同意，我们会严格遵守中国的法律法规，确保数据接收方有充足的数据保护能力来保护您的个人信息。\n      ")]), t._v(" "), n("p", [t._v("\n        存储时间：我们承诺始终按照法律的规定在合理必要期限内在存储您个人信息。超出上述期限后，我们将删除您的个人信息或对您的个人信息进行匿名化处理。\n      ")]), t._v(" "), n("p", [t._v("\n        如我们停止运营，我们将及时停止收集您个人信息的活动，将停止运营的通知以逐一送达或公告的形式通知您，并对所持有的您的个人信息进行删除或匿名化处理。\n      ")]), t._v(" "), n("p", [t._v("\n        2. 保护：\n      ")]), t._v(" "), n("p", [t._v("\n        为了保护您的个人信息安全，我们将努力采取各种符合行业标准的安全措施来保护您的个人信息以最大程度降低您的个人信息被毁损、盗用、泄露、非授权访问、使用、披露和更改的风险。我们将积极建立数据分类分级制度、数据安全管理规范、数据安全开发规范来管理规范个人信息的存储和使用，确保未收集与我们提供的服务无关的个人信息。\n      ")]), t._v(" "), n("p", [t._v("\n        您的账户均有安全保护功能，请妥善保管您的账户及密码信息。小红书将通过向其它服务器备份、对用户密码进行加密等安全措施确保您的信息不丢失，不被滥用和变造。尽管有前述安全措施，但同时也请您注意在信息网络上不存在“完善的安全措施”。为防止安全事故的发生，我们已按照法律法规的规定，制定了妥善的预警机制和应急预案。如确发生安全事件，我们将及时将相关情况选择以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。同时，我们还将按照监管部门要求，主动上报个人信息安全事件的处置情况，紧密配合政府机关的工作。\n      ")]), t._v(" "), n("p", [t._v("\n        3.\n        当我们的产品或服务发生停止运营的情形时，我们会及时停止继续收集个人信息的活动。上述变更，我们将以推送通知、公告等形式通知你，并在合理的期限内删除你的个人信息或进行匿名化处理（所谓“匿名化处理”，是指通过对个人信息的技术处理，使得个人信息主体无法被识别，且处理后的信息不能被复原的过程。个人信息经匿名化处理后所得的信息不属于个人信息。）\n      ")]), t._v(" "), n("p", {attrs: {id: "3"}}, [n("strong", [t._v("四、")]), t._v(" "), n("strong", [t._v("您如何管理您的个人信息")])]), t._v(" "), n("p", [n("strong", [t._v("我们非常重视并尽全保障您对自己个人信息的相关权利。")])]), t._v(" "), n("p", [t._v("\n        1. 自主决定接收信息\n      ")]), t._v(" "), n("p", [t._v("\n        在关注中会根据您主动选择关注的账号信息进行展示，您可以根据需要自主选择关注或取消关注。\n      ")]), t._v(" "), n("p", [t._v("\n        2. 自行访问、更正和删除相关信息\n      ")]), t._v(" "), n("p", [t._v("\n        我们通过交互界面的设计，为您提供了可自行访问、更正和删除相关个人信息的渠道，您可通过以下方式进行设置：\n      ")]), t._v(" "), n("p", [t._v("\n        （1）\n        通过我-设置-编辑资料访问、更正自己的个人资料，含头像、昵称、性别、常住地、院校及入学时间、生日、个人介绍；\n      ")]), t._v(" "), n("p", [t._v("\n        （2）\n        通过我-设置-帐号与安全设置、访问、更正账号信息，含手机号（每月仅可换绑一次）、登录密码、绑定的第三方平台账号（含微信、微博和QQ账号）；\n      ")]), t._v(" "), n("p", [t._v("\n        （3）\n        通过我-设置-隐私设置、访问、更正隐私信息，含评论设置、@设置、通讯录推荐设置、微博推荐设置、位置信息设置和黑名单设置；\n      ")]), t._v(" "), n("p", [t._v("\n        （4） 通过我-笔记/收藏/赞过访问、更正、删除相关信息。\n      ")]), t._v(" "), n("p", [t._v("\n        3. 变更或撤回授权范围\n      ")]), t._v(" "), n("p", [t._v("\n        您可通过我-设置-通知设置/隐私/通用变更或撤回授权范围，包括：1）微信帐号、微博帐号和QQ帐号的绑定；2）互动、私信、社区内容、和商城通知；3）评论设置、@设置、通讯录推荐设置、微博推荐设置、位置信息设置和黑名单设置；4）系统默认字体的获取和使用设置。\n      ")]), t._v(" "), n("p", [t._v("\n        您也可以通过设备本身操作系统变更或撤回GPS地理位置、通讯录、摄像头、相册权限，我们将根据您变更或撤回权限的设置进行个人信息的收集，如您撤回授权我们将不再收集与这些权限相关的信息，\n        "), n("strong", [t._v("\n          但提请您注意这将导致部分功能或全部功能的不可用。同时，您变更或撤回授权的决定，不会影响我们此前基于您的授权而进行的个人信息处理。\n        ")])]), t._v(" "), n("p", [t._v("\n        4. 联系我们进行管理\n      ")]), t._v(" "), n("p", [t._v("\n        出于安全性和身份识别的考虑，您可能无法直接通过小红书交互界面自行访问、更正或删除某些信息（如实名认证后的信息、您的部分使用记录）；如您确有必要访问、修改或依法要求删除该类信息，请您按照本政策第十条中所提供的联系方式，将您的问题通过邮件发送至指定的联系邮箱，我们将尽快审核所涉问题，并在核验您的用户身份后及时予以回复。\n      ")]), t._v(" "), n("p", {attrs: {id: "4"}}, [n("strong", [t._v("五、")]), t._v(" "), n("strong", [t._v("您如何注销您的账号")])]), t._v(" "), n("p", [n("strong", [t._v("\n          您可以通过我-设置-帮助与客服-社区问题-如何注销账号或我-设置-账号与安全-注销账号，在满足账号注销的条件下选择申请注销账号，来注销您的账号；账号注销后，除法律明确规定必须由我们保留的个人信息外（如您在小红书交易相关的信息），您的个人信息将会从小红书移除\n        ")]), t._v("\n        。\n      ")]), t._v(" "), n("p", {attrs: {id: "5"}}, [n("strong", [t._v("六、")]), t._v(" "), n("strong", [t._v("有关第三方提供产品和/或服务的特别说明")])]), t._v(" "), n("p", [t._v("\n        小红书中可能包括第三方产品和/或服务或链接至第三方提供的信息和/或服务，\n        "), n("strong", [t._v("\n          该等第三方产品和/或服务在使用前，您需要跳转到相应的小程序或第三方页面。您使用该等第三方服务（包括您向该等第三方提供的任何个人信息），须受该第三方的服务条款及隐私政策（而非本政策）约束，您需要仔细阅读其条款并自行决定是否接受。\n        ")]), t._v("\n        请您妥善保护自己的个人信息，仅在必要的情况下向他人提供。本政策仅适用于我们所收集、保存、使用、共享、披露信息，并不适用于任何第三方提供的服务或第三方的信息使用规则，\n        "), n("strong", [t._v("我们对任何第三方使用由您提供的信息不承担任何责任。")])]), t._v(" "), n("p", {attrs: {id: "6"}}, [n("strong", [t._v("七、")]), t._v(" "), n("strong", [t._v("我们如何使用Cookie和其他同类技术")])]), t._v(" "), n("div", [t._v("\n        （1）\n        在您未拒绝接受cookies的情况下，小红书会在您的计算机以及相关移动设备上设定或取用cookies，以便您能登录或使用依赖于cookies的小红书平台服务或功能。小红书使用cookies可为您提供更加周到的个性化服务，包括推广服务。\n      ")]), t._v(" "), n("div", [t._v("\n        （2）\n        您有权选择接受或拒绝接受cookies。您可以通过修改浏览器设置的方式或在移动设备中设置拒绝接受cookies。但如果您选择拒绝接受cookies，则您可能无法登录或使用依赖于cookies的小红书平台服务或功能。\n      ")]), t._v(" "), n("div", [t._v("\n        （3） 通过小红书所设cookies所取得的有关信息，将适用本政策。\n      ")]), t._v(" "), n("div", [t._v("\n        2.\n        第三方SDK的使用：为保障我们客户端的稳定运行、功能实现，使您能够使用和享受更多的服务及功能，我们的应用中会嵌入授权合作伙伴的SDK或其他类似的应用程序。此时，第三方SDK服务商可能会收集您的相关信息。具体请查看"), n("a", {attrs: {href: ""}}, [t._v("《第三方SDK收集使用信息说明》")]), t._v("。\n      ")]), t._v(" "), n("div", [n("br")]), t._v(" "), n("p", {attrs: {id: "7"}}, [n("strong", [t._v("八、")]), t._v(" "), n("strong", [t._v("未成年人保护")])]), t._v(" "), n("p", [n("strong", [t._v("\n          以下条款请未成年用户"), n("a", {attrs: {name: "OLE_LINK41"}}), t._v(" "), n("a", {attrs: {name: "OLE_LINK40"}}, [t._v("（特别是未满十四周岁的儿童用户）")]), t._v("\n          在监护人的陪同下仔细阅读，并由监护人在充分理解后作出是否接受或拒绝本政策的决定：\n        ")])]), t._v(" "), n("p", [n("strong", [t._v("1. ")]), t._v(" "), n("strong", [t._v("\n          若用户是未满18周岁的未成年人（特别是未满十四周岁的儿童用户），应在监护人监护、指导并获得监护人同意情况下阅读本协议和使用小红书相关服务。\n        ")])]), t._v(" "), n("p", [n("strong", [t._v("2. ")]), t._v(" "), n("strong", [t._v("\n          我们重视对未成年人个人信息的保护，未成年用户在填写个人信息时，请加强个人保护意识并谨慎对待，请在监护人指导时正确使用小红书相关服务\n        ")]), t._v("\n        。\n      ")]), t._v(" "), n("p", [n("strong", [t._v("3. ")]), t._v(" "), n("strong", [t._v("\n          我们已设计开发“青少年模式”，监护人可通过我-设置-青少年模式开启；功能开启后，小红书将只能在特定时段和时长内使用，且首页中将仅展示我们精选的教育类、知识类内容，同时无法进行打赏、充值等操作。\n        ")])]), t._v(" "), n("p", [n("strong", [t._v("4. ")]), t._v(" "), n("strong", [t._v("\n          若您是未成年人的监护人，当您对您所监护的未成年人使用我们的服务或其向我们提供的用户信息有任何疑问时，请您根据本政策第十条提供的联系方式及时与我们联系。我们将根据国家相关法律法规及本政策的规定保护未成年人用户信息的保密性及安全性。如果我们发现自己在未事先获得可证实的父母或法定监护人同意的情况下收集了未成年人的个人信息，则会设法尽快删除相关数据\n        ")]), t._v("\n        。\n      ")]), t._v(" "), n("p", {attrs: {id: "8"}}, [n("strong", [t._v("九、")]), t._v(" "), n("strong", [t._v("我们如何更新隐私政策")])]), t._v(" "), n("p", [t._v("\n        1.\n        我们保留不时更新或修订本政策的权利。这些更新与修订将构成本政策的一部分并具有等同于本政策的效力，未经您明确同意，我们不会削减您依据当前生效的本政策所应享受的权利。\n      ")]), t._v(" "), n("p", [t._v("\n        2.\n        如遇本政策更新，我们会通过APP客户端推送通知等合理方式通知您，以便您能及时了解本政策所做的任何变更。\n      ")]), t._v(" "), n("p", {attrs: {id: "9"}}, [n("strong", [t._v("十、")]), t._v(" "), n("strong", [t._v("如何联系我们")])]), t._v(" "), n("p", [t._v("\n        （1）\n        如您对个人信息保护问题有任何投诉、建议、疑问，或您对本政策有任何疑问，您可以通过以下方式联系我们，我们将尽快审核所涉问题，并在验证您的用户身份后的十五个工作日内予以答复\n        "), n("a", {attrs: {href: "mailto:"}}), t._v("：shuduizhang@xiaohongshu.com。\n      ")]), t._v(" "), n("p", {attrs: {id: "10"}}, [n("strong", [t._v("十一、 ")]), t._v(" "), n("strong", [t._v("其他")])]), t._v(" "), n("p", [n("strong", [t._v("1. ")]), t._v(" "), n("strong", [t._v("因本政策以及我们处理您个人信息事宜引起的任何争议，您可诉至上海市黄浦区人民法院。")])]), t._v(" "), n("p", [n("strong", [t._v("2. ")]), t._v(" "), n("strong", [t._v("如果您认为我们的个人信息处理行为损害了您的合法权益，您也可向有关政府部门进行反映。")])])])])])
                }], !1, null, "6a7deb56", null).exports
            }
        }), jr = Object(O.a)(Nr, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("privacy-policy")], 1)
        }), [], !1, null, "533993cc", null).exports, Lr = [{
            title: "协议条款的确认及接受",
            content: '<em>小红书（包括网址为www.xiaohongshu.com的网站，以及可在IOS 系统及Android 系统中运行的名为“小红书”的应用程序，以下简称"本网站"或“小红书”）由行吟信息科技（上海）有限公司（包括其关联机构，以下合称“本公司”）运营并享有完全的所有权及知识产权等权益，本网站提供的服务将完全按照其发布的条款和操作规则严格执行。您确认同意本协议（协议文本包括《小红书用户服务协议》、《小红书用户隐私政策》、《小红书社区规范》，三者乃不可分割的整体，具有同等法律效力，共同构成用户使用本网站及相关服务的整体协议，以下合称“本协议”）所有条款并完成注册程序时，本协议在您与本公司间成立并发生法律效力，同时您成为本网站正式用户。</em>',
            ifOne: !0,
            chineseNum: "一"
        }, {
            title: "账号注册及使用规则",
            ifOne: !1,
            content: [{
                main: "用户注册成功后，小红书将给予每个用户一个用户帐号及相应的密码，该用户帐号和密码由用户负责保管；<em>用户应当对以其用户帐号进行的所有活动和事件负法律责任。</em>",
                num: "1"
            }, {
                main: "<em>用户须对在小红书的注册信息的真实性、合法性、有效性承担全部责任，用户不得冒充他人（包括但不限于冒用他人姓名、名称、字号、头像等足以让人引起混淆的方式）开设账号；不得利用他人的名义发布任何信息；不得恶意使用注册帐户导致其他用户误认；否则小红书有权立即停止提供服务，收回其帐号并由用户独自承担由此而产生的一切法律责任。</em>",
                num: "2"
            }, {
                main: "<em>用户理解且确认，其在小红书注册账号的所有权及有关权益均归本公司所有，用户完成注册手续后仅享有该账号的使用权。您的账号仅限于您本人使用，未经本公司书面同意，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账号。如果本公司发现或者有合理理由认为使用者并非账号初始注册人，公司有权在未通知您的情况下，暂停或终止向该注册账号提供服务，并有权注销该账号，而无需向注册该账号的用户承担法律责任。</em>",
                num: "3"
            }, {
                main: "<em>为了充分使用账号资源，如用户在注册后未及时进行初次登录使用或连续超过二个月未登录账号并使用等情形，本公司有权收回用户的注册账号。</em>",
                num: "4"
            }, {
                main: "用户承诺不得以任何方式利用小红书直接或间接从事违反中国法律、以及社会公德的行为，小红书有权对违反上述承诺的内容予以删除。",
                num: "5"
            }, {
                main: "<em>用户不得利用本网站制作、上载、复制、发布、传播或者转载如下内容：</em>",
                num: "6",
                add: ["（1）反对宪法所确定的基本原则的；", "（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；", "（3）损害国家荣誉和利益的；", "（4）煽动民族仇恨、民族歧视，破坏民族团结的；", "（5）破坏国家宗教政策，宣扬邪教和封建迷信的；", "（6）散布谣言，扰乱社会秩序，破坏社会稳定的；", "（7）散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；", "（8）侮辱或者诽谤他人，侵害他人合法权益的；", "（9）含有法律、行政法规禁止的其他内容的信息。"]
            }, {
                main: "<em>小红书鼓励用户充分利用小红书平台自由地发布和共享自己的信息，用户对于其创作并在小红书上发布的合法内容（包括但不限于文字、图片、视频、音频等）依法享有著作权。用户不应通过小红书发布他人受知识产权法律等保护的内容，除非获得他人的合法授权。就用户发布的内容，若第三方向小红书投诉并提交初步证据，经小红书判断投诉属实的，小红书将会删除这些内容。如因用户发布的内容给小红书带来损失的，用户应当负责赔偿。（关于用户在小红书发布内容的具体规范，请查阅《小红书社区规范》）。</em>",
                num: "7"
            }, {
                main: "小红书有权对用户使用小红书的情况进行审查和监督，如用户在使用小红书时违反任何上述规定，小红书或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容、暂停或终止用户使用小红书的权利）以减轻用户不当行为造成的影响。",
                num: "8"
            }],
            chineseNum: "二"
        }, {
            title: "服务内容",
            content: [{
                main: "<em>本网站的服务具体内容根据实际情况提供，小红书保留变更、中断或终止部分或全部服务的权利。小红书不承担因业务调整给用户造成的损失。除非本协议另有其它明示规定，增加或强化目前本网站的任何新功能，包括所推出的新产品，均受到本协议之规范。用户了解并同意，本网站服务仅依其当前所呈现的状况提供，对于任何用户通讯或个人化设定之时效、删除、传递错误、未予储存或其它任何问题，小红书均不承担任何责任。</em>",
                num: "1"
            }, {
                main: "小红书在提供服务时，可能会对部分服务的用户收取一定的费用。在此情况下，小红书会在相关页面上做明确的提示。如用户拒绝支付该等费用，则不能使用相关的服务。",
                num: "2"
            }, {
                main: "用户理解，小红书仅提供相关的服务，除此之外与相关服务有关的设备（如电脑、调制解调器及其他与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。",
                num: "3"
            }, {
                main: "<em>小红书提供的服务内容可能包括：文字、软件、声音、图片、视频、图表等。所有这些内容受著作权、商标和其它财产所有权法律的保护。用户只有在获得小红书或其他相关权利人的授权之后才能使用这些内容，不能擅自复制、再造这些内容、或创造与内容有关的派生产品。</em>",
                num: "4"
            }, {
                main: "<em>小红书会员服务</em>",
                num: "5"
            }, {
                main: "小红书会员，是指在小红书具有良好消费记录的个人注册用户根据小红书公布的收费标准支付相应的费用后获取的特殊资格。以下称“会员”。",
                num: "5.1"
            }, {
                main: "会员服务，指会员享有的特殊服务，包括以相对优惠的价格购买指定商品（即会员专享价），以及其他由小红书明示的优惠措施。用户开通会员服务时，须按照小红书公布的收费标准支付相应的会员服务费用。基于业务的发展，小红书有权调整收费标准，调整后的收费标准自公布之日起生效。",
                num: "5.2"
            }, {
                main: "会员知悉并确认，当开通会员服务后，若您中途取消服务或终止资格的，小红书将不退还您已支付的会员服务费用。",
                num: "5.3"
            }, {
                main: "使用会员服务过程中，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织。若您不具备前述主体资格，则您及您的监护人应当承担因此而导致的一切后果，小红书有权向您的监护人追偿。",
                num: "5.4"
            }, {
                main: "您知悉并同意，小红书有权通邮件、短信等方式，向您发送会员相关活动的信息；",
                num: "5.5"
            }, {
                main: "您确认会员服务仅限您本人使用，同时，您保证，您将合理使用会员服务，不会利用会员服务非法获利，不以任何形式转让您所享有的会员服务，不以任何形式将您所享有的会员服务借给他人使用，如小红书有合理理由怀疑您存在不当使用会员服务时，小红书有权取消您的会员资格且不退还您支付的会员服务费用，因此产生的相关责任及损失均由您自行承担，给小红书造成损失的，小红书保留向您追偿的权利。",
                num: "5.6"
            }, {main: "小红书保留在法律法规允许的范围内自行决定是否接受您的会员服务申请、调整会员服务内容、取消会员资格等权利。", num: "5.7"}, {
                main: "<em>商品/服务的购买与评价</em>",
                num: "6"
            }, {
                main: "<em>您可以通过小红书商城购买小红书或者第三方商家为您提供的商品/服务，商品/服务来源以是否标注“自营”予以区分。</em>",
                num: "6.1"
            }, {
                main: "<em>您在小红书下订单时，请您仔细确认所购商品的名称、价格、数量、型号、规格、尺寸、联系地址、电话、收货人等信息。收货人与您本人不一致的，收货人的行为和意思表示视为您的行为和意思表示，您应对收货人的行为及意思表示的法律后果承担连带责任。</em>",
                num: "6.2"
            }, {
                main: "<em>您理解并同意：小红书上展示的商品/服务和价格等信息为向您发出的要约。您下单时须填写您希望购买的商品/服务数量、价款及支付方式、收货人、联系方式、收货地址等内容；付款及订单提交成功前，您有权修改所填信息。付款及订单提交成功后，将视您与销售商之间就您购买的商品/服务成立了合同关系，销售商会按照您在订单中订购的商品/服务进行发货。</em>",
                num: "6.3"
            }, {
                main: "<em>尽管销售商做出最大的努力，但由于市场变化及各种以合理商业努力难以控制因素的影响，本软件无法避免您提交的订单信息中的商品出现缺货情况；如您下单所购买的商品发生缺货，您有权取消订单以解除电子合同，销售商在取得您同意的前提下可以取消订单以解除电子合同，若您已经付款，则为您办理退款。</em>",
                num: "6.4"
            }, {
                main: '<em>用户有权在小红书提供的<a href="">评价系统</a>中对与其达成交易的商品/服务进行评价。用户的评价内容应当客观真实，不应包含任何污言秽语、色情低俗、恶意贬低及法律法规与本协议列明的其他禁止性信息；用户不应以不正当方式帮助商家提升销量、信用或利用评价权利对相关商家进行恐吓、敲诈勒索等违法行为。小红书可按照本协议及相关法律法规的规定对用户实施上述行为所产生的评价信息进行删除或屏蔽</em>',
                num: "6.5"
            }],
            ifOne: !1,
            chineseNum: "三"
        }, {
            title: "知识产权",
            content: "<em>本公司在“小红书”软件及相关服务中提供的内容（包括但不限于软件、技术、程序、网页、文字、图片、图像、商标、标识、音频、视频、图表、版面设计、电子文档等）的知识产权属于本公司所有。同时本公司提供服务所依托的软件的著作权、专利权、商标及其他知识产权均归本公司所有。未经本公司许可，任何人不得擅自使用（包括但不限于通过任何机器人、蜘蛛等程序或设备监视、复制、传播、展示、镜像、上载、下载“小红书”软件及相关服务中的内容）。</em>",
            ifOne: !0,
            chineseNum: "四"
        }, {
            title: "用户授权及隐私保护",
            content: [{
                main: "<em>您理解并承诺，您在使用小红书软件及相关服务时发布上传的内容（包括但不限于文字、图片、视频、音频等各种形式的内容及其中包含的文字、音乐、声音、台词、视觉设计等所有组成部分）均由您原创或已获合法授权（且含转授权）。您通过小红书上传、发布所产生内容的知识产权归属您或原始著作权人所有。</em>",
                num: "1"
            }, {
                main: "<em>用户知悉、理解并同意其通过小红书发布上传的内容（包括但不限文字，图片，视频，音频等各种形式的内容及其中包括的文字、音乐、声音、台词、视觉设计、对话等所有组成部分），授权本公司及其关联公司、控制公司可在全球范围内、免费、非独家、可转授权地使用，使用范围包括但不限于在当前或其他网站、应用程序、产品或终端设备等，您在此确认并同意，上述授予的权利包括在与上述内容、小红书软件及相关服务、公司和/或公司品牌有关的任何宣传、推广、广告、营销和/或研究中使用和以其他方式开发内容（全部或部分）的权利和许可。为避免疑义，您理解并同意，上述授予的权利包括使用、复制和展示您拥有或被许可使用并植入内容中的个人形象、肖像、姓名、商标、服务标志、品牌、名称、标识和公司标记（如有）以及任何其他品牌、营销或推广资产、物料、素材等的权利和许可。</em>",
                num: "2"
            }, {
                main: "<em>用户确认并同意授权本公司以公司名义或委托专业第三方对侵犯用户上传发布的享有知识产权的内容进行代维权，维权形式包括但不限于：监测侵权行为、发送维权函、提起诉讼或仲裁、调解、和解等，本公司有权对维权事宜做出决策并独立实施。</em>",
                num: "3"
            }, {
                main: "保护用户隐私是小红书的一项基本政策，小红书保证不对外公开或向第三方提供用户注册资料及用户在使用本网站服务时存储在小红书的非公开内容，但下列情况除外：",
                num: "4",
                add: ["（1）事先获得用户的明确授权；", "（2）根据有关的法律法规要求；", "（3）按照相关政府主管部门的要求；", "（4）为维护社会公众的利益；", "（5）维护小红书的合法权益。"]
            }, {
                main: "在获得您授权的情况下，小红书可能会与第三方合作向用户提供相关的服务，在此情况下，如该第三方同意承担与小红书同等的保护用户隐私的责任，则小红书可将用户的注册资料等提供给该第三方。",
                num: "5"
            }, {
                main: "在不透露单个用户隐私资料的前提下，小红书有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。",
                num: "6"
            }, {
                main: "小红书将采取先进的技术手段、严密的内控制度等保护用户的隐私信息，关于用户隐私信息的收集、使用、存储及披露等，详见《小红书用户隐私政策》。",
                num: "7"
            }, {
                main: "用户关注信息公开：小红书提供的某些服务项目中有“关注”功能，用户选择“关注”后，可以在“我的关注”中查看自己关注的信息，包括关注的“用户”、“商家”、“标签”、“专辑”等，用户须知，小红书平台对用户关注的项目是公开的，即其他用户可以查看到该用户关注的项目。另外用户可以在“设置”-“隐私设置”中调整“评论设置”、“通讯录设置”“微博设置”等，自行调整评论、以及添加好友的方式等。",
                num: "8"
            }, {
                main: "用户可以向小红书申请注销账户。<em>用户注销账户后，小红书将停止为其提供产品/服务，并依据用户的要求，除法律法规另有规定外，小红书将删除其在小红书平台上的个人信息。</em>",
                num: "9"
            }],
            ifOne: !1,
            chineseNum: "五"
        }, {
            title: "免责声明",
            content: [{
                main: "用户将照片、个人信息等资料上传到互联网上，有可能会被其他组织或个人复制、转载、擅改或做其它非法用途，用户必须充分意识此类风险的存在。<em>用户明确同意其使用小红书服务所存在的风险（包括但不限于受到第三方侵权或对第三方造成侵权）完全由其自己承担；因其使用小红书服务而产生的一切后果也由其自己承担，小红书对此不承担任何责任。</em>",
                num: "1"
            }, {
                main: "<em>小红书不担保本网站服务一定能满足用户的要求，也不担保本网站服务不会中断，对本网站服务的及时性、安全性、准确性、真实性、完整性也都不作担保。</em>",
                num: "2"
            }, {
                main: "<em>对于因不可抗力或小红书不能控制的原因造成的本网站服务中断或其它缺陷，小红书不承担任何责任，但小红书将尽力减少因此而给用户造成的损失和影响。</em>",
                num: "3"
            }, {
                main: "<em>根据有关法律法规，小红书在此郑重提请用户注意，小红书作为信息存储空间及网络交易平台的提供者，任何经由本网站以上载、张贴、发送电子邮件或任何其它方式传送的资讯、资料、文字、软件、音乐、音讯、照片、图形、视讯、信息或其它资料（以下简称“内容”），无论系公开还是私下传送，均由内容提供者承担责任。小红书无法控制经由本网站传送之内容，因此不保证内容的正确性、完整性或品质。在任何情况下，小红书均不为任何内容负责，包含但不限于任何内容之任何错误或遗漏，以及经由本网站服务以张贴、发送电子邮件或其它方式传送任何内容而衍生之任何损失或损害。但小红书有权依法停止传输任何前述内容并采取相应行动，包括但不限于暂停用户使用本网站服务的全部或部分，保存有关记录，并向有关机关报告。</em>",
                num: "4"
            }, {
                main: "<em>小红书作为网络服务提供者，对非法转载，虚假发布、盗版行为的发生不具备充分的监控能力。小红书对他人在网站上实施的此类侵权行为不承担法律责任，侵权的法律责任概由本人承担。</em>",
                num: "5"
            }],
            ifOne: !1,
            chineseNum: "六"
        }, {
            title: "违约责任",
            content: [{
                main: "针对用户违反本协议或其他服务条款的行为，本公司有权独立判断并视情况采取预先警示、拒绝发布、立即停止传输信息、删除跟帖、短期禁止发言、限制账号部分或者全部功能直至永久关闭账号等措施。本公司有权公告处理结果，且有权根据实际情况决定是否恢复使用。对涉嫌违反法律法规、涉嫌违法犯罪的行为将保存有关记录，并依法向有关主管部门报告、配合有关主管部门调查。",
                num: "1"
            }, {
                main: "因用户违反本协议或其他服务条款规定，引起第三方投诉或诉讼索赔的，用户应当自行承担全部法律责任。因用户的违法或违约行为导致公司及其关联公司、控制公司向任何第三方赔偿或遭受国家机关处罚的，用户还应足额赔偿公司及其关联公司、控制公司因此遭受的全部损失。",
                num: "2"
            }],
            ifOne: !1,
            chineseNum: "七"
        }, {
            title: "未成年人使用条款",
            content: [{
                main: "若用户是未满18周岁的未成年人，应在监护人监护、指导并获得监护人同意情况下阅读本协议和使用小红书相关服务。",
                num: "1"
            }, {
                main: "本公司重视对未成年人个人信息的保护，未成年用户在填写个人信息时，请加强个人保护意识并谨慎对待，请在监护人指导时正确使用小红书相关服务。",
                num: "2"
            }, {main: "未成年用户理解如因用户违反法律法规、本协议内容，则用户及用户的监护人应依照法律规定承担因此而导致的一切后果。", num: "3"}],
            ifOne: !1,
            chineseNum: "八"
        }, {
            title: "协议修改",
            content: [{
                main: "<em>小红书有权根据法律、国家有权机构或公司经营要求修改本协议的有关条款，小红书将会通过适当方式在网站上予以公示。</em>",
                num: "1"
            }, {main: "如果不同意小红书对本协议相关条款所做的修改，用户有权停止使用本网站服务。如果用户继续使用本网站服务，则视为用户接受小红书对本协议相关条款所做的修改。", num: "2"}],
            ifOne: !1,
            chineseNum: "九"
        }, {
            title: "法律管辖适用及其他",
            content: [{
                main: "<em>如您与本公司就本协议的订立、执行和解释及争议的解决均应适用中华人民共和国（不包括香港、澳门特别行政区，以及台湾地区）法律。如双方就本协议内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均应向上海市黄浦区人民法院提起诉讼。</em>",
                num: "1"
            }, {main: "<em>如果本协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。</em>", num: "2"}],
            ifOne: !1,
            chineseNum: "十"
        }], Pr = {
            data: function () {
                return {agreementData: Lr, changefix: !0}
            }, methods: {
                jump: function (t) {
                    return "#".concat(t)
                }, listPositive: function (t) {
                    t > 10 && (this.changefix = !1)
                }
            }
        }, Mr = (n(751), n(752), {
            name: "media", data: function () {
                return {bannerUrl: ""}
            }, components: {
                RegistrationAgreement: Object(O.a)(Pr, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "registration-item"}, [n("div", {staticClass: "inner"}, [n("div", {
                        staticClass: "left-nav",
                        class: {isFixed: t.changefix}
                    }, [n("h2", {staticClass: "title"}, [t._v("小红书用户服务协议")]), t._v(" "), t._l(t.agreementData, (function (e, r) {
                        return n("a", {
                            key: r, staticClass: "list", attrs: {href: t.jump(r)}, on: {
                                click: function (e) {
                                    return t.listPositive(r)
                                }
                            }
                        }, [t._v(t._s(e.title))])
                    }))], 2), t._v(" "), n("div", {staticClass: "right-content"}, [n("h2", {staticClass: "title"}, [t._v("小红书用户服务协议")]), t._v(" "), t._l(t.agreementData, (function (e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "content",
                            attrs: {id: r, index: r}
                        }, [n("h4", {staticClass: "short-nav"}, [n("span", [t._v(t._s(e.chineseNum) + ".")]), t._v(t._s(e.title))]), t._v(" "), e.ifOne ? n("p", {
                            staticClass: "test",
                            domProps: {innerHTML: t._s(e.content)}
                        }) : t._l(e.content, (function (e, i) {
                            return n("p", {
                                key: i,
                                staticClass: "test"
                            }, [t._v("\n        " + t._s(r + 1) + "."), n("span", {staticClass: "num"}, [t._v(t._s(e.num))]), n("span", {domProps: {innerHTML: t._s(e.main)}}), t._v(" "), t._l(e.add, (function (e) {
                                return n("span", {key: e, staticClass: "add", domProps: {innerHTML: t._s(e)}})
                            }))], 2)
                        }))], 2)
                    }))], 2)])])
                }), [], !1, null, "2fe98d4a", null).exports
            }
        }), Rr = Object(O.a)(Mr, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("registration-agreement")], 1)
        }), [], !1, null, "cd06bd4a", null).exports, Br = {
            name: "ContentDispute", data: function () {
                return {list: ["小红书声明", "侵权投诉受理案由", "侵权通知程序", "反通知程序", "初步证明材料", "申诉材料", "联系方式", "投诉注意事项"]}
            }
        }, Dr = (n(753), Object(O.a)(Br, (function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("div", {staticClass: "inner"}, [n("div", {staticClass: "left-nav"}, [n("h2", {staticClass: "title"}, [t._v("侵权投诉指引")]), t._v(" "), t._l(t.list, (function (e, r) {
                return n("a", {key: r, staticClass: "list", attrs: {href: "#part" + r}}, [t._v(t._s(e))])
            }))], 2), t._v(" "), t._m(0)])])
        }), [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "right-content"}, [n("p", [n("br"), t._v("\n        2020.10.21\n      ")]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part0"}
            }, [t._v("一. 小红书声明")]), t._v(" "), n("p", [t._v("\n        “小红书”为中立的平台服务提供方，仅为用户提供信息存储空间，“小红书”不对用户及商家在平台上发表、转载的内容提供任何形式的保证。根据《侵权责任法》、《信息网络传播权保护条例》及其他相关法律法规的规定，“小红书”特制定本侵权投诉指引，任何第三方（包括但不限于个人、公司、企业、社会团体等）认为平台上的笔记/商品/服务存在侵犯其合法权益的内容，均可按照本指引向“小红书”发起书面投诉。\n      ")]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part1"}
            }, [t._v("二. 侵权投诉受理案由")]), t._v(" "), n("p", [t._v("“小红书”为中立的平台服务提供方，受理下列三大类侵权投诉，共计九种案由：")]), t._v(" "), n("ol", [n("li", [t._v("侵犯自然人人身权益的情形，包括：名誉中伤、肖像权及隐私泄露、假冒个人身份；")]), t._v(" "), n("li", [t._v("\n          侵犯知识产权的情形，包括：商标（"), n("strong", [t._v("含假冒伪劣")]), t._v("）、专利、著作权（"), n("strong", [t._v("含定向搬运内容的假账号投诉")]), t._v("）、商业秘密；\n        ")]), t._v(" "), n("li", [t._v("\n          其他侵犯企业合法权益的情形，包括："), n("strong", [t._v("商誉诋毁、")]), t._v("假冒企业身份（非注册商标）。\n        ")])]), t._v(" "), n("p", [t._v("对于不属于侵权投诉范畴内的违法违规内容，建议通过小红书App举报功能进行反馈。")]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part2"}
            }, [t._v("三. 侵权通知程序")]), t._v(" "), n("p", [t._v("\n        如权利人认为“小红书”平台上的用户笔记、商城商品或服务等内容侵犯了其合法个人权益、企业权益的，请按照以下流程及要求向“小红书”发起书面投诉。\n      ")]), t._v(" "), n("ol", [n("li", [t._v("\n          权利人下载\n          "), n("a", {attrs: {href: "https://fe-video-qc.xhscdn.com/af9af334b89f0e5d67560d97becd78a1e71a012e.docx"}}, [t._v("侵权投诉通知书.docx")]), t._v("\n          ，按照表中要求填写信息并准备初步证明材料（按照第五项标准）。\n        ")]), t._v(" "), n("li", [t._v("\n          将填写完的\n          "), n("a", {attrs: {href: ""}}, [t._v("侵权投诉通知书.docx ")]), t._v("及初步证明材料作为附件，以“权利人姓名+投诉案由”为邮件名，发送到第七项标准中指定的邮箱（文件应为打印后盖章/签字的扫描版本；要求冻结、屏蔽、删除的侵权链接的投诉，应提供word或excel附件，并列明准确名称、网页截图及在小红书上的链接地址）。主要的事实、理由、被投诉目标以及相应请求，请在邮件正文中予以撰写清楚。\n        ")]), t._v(" "), n("li", [t._v("\n          “小红书”收到材料后会进行形式审核。对于符合要求的投诉予以处理，对于案由不明、材料不符或其他不符合要求的情况，“小红书”不予受理，直至权利人补充完整资料。“小红书”正式受理投诉之后，会对材料内容进行表面审核并作出审核结果。如投诉审核通过，“小红书”会采取相应措施防止损害进一步扩大。\n        ")]), t._v(" "), n("li", [t._v("\n          “小红书”在审查过程中有权视具体情况要求权利人提供或补充相应材料，权利人应在“小红书”设定的合理期限内予以答复或补充，期满未作答复或补充的，视为权利人撤回投诉。权利人也可主动在转发【原投诉邮件】基础上要求撤回投诉。无论是权利人主动撤回还是被视为撤回，“小红书”有理由认为原被投诉的侵权情况自始不存在。若在“小红书”对被投诉内容进行了处理之后权利人要求撤回投诉的，小红书可以准许，但就相同事实理由不再接受权利人的新投诉。\n        ")])]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part3"}
            }, [t._v("四. 反通知程序")]), t._v(" "), n("p", [t._v("\n        投诉人应知晓，当“小红书”根据投诉人的申请及证明材料，自主决定采取冻结、屏蔽、删除等合理处置措施，随后会将通知及相关措施告知“小红书”的被投诉用户或商家。\n      ")]), t._v(" "), n("p", [t._v("\n        如“小红书”被投诉用户或商家认为其行为并未侵犯他人的合法权益，请在接到通知后的5个工作日内，按照以下流程及要求向“小红书”发起申诉。\n      ")]), t._v(" "), n("ol", [n("li", [t._v("\n          被投诉用户或商家下载"), n("a", {attrs: {href: ""}}, [t._v("未侵权声明.docx")]), t._v("，按照表中要求填写并准备申诉材料（按照第六项标准）。\n        ")]), t._v(" "), n("li", [t._v("\n          将填写完的"), n("a", {attrs: {href: ""}}, [t._v("未侵权声明.docx")]), t._v("及申诉材料作为附件，以“申诉人姓名+申诉案由”\n          为邮件名，发送到第七项标准中指定的邮箱。\n        ")]), t._v(" "), n("li", [t._v("\n          “小红书”接到声明后会及时进行审核，同时将该声明转送至投诉人。若审核后认为被投诉用户或商家申诉理由充分、证据材料充足，“小红书”将视情况决定是否解除前述合理处置措施，并告知投诉人可以向有关主管部门投诉或者向人民法院起诉。在声明转达至投诉人后十五日内，“小红书”未收到权利人已经起诉或者起诉通知的，可解除前述合理处置措施。\n        ")])]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part4"}
            }, [t._v("五. 初步证明材料")]), t._v(" "), n("p", [t._v("\n        符合要求的侵权投诉通知，除上述提及的"), n("a", {attrs: {href: ""}}, [t._v("侵权投诉通知书.docx ")]), t._v("中填写的电话、邮箱、地址应为有效的联系方式，且投诉人应保持通信畅通。如因权利人或代理人提供的联系方式不准确或有遗漏，无法及时收到反馈结果，由权利人或代理人自行承担不利后果。\n            ")]), t._v(" "), n("li", [n("strong", [t._v("小红书暂不接受除中文以外语言的投诉。外文投诉文件请附上中文翻译，小红书将以其中文翻译内容为准。We\n                do not accept any complaint in languages other than Chinese. Please attach a\n                Chinese translation to the complaint document in foreign language, and the Chinese\n                translation will prevail.\n              ")])]), t._v(" "), n("li", [n("strong", [t._v("鉴于“小红书”在收到投诉/申诉材料后，将视情况转呈争议另一方，故所有文件请自行添加水印。")])])])])]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part5"}
            }, [t._v("六. 申诉材料")]), t._v(" "), n("ol", [n("li", [t._v("\n          被冻结、屏蔽、删除的侵权链接的被投诉方的姓名（名称）、地址及营业执照（单位）、身份证明（个人）、联系方式等；\n        ")]), t._v(" "), n("li", [t._v("\n          要求恢复的被冻结、屏蔽的侵权链接的准确名称、网页截图及在小红书上的链接地址（于word或excel附件中列明）；\n        ")]), t._v(" "), n("li", [t._v("\n          认为不构成侵权的初步证明材料\n          "), n("ul", [n("li", [t._v("\n              权属证明材料：包括但不限于对被冻结、屏蔽的侵权链接享有知识产权或使用权、信息网络传播权等权属证明、创作手稿、经权威机构签发的作品创作时间戳、作品备案证书、授权书等能证明被投诉方拥有相关权利的有效权属证明；\n            ")]), t._v(" "), n("li", [t._v("\n              被投诉方提供的笔记/商品/服务未构成侵权的理由陈述：针对投诉理由的直接驳斥，包括对事实的否认、相关法律法规的说明等。\n            ")]), t._v(" "), n("li", [t._v("\n              被投诉方提供的笔记/商品/服务未构成侵权的证明材料：包括但不限于被投诉方提供的笔记/商品/服务等未侵犯权利人的人身权、著作权、商标权或专利权等权利的有效证明材料。\n            ")])])]), t._v(" "), n("li", [t._v("\n          被投诉方的保证：被投诉方应对\n          "), n("a", {attrs: {href: "https://fe-video-qc.xhscdn.com/df2593f1f1b13bb3a6141a4f781623b810fa45d5.docx"}}, [t._v("未侵权声明.docx ")]), t._v("中的陈述和所提供材料的真实性、有效性和合法性负责，保证承担因被投诉方的答辩而恢复被投诉笔记/商品/服务给小红书造成的全部损失及由此产生的全部法律责任。\n        ")]), t._v(" "), n("li", [t._v("如委托他人进行申诉，还应提供合法有效的授权委托书及受托人的身份证明文件。")]), t._v(" "), n("li", [t._v("\n          被投诉方应提供经过亲笔签名或加盖公章的\n          "), n("a", {attrs: {href: ""}}, [t._v("未侵权声明.docx ")]), t._v("扫描件，否则小红书将不予受理。\n        ")])]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part6"}
            }, [t._v("七. 联系方式")]), t._v(" "), n("p", [t._v("\n        为高效解决侵权问题，“小红书”建议权利人可以直接与对方协商解决，当您无法联系或协商无效，您可以通过如下入口提交投诉：\n      ")]), t._v(" "), n("ol", [n("li", [t._v("\n          关于社区用户或笔记侵权，请将侵权投诉通知书及初步证明材料发送至\n          "), n("a", {attrs: {href: "mailto:shuduizhang@xiaohongshu.com"}}, [t._v("shuduizhang@xiaohongshu.com ")]), t._v("；\n        ")]), t._v(" "), n("li", [t._v("\n          关于商城商品或服务侵权，请将侵权投诉通知书及初步证明材料发送至\n          "), n("a", {attrs: {href: """}}, [t._v("qinquan@xiaohongshu.com")]), t._v(""        ")])]), t._v(" "), n("strong", {
                staticClass: "title",
                attrs: {id: "part7"}
            }, [t._v("八. 投诉注意事项")]), t._v(" "), n("ol", [n("li", [t._v("\n          为保证投诉的问题能够及时有效的解决，请按照该指引的要求提供真实有效、完整清晰的材料，否则投诉不予处理。\n        ")]), t._v(" "), n("li", [t._v("\n          投诉人应保证所提交的材料都是真实、有效和合法的，并承担要求“小红书”冻结、屏蔽、删除相关侵权链接所引起的一切法律后果和连带责任。\n        ")]), t._v(" "), n("li", [t._v("\n          “小红书”有权利和义务在法律法规规定及审核人员的认知水平、能力范围内，对投诉人的投诉作出判断、处理和答复。“小红书”不对投诉人的投诉是否得到某种结果作出任何形式的承诺或保证。\n        ")]), t._v(" "), n("li", [t._v("在法律规定的范围内，“小红书”有权修改本指引。")])]), t._v(" "), n("p", [t._v(" ")])])
        }], !1, null, "2c3494e1", null).exports), Ur = [{
            title: null,
            content: "消费者在订单交易完成后，消费者可基于真实的交易在交易成功后90天内使用评价工具包括商城评价工具和社区笔记发布工具（即小红薯怎么说）发布与交易的商品或服务相关的信息，为其他消费者在购物决策和商家经营决策提供参考。若超过90天，评价功能自动关闭。",
            ifMom: !1,
            chineseNum: "1"
        }, {title: null, content: "评价包括“店铺评分”和“评论内容”，“评论内容”包括“文字评论”和“图片评论”。", ifMom: !1, chineseNum: "2"}, {
            title: null,
            content: "店铺评分由消费者对商家作出，包括描述相符、商家态度、发货速度三项。",
            ifMom: !1,
            chineseNum: "3"
        }, {title: null, content: "消费者可在作出店铺评分后追加评论，追加评论的内容一旦发布，不得修改。", ifMom: !1, chineseNum: "4"}, {
            title: null,
            content: "为确保评价内容能为消费者购物决策提供可靠的依据，反映商品或服务的真实情况，交易双方通过小红书评价工具发布评价的，其评价应当与交易的商品或服务具有关联性，且合法、客观、真实，买卖双方不得利用小红书评价工具侵害相关方合法权益。",
            ifMom: !1,
            chineseNum: "5"
        }, {
            title: null,
            content: {
                main: "小红书将基于有限的技术手段，对以下不当使用评价工具发布与评价原则不符的行为作出处理，包括屏蔽评论内容、评分不累计等处理措施：",
                add: [{
                    content: "发布违禁信息、骗取他人财物、虚假交易、滥发信息等违规行为所涉及的交易；",
                    ifOne: !0,
                    chineseNum: "（一）"
                }, {
                    content: "消费者、同行竞争者等被发现以给予负面评论内容等方式谋取额外财物或其它不当利益的恶意行为所对应的交易；",
                    ifOne: !1,
                    chineseNum: "（二）"
                }, {
                    content: "包含辱骂、泄露信息、污言秽语、广告信息、无实际意义信息、色情低俗内容或其他有违公序良俗的评论内容的交易；",
                    ifOne: !1,
                    chineseNum: "（三）"
                }, {content: "评价内容与商品无关的；", ifOne: !1, chineseNum: "（四）"}, {
                    content: "未经他人同意，涉及使用他人图片或将他人图片进行编辑后发布的评价内容；",
                    ifOne: !1,
                    chineseNum: "（五）"
                }, {content: "小红书排查到的其他异常的交易或不允许的情况。", ifOne: !1, chineseNum: "（六）"}],
                extra: {content: "若小红书发现消费者评价出现上述情况的，将对违规用户采取身份验证、屏蔽评论内容、评分不累计、限制违规/异常交易的评价工具使用 、限制消费者行为等处理措施。"}
            },
            ifMom: !0,
            chineseNum: "6"
        }, {title: null, content: "小红书可基于消费者体验、店铺经营及平台运营需要，调整小红书评价工具适用范围或相关计算逻辑，每次调整将提前公示。", ifMom: !1, chineseNum: "7"}],
        $r = {
            data: function () {
                return {agreementData: Ur, changefix: !0}
            }, methods: {
                jump: function (t) {
                    return "#".concat(t)
                }, listPositive: function (t) {
                    t > 10 && (this.changefix = !1)
                }
            }
        }, qr = (n(754), n(755), {
            name: "media", data: function () {
                return {reportData: [], bannerUrl: ""}
            }, components: {
                RatingPolicy: Object(O.a)($r, (function () {
                    var t = this, e = t.$createElement, n = t._self._c || e;
                    return n("div", {staticClass: "rating-item"}, [n("div", {staticClass: "inner"}, [n("div", {staticClass: "right-content"}, [n("h2", {staticClass: "title"}, [t._v("小红书评价规则")]), t._v(" "), t._l(t.agreementData, (function (e, r) {
                        return n("div", {
                            key: r,
                            staticClass: "content",
                            attrs: {id: r, index: r}
                        }, [e.ifMom ? n("p", {staticClass: "test"}, [n("span", {staticClass: "short-nav"}, [t._v(t._s(e.chineseNum) + "、")]), t._v(" "), n("span", [t._v(t._s(e.content.main))]), t._v(" "), t._l(e.content.add, (function (e, r) {
                            return n("span", {
                                key: r,
                                staticClass: "add"
                            }, [t._v("\n            " + t._s(e.chineseNum)), n("span", [t._v(t._s(e.content))])])
                        })), t._v(" "), n("span", [t._v(t._s(e.content.extra.content))])], 2) : n("p", {staticClass: "test"}, [n("span", {staticClass: "short-nav"}, [t._v(t._s(e.chineseNum) + "、")]), t._v("\n          " + t._s(e.content) + "\n        ")])])
                    }))], 2)])])
                }), [], !1, null, "7481752a", null).exports
            }
        }), Fr = Object(O.a)(qr, (function () {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", [e("rating-policy")], 1)
        }), [], !1, null, "9204f996", null).exports,
        Xr = [{content: "亲爱的小红薯们，欢迎来到红薯地！为打造真实、向上、多元的社区氛围，希望小红薯们可以遵守规范，共同维护我们的社区环境。"}, {
            title: "价值观",
            num: "一、",
            content: "小红书倡导用户发布符合当代社会主流价值观的内容。",
            bullets: ["遵守宪法和法律法规", "践行社会主义核心价值观", "弘扬爱国主义、集体主义和社会主义", "传播正确的历史观、民族观、国家观和文化观", "弘扬中华民族优秀传统文化", "弘扬社会公德、职业道德、家庭和个人美德，尊重公序良俗", "弘扬科学精神、普及科学知识", "提倡积极健康向上的时代风尚和生活方式"]
        }, {
            title: "法律法规",
            num: "二、",
            content: "小红书对于社区内违反法律法规、危害国家及社会安全的行为，将采用最严格的管理办法，予以杜绝。",
            terms: [{
                title: "遵守基本准则",
                num: "(一)",
                content: "小红书平台禁止发布和传播包含下列信息的内容：",
                bullets: ["违反宪法所确定的基本原则的", "危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的", "损害国家荣誉和利益的，如损害国旗国徽形象的", "煽动民族仇恨、民族歧视，破坏民族团结的", "破坏国家宗教政策，宣扬邪教和封建迷信的", "散布谣言，扰乱社会秩序，破坏社会稳定的", "散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的", "侮辱或者诽谤他人，侵害他人合法权益的", "宣扬恐怖主义、极端主义或者煽动实施恐怖活动、极端主义活动的", "侮辱滥用英烈形象，否定歪曲英烈事迹，美化或粉饰侵略者和侵略战争行为的", "攻击诋毁党和国家领导人，捏造领导人负面信息，滥用领导人形象的", "违背公序良俗的内容，如低俗婚闹等", "含有法律、行政法规禁止的其他内容的"]
            }, {
                title: "保护未成年人合法权益",
                num: "(二)",
                content: "为更好地承担保护未成年人合法权益的社会责任，小红书平台设立青少年模式。在该模式下限制浏览内容和使用时长、禁止直播打赏和充值功能，对其他不利于未成年人身心健康的内容加以严肃处理，包括但不限于以下内容：",
                bullets: ["涉及未成年人色情低俗的，如展示未成年人婚育、性侵害等", "涉及未成年人暴力欺凌的，如施暴犯罪、残害体罚、校园欺凌等", "涉及披露未成年人隐私的，如展示未成年人性器官，公开个人隐私等", "涉及未成年人不良行为的，如宗教传授、饮酒吸烟、邪典动画等", "涉及规避未成年人系统监管的，如故意规避防沉迷、青少年模式的方法攻略", "其他危害未成年人安全和健康的相关内容"]
            }, {
                title: "抵制一切违法信息",
                num: "(三)",
                bullets: [{
                    title: "禁止传播违法内容",
                    content: ["<br>a.涉及违禁物品，包括但不限于：毒品、违禁药物、违法工具等，如大麻、鸦片、处方药物、投资理财产品、假币、枪支、烟草、爆炸物、翻墙软件、外挂程序等其他内容", "<br>b.涉及违禁活动，包括但不限于：有关传销、胎儿性别鉴定、售卖假货等其他内容"]
                }, {
                    title: "禁止发布欺诈或赌博信息",
                    content: ["<br>a.发布欺诈信息，如假冒官方客服、正规网站，以短信、站内私信或链接等形式提示虚假中奖信息，设计“杀猪盘”类欺诈行为等", "<br>b.提供赌博交易平台信息或赌博性质类服务，如赌博平台链接、币商、中介、游戏币回收等", "<br>c.涉及赌博技巧、赌博器具等赌博内容，如老虎机、透视扑克等"]
                }]
            }, {
                title: "抵制一切色情低俗内容",
                num: "(四)",
                content: "禁止发布、传播的信息包括但不限于：",
                bullets: ["直接暴露和描写人体性部位的内容", "表现或隐晦表现性行为、具有挑逗性或者侮辱性的内容", "以带有性暗示、性挑逗的语言描述性行为、性过程、性方式的内容", "全身或者隐私部位未着衣物，仅用肢体掩盖隐私部位的内容", "带有侵犯个人隐私性质的走光、偷拍、漏点等内容", "以庸俗和挑逗性标题吸引点击的内容", "相关部门禁止传播的色情和有伤社会风化的文字、音视频内容，包括一些电影的删节片段", "传播一夜情、换妻、性虐待等的有害信息", "情色动漫、小说", "宣扬暴力、恶意谩骂、侮辱他人等的内容", "非法的性药品广告和性病治疗广告等相关内容", "恶意传播侵害他人隐私的内容", "推介淫秽色情网站和网上低俗信息的链接、图片、文字等内容"]
            }]
        }, {
            title: "交易及导流行为",
            num: "三、",
            content: "小红书禁止售卖高风险类内容，且不鼓励发布营销或导流的信息，包括但不限于以下内容：",
            terms: [{
                title: "交易行为",
                num: "(一)",
                bullets: ["发布售卖高风险类的相关内容，如医美整形、医疗器械等", "发布其他具有营销倾向的内容，如代购、转卖、拼单等"]
            }, {title: "导流行为", num: "(二)", bullets: ["发布导流到个人的联系方式，如手机号、微信号、邮箱、地址等", "发布导流到其他平台的联系方式，如网址链接、二维码、水印等"]}]
        }, {
            title: "不当行为",
            num: "四、",
            content: "小红书不鼓励发布不友好、欺骗或危险行为的内容，禁止任何作弊信息及行为，包括但不限于以下内容：",
            terms: [{
                title: "不友好内容",
                num: "(一)",
                bullets: ["发布含人身攻击、骚扰他人的内容，如辱骂、侮辱、恶意引战、故意骚扰等", "发布含不文明的行为，如禁烟场所吸烟、妨碍导盲犬、随地吐痰等", "发布严重影响用户体验的内容，如首图血腥恐怖、标题党、图文不符等"]
            }, {
                title: "欺骗行为",
                num: "(二)",
                bullets: ["编造公众人物的社会谣言，如绝症、去世或其他有违事实的信息", "发布违背科学常识的内容，如在食品安全、健康养生等领域发布已被官方或权威机构辟谣的内容"]
            }, {
                title: "危险行为",
                num: "(三)",
                bullets: ["易引人模仿的危险行为，如危险驾驶车辆，不当使用明火、干扰电梯等", "无安全提示、无防护措施的危险行为，如无提示的极限运动、无防护措施的高空行为等"]
            }, {
                title: "作弊行为",
                num: "(四)",
                content: "小红书严厉打击利用虚假流量获取不当利益的作弊行为，包括但不限于以下内容：",
                bullets: [{
                    title: "刷量行为",
                    content: ["<br>a.通过任何渠道购买刷量服务，进行笔记代写代发、点赞、收藏、评论等行为", "<br>b.使用虚假设备或篡改设备信息来进行笔记发布、点赞、收藏、评论等行为", "<br>c.操控多个小红书账号批量发布笔记，或进行大量点赞、收藏、评论、关注、刷搜索词等行为", "<br>d.建立或参与互粉互赞群，通过互刷来提高自身流量的行为", "<br>e.通过私信、评论、笔记等渠道灌水，发布大量恶意重复的营销内容"]
                }, {
                    title: "诱导欺骗行为",
                    content: ["<br>a.通过利益诱导用户进行点赞、关注、收藏、评论等行为，如“关注账号领红包”、在群聊内发红包对指定笔记虚假互动等", "<br>b.用户通过对已有高热度的笔记进行恶意修改，替换或插入营销内容来牟取利益", "<br>c.恶意陷害其他用户，如对竞争对手的笔记刷量后恶意举报"]
                }]
            }]
        }, {
            title: "侵权行为",
            num: "五、",
            content: "小红书禁止一切侵犯他人合法权益的行为，如模仿冒充、抄袭搬运，包括但不限于以下内容：",
            terms: [{
                title: "姓名权、肖像权、名誉权及隐私权",
                num: "(一)",
                bullets: ["未经授权使用信息，冒充他人注册账号或使用他人名称、头像等", "通过发布不实言论，散播虚假信息，损害他人名誉、商誉的内容，如他人的感情生活、商业负面等", "未经授权发布他人身份证号码、家庭住址、病史、财产信用状况等个人隐私资料"]
            }, {
                title: "知识产权及其他权利",
                num: "(二)",
                bullets: ["未经他人授权，发布内容侵犯他人著作权权益，如视频，照片，图文等", "侵犯他人已经登记注册的企业名称、商标、商号、商品装潢等", "未经他人授权，发布内容侵犯他人专利权权益，如许诺销售等", "未经授权披露商业机密或其他保密信息的内容", "发布内容用以蓄意传播假冒伪劣商品信息"]
            }]
        }, {
            title: "社区处罚管理规范",
            num: "六、",
            content: "违规内容处理方式包括：",
            bullets: [{
                title: "内容处理",
                content: ["<br>a.扣除作弊数据", "<br>b.限制展示范围", "<br>c.禁止展示", "<br>d.依法追究法律责任"]
            }, {
                title: "账号处理",
                content: ["<br>a.限制账号功能，如：作弊账号无法申请为创作者", "<br>b.限制展示范围", "<br>c.账号禁言", "<br>d.账号封禁", "<br>e.依法追究法律责任"]
            }]
        }, {
            title: "友情链接",
            num: "七、",
            bullets: ['商业推广笔记：<a href="" target="_blank">《推广笔记社区规范》</a>', '企业号：<a href="" target="_blank">《企业号社区规范》</a>'],
            sufContent: '当小红薯违反社区规范，小红书平台将对违规内容和用户做相应处理及通知。对处理结果有任何异议，均可通过APP-<a href="" target="_blank">帮助与客服</a>-笔记/账号申诉进行反馈。<br><br>同时，维护社区环境离不开各位小红薯的共同努力，我们欢迎小红薯们对任何可能违规的内容进行一键举报。<br><br>小红书平台将根据法律法规和社区管理经验，不断调整和修改社区规范。为维护社区良好氛围，任何有违社区规范或扰乱社区生态秩序的行为，平台有权依据社区规范进行处理。'
        }], zr = {
            name: "Main", data: function () {
                return {
                    rules: Xr,
                    list: [{content: "一、价值观"}, {content: "二、法律法规"}, {content: "三、交易及导流行为"}, {content: "四、不当行为"}, {content: "五、侵权行为"}, {content: "六、社区处罚管理规范"}, {content: "七、友情链接"}]
                }
            }, methods: {
                jump: function (t) {
                    var e = this.$refs["title-".concat(t)];
                    window.scrollTo(0, e[0].offsetTop - 40)
                }
            }
        }, Hr = (n(756), {
            routes: [{
                path: "/",
                component: R,
                children: [{
                    path: "/",
                    name: "Home",
                    alias: "index",
                    component: Me,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {
                    path: "/explore",
                    name: "Explore",
                    component: hn,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {
                    path: "/mobile/tags/:id",
                    name: "KeywordPage",
                    component: An,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {
                    path: "/protocols/community-rule", name: "CommunityRule", component: Object(O.a)(zr, (function () {
                        var t = this, e = t.$createElement, n = t._self._c || e;
                        return n("div", [n("div", {staticClass: "inner"}, [n("div", {staticClass: "left-nav"}, [n("h2", {staticClass: "title"}, [t._v("小红书社区规范")]), t._v(" "), t._l(t.list, (function (e, r) {
                            return n("a", {
                                key: e.id,
                                staticClass: "list",
                                attrs: {href: "#item_" + r}
                            }, [t._v(t._s(e.content))])
                        }))], 2), t._v(" "), n("div", {staticClass: "right-content"}, [n("h2", {staticClass: "title"}, [t._v("小红书社区规范")]), t._v(" "), n("p", {staticClass: "update-date"}, [t._v("更新时间：2020年02月更新")]), t._v(" "), t._l(t.rules, (function (e, r) {
                            return n("div", {
                                key: e.id,
                                staticClass: "content"
                            }, [n("a", {attrs: {name: "item_" + r}}), t._v(" "), e.title ? n("h3", {
                                ref: "title-" + r,
                                refInFor: !0,
                                staticClass: "first-title"
                            }, [t._v(t._s(e.num + e.title))]) : t._e(), t._v(" "), e.content ? n("p", {
                                staticClass: "first-content",
                                domProps: {innerHTML: t._s(e.content)}
                            }) : t._e(), t._v(" "), t._l(e.terms, (function (r) {
                                return e.terms ? n("div", {
                                    key: r.id,
                                    staticClass: "terms-first"
                                }, [r.title ? n("h4", {staticClass: "term-title"}, [t._v(t._s(r.num + r.title))]) : t._e(), t._v(" "), r.content ? n("p", {
                                    staticClass: "term-content",
                                    domProps: {innerHTML: t._s(r.content)}
                                }) : t._e(), t._v(" "), r.bullets && "string" == typeof r.bullets[0] ? n("ul", {staticClass: "bullets"}, t._l(r.bullets, (function (e) {
                                    return n("li", {key: e.id, staticClass: "bullet-li", domProps: {innerHTML: t._s(e)}})
                                })), 0) : r.bullets ? n("ul", {staticClass: "bullets"}, t._l(r.bullets, (function (e) {
                                    return n("li", {
                                        key: e.id,
                                        staticClass: "bullet-li",
                                        domProps: {innerHTML: t._s(e.title + e.content)}
                                    })
                                })), 0) : t._e()]) : t._e()
                            })), t._v(" "), e.bullets && "string" == typeof e.bullets[0] ? n("ul", {staticClass: "bullets"}, t._l(e.bullets, (function (e) {
                                return n("li", {key: e.id, staticClass: "bullet-li", domProps: {innerHTML: t._s(e)}})
                            })), 0) : e.bullets ? n("ul", {staticClass: "bullets"}, t._l(e.bullets, (function (e) {
                                return n("li", {
                                    key: e.id,
                                    staticClass: "bullet-li",
                                    domProps: {innerHTML: t._s(e.title + e.content)}
                                })
                            })), 0) : t._e(), t._v(" "), e.sufContent ? n("p", {
                                staticClass: "first-suf-content",
                                domProps: {innerHTML: t._s(e.sufContent)}
                            }) : t._e()], 2)
                        }))], 2)])])
                    }), [], !1, null, "ecc81f0e", null).exports, meta: {pageview: !1}
                }, {
                    path: "/user/profile/:id",
                    name: "User",
                    component: yn,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {
                    path: "/board/:id",
                    name: "Board",
                    component: wn,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {path: "/brand", name: "Brand", component: Or, meta: {pageview: !1}}, {
                    path: "/discovery/item/:id",
                    alias: "/discovery/item/sgh/:id",
                    name: "NoteView",
                    component: xr,
                    meta: {
                        pageInstance: "organic_growth_page", getTrackerData: function () {
                            return u.tracker[7627]()
                        }
                    }
                }, {path: "/terms", name: "Terms", component: Rr, meta: {pageview: !1}}, {
                    path: "/privacy",
                    name: "Privacy",
                    component: jr,
                    meta: {pageview: !1}
                }, {
                    path: "/content_dispute",
                    name: "ContentDisputeView",
                    component: Dr,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/rating_terms",
                    name: "RatingTerms",
                    component: Fr,
                    meta: {pageview: !1}
                }, {path: "/protocols/about", name: "About", component: he, meta: {pageview: !1}}, {
                    path: "/protocols/news",
                    name: "News",
                    component: wt,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/trophy",
                    name: "Trophy",
                    component: St,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/activities",
                    name: "Activities",
                    component: Et,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/activityitem",
                    name: "ActivityItem",
                    component: Nt,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/reports",
                    name: "Reports",
                    component: Lt,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/liability",
                    name: "Liability",
                    component: xe,
                    meta: {pageview: !1}
                }, {
                    path: "/protocols/liabilityitem",
                    name: "LiabilityItem",
                    component: ke,
                    meta: {pageview: !1}
                }, {path: "*", redirect: "/"}]
            }]
        }), Gr = n(17), Wr = n(23), Vr = n.n(Wr), Jr = n(165), Kr = n.n(Jr);

    function Qr(t) {
        if (this && this.$vnode && this.$ssrContext) {
            var e = {};
            for (var n in t) {
                var r;
                if (n && t[n]) if (Vr()(t[n])) e[n] = In()(r = t[n]).call(r, (function (t) {
                    return Kr()(t)
                })); else if ("object" === Object(Gr.a)(t[n])) for (var i in e[n] = {}, t[n]) t[n].hasOwnProperty(i) && (e[n][i] = Kr()(t[n][i])); else e[n] = Kr()(t[n])
            }
            this.$ssrContext.headInfo = e
        }
    }

    var Yr = {
        name: "insertHeadInfo", install: function (t, e) {
            e.Vue.prototype.$setHeadInfo = Qr
        }, create: function (t, e) {
            e.Vue.prototype.$setHeadInfo = Qr
        }
    }, Zr = {
        name: "chinese", state: {
            releaseTime: "发布时间",
            navBar: {
                home: "首页",
                trending: "社区精选",
                businessCooperation: "业务合作",
                childrenOfBusinessCooperation: {
                    brand: "企业号",
                    advertisement: "推广合作",
                    partnership: "品牌合作人",
                    business: "商家入驻"
                },
                creativeTool: "发布者工具",
                childrenOfCreativeTool: {video: "视频上传", obs: "电脑直播"},
                newsCenter: "新闻中心",
                aboutUs: "关于我们",
                socialResponsibility: "社会责任",
                joinUs: "加入我们",
                videoPost: "视频发布"
            },
            policy: {
                registrationAgreement: "用户协议",
                privacyPolicy: "隐私政策",
                contentDispute: "侵权投诉指引",
                ratingTerms: "",
                communityRule: ""
            },
            home: {ios: "", android: ""},
            newsCenter: {
                more: "",
                showText: {title: ""},
                activitiesTitle: "",
                newsTitle: "",
                trophyTitle: "",
                storiesTitle: "",
                subRoute: {
                    activities: {showText: {title: "近期动态"}},
                    report: {showText: {title: "热门报道"}},
                    trophy: {showText: {title: "公司荣誉"}}
                }
            },
            aboutUs: {
                showText: {title: "关于我们"},
                introduction: {
                    title: "什么是小红书",
                    detail: ["小红书是年轻人的生活方式平台，由毛文超和瞿芳于2013年在上海创立。小红书以“Inspire Lives 分享和发现世界的精彩”为使命，用户可以通过短视频、图文等形式记录生活点滴，分享生活方式，并基于兴趣形成互动。截至到2019年10月，小红书月活跃用户数已经过亿，其中70%用户是90后，并持续快速增长。"]
                },
                officeEnvironment: "公司环境",
                contactUs: "合作邮箱",
                officeAddressTitle: "我们在这里",
                growthTitle: "小红书发展史",
                contactTitle: "更多方式关注小红书"
            },
            liability: {showText: {title: "社会责任"}}
        }, getters: {}, mutations: {}, actions: {}
    }, ti = {
        name: "english", state: {
            releaseTime: "release time",
            navBar: {home: "Home", newsCenter: "News Center", aboutUs: "About Us"},
            policy: {
                registrationAgreement: "Registration Agreement",
                privacyPolicy: "Privacy Policy",
                contentDispute: "Content Dispute Resolution Guide",
                ratingTerms: "Evaluation Guide",
                communityRule: "Community Guidelines"
            },
            home: {ios: "iOS", android: "Android"},
            newsCenter: {
                more: "more",
                showText: {title: "NEWS CENTER", content: ""},
                activitiesTitle: "Latest News",
                trophyTitle: "Achievement and Awards",
                storiesTitle: "User Stories",
                subRoute: {
                    activities: {showText: {title: "Latest News"}},
                    report: {showText: {title: "Most Popular"}},
                    trophy: {showText: {title: "Achievement and Rewards"}}
                }
            },
            aboutUs: {
                showText: {title: "ABOUT US"},
                introduction: {
                    title: "About Xiaohongshu",
                    detail: ["Established in 2013, founded by Charlwin Mao and Miranda Qu, Xiaohongshu is a thriving lifestyle community platform with over 300 million registered users as of July 2019. And 70% of the users are post-90s. Three billion impressions are created on Xiaohongshu daily via a wide variety of media, including photos, texts, and short videos. These touch on all areas of lifestyle, such as cosmetics and beauty, fashion, food, travel, entertainment, reading, fitness, and childcare. ", "Through artificial intelligence and machine learning, Xiaohongshu tailors content recommendations to individual users, incubating new consumer trends. More than 20,000 brands have community accounts on Xiaohongshu. The platform hosts nearly 10,000 third-party e-commerce merchants and offers more than 100,000 different products."]
                },
                officeEnvironment: "Office Environment",
                contactUs: "Contact Us",
                officeAddressTitle: "Office Address",
                growthTitle: "Major Developments",
                contactTitle: "More ways to follow Xiaohongshu"
            },
            liability: {showText: {title: "SOCIAL RESPONSIBILITY"}}
        }, getters: {}, mutations: {}, actions: {}
    }, ei = {modules: {chinese: Zr, english: ti}};

    function ni(t, e) {
        var n = v()(t);
        if (V.a) {
            var r = V()(t);
            e && (r = G()(r).call(r, (function (e) {
                return z()(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function ri(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n, r = null != arguments[e] ? arguments[e] : {};
            if (e % 2) _()(n = ni(Object(r), !0)).call(n, (function (e) {
                Object(J.a)(t, e, r[e])
            })); else if (F.a) $()(t, F()(r)); else {
                var i;
                _()(i = ni(Object(r))).call(i, (function (e) {
                    D()(t, e, z()(r, e))
                }))
            }
        }
        return t
    }

    var ii, oi, ai, si, ci, ui = {
        supportedLangs: [{lang: "zh-CN", name: "中文"}, {lang: "en-US", name: "English"}],
        lang: "zh-CN",
        locales: {"zh-CN": ri({}, Zr), "en-US": ri({}, ti)}
    }, li = {name: "AppContainer"}, hi = Object(O.a)(li, (function () {
        var t = this.$createElement, e = this._self._c || t;
        return e("div", [e("div", {attrs: {id: "app"}}, [e("router-view")], 1)])
    }), [], !1, null, null, null).exports, fi = new a.a("#app", {
        routes: Hr.routes,
        http: (ii = p, ai = ii.BASE_URL, si = ii.BASE_CONFIG, ci = ii.API_LIST, {
            BASE_URL: ai,
            BASE_CONFIG: si,
            API_LIST: Be()(oi = v()(ci)).call(oi, (function (t, e) {
                var n = ci[e];
                return "string" == typeof n && (n = {
                    level: 0,
                    url: n
                }), 0 === n.level && b()(De).call(De, e) < 0 && De.push(e), t[e] = n.url, t
            }), {})
        })
    });
    if (a.a.isBrowser) {
        fi.use(h.a);
        var di = d.a.get("extra_exp_ids"), pi = d.a.get("xhsTracker"), mi = "", vi = "";
        if (pi) try {
            var gi = pi.split("&")[1].split("=");
            mi = gi[0], vi = gi[1]
        } catch (_i) {
        }
        fi.use(l.a, {
            liteTracker: u,
            extend: {activityTarget: {type: "ActivityTarget", value: {activityId: mi, activityName: vi}}},
            getUserInfo: function () {
                return i.a.resolve({user: {type: "User", value: {expV4: di ? "mz_".concat(btoa(di)) : ""}}})
            }
        })
    }
    fi.use(c.a, ei), fi.use(s.a, ui), fi.use(Yr), fi.start(hi);
    e.default = fi
}], [[757, 3, 4]]]);
//# sourceMappingURL=main.1e86cb3.js.map