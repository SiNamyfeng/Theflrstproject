(function () {
    var h = {}, mt = {}, c = {
        id: "90056b3f84f90da57dc0f40150f005d5",
        dm: ["passport.baidu.com"],
        js: "tongji.baidu.com/hm-web/js/",
        etrk: ["%7b%22passport.baidu.com%5c%2f*%22%3a%5b%22%23check-secure%22%2c%22%23score_detail%3eli%5b1%5d%3ea%22%2c%22%23score_detail%3eli%5b2%5d%3ea%22%2c%22%23score_detail%3eli%5b3%5d%3ea%22%2c%22%23score_detail%3eli%5b4%5d%3ea%22%5d%7d"],
        cetrk: [],
        cptrk: [],
        icon: '',
        ctrk: ["%5b%22https%3a%5c%2f%5c%2fpassport.baidu.com%5c%2f%3fgetpassindex%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2faccount%5c%2fpassword%22%2c%22https%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2f%3flogin%22%2c%22https%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2f%3freg%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fexport%5c%2fapp%5c%2findex.html%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2f%3faccountsensinfo*%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2f%3faccountrecord*%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2faccountbind*%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fcenter*%22%2c%22http%3a%5c%2f%5c%2fpassport.baidu.com%5c%2fv2%5c%2faccountsecurity*%22%5d"],
        nv: -1,
        vdur: 1800000,
        age: 31536000000,
        rec: 0,
        rp: [],
        trust: 0,
        vcard: 0,
        qiao: 0,
        lxb: 0,
        kbtrk: 0,
        pt: 0,
        spa: 0,
        oc: 0,
        aet: '',
        hca: 'E72329BB430CEB5B',
        conv: 0,
        med: 0,
        cvcc: '',
        cvcf: [],
        apps: ''
    };
    var u = void 0, v = !0, x = null, y = !1;
    mt.cookie = {};
    mt.cookie.set = function (a, b, d) {
        var f;
        d.U && (f = new Date, f.setTime(f.getTime() + d.U));
        document.cookie = a + "=" + b + (d.domain ? "; domain=" + d.domain : "") + (d.path ? "; path=" + d.path : "") + (f ? "; expires=" + f.toGMTString() : "") + (d.Rc ? "; secure" : "")
    };
    mt.cookie.get = function (a) {
        return (a = RegExp("(^| )" + a + "=([^;]*)(;|$)").exec(document.cookie)) ? a[2] : x
    };
    mt.cookie.tc = function (a, b) {
        try {
            var d = "Hm_ck_" + +new Date;
            mt.cookie.set(d, "is-cookie-enabled", {domain: a, path: b, U: u});
            var f = "is-cookie-enabled" === mt.cookie.get(d) ? "1" : "0";
            mt.cookie.set(d, "", {domain: a, path: b, U: -1});
            return f
        } catch (g) {
            return "0"
        }
    };
    mt.lang = {};
    mt.lang.d = function (a, b) {
        return "[object " + b + "]" === {}.toString.call(a)
    };
    mt.lang.eb = function (a) {
        return mt.lang.d(a, "Number") && isFinite(a)
    };
    mt.lang.I = function (a) {
        return mt.lang.d(a, "String")
    };
    mt.lang.isArray = function (a) {
        return mt.lang.d(a, "Array")
    };
    mt.lang.h = function (a) {
        return a.replace ? a.replace(/'/g, "'0").replace(/\*/g, "'1").replace(/!/g, "'2") : a
    };
    mt.lang.trim = function (a) {
        return a.replace(/^\s+|\s+$/g, "")
    };
    mt.lang.H = function (a, b) {
        var d = y;
        if (a == x || !mt.lang.d(a, "Array") || b === u) return d;
        if (Array.prototype.indexOf) d = -1 !== a.indexOf(b); else for (var f = 0; f < a.length; f++) if (a[f] === b) {
            d = v;
            break
        }
        return d
    };
    mt.url = {};
    mt.url.m = function (a, b) {
        var d = a.match(RegExp("(^|&|\\?|#)(" + b + ")=([^&#]*)(&|$|#)", ""));
        return d ? d[3] : x
    };
    mt.url.Nc = function (a) {
        return (a = a.match(/^(https?:)\/\//)) ? a[1] : x
    };
    mt.url.Wb = function (a) {
        return (a = a.match(/^(https?:\/\/)?([^\/\?#]*)/)) ? a[2].replace(/.*@/, "") : x
    };
    mt.url.M = function (a) {
        return (a = mt.url.Wb(a)) ? a.replace(/:\d+$/, "") : a
    };
    mt.url.Ia = function (a) {
        return (a = a.match(/^(https?:\/\/)?[^\/]*(.*)/)) ? a[2].replace(/[\?#].*/, "").replace(/^$/, "/") : x
    };
    (function () {
        var a = mt.lang, b = mt.url;
        mt.f = {};
        mt.f.Fa = function (d) {
            return document.getElementById(d)
        };
        mt.f.Ga = function (d) {
            if (!d) return x;
            try {
                d = String(d);
                if (0 === d.indexOf("!HMCQ!")) return d;
                if (0 === d.indexOf("!HMCC!")) return document.querySelector(d.substring(6, d.length));
                for (var f = d.split(">"), a = document.body, b = f.length - 1; 0 <= b; b--) if (-1 < f[b].indexOf("#")) {
                    var e = f[b].split("#")[1];
                    (a = document.getElementById(e)) || (a = document.getElementById(decodeURIComponent(e)));
                    f = f.splice(b + 1, f.length - (b + 1));
                    break
                }
                for (d =
                         0; a && d < f.length;) {
                    var l = String(f[d]).toLowerCase();
                    if (!("html" === l || "body" === l)) {
                        var b = 0, p = f[d].match(/\[(\d+)\]/i), e = [];
                        if (p) b = p[1] - 1, l = l.split("[")[0]; else if (1 !== a.childNodes.length) {
                            for (var s = 0, r = 0, t = a.childNodes.length; r < t; r++) {
                                var q = a.childNodes[r];
                                1 === q.nodeType && q.nodeName.toLowerCase() === l && s++;
                                if (1 < s) return x
                            }
                            if (1 !== s) return x
                        }
                        for (s = 0; s < a.childNodes.length; s++) 1 === a.childNodes[s].nodeType && a.childNodes[s].nodeName.toLowerCase() === l && e.push(a.childNodes[s]);
                        if (!e[b]) return x;
                        a = e[b]
                    }
                    d++
                }
                return a
            } catch (k) {
                return x
            }
        };
        mt.f.Ia = function (a, f) {
            var g = [], b = [];
            if (!a) return b;
            for (; a.parentNode != x;) {
                for (var e = 0, l = 0, p = a.parentNode.childNodes.length, s = 0; s < p; s++) {
                    var r = a.parentNode.childNodes[s];
                    if (r.nodeName === a.nodeName && (e++, r === a && (l = e), 0 < l && 1 < e)) break
                }
                if ((p = "" !== a.id) && f) {
                    g.unshift("#" + encodeURIComponent(a.id));
                    break
                } else p && (p = "#" + encodeURIComponent(a.id), p = 0 < g.length ? p + ">" + g.join(">") : p, b.push(p)), g.unshift(encodeURIComponent(String(a.nodeName).toLowerCase()) + (1 < e ? "[" + l + "]" : ""));
                a = a.parentNode
            }
            b.push(g.join(">"));
            return b
        };
        mt.f.oa = function (a) {
            return (a = mt.f.Ia(a, v)) && a.length ? String(a[0]) : ""
        };
        mt.f.$b = function (a) {
            return mt.f.Ia(a, y)
        };
        mt.f.Ya = function (a) {
            var f;
            for (f = "A"; (a = a.parentNode) && 1 == a.nodeType;) if (a.tagName == f) return a;
            return x
        };
        mt.f.Sb = function (a) {
            return 9 === a.nodeType ? a : a.ownerDocument || a.document
        };
        mt.f.Za = function (a) {
            var f = {top: 0, left: 0};
            if (!a) return f;
            var b = mt.f.Sb(a).documentElement;
            "undefined" !== typeof a.getBoundingClientRect && (f = a.getBoundingClientRect());
            return {
                top: f.top + (window.pageYOffset || b.scrollTop) -
                    (b.clientTop || 0), left: f.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }
        };
        mt.f.getAttribute = function (a, f) {
            var b = a.getAttribute && a.getAttribute(f) || x;
            if (!b && a.attributes && a.attributes.length) for (var n = a.attributes, e = n.length, l = 0; l < e; l++) n[l].nodeName === f && (b = n[l].nodeValue);
            return b
        };
        mt.f.X = function (a) {
            var f = "document";
            a.tagName !== u && (f = a.tagName);
            return f.toLowerCase()
        };
        mt.f.dc = function (b) {
            var f = "";
            b.textContent ? f = a.trim(b.textContent) : b.innerText && (f = a.trim(b.innerText));
            f && (f = f.replace(/\s+/g,
                " ").substring(0, 255));
            return f
        };
        mt.f.W = function (d, f) {
            var g;
            a.I(d) && 0 === String(d).indexOf("!HMCQ!") ? (g = String(d), g = b.m(document.location.href, g.substring(6, g.length))) : a.I(d) || (g = mt.f.X(d), "input" === g && f && ("button" === d.type || "submit" === d.type) ? g = a.trim(d.value) || "" : "input" === g && !f && "password" !== d.type ? g = a.trim(d.value) || "" : "img" === g ? (g = mt.f.getAttribute, g = g(d, "alt") || g(d, "title") || g(d, "src")) : g = "body" === g || "html" === g ? ["(hm-default-content-for-", g, ")"].join("") : mt.f.dc(d));
            return String(g || "").substring(0,
                255)
        };
        (function () {
            (mt.f.lb = function () {
                function a() {
                    if (!a.ra) {
                        a.ra = v;
                        for (var b = 0, f = n.length; b < f; b++) n[b]()
                    }
                }

                function f() {
                    try {
                        document.documentElement.doScroll("left")
                    } catch (b) {
                        setTimeout(f, 1);
                        return
                    }
                    a()
                }

                var b = y, n = [], e;
                document.addEventListener ? e = function () {
                    document.removeEventListener("DOMContentLoaded", e, y);
                    a()
                } : document.attachEvent && (e = function () {
                    "complete" === document.readyState && (document.detachEvent("onreadystatechange", e), a())
                });
                (function () {
                    if (!b) if (b = v, "complete" === document.readyState) a.ra = v;
                    else if (document.addEventListener) document.addEventListener("DOMContentLoaded", e, y), window.addEventListener("load", a, y); else if (document.attachEvent) {
                        document.attachEvent("onreadystatechange", e);
                        window.attachEvent("onload", a);
                        var l = y;
                        try {
                            l = window.frameElement == x
                        } catch (p) {
                        }
                        document.documentElement.doScroll && l && f()
                    }
                })();
                return function (b) {
                    a.ra ? b() : n.push(b)
                }
            }()).ra = y
        })();
        return mt.f
    })();
    mt.event = {};
    mt.event.e = function (a, b, d) {
        a.attachEvent ? a.attachEvent("on" + b, function (b) {
            d.call(a, b)
        }) : a.addEventListener && a.addEventListener(b, d, y)
    };
    mt.event.preventDefault = function (a) {
        a.preventDefault ? a.preventDefault() : a.returnValue = y
    };
    (function () {
        var a = mt.event;
        mt.g = {};
        mt.g.pa = /msie (\d+\.\d+)/i.test(navigator.userAgent);
        mt.g.Xb = function () {
            if (document.documentMode) return document.documentMode;
            var a = /msie (\d+\.\d+)/i.exec(navigator.userAgent);
            return a ? +a[1] || 0 : 0
        };
        mt.g.Oc = function () {
            try {
                return !!navigator.userAgent.match(/safari/i) && !navigator.userAgent.match(/chrome/i) && "undefined" !== typeof document.body.style.webkitFilter && !window.chrome
            } catch (a) {
                return y
            }
        };
        mt.g.cookieEnabled = navigator.cookieEnabled;
        mt.g.javaEnabled = navigator.javaEnabled();
        mt.g.language = navigator.language || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || "";
        mt.g.xc = (window.screen.width || 0) + "x" + (window.screen.height || 0);
        mt.g.colorDepth = window.screen.colorDepth || 0;
        mt.g.Y = function () {
            var a;
            a = a || document;
            return parseInt(window.pageYOffset || a.documentElement.scrollTop || a.body && a.body.scrollTop || 0, 10)
        };
        mt.g.N = function () {
            var a = document;
            return parseInt(window.innerHeight || a.documentElement.clientHeight || a.body && a.body.clientHeight || 0, 10)
        };
        mt.g.vb =
            0;
        mt.g.fc = function () {
            var a = document;
            return parseInt(window.innerWidth || a.documentElement.clientWidth || a.body.offsetWidth || 0, 10)
        };
        mt.g.orientation = 0;
        (function () {
            function b() {
                var a = 0;
                window.orientation !== u && (a = window.orientation);
                screen && (screen.orientation && screen.orientation.angle !== u) && (a = screen.orientation.angle);
                mt.g.orientation = a;
                mt.g.vb = mt.g.fc()
            }

            b();
            a.e(window, "orientationchange", b)
        })();
        return mt.g
    })();
    mt.A = {};
    mt.A.parse = function (a) {
        return (new Function("return (" + a + ")"))()
    };
    mt.A.stringify = function () {
        function a(a) {
            /["\\\x00-\x1f]/.test(a) && (a = a.replace(/["\\\x00-\x1f]/g, function (a) {
                var f = d[a];
                if (f) return f;
                f = a.charCodeAt();
                return "\\u00" + Math.floor(f / 16).toString(16) + (f % 16).toString(16)
            }));
            return '"' + a + '"'
        }

        function b(a) {
            return 10 > a ? "0" + a : a
        }

        var d = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
        return function (f) {
            switch (typeof f) {
                case "undefined":
                    return "undefined";
                case "number":
                    return isFinite(f) ? String(f) : "null";
                case "string":
                    return a(f);
                case "boolean":
                    return String(f);
                default:
                    if (f === x) return "null";
                    if (f instanceof Array) {
                        var g = ["["], d = f.length, e, l, p;
                        for (l = 0; l < d; l++) switch (p = f[l], typeof p) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                e && g.push(","), g.push(mt.A.stringify(p)), e = 1
                        }
                        g.push("]");
                        return g.join("")
                    }
                    if (f instanceof Date) return '"' + f.getFullYear() + "-" + b(f.getMonth() + 1) + "-" + b(f.getDate()) + "T" + b(f.getHours()) + ":" + b(f.getMinutes()) + ":" + b(f.getSeconds()) + '"';
                    e = ["{"];
                    l = mt.A.stringify;
                    for (d in f) if (Object.prototype.hasOwnProperty.call(f, d)) switch (p =
                        f[d], typeof p) {
                        case "undefined":
                        case "unknown":
                        case "function":
                            break;
                        default:
                            g && e.push(","), g = 1, e.push(l(d) + ":" + l(p))
                    }
                    e.push("}");
                    return e.join("")
            }
        }
    }();
    mt.localStorage = {};
    mt.localStorage.ya = function () {
        if (!mt.localStorage.l) try {
            mt.localStorage.l = document.createElement("input"), mt.localStorage.l.type = "hidden", mt.localStorage.l.style.display = "none", mt.localStorage.l.addBehavior("#default#userData"), document.getElementsByTagName("head")[0].appendChild(mt.localStorage.l)
        } catch (a) {
            return y
        }
        return v
    };
    mt.localStorage.set = function (a, b, d) {
        var f = new Date;
        f.setTime(f.getTime() + d || 31536E6);
        try {
            window.localStorage ? (b = f.getTime() + "|" + b, window.localStorage.setItem(a, b)) : mt.localStorage.ya() && (mt.localStorage.l.expires = f.toUTCString(), mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.setAttribute(a, b), mt.localStorage.l.save(document.location.hostname))
        } catch (g) {
        }
    };
    mt.localStorage.get = function (a) {
        if (window.localStorage) {
            if (a = window.localStorage.getItem(a)) {
                var b = a.indexOf("|"), d = a.substring(0, b) - 0;
                if (d && d > (new Date).getTime()) return a.substring(b + 1)
            }
        } else if (mt.localStorage.ya()) try {
            return mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.getAttribute(a)
        } catch (f) {
        }
        return x
    };
    mt.localStorage.remove = function (a) {
        if (window.localStorage) window.localStorage.removeItem(a); else if (mt.localStorage.ya()) try {
            mt.localStorage.l.load(document.location.hostname), mt.localStorage.l.removeAttribute(a), mt.localStorage.l.save(document.location.hostname)
        } catch (b) {
        }
    };
    mt.sessionStorage = {};
    mt.sessionStorage.set = function (a, b) {
        try {
            window.sessionStorage && window.sessionStorage.setItem(a, b)
        } catch (d) {
        }
    };
    mt.sessionStorage.get = function (a) {
        try {
            return window.sessionStorage ? window.sessionStorage.getItem(a) : x
        } catch (b) {
            return x
        }
    };
    mt.sessionStorage.remove = function (a) {
        try {
            window.sessionStorage && window.sessionStorage.removeItem(a)
        } catch (b) {
        }
    };
    mt.rb = {};
    mt.rb.log = function (a, b) {
        var d = new Image, f = "mini_tangram_log_" + Math.floor(2147483648 * Math.random()).toString(36);
        window[f] = d;
        d.onload = function () {
            d.onload = x;
            d = window[f] = x;
            b && b(a)
        };
        d.src = a
    };
    mt.Qa = {};
    mt.Qa.ec = function () {
        var a = "";
        if (navigator.plugins && navigator.mimeTypes.length) {
            var b = navigator.plugins["Shockwave Flash"];
            b && b.description && (a = b.description.replace(/^.*\s+(\S+)\s+\S+$/, "$1"))
        } else if (window.ActiveXObject) try {
            if (b = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")) (a = b.GetVariable("$version")) && (a = a.replace(/^.*\s+(\d+),(\d+).*$/, "$1.$2"))
        } catch (d) {
        }
        return a
    };
    mt.Qa.Lc = function (a, b, d, f, g) {
        return '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" id="' + a + '" width="' + d + '" height="' + f + '"><param name="movie" value="' + b + '" /><param name="flashvars" value="' + (g || "") + '" /><param name="allowscriptaccess" value="always" /><embed type="application/x-shockwave-flash" name="' + a + '" width="' + d + '" height="' + f + '" src="' + b + '" flashvars="' + (g || "") + '" allowscriptaccess="always" /></object>'
    };
    h.z = {
        mc: "http://tongji.baidu.com/hm-web/welcome/ico",
        Pa: "hm.baidu.com/hm.gif",
        Bb: /^(tongji|hmcdn).baidu.com$/,
        ub: "tongji.baidu.com",
        jc: "hmmd",
        kc: "hmpl",
        Ic: "utm_medium",
        ic: "hmkw",
        Kc: "utm_term",
        gc: "hmci",
        Hc: "utm_content",
        lc: "hmsr",
        Jc: "utm_source",
        hc: "hmcu",
        Gc: "utm_campaign",
        O: 0,
        K: Math.round(+new Date / 1E3),
        protocol: "https:" === document.location.protocol ? "https:" : "http:",
        ta: "https:",
        Pc: 0,
        Hb: 6E5,
        Qc: 6E5,
        yc: 5E3,
        Ib: 5,
        Q: 1024,
        Gb: 1,
        ea: 2147483647,
        tb: "hca kb cc cf ci ck cl cm cp cu cw ds vl ep et fl ja ln lo lt rnd si su v cv lv api sn r ww p ct u tt".split(" "),
        $: v,
        Wa: ["a", "input", "button"],
        Ta: {
            id: "data-hm-id",
            la: "data-hm-class",
            ia: "data-hm-xpath",
            content: "data-hm-content",
            wa: "data-hm-tag",
            link: "data-hm-link"
        },
        Va: "data-hm-enabled",
        Ua: "data-hm-disabled",
        vc: "https://hmcdn.baidu.com/static/tongji/plugins/",
        jb: ["UrlChangeTracker", "OcpcCbHm"]
    };
    (function () {
        var a = {
            F: {}, e: function (a, d) {
                this.F[a] = this.F[a] || [];
                this.F[a].push(d)
            }, L: function (a, d) {
                this.F[a] = this.F[a] || [];
                for (var f = this.F[a].length, g = 0; g < f; g++) this.F[a][g](d)
            }
        };
        return h.s = a
    })();
    (function () {
        var a = mt.lang, b = /^https?:\/\//, d = {
            Rb: function (a) {
                var b;
                try {
                    b = JSON.parse(decodeURIComponent(a[0]))
                } catch (d) {
                }
                return b
            }, fb: function (a, g) {
                var d = h.c && h.c.b && h.c.b.u || document.location.href;
                b.test(a) || (d = d.replace(b, ""));
                a = a.replace(/\/$/, "");
                d = d.replace(/\/$/, "");
                g && (d = d.replace(/^(https?:\/\/)?www\./, "$1"));
                return RegExp("^" + a.replace(/[?.+^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$").test(d)
            }, G: function (f, b) {
                var n = d.Rb(f);
                if (!a.d(n, "Undefined")) {
                    if (a.d(n, "Array")) {
                        for (var e = 0; e < n.length; e++) if (d.fb(n[e],
                            b)) return v;
                        return y
                    }
                    if (a.d(n, "Object")) {
                        var e = [], l;
                        for (l in n) n.hasOwnProperty(l) && d.fb(l, b) && (e = e.concat(n[l]));
                        return e
                    }
                }
            }
        };
        return h.R = d
    })();
    (function () {
        function a(a, f) {
            var g = document.createElement("script");
            g.charset = "utf-8";
            b.d(f, "Function") && (g.readyState ? g.onreadystatechange = function () {
                if ("loaded" === g.readyState || "complete" === g.readyState) g.onreadystatechange = x, f()
            } : g.onload = function () {
                f()
            });
            g.src = a;
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(g, n)
        }

        var b = mt.lang;
        return h.load = a
    })();
    (function () {
        function a() {
            var a = "";
            if (h.c.b.nv) {
                a = encodeURIComponent(document.referrer);
                try {
                    window.sessionStorage ? d.set("Hm_from_" + c.id, a) : b.set("Hm_from_" + c.id, a, 864E5)
                } catch (g) {
                }
            } else try {
                a = (window.sessionStorage ? d.get("Hm_from_" + c.id) : b.get("Hm_from_" + c.id)) || ""
            } catch (n) {
            }
            return a
        }

        var b = mt.localStorage, d = mt.sessionStorage;
        return h.Mc = a
    })();
    (function () {
        var a = h.z, b = {
            init: function () {
                if ("" !== c.icon) {
                    var b = c.icon.split("|"), f = a.mc + "?s=" + c.id,
                        g = "https://hmcdn.baidu.com/static" + b[0] + ".gif";
                    document.write("swf" === b[1] || "gif" === b[1] ? '<a href="' + f + '" target="_blank"><img border="0" src="' + g + '" width="' + b[2] + '" height="' + b[3] + '"></a>' : '<a href="' + f + '" target="_blank">' + b[0] + "</a>")
                }
            }
        };
        h.s.e("pv-b", b.init);
        return b
    })();
    (function () {
        var a = mt.cookie, b = mt.localStorage, d = mt.sessionStorage, f = {
            getData: function (f) {
                try {
                    return a.get(f) || d.get(f) || b.get(f)
                } catch (n) {
                }
            }, setData: function (g, n, e) {
                try {
                    a.set(g, n, {domain: f.V(), path: f.na(), U: e}), e ? b.set(g, n, e) : d.set(g, n)
                } catch (l) {
                }
            }, removeData: function (g) {
                try {
                    a.set(g, "", {domain: f.V(), path: f.na(), U: -1}), d.remove(g), b.remove(g)
                } catch (n) {
                }
            }, aa: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var f = a.indexOf(b);
                return -1 < f && f + b.length === a.length
            }, sa: function (a, b) {
                a = a.replace(/^https?:\/\//,
                    "");
                return 0 === a.indexOf(b)
            }, V: function () {
                for (var a = document.location.hostname, b = 0, e = c.dm.length; b < e; b++) if (f.aa(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, na: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var e = c.dm[a];
                    if (-1 < e.indexOf("/") && f.sa(document.location.href, e)) return e.replace(/^[^/]+(\/.*)/, "$1") + "/"
                }
                return "/"
            }
        };
        return h.Da = f
    })();
    (function () {
        var a = mt.lang, b = mt.A, d = h.Da,
            f = {pageview: {}, session: {}, autoEventTracking: {}, customEvent: {}, user: {}},
            g = {user: 1, session: 2, pageview: 3, autoEventTracking: 3, customEvent: 3, others: 3},
            n = ["session", "user"], e = "Hm_up_" + c.id, l = {
                init: function () {
                    l.qc()
                }, qc: function () {
                    try {
                        var g = b.parse(decodeURIComponent(d.getData(e)));
                        a.d(g, "Object") && (f.user = g)
                    } catch (s) {
                    }
                }, B: function (a) {
                    var b = {};
                    f[a] !== u && (b = f[a]);
                    a = this.Ja();
                    for (var e in b) b.hasOwnProperty(e) && (a[e] = b[e]);
                    return a
                }, Ja: function () {
                    for (var a = {}, b, e = n.length -
                        1; 0 <= e; e--) {
                        b = f[n[e]];
                        for (var t in b) b.hasOwnProperty(t) && (a[t] = b[t])
                    }
                    return a
                }, setProperty: function (e, g, d) {
                    var t = f[e];
                    if (a.d(t, "Object") && a.d(g, "Object")) {
                        for (var q in g) if (g.hasOwnProperty(q)) {
                            var k = a.h(String(q));
                            if (d || !/^_/.test(k) && !/_$/.test(k) || /^(_iden|ei_|ec_|ex_|en_|et_|el_)$/.test(k)) {
                                var m = g[q];
                                if (m == x) delete t[k]; else {
                                    if (a.d(m, "Object") || a.d(m, "Array")) m = b.stringify(m);
                                    m = a.h(String(m));
                                    l.sc(e, k, m) && (t[k] = {value: m, scope: l.ab(e)})
                                }
                            }
                        }
                        "user" === e && l.Na()
                    }
                }, w: function (b) {
                    b !== u && ("userId" ===
                    b && a.d(f.user, "Object") ? (delete f.user.uid_, l.Na()) : "user" === b && a.d(f.user, "Object") ? (b = f.user.uid_, f.user = b === u ? {} : {uid_: b}, l.Na()) : f[b] !== u && (f[b] = {}))
                }, Na: function () {
                    try {
                        d.setData(e, encodeURIComponent(b.stringify(f.user)), c.age)
                    } catch (a) {
                    }
                }, sc: function (a, b, e) {
                    var g = v, d = f[a];
                    if (256 < encodeURIComponent(String(b)).length || 256 < encodeURIComponent(String(e)).length) g = y; else {
                        var k = d[b];
                        d[b] = {value: e, scope: l.ab(a)};
                        a = l.P(l.B(a));
                        2048 < encodeURIComponent(a).length && (k !== u ? d[b] = k : delete d[b], g = y)
                    }
                    return g
                },
                P: function (a) {
                    var b = [], f, e;
                    for (e in a) a.hasOwnProperty(e) && (f = [e, a[e].value], (1 === a[e].scope || 2 === a[e].scope) && f.push(a[e].scope), b.push(f.join("*")));
                    return b.join("!")
                }, ab: function (a) {
                    a = g[a];
                    return a !== u ? a : g.others
                }
            };
        return h.T = l
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = h.s, f = h.R, g = h.T, n = g.P;
        if (b.isArray(c.cptrk) && 0 < c.cptrk.length) {
            var e = {
                ib: {}, xa: {}, init: function () {
                    for (var a, g = f.G(c.cptrk) || [], d = 0; d < g.length; d++) if (a = g[d], a.a !== u && b.d(a.a, "Object")) {
                        a = a.a;
                        for (var r in a) a.hasOwnProperty(r) && (e.xa[r] = String(a[r]))
                    }
                }, hb: function () {
                    var b, f, g;
                    for (g in e.xa) if (e.xa.hasOwnProperty(g) && e.ib[g] === u && (b = e.xa[g], b = a.Ga(b))) f = f === u ? {} : f, f[g] = a.W(b, y), e.ib[g] = v;
                    return f
                }, Ka: function () {
                    var a = e.hb();
                    a && e.Ac(a)
                }, pc: function () {
                    "MutationObserver" in
                    window ? (new MutationObserver(e.Ka)).observe(document.body, {
                        childList: v,
                        subtree: v
                    }) : window.setInterval(e.Ka, 15E3)
                }, Ac: function (a) {
                    if (b.d(a, "Object")) {
                        g.setProperty("pageview", a);
                        a = h.c.b.p;
                        var f = h.c.b.ep;
                        h.c.b.et = 9;
                        h.c.b.ep = "";
                        h.c.b.p = n(g.B("pageview"));
                        h.c.i();
                        h.c.b.p = a;
                        h.c.b.ep = f;
                        g.w("pageview")
                    }
                }
            };
            e.init();
            d.e("pv-b", function () {
                var a = e.hb();
                a && g.setProperty("pageview", a)
            });
            e.pc();
            a.lb(e.Ka)
        }
    })();
    (function () {
        var a = mt.lang, b = mt.f, d = h.R, f = {
            S: function (a, n) {
                return function (e) {
                    var l = e.target || e.srcElement;
                    if (l) {
                        var p = d.G(n) || [], s = l.getAttribute(a.ka);
                        e = e.clientX + ":" + e.clientY;
                        if (s && s === e) l.removeAttribute(a.ka); else if (0 < p.length && (l = b.$b(l)) && l.length) if (p = l.length, s = l[l.length - 1], 1E4 > p * s.split(">").length) for (s = 0; s < p; s++) f.qb(a, l[s]); else f.qb(a, s)
                    }
                }
            }, qb: function (b, f) {
                for (var e = {}, d = String(f).split(">").length, p = 0; p < d; p++) e[f] = "", f = f.substring(0, f.lastIndexOf(">"));
                b && (a.d(b, "Object") && b.Ca) &&
                b.Ca(e)
            }, mb: function (a, b) {
                return function (f) {
                    (f.target || f.srcElement).setAttribute(a.ka, f.clientX + ":" + f.clientY);
                    a && a.o && (b ? a.o(b) : a.o("#" + encodeURIComponent(this.id), f.type))
                }
            }
        };
        return h.ma = f
    })();
    (function () {
        var a = mt.f, b = mt.event, d = h.R, f = h.ma, g = {
            ka: "HM_fix", Ba: function () {
                b.e(document, "click", f.S(g, c.etrk));
                for (var n = d.G(c.etrk) || [], e = 0; e < n.length; e++) {
                    var l = n[e];
                    -1 === l.indexOf(">") && (0 === l.indexOf("#") && (l = l.substring(1)), (l = a.Fa(l)) && b.e(l, "click", f.mb(g)))
                }
            }, Ca: function (a) {
                for (var b = d.G(c.etrk) || [], f = 0; f < b.length; f++) {
                    var p = b[f];
                    a.hasOwnProperty(p) && g.o(p)
                }
            }, o: function (a, b) {
                h.c.b.et = 1;
                h.c.b.ep = "{id:" + a + ",eventType:" + (b || "click") + "}";
                h.c.i()
            }
        };
        h.s.e("pv-b", g.Ba);
        return g
    })();
    (function () {
        var a = mt.f, b = mt.event, d = mt.lang, f = h.z, g = h.R, n = h.ma, e = h.T, l = e.P, p = {
            ka: "HM_ce", Ba: function () {
                if (c.cetrk && 0 < c.cetrk.length) {
                    b.e(document, "click", n.S(p, c.cetrk));
                    for (var f = g.G(c.cetrk) || [], e = 0, d = f.length; e < d; e++) {
                        var q = f[e], k = q.p || "";
                        -1 === k.indexOf(">") && (0 === k.indexOf("#") && (k = k.substring(1)), (k = a.Fa(k)) && b.e(k, "click", n.mb(p, q)))
                    }
                }
            }, Ca: function (a) {
                for (var b = g.G(c.cetrk) || [], f = 0; f < b.length; f++) {
                    var e = b[f], d = p.Ub(e.p, a);
                    d && p.o(e, d)
                }
            }, Ub: function (a, b) {
                a = String(a);
                if (0 < a.indexOf("*")) {
                    var f =
                        RegExp("^" + a.replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\*/, "\\d+") + "$"), e;
                    for (e in b) if (b.hasOwnProperty(e) && f.test(e)) return e;
                    return x
                }
                return b.hasOwnProperty(a) ? a : x
            }, o: function (b, f) {
                h.c.b.et = 7;
                var g = b && b.k || "", g = d.h(g), q = {};
                if (b && b.a && d.d(b.a, "Object")) {
                    var k = b.a, m;
                    for (m in k) if (k.hasOwnProperty(m)) {
                        var w = p.ac(k[m] || "", f), w = w ? a.W(w, y) : "";
                        q[m] = w
                    }
                }
                q = p.Pb(q, f || b && b.p);
                q._iden = g;
                e.setProperty("customEvent", q);
                h.c.b.ep = "";
                h.c.b.p = l(e.B("customEvent"));
                h.c.i();
                h.c.b.p = "";
                e.w("customEvent")
            },
            Pb: function (b, e) {
                var d = a.Ga(e), g = f.Ta;
                d && (c.aet && c.aet.length ? (b.ei_ = a.getAttribute(d, g.id) || a.getAttribute(d, "id") || "", b.ec_ = a.getAttribute(d, g.la) || a.getAttribute(d, "class") || "", b.ex_ = a.getAttribute(d, g.ia) || a.oa(d), b.en_ = a.getAttribute(d, g.content) || a.W(d, v), b.et_ = a.getAttribute(d, g.wa) || a.X(d), b.el_ = a.getAttribute(d, g.link) || a.getAttribute(d, "href") || "") : (b.ex_ = a.getAttribute(d, g.ia) || a.oa(d), b.en_ = a.getAttribute(d, g.content) || a.W(d, v)));
                return b
            }, ac: function (b, f) {
                b = String(b);
                f = String(f);
                if (0 <
                    b.indexOf("*")) {
                    var d = /.*\[(\d+)\]$/.exec(f);
                    b = b.replace("*", d ? d[1] : "1")
                }
                return a.Ga(b)
            }
        };
        h.s.e("pv-b", p.Ba);
        return p
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, f = mt.g, g = h.z, n = h.R, e = [], l = {
            wb: function () {
                c.ctrk && 0 < c.ctrk.length && (d.e(document, "mouseup", l.Fb()), d.e(window, "unload", function () {
                    l.ua()
                }), setInterval(function () {
                    l.ua()
                }, g.Hb))
            }, Fb: function () {
                return function (a) {
                    if (n.G(c.ctrk, v) && (a = l.Qb(a), "" !== a)) {
                        var b = (g.ta + "//" + g.Pa + "?" + h.c.pb().replace(/ep=[^&]*/, "ep=" + encodeURIComponent(a))).length;
                        b + (g.ea + "").length > g.Q || (b + encodeURIComponent(e.join("!") + (e.length ? "!" : "")).length + (g.ea + "").length > g.Q && l.ua(), e.push(a),
                        (e.length >= g.Ib || /\*a\*/.test(a)) && l.ua())
                    }
                }
            }, Qb: function (d) {
                var e = d.target || d.srcElement;
                if (0 === g.Gb) {
                    var r = (e.tagName || "").toLowerCase();
                    if ("embed" == r || "object" == r) return ""
                }
                var t;
                f.pa ? (t = Math.max(document.documentElement.scrollTop, document.body.scrollTop), r = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft), r = d.clientX + r, t = d.clientY + t) : (r = d.pageX, t = d.pageY);
                d = l.Yb(d, e, r, t);
                var q = window.innerWidth || document.documentElement.clientWidth || document.body.offsetWidth;
                switch (c.align) {
                    case 1:
                        r -=
                            q / 2;
                        break;
                    case 2:
                        r -= q
                }
                q = [];
                q.push(r);
                q.push(t);
                q.push(d.da);
                q.push(d.fa);
                q.push(d.wc);
                q.push(b.h(d.uc));
                q.push(d.ha);
                q.push(d.Z);
                (e = "a" === (e.tagName || "").toLowerCase() ? e : a.Ya(e)) ? (q.push("a"), q.push(b.h(encodeURIComponent(e.href)))) : q.push("b");
                return q.join("*")
            }, Yb: function (d, e, g, l) {
                d = a.oa(e);
                var q = 0, k = 0, m = 0, w = 0;
                if (e && (q = e.offsetWidth || e.clientWidth, k = e.offsetHeight || e.clientHeight, w = a.Za(e), m = w.left, w = w.top, b.d(e.getBBox, "Function") && (k = e.getBBox(), q = k.width, k = k.height), "html" === (e.tagName || "").toLowerCase())) q =
                    Math.max(q, e.clientWidth), k = Math.max(k, e.clientHeight);
                return {
                    da: Math.round(100 * ((g - m) / q)),
                    fa: Math.round(100 * ((l - w) / k)),
                    wc: f.orientation,
                    uc: d,
                    ha: q,
                    Z: k
                }
            }, ua: function () {
                0 !== e.length && (h.c.b.et = 2, h.c.b.ep = e.join("!"), h.c.i(), e = [])
            }
        };
        h.s.e("pv-b", l.wb);
        return l
    })();
    (function () {
        var a = mt.lang, b = mt.f, d = mt.event, f = mt.g, g = h.z, n = h.s, e = h.T, l = e.P, p = +new Date, s = [],
            r = {
                S: function () {
                    return function (f) {
                        if (h.c && h.c.$ && c.aet && c.aet.length) {
                            var d = f.target || f.srcElement;
                            if (d) {
                                var e = h.c.Wa, m = b.getAttribute(d, g.Va) != x ? v : y;
                                if (b.getAttribute(d, g.Ua) == x) if (m) r.za(r.Ha(d, f)); else {
                                    var w = b.X(d);
                                    if (a.H(e, "*") || a.H(e, w)) r.za(r.Ha(d, f)); else for (; d.parentNode != x;) {
                                        var m = d.parentNode, w = b.X(m), z = "a" === w && a.H(e, "a") ? v : y,
                                            w = "button" === w && a.H(e, "button") ? v : y,
                                            A = b.getAttribute(m, g.Va) != x ? v : y;
                                        if (b.getAttribute(m, g.Ua) == x && (z || w || A)) {
                                            r.za(r.Ha(m, f));
                                            break
                                        }
                                        d = d.parentNode
                                    }
                                }
                            }
                        }
                    }
                }, Ha: function (d, e) {
                    var k = {}, m = g.Ta;
                    k.id = b.getAttribute(d, m.id) || b.getAttribute(d, "id") || "";
                    k.la = b.getAttribute(d, m.la) || b.getAttribute(d, "class") || "";
                    k.ia = b.getAttribute(d, m.ia) || b.oa(d);
                    k.content = b.getAttribute(d, m.content) || b.W(d, v);
                    k.wa = b.getAttribute(d, m.wa) || b.X(d);
                    k.link = b.getAttribute(d, m.link) || b.getAttribute(d, "href") || "";
                    k.type = e.type || "click";
                    m = a.eb(d.offsetTop) ? d.offsetTop : 0;
                    "click" === e.type ? m = f.pa ? e.clientY +
                        Math.max(document.documentElement.scrollTop, document.body.scrollTop) : e.pageY : "touchend" === e.type && (e.gb && e.gb.changedTouches) && (m = e.gb.changedTouches[0].pageY);
                    k.Fc = m;
                    m = this.Tb(e);
                    k.da = m.da || 0;
                    k.fa = m.fa || 0;
                    k.ha = m.ha || 0;
                    k.Z = m.Z || 0;
                    k.Ra = m.Ra || "b";
                    return k
                }, Tb: function (d) {
                    var e = d.target || d.srcElement, g;
                    if (f.pa) {
                        var m = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
                        g = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
                        g = d.clientX + g;
                        d = d.clientY + m
                    } else g = d.pageX,
                        d = d.pageY;
                    var w = m = 0, z = 0, A = 0;
                    if (e && (m = e.offsetWidth || e.clientWidth, w = e.offsetHeight || e.clientHeight, A = b.Za(e), z = A.left, A = A.top, a.d(e.getBBox, "Function") && (w = e.getBBox(), m = w.width, w = w.height), "html" === (e.tagName || "").toLowerCase())) m = Math.max(m, e.clientWidth), w = Math.max(w, e.clientHeight);
                    return {
                        da: Math.round(100 * ((g - z) / m)),
                        fa: Math.round(100 * ((d - A) / w)),
                        ha: m,
                        Z: w,
                        Ra: ("a" === (e.tagName || "").toLowerCase() ? e : b.Ya(e)) ? "a" : "b"
                    }
                }, za: function (b) {
                    var f = a.h;
                    b = [+new Date - (h.c.ba !== u ? h.c.ba : p), f(b.id), f(b.la), f(b.wa),
                        f(b.ia), f(b.link), f(b.content), b.type, b.Fc, b.da, b.fa, b.ha, b.Z, b.Ra].join("*");
                    r.Aa(b);
                    a.d(this.ga(), "Function") && this.ga()()
                }, Aa: function (a) {
                    a.length > g.Q || (encodeURIComponent(s.join("!") + a).length > g.Q && (r.o(s.join("!")), s = []), s.push(a))
                }, o: function (a) {
                    h.c.b.et = 5;
                    h.c.b.ep = a;
                    h.c.b.p = l(e.B("autoEventTracking"));
                    h.c.i();
                    h.c.b.p = ""
                }, ga: function () {
                    return function () {
                        s && s.length && (r.o(s.join("!")), s = [])
                    }
                }
            };
        a.I(c.aet) && "" !== c.aet && n.e("pv-b", function () {
            d.e(document, "click", r.S());
            "ontouchend" in document &&
            d.e(window, "touchend", r.S());
            d.e(window, "unload", r.ga())
        });
        return r
    })();
    (function () {
        var a = mt.lang, b = mt.event, d = mt.g, f = h.z, g = h.s, n = +new Date, e = [], l = x, p = {
            zb: function () {
                a.I(c.aet) && "" !== c.aet && setInterval(p.ob, f.yc)
            }, ob: function () {
                var a = d.Y() + d.N();
                0 < a - h.c.b.vl && (h.c.b.vl = a)
            }
        }, s = {
            Lb: function () {
                return function () {
                    h.c && (h.c.$ && c.aet && c.aet.length) && (window.clearTimeout(l), l = window.setTimeout(function () {
                        s.yb(d.Y() + d.N())
                    }, 150))
                }
            }, yb: function (a) {
                s.Aa([+new Date - (h.c.ba !== u ? h.c.ba : n), a].join("*"))
            }, Aa: function (a) {
                if (encodeURIComponent(e.join("!") + a).length > f.Q || 3 < e.length) s.o(e.join("!")),
                    e = [];
                e.push(a)
            }, o: function (a) {
                p.ob();
                h.c.b.et = 6;
                h.c.b.vh = d.N();
                h.c.b.ep = a;
                h.c.i()
            }, ga: function () {
                return function () {
                    e && e.length && (s.o(e.join("!")), e = [])
                }
            }
        };
        a.I(c.aet) && "" !== c.aet && g.e("pv-b", function () {
            b.e(window, "scroll", s.Lb());
            b.e(window, "unload", s.ga());
            p.zb()
        });
        return s
    })();
    (function () {
        function a() {
            return function () {
                h.c.b.nv = 0;
                h.c.b.st = 4;
                h.c.b.et = 3;
                h.c.b.ep = h.Ea.Zb() + "," + h.Ea.Vb();
                h.c.b.hca = c.hca;
                h.c.i()
            }
        }

        function b() {
            clearTimeout(z);
            var a;
            m && (a = "visible" == document[m]);
            w && (a = !document[w]);
            l = "undefined" == typeof a ? v : a;
            if ((!e || !p) && l && s) k = v, t = +new Date; else if (e && p && (!l || !s)) k = y, q += +new Date - t;
            e = l;
            p = s;
            z = setTimeout(b, 100)
        }

        function d(a) {
            var b = document, m = "";
            if (a in b) m = a; else for (var f = ["webkit", "ms", "moz", "o"], d = 0; d < f.length; d++) {
                var e = f[d] + a.charAt(0).toUpperCase() + a.slice(1);
                if (e in b) {
                    m = e;
                    break
                }
            }
            return m
        }

        function f(a) {
            if (!("focus" == a.type || "blur" == a.type) || !(a.target && a.target != window)) s = "focus" == a.type || "focusin" == a.type ? v : y, b()
        }

        var g = mt.event, n = h.s, e = v, l = v, p = v, s = v, r = +new Date, t = r, q = 0, k = v,
            m = d("visibilityState"), w = d("hidden"), z;
        b();
        (function () {
            var a = m.replace(/[vV]isibilityState/, "visibilitychange");
            g.e(document, a, b);
            g.e(window, "pageshow", b);
            g.e(window, "pagehide", b);
            "object" == typeof document.onfocusin ? (g.e(document, "focusin", f), g.e(document, "focusout", f)) : (g.e(window,
                "focus", f), g.e(window, "blur", f))
        })();
        h.Ea = {
            Zb: function () {
                return +new Date - r
            }, Vb: function () {
                return k ? +new Date - t + q : q
            }
        };
        n.e("pv-b", function () {
            g.e(window, "unload", a())
        });
        n.e("duration-send", a());
        n.e("duration-done", function () {
            t = r = +new Date;
            q = 0
        });
        return h.Ea
    })();
    (function () {
        var a = mt.lang, b = h.z, d = h.load, f = {
            nc: function (f) {
                if ((window._dxt === u || a.d(window._dxt, "Array")) && "undefined" !== typeof h.c) {
                    var n = h.c.V();
                    d([b.protocol, "//datax.baidu.com/x.js?si=", c.id, "&dm=", encodeURIComponent(n)].join(""), f)
                }
            }, Ec: function (b) {
                if (a.d(b, "String") || a.d(b, "Number")) window._dxt = window._dxt || [], window._dxt.push(["_setUserId", b])
            }
        };
        return h.Jb = f
    })();
    (function () {
        function a(a, b, f, d) {
            if (!(a === u || b === u || d === u)) {
                if ("" === a) return [b, f, d].join("*");
                a = String(a).split("!");
                for (var e, g = y, k = 0; k < a.length; k++) if (e = a[k].split("*"), String(b) === e[0]) {
                    e[1] = f;
                    e[2] = d;
                    a[k] = e.join("*");
                    g = v;
                    break
                }
                g || a.push([b, f, d].join("*"));
                return a.join("!")
            }
        }

        function b(a) {
            for (var d in a) if ({}.hasOwnProperty.call(a, d)) {
                var e = a[d];
                f.d(e, "Object") || f.d(e, "Array") ? b(e) : a[d] = String(e)
            }
        }

        var d = mt.url, f = mt.lang, g = mt.A, n = mt.g, e = h.z, l = h.s, p = h.Jb, s = h.load, r = h.Da, t = h.T,
            q = t.P, k = {
                ca: [], va: 0,
                Ma: y, D: {Sa: "", page: ""}, init: function () {
                    k.j = 0;
                    t.init();
                    l.e("pv-b", function () {
                        k.Kb();
                        k.Mb()
                    });
                    l.e("pv-d", function () {
                        k.Nb();
                        k.D.page = ""
                    });
                    l.e("stag-b", function () {
                        h.c.b.api = k.j || k.va ? k.j + "_" + k.va : "";
                        h.c.b.ct = [decodeURIComponent(r.getData("Hm_ct_" + c.id) || ""), k.D.Sa, k.D.page].join("!")
                    });
                    l.e("stag-d", function () {
                        h.c.b.api = 0;
                        k.j = 0;
                        k.va = 0
                    })
                }, Kb: function () {
                    var a = window._hmt || [];
                    if (!a || f.d(a, "Array")) window._hmt = {
                        id: c.id, cmd: {}, push: function () {
                            for (var a = window._hmt, b = 0; b < arguments.length; b++) {
                                var m = arguments[b];
                                f.d(m, "Array") && (a.cmd[a.id].push(m), "_setAccount" === m[0] && (1 < m.length && /^[0-9a-f]{31,32}$/.test(m[1])) && (m = m[1], a.id = m, a.cmd[m] = a.cmd[m] || []))
                            }
                        }
                    }, window._hmt.cmd[c.id] = [], window._hmt.push.apply(window._hmt, a)
                }, Mb: function () {
                    var a = window._hmt;
                    if (a && a.cmd && a.cmd[c.id]) for (var b = a.cmd[c.id], f = /^_track(Event|MobConv|Order)$/, d = 0, e = b.length; d < e; d++) {
                        var g = b[d];
                        f.test(g[0]) ? k.ca.push(g) : k.Oa(g)
                    }
                    a.cmd[c.id] = {push: k.Oa}
                }, Nb: function () {
                    if (0 < k.ca.length) for (var a = 0, b = k.ca.length; a < b; a++) k.Oa(k.ca[a]);
                    k.ca =
                        x
                }, Oa: function (a) {
                    var b = a[0];
                    if (k.hasOwnProperty(b) && f.d(k[b], "Function")) k[b](a)
                }, _setAccount: function (a) {
                    1 < a.length && /^[0-9a-f]{31,32}$/.test(a[1]) && (k.j |= 1)
                }, _setAutoPageview: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) k.j |= 2, h.c.bb = a
                }, _trackPageview: function (a) {
                    1 < a.length && (a[1].charAt && "/" === a[1].charAt(0)) && (k.j |= 4, h.c.b.sn = h.c.$a(), h.c.b.et = 0, h.c.b.ep = "", h.c.b.vl = n.Y() + n.N(), h.c.b.kb = 0, h.c.La ? (h.c.b.nv = 0, h.c.b.st = 4) : h.c.La = v, k.Ma || (h.c.b.su = h.c.b.u || document.location.href), h.c.b.u = e.protocol +
                        "//" + document.location.host + a[1], h.c.b.p = q(t.B("pageview")), h.c.i(), h.c.b.p = "", h.c.ba = +new Date, t.w("pageview"))
                }, _trackEvent: function (a) {
                    2 < a.length && (k.j |= 8, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 4, h.c.b.ep = f.h(a[1]) + "*" + f.h(a[2]) + (a[3] ? "*" + f.h(a[3]) : "") + (a[4] ? "*" + f.h(a[4]) : ""), h.c.b.p = q(t.Ja()), h.c.i(), h.c.b.p = "")
                }, _setCustomVar: function (a) {
                    if (!(4 > a.length)) {
                        var b = a[1], d = a[4] || 3;
                        if (0 < b && 6 > b && 0 < d && 4 > d) {
                            k.va++;
                            for (var e = (h.c.b.cv || "*").split("!"), g = e.length; g < b - 1; g++) e.push("*");
                            e[b - 1] = d + "*" + f.h(a[2]) + "*" +
                                f.h(a[3]);
                            h.c.b.cv = e.join("!");
                            a = h.c.b.cv.replace(/[^1](\*[^!]*){2}/g, "*").replace(/((^|!)\*)+$/g, "");
                            "" !== a ? r.setData("Hm_cv_" + c.id, encodeURIComponent(a), c.age) : r.removeData("Hm_cv_" + c.id)
                        }
                    }
                }, _setUserTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = f.h(b[1]);
                        b = f.h(b[2]);
                        if (d !== u && b !== u) {
                            var e = decodeURIComponent(r.getData("Hm_ct_" + c.id) || ""), e = a(e, d, 1, b);
                            r.setData("Hm_ct_" + c.id, encodeURIComponent(e), c.age)
                        }
                    }
                }, _setVisitTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = f.h(b[1]);
                        b = f.h(b[2]);
                        if (d !== u && b !== u) {
                            var e = k.D.Sa,
                                e = a(e, d, 2, b);
                            k.D.Sa = e
                        }
                    }
                }, _setPageTag: function (b) {
                    if (!(3 > b.length)) {
                        var d = f.h(b[1]);
                        b = f.h(b[2]);
                        if (d !== u && b !== u) {
                            var e = k.D.page, e = a(e, d, 3, b);
                            k.D.page = e
                        }
                    }
                }, _setReferrerOverride: function (a) {
                    1 < a.length && (a = a[1], f.d(a, "String") ? (h.c.b.su = "/" === a.charAt(0) ? e.protocol + "//" + window.location.host + a : a, k.Ma = v) : k.Ma = y)
                }, _trackOrder: function (a) {
                    a = a[1];
                    f.d(a, "Object") && (b(a), k.j |= 16, h.c.b.nv = 0, h.c.b.st = 4, h.c.b.et = 94, h.c.b.ep = g.stringify(a), h.c.b.p = q(t.Ja()), h.c.i(), h.c.b.p = "")
                }, _trackMobConv: function (a) {
                    if (a = {
                        webim: 1,
                        tel: 2, map: 3, sms: 4, callback: 5, share: 6
                    }[a[1]]) k.j |= 32, h.c.b.et = 93, h.c.b.ep = a, h.c.i()
                }, _setDataxId: function (a) {
                    a = a[1];
                    p.nc();
                    p.Ec(a)
                }, _setUserId: function (a) {
                    a = a[1];
                    if (a !== u && (f.I(a) || f.eb(a))) {
                        var b = t.B("user").uid_;
                        if (!(b && b.value === f.h(String(a)))) {
                            var b = h.c.b.p, d = h.c.b.ep;
                            h.c.b.et = 8;
                            h.c.b.ep = "";
                            h.c.b.p = "uid_*" + f.h(String(a));
                            h.c.i();
                            var e = {};
                            e.uid_ = a;
                            t.setProperty("user", e, v);
                            h.c.b.p = b;
                            h.c.b.ep = d
                        }
                    }
                }, _clearUserId: function (a) {
                    1 < a.length && v === a[1] && t.w("userId")
                }, _setUserProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && t.setProperty("user", a)
                }, _clearUserProperty: function (a) {
                    1 < a.length && v === a[1] && t.w("user")
                }, _setSessionProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && t.setProperty("session", a)
                }, _clearSessionProperty: function (a) {
                    1 < a.length && v === a[1] && t.w("session")
                }, _setPageviewProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && t.setProperty("pageview", a)
                }, _clearPageviewProperty: function (a) {
                    1 < a.length && v === a[1] && t.w("pageview")
                }, _setAutoEventTrackingProperty: function (a) {
                    a = a[1];
                    f.d(a, "Object") && t.setProperty("autoEventTracking",
                        a)
                }, _clearAutoEventTrackingProperty: function (a) {
                    1 < a.length && v === a[1] && t.w("autoEventTracking")
                }, _setAutoTracking: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) h.c.cb = a
                }, _setAutoEventTracking: function (a) {
                    if (1 < a.length && (a = a[1], y === a || v === a)) h.c.$ = a
                }, _trackPageDuration: function (a) {
                    1 < a.length ? (a = a[1], 2 === String(a).split(",").length && (h.c.b.et = 3, h.c.b.ep = a, h.c.i())) : l.L("duration-send");
                    l.L("duration-done")
                }, _require: function (a) {
                    1 < a.length && (a = a[1], e.Bb.test(d.M(a)) && s(a))
                }, _providePlugin: function (a) {
                    if (1 <
                        a.length) {
                        var b = window._hmt, d = a[1];
                        a = a[2];
                        if (f.H(e.jb, d) && f.d(a, "Function") && (b.plugins = b.plugins || {}, b.J = b.J || {}, b.plugins[d] = a, b.C = b.C || [], a = b.C.slice(), d && a.length && a[0][1] === d)) for (var g = 0, k = a.length; g < k; g++) {
                            var l = a[g][2] || {};
                            if (b.plugins[d] && !b.J[d]) b.J[d] = new b.plugins[d](l), b.C.shift(); else break
                        }
                    }
                }, _requirePlugin: function (a) {
                    if (1 < a.length) {
                        var b = window._hmt, d = a[1], g = a[2] || {};
                        if (f.H(e.jb, d)) if (b.plugins = b.plugins || {}, b.J = b.J || {}, b.plugins[d] && !b.J[d]) b.J[d] = new b.plugins[d](g); else {
                            b.C = b.C ||
                                [];
                            for (var g = 0, l = b.C.length; g < l; g++) if (b.C[g][1] === d) return;
                            b.C.push(a);
                            k._require([x, e.vc + d + ".js"])
                        }
                    }
                }, _trackCustomEvent: function (a) {
                    if (1 < a.length) {
                        var b = a[1];
                        a = a[2];
                        f.d(a, "Object") || (a = {});
                        a._iden = b;
                        t.setProperty("customEvent", a);
                        h.c.b.et = 7;
                        h.c.b.ep = "";
                        h.c.b.p = q(t.B("customEvent"));
                        h.c.i();
                        h.c.b.p = "";
                        t.w("customEvent")
                    }
                }
            };
        k.init();
        h.Cb = k;
        return h.Cb
    })();
    (function () {
        var a = h.s;
        c.spa !== u && "1" === String(c.spa) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "UrlChangeTracker"]), a.e("pv-b", function () {
            "" !== window.location.hash && (h.c.b.u = window.location.href)
        }))
    })();
    (function () {
        function a() {
            "undefined" === typeof window["_bdhm_loaded_" + c.id] && (window["_bdhm_loaded_" + c.id] = v, this.b = {}, this.cb = this.bb = v, this.$ = k.$, this.Wa = g.I(c.aet) && 0 < c.aet.length ? c.aet.split(",") : "", this.La = y, this.init())
        }

        var b = mt.url, d = mt.rb, f = mt.Qa, g = mt.lang, n = mt.cookie, e = mt.g, l = mt.sessionStorage, p = mt.A,
            s = mt.event, r = h.Da, t = h.T, q = t.P, k = h.z, m = h.load, w = h.s;
        a.prototype = {
            aa: function (a, b) {
                a = "." + a.replace(/:\d+/, "");
                b = "." + b.replace(/:\d+/, "");
                var d = a.indexOf(b);
                return -1 < d && d + b.length === a.length
            }, sa: function (a,
                             b) {
                a = a.replace(/^https?:\/\//, "");
                return 0 === a.indexOf(b)
            }, qa: function (a) {
                for (var d = 0; d < c.dm.length; d++) if (-1 < c.dm[d].indexOf("/")) {
                    if (this.sa(a, c.dm[d])) return v
                } else {
                    var e = b.M(a);
                    if (e && this.aa(e, c.dm[d])) return v
                }
                return y
            }, V: function () {
                for (var a = document.location.hostname, b = 0, d = c.dm.length; b < d; b++) if (this.aa(a, c.dm[b])) return c.dm[b].replace(/(:\d+)?[/?#].*/, "");
                return a
            }, na: function () {
                for (var a = 0, b = c.dm.length; a < b; a++) {
                    var d = c.dm[a];
                    if (-1 < d.indexOf("/") && this.sa(document.location.href, d)) return d.replace(/^[^/]+(\/.*)/,
                        "$1") + "/"
                }
                return "/"
            }, bc: function () {
                if (!document.referrer) return k.K - k.O > c.vdur ? 1 : 4;
                var a = y;
                this.qa(document.referrer) && this.qa(document.location.href) ? a = v : (a = b.M(document.referrer), a = this.aa(a || "", document.location.hostname));
                return a ? k.K - k.O > c.vdur ? 1 : 4 : 3
            }, Cc: function () {
                var a, b, d, e, f, g;
                k.O = r.getData("Hm_lpvt_" + c.id) || 0;
                13 === k.O.length && (k.O = Math.round(k.O / 1E3));
                b = this.bc();
                a = 4 !== b ? 1 : 0;
                if (g = r.getData("Hm_lvt_" + c.id)) {
                    e = g.split(",");
                    for (f = e.length - 1; 0 <= f; f--) 13 === e[f].length && (e[f] = "" + Math.round(e[f] /
                        1E3));
                    for (; 2592E3 < k.K - e[0];) e.shift();
                    f = 4 > e.length ? 2 : 3;
                    for (1 === a && e.push(k.K); 4 < e.length;) e.shift();
                    g = e.join(",");
                    e = e[e.length - 1]
                } else g = k.K, e = "", f = 1;
                this.rc() ? (r.setData("Hm_lvt_" + c.id, g, c.age), r.setData("Hm_lpvt_" + c.id, k.K), d = n.tc(this.V(), this.na())) : this.Ob();
                if (0 === c.nv && this.qa(document.location.href) && ("" === document.referrer || this.qa(document.referrer))) a = 0, b = 4;
                this.b.nv = a;
                this.b.st = b;
                this.b.cc = d;
                this.b.lt = e;
                this.b.lv = f
            }, rc: function () {
                var a = b.M(document.location.href);
                return !g.H("sjh.baidu.com isite.baidu.com ls.wejianzhan.com bs.wejianzhan.com product.weijianzhan.com qianhu.weijianzhan.com aisite.wejianzhan.com".split(" "),
                    a)
            }, Ob: function () {
                for (var a = document.cookie.split(";"), b = 0; b < a.length; b++) {
                    var d = a[b].split("=");
                    d.length && /Hm_(up|ct|cv|lp?vt)_[0-9a-f]{31}/.test(String(d[0])) && r.removeData(d[0]);
                    d.length && /Hm_ck_[0-9]{13}/.test(String(d[0])) && r.removeData(d[0])
                }
            }, pb: function () {
                for (var a = [], b = this.b.et, d = 0, e = k.tb.length; d < e; d++) {
                    var f = k.tb[d], g = this.b[f];
                    "undefined" !== typeof g && "" !== g && ("tt" !== f || "tt" === f && 0 === b) && ("ct" !== f || "ct" === f && 0 === b) && a.push(f + "=" + encodeURIComponent(g))
                }
                return a.join("&")
            }, Dc: function () {
                this.Cc();
                this.b.si = c.id;
                this.b.sn = this.$a();
                this.b.su = document.referrer;
                this.b.ds = e.xc;
                this.b.cl = e.colorDepth + "-bit";
                this.b.ln = String(e.language).toLowerCase();
                this.b.ja = e.javaEnabled ? 1 : 0;
                this.b.ck = e.cookieEnabled ? 1 : 0;
                this.b.lo = "number" === typeof _bdhm_top ? 1 : 0;
                this.b.fl = f.ec();
                this.b.v = "1.2.80";
                this.b.cv = decodeURIComponent(r.getData("Hm_cv_" + c.id) || "");
                this.b.tt = document.title || "";
                this.b.vl = e.Y() + e.N();
                var a = document.location.href;
                this.b.cm = b.m(a, k.jc) || "";
                this.b.cp = b.m(a, k.kc) || b.m(a, k.Ic) || "";
                this.b.cw = b.m(a,
                    k.ic) || b.m(a, k.Kc) || "";
                this.b.ci = b.m(a, k.gc) || b.m(a, k.Hc) || "";
                this.b.cf = b.m(a, k.lc) || b.m(a, k.Jc) || "";
                this.b.cu = b.m(a, k.hc) || b.m(a, k.Gc) || "";
                /https?:/.test(document.location.protocol) && (this.b.u = a)
            }, init: function () {
                try {
                    this.Dc(), 0 === this.b.nv ? this.Bc() : this.Xa(), h.c = this, this.Eb(), this.Db(), w.L("pv-b"), this.zc()
                } catch (a) {
                    var b = [];
                    b.push("si=" + c.id);
                    b.push("n=" + encodeURIComponent(a.name));
                    b.push("m=" + encodeURIComponent(a.message));
                    b.push("r=" + encodeURIComponent(document.referrer));
                    d.log(k.ta + "//" + k.Pa +
                        "?" + b.join("&"))
                }
            }, zc: function () {
                function a() {
                    w.L("pv-d")
                }

                this.bb ? (this.La = v, this.b.et = 0, this.b.ep = "", this.b.p = q(t.B("pageview")), this.b.vl = e.Y() + e.N(), this.i(a), this.b.p = "") : a();
                this.ba = +new Date;
                t.w("pageview")
            }, i: function (a) {
                if (this.cb) {
                    var b = this;
                    b.b.rnd = Math.round(Math.random() * k.ea);
                    b.b.r = e.orientation;
                    b.b.ww = e.vb;
                    w.L("stag-b");
                    var f = k.ta + "//" + k.Pa + "?" + b.pb();
                    w.L("stag-d");
                    b.Ab(f);
                    d.log(f, function (d) {
                        b.nb(d);
                        g.d(a, "Function") && a.call(b)
                    })
                }
            }, Eb: function () {
                var a = document.location.hash.substring(1),
                    d = RegExp(c.id), e = b.M(document.referrer) === k.ub ? 1 : 0, f = b.m(a, "jn"),
                    g = /^select$/.test(f);
                a && (d.test(a) && e && g) && (this.b.rnd = Math.round(Math.random() * k.ea), a = document.createElement("script"), a.setAttribute("type", "text/javascript"), a.setAttribute("charset", "utf-8"), a.setAttribute("src", k.protocol + "//" + c.js + f + ".js?" + this.b.rnd), f = document.getElementsByTagName("script")[0], f.parentNode.insertBefore(a, f))
            }, Db: function () {
                try {
                    if (window.postMessage && window.self !== window.parent) {
                        var a = this;
                        s.e(window, "message",
                            function (d) {
                                if (b.M(d.origin) === k.ub) {
                                    d = d.data || {};
                                    var e = d.jn || "", f = /^customevent$|^heatmap$|^pageclick$/.test(e);
                                    if (RegExp(c.id).test(d.sd || "") && f) a.b.rnd = Math.round(Math.random() * k.ea), m(k.protocol + "//" + c.js + e + ".js?" + a.b.rnd)
                                }
                            });
                        window.parent.postMessage({
                            id: c.id,
                            url: document.location.href,
                            status: "__Messenger__hmLoaded"
                        }, "*")
                    }
                } catch (d) {
                }
            }, Ab: function (a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                var e = this.b.u ? "" : "&u=" + encodeURIComponent(document.location.href);
                b.push(a.replace(/^https?:\/\//,
                    "") + e);
                l.set("Hm_unsent_" + c.id, p.stringify(b))
            }, nb: function (a) {
                var b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (d) {
                    b = []
                }
                if (b.length) {
                    a = a.replace(/^https?:\/\//, "");
                    for (var e = 0; e < b.length; e++) if (a.replace(/&u=[^&]*/, "") === b[e].replace(/&u=[^&]*/, "")) {
                        b.splice(e, 1);
                        break
                    }
                    b.length ? l.set("Hm_unsent_" + c.id, p.stringify(b)) : this.Xa()
                }
            }, Xa: function () {
                l.remove("Hm_unsent_" + c.id)
            }, Bc: function () {
                var a = this, b;
                try {
                    b = p.parse(l.get("Hm_unsent_" + c.id) || "[]")
                } catch (e) {
                    b = []
                }
                if (b.length) for (var f = function (b) {
                    d.log(k.ta +
                        "//" + b, function (b) {
                        a.nb(b)
                    })
                }, g = 0; g < b.length; g++) f(b[g])
            }, $a: function () {
                return Math.round(+new Date / 1E3) % 65535
            }
        };
        return new a
    })();
    var B = h.z, C = h.load;
    if (c.apps) {
        var D = [B.protocol, "//ers.baidu.com/app/s.js?"];
        D.push(c.apps);
        C(D.join(""))
    }
    var E = h.z, F = h.load;
    c.pt && F([E.protocol, "//ada.baidu.com/phone-tracker/insert_bdtj?sid=", c.pt].join(""));
    var G = h.load;
    if (c.qiao) {
        for (var H = ["https://goutong.baidu.com/site/"], I = c.id, J = 5381, K = I.length, L = 0; L < K; L++) J = (33 * J + Number(I.charCodeAt(L))) % 4294967296;
        2147483648 < J && (J -= 2147483648);
        H.push(J % 1E3 + "/");
        H.push(c.id + "/b.js");
        H.push("?siteId=" + c.qiao);
        G(H.join(""))
    }
    (function () {
        var a = mt.g, b = mt.lang, d = mt.event, f = mt.A;
        if ("undefined" !== typeof h.c && (c.med || (!a.pa || 7 < a.Xb()) && c.cvcc)) {
            var g, n, e, l, p = function (a) {
                if (a.item) {
                    for (var b = a.length, d = Array(b); b--;) d[b] = a[b];
                    return d
                }
                return [].slice.call(a)
            }, s = function (a, b) {
                for (var d in a) if (a.hasOwnProperty(d) && b.call(a, d, a[d]) === y) return y
            }, r = function (a, d) {
                var k = {};
                k.n = g;
                k.t = "clk";
                k.v = a;
                if (d) {
                    var l = d.getAttribute("href"), n = d.getAttribute("onclick") ? "" + d.getAttribute("onclick") : x,
                        p = d.getAttribute("id") || "";
                    e.test(l) ? (k.sn =
                        "mediate", k.snv = l) : b.d(n, "String") && e.test(n) && (k.sn = "wrap", k.snv = n);
                    k.id = p
                }
                h.c.b.et = 86;
                h.c.b.ep = f.stringify(k);
                h.c.i();
                for (k = +new Date; 400 >= +new Date - k;) ;
            };
            if (c.med) n = "/zoosnet", g = "swt", e = /swt|zixun|call|chat|zoos|business|talk|kefu|openkf|online|\/LR\/Chatpre\.aspx/i, l = {
                click: function () {
                    for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, f, g = 0, k = b.length; g < k; g++) d = b[g], f =
                        d.getAttribute("onclick"), d = d.getAttribute("href"), (e.test(f) || e.test(d)) && a.push(b[g]);
                    return a
                }
            }; else if (c.cvcc) {
                n = "/other-comm";
                g = "other";
                e = c.cvcc.q || u;
                var t = c.cvcc.id || u;
                l = {
                    click: function () {
                        for (var a = [], b = p(document.getElementsByTagName("a")), b = [].concat.apply(b, p(document.getElementsByTagName("area"))), b = [].concat.apply(b, p(document.getElementsByTagName("img"))), d, f, g, k = 0, l = b.length; k < l; k++) d = b[k], e !== u ? (f = d.getAttribute("onclick"), g = d.getAttribute("href"), t ? (d = d.getAttribute("id"), (e.test(f) ||
                            e.test(g) || t.test(d)) && a.push(b[k])) : (e.test(f) || e.test(g)) && a.push(b[k])) : t !== u && (d = d.getAttribute("id"), t.test(d) && a.push(b[k]));
                        return a
                    }
                }
            }
            if ("undefined" !== typeof l && "undefined" !== typeof e) {
                var q;
                n += /\/$/.test(n) ? "" : "/";
                var k = function (a, d) {
                    if (q === d) return r(n + a, d), y;
                    if (b.d(d, "Array") || b.d(d, "NodeList")) for (var e = 0, f = d.length; e < f; e++) if (q === d[e]) return r(n + a + "/" + (e + 1), d[e]), y
                };
                d.e(document, "mousedown", function (a) {
                    a = a || window.event;
                    q = a.target || a.srcElement;
                    var d = {};
                    for (s(l, function (a, e) {
                        d[a] = b.d(e,
                            "Function") ? e() : document.getElementById(e)
                    }); q && q !== document && s(d, k) !== y;) q = q.parentNode
                })
            }
        }
    })();
    (function () {
        var a = mt.f, b = mt.lang, d = mt.event, f = mt.A;
        if ("undefined" !== typeof h.c && b.d(c.cvcf, "Array") && 0 < c.cvcf.length) {
            var g = {
                xb: function () {
                    for (var b = c.cvcf.length, e, f = 0; f < b; f++) (e = a.Fa(decodeURIComponent(c.cvcf[f]))) && d.e(e, "click", g.ma())
                }, ma: function () {
                    return function () {
                        h.c.b.et = 86;
                        var a = {n: "form", t: "clk"};
                        a.id = this.id;
                        h.c.b.ep = f.stringify(a);
                        h.c.i()
                    }
                }
            };
            a.lb(function () {
                g.xb()
            })
        }
    })();
    (function () {
        var a = mt.event, b = mt.A;
        if (c.med && "undefined" !== typeof h.c) {
            var d = {n: "anti", sb: 0, kb: 0, clk: 0}, f = function () {
                h.c.b.et = 86;
                h.c.b.ep = b.stringify(d);
                h.c.i()
            };
            a.e(document, "click", function () {
                d.clk++
            });
            a.e(document, "keyup", function () {
                d.kb = 1
            });
            a.e(window, "scroll", function () {
                d.sb++
            });
            a.e(window, "load", function () {
                setTimeout(f, 5E3)
            })
        }
    })();
    c.oc !== u && "1" === String(c.oc) && (window._hmt = window._hmt || [], window._hmt.push(["_requirePlugin", "OcpcCbHm"]));
})();
