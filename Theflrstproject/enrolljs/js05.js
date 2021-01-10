!function (t, i) {
    "use strict";
    var s, e, o = (i.require, {
        noBtnClass: "div.btn-no .btn-txt",
        yesBtnClass: "div.btn-yes .btn-txt",
        contentClass: "div.dialog-content",
        titleClass: "h3.dialog-title"
    });
    s = function (i) {
        var s, e = t.extend(!0, {}, o, i), n = this;
        e.ele && (this.setTmpl(e.el), e.ele = null), this._settings = e, this._deferred = null, s = {
            noBtnClick: function (t) {
                t.preventDefault(), n._deferred.reject(), n.hide()
            }, yesBtnClick: function (t) {
                t.preventDefault(), n._deferred.resolve(), n.hide()
            }
        }, this.eventHandlers = s
    }, e = s.prototype, e._bindInteractEvents = function (i) {
        var s = ["noBtn", "yesBtn"], e = this;
        t.each(s, function (s, o) {
            t(i[o + "Class"], e.el).on("click", e.eventHandlers[o + "Click"])
        })
    }, e._createPromise = function () {
        return this._deferred && "pending" === this._deferred.state() && this._deferred.reject(), this._deferred = new t.Deferred, this._deferred.promise()
    }, e.show = function () {
        var t, i;
        return this._setVisible(!0), t = this.el.scrollHeight, i = this.el.scrollWidth, this.$el.css("margin-top", -Math.round(t / 2) + "px"), this.$el.css("margin-left", -Math.round(i / 2) + "px"), this._createPromise()
    }, e.hide = function () {
        return this._setVisible(!1), this
    }, e._setVisible = function (t) {
        var i = "hide";
        this.el && this._visible != t && (t && (i = "show"), this.$overlayer[i](), this.$el[i]())
    }, e.setTmpl = function (i) {
        this.el = i, this.$el = t(i), this.$content = this.$el.find(this._settings.contentClass), this.$title = this.$el.find(this._settings.titleClass), this._createOverlayer(), this.$overlayer.insertBefore(this.el), this.$overlayer.find("div.dialog-mask-content").append(this.el), this._bindInteractEvents(this._settings)
    }, e.setContent = function (t) {
        t.content && this.$content.html(t.content), t.title && this.$title.html(t.title)
    }, e._createOverlayer = function () {
        var i;
        this.$overlayer || (i = t('<div class="mod-dialog-mask"><div class="dialog-mask"></div><div class="dialog-mask-content"></div></div>'), this.$overlayer = i)
    }, e.dispose = function () {
        this.el = null, this.$el = null, this.$overlayer = null, this.$content = null, this.$title = null
    }, i.define("ui/dialog/confirm", s)
}(baidu, window.Pass), !function (t, i) {
    "use strict";

    function s(i) {
        this.config = t.extend(i, {}), this.label = t("." + s.staticVar.classLabelName, i.container).eq(0), this.inputDom = t("." + s.staticVar.className, i.container).eq(0), this._validations = [], this.addValidation(this.config.validations), this.msgDom = this.config.msgDom || this.inputDom.siblings(".pass-input-msg"), this.succDom = this.config.succDom || this.inputDom.siblings(".pass-input-check-success"), this._errno = 0, this.timer = null, this._value = this.config.defaultValue || this.inputDom.val() || "", this.init()
    }

    i.require, s.staticVar = {
        className: "pass-input",
        classFocus: "pass-input-focus",
        classHover: "pass-input-hover",
        classError: "pass-input-error",
        classCheckSuccess: "pass-input-check-success",
        classLabelName: "pass-input-label",
        classLabelHover: "pass-input-label-hover",
        classLabelFocus: "pass-input-label-focus"
    }, s.prototype.init = function () {
        var i = this;
        this.inputDom.on("mouseover", function (t) {
            i._mouseover(t)
        }), this.inputDom.on("mouseout", function (t) {
            i._mouseout(t)
        }), this.inputDom.on("focus", function (t) {
            i._focus(t)
        }), this.inputDom.on("blur", function (t) {
            i._blur(t)
        }), this.inputDom.on("keydown", function (t) {
            i._keydown(t)
        }), this.inputDom.on("keyup", function (t) {
            i._keyup(t)
        }), this.inputDom.on("keypress", function (t) {
            i._keypress(t)
        }), this.label.on("click", function (t) {
            i._labelClick(t)
        }), t(document).on("mouseover", function (t) {
            t = baidu.event(t || window.event);
            var e = t.target;
            e == i.inputDom.get(0) || i.inputDom.contains(e) || e == i.label.get(0) || i.label.contains(e) ? (i.inputDom.addClass(s.staticVar.classHover), i.label.addClass(s.staticVar.classLabelHover)) : (i.inputDom.removeClass(s.staticVar.classHover), i.label.removeClass(s.staticVar.classLabelHover))
        }), "" != this._value && this.label.hide()
    }, s.prototype.addValidation = function (t) {
        "[object Function]" == Object.prototype.toString.call(t) && this._validations.push(t)
    }, s.prototype._validate = function () {
        for (var t = this._validations.length; t--;) {
            var i = this._validations[t].call(this, this._value);
            if (this.setErrno(i.errNo), i.errNo) {
                this.errorShow(i.msg);
                break
            }
            this.okShow()
        }
    }, s.prototype.getErrno = function () {
        return this._errno
    }, s.prototype.setErrno = function (t) {
        this._errno = t
    }, s.prototype.getValue = function () {
        return this._value
    }, s.prototype.setValue = function (t) {
        this._value = t, this._validate()
    }, s.prototype.errorShow = function (t) {
        this.inputDom.addClass(s.staticVar.classError), this.succDom && this.succDom.hide(), this.msgDom.html(t)
    }, s.prototype.okShow = function () {
        this.inputDom.removeClass(s.staticVar.classError), this.inputDom.removeClass(s.staticVar.classCheckSuccess), this.succDom && this.succDom.show(), this.msgDom.html("")
    }, s.prototype._checkEmpty = function () {
        "" != this.inputDom.val() ? this.label.hasClass("hide") || this.label.css("display", "none") : this.label.hasClass("hide") || this.label.css("display", "block")
    }, s.prototype._labelClick = function () {
        this.inputDom.get(0).focus()
    }, s.prototype._mouseover = function (t) {
        this.inputDom.hasClass(s.staticVar.classFocus) || (this.inputDom.addClass(s.staticVar.classHover), this.label.addClass(s.staticVar.classLabelHover)), this.config.onmouseover && this.config.onmouseover(t, this.inputDom, this.label)
    }, s.prototype._mouseout = function (t) {
        this.config.onmouseout && this.config.onmouseout(t, this.inputDom, this.label)
    }, s.prototype._focus = function (t) {
        clearTimeout(this.timer), this.inputDom.removeClass(s.staticVar.classError), this.inputDom.removeClass(s.staticVar.classHover), this.inputDom.addClass(s.staticVar.classFocus), this.label.removeClass(s.staticVar.classLabelHover), this.label.addClass(s.staticVar.classLabelFocus), this.inputDom.siblings(".pass-input-msg").text(""), this._checkEmpty(), this.config.onfocus && this.config.onfocus(t, this.inputDom, this.label)
    }, s.prototype._blur = function (t) {
        var i = this, e = i.inputDom.val();
        this.inputDom.removeClass(s.staticVar.classHover), this.inputDom.removeClass(s.staticVar.classFocus), this.label.removeClass(s.staticVar.classLabelHover), this.label.removeClass(s.staticVar.classLabelFocus), this._checkEmpty(), "" == e ? this.timer = setTimeout(function () {
            i.setValue(e)
        }, 150) : i.setValue(e), this.config.onblur && this.config.onblur(t, this.inputDom, this.label)
    }, s.prototype._keydown = function (t) {
        var i = this, s = i.inputDom.val();
        this.label.hide(), 13 == t.keyCode && i.setValue(s), this.config.onkeydown && this.config.onkeydown(t, this.inputDom, this.label)
    }, s.prototype._keyup = function (t) {
        this.config.onkeyup && this.config.onkeyup(t, this.inputDom, this.label)
    }, s.prototype._keypress = function (t) {
        this.config.onkeypress && this.config.onkeypress(t, this.inputDom, this.label)
    }, s.prototype.submit = function () {
        return this._validate(), {errno: this._errno, value: this._value}
    }, i.define("ui/form/input", s)
}(baidu, window.Pass), !function (t, i) {
    "use strict";

    function s(i) {
        this.config = t.extend({type: "submit"}, i), this.button = t(i.dom), this._validations = [], this._errno = 0, this._time = this.config.sTime || 60, this.addValidation(this.config.validations), this.timeShowType = this.config.showType ? s.timer2 : s.timer, this.init()
    }

    i.require, s.submit = {
        className: "pass-button-submit",
        hover: "pass-button-submit-hover",
        press: "pass-button-submit-press",
        disabled: "pass-button-submit-disabled"
    }, s.timer = {
        className: "pass-button-timer",
        hover: "pass-button-timer-hover",
        press: "",
        disabled: "pass-button-timer-timing"
    }, s.timer2 = {
        className: "pass-button-timer2",
        hover: "pass-button-timer2-hover",
        press: "pass-button-timer2-press",
        disabled: "pass-button-timer2-timing"
    }, s.prototype.init = function () {
        var t = this, i = s.submit;
        "timer" == this.config.type && (i = t.timeShowType), this.button.on("mouseover", function () {
            "timer" == t.config.type && this.className.indexOf(t.timeShowType.disabled) >= 0 || (this.className = i.className + " " + i.hover)
        }), this.button.on("mouseout", function () {
            "timer" == t.config.type && this.className.indexOf(t.timeShowType.disabled) >= 0 || (this.className = i.className)
        }), this.button.on("mousedown", function () {
            "timer" == t.config.type && this.className.indexOf(t.timeShowType.disabled) >= 0 || (this.className = i.className + " " + i.press)
        }), this.button.on("mouseup", function () {
            "timer" == t.config.type && this.className.indexOf(t.timeShowType.disabled) >= 0 || (this.className = i.className)
        }), this.clickCallBack = function (i) {
            t._validate(), t.config.clickCallBack && t.config.clickCallBack(), 0 === t.getErrno() && ("timer" == t.config.type && (t.config.url ? t._post() : t._timing()), null != t.config.onclick && t.config.onclick(i, this.button))
        }, this.button.on("click", this.clickCallBack)
    }, s.prototype.addValidation = function (t) {
        "[object Function]" == Object.prototype.toString.call(t) && this._validations.push(t)
    }, s.prototype._validate = function () {
        for (var t = this._validations.length; t--;) {
            var i = this._validations[t].call(this, this._value);
            if (this.setErrno(i.errNo), i.errNo) break
        }
    }, s.prototype.getErrno = function () {
        return this._errno
    }, s.prototype.setErrno = function (t) {
        this._errno = t
    }, s.prototype._post = function () {
        var i = this;
        if (i.config.beforeSend && i.config.beforeSend(), "jsonp" == i.config.sHttpNetwork) {
            var s = "";
            s = "[object function]" == Object.prototype.toString.call(i.config.url).toLowerCase() ? i.config.url() : i.config.url, t.sio(s).callByServer(function (t) {
                "110000" == t.errno ? (i.config.success(t), i._timing()) : i.config.error(t)
            })
        } else t.post(i.config.url, i.config.data(), function (t) {
            "110000" == t.errno ? (i.config.success(t), i._timing()) : i.config.error(t)
        }, "json")
    }, s.prototype._timing = function () {
        var i = this, s = this._time;
        i.button.off("click"), this.button.get(0).className = i.timeShowType.className + " " + i.timeShowType.disabled, t(i.button).html("重新发送(" + s + ")");
        var e = setInterval(function () {
            var o = "重新发送" + (--s > 0 ? "(" + s + ")" : "");
            t(i.button).html(o), 0 == s && (clearInterval(e), i.button.get(0).className = i.timeShowType.className, i.button.on("click", i.clickCallBack))
        }, 1e3)
    }, i.define("ui/form/button", s)
}(baidu, window.Pass), !function (t, i) {
    "use strict";

    function s() {
        this.tpl = '<a class="mod-feedback clearfix" id="mod_feedback" href="https://wappass.baidu.com/v6/helpCenter" target="_blank"><div class="feedback-inner">帮助中心</div></a>', this.init()
    }

    i.require, s.prototype.init = function () {
        var i = this;
        t(document.body).append(i.tpl), this.addValidation("center"), this.bindEvent()
    }, s.prototype.addValidation = function (t) {
        var i = baidu("#mod_feedback"), s = baidu(document).children(), e = baidu(document.body).scrollTop(),
            o = baidu(window).height(), n = baidu.browser.ie < 7;
        n ? (i.hide(), i.css({
            position: "absolute",
            right: "-1px",
            top: e + o / 2 - 40 + "px"
        }), s.css({"overflow-x": "hidden"}), setTimeout(function () {
            i.show()
        }, 300)) : t && i.css({position: "fixed", top: e + o / 2 - 40 + "px"})
    }, s.prototype.bindEvent = function () {
        var t = this;
        baidu(window).on("scroll", function () {
            t.addValidation()
        })
    }, i.define("ui/feedback/feedback", s)
}(baidu, window.Pass);