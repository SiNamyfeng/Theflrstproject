var T, baidu = T = baidu || function (e, t) {
    return baidu.dom ? baidu.dom(e, t) : null
};
if (baidu.version = "2.0.0.2", baidu.guid = "$BAIDU$", baidu.key = "tangram_guid", (window[baidu.guid] = window[baidu.guid] || {versions: []}).versions.push(baidu.version), baidu.check = baidu.check || function () {
}, baidu.lang = baidu.lang || {}, baidu.forEach = function (e, t, n) {
    var i, r, a;
    if ("function" == typeof t && e) if (r = "number" == typeof e.length ? e.length : e.byteLength, "number" == typeof r) {
        if ("function" == typeof e) return e;
        for (i = 0; r > i; i++) a = e[i] || e.charAt && e.charAt(i), t.call(n || null, a, i, e)
    } else if ("number" == typeof e) for (i = 0; e > i; i++) t.call(n || null, i, i, i); else if ("object" == typeof e) for (i in e) e.hasOwnProperty(i) && t.call(n || null, e[i], i, e);
    return e
}, baidu.type = function () {
    var e = {}, t = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment"],
        n = "Array Boolean Date Error Function Number RegExp String", i = e.toString;
    return baidu.forEach(n.split(" "), function (t) {
        e["[object " + t + "]"] = t.toLowerCase(), baidu["is" + t] = function (e) {
            return baidu.type(e) == t.toLowerCase()
        }
    }), function (n) {
        var r = typeof n;
        return "object" != r ? r : null == n ? "null" : n._type_ || e[i.call(n)] || t[n.nodeType] || (n == n.window ? "Window" : "") || "object"
    }
}(), baidu.isDate = function (e) {
    return "date" == baidu.type(e) && "Invalid Date" != e.toString() && !isNaN(e)
}, baidu.isElement = function (e) {
    return "HTMLElement" == baidu.type(e)
}, baidu.isEnumerable = function (e) {
    return null != e && "object" == typeof e && ("number" == typeof e.length || "undefined" != typeof e[0])
}, baidu.isNumber = function (e) {
    return "number" == baidu.type(e) && isFinite(e)
}, baidu.isPlainObject = function (e) {
    var t, n = Object.prototype.hasOwnProperty;
    if ("object" != baidu.type(e)) return !1;
    if (e.constructor && !n.call(e, "constructor") && !n.call(e.constructor.prototype, "isPrototypeOf")) return !1;
    for (t in e) ;
    return void 0 === t || n.call(e, t)
}, baidu.isObject = function (e) {
    return "function" == typeof e || "object" == typeof e && null != e
}, baidu.extend = function (e, t) {
    var n, i, r, a, o, u, d = 1, s = arguments.length, c = e || {};
    for (baidu.isBoolean(e) && (d = 2) && (c = t || {}), !baidu.isObject(c) && (c = {}); s > d; d++) if (n = arguments[d], baidu.isObject(n)) for (i in n) r = c[i], a = n[i], r !== a && (baidu.isBoolean(e) && e && a && (baidu.isPlainObject(a) || (o = baidu.isArray(a))) ? (o ? (o = !1, u = r && baidu.isArray(r) ? r : []) : u = r && baidu.isPlainObject(r) ? r : {}, c[i] = baidu.extend(e, u, a)) : void 0 !== a && (c[i] = a));
    return c
}, baidu.createChain = function (e, t, n) {
    var i = "dom" == e ? "$DOM" : "$" + e.charAt(0).toUpperCase() + e.substr(1), r = Array.prototype.slice,
        a = baidu[e] = baidu[e] || t || function (t) {
            return baidu.extend(t, baidu[e].fn)
        };
    return a.extend = function (t) {
        var n;
        for (n in t) a[n] = function () {
            var t = arguments[0];
            "dom" == e && "string" == baidu.type(t) && (t = "#" + t);
            var i = a(t), o = i[n].apply(i, r.call(arguments, 1));
            return "$DOM" == baidu.type(o) ? o.get(0) : o
        };
        return baidu.extend(baidu[e].fn, t)
    }, baidu[e][i] = baidu[e][i] || n || function () {
    }, a.fn = baidu[e][i].prototype, a
}, baidu.overwrite = function (e, t, n) {
    for (var i = t.length - 1; i > -1; i--) e.prototype[t[i]] = n(t[i]);
    return e
}, baidu.object = baidu.object || {}, baidu.object.isPlain = baidu.isPlainObject, baidu.createChain("string", function (e) {
    var t = baidu.type(e), n = new String(~"string|number".indexOf(t) ? e : t), i = String.prototype;
    return baidu.forEach(baidu.string.$String.prototype, function (e, t) {
        i[t] || (n[t] = e)
    }), n
}), baidu.string.extend({
    trim: function () {
        var e = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        return function () {
            return this.replace(e, "")
        }
    }()
}), baidu.createChain("array", function (e) {
    var t, n = baidu.array.$Array.prototype, i = Array.prototype;
    "array" != baidu.type(e) && (e = []);
    for (t in n) i[t] || (e[t] = n[t]);
    return e
}), baidu.overwrite(baidu.array.$Array, "concat slice".split(" "), function (e) {
    return function () {
        return baidu.array(Array.prototype[e].apply(this, arguments))
    }
}), baidu.array.extend({
    indexOf: function (e, t) {
        baidu.check(".+(,number)?", "baidu.array.indexOf");
        var n = this.length;
        for ((t = 0 | t) < 0 && (t = Math.max(0, n + t)); n > t; t++) if (t in this && this[t] === e) return t;
        return -1
    }
}), baidu.createChain("Callbacks", function (e) {
    function t(e) {
        var t = n[e] = {};
        return baidu.forEach(e.split(/\s+/), function (e) {
            t[e] = !0
        }), t
    }

    var n = {};
    e = "string" == typeof e ? n[e] || t(e) : baidu.extend({}, e);
    var i, r, a, o, u, d, s = [], c = !e.once && [], l = function (t) {
        for (i = e.memory && t, r = !0, d = o || 0, o = 0, u = s.length, a = !0; s && u > d; d++) if (s[d].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
            i = !1;
            break
        }
        a = !1, s && (c ? c.length && l(c.shift()) : i ? s = [] : f.disable())
    }, f = {
        add: function () {
            if (s) {
                var t = s.length;
                !function n(t) {
                    baidu.forEach(t, function (t) {
                        "function" != typeof t || e.unique && f.has(t) ? t && t.length && n(t) : s.push(t)
                    })
                }(arguments), a ? u = s.length : i && (o = t, l(i))
            }
            return this
        }, remove: function () {
            return s && baidu.forEach(arguments, function (e) {
                for (var t; (t = baidu.array(s).indexOf(e, t)) > -1;) s.splice(t, 1), a && (u >= t && u--, d >= t && d--)
            }), this
        }, has: function (e) {
            return baidu.array(s).indexOf(e) > -1
        }, empty: function () {
            return s = [], this
        }, disable: function () {
            return s = c = i = void 0, this
        }, disabled: function () {
            return !s
        }, lock: function () {
            return c = void 0, i || f.disable(), this
        }, locked: function () {
            return !c
        }, fireWith: function (e, t) {
            return t = t || [], t = [e, t.slice ? t.slice() : t], !s || r && !c || (a ? c.push(t) : l(t)), this
        }, fire: function () {
            return f.fireWith(this, arguments), this
        }, fired: function () {
            return !!r
        }
    };
    return f
}, function () {
}), baidu.createChain("Deferred", function (e) {
    var t = Array.prototype.slice,
        n = [["resolve", "done", baidu.Callbacks("once memory"), "resolved"], ["reject", "fail", baidu.Callbacks("once memory"), "rejected"], ["notify", "progress", baidu.Callbacks("memory")]],
        i = "pending", r = {
            state: function () {
                return i
            }, always: function () {
                return a.done(arguments).fail(arguments), this
            }, then: function () {
                var e = arguments;
                return baidu.Deferred(function (t) {
                    baidu.forEach(n, function (n, i) {
                        var r = n[0], o = e[i];
                        a[n[1]]("function" == typeof o ? function () {
                            var e = o.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(t.resolve).fail(t.reject).progress(t.notify) : t[r + "With"](this === a ? t : this, [e])
                        } : t[r])
                    }), e = null
                }).promise()
            }, promise: function (e) {
                return "object" == typeof e ? baidu.extend(e, r) : r
            }
        }, a = {};
    return r.pipe = r.then, baidu.forEach(n, function (e, t) {
        var o = e[2], u = e[3];
        r[e[1]] = o.add, u && o.add(function () {
            i = u
        }, n[1 ^ t][2].disable, n[2][2].lock), a[e[0]] = o.fire, a[e[0] + "With"] = o.fireWith
    }), r.promise(a), e && e.call(a, a), baidu.extend(baidu, {
        when: function (e) {
            var n, i, r, a = 0, o = t.call(arguments), u = o.length,
                d = 1 !== u || e && "function" == typeof e.promise ? u : 0, s = 1 === d ? e : baidu.Deferred(),
                c = function (e, i, r) {
                    return function (a) {
                        i[e] = this, r[e] = arguments.length > 1 ? t.call(arguments) : a, r === n ? s.notifyWith(i, r) : --d || s.resolveWith(i, r)
                    }
                };
            if (u > 1) for (n = new Array(u), i = new Array(u), r = new Array(u); u > a; a++) o[a] && "function" == typeof o[a].promise ? o[a].promise().done(c(a, r, o)).fail(s.reject).progress(c(a, i, n)) : --d;
            return d || s.resolveWith(r, o), s.promise()
        }
    }), a
}, function () {
}), baidu.global = baidu.global || function () {
    baidu._global_ = window[baidu.guid];
    var e = baidu._global_._ = {};
    return function (t, n, i) {
        return "undefined" != typeof n ? (n = i && "undefined" != typeof e[t] ? e[t] : n, e[t] = n) : t && "undefined" == typeof e[t] && (e[t] = {}), e[t]
    }
}(), baidu.browser = baidu.browser || function () {
    var e = navigator.userAgent, t = {
        isStrict: "CSS1Compat" == document.compatMode,
        isGecko: /gecko/i.test(e) && !/like gecko/i.test(e),
        isWebkit: /webkit/i.test(e)
    };
    try {
        / (\d + \.\d + ) /.test(external.max_version) && (t.maxthon = +RegExp.$1)
    } catch (n) {
    }
    switch (!0) {
        case/msie(\d+\.\d+)/i.test(e):
            t.ie = document.documentMode || +RegExp.$1;
            break;
        case/chrome\/(\d+\.\d+)/i.test(e):
            t.chrome = +RegExp.$1;
            break;
        case/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(e) && !/chrome/i.test(e):
            t.safari = +(RegExp.$1 || RegExp.$2);
            break;
        case/firefox\/(\d+\.\d+)/i.test(e):
            t.firefox = +RegExp.$1;
            break;
        case/opera(\/|)(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(e):
            t.opera = +(RegExp.$6 || RegExp.$2)
    }
    return baidu.extend(baidu, t), t
}(), baidu.id = function () {
    var e = baidu.global("_maps_id"), t = baidu.key;
    return baidu.global("_counter", 1, !0), function (n, i) {
        var r, a = baidu.isString(n), o = baidu.isObject(n), u = o ? n[t] : a ? n : "";
        if (baidu.isString(i)) switch (i) {
            case"get":
                return o ? u : e[u];
            case"remove":
            case"delete":
                return (r = e[u]) && (baidu.browser.ie && baidu.isElement(r) ? r.removeAttribute(t) : delete r[t], delete e[u]), u;
            case"decontrol":
                return !(r = e[u]) && o && (n[t] = u = baidu.id()), u && delete e[u], u;
            default:
                return a ? ((r = e[u]) && delete e[u], r && (e[r[t] = i] = r)) : o && (u && delete e[u], e[n[t] = i] = n), i
        }
        return o ? (!u && (e[n[t] = u = baidu.id()] = n), u) : a ? e[n] : "TANGRAM__" + baidu._global_._._counter++
    }
}(), baidu.id.key = "tangram_guid", baidu.merge = function (e, t) {
    var n = e.length, i = 0;
    if ("number" == typeof t.length) for (var r = t.length; r > i; i++) e[n++] = t[i]; else for (; void 0 !== t[i];) e[n++] = t[i++];
    return e.length = n, e
}, baidu.array.extend({
    unique: function (e) {
        var t, n, i = this.length, r = this.slice(0);
        for ("function" != typeof e && (e = function (e, t) {
            return e === t
        }); --i > 0;) for (n = r[i], t = i; t--;) if (e(n, r[t])) {
            r.splice(i, 1);
            break
        }
        for (i = this.length = r.length, t = 0; i > t; t++) this[t] = r[t];
        return this
    }
}), baidu.query = baidu.query || function () {
    function e(e, t) {
        var i, r, a, o, u, d, s, c = [];
        return n.test(e) ? (a = RegExp.$2, o = RegExp.$1 || "*", baidu.forEach(t.getElementsByTagName(o), function (e) {
            e.id == a && c.push(e)
        })) : rTag.test(e) || "*" == e ? baidu.merge(c, t.getElementsByTagName(e)) : rClass.test(e) ? (d = [], o = RegExp.$1, u = RegExp.$2, i = " " + u + " ", t.getElementsByClassName ? d = t.getElementsByClassName(u) : baidu.forEach(t.getElementsByTagName("*"), function (e) {
            e.className && (" " + e.className + " ").indexOf(i) > -1 && d.push(e)
        }), o && (o = o.toUpperCase()) ? baidu.forEach(d, function (e) {
            e.tagName.toUpperCase() === o && c.push(e)
        }) : baidu.merge(c, d)) : rComboClass.test(e) && (s = e.substr(1).split("."), baidu.forEach(t.getElementsByTagName("*"), function (e) {
            e.className && (i = " " + e.className + " ", r = !0, baidu.forEach(s, function (e) {
                -1 == i.indexOf(" " + e + " ") && (r = !1)
            }), r && c.push(e))
        })), c
    }

    function t(n, r) {
        var a, o = n, u = "__tangram__", d = [];
        return !r && i.test(o) && (a = document.getElementById(o.substr(1))) ? [a] : (r = r || document, r.querySelectorAll ? (1 != r.nodeType || r.id ? a = r.querySelectorAll(o) : (r.id = u, a = r.querySelectorAll("#" + u + " " + o), r.id = ""), a) : -1 == o.indexOf(" ") ? e(o, r) : (baidu.forEach(e(o.substr(0, o.indexOf(" ")), r), function (e) {
            baidu.merge(d, t(o.substr(o.indexOf(" ") + 1), e))
        }), d))
    }

    var n = /^(\w*)#([\w\-\$]+)$/, i = /^#([\w\-\$]+)$/;
    return rTag = /^\w+$/, rClass = /^(\w*)\.([\w\-\$]+)$/, rComboClass = /^(\.[\w\-\$]+)+$/, rDivider = /\s*,\s*/, rSpace = /\s+/g, slice = Array.prototype.slice, function (e, n, i) {
        if (!e || "string" != typeof e) return i || [];
        var r = [];
        return e = e.replace(rSpace, " "), i && baidu.merge(r, i) && (i.length = 0), baidu.forEach(e.indexOf(",") > 0 ? e.split(rDivider) : [e], function (e) {
            baidu.merge(r, t(e, n))
        }), baidu.merge(i || [], baidu.array(r).unique())
    }
}(), baidu.createChain("dom", function (e, t) {
    var n = new baidu.dom.$DOM(t);
    if (!e) return n;
    if ("$DOM" == e._type_) return e;
    if (e.nodeType || e == e.window) return n[0] = e, n.length = 1, n;
    if (e.length && "[object String]" != n.toString.call(e)) return baidu.merge(n, e);
    if ("string" == typeof e) "<" == e.charAt(0) && ">" == e.charAt(e.length - 1) && e.length > 2 ? baidu.dom.createElements && baidu.merge(n, baidu.dom.createElements(e)) : baidu.query(e, t, n); else if ("function" == typeof e) return n.ready ? n.ready(e) : n;
    return n
}, function (e) {
    this.length = 0, this._type_ = "$DOM", this.context = e || document
}).extend({
    size: function () {
        return this.length
    }, splice: function () {
    }, get: function (e) {
        return "number" == typeof e ? 0 > e ? this[this.length + e] : this[e] : Array.prototype.slice.call(this, 0)
    }, toArray: function () {
        return this.get()
    }
}), baidu.dom.extend({
    ready: function () {
        function e() {
            if (!e.isReady) {
                e.isReady = !0;
                for (var t = 0, n = a.length; n > t; t++) a[t]()
            }
        }

        function t() {
            try {
                document.documentElement.doScroll("left")
            } catch (n) {
                return void setTimeout(t, 1)
            }
            e()
        }

        function n() {
            if (!r) if (r = !0, "complete" === document.readyState || "loading" !== document.readyState && document.addEventListener) e.isReady = !0; else if (document.addEventListener) document.addEventListener("DOMContentLoaded", i, !1), window.addEventListener("load", e, !1); else if (document.attachEvent) {
                document.attachEvent("onreadystatechange", i), window.attachEvent("onload", e);
                var n = !1;
                try {
                    n = null == window.frameElement
                } catch (a) {
                }
                document.documentElement.doScroll && n && t()
            }
        }

        var i, r = !1, a = [];
        return document.addEventListener ? i = function () {
            document.removeEventListener("DOMContentLoaded", i, !1), e()
        } : document.attachEvent && (i = function () {
            "complete" === document.readyState && (document.detachEvent("onreadystatechange", i), e())
        }), n(), function (t) {
            return t && (e.isReady ? t() : a.push(t)), this
        }
    }()
}), baidu.support = baidu.support || function () {
    var e, t, n, i = document.createElement("div");
    return i.innerHTML = '<a href="/a" style="top:1px; float: left; opacity: .55">Tangram</a><input type="checkbox">', t = i.getElementsByTagName("A")[0], n = i.getElementsByTagName("input")[0], n.checked = !0, e = {
        opacity: "0.55" === t.style.opacity,
        cssFloat: !!t.style.cssFloat,
        noCloneChecked: n.cloneNode(!0).checked,
        noCloneEvent: !0
    }, !i.addEventListener && i.attachEvent && i.fireEvent && (i.attachEvent("onclick", function () {
        e.noCloneEvent = !1
    }), i.cloneNode(!0).fireEvent("onclick")), baidu(function () {
        var n, i, r, a, o, u = document.getElementsByTagName("body")[0], d = document.createElement("div"),
            s = document.createElement("div"), c = "padding: 0; margin: 0; border: ",
            l = "left: 0; top: 0; width: 0px; height: 0px; ", f = l + c + "0; visibility: hidden;",
            b = l + c + "5px solid #000; position: absolute;";
        d.style.cssText = "position: static;" + f, u.insertBefore(d, u.firstChild), d.appendChild(s), s.style.cssText = "position: absolute;" + f, s.innerHTML = '<div style="' + b + 'display: bloack;"><div style="' + c + '0; display: block; overflow: hidden;"></div></div><table style="' + b + '" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>', n = s.firstChild, i = n.firstChild, o = n.nextSibling, e.hasBorderWidth = i.offsetTop >= 5, e.hasTableCellBorderWidth = o.rows[0].cells[0].offsetTop >= 5, i.style.position = "fixed", i.style.top = "20px", e.fixedPosition = 20 === i.offsetTop || 15 === i.offsetTop, e.deleteExpando = !0;
        try {
            delete s.test
        } catch (p) {
            e.deleteExpando = !1
        }
        r = document.createElement("select"), a = r.appendChild(document.createElement("option")), r.disabled = !0, e.optDisabled = !a.disabled, e.optSelected = a.selected, s.setAttribute("className", "t"), s.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        var h = s.getElementsByTagName("input")[0];
        e.checkOn = "on" === h.value, e.htmlSerialize = !!s.getElementsByTagName("link").length, e.leadingWhitespace = 3 === s.firstChild.nodeType, e.getSetAttribute = "t" !== s.className, e.pixelMargin = !0, s.innerHTML = "", s.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", window.getComputedStyle && (e.pixelMargin = "1%" !== (window.getComputedStyle(s, null) || {}).marginTop);
        var h = document.createElement("input");
        h.value = "t", h.setAttribute("type", "radio"), e.radioValue = "t" === h.value, e.hrefNormalized = "/a" === t.getAttribute("href"), e.style = /top/.test(t.getAttribute("style")), e.enctype = !!document.createElement("form").enctype, u.removeChild(d), d = s = n = i = o = null
    }), e
}(), baidu.createChain("event", function () {
    var e = {};
    return function (t, n) {
        switch (baidu.type(t)) {
            case"object":
                return e.originalEvent === t ? e : e = new baidu.event.$Event(t);
            case"$Event":
                return t;
            case"string":
                var i = new baidu.event.$Event(t);
                return "object" == typeof n && baidu.forEach(i, n), i
        }
    }
}(), function (e) {
    var t, n, i = this;
    if (this._type_ = "$Event", "object" == typeof e && e.type) {
        i.originalEvent = t = e, baidu.forEach("altKey bubbles button buttons cancelable clientX clientY ctrlKey commandKey currentTarget fromElement metaKey screenX screenY shiftKey toElement type view which triggerData".split(" "), function (e) {
            i[e] = t[e]
        }), i.target = i.srcElement = t.srcElement || (n = t.target) && (3 == n.nodeType ? n.parentNode : n), i.relatedTarget = t.relatedTarget || (n = t.fromElement) && (n === i.target ? t.toElement : n), i.keyCode = i.which = t.keyCode || t.which, i.which || void 0 === t.button || (i.which = 1 & t.button ? 1 : 2 & t.button ? 3 : 4 & t.button ? 2 : 0);
        var r = document.documentElement, a = document.body;
        i.pageX = t.pageX || t.clientX + (r && r.scrollLeft || a && a.scrollLeft || 0) - (r && r.clientLeft || a && a.clientLeft || 0), i.pageY = t.pageY || t.clientY + (r && r.scrollTop || a && a.scrollTop || 0) - (r && r.clientTop || a && a.clientTop || 0), i.data
    }
    "string" == typeof e && (this.type = e), this.timeStamp = (new Date).getTime()
}).extend({
    stopPropagation: function () {
        var e = this.originalEvent;
        e && (e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0)
    }, preventDefault: function () {
        var e = this.originalEvent;
        e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }
}), baidu.dom.extend({
    each: function (e) {
        baidu.check("function", "baidu.dom.each");
        var t, n, i = this.length;
        for (t = 0; i > t && (n = e.call(this[t], t, this[t], this), n !== !1 && "break" != n); t++) ;
        return this
    }
}), baidu._util_ = baidu._util_ || {}, baidu.dom.match = function () {
    function e(e) {
        for (var t, n = []; e = e.parentNode;) e.nodeType && n.push(e);
        for (var t = n.length - 1; t > -1; t--) if (1 == n[t].nodeType || 9 == n[t].nodeType) return n[t];
        return null
    }

    var t = document.createElement("DIV");
    return t.id = "__tangram__", function (t, n, i) {
        var r, a = baidu.array();
        switch (baidu.type(n)) {
            case"$DOM":
                for (var o = t.length - 1; o > -1; o--) for (var u = n.length - 1; u > -1; u--) t[o] === n[u] && a.push(t[o]);
                break;
            case"function":
                baidu.forEach(t, function (e, t) {
                    n.call(e, t) && a.push(e)
                });
                break;
            case"HTMLElement":
                baidu.forEach(t, function (e) {
                    e == n && a.push(e)
                });
                break;
            case"string":
                var d = baidu.query(n, i || document);
                baidu.forEach(t, function (t) {
                    if (r = e(t)) for (var i = 1 == r.nodeType ? baidu.query(n, r) : d, o = 0, u = i.length; u > o; o++) if (i[o] === t) {
                        a.push(t);
                        break
                    }
                }), a = a.unique();
                break;
            default:
                a = baidu.array(t).unique()
        }
        return a
    }
}(), baidu.dom.extend({
    is: function (e) {
        return baidu.dom.match(this, e).length > 0
    }
}), baidu.dom.extend({
    triggerHandler: function (e, t) {
        var n = baidu._util_.eventBase;
        return baidu.forEach(this, function (i) {
            n.fireHandler(i, e, t)
        }), this
    }
}), baidu.dom.extend({
    contains: function (e) {
        if (e = baidu.dom(e), this.size() <= 0 || e.size() <= 0) return !1;
        var t = this[0];
        return e = e[0], t.contains ? t != e && t.contains(e) : !!(16 & t.compareDocumentPosition(e))
    }
}), baidu.dom.extend({
    closest: function (e, t) {
        var n = baidu.array();
        return baidu.forEach(this, function (i) {
            for (var r = [i]; i = i.parentNode;) i.nodeType && r.push(i);
            r = baidu.dom.match(r, e, t), r.length && n.push(r[0])
        }), baidu.dom(n.unique())
    }
}), baidu._util_.eventBase = function () {
    var e = {}, t = {}, n = window.addEventListener ? function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : window.attachEvent ? function (e, t, n) {
        e.attachEvent("on" + t, n)
    } : function () {
    }, i = function (e, i, r) {
        var a = baidu.id(e), o = t[a] = t[a] || {};
        if (!o[i]) {
            o[i] = 1;
            var u = function (t) {
                var n = Array.prototype.slice.call(arguments, 1);
                n.unshift(t = baidu.event(t)), t.currentTarget || (t.currentTarget = e);
                for (var i = 0, a = r.length; a > i; i += 2) r[i].apply(this, n)
            };
            n(e, i, u)
        }
    }, r = function (t, n, r, a, o) {
        var u = function (e) {
            if (baidu.dom(e.target), o && !e.data && (e.data = o), e.triggerData && [].push.apply(arguments, e.triggerData), !l) return e.result = r.apply(t, arguments);
            for (var n = 0, i = l.length; i > n; n++) if (l.get(n).contains(e.target)) return e.result = r.apply(l[n], arguments)
        }, d = baidu.id(t), s = e[d] || (e[d] = {}), c = s[n] || (s[n] = []);
        c.push(u, r), i(t, n, c);
        var l = null;
        return a && (l = baidu.dom(a, t)), u
    }, a = function (t, n, i) {
        var r;
        if (r = baidu.id(t, "get")) {
            var a = e[r] || (e[r] = {}),
                o = {mouseenter: "mouseover", mouseleave: "mouseout", focusin: "focus", focusout: "blur"},
                u = a[n] || (a[n] = []);
            o[n] && (a[o[n]] = []);
            for (var d, s = u.length - 1; s >= 0; s--) d = u[s], d === i && u.splice(s - 1, 2)
        }
    }, o = function (t, n) {
        var i;
        if (i = baidu.id(t, "get")) {
            var r = e[i] || (e[i] = {}), o = function (e) {
                for (var n, i = r[e] || (r[e] = []), o = i.length - 1; o >= 0; o -= 2) n = i[o], a(t, e, n)
            };
            if (n) o(n); else for (var n in r) o(n)
        }
    }, u = function (t, n, i) {
        var r;
        if (r = baidu.id(t, "get")) {
            var a = e[r] || (e[r] = {}), o = a[n] || (a[n] = []), u = baidu.event({type: n}), d = [u];
            i && (u.triggerData = i, d.push.apply(d, i));
            for (var s = 0, c = o.length; c > s; s += 2) o[s].apply(this, d)
        }
    }, d = function (t) {
        var n;
        if (n = baidu.id(t, "get")) {
            var i, r = e[n] || (e[n] = {}), a = {};
            for (var o in r) {
                i = a[o] = [], ce = r[o];
                for (var u = 1, d = ce.length; d > u; u += 2) i.push(ce[u])
            }
            return a
        }
    }, s = function (e) {
        switch (e) {
            case"focusin":
            case"focusout":
                if (!/firefox/i.test(navigator.userAgent)) return !1;
                var t = {}, n = "focusin" == e ? "focus" : "blur";
                return t[e] = function (t, i) {
                    "function" == typeof t && (i = t, t = null);
                    var r = this;
                    if (i) {
                        var a = function () {
                            r.triggerHandler(e)
                        };
                        return baidu.forEach(this, function (e) {
                            baidu("textarea,select,input,button,a", e).on(n, a)
                        }), this._on(e, t, i), this
                    }
                    return this.triggerHandler(e, t)
                }, baidu.dom.extend(t), !0;
            case"mouseenter":
            case"mouseleave":
                if (/msie/i.test(navigator.userAgent)) return !1;
                var t = {}, n = "mouseenter" == e ? "mouseover" : "mouseout", i = baidu.dom.contains;
                return t[e] = function (t, r) {
                    if (0 == arguments.length) return this.trigger(e);
                    "function" == typeof t && (r = t, t = null);
                    var a = this, o = function (t) {
                        related = t.relatedTarget, (!related || related !== this && !i(this, related)) && a.triggerHandler(e)
                    };
                    return baidu.forEach(this, function () {
                        this.on(n, o)
                    }, this), this._on(e, t, r), this
                }, baidu.dom.extend(t), !0
        }
        return !1
    };
    return {
        add: function (e, t, n, i, a) {
            return r(e, t, n, i, a)
        }, get: function (e) {
            return d(e)
        }, remove: function (e, t, n, i) {
            var r;
            return (r = baidu.id(e, "get")) && n && n["_" + r + "_" + t] && (n = n["_" + r + "_" + t], delete n["_" + r + "_" + t]), "function" == typeof n ? a(e, t, n, i) : o(e, t, i)
        }, removeAll: function (e) {
            return o(e)
        }, fireHandler: function (e, t, n) {
            return u(e, t, n)
        }, method: function (e) {
            if (arguments.length > 1) {
                for (var t = 0, n = arguments.length; n > t; t++) this.method(arguments[t]);
                return this
            }
            if (!s(e)) {
                var i = {};
                i[e] = function (t, n) {
                    return 0 == arguments.length ? this.trigger(e) : ("function" == typeof t && (n = t, t = null), this._on(e, t, n))
                }, baidu.dom.extend(i)
            }
        }, _getEventsLength: function (t, n) {
            var i, r = 0;
            if (t) if (i = e[baidu.id(t[0] || t, "get")], n) i[n] && (r = i[n].length); else for (var a in i) r += i[a].length; else for (var a in e) {
                i = e[a];
                for (var o in i) r += i[o].length
            }
            return r / 2
        }
    }
}(), baidu._util_.eventBase.method("blur", "change", "click", "dblclick", "error", "focus", "focusin", "focusout", "keydown", "keypress", "keyup", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseout", "mouseover", "mouseup", "resize", "scroll", "select", "submit", "load", "unload", "contextmenu"), baidu.dom.extend({
    on: function (e, t, n, i) {
        var r = baidu._util_.eventBase, a = {mouseenter: 1, mouseleave: 1, focusin: 1, focusout: 1};
        return "object" == typeof t && t ? (i = n, n = t, t = null) : "function" == typeof n ? (i = n, n = null) : "function" == typeof t && (i = t, t = n = null), "string" == typeof e ? (e = e.split(/[ ,]+/), this.each(function () {
            baidu.forEach(e, function (e) {
                a[e] ? baidu(this)[e](n, i) : r.add(this, e, i, t, n)
            }, this)
        })) : "object" == typeof e && (i && (i = null), baidu.forEach(e, function (e, i) {
            this.on(i, t, n, e)
        }, this)), this
    }, _on: function (e, t, n) {
        var i = baidu._util_.eventBase;
        return this.each(function () {
            i.add(this, e, n, void 0, t)
        }), this
    }
}), void function () {
    function e(e) {
        var t, n;
        if (!e || "string" !== baidu.type(e)) return null;
        try {
            window.DOMParser ? (n = new DOMParser, t = n.parseFromString(e, "text/xml")) : (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e))
        } catch (i) {
            t = void 0
        }
        if (!t || !t.documentElement || t.getElementsByTagName("parsererror").length) throw new Error("Invalid XML: " + e);
        return t
    }

    function t(e) {
        if (!e || "string" !== baidu.type(e)) return null;
        if (e = baidu.string(e).trim(), window.JSON && window.JSON.parse) return window.JSON.parse(e);
        if (w.test(e.replace(_, "@").replace(T, "]").replace(E, ""))) return new Function("return " + e)();
        throw new Error("Invalid JSON: " + e)
    }

    function n(e) {
        e && /\S/.test(e) && (window.execScript || function (e) {
            window.eval.call(window, e)
        })(e)
    }

    function i(e) {
        return function (t, n) {
            "string" !== baidu.type(t) && (n = t, t = "*");
            var i, r, a = t.toLowerCase().split(/\s+/);
            if ("function" === baidu.type(n)) for (var o, u = 0; o = a[u]; u++) i = /^\+/.test(o), i && (o = o.substr(1) || "*"), r = e[o] = e[o] || [], r[i ? "unshift" : "push"](n)
        }
    }

    function r(e, t, n) {
        var i, r, a, o, u = e.contents, d = e.dataTypes, s = e.responseFields;
        for (r in s) r in n && (t[s[r]] = n[r]);
        for (; "*" === d[0];) d.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("content-type"));
        if (i) for (r in u) if (u[r] && u[r].test(i)) {
            d.unshift(r);
            break
        }
        if (d[0] in n) a = d[0]; else {
            for (r in n) {
                if (!d[0] || e.converters[r + " " + d[0]]) {
                    a = r;
                    break
                }
                o || (o = r)
            }
            a = a || o
        }
        return a ? (a !== d[0] && d.unshift(a), n[a]) : void 0
    }

    function a(e, t) {
        var n, i, r = e.dataTypes.slice(), a = r[0], o = {};
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), r[1]) for (var u in e.converters) o[u.toLowerCase()] = e.converters[u];
        for (var d, u = 0; d = r[++u];) if ("*" !== d) {
            if ("*" !== a && a !== d) {
                if (n = o[a + " " + d] || o["* " + d], !n) for (var s in o) if (i = s.split(" "), i[1] === d && (n = o[a + " " + i[0]] || o["* " + i[0]])) {
                    n === !0 ? n = o[s] : o[s] !== !0 && (d = i[0], r.splice(u--, 0, d));
                    break
                }
                if (n !== !0) if (n && e["throws"]) t = n(t); else try {
                    t = n(t)
                } catch (c) {
                    return {state: "parsererror", error: n ? c : "No conversion from " + a + " to " + d}
                }
            }
            a = d
        }
        return {state: "success", data: t}
    }

    function o(e, t, n, i, r, a) {
        r = r || t.dataTypes[0], a = a || {}, a[r] = !0;
        for (var u, d = e[r], s = d ? d.length : 0, c = e === k, l = 0; s > l && (c || !u); l++) u = d[l](t, n, i), "string" == typeof u && (!c || a[u] ? u = void 0 : (t.dataTypes.unshift(u), u = o(e, t, n, i, u, a)));
        return !c && u || a["*"] || (u = o(e, t, n, i, "*", a)), u
    }

    function u(e, t) {
        var n, i = baidu.ajax.settings.flatOptions || {};
        for (var r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        n && baidu.extend(!0, e, n)
    }

    function d(e, t, n) {
        n = "function" === baidu.type(n) ? n() : n || "", e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n))
    }

    function s(e, t, n, i) {
        if ("array" === baidu.type(n)) baidu.forEach(n, function (n, r) {
            i || g.test(t) ? d(e, t, n) : s(e, t + "[" + ("object" == typeof n ? r : "") + "]", n, i)
        }); else if (i || "object" !== baidu.type(n)) d(e, t, n); else for (var r in n) s(e, t + "[" + r + "]", n[r], i)
    }

    function c() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {
        }
    }

    function l() {
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {
        }
    }

    var f = location.href, b = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, p = /^\/\//,
        h = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, m = /#.*$/, g = /\[\]$/, y = /^(?:GET|HEAD)$/,
        v = /([?&])_=[^&]*/, x = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, w = /^[\],:{}\s]*$/, E = /(?:^|:|,)(?:\s*\[)+/g,
        _ = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        T = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, C = ["*/"] + ["*"], k = {}, A = {},
        S = {}, O = {}, N = h.exec(f.toLowerCase()) || [];
    baidu.createChain("ajax", function (e, t) {
        function n(e, t, n, i) {
            var o, u, d, s, c, l = t;
            2 !== W && (W = 2, $ && clearTimeout($), M = void 0, D = i || "", X.readyState = e > 0 ? 4 : 0, n && (s = r(B, X, n)), e >= 200 && 300 > e || 304 === e ? (B.ifModified && (c = X.getResponseHeader("Last-Modified"), c && (S[L] = c), c = X.getResponseHeader("Etag"), c && (O[L] = c)), 304 === e ? (l = "notmodified", o = !0) : (o = a(B, s), l = o.state, u = o.data, d = o.error, o = !d)) : (d = l, (!l || e) && (l = "error", 0 > e && (e = 0))), X.status = e, X.statusText = "" + (t || l), o ? R.resolveWith(I, [u, l, X]) : R.rejectWith(I, [X, l, d]), X.statusCode(P), P = void 0, F.fireWith(I, [X, l]))
        }

        baidu.object.isPlain(e) && (t = e, e = void 0), t = t || {};
        try {
            if (window.getValue && t.data) t.data = baidu.extend(t.data, window.getValue(t.data)); else {
                var i = "OOOO00", u = "OOO00O", d = "OOO000", s = "OOO0OO", c = "O0OOO0",
                    l = {OOOOO0: i, O00000: u, O0O00O: d, O000OO: s, O0O000: c}, f = (new Date).getTime() / 1e3,
                    b = parseInt(f / 86400, 10) % 5, g = [];
                if (Object && Object.keys) g = Object.keys(l); else {
                    g = [];
                    for (var w in l) g.push(w)
                }
                var E = l[g[b]];
                window.moonshadV3 && window.moonshadV3[E] && t.data && (t.data = baidu.extend(t.data, window.moonshadV3[E](t.data)))
            }
        } catch (_) {
            console.log(_)
        }
        var T, L, j, D, H, M, $, B = baidu.ajax.setup({}, t), I = B.context || B, R = baidu.Deferred(),
            F = baidu.Callbacks("once memory"), P = B.statusCode || {}, W = 0, q = {}, z = {}, U = "canceled",
            X = baidu.extend(new baidu.ajax.$Ajax(e, B), {
                readyState: 0, setRequestHeader: function (e, t) {
                    if (!W) {
                        var n = e.toLowerCase();
                        e = q[n] = q[n] || e, z[e] = t
                    }
                }, getAllResponseHeaders: function () {
                    return 2 === W ? D : null
                }, getResponseHeader: function (e) {
                    var t;
                    if (2 === W) {
                        if (!H) for (H = {}; t = x.exec(D);) H[t[1].toLowerCase()] = t[2];
                        t = H[e.toLowerCase()]
                    }
                    return void 0 === t ? null : t
                }, overrideMimeType: function (e) {
                    return !W && (B.mimeType = e), this
                }, abort: function (e) {
                    return e = e || U, M && M.abort(e), n(0, e), this
                }
            });
        if (R.promise(X), X.success = X.done, X.error = X.fail, X.complete = F.add, X.statusCode = function (e) {
            if (e) if (2 > W) for (var t in e) P[t] = [P[t], e[t]]; else X.always(e[X.status]);
            return this
        }, B.url = ((e || B.url) + "").replace(m, "").replace(p, N[1] + "//"), B.dataTypes = baidu.string(B.dataType || "*").trim().toLowerCase().split(/\s+/), null == B.crossDomain && (j = h.exec(B.url.toLowerCase()), B.crossDomain = !(!j || j[1] == N[1] && j[2] == N[2] && (j[3] || ("http:" === j[1] ? 80 : 443)) == (N[3] || ("http:" === N[1] ? 80 : 443)))), B.data && B.processData && "string" !== baidu.type(B.data) && (B.data = baidu.ajax.param(B.data, B.traditional)), o(k, B, t, X), 2 === W) return "";
        if (T = B.global, B.type = B.type.toUpperCase(), B.hasContent = !y.test(B.type), !B.hasContent && (B.data && (B.url += (~B.url.indexOf("?") ? "&" : "?") + B.data, delete B.data), L = B.url, B.cache === !1)) {
            var V = (new Date).getTime(), K = B.url.replace(v, "$1_=" + V);
            B.url = K + (K === B.url ? (~B.url.indexOf("?") ? "&" : "?") + "_=" + V : "")
        }
        (B.data && B.hasContent && B.contentType !== !1 || t.contentType) && X.setRequestHeader("Content-Type", B.contentType), B.ifModified && (L = L || B.url, S[L] && X.setRequestHeader("If-Modified-Since", S[L]), O[L] && X.setRequestHeader("If-None-Match", O[L])), X.setRequestHeader("Accept", B.dataTypes[0] && B.accepts[B.dataTypes[0]] ? B.accepts[B.dataTypes[0]] + ("*" !== B.dataTypes[0] ? ", " + C + "; q=0.01" : "") : B.accepts["*"]);
        for (var G in B.headers) X.setRequestHeader(G, B.headers[G]);
        if (B.beforeSend && (B.beforeSend.call(I, X, B) === !1 || 2 === W)) return X.abort();
        U = "abort";
        for (var G in {success: 1, error: 1, complete: 1}) X[G](B[G]);
        if (M = o(A, B, t, X)) {
            X.readyState = 1, B.async && B.timeout > 0 && ($ = setTimeout(function () {
                X.abort("timeout")
            }, B.timeout));
            try {
                W = 1, M.send(z, n)
            } catch (Y) {
                if (!(2 > W)) throw Y;
                n(-1, Y)
            }
        } else n(-1, "No Transport");
        return X
    }, function (e, t) {
        this.url = e, this.options = t
    }), baidu.ajax.settings = {
        url: f,
        isLocal: b.test(N[1]),
        global: !0,
        type: "GET",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        processData: !0,
        async: !0,
        accepts: {
            xml: "application/xml, text/xml",
            html: "text/html",
            text: "text/plain",
            json: "application/json, text/javascript",
            "*": C
        },
        contents: {xml: /xml/, html: /html/, json: /json/},
        responseFields: {xml: "responseXML", text: "responseText"},
        converters: {"* text": window.String, "text html": !0, "text json": t, "text xml": e},
        flatOptions: {context: !0, url: !0}
    }, baidu.ajax.setup = function (e, t) {
        return t ? u(e, baidu.ajax.settings) : (t = e, e = baidu.ajax.settings), u(e, t), e
    }, baidu.ajax.param = function (e, t) {
        var n = [];
        if ("array" === baidu.type(e)) baidu.forEach(e, function (e) {
            d(n, e.name, e.value)
        }); else for (var i in e) s(n, i, e[i], t);
        return n.join("&").replace(/%20/g, "+")
    }, baidu.ajax.prefilter = i(k), baidu.ajax.transport = i(A);
    var L = [], j = /(=)\?(?=&|$)|\?\?/, D = (new Date).getTime();
    baidu.ajax.setup({
        jsonp: "callback", jsonpCallback: function () {
            var e = L.pop() || baidu.id.key + "_" + D++;
            return this[e] = !0, e
        }
    }), baidu.ajax.prefilter("json jsonp", function (e, t, n) {
        var i, r, a, o = e.data, u = e.url, d = e.jsonp !== !1, s = d && j.test(u),
            c = d && !s && "string" === baidu.type(o) && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && j.test(o);
        return "jsonp" === e.dataTypes[0] || s || c ? (i = e.jsonpCallback = "function" === baidu.type(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, r = window[i], s ? e.url = u.replace(j, "$1" + i) : c ? e.data = o.replace(j, "$1" + i) : d && (e.url += (/\?/.test(u) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
            return a[0]
        }, e.dataTypes[0] = "json", window[i] = function () {
            a = arguments
        }, n.always(function () {
            window[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, L.push(i)), a && "function" === baidu.type(r) && r(a[0]), a = r = void 0
        }), "script") : void 0
    }), baidu.ajax.setup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /javascript|ecmascript/},
        converters: {
            "text script": function (e) {
                return n(e), e
            }
        }
    }), baidu.ajax.prefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), baidu.ajax.transport("script", function (e) {
        if (e.crossDomain) {
            var t, n = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
            return {
                send: function (i, r) {
                    t = document.createElement("script"), t.async = "async", e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, i) {
                        (i || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, n && t.parentNode && n.removeChild(t), t = void 0, !i && r(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(0, 1)
                }
            }
        }
    });
    var H, M = 0, $ = window.ActiveXObject ? function () {
        for (var e in H) H[e](0, 1)
    } : !1;
    baidu.ajax.settings.xhr = window.ActiveXObject ? function () {
        return !this.isLocal && c() || l()
    } : c, void function (e) {
        baidu.extend(baidu.support, {ajax: !!e, cors: !!e && "withCredentials" in e})
    }(baidu.ajax.settings.xhr()), baidu.support.ajax && baidu.ajax.transport(function (e) {
        if (!e.crossDomain || baidu.support.cors) {
            var t;
            return {
                send: function (n, i) {
                    var r, a = e.xhr();
                    if (e.username ? a.open(e.type, e.url, e.async, e.username, e.password) : a.open(e.type, e.url, e.async), e.xhrFields) for (var o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (var o in n) a.setRequestHeader(o, n[o])
                    } catch (u) {
                    }
                    a.send(e.hasContent && e.data || null), t = function (n, o) {
                        var u, d, s, c, l;
                        try {
                            if (t && (o || 4 === a.readyState)) if (t = void 0, r && (a.onreadystatechange = function () {
                            }, $ && delete H[r]), o) 4 !== a.readyState && a.abort(); else {
                                u = a.status, s = a.getAllResponseHeaders(), c = {}, l = a.responseXML, l && l.documentElement && (c.xml = l);
                                try {
                                    c.text = a.responseText
                                } catch (f) {
                                }
                                try {
                                    d = a.statusText
                                } catch (f) {
                                    d = ""
                                }
                                u || !e.isLocal || e.crossDomain ? 1223 === u && (u = 204) : u = c.text ? 200 : 404
                            }
                        } catch (b) {
                            !o && i(-1, b)
                        }
                        c && i(u, d, c, s)
                    }, e.async ? 4 === a.readyState ? setTimeout(t, 0) : (r = ++M, $ && (H || (H = {}, baidu.dom(window).on("unload", $)), H[r] = t), a.onreadystatechange = t) : t()
                }, abort: function () {
                    t && t(0, 1)
                }
            }
        }
    })
}(), baidu.createChain("fn", function (e) {
    return new baidu.fn.$Fn(~"function|string".indexOf(baidu.type(e)) ? e : function () {
    })
}, function (e) {
    this.fn = e
}), baidu.array.extend({
    contains: function (e) {
        return this.indexOf(e) > -1
    }
}), baidu.each = function (e, t, n) {
    var i, r, a, o;
    if ("function" == typeof t && e) if (r = "number" == typeof e.length ? e.length : e.byteLength, "number" == typeof r) {
        if ("function" == typeof e) return e;
        for (i = 0; r > i && (a = e[i] || e.charAt && e.charAt(i), o = t.call(n || a, i, a, e), o !== !1 && "break" != o); i++) ;
    } else if ("number" == typeof e) for (i = 0; e > i && (o = t.call(n || i, i, i, i), o !== !1 && "break" != o); i++) ; else if ("object" == typeof e) for (i in e) if (e.hasOwnProperty(i) && (o = t.call(n || e[i], i, e[i], e), o === !1 || "break" == o)) break;
    return e
}, void function () {
    Array.prototype.each = function (e, t) {
        return baidu.each(this, e, t)
    }, Array.prototype.forEach = function (e, t) {
        return baidu.forEach(this, e, t)
    }, baidu.array.each = baidu.array.forEach = function (e, t, n) {
        var i = function (e, i, r) {
            return t.call(n || r, i, e, r)
        };
        return baidu.isEnumerable(e) ? baidu.each(e, "function" == typeof t ? i : "", n) : e
    }
}(), baidu.array.extend({
    empty: function () {
        return this.length = 0, this
    }
}), Array.prototype.every = function (e, t) {
    baidu.check("function(,.+)?", "baidu.array.every");
    var n, i;
    for (n = 0, i = this.length; i > n; n++) if (!e.call(t || this, this[n], n, this)) return !1;
    return !0
}, Array.prototype.filter = function (e, t) {
    var n, i, r, a = baidu.array([]), o = 0;
    if ("function" === baidu.type(e)) for (n = 0, i = this.length; i > n; n++) r = this[n], e.call(t || this, r, n, this) === !0 && (a[o++] = r);
    return a
}, baidu.array.extend({
    find: function (e) {
        var t, n, i = this.length;
        if ("function" == baidu.type(e)) for (t = 0; i > t; t++) if (n = this[t], e.call(this, n, t, this) === !0) return n;
        return null
    }
}), baidu.array.extend({
    hash: function (e) {
        var t, n, i = {}, r = e && e.length;
        for (t = 0, n = this.length; n > t; t++) i[this[t]] = r && r > t ? e[t] : !0;
        return i
    }
}), baidu.array.extend({
    lastIndexOf: function (e, t) {
        baidu.check(".+(,number)?", "baidu.array.lastIndexOf");
        var n = this.length;
        for ((!(t = 0 | t) || t >= n) && (t = n - 1), 0 > t && (t += n); t >= 0; t--) if (t in this && this[t] === e) return t;
        return -1
    }
}), Array.prototype.map = function (e, t) {
    baidu.check("function(,.+)?", "baidu.array.map");
    var n, i, r = baidu.array([]);
    for (n = 0, i = this.length; i > n; n++) r[n] = e.call(t || this, this[n], n, this);
    return r
}, Array.prototype.reduce = function (e, t) {
    baidu.check("function(,.+)?", "baidu.array.reduce");
    var n = 0, i = this.length;
    if ("undefined" != typeof t || (t = this[n++], "undefined" != typeof t)) {
        for (; i > n; n++) t = e(t, this[n], n, this);
        return t
    }
}, baidu.array.extend({
    remove: function (e) {
        for (var t = this.length; t--;) this[t] === e && this.splice(t, 1);
        return this
    }
}), baidu.array.extend({
    removeAt: function (e) {
        return baidu.check("number", "baidu.array.removeAt"), this.splice(e, 1)[0]
    }
}), Array.prototype.some = function (e, t) {
    baidu.check("function(,.+)?", "baidu.array.some");
    var n, i;
    for (n = 0, i = this.length; i > n; n++) if (e.call(t || this, this[n], n, this)) return !0;
    return !1
}, baidu.object.extend = baidu.extend, baidu.lang.isFunction = baidu.isFunction, baidu.base = baidu.base || {}, baidu.cookie = baidu.cookie || {}, baidu.cookie._isValidKey = function (e) {
    return new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+$').test(e)
}, baidu.cookie.getRaw = function (e) {
    if (baidu.cookie._isValidKey(e)) {
        var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), n = t.exec(document.cookie);
        if (n) return n[2] || null
    }
    return null
}, baidu.cookie.get = function (e) {
    var t = baidu.cookie.getRaw(e);
    return "string" == typeof t ? t = decodeURIComponent(t) : null
}, baidu.cookie.setRaw = function (e, t, n) {
    if (baidu.cookie._isValidKey(e)) {
        n = n || {};
        var i = n.expires;
        "number" == typeof n.expires && (i = new Date, i.setTime(i.getTime() + n.expires)), document.cookie = e + "=" + t + (n.path ? "; path=" + n.path : "") + (i ? "; expires=" + i.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
    }
}, baidu.cookie.remove = function (e, t) {
    t = t || {}, t.expires = new Date(0), baidu.cookie.setRaw(e, "", t)
}, baidu.cookie.set = function (e, t, n) {
    baidu.cookie.setRaw(e, encodeURIComponent(t), n)
}, baidu.date = baidu.date || {}, baidu.createChain("number", function (e) {
    var t = parseFloat(e), n = isNaN(t) ? t : e;
    return clazz = "number" == typeof n ? Number : String, pro = clazz.prototype, n = new clazz(n), baidu.forEach(baidu.number.$Number.prototype, function (e, t) {
        pro[t] || (n[t] = e)
    }), n
}), baidu.number.extend({
    pad: function (e) {
        var t = this, n = "", i = 0 > t, r = String(Math.abs(t));
        return r.length < e && (n = new Array(e - r.length + 1).join("0")), (i ? "-" : "") + n + r
    }
}), baidu.date.format = function (e, t) {
    function n(e, n) {
        t = t.replace(e, n)
    }

    if ("string" != typeof t) return e.toString();
    var i = baidu.number.pad, r = e.getFullYear(), a = e.getMonth() + 1, o = e.getDate(), u = e.getHours(),
        d = e.getMinutes(), s = e.getSeconds();
    return n(/yyyy/g, i(r, 4)), n(/yy/g, i(parseInt(r.toString().slice(2), 10), 2)), n(/MM/g, i(a, 2)), n(/M/g, a), n(/dd/g, i(o, 2)), n(/d/g, o), n(/HH/g, i(u, 2)), n(/H/g, u), n(/hh/g, i(u % 12, 2)), n(/h/g, u % 12), n(/mm/g, i(d, 2)), n(/m/g, d), n(/ss/g, i(s, 2)), n(/s/g, s), t
}, baidu.date.parse = function (e) {
    var t = new RegExp("^\\d+(\\-|\\/)\\d+(\\-|\\/)\\d+$");
    if ("string" == typeof e) {
        if (t.test(e) || isNaN(Date.parse(e))) {
            var n = e.split(/ |T/), i = n.length > 1 ? n[1].split(/[^\d]/) : [0, 0, 0], r = n[0].split(/[^\d]/);
            return new Date(r[0] - 0, r[1] - 1, r[2] - 0, i[0] - 0, i[1] - 0, i[2] - 0)
        }
        return new Date(e)
    }
    return new Date
}, baidu.dom.createElements = function () {
    function e(e, t) {
        var n, i, r, a = e.getElementsByTagName("SCRIPT");
        for (n = a.length - 1; n >= 0; n--) r = a[n], i = t.createElement("SCRIPT"), r.id && (i.id = r.id), r.src && (i.src = r.src), r.type && (i.type = r.type), i[r.text ? "text" : "textContent"] = r.text || r.textContent, r.parentNode.replaceChild(i, r)
    }

    var t = /<(\w+)/i, n = /<|&#?\w+;/, i = {
        area: [1, "<map>", "</map>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        option: [1, "<select multiple='multiple'>", "</select>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        _default: [0, "", ""]
    };
    return i.optgroup = i.option, i.tbody = i.tfoot = i.colgroup = i.caption = i.thead, i.th = i.td, function (r, a) {
        baidu.isNumber(r) && (r = r.toString()), a = a || document;
        var o, u, d, s = r, c = (s.length, a.createElement("div")), l = a.createDocumentFragment(), f = [];
        if (baidu.isString(s)) if (n.test(s)) {
            for (o = i[s.match(t)[1].toLowerCase()] || i._default, c.innerHTML = "<i>mz</i>" + o[1] + s + o[2], c.removeChild(c.firstChild), e(c, a), u = o[0], d = c; u--;) d = d.firstChild;
            baidu.merge(f, d.childNodes), baidu.forEach(f, function (e) {
                l.appendChild(e)
            }), c = d = null
        } else f.push(a.createTextNode(s));
        return c = null, f
    }
}(), baidu.dom.extend({
    add: function (e, t) {
        var n = baidu.array(this.get());
        switch (baidu.type(e)) {
            case"HTMLElement":
                n.push(e);
                break;
            case"$DOM":
            case"array":
                baidu.merge(n, e);
                break;
            case"string":
                baidu.merge(n, baidu.dom(e, t));
                break;
            default:
                "object" == typeof e && e.length && baidu.merge(n, e)
        }
        return baidu.dom(n.unique())
    }
}), baidu.dom.extend({
    addClass: function (e) {
        if (arguments.length <= 0) return this;
        switch (typeof e) {
            case"string":
                e = e.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                var t = e.split(" ");
                baidu.forEach(this, function (e) {
                    var n = "";
                    e.className && (n = e.className);
                    for (var i = 0; i < t.length; i++) -1 == (" " + n + " ").indexOf(" " + t[i] + " ") && (n += " " + t[i]);
                    e.className = n.replace(/^\s+/g, "")
                });
                break;
            case"function":
                baidu.forEach(this, function (t, n) {
                    baidu.dom(t).addClass(e.call(t, n, t.className))
                })
        }
        return this
    }
}), baidu.dom.extend({
    getDocument: function () {
        if (this.size() <= 0) return void 0;
        var e = this[0];
        return 9 == e.nodeType ? e : e.ownerDocument || e.document
    }
}), baidu._util_.cleanData = function (e) {
    for (var t, n, i = 0; n = e[i]; i++) t = baidu.id(n, "get"), t && (baidu._util_.eventBase.removeAll(n), baidu.id(n, "remove"))
}, baidu.dom.extend({
    empty: function () {
        for (var e, t = 0; e = this[t]; t++) for (1 === e.nodeType && baidu._util_.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
        return this
    }
}), baidu.dom.extend({
    append: function () {
        return baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.append"), baidu._util_.smartInsert(this, arguments, function (e) {
            1 === this.nodeType && this.appendChild(e)
        }), this
    }
}), baidu.dom.extend({
    html: function (e) {
        var t, n = baidu.dom, i = (baidu._util_, this), r = !1;
        if (this.size() <= 0) switch (typeof e) {
            case"undefined":
                return void 0;
            default:
                return i
        }
        var a = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            o = /<(?:script|style|link)/i, u = new RegExp("<(?:" + a + ")[\\s/>]", "i"), d = /^\s+/,
            s = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, c = /<([\w:]+)/, l = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                area: [1, "<map>", "</map>"],
                _default: [0, "", ""]
            };
        return l.optgroup = l.option, l.tbody = l.tfoot = l.colgroup = l.caption = l.thead, l.th = l.td, baidu.support.htmlSerialize || (l._default = [1, "X<div>", "</div>"]), baidu.forEach(i, function (a, f) {
            if (!t) {
                var b = n(a);
                switch (typeof e) {
                    case"undefined":
                        return t = 1 === a.nodeType ? a.innerHTML : void 0;
                    case"number":
                        e = String(e);
                    case"string":
                        if (r = !0, !(o.test(e) || !baidu.support.htmlSerialize && u.test(e) || !baidu.support.leadingWhitespace && d.test(e) || l[(c.exec(e) || ["", ""])[1].toLowerCase()])) {
                            e = e.replace(s, "<$1></$2>");
                            try {
                                1 === a.nodeType && (b.empty(), a.innerHTML = e), a = 0
                            } catch (p) {
                            }
                        }
                        a && i.empty().append(e);
                        break;
                    case"function":
                        r = !0, b.html(e.call(a, f, b.html()))
                }
            }
        }), r ? i : t
    }
}), baidu._util_.smartInsert = function (e, t, n) {
    if (!(t.length <= 0 || e.size() <= 0)) {
        if ("function" === baidu.type(t[0])) {
            var i, r = t[0];
            return baidu.forEach(e, function (e, a) {
                i = baidu.dom(e), t[0] = r.call(e, a, i.html()), baidu._util_.smartInsert(i, t, n)
            })
        }
        for (var a, o, u = e.getDocument() || document, d = u.createDocumentFragment(), s = e.length - 1, c = 0; o = t[c]; c++) o.nodeType ? d.appendChild(o) : baidu.forEach(~"string|number".indexOf(baidu.type(o)) ? baidu.dom.createElements(o, u) : o, function (e) {
            d.appendChild(e)
        });
        (a = d.firstChild) && baidu.forEach(e, function (e, t) {
            n.call("table" === e.nodeName.toLowerCase() && "tr" === a.nodeName.toLowerCase() ? e.tBodies[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e, s > t ? d.cloneNode(!0) : d)
        })
    }
}, baidu.dom.extend({
    after: function () {
        baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.after");
        var e = this[0] && this[0].parentNode, t = !e && [];
        return baidu._util_.smartInsert(this, arguments, function (n) {
            e ? e.insertBefore(n, this.nextSibling) : baidu.merge(t, n.childNodes)
        }), t && baidu.merge(this, t), this
    }
}), baidu.dom.extend({
    map: function (e) {
        baidu.check("function", "baidu.dom.map");
        var t = baidu.dom();
        return baidu.forEach(this, function (n, i) {
            t[t.length++] = e.call(n, i, n, n)
        }), t
    }
}), baidu._util_.isXML = function (e) {
    var t = (e ? e.ownerDocument || e : 0).documentElement;
    return t ? "HTML" !== t.nodeName : !1
}, baidu.dom.extend({
    clone: function () {
        function e(e) {
            return e.getElementsByTagName ? e.getElementsByTagName("*") : e.querySelectorAll ? e.querySelectorAll("*") : []
        }

        function t(e, t) {
            switch (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), t.nodeName.toLowerCase()) {
                case"object":
                    t.outerHTML = e.outerHTML;
                    break;
                case"textarea":
                case"input":
                    ~"checked|radio".indexOf(e.type) && (e.checked && (t.defaultChecked = t.checked = e.checked), t.value !== e.value && (t.value = e.value)), t.defaultValue = e.defaultValue;
                    break;
                case"options":
                    t.selected = e.defaultSelected;
                    break;
                case"script":
                    t.text !== e.text && (t.text = e.text)
            }
            t[baidu.key] && t.removeAttribute(baidu.key)
        }

        function n(e, t) {
            if (1 === t.nodeType && baidu.id(e, "get")) {
                var n = r.get(e);
                for (var i in n) for (var a, o = 0; a = n[i][o]; o++) r.add(t, i, a)
            }
        }

        function i(i, r, a) {
            var o, u, d, s = i.cloneNode(!0);
            if (!(baidu.support.noCloneEvent && baidu.support.noCloneChecked || 1 !== i.nodeType && 11 !== i.nodeType || baidu._util_.isXML(i))) {
                t(i, s), o = e(i), u = e(s), d = o.length;
                for (var c = 0; d > c; c++) u[c] && t(o[c], u[c])
            }
            if (r && (n(i, s), a)) {
                o = e(i), u = e(s), d = o.length;
                for (var c = 0; d > c; c++) n(o[c], u[c])
            }
            return s
        }

        var r = baidu._util_.eventBase;
        return function (e, t) {
            return e = !!e, t = !!t, this.map(function () {
                return i(this, e, t)
            })
        }
    }()
}), baidu._util_.smartInsertTo = function (e, t, n, i) {
    var r, a = baidu.dom(t), o = a[0];
    if (!i || !o || o.parentNode && 11 !== o.parentNode.nodeType) for (var u, d = 0; u = a[d]; d++) baidu._util_.smartInsert(baidu.dom(u), d > 0 ? e.clone(!0) : e, n); else i = "before" === i, r = baidu.merge(i ? e : a, i ? a : e), e !== r && (e.length = 0, baidu.merge(e, r))
}, baidu.dom.extend({
    appendTo: function (e) {
        return baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.appendTo"), baidu._util_.smartInsertTo(this, e, function (e) {
            this.appendChild(e)
        }), this
    }
}), baidu.extend(baidu._util_, {
    rfocusable: /^(?:button|input|object|select|textarea)$/i,
    rclickable: /^a(?:rea)?$/i,
    rboolean: /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
    propFix: {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    propHooks: {
        tabIndex: {
            get: function (e) {
                var t = baidu._util_, n = e.getAttributeNode("tabindex");
                return n && n.specified ? parseInt(n.value, 10) : t.rfocusable.test(e.nodeName) || t.rclickable.test(e.nodeName) && e.href ? 0 : void 0
            }
        }
    }
}), !baidu.support.enctype) {
    var bu = baidu._util_;
    bu.propFix.enctype = "encoding"
}
if (!baidu.support.optSelected) {
    var bu = baidu._util_;
    bu.propHooks.selected = baidu.extend(bu.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })
}
if (baidu.extend(baidu, {
    _error: function (e) {
        throw new Error(e)
    }, _nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
    }
}), baidu.extend(baidu._util_, {
    rfocusable: /^(?:button|input|object|select|textarea)$/i,
    rtype: /^(?:button|input)$/i,
    rclickable: /^a(?:rea)?$/i,
    nodeHook: {},
    attrHooks: {
        type: {
            set: function (e, t) {
                var n = baidu._util_;
                if (n.rtype.test(e.nodeName) && e.parentNode) baidu._error("type property can't be changed"); else if (!baidu.support.radioValue && "radio" === t && baidu._nodeName(e, "input")) {
                    var i = e.value;
                    return e.setAttribute("type", t), i && (e.value = i), t
                }
            }
        }, value: {
            get: function (e, t) {
                var n = baidu._util_;
                return n.nodeHook && baidu._nodeName(e, "button") ? n.nodeHook.get(e, t) : t in e ? e.value : null
            }, set: function (e, t, n) {
                return bu.nodeHook && baidu._nodeName(e, "button") ? bu.nodeHook.set(e, t, n) : void (e.value = t)
            }
        }
    },
    boolHook: {
        get: function (e, t) {
            var n, i = baidu(e).prop(t);
            return i === !0 || "boolean" != typeof i && (n = e.getAttributeNode(t)) && n.nodeValue !== !1 ? t.toLowerCase() : void 0
        }, set: function (e, t, n) {
            var i;
            return t === !1 ? baidu(e).removeAttr(n) : (i = baidu._util_.propFix[n] || n, i in e && (e[i] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }
}), baidu._util_.attrHooks.tabindex = baidu._util_.propHooks.tabIndex, !baidu.support.getSetAttribute) {
    var bu = baidu._util_, fixSpecified = {name: !0, id: !0, coords: !0};
    bu.nodeHook = {
        get: function (e, t) {
            var n;
            return n = e.getAttributeNode(t), n && (fixSpecified[t] ? "" !== n.nodeValue : n.specified) ? n.nodeValue : void 0
        }, set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = document.createAttribute(n), e.setAttributeNode(i)), i.nodeValue = t + ""
        }
    }, bu.attrHooks.tabindex.set = bu.nodeHook.set, baidu.forEach(["width", "height"], function (e) {
        bu.attrHooks[e] = baidu.extend(bu.attrHooks[e], {
            set: function (t, n) {
                return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
            }
        })
    }), bu.attrHooks.contenteditable = {
        get: bu.nodeHook.get, set: function (e, t, n) {
            "" === t && (t = "false"), bu.nodeHook.set(e, t, n)
        }
    }
}
if (!baidu.support.hrefNormalized) {
    var bu = baidu._util_;
    baidu.forEach(["href", "src", "width", "height"], function (e) {
        bu.attrHooks[e] = baidu.extend(bu.attrHooks[e], {
            get: function (t) {
                var n = t.getAttribute(e, 2);
                return null === n ? void 0 : n
            }
        })
    })
}
if (!baidu.support.style) {
    var bu = baidu._util_;
    bu.attrHooks.style = {
        get: function (e) {
            return e.style.cssText.toLowerCase() || void 0
        }, set: function (e, t) {
            return e.style.cssText = "" + t
        }
    }
}
if (baidu.dom.extend({
    prop: function (e, t) {
        if (arguments.length <= 0 || "function" == typeof e) return this;
        var n, i = this, r = !1;
        return this.size() <= 0 ? e && t ? i : e && !t ? void 0 : i : (baidu.forEach(this, function (a, o) {
            if (!n) {
                var u, d, s, c = baidu.dom, l = baidu._util_, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) switch (s = 1 !== f || !baidu._util_.isXML(a), s && (e = l.propFix[e] || e, d = l.propHooks[e]), typeof e) {
                    case"string":
                        if ("undefined" == typeof t) n = d && "get" in d && null !== (u = d.get(a, e)) ? u : a[e]; else if ("function" == typeof t) {
                            r = !0;
                            var b = c(a);
                            b.prop(e, t.call(a, o, b.prop(e)))
                        } else {
                            if (r = !0, d && "set" in d && void 0 !== (u = d.set(a, t, e))) return u;
                            a[e] = t
                        }
                        break;
                    case"object":
                        r = !0;
                        var b = c(a);
                        for (key in e) b.prop(key, e[key]);
                        break;
                    default:
                        n = i
                }
            }
        }), r ? this : n)
    }
}), baidu.makeArray = function (e, t) {
    var n = t || [];
    return e ? (null == e.length || ~"string|function|regexp".indexOf(baidu.type(e)) ? Array.prototype.push.call(n, e) : baidu.merge(n, e), n) : n
}, baidu.extend(baidu._util_, {
    nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
    }, valHooks: {
        option: {
            get: function (e) {
                var t = e.attributes.value;
                return !t || t.specified ? e.value : e.text
            }
        }, select: {
            get: function (e) {
                var t, n, i, r, a = e.selectedIndex, o = [], u = e.options, d = "select-one" === e.type;
                if (0 > a) return null;
                for (n = d ? a : 0, i = d ? a + 1 : u.length; i > n; n++) if (r = u[n], !(!r.selected || (baidu.support.optDisabled ? r.disabled : null !== r.getAttribute("disabled")) || r.parentNode.disabled && baidu._util_.nodeName(r.parentNode, "optgroup"))) {
                    if (t = baidu.dom(r).val(), d) return t;
                    o.push(t)
                }
                return d && !o.length && u.length ? baidu(u[a]).val() : o
            }, set: function (e, t) {
                var n = baidu.makeArray(t);
                return baidu(e).find("option").each(function () {
                    this.selected = baidu.array(n).indexOf(baidu(this).val()) >= 0
                }), n.length || (e.selectedIndex = -1), n
            }
        }
    }
}), !baidu.support.getSetAttribute) {
    var fixSpecified = {name: !0, id: !0, coords: !0};
    baidu._util_.valHooks.button = {
        get: function (e, t) {
            var n;
            return n = e.getAttributeNode(t), n && (fixSpecified[t] ? "" !== n.value : n.specified) ? n.value : void 0
        }, set: function (e, t, n) {
            var i = e.getAttributeNode(n);
            return i || (i = document.createAttribute(n), e.setAttributeNode(i)), i.value = t + ""
        }
    }
}
baidu.support.checkOn || baidu.forEach(["radio", "checkbox"], function () {
    baidu._util_.valHooks[this] = {
        get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
    }
}), baidu.forEach(["radio", "checkbox"], function (e) {
    baidu._util_.valHooks[e] = baidu.extend(baidu._util_.valHooks[e], {
        set: function (e, t) {
            return baidu.isArray(t) ? e.checked = baidu.array(t).indexOf(baidu(e).val()) >= 0 : void 0
        }
    })
}), baidu.dom.extend({
    val: function (e) {
        var t, n = baidu.dom, i = baidu._util_, r = this, a = !1;
        if (this.size() <= 0) switch (typeof e) {
            case"undefined":
                return void 0;
            default:
                return r
        }
        return baidu.forEach(r, function (r, o) {
            var u, d = /\r/g;
            if (!t) switch (typeof e) {
                case"undefined":
                    return r ? (u = i.valHooks[r.type] || i.valHooks[r.nodeName.toLowerCase()], u && "get" in u && void 0 !== (t = u.get(r, "value")) ? t : (t = r.value, "string" == typeof t ? t.replace(d, "") : null == t ? "" : t)) : t;
                case"function":
                    a = !0;
                    var s = n(r);
                    s.val(e.call(r, o, s.val()));
                    break;
                default:
                    if (a = !0, 1 !== r.nodeType) return;
                    null == e ? e = "" : "number" == typeof e ? e += "" : baidu.isArray(e) && (e = baidu.forEach(e, function (e) {
                        return null == e ? "" : e + ""
                    })), u = i.valHooks[r.type] || i.valHooks[r.nodeName.toLowerCase()], u && "set" in u && void 0 !== u.set(r, e, "value") || (r.value = e)
            }
        }), a ? r : t
    }
}), baidu._util_.access = function (e, t, n) {
    if (this.size() <= 0) return this;
    switch (baidu.type(e)) {
        case"string":
            if (void 0 === t) return n.call(this, this[0], e);
            for (var i, r = 0; i = this[r]; r++) n.call(this, i, e, "function" === baidu.type(t) ? t.call(i, r, n.call(this, i, e)) : t);
            break;
        case"object":
            for (var r in e) baidu._util_.access.call(this, r, e[r], n)
    }
    return this
}, baidu.dom.extend({
    getComputedStyle: function (e) {
        var t = this[0].ownerDocument.defaultView, n = t && t.getComputedStyle && t.getComputedStyle(this[0], null),
            i = n ? n.getPropertyValue(e) || n[e] : "";
        return i || this[0].style[e]
    }
}), baidu.dom.extend({
    getCurrentStyle: function () {
        var e = document.documentElement.currentStyle ? function (e) {
            return this[0].currentStyle ? this[0].currentStyle[e] : this[0].style[e]
        } : function (e) {
            return this.getComputedStyle(e)
        };
        return function (t) {
            return e.call(this, t)
        }
    }()
}), baidu._util_.getWidthOrHeight = function () {
    function e(e, t) {
        var n = {};
        for (var i in t) n[i] = e.style[i], e.style[i] = t[i];
        return n
    }

    var t = {}, n = {position: "absolute", visibility: "hidden", display: "block"};
    return baidu.forEach(["Width", "Height"], function (i) {
        var r = {Width: ["Right", "Left"], Height: ["Top", "Bottom"]}[i];
        t["get" + i] = function (t, a) {
            var o = baidu.dom(t), u = t["offset" + i], d = 0 === u && e(t, n), s = "padding|border";
            return d && (u = t["offset" + i]), a && baidu.forEach(a.split("|"), function (e) {
                ~s.indexOf(e) ? s = s.replace(new RegExp("\\|?" + e + "\\|?"), "") : (u += parseFloat(o.getCurrentStyle(e + r[0])) || 0, u += parseFloat(o.getCurrentStyle(e + r[1])) || 0)
            }), s && baidu.forEach(s.split("|"), function (e) {
                u -= parseFloat(o.getCurrentStyle(e + r[0] + ("border" === e ? "Width" : ""))) || 0, u -= parseFloat(o.getCurrentStyle(e + r[1] + ("border" === e ? "Width" : ""))) || 0
            }), d && e(t, d), u
        }
    }), function (e, n, i) {
        return t["width" === n ? "getWidth" : "getHeight"](e, i)
    }
}(), baidu.string.extend({
    toCamelCase: function () {
        var e = this.valueOf();
        return e.indexOf("-") < 0 && e.indexOf("_") < 0 ? e : e.replace(/[-_][^-_]/g, function (e) {
            return e.charAt(1).toUpperCase()
        })
    }
}), baidu.dom.styleFixer = function () {
    var e = /alpha\s*\(\s*opacity\s*=\s*(\d{1,3})/i, t = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        n = "fillOpacity,fontWeight,opacity,orphans,widows,zIndex,zoom",
        i = {"float": baidu.support.cssFloat ? "cssFloat" : "styleFloat"},
        r = {fontWeight: {normal: 400, bold: 700, bolder: 700, lighter: 100}}, a = {
            opacity: {}, width: {}, height: {}, fontWeight: {
                get: function (e, t) {
                    var n = o.get(e, t);
                    return r.fontWeight[n] || n
                }
            }
        }, o = {
            set: function (e, t, n) {
                e.style[t] = n
            }
        };
    return baidu.extend(a.opacity, baidu.support.opacity ? {
        get: function (e, t) {
            var n = baidu.dom(e).getCurrentStyle(t);
            return "" === n ? "1" : n
        }
    } : {
        get: function (t) {
            return e.test((t.currentStyle || t.style).filter || "") ? parseFloat(RegExp.$1) / 100 : "1"
        }, set: function (t, n, i) {
            var r = (t.currentStyle || t.style).filter || "", a = 100 * i;
            t.style.zoom = 1, t.style.filter = e.test(r) ? r.replace(e, "Alpha(opacity=" + a) : r + " progid:dximagetransform.microsoft.Alpha(opacity=" + a + ")"
        }
    }), baidu.forEach(["width", "height"], function (e) {
        a[e] = {
            get: function (t) {
                return baidu._util_.getWidthOrHeight(t, e) + "px"
            }, set: function (e, t, n) {
                "number" === baidu.type(n) && 0 > n && (n = 0), o.set(e, t, n)
            }
        }
    }), baidu.extend(o, document.documentElement.currentStyle ? {
        get: function (e, n) {
            var i, r = baidu.dom(e).getCurrentStyle(n);
            return t.test(r) && (i = e.style.left, e.style.left = "fontSize" === n ? "1em" : r, r = e.style.pixelLeft + "px", e.style.left = i), r
        }
    } : {
        get: function (e, t) {
            return baidu.dom(e).getCurrentStyle(t)
        }
    }), function (e, t, r) {
        var u, d, s = baidu.string(t).toCamelCase(), c = void 0 === r ? "get" : "set";
        return s = i[s] || s, u = "number" !== baidu.type(r) || ~n.indexOf(s) ? r : r + "px", (d = a.hasOwnProperty(s) && a[s][c] || o[c])(e, s, u)
    }
}(), baidu.dom.extend({
    css: function (e, t) {
        return baidu.check("^(?:(?:string(?:,(?:number|string|function))?)|object)$", "baidu.dom.css"), baidu._util_.access.call(this, e, t, function (e, t, n) {
            var i = baidu.dom.styleFixer;
            return i ? i(e, t, n) : void 0 === n ? this.getCurrentStyle(t) : e.style[t] = n
        })
    }
}), baidu.dom.extend({
    text: function (e) {
        var t, n = baidu.dom, i = this, r = !1;
        if (this.size() <= 0) switch (typeof e) {
            case"undefined":
                return void 0;
            default:
                return i
        }
        var a = function (e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i]; i++) n += a(t);
            return n
        };
        return baidu.forEach(i, function (i, o) {
            var u = n(i);
            if (!t) switch (typeof e) {
                case"undefined":
                    return t = a(i);
                case"number":
                    e = String(e);
                case"string":
                    r = !0, u.empty().append((i && i.ownerDocument || document).createTextNode(e));
                    break;
                case"function":
                    r = !0, u.text(e.call(i, o, u.text()))
            }
        }), r ? i : t
    }
}), baidu._util_.getWindowOrDocumentWidthOrHeight = baidu._util_.getWindowOrDocumentWidthOrHeight || function () {
    var e = {window: {}, document: {}};
    return baidu.forEach(["Width", "Height"], function (t) {
        var n = "client" + t, i = "offset" + t, r = "scroll" + t;
        e.window["get" + t] = function (e) {
            var t = e.document, i = t.documentElement[n];
            return baidu.browser.isStrict && i || t.body && t.body[n] || i
        }, e.document["get" + t] = function (e) {
            var t = e.documentElement;
            return t[n] >= t[r] ? t[n] : Math.max(e.body[r], t[r], e.body[i], t[i])
        }
    }), function (t, n, i) {
        return e[n]["width" === i ? "getWidth" : "getHeight"](t)
    }
}(), baidu.dom.extend({
    width: function (e) {
        return baidu._util_.access.call(this, "width", e, function (e, t, n) {
            var i = void 0 !== n, r = i && parseFloat(n),
                a = null != e && e == e.window ? "window" : 9 === e.nodeType ? "document" : !1;
            return i && 0 > r || isNaN(r) ? void 0 : (i && /^(?:\d*\.)?\d+$/.test(n += "") && (n += "px"), a ? baidu._util_.getWindowOrDocumentWidthOrHeight(e, a, t) : i ? e.style.width = n : baidu._util_.getWidthOrHeight(e, t))
        })
    }
}), baidu.dom.extend({
    height: function (e) {
        return baidu._util_.access.call(this, "height", e, function (e, t, n) {
            var i = void 0 !== n, r = i && parseFloat(n),
                a = null != e && e == e.window ? "window" : 9 === e.nodeType ? "document" : !1;
            return i && 0 > r || isNaN(r) ? void 0 : (i && /^(?:\d*\.)?\d+$/.test(n += "") && (n += "px"), a ? baidu._util_.getWindowOrDocumentWidthOrHeight(e, a, t) : i ? e.style.height = n : baidu._util_.getWidthOrHeight(e, t))
        })
    }
}), baidu.dom.extend({
    getWindow: function () {
        var e = this.getDocument();
        return this.size() <= 0 ? void 0 : e.parentWindow || e.defaultView
    }
}), baidu.dom.extend({
    offset: function () {
        var e = {
            getDefaultOffset: function (e, t) {
                for (var n = t.documentElement, i = t.body, r = t.defaultView, a = r ? r.getComputedStyle(e, null) : e.currentStyle, o = /^t(?:able|h|d)/i, u = e.offsetParent, d = e.offsetLeft, s = e.offsetTop; (e = e.parentNode) && e !== i && e !== n && (!baidu.support.fixedPosition || "fixed" !== a.position);) a = r ? r.getComputedStyle(e, null) : e.currentStyle, d -= e.scrollLeft, s -= e.scrollTop, e === u && (d += e.offsetLeft, s += e.offsetTop, baidu.support.hasBorderWidth || baidu.support.hasTableCellBorderWidth && o.test(e.nodeName) || (d += parseFloat(a.borderLeftWidth) || 0, s += parseFloat(a.borderTopWidth) || 0), u = e.offsetParent);
                return ~"static,relative".indexOf(a.position) && (d += i.offsetLeft, s += i.offsetTop), baidu.support.fixedPosition && "fixed" === a.position && (d += Math.max(n.scrollLeft, i.scrollLeft), s += Math.max(n.scrollTop, i.scrollTop)), {
                    left: d,
                    top: s
                }
            }, setOffset: function (e, t, n) {
                var i = baidu.dom(e), r = baidu.type(t), a = i.offset(), o = i.getCurrentStyle("left"),
                    u = i.getCurrentStyle("top");
                "function" === r && (t = t.call(e, n, a)), !t || void 0 === t.left && void 0 === t.top || (o = parseFloat(o) || 0, u = parseFloat(u) || 0, void 0 != t.left && (e.style.left = t.left - a.left + o + "px"), void 0 != t.top && (e.style.top = t.top - a.top + u + "px"), "static" === i.getCurrentStyle("position") && (e.style.position = "relative"))
            }, bodyOffset: function (e) {
                var t = baidu.dom(e);
                return {
                    left: e.offsetLeft + parseFloat(t.getCurrentStyle("marginLeft")) || 0,
                    top: e.offsetTop + parseFloat(t.getCurrentStyle("marginTop")) || 0
                }
            }
        };
        return e.getOffset = "getBoundingClientRect" in document.documentElement ? function (t, n) {
            if (!t.getBoundingClientRect) return e.getDefaultOffset(t, n);
            var i = t.getBoundingClientRect(), r = baidu.dom(n).getWindow(), a = n.documentElement, o = n.body;
            return {
                left: i.left + (r.pageXOffset || Math.max(a.scrollLeft, o.scrollLeft)) - (a.clientLeft || o.clientLeft),
                top: i.top + (r.pageYOffset || Math.max(a.scrollTop, o.scrollTop)) - (a.clientTop || o.clientTop)
            }
        } : e.getDefaultOffset, function (t) {
            if (t) {
                baidu.check("^(?:object|function)$", "baidu.dom.offset");
                for (var n, i = 0; n = this[i]; i++) e.setOffset(n, t, i);
                return this
            }
            var r = this[0], a = baidu.dom(r).getDocument();
            return e[r === a.body ? "bodyOffset" : "getOffset"](r, a)
        }
    }()
}), baidu.dom.extend({
    removeAttr: function (e) {
        return arguments.length <= 0 || !e || "string" != typeof e ? this : (baidu.forEach(this, function (t) {
            var n, i, r, a, o, u = 0;
            if (1 === t.nodeType) {
                var d = baidu.dom, s = baidu._util_;
                for (i = e.toLowerCase().split(/\s+/), a = i.length; a > u; u++) r = i[u], r && (n = s.propFix[r] || r, o = s.rboolean.test(r), o || d(t).attr(r, ""), t.removeAttribute(baidu.support.getSetAttribute ? r : n), o && n in t && (t[n] = !1))
            }
        }), this)
    }
}), baidu.dom.extend({
    attr: function (e, t) {
        if (arguments.length <= 0 || "function" == typeof e) return this;
        var n, i = this, r = !1;
        return this.size() <= 0 ? e && t ? i : e && !t ? void 0 : i : (baidu.forEach(this, function (a, o) {
            if (!n) {
                var u, d, s, c = baidu.dom, l = baidu._util_, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f) {
                    if ("undefined" == typeof a.getAttribute) {
                        var b = c(a);
                        n = b.prop(e, t)
                    }
                    switch (typeof e) {
                        case"string":
                            if (s = 1 !== f || !baidu._util_.isXML(a), s && (e = e.toLowerCase(), d = l.attrHooks[e] || (l.rboolean.test(e) ? l.boolHook : l.nodeHook)), "undefined" == typeof t) d && "get" in d && s && null !== (u = d.get(a, e)) ? n = u : (u = a.getAttribute(e), n = null === u ? void 0 : u); else {
                                if ("function" != typeof t) {
                                    r = !0;
                                    var p = {val: !0, css: !0, html: !0, text: !0, width: !0, height: !0, offset: !0};
                                    return e in p ? void (n = c(a)[e](t)) : null === t ? void c(a).removeAttr(e) : d && "set" in d && s && void 0 !== (u = d.set(a, t, e)) ? u : (a.setAttribute(e, "" + t), t)
                                }
                                r = !0;
                                var b = c(a);
                                b.attr(e, t.call(a, o, b.attr(e)))
                            }
                            break;
                        case"object":
                            r = !0;
                            var b = c(a);
                            for (key in e) b.attr(key, e[key]);
                            break;
                        default:
                            n = i
                    }
                }
            }
        }), r ? this : n)
    }
}), baidu.dom.extend({
    before: function () {
        baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.before");
        var e = this[0] && this[0].parentNode, t = !e && [];
        return baidu._util_.smartInsert(this, arguments, function (n) {
            e ? e.insertBefore(n, this) : baidu.merge(t, n.childNodes)
        }), t && (t = baidu.merge(t, this), this.length = 0, baidu.merge(this, t)), this
    }
}), baidu.dom.extend({
    bind: function (e, t, n) {
        return this.on(e, void 0, t, n)
    }
}), baidu.dom.extend({
    children: function (e) {
        var t = [];
        return this.each(function () {
            baidu.forEach(this.children || this.childNodes, function (e) {
                1 == e.nodeType && t.push(e)
            })
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    contents: function () {
        for (var e, t, n = Array.prototype.slice.call(this), i = [], r = 0; t = n[r]; r++) e = t.nodeName, i.push.apply(i, baidu.makeArray(e && "iframe" === e.toLowerCase() ? t.contentDocument || t.contentWindow.document : t.childNodes));
        return this.length = 0, baidu.merge(this, i)
    }
}), baidu.dom.extend({
    data: function () {
        var e = baidu.key, t = baidu.global("_maps_HTMLElementData");
        return function (n, i) {
            if (baidu.forEach(this, function (t) {
                !t[e] && (t[e] = baidu.id())
            }), baidu.isString(n)) {
                if ("undefined" == typeof i) {
                    var r;
                    return this[0] && (r = t[this[0][e]]) && r[n]
                }
                baidu.forEach(this, function (r) {
                    var a = t[r[e]] = t[r[e]] || {};
                    a[n] = i
                })
            } else "object" == baidu.type(n) && baidu.forEach(this, function (i) {
                var r = t[i[e]] = t[i[e]] || {};
                baidu.forEach(n, function (e) {
                    r[e] = n[e]
                })
            });
            return this
        }
    }()
}), baidu.lang.isString = baidu.isString, baidu.dom.extend({
    delegate: function (e, t, n, i) {
        return "function" == typeof n && (i = n, n = null), this.on(t, e, n, i)
    }
}), baidu.dom.extend({
    filter: function (e) {
        return baidu.dom(baidu.dom.match(this, e))
    }
}), baidu.dom.extend({
    remove: function (e, t) {
        arguments.length > 0 && baidu.check("^string(?:,boolean)?$", "baidu.dom.remove");
        for (var n, i = e ? this.filter(e) : this, r = 0; n = i[r]; r++) t || 1 !== n.nodeType || (baidu._util_.cleanData(n.getElementsByTagName("*")), baidu._util_.cleanData([n])), n.parentNode && n.parentNode.removeChild(n);
        return this
    }
}), baidu.dom.extend({
    detach: function (e) {
        return e && baidu.check("^string$", "baidu.dom.detach"), this.remove(e, !0)
    }
}), baidu.dom.extend({
    off: function (e, t, n) {
        var i = baidu._util_.eventBase, r = this;
        return e ? "string" == typeof e ? ("function" == typeof t && (n = t, t = null), e = e.split(/[ ,]/), baidu.forEach(this, function (r) {
            baidu.forEach(e, function (e) {
                i.remove(r, e, n, t)
            })
        })) : "object" == typeof e && baidu.forEach(e, function (e, n) {
            r.off(n, t, e)
        }) : baidu.forEach(this, function (e) {
            i.removeAll(e)
        }), this
    }
}), baidu.dom.extend({
    eq: function (e) {
        return baidu.check("number", "baidu.dom.eq"), baidu.dom(this.get(e))
    }
}), baidu.dom.extend({
    find: function (e) {
        var t, n = [], i = "__tangram__find__", r = baidu.dom();
        switch (baidu.type(e)) {
            case"string":
                this.each(function () {
                    baidu.merge(r, baidu.query(e, this))
                });
                break;
            case"HTMLElement":
                t = e.tagName + "#" + (e.id ? e.id : e.id = i), this.each(function () {
                    baidu.query(t, this).length > 0 && n.push(e)
                }), e.id == i && (e.id = ""), n.length > 0 && baidu.merge(r, n);
                break;
            case"$DOM":
                n = e.get(), this.each(function () {
                    baidu.forEach(baidu.query("*", this), function (e) {
                        for (var t = 0, i = n.length; i > t; t++) e === n[t] && (r[r.length++] = n[t])
                    })
                })
        }
        return r
    }
}), baidu.dom.extend({
    first: function () {
        return baidu.dom(this[0])
    }
}), baidu.dom.first = function (e) {
    return baidu.isString(e) && (e = "#" + e), baidu.dom(e).children()[0]
}, baidu.dom.extend({
    has: function (e) {
        var t = [], n = baidu.dom(document.body);
        return baidu.forEach(this, function (i) {
            n[0] = i, n.find(e).length && t.push(i)
        }), baidu.dom(t)
    }
}), baidu.dom.extend({
    hasClass: function (e) {
        if (arguments.length <= 0 || "function" == typeof e) return this;
        if (this.size() <= 0) return !1;
        e = e.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
        var t, n = e.split(" ");
        return baidu.forEach(this, function (e) {
            for (var i = e.className, r = 0; r < n.length; r++) if (-1 == (" " + i + " ").indexOf(" " + n[r] + " ")) return void (t = !1);
            return t !== !1 ? void (t = !0) : void 0
        }), t
    }
}), baidu.object.isEmpty = function (e) {
    var t = !0;
    if ("[object Array]" === Object.prototype.toString.call(e)) t = !e.length; else {
        e = new Object(e);
        for (var n in e) return !1
    }
    return t
}, baidu.json = baidu.json || {}, baidu.json.parse = function (e) {
    return new Function("return (" + e + ")")()
}, function () {
    function e(e) {
        var t;
        for (t in e) if (("data" !== t || !baidu.object.isEmpty(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    var t = /^-ms-/, n = /-([\da-z])/gi, i = function (e, t) {
        return (t + "").toUpperCase()
    };
    baidu.extend(baidu._util_, {
        camelCase: function (e) {
            return e.replace(t, "ms-").replace(n, i)
        }
    }), baidu.extend(baidu._util_, {
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "baidu" + ("2.0.0" + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (t) {
            return t = t.nodeType ? baidu._util_.cache[t[baidu._util_.expando]] : t[baidu._util_.expando], !!t && !e(t)
        },
        data: function (e, t, n, i) {
            if (baidu._util_.acceptData(e)) {
                var r, a, o = baidu._util_.expando, u = "string" == typeof t, d = e.nodeType,
                    s = d ? baidu._util_.cache : e, c = d ? e[o] : e[o] && o;
                if (c && s[c] && (i || s[c].data) || !u || void 0 !== n) return c || (d ? e[o] = c = baidu._util_.deletedIds.pop() || ++baidu._util_.uuid : c = o), s[c] || (s[c] = {}, d || (s[c].toJSON = function () {
                })), ("object" == typeof t || "function" == typeof t) && (i ? s[c] = baidu.extend(s[c], t) : s[c].data = baidu.extend(s[c].data, t)), r = s[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[baidu._util_.camelCase(t)] = n), u ? (a = r[t], null == a && (a = r[baidu._util_.camelCase(t)])) : a = r, a
            }
        },
        removeData: function (t, n, i) {
            if (baidu._util_.acceptData(t)) {
                var r, a, o, u = t.nodeType, d = u ? baidu._util_.cache : t,
                    s = u ? t[baidu._util_.expando] : baidu._util_.expando;
                if (d[s]) {
                    if (n && (r = i ? d[s] : d[s].data)) {
                        baidu.isArray(n) || (n in r ? n = [n] : (n = baidu._util_.camelCase(n), n = n in r ? [n] : n.split(" ")));
                        for (a = 0, o = n.length; o > a; a++) delete r[n[a]];
                        if (!(i ? e : baidu.object.isEmpty)(r)) return
                    }
                    (i || (delete d[s].data, e(d[s]))) && (u ? baidu._util_.cleanData([t], !0) : baidu.support.deleteExpando || d != d.window ? delete d[s] : d[s] = null)
                }
            }
        },
        _data: function (e, t, n) {
            return baidu._util_.data(e, t, n, !0)
        },
        acceptData: function (e) {
            var t = e.nodeName && baidu._util_.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    })
}(), function () {
    function e(e) {
        if (u[e]) return u[e];
        var r = baidu.dom("<" + e + ">").appendTo(document.body), a = r.css("display");
        return r.remove(), ("none" === a || "" === a) && (n = document.body.appendChild(n || baidu.extend(document.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), t && n.createElement || (t = (n.contentWindow || n.contentDocument).document, t.write("<!doctype html><html><body>"), t.close()), r = t.body.appendChild(t.createElement(e)), a = i(r, "display"), document.body.removeChild(n)), u[e] = a, a
    }

    var t, n, i, r = /^margin/, a = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, o = /^(top|right|bottom|left)$/, u = {};
    baidu.extend(baidu._util_, {
        showHide: function (t, n) {
            for (var r, a, o = [], u = 0, d = t.length; d > u; u++) r = t[u], r.style && (o[u] = baidu._util_._data(r, "olddisplay"), n ? (o[u] || "none" !== r.style.display || (r.style.display = ""), ("" === r.style.display && "none" === i(r, "display") || !baidu.dom.contains(r.ownerDocument.documentElement, r)) && (o[u] = baidu._util_._data(r, "olddisplay", e(r.nodeName)))) : (a = i(r, "display"), o[u] || "none" === a || baidu._util_._data(r, "olddisplay", a)));
            for (u = 0; d > u; u++) r = t[u], r.style && (n && "none" !== r.style.display && "" !== r.style.display || (r.style.display = n ? o[u] || "" : "none"));
            return t
        }
    }), window.getComputedStyle ? i = function (e, t) {
        var n, i, o = getComputedStyle(e, null), u = e.style;
        return o && (n = o[t], "" !== n || baidu.dom.contains(e.ownerDocument.documentElement, e) || (n = baidu.dom(e).css(t)), !baidu.support.pixelMargin && r.test(t) && a.test(n) && (i = u.width, u.width = n, n = o.width, u.width = i)), n
    } : document.documentElement.currentStyle && (i = function (e, t) {
        var n, i, r = e.currentStyle && e.currentStyle[t], u = e.style;
        return null == r && u && u[t] && (r = u[t]), a.test(r) && !o.test(t) && (n = u.left, i = e.runtimeStyle && e.runtimeStyle.left, i && (e.runtimeStyle.left = e.currentStyle.left), u.left = "fontSize" === t ? "1em" : r, r = u.pixelLeft + "px", u.left = n, i && (e.runtimeStyle.left = i)), "" === r ? "auto" : r
    })
}(), baidu.dom.extend({
    hide: function () {
        return baidu._util_.showHide(this), this
    }
}), baidu.dom.extend({
    innerHeight: function () {
        if (this.size() <= 0) return 0;
        var e = this[0], t = null != e && e === e.window ? "window" : 9 === e.nodeType ? "document" : !1;
        return t ? baidu._util_.getWindowOrDocumentWidthOrHeight(e, t, "height") : baidu._util_.getWidthOrHeight(e, "height", "padding")
    }
}), baidu.dom.extend({
    innerWidth: function () {
        if (this.size() <= 0) return 0;
        var e = this[0], t = null != e && e === e.window ? "window" : 9 === e.nodeType ? "document" : !1;
        return t ? baidu._util_.getWindowOrDocumentWidthOrHeight(e, t, "width") : baidu._util_.getWidthOrHeight(e, "width", "padding")
    }
}), baidu.dom.extend({
    insertAfter: function (e) {
        return baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.insertAfter"), baidu._util_.smartInsertTo(this, e, function (e) {
            this.parentNode.insertBefore(e, this.nextSibling)
        }, "after"), this
    }
}), baidu.dom.extend({
    insertBefore: function (e) {
        return baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.insertBefore"), baidu._util_.smartInsertTo(this, e, function (e) {
            this.parentNode.insertBefore(e, this)
        }, "before"), this
    }
}), baidu.dom.extend({
    insertHTML: function (e, t) {
        element = this[0];
        var n, i;
        return element.insertAdjacentHTML && !baidu.browser.opera ? element.insertAdjacentHTML(e, t) : (n = element.ownerDocument.createRange(), e = e.toUpperCase(), "AFTERBEGIN" == e || "BEFOREEND" == e ? (n.selectNodeContents(element), n.collapse("AFTERBEGIN" == e)) : (i = "BEFOREBEGIN" == e, n[i ? "setStartBefore" : "setEndAfter"](element), n.collapse(i)), n.insertNode(n.createContextualFragment(t))), element
    }
}), baidu.dom.extend({
    last: function () {
        return baidu.dom(this.get(-1))
    }
}), baidu.dom.extend({
    next: function (e) {
        var t = baidu.dom();
        return baidu.forEach(this, function (e) {
            for (; (e = e.nextSibling) && e && 1 != e.nodeType;) ;
            e && (t[t.length++] = e)
        }), e ? t.filter(e) : t
    }
}), baidu.dom.extend({
    nextAll: function (e) {
        var t = [];
        return baidu.forEach(this, function (e) {
            for (; e = e.nextSibling;) e && 1 == e.nodeType && t.push(e)
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    nextUntil: function (e, t) {
        var n = baidu.array();
        return baidu.forEach(this, function (t) {
            for (var i = baidu.array(); t = t.nextSibling;) t && 1 == t.nodeType && i.push(t);
            if (e && i.length) {
                var r = baidu.dom.match(i, e);
                r.length && (i = i.slice(0, i.indexOf(r[0])))
            }
            baidu.merge(n, i)
        }), baidu.dom(baidu.dom.match(n, t))
    }
}), baidu.dom.extend({
    not: function (e) {
        var t, n, i, r = this.get(), a = baidu.isArray(e) ? e : baidu.dom.match(this, e);
        for (t = r.length - 1; t > -1; t--) for (n = 0, i = a.length; i > n; n++) a[n] === r[t] && r.splice(t, 1);
        return baidu.dom(r)
    }
}), baidu.dom.extend({
    offsetParent: function () {
        return this.map(function () {
            for (var e = this.offsetParent || document.body, t = /^(?:body|html)$/i; e && "static" === baidu.dom(e).getCurrentStyle("position") && !t.test(e.nodeName);) e = e.offsetParent;
            return e
        })
    }
}), baidu.dom.extend({
    one: function (e, t, n) {
        var i = this;
        if ("function" == typeof t && (n = t, t = void 0), "object" == typeof e && e) return baidu.forEach(e, function (e, n) {
            this.one(n, t, e)
        }, this), this;
        var r = function () {
            return baidu.dom(this).off(e, r), n.apply(i, arguments)
        };
        return this.each(function () {
            var t = baidu.id(this);
            n["_" + t + "_" + e] = r
        }), this.on(e, t, r)
    }
}), baidu.dom.extend({
    outerHeight: function (e) {
        if (this.size() <= 0) return 0;
        var t = this[0], n = null != t && t === t.window ? "window" : 9 === t.nodeType ? "document" : !1;
        return n ? baidu._util_.getWindowOrDocumentWidthOrHeight(t, n, "height") : baidu._util_.getWidthOrHeight(t, "height", "padding|border" + (e ? "|margin" : ""))
    }
}), baidu.dom.extend({
    outerWidth: function (e) {
        if (this.size() <= 0) return 0;
        var t = this[0], n = null != t && t === t.window ? "window" : 9 === t.nodeType ? "document" : !1;
        return n ? baidu._util_.getWindowOrDocumentWidthOrHeight(t, n, "width") : baidu._util_.getWidthOrHeight(t, "width", "padding|border" + (e ? "|margin" : ""))
    }
}), baidu.dom.extend({
    parent: function (e) {
        var t = [];
        return baidu.forEach(this, function (e) {
            (e = e.parentNode) && 1 == e.nodeType && t.push(e)
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    parents: function (e) {
        var t = [];
        return baidu.forEach(this, function (e) {
            for (var n = []; (e = e.parentNode) && 1 == e.nodeType;) n.push(e);
            baidu.merge(t, n)
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    parentsUntil: function (e, t) {
        baidu.check("(string|HTMLElement)(,.+)?", "baidu.dom.parentsUntil");
        var n = [];
        return baidu.forEach(this, function (t) {
            for (var i = baidu.array(); (t = t.parentNode) && 1 == t.nodeType;) i.push(t);
            if (e && i.length) {
                var r = baidu.dom.match(i, e);
                r.length && (i = i.slice(0, i.indexOf(r[0])))
            }
            baidu.merge(n, i)
        }), baidu.dom(baidu.dom.match(n, t))
    }
}), baidu.dom.extend({
    position: function () {
        if (this.size() <= 0) return 0;
        var e = /^(?:body|html)$/i, t = this.offset(), n = this.offsetParent(),
            i = e.test(n[0].nodeName) ? {left: 0, top: 0} : n.offset();
        return t.left -= parseFloat(this.getCurrentStyle("marginLeft")) || 0, t.top -= parseFloat(this.getCurrentStyle("marginTop")) || 0, i.left += parseFloat(n.getCurrentStyle("borderLeftWidth")) || 0, i.top += parseFloat(n.getCurrentStyle("borderTopWidth")) || 0, {
            left: t.left - i.left,
            top: t.top - i.top
        }
    }
}), baidu.dom.extend({
    prepend: function () {
        return baidu.check("^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$", "baidu.dom.prepend"), baidu._util_.smartInsert(this, arguments, function (e) {
            1 === this.nodeType && this.insertBefore(e, this.firstChild)
        }), this
    }
}), baidu.dom.extend({
    prependTo: function (e) {
        return baidu.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.prependTo"), baidu._util_.smartInsertTo(this, e, function (e) {
            this.insertBefore(e, this.firstChild)
        }), this
    }
}), baidu.dom.extend({
    prev: function (e) {
        var t = [];
        return baidu.forEach(this, function (e) {
            for (; e = e.previousSibling;) if (1 == e.nodeType) {
                t.push(e);
                break
            }
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    prevAll: function (e) {
        var t = baidu.array();
        return baidu.forEach(this, function (e) {
            for (var n = []; e = e.previousSibling;) 1 == e.nodeType && n.push(e);
            baidu.merge(t, n.reverse())
        }), baidu.dom("string" == typeof e ? baidu.dom.match(t, e) : t.unique())
    }
}), baidu.dom.extend({
    prevUntil: function (e, t) {
        baidu.check("(string|HTMLElement)(,.+)?", "baidu.dom.prevUntil");
        var n = [];
        return baidu.forEach(this, function (t) {
            for (var i = baidu.array(); t = t.previousSibling;) t && 1 == t.nodeType && i.push(t);
            if (e && i.length) {
                var r = baidu.dom.match(i, e);
                r.length && (i = i.slice(0, i.indexOf(r[0])))
            }
            baidu.merge(n, i)
        }), baidu.dom(baidu.dom.match(n, t))
    }
}), baidu.string.extend({
    escapeReg: function () {
        return this.replace(new RegExp("([.*+?^=!:${}()|[\\]/\\\\])", "g"), "\\$1")
    }
}), baidu.dom.extend({
    removeClass: function (e) {
        switch (arguments.length <= 0 && baidu.forEach(this, function (e) {
            e.className = ""
        }), typeof e) {
            case"string":
                e = String(e).replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                var t = e.split(" ");
                baidu.forEach(this, function (e) {
                    for (var n = e.className, i = 0; i < t.length; i++) for (; (" " + n + " ").indexOf(" " + t[i] + " ") >= 0;) n = (" " + n + " ").replace(" " + t[i] + " ", " ");
                    e.className = n.replace(/^\s+/g, "").replace(/\s+$/g, "")
                });
                break;
            case"function":
                baidu.forEach(this, function (t, n) {
                    baidu.dom(t).removeClass(e.call(t, n, t.className))
                })
        }
        return this
    }
}), baidu.dom.extend({
    removeData: function () {
        var e = baidu.key, t = baidu.global("_maps_HTMLElementData");
        return function (n) {
            return baidu.forEach(this, function (t) {
                !t[e] && (t[e] = baidu.id())
            }), baidu.forEach(this, function (i) {
                var r = t[i[e]];
                "string" == typeof n ? r && delete r[n] : "array" == baidu.type(n) && baidu.forEach(n, function (e) {
                    r && delete r[e]
                })
            }), this
        }
    }()
}), baidu.dom.extend({
    removeProp: function (e) {
        if (arguments.length <= 0 || !e || "string" != typeof e) return this;
        var t = (baidu.dom, baidu._util_);
        return e = t.propFix[e] || e, baidu.forEach(this, function (t) {
            try {
                t[e] = void 0, delete t[e]
            } catch (n) {
            }
        }), this
    }
}), baidu.object.each = function (e, t) {
    var n, i, r;
    if ("function" == typeof t) for (i in e) if (e.hasOwnProperty(i) && (r = e[i], n = t.call(e, r, i), n === !1)) break;
    return e
}, baidu._util_.smartScroll = function (e) {
    function t(e) {
        return e && 9 === e.nodeType
    }

    function n(e) {
        return "Window" == baidu.type(e) ? e : t(e) ? e.defaultView || e.parentWindow : !1
    }

    var i = {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}[e], r = "scrollLeft" === e;
    return {
        get: function (t) {
            var r = n(t);
            return r ? i in r ? r[i] : baidu.browser.isStrict && r.document.documentElement[e] || r.document.body[e] : t[e]
        }, set: function (t, i) {
            if (t) {
                var a = n(t);
                a ? a.scrollTo(r ? i : this.get(t), r ? this.get(t) : i) : t[e] = i
            }
        }
    }
}, baidu.dom.extend({
    scrollLeft: function () {
        var e = baidu._util_.smartScroll("scrollLeft");
        return function (t) {
            return t && baidu.check("^(?:number|string)$", "baidu.dom.scrollLeft"), this.size() <= 0 ? void 0 === t ? 0 : this : void 0 === t ? e.get(this[0]) : e.set(this[0], t) || this
        }
    }()
}), baidu.dom.extend({
    scrollTop: function () {
        var e = baidu._util_.smartScroll("scrollTop");
        return function (t) {
            return t && baidu.check("^(?:number|string)$", "baidu.dom.scrollTop"), this.size() <= 0 ? void 0 === t ? 0 : this : void 0 === t ? e.get(this[0]) : e.set(this[0], t) || this
        }
    }()
}), baidu.dom.extend({
    show: function () {
        return baidu._util_.showHide(this, !0), this
    }
}), baidu.dom.extend({
    siblings: function (e) {
        var t = [];
        return baidu.forEach(this, function (e) {
            for (var n = [], i = [], r = e; r = r.previousSibling;) 1 == r.nodeType && n.push(r);
            for (; e = e.nextSibling;) 1 == e.nodeType && i.push(e);
            baidu.merge(t, n.reverse().concat(i))
        }), baidu.dom(baidu.dom.match(t, e))
    }
}), baidu.dom.extend({
    slice: function () {
        var e = Array.prototype.slice;
        return function () {
            return baidu.check("number(,number)?", "baidu.dom.slice"), baidu.dom(e.apply(this, arguments))
        }
    }()
}), baidu.dom.extend({
    toggleClass: function (e, t) {
        var t = "undefined" == typeof t ? t : Boolean(t);
        switch (arguments.length <= 0 && baidu.forEach(this, function (e) {
            e.className = ""
        }), typeof e) {
            case"string":
                e = e.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " ");
                var n = e.split(" ");
                baidu.forEach(this, function (e) {
                    for (var i = e.className, r = 0; r < n.length; r++) (" " + i + " ").indexOf(" " + n[r] + " ") > -1 && "undefined" == typeof t ? i = (" " + i + " ").replace(" " + n[r] + " ", " ") : -1 === (" " + i + " ").indexOf(" " + n[r] + " ") && "undefined" == typeof t ? i += " " + n[r] : -1 === (" " + i + " ").indexOf(" " + n[r] + " ") && t === !0 ? i += " " + n[r] : (" " + i + " ").indexOf(" " + n[r] + " ") > -1 && t === !1 && (i = i.replace(n[r], ""));
                    e.className = i.replace(/^\s+/g, "").replace(/\s+$/g, "")
                });
                break;
            case"function":
                baidu.forEach(this, function (n, i) {
                    baidu.dom(n).toggleClass(e.call(n, i, n.className), t)
                })
        }
        return this
    }
}), baidu.dom.extend({
    trigger: function () {
        var e = (baidu._util_.eventBase, /msie/i.test(navigator.userAgent), {keydown: 1, keyup: 1, keypress: 1}), t = {
                click: 1,
                dblclick: 1,
                mousedown: 1,
                mousemove: 1,
                mouseup: 1,
                mouseover: 1,
                mouseout: 1,
                mouseenter: 1,
                mouseleave: 1,
                contextmenu: 1
            }, n = {
                abort: 1,
                blur: 1,
                change: 1,
                error: 1,
                focus: 1,
                focusin: 1,
                focusout: 1,
                load: 1,
                unload: 1,
                reset: 1,
                resize: 1,
                scroll: 1,
                select: 1,
                submit: 1
            }, i = {scroll: 1, resize: 1, reset: 1, submit: 1, change: 1, select: 1, error: 1, abort: 1}, r = {submit: 1},
            a = {
                KeyEvents: ["bubbles", "cancelable", "view", "ctrlKey", "altKey", "shiftKey", "metaKey", "keyCode", "charCode"],
                MouseEvents: ["bubbles", "cancelable", "view", "detail", "screenX", "screenY", "clientX", "clientY", "ctrlKey", "altKey", "shiftKey", "metaKey", "button", "relatedTarget"],
                HTMLEvents: ["bubbles", "cancelable"],
                UIEvents: ["bubbles", "cancelable", "view", "detail"],
                Events: ["bubbles", "cancelable"]
            };
        baidu.extend(i, e), baidu.extend(i, t);
        var o = function (e) {
            return e.replace(/^\w/, function (e) {
                return e.toUpperCase()
            })
        }, u = function (e) {
            var t, n = [], i = 0;
            for (t in e) e.hasOwnProperty(t) && (n[i++] = e[t]);
            return n
        }, d = function (e, t) {
            for (var n = 0, i = e.length, r = {}; i > n; n++) r[e[n]] = t[e[n]], delete t[e[n]];
            return r
        }, s = function (e, t, n) {
            n = baidu.extend({}, n);
            var i = u(d(a[t], n)), r = document.createEvent(t);
            switch (i.unshift(e), t) {
                case"KeyEvents":
                    r.initKeyEvent.apply(r, i);
                    break;
                case"MouseEvents":
                    r.initMouseEvent.apply(r, i);
                    break;
                case"UIEvents":
                    r.initUIEvent.apply(r, i);
                    break;
                default:
                    r.initEvent.apply(r, i)
            }
            return n.triggerData && (r.triggerData = n.triggerData), baidu.extend(r, n), r
        }, c = function (e) {
            var t;
            return document.createEventObject && (t = document.createEventObject(), baidu.extend(t, e)), t
        }, l = function (e, t) {
            t = d(a.KeyEvents, t);
            var n;
            if (document.createEvent) try {
                n = s(e, "KeyEvents", t)
            } catch (i) {
                try {
                    n = s(e, "Events", t)
                } catch (i) {
                    n = s(e, "UIEvents", t)
                }
            } else t.keyCode = t.charCode > 0 ? t.charCode : t.keyCode, n = c(t);
            return n
        }, f = function (e, t) {
            t = d(a.MouseEvents, t);
            var n;
            return document.createEvent ? (n = s(e, "MouseEvents", t), t.relatedTarget && !n.relatedTarget && ("mouseout" == e.toLowerCase() ? n.toElement = t.relatedTarget : "mouseover" == e.toLowerCase() && (n.fromElement = t.relatedTarget))) : (t.button = 0 == t.button ? 1 : 1 == t.button ? 4 : baidu.lang.isNumber(t.button) ? t.button : 0, n = c(t)), n
        }, b = function (e, t) {
            t.bubbles = i.hasOwnProperty(e), t = d(a.HTMLEvents, t);
            var n;
            if (document.createEvent) try {
                n = s(e, "HTMLEvents", t)
            } catch (r) {
                try {
                    n = s(e, "UIEvents", t)
                } catch (r) {
                    n = s(e, "Events", t)
                }
            } else n = c(t);
            return n
        }, p = function (i, a, u) {
            var d, d = {
                bubbles: !0,
                cancelable: !0,
                view: window,
                detail: 1,
                screenX: 0,
                screenY: 0,
                clientX: 0,
                clientY: 0,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                keyCode: 0,
                charCode: 0,
                button: 0,
                relatedTarget: null
            };
            if (e[a]) d = l(a, d); else if (t[a]) d = f(a, d); else {
                if (!n[a]) return baidu(i).triggerHandler(a, u);
                d = b(a, d)
            }
            if (d) {
                u && (d.triggerData = u);
                var s;
                if (i.dispatchEvent ? s = i.dispatchEvent(d) : i.fireEvent && (s = i.fireEvent("on" + a, d)), s !== !1 && r[a]) try {
                    i[a] ? i[a]() : (a = o(a), i[a] && i[a]())
                } catch (c) {
                }
            }
        };
        return function (e, t) {
            return this.each(function () {
                p(this, e, t)
            }), this
        }
    }()
}), baidu.dom.extend({
    unbind: function (e, t) {
        return this.off(e, t)
    }
}), baidu.dom.extend({
    undelegate: function (e, t, n) {
        return this.off(t, e, n)
    }
}), baidu.dom.extend({
    unique: function (e) {
        return baidu.dom(baidu.array(this.toArray()).unique(e))
    }
}), baidu.lang.isArray = baidu.isArray, baidu.lang.toArray = function (e) {
    if (null === e || void 0 === e) return [];
    if (baidu.lang.isArray(e)) return e;
    if ("number" != typeof e.length || "string" == typeof e || baidu.lang.isFunction(e)) return [e];
    if (e.item) {
        for (var t = e.length, n = new Array(t); t--;) n[t] = e[t];
        return n
    }
    return [].slice.call(e)
}, baidu.fn.extend({
    wrapReturnValue: function (e, t) {
        var n = this.fn;
        return t = 0 | t, function () {
            var i = n.apply(this, arguments);
            return t ? t > 0 ? new e(arguments[t - 1]) : i : new e(i)
        }
    }
}), baidu.fn.extend({
    multize: function (e, t) {
        function n() {
            var r, a = arguments[0], o = e ? n : i, u = [], d = Array.prototype.slice.call(arguments, 0);
            if (a instanceof Array) {
                for (var s, c = 0; s = a[c]; c++) d[0] = s, r = o.apply(this, d), t ? r && (u = u.concat(r)) : u.push(r);
                return u
            }
            return i.apply(this, arguments)
        }

        var i = this.fn;
        return n
    }
}), baidu.object.values = function (e) {
    var t, n = [], i = 0;
    for (t in e) e.hasOwnProperty(t) && (n[i++] = e[t]);
    return n
}, baidu.fn.extend({
    bind: function (e) {
        var t = this.fn, n = arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : null;
        return function () {
            var i = "string" === baidu.type(t) ? e[t] : t,
                r = n ? n.concat(Array.prototype.slice.call(arguments, 0)) : arguments;
            return i.apply(e || i, r)
        }
    }
}), baidu.string.extend({
    formatColor: function () {
        var e = /^\#[\da-f]{6}$/i, t = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i, n = {
            black: "#000000",
            silver: "#c0c0c0",
            gray: "#808080",
            white: "#ffffff",
            maroon: "#800000",
            red: "#ff0000",
            purple: "#800080",
            fuchsia: "#ff00ff",
            green: "#008000",
            lime: "#00ff00",
            olive: "#808000",
            yellow: "#ffff0",
            navy: "#000080",
            blue: "#0000ff",
            teal: "#008080",
            aqua: "#00ffff"
        };
        return function () {
            var i = this.valueOf();
            if (e.test(i)) return i;
            if (t.test(i)) {
                for (var r, a = 1, i = "#"; 4 > a; a++) r = parseInt(RegExp["$" + a]).toString(16), i += ("00" + r).substr(r.length);
                return i
            }
            if (/^\#[\da-f]{3}$/.test(i)) {
                var o = i.charAt(1), u = i.charAt(2), d = i.charAt(3);
                return "#" + o + o + u + u + d + d
            }
            return n[i] ? n[i] : ""
        }
    }()
}), baidu._util_.smartAjax = baidu._util_.smartAjax || function (e) {
    return function (t, n, i, r) {
        "function" === baidu.type(n) && (r = r || i, i = n, n = void 0), baidu.ajax({
            type: e,
            url: t,
            data: n,
            success: i,
            dataType: r
        })
    }
}, baidu.get = baidu.get || baidu._util_.smartAjax("get"), baidu.json.stringify = function () {
    function e(e) {
        return /["\\\x00-\x1f]/.test(e) && (e = e.replace(/["\\\x00-\x1f]/g, function (e) {
            var t = r[e];
            return t ? t : (t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16))
        })), '"' + e + '"'
    }

    function t(e) {
        var t, n, i, r = ["["], a = e.length;
        for (n = 0; a > n; n++) switch (i = e[n], typeof i) {
            case"undefined":
            case"function":
            case"unknown":
                break;
            default:
                t && r.push(","), r.push(baidu.json.stringify(i)), t = 1
        }
        return r.push("]"), r.join("")
    }

    function n(e) {
        return 10 > e ? "0" + e : e
    }

    function i(e) {
        return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'
    }

    var r = {"\b": "\\b", "	": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
    return function (n) {
        switch (typeof n) {
            case"undefined":
                return "undefined";
            case"number":
                return isFinite(n) ? String(n) : "null";
            case"string":
                return e(n);
            case"boolean":
                return String(n);
            default:
                if (null === n) return "null";
                if ("array" === baidu.type(n)) return t(n);
                if ("date" === baidu.type(n)) return i(n);
                var r, a, o = ["{"], u = baidu.json.stringify;
                for (var d in n) if (Object.prototype.hasOwnProperty.call(n, d)) switch (a = n[d], typeof a) {
                    case"undefined":
                    case"unknown":
                    case"function":
                        break;
                    default:
                        r && o.push(","), r = 1, o.push(u(d) + ":" + u(a))
                }
                return o.push("}"), o.join("")
        }
    }
}(), baidu.lang.isObject = baidu.isObject, baidu.number.extend({
    comma: function (e) {
        var t = this;
        return (!e || 1 > e) && (e = 3), t = String(t).split("."), t[0] = t[0].replace(new RegExp("(\\d)(?=(\\d{" + e + "})+$)", "ig"), "$1,"), t.join(".")
    }
}), baidu.number.randomInt = function (e, t) {
    return Math.floor(Math.random() * (t - e + 1) + e)
}, baidu.object.clone = function (e) {
    var t, n, i = e;
    if (!e || e instanceof Number || e instanceof String || e instanceof Boolean) return i;
    if (baidu.lang.isArray(e)) {
        i = [];
        var r = 0;
        for (t = 0, n = e.length; n > t; t++) i[r++] = baidu.object.clone(e[t])
    } else if (baidu.object.isPlain(e)) {
        i = {};
        for (t in e) e.hasOwnProperty(t) && (i[t] = baidu.object.clone(e[t]))
    }
    return i
}, baidu.object.keys = function (e) {
    var t, n = [], i = 0;
    for (t in e) e.hasOwnProperty(t) && (n[i++] = t);
    return n
}, baidu.object.map = function (e, t) {
    var n = {};
    for (var i in e) e.hasOwnProperty(i) && (n[i] = t(e[i], i));
    return n
}, function () {
    function e(e, n, i, r, a) {
        n.hasOwnProperty(i) && (a && t(e[i]) ? baidu.object.merge(e[i], n[i], {
            overwrite: r,
            recursive: a
        }) : !r && i in e || (e[i] = n[i]))
    }

    var t = function (e) {
        return baidu.lang.isObject(e) && !baidu.lang.isFunction(e)
    };
    baidu.object.merge = function (t, n, i) {
        var r, a = 0, o = i || {}, u = o.overwrite, d = o.whiteList, s = o.recursive;
        if (d && d.length) for (r = d.length; r > a; ++a) e(t, n, d[a], u, s); else for (a in n) e(t, n, a, u, s);
        return t
    }
}(), baidu.param = function (e) {
    e = e || arguments.callee.caller.arguments;
    for (var t = "", n = e.length, i = 0; n > i; i++) t += "," + baidu.type(e[i]);
    return t ? t.substr(1) : ""
}, baidu.platform = baidu.platform || function () {
    var e = navigator.userAgent, t = function () {
    };
    return baidu.forEach("Android iPad iPhone Linux Macintosh Windows X11".split(" "), function (n) {
        var i = n.charAt(0).toUpperCase() + n.toLowerCase().substr(1);
        baidu["is" + i] = t["is" + i] = e.indexOf(n) > -1
    }), t
}(), baidu.post = baidu.post || baidu._util_.smartAjax("post"), baidu.regexp = baidu.regexp || {},baidu.regexp.compile = function (e) {
    return function (t, n) {
        var i, r = t + "$$" + n;
        return !(i = e[r]) && (i = e[r] = new RegExp(t, n)), i.lastIndex > 0 && (i.lastIndex = 0), i
    }
}(baidu.global("_maps_RegExp")),baidu.createChain("sio", function (e) {
    switch (typeof e) {
        case"string":
            return new baidu.sio.$Sio(e)
    }
}, function (e) {
    this.url = e
}),baidu.sio._createScriptTag = function (e, t, n) {
    e.setAttribute("type", "text/javascript"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
},baidu.sio._removeScriptTag = function (e) {
    if (e.clearAttributes) e.clearAttributes(); else for (var t in e) e.hasOwnProperty(t) && delete e[t];
    e && e.parentNode && e.parentNode.removeChild(e), e = null
},baidu.sio.extend({
    callByBrowser: function (e, t) {
        var n, i = this.url, r = document.createElement("SCRIPT"), a = 0, o = t || {}, u = o.charset,
            d = e || function () {
            }, s = o.timeOut || 0;
        r.onload = r.onreadystatechange = function () {
            if (!a) {
                var e = r.readyState;
                if ("undefined" == typeof e || "loaded" == e || "complete" == e) {
                    a = 1;
                    try {
                        d(), clearTimeout(n)
                    } finally {
                        r.onload = r.onreadystatechange = null, baidu.sio._removeScriptTag(r)
                    }
                }
            }
        }, s && (n = setTimeout(function () {
            r.onload = r.onreadystatechange = null, baidu.sio._removeScriptTag(r), o.onfailure && o.onfailure()
        }, s)), baidu.sio._createScriptTag(r, i, u)
    }
}),baidu.sio.extend({
    callByServer: function (e, t) {
        function n(t) {
            return function () {
                try {
                    t ? s.onfailure && s.onfailure() : (e.apply(window, arguments), clearTimeout(r)), window[i] = null, delete window[i]
                } catch (n) {
                } finally {
                    baidu.sio._removeScriptTag(u)
                }
            }
        }

        var i, r, a, o = this.url, u = document.createElement("SCRIPT"), d = "bd__cbs__", s = t || {}, c = s.charset,
            l = s.queryField || "callback", f = s.timeOut || 0, b = new RegExp("(\\?|&)" + l + "=([^&]*)");
        baidu.lang.isFunction(e) ? (i = d + Math.floor(2147483648 * Math.random()).toString(36), window[i] = n(0)) : baidu.lang.isString(e) ? i = e : (a = b.exec(o)) && (i = a[2]), f && (r = setTimeout(n(1), f)), o = o.replace(b, "$1" + l + "=" + i), o.search(b) < 0 && (o += (o.indexOf("?") < 0 ? "?" : "&") + l + "=" + i), baidu.sio._createScriptTag(u, o, c)
    }
}),baidu.sio.extend({
    log: function () {
        url = this.url;
        var e = new Image, t = "tangram_sio_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[t] = e, e.onload = e.onerror = e.onabort = function () {
            e.onload = e.onerror = e.onabort = null, window[t] = null, e = null
        }, e.src = url
    }
}),function (e, t) {
    function n(e, t, n, i) {
        var r, u, d, s, c = o++, l = 0, f = t.length;
        for ("string" != typeof n || p.test(n) || (n = n.toLowerCase(), s = n); f > l; l++) if (r = t[l]) {
            for (u = !1, r = r[e]; r;) {
                if (r[a] === c) {
                    u = t[r.sizset];
                    break
                }
                if (d = 1 === r.nodeType, d && !i && (r[a] = c, r.sizset = l), s) {
                    if (r.nodeName.toLowerCase() === n) {
                        u = r;
                        break
                    }
                } else if (d) if ("string" != typeof n) {
                    if (r === n) {
                        u = !0;
                        break
                    }
                } else if (L.filter(n, [r]).length > 0) {
                    u = r;
                    break
                }
                r = r[e]
            }
            t[l] = u
        }
    }

    baidu.query = function (e, t, n) {
        return baidu.merge(n || [], baidu.sizzle(e, t))
    };
    var i = e.document, r = i.documentElement, a = "sizcache" + (Math.random() + "").replace(".", ""), o = 0,
        u = Object.prototype.toString, d = "undefined", s = !1, c = !0, l = /^#([\w\-]+$)|^(\w+$)|^\.([\w\-]+$)/,
        f = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
        b = /\\/g, p = /\W/, h = /^\w/, m = /\D/, g = /(-?)(\d*)(?:n([+\-]?\d*))?/, y = /^\+|\s*/g, v = /h\d/i,
        x = /input|select|textarea|button/i, w = /[\t\n\f\r]/g, E = "(?:[-\\w]|[^\\x00-\\xa0]|\\\\.)", _ = {
            ID: new RegExp("#(" + E + "+)"),
            CLASS: new RegExp("\\.(" + E + "+)"),
            NAME: new RegExp("\\[name=['\"]*(" + E + "+)['\"]*\\]"),
            TAG: new RegExp("^(" + E.replace("[-", "[-\\*") + "+)"),
            ATTR: new RegExp("\\[\\s*(" + E + "+)\\s*(?:(\\S?=)\\s*(?:(['\"])(.*?)\\3|(#?" + E + "*)|)|)\\s*\\]"),
            PSEUDO: new RegExp(":(" + E + "+)(?:\\((['\"]?)((?:\\([^\\)]+\\)|[^\\(\\)]*)+)\\2\\))?"),
            CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
            POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/
        }, T = _.POS, C = function () {
            var e, t = function (e, t) {
                return "\\" + (t - 0 + 1)
            }, n = {};
            for (e in _) _[e] = new RegExp(_[e].source + /(?![^\[]*\])(?![^\(]*\))/.source), n[e] = new RegExp(/(^(?:.|\r|\n)*?)/.source + _[e].source.replace(/\\(\d+)/g, t));
            return _.globalPOS = T, n
        }(), k = function (e) {
            var t = !1, n = i.createElement("div");
            try {
                t = e(n)
            } catch (r) {
            }
            return n = null, t
        }, A = k(function (e) {
            var t = !0, n = "script" + (new Date).getTime();
            return e.innerHTML = "<a name ='" + n + "'/>", r.insertBefore(e, r.firstChild), i.getElementById(n) && (t = !1), r.removeChild(e), t
        }), S = k(function (e) {
            return e.appendChild(i.createComment("")), 0 === e.getElementsByTagName("*").length
        }), O = k(function (e) {
            return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== d && "#" === e.firstChild.getAttribute("href")
        }), N = k(function (e) {
            return e.innerHTML = "<div class='test e'></div><div class='test'></div>", e.getElementsByClassName && 0 !== e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 1 !== e.getElementsByClassName("e").length) : !1
        });
    [0, 0].sort(function () {
        return c = !1, 0
    });
    var L = function (e, n, r) {
        r = r || [], n = n || i;
        var a, o, u, d = n.nodeType;
        if (1 !== d && 9 !== d) return [];
        if (!e || "string" != typeof e) return r;
        if (u = D(n), !u && (a = l.exec(e))) if (a[1]) {
            if (9 === d) {
                if (o = n.getElementById(a[1]), !o || !o.parentNode) return H([], r);
                if (o.id === a[1]) return H([o], r)
            } else if (n.ownerDocument && (o = n.ownerDocument.getElementById(a[1])) && $(n, o) && o.id === a[1]) return H([o], r)
        } else {
            if (a[2]) return "body" === e && n.body ? H([n.body], r) : H(n.getElementsByTagName(e), r);
            if (N && a[3] && n.getElementsByClassName) return H(n.getElementsByClassName(a[3]), r)
        }
        return j(e, n, r, t, u)
    }, j = function (e, t, n, i, r) {
        var a, o, d, s, c, l, b, p, h = t, m = !0, g = [], y = e;
        do if (f.exec(""), a = f.exec(y), a && (y = a[3], g.push(a[1]), a[2])) {
            s = a[3];
            break
        } while (a);
        if (g.length > 1 && T.exec(e)) if (2 === g.length && I.relative[g[0]]) o = P(g[0] + g[1], t, i, r); else for (o = I.relative[g[0]] ? [t] : L(g.shift(), t); g.length;) e = g.shift(), I.relative[e] && (e += g.shift()), o = P(e, o, i, r); else if (!i && g.length > 1 && 9 === t.nodeType && !r && _.ID.test(g[0]) && !_.ID.test(g[g.length - 1]) && (c = L.find(g.shift(), t, r), t = c.expr ? L.filter(c.expr, c.set)[0] : c.set[0]), t) for (c = i ? {
            expr: g.pop(),
            set: H(i)
        } : L.find(g.pop(), g.length >= 1 && ("~" === g[0] || "+" === g[0]) && t.parentNode || t, r), o = c.expr ? L.filter(c.expr, c.set) : c.set, g.length > 0 ? d = H(o) : m = !1; g.length;) l = g.pop(), b = l, I.relative[l] ? b = g.pop() : l = "", null == b && (b = t), I.relative[l](d, b, r); else d = g = [];
        if (d || (d = o), d || L.error(l || e), "[object Array]" === u.call(d)) if (m) if (t && 1 === t.nodeType) for (p = 0; null != d[p]; p++) d[p] && (d[p] === !0 || 1 === d[p].nodeType && $(t, d[p])) && n.push(o[p]); else for (p = 0; null != d[p]; p++) d[p] && 1 === d[p].nodeType && n.push(o[p]); else n.push.apply(n, d); else H(d, n);
        return s && (j(s, h, n, i, r), M(n)), n
    }, D = L.isXML = function (e) {
        var t = (e ? e.ownerDocument || e : 0).documentElement;
        return t ? "HTML" !== t.nodeName : !1
    }, H = function (e, t) {
        t = t || [];
        var n = 0, i = e.length;
        if ("number" == typeof i) for (; i > n; n++) t.push(e[n]); else for (; e[n]; n++) t.push(e[n]);
        return t
    }, M = L.uniqueSort = function (e) {
        if (R && (s = c, e.sort(R), s)) for (var t = 1; t < e.length; t++) e[t] === e[t - 1] && e.splice(t--, 1);
        return e
    }, $ = L.contains = r.compareDocumentPosition ? function (e, t) {
        return !!(16 & e.compareDocumentPosition(t))
    } : r.contains ? function (e, t) {
        return e !== t && (e.contains ? e.contains(t) : !1)
    } : function (e, t) {
        for (; t = t.parentNode;) if (t === e) return !0;
        return !1
    };
    L.matches = function (e, t) {
        return j(e, i, [], t, D(i))
    }, L.matchesSelector = function (e, t) {
        return j(t, i, [], [e], D(i)).length > 0
    }, L.find = function (e, t, n) {
        var i, r, a, o, u, s;
        if (!e) return [];
        for (r = 0, a = I.order.length; a > r; r++) if (u = I.order[r], (o = C[u].exec(e)) && (s = o[1], o.splice(1, 1), "\\" !== s.substr(s.length - 1) && (o[1] = (o[1] || "").replace(b, ""), i = I.find[u](o, t, n), null != i))) {
            e = e.replace(_[u], "");
            break
        }
        return i || (i = typeof t.getElementsByTagName !== d ? t.getElementsByTagName("*") : []), {set: i, expr: e}
    }, L.filter = function (e, n, i, r) {
        for (var a, o, u, d, s, c, l, f, b, p = e, h = [], m = n, g = n && n[0] && D(n[0]); e && n.length;) {
            for (u in I.filter) if (null != (a = C[u].exec(e)) && a[2]) {
                if (c = I.filter[u], l = a[1], o = !1, a.splice(1, 1), "\\" === l.substr(l.length - 1)) continue;
                if (m === h && (h = []), I.preFilter[u]) if (a = I.preFilter[u](a, m, i, h, r, g)) {
                    if (a === !0) continue
                } else o = d = !0;
                if (a) for (f = 0; null != (s = m[f]); f++) s && (d = c(s, a, f, m), b = r ^ d, i && null != d ? b ? o = !0 : m[f] = !1 : b && (h.push(s), o = !0));
                if (d !== t) {
                    if (i || (m = h), e = e.replace(_[u], ""), !o) return [];
                    break
                }
            }
            if (e === p) {
                if (null != o) break;
                L.error(e)
            }
            p = e
        }
        return m
    }, L.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
    };
    var B = L.getText = function (e) {
        var t, n, i = e.nodeType, r = "";
        if (i) {
            if (1 === i || 9 === i || 11 === i) {
                if ("string" == typeof e.textContent) return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling) r += B(e)
            } else if (3 === i || 4 === i) return e.nodeValue
        } else for (t = 0; n = e[t]; t++) 8 !== n.nodeType && (r += B(n));
        return r
    }, I = L.selectors = {
        match: _,
        leftMatch: C,
        order: ["ID", "NAME", "TAG"],
        attrMap: {"class": "className", "for": "htmlFor"},
        attrHandle: {
            href: O ? function (e) {
                return e.getAttribute("href")
            } : function (e) {
                return e.getAttribute("href", 2)
            }, type: function (e) {
                return e.getAttribute("type")
            }
        },
        relative: {
            "+": function (e, t) {
                var n = "string" == typeof t, i = n && !p.test(t), r = n && !i;
                i && (t = t.toLowerCase());
                for (var a, o = 0, u = e.length; u > o; o++) if (a = e[o]) {
                    for (; (a = a.previousSibling) && 1 !== a.nodeType;) ;
                    e[o] = r || a && a.nodeName.toLowerCase() === t ? a || !1 : a === t
                }
                r && L.filter(t, e, !0)
            }, ">": function (e, t) {
                var n, i = "string" == typeof t, r = 0, a = e.length;
                if (i && !p.test(t)) {
                    for (t = t.toLowerCase(); a > r; r++) if (n = e[r]) {
                        var o = n.parentNode;
                        e[r] = o.nodeName.toLowerCase() === t ? o : !1
                    }
                } else {
                    for (; a > r; r++) n = e[r], n && (e[r] = i ? n.parentNode : n.parentNode === t);
                    i && L.filter(t, e, !0)
                }
            }, "": function (e, t, i) {
                n("parentNode", e, t, i)
            }, "~": function (e, t, i) {
                n("previousSibling", e, t, i)
            }
        },
        find: {
            ID: A ? function (e, t, n) {
                if (typeof t.getElementById !== d && !n) {
                    var i = t.getElementById(e[1]);
                    return i && i.parentNode ? [i] : []
                }
            } : function (e, n, i) {
                if (typeof n.getElementById !== d && !i) {
                    var r = n.getElementById(e[1]);
                    return r ? r.id === e[1] || typeof r.getAttributeNode !== d && r.getAttributeNode("id").nodeValue === e[1] ? [r] : t : []
                }
            }, NAME: function (e, t) {
                if (typeof t.getElementsByName !== d) {
                    for (var n = [], i = t.getElementsByName(e[1]), r = 0, a = i.length; a > r; r++) i[r].getAttribute("name") === e[1] && n.push(i[r]);
                    return 0 === n.length ? null : n
                }
            }, TAG: S ? function (e, t) {
                return typeof t.getElementsByTagName !== d ? t.getElementsByTagName(e[1]) : void 0
            } : function (e, t) {
                var n = t.getElementsByTagName(e[1]);
                if ("*" === e[1]) {
                    for (var i = [], r = 0; n[r]; r++) 1 === n[r].nodeType && i.push(n[r]);
                    n = i
                }
                return n
            }
        },
        preFilter: {
            CLASS: function (e, t, n, i, r, a) {
                if (e = " " + e[1].replace(b, "") + " ", a) return e;
                for (var o, u = 0; null != (o = t[u]); u++) o && (r ^ (o.className && (" " + o.className + " ").replace(w, " ").indexOf(e) >= 0) ? n || i.push(o) : n && (t[u] = !1));
                return !1
            }, ID: function (e) {
                return e[1].replace(b, "")
            }, TAG: function (e) {
                return e[1].replace(b, "").toLowerCase()
            }, CHILD: function (e) {
                if ("nth" === e[1]) {
                    e[2] || L.error(e[0]), e[2] = e[2].replace(y, "");
                    var t = g.exec("even" === e[2] && "2n" || "odd" === e[2] && "2n+1" || !m.test(e[2]) && "0n+" + e[2] || e[2]);
                    e[2] = t[1] + (t[2] || 1) - 0, e[3] = t[3] - 0
                } else e[2] && L.error(e[0]);
                return e[0] = o++, e
            }, ATTR: function (e, t, n, i, r, a) {
                var o = e[1] = e[1].replace(b, "");
                return !a && I.attrMap[o] && (e[1] = I.attrMap[o]), e[4] = (e[4] || e[5] || "").replace(b, ""), "~=" === e[2] && (e[4] = " " + e[4] + " "), e
            }, PSEUDO: function (e, t, n, r, a, o) {
                if ("not" === e[1]) {
                    if (!((f.exec(e[3]) || "").length > 1 || h.test(e[3]))) {
                        var u = L.filter(e[3], t, n, !a);
                        return n || r.push.apply(r, u), !1
                    }
                    e[3] = j(e[3], i, [], t, o)
                } else if (_.POS.test(e[0]) || _.CHILD.test(e[0])) return !0;
                return e
            }, POS: function (e) {
                return e.unshift(!0), e
            }
        },
        filters: {
            enabled: function (e) {
                return e.disabled === !1
            }, disabled: function (e) {
                return e.disabled === !0
            }, checked: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && !!e.checked || "option" === t && !!e.selected
            }, selected: function (e) {
                return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
            }, parent: function (e) {
                return !!e.firstChild
            }, empty: function (e) {
                return !e.firstChild
            }, has: function (e, t, n) {
                return !!L(n[3], e).length
            }, header: function (e) {
                return v.test(e.nodeName)
            }, text: function (e) {
                var t = e.getAttribute("type"), n = e.type;
                return "input" === e.nodeName.toLowerCase() && "text" === n && (null === t || t.toLowerCase() === n)
            }, radio: function (e) {
                return "input" === e.nodeName.toLowerCase() && "radio" === e.type
            }, checkbox: function (e) {
                return "input" === e.nodeName.toLowerCase() && "checkbox" === e.type
            }, file: function (e) {
                return "input" === e.nodeName.toLowerCase() && "file" === e.type
            }, password: function (e) {
                return "input" === e.nodeName.toLowerCase() && "password" === e.type
            }, submit: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "submit" === e.type
            }, image: function (e) {
                return "input" === e.nodeName.toLowerCase() && "image" === e.type
            }, reset: function (e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && "reset" === e.type
            }, button: function (e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && "button" === e.type || "button" === t
            }, input: function (e) {
                return x.test(e.nodeName)
            }, focus: function (e) {
                var t = e.ownerDocument;
                return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
            }, active: function (e) {
                return e === e.ownerDocument.activeElement
            }, contains: function (e, t, n) {
                return (e.textContent || e.innerText || B(e)).indexOf(n[3]) >= 0
            }
        },
        setFilters: {
            first: function (e, t) {
                return 0 === t
            }, last: function (e, t, n, i) {
                return t === i.length - 1
            }, even: function (e, t) {
                return t % 2 === 0
            }, odd: function (e, t) {
                return t % 2 === 1
            }, lt: function (e, t, n) {
                return t < n[3] - 0
            }, gt: function (e, t, n) {
                return t > n[3] - 0
            }, nth: function (e, t, n) {
                return n[3] - 0 === t
            }, eq: function (e, t, n) {
                return n[3] - 0 === t
            }
        },
        filter: {
            PSEUDO: function (e, t, n, i) {
                var r = t[1], a = I.filters[r];
                if (a) return a(e, n, t, i);
                if ("not" === r) {
                    for (var o = t[3], u = 0, d = o.length; d > u; u++) if (o[u] === e) return !1;
                    return !0
                }
                L.error(r)
            }, CHILD: function (e, t) {
                var n, i, r, o, u, d, s = t[1], c = e;
                switch (s) {
                    case"only":
                    case"first":
                        for (; c = c.previousSibling;) if (1 === c.nodeType) return !1;
                        if ("first" === s) return !0;
                        c = e;
                    case"last":
                        for (; c = c.nextSibling;) if (1 === c.nodeType) return !1;
                        return !0;
                    case"nth":
                        if (n = t[2], i = t[3], 1 === n && 0 === i) return !0;
                        if (r = t[0], o = e.parentNode, o && (o[a] !== r || !e.nodeIndex)) {
                            for (u = 0, c = o.firstChild; c; c = c.nextSibling) 1 === c.nodeType && (c.nodeIndex = ++u);
                            o[a] = r
                        }
                        return d = e.nodeIndex - i, 0 === n ? 0 === d : d % n === 0 && d / n >= 0
                }
            }, ID: A ? function (e, t) {
                return 1 === e.nodeType && e.getAttribute("id") === t
            } : function (e, t) {
                var n = typeof e.getAttributeNode !== d && e.getAttributeNode("id");
                return 1 === e.nodeType && n && n.nodeValue === t
            }, TAG: function (e, t) {
                return "*" === t && 1 === e.nodeType || !!e.nodeName && e.nodeName.toLowerCase() === t
            }, CLASS: function (e, t) {
                return (" " + (e.className || e.getAttribute("class")) + " ").indexOf(t) > -1
            }, ATTR: function (e, t) {
                var n = t[1],
                    i = L.attr ? L.attr(e, n) : I.attrHandle[n] ? I.attrHandle[n](e) : null != e[n] ? e[n] : e.getAttribute(n),
                    r = i + "", a = t[2], o = t[4];
                return null == i ? "!=" === a : !a && L.attr ? null != i : "=" === a ? r === o : "*=" === a ? r.indexOf(o) >= 0 : "~=" === a ? (" " + r + " ").indexOf(o) >= 0 : o ? "!=" === a ? r !== o : "^=" === a ? 0 === r.indexOf(o) : "$=" === a ? r.substr(r.length - o.length) === o : "|=" === a ? r === o || r.substr(0, o.length + 1) === o + "-" : !1 : r && i !== !1
            }, POS: function (e, t, n, i) {
                var r = t[2], a = I.setFilters[r];
                return a ? a(e, n, t, i) : void 0
            }
        }
    };
    N && (I.order.splice(1, 0, "CLASS"), I.find.CLASS = function (e, t, n) {
        return typeof t.getElementsByClassName === d || n ? void 0 : t.getElementsByClassName(e[1])
    });
    var R, F;
    r.compareDocumentPosition ? R = function (e, t) {
        return e === t ? (s = !0, 0) : e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
    } : (R = function (e, t) {
        if (e === t) return s = !0, 0;
        if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
        var n, i, r = [], a = [], o = e.parentNode, u = t.parentNode, d = o;
        if (o === u) return F(e, t);
        if (!o) return -1;
        if (!u) return 1;
        for (; d;) r.unshift(d), d = d.parentNode;
        for (d = u; d;) a.unshift(d), d = d.parentNode;
        n = r.length, i = a.length;
        for (var c = 0; n > c && i > c; c++) if (r[c] !== a[c]) return F(r[c], a[c]);
        return c === n ? F(e, a[c], -1) : F(r[c], t, 1)
    }, F = function (e, t, n) {
        if (e === t) return n;
        for (var i = e.nextSibling; i;) {
            if (i === t) return -1;
            i = i.nextSibling
        }
        return 1
    }), i.querySelectorAll && !function () {
        var e = j, t = "__sizzle__", n = /^\s*[+~]/, i = /'/g, r = [];
        k(function (e) {
            e.innerHTML = "<select><option selected></option></select>", e.querySelectorAll("[selected]").length || r.push("\\[[\\x20\\t\\n\\r\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || r.push(":checked")
        }), k(function (e) {
            e.innerHTML = "<p class=''></p>", e.querySelectorAll("[class^='']").length && r.push("[*^$]=[\\x20\\t\\n\\r\\f]*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'>", e.querySelectorAll(":enabled").length || r.push(":enabled", ":disabled")
        }), r = r.length && new RegExp(r.join("|")), j = function (a, o, u, d, s) {
            if (!(d || s || r && r.test(a))) if (9 === o.nodeType) try {
                return H(o.querySelectorAll(a), u)
            } catch (c) {
            } else if (1 === o.nodeType && "object" !== o.nodeName.toLowerCase()) {
                var l = o, f = o.getAttribute("id"), b = f || t, p = o.parentNode, h = n.test(a);
                f ? b = b.replace(i, "\\$&") : o.setAttribute("id", b), h && p && (o = p);
                try {
                    if (!h || p) return H(o.querySelectorAll("[id='" + b + "'] " + a), u)
                } catch (c) {
                } finally {
                    f || l.removeAttribute("id")
                }
            }
            return e(a, o, u, d, s)
        }
    }();
    var P = function (e, t, n, i) {
        for (var r, a = [], o = "", u = t.nodeType ? [t] : t, d = 0, s = u.length; r = _.PSEUDO.exec(e);) o += r[0], e = e.replace(_.PSEUDO, "");
        for (I.relative[e] && (e += "*"); s > d; d++) j(e, u[d], a, n, i);
        return L.filter(o, a)
    };
    e.Sizzle = baidu.sizzle = L
}(window),baidu.string.extend({
    decodeHTML: function () {
        var e = this.replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        return e.replace(/&#([\d]+);/g, function (e, t) {
            return String.fromCharCode(parseInt(t, 10))
        })
    }
}),baidu.string.extend({
    encodeHTML: function () {
        return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
    }
}),baidu.string.extend({
    format: function (e) {
        var t = this.valueOf(), n = Array.prototype.slice.call(arguments, 0), i = Object.prototype.toString;
        return n.length ? (n = 1 == n.length && null !== e && /\[object Array\]|\[object Object\]/.test(i.call(e)) ? e : n, t.replace(/#\{(.+?)\}/g, function (e, t) {
            var r = n[t];
            return "[object Function]" == i.call(r) && (r = r(t)), "undefined" == typeof r ? "" : r
        })) : t
    }
}),baidu.string.extend({
    getByteLength: function () {
        return this.replace(/[^\x00-\xff]/g, "ci").length
    }
}),baidu.string.extend({
    stripTags: function () {
        return (this || "").replace(/<[^>]+>/g, "")
    }
}),baidu.string.extend({
    subByte: function (e, t) {
        baidu.check("^(?:number(?:,(?:string|number))?)$", "baidu.string.subByte");
        var n = this.valueOf();
        return t = t || "", 0 > e || baidu.string(n).getByteLength() <= e ? n + t : (n = n.substr(0, e).replace(/([^\x00-\xff])/g, "$1 ").substr(0, e).replace(/[^\x00-\xff]$/, "").replace(/([^\x00-\xff]) /g, "$1"), n + t)
    }
}),baidu.string.extend({
    toHalfWidth: function () {
        return this.replace(/[\uFF01-\uFF5E]/g, function (e) {
            return String.fromCharCode(e.charCodeAt(0) - 65248)
        }).replace(/\u3000/g, " ")
    }
}),baidu.string.extend({
    wbr: function () {
        return this.replace(/(?:<[^>]+>)|(?:&#?[0-9a-z]{2,6};)|(.{1})/gi, "$&<wbr>").replace(/><wbr>/g, ">")
    }
}),baidu.swf = baidu.swf || {},baidu.swf.version = function () {
    var e = navigator;
    if (e.plugins && e.mimeTypes.length) {
        var t = e.plugins["Shockwave Flash"];
        if (t && t.description) return t.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".") + ".0"
    } else if (window.ActiveXObject && !window.opera) for (var n = 12; n >= 2; n--) try {
        var i = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + n);
        if (i) {
            var r = i.GetVariable("$version");
            return r.replace(/WIN/g, "").replace(/,/g, ".")
        }
    } catch (a) {
    }
}(),baidu.swf.createHTML = function (e) {
    e = e || {};
    var t, n, i, r, a, o, u = baidu.swf.version, d = e.ver || "6.0.0", s = {}, c = baidu.string.encodeHTML;
    for (r in e) s[r] = e[r];
    if (e = s, !u) return "";
    for (u = u.split("."), d = d.split("."), i = 0; 3 > i && (t = parseInt(u[i], 10), n = parseInt(d[i], 10), !(t > n)); i++) if (n > t) return "";
    var l = e.vars, f = ["classid", "codebase", "id", "width", "height", "align"];
    if (e.align = e.align || "middle", e.classid = "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000", e.codebase = "http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0", e.movie = e.url || "", delete e.vars, delete e.url, "string" == typeof l) e.flashvars = l; else {
        var b = [];
        for (r in l) o = l[r], b.push(r + "=" + encodeURIComponent(o));
        e.flashvars = b.join("&")
    }
    var p = ["<object "];
    for (i = 0, a = f.length; a > i; i++) o = f[i], p.push(" ", o, '="', c(e[o]), '"');
    p.push(">");
    var h = {
        wmode: 1,
        scale: 1,
        quality: 1,
        play: 1,
        loop: 1,
        menu: 1,
        salign: 1,
        bgcolor: 1,
        base: 1,
        allowscriptaccess: 1,
        allownetworking: 1,
        allowfullscreen: 1,
        seamlesstabbing: 1,
        devicefont: 1,
        swliveconnect: 1,
        flashvars: 1,
        movie: 1
    };
    for (r in e) o = e[r], r = r.toLowerCase(), h[r] && (o || o === !1 || 0 === o) && p.push('<param name="' + r + '" value="' + c(o) + '" />');
    e.src = e.movie, e.name = e.id, delete e.id, delete e.movie, delete e.classid, delete e.codebase, e.type = "application/x-shockwave-flash", e.pluginspage = "http://www.macromedia.com/go/getflashplayer", p.push("<embed");
    var m;
    for (r in e) if (o = e[r], o || o === !1 || 0 === o) {
        if (new RegExp("^salign$", "i").test(r)) {
            m = o;
            continue
        }
        p.push(" ", r, '="', c(o), '"')
    }
    return m && p.push(' salign="', c(m), '"'), p.push("></embed></object>"), p.join("")
},baidu.swf.create = function (e, t) {
    e = e || {};
    var n = baidu.swf.createHTML(e) || e.errorMessage || "";
    t && "string" == typeof t && (t = document.getElementById(t)), baidu.dom.insertHTML(t || document.body, "beforeEnd", n)
},baidu.swf.getMovie = function (e) {
    var t, n = document[e];
    return 9 == baidu.browser.ie ? n && n.length ? 1 == (t = baidu.array.remove(baidu.lang.toArray(n), function (e) {
        return "embed" != e.tagName.toLowerCase()
    })).length ? t[0] : t : n : n || window[e]
},baidu.swf.Proxy = function (e, t, n) {
    var i, r = this, a = this._flash = baidu.swf.getMovie(e);
    return t ? void (i = setInterval(function () {
        try {
            a[t] && (r._initialized = !0, clearInterval(i), n && n())
        } catch (e) {
        }
    }, 100)) : this
},baidu.swf.Proxy.prototype.getFlash = function () {
    return this._flash
},baidu.swf.Proxy.prototype.isReady = function () {
    return !!this._initialized
},baidu.swf.Proxy.prototype.call = function (e) {
    try {
        var t = this.getFlash(), n = Array.prototype.slice.call(arguments);
        n.shift(), t[e] && t[e].apply(t, n)
    } catch (i) {
    }
},baidu.array = baidu.array || {},baidu.dom = baidu.dom || {},baidu.addClass = baidu.dom.addClass || {},baidu.g = baidu.G = baidu.dom.g || {},baidu.getAttr = baidu.dom.getAttr || {},baidu.getStyle = baidu.dom.getStyle || {},baidu.hide = baidu.dom.hide || {},baidu.insertHTML = baidu.dom.insertHTML || {},baidu.q = baidu.Q = baidu.dom.q || {},baidu.removeClass = baidu.dom.removeClass || {},baidu.setAttr = baidu.dom.setAttr || {},baidu.setAttrs = baidu.dom.setAttrs || {},baidu.dom.setOuterHeight = baidu.dom.setBorderBoxHeight || {},baidu.dom.setOuterWidth = baidu.dom.setBorderBoxWidth || {},baidu.setStyle = baidu.dom.setStyle || {},baidu.setStyles = baidu.dom.setStyles || {},baidu.show = baidu.dom.show || {},baidu.e = baidu.element = baidu.element || {},baidu.event = baidu.event || {},baidu.on = baidu.event.on || {},baidu.un = baidu.event.un || {},baidu.lang = baidu.lang || {},baidu.inherits = baidu.lang.inherits || {},baidu.object = baidu.object || {},baidu.string = baidu.string || {},baidu.decodeHTML = baidu.string.decodeHTML || {},baidu.encodeHTML = baidu.string.encodeHTML || {},baidu.format = baidu.string.format || {},baidu.trim = baidu.string.trim || {},window.wpo = window.wpo || {},wpo.head = 1 * new Date,baidu(document).ready(function () {
    wpo.dom = 1 * new Date
}),baidu(window).on("load", function () {
    var e = wpo.load = 1 * new Date;
    setTimeout(function () {
        var t = ["pid=" + wpo.pid, "head=" + (wpo.head - wpo.start), "tti=" + (wpo.tti - wpo.start), "dom=" + (wpo.dom - wpo.start), "load=" + (wpo.load - wpo.start), "page=" + wpo.page, "r=" + e],
            n = "wpo_" + e, i = window[n] = new Image;
        i.onload = i.onerror = function () {
            window[n] = null
        }, "http" == location.protocol && (i.src = "http://nsclick.baidu.com/v.gif?type=2009&fn=wpo&" + t.join("&")), i = null
    }, 0)
}),!function (e) {
    "use strict";

    function t(e) {
        (t = Array.prototype.indexOf ? function (e) {
            return a.indexOf(e) > -1
        } : function (e) {
            var t = e + o;
            return a.join(o).indexOf(t) > -1
        })(e)
    }

    function n(e, n) {
        var r, e, a, o = e.split("/"), u = o.length;
        for (r = 0, a = i; u > r; r++, a = a[e]) {
            if (e = o[r], 0 == r && t(e)) throw e + "is reservedWord";
            a[e] || r === u - 1 || (a[e] = {}), r === u - 1 && (a[e] = n)
        }
    }

    var i, t, r = {}, a = ["require", "define"], o = "arr" + +new Date;
    i = e.Pass = {}, i.define = function (e, t) {
        if (!e) throw"base/namespace Pass.define first param must be passed in";
        return r[e] || (t ? (r[e] = t, n(e, r[e])) : (r[e] = {}, n(e, r[e]))), r[e]
    }, i.require = function (e) {
        if (!e || !r[e]) throw"base/namespace Pass.require cant get target obj";
        return r[e]
    }, e.Pass = i
}(this),!function (e, t) {
    "use strict";
    var n = window.publicData || {};
    t.logAction = {
        logPass: function (e) {
            e = e || {}, e = t.logAction.formatLogData(e);
            var n = t.logAction.makeImgSrc(e), i = new Image;
            i.onload = i.onerror = function () {
                i.onload = i.onerror = null, i = null
            }, i.src = n
        }, logClickLink: function (e, n) {
            e = e || {}, e = t.logAction.formatLogData(e);
            var i = t.logAction.makeImgSrc(e), r = n.target || n.srcElement,
                a = r && r.getAttribute && r.getAttribute("target"), o = "_self" === a || null === a;
            if (o && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), window.navigator.sendBeacon && o) window.navigator.sendBeacon(i), window.location.href = r.getAttribute("href"); else if (o) t.logAction.lazyLog(r, i, null); else {
                var u = new Image;
                u.onload = u.onerror = function () {
                    u.onload = u.onerror = null, u = null
                }, u.src = i
            }
        }, logCallBack: function (e, n) {
            e = e || {}, e = t.logAction.formatLogData(e);
            var i = t.logAction.makeImgSrc(e);
            t.logAction.lazyLog({}, i, n)
        }, formatLogData: function (t) {
            return e.extend({}, {
                page: t.logPage || e("[data-pageName]").attr("data-pageName") || "",
                source: "pc-base",
                tpl: n.tpl || "",
                subpro: n.subpro || "",
                extrajson: n.extrajson || "",
                cuid: n.cuid || "",
                livinguname: n.livinguname || "",
                data_source: "fe"
            }, t)
        }, makeImgSrc: function (e) {
            var n = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&v=" + (new Date).getTime(),
                i = "";
            for (var r in e) e.hasOwnProperty(r) && ("en" !== r ? i += "&" + r + "=" + e[r] : "en" === r && (i += "&auto_en=" + e[r]));
            n += i;
            var a = "{eventType:" + (e.en || "") + "}";
            return a = t.logAction.base64encode(a), n += "&auto_statistic=" + a
        }, lazyLog: function (e, t, n) {
            function i() {
                n ? n() : window.location.href = r
            }

            var r = e.getAttribute && e.getAttribute("href"), a = new Image, o = setTimeout(function () {
                a.onload = a.onerror = a = null, i("imgTimeout")
            }, 200);
            a.onload = a.onerror = function () {
                clearTimeout(o), a.onload = a.onerror = a = null, i("imgSuccess")
            }, a.src = t
        }, base64encode: function (e) {
            var t, n, i, r, a, o, u = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for (i = e.length, n = 0, t = ""; i > n;) {
                if (r = 255 & e.charCodeAt(n++), n === i) {
                    t += u.charAt(r >> 2), t += u.charAt((3 & r) << 4), t += "==";
                    break
                }
                if (a = e.charCodeAt(n++), n === i) {
                    t += u.charAt(r >> 2), t += u.charAt((3 & r) << 4 | (240 & a) >> 4), t += u.charAt((15 & a) << 2), t += "=";
                    break
                }
                o = e.charCodeAt(n++), t += u.charAt(r >> 2), t += u.charAt((3 & r) << 4 | (240 & a) >> 4), t += u.charAt((15 & a) << 2 | (192 & o) >> 6), t += u.charAt(63 & o)
            }
            return t
        }
    }
}(baidu, window.Pass),!function (e, t) {
    "use strict";

    function n() {
    }

    function i() {
    }

    function r(t, n) {
        return e.sio(t).callByServer(function (e) {
            n.resolveWith(null, [e])
        }), n.promise()
    }

    var a = location.protocol, o = "//([^/]+)/", u = location.href.match(RegExp(a + o))[1];
    t.request = function (t, o) {
        var d, s = "xhr";
        return 0 == t.indexOf("http") && (0 !== t.indexOf(a) ? s = "jsonp" : t.indexOf(u) !== a.length + 2 ? s = "jsonp" : t.charAt(a.length + 2 + u.length + 1) && "/" !== t.charAt(a.length + 2 + u.length + 1) && (s = "jsonp")), "xhr" == s ? d = e.ajax(t, o) : "jsonp" == s && (d = r(t, new e.Deferred)), d.done(n), d.fail(i), d
    }
}(baidu, window.Pass.define("base/server")),!function (e) {
    e("#feedbackRobot").on("mouseover", function () {
        e("#contactContent").show()
    }), e("#feedbackRobot").on("mouseout", function () {
        e("#contactContent").hide()
    }), e("#contactHelp").on("click", function () {
        location.href = "https://zhiqiu.baidu.com/imcswebchat/roulette/in?id=48721&token=1nnbs7op4ocsr68143oamrjq9c4eoin2&domainID=pass&type=2"
    })
}(baidu),!function (e) {
    function t() {
        if (bds && bds.qa && bds.qa.ShortCut && bds.qa.ShortCut.initRightBar) {
            var e = {
                needImage: !0,
                upload_file: !0,
                appid: 221891,
                productLine: 90645,
                wenjuanTitle: "",
                wenjuanURL: "",
                issuePlaceholder: "请输入遇到问题的帐号名及描述",
                contactPlaceholder: "请输入可联系的邮箱，我们会把处理结果发送至该邮箱",
                showPosition: "center",
                contactWayType: "email",
                needContactWay: !0,
                needHotQuestion: !1,
                needQuestionnaire: !1,
                needFeedbackType: !1,
                needProductType: !1,
                needEvaluate: !1,
                typeArray: [],
                titleBgColor: "#F5F5F5",
                buttonColor: "#3582FA",
                mainFontColor: "#151515",
                secondaryFontColor: "#999999",
                titleColor: "#666666",
                hotQuestionArray: []
            };
            bds.qa.ShortCut.initRightBar(e);
            var t = {};
            bds.qa.ShortCut._getProData(t)
        }
    }

    function n() {
        return window.bds && window.bds.qa && window.bds.qa.ShortCut ? t() : i("https://ufosdk.baidu.com/Public/feedback/js/dist/feedback_plugin_2.0.js", function () {
            t()
        }, {charset: "utf-8", id: "feedback_script"}), !1
    }

    function i(e, t, n) {
        var i = document.createElement("script"), n = n || {};
        i.type = "text/javascript", n.charset && (i.charset = n.charset), n.id && (i.id = n.id), i.readyState ? i.onreadystatechange = function () {
            ("loaded" === i.readyState || "complete" === i.readyState) && (i.onreadystatechange = null, t())
        } : i.onload = function () {
            t()
        }, i.src = e, document.body.appendChild(i)
    }

    var r = "userbar-panel";
    if (document.getElementById(r)) {
        var a = e("#userbar-panel");
        a.mouseover(function () {
            e("#userbar-panel-list").show()
        }), a.mouseout(function () {
            e("#userbar-panel-list").hide()
        })
    }
    var o = document.getElementById("mod-userbar-feedback"), u = document.getElementById("feedbackAdvice");
    o && (o.onclick = n), u && (u.onclick = n)
}(baidu, window.Pass);