!function (t, e) {
    "use strict";

    function o(t) {
        this.width = t.width, this.height = t.height, this.mask = t.mask, this.titleText = t.titleText, this.content = t.content, this.onRender = t.onRender || function () {
        }, this.num = Math.floor(1e3 * Math.random()), this.init()
    }

    e.require, o.prototype.init = function () {
        this.mask && this.createMask(), this.createBody()
    }, o.prototype.createMask = function () {
        var e = Math.max(document.documentElement.scrollHeight, window.screen.height, document.body.scrollHeight);
        this.maskDom = t('<div class="mod-layer" id="pass-' + this.num + '"></div>'), t("body").append(this.maskDom), this.maskDom.height(e)
    }, o.prototype.show = function () {
        this.mask && this.maskDom.show(), this.domBody.show()
    }, o.prototype.hide = function () {
        this.mask && this.maskDom.hide(), this.domBody.hide()
    }, o.prototype.remove = function () {
        this.mask && this.maskDom.remove(), this.domBody.remove()
    }, o.prototype.createBody = function () {
        this.domBody = t('<div class="mod-layer-body" id="pass-content' + this.num + '"><div class="mod-layer-body-title"><span>' + this.titleText + '</span><a id="close-' + this.num + '" href="###"></a></div><div class="mod-layer-content"><div class="mod-layer-main"></div></div></div>'), t("body").append(this.domBody), this.domBody.css({
            width: this.width,
            height: this.height,
            marginLeft: "-" + parseInt(this.width) / 2 + "px",
            marginTop: "-" + parseInt(this.height) / 2 + "px"
        });
        var e = this.domBody.children(".mod-layer-content");
        e.height(this.height - this.domBody.children(".mod-layer-body-title").height()), this.content && (e.children(".mod-layer-main").append(this.content), this.show()), this.bind(), this.onRender(this)
    }, o.prototype.setContent = function (t) {
        this.domBody.append(t), this.show()
    }, o.prototype.bind = function () {
        var e = this;
        t("#close-" + this.num).on("click", function (t) {
            e.hide(), t.preventDefault()
        })
    }, e.define("module/layer", o)
}(baidu, window.Pass), !function (t, e) {
    "use strict";

    function o() {
        i.visible && i.hide()
    }

    function n() {
        i = new s
    }

    var i, s = (e.require, e.require("ui/dialog/confirm")), a = {};
    a.showConfirm = function (e, s) {
        return t.isNumber(s) && setTimeout(o, s), i || n(), e && i.setContent(e), i.show()
    }, a.setEle = function (t) {
        i || n(), i.setTmpl(t)
    }, e.define("module/dialog", a)
}(baidu, window.Pass), !function (t, e) {
    "use strict";
    var o = e.require, n = (o("module/dialog"), function (t) {
        this.config = t
    });
    n.prototype = {
        render: function () {
            this._schoolPannel = new Pass.module.layer({
                titleText: "选择学校",
                width: 600,
                height: 398,
                mask: !0,
                content: '<div class="dialog_parent" id="school_pannel"></div>'
            }), this.initSchool()
        }, initSchool: function () {
            var e = this;
            t.sio.callByServer("https://passport.baidu.com/v2/api/?ucentertownlist&type=2", function (o) {
                if ("110000" == o.errno) {
                    var n = '<div class="all_city">';
                    t.each(o.data, function (t, e) {
                        n += '<span class="city j_city" data="' + t + '">' + e + "</span>"
                    }), n += '</div><div class="all_school j_all_school"></div>', e._initSchoolFlag || (e._initSchoolFlag = !0, document.getElementById("school_pannel").innerHTML = n, e.initprovince("120001"), t("#school_pannel").find(".j_city").each(function () {
                        t(this).on("click", function (o) {
                            var n = t(o.target).attr("data");
                            n && (t("#school_pannel").find(".j_all_school").html('<img src="/static/passpc-account/img/loading.gif" /> <span>加载中，请稍后...</span>'), e.initprovince(n))
                        })
                    }))
                }
            })
        }, initprovince: function (e) {
            var o = this, n = "https://passport.baidu.com/v2/api/?ucentereducationlist&grade=5&province=" + e;
            t.sio.callByServer(n, function (e) {
                if ("110000" == e.errno) {
                    var n = "";
                    "" != e.data ? t.each(e.data, function (t, e) {
                        n += '<span class="city j_school" data="' + t + '">' + e + "</span>"
                    }) : n += '<span class="empty">暂时没有该地的数据</span>', t("#school_pannel").find(".j_all_school").empty(), t(n).appendTo(t("#school_pannel").find(".j_all_school"))
                }
                t("#school_pannel").find(".j_school").each(function () {
                    t(this).on("click", function (e) {
                        var n = t(e.target).attr("data"), i = t(e.target).html();
                        n && (o.fire("selectSchool", {schoolCode: n, schoolName: i}), o.hide())
                    })
                })
            })
        }, show: function () {
            this._schoolPannel ? this._schoolPannel.show() : this.render(), this.fire("showSchool")
        }, hide: function () {
            this._schoolPannel.hide(), this.fire("hideSchool")
        }, on: function (e, o) {
            if (!t.isFunction(o)) return this;
            var n, i = this._listeners_;
            return !i && (i = this._listeners_ = {}), e.indexOf("on") && (e = "on" + e), !t.isArray(n = i[e]) && (n = i[e] = []), i[e].unshift({handler: o}), this
        }, fire: function (e, o) {
            var n = function (t, e) {
                this.type = t, this.returnValue = !0, this.target = e || null, this.currentTarget = null, this.preventDefault = function () {
                    this.returnValue = !1
                }
            };
            e && (e = new n(e));
            var i, s, a, l = this._listeners_, c = e.type, r = [e].concat(Array.prototype.slice.call(arguments, 1));
            if (!l && (l = this._listeners_ = {}), t.extend(e, o || {}), e.target = e.target || this, e.currentTarget = this, c.indexOf("on") && (c = "on" + c), t.isFunction(this[c]) && this[c].apply(this, r), (i = this._options) && t.isFunction(i[c]) && i[c].apply(this, r), t.isArray(s = l[c])) for (i = s.length - 1; i > -1; i--) a = s[i], a && a.handler.apply(this, r), a && a.once && s.splice(i, 1);
            return e.returnValue
        }
    }, e.define("module/regSchool", n)
}(baidu, window.Pass), !function (t, e) {
    window.TPL2LOGOURL && e.options && e.options.product in window.TPL2LOGOURL && (t(".mod-header a").attr({href: window.TPL2LOGOURL[e.options.product].url}), t(".mod-header img").attr({src: window.TPL2LOGOURL[e.options.product].logo})), t(".mod-header a").css({display: "block"});
    var o = function (o) {
        if (e.isSchoolReg) {
            var n = o, i = function () {
                t(n.getElement("school")).addClass("pass-text-input-error"), t(n.getElement("schoolError")).show(), t(n.getElement("schoolSucc")).hide()
            }, s = function () {
                t(n.getElement("school_placeholder")).hide(), t(n.getElement("school")).removeClass("pass-text-input-error"), t(n.getElement("schoolError")).hide(), t(n.getElement("schoolSucc")).show()
            }, a = function (e, o) {
                "placeholder" in document.createElement("input") ? t(n.getElement(e)).attr({placeholder: o}) : (t(n.getElement(e + "_placeholder")).show(), t(n.getElement(e + "_placeholder")).on("mousedown", function () {
                    n.getElement(e).focus()
                }))
            }, l = new Pass.module.regSchool;
            l.on("selectSchool", function (t, e) {
                n.getElement("school").value = e.schoolName, s()
            });
            var c = n.tangram_guid + "__",
                r = '<p id="' + c + 'schoolWrapper" class="pass-form-item pass-form-item-school" style="display:block"><label for="' + c + 'school" id="' + c + 'schoolLabel" class="pass-label pass-label-school">学校</label><input id="' + c + 'school" type="text" name="passport_college_0_school_name" class="pass-text-input pass-text-input-school" autocomplete="off"><span id="' + c + 'schoolError" class="pass-item-error pass-item-error-school" style="display: none;">请选择学校</span><span id="' + c + 'schoolSucc" class="pass-item-succ pass-item-succ-school" style="display: none;"></span><span id="' + c + 'school_placeholder" class="pass-placeholder pass-placeholder-school" style="display: none;">请选择学校</span></p>';
            t(n.getElement("passwordWrapper")).after(r), t(n.getElement("school")).on("focus", function () {
                l.show()
            }), t(n.getElement("school")).on("keyup", function (t) {
                t.preventDefault()
            }), t(n.getElement("school")).on("keydown", function (t) {
                t.preventDefault()
            }), t(n.getElement("form")).on("submit", function () {
                n.getElement("school").value ? s() : i()
            }), a("school", "请选择学校"), n.on("beforeSubmit", function (t) {
                n.getElement("school").value && "" != n.getElement("school").value || (t.returnValue = !1)
            })
        }
    };
    if (baidu("#reg_content").length > 0 && passport.use("reg", {tangram: !0}, function (t) {
        normalReg = new t.passport.reg(e.options), normalReg.on("render", function () {
            var t = {
                phone: /^1[3456789]\d{9}$/,
                email: /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
            };
            e.defaultAccount && (t.phone.test(e.defaultAccount) || t.email.test(e.defaultAccount)) && (normalReg.getElement("account") && (normalReg.getElement("account").value = e.defaultAccount), setTimeout(function () {
                normalReg.getElement("password").focus()
            }, 100))
        }), normalReg.render("reg_content"), o(normalReg)
    }), baidu("#login_btn").length > 0) {
        var n, i = !1;
        baidu("#login_btn").on("click", function () {
            if (n || i) n && n.show(); else {
                i = !0;
                var t = ["qzone", "tsina", "weixin"], o = 1;
                "0" == e.hasAuthsite && (t = !1, o = 0), baidu.sio.callByBrowser(document.location.protocol + "//passport.baidu.com/passApi/js/uni_login_wrapper.js?v={__fis_timestamp}", function () {
                    n = passport.pop.init({
                        tangram: !0,
                        cache: !0,
                        loginMerge: !0,
                        staticPage: e.options.staticPage,
                        color: e.options.color,
                        subpro: e.options.subpro,
                        apiOpt: {
                            product: e.options.product,
                            tangram: !1,
                            u: e.options.retu,
                            qrcode: e.options.qrcode,
                            staticPage: e.options.staticPage,
                            sms: o
                        },
                        authsite: t,
                        registerLink: e.options.registerLink
                    }), n.show()
                })
            }
        })
    }
    setTimeout(function () {
        document.getElementById("mod_feedback") && (document.getElementById("mod_feedback").href = "http://passport.baidu.com/v2/?ucenterfeedback#reg")
    }, 1e3)
}(baidu, window.Pass);