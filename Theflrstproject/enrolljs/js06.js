function isSingleInstanceProd(s) {
    var i = ["mn", "ma", "im_hi"];
    return ("|" + i.join("|") + "|").indexOf("|" + s + "|") > -1
}

function isLoginInstance(s) {
    return s = s || "login", s + "" == "login"
}

function saveInitInstance(s) {
    window._pass_popinit_instance = s
}

function getInitInstance() {
    return window._pass_popinit_instance
}

var passport = passport || window.passport || {};
passport._modulePool = passport._modulePool || {}, passport._define = passport._define || function (s, i) {
    passport._modulePool[s] = i && i()
}, passport._getModule = passport._getModule || function (s) {
    return passport._modulePool[s]
};
var passport = window.passport || {};
passport.pop = passport.pop || {}, passport.pop.insertScript = passport.pop.insertScript || function (s, i) {
    var n = document, a = n.createElement("SCRIPT");
    a.type = "text/javascript", a.charset = "UTF-8", a.readyState ? a.onreadystatechange = function () {
        ("loaded" === a.readyState || "complete" === a.readyState) && (a.onreadystatechange = null, i && i())
    } : a.onload = function () {
        i && i()
    }, a.src = s, n.getElementsByTagName("head")[0].appendChild(a)
}, passport.ieVersion = function () {
    var s, i = navigator.userAgent.toLowerCase(), n = i.indexOf("msie") > -1;
    return n && (s = i.match(/msie ([\d.]+)/)[1]), s
}, passport.pop.init = passport.pop.init || function (s) {
    var i = {"http:": "http://passport.bdimg.com", "https:": "https://passport.bdimg.com"};
    if (passport.ieVersion() <= 8 && (i = {
        "http:": "http://passport.baidu.com",
        "https:": "https://passport.baidu.com"
    }), isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && getInitInstance()) return getInitInstance();
    var n;
    n = s && "https" === s.protocol ? "https:" : window.location ? window.location.protocol.toLowerCase() : document.location.protocol.toLowerCase();
    var a = ["pp", "mn", "wk", "cmovie", "translate", "baidugushitong", "ik", "exp", "waimai", "jn", "im", "do", "yuedu", "hao123", "tb", "netdisk", "developer", "newdev", "image_eco", "zbsc", "bpit_hcm", "defensor", "study", "bizcrm", "sjhlexus_all"],
        e = s && s.apiOpt && s.apiOpt.product || "",
        t = ("|" + a.join("|") + "|").indexOf("|" + e + "|") > -1 || "v4" === (s && s.loginVersion),
        p = t ? "/passApi/js/uni_loginv4_66d3acb.js" : "/passApi/js/uni_login_a76e7ef.js",
        c = t ? "/passApi/js/uni_loginv4_tangram_fda5fef.js" : "/passApi/js/uni_login_tangram_4b461fb.js",
        o = t ? "/passApi/css/uni_loginv4_a65ffd4.css" : "/passApi/css/uni_login_new_5b1f23c.css", _ = {
            uni_login: p,
            uni_login_tangram: c,
            uni_loginPad: "/passApi/js/uni_loginPad_048fe08.js",
            uni_loginPad_tangram: "/passApi/js/uni_loginPad_tangram_60aecb9.js",
            uni_smsloginEn: "/passApi/js/uni_smsloginEn_ab9ed0b.js",
            uni_smsloginEn_tangram: "/passApi/js/uni_smsloginEn_tangram_12619d5.js",
            uni_loginWap: "/passApi/js/uni_loginWap_aae0062.js",
            uni_loginWap_tangram: "/passApi/js/uni_loginWap_aae0062.js",
            uni_accConnect: "/passApi/js/uni_accConnect_c408798.js",
            uni_accConnect_tangram: "/passApi/js/uni_accConnect_tangram_9b54ee5.js",
            uni_accRealName: "/passApi/js/uni_accRealName_8cc4131.js",
            uni_accRealName_tangram: "/passApi/js/uni_accRealName_tangram_f3135db.js",
            uni_checkPhone: "/passApi/js/uni_checkPhone_6a70688.js",
            uni_checkPhone_tangram: "/passApi/js/uni_checkPhone_tangram_39e6279.js",
            uni_checkIDcard: "/passApi/js/uni_checkIDcard_2e401cd.js",
            uni_checkIDcard_tangram: "/passApi/js/uni_checkIDcard_tangram_3c290d4.js",
            uni_accSetPwd: "/passApi/js/uni_accSetPwd_be9ea62.js",
            uni_accSetPwd_tangram: "/passApi/js/uni_accSetPwd_tangram_141f755.js",
            uni_IDCertify: "/passApi/js/uni_IDCertify_2ba7dd0.js",
            uni_IDCertify_tangram: "/passApi/js/uni_IDCertify_tangram_ed18613.js",
            uni_travelComplete: "/passApi/js/uni_travelComplete_b072f8c.js",
            uni_travelComplete_tangram: "/passApi/js/uni_travelComplete_tangram_94933ee.js",
            uni_bindGuide: "/passApi/js/uni_bindGuide_dd9341e.js",
            uni_bindGuide_tangram: "/passApi/js/uni_bindGuide_tangram_38c19e9.js",
            uni_fillUserName: "/passApi/js/uni_fillUserName_ed4badf.js",
            uni_fillUserName_tangram: "/passApi/js/uni_fillUserName_tangram_cefd94f.js",
            uni_IDCertifyQrcode: "/passApi/js/uni_IDCertifyQrcode_b25282e.js",
            uni_IDCertifyQrcode_tangram: "/passApi/js/uni_IDCertifyQrcode_tangram_5b1d031.js",
            uni_loadingApi: "/passApi/js/uni_loadingApi_e278d3b.js",
            uni_loadingApi_tangram: "/passApi/js/uni_loadingApi_tangram_67050ec.js",
            uni_secondCardList: "/passApi/js/uni_secondCardList_82c041d.js",
            uni_secondCardList_tangram: "/passApi/js/uni_secondCardList_tangram_47d1be4.js",
            uni_secondCardVerify: "/passApi/js/uni_secondCardVerify_04ffc77.js",
            uni_secondCardVerify_tangram: "/passApi/js/uni_secondCardVerify_tangram_79ebc26.js",
            uni_multiBind: "/passApi/js/uni_multiBind_37229b9.js",
            uni_multiBind_tangram: "/passApi/js/uni_multiBind_tangram_c5e1f8c.js",
            uni_multiUnbind: "/passApi/js/uni_multiUnbind_225c1b5.js",
            uni_multiUnbind_tangram: "/passApi/js/uni_multiUnbind_tangram_0d764b2.js",
            uni_changeUser: "/passApi/js/uni_changeUser_7beef30.js",
            uni_changeUser_tangram: "/passApi/js/uni_changeUser_tangram_af8da03.js",
            uni_loginMultichoice: "/passApi/js/uni_loginMultichoice_6b79d21.js",
            uni_loginMultichoice_tangram: "/passApi/js/uni_loginMultichoice_tangram_d40d77e.js",
            uni_confirmWidget: "/passApi/js/uni_confirmWidget_c734b61.js",
            uni_confirmWidget_tangram: "/passApi/js/uni_confirmWidget_tangram_981ae63.js"
        }, r = {
            login: o,
            loginWap: "/passApi/css/uni_loginWap_f57424a.css",
            smsloginEn: "/passApi/css/uni_smsloginEn_eef0a6a.css",
            accConnect: "/passApi/css/uni_accConnect_ab6dda9.css",
            accRealName: "/passApi/css/uni_accRealName_a224a37.css",
            secondCardVerify: "/passApi/css/uni_secondCardVerify_1a69328.css",
            secondCardList: "/passApi/css/uni_secondCardList_94f229c.css",
            checkPhone: "/passApi/css/uni_checkPhone_cd7c7a0.css",
            checkIDcard: "/passApi/css/uni_checkIDcard_be79680.css",
            accSetPwd: "/passApi/css/uni_accSetPwd_926540f.css",
            IDCertify: "/passApi/css/uni_IDCertify_36e091b.css",
            IDCertifyQrcode: "/passApi/css/uni_IDCertifyQrcode_1e8827b.css",
            loadingApi: "/passApi/css/uni_loadingApi_f8732c0.css",
            loginPad: "/passApi/css/uni_loginPad_cb4df81.css",
            multiBind: "/passApi/css/uni_multiBind_e8d24e4.css",
            multiUnbind: "/passApi/css/uni_multiUnbind_21428a6.css",
            changeUser: "/passApi/css/uni_changeUser_c7ae7b4.css",
            loginMultichoice: "/passApi/css/uni_loginMultichoice_289d3a0.css",
            confirmWidget: "/passApi/css/uni_confirmWidget_035fb81.css",
            uni_rebindGuide: "/passApi/css/uni_rebindGuide_347ecf2.css",
            travelComplete: "/passApi/css/uni_travelComplete_b06b013.css",
            bindGuide: "/passApi/css/uni_bindGuide_35d4a06.css",
            fillUserName: "/passApi/css/uni_fillUserName_931cb17.css"
        }, u = i[n] || i["https:"];
    s = s || {}, s.type = s.type || "login";
    var d, l = document, m = ("_PassUni" + (new Date).getTime(), u + r[s.type]);
    s.cssUrlWrapper && (m = cssUrlWrapper.join(t ? "uni_loginv4.css" : "uni_login.css")), d = {
        show: function () {
            return d.loadPass(s.apiOpt), d.willShow = !0, d
        }, setSubpro: function (i) {
            return s.apiOpt && (s.apiOpt.subpro = i), d
        }, setMakeText: function (i) {
            return s.apiOpt && (s.apiOpt.makeText = i), d
        }, loadPass: function () {
            var i = l.createElement("link");
            i.rel = "stylesheet", i.type = "text/css", i.href = m, i.disabled = !1, i.setAttribute("data-for", "result"), l.getElementsByTagName("head")[0].appendChild(i), d.show = function () {
                return d.willShow = !0, d
            }, s.plugCss && (i = l.createElement("link"), i.rel = "stylesheet", i.type = "text/css", i.href = s.plugCss, i.disabled = !1, i.setAttribute("data-for", "result"), l.getElementsByTagName("head")[0].appendChild(i)), d.passCallback(), delete d.loadPass
        }, passCallback: function () {
            passport.pop.insertScript("https://wappass.baidu.com/static/waplib/moonshad.js?tt=" + (new Date).getTime(), function () {
                d.components.length > 0 ? passport.pop.insertScript(d.components.shift(), d.passCallback) : (passport.pop[s.type](s, d, function () {
                    d.willShow && d.show(), s && s.onRender && s.onRender()
                }), delete d.passCallback, delete d.components)
            })
        }, components: []
    };
    var g = "uni_" + s.type;
    return s.tangram && (g += "_tangram"), s.apiOpt && s.apiOpt.product + "" == "ik" && Math.random() < .3 && (d.components.push(u + "/passApi/js/uni/passhunt.js"), s.hunter = !0), d.components.push(u + _[g]), s.cache && d.loadPass(s.apiOpt), s.id && l.getElementById(s.id) && (l.getElementById(s.id).onclick = function () {
        d.show()
    }), isSingleInstanceProd(s.apiOpt.product) && isLoginInstance(s.type) && saveInitInstance(d), d
};