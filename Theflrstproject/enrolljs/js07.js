var passport = passport || window.passport || {};
passport._modulePool = passport._modulePool || {}, passport._define = passport._define || function (a, s) {
    passport._modulePool[a] = s && s()
}, passport._getModule = passport._getModule || function (a) {
    return passport._modulePool[a]
};
var passport = window.passport || {};
passport._load = passport._load || function (a, s, e) {
    var t = document, n = t.createElement("SCRIPT");
    if (s) {
        n.type = "text/javascript", n.charset = "UTF-8";
        var p = a.split("?")[0], o = Math.round(1e3 * Math.random()), r = (new Date).getTime();
        n.readyState ? n.onreadystatechange = function () {
            if ("loaded" === n.readyState || "complete" === n.readyState) {
                if (n.onreadystatechange = null, 100 === o) {
                    var a = (new Date).getTime() - r;
                    (new Image).src = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" + encodeURIComponent(p) + "&time=" + a
                }
                e && e()
            }
        } : n.onload = function () {
            if (100 === o) {
                var a = (new Date).getTime() - r;
                (new Image).src = document.location.protocol + "//nsclick.baidu.com/v.gif?pid=111&type=1023&url=" + encodeURIComponent(p) + "&time=" + a
            }
            e && e()
        }, n.src = 100 === o ? p + "?t=" + Math.random() : a, t.getElementsByTagName("head")[0].appendChild(n)
    } else n.type = "text/javascript", n.charset = "UTF-8", n.src = a, t.getElementsByTagName("head")[0].appendChild(n), n.readyState ? n.onreadystatechange = function () {
        ("loaded" === n.readyState || "complete" === n.readyState) && (n.onreadystatechange = null, e && e())
    } : n.onload = function () {
        e && e()
    }
}, passport.ieVersion = function () {
    var a, s = navigator.userAgent.toLowerCase(), e = s.indexOf("msie") > -1;
    return e && (a = s.match(/msie ([\d.]+)/)[1]), a
}, passport.getDomain = function () {
    var a = {"http:": "http://passport.bdimg.com", "https:": "https://passport.bdimg.com"};
    passport.ieVersion() <= 8 && (a = {"http:": "http://passport.baidu.com", "https:": "https://passport.baidu.com"});
    var s;
    return s = passport && "https" === passport._protocol ? "https:" : window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase(), a[s] || a["https:"]
}, passport._use = passport._use || function (a, s, e) {
    function t() {
        passport._load("https://wappass.baidu.com/static/waplib/moonshad.js?tt=" + (new Date).getTime(), !0, function () {
            var a = passport._getModule(p);
            if (!a) throw new Error("load " + p + "module script error.");
            e && e(a)
        })
    }

    var n = passport.getDomain() + s, p = a + ".js", o = passport._getModule(p);
    o ? e && e(o) : passport._load(n, !0, t)
}, passport.loadPass = function (a, s) {
    var e = passport.getDomain() + a, t = document.createElement("link");
    t.rel = "stylesheet", t.type = "text/css", t.href = e, document.getElementsByTagName("head")[0].appendChild(t), t.readyState ? t.onreadystatechange = function () {
        ("loaded" == t.readyState || "complete" == t.readyState) && (t.onreadystatechange = null, s && s())
    } : t.onload = function () {
        s && s()
    }
}, passport.use = passport.use || function (a, s, e) {
    var t = s && s.tangram === !1 ? "" : "_tangram";
    s && s.protocol && (passport._protocol = s.protocol), "reg" === a && s && s.regPhoneOnly && (a = "regPhone");
    var n = "login" === a && s && s.loginVersion && "v4" === s.loginVersion,
        p = n ? "/passApi/js/loginv4_42a28e2.js" : "/passApi/js/login_b59f690.js",
        o = n ? "/passApi/js/loginv4_tangram_0926296.js" : "/passApi/js/login_tangram_6d7a653.js",
        r = n ? "/passApi/css/loginv4_b50884d.css" : "/passApi/css/uni_login_merge_6777421.css", i = {
            login: p,
            login_tangram: o,
            smsloginEn: "/passApi/js/smsloginEn_549bb12.js",
            smsloginEn_tangram: "/passApi/js/smsloginEn_tangram_9747261.js",
            loginWLtoPC: "/passApi/js/loginWLtoPC_9f8a0ff.js",
            accConnect: "/passApi/js/accConnect_be66591.js",
            accConnect_tangram: "/passApi/js/accConnect_tangram_affcbf6.js",
            accRealName: "/passApi/js/accRealName_7c83a13.js",
            accRealName_tangram: "/passApi/js/accRealName_tangram_ec32d14.js",
            checkPhone: "/passApi/js/checkPhone_880ea09.js",
            checkPhone_tangram: "/passApi/js/checkPhone_tangram_2777220.js",
            checkIDcard: "/passApi/js/checkIDcard_5b051ad.js",
            checkIDcard_tangram: "/passApi/js/checkIDcard_tangram_39e5e89.js",
            travelComplete: "/passApi/js/travelComplete_e573d87.js",
            travelComplete_tangram: "/passApi/js/travelComplete_tangram_216adc9.js",
            bindGuide: "/passApi/js/bindGuide_de5b299.js",
            bindGuide_tangram: "/passApi/js/bindGuide_tangram_2d60971.js",
            accSetPwd: "/passApi/js/accSetPwd_3a85fd4.js",
            accSetPwd_tangram: "/passApi/js/accSetPwd_tangram_c02ae63.js",
            IDCertify: "/passApi/js/IDCertify_d5d8b32.js",
            IDCertify_tangram: "/passApi/js/IDCertify_tangram_39c9266.js",
            secondCardList: "/passApi/js/secondCardList_797634b.js",
            secondCardList_tangram: "/passApi/js/secondCardList_tangram_fddd999.js",
            secondCardVerify: "/passApi/js/secondCardVerify_a5b67ed.js",
            secondCardVerify_tangram: "/passApi/js/secondCardVerify_tangram_a43da59.js",
            IDCertifyQrcode: "/passApi/js/IDCertifyQrcode_97467b7.js",
            IDCertifyQrcode_tangram: "/passApi/js/IDCertifyQrcode_tangram_cbac9a0.js",
            loadingApi: "/passApi/js/loadingApi_0398e76.js",
            loadingApi_tangram: "/passApi/js/loadingApi_tangram_6c7bb78.js",
            loginWap: "/passApi/js/loginWap_447c215.js",
            reg: "/passApi/js/reg_11a3aad.js",
            reg_tangram: "/passApi/js/reg_tangram_2e99821.js",
            regPhone: "/passApi/js/regPhone_6d5dbe0.js",
            regPhone_tangram: "/passApi/js/regPhone_tangram_a04b304.js",
            fillUserName: "/passApi/js/fillUserName_e74c078.js",
            fillUserName_tangram: "/passApi/js/fillUserName_tangram_c7d8952.js",
            qrcode: "/passApi/js/qrcode_5efa25e.js",
            qrcode_tangram: "/passApi/js/qrcode_tangram_ade950f.js",
            realUserTag: "/passApi/js/realUserTag_0013893.js",
            realUserTag_tangram: "/passApi/js/realUserTag_tangram_e5f75f4.js",
            bind: "/passApi/js/bind_fb1ad9a.js",
            bind_tangram: "/passApi/js/bind_tangram_5a403e9.js",
            multiBind: "/passApi/js/multiBind_5ca3468.js",
            multiBind_tangram: "/passApi/js/multiBind_tangram_b07b3d5.js",
            multiUnbind: "/passApi/js/multiUnbind_d87db01.js",
            multiUnbind_tangram: "/passApi/js/multiUnbind_tangram_760344f.js",
            changeUser: "/passApi/js/changeUser_9d68477.js",
            changeUser_tangram: "/passApi/js/changeUser_tangram_1dc53db.js",
            loginMultichoice: "/passApi/js/loginMultichoice_a63f687.js",
            loginMultichoice_tangram: "/passApi/js/loginMultichoice_tangram_aff5253.js",
            confirmWidget: "/passApi/js/confirmWidget_b71fb2f.js",
            confirmWidget_tangram: "/passApi/js/confirmWidget_tangram_f3684ed.js",
            uni_rebindGuide: "/passApi/js/uni_rebindGuide_edd0177.js",
            uni_rebindGuide_tangram: "/passApi/js/uni_rebindGuide_tangram_ec491f2.js"
        }, d = {login: r}, c = a + t;
    2 === arguments.length && (e = s), s && s.tangramInst && (passport.tangramInst = s.tangramInst), s && s.defaultCss && d[a] ? passport.loadPass(d[a], function () {
        passport._use(c, i[c], e)
    }) : passport._use(c, i[c], e)
};