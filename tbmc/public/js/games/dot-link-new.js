var Yh = Object.defineProperty;
var qh = (e, t, i) => t in e ? Yh(e, t, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: i
}) : e[t] = i;
var W = (e, t, i) => (qh(e, typeof t != "symbol" ? t + "" : t, i), i);
(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
    new MutationObserver(r => {
        for (const n of r)
            if (n.type === "childList")
                for (const o of n.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function i(r) {
        const n = {};
        return r.integrity && (n.integrity = r.integrity), r.referrerPolicy && (n.referrerPolicy = r.referrerPolicy), r.crossOrigin === "use-credentials" ? n.credentials = "include" : r.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n
    }

    function s(r) {
        if (r.ep) return;
        r.ep = !0;
        const n = i(r);
        fetch(r.href, n)
    }
})();
var $e = (e => (e[e.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", e[e.WEBGL = 1] = "WEBGL", e[e.WEBGL2 = 2] = "WEBGL2", e))($e || {}),
    _a = (e => (e[e.UNKNOWN = 0] = "UNKNOWN", e[e.WEBGL = 1] = "WEBGL", e[e.CANVAS = 2] = "CANVAS", e))(_a || {}),
    Ur = (e => (e[e.COLOR = 16384] = "COLOR", e[e.DEPTH = 256] = "DEPTH", e[e.STENCIL = 1024] = "STENCIL", e))(Ur || {}),
    G = (e => (e[e.NORMAL = 0] = "NORMAL", e[e.ADD = 1] = "ADD", e[e.MULTIPLY = 2] = "MULTIPLY", e[e.SCREEN = 3] = "SCREEN", e[e.OVERLAY = 4] = "OVERLAY", e[e.DARKEN = 5] = "DARKEN", e[e.LIGHTEN = 6] = "LIGHTEN", e[e.COLOR_DODGE = 7] = "COLOR_DODGE", e[e.COLOR_BURN = 8] = "COLOR_BURN", e[e.HARD_LIGHT = 9] = "HARD_LIGHT", e[e.SOFT_LIGHT = 10] = "SOFT_LIGHT", e[e.DIFFERENCE = 11] = "DIFFERENCE", e[e.EXCLUSION = 12] = "EXCLUSION", e[e.HUE = 13] = "HUE", e[e.SATURATION = 14] = "SATURATION", e[e.COLOR = 15] = "COLOR", e[e.LUMINOSITY = 16] = "LUMINOSITY", e[e.NORMAL_NPM = 17] = "NORMAL_NPM", e[e.ADD_NPM = 18] = "ADD_NPM", e[e.SCREEN_NPM = 19] = "SCREEN_NPM", e[e.NONE = 20] = "NONE", e[e.SRC_OVER = 0] = "SRC_OVER", e[e.SRC_IN = 21] = "SRC_IN", e[e.SRC_OUT = 22] = "SRC_OUT", e[e.SRC_ATOP = 23] = "SRC_ATOP", e[e.DST_OVER = 24] = "DST_OVER", e[e.DST_IN = 25] = "DST_IN", e[e.DST_OUT = 26] = "DST_OUT", e[e.DST_ATOP = 27] = "DST_ATOP", e[e.ERASE = 26] = "ERASE", e[e.SUBTRACT = 28] = "SUBTRACT", e[e.XOR = 29] = "XOR", e))(G || {}),
    ee = (e => (e[e.POINTS = 0] = "POINTS", e[e.LINES = 1] = "LINES", e[e.LINE_LOOP = 2] = "LINE_LOOP", e[e.LINE_STRIP = 3] = "LINE_STRIP", e[e.TRIANGLES = 4] = "TRIANGLES", e[e.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", e[e.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", e))(ee || {}),
    C = (e => (e[e.RGBA = 6408] = "RGBA", e[e.RGB = 6407] = "RGB", e[e.RG = 33319] = "RG", e[e.RED = 6403] = "RED", e[e.RGBA_INTEGER = 36249] = "RGBA_INTEGER", e[e.RGB_INTEGER = 36248] = "RGB_INTEGER", e[e.RG_INTEGER = 33320] = "RG_INTEGER", e[e.RED_INTEGER = 36244] = "RED_INTEGER", e[e.ALPHA = 6406] = "ALPHA", e[e.LUMINANCE = 6409] = "LUMINANCE", e[e.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", e[e.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", e[e.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", e))(C || {}),
    ri = (e => (e[e.TEXTURE_2D = 3553] = "TEXTURE_2D", e[e.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", e[e.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", e[e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", e[e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", e[e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", e[e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", e[e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", e))(ri || {}),
    k = (e => (e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e[e.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", e[e.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", e[e.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e[e.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", e[e.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", e[e.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", e[e.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", e[e.BYTE = 5120] = "BYTE", e[e.SHORT = 5122] = "SHORT", e[e.INT = 5124] = "INT", e[e.FLOAT = 5126] = "FLOAT", e[e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", e[e.HALF_FLOAT = 36193] = "HALF_FLOAT", e))(k || {}),
    kr = (e => (e[e.FLOAT = 0] = "FLOAT", e[e.INT = 1] = "INT", e[e.UINT = 2] = "UINT", e))(kr || {}),
    ce = (e => (e[e.NEAREST = 0] = "NEAREST", e[e.LINEAR = 1] = "LINEAR", e))(ce || {}),
    be = (e => (e[e.CLAMP = 33071] = "CLAMP", e[e.REPEAT = 10497] = "REPEAT", e[e.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", e))(be || {}),
    re = (e => (e[e.OFF = 0] = "OFF", e[e.POW2 = 1] = "POW2", e[e.ON = 2] = "ON", e[e.ON_MANUAL = 3] = "ON_MANUAL", e))(re || {}),
    jt = (e => (e[e.NPM = 0] = "NPM", e[e.UNPACK = 1] = "UNPACK", e[e.PMA = 2] = "PMA", e[e.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", e[e.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", e[e.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", e))(jt || {}),
    Jt = (e => (e[e.NO = 0] = "NO", e[e.YES = 1] = "YES", e[e.AUTO = 2] = "AUTO", e[e.BLEND = 0] = "BLEND", e[e.CLEAR = 1] = "CLEAR", e[e.BLIT = 2] = "BLIT", e))(Jt || {}),
    wn = (e => (e[e.AUTO = 0] = "AUTO", e[e.MANUAL = 1] = "MANUAL", e))(wn || {}),
    Bt = (e => (e.LOW = "lowp", e.MEDIUM = "mediump", e.HIGH = "highp", e))(Bt || {}),
    dt = (e => (e[e.NONE = 0] = "NONE", e[e.SCISSOR = 1] = "SCISSOR", e[e.STENCIL = 2] = "STENCIL", e[e.SPRITE = 3] = "SPRITE", e[e.COLOR = 4] = "COLOR", e))(dt || {}),
    ct = (e => (e[e.NONE = 0] = "NONE", e[e.LOW = 2] = "LOW", e[e.MEDIUM = 4] = "MEDIUM", e[e.HIGH = 8] = "HIGH", e))(ct || {}),
    ie = (e => (e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", e[e.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", e))(ie || {});
const Kh = {
        createCanvas: (e, t) => {
            const i = document.createElement("canvas");
            return i.width = e, i.height = t, i
        },
        getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
        getWebGLRenderingContext: () => WebGLRenderingContext,
        getNavigator: () => navigator,
        getBaseUrl: () => document.baseURI ?? window.location.href,
        getFontFaceSet: () => document.fonts,
        fetch: (e, t) => fetch(e, t),
        parseXML: e => new DOMParser().parseFromString(e, "text/xml")
    },
    R = {
        ADAPTER: Kh,
        RESOLUTION: 1,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
    };
var tr = /iPhone/i,
    $n = /iPod/i,
    Vn = /iPad/i,
    Xn = /\biOS-universal(?:.+)Mac\b/i,
    er = /\bAndroid(?:.+)Mobile\b/i,
    zn = /Android/i,
    We = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
    ji = /Silk/i,
    oe = /Windows Phone/i,
    Wn = /\bWindows(?:.+)ARM\b/i,
    jn = /BlackBerry/i,
    Yn = /BB10/i,
    qn = /Opera Mini/i,
    Kn = /\b(CriOS|Chrome)(?:.+)Mobile/i,
    Zn = /Mobile(?:.+)Firefox\b/i,
    Qn = function(e) {
        return typeof e < "u" && e.platform === "MacIntel" && typeof e.maxTouchPoints == "number" && e.maxTouchPoints > 1 && typeof MSStream > "u"
    };

function Zh(e) {
    return function(t) {
        return t.test(e)
    }
}

function Jn(e) {
    var t = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
    };
    !e && typeof navigator < "u" ? t = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
    } : typeof e == "string" ? t.userAgent = e : e && e.userAgent && (t = {
        userAgent: e.userAgent,
        platform: e.platform,
        maxTouchPoints: e.maxTouchPoints || 0
    });
    var i = t.userAgent,
        s = i.split("[FBAN");
    typeof s[1] < "u" && (i = s[0]), s = i.split("Twitter"), typeof s[1] < "u" && (i = s[0]);
    var r = Zh(i),
        n = {
            apple: {
                phone: r(tr) && !r(oe),
                ipod: r($n),
                tablet: !r(tr) && (r(Vn) || Qn(t)) && !r(oe),
                universal: r(Xn),
                device: (r(tr) || r($n) || r(Vn) || r(Xn) || Qn(t)) && !r(oe)
            },
            amazon: {
                phone: r(We),
                tablet: !r(We) && r(ji),
                device: r(We) || r(ji)
            },
            android: {
                phone: !r(oe) && r(We) || !r(oe) && r(er),
                tablet: !r(oe) && !r(We) && !r(er) && (r(ji) || r(zn)),
                device: !r(oe) && (r(We) || r(ji) || r(er) || r(zn)) || r(/\bokhttp\b/i)
            },
            windows: {
                phone: r(oe),
                tablet: r(Wn),
                device: r(oe) || r(Wn)
            },
            other: {
                blackberry: r(jn),
                blackberry10: r(Yn),
                opera: r(qn),
                firefox: r(Zn),
                chrome: r(Kn),
                device: r(jn) || r(Yn) || r(qn) || r(Zn) || r(Kn)
            },
            any: !1,
            phone: !1,
            tablet: !1
        };
    return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
}
const Qh = Jn.default ?? Jn,
    ue = Qh(globalThis.navigator);
R.RETINA_PREFIX = /@([0-9\.]+)x/;
R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
var ir = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};

function ya(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}

function Jh(e) {
    if (e.__esModule) return e;
    var t = e.default;
    if (typeof t == "function") {
        var i = function s() {
            return this instanceof s ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments)
        };
        i.prototype = t.prototype
    } else i = {};
    return Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.keys(e).forEach(function(s) {
        var r = Object.getOwnPropertyDescriptor(e, s);
        Object.defineProperty(i, s, r.get ? r : {
            enumerable: !0,
            get: function() {
                return e[s]
            }
        })
    }), i
}
var va = {
    exports: {}
};
(function(e) {
    var t = Object.prototype.hasOwnProperty,
        i = "~";

    function s() {}
    Object.create && (s.prototype = Object.create(null), new s().__proto__ || (i = !1));

    function r(h, l, c) {
        this.fn = h, this.context = l, this.once = c || !1
    }

    function n(h, l, c, u, d) {
        if (typeof c != "function") throw new TypeError("The listener must be a function");
        var f = new r(c, u || h, d),
            p = i ? i + l : l;
        return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h
    }

    function o(h, l) {
        --h._eventsCount === 0 ? h._events = new s : delete h._events[l]
    }

    function a() {
        this._events = new s, this._eventsCount = 0
    }
    a.prototype.eventNames = function() {
        var l = [],
            c, u;
        if (this._eventsCount === 0) return l;
        for (u in c = this._events) t.call(c, u) && l.push(i ? u.slice(1) : u);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(c)) : l
    }, a.prototype.listeners = function(l) {
        var c = i ? i + l : l,
            u = this._events[c];
        if (!u) return [];
        if (u.fn) return [u.fn];
        for (var d = 0, f = u.length, p = new Array(f); d < f; d++) p[d] = u[d].fn;
        return p
    }, a.prototype.listenerCount = function(l) {
        var c = i ? i + l : l,
            u = this._events[c];
        return u ? u.fn ? 1 : u.length : 0
    }, a.prototype.emit = function(l, c, u, d, f, p) {
        var g = i ? i + l : l;
        if (!this._events[g]) return !1;
        var m = this._events[g],
            y = arguments.length,
            v, _;
        if (m.fn) {
            switch (m.once && this.removeListener(l, m.fn, void 0, !0), y) {
                case 1:
                    return m.fn.call(m.context), !0;
                case 2:
                    return m.fn.call(m.context, c), !0;
                case 3:
                    return m.fn.call(m.context, c, u), !0;
                case 4:
                    return m.fn.call(m.context, c, u, d), !0;
                case 5:
                    return m.fn.call(m.context, c, u, d, f), !0;
                case 6:
                    return m.fn.call(m.context, c, u, d, f, p), !0
            }
            for (_ = 1, v = new Array(y - 1); _ < y; _++) v[_ - 1] = arguments[_];
            m.fn.apply(m.context, v)
        } else {
            var x = m.length,
                T;
            for (_ = 0; _ < x; _++) switch (m[_].once && this.removeListener(l, m[_].fn, void 0, !0), y) {
                case 1:
                    m[_].fn.call(m[_].context);
                    break;
                case 2:
                    m[_].fn.call(m[_].context, c);
                    break;
                case 3:
                    m[_].fn.call(m[_].context, c, u);
                    break;
                case 4:
                    m[_].fn.call(m[_].context, c, u, d);
                    break;
                default:
                    if (!v)
                        for (T = 1, v = new Array(y - 1); T < y; T++) v[T - 1] = arguments[T];
                    m[_].fn.apply(m[_].context, v)
            }
        }
        return !0
    }, a.prototype.on = function(l, c, u) {
        return n(this, l, c, u, !1)
    }, a.prototype.once = function(l, c, u) {
        return n(this, l, c, u, !0)
    }, a.prototype.removeListener = function(l, c, u, d) {
        var f = i ? i + l : l;
        if (!this._events[f]) return this;
        if (!c) return o(this, f), this;
        var p = this._events[f];
        if (p.fn) p.fn === c && (!d || p.once) && (!u || p.context === u) && o(this, f);
        else {
            for (var g = 0, m = [], y = p.length; g < y; g++)(p[g].fn !== c || d && !p[g].once || u && p[g].context !== u) && m.push(p[g]);
            m.length ? this._events[f] = m.length === 1 ? m[0] : m : o(this, f)
        }
        return this
    }, a.prototype.removeAllListeners = function(l) {
        var c;
        return l ? (c = i ? i + l : l, this._events[c] && o(this, c)) : (this._events = new s, this._eventsCount = 0), this
    }, a.prototype.off = a.prototype.removeListener, a.prototype.addListener = a.prototype.on, a.prefixed = i, a.EventEmitter = a, e.exports = a
})(va);
var tl = va.exports;
const Hi = ya(tl);
var Sn = {
    exports: {}
};
Sn.exports = Gs;
Sn.exports.default = Gs;

function Gs(e, t, i) {
    i = i || 2;
    var s = t && t.length,
        r = s ? t[0] * i : e.length,
        n = xa(e, 0, r, i, !0),
        o = [];
    if (!n || n.next === n.prev) return o;
    var a, h, l, c, u, d, f;
    if (s && (n = nl(e, t, n, i)), e.length > 80 * i) {
        a = l = e[0], h = c = e[1];
        for (var p = i; p < r; p += i) u = e[p], d = e[p + 1], u < a && (a = u), d < h && (h = d), u > l && (l = u), d > c && (c = d);
        f = Math.max(l - a, c - h), f = f !== 0 ? 32767 / f : 0
    }
    return Oi(n, o, i, a, h, f, 0), o
}

function xa(e, t, i, s, r) {
    var n, o;
    if (r === $r(e, t, i, s) > 0)
        for (n = t; n < i; n += s) o = to(n, e[n], e[n + 1], o);
    else
        for (n = i - s; n >= t; n -= s) o = to(n, e[n], e[n + 1], o);
    return o && Hs(o, o.next) && (Ni(o), o = o.next), o
}

function ke(e, t) {
    if (!e) return e;
    t || (t = e);
    var i = e,
        s;
    do
        if (s = !1, !i.steiner && (Hs(i, i.next) || rt(i.prev, i, i.next) === 0)) {
            if (Ni(i), i = t = i.prev, i === i.next) break;
            s = !0
        } else i = i.next; while (s || i !== t);
    return t
}

function Oi(e, t, i, s, r, n, o) {
    if (e) {
        !o && n && cl(e, s, r, n);
        for (var a = e, h, l; e.prev !== e.next;) {
            if (h = e.prev, l = e.next, n ? il(e, s, r, n) : el(e)) {
                t.push(h.i / i | 0), t.push(e.i / i | 0), t.push(l.i / i | 0), Ni(e), e = l.next, a = l.next;
                continue
            }
            if (e = l, e === a) {
                o ? o === 1 ? (e = sl(ke(e), t, i), Oi(e, t, i, s, r, n, 2)) : o === 2 && rl(e, t, i, s, r, n) : Oi(ke(e), t, i, s, r, n, 1);
                break
            }
        }
    }
}

function el(e) {
    var t = e.prev,
        i = e,
        s = e.next;
    if (rt(t, i, s) >= 0) return !1;
    for (var r = t.x, n = i.x, o = s.x, a = t.y, h = i.y, l = s.y, c = r < n ? r < o ? r : o : n < o ? n : o, u = a < h ? a < l ? a : l : h < l ? h : l, d = r > n ? r > o ? r : o : n > o ? n : o, f = a > h ? a > l ? a : l : h > l ? h : l, p = s.next; p !== t;) {
        if (p.x >= c && p.x <= d && p.y >= u && p.y <= f && ii(r, a, n, h, o, l, p.x, p.y) && rt(p.prev, p, p.next) >= 0) return !1;
        p = p.next
    }
    return !0
}

function il(e, t, i, s) {
    var r = e.prev,
        n = e,
        o = e.next;
    if (rt(r, n, o) >= 0) return !1;
    for (var a = r.x, h = n.x, l = o.x, c = r.y, u = n.y, d = o.y, f = a < h ? a < l ? a : l : h < l ? h : l, p = c < u ? c < d ? c : d : u < d ? u : d, g = a > h ? a > l ? a : l : h > l ? h : l, m = c > u ? c > d ? c : d : u > d ? u : d, y = Gr(f, p, t, i, s), v = Gr(g, m, t, i, s), _ = e.prevZ, x = e.nextZ; _ && _.z >= y && x && x.z <= v;) {
        if (_.x >= f && _.x <= g && _.y >= p && _.y <= m && _ !== r && _ !== o && ii(a, c, h, u, l, d, _.x, _.y) && rt(_.prev, _, _.next) >= 0 || (_ = _.prevZ, x.x >= f && x.x <= g && x.y >= p && x.y <= m && x !== r && x !== o && ii(a, c, h, u, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0)) return !1;
        x = x.nextZ
    }
    for (; _ && _.z >= y;) {
        if (_.x >= f && _.x <= g && _.y >= p && _.y <= m && _ !== r && _ !== o && ii(a, c, h, u, l, d, _.x, _.y) && rt(_.prev, _, _.next) >= 0) return !1;
        _ = _.prevZ
    }
    for (; x && x.z <= v;) {
        if (x.x >= f && x.x <= g && x.y >= p && x.y <= m && x !== r && x !== o && ii(a, c, h, u, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0) return !1;
        x = x.nextZ
    }
    return !0
}

function sl(e, t, i) {
    var s = e;
    do {
        var r = s.prev,
            n = s.next.next;
        !Hs(r, n) && ba(r, s, s.next, n) && Li(r, n) && Li(n, r) && (t.push(r.i / i | 0), t.push(s.i / i | 0), t.push(n.i / i | 0), Ni(s), Ni(s.next), s = e = n), s = s.next
    } while (s !== e);
    return ke(s)
}

function rl(e, t, i, s, r, n) {
    var o = e;
    do {
        for (var a = o.next.next; a !== o.prev;) {
            if (o.i !== a.i && fl(o, a)) {
                var h = Ea(o, a);
                o = ke(o, o.next), h = ke(h, h.next), Oi(o, t, i, s, r, n, 0), Oi(h, t, i, s, r, n, 0);
                return
            }
            a = a.next
        }
        o = o.next
    } while (o !== e)
}

function nl(e, t, i, s) {
    var r = [],
        n, o, a, h, l;
    for (n = 0, o = t.length; n < o; n++) a = t[n] * s, h = n < o - 1 ? t[n + 1] * s : e.length, l = xa(e, a, h, s, !1), l === l.next && (l.steiner = !0), r.push(dl(l));
    for (r.sort(ol), n = 0; n < r.length; n++) i = al(r[n], i);
    return i
}

function ol(e, t) {
    return e.x - t.x
}

function al(e, t) {
    var i = hl(e, t);
    if (!i) return t;
    var s = Ea(i, e);
    return ke(s, s.next), ke(i, i.next)
}

function hl(e, t) {
    var i = t,
        s = e.x,
        r = e.y,
        n = -1 / 0,
        o;
    do {
        if (r <= i.y && r >= i.next.y && i.next.y !== i.y) {
            var a = i.x + (r - i.y) * (i.next.x - i.x) / (i.next.y - i.y);
            if (a <= s && a > n && (n = a, o = i.x < i.next.x ? i : i.next, a === s)) return o
        }
        i = i.next
    } while (i !== t);
    if (!o) return null;
    var h = o,
        l = o.x,
        c = o.y,
        u = 1 / 0,
        d;
    i = o;
    do s >= i.x && i.x >= l && s !== i.x && ii(r < c ? s : n, r, l, c, r < c ? n : s, r, i.x, i.y) && (d = Math.abs(r - i.y) / (s - i.x), Li(i, e) && (d < u || d === u && (i.x > o.x || i.x === o.x && ll(o, i))) && (o = i, u = d)), i = i.next; while (i !== h);
    return o
}

function ll(e, t) {
    return rt(e.prev, e, t.prev) < 0 && rt(t.next, e, e.next) < 0
}

function cl(e, t, i, s) {
    var r = e;
    do r.z === 0 && (r.z = Gr(r.x, r.y, t, i, s)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== e);
    r.prevZ.nextZ = null, r.prevZ = null, ul(r)
}

function ul(e) {
    var t, i, s, r, n, o, a, h, l = 1;
    do {
        for (i = e, e = null, n = null, o = 0; i;) {
            for (o++, s = i, a = 0, t = 0; t < l && (a++, s = s.nextZ, !!s); t++);
            for (h = l; a > 0 || h > 0 && s;) a !== 0 && (h === 0 || !s || i.z <= s.z) ? (r = i, i = i.nextZ, a--) : (r = s, s = s.nextZ, h--), n ? n.nextZ = r : e = r, r.prevZ = n, n = r;
            i = s
        }
        n.nextZ = null, l *= 2
    } while (o > 1);
    return e
}

function Gr(e, t, i, s, r) {
    return e = (e - i) * r | 0, t = (t - s) * r | 0, e = (e | e << 8) & 16711935, e = (e | e << 4) & 252645135, e = (e | e << 2) & 858993459, e = (e | e << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, e | t << 1
}

function dl(e) {
    var t = e,
        i = e;
    do(t.x < i.x || t.x === i.x && t.y < i.y) && (i = t), t = t.next; while (t !== e);
    return i
}

function ii(e, t, i, s, r, n, o, a) {
    return (r - o) * (t - a) >= (e - o) * (n - a) && (e - o) * (s - a) >= (i - o) * (t - a) && (i - o) * (n - a) >= (r - o) * (s - a)
}

function fl(e, t) {
    return e.next.i !== t.i && e.prev.i !== t.i && !pl(e, t) && (Li(e, t) && Li(t, e) && ml(e, t) && (rt(e.prev, e, t.prev) || rt(e, t.prev, t)) || Hs(e, t) && rt(e.prev, e, e.next) > 0 && rt(t.prev, t, t.next) > 0)
}

function rt(e, t, i) {
    return (t.y - e.y) * (i.x - t.x) - (t.x - e.x) * (i.y - t.y)
}

function Hs(e, t) {
    return e.x === t.x && e.y === t.y
}

function ba(e, t, i, s) {
    var r = qi(rt(e, t, i)),
        n = qi(rt(e, t, s)),
        o = qi(rt(i, s, e)),
        a = qi(rt(i, s, t));
    return !!(r !== n && o !== a || r === 0 && Yi(e, i, t) || n === 0 && Yi(e, s, t) || o === 0 && Yi(i, e, s) || a === 0 && Yi(i, t, s))
}

function Yi(e, t, i) {
    return t.x <= Math.max(e.x, i.x) && t.x >= Math.min(e.x, i.x) && t.y <= Math.max(e.y, i.y) && t.y >= Math.min(e.y, i.y)
}

function qi(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
}

function pl(e, t) {
    var i = e;
    do {
        if (i.i !== e.i && i.next.i !== e.i && i.i !== t.i && i.next.i !== t.i && ba(i, i.next, e, t)) return !0;
        i = i.next
    } while (i !== e);
    return !1
}

function Li(e, t) {
    return rt(e.prev, e, e.next) < 0 ? rt(e, t, e.next) >= 0 && rt(e, e.prev, t) >= 0 : rt(e, t, e.prev) < 0 || rt(e, e.next, t) < 0
}

function ml(e, t) {
    var i = e,
        s = !1,
        r = (e.x + t.x) / 2,
        n = (e.y + t.y) / 2;
    do i.y > n != i.next.y > n && i.next.y !== i.y && r < (i.next.x - i.x) * (n - i.y) / (i.next.y - i.y) + i.x && (s = !s), i = i.next; while (i !== e);
    return s
}

function Ea(e, t) {
    var i = new Hr(e.i, e.x, e.y),
        s = new Hr(t.i, t.x, t.y),
        r = e.next,
        n = t.prev;
    return e.next = t, t.prev = e, i.next = r, r.prev = i, s.next = i, i.prev = s, n.next = s, s.prev = n, s
}

function to(e, t, i, s) {
    var r = new Hr(e, t, i);
    return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r
}

function Ni(e) {
    e.next.prev = e.prev, e.prev.next = e.next, e.prevZ && (e.prevZ.nextZ = e.nextZ), e.nextZ && (e.nextZ.prevZ = e.prevZ)
}

function Hr(e, t, i) {
    this.i = e, this.x = t, this.y = i, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
}
Gs.deviation = function(e, t, i, s) {
    var r = t && t.length,
        n = r ? t[0] * i : e.length,
        o = Math.abs($r(e, 0, n, i));
    if (r)
        for (var a = 0, h = t.length; a < h; a++) {
            var l = t[a] * i,
                c = a < h - 1 ? t[a + 1] * i : e.length;
            o -= Math.abs($r(e, l, c, i))
        }
    var u = 0;
    for (a = 0; a < s.length; a += 3) {
        var d = s[a] * i,
            f = s[a + 1] * i,
            p = s[a + 2] * i;
        u += Math.abs((e[d] - e[p]) * (e[f + 1] - e[d + 1]) - (e[d] - e[f]) * (e[p + 1] - e[d + 1]))
    }
    return o === 0 && u === 0 ? 0 : Math.abs((u - o) / o)
};

function $r(e, t, i, s) {
    for (var r = 0, n = t, o = i - s; n < i; n += s) r += (e[o] - e[n]) * (e[n + 1] + e[o + 1]), o = n;
    return r
}
Gs.flatten = function(e) {
    for (var t = e[0][0].length, i = {
            vertices: [],
            holes: [],
            dimensions: t
        }, s = 0, r = 0; r < e.length; r++) {
        for (var n = 0; n < e[r].length; n++)
            for (var o = 0; o < t; o++) i.vertices.push(e[r][n][o]);
        r > 0 && (s += e[r - 1].length, i.holes.push(s))
    }
    return i
};
var gl = Sn.exports;
const _l = ya(gl);
var ws = {
    exports: {}
}; /*! https://mths.be/punycode v1.4.1 by @mathias */
ws.exports;
(function(e, t) {
    (function(i) {
        var s = t && !t.nodeType && t,
            r = e && !e.nodeType && e,
            n = typeof ir == "object" && ir;
        (n.global === n || n.window === n || n.self === n) && (i = n);
        var o, a = 2147483647,
            h = 36,
            l = 1,
            c = 26,
            u = 38,
            d = 700,
            f = 72,
            p = 128,
            g = "-",
            m = /^xn--/,
            y = /[^\x20-\x7E]/,
            v = /[\x2E\u3002\uFF0E\uFF61]/g,
            _ = {
                overflow: "Overflow: input needs wider integers to process",
                "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                "invalid-input": "Invalid input"
            },
            x = h - l,
            T = Math.floor,
            P = String.fromCharCode,
            S;

        function E(A) {
            throw new RangeError(_[A])
        }

        function B(A, H) {
            for (var q = A.length, Q = []; q--;) Q[q] = H(A[q]);
            return Q
        }

        function N(A, H) {
            var q = A.split("@"),
                Q = "";
            q.length > 1 && (Q = q[0] + "@", A = q[1]), A = A.replace(v, ".");
            var tt = A.split("."),
                ft = B(tt, H).join(".");
            return Q + ft
        }

        function I(A) {
            for (var H = [], q = 0, Q = A.length, tt, ft; q < Q;) tt = A.charCodeAt(q++), tt >= 55296 && tt <= 56319 && q < Q ? (ft = A.charCodeAt(q++), (ft & 64512) == 56320 ? H.push(((tt & 1023) << 10) + (ft & 1023) + 65536) : (H.push(tt), q--)) : H.push(tt);
            return H
        }

        function M(A) {
            return B(A, function(H) {
                var q = "";
                return H > 65535 && (H -= 65536, q += P(H >>> 10 & 1023 | 55296), H = 56320 | H & 1023), q += P(H), q
            }).join("")
        }

        function w(A) {
            return A - 48 < 10 ? A - 22 : A - 65 < 26 ? A - 65 : A - 97 < 26 ? A - 97 : h
        }

        function b(A, H) {
            return A + 22 + 75 * (A < 26) - ((H != 0) << 5)
        }

        function $(A, H, q) {
            var Q = 0;
            for (A = q ? T(A / d) : A >> 1, A += T(A / H); A > x * c >> 1; Q += h) A = T(A / x);
            return T(Q + (x + 1) * A / (A + u))
        }

        function X(A) {
            var H = [],
                q = A.length,
                Q, tt = 0,
                ft = p,
                ht = f,
                pt, Tt, Rt, yt, et, lt, ut, Yt, qt;
            for (pt = A.lastIndexOf(g), pt < 0 && (pt = 0), Tt = 0; Tt < pt; ++Tt) A.charCodeAt(Tt) >= 128 && E("not-basic"), H.push(A.charCodeAt(Tt));
            for (Rt = pt > 0 ? pt + 1 : 0; Rt < q;) {
                for (yt = tt, et = 1, lt = h; Rt >= q && E("invalid-input"), ut = w(A.charCodeAt(Rt++)), (ut >= h || ut > T((a - tt) / et)) && E("overflow"), tt += ut * et, Yt = lt <= ht ? l : lt >= ht + c ? c : lt - ht, !(ut < Yt); lt += h) qt = h - Yt, et > T(a / qt) && E("overflow"), et *= qt;
                Q = H.length + 1, ht = $(tt - yt, Q, yt == 0), T(tt / Q) > a - ft && E("overflow"), ft += T(tt / Q), tt %= Q, H.splice(tt++, 0, ft)
            }
            return M(H)
        }

        function F(A) {
            var H, q, Q, tt, ft, ht, pt, Tt, Rt, yt, et, lt = [],
                ut, Yt, qt, yi;
            for (A = I(A), ut = A.length, H = p, q = 0, ft = f, ht = 0; ht < ut; ++ht) et = A[ht], et < 128 && lt.push(P(et));
            for (Q = tt = lt.length, tt && lt.push(g); Q < ut;) {
                for (pt = a, ht = 0; ht < ut; ++ht) et = A[ht], et >= H && et < pt && (pt = et);
                for (Yt = Q + 1, pt - H > T((a - q) / Yt) && E("overflow"), q += (pt - H) * Yt, H = pt, ht = 0; ht < ut; ++ht)
                    if (et = A[ht], et < H && ++q > a && E("overflow"), et == H) {
                        for (Tt = q, Rt = h; yt = Rt <= ft ? l : Rt >= ft + c ? c : Rt - ft, !(Tt < yt); Rt += h) yi = Tt - yt, qt = h - yt, lt.push(P(b(yt + yi % qt, 0))), Tt = T(yi / qt);
                        lt.push(P(b(Tt, 0))), ft = $(q, Yt, Q == tt), q = 0, ++Q
                    }++ q, ++H
            }
            return lt.join("")
        }

        function Z(A) {
            return N(A, function(H) {
                return m.test(H) ? X(H.slice(4).toLowerCase()) : H
            })
        }

        function ot(A) {
            return N(A, function(H) {
                return y.test(H) ? "xn--" + F(H) : H
            })
        }
        if (o = {
                version: "1.4.1",
                ucs2: {
                    decode: I,
                    encode: M
                },
                decode: X,
                encode: F,
                toASCII: ot,
                toUnicode: Z
            }, s && r)
            if (e.exports == s) r.exports = o;
            else
                for (S in o) o.hasOwnProperty(S) && (s[S] = o[S]);
        else i.punycode = o
    })(ir)
})(ws, ws.exports);
var yl = ws.exports,
    vl = function() {
        if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") return !1;
        if (typeof Symbol.iterator == "symbol") return !0;
        var t = {},
            i = Symbol("test"),
            s = Object(i);
        if (typeof i == "string" || Object.prototype.toString.call(i) !== "[object Symbol]" || Object.prototype.toString.call(s) !== "[object Symbol]") return !1;
        var r = 42;
        t[i] = r;
        for (i in t) return !1;
        if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0) return !1;
        var n = Object.getOwnPropertySymbols(t);
        if (n.length !== 1 || n[0] !== i || !Object.prototype.propertyIsEnumerable.call(t, i)) return !1;
        if (typeof Object.getOwnPropertyDescriptor == "function") {
            var o = Object.getOwnPropertyDescriptor(t, i);
            if (o.value !== r || o.enumerable !== !0) return !1
        }
        return !0
    },
    eo = typeof Symbol < "u" && Symbol,
    xl = vl,
    bl = function() {
        return typeof eo != "function" || typeof Symbol != "function" || typeof eo("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : xl()
    },
    io = {
        foo: {}
    },
    El = Object,
    Tl = function() {
        return {
            __proto__: io
        }.foo === io.foo && !({
                __proto__: null
            }
            instanceof El)
    },
    wl = "Function.prototype.bind called on incompatible ",
    sr = Array.prototype.slice,
    Sl = Object.prototype.toString,
    Al = "[object Function]",
    Cl = function(t) {
        var i = this;
        if (typeof i != "function" || Sl.call(i) !== Al) throw new TypeError(wl + i);
        for (var s = sr.call(arguments, 1), r, n = function() {
                if (this instanceof r) {
                    var c = i.apply(this, s.concat(sr.call(arguments)));
                    return Object(c) === c ? c : this
                } else return i.apply(t, s.concat(sr.call(arguments)))
            }, o = Math.max(0, i.length - s.length), a = [], h = 0; h < o; h++) a.push("$" + h);
        if (r = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(n), i.prototype) {
            var l = function() {};
            l.prototype = i.prototype, r.prototype = new l, l.prototype = null
        }
        return r
    },
    Il = Cl,
    An = Function.prototype.bind || Il,
    Pl = An,
    Rl = Pl.call(Function.call, Object.prototype.hasOwnProperty),
    j, ui = SyntaxError,
    Ta = Function,
    ni = TypeError,
    rr = function(e) {
        try {
            return Ta('"use strict"; return (' + e + ").constructor;")()
        } catch {}
    },
    Le = Object.getOwnPropertyDescriptor;
if (Le) try {
    Le({}, "")
} catch {
    Le = null
}
var nr = function() {
        throw new ni
    },
    Ml = Le ? function() {
        try {
            return arguments.callee, nr
        } catch {
            try {
                return Le(arguments, "callee").get
            } catch {
                return nr
            }
        }
    }() : nr,
    je = bl(),
    Dl = Tl(),
    gt = Object.getPrototypeOf || (Dl ? function(e) {
        return e.__proto__
    } : null),
    Ke = {},
    Bl = typeof Uint8Array > "u" || !gt ? j : gt(Uint8Array),
    Ne = {
        "%AggregateError%": typeof AggregateError > "u" ? j : AggregateError,
        "%Array%": Array,
        "%ArrayBuffer%": typeof ArrayBuffer > "u" ? j : ArrayBuffer,
        "%ArrayIteratorPrototype%": je && gt ? gt([][Symbol.iterator]()) : j,
        "%AsyncFromSyncIteratorPrototype%": j,
        "%AsyncFunction%": Ke,
        "%AsyncGenerator%": Ke,
        "%AsyncGeneratorFunction%": Ke,
        "%AsyncIteratorPrototype%": Ke,
        "%Atomics%": typeof Atomics > "u" ? j : Atomics,
        "%BigInt%": typeof BigInt > "u" ? j : BigInt,
        "%BigInt64Array%": typeof BigInt64Array > "u" ? j : BigInt64Array,
        "%BigUint64Array%": typeof BigUint64Array > "u" ? j : BigUint64Array,
        "%Boolean%": Boolean,
        "%DataView%": typeof DataView > "u" ? j : DataView,
        "%Date%": Date,
        "%decodeURI%": decodeURI,
        "%decodeURIComponent%": decodeURIComponent,
        "%encodeURI%": encodeURI,
        "%encodeURIComponent%": encodeURIComponent,
        "%Error%": Error,
        "%eval%": eval,
        "%EvalError%": EvalError,
        "%Float32Array%": typeof Float32Array > "u" ? j : Float32Array,
        "%Float64Array%": typeof Float64Array > "u" ? j : Float64Array,
        "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? j : FinalizationRegistry,
        "%Function%": Ta,
        "%GeneratorFunction%": Ke,
        "%Int8Array%": typeof Int8Array > "u" ? j : Int8Array,
        "%Int16Array%": typeof Int16Array > "u" ? j : Int16Array,
        "%Int32Array%": typeof Int32Array > "u" ? j : Int32Array,
        "%isFinite%": isFinite,
        "%isNaN%": isNaN,
        "%IteratorPrototype%": je && gt ? gt(gt([][Symbol.iterator]())) : j,
        "%JSON%": typeof JSON == "object" ? JSON : j,
        "%Map%": typeof Map > "u" ? j : Map,
        "%MapIteratorPrototype%": typeof Map > "u" || !je || !gt ? j : gt(new Map()[Symbol.iterator]()),
        "%Math%": Math,
        "%Number%": Number,
        "%Object%": Object,
        "%parseFloat%": parseFloat,
        "%parseInt%": parseInt,
        "%Promise%": typeof Promise > "u" ? j : Promise,
        "%Proxy%": typeof Proxy > "u" ? j : Proxy,
        "%RangeError%": RangeError,
        "%ReferenceError%": ReferenceError,
        "%Reflect%": typeof Reflect > "u" ? j : Reflect,
        "%RegExp%": RegExp,
        "%Set%": typeof Set > "u" ? j : Set,
        "%SetIteratorPrototype%": typeof Set > "u" || !je || !gt ? j : gt(new Set()[Symbol.iterator]()),
        "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? j : SharedArrayBuffer,
        "%String%": String,
        "%StringIteratorPrototype%": je && gt ? gt("" [Symbol.iterator]()) : j,
        "%Symbol%": je ? Symbol : j,
        "%SyntaxError%": ui,
        "%ThrowTypeError%": Ml,
        "%TypedArray%": Bl,
        "%TypeError%": ni,
        "%Uint8Array%": typeof Uint8Array > "u" ? j : Uint8Array,
        "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? j : Uint8ClampedArray,
        "%Uint16Array%": typeof Uint16Array > "u" ? j : Uint16Array,
        "%Uint32Array%": typeof Uint32Array > "u" ? j : Uint32Array,
        "%URIError%": URIError,
        "%WeakMap%": typeof WeakMap > "u" ? j : WeakMap,
        "%WeakRef%": typeof WeakRef > "u" ? j : WeakRef,
        "%WeakSet%": typeof WeakSet > "u" ? j : WeakSet
    };
if (gt) try {
    null.error
} catch (e) {
    var Fl = gt(gt(e));
    Ne["%Error.prototype%"] = Fl
}
var Ol = function e(t) {
        var i;
        if (t === "%AsyncFunction%") i = rr("async function () {}");
        else if (t === "%GeneratorFunction%") i = rr("function* () {}");
        else if (t === "%AsyncGeneratorFunction%") i = rr("async function* () {}");
        else if (t === "%AsyncGenerator%") {
            var s = e("%AsyncGeneratorFunction%");
            s && (i = s.prototype)
        } else if (t === "%AsyncIteratorPrototype%") {
            var r = e("%AsyncGenerator%");
            r && gt && (i = gt(r.prototype))
        }
        return Ne[t] = i, i
    },
    so = {
        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
        "%ArrayPrototype%": ["Array", "prototype"],
        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
        "%ArrayProto_values%": ["Array", "prototype", "values"],
        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
        "%BooleanPrototype%": ["Boolean", "prototype"],
        "%DataViewPrototype%": ["DataView", "prototype"],
        "%DatePrototype%": ["Date", "prototype"],
        "%ErrorPrototype%": ["Error", "prototype"],
        "%EvalErrorPrototype%": ["EvalError", "prototype"],
        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
        "%FunctionPrototype%": ["Function", "prototype"],
        "%Generator%": ["GeneratorFunction", "prototype"],
        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
        "%JSONParse%": ["JSON", "parse"],
        "%JSONStringify%": ["JSON", "stringify"],
        "%MapPrototype%": ["Map", "prototype"],
        "%NumberPrototype%": ["Number", "prototype"],
        "%ObjectPrototype%": ["Object", "prototype"],
        "%ObjProto_toString%": ["Object", "prototype", "toString"],
        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
        "%PromisePrototype%": ["Promise", "prototype"],
        "%PromiseProto_then%": ["Promise", "prototype", "then"],
        "%Promise_all%": ["Promise", "all"],
        "%Promise_reject%": ["Promise", "reject"],
        "%Promise_resolve%": ["Promise", "resolve"],
        "%RangeErrorPrototype%": ["RangeError", "prototype"],
        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
        "%RegExpPrototype%": ["RegExp", "prototype"],
        "%SetPrototype%": ["Set", "prototype"],
        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
        "%StringPrototype%": ["String", "prototype"],
        "%SymbolPrototype%": ["Symbol", "prototype"],
        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
        "%TypeErrorPrototype%": ["TypeError", "prototype"],
        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
        "%URIErrorPrototype%": ["URIError", "prototype"],
        "%WeakMapPrototype%": ["WeakMap", "prototype"],
        "%WeakSetPrototype%": ["WeakSet", "prototype"]
    },
    $i = An,
    Ss = Rl,
    Ll = $i.call(Function.call, Array.prototype.concat),
    Nl = $i.call(Function.apply, Array.prototype.splice),
    ro = $i.call(Function.call, String.prototype.replace),
    As = $i.call(Function.call, String.prototype.slice),
    Ul = $i.call(Function.call, RegExp.prototype.exec),
    kl = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
    Gl = /\\(\\)?/g,
    Hl = function(t) {
        var i = As(t, 0, 1),
            s = As(t, -1);
        if (i === "%" && s !== "%") throw new ui("invalid intrinsic syntax, expected closing `%`");
        if (s === "%" && i !== "%") throw new ui("invalid intrinsic syntax, expected opening `%`");
        var r = [];
        return ro(t, kl, function(n, o, a, h) {
            r[r.length] = a ? ro(h, Gl, "$1") : o || n
        }), r
    },
    $l = function(t, i) {
        var s = t,
            r;
        if (Ss(so, s) && (r = so[s], s = "%" + r[0] + "%"), Ss(Ne, s)) {
            var n = Ne[s];
            if (n === Ke && (n = Ol(s)), typeof n > "u" && !i) throw new ni("intrinsic " + t + " exists, but is not available. Please file an issue!");
            return {
                alias: r,
                name: s,
                value: n
            }
        }
        throw new ui("intrinsic " + t + " does not exist!")
    },
    Cn = function(t, i) {
        if (typeof t != "string" || t.length === 0) throw new ni("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && typeof i != "boolean") throw new ni('"allowMissing" argument must be a boolean');
        if (Ul(/^%?[^%]*%?$/, t) === null) throw new ui("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
        var s = Hl(t),
            r = s.length > 0 ? s[0] : "",
            n = $l("%" + r + "%", i),
            o = n.name,
            a = n.value,
            h = !1,
            l = n.alias;
        l && (r = l[0], Nl(s, Ll([0, 1], l)));
        for (var c = 1, u = !0; c < s.length; c += 1) {
            var d = s[c],
                f = As(d, 0, 1),
                p = As(d, -1);
            if ((f === '"' || f === "'" || f === "`" || p === '"' || p === "'" || p === "`") && f !== p) throw new ui("property names with quotes must have matching quotes");
            if ((d === "constructor" || !u) && (h = !0), r += "." + d, o = "%" + r + "%", Ss(Ne, o)) a = Ne[o];
            else if (a != null) {
                if (!(d in a)) {
                    if (!i) throw new ni("base intrinsic for " + t + " exists, but the property is not available.");
                    return
                }
                if (Le && c + 1 >= s.length) {
                    var g = Le(a, d);
                    u = !!g, u && "get" in g && !("originalValue" in g.get) ? a = g.get : a = a[d]
                } else u = Ss(a, d), a = a[d];
                u && !h && (Ne[o] = a)
            }
        }
        return a
    },
    wa = {
        exports: {}
    };
(function(e) {
    var t = An,
        i = Cn,
        s = i("%Function.prototype.apply%"),
        r = i("%Function.prototype.call%"),
        n = i("%Reflect.apply%", !0) || t.call(r, s),
        o = i("%Object.getOwnPropertyDescriptor%", !0),
        a = i("%Object.defineProperty%", !0),
        h = i("%Math.max%");
    if (a) try {
        a({}, "a", {
            value: 1
        })
    } catch {
        a = null
    }
    e.exports = function(u) {
        var d = n(t, r, arguments);
        if (o && a) {
            var f = o(d, "length");
            f.configurable && a(d, "length", {
                value: 1 + h(0, u.length - (arguments.length - 1))
            })
        }
        return d
    };
    var l = function() {
        return n(t, s, arguments)
    };
    a ? a(e.exports, "apply", {
        value: l
    }) : e.exports.apply = l
})(wa);
var Vl = wa.exports,
    Sa = Cn,
    Aa = Vl,
    Xl = Aa(Sa("String.prototype.indexOf")),
    zl = function(t, i) {
        var s = Sa(t, !!i);
        return typeof s == "function" && Xl(t, ".prototype.") > -1 ? Aa(s) : s
    };
const Wl = {},
    jl = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: Wl
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    Yl = Jh(jl);
var In = typeof Map == "function" && Map.prototype,
    or = Object.getOwnPropertyDescriptor && In ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null,
    Cs = In && or && typeof or.get == "function" ? or.get : null,
    no = In && Map.prototype.forEach,
    Pn = typeof Set == "function" && Set.prototype,
    ar = Object.getOwnPropertyDescriptor && Pn ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null,
    Is = Pn && ar && typeof ar.get == "function" ? ar.get : null,
    oo = Pn && Set.prototype.forEach,
    ql = typeof WeakMap == "function" && WeakMap.prototype,
    Ri = ql ? WeakMap.prototype.has : null,
    Kl = typeof WeakSet == "function" && WeakSet.prototype,
    Mi = Kl ? WeakSet.prototype.has : null,
    Zl = typeof WeakRef == "function" && WeakRef.prototype,
    ao = Zl ? WeakRef.prototype.deref : null,
    Ql = Boolean.prototype.valueOf,
    Jl = Object.prototype.toString,
    tc = Function.prototype.toString,
    ec = String.prototype.match,
    Rn = String.prototype.slice,
    ye = String.prototype.replace,
    ic = String.prototype.toUpperCase,
    ho = String.prototype.toLowerCase,
    Ca = RegExp.prototype.test,
    lo = Array.prototype.concat,
    te = Array.prototype.join,
    sc = Array.prototype.slice,
    co = Math.floor,
    Vr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null,
    hr = Object.getOwnPropertySymbols,
    Xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null,
    di = typeof Symbol == "function" && typeof Symbol.iterator == "object",
    Ct = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === di || "symbol") ? Symbol.toStringTag : null,
    Ia = Object.prototype.propertyIsEnumerable,
    uo = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(e) {
        return e.__proto__
    } : null);

function fo(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || Ca.call(/e/, t)) return t;
    var i = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
        var s = e < 0 ? -co(-e) : co(e);
        if (s !== e) {
            var r = String(s),
                n = Rn.call(t, r.length + 1);
            return ye.call(r, i, "$&_") + "." + ye.call(ye.call(n, /([0-9]{3})/g, "$&_"), /_$/, "")
        }
    }
    return ye.call(t, i, "$&_")
}
var zr = Yl,
    po = zr.custom,
    mo = Ra(po) ? po : null,
    rc = function e(t, i, s, r) {
        var n = i || {};
        if (ge(n, "quoteStyle") && n.quoteStyle !== "single" && n.quoteStyle !== "double") throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (ge(n, "maxStringLength") && (typeof n.maxStringLength == "number" ? n.maxStringLength < 0 && n.maxStringLength !== 1 / 0 : n.maxStringLength !== null)) throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
        var o = ge(n, "customInspect") ? n.customInspect : !0;
        if (typeof o != "boolean" && o !== "symbol") throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
        if (ge(n, "indent") && n.indent !== null && n.indent !== "	" && !(parseInt(n.indent, 10) === n.indent && n.indent > 0)) throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ge(n, "numericSeparator") && typeof n.numericSeparator != "boolean") throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var a = n.numericSeparator;
        if (typeof t > "u") return "undefined";
        if (t === null) return "null";
        if (typeof t == "boolean") return t ? "true" : "false";
        if (typeof t == "string") return Da(t, n);
        if (typeof t == "number") {
            if (t === 0) return 1 / 0 / t > 0 ? "0" : "-0";
            var h = String(t);
            return a ? fo(t, h) : h
        }
        if (typeof t == "bigint") {
            var l = String(t) + "n";
            return a ? fo(t, l) : l
        }
        var c = typeof n.depth > "u" ? 5 : n.depth;
        if (typeof s > "u" && (s = 0), s >= c && c > 0 && typeof t == "object") return Wr(t) ? "[Array]" : "[Object]";
        var u = Ec(n, s);
        if (typeof r > "u") r = [];
        else if (Ma(r, t) >= 0) return "[Circular]";

        function d(w, b, $) {
            if (b && (r = sc.call(r), r.push(b)), $) {
                var X = {
                    depth: n.depth
                };
                return ge(n, "quoteStyle") && (X.quoteStyle = n.quoteStyle), e(w, X, s + 1, r)
            }
            return e(w, n, s + 1, r)
        }
        if (typeof t == "function" && !go(t)) {
            var f = fc(t),
                p = Ki(t, d);
            return "[Function" + (f ? ": " + f : " (anonymous)") + "]" + (p.length > 0 ? " { " + te.call(p, ", ") + " }" : "")
        }
        if (Ra(t)) {
            var g = di ? ye.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Xr.call(t);
            return typeof t == "object" && !di ? vi(g) : g
        }
        if (vc(t)) {
            for (var m = "<" + ho.call(String(t.nodeName)), y = t.attributes || [], v = 0; v < y.length; v++) m += " " + y[v].name + "=" + Pa(nc(y[v].value), "double", n);
            return m += ">", t.childNodes && t.childNodes.length && (m += "..."), m += "</" + ho.call(String(t.nodeName)) + ">", m
        }
        if (Wr(t)) {
            if (t.length === 0) return "[]";
            var _ = Ki(t, d);
            return u && !bc(_) ? "[" + jr(_, u) + "]" : "[ " + te.call(_, ", ") + " ]"
        }
        if (ac(t)) {
            var x = Ki(t, d);
            return !("cause" in Error.prototype) && "cause" in t && !Ia.call(t, "cause") ? "{ [" + String(t) + "] " + te.call(lo.call("[cause]: " + d(t.cause), x), ", ") + " }" : x.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + te.call(x, ", ") + " }"
        }
        if (typeof t == "object" && o) {
            if (mo && typeof t[mo] == "function" && zr) return zr(t, {
                depth: c - s
            });
            if (o !== "symbol" && typeof t.inspect == "function") return t.inspect()
        }
        if (pc(t)) {
            var T = [];
            return no && no.call(t, function(w, b) {
                T.push(d(b, t, !0) + " => " + d(w, t))
            }), _o("Map", Cs.call(t), T, u)
        }
        if (_c(t)) {
            var P = [];
            return oo && oo.call(t, function(w) {
                P.push(d(w, t))
            }), _o("Set", Is.call(t), P, u)
        }
        if (mc(t)) return lr("WeakMap");
        if (yc(t)) return lr("WeakSet");
        if (gc(t)) return lr("WeakRef");
        if (lc(t)) return vi(d(Number(t)));
        if (uc(t)) return vi(d(Vr.call(t)));
        if (cc(t)) return vi(Ql.call(t));
        if (hc(t)) return vi(d(String(t)));
        if (!oc(t) && !go(t)) {
            var S = Ki(t, d),
                E = uo ? uo(t) === Object.prototype : t instanceof Object || t.constructor === Object,
                B = t instanceof Object ? "" : "null prototype",
                N = !E && Ct && Object(t) === t && Ct in t ? Rn.call(Ce(t), 8, -1) : B ? "Object" : "",
                I = E || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : "",
                M = I + (N || B ? "[" + te.call(lo.call([], N || [], B || []), ": ") + "] " : "");
            return S.length === 0 ? M + "{}" : u ? M + "{" + jr(S, u) + "}" : M + "{ " + te.call(S, ", ") + " }"
        }
        return String(t)
    };

function Pa(e, t, i) {
    var s = (i.quoteStyle || t) === "double" ? '"' : "'";
    return s + e + s
}

function nc(e) {
    return ye.call(String(e), /"/g, "&quot;")
}

function Wr(e) {
    return Ce(e) === "[object Array]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function oc(e) {
    return Ce(e) === "[object Date]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function go(e) {
    return Ce(e) === "[object RegExp]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function ac(e) {
    return Ce(e) === "[object Error]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function hc(e) {
    return Ce(e) === "[object String]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function lc(e) {
    return Ce(e) === "[object Number]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function cc(e) {
    return Ce(e) === "[object Boolean]" && (!Ct || !(typeof e == "object" && Ct in e))
}

function Ra(e) {
    if (di) return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol") return !0;
    if (!e || typeof e != "object" || !Xr) return !1;
    try {
        return Xr.call(e), !0
    } catch {}
    return !1
}

function uc(e) {
    if (!e || typeof e != "object" || !Vr) return !1;
    try {
        return Vr.call(e), !0
    } catch {}
    return !1
}
var dc = Object.prototype.hasOwnProperty || function(e) {
    return e in this
};

function ge(e, t) {
    return dc.call(e, t)
}

function Ce(e) {
    return Jl.call(e)
}

function fc(e) {
    if (e.name) return e.name;
    var t = ec.call(tc.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null
}

function Ma(e, t) {
    if (e.indexOf) return e.indexOf(t);
    for (var i = 0, s = e.length; i < s; i++)
        if (e[i] === t) return i;
    return -1
}

function pc(e) {
    if (!Cs || !e || typeof e != "object") return !1;
    try {
        Cs.call(e);
        try {
            Is.call(e)
        } catch {
            return !0
        }
        return e instanceof Map
    } catch {}
    return !1
}

function mc(e) {
    if (!Ri || !e || typeof e != "object") return !1;
    try {
        Ri.call(e, Ri);
        try {
            Mi.call(e, Mi)
        } catch {
            return !0
        }
        return e instanceof WeakMap
    } catch {}
    return !1
}

function gc(e) {
    if (!ao || !e || typeof e != "object") return !1;
    try {
        return ao.call(e), !0
    } catch {}
    return !1
}

function _c(e) {
    if (!Is || !e || typeof e != "object") return !1;
    try {
        Is.call(e);
        try {
            Cs.call(e)
        } catch {
            return !0
        }
        return e instanceof Set
    } catch {}
    return !1
}

function yc(e) {
    if (!Mi || !e || typeof e != "object") return !1;
    try {
        Mi.call(e, Mi);
        try {
            Ri.call(e, Ri)
        } catch {
            return !0
        }
        return e instanceof WeakSet
    } catch {}
    return !1
}

function vc(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement < "u" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
}

function Da(e, t) {
    if (e.length > t.maxStringLength) {
        var i = e.length - t.maxStringLength,
            s = "... " + i + " more character" + (i > 1 ? "s" : "");
        return Da(Rn.call(e, 0, t.maxStringLength), t) + s
    }
    var r = ye.call(ye.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, xc);
    return Pa(r, "single", t)
}

function xc(e) {
    var t = e.charCodeAt(0),
        i = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
        } [t];
    return i ? "\\" + i : "\\x" + (t < 16 ? "0" : "") + ic.call(t.toString(16))
}

function vi(e) {
    return "Object(" + e + ")"
}

function lr(e) {
    return e + " { ? }"
}

function _o(e, t, i, s) {
    var r = s ? jr(i, s) : te.call(i, ", ");
    return e + " (" + t + ") {" + r + "}"
}

function bc(e) {
    for (var t = 0; t < e.length; t++)
        if (Ma(e[t], `
`) >= 0) return !1;
    return !0
}

function Ec(e, t) {
    var i;
    if (e.indent === "	") i = "	";
    else if (typeof e.indent == "number" && e.indent > 0) i = te.call(Array(e.indent + 1), " ");
    else return null;
    return {
        base: i,
        prev: te.call(Array(t + 1), i)
    }
}

function jr(e, t) {
    if (e.length === 0) return "";
    var i = `
` + t.prev + t.base;
    return i + te.call(e, "," + i) + `
` + t.prev
}

function Ki(e, t) {
    var i = Wr(e),
        s = [];
    if (i) {
        s.length = e.length;
        for (var r = 0; r < e.length; r++) s[r] = ge(e, r) ? t(e[r], e) : ""
    }
    var n = typeof hr == "function" ? hr(e) : [],
        o;
    if (di) {
        o = {};
        for (var a = 0; a < n.length; a++) o["$" + n[a]] = n[a]
    }
    for (var h in e) ge(e, h) && (i && String(Number(h)) === h && h < e.length || di && o["$" + h] instanceof Symbol || (Ca.call(/[^\w$]/, h) ? s.push(t(h, e) + ": " + t(e[h], e)) : s.push(h + ": " + t(e[h], e))));
    if (typeof hr == "function")
        for (var l = 0; l < n.length; l++) Ia.call(e, n[l]) && s.push("[" + t(n[l]) + "]: " + t(e[n[l]], e));
    return s
}
var Mn = Cn,
    gi = zl,
    Tc = rc,
    wc = Mn("%TypeError%"),
    Zi = Mn("%WeakMap%", !0),
    Qi = Mn("%Map%", !0),
    Sc = gi("WeakMap.prototype.get", !0),
    Ac = gi("WeakMap.prototype.set", !0),
    Cc = gi("WeakMap.prototype.has", !0),
    Ic = gi("Map.prototype.get", !0),
    Pc = gi("Map.prototype.set", !0),
    Rc = gi("Map.prototype.has", !0),
    Dn = function(e, t) {
        for (var i = e, s;
            (s = i.next) !== null; i = s)
            if (s.key === t) return i.next = s.next, s.next = e.next, e.next = s, s
    },
    Mc = function(e, t) {
        var i = Dn(e, t);
        return i && i.value
    },
    Dc = function(e, t, i) {
        var s = Dn(e, t);
        s ? s.value = i : e.next = {
            key: t,
            next: e.next,
            value: i
        }
    },
    Bc = function(e, t) {
        return !!Dn(e, t)
    },
    Fc = function() {
        var t, i, s, r = {
            assert: function(n) {
                if (!r.has(n)) throw new wc("Side channel does not contain " + Tc(n))
            },
            get: function(n) {
                if (Zi && n && (typeof n == "object" || typeof n == "function")) {
                    if (t) return Sc(t, n)
                } else if (Qi) {
                    if (i) return Ic(i, n)
                } else if (s) return Mc(s, n)
            },
            has: function(n) {
                if (Zi && n && (typeof n == "object" || typeof n == "function")) {
                    if (t) return Cc(t, n)
                } else if (Qi) {
                    if (i) return Rc(i, n)
                } else if (s) return Bc(s, n);
                return !1
            },
            set: function(n, o) {
                Zi && n && (typeof n == "object" || typeof n == "function") ? (t || (t = new Zi), Ac(t, n, o)) : Qi ? (i || (i = new Qi), Pc(i, n, o)) : (s || (s = {
                    key: {},
                    next: null
                }), Dc(s, n, o))
            }
        };
        return r
    },
    Oc = String.prototype.replace,
    Lc = /%20/g,
    cr = {
        RFC1738: "RFC1738",
        RFC3986: "RFC3986"
    },
    Bn = {
        default: cr.RFC3986,
        formatters: {
            RFC1738: function(e) {
                return Oc.call(e, Lc, "+")
            },
            RFC3986: function(e) {
                return String(e)
            }
        },
        RFC1738: cr.RFC1738,
        RFC3986: cr.RFC3986
    },
    Nc = Bn,
    ur = Object.prototype.hasOwnProperty,
    Fe = Array.isArray,
    Kt = function() {
        for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
        return e
    }(),
    Uc = function(t) {
        for (; t.length > 1;) {
            var i = t.pop(),
                s = i.obj[i.prop];
            if (Fe(s)) {
                for (var r = [], n = 0; n < s.length; ++n) typeof s[n] < "u" && r.push(s[n]);
                i.obj[i.prop] = r
            }
        }
    },
    Ba = function(t, i) {
        for (var s = i && i.plainObjects ? Object.create(null) : {}, r = 0; r < t.length; ++r) typeof t[r] < "u" && (s[r] = t[r]);
        return s
    },
    kc = function e(t, i, s) {
        if (!i) return t;
        if (typeof i != "object") {
            if (Fe(t)) t.push(i);
            else if (t && typeof t == "object")(s && (s.plainObjects || s.allowPrototypes) || !ur.call(Object.prototype, i)) && (t[i] = !0);
            else return [t, i];
            return t
        }
        if (!t || typeof t != "object") return [t].concat(i);
        var r = t;
        return Fe(t) && !Fe(i) && (r = Ba(t, s)), Fe(t) && Fe(i) ? (i.forEach(function(n, o) {
            if (ur.call(t, o)) {
                var a = t[o];
                a && typeof a == "object" && n && typeof n == "object" ? t[o] = e(a, n, s) : t.push(n)
            } else t[o] = n
        }), t) : Object.keys(i).reduce(function(n, o) {
            var a = i[o];
            return ur.call(n, o) ? n[o] = e(n[o], a, s) : n[o] = a, n
        }, r)
    },
    Gc = function(t, i) {
        return Object.keys(i).reduce(function(s, r) {
            return s[r] = i[r], s
        }, t)
    },
    Hc = function(e, t, i) {
        var s = e.replace(/\+/g, " ");
        if (i === "iso-8859-1") return s.replace(/%[0-9a-f]{2}/gi, unescape);
        try {
            return decodeURIComponent(s)
        } catch {
            return s
        }
    },
    $c = function(t, i, s, r, n) {
        if (t.length === 0) return t;
        var o = t;
        if (typeof t == "symbol" ? o = Symbol.prototype.toString.call(t) : typeof t != "string" && (o = String(t)), s === "iso-8859-1") return escape(o).replace(/%u[0-9a-f]{4}/gi, function(c) {
            return "%26%23" + parseInt(c.slice(2), 16) + "%3B"
        });
        for (var a = "", h = 0; h < o.length; ++h) {
            var l = o.charCodeAt(h);
            if (l === 45 || l === 46 || l === 95 || l === 126 || l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || n === Nc.RFC1738 && (l === 40 || l === 41)) {
                a += o.charAt(h);
                continue
            }
            if (l < 128) {
                a = a + Kt[l];
                continue
            }
            if (l < 2048) {
                a = a + (Kt[192 | l >> 6] + Kt[128 | l & 63]);
                continue
            }
            if (l < 55296 || l >= 57344) {
                a = a + (Kt[224 | l >> 12] + Kt[128 | l >> 6 & 63] + Kt[128 | l & 63]);
                continue
            }
            h += 1, l = 65536 + ((l & 1023) << 10 | o.charCodeAt(h) & 1023), a += Kt[240 | l >> 18] + Kt[128 | l >> 12 & 63] + Kt[128 | l >> 6 & 63] + Kt[128 | l & 63]
        }
        return a
    },
    Vc = function(t) {
        for (var i = [{
                obj: {
                    o: t
                },
                prop: "o"
            }], s = [], r = 0; r < i.length; ++r)
            for (var n = i[r], o = n.obj[n.prop], a = Object.keys(o), h = 0; h < a.length; ++h) {
                var l = a[h],
                    c = o[l];
                typeof c == "object" && c !== null && s.indexOf(c) === -1 && (i.push({
                    obj: o,
                    prop: l
                }), s.push(c))
            }
        return Uc(i), t
    },
    Xc = function(t) {
        return Object.prototype.toString.call(t) === "[object RegExp]"
    },
    zc = function(t) {
        return !t || typeof t != "object" ? !1 : !!(t.constructor && t.constructor.isBuffer && t.constructor.isBuffer(t))
    },
    Wc = function(t, i) {
        return [].concat(t, i)
    },
    jc = function(t, i) {
        if (Fe(t)) {
            for (var s = [], r = 0; r < t.length; r += 1) s.push(i(t[r]));
            return s
        }
        return i(t)
    },
    Fa = {
        arrayToObject: Ba,
        assign: Gc,
        combine: Wc,
        compact: Vc,
        decode: Hc,
        encode: $c,
        isBuffer: zc,
        isRegExp: Xc,
        maybeMap: jc,
        merge: kc
    },
    Oa = Fc,
    _s = Fa,
    Di = Bn,
    Yc = Object.prototype.hasOwnProperty,
    yo = {
        brackets: function(t) {
            return t + "[]"
        },
        comma: "comma",
        indices: function(t, i) {
            return t + "[" + i + "]"
        },
        repeat: function(t) {
            return t
        }
    },
    le = Array.isArray,
    qc = Array.prototype.push,
    La = function(e, t) {
        qc.apply(e, le(t) ? t : [t])
    },
    Kc = Date.prototype.toISOString,
    vo = Di.default,
    wt = {
        addQueryPrefix: !1,
        allowDots: !1,
        charset: "utf-8",
        charsetSentinel: !1,
        delimiter: "&",
        encode: !0,
        encoder: _s.encode,
        encodeValuesOnly: !1,
        format: vo,
        formatter: Di.formatters[vo],
        indices: !1,
        serializeDate: function(t) {
            return Kc.call(t)
        },
        skipNulls: !1,
        strictNullHandling: !1
    },
    Zc = function(t) {
        return typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || typeof t == "bigint"
    },
    dr = {},
    Qc = function e(t, i, s, r, n, o, a, h, l, c, u, d, f, p, g, m) {
        for (var y = t, v = m, _ = 0, x = !1;
            (v = v.get(dr)) !== void 0 && !x;) {
            var T = v.get(t);
            if (_ += 1, typeof T < "u") {
                if (T === _) throw new RangeError("Cyclic object value");
                x = !0
            }
            typeof v.get(dr) > "u" && (_ = 0)
        }
        if (typeof h == "function" ? y = h(i, y) : y instanceof Date ? y = u(y) : s === "comma" && le(y) && (y = _s.maybeMap(y, function(X) {
                return X instanceof Date ? u(X) : X
            })), y === null) {
            if (n) return a && !p ? a(i, wt.encoder, g, "key", d) : i;
            y = ""
        }
        if (Zc(y) || _s.isBuffer(y)) {
            if (a) {
                var P = p ? i : a(i, wt.encoder, g, "key", d);
                return [f(P) + "=" + f(a(y, wt.encoder, g, "value", d))]
            }
            return [f(i) + "=" + f(String(y))]
        }
        var S = [];
        if (typeof y > "u") return S;
        var E;
        if (s === "comma" && le(y)) p && a && (y = _s.maybeMap(y, a)), E = [{
            value: y.length > 0 ? y.join(",") || null : void 0
        }];
        else if (le(h)) E = h;
        else {
            var B = Object.keys(y);
            E = l ? B.sort(l) : B
        }
        for (var N = r && le(y) && y.length === 1 ? i + "[]" : i, I = 0; I < E.length; ++I) {
            var M = E[I],
                w = typeof M == "object" && typeof M.value < "u" ? M.value : y[M];
            if (!(o && w === null)) {
                var b = le(y) ? typeof s == "function" ? s(N, M) : N : N + (c ? "." + M : "[" + M + "]");
                m.set(t, _);
                var $ = Oa();
                $.set(dr, m), La(S, e(w, b, s, r, n, o, s === "comma" && p && le(y) ? null : a, h, l, c, u, d, f, p, g, $))
            }
        }
        return S
    },
    Jc = function(t) {
        if (!t) return wt;
        if (t.encoder !== null && typeof t.encoder < "u" && typeof t.encoder != "function") throw new TypeError("Encoder has to be a function.");
        var i = t.charset || wt.charset;
        if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var s = Di.default;
        if (typeof t.format < "u") {
            if (!Yc.call(Di.formatters, t.format)) throw new TypeError("Unknown format option provided.");
            s = t.format
        }
        var r = Di.formatters[s],
            n = wt.filter;
        return (typeof t.filter == "function" || le(t.filter)) && (n = t.filter), {
            addQueryPrefix: typeof t.addQueryPrefix == "boolean" ? t.addQueryPrefix : wt.addQueryPrefix,
            allowDots: typeof t.allowDots > "u" ? wt.allowDots : !!t.allowDots,
            charset: i,
            charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : wt.charsetSentinel,
            delimiter: typeof t.delimiter > "u" ? wt.delimiter : t.delimiter,
            encode: typeof t.encode == "boolean" ? t.encode : wt.encode,
            encoder: typeof t.encoder == "function" ? t.encoder : wt.encoder,
            encodeValuesOnly: typeof t.encodeValuesOnly == "boolean" ? t.encodeValuesOnly : wt.encodeValuesOnly,
            filter: n,
            format: s,
            formatter: r,
            serializeDate: typeof t.serializeDate == "function" ? t.serializeDate : wt.serializeDate,
            skipNulls: typeof t.skipNulls == "boolean" ? t.skipNulls : wt.skipNulls,
            sort: typeof t.sort == "function" ? t.sort : null,
            strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : wt.strictNullHandling
        }
    },
    tu = function(e, t) {
        var i = e,
            s = Jc(t),
            r, n;
        typeof s.filter == "function" ? (n = s.filter, i = n("", i)) : le(s.filter) && (n = s.filter, r = n);
        var o = [];
        if (typeof i != "object" || i === null) return "";
        var a;
        t && t.arrayFormat in yo ? a = t.arrayFormat : t && "indices" in t ? a = t.indices ? "indices" : "repeat" : a = "indices";
        var h = yo[a];
        if (t && "commaRoundTrip" in t && typeof t.commaRoundTrip != "boolean") throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
        var l = h === "comma" && t && t.commaRoundTrip;
        r || (r = Object.keys(i)), s.sort && r.sort(s.sort);
        for (var c = Oa(), u = 0; u < r.length; ++u) {
            var d = r[u];
            s.skipNulls && i[d] === null || La(o, Qc(i[d], d, h, l, s.strictNullHandling, s.skipNulls, s.encode ? s.encoder : null, s.filter, s.sort, s.allowDots, s.serializeDate, s.format, s.formatter, s.encodeValuesOnly, s.charset, c))
        }
        var f = o.join(s.delimiter),
            p = s.addQueryPrefix === !0 ? "?" : "";
        return s.charsetSentinel && (s.charset === "iso-8859-1" ? p += "utf8=%26%2310003%3B&" : p += "utf8=%E2%9C%93&"), f.length > 0 ? p + f : ""
    },
    fi = Fa,
    Yr = Object.prototype.hasOwnProperty,
    eu = Array.isArray,
    mt = {
        allowDots: !1,
        allowPrototypes: !1,
        allowSparse: !1,
        arrayLimit: 20,
        charset: "utf-8",
        charsetSentinel: !1,
        comma: !1,
        decoder: fi.decode,
        delimiter: "&",
        depth: 5,
        ignoreQueryPrefix: !1,
        interpretNumericEntities: !1,
        parameterLimit: 1e3,
        parseArrays: !0,
        plainObjects: !1,
        strictNullHandling: !1
    },
    iu = function(e) {
        return e.replace(/&#(\d+);/g, function(t, i) {
            return String.fromCharCode(parseInt(i, 10))
        })
    },
    Na = function(e, t) {
        return e && typeof e == "string" && t.comma && e.indexOf(",") > -1 ? e.split(",") : e
    },
    su = "utf8=%26%2310003%3B",
    ru = "utf8=%E2%9C%93",
    nu = function(t, i) {
        var s = {
                __proto__: null
            },
            r = i.ignoreQueryPrefix ? t.replace(/^\?/, "") : t,
            n = i.parameterLimit === 1 / 0 ? void 0 : i.parameterLimit,
            o = r.split(i.delimiter, n),
            a = -1,
            h, l = i.charset;
        if (i.charsetSentinel)
            for (h = 0; h < o.length; ++h) o[h].indexOf("utf8=") === 0 && (o[h] === ru ? l = "utf-8" : o[h] === su && (l = "iso-8859-1"), a = h, h = o.length);
        for (h = 0; h < o.length; ++h)
            if (h !== a) {
                var c = o[h],
                    u = c.indexOf("]="),
                    d = u === -1 ? c.indexOf("=") : u + 1,
                    f, p;
                d === -1 ? (f = i.decoder(c, mt.decoder, l, "key"), p = i.strictNullHandling ? null : "") : (f = i.decoder(c.slice(0, d), mt.decoder, l, "key"), p = fi.maybeMap(Na(c.slice(d + 1), i), function(g) {
                    return i.decoder(g, mt.decoder, l, "value")
                })), p && i.interpretNumericEntities && l === "iso-8859-1" && (p = iu(p)), c.indexOf("[]=") > -1 && (p = eu(p) ? [p] : p), Yr.call(s, f) ? s[f] = fi.combine(s[f], p) : s[f] = p
            } return s
    },
    ou = function(e, t, i, s) {
        for (var r = s ? t : Na(t, i), n = e.length - 1; n >= 0; --n) {
            var o, a = e[n];
            if (a === "[]" && i.parseArrays) o = [].concat(r);
            else {
                o = i.plainObjects ? Object.create(null) : {};
                var h = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a,
                    l = parseInt(h, 10);
                !i.parseArrays && h === "" ? o = {
                    0: r
                } : !isNaN(l) && a !== h && String(l) === h && l >= 0 && i.parseArrays && l <= i.arrayLimit ? (o = [], o[l] = r) : h !== "__proto__" && (o[h] = r)
            }
            r = o
        }
        return r
    },
    au = function(t, i, s, r) {
        if (t) {
            var n = s.allowDots ? t.replace(/\.([^.[]+)/g, "[$1]") : t,
                o = /(\[[^[\]]*])/,
                a = /(\[[^[\]]*])/g,
                h = s.depth > 0 && o.exec(n),
                l = h ? n.slice(0, h.index) : n,
                c = [];
            if (l) {
                if (!s.plainObjects && Yr.call(Object.prototype, l) && !s.allowPrototypes) return;
                c.push(l)
            }
            for (var u = 0; s.depth > 0 && (h = a.exec(n)) !== null && u < s.depth;) {
                if (u += 1, !s.plainObjects && Yr.call(Object.prototype, h[1].slice(1, -1)) && !s.allowPrototypes) return;
                c.push(h[1])
            }
            return h && c.push("[" + n.slice(h.index) + "]"), ou(c, i, s, r)
        }
    },
    hu = function(t) {
        if (!t) return mt;
        if (t.decoder !== null && t.decoder !== void 0 && typeof t.decoder != "function") throw new TypeError("Decoder has to be a function.");
        if (typeof t.charset < "u" && t.charset !== "utf-8" && t.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
        var i = typeof t.charset > "u" ? mt.charset : t.charset;
        return {
            allowDots: typeof t.allowDots > "u" ? mt.allowDots : !!t.allowDots,
            allowPrototypes: typeof t.allowPrototypes == "boolean" ? t.allowPrototypes : mt.allowPrototypes,
            allowSparse: typeof t.allowSparse == "boolean" ? t.allowSparse : mt.allowSparse,
            arrayLimit: typeof t.arrayLimit == "number" ? t.arrayLimit : mt.arrayLimit,
            charset: i,
            charsetSentinel: typeof t.charsetSentinel == "boolean" ? t.charsetSentinel : mt.charsetSentinel,
            comma: typeof t.comma == "boolean" ? t.comma : mt.comma,
            decoder: typeof t.decoder == "function" ? t.decoder : mt.decoder,
            delimiter: typeof t.delimiter == "string" || fi.isRegExp(t.delimiter) ? t.delimiter : mt.delimiter,
            depth: typeof t.depth == "number" || t.depth === !1 ? +t.depth : mt.depth,
            ignoreQueryPrefix: t.ignoreQueryPrefix === !0,
            interpretNumericEntities: typeof t.interpretNumericEntities == "boolean" ? t.interpretNumericEntities : mt.interpretNumericEntities,
            parameterLimit: typeof t.parameterLimit == "number" ? t.parameterLimit : mt.parameterLimit,
            parseArrays: t.parseArrays !== !1,
            plainObjects: typeof t.plainObjects == "boolean" ? t.plainObjects : mt.plainObjects,
            strictNullHandling: typeof t.strictNullHandling == "boolean" ? t.strictNullHandling : mt.strictNullHandling
        }
    },
    lu = function(e, t) {
        var i = hu(t);
        if (e === "" || e === null || typeof e > "u") return i.plainObjects ? Object.create(null) : {};
        for (var s = typeof e == "string" ? nu(e, i) : e, r = i.plainObjects ? Object.create(null) : {}, n = Object.keys(s), o = 0; o < n.length; ++o) {
            var a = n[o],
                h = au(a, s[a], i, typeof e == "string");
            r = fi.merge(r, h, i)
        }
        return i.allowSparse === !0 ? r : fi.compact(r)
    },
    cu = tu,
    uu = lu,
    du = Bn,
    fu = {
        formats: du,
        parse: uu,
        stringify: cu
    },
    pu = yl;

function Xt() {
    this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
}
var mu = /^([a-z0-9.+-]+:)/i,
    gu = /:[0-9]*$/,
    _u = /^(\/\/?(?!\/)[^?\s]*)(\?[^\s]*)?$/,
    yu = ["<", ">", '"', "`", " ", "\r", `
`, "	"],
    vu = ["{", "}", "|", "\\", "^", "`"].concat(yu),
    qr = ["'"].concat(vu),
    xo = ["%", "/", "?", ";", "#"].concat(qr),
    bo = ["/", "?", "#"],
    xu = 255,
    Eo = /^[+a-z0-9A-Z_-]{0,63}$/,
    bu = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    Eu = {
        javascript: !0,
        "javascript:": !0
    },
    Kr = {
        javascript: !0,
        "javascript:": !0
    },
    oi = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
    },
    Zr = fu;

function $s(e, t, i) {
    if (e && typeof e == "object" && e instanceof Xt) return e;
    var s = new Xt;
    return s.parse(e, t, i), s
}
Xt.prototype.parse = function(e, t, i) {
    if (typeof e != "string") throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
    var s = e.indexOf("?"),
        r = s !== -1 && s < e.indexOf("#") ? "?" : "#",
        n = e.split(r),
        o = /\\/g;
    n[0] = n[0].replace(o, "/"), e = n.join(r);
    var a = e;
    if (a = a.trim(), !i && e.split("#").length === 1) {
        var h = _u.exec(a);
        if (h) return this.path = a, this.href = a, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = Zr.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
    }
    var l = mu.exec(a);
    if (l) {
        l = l[0];
        var c = l.toLowerCase();
        this.protocol = c, a = a.substr(l.length)
    }
    if (i || l || a.match(/^\/\/[^@/]+@[^@/]+/)) {
        var u = a.substr(0, 2) === "//";
        u && !(l && Kr[l]) && (a = a.substr(2), this.slashes = !0)
    }
    if (!Kr[l] && (u || l && !oi[l])) {
        for (var d = -1, f = 0; f < bo.length; f++) {
            var p = a.indexOf(bo[f]);
            p !== -1 && (d === -1 || p < d) && (d = p)
        }
        var g, m;
        d === -1 ? m = a.lastIndexOf("@") : m = a.lastIndexOf("@", d), m !== -1 && (g = a.slice(0, m), a = a.slice(m + 1), this.auth = decodeURIComponent(g)), d = -1;
        for (var f = 0; f < xo.length; f++) {
            var p = a.indexOf(xo[f]);
            p !== -1 && (d === -1 || p < d) && (d = p)
        }
        d === -1 && (d = a.length), this.host = a.slice(0, d), a = a.slice(d), this.parseHost(), this.hostname = this.hostname || "";
        var y = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!y)
            for (var v = this.hostname.split(/\./), f = 0, _ = v.length; f < _; f++) {
                var x = v[f];
                if (x && !x.match(Eo)) {
                    for (var T = "", P = 0, S = x.length; P < S; P++) x.charCodeAt(P) > 127 ? T += "x" : T += x[P];
                    if (!T.match(Eo)) {
                        var E = v.slice(0, f),
                            B = v.slice(f + 1),
                            N = x.match(bu);
                        N && (E.push(N[1]), B.unshift(N[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = E.join(".");
                        break
                    }
                }
            }
        this.hostname.length > xu ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), y || (this.hostname = pu.toASCII(this.hostname));
        var I = this.port ? ":" + this.port : "",
            M = this.hostname || "";
        this.host = M + I, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), a[0] !== "/" && (a = "/" + a))
    }
    if (!Eu[c])
        for (var f = 0, _ = qr.length; f < _; f++) {
            var w = qr[f];
            if (a.indexOf(w) !== -1) {
                var b = encodeURIComponent(w);
                b === w && (b = escape(w)), a = a.split(w).join(b)
            }
        }
    var $ = a.indexOf("#");
    $ !== -1 && (this.hash = a.substr($), a = a.slice(0, $));
    var X = a.indexOf("?");
    if (X !== -1 ? (this.search = a.substr(X), this.query = a.substr(X + 1), t && (this.query = Zr.parse(this.query)), a = a.slice(0, X)) : t && (this.search = "", this.query = {}), a && (this.pathname = a), oi[c] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var I = this.pathname || "",
            F = this.search || "";
        this.path = I + F
    }
    return this.href = this.format(), this
};

function Tu(e) {
    return typeof e == "string" && (e = $s(e)), e instanceof Xt ? e.format() : Xt.prototype.format.call(e)
}
Xt.prototype.format = function() {
    var e = this.auth || "";
    e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
    var t = this.protocol || "",
        i = this.pathname || "",
        s = this.hash || "",
        r = !1,
        n = "";
    this.host ? r = e + this.host : this.hostname && (r = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && typeof this.query == "object" && Object.keys(this.query).length && (n = Zr.stringify(this.query));
    var o = this.search || n && "?" + n || "";
    return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || oi[t]) && r !== !1 ? (r = "//" + (r || ""), i && i.charAt(0) !== "/" && (i = "/" + i)) : r || (r = ""), s && s.charAt(0) !== "#" && (s = "#" + s), o && o.charAt(0) !== "?" && (o = "?" + o), i = i.replace(/[?#]/g, function(a) {
        return encodeURIComponent(a)
    }), o = o.replace("#", "%23"), t + r + i + o + s
};

function wu(e, t) {
    return $s(e, !1, !0).resolve(t)
}
Xt.prototype.resolve = function(e) {
    return this.resolveObject($s(e, !1, !0)).format()
};
Xt.prototype.resolveObject = function(e) {
    if (typeof e == "string") {
        var t = new Xt;
        t.parse(e, !1, !0), e = t
    }
    for (var i = new Xt, s = Object.keys(this), r = 0; r < s.length; r++) {
        var n = s[r];
        i[n] = this[n]
    }
    if (i.hash = e.hash, e.href === "") return i.href = i.format(), i;
    if (e.slashes && !e.protocol) {
        for (var o = Object.keys(e), a = 0; a < o.length; a++) {
            var h = o[a];
            h !== "protocol" && (i[h] = e[h])
        }
        return oi[i.protocol] && i.hostname && !i.pathname && (i.pathname = "/", i.path = i.pathname), i.href = i.format(), i
    }
    if (e.protocol && e.protocol !== i.protocol) {
        if (!oi[e.protocol]) {
            for (var l = Object.keys(e), c = 0; c < l.length; c++) {
                var u = l[c];
                i[u] = e[u]
            }
            return i.href = i.format(), i
        }
        if (i.protocol = e.protocol, !e.host && !Kr[e.protocol]) {
            for (var _ = (e.pathname || "").split("/"); _.length && !(e.host = _.shift()););
            e.host || (e.host = ""), e.hostname || (e.hostname = ""), _[0] !== "" && _.unshift(""), _.length < 2 && _.unshift(""), i.pathname = _.join("/")
        } else i.pathname = e.pathname;
        if (i.search = e.search, i.query = e.query, i.host = e.host || "", i.auth = e.auth, i.hostname = e.hostname || e.host, i.port = e.port, i.pathname || i.search) {
            var d = i.pathname || "",
                f = i.search || "";
            i.path = d + f
        }
        return i.slashes = i.slashes || e.slashes, i.href = i.format(), i
    }
    var p = i.pathname && i.pathname.charAt(0) === "/",
        g = e.host || e.pathname && e.pathname.charAt(0) === "/",
        m = g || p || i.host && e.pathname,
        y = m,
        v = i.pathname && i.pathname.split("/") || [],
        _ = e.pathname && e.pathname.split("/") || [],
        x = i.protocol && !oi[i.protocol];
    if (x && (i.hostname = "", i.port = null, i.host && (v[0] === "" ? v[0] = i.host : v.unshift(i.host)), i.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && (_[0] === "" ? _[0] = e.host : _.unshift(e.host)), e.host = null), m = m && (_[0] === "" || v[0] === "")), g) i.host = e.host || e.host === "" ? e.host : i.host, i.hostname = e.hostname || e.hostname === "" ? e.hostname : i.hostname, i.search = e.search, i.query = e.query, v = _;
    else if (_.length) v || (v = []), v.pop(), v = v.concat(_), i.search = e.search, i.query = e.query;
    else if (e.search != null) {
        if (x) {
            i.host = v.shift(), i.hostname = i.host;
            var T = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
            T && (i.auth = T.shift(), i.hostname = T.shift(), i.host = i.hostname)
        }
        return i.search = e.search, i.query = e.query, (i.pathname !== null || i.search !== null) && (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
    }
    if (!v.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
    for (var P = v.slice(-1)[0], S = (i.host || e.host || v.length > 1) && (P === "." || P === "..") || P === "", E = 0, B = v.length; B >= 0; B--) P = v[B], P === "." ? v.splice(B, 1) : P === ".." ? (v.splice(B, 1), E++) : E && (v.splice(B, 1), E--);
    if (!m && !y)
        for (; E--; E) v.unshift("..");
    m && v[0] !== "" && (!v[0] || v[0].charAt(0) !== "/") && v.unshift(""), S && v.join("/").substr(-1) !== "/" && v.push("");
    var N = v[0] === "" || v[0] && v[0].charAt(0) === "/";
    if (x) {
        i.hostname = N ? "" : v.length ? v.shift() : "", i.host = i.hostname;
        var T = i.host && i.host.indexOf("@") > 0 ? i.host.split("@") : !1;
        T && (i.auth = T.shift(), i.hostname = T.shift(), i.host = i.hostname)
    }
    return m = m || i.host && v.length, m && !N && v.unshift(""), v.length > 0 ? i.pathname = v.join("/") : (i.pathname = null, i.path = null), (i.pathname !== null || i.search !== null) && (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = e.auth || i.auth, i.slashes = i.slashes || e.slashes, i.href = i.format(), i
};
Xt.prototype.parseHost = function() {
    var e = this.host,
        t = gu.exec(e);
    t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
};
var Su = $s,
    Au = wu,
    Cu = Tu;
const Iu = {
    parse: Su,
    format: Cu,
    resolve: Au
};

function Ot(e) {
    if (typeof e != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(e)}`)
}

function xi(e) {
    return e.split("?")[0].split("#")[0]
}

function Pu(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

function Ru(e, t, i) {
    return e.replace(new RegExp(Pu(t), "g"), i)
}

function Mu(e, t) {
    let i = "",
        s = 0,
        r = -1,
        n = 0,
        o = -1;
    for (let a = 0; a <= e.length; ++a) {
        if (a < e.length) o = e.charCodeAt(a);
        else {
            if (o === 47) break;
            o = 47
        }
        if (o === 47) {
            if (!(r === a - 1 || n === 1))
                if (r !== a - 1 && n === 2) {
                    if (i.length < 2 || s !== 2 || i.charCodeAt(i.length - 1) !== 46 || i.charCodeAt(i.length - 2) !== 46) {
                        if (i.length > 2) {
                            const h = i.lastIndexOf("/");
                            if (h !== i.length - 1) {
                                h === -1 ? (i = "", s = 0) : (i = i.slice(0, h), s = i.length - 1 - i.lastIndexOf("/")), r = a, n = 0;
                                continue
                            }
                        } else if (i.length === 2 || i.length === 1) {
                            i = "", s = 0, r = a, n = 0;
                            continue
                        }
                    }
                    t && (i.length > 0 ? i += "/.." : i = "..", s = 2)
                } else i.length > 0 ? i += `/${e.slice(r+1,a)}` : i = e.slice(r + 1, a), s = a - r - 1;
            r = a, n = 0
        } else o === 46 && n !== -1 ? ++n : n = -1
    }
    return i
}
const At = {
        toPosix(e) {
            return Ru(e, "\\", "/")
        },
        isUrl(e) {
            return /^https?:/.test(this.toPosix(e))
        },
        isDataUrl(e) {
            return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(e)
        },
        hasProtocol(e) {
            return /^[^/:]+:\//.test(this.toPosix(e))
        },
        getProtocol(e) {
            Ot(e), e = this.toPosix(e);
            let t = "";
            const i = /^file:\/\/\//.exec(e),
                s = /^[^/:]+:\/\//.exec(e),
                r = /^[^/:]+:\//.exec(e);
            if (i || s || r) {
                const n = (i == null ? void 0 : i[0]) || (s == null ? void 0 : s[0]) || (r == null ? void 0 : r[0]);
                t = n, e = e.slice(n.length)
            }
            return t
        },
        toAbsolute(e, t, i) {
            if (this.isDataUrl(e)) return e;
            const s = xi(this.toPosix(t ?? R.ADAPTER.getBaseUrl())),
                r = xi(this.toPosix(i ?? this.rootname(s)));
            return Ot(e), e = this.toPosix(e), e.startsWith("/") ? At.join(r, e.slice(1)) : this.isAbsolute(e) ? e : this.join(s, e)
        },
        normalize(e) {
            if (e = this.toPosix(e), Ot(e), e.length === 0) return ".";
            let t = "";
            const i = e.startsWith("/");
            this.hasProtocol(e) && (t = this.rootname(e), e = e.slice(t.length));
            const s = e.endsWith("/");
            return e = Mu(e, !1), e.length > 0 && s && (e += "/"), i ? `/${e}` : t + e
        },
        isAbsolute(e) {
            return Ot(e), e = this.toPosix(e), this.hasProtocol(e) ? !0 : e.startsWith("/")
        },
        join(...e) {
            if (e.length === 0) return ".";
            let t;
            for (let i = 0; i < e.length; ++i) {
                const s = e[i];
                if (Ot(s), s.length > 0)
                    if (t === void 0) t = s;
                    else {
                        const r = e[i - 1] ?? "";
                        this.extname(r) ? t += `/../${s}` : t += `/${s}`
                    }
            }
            return t === void 0 ? "." : this.normalize(t)
        },
        dirname(e) {
            if (Ot(e), e.length === 0) return ".";
            e = this.toPosix(e);
            let t = e.charCodeAt(0);
            const i = t === 47;
            let s = -1,
                r = !0;
            const n = this.getProtocol(e),
                o = e;
            e = e.slice(n.length);
            for (let a = e.length - 1; a >= 1; --a)
                if (t = e.charCodeAt(a), t === 47) {
                    if (!r) {
                        s = a;
                        break
                    }
                } else r = !1;
            return s === -1 ? i ? "/" : this.isUrl(o) ? n + e : n : i && s === 1 ? "//" : n + e.slice(0, s)
        },
        rootname(e) {
            Ot(e), e = this.toPosix(e);
            let t = "";
            if (e.startsWith("/") ? t = "/" : t = this.getProtocol(e), this.isUrl(e)) {
                const i = e.indexOf("/", t.length);
                i !== -1 ? t = e.slice(0, i) : t = e, t.endsWith("/") || (t += "/")
            }
            return t
        },
        basename(e, t) {
            Ot(e), t && Ot(t), e = xi(this.toPosix(e));
            let i = 0,
                s = -1,
                r = !0,
                n;
            if (t !== void 0 && t.length > 0 && t.length <= e.length) {
                if (t.length === e.length && t === e) return "";
                let o = t.length - 1,
                    a = -1;
                for (n = e.length - 1; n >= 0; --n) {
                    const h = e.charCodeAt(n);
                    if (h === 47) {
                        if (!r) {
                            i = n + 1;
                            break
                        }
                    } else a === -1 && (r = !1, a = n + 1), o >= 0 && (h === t.charCodeAt(o) ? --o === -1 && (s = n) : (o = -1, s = a))
                }
                return i === s ? s = a : s === -1 && (s = e.length), e.slice(i, s)
            }
            for (n = e.length - 1; n >= 0; --n)
                if (e.charCodeAt(n) === 47) {
                    if (!r) {
                        i = n + 1;
                        break
                    }
                } else s === -1 && (r = !1, s = n + 1);
            return s === -1 ? "" : e.slice(i, s)
        },
        extname(e) {
            Ot(e), e = xi(this.toPosix(e));
            let t = -1,
                i = 0,
                s = -1,
                r = !0,
                n = 0;
            for (let o = e.length - 1; o >= 0; --o) {
                const a = e.charCodeAt(o);
                if (a === 47) {
                    if (!r) {
                        i = o + 1;
                        break
                    }
                    continue
                }
                s === -1 && (r = !1, s = o + 1), a === 46 ? t === -1 ? t = o : n !== 1 && (n = 1) : t !== -1 && (n = -1)
            }
            return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === i + 1 ? "" : e.slice(t, s)
        },
        parse(e) {
            Ot(e);
            const t = {
                root: "",
                dir: "",
                base: "",
                ext: "",
                name: ""
            };
            if (e.length === 0) return t;
            e = xi(this.toPosix(e));
            let i = e.charCodeAt(0);
            const s = this.isAbsolute(e);
            let r;
            t.root = this.rootname(e), s || this.hasProtocol(e) ? r = 1 : r = 0;
            let n = -1,
                o = 0,
                a = -1,
                h = !0,
                l = e.length - 1,
                c = 0;
            for (; l >= r; --l) {
                if (i = e.charCodeAt(l), i === 47) {
                    if (!h) {
                        o = l + 1;
                        break
                    }
                    continue
                }
                a === -1 && (h = !1, a = l + 1), i === 46 ? n === -1 ? n = l : c !== 1 && (c = 1) : n !== -1 && (c = -1)
            }
            return n === -1 || a === -1 || c === 0 || c === 1 && n === a - 1 && n === o + 1 ? a !== -1 && (o === 0 && s ? t.base = t.name = e.slice(1, a) : t.base = t.name = e.slice(o, a)) : (o === 0 && s ? (t.name = e.slice(1, n), t.base = e.slice(1, a)) : (t.name = e.slice(o, n), t.base = e.slice(o, a)), t.ext = e.slice(n, a)), t.dir = this.dirname(e), t
        },
        sep: "/",
        delimiter: ":"
    },
    To = {};

function Y(e, t, i = 3) {
    if (To[t]) return;
    let s = new Error().stack;
    typeof s > "u" ? console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`) : (s = s.split(`
`).splice(i).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
Deprecated since v${e}`), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
Deprecated since v${e}`), console.warn(s))), To[t] = !0
}
let fr;

function Du() {
    return typeof fr > "u" && (fr = function() {
        var i;
        const t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: R.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
            if (!R.ADAPTER.getWebGLRenderingContext()) return !1;
            const s = R.ADAPTER.createCanvas();
            let r = s.getContext("webgl", t) || s.getContext("experimental-webgl", t);
            const n = !!((i = r == null ? void 0 : r.getContextAttributes()) != null && i.stencil);
            if (r) {
                const o = r.getExtension("WEBGL_lose_context");
                o && o.loseContext()
            }
            return r = null, n
        } catch {
            return !1
        }
    }()), fr
}
var Bu = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
    },
    ae = function(e) {
        return typeof e == "string" ? e.length > 0 : typeof e == "number"
    },
    _t = function(e, t, i) {
        return t === void 0 && (t = 0), i === void 0 && (i = Math.pow(10, t)), Math.round(i * e) / i + 0
    },
    Ft = function(e, t, i) {
        return t === void 0 && (t = 0), i === void 0 && (i = 1), e > i ? i : e > t ? e : t
    },
    Ua = function(e) {
        return (e = isFinite(e) ? e % 360 : 0) > 0 ? e : e + 360
    },
    wo = function(e) {
        return {
            r: Ft(e.r, 0, 255),
            g: Ft(e.g, 0, 255),
            b: Ft(e.b, 0, 255),
            a: Ft(e.a)
        }
    },
    pr = function(e) {
        return {
            r: _t(e.r),
            g: _t(e.g),
            b: _t(e.b),
            a: _t(e.a, 3)
        }
    },
    Fu = /^#([0-9a-f]{3,8})$/i,
    Ji = function(e) {
        var t = e.toString(16);
        return t.length < 2 ? "0" + t : t
    },
    ka = function(e) {
        var t = e.r,
            i = e.g,
            s = e.b,
            r = e.a,
            n = Math.max(t, i, s),
            o = n - Math.min(t, i, s),
            a = o ? n === t ? (i - s) / o : n === i ? 2 + (s - t) / o : 4 + (t - i) / o : 0;
        return {
            h: 60 * (a < 0 ? a + 6 : a),
            s: n ? o / n * 100 : 0,
            v: n / 255 * 100,
            a: r
        }
    },
    Ga = function(e) {
        var t = e.h,
            i = e.s,
            s = e.v,
            r = e.a;
        t = t / 360 * 6, i /= 100, s /= 100;
        var n = Math.floor(t),
            o = s * (1 - i),
            a = s * (1 - (t - n) * i),
            h = s * (1 - (1 - t + n) * i),
            l = n % 6;
        return {
            r: 255 * [s, a, o, o, h, s][l],
            g: 255 * [h, s, s, a, o, o][l],
            b: 255 * [o, o, h, s, s, a][l],
            a: r
        }
    },
    So = function(e) {
        return {
            h: Ua(e.h),
            s: Ft(e.s, 0, 100),
            l: Ft(e.l, 0, 100),
            a: Ft(e.a)
        }
    },
    Ao = function(e) {
        return {
            h: _t(e.h),
            s: _t(e.s),
            l: _t(e.l),
            a: _t(e.a, 3)
        }
    },
    Co = function(e) {
        return Ga((i = (t = e).s, {
            h: t.h,
            s: (i *= ((s = t.l) < 50 ? s : 100 - s) / 100) > 0 ? 2 * i / (s + i) * 100 : 0,
            v: s + i,
            a: t.a
        }));
        var t, i, s
    },
    Bi = function(e) {
        return {
            h: (t = ka(e)).h,
            s: (r = (200 - (i = t.s)) * (s = t.v) / 100) > 0 && r < 200 ? i * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
            l: r / 2,
            a: t.a
        };
        var t, i, s, r
    },
    Ou = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    Lu = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    Nu = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    Uu = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
    Qr = {
        string: [
            [function(e) {
                var t = Fu.exec(e);
                return t ? (e = t[1]).length <= 4 ? {
                    r: parseInt(e[0] + e[0], 16),
                    g: parseInt(e[1] + e[1], 16),
                    b: parseInt(e[2] + e[2], 16),
                    a: e.length === 4 ? _t(parseInt(e[3] + e[3], 16) / 255, 2) : 1
                } : e.length === 6 || e.length === 8 ? {
                    r: parseInt(e.substr(0, 2), 16),
                    g: parseInt(e.substr(2, 2), 16),
                    b: parseInt(e.substr(4, 2), 16),
                    a: e.length === 8 ? _t(parseInt(e.substr(6, 2), 16) / 255, 2) : 1
                } : null : null
            }, "hex"],
            [function(e) {
                var t = Nu.exec(e) || Uu.exec(e);
                return t ? t[2] !== t[4] || t[4] !== t[6] ? null : wo({
                    r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
                    g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
                    b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
                    a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
                }) : null
            }, "rgb"],
            [function(e) {
                var t = Ou.exec(e) || Lu.exec(e);
                if (!t) return null;
                var i, s, r = So({
                    h: (i = t[1], s = t[2], s === void 0 && (s = "deg"), Number(i) * (Bu[s] || 1)),
                    s: Number(t[3]),
                    l: Number(t[4]),
                    a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
                });
                return Co(r)
            }, "hsl"]
        ],
        object: [
            [function(e) {
                var t = e.r,
                    i = e.g,
                    s = e.b,
                    r = e.a,
                    n = r === void 0 ? 1 : r;
                return ae(t) && ae(i) && ae(s) ? wo({
                    r: Number(t),
                    g: Number(i),
                    b: Number(s),
                    a: Number(n)
                }) : null
            }, "rgb"],
            [function(e) {
                var t = e.h,
                    i = e.s,
                    s = e.l,
                    r = e.a,
                    n = r === void 0 ? 1 : r;
                if (!ae(t) || !ae(i) || !ae(s)) return null;
                var o = So({
                    h: Number(t),
                    s: Number(i),
                    l: Number(s),
                    a: Number(n)
                });
                return Co(o)
            }, "hsl"],
            [function(e) {
                var t = e.h,
                    i = e.s,
                    s = e.v,
                    r = e.a,
                    n = r === void 0 ? 1 : r;
                if (!ae(t) || !ae(i) || !ae(s)) return null;
                var o = function(a) {
                    return {
                        h: Ua(a.h),
                        s: Ft(a.s, 0, 100),
                        v: Ft(a.v, 0, 100),
                        a: Ft(a.a)
                    }
                }({
                    h: Number(t),
                    s: Number(i),
                    v: Number(s),
                    a: Number(n)
                });
                return Ga(o)
            }, "hsv"]
        ]
    },
    Io = function(e, t) {
        for (var i = 0; i < t.length; i++) {
            var s = t[i][0](e);
            if (s) return [s, t[i][1]]
        }
        return [null, void 0]
    },
    ku = function(e) {
        return typeof e == "string" ? Io(e.trim(), Qr.string) : typeof e == "object" && e !== null ? Io(e, Qr.object) : [null, void 0]
    },
    mr = function(e, t) {
        var i = Bi(e);
        return {
            h: i.h,
            s: Ft(i.s + 100 * t, 0, 100),
            l: i.l,
            a: i.a
        }
    },
    gr = function(e) {
        return (299 * e.r + 587 * e.g + 114 * e.b) / 1e3 / 255
    },
    Po = function(e, t) {
        var i = Bi(e);
        return {
            h: i.h,
            s: i.s,
            l: Ft(i.l + 100 * t, 0, 100),
            a: i.a
        }
    },
    Jr = function() {
        function e(t) {
            this.parsed = ku(t)[0], this.rgba = this.parsed || {
                r: 0,
                g: 0,
                b: 0,
                a: 1
            }
        }
        return e.prototype.isValid = function() {
            return this.parsed !== null
        }, e.prototype.brightness = function() {
            return _t(gr(this.rgba), 2)
        }, e.prototype.isDark = function() {
            return gr(this.rgba) < .5
        }, e.prototype.isLight = function() {
            return gr(this.rgba) >= .5
        }, e.prototype.toHex = function() {
            return t = pr(this.rgba), i = t.r, s = t.g, r = t.b, o = (n = t.a) < 1 ? Ji(_t(255 * n)) : "", "#" + Ji(i) + Ji(s) + Ji(r) + o;
            var t, i, s, r, n, o
        }, e.prototype.toRgb = function() {
            return pr(this.rgba)
        }, e.prototype.toRgbString = function() {
            return t = pr(this.rgba), i = t.r, s = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + i + ", " + s + ", " + r + ", " + n + ")" : "rgb(" + i + ", " + s + ", " + r + ")";
            var t, i, s, r, n
        }, e.prototype.toHsl = function() {
            return Ao(Bi(this.rgba))
        }, e.prototype.toHslString = function() {
            return t = Ao(Bi(this.rgba)), i = t.h, s = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + i + ", " + s + "%, " + r + "%, " + n + ")" : "hsl(" + i + ", " + s + "%, " + r + "%)";
            var t, i, s, r, n
        }, e.prototype.toHsv = function() {
            return t = ka(this.rgba), {
                h: _t(t.h),
                s: _t(t.s),
                v: _t(t.v),
                a: _t(t.a, 3)
            };
            var t
        }, e.prototype.invert = function() {
            return Zt({
                r: 255 - (t = this.rgba).r,
                g: 255 - t.g,
                b: 255 - t.b,
                a: t.a
            });
            var t
        }, e.prototype.saturate = function(t) {
            return t === void 0 && (t = .1), Zt(mr(this.rgba, t))
        }, e.prototype.desaturate = function(t) {
            return t === void 0 && (t = .1), Zt(mr(this.rgba, -t))
        }, e.prototype.grayscale = function() {
            return Zt(mr(this.rgba, -1))
        }, e.prototype.lighten = function(t) {
            return t === void 0 && (t = .1), Zt(Po(this.rgba, t))
        }, e.prototype.darken = function(t) {
            return t === void 0 && (t = .1), Zt(Po(this.rgba, -t))
        }, e.prototype.rotate = function(t) {
            return t === void 0 && (t = 15), this.hue(this.hue() + t)
        }, e.prototype.alpha = function(t) {
            return typeof t == "number" ? Zt({
                r: (i = this.rgba).r,
                g: i.g,
                b: i.b,
                a: t
            }) : _t(this.rgba.a, 3);
            var i
        }, e.prototype.hue = function(t) {
            var i = Bi(this.rgba);
            return typeof t == "number" ? Zt({
                h: t,
                s: i.s,
                l: i.l,
                a: i.a
            }) : _t(i.h)
        }, e.prototype.isEqual = function(t) {
            return this.toHex() === Zt(t).toHex()
        }, e
    }(),
    Zt = function(e) {
        return e instanceof Jr ? e : new Jr(e)
    },
    Ro = [],
    Gu = function(e) {
        e.forEach(function(t) {
            Ro.indexOf(t) < 0 && (t(Jr, Qr), Ro.push(t))
        })
    };

function Hu(e, t) {
    var i = {
            white: "#ffffff",
            bisque: "#ffe4c4",
            blue: "#0000ff",
            cadetblue: "#5f9ea0",
            chartreuse: "#7fff00",
            chocolate: "#d2691e",
            coral: "#ff7f50",
            antiquewhite: "#faebd7",
            aqua: "#00ffff",
            azure: "#f0ffff",
            whitesmoke: "#f5f5f5",
            papayawhip: "#ffefd5",
            plum: "#dda0dd",
            blanchedalmond: "#ffebcd",
            black: "#000000",
            gold: "#ffd700",
            goldenrod: "#daa520",
            gainsboro: "#dcdcdc",
            cornsilk: "#fff8dc",
            cornflowerblue: "#6495ed",
            burlywood: "#deb887",
            aquamarine: "#7fffd4",
            beige: "#f5f5dc",
            crimson: "#dc143c",
            cyan: "#00ffff",
            darkblue: "#00008b",
            darkcyan: "#008b8b",
            darkgoldenrod: "#b8860b",
            darkkhaki: "#bdb76b",
            darkgray: "#a9a9a9",
            darkgreen: "#006400",
            darkgrey: "#a9a9a9",
            peachpuff: "#ffdab9",
            darkmagenta: "#8b008b",
            darkred: "#8b0000",
            darkorchid: "#9932cc",
            darkorange: "#ff8c00",
            darkslateblue: "#483d8b",
            gray: "#808080",
            darkslategray: "#2f4f4f",
            darkslategrey: "#2f4f4f",
            deeppink: "#ff1493",
            deepskyblue: "#00bfff",
            wheat: "#f5deb3",
            firebrick: "#b22222",
            floralwhite: "#fffaf0",
            ghostwhite: "#f8f8ff",
            darkviolet: "#9400d3",
            magenta: "#ff00ff",
            green: "#008000",
            dodgerblue: "#1e90ff",
            grey: "#808080",
            honeydew: "#f0fff0",
            hotpink: "#ff69b4",
            blueviolet: "#8a2be2",
            forestgreen: "#228b22",
            lawngreen: "#7cfc00",
            indianred: "#cd5c5c",
            indigo: "#4b0082",
            fuchsia: "#ff00ff",
            brown: "#a52a2a",
            maroon: "#800000",
            mediumblue: "#0000cd",
            lightcoral: "#f08080",
            darkturquoise: "#00ced1",
            lightcyan: "#e0ffff",
            ivory: "#fffff0",
            lightyellow: "#ffffe0",
            lightsalmon: "#ffa07a",
            lightseagreen: "#20b2aa",
            linen: "#faf0e6",
            mediumaquamarine: "#66cdaa",
            lemonchiffon: "#fffacd",
            lime: "#00ff00",
            khaki: "#f0e68c",
            mediumseagreen: "#3cb371",
            limegreen: "#32cd32",
            mediumspringgreen: "#00fa9a",
            lightskyblue: "#87cefa",
            lightblue: "#add8e6",
            midnightblue: "#191970",
            lightpink: "#ffb6c1",
            mistyrose: "#ffe4e1",
            moccasin: "#ffe4b5",
            mintcream: "#f5fffa",
            lightslategray: "#778899",
            lightslategrey: "#778899",
            navajowhite: "#ffdead",
            navy: "#000080",
            mediumvioletred: "#c71585",
            powderblue: "#b0e0e6",
            palegoldenrod: "#eee8aa",
            oldlace: "#fdf5e6",
            paleturquoise: "#afeeee",
            mediumturquoise: "#48d1cc",
            mediumorchid: "#ba55d3",
            rebeccapurple: "#663399",
            lightsteelblue: "#b0c4de",
            mediumslateblue: "#7b68ee",
            thistle: "#d8bfd8",
            tan: "#d2b48c",
            orchid: "#da70d6",
            mediumpurple: "#9370db",
            purple: "#800080",
            pink: "#ffc0cb",
            skyblue: "#87ceeb",
            springgreen: "#00ff7f",
            palegreen: "#98fb98",
            red: "#ff0000",
            yellow: "#ffff00",
            slateblue: "#6a5acd",
            lavenderblush: "#fff0f5",
            peru: "#cd853f",
            palevioletred: "#db7093",
            violet: "#ee82ee",
            teal: "#008080",
            slategray: "#708090",
            slategrey: "#708090",
            aliceblue: "#f0f8ff",
            darkseagreen: "#8fbc8f",
            darkolivegreen: "#556b2f",
            greenyellow: "#adff2f",
            seagreen: "#2e8b57",
            seashell: "#fff5ee",
            tomato: "#ff6347",
            silver: "#c0c0c0",
            sienna: "#a0522d",
            lavender: "#e6e6fa",
            lightgreen: "#90ee90",
            orange: "#ffa500",
            orangered: "#ff4500",
            steelblue: "#4682b4",
            royalblue: "#4169e1",
            turquoise: "#40e0d0",
            yellowgreen: "#9acd32",
            salmon: "#fa8072",
            saddlebrown: "#8b4513",
            sandybrown: "#f4a460",
            rosybrown: "#bc8f8f",
            darksalmon: "#e9967a",
            lightgoldenrodyellow: "#fafad2",
            snow: "#fffafa",
            lightgrey: "#d3d3d3",
            lightgray: "#d3d3d3",
            dimgray: "#696969",
            dimgrey: "#696969",
            olivedrab: "#6b8e23",
            olive: "#808000"
        },
        s = {};
    for (var r in i) s[i[r]] = r;
    var n = {};
    e.prototype.toName = function(o) {
        if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
        var a, h, l = s[this.toHex()];
        if (l) return l;
        if (o != null && o.closest) {
            var c = this.toRgb(),
                u = 1 / 0,
                d = "black";
            if (!n.length)
                for (var f in i) n[f] = new e(i[f]).toRgb();
            for (var p in i) {
                var g = (a = c, h = n[p], Math.pow(a.r - h.r, 2) + Math.pow(a.g - h.g, 2) + Math.pow(a.b - h.b, 2));
                g < u && (u = g, d = p)
            }
            return d
        }
    }, t.string.push([function(o) {
        var a = o.toLowerCase(),
            h = a === "transparent" ? "#0000" : i[a];
        return h ? new e(h).toRgb() : null
    }, "name"])
}
Gu([Hu]);
const ai = class {
    constructor(e = 16777215) {
        this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = e
    }
    get red() {
        return this._components[0]
    }
    get green() {
        return this._components[1]
    }
    get blue() {
        return this._components[2]
    }
    get alpha() {
        return this._components[3]
    }
    setValue(e) {
        return this.value = e, this
    }
    set value(e) {
        if (e instanceof ai) this._value = this.cloneSource(e._value), this._int = e._int, this._components.set(e._components);
        else {
            if (e === null) throw new Error("Cannot set PIXI.Color#value to null");
            (this._value === null || !this.isSourceEqual(this._value, e)) && (this.normalize(e), this._value = this.cloneSource(e))
        }
    }
    get value() {
        return this._value
    }
    cloneSource(e) {
        return typeof e == "string" || typeof e == "number" || e instanceof Number || e === null ? e : Array.isArray(e) || ArrayBuffer.isView(e) ? e.slice(0) : typeof e == "object" && e !== null ? {
            ...e
        } : e
    }
    isSourceEqual(e, t) {
        const i = typeof e;
        if (i !== typeof t) return !1;
        if (i === "number" || i === "string" || e instanceof Number) return e === t;
        if (Array.isArray(e) && Array.isArray(t) || ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) return e.length !== t.length ? !1 : e.every((r, n) => r === t[n]);
        if (e !== null && t !== null) {
            const r = Object.keys(e),
                n = Object.keys(t);
            return r.length !== n.length ? !1 : r.every(o => e[o] === t[o])
        }
        return e === t
    }
    toRgba() {
        const [e, t, i, s] = this._components;
        return {
            r: e,
            g: t,
            b: i,
            a: s
        }
    }
    toRgb() {
        const [e, t, i] = this._components;
        return {
            r: e,
            g: t,
            b: i
        }
    }
    toRgbaString() {
        const [e, t, i] = this.toUint8RgbArray();
        return `rgba(${e},${t},${i},${this.alpha})`
    }
    toUint8RgbArray(e) {
        const [t, i, s] = this._components;
        return e = e ?? [], e[0] = Math.round(t * 255), e[1] = Math.round(i * 255), e[2] = Math.round(s * 255), e
    }
    toRgbArray(e) {
        e = e ?? [];
        const [t, i, s] = this._components;
        return e[0] = t, e[1] = i, e[2] = s, e
    }
    toNumber() {
        return this._int
    }
    toLittleEndianNumber() {
        const e = this._int;
        return (e >> 16) + (e & 65280) + ((e & 255) << 16)
    }
    multiply(e) {
        const [t, i, s, r] = ai.temp.setValue(e)._components;
        return this._components[0] *= t, this._components[1] *= i, this._components[2] *= s, this._components[3] *= r, this.refreshInt(), this._value = null, this
    }
    premultiply(e, t = !0) {
        return t && (this._components[0] *= e, this._components[1] *= e, this._components[2] *= e), this._components[3] = e, this.refreshInt(), this._value = null, this
    }
    toPremultiplied(e, t = !0) {
        if (e === 1) return (255 << 24) + this._int;
        if (e === 0) return t ? 0 : this._int;
        let i = this._int >> 16 & 255,
            s = this._int >> 8 & 255,
            r = this._int & 255;
        return t && (i = i * e + .5 | 0, s = s * e + .5 | 0, r = r * e + .5 | 0), (e * 255 << 24) + (i << 16) + (s << 8) + r
    }
    toHex() {
        const e = this._int.toString(16);
        return `#${"000000".substring(0,6-e.length)+e}`
    }
    toHexa() {
        const t = Math.round(this._components[3] * 255).toString(16);
        return this.toHex() + "00".substring(0, 2 - t.length) + t
    }
    setAlpha(e) {
        return this._components[3] = this._clamp(e), this
    }
    round(e) {
        const [t, i, s] = this._components;
        return this._components[0] = Math.round(t * e) / e, this._components[1] = Math.round(i * e) / e, this._components[2] = Math.round(s * e) / e, this.refreshInt(), this._value = null, this
    }
    toArray(e) {
        e = e ?? [];
        const [t, i, s, r] = this._components;
        return e[0] = t, e[1] = i, e[2] = s, e[3] = r, e
    }
    normalize(e) {
        let t, i, s, r;
        if ((typeof e == "number" || e instanceof Number) && e >= 0 && e <= 16777215) {
            const n = e;
            t = (n >> 16 & 255) / 255, i = (n >> 8 & 255) / 255, s = (n & 255) / 255, r = 1
        } else if ((Array.isArray(e) || e instanceof Float32Array) && e.length >= 3 && e.length <= 4) e = this._clamp(e), [t, i, s, r = 1] = e;
        else if ((e instanceof Uint8Array || e instanceof Uint8ClampedArray) && e.length >= 3 && e.length <= 4) e = this._clamp(e, 0, 255), [t, i, s, r = 255] = e, t /= 255, i /= 255, s /= 255, r /= 255;
        else if (typeof e == "string" || typeof e == "object") {
            if (typeof e == "string") {
                const o = ai.HEX_PATTERN.exec(e);
                o && (e = `#${o[2]}`)
            }
            const n = Zt(e);
            n.isValid() && ({
                r: t,
                g: i,
                b: s,
                a: r
            } = n.rgba, t /= 255, i /= 255, s /= 255)
        }
        if (t !== void 0) this._components[0] = t, this._components[1] = i, this._components[2] = s, this._components[3] = r, this.refreshInt();
        else throw new Error(`Unable to convert color ${e}`)
    }
    refreshInt() {
        this._clamp(this._components);
        const [e, t, i] = this._components;
        this._int = (e * 255 << 16) + (t * 255 << 8) + (i * 255 | 0)
    }
    _clamp(e, t = 0, i = 1) {
        return typeof e == "number" ? Math.min(Math.max(e, t), i) : (e.forEach((s, r) => {
            e[r] = Math.min(Math.max(s, t), i)
        }), e)
    }
};
let J = ai;
J.shared = new ai;
J.temp = new ai;
J.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;

function $u(e) {
    return Y("7.2.0", "utils.hex2string is deprecated, use Color#toHex instead"), J.shared.setValue(e).toHex()
}

function Vu(e) {
    return Y("7.2.0", "utils.rgb2hex is deprecated, use Color#toNumber instead"), J.shared.setValue(e).toNumber()
}

function Xu() {
    const e = [],
        t = [];
    for (let s = 0; s < 32; s++) e[s] = s, t[s] = s;
    e[G.NORMAL_NPM] = G.NORMAL, e[G.ADD_NPM] = G.ADD, e[G.SCREEN_NPM] = G.SCREEN, t[G.NORMAL] = G.NORMAL_NPM, t[G.ADD] = G.ADD_NPM, t[G.SCREEN] = G.SCREEN_NPM;
    const i = [];
    return i.push(t), i.push(e), i
}
const Ha = Xu();

function $a(e, t) {
    return Ha[t ? 1 : 0][e]
}

function zu(e, t = null) {
    const i = e * 6;
    if (t = t || new Uint16Array(i), t.length !== i) throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${i}`);
    for (let s = 0, r = 0; s < i; s += 6, r += 4) t[s + 0] = r + 0, t[s + 1] = r + 1, t[s + 2] = r + 2, t[s + 3] = r + 0, t[s + 4] = r + 2, t[s + 5] = r + 3;
    return t
}

function Va(e) {
    if (e.BYTES_PER_ELEMENT === 4) return e instanceof Float32Array ? "Float32Array" : e instanceof Uint32Array ? "Uint32Array" : "Int32Array";
    if (e.BYTES_PER_ELEMENT === 2) {
        if (e instanceof Uint16Array) return "Uint16Array"
    } else if (e.BYTES_PER_ELEMENT === 1 && e instanceof Uint8Array) return "Uint8Array";
    return null
}

function Ps(e) {
    return e += e === 0 ? 1 : 0, --e, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e + 1
}

function Mo(e) {
    return !(e & e - 1) && !!e
}

function Do(e) {
    let t = (e > 65535 ? 1 : 0) << 4;
    e >>>= t;
    let i = (e > 255 ? 1 : 0) << 3;
    return e >>>= i, t |= i, i = (e > 15 ? 1 : 0) << 2, e >>>= i, t |= i, i = (e > 3 ? 1 : 0) << 1, e >>>= i, t |= i, t | e >> 1
}

function hi(e, t, i) {
    const s = e.length;
    let r;
    if (t >= s || i === 0) return;
    i = t + i > s ? s - t : i;
    const n = s - i;
    for (r = t; r < n; ++r) e[r] = e[r + i];
    e.length = n
}

function ve(e) {
    return e === 0 ? 0 : e < 0 ? -1 : 1
}
let Wu = 0;

function Ge() {
    return ++Wu
}
const Xa = class {
    constructor(e, t, i, s) {
        this.left = e, this.top = t, this.right = i, this.bottom = s
    }
    get width() {
        return this.right - this.left
    }
    get height() {
        return this.bottom - this.top
    }
    isEmpty() {
        return this.left === this.right || this.top === this.bottom
    }
};
let tn = Xa;
tn.EMPTY = new Xa(0, 0, 0, 0);
const Bo = {},
    Qt = Object.create(null),
    me = Object.create(null);
class ju {
    constructor(t, i, s) {
        this._canvas = R.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = s || R.RESOLUTION, this.resize(t, i)
    }
    clear() {
        this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
    resize(t, i) {
        this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(i * this.resolution)
    }
    destroy() {
        this._context = null, this._canvas = null
    }
    get width() {
        return this._checkDestroyed(), this._canvas.width
    }
    set width(t) {
        this._checkDestroyed(), this._canvas.width = Math.round(t)
    }
    get height() {
        return this._checkDestroyed(), this._canvas.height
    }
    set height(t) {
        this._checkDestroyed(), this._canvas.height = Math.round(t)
    }
    get canvas() {
        return this._checkDestroyed(), this._canvas
    }
    get context() {
        return this._checkDestroyed(), this._context
    }
    _checkDestroyed() {
        if (this._canvas === null) throw new TypeError("The CanvasRenderTarget has already been destroyed")
    }
}

function Fo(e, t, i) {
    for (let s = 0, r = 4 * i * t; s < t; ++s, r += 4)
        if (e[r + 3] !== 0) return !1;
    return !0
}

function Oo(e, t, i, s, r) {
    const n = 4 * t;
    for (let o = s, a = s * n + 4 * i; o <= r; ++o, a += n)
        if (e[a + 3] !== 0) return !1;
    return !0
}

function Yu(e) {
    const {
        width: t,
        height: i
    } = e, s = e.getContext("2d", {
        willReadFrequently: !0
    });
    if (s === null) throw new TypeError("Failed to get canvas 2D context");
    const n = s.getImageData(0, 0, t, i).data;
    let o = 0,
        a = 0,
        h = t - 1,
        l = i - 1;
    for (; a < i && Fo(n, t, a);) ++a;
    if (a === i) return tn.EMPTY;
    for (; Fo(n, t, l);) --l;
    for (; Oo(n, t, o, a, l);) ++o;
    for (; Oo(n, t, h, a, l);) --h;
    return ++h, ++l, new tn(o, a, h, l)
}

function qu(e) {
    const t = Yu(e),
        {
            width: i,
            height: s
        } = t;
    let r = null;
    if (!t.isEmpty()) {
        const n = e.getContext("2d");
        if (n === null) throw new TypeError("Failed to get canvas 2D context");
        r = n.getImageData(t.left, t.top, i, s)
    }
    return {
        width: i,
        height: s,
        data: r
    }
}
let ts;

function Ku(e, t = globalThis.location) {
    if (e.startsWith("data:")) return "";
    t = t || globalThis.location, ts || (ts = document.createElement("a")), ts.href = e;
    const i = Iu.parse(ts.href),
        s = !i.port && t.port === "" || i.port === t.port;
    return i.hostname !== t.hostname || !s || i.protocol !== t.protocol ? "anonymous" : ""
}

function Te(e, t = 1) {
    var s;
    const i = (s = R.RETINA_PREFIX) == null ? void 0 : s.exec(e);
    return i ? parseFloat(i[1]) : t
}
var D = (e => (e.Renderer = "renderer", e.Application = "application", e.RendererSystem = "renderer-webgl-system", e.RendererPlugin = "renderer-webgl-plugin", e.CanvasRendererSystem = "renderer-canvas-system", e.CanvasRendererPlugin = "renderer-canvas-plugin", e.Asset = "asset", e.LoadParser = "load-parser", e.ResolveParser = "resolve-parser", e.CacheParser = "cache-parser", e.DetectionParser = "detection-parser", e))(D || {});
const en = e => {
        if (typeof e == "function" || typeof e == "object" && e.extension) {
            if (!e.extension) throw new Error("Extension class must have an extension object");
            e = {
                ...typeof e.extension != "object" ? {
                    type: e.extension
                } : e.extension,
                ref: e
            }
        }
        if (typeof e == "object") e = {
            ...e
        };
        else throw new Error("Invalid extension type");
        return typeof e.type == "string" && (e.type = [e.type]), e
    },
    Lo = (e, t) => en(e).priority ?? t,
    U = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove(...e) {
            return e.map(en).forEach(t => {
                t.type.forEach(i => {
                    var s, r;
                    return (r = (s = this._removeHandlers)[i]) == null ? void 0 : r.call(s, t)
                })
            }), this
        },
        add(...e) {
            return e.map(en).forEach(t => {
                t.type.forEach(i => {
                    const s = this._addHandlers,
                        r = this._queue;
                    s[i] ? s[i](t) : (r[i] = r[i] || [], r[i].push(t))
                })
            }), this
        },
        handle(e, t, i) {
            const s = this._addHandlers,
                r = this._removeHandlers;
            if (s[e] || r[e]) throw new Error(`Extension type ${e} already has a handler`);
            s[e] = t, r[e] = i;
            const n = this._queue;
            return n[e] && (n[e].forEach(o => t(o)), delete n[e]), this
        },
        handleByMap(e, t) {
            return this.handle(e, i => {
                t[i.name] = i.ref
            }, i => {
                delete t[i.name]
            })
        },
        handleByList(e, t, i = -1) {
            return this.handle(e, s => {
                t.includes(s.ref) || (t.push(s.ref), t.sort((r, n) => Lo(n, i) - Lo(r, i)))
            }, s => {
                const r = t.indexOf(s.ref);
                r !== -1 && t.splice(r, 1)
            })
        }
    };
class sn {
    constructor(t) {
        typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
    }
    get int8View() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
    }
    get uint8View() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
    }
    get int16View() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
    }
    get uint16View() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
    }
    get int32View() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
    }
    view(t) {
        return this[`${t}View`]
    }
    destroy() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
    }
    static sizeOf(t) {
        switch (t) {
            case "int8":
            case "uint8":
                return 1;
            case "int16":
            case "uint16":
                return 2;
            case "int32":
            case "uint32":
            case "float32":
                return 4;
            default:
                throw new Error(`${t} isn't a valid view type`)
        }
    }
}
const Zu = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`);

function Qu(e) {
    let t = "";
    for (let i = 0; i < e; ++i) i > 0 && (t += `
else `), i < e - 1 && (t += `if(test == ${i}.0){}`);
    return t
}

function Ju(e, t) {
    if (e === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
    const i = t.createShader(t.FRAGMENT_SHADER);
    for (;;) {
        const s = Zu.replace(/%forloop%/gi, Qu(e));
        if (t.shaderSource(i, s), t.compileShader(i), !t.getShaderParameter(i, t.COMPILE_STATUS)) e = e / 2 | 0;
        else break
    }
    return e
}
const _r = 0,
    yr = 1,
    vr = 2,
    xr = 3,
    br = 4,
    Er = 5;
class pe {
    constructor() {
        this.data = 0, this.blendMode = G.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
    }
    get blend() {
        return !!(this.data & 1 << _r)
    }
    set blend(t) {
        !!(this.data & 1 << _r) !== t && (this.data ^= 1 << _r)
    }
    get offsets() {
        return !!(this.data & 1 << yr)
    }
    set offsets(t) {
        !!(this.data & 1 << yr) !== t && (this.data ^= 1 << yr)
    }
    get culling() {
        return !!(this.data & 1 << vr)
    }
    set culling(t) {
        !!(this.data & 1 << vr) !== t && (this.data ^= 1 << vr)
    }
    get depthTest() {
        return !!(this.data & 1 << xr)
    }
    set depthTest(t) {
        !!(this.data & 1 << xr) !== t && (this.data ^= 1 << xr)
    }
    get depthMask() {
        return !!(this.data & 1 << Er)
    }
    set depthMask(t) {
        !!(this.data & 1 << Er) !== t && (this.data ^= 1 << Er)
    }
    get clockwiseFrontFace() {
        return !!(this.data & 1 << br)
    }
    set clockwiseFrontFace(t) {
        !!(this.data & 1 << br) !== t && (this.data ^= 1 << br)
    }
    get blendMode() {
        return this._blendMode
    }
    set blendMode(t) {
        this.blend = t !== G.NONE, this._blendMode = t
    }
    get polygonOffset() {
        return this._polygonOffset
    }
    set polygonOffset(t) {
        this.offsets = !!t, this._polygonOffset = t
    }
    toString() {
        return `[@pixi/core:State blendMode=${this.blendMode} clockwiseFrontFace=${this.clockwiseFrontFace} culling=${this.culling} depthMask=${this.depthMask} polygonOffset=${this.polygonOffset}]`
    }
    static for2d() {
        const t = new pe;
        return t.depthTest = !1, t.blend = !0, t
    }
}
const rn = [];

function za(e, t) {
    if (!e) return null;
    let i = "";
    if (typeof e == "string") {
        const s = /\.(\w{3,4})(?:$|\?|#)/i.exec(e);
        s && (i = s[1].toLowerCase())
    }
    for (let s = rn.length - 1; s >= 0; --s) {
        const r = rn[s];
        if (r.test && r.test(e, i)) return new r(e, t)
    }
    throw new Error("Unrecognized source type to auto-detect Resource")
}
class zt {
    constructor(t) {
        this.items = [], this._name = t, this._aliasCount = 0
    }
    emit(t, i, s, r, n, o, a, h) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        const {
            name: l,
            items: c
        } = this;
        this._aliasCount++;
        for (let u = 0, d = c.length; u < d; u++) c[u][l](t, i, s, r, n, o, a, h);
        return c === this.items && this._aliasCount--, this
    }
    ensureNonAliasedItems() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
    }
    add(t) {
        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
    }
    remove(t) {
        const i = this.items.indexOf(t);
        return i !== -1 && (this.ensureNonAliasedItems(), this.items.splice(i, 1)), this
    }
    contains(t) {
        return this.items.includes(t)
    }
    removeAll() {
        return this.ensureNonAliasedItems(), this.items.length = 0, this
    }
    destroy() {
        this.removeAll(), this.items = null, this._name = null
    }
    get empty() {
        return this.items.length === 0
    }
    get name() {
        return this._name
    }
}
Object.defineProperties(zt.prototype, {
    dispatch: {
        value: zt.prototype.emit
    },
    run: {
        value: zt.prototype.emit
    }
});
class Ui {
    constructor(t = 0, i = 0) {
        this._width = t, this._height = i, this.destroyed = !1, this.internal = !1, this.onResize = new zt("setRealSize"), this.onUpdate = new zt("update"), this.onError = new zt("onError")
    }
    bind(t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
    }
    unbind(t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
    }
    resize(t, i) {
        (t !== this._width || i !== this._height) && (this._width = t, this._height = i, this.onResize.emit(t, i))
    }
    get valid() {
        return !!this._width && !!this._height
    }
    update() {
        this.destroyed || this.onUpdate.emit()
    }
    load() {
        return Promise.resolve(this)
    }
    get width() {
        return this._width
    }
    get height() {
        return this._height
    }
    style(t, i, s) {
        return !1
    }
    dispose() {}
    destroy() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
    }
    static test(t, i) {
        return !1
    }
}
class Vi extends Ui {
    constructor(t, i) {
        const {
            width: s,
            height: r
        } = i || {};
        if (!s || !r) throw new Error("BufferResource width or height invalid");
        super(s, r), this.data = t
    }
    upload(t, i, s) {
        const r = t.gl;
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === jt.UNPACK);
        const n = i.realWidth,
            o = i.realHeight;
        return s.width === n && s.height === o ? r.texSubImage2D(i.target, 0, 0, 0, n, o, i.format, s.type, this.data) : (s.width = n, s.height = o, r.texImage2D(i.target, 0, s.internalFormat, n, o, 0, i.format, s.type, this.data)), !0
    }
    dispose() {
        this.data = null
    }
    static test(t) {
        return t instanceof Float32Array || t instanceof Uint8Array || t instanceof Uint32Array
    }
}
const td = {
        scaleMode: ce.NEAREST,
        format: C.RGBA,
        alphaMode: jt.NPM
    },
    Ze = class extends Hi {
        constructor(e = null, t = null) {
            super(), t = Object.assign({}, Ze.defaultOptions, t);
            const {
                alphaMode: i,
                mipmap: s,
                anisotropicLevel: r,
                scaleMode: n,
                width: o,
                height: a,
                wrapMode: h,
                format: l,
                type: c,
                target: u,
                resolution: d,
                resourceOptions: f
            } = t;
            e && !(e instanceof Ui) && (e = za(e, f), e.internal = !0), this.resolution = d || R.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((a || 0) * this.resolution) / this.resolution, this._mipmap = s, this.anisotropicLevel = r, this._wrapMode = h, this._scaleMode = n, this.format = l, this.type = c, this.target = u, this.alphaMode = i, this.uid = Ge(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && a > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(e)
        }
        get realWidth() {
            return Math.round(this.width * this.resolution)
        }
        get realHeight() {
            return Math.round(this.height * this.resolution)
        }
        get mipmap() {
            return this._mipmap
        }
        set mipmap(e) {
            this._mipmap !== e && (this._mipmap = e, this.dirtyStyleId++)
        }
        get scaleMode() {
            return this._scaleMode
        }
        set scaleMode(e) {
            this._scaleMode !== e && (this._scaleMode = e, this.dirtyStyleId++)
        }
        get wrapMode() {
            return this._wrapMode
        }
        set wrapMode(e) {
            this._wrapMode !== e && (this._wrapMode = e, this.dirtyStyleId++)
        }
        setStyle(e, t) {
            let i;
            return e !== void 0 && e !== this.scaleMode && (this.scaleMode = e, i = !0), t !== void 0 && t !== this.mipmap && (this.mipmap = t, i = !0), i && this.dirtyStyleId++, this
        }
        setSize(e, t, i) {
            return i = i || this.resolution, this.setRealSize(e * i, t * i, i)
        }
        setRealSize(e, t, i) {
            return this.resolution = i || this.resolution, this.width = Math.round(e) / this.resolution, this.height = Math.round(t) / this.resolution, this._refreshPOT(), this.update(), this
        }
        _refreshPOT() {
            this.isPowerOfTwo = Mo(this.realWidth) && Mo(this.realHeight)
        }
        setResolution(e) {
            const t = this.resolution;
            return t === e ? this : (this.resolution = e, this.valid && (this.width = Math.round(this.width * t) / e, this.height = Math.round(this.height * t) / e, this.emit("update", this)), this._refreshPOT(), this)
        }
        setResource(e) {
            if (this.resource === e) return this;
            if (this.resource) throw new Error("Resource can be set only once");
            return e.bind(this), this.resource = e, this
        }
        update() {
            this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
        }
        onError(e) {
            this.emit("error", this, e)
        }
        destroy() {
            this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete me[this.cacheId], delete Qt[this.cacheId], this.cacheId = null), this.dispose(), Ze.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0
        }
        dispose() {
            this.emit("dispose", this)
        }
        castToBaseTexture() {
            return this
        }
        static from(e, t, i = R.STRICT_TEXTURE_CACHE) {
            const s = typeof e == "string";
            let r = null;
            if (s) r = e;
            else {
                if (!e._pixiId) {
                    const o = (t == null ? void 0 : t.pixiIdPrefix) || "pixiid";
                    e._pixiId = `${o}_${Ge()}`
                }
                r = e._pixiId
            }
            let n = me[r];
            if (s && i && !n) throw new Error(`The cacheId "${r}" does not exist in BaseTextureCache.`);
            return n || (n = new Ze(e, t), n.cacheId = r, Ze.addToCache(n, r)), n
        }
        static fromBuffer(e, t, i, s) {
            e = e || new Float32Array(t * i * 4);
            const r = new Vi(e, {
                    width: t,
                    height: i
                }),
                n = e instanceof Float32Array ? k.FLOAT : k.UNSIGNED_BYTE;
            return new Ze(r, Object.assign({}, td, {
                type: n
            }, s))
        }
        static addToCache(e, t) {
            t && (e.textureCacheIds.includes(t) || e.textureCacheIds.push(t), me[t] && me[t] !== e && console.warn(`BaseTexture added to the cache with an id [${t}] that already had an entry`), me[t] = e)
        }
        static removeFromCache(e) {
            if (typeof e == "string") {
                const t = me[e];
                if (t) {
                    const i = t.textureCacheIds.indexOf(e);
                    return i > -1 && t.textureCacheIds.splice(i, 1), delete me[e], t
                }
            } else if (e != null && e.textureCacheIds) {
                for (let t = 0; t < e.textureCacheIds.length; ++t) delete me[e.textureCacheIds[t]];
                return e.textureCacheIds.length = 0, e
            }
            return null
        }
    };
let V = Ze;
V.defaultOptions = {
    mipmap: re.POW2,
    anisotropicLevel: 0,
    scaleMode: ce.LINEAR,
    wrapMode: be.CLAMP,
    alphaMode: jt.UNPACK,
    target: ri.TEXTURE_2D,
    format: C.RGBA,
    type: k.UNSIGNED_BYTE
};
V._globalBatch = 0;
class nn {
    constructor() {
        this.texArray = null, this.blend = 0, this.type = ee.TRIANGLES, this.start = 0, this.size = 0, this.data = null
    }
}
let ed = 0;
class at {
    constructor(t, i = !0, s = !1) {
        this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = s, this.static = i, this.id = ed++, this.disposeRunner = new zt("disposeBuffer")
    }
    update(t) {
        t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(), this.data = null
    }
    set index(t) {
        this.type = t ? ie.ELEMENT_ARRAY_BUFFER : ie.ARRAY_BUFFER
    }
    get index() {
        return this.type === ie.ELEMENT_ARRAY_BUFFER
    }
    static from(t) {
        return t instanceof Array && (t = new Float32Array(t)), new at(t)
    }
}
class Rs {
    constructor(t, i = 0, s = !1, r = k.FLOAT, n, o, a, h = 1) {
        this.buffer = t, this.size = i, this.normalized = s, this.type = r, this.stride = n, this.start = o, this.instance = a, this.divisor = h
    }
    destroy() {
        this.buffer = null
    }
    static from(t, i, s, r, n) {
        return new Rs(t, i, s, r, n)
    }
}
const id = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array
};

function sd(e, t) {
    let i = 0,
        s = 0;
    const r = {};
    for (let h = 0; h < e.length; h++) s += t[h], i += e[h].length;
    const n = new ArrayBuffer(i * 4);
    let o = null,
        a = 0;
    for (let h = 0; h < e.length; h++) {
        const l = t[h],
            c = e[h],
            u = Va(c);
        r[u] || (r[u] = new id[u](n)), o = r[u];
        for (let d = 0; d < c.length; d++) {
            const f = (d / l | 0) * s + a,
                p = d % l;
            o[f + p] = c[d]
        }
        a += l
    }
    return new Float32Array(n)
}
const No = {
    5126: 4,
    5123: 2,
    5121: 1
};
let rd = 0;
const nd = {
    Float32Array,
    Uint32Array,
    Int32Array,
    Uint8Array,
    Uint16Array
};
class we {
    constructor(t = [], i = {}) {
        this.buffers = t, this.indexBuffer = null, this.attributes = i, this.glVertexArrayObjects = {}, this.id = rd++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new zt("disposeGeometry"), this.refCount = 0
    }
    addAttribute(t, i, s = 0, r = !1, n, o, a, h = !1) {
        if (!i) throw new Error("You must pass a buffer when creating an attribute");
        i instanceof at || (i instanceof Array && (i = new Float32Array(i)), i = new at(i));
        const l = t.split("|");
        if (l.length > 1) {
            for (let u = 0; u < l.length; u++) this.addAttribute(l[u], i, s, r, n);
            return this
        }
        let c = this.buffers.indexOf(i);
        return c === -1 && (this.buffers.push(i), c = this.buffers.length - 1), this.attributes[t] = new Rs(c, s, r, n, o, a, h), this.instanced = this.instanced || h, this
    }
    getAttribute(t) {
        return this.attributes[t]
    }
    getBuffer(t) {
        return this.buffers[this.getAttribute(t).buffer]
    }
    addIndex(t) {
        return t instanceof at || (t instanceof Array && (t = new Uint16Array(t)), t = new at(t)), t.type = ie.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this
    }
    getIndex() {
        return this.indexBuffer
    }
    interleave() {
        if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) return this;
        const t = [],
            i = [],
            s = new at;
        let r;
        for (r in this.attributes) {
            const n = this.attributes[r],
                o = this.buffers[n.buffer];
            t.push(o.data), i.push(n.size * No[n.type] / 4), n.buffer = 0
        }
        for (s.data = sd(t, i), r = 0; r < this.buffers.length; r++) this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
        return this.buffers = [s], this.indexBuffer && this.buffers.push(this.indexBuffer), this
    }
    getSize() {
        for (const t in this.attributes) {
            const i = this.attributes[t];
            return this.buffers[i.buffer].data.length / (i.stride / 4 || i.size)
        }
        return 0
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroy() {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
    }
    clone() {
        const t = new we;
        for (let i = 0; i < this.buffers.length; i++) t.buffers[i] = new at(this.buffers[i].data.slice(0));
        for (const i in this.attributes) {
            const s = this.attributes[i];
            t.attributes[i] = new Rs(s.buffer, s.size, s.normalized, s.type, s.stride, s.start, s.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = ie.ELEMENT_ARRAY_BUFFER), t
    }
    static merge(t) {
        const i = new we,
            s = [],
            r = [],
            n = [];
        let o;
        for (let a = 0; a < t.length; a++) {
            o = t[a];
            for (let h = 0; h < o.buffers.length; h++) r[h] = r[h] || 0, r[h] += o.buffers[h].data.length, n[h] = 0
        }
        for (let a = 0; a < o.buffers.length; a++) s[a] = new nd[Va(o.buffers[a].data)](r[a]), i.buffers[a] = new at(s[a]);
        for (let a = 0; a < t.length; a++) {
            o = t[a];
            for (let h = 0; h < o.buffers.length; h++) s[h].set(o.buffers[h].data, n[h]), n[h] += o.buffers[h].data.length
        }
        if (i.attributes = o.attributes, o.indexBuffer) {
            i.indexBuffer = i.buffers[o.buffers.indexOf(o.indexBuffer)], i.indexBuffer.type = ie.ELEMENT_ARRAY_BUFFER;
            let a = 0,
                h = 0,
                l = 0,
                c = 0;
            for (let u = 0; u < o.buffers.length; u++)
                if (o.buffers[u] !== o.indexBuffer) {
                    c = u;
                    break
                } for (const u in o.attributes) {
                const d = o.attributes[u];
                (d.buffer | 0) === c && (h += d.size * No[d.type] / 4)
            }
            for (let u = 0; u < t.length; u++) {
                const d = t[u].indexBuffer.data;
                for (let f = 0; f < d.length; f++) i.indexBuffer.data[f + l] += a;
                a += t[u].buffers[c].data.length / h, l += d.length
            }
        }
        return i
    }
}
class Wa extends we {
    constructor(t = !1) {
        super(), this._buffer = new at(null, t, !1), this._indexBuffer = new at(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, k.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, k.FLOAT).addAttribute("aColor", this._buffer, 4, !0, k.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, k.FLOAT).addIndex(this._indexBuffer)
    }
}
const Ms = Math.PI * 2,
    od = 180 / Math.PI,
    ad = Math.PI / 180;
var xt = (e => (e[e.POLY = 0] = "POLY", e[e.RECT = 1] = "RECT", e[e.CIRC = 2] = "CIRC", e[e.ELIP = 3] = "ELIP", e[e.RREC = 4] = "RREC", e))(xt || {});
class K {
    constructor(t = 0, i = 0) {
        this.x = 0, this.y = 0, this.x = t, this.y = i
    }
    clone() {
        return new K(this.x, this.y)
    }
    copyFrom(t) {
        return this.set(t.x, t.y), this
    }
    copyTo(t) {
        return t.set(this.x, this.y), t
    }
    equals(t) {
        return t.x === this.x && t.y === this.y
    }
    set(t = 0, i = t) {
        return this.x = t, this.y = i, this
    }
    toString() {
        return `[@pixi/math:Point x=${this.x} y=${this.y}]`
    }
}
const es = [new K, new K, new K, new K];
class z {
    constructor(t = 0, i = 0, s = 0, r = 0) {
        this.x = Number(t), this.y = Number(i), this.width = Number(s), this.height = Number(r), this.type = xt.RECT
    }
    get left() {
        return this.x
    }
    get right() {
        return this.x + this.width
    }
    get top() {
        return this.y
    }
    get bottom() {
        return this.y + this.height
    }
    static get EMPTY() {
        return new z(0, 0, 0, 0)
    }
    clone() {
        return new z(this.x, this.y, this.width, this.height)
    }
    copyFrom(t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
    }
    copyTo(t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
    }
    contains(t, i) {
        return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && i >= this.y && i < this.y + this.height
    }
    intersects(t, i) {
        if (!i) {
            const E = this.x < t.x ? t.x : this.x;
            if ((this.right > t.right ? t.right : this.right) <= E) return !1;
            const N = this.y < t.y ? t.y : this.y;
            return (this.bottom > t.bottom ? t.bottom : this.bottom) > N
        }
        const s = this.left,
            r = this.right,
            n = this.top,
            o = this.bottom;
        if (r <= s || o <= n) return !1;
        const a = es[0].set(t.left, t.top),
            h = es[1].set(t.left, t.bottom),
            l = es[2].set(t.right, t.top),
            c = es[3].set(t.right, t.bottom);
        if (l.x <= a.x || h.y <= a.y) return !1;
        const u = Math.sign(i.a * i.d - i.b * i.c);
        if (u === 0 || (i.apply(a, a), i.apply(h, h), i.apply(l, l), i.apply(c, c), Math.max(a.x, h.x, l.x, c.x) <= s || Math.min(a.x, h.x, l.x, c.x) >= r || Math.max(a.y, h.y, l.y, c.y) <= n || Math.min(a.y, h.y, l.y, c.y) >= o)) return !1;
        const d = u * (h.y - a.y),
            f = u * (a.x - h.x),
            p = d * s + f * n,
            g = d * r + f * n,
            m = d * s + f * o,
            y = d * r + f * o;
        if (Math.max(p, g, m, y) <= d * a.x + f * a.y || Math.min(p, g, m, y) >= d * c.x + f * c.y) return !1;
        const v = u * (a.y - l.y),
            _ = u * (l.x - a.x),
            x = v * s + _ * n,
            T = v * r + _ * n,
            P = v * s + _ * o,
            S = v * r + _ * o;
        return !(Math.max(x, T, P, S) <= v * a.x + _ * a.y || Math.min(x, T, P, S) >= v * c.x + _ * c.y)
    }
    pad(t = 0, i = t) {
        return this.x -= t, this.y -= i, this.width += t * 2, this.height += i * 2, this
    }
    fit(t) {
        const i = Math.max(this.x, t.x),
            s = Math.min(this.x + this.width, t.x + t.width),
            r = Math.max(this.y, t.y),
            n = Math.min(this.y + this.height, t.y + t.height);
        return this.x = i, this.width = Math.max(s - i, 0), this.y = r, this.height = Math.max(n - r, 0), this
    }
    ceil(t = 1, i = .001) {
        const s = Math.ceil((this.x + this.width - i) * t) / t,
            r = Math.ceil((this.y + this.height - i) * t) / t;
        return this.x = Math.floor((this.x + i) * t) / t, this.y = Math.floor((this.y + i) * t) / t, this.width = s - this.x, this.height = r - this.y, this
    }
    enlarge(t) {
        const i = Math.min(this.x, t.x),
            s = Math.max(this.x + this.width, t.x + t.width),
            r = Math.min(this.y, t.y),
            n = Math.max(this.y + this.height, t.y + t.height);
        return this.x = i, this.width = s - i, this.y = r, this.height = n - r, this
    }
    toString() {
        return `[@pixi/math:Rectangle x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
    }
}
class Vs {
    constructor(t = 0, i = 0, s = 0) {
        this.x = t, this.y = i, this.radius = s, this.type = xt.CIRC
    }
    clone() {
        return new Vs(this.x, this.y, this.radius)
    }
    contains(t, i) {
        if (this.radius <= 0) return !1;
        const s = this.radius * this.radius;
        let r = this.x - t,
            n = this.y - i;
        return r *= r, n *= n, r + n <= s
    }
    getBounds() {
        return new z(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
    }
    toString() {
        return `[@pixi/math:Circle x=${this.x} y=${this.y} radius=${this.radius}]`
    }
}
class Fn {
    constructor(t = 0, i = 0, s = 0, r = 0) {
        this.x = t, this.y = i, this.width = s, this.height = r, this.type = xt.ELIP
    }
    clone() {
        return new Fn(this.x, this.y, this.width, this.height)
    }
    contains(t, i) {
        if (this.width <= 0 || this.height <= 0) return !1;
        let s = (t - this.x) / this.width,
            r = (i - this.y) / this.height;
        return s *= s, r *= r, s + r <= 1
    }
    getBounds() {
        return new z(this.x - this.width, this.y - this.height, this.width, this.height)
    }
    toString() {
        return `[@pixi/math:Ellipse x=${this.x} y=${this.y} width=${this.width} height=${this.height}]`
    }
}
class li {
    constructor(...t) {
        let i = Array.isArray(t[0]) ? t[0] : t;
        if (typeof i[0] != "number") {
            const s = [];
            for (let r = 0, n = i.length; r < n; r++) s.push(i[r].x, i[r].y);
            i = s
        }
        this.points = i, this.type = xt.POLY, this.closeStroke = !0
    }
    clone() {
        const t = this.points.slice(),
            i = new li(t);
        return i.closeStroke = this.closeStroke, i
    }
    contains(t, i) {
        let s = !1;
        const r = this.points.length / 2;
        for (let n = 0, o = r - 1; n < r; o = n++) {
            const a = this.points[n * 2],
                h = this.points[n * 2 + 1],
                l = this.points[o * 2],
                c = this.points[o * 2 + 1];
            h > i != c > i && t < (l - a) * ((i - h) / (c - h)) + a && (s = !s)
        }
        return s
    }
    toString() {
        return `[@pixi/math:PolygoncloseStroke=${this.closeStroke}points=${this.points.reduce((t,i)=>`${t}, ${i}`,"")}]`
    }
}
class On {
    constructor(t = 0, i = 0, s = 0, r = 0, n = 20) {
        this.x = t, this.y = i, this.width = s, this.height = r, this.radius = n, this.type = xt.RREC
    }
    clone() {
        return new On(this.x, this.y, this.width, this.height, this.radius)
    }
    contains(t, i) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (t >= this.x && t <= this.x + this.width && i >= this.y && i <= this.y + this.height) {
            const s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
            if (i >= this.y + s && i <= this.y + this.height - s || t >= this.x + s && t <= this.x + this.width - s) return !0;
            let r = t - (this.x + s),
                n = i - (this.y + s);
            const o = s * s;
            if (r * r + n * n <= o || (r = t - (this.x + this.width - s), r * r + n * n <= o) || (n = i - (this.y + this.height - s), r * r + n * n <= o) || (r = t - (this.x + s), r * r + n * n <= o)) return !0
        }
        return !1
    }
    toString() {
        return `[@pixi/math:RoundedRectangle x=${this.x} y=${this.y}width=${this.width} height=${this.height} radius=${this.radius}]`
    }
}
class it {
    constructor(t = 1, i = 0, s = 0, r = 1, n = 0, o = 0) {
        this.array = null, this.a = t, this.b = i, this.c = s, this.d = r, this.tx = n, this.ty = o
    }
    fromArray(t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
    }
    set(t, i, s, r, n, o) {
        return this.a = t, this.b = i, this.c = s, this.d = r, this.tx = n, this.ty = o, this
    }
    toArray(t, i) {
        this.array || (this.array = new Float32Array(9));
        const s = i || this.array;
        return t ? (s[0] = this.a, s[1] = this.b, s[2] = 0, s[3] = this.c, s[4] = this.d, s[5] = 0, s[6] = this.tx, s[7] = this.ty, s[8] = 1) : (s[0] = this.a, s[1] = this.c, s[2] = this.tx, s[3] = this.b, s[4] = this.d, s[5] = this.ty, s[6] = 0, s[7] = 0, s[8] = 1), s
    }
    apply(t, i) {
        i = i || new K;
        const s = t.x,
            r = t.y;
        return i.x = this.a * s + this.c * r + this.tx, i.y = this.b * s + this.d * r + this.ty, i
    }
    applyInverse(t, i) {
        i = i || new K;
        const s = 1 / (this.a * this.d + this.c * -this.b),
            r = t.x,
            n = t.y;
        return i.x = this.d * s * r + -this.c * s * n + (this.ty * this.c - this.tx * this.d) * s, i.y = this.a * s * n + -this.b * s * r + (-this.ty * this.a + this.tx * this.b) * s, i
    }
    translate(t, i) {
        return this.tx += t, this.ty += i, this
    }
    scale(t, i) {
        return this.a *= t, this.d *= i, this.c *= t, this.b *= i, this.tx *= t, this.ty *= i, this
    }
    rotate(t) {
        const i = Math.cos(t),
            s = Math.sin(t),
            r = this.a,
            n = this.c,
            o = this.tx;
        return this.a = r * i - this.b * s, this.b = r * s + this.b * i, this.c = n * i - this.d * s, this.d = n * s + this.d * i, this.tx = o * i - this.ty * s, this.ty = o * s + this.ty * i, this
    }
    append(t) {
        const i = this.a,
            s = this.b,
            r = this.c,
            n = this.d;
        return this.a = t.a * i + t.b * r, this.b = t.a * s + t.b * n, this.c = t.c * i + t.d * r, this.d = t.c * s + t.d * n, this.tx = t.tx * i + t.ty * r + this.tx, this.ty = t.tx * s + t.ty * n + this.ty, this
    }
    setTransform(t, i, s, r, n, o, a, h, l) {
        return this.a = Math.cos(a + l) * n, this.b = Math.sin(a + l) * n, this.c = -Math.sin(a - h) * o, this.d = Math.cos(a - h) * o, this.tx = t - (s * this.a + r * this.c), this.ty = i - (s * this.b + r * this.d), this
    }
    prepend(t) {
        const i = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
            const s = this.a,
                r = this.c;
            this.a = s * t.a + this.b * t.c, this.b = s * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
        }
        return this.tx = i * t.a + this.ty * t.c + t.tx, this.ty = i * t.b + this.ty * t.d + t.ty, this
    }
    decompose(t) {
        const i = this.a,
            s = this.b,
            r = this.c,
            n = this.d,
            o = t.pivot,
            a = -Math.atan2(-r, n),
            h = Math.atan2(s, i),
            l = Math.abs(a + h);
        return l < 1e-5 || Math.abs(Ms - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = a, t.skew.y = h), t.scale.x = Math.sqrt(i * i + s * s), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (o.x * i + o.y * r), t.position.y = this.ty + (o.x * s + o.y * n), t
    }
    invert() {
        const t = this.a,
            i = this.b,
            s = this.c,
            r = this.d,
            n = this.tx,
            o = t * r - i * s;
        return this.a = r / o, this.b = -i / o, this.c = -s / o, this.d = t / o, this.tx = (s * this.ty - r * n) / o, this.ty = -(t * this.ty - i * n) / o, this
    }
    identity() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }
    clone() {
        const t = new it;
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }
    copyTo(t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
    }
    copyFrom(t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
    }
    toString() {
        return `[@pixi/math:Matrix a=${this.a} b=${this.b} c=${this.c} d=${this.d} tx=${this.tx} ty=${this.ty}]`
    }
    static get IDENTITY() {
        return new it
    }
    static get TEMP_MATRIX() {
        return new it
    }
}
const Re = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
    Me = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
    De = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
    Be = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
    on = [],
    ja = [],
    is = Math.sign;

function hd() {
    for (let e = 0; e < 16; e++) {
        const t = [];
        on.push(t);
        for (let i = 0; i < 16; i++) {
            const s = is(Re[e] * Re[i] + De[e] * Me[i]),
                r = is(Me[e] * Re[i] + Be[e] * Me[i]),
                n = is(Re[e] * De[i] + De[e] * Be[i]),
                o = is(Me[e] * De[i] + Be[e] * Be[i]);
            for (let a = 0; a < 16; a++)
                if (Re[a] === s && Me[a] === r && De[a] === n && Be[a] === o) {
                    t.push(a);
                    break
                }
        }
    }
    for (let e = 0; e < 16; e++) {
        const t = new it;
        t.set(Re[e], Me[e], De[e], Be[e], 0, 0), ja.push(t)
    }
}
hd();
const st = {
    E: 0,
    SE: 1,
    S: 2,
    SW: 3,
    W: 4,
    NW: 5,
    N: 6,
    NE: 7,
    MIRROR_VERTICAL: 8,
    MAIN_DIAGONAL: 10,
    MIRROR_HORIZONTAL: 12,
    REVERSE_DIAGONAL: 14,
    uX: e => Re[e],
    uY: e => Me[e],
    vX: e => De[e],
    vY: e => Be[e],
    inv: e => e & 8 ? e & 15 : -e & 7,
    add: (e, t) => on[e][t],
    sub: (e, t) => on[e][st.inv(t)],
    rotate180: e => e ^ 4,
    isVertical: e => (e & 3) === 2,
    byDirection: (e, t) => Math.abs(e) * 2 <= Math.abs(t) ? t >= 0 ? st.S : st.N : Math.abs(t) * 2 <= Math.abs(e) ? e > 0 ? st.E : st.W : t > 0 ? e > 0 ? st.SE : st.SW : e > 0 ? st.NE : st.NW,
    matrixAppendRotationInv: (e, t, i = 0, s = 0) => {
        const r = ja[st.inv(t)];
        r.tx = i, r.ty = s, e.append(r)
    }
};
class xe {
    constructor(t, i, s = 0, r = 0) {
        this._x = s, this._y = r, this.cb = t, this.scope = i
    }
    clone(t = this.cb, i = this.scope) {
        return new xe(t, i, this._x, this._y)
    }
    set(t = 0, i = t) {
        return (this._x !== t || this._y !== i) && (this._x = t, this._y = i, this.cb.call(this.scope)), this
    }
    copyFrom(t) {
        return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
    }
    copyTo(t) {
        return t.set(this._x, this._y), t
    }
    equals(t) {
        return t.x === this._x && t.y === this._y
    }
    toString() {
        return `[@pixi/math:ObservablePoint x=0 y=0 scope=${this.scope}]`
    }
    get x() {
        return this._x
    }
    set x(t) {
        this._x !== t && (this._x = t, this.cb.call(this.scope))
    }
    get y() {
        return this._y
    }
    set y(t) {
        this._y !== t && (this._y = t, this.cb.call(this.scope))
    }
}
const Ya = class {
    constructor() {
        this.worldTransform = new it, this.localTransform = new it, this.position = new xe(this.onChange, this, 0, 0), this.scale = new xe(this.onChange, this, 1, 1), this.pivot = new xe(this.onChange, this, 0, 0), this.skew = new xe(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
    }
    onChange() {
        this._localID++
    }
    updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
    }
    toString() {
        return `[@pixi/math:Transform position=(${this.position.x}, ${this.position.y}) rotation=${this.rotation} scale=(${this.scale.x}, ${this.scale.y}) skew=(${this.skew.x}, ${this.skew.y}) ]`
    }
    updateLocalTransform() {
        const e = this.localTransform;
        this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1)
    }
    updateTransform(e) {
        const t = this.localTransform;
        if (this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== e._worldID) {
            const i = e.worldTransform,
                s = this.worldTransform;
            s.a = t.a * i.a + t.b * i.c, s.b = t.a * i.b + t.b * i.d, s.c = t.c * i.a + t.d * i.c, s.d = t.c * i.b + t.d * i.d, s.tx = t.tx * i.a + t.ty * i.c + i.tx, s.ty = t.tx * i.b + t.ty * i.d + i.ty, this._parentID = e._worldID, this._worldID++
        }
    }
    setFromMatrix(e) {
        e.decompose(this), this._localID++
    }
    get rotation() {
        return this._rotation
    }
    set rotation(e) {
        this._rotation !== e && (this._rotation = e, this.updateSkew())
    }
};
let Ln = Ya;
Ln.IDENTITY = new Ya;
var ld = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,
    cd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`;

function Uo(e, t, i) {
    const s = e.createShader(t);
    return e.shaderSource(s, i), e.compileShader(s), s
}

function Tr(e) {
    const t = new Array(e);
    for (let i = 0; i < t.length; i++) t[i] = !1;
    return t
}

function qa(e, t) {
    switch (e) {
        case "float":
            return 0;
        case "vec2":
            return new Float32Array(2 * t);
        case "vec3":
            return new Float32Array(3 * t);
        case "vec4":
            return new Float32Array(4 * t);
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
            return 0;
        case "ivec2":
            return new Int32Array(2 * t);
        case "ivec3":
            return new Int32Array(3 * t);
        case "ivec4":
            return new Int32Array(4 * t);
        case "uvec2":
            return new Uint32Array(2 * t);
        case "uvec3":
            return new Uint32Array(3 * t);
        case "uvec4":
            return new Uint32Array(4 * t);
        case "bool":
            return !1;
        case "bvec2":
            return Tr(2 * t);
        case "bvec3":
            return Tr(3 * t);
        case "bvec4":
            return Tr(4 * t);
        case "mat2":
            return new Float32Array([1, 0, 0, 1]);
        case "mat3":
            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
    }
    return null
}
const ci = [{
        test: e => e.type === "float" && e.size === 1 && !e.isArray,
        code: e => `
            if(uv["${e}"] !== ud["${e}"].value)
            {
                ud["${e}"].value = uv["${e}"]
                gl.uniform1f(ud["${e}"].location, uv["${e}"])
            }
            `
    }, {
        test: (e, t) => (e.type === "sampler2D" || e.type === "samplerCube" || e.type === "sampler2DArray") && e.size === 1 && !e.isArray && (t == null || t.castToBaseTexture !== void 0),
        code: e => `t = syncData.textureCount++;

            renderer.texture.bind(uv["${e}"], t);

            if(ud["${e}"].value !== t)
            {
                ud["${e}"].value = t;
                gl.uniform1i(ud["${e}"].location, t);
; // eslint-disable-line max-len
            }`
    }, {
        test: (e, t) => e.type === "mat3" && e.size === 1 && !e.isArray && t.a !== void 0,
        code: e => `
            gl.uniformMatrix3fv(ud["${e}"].location, false, uv["${e}"].toArray(true));
            `,
        codeUbo: e => `
                var ${e}_matrix = uv.${e}.toArray(true);

                data[offset] = ${e}_matrix[0];
                data[offset+1] = ${e}_matrix[1];
                data[offset+2] = ${e}_matrix[2];
        
                data[offset + 4] = ${e}_matrix[3];
                data[offset + 5] = ${e}_matrix[4];
                data[offset + 6] = ${e}_matrix[5];
        
                data[offset + 8] = ${e}_matrix[6];
                data[offset + 9] = ${e}_matrix[7];
                data[offset + 10] = ${e}_matrix[8];
            `
    }, {
        test: (e, t) => e.type === "vec2" && e.size === 1 && !e.isArray && t.x !== void 0,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["${e}"].location, v.x, v.y);
                }`,
        codeUbo: e => `
                v = uv.${e};

                data[offset] = v.x;
                data[offset+1] = v.y;
            `
    }, {
        test: e => e.type === "vec2" && e.size === 1 && !e.isArray,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["${e}"].location, v[0], v[1]);
                }
            `
    }, {
        test: (e, t) => e.type === "vec4" && e.size === 1 && !e.isArray && t.width !== void 0,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["${e}"].location, v.x, v.y, v.width, v.height)
                }`,
        codeUbo: e => `
                    v = uv.${e};

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `
    }, {
        test: (e, t) => e.type === "vec4" && e.size === 1 && !e.isArray && t.red !== void 0,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
                    cv[3] = v.alpha;
                    gl.uniform4f(ud["${e}"].location, v.red, v.green, v.blue, v.alpha)
                }`,
        codeUbo: e => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                    data[offset+3] = v.alpha;
                `
    }, {
        test: (e, t) => e.type === "vec3" && e.size === 1 && !e.isArray && t.red !== void 0,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                {
                    cv[0] = v.red;
                    cv[1] = v.green;
                    cv[2] = v.blue;
    
                    gl.uniform3f(ud["${e}"].location, v.red, v.green, v.blue)
                }`,
        codeUbo: e => `
                    v = uv.${e};

                    data[offset] = v.red;
                    data[offset+1] = v.green;
                    data[offset+2] = v.blue;
                `
    }, {
        test: e => e.type === "vec4" && e.size === 1 && !e.isArray,
        code: e => `
                cv = ud["${e}"].value;
                v = uv["${e}"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["${e}"].location, v[0], v[1], v[2], v[3])
                }`
    }],
    ud = {
        float: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,
        vec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,
        vec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,
        vec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,
        int: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        ivec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        ivec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        ivec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        uint: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,
        uvec2: `
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,
        uvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,
        uvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,
        bool: `
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,
        bvec2: `
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,
        bvec3: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,
        bvec4: `
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        samplerCube: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,
        sampler2DArray: `
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`
    },
    dd = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        uint: "gl.uniform1uiv(location, v)",
        uvec2: "gl.uniform2uiv(location, v)",
        uvec3: "gl.uniform3uiv(location, v)",
        uvec4: "gl.uniform4uiv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
    };

function fd(e, t) {
    var s;
    const i = [`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];
    for (const r in e.uniforms) {
        const n = t[r];
        if (!n) {
            (s = e.uniforms[r]) != null && s.group && (e.uniforms[r].ubo ? i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                    `) : i.push(`
                        renderer.shader.syncUniformGroup(uv.${r}, syncData);
                    `));
            continue
        }
        const o = e.uniforms[r];
        let a = !1;
        for (let h = 0; h < ci.length; h++)
            if (ci[h].test(n, o)) {
                i.push(ci[h].code(r, o)), a = !0;
                break
            } if (!a) {
            const l = (n.size === 1 && !n.isArray ? ud : dd)[n.type].replace("location", `ud["${r}"].location`);
            i.push(`
            cu = ud["${r}"];
            cv = cu.value;
            v = uv["${r}"];
            ${l};`)
        }
    }
    return new Function("ud", "uv", "renderer", "syncData", i.join(`
`))
}
const Ka = {};
let Ye = Ka;

function pd() {
    if (Ye === Ka || Ye != null && Ye.isContextLost()) {
        const e = R.ADAPTER.createCanvas();
        let t;
        R.PREFER_ENV >= $e.WEBGL2 && (t = e.getContext("webgl2", {})), t || (t = e.getContext("webgl", {}) || e.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), Ye = t
    }
    return Ye
}
let ss;

function md() {
    if (!ss) {
        ss = Bt.MEDIUM;
        const e = pd();
        e && e.getShaderPrecisionFormat && (ss = e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision ? Bt.HIGH : Bt.MEDIUM)
    }
    return ss
}

function ko(e, t) {
    const i = e.getShaderSource(t).split(`
`).map((l, c) => `${c}: ${l}`),
        s = e.getShaderInfoLog(t),
        r = s.split(`
`),
        n = {},
        o = r.map(l => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(l => l && !n[l] ? (n[l] = !0, !0) : !1),
        a = [""];
    o.forEach(l => {
        i[l - 1] = `%c${i[l-1]}%c`, a.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
    });
    const h = i.join(`
`);
    a[0] = h, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn(...a), console.groupEnd()
}

function gd(e, t, i, s) {
    e.getProgramParameter(t, e.LINK_STATUS) || (e.getShaderParameter(i, e.COMPILE_STATUS) || ko(e, i), e.getShaderParameter(s, e.COMPILE_STATUS) || ko(e, s), console.error("PixiJS Error: Could not initialize shader."), e.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", e.getProgramInfoLog(t)))
}
const _d = {
    float: 1,
    vec2: 2,
    vec3: 3,
    vec4: 4,
    int: 1,
    ivec2: 2,
    ivec3: 3,
    ivec4: 4,
    uint: 1,
    uvec2: 2,
    uvec3: 3,
    uvec4: 4,
    bool: 1,
    bvec2: 2,
    bvec3: 3,
    bvec4: 4,
    mat2: 4,
    mat3: 9,
    mat4: 16,
    sampler2D: 1
};

function Za(e) {
    return _d[e]
}
let rs = null;
const Go = {
    FLOAT: "float",
    FLOAT_VEC2: "vec2",
    FLOAT_VEC3: "vec3",
    FLOAT_VEC4: "vec4",
    INT: "int",
    INT_VEC2: "ivec2",
    INT_VEC3: "ivec3",
    INT_VEC4: "ivec4",
    UNSIGNED_INT: "uint",
    UNSIGNED_INT_VEC2: "uvec2",
    UNSIGNED_INT_VEC3: "uvec3",
    UNSIGNED_INT_VEC4: "uvec4",
    BOOL: "bool",
    BOOL_VEC2: "bvec2",
    BOOL_VEC3: "bvec3",
    BOOL_VEC4: "bvec4",
    FLOAT_MAT2: "mat2",
    FLOAT_MAT3: "mat3",
    FLOAT_MAT4: "mat4",
    SAMPLER_2D: "sampler2D",
    INT_SAMPLER_2D: "sampler2D",
    UNSIGNED_INT_SAMPLER_2D: "sampler2D",
    SAMPLER_CUBE: "samplerCube",
    INT_SAMPLER_CUBE: "samplerCube",
    UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
    SAMPLER_2D_ARRAY: "sampler2DArray",
    INT_SAMPLER_2D_ARRAY: "sampler2DArray",
    UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
};

function Qa(e, t) {
    if (!rs) {
        const i = Object.keys(Go);
        rs = {};
        for (let s = 0; s < i.length; ++s) {
            const r = i[s];
            rs[e[r]] = Go[r]
        }
    }
    return rs[t]
}

function Ho(e, t, i) {
    if (e.substring(0, 9) !== "precision") {
        let s = t;
        return t === Bt.HIGH && i !== Bt.HIGH && (s = Bt.MEDIUM), `precision ${s} float;
${e}`
    } else if (i !== Bt.HIGH && e.substring(0, 15) === "precision highp") return e.replace("precision highp", "precision mediump");
    return e
}
let bi;

function yd() {
    if (typeof bi == "boolean") return bi;
    try {
        bi = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
            a: "b"
        }, "a", "b") === !0
    } catch {
        bi = !1
    }
    return bi
}
let vd = 0;
const ns = {},
    Qe = class {
        constructor(e, t, i = "pixi-shader", s = {}) {
            this.extra = {}, this.id = vd++, this.vertexSrc = e || Qe.defaultVertexSrc, this.fragmentSrc = t || Qe.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = s, this.vertexSrc.substring(0, 8) !== "#version" && (i = i.replace(/\s+/g, "-"), ns[i] ? (ns[i]++, i += `-${ns[i]}`) : ns[i] = 1, this.vertexSrc = `#define SHADER_NAME ${i}
${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${i}
${this.fragmentSrc}`, this.vertexSrc = Ho(this.vertexSrc, Qe.defaultVertexPrecision, Bt.HIGH), this.fragmentSrc = Ho(this.fragmentSrc, Qe.defaultFragmentPrecision, md())), this.glPrograms = {}, this.syncUniforms = null
        }
        static get defaultVertexSrc() {
            return cd
        }
        static get defaultFragmentSrc() {
            return ld
        }
        static from(e, t, i) {
            const s = e + t;
            let r = Bo[s];
            return r || (Bo[s] = r = new Qe(e, t, i)), r
        }
    };
let Vt = Qe;
Vt.defaultVertexPrecision = Bt.HIGH;
Vt.defaultFragmentPrecision = ue.apple.device ? Bt.HIGH : Bt.MEDIUM;
let xd = 0;
class Wt {
    constructor(t, i, s) {
        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = xd++, this.static = !!i, this.ubo = !!s, t instanceof at ? (this.buffer = t, this.buffer.type = ie.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new at(new Float32Array(1)), this.buffer.type = ie.UNIFORM_BUFFER, this.autoManage = !0))
    }
    update() {
        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
    }
    add(t, i, s) {
        if (!this.ubo) this.uniforms[t] = new Wt(i, s);
        else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")
    }
    static from(t, i, s) {
        return new Wt(t, i, s)
    }
    static uboFrom(t, i) {
        return new Wt(t, i ?? !0, !0)
    }
}
class se {
    constructor(t, i) {
        this.uniformBindCount = 0, this.program = t, i ? i instanceof Wt ? this.uniformGroup = i : this.uniformGroup = new Wt(i) : this.uniformGroup = new Wt({}), this.disposeRunner = new zt("disposeShader")
    }
    checkUniformExists(t, i) {
        if (i.uniforms[t]) return !0;
        for (const s in i.uniforms) {
            const r = i.uniforms[s];
            if (r.group && this.checkUniformExists(t, r)) return !0
        }
        return !1
    }
    destroy() {
        this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy()
    }
    get uniforms() {
        return this.uniformGroup.uniforms
    }
    static from(t, i, s) {
        const r = Vt.from(t, i);
        return new se(r, s)
    }
}
class bd {
    constructor(t, i) {
        if (this.vertexSrc = t, this.fragTemplate = i, this.programCache = {}, this.defaultGroupCache = {}, !i.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
        if (!i.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".')
    }
    generateShader(t) {
        if (!this.programCache[t]) {
            const s = new Int32Array(t);
            for (let n = 0; n < t; n++) s[n] = n;
            this.defaultGroupCache[t] = Wt.from({
                uSamplers: s
            }, !0);
            let r = this.fragTemplate;
            r = r.replace(/%count%/gi, `${t}`), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Vt(this.vertexSrc, r)
        }
        const i = {
            tint: new Float32Array([1, 1, 1, 1]),
            translationMatrix: new it,
            default: this.defaultGroupCache[t]
        };
        return new se(this.programCache[t], i)
    }
    generateSampleSrc(t) {
        let i = "";
        i += `
`, i += `
`;
        for (let s = 0; s < t; s++) s > 0 && (i += `
else `), s < t - 1 && (i += `if(vTextureId < ${s}.5)`), i += `
{`, i += `
	color = texture2D(uSamplers[${s}], vTextureCoord);`, i += `
}`;
        return i += `
`, i += `
`, i
    }
}
class an {
    constructor() {
        this.elements = [], this.ids = [], this.count = 0
    }
    clear() {
        for (let t = 0; t < this.count; t++) this.elements[t] = null;
        this.count = 0
    }
}

function Ed() {
    return !ue.apple.device
}

function Td(e) {
    let t = !0;
    const i = R.ADAPTER.getNavigator();
    if (ue.tablet || ue.phone) {
        if (ue.apple.device) {
            const s = i.userAgent.match(/OS (\d+)_(\d+)?/);
            s && parseInt(s[1], 10) < 11 && (t = !1)
        }
        if (ue.android.device) {
            const s = i.userAgent.match(/Android\s([0-9.]*)/);
            s && parseInt(s[1], 10) < 7 && (t = !1)
        }
    }
    return t ? e : 4
}
class Xs {
    constructor(t) {
        this.renderer = t
    }
    flush() {}
    destroy() {
        this.renderer = null
    }
    start() {}
    stop() {
        this.flush()
    }
    render(t) {}
}
var wd = `varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,
    Sd = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`;
const Nt = class extends Xs {
    constructor(e) {
        super(e), this.setShaderGenerator(), this.geometryClass = Wa, this.vertexSize = 6, this.state = pe.for2d(), this.size = Nt.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), e.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
    }
    static get defaultMaxTextures() {
        return this._defaultMaxTextures = this._defaultMaxTextures ?? Td(32), this._defaultMaxTextures
    }
    static set defaultMaxTextures(e) {
        this._defaultMaxTextures = e
    }
    static get canUploadSameBuffer() {
        return this._canUploadSameBuffer = this._canUploadSameBuffer ?? Ed(), this._canUploadSameBuffer
    }
    static set canUploadSameBuffer(e) {
        this._canUploadSameBuffer = e
    }
    get MAX_TEXTURES() {
        return Y("7.1.0", "BatchRenderer#MAX_TEXTURES renamed to BatchRenderer#maxTextures"), this.maxTextures
    }
    static get defaultVertexSrc() {
        return Sd
    }
    static get defaultFragmentTemplate() {
        return wd
    }
    setShaderGenerator({
        vertex: e = Nt.defaultVertexSrc,
        fragment: t = Nt.defaultFragmentTemplate
    } = {}) {
        this.shaderGenerator = new bd(e, t)
    }
    contextChange() {
        const e = this.renderer.gl;
        R.PREFER_ENV === $e.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS), Nt.defaultMaxTextures), this.maxTextures = Ju(this.maxTextures, e)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
        for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] = new this.geometryClass;
        this.initFlushBuffers()
    }
    initFlushBuffers() {
        const {
            _drawCallPool: e,
            _textureArrayPool: t
        } = Nt, i = this.size / 4, s = Math.floor(i / this.maxTextures) + 1;
        for (; e.length < i;) e.push(new nn);
        for (; t.length < s;) t.push(new an);
        for (let r = 0; r < this.maxTextures; r++) this._tempBoundTextures[r] = null
    }
    onPrerender() {
        this._flushId = 0
    }
    render(e) {
        e._texture.valid && (this._vertexCount + e.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += e.vertexData.length / 2, this._indexCount += e.indices.length, this._bufferedTextures[this._bufferSize] = e._texture.baseTexture, this._bufferedElements[this._bufferSize++] = e)
    }
    buildTexturesAndDrawCalls() {
        const {
            _bufferedTextures: e,
            maxTextures: t
        } = this, i = Nt._textureArrayPool, s = this.renderer.batch, r = this._tempBoundTextures, n = this.renderer.textureGC.count;
        let o = ++V._globalBatch,
            a = 0,
            h = i[0],
            l = 0;
        s.copyBoundTextures(r, t);
        for (let c = 0; c < this._bufferSize; ++c) {
            const u = e[c];
            e[c] = null, u._batchEnabled !== o && (h.count >= t && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, c), l = c, h = i[++a], ++o), u._batchEnabled = o, u.touched = n, h.elements[h.count++] = u)
        }
        h.count > 0 && (s.boundArray(h, r, o, t), this.buildDrawCalls(h, l, this._bufferSize), ++a, ++o);
        for (let c = 0; c < r.length; c++) r[c] = null;
        V._globalBatch = o
    }
    buildDrawCalls(e, t, i) {
        const {
            _bufferedElements: s,
            _attributeBuffer: r,
            _indexBuffer: n,
            vertexSize: o
        } = this, a = Nt._drawCallPool;
        let h = this._dcIndex,
            l = this._aIndex,
            c = this._iIndex,
            u = a[h];
        u.start = this._iIndex, u.texArray = e;
        for (let d = t; d < i; ++d) {
            const f = s[d],
                p = f._texture.baseTexture,
                g = Ha[p.alphaMode ? 1 : 0][f.blendMode];
            s[d] = null, t < d && u.blend !== g && (u.size = c - u.start, t = d, u = a[++h], u.texArray = e, u.start = c), this.packInterleavedGeometry(f, r, n, l, c), l += f.vertexData.length / 2 * o, c += f.indices.length, u.blend = g
        }
        t < i && (u.size = c - u.start, ++h), this._dcIndex = h, this._aIndex = l, this._iIndex = c
    }
    bindAndClearTexArray(e) {
        const t = this.renderer.texture;
        for (let i = 0; i < e.count; i++) t.bind(e.elements[i], e.ids[i]), e.elements[i] = null;
        e.count = 0
    }
    updateGeometry() {
        const {
            _packedGeometries: e,
            _attributeBuffer: t,
            _indexBuffer: i
        } = this;
        Nt.canUploadSameBuffer ? (e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(i), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, e[this._flushId] = new this.geometryClass), e[this._flushId]._buffer.update(t.rawBinaryData), e[this._flushId]._indexBuffer.update(i), this.renderer.geometry.bind(e[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
    }
    drawBatches() {
        const e = this._dcIndex,
            {
                gl: t,
                state: i
            } = this.renderer,
            s = Nt._drawCallPool;
        let r = null;
        for (let n = 0; n < e; n++) {
            const {
                texArray: o,
                type: a,
                size: h,
                start: l,
                blend: c
            } = s[n];
            r !== o && (r = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, i.set(this.state), t.drawElements(a, h, t.UNSIGNED_SHORT, l * 2)
        }
    }
    flush() {
        this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
    }
    start() {
        this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), Nt.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
    }
    stop() {
        this.flush()
    }
    destroy() {
        for (let e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] && this._packedGeometries[e].destroy();
        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy()
    }
    getAttributeBuffer(e) {
        const t = Ps(Math.ceil(e / 8)),
            i = Do(t),
            s = t * 8;
        this._aBuffers.length <= i && (this._iBuffers.length = i + 1);
        let r = this._aBuffers[s];
        return r || (this._aBuffers[s] = r = new sn(s * this.vertexSize * 4)), r
    }
    getIndexBuffer(e) {
        const t = Ps(Math.ceil(e / 12)),
            i = Do(t),
            s = t * 12;
        this._iBuffers.length <= i && (this._iBuffers.length = i + 1);
        let r = this._iBuffers[i];
        return r || (this._iBuffers[i] = r = new Uint16Array(s)), r
    }
    packInterleavedGeometry(e, t, i, s, r) {
        const {
            uint32View: n,
            float32View: o
        } = t, a = s / this.vertexSize, h = e.uvs, l = e.indices, c = e.vertexData, u = e._texture.baseTexture._batchLocation, d = Math.min(e.worldAlpha, 1), f = J.shared.setValue(e._tintRGB).toPremultiplied(d, e._texture.baseTexture.alphaMode > 0);
        for (let p = 0; p < c.length; p += 2) o[s++] = c[p], o[s++] = c[p + 1], o[s++] = h[p], o[s++] = h[p + 1], n[s++] = f, o[s++] = u;
        for (let p = 0; p < l.length; p++) i[r++] = a + l[p]
    }
};
let Ht = Nt;
Ht.defaultBatchSize = 4096;
Ht.extension = {
    name: "batch",
    type: D.RendererPlugin
};
Ht._drawCallPool = [];
Ht._textureArrayPool = [];
U.add(Ht);
var Ad = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,
    Cd = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const Si = class extends se {
    constructor(e, t, i) {
        const s = Vt.from(e || Si.defaultVertexSrc, t || Si.defaultFragmentSrc);
        super(s, i), this.padding = 0, this.resolution = Si.defaultResolution, this.multisample = Si.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new pe
    }
    apply(e, t, i, s, r) {
        e.applyFilter(this, t, i, s)
    }
    get blendMode() {
        return this.state.blendMode
    }
    set blendMode(e) {
        this.state.blendMode = e
    }
    get resolution() {
        return this._resolution
    }
    set resolution(e) {
        this._resolution = e
    }
    static get defaultVertexSrc() {
        return Cd
    }
    static get defaultFragmentSrc() {
        return Ad
    }
};
let bt = Si;
bt.defaultResolution = 1;
bt.defaultMultisample = ct.NONE;
class zs {
    constructor() {
        this.clearBeforeRender = !0, this._backgroundColor = new J(0), this.alpha = 1
    }
    init(t) {
        this.clearBeforeRender = t.clearBeforeRender;
        const {
            backgroundColor: i,
            background: s,
            backgroundAlpha: r
        } = t, n = s ?? i;
        n !== void 0 && (this.color = n), this.alpha = r
    }
    get color() {
        return this._backgroundColor.value
    }
    set color(t) {
        this._backgroundColor.setValue(t)
    }
    get alpha() {
        return this._backgroundColor.alpha
    }
    set alpha(t) {
        this._backgroundColor.setAlpha(t)
    }
    get backgroundColor() {
        return this._backgroundColor
    }
    destroy() {}
}
zs.defaultOptions = {
    backgroundAlpha: 1,
    backgroundColor: 0,
    clearBeforeRender: !0
};
zs.extension = {
    type: [D.RendererSystem, D.CanvasRendererSystem],
    name: "background"
};
U.add(zs);
class Ja {
    constructor(t) {
        this.renderer = t, this.emptyRenderer = new Xs(t), this.currentRenderer = this.emptyRenderer
    }
    setObjectRenderer(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
    }
    flush() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    reset() {
        this.setObjectRenderer(this.emptyRenderer)
    }
    copyBoundTextures(t, i) {
        const {
            boundTextures: s
        } = this.renderer.texture;
        for (let r = i - 1; r >= 0; --r) t[r] = s[r] || null, t[r] && (t[r]._batchLocation = r)
    }
    boundArray(t, i, s, r) {
        const {
            elements: n,
            ids: o,
            count: a
        } = t;
        let h = 0;
        for (let l = 0; l < a; l++) {
            const c = n[l],
                u = c._batchLocation;
            if (u >= 0 && u < r && i[u] === c) {
                o[l] = u;
                continue
            }
            for (; h < r;) {
                const d = i[h];
                if (d && d._batchEnabled === s && d._batchLocation === h) {
                    h++;
                    continue
                }
                o[l] = h, c._batchLocation = h, i[h] = c;
                break
            }
        }
    }
    destroy() {
        this.renderer = null
    }
}
Ja.extension = {
    type: D.RendererSystem,
    name: "batch"
};
U.add(Ja);
let $o = 0;
class Ws {
    constructor(t) {
        this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
            uint32Indices: !1
        }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this)
    }
    get isLost() {
        return !this.gl || this.gl.isContextLost()
    }
    contextChange(t) {
        this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = $o++
    }
    init(t) {
        if (t.context) this.initFromContext(t.context);
        else {
            const i = this.renderer.background.alpha < 1,
                s = t.premultipliedAlpha;
            this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
                alpha: i,
                premultipliedAlpha: s,
                antialias: t.antialias,
                stencil: !0,
                preserveDrawingBuffer: t.preserveDrawingBuffer,
                powerPreference: t.powerPreference
            })
        }
    }
    initFromContext(t) {
        this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = $o++, this.renderer.runners.contextChange.emit(t);
        const i = this.renderer.view;
        i.addEventListener !== void 0 && (i.addEventListener("webglcontextlost", this.handleContextLost, !1), i.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
    }
    initFromOptions(t) {
        const i = this.createContext(this.renderer.view, t);
        this.initFromContext(i)
    }
    createContext(t, i) {
        let s;
        if (R.PREFER_ENV >= $e.WEBGL2 && (s = t.getContext("webgl2", i)), s) this.webGLVersion = 2;
        else if (this.webGLVersion = 1, s = t.getContext("webgl", i) || t.getContext("experimental-webgl", i), !s) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = s, this.getExtensions(), this.gl
    }
    getExtensions() {
        const {
            gl: t
        } = this, i = {
            loseContext: t.getExtension("WEBGL_lose_context"),
            anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
            s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
            etc: t.getExtension("WEBGL_compressed_texture_etc"),
            etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
            pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
            atc: t.getExtension("WEBGL_compressed_texture_atc"),
            astc: t.getExtension("WEBGL_compressed_texture_astc")
        };
        this.webGLVersion === 1 ? Object.assign(this.extensions, i, {
            drawBuffers: t.getExtension("WEBGL_draw_buffers"),
            depthTexture: t.getExtension("WEBGL_depth_texture"),
            vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
            uint32ElementIndex: t.getExtension("OES_element_index_uint"),
            floatTexture: t.getExtension("OES_texture_float"),
            floatTextureLinear: t.getExtension("OES_texture_float_linear"),
            textureHalfFloat: t.getExtension("OES_texture_half_float"),
            textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : this.webGLVersion === 2 && Object.assign(this.extensions, i, {
            colorBufferFloat: t.getExtension("EXT_color_buffer_float")
        })
    }
    handleContextLost(t) {
        t.preventDefault(), setTimeout(() => {
            this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext()
        }, 0)
    }
    handleContextRestored() {
        this.renderer.runners.contextChange.emit(this.gl)
    }
    destroy() {
        const t = this.renderer.view;
        this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && this.gl.flush()
    }
    validateContext(t) {
        const i = t.getContextAttributes(),
            s = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
        s && (this.webGLVersion = 2), i && !i.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        const r = s || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
    }
}
Ws.defaultOptions = {
    context: null,
    antialias: !1,
    premultipliedAlpha: !0,
    preserveDrawingBuffer: !1,
    powerPreference: "default"
};
Ws.extension = {
    type: D.RendererSystem,
    name: "context"
};
U.add(Ws);
class Id extends Vi {
    upload(t, i, s) {
        const r = t.gl;
        r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === jt.UNPACK);
        const n = i.realWidth,
            o = i.realHeight;
        return s.width === n && s.height === o ? r.texSubImage2D(i.target, 0, 0, 0, n, o, i.format, s.type, this.data) : (s.width = n, s.height = o, r.texImage2D(i.target, 0, s.internalFormat, n, o, 0, i.format, s.type, this.data)), !0
    }
}
class hn {
    constructor(t, i) {
        this.width = Math.round(t || 100), this.height = Math.round(i || 100), this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new zt("disposeFramebuffer"), this.multisample = ct.NONE
    }
    get colorTexture() {
        return this.colorTextures[0]
    }
    addColorTexture(t = 0, i) {
        return this.colorTextures[t] = i || new V(null, {
            scaleMode: ce.NEAREST,
            resolution: 1,
            mipmap: re.OFF,
            width: this.width,
            height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this
    }
    addDepthTexture(t) {
        return this.depthTexture = t || new V(new Id(null, {
            width: this.width,
            height: this.height
        }), {
            scaleMode: ce.NEAREST,
            resolution: 1,
            width: this.width,
            height: this.height,
            mipmap: re.OFF,
            format: C.DEPTH_COMPONENT,
            type: k.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this
    }
    enableDepth() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
    }
    enableStencil() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
    }
    resize(t, i) {
        if (t = Math.round(t), i = Math.round(i), !(t === this.width && i === this.height)) {
            this.width = t, this.height = i, this.dirtyId++, this.dirtySize++;
            for (let s = 0; s < this.colorTextures.length; s++) {
                const r = this.colorTextures[s],
                    n = r.resolution;
                r.setSize(t / n, i / n)
            }
            if (this.depthTexture) {
                const s = this.depthTexture.resolution;
                this.depthTexture.setSize(t / s, i / s)
            }
        }
    }
    dispose() {
        this.disposeRunner.emit(this, !1)
    }
    destroyDepthTexture() {
        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
    }
}
class th extends V {
    constructor(t = {}) {
        if (typeof t == "number") {
            const i = arguments[0],
                s = arguments[1],
                r = arguments[2],
                n = arguments[3];
            t = {
                width: i,
                height: s,
                scaleMode: r,
                resolution: n
            }
        }
        t.width = t.width || 100, t.height = t.height || 100, t.multisample ?? (t.multisample = ct.NONE), super(null, t), this.mipmap = re.OFF, this.valid = !0, this._clear = new J([0, 0, 0, 0]), this.framebuffer = new hn(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}]
    }
    set clearColor(t) {
        this._clear.setValue(t)
    }
    get clearColor() {
        return this._clear.value
    }
    get clear() {
        return this._clear
    }
    resize(t, i) {
        this.framebuffer.resize(t * this.resolution, i * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
    }
    dispose() {
        this.framebuffer.dispose(), super.dispose()
    }
    destroy() {
        super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
    }
}
class Se extends Ui {
    constructor(t) {
        const i = t,
            s = i.naturalWidth || i.videoWidth || i.width,
            r = i.naturalHeight || i.videoHeight || i.height;
        super(s, r), this.source = t, this.noSubImage = !1
    }
    static crossOrigin(t, i, s) {
        s === void 0 && !i.startsWith("data:") ? t.crossOrigin = Ku(i) : s !== !1 && (t.crossOrigin = typeof s == "string" ? s : "anonymous")
    }
    upload(t, i, s, r) {
        const n = t.gl,
            o = i.realWidth,
            a = i.realHeight;
        if (r = r || this.source, typeof HTMLImageElement < "u" && r instanceof HTMLImageElement) {
            if (!r.complete || r.naturalWidth === 0) return !1
        } else if (typeof HTMLVideoElement < "u" && r instanceof HTMLVideoElement && r.readyState <= 1 && r.buffered.length === 0) return !1;
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i.alphaMode === jt.UNPACK), !this.noSubImage && i.target === n.TEXTURE_2D && s.width === o && s.height === a ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, i.format, s.type, r) : (s.width = o, s.height = a, n.texImage2D(i.target, 0, s.internalFormat, i.format, s.type, r)), !0
    }
    update() {
        if (this.destroyed) return;
        const t = this.source,
            i = t.naturalWidth || t.videoWidth || t.width,
            s = t.naturalHeight || t.videoHeight || t.height;
        this.resize(i, s), super.update()
    }
    dispose() {
        this.source = null
    }
}
class eh extends Se {
    constructor(t, i) {
        if (i = i || {}, typeof t == "string") {
            const s = new Image;
            Se.crossOrigin(s, t, i.crossorigin), s.src = t, t = s
        }
        super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = (i.createBitmap ?? R.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof i.alphaMode == "number" ? i.alphaMode : null, this.bitmap = null, this._load = null, i.autoLoad !== !1 && this.load()
    }
    load(t) {
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise((i, s) => {
            const r = this.source;
            this.url = r.src;
            const n = () => {
                this.destroyed || (r.onload = null, r.onerror = null, this.resize(r.width, r.height), this._load = null, this.createBitmap ? i(this.process()) : i(this))
            };
            r.complete && r.src ? n() : (r.onload = n, r.onerror = o => {
                s(o), this.onError.emit(o)
            })
        }), this._load)
    }
    process() {
        const t = this.source;
        if (this._process !== null) return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap) return Promise.resolve(this);
        const i = globalThis.createImageBitmap,
            s = !t.crossOrigin || t.crossOrigin === "anonymous";
        return this._process = fetch(t.src, {
            mode: s ? "cors" : "no-cors"
        }).then(r => r.blob()).then(r => i(r, 0, 0, t.width, t.height, {
            premultiplyAlpha: this.alphaMode === null || this.alphaMode === jt.UNPACK ? "premultiply" : "none"
        })).then(r => this.destroyed ? Promise.reject() : (this.bitmap = r, this.update(), this._process = null, Promise.resolve(this))), this._process
    }
    upload(t, i, s) {
        if (typeof this.alphaMode == "number" && (i.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(t, i, s);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
        if (super.upload(t, i, s, this.bitmap), !this.preserveBitmap) {
            let r = !0;
            const n = i._glTextures;
            for (const o in n) {
                const a = n[o];
                if (a !== s && a.dirtyId !== i.dirtyId) {
                    r = !1;
                    break
                }
            }
            r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
        }
        return !0
    }
    dispose() {
        this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
    }
    static test(t) {
        return typeof HTMLImageElement < "u" && (typeof t == "string" || t instanceof HTMLImageElement)
    }
}
class ih {
    constructor() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
    }
    set(t, i, s) {
        const r = i.width,
            n = i.height;
        if (s) {
            const o = t.width / 2 / r,
                a = t.height / 2 / n,
                h = t.x / r + o,
                l = t.y / n + a;
            s = st.add(s, st.NW), this.x0 = h + o * st.uX(s), this.y0 = l + a * st.uY(s), s = st.add(s, 2), this.x1 = h + o * st.uX(s), this.y1 = l + a * st.uY(s), s = st.add(s, 2), this.x2 = h + o * st.uX(s), this.y2 = l + a * st.uY(s), s = st.add(s, 2), this.x3 = h + o * st.uX(s), this.y3 = l + a * st.uY(s)
        } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
    }
    toString() {
        return `[@pixi/core:TextureUvs x0=${this.x0} y0=${this.y0} x1=${this.x1} y1=${this.y1} x2=${this.x2} y2=${this.y2} x3=${this.x3} y3=${this.y3}]`
    }
}
const Vo = new ih;

function os(e) {
    e.destroy = function() {}, e.on = function() {}, e.once = function() {}, e.emit = function() {}
}
class O extends Hi {
    constructor(t, i, s, r, n, o, a) {
        if (super(), this.noFrame = !1, i || (this.noFrame = !0, i = new z(0, 0, 1, 1)), t instanceof O && (t = t.baseTexture), this.baseTexture = t, this._frame = i, this.trim = r, this.valid = !1, this._uvs = Vo, this.uvMatrix = null, this.orig = s || i, this._rotate = Number(n || 0), n === !0) this._rotate = 2;
        else if (this._rotate % 2 !== 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        this.defaultAnchor = o ? new K(o.x, o.y) : new K(0, 0), this.defaultBorders = a, this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = i : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this)
    }
    update() {
        this.baseTexture.resource && this.baseTexture.resource.update()
    }
    onBaseTextureUpdated(t) {
        if (this.noFrame) {
            if (!this.baseTexture.valid) return;
            this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
        } else this.frame = this._frame;
        this.emit("update", this)
    }
    destroy(t) {
        if (this.baseTexture) {
            if (t) {
                const {
                    resource: i
                } = this.baseTexture;
                i != null && i.url && Qt[i.url] && O.removeFromCache(i.url), this.baseTexture.destroy()
            }
            this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
        }
        this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, O.removeFromCache(this), this.textureCacheIds = null
    }
    clone() {
        var r;
        const t = this._frame.clone(),
            i = this._frame === this.orig ? t : this.orig.clone(),
            s = new O(this.baseTexture, !this.noFrame && t, i, (r = this.trim) == null ? void 0 : r.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
        return this.noFrame && (s._frame = t), s
    }
    updateUvs() {
        this._uvs === Vo && (this._uvs = new ih), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
    }
    static from(t, i = {}, s = R.STRICT_TEXTURE_CACHE) {
        const r = typeof t == "string";
        let n = null;
        if (r) n = t;
        else if (t instanceof V) {
            if (!t.cacheId) {
                const a = (i == null ? void 0 : i.pixiIdPrefix) || "pixiid";
                t.cacheId = `${a}-${Ge()}`, V.addToCache(t, t.cacheId)
            }
            n = t.cacheId
        } else {
            if (!t._pixiId) {
                const a = (i == null ? void 0 : i.pixiIdPrefix) || "pixiid";
                t._pixiId = `${a}_${Ge()}`
            }
            n = t._pixiId
        }
        let o = Qt[n];
        if (r && s && !o) throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
        return !o && !(t instanceof V) ? (i.resolution || (i.resolution = Te(t)), o = new O(new V(t, i)), o.baseTexture.cacheId = n, V.addToCache(o.baseTexture, n), O.addToCache(o, n)) : !o && t instanceof V && (o = new O(t), O.addToCache(o, n)), o
    }
    static fromURL(t, i) {
        const s = Object.assign({
                autoLoad: !1
            }, i == null ? void 0 : i.resourceOptions),
            r = O.from(t, Object.assign({
                resourceOptions: s
            }, i), !1),
            n = r.baseTexture.resource;
        return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(() => Promise.resolve(r))
    }
    static fromBuffer(t, i, s, r) {
        return new O(V.fromBuffer(t, i, s, r))
    }
    static fromLoader(t, i, s, r) {
        const n = new V(t, Object.assign({
                scaleMode: V.defaultOptions.scaleMode,
                resolution: Te(i)
            }, r)),
            {
                resource: o
            } = n;
        o instanceof eh && (o.url = i);
        const a = new O(n);
        return s || (s = i), V.addToCache(a.baseTexture, s), O.addToCache(a, s), s !== i && (V.addToCache(a.baseTexture, i), O.addToCache(a, i)), a.baseTexture.valid ? Promise.resolve(a) : new Promise(h => {
            a.baseTexture.once("loaded", () => h(a))
        })
    }
    static addToCache(t, i) {
        i && (t.textureCacheIds.includes(i) || t.textureCacheIds.push(i), Qt[i] && Qt[i] !== t && console.warn(`Texture added to the cache with an id [${i}] that already had an entry`), Qt[i] = t)
    }
    static removeFromCache(t) {
        if (typeof t == "string") {
            const i = Qt[t];
            if (i) {
                const s = i.textureCacheIds.indexOf(t);
                return s > -1 && i.textureCacheIds.splice(s, 1), delete Qt[t], i
            }
        } else if (t != null && t.textureCacheIds) {
            for (let i = 0; i < t.textureCacheIds.length; ++i) Qt[t.textureCacheIds[i]] === t && delete Qt[t.textureCacheIds[i]];
            return t.textureCacheIds.length = 0, t
        }
        return null
    }
    get resolution() {
        return this.baseTexture.resolution
    }
    get frame() {
        return this._frame
    }
    set frame(t) {
        this._frame = t, this.noFrame = !1;
        const {
            x: i,
            y: s,
            width: r,
            height: n
        } = t, o = i + r > this.baseTexture.width, a = s + n > this.baseTexture.height;
        if (o || a) {
            const h = o && a ? "and" : "or",
                l = `X: ${i} + ${r} = ${i+r} > ${this.baseTexture.width}`,
                c = `Y: ${s} + ${n} = ${s+n} > ${this.baseTexture.height}`;
            throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${c}`)
        }
        this.valid = r && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs()
    }
    get rotate() {
        return this._rotate
    }
    set rotate(t) {
        this._rotate = t, this.valid && this.updateUvs()
    }
    get width() {
        return this.orig.width
    }
    get height() {
        return this.orig.height
    }
    castToBaseTexture() {
        return this.baseTexture
    }
    static get EMPTY() {
        return O._EMPTY || (O._EMPTY = new O(new V), os(O._EMPTY), os(O._EMPTY.baseTexture)), O._EMPTY
    }
    static get WHITE() {
        if (!O._WHITE) {
            const t = R.ADAPTER.createCanvas(16, 16),
                i = t.getContext("2d");
            t.width = 16, t.height = 16, i.fillStyle = "white", i.fillRect(0, 0, 16, 16), O._WHITE = new O(V.from(t)), os(O._WHITE), os(O._WHITE.baseTexture)
        }
        return O._WHITE
    }
}
class Ve extends O {
    constructor(t, i) {
        super(t, i), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
    }
    get framebuffer() {
        return this.baseTexture.framebuffer
    }
    get multisample() {
        return this.framebuffer.multisample
    }
    set multisample(t) {
        this.framebuffer.multisample = t
    }
    resize(t, i, s = !0) {
        const r = this.baseTexture.resolution,
            n = Math.round(t * r) / r,
            o = Math.round(i * r) / r;
        this.valid = n > 0 && o > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = o, s && this.baseTexture.resize(n, o), this.updateUvs()
    }
    setResolution(t) {
        const {
            baseTexture: i
        } = this;
        i.resolution !== t && (i.setResolution(t), this.resize(i.width, i.height, !1))
    }
    static create(t) {
        return new Ve(new th(t))
    }
}
class sh {
    constructor(t) {
        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
    }
    createTexture(t, i, s = ct.NONE) {
        const r = new th(Object.assign({
            width: t,
            height: i,
            resolution: 1,
            multisample: s
        }, this.textureOptions));
        return new Ve(r)
    }
    getOptimalTexture(t, i, s = 1, r = ct.NONE) {
        let n;
        t = Math.ceil(t * s - 1e-6), i = Math.ceil(i * s - 1e-6), !this.enableFullScreen || t !== this._pixelsWidth || i !== this._pixelsHeight ? (t = Ps(t), i = Ps(i), n = ((t & 65535) << 16 | i & 65535) >>> 0, r > 1 && (n += r * 4294967296)) : n = r > 1 ? -r : -1, this.texturePool[n] || (this.texturePool[n] = []);
        let o = this.texturePool[n].pop();
        return o || (o = this.createTexture(t, i, r)), o.filterPoolKey = n, o.setResolution(s), o
    }
    getFilterTexture(t, i, s) {
        const r = this.getOptimalTexture(t.width, t.height, i || t.resolution, s || ct.NONE);
        return r.filterFrame = t.filterFrame, r
    }
    returnTexture(t) {
        const i = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[i].push(t)
    }
    returnFilterTexture(t) {
        this.returnTexture(t)
    }
    clear(t) {
        if (t = t !== !1, t)
            for (const i in this.texturePool) {
                const s = this.texturePool[i];
                if (s)
                    for (let r = 0; r < s.length; r++) s[r].destroy(!0)
            }
        this.texturePool = {}
    }
    setScreenSize(t) {
        if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
            this.enableFullScreen = t.width > 0 && t.height > 0;
            for (const i in this.texturePool) {
                if (!(Number(i) < 0)) continue;
                const s = this.texturePool[i];
                if (s)
                    for (let r = 0; r < s.length; r++) s[r].destroy(!0);
                this.texturePool[i] = []
            }
            this._pixelsWidth = t.width, this._pixelsHeight = t.height
        }
    }
}
sh.SCREEN_KEY = -1;
class Pd extends we {
    constructor() {
        super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
    }
}
class rh extends we {
    constructor() {
        super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new at(this.vertices), this.uvBuffer = new at(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
    }
    map(t, i) {
        let s = 0,
            r = 0;
        return this.uvs[0] = s, this.uvs[1] = r, this.uvs[2] = s + i.width / t.width, this.uvs[3] = r, this.uvs[4] = s + i.width / t.width, this.uvs[5] = r + i.height / t.height, this.uvs[6] = s, this.uvs[7] = r + i.height / t.height, s = i.x, r = i.y, this.vertices[0] = s, this.vertices[1] = r, this.vertices[2] = s + i.width, this.vertices[3] = r, this.vertices[4] = s + i.width, this.vertices[5] = r + i.height, this.vertices[6] = s, this.vertices[7] = r + i.height, this.invalidate(), this
    }
    invalidate() {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
    }
}
class Rd {
    constructor() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = ct.NONE, this.sourceFrame = new z, this.destinationFrame = new z, this.bindingSourceFrame = new z, this.bindingDestinationFrame = new z, this.filters = [], this.transform = null
    }
    clear() {
        this.target = null, this.filters = null, this.renderTexture = null
    }
}
const as = [new K, new K, new K, new K],
    wr = new it;
class nh {
    constructor(t) {
        this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new sh, this.statePool = [], this.quad = new Pd, this.quadUv = new rh, this.tempRect = new z, this.activeState = {}, this.globalUniforms = new Wt({
            outputFrame: new z,
            inputSize: new Float32Array(4),
            inputPixel: new Float32Array(4),
            inputClamp: new Float32Array(4),
            resolution: 1,
            filterArea: new Float32Array(4),
            filterClamp: new Float32Array(4)
        }, !0), this.forceClear = !1, this.useMaxPadding = !1
    }
    init() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    push(t, i) {
        const s = this.renderer,
            r = this.defaultFilterStack,
            n = this.statePool.pop() || new Rd,
            o = this.renderer.renderTexture;
        let a = i[0].resolution,
            h = i[0].multisample,
            l = i[0].padding,
            c = i[0].autoFit,
            u = i[0].legacy ?? !0;
        for (let p = 1; p < i.length; p++) {
            const g = i[p];
            a = Math.min(a, g.resolution), h = Math.min(h, g.multisample), l = this.useMaxPadding ? Math.max(l, g.padding) : l + g.padding, c = c && g.autoFit, u = u || (g.legacy ?? !0)
        }
        r.length === 1 && (this.defaultFilterStack[0].renderTexture = o.current), r.push(n), n.resolution = a, n.multisample = h, n.legacy = u, n.target = t, n.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), n.sourceFrame.pad(l);
        const d = this.tempRect.copyFrom(o.sourceFrame);
        s.projection.transform && this.transformAABB(wr.copyFrom(s.projection.transform).invert(), d), c ? (n.sourceFrame.fit(d), (n.sourceFrame.width <= 0 || n.sourceFrame.height <= 0) && (n.sourceFrame.width = 0, n.sourceFrame.height = 0)) : n.sourceFrame.intersects(d) || (n.sourceFrame.width = 0, n.sourceFrame.height = 0), this.roundFrame(n.sourceFrame, o.current ? o.current.resolution : s.resolution, o.sourceFrame, o.destinationFrame, s.projection.transform), n.renderTexture = this.getOptimalFilterTexture(n.sourceFrame.width, n.sourceFrame.height, a, h), n.filters = i, n.destinationFrame.width = n.renderTexture.width, n.destinationFrame.height = n.renderTexture.height;
        const f = this.tempRect;
        f.x = 0, f.y = 0, f.width = n.sourceFrame.width, f.height = n.sourceFrame.height, n.renderTexture.filterFrame = n.sourceFrame, n.bindingSourceFrame.copyFrom(o.sourceFrame), n.bindingDestinationFrame.copyFrom(o.destinationFrame), n.transform = s.projection.transform, s.projection.transform = null, o.bind(n.renderTexture, n.sourceFrame, f), s.framebuffer.clear(0, 0, 0, 0)
    }
    pop() {
        const t = this.defaultFilterStack,
            i = t.pop(),
            s = i.filters;
        this.activeState = i;
        const r = this.globalUniforms.uniforms;
        r.outputFrame = i.sourceFrame, r.resolution = i.resolution;
        const n = r.inputSize,
            o = r.inputPixel,
            a = r.inputClamp;
        if (n[0] = i.destinationFrame.width, n[1] = i.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], o[0] = Math.round(n[0] * i.resolution), o[1] = Math.round(n[1] * i.resolution), o[2] = 1 / o[0], o[3] = 1 / o[1], a[0] = .5 * o[2], a[1] = .5 * o[3], a[2] = i.sourceFrame.width * n[2] - .5 * o[2], a[3] = i.sourceFrame.height * n[3] - .5 * o[3], i.legacy) {
            const l = r.filterArea;
            l[0] = i.destinationFrame.width, l[1] = i.destinationFrame.height, l[2] = i.sourceFrame.x, l[3] = i.sourceFrame.y, r.filterClamp = r.inputClamp
        }
        this.globalUniforms.update();
        const h = t[t.length - 1];
        if (this.renderer.framebuffer.blit(), s.length === 1) s[0].apply(this, i.renderTexture, h.renderTexture, Jt.BLEND, i), this.returnFilterTexture(i.renderTexture);
        else {
            let l = i.renderTexture,
                c = this.getOptimalFilterTexture(l.width, l.height, i.resolution);
            c.filterFrame = l.filterFrame;
            let u = 0;
            for (u = 0; u < s.length - 1; ++u) {
                u === 1 && i.multisample > 1 && (c = this.getOptimalFilterTexture(l.width, l.height, i.resolution), c.filterFrame = l.filterFrame), s[u].apply(this, l, c, Jt.CLEAR, i);
                const d = l;
                l = c, c = d
            }
            s[u].apply(this, l, h.renderTexture, Jt.BLEND, i), u > 1 && i.multisample > 1 && this.returnFilterTexture(i.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(c)
        }
        i.clear(), this.statePool.push(i)
    }
    bindAndClear(t, i = Jt.CLEAR) {
        const {
            renderTexture: s,
            state: r
        } = this.renderer;
        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t != null && t.filterFrame) {
            const o = this.tempRect;
            o.x = 0, o.y = 0, o.width = t.filterFrame.width, o.height = t.filterFrame.height, s.bind(t, t.filterFrame, o)
        } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? s.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
        const n = r.stateId & 1 || this.forceClear;
        (i === Jt.CLEAR || i === Jt.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0)
    }
    applyFilter(t, i, s, r) {
        const n = this.renderer;
        n.state.set(t.state), this.bindAndClear(s, r), t.uniforms.uSampler = i, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(i._frame, i.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(ee.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(ee.TRIANGLE_STRIP))
    }
    calculateSpriteMatrix(t, i) {
        const {
            sourceFrame: s,
            destinationFrame: r
        } = this.activeState, {
            orig: n
        } = i._texture, o = t.set(r.width, 0, 0, r.height, s.x, s.y), a = i.worldTransform.copyTo(it.TEMP_MATRIX);
        return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(i.anchor.x, i.anchor.y), o
    }
    destroy() {
        this.renderer = null, this.texturePool.clear(!1)
    }
    getOptimalFilterTexture(t, i, s = 1, r = ct.NONE) {
        return this.texturePool.getOptimalTexture(t, i, s, r)
    }
    getFilterTexture(t, i, s) {
        if (typeof t == "number") {
            const n = t;
            t = i, i = n
        }
        t = t || this.activeState.renderTexture;
        const r = this.texturePool.getOptimalTexture(t.width, t.height, i || t.resolution, s || ct.NONE);
        return r.filterFrame = t.filterFrame, r
    }
    returnFilterTexture(t) {
        this.texturePool.returnTexture(t)
    }
    emptyPool() {
        this.texturePool.clear(!0)
    }
    resize() {
        this.texturePool.setScreenSize(this.renderer.view)
    }
    transformAABB(t, i) {
        const s = as[0],
            r = as[1],
            n = as[2],
            o = as[3];
        s.set(i.left, i.top), r.set(i.left, i.bottom), n.set(i.right, i.top), o.set(i.right, i.bottom), t.apply(s, s), t.apply(r, r), t.apply(n, n), t.apply(o, o);
        const a = Math.min(s.x, r.x, n.x, o.x),
            h = Math.min(s.y, r.y, n.y, o.y),
            l = Math.max(s.x, r.x, n.x, o.x),
            c = Math.max(s.y, r.y, n.y, o.y);
        i.x = a, i.y = h, i.width = l - a, i.height = c - h
    }
    roundFrame(t, i, s, r, n) {
        if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0)) {
            if (n) {
                const {
                    a: o,
                    b: a,
                    c: h,
                    d: l
                } = n;
                if ((Math.abs(a) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(o) > 1e-4 || Math.abs(l) > 1e-4)) return
            }
            n = n ? wr.copyFrom(n) : wr.identity(), n.translate(-s.x, -s.y).scale(r.width / s.width, r.height / s.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(i), this.transformAABB(n.invert(), t)
        }
    }
}
nh.extension = {
    type: D.RendererSystem,
    name: "filter"
};
U.add(nh);
class Md {
    constructor(t) {
        this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = ct.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
    }
}
const Dd = new z;
class oh {
    constructor(t) {
        this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new hn(10, 10), this.msaaSamples = null
    }
    contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new z, this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
            let i = this.renderer.context.extensions.drawBuffers,
                s = this.renderer.context.extensions.depthTexture;
            R.PREFER_ENV === $e.WEBGL_LEGACY && (i = null, s = null), i ? t.drawBuffers = r => i.drawBuffersWEBGL(r) : (this.hasMRT = !1, t.drawBuffers = () => {}), s || (this.writeDepthTexture = !1)
        } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
    }
    bind(t, i, s = 0) {
        const {
            gl: r
        } = this;
        if (t) {
            const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
            this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== s && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = s), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, s)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
            for (let o = 0; o < t.colorTextures.length; o++) {
                const a = t.colorTextures[o];
                this.renderer.texture.unbind(a.parentTextureArray || a)
            }
            if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), i) {
                const o = i.width >> s,
                    a = i.height >> s,
                    h = o / i.width;
                this.setViewport(i.x * h, i.y * h, o, a)
            } else {
                const o = t.width >> s,
                    a = t.height >> s;
                this.setViewport(0, 0, o, a)
            }
        } else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), i ? this.setViewport(i.x, i.y, i.width, i.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
    }
    setViewport(t, i, s, r) {
        const n = this.viewport;
        t = Math.round(t), i = Math.round(i), s = Math.round(s), r = Math.round(r), (n.width !== s || n.height !== r || n.x !== t || n.y !== i) && (n.x = t, n.y = i, n.width = s, n.height = r, this.gl.viewport(t, i, s, r))
    }
    get size() {
        return this.current ? {
            x: 0,
            y: 0,
            width: this.current.width,
            height: this.current.height
        } : {
            x: 0,
            y: 0,
            width: this.renderer.width,
            height: this.renderer.height
        }
    }
    clear(t, i, s, r, n = Ur.COLOR | Ur.DEPTH) {
        const {
            gl: o
        } = this;
        o.clearColor(t, i, s, r), o.clear(n)
    }
    initFramebuffer(t) {
        const {
            gl: i
        } = this, s = new Md(i.createFramebuffer());
        return s.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = s, this.managedFramebuffers.push(t), t.disposeRunner.add(this), s
    }
    resizeFramebuffer(t) {
        const {
            gl: i
        } = this, s = t.glFramebuffers[this.CONTEXT_UID];
        s.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, s.stencil), s.msaaBuffer ? i.renderbufferStorageMultisample(i.RENDERBUFFER, s.multisample, i.DEPTH24_STENCIL8, t.width, t.height) : i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t.width, t.height));
        const r = t.colorTextures;
        let n = r.length;
        i.drawBuffers || (n = Math.min(n, 1));
        for (let o = 0; o < n; o++) {
            const a = r[o],
                h = a.parentTextureArray || a;
            this.renderer.texture.bind(h, 0), o === 0 && s.msaaBuffer && (i.bindRenderbuffer(i.RENDERBUFFER, s.msaaBuffer), i.renderbufferStorageMultisample(i.RENDERBUFFER, s.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height))
        }
        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
    }
    updateFramebuffer(t, i) {
        const {
            gl: s
        } = this, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures;
        let o = n.length;
        s.drawBuffers || (o = Math.min(o, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? r.msaaBuffer = r.msaaBuffer || s.createRenderbuffer() : r.msaaBuffer && (s.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null));
        const a = [];
        for (let h = 0; h < o; h++) {
            const l = n[h],
                c = l.parentTextureArray || l;
            this.renderer.texture.bind(c, 0), h === 0 && r.msaaBuffer ? (s.bindRenderbuffer(s.RENDERBUFFER, r.msaaBuffer), s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, c._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, r.msaaBuffer)) : (s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + h, l.target, c._glTextures[this.CONTEXT_UID].texture, i), a.push(s.COLOR_ATTACHMENT0 + h))
        }
        if (a.length > 1 && s.drawBuffers(a), t.depthTexture && this.writeDepthTexture) {
            const l = t.depthTexture;
            this.renderer.texture.bind(l, 0), s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, l._glTextures[this.CONTEXT_UID].texture, i)
        }(t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture) ? (r.stencil = r.stencil || s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, r.stencil), r.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, s.DEPTH24_STENCIL8, t.width, t.height) : s.renderbufferStorage(s.RENDERBUFFER, s.DEPTH_STENCIL, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.RENDERBUFFER, r.stencil)) : r.stencil && (s.deleteRenderbuffer(r.stencil), r.stencil = null)
    }
    canMultisampleFramebuffer(t) {
        return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture
    }
    detectSamples(t) {
        const {
            msaaSamples: i
        } = this;
        let s = ct.NONE;
        if (t <= 1 || i === null) return s;
        for (let r = 0; r < i.length; r++)
            if (i[r] <= t) {
                s = i[r];
                break
            } return s === 1 && (s = ct.NONE), s
    }
    blit(t, i, s) {
        const {
            current: r,
            renderer: n,
            gl: o,
            CONTEXT_UID: a
        } = this;
        if (n.context.webGLVersion !== 2 || !r) return;
        const h = r.glFramebuffers[a];
        if (!h) return;
        if (!t) {
            if (!h.msaaBuffer) return;
            const c = r.colorTextures[0];
            if (!c) return;
            h.blitFramebuffer || (h.blitFramebuffer = new hn(r.width, r.height), h.blitFramebuffer.addColorTexture(0, c)), t = h.blitFramebuffer, t.colorTextures[0] !== c && (t.colorTextures[0] = c, t.dirtyId++, t.dirtyFormat++), (t.width !== r.width || t.height !== r.height) && (t.width = r.width, t.height = r.height, t.dirtyId++, t.dirtySize++)
        }
        i || (i = Dd, i.width = r.width, i.height = r.height), s || (s = i);
        const l = i.width === s.width && i.height === s.height;
        this.bind(t), o.bindFramebuffer(o.READ_FRAMEBUFFER, h.framebuffer), o.blitFramebuffer(i.left, i.top, i.right, i.bottom, s.left, s.top, s.right, s.bottom, o.COLOR_BUFFER_BIT, l ? o.NEAREST : o.LINEAR), o.bindFramebuffer(o.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer)
    }
    disposeFramebuffer(t, i) {
        const s = t.glFramebuffers[this.CONTEXT_UID],
            r = this.gl;
        if (!s) return;
        delete t.glFramebuffers[this.CONTEXT_UID];
        const n = this.managedFramebuffers.indexOf(t);
        n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), i || (r.deleteFramebuffer(s.framebuffer), s.msaaBuffer && r.deleteRenderbuffer(s.msaaBuffer), s.stencil && r.deleteRenderbuffer(s.stencil)), s.blitFramebuffer && this.disposeFramebuffer(s.blitFramebuffer, i)
    }
    disposeAll(t) {
        const i = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (let s = 0; s < i.length; s++) this.disposeFramebuffer(i[s], t)
    }
    forceStencil() {
        const t = this.current;
        if (!t) return;
        const i = t.glFramebuffers[this.CONTEXT_UID];
        if (!i || i.stencil) return;
        t.stencil = !0;
        const s = t.width,
            r = t.height,
            n = this.gl,
            o = n.createRenderbuffer();
        n.bindRenderbuffer(n.RENDERBUFFER, o), i.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, i.multisample, n.DEPTH24_STENCIL8, s, r) : n.renderbufferStorage(n.RENDERBUFFER, n.DEPTH_STENCIL, s, r), i.stencil = o, n.framebufferRenderbuffer(n.FRAMEBUFFER, n.DEPTH_STENCIL_ATTACHMENT, n.RENDERBUFFER, o)
    }
    reset() {
        this.current = this.unknownFramebuffer, this.viewport = new z
    }
    destroy() {
        this.renderer = null
    }
}
oh.extension = {
    type: D.RendererSystem,
    name: "framebuffer"
};
U.add(oh);
const Sr = {
    5126: 4,
    5123: 2,
    5121: 1
};
class ah {
    constructor(t) {
        this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
    }
    contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl,
            i = this.renderer.context;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, i.webGLVersion !== 2) {
            let s = this.renderer.context.extensions.vertexArrayObject;
            R.PREFER_ENV === $e.WEBGL_LEGACY && (s = null), s ? (t.createVertexArray = () => s.createVertexArrayOES(), t.bindVertexArray = r => s.bindVertexArrayOES(r), t.deleteVertexArray = r => s.deleteVertexArrayOES(r)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null)
        }
        if (i.webGLVersion !== 2) {
            const s = t.getExtension("ANGLE_instanced_arrays");
            s ? (t.vertexAttribDivisor = (r, n) => s.vertexAttribDivisorANGLE(r, n), t.drawElementsInstanced = (r, n, o, a, h) => s.drawElementsInstancedANGLE(r, n, o, a, h), t.drawArraysInstanced = (r, n, o, a) => s.drawArraysInstancedANGLE(r, n, o, a)) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = i.webGLVersion === 2 || !!i.extensions.uint32ElementIndex
    }
    bind(t, i) {
        i = i || this.renderer.shader.shader;
        const {
            gl: s
        } = this;
        let r = t.glVertexArrayObjects[this.CONTEXT_UID],
            n = !1;
        r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0);
        const o = r[i.program.id] || this.initGeometryVao(t, i, n);
        this._activeGeometry = t, this._activeVao !== o && (this._activeVao = o, this.hasVao ? s.bindVertexArray(o) : this.activateVao(t, i.program)), this.updateBuffers()
    }
    reset() {
        this.unbind()
    }
    updateBuffers() {
        const t = this._activeGeometry,
            i = this.renderer.buffer;
        for (let s = 0; s < t.buffers.length; s++) {
            const r = t.buffers[s];
            i.update(r)
        }
    }
    checkCompatibility(t, i) {
        const s = t.attributes,
            r = i.attributeData;
        for (const n in r)
            if (!s[n]) throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)
    }
    getSignature(t, i) {
        const s = t.attributes,
            r = i.attributeData,
            n = ["g", t.id];
        for (const o in s) r[o] && n.push(o, r[o].location);
        return n.join("-")
    }
    initGeometryVao(t, i, s = !0) {
        const r = this.gl,
            n = this.CONTEXT_UID,
            o = this.renderer.buffer,
            a = i.program;
        a.glPrograms[n] || this.renderer.shader.generateProgram(i), this.checkCompatibility(t, a);
        const h = this.getSignature(t, a),
            l = t.glVertexArrayObjects[this.CONTEXT_UID];
        let c = l[h];
        if (c) return l[a.id] = c, c;
        const u = t.buffers,
            d = t.attributes,
            f = {},
            p = {};
        for (const g in u) f[g] = 0, p[g] = 0;
        for (const g in d) !d[g].size && a.attributeData[g] ? d[g].size = a.attributeData[g].size : d[g].size || console.warn(`PIXI Geometry attribute '${g}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[g].buffer] += d[g].size * Sr[d[g].type];
        for (const g in d) {
            const m = d[g],
                y = m.size;
            m.stride === void 0 && (f[m.buffer] === y * Sr[m.type] ? m.stride = 0 : m.stride = f[m.buffer]), m.start === void 0 && (m.start = p[m.buffer], p[m.buffer] += y * Sr[m.type])
        }
        c = r.createVertexArray(), r.bindVertexArray(c);
        for (let g = 0; g < u.length; g++) {
            const m = u[g];
            o.bind(m), s && m._glBuffers[n].refCount++
        }
        return this.activateVao(t, a), l[a.id] = c, l[h] = c, r.bindVertexArray(null), o.unbind(ie.ARRAY_BUFFER), c
    }
    disposeGeometry(t, i) {
        var a;
        if (!this.managedGeometries[t.id]) return;
        delete this.managedGeometries[t.id];
        const s = t.glVertexArrayObjects[this.CONTEXT_UID],
            r = this.gl,
            n = t.buffers,
            o = (a = this.renderer) == null ? void 0 : a.buffer;
        if (t.disposeRunner.remove(this), !!s) {
            if (o)
                for (let h = 0; h < n.length; h++) {
                    const l = n[h]._glBuffers[this.CONTEXT_UID];
                    l && (l.refCount--, l.refCount === 0 && !i && o.dispose(n[h], i))
                }
            if (!i) {
                for (const h in s)
                    if (h[0] === "g") {
                        const l = s[h];
                        this._activeVao === l && this.unbind(), r.deleteVertexArray(l)
                    }
            }
            delete t.glVertexArrayObjects[this.CONTEXT_UID]
        }
    }
    disposeAll(t) {
        const i = Object.keys(this.managedGeometries);
        for (let s = 0; s < i.length; s++) this.disposeGeometry(this.managedGeometries[i[s]], t)
    }
    activateVao(t, i) {
        const s = this.gl,
            r = this.CONTEXT_UID,
            n = this.renderer.buffer,
            o = t.buffers,
            a = t.attributes;
        t.indexBuffer && n.bind(t.indexBuffer);
        let h = null;
        for (const l in a) {
            const c = a[l],
                u = o[c.buffer],
                d = u._glBuffers[r];
            if (i.attributeData[l]) {
                h !== d && (n.bind(u), h = d);
                const f = i.attributeData[l].location;
                if (s.enableVertexAttribArray(f), s.vertexAttribPointer(f, c.size, c.type || s.FLOAT, c.normalized, c.stride, c.start), c.instance)
                    if (this.hasInstance) s.vertexAttribDivisor(f, c.divisor);
                    else throw new Error("geometry error, GPU Instancing is not supported on this device")
            }
        }
    }
    draw(t, i, s, r) {
        const {
            gl: n
        } = this, o = this._activeGeometry;
        if (o.indexBuffer) {
            const a = o.indexBuffer.data.BYTES_PER_ELEMENT,
                h = a === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
            a === 2 || a === 4 && this.canUseUInt32ElementIndex ? o.instanced ? n.drawElementsInstanced(t, i || o.indexBuffer.data.length, h, (s || 0) * a, r || 1) : n.drawElements(t, i || o.indexBuffer.data.length, h, (s || 0) * a) : console.warn("unsupported index buffer type: uint32")
        } else o.instanced ? n.drawArraysInstanced(t, s, i || o.getSize(), r || 1) : n.drawArrays(t, s, i || o.getSize());
        return this
    }
    unbind() {
        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
    }
    destroy() {
        this.renderer = null
    }
}
ah.extension = {
    type: D.RendererSystem,
    name: "geometry"
};
U.add(ah);
const Xo = new it;
class hh {
    constructor(t, i) {
        this._texture = t, this.mapCoord = new it, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof i > "u" ? .5 : i, this.isSimple = !1
    }
    get texture() {
        return this._texture
    }
    set texture(t) {
        this._texture = t, this._textureID = -1
    }
    multiplyUvs(t, i) {
        i === void 0 && (i = t);
        const s = this.mapCoord;
        for (let r = 0; r < t.length; r += 2) {
            const n = t[r],
                o = t[r + 1];
            i[r] = n * s.a + o * s.c + s.tx, i[r + 1] = n * s.b + o * s.d + s.ty
        }
        return i
    }
    update(t) {
        const i = this._texture;
        if (!i || !i.valid || !t && this._textureID === i._updateID) return !1;
        this._textureID = i._updateID, this._updateID++;
        const s = i._uvs;
        this.mapCoord.set(s.x1 - s.x0, s.y1 - s.y0, s.x3 - s.x0, s.y3 - s.y0, s.x0, s.y0);
        const r = i.orig,
            n = i.trim;
        n && (Xo.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Xo));
        const o = i.baseTexture,
            a = this.uClampFrame,
            h = this.clampMargin / o.resolution,
            l = this.clampOffset;
        return a[0] = (i._frame.x + h + l) / o.width, a[1] = (i._frame.y + h + l) / o.height, a[2] = (i._frame.x + i._frame.width - h + l) / o.width, a[3] = (i._frame.y + i._frame.height - h + l) / o.height, this.uClampOffset[0] = l / o.realWidth, this.uClampOffset[1] = l / o.realHeight, this.isSimple = i._frame.width === o.width && i._frame.height === o.height && i.rotate === 0, !0
    }
}
var Bd = `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,
    Fd = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`;
class Od extends bt {
    constructor(t, i, s) {
        let r = null;
        typeof t != "string" && i === void 0 && s === void 0 && (r = t, t = void 0, i = void 0, s = void 0), super(t || Fd, i || Bd, s), this.maskSprite = r, this.maskMatrix = new it
    }
    get maskSprite() {
        return this._maskSprite
    }
    set maskSprite(t) {
        this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1)
    }
    apply(t, i, s, r) {
        const n = this._maskSprite,
            o = n._texture;
        o.valid && (o.uvMatrix || (o.uvMatrix = new hh(o, 0)), o.uvMatrix.update(), this.uniforms.npmAlpha = o.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.uvMatrix.uClampFrame, t.applyFilter(this, i, s, r))
    }
}
class Ld {
    constructor(t = null) {
        this.type = dt.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = bt.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null
    }
    get filter() {
        return this._filters ? this._filters[0] : null
    }
    set filter(t) {
        t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
    }
    reset() {
        this.pooled && (this.maskObject = null, this.type = dt.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null
    }
    copyCountersOrReset(t) {
        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
    }
}
class lh {
    constructor(t) {
        this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
    }
    setMaskStack(t) {
        this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
    }
    push(t, i) {
        let s = i;
        if (!s.isMaskData) {
            const n = this.maskDataPool.pop() || new Ld;
            n.pooled = !0, n.maskObject = i, s = n
        }
        const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        if (s.copyCountersOrReset(r), s._colorMask = r ? r._colorMask : 15, s.autoDetect && this.detect(s), s._target = t, s.type !== dt.SPRITE && this.maskStack.push(s), s.enabled) switch (s.type) {
            case dt.SCISSOR:
                this.renderer.scissor.push(s);
                break;
            case dt.STENCIL:
                this.renderer.stencil.push(s);
                break;
            case dt.SPRITE:
                s.copyCountersOrReset(null), this.pushSpriteMask(s);
                break;
            case dt.COLOR:
                this.pushColorMask(s);
                break
        }
        s.type === dt.SPRITE && this.maskStack.push(s)
    }
    pop(t) {
        const i = this.maskStack.pop();
        if (!(!i || i._target !== t)) {
            if (i.enabled) switch (i.type) {
                case dt.SCISSOR:
                    this.renderer.scissor.pop(i);
                    break;
                case dt.STENCIL:
                    this.renderer.stencil.pop(i.maskObject);
                    break;
                case dt.SPRITE:
                    this.popSpriteMask(i);
                    break;
                case dt.COLOR:
                    this.popColorMask(i);
                    break
            }
            if (i.reset(), i.pooled && this.maskDataPool.push(i), this.maskStack.length !== 0) {
                const s = this.maskStack[this.maskStack.length - 1];
                s.type === dt.SPRITE && s._filters && (s._filters[0].maskSprite = s.maskObject)
            }
        }
    }
    detect(t) {
        const i = t.maskObject;
        i ? i.isSprite ? t.type = dt.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = dt.SCISSOR : t.type = dt.STENCIL : t.type = dt.COLOR
    }
    pushSpriteMask(t) {
        const {
            maskObject: i
        } = t, s = t._target;
        let r = t._filters;
        r || (r = this.alphaMaskPool[this.alphaMaskIndex], r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new Od]));
        const n = this.renderer,
            o = n.renderTexture;
        let a, h;
        if (o.current) {
            const c = o.current;
            a = t.resolution || c.resolution, h = t.multisample ?? c.multisample
        } else a = t.resolution || n.resolution, h = t.multisample ?? n.multisample;
        r[0].resolution = a, r[0].multisample = h, r[0].maskSprite = i;
        const l = s.filterArea;
        s.filterArea = i.getBounds(!0), n.filter.push(s, r), s.filterArea = l, t._filters || this.alphaMaskIndex++
    }
    popSpriteMask(t) {
        this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
    }
    pushColorMask(t) {
        const i = t._colorMask,
            s = t._colorMask = i & t.colorMask;
        s !== i && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)
    }
    popColorMask(t) {
        const i = t._colorMask,
            s = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
        s !== i && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)
    }
    destroy() {
        this.renderer = null
    }
}
lh.extension = {
    type: D.RendererSystem,
    name: "mask"
};
U.add(lh);
class ch {
    constructor(t) {
        this.renderer = t, this.maskStack = [], this.glConst = 0
    }
    getStackLength() {
        return this.maskStack.length
    }
    setMaskStack(t) {
        const {
            gl: i
        } = this.renderer, s = this.getStackLength();
        this.maskStack = t;
        const r = this.getStackLength();
        r !== s && (r === 0 ? i.disable(this.glConst) : (i.enable(this.glConst), this._useCurrent()))
    }
    _useCurrent() {}
    destroy() {
        this.renderer = null, this.maskStack = null
    }
}
const zo = new it,
    Wo = [],
    ys = class extends ch {
        constructor(e) {
            super(e), this.glConst = R.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
        }
        getStackLength() {
            const e = this.maskStack[this.maskStack.length - 1];
            return e ? e._scissorCounter : 0
        }
        calcScissorRect(e) {
            if (e._scissorRectLocal) return;
            const t = e._scissorRect,
                {
                    maskObject: i
                } = e,
                {
                    renderer: s
                } = this,
                r = s.renderTexture,
                n = i.getBounds(!0, Wo.pop() ?? new z);
            this.roundFrameToPixels(n, r.current ? r.current.resolution : s.resolution, r.sourceFrame, r.destinationFrame, s.projection.transform), t && n.fit(t), e._scissorRectLocal = n
        }
        static isMatrixRotated(e) {
            if (!e) return !1;
            const {
                a: t,
                b: i,
                c: s,
                d: r
            } = e;
            return (Math.abs(i) > 1e-4 || Math.abs(s) > 1e-4) && (Math.abs(t) > 1e-4 || Math.abs(r) > 1e-4)
        }
        testScissor(e) {
            const {
                maskObject: t
            } = e;
            if (!t.isFastRect || !t.isFastRect() || ys.isMatrixRotated(t.worldTransform) || ys.isMatrixRotated(this.renderer.projection.transform)) return !1;
            this.calcScissorRect(e);
            const i = e._scissorRectLocal;
            return i.width > 0 && i.height > 0
        }
        roundFrameToPixels(e, t, i, s, r) {
            ys.isMatrixRotated(r) || (r = r ? zo.copyFrom(r) : zo.identity(), r.translate(-i.x, -i.y).scale(s.width / i.width, s.height / i.height).translate(s.x, s.y), this.renderer.filter.transformAABB(r, e), e.fit(s), e.x = Math.round(e.x * t), e.y = Math.round(e.y * t), e.width = Math.round(e.width * t), e.height = Math.round(e.height * t))
        }
        push(e) {
            e._scissorRectLocal || this.calcScissorRect(e);
            const {
                gl: t
            } = this.renderer;
            e._scissorRect || t.enable(t.SCISSOR_TEST), e._scissorCounter++, e._scissorRect = e._scissorRectLocal, this._useCurrent()
        }
        pop(e) {
            const {
                gl: t
            } = this.renderer;
            e && Wo.push(e._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : t.disable(t.SCISSOR_TEST)
        }
        _useCurrent() {
            const e = this.maskStack[this.maskStack.length - 1]._scissorRect;
            let t;
            this.renderer.renderTexture.current ? t = e.y : t = this.renderer.height - e.height - e.y, this.renderer.gl.scissor(e.x, t, e.width, e.height)
        }
    };
let uh = ys;
uh.extension = {
    type: D.RendererSystem,
    name: "scissor"
};
U.add(uh);
class dh extends ch {
    constructor(t) {
        super(t), this.glConst = R.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
    }
    getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0
    }
    push(t) {
        const i = t.maskObject,
            {
                gl: s
            } = this.renderer,
            r = t._stencilCounter;
        r === 0 && (this.renderer.framebuffer.forceStencil(), s.clearStencil(0), s.clear(s.STENCIL_BUFFER_BIT), s.enable(s.STENCIL_TEST)), t._stencilCounter++;
        const n = t._colorMask;
        n !== 0 && (t._colorMask = 0, s.colorMask(!1, !1, !1, !1)), s.stencilFunc(s.EQUAL, r, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.INCR), i.renderable = !0, i.render(this.renderer), this.renderer.batch.flush(), i.renderable = !1, n !== 0 && (t._colorMask = n, s.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)), this._useCurrent()
    }
    pop(t) {
        const i = this.renderer.gl;
        if (this.getStackLength() === 0) i.disable(i.STENCIL_TEST);
        else {
            const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null,
                r = s ? s._colorMask : 15;
            r !== 0 && (s._colorMask = 0, i.colorMask(!1, !1, !1, !1)), i.stencilOp(i.KEEP, i.KEEP, i.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, r !== 0 && (s._colorMask = r, i.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)), this._useCurrent()
        }
    }
    _useCurrent() {
        const t = this.renderer.gl;
        t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
    }
}
dh.extension = {
    type: D.RendererSystem,
    name: "stencil"
};
U.add(dh);
class fh {
    constructor(t) {
        this.renderer = t, this.plugins = {}, Object.defineProperties(this.plugins, {
            extract: {
                enumerable: !1,
                get() {
                    return Y("7.0.0", "renderer.plugins.extract has moved to renderer.extract"), t.extract
                }
            },
            prepare: {
                enumerable: !1,
                get() {
                    return Y("7.0.0", "renderer.plugins.prepare has moved to renderer.prepare"), t.prepare
                }
            },
            interaction: {
                enumerable: !1,
                get() {
                    return Y("7.0.0", "renderer.plugins.interaction has been deprecated, use renderer.events"), t.events
                }
            }
        })
    }
    init() {
        const t = this.rendererPlugins;
        for (const i in t) this.plugins[i] = new t[i](this.renderer)
    }
    destroy() {
        for (const t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null
    }
}
fh.extension = {
    type: [D.RendererSystem, D.CanvasRendererSystem],
    name: "_plugin"
};
U.add(fh);
class ph {
    constructor(t) {
        this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new it, this.transform = null
    }
    update(t, i, s, r) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = i || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, s, r), this.transform && this.projectionMatrix.append(this.transform);
        const n = this.renderer;
        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
    }
    calculateProjection(t, i, s, r) {
        const n = this.projectionMatrix,
            o = r ? -1 : 1;
        n.identity(), n.a = 1 / i.width * 2, n.d = o * (1 / i.height * 2), n.tx = -1 - i.x * n.a, n.ty = -o - i.y * n.d
    }
    setTransform(t) {}
    destroy() {
        this.renderer = null
    }
}
ph.extension = {
    type: D.RendererSystem,
    name: "projection"
};
U.add(ph);
const Nd = new Ln;
class mh {
    constructor(t) {
        this.renderer = t, this._tempMatrix = new it
    }
    generateTexture(t, i) {
        const {
            region: s,
            ...r
        } = i || {}, n = s || t.getLocalBounds(null, !0);
        n.width === 0 && (n.width = 1), n.height === 0 && (n.height = 1);
        const o = Ve.create({
            width: n.width,
            height: n.height,
            ...r
        });
        this._tempMatrix.tx = -n.x, this._tempMatrix.ty = -n.y;
        const a = t.transform;
        return t.transform = Nd, this.renderer.render(t, {
            renderTexture: o,
            transform: this._tempMatrix,
            skipUpdateTransform: !!t.parent,
            blit: !0
        }), t.transform = a, o
    }
    destroy() {}
}
mh.extension = {
    type: [D.RendererSystem, D.CanvasRendererSystem],
    name: "textureGenerator"
};
U.add(mh);
const Ie = new z,
    Ei = new z;
class gh {
    constructor(t) {
        this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new z, this.destinationFrame = new z, this.viewportFrame = new z
    }
    contextChange() {
        var i;
        const t = (i = this.renderer) == null ? void 0 : i.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(t && t.alpha && t.premultipliedAlpha)
    }
    bind(t = null, i, s) {
        const r = this.renderer;
        this.current = t;
        let n, o, a;
        t ? (n = t.baseTexture, a = n.resolution, i || (Ie.width = t.frame.width, Ie.height = t.frame.height, i = Ie), s || (Ei.x = t.frame.x, Ei.y = t.frame.y, Ei.width = i.width, Ei.height = i.height, s = Ei), o = n.framebuffer) : (a = r.resolution, i || (Ie.width = r._view.screen.width, Ie.height = r._view.screen.height, i = Ie), s || (s = Ie, s.width = i.width, s.height = i.height));
        const h = this.viewportFrame;
        h.x = s.x * a, h.y = s.y * a, h.width = s.width * a, h.height = s.height * a, t || (h.y = r.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(o, h), this.renderer.projection.update(s, i, a, !o), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(i), this.destinationFrame.copyFrom(s)
    }
    clear(t, i) {
        const s = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor,
            r = J.shared.setValue(t || s);
        (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && r.premultiply(r.alpha);
        const n = this.destinationFrame,
            o = this.current ? this.current.baseTexture : this.renderer._view.screen,
            a = n.width !== o.width || n.height !== o.height;
        if (a) {
            let {
                x: h,
                y: l,
                width: c,
                height: u
            } = this.viewportFrame;
            h = Math.round(h), l = Math.round(l), c = Math.round(c), u = Math.round(u), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(h, l, c, u)
        }
        this.renderer.framebuffer.clear(r.red, r.green, r.blue, r.alpha, i), a && this.renderer.scissor.pop()
    }
    resize() {
        this.bind(null)
    }
    reset() {
        this.bind(null)
    }
    destroy() {
        this.renderer = null
    }
}
gh.extension = {
    type: D.RendererSystem,
    name: "renderTexture"
};
U.add(gh);
class Ud {
    constructor(t, i) {
        this.program = t, this.uniformData = i, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
    }
    destroy() {
        this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
    }
}

function kd(e, t) {
    const i = {},
        s = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
    for (let r = 0; r < s; r++) {
        const n = t.getActiveAttrib(e, r);
        if (n.name.startsWith("gl_")) continue;
        const o = Qa(t, n.type),
            a = {
                type: o,
                name: n.name,
                size: Za(o),
                location: t.getAttribLocation(e, n.name)
            };
        i[n.name] = a
    }
    return i
}

function Gd(e, t) {
    const i = {},
        s = t.getProgramParameter(e, t.ACTIVE_UNIFORMS);
    for (let r = 0; r < s; r++) {
        const n = t.getActiveUniform(e, r),
            o = n.name.replace(/\[.*?\]$/, ""),
            a = !!n.name.match(/\[.*?\]$/),
            h = Qa(t, n.type);
        i[o] = {
            name: o,
            index: r,
            type: h,
            size: n.size,
            isArray: a,
            value: qa(h, n.size)
        }
    }
    return i
}

function Hd(e, t) {
    var h;
    const i = Uo(e, e.VERTEX_SHADER, t.vertexSrc),
        s = Uo(e, e.FRAGMENT_SHADER, t.fragmentSrc),
        r = e.createProgram();
    e.attachShader(r, i), e.attachShader(r, s);
    const n = (h = t.extra) == null ? void 0 : h.transformFeedbackVaryings;
    if (n && (typeof e.transformFeedbackVaryings != "function" ? console.warn("TransformFeedback is not supported but TransformFeedbackVaryings are given.") : e.transformFeedbackVaryings(r, n.names, n.bufferMode === "separate" ? e.SEPARATE_ATTRIBS : e.INTERLEAVED_ATTRIBS)), e.linkProgram(r), e.getProgramParameter(r, e.LINK_STATUS) || gd(e, r, i, s), t.attributeData = kd(r, e), t.uniformData = Gd(r, e), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
        const l = Object.keys(t.attributeData);
        l.sort((c, u) => c > u ? 1 : -1);
        for (let c = 0; c < l.length; c++) t.attributeData[l[c]].location = c, e.bindAttribLocation(r, c, l[c]);
        e.linkProgram(r)
    }
    e.deleteShader(i), e.deleteShader(s);
    const o = {};
    for (const l in t.uniformData) {
        const c = t.uniformData[l];
        o[l] = {
            location: e.getUniformLocation(r, l),
            value: qa(c.type, c.size)
        }
    }
    return new Ud(r, o)
}

function $d(e, t, i, s, r) {
    i.buffer.update(r)
}
const Vd = {
        float: `
        data[offset] = v;
    `,
        vec2: `
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,
        vec3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,
        vec4: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,
        mat2: `
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,
        mat3: `
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,
        mat4: `
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `
    },
    _h = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 16 * 2,
        mat3: 16 * 3,
        mat4: 16 * 4
    };

function Xd(e) {
    const t = e.map(n => ({
        data: n,
        offset: 0,
        dataLen: 0,
        dirty: 0
    }));
    let i = 0,
        s = 0,
        r = 0;
    for (let n = 0; n < t.length; n++) {
        const o = t[n];
        if (i = _h[o.data.type], o.data.size > 1 && (i = Math.max(i, 16) * o.data.size), o.dataLen = i, s % i !== 0 && s < 16) {
            const a = s % i % 16;
            s += a, r += a
        }
        s + i > 16 ? (r = Math.ceil(r / 16) * 16, o.offset = r, r += i, s = i) : (o.offset = r, s += i, r += i)
    }
    return r = Math.ceil(r / 16) * 16, {
        uboElements: t,
        size: r
    }
}

function zd(e, t) {
    const i = [];
    for (const s in e) t[s] && i.push(t[s]);
    return i.sort((s, r) => s.index - r.index), i
}

function Wd(e, t) {
    if (!e.autoManage) return {
        size: 0,
        syncFunc: $d
    };
    const i = zd(e.uniforms, t),
        {
            uboElements: s,
            size: r
        } = Xd(i),
        n = [`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `];
    for (let o = 0; o < s.length; o++) {
        const a = s[o],
            h = e.uniforms[a.data.name],
            l = a.data.name;
        let c = !1;
        for (let u = 0; u < ci.length; u++) {
            const d = ci[u];
            if (d.codeUbo && d.test(a.data, h)) {
                n.push(`offset = ${a.offset/4};`, ci[u].codeUbo(a.data.name, h)), c = !0;
                break
            }
        }
        if (!c)
            if (a.data.size > 1) {
                const u = Za(a.data.type),
                    d = Math.max(_h[a.data.type] / 16, 1),
                    f = u / d,
                    p = (4 - f % 4) % 4;
                n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset/4};

                t = 0;

                for(var i=0; i < ${a.data.size*d}; i++)
                {
                    for(var j = 0; j < ${f}; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += ${p};
                }

                `)
            } else {
                const u = Vd[a.data.type];
                n.push(`
                cv = ud.${l}.value;
                v = uv.${l};
                offset = ${a.offset/4};
                ${u};
                `)
            }
    }
    return n.push(`
       renderer.buffer.update(buffer);
    `), {
        size: r,
        syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join(`
`))
    }
}
let jd = 0;
const hs = {
    textureCount: 0,
    uboCount: 0
};
class yh {
    constructor(t) {
        this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = jd++
    }
    systemCheck() {
        if (!yd()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
    }
    contextChange(t) {
        this.gl = t, this.reset()
    }
    bind(t, i) {
        t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
        const s = t.program,
            r = s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return this.shader = t, this.program !== s && (this.program = s, this.gl.useProgram(r.program)), i || (hs.textureCount = 0, hs.uboCount = 0, this.syncUniformGroup(t.uniformGroup, hs)), r
    }
    setUniforms(t) {
        const i = this.shader.program,
            s = i.glPrograms[this.renderer.CONTEXT_UID];
        i.syncUniforms(s.uniformData, t, this.renderer)
    }
    syncUniformGroup(t, i) {
        const s = this.getGlProgram();
        (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id]) && (s.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, s, i))
    }
    syncUniforms(t, i, s) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(i.uniformData, t.uniforms, this.renderer, s)
    }
    createSyncGroups(t) {
        const i = this.getSignature(t, this.shader.program.uniformData, "u");
        return this.cache[i] || (this.cache[i] = fd(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[i], t.syncUniforms[this.shader.program.id]
    }
    syncUniformBufferGroup(t, i) {
        const s = this.getGlProgram();
        if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id]) {
            t.dirtyId = 0;
            const r = s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, i);
            t.buffer.update(), r(s.uniformData, t.uniforms, this.renderer, hs, t.buffer)
        }
        this.renderer.buffer.bindBufferBase(t.buffer, s.uniformBufferBindings[i])
    }
    createSyncBufferGroup(t, i, s) {
        const {
            gl: r
        } = this.renderer;
        this.renderer.buffer.bind(t.buffer);
        const n = this.gl.getUniformBlockIndex(i.program, s);
        i.uniformBufferBindings[s] = this.shader.uniformBindCount, r.uniformBlockBinding(i.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
        const o = this.getSignature(t, this.shader.program.uniformData, "ubo");
        let a = this._uboCache[o];
        if (a || (a = this._uboCache[o] = Wd(t, this.shader.program.uniformData)), t.autoManage) {
            const h = new Float32Array(a.size / 4);
            t.buffer.update(h)
        }
        return i.uniformGroups[t.id] = a.syncFunc, i.uniformGroups[t.id]
    }
    getSignature(t, i, s) {
        const r = t.uniforms,
            n = [`${s}-`];
        for (const o in r) n.push(o), i[o] && n.push(i[o].type);
        return n.join("-")
    }
    getGlProgram() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
    }
    generateProgram(t) {
        const i = this.gl,
            s = t.program,
            r = Hd(i, s);
        return s.glPrograms[this.renderer.CONTEXT_UID] = r, r
    }
    reset() {
        this.program = null, this.shader = null
    }
    disposeShader(t) {
        this.shader === t && (this.shader = null)
    }
    destroy() {
        this.renderer = null, this.destroyed = !0
    }
}
yh.extension = {
    type: D.RendererSystem,
    name: "shader"
};
U.add(yh);
class js {
    constructor(t) {
        this.renderer = t
    }
    run(t) {
        const {
            renderer: i
        } = this;
        i.runners.init.emit(i.options), t.hello && console.log(`PixiJS 7.2.4 - ${i.rendererLogId} - https://pixijs.com`), i.resize(i.screen.width, i.screen.height)
    }
    destroy() {}
}
js.defaultOptions = {
    hello: !1
};
js.extension = {
    type: [D.RendererSystem, D.CanvasRendererSystem],
    name: "startup"
};
U.add(js);

function Yd(e, t = []) {
    return t[G.NORMAL] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD] = [e.ONE, e.ONE], t[G.MULTIPLY] = [e.DST_COLOR, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SCREEN] = [e.ONE, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.OVERLAY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DARKEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LIGHTEN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_DODGE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR_BURN] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HARD_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SOFT_LIGHT] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.DIFFERENCE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.EXCLUSION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.HUE] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SATURATION] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.COLOR] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.LUMINOSITY] = [e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.NONE] = [0, 0], t[G.NORMAL_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_ALPHA, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.ADD_NPM] = [e.SRC_ALPHA, e.ONE, e.ONE, e.ONE], t[G.SCREEN_NPM] = [e.SRC_ALPHA, e.ONE_MINUS_SRC_COLOR, e.ONE, e.ONE_MINUS_SRC_ALPHA], t[G.SRC_IN] = [e.DST_ALPHA, e.ZERO], t[G.SRC_OUT] = [e.ONE_MINUS_DST_ALPHA, e.ZERO], t[G.SRC_ATOP] = [e.DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.DST_OVER] = [e.ONE_MINUS_DST_ALPHA, e.ONE], t[G.DST_IN] = [e.ZERO, e.SRC_ALPHA], t[G.DST_OUT] = [e.ZERO, e.ONE_MINUS_SRC_ALPHA], t[G.DST_ATOP] = [e.ONE_MINUS_DST_ALPHA, e.SRC_ALPHA], t[G.XOR] = [e.ONE_MINUS_DST_ALPHA, e.ONE_MINUS_SRC_ALPHA], t[G.SUBTRACT] = [e.ONE, e.ONE, e.ONE, e.ONE, e.FUNC_REVERSE_SUBTRACT, e.FUNC_ADD], t
}
const qd = 0,
    Kd = 1,
    Zd = 2,
    Qd = 3,
    Jd = 4,
    tf = 5,
    ln = class {
        constructor() {
            this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = G.NONE, this._blendEq = !1, this.map = [], this.map[qd] = this.setBlend, this.map[Kd] = this.setOffset, this.map[Zd] = this.setCullFace, this.map[Qd] = this.setDepthTest, this.map[Jd] = this.setFrontFace, this.map[tf] = this.setDepthMask, this.checks = [], this.defaultState = new pe, this.defaultState.blend = !0
        }
        contextChange(e) {
            this.gl = e, this.blendModes = Yd(e), this.set(this.defaultState), this.reset()
        }
        set(e) {
            if (e = e || this.defaultState, this.stateId !== e.data) {
                let t = this.stateId ^ e.data,
                    i = 0;
                for (; t;) t & 1 && this.map[i].call(this, !!(e.data & 1 << i)), t = t >> 1, i++;
                this.stateId = e.data
            }
            for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e)
        }
        forceState(e) {
            e = e || this.defaultState;
            for (let t = 0; t < this.map.length; t++) this.map[t].call(this, !!(e.data & 1 << t));
            for (let t = 0; t < this.checks.length; t++) this.checks[t](this, e);
            this.stateId = e.data
        }
        setBlend(e) {
            this.updateCheck(ln.checkBlendMode, e), this.gl[e ? "enable" : "disable"](this.gl.BLEND)
        }
        setOffset(e) {
            this.updateCheck(ln.checkPolygonOffset, e), this.gl[e ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
        }
        setDepthTest(e) {
            this.gl[e ? "enable" : "disable"](this.gl.DEPTH_TEST)
        }
        setDepthMask(e) {
            this.gl.depthMask(e)
        }
        setCullFace(e) {
            this.gl[e ? "enable" : "disable"](this.gl.CULL_FACE)
        }
        setFrontFace(e) {
            this.gl.frontFace(this.gl[e ? "CW" : "CCW"])
        }
        setBlendMode(e) {
            if (e === this.blendMode) return;
            this.blendMode = e;
            const t = this.blendModes[e],
                i = this.gl;
            t.length === 2 ? i.blendFunc(t[0], t[1]) : i.blendFuncSeparate(t[0], t[1], t[2], t[3]), t.length === 6 ? (this._blendEq = !0, i.blendEquationSeparate(t[4], t[5])) : this._blendEq && (this._blendEq = !1, i.blendEquationSeparate(i.FUNC_ADD, i.FUNC_ADD))
        }
        setPolygonOffset(e, t) {
            this.gl.polygonOffset(e, t)
        }
        reset() {
            this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
        }
        updateCheck(e, t) {
            const i = this.checks.indexOf(e);
            t && i === -1 ? this.checks.push(e) : !t && i !== -1 && this.checks.splice(i, 1)
        }
        static checkBlendMode(e, t) {
            e.setBlendMode(t.blendMode)
        }
        static checkPolygonOffset(e, t) {
            e.setPolygonOffset(1, t.polygonOffset)
        }
        destroy() {
            this.gl = null
        }
    };
let vh = ln;
vh.extension = {
    type: D.RendererSystem,
    name: "state"
};
U.add(vh);
class ef extends Hi {
    constructor() {
        super(...arguments), this.runners = {}, this._systemsHash = {}
    }
    setup(t) {
        this.addRunners(...t.runners);
        const i = (t.priority ?? []).filter(r => t.systems[r]),
            s = [...i, ...Object.keys(t.systems).filter(r => !i.includes(r))];
        for (const r of s) this.addSystem(t.systems[r], r)
    }
    addRunners(...t) {
        t.forEach(i => {
            this.runners[i] = new zt(i)
        })
    }
    addSystem(t, i) {
        const s = new t(this);
        if (this[i]) throw new Error(`Whoops! The name "${i}" is already in use`);
        this[i] = s, this._systemsHash[i] = s;
        for (const r in this.runners) this.runners[r].add(s);
        return this
    }
    emitWithCustomOptions(t, i) {
        const s = Object.keys(this._systemsHash);
        t.items.forEach(r => {
            const n = s.find(o => this._systemsHash[o] === r);
            r[t.name](i[n])
        })
    }
    destroy() {
        Object.values(this.runners).forEach(t => {
            t.destroy()
        }), this._systemsHash = {}
    }
}
const vs = class {
    constructor(e) {
        this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = vs.defaultMaxIdle, this.checkCountMax = vs.defaultCheckCountMax, this.mode = vs.defaultMode
    }
    postrender() {
        this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== wn.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
    }
    run() {
        const e = this.renderer.texture,
            t = e.managedTextures;
        let i = !1;
        for (let s = 0; s < t.length; s++) {
            const r = t[s];
            !r.framebuffer && this.count - r.touched > this.maxIdle && (e.destroyTexture(r, !0), t[s] = null, i = !0)
        }
        if (i) {
            let s = 0;
            for (let r = 0; r < t.length; r++) t[r] !== null && (t[s++] = t[r]);
            t.length = s
        }
    }
    unload(e) {
        const t = this.renderer.texture,
            i = e._texture;
        i && !i.framebuffer && t.destroyTexture(i);
        for (let s = e.children.length - 1; s >= 0; s--) this.unload(e.children[s])
    }
    destroy() {
        this.renderer = null
    }
};
let $t = vs;
$t.defaultMode = wn.AUTO;
$t.defaultMaxIdle = 60 * 60;
$t.defaultCheckCountMax = 60 * 10;
$t.extension = {
    type: D.RendererSystem,
    name: "textureGC"
};
U.add($t);
class Ar {
    constructor(t) {
        this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = k.UNSIGNED_BYTE, this.internalFormat = C.RGBA, this.samplerType = 0
    }
}

function sf(e) {
    let t;
    return "WebGL2RenderingContext" in globalThis && e instanceof globalThis.WebGL2RenderingContext ? t = {
        [k.UNSIGNED_BYTE]: {
            [C.RGBA]: e.RGBA8,
            [C.RGB]: e.RGB8,
            [C.RG]: e.RG8,
            [C.RED]: e.R8,
            [C.RGBA_INTEGER]: e.RGBA8UI,
            [C.RGB_INTEGER]: e.RGB8UI,
            [C.RG_INTEGER]: e.RG8UI,
            [C.RED_INTEGER]: e.R8UI,
            [C.ALPHA]: e.ALPHA,
            [C.LUMINANCE]: e.LUMINANCE,
            [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
        },
        [k.BYTE]: {
            [C.RGBA]: e.RGBA8_SNORM,
            [C.RGB]: e.RGB8_SNORM,
            [C.RG]: e.RG8_SNORM,
            [C.RED]: e.R8_SNORM,
            [C.RGBA_INTEGER]: e.RGBA8I,
            [C.RGB_INTEGER]: e.RGB8I,
            [C.RG_INTEGER]: e.RG8I,
            [C.RED_INTEGER]: e.R8I
        },
        [k.UNSIGNED_SHORT]: {
            [C.RGBA_INTEGER]: e.RGBA16UI,
            [C.RGB_INTEGER]: e.RGB16UI,
            [C.RG_INTEGER]: e.RG16UI,
            [C.RED_INTEGER]: e.R16UI,
            [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT16
        },
        [k.SHORT]: {
            [C.RGBA_INTEGER]: e.RGBA16I,
            [C.RGB_INTEGER]: e.RGB16I,
            [C.RG_INTEGER]: e.RG16I,
            [C.RED_INTEGER]: e.R16I
        },
        [k.UNSIGNED_INT]: {
            [C.RGBA_INTEGER]: e.RGBA32UI,
            [C.RGB_INTEGER]: e.RGB32UI,
            [C.RG_INTEGER]: e.RG32UI,
            [C.RED_INTEGER]: e.R32UI,
            [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT24
        },
        [k.INT]: {
            [C.RGBA_INTEGER]: e.RGBA32I,
            [C.RGB_INTEGER]: e.RGB32I,
            [C.RG_INTEGER]: e.RG32I,
            [C.RED_INTEGER]: e.R32I
        },
        [k.FLOAT]: {
            [C.RGBA]: e.RGBA32F,
            [C.RGB]: e.RGB32F,
            [C.RG]: e.RG32F,
            [C.RED]: e.R32F,
            [C.DEPTH_COMPONENT]: e.DEPTH_COMPONENT32F
        },
        [k.HALF_FLOAT]: {
            [C.RGBA]: e.RGBA16F,
            [C.RGB]: e.RGB16F,
            [C.RG]: e.RG16F,
            [C.RED]: e.R16F
        },
        [k.UNSIGNED_SHORT_5_6_5]: {
            [C.RGB]: e.RGB565
        },
        [k.UNSIGNED_SHORT_4_4_4_4]: {
            [C.RGBA]: e.RGBA4
        },
        [k.UNSIGNED_SHORT_5_5_5_1]: {
            [C.RGBA]: e.RGB5_A1
        },
        [k.UNSIGNED_INT_2_10_10_10_REV]: {
            [C.RGBA]: e.RGB10_A2,
            [C.RGBA_INTEGER]: e.RGB10_A2UI
        },
        [k.UNSIGNED_INT_10F_11F_11F_REV]: {
            [C.RGB]: e.R11F_G11F_B10F
        },
        [k.UNSIGNED_INT_5_9_9_9_REV]: {
            [C.RGB]: e.RGB9_E5
        },
        [k.UNSIGNED_INT_24_8]: {
            [C.DEPTH_STENCIL]: e.DEPTH24_STENCIL8
        },
        [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
            [C.DEPTH_STENCIL]: e.DEPTH32F_STENCIL8
        }
    } : t = {
        [k.UNSIGNED_BYTE]: {
            [C.RGBA]: e.RGBA,
            [C.RGB]: e.RGB,
            [C.ALPHA]: e.ALPHA,
            [C.LUMINANCE]: e.LUMINANCE,
            [C.LUMINANCE_ALPHA]: e.LUMINANCE_ALPHA
        },
        [k.UNSIGNED_SHORT_5_6_5]: {
            [C.RGB]: e.RGB
        },
        [k.UNSIGNED_SHORT_4_4_4_4]: {
            [C.RGBA]: e.RGBA
        },
        [k.UNSIGNED_SHORT_5_5_5_1]: {
            [C.RGBA]: e.RGBA
        }
    }, t
}
class xh {
    constructor(t) {
        this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new V, this.hasIntegerTextures = !1
    }
    contextChange() {
        const t = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = sf(t);
        const i = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = i;
        for (let r = 0; r < i; r++) this.boundTextures[r] = null;
        this.emptyTextures = {};
        const s = new Ar(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, s.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = s, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ar(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (let r = 0; r < 6; r++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (let r = 0; r < this.boundTextures.length; r++) this.bind(null, r)
    }
    bind(t, i = 0) {
        const {
            gl: s
        } = this;
        if (t = t == null ? void 0 : t.castToBaseTexture(), t != null && t.valid && !t.parentTextureArray) {
            t.touched = this.renderer.textureGC.count;
            const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
            this.boundTextures[i] !== t && (this.currentLocation !== i && (this.currentLocation = i, s.activeTexture(s.TEXTURE0 + i)), s.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId ? (this.currentLocation !== i && (this.currentLocation = i, s.activeTexture(s.TEXTURE0 + i)), this.updateTexture(t)) : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[i] = t
        } else this.currentLocation !== i && (this.currentLocation = i, s.activeTexture(s.TEXTURE0 + i)), s.bindTexture(s.TEXTURE_2D, this.emptyTextures[s.TEXTURE_2D].texture), this.boundTextures[i] = null
    }
    reset() {
        this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
        for (let t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
    }
    unbind(t) {
        const {
            gl: i,
            boundTextures: s
        } = this;
        if (this._unknownBoundTextures) {
            this._unknownBoundTextures = !1;
            for (let r = 0; r < s.length; r++) s[r] === this.unknownTexture && this.bind(null, r)
        }
        for (let r = 0; r < s.length; r++) s[r] === t && (this.currentLocation !== r && (i.activeTexture(i.TEXTURE0 + r), this.currentLocation = r), i.bindTexture(t.target, this.emptyTextures[t.target].texture), s[r] = null)
    }
    ensureSamplerType(t) {
        const {
            boundTextures: i,
            hasIntegerTextures: s,
            CONTEXT_UID: r
        } = this;
        if (s)
            for (let n = t - 1; n >= 0; --n) {
                const o = i[n];
                o && o._glTextures[r].samplerType !== kr.FLOAT && this.renderer.texture.unbind(o)
            }
    }
    initTexture(t) {
        const i = new Ar(this.gl.createTexture());
        return i.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = i, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), i
    }
    initTextureType(t, i) {
        var s;
        i.internalFormat = ((s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) ?? t.format, this.webGLVersion === 2 && t.type === k.HALF_FLOAT ? i.type = this.gl.HALF_FLOAT : i.type = t.type
    }
    updateTexture(t) {
        var r;
        const i = t._glTextures[this.CONTEXT_UID];
        if (!i) return;
        const s = this.renderer;
        if (this.initTextureType(t, i), (r = t.resource) != null && r.upload(s, t, i)) i.samplerType !== kr.FLOAT && (this.hasIntegerTextures = !0);
        else {
            const n = t.realWidth,
                o = t.realHeight,
                a = s.gl;
            (i.width !== n || i.height !== o || i.dirtyId < 0) && (i.width = n, i.height = o, a.texImage2D(t.target, 0, i.internalFormat, n, o, 0, t.format, i.type, null))
        }
        t.dirtyStyleId !== i.dirtyStyleId && this.updateTextureStyle(t), i.dirtyId = t.dirtyId
    }
    destroyTexture(t, i) {
        const {
            gl: s
        } = this;
        if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !i)) {
            const r = this.managedTextures.indexOf(t);
            r !== -1 && hi(this.managedTextures, r, 1)
        }
    }
    updateTextureStyle(t) {
        var s;
        const i = t._glTextures[this.CONTEXT_UID];
        i && ((t.mipmap === re.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? i.mipmap = !1 : i.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? i.wrapMode = be.CLAMP : i.wrapMode = t.wrapMode, (s = t.resource) != null && s.style(this.renderer, t, i) || this.setStyle(t, i), i.dirtyStyleId = t.dirtyStyleId)
    }
    setStyle(t, i) {
        const s = this.gl;
        if (i.mipmap && t.mipmap !== re.ON_MANUAL && s.generateMipmap(t.target), s.texParameteri(t.target, s.TEXTURE_WRAP_S, i.wrapMode), s.texParameteri(t.target, s.TEXTURE_WRAP_T, i.wrapMode), i.mipmap) {
            s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === ce.LINEAR ? s.LINEAR_MIPMAP_LINEAR : s.NEAREST_MIPMAP_NEAREST);
            const r = this.renderer.context.extensions.anisotropicFiltering;
            if (r && t.anisotropicLevel > 0 && t.scaleMode === ce.LINEAR) {
                const n = Math.min(t.anisotropicLevel, s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
                s.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n)
            }
        } else s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === ce.LINEAR ? s.LINEAR : s.NEAREST);
        s.texParameteri(t.target, s.TEXTURE_MAG_FILTER, t.scaleMode === ce.LINEAR ? s.LINEAR : s.NEAREST)
    }
    destroy() {
        this.renderer = null
    }
}
xh.extension = {
    type: D.RendererSystem,
    name: "texture"
};
U.add(xh);
class bh {
    constructor(t) {
        this.renderer = t
    }
    contextChange() {
        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(t) {
        const {
            gl: i,
            CONTEXT_UID: s
        } = this, r = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t);
        i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, r)
    }
    unbind() {
        const {
            gl: t
        } = this;
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null)
    }
    beginTransformFeedback(t, i) {
        const {
            gl: s,
            renderer: r
        } = this;
        i && r.shader.bind(i), s.beginTransformFeedback(t)
    }
    endTransformFeedback() {
        const {
            gl: t
        } = this;
        t.endTransformFeedback()
    }
    createGLTransformFeedback(t) {
        const {
            gl: i,
            renderer: s,
            CONTEXT_UID: r
        } = this, n = i.createTransformFeedback();
        t._glTransformFeedbacks[r] = n, i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, n);
        for (let o = 0; o < t.buffers.length; o++) {
            const a = t.buffers[o];
            a && (s.buffer.update(a), a._glBuffers[r].refCount++, i.bindBufferBase(i.TRANSFORM_FEEDBACK_BUFFER, o, a._glBuffers[r].buffer || null))
        }
        return i.bindTransformFeedback(i.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n
    }
    disposeTransformFeedback(t, i) {
        const s = t._glTransformFeedbacks[this.CONTEXT_UID],
            r = this.gl;
        t.disposeRunner.remove(this);
        const n = this.renderer.buffer;
        if (n)
            for (let o = 0; o < t.buffers.length; o++) {
                const a = t.buffers[o];
                if (!a) continue;
                const h = a._glBuffers[this.CONTEXT_UID];
                h && (h.refCount--, h.refCount === 0 && !i && n.dispose(a, i))
            }
        s && (i || r.deleteTransformFeedback(s), delete t._glTransformFeedbacks[this.CONTEXT_UID])
    }
    destroy() {
        this.renderer = null
    }
}
bh.extension = {
    type: D.RendererSystem,
    name: "transformFeedback"
};
U.add(bh);
class Ys {
    constructor(t) {
        this.renderer = t
    }
    init(t) {
        this.screen = new z(0, 0, t.width, t.height), this.element = t.view || R.ADAPTER.createCanvas(), this.resolution = t.resolution || R.RESOLUTION, this.autoDensity = !!t.autoDensity
    }
    resizeView(t, i) {
        this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(i * this.resolution);
        const s = this.element.width / this.resolution,
            r = this.element.height / this.resolution;
        this.screen.width = s, this.screen.height = r, this.autoDensity && (this.element.style.width = `${s}px`, this.element.style.height = `${r}px`), this.renderer.emit("resize", s, r), this.renderer.runners.resize.emit(this.screen.width, this.screen.height)
    }
    destroy(t) {
        var i;
        t && ((i = this.element.parentNode) == null || i.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null
    }
}
Ys.defaultOptions = {
    width: 800,
    height: 600,
    resolution: R.RESOLUTION,
    autoDensity: !1
};
Ys.extension = {
    type: [D.RendererSystem, D.CanvasRendererSystem],
    name: "_view"
};
U.add(Ys);
R.PREFER_ENV = $e.WEBGL2;
R.STRICT_TEXTURE_CACHE = !1;
R.RENDER_OPTIONS = {
    ...Ws.defaultOptions,
    ...zs.defaultOptions,
    ...Ys.defaultOptions,
    ...js.defaultOptions
};
Object.defineProperties(R, {
    WRAP_MODE: {
        get() {
            return V.defaultOptions.wrapMode
        },
        set(e) {
            Y("7.1.0", "settings.WRAP_MODE is deprecated, use BaseTexture.defaultOptions.wrapMode"), V.defaultOptions.wrapMode = e
        }
    },
    SCALE_MODE: {
        get() {
            return V.defaultOptions.scaleMode
        },
        set(e) {
            Y("7.1.0", "settings.SCALE_MODE is deprecated, use BaseTexture.defaultOptions.scaleMode"), V.defaultOptions.scaleMode = e
        }
    },
    MIPMAP_TEXTURES: {
        get() {
            return V.defaultOptions.mipmap
        },
        set(e) {
            Y("7.1.0", "settings.MIPMAP_TEXTURES is deprecated, use BaseTexture.defaultOptions.mipmap"), V.defaultOptions.mipmap = e
        }
    },
    ANISOTROPIC_LEVEL: {
        get() {
            return V.defaultOptions.anisotropicLevel
        },
        set(e) {
            Y("7.1.0", "settings.ANISOTROPIC_LEVEL is deprecated, use BaseTexture.defaultOptions.anisotropicLevel"), V.defaultOptions.anisotropicLevel = e
        }
    },
    FILTER_RESOLUTION: {
        get() {
            return Y("7.1.0", "settings.FILTER_RESOLUTION is deprecated, use Filter.defaultResolution"), bt.defaultResolution
        },
        set(e) {
            bt.defaultResolution = e
        }
    },
    FILTER_MULTISAMPLE: {
        get() {
            return Y("7.1.0", "settings.FILTER_MULTISAMPLE is deprecated, use Filter.defaultMultisample"), bt.defaultMultisample
        },
        set(e) {
            bt.defaultMultisample = e
        }
    },
    SPRITE_MAX_TEXTURES: {
        get() {
            return Ht.defaultMaxTextures
        },
        set(e) {
            Y("7.1.0", "settings.SPRITE_MAX_TEXTURES is deprecated, use BatchRenderer.defaultMaxTextures"), Ht.defaultMaxTextures = e
        }
    },
    SPRITE_BATCH_SIZE: {
        get() {
            return Ht.defaultBatchSize
        },
        set(e) {
            Y("7.1.0", "settings.SPRITE_BATCH_SIZE is deprecated, use BatchRenderer.defaultBatchSize"), Ht.defaultBatchSize = e
        }
    },
    CAN_UPLOAD_SAME_BUFFER: {
        get() {
            return Ht.canUploadSameBuffer
        },
        set(e) {
            Y("7.1.0", "settings.CAN_UPLOAD_SAME_BUFFER is deprecated, use BatchRenderer.canUploadSameBuffer"), Ht.canUploadSameBuffer = e
        }
    },
    GC_MODE: {
        get() {
            return $t.defaultMode
        },
        set(e) {
            Y("7.1.0", "settings.GC_MODE is deprecated, use TextureGCSystem.defaultMode"), $t.defaultMode = e
        }
    },
    GC_MAX_IDLE: {
        get() {
            return $t.defaultMaxIdle
        },
        set(e) {
            Y("7.1.0", "settings.GC_MAX_IDLE is deprecated, use TextureGCSystem.defaultMaxIdle"), $t.defaultMaxIdle = e
        }
    },
    GC_MAX_CHECK_COUNT: {
        get() {
            return $t.defaultCheckCountMax
        },
        set(e) {
            Y("7.1.0", "settings.GC_MAX_CHECK_COUNT is deprecated, use TextureGCSystem.defaultCheckCountMax"), $t.defaultCheckCountMax = e
        }
    },
    PRECISION_VERTEX: {
        get() {
            return Vt.defaultVertexPrecision
        },
        set(e) {
            Y("7.1.0", "settings.PRECISION_VERTEX is deprecated, use Program.defaultVertexPrecision"), Vt.defaultVertexPrecision = e
        }
    },
    PRECISION_FRAGMENT: {
        get() {
            return Vt.defaultFragmentPrecision
        },
        set(e) {
            Y("7.1.0", "settings.PRECISION_FRAGMENT is deprecated, use Program.defaultFragmentPrecision"), Vt.defaultFragmentPrecision = e
        }
    }
});
var He = (e => (e[e.INTERACTION = 50] = "INTERACTION", e[e.HIGH = 25] = "HIGH", e[e.NORMAL = 0] = "NORMAL", e[e.LOW = -25] = "LOW", e[e.UTILITY = -50] = "UTILITY", e))(He || {});
class Cr {
    constructor(t, i = null, s = 0, r = !1) {
        this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = i, this.priority = s, this.once = r
    }
    match(t, i = null) {
        return this.fn === t && this.context === i
    }
    emit(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        const i = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), i
    }
    connect(t) {
        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
    }
    destroy(t = !1) {
        this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        const i = this.next;
        return this.next = t ? null : i, this.previous = null, i
    }
}
const Mt = class {
    constructor() {
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new Cr(null, null, 1 / 0), this.deltaMS = 1 / Mt.targetFPMS, this.elapsedMS = 1 / Mt.targetFPMS, this._tick = e => {
            this._requestId = null, this.started && (this.update(e), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
        }
    }
    _requestIfNeeded() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
    }
    _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null)
    }
    _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
    }
    add(e, t, i = He.NORMAL) {
        return this._addListener(new Cr(e, t, i))
    }
    addOnce(e, t, i = He.NORMAL) {
        return this._addListener(new Cr(e, t, i, !0))
    }
    _addListener(e) {
        let t = this._head.next,
            i = this._head;
        if (!t) e.connect(i);
        else {
            for (; t;) {
                if (e.priority > t.priority) {
                    e.connect(i);
                    break
                }
                i = t, t = t.next
            }
            e.previous || e.connect(i)
        }
        return this._startIfPossible(), this
    }
    remove(e, t) {
        let i = this._head.next;
        for (; i;) i.match(e, t) ? i = i.destroy() : i = i.next;
        return this._head.next || this._cancelIfNeeded(), this
    }
    get count() {
        if (!this._head) return 0;
        let e = 0,
            t = this._head;
        for (; t = t.next;) e++;
        return e
    }
    start() {
        this.started || (this.started = !0, this._requestIfNeeded())
    }
    stop() {
        this.started && (this.started = !1, this._cancelIfNeeded())
    }
    destroy() {
        if (!this._protected) {
            this.stop();
            let e = this._head.next;
            for (; e;) e = e.destroy(!0);
            this._head.destroy(), this._head = null
        }
    }
    update(e = performance.now()) {
        let t;
        if (e > this.lastTime) {
            if (t = this.elapsedMS = e - this.lastTime, t > this._maxElapsedMS && (t = this._maxElapsedMS), t *= this.speed, this._minElapsedMS) {
                const r = e - this._lastFrame | 0;
                if (r < this._minElapsedMS) return;
                this._lastFrame = e - r % this._minElapsedMS
            }
            this.deltaMS = t, this.deltaTime = this.deltaMS * Mt.targetFPMS;
            const i = this._head;
            let s = i.next;
            for (; s;) s = s.emit(this.deltaTime);
            i.next || this._cancelIfNeeded()
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = e
    }
    get FPS() {
        return 1e3 / this.elapsedMS
    }
    get minFPS() {
        return 1e3 / this._maxElapsedMS
    }
    set minFPS(e) {
        const t = Math.min(this.maxFPS, e),
            i = Math.min(Math.max(0, t) / 1e3, Mt.targetFPMS);
        this._maxElapsedMS = 1 / i
    }
    get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
    }
    set maxFPS(e) {
        if (e === 0) this._minElapsedMS = 0;
        else {
            const t = Math.max(this.minFPS, e);
            this._minElapsedMS = 1 / (t / 1e3)
        }
    }
    static get shared() {
        if (!Mt._shared) {
            const e = Mt._shared = new Mt;
            e.autoStart = !0, e._protected = !0
        }
        return Mt._shared
    }
    static get system() {
        if (!Mt._system) {
            const e = Mt._system = new Mt;
            e.autoStart = !0, e._protected = !0
        }
        return Mt._system
    }
};
let St = Mt;
St.targetFPMS = .06;
Object.defineProperties(R, {
    TARGET_FPMS: {
        get() {
            return St.targetFPMS
        },
        set(e) {
            Y("7.1.0", "settings.TARGET_FPMS is deprecated, use Ticker.targetFPMS"), St.targetFPMS = e
        }
    }
});
class Eh {
    static init(t) {
        t = Object.assign({
            autoStart: !0,
            sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
            set(i) {
                this._ticker && this._ticker.remove(this.render, this), this._ticker = i, i && i.add(this.render, this, He.LOW)
            },
            get() {
                return this._ticker
            }
        }), this.stop = () => {
            this._ticker.stop()
        }, this.start = () => {
            this._ticker.start()
        }, this._ticker = null, this.ticker = t.sharedTicker ? St.shared : new St, t.autoStart && this.start()
    }
    static destroy() {
        if (this._ticker) {
            const t = this._ticker;
            this.ticker = null, t.destroy()
        }
    }
}
Eh.extension = D.Application;
U.add(Eh);
const Th = [];
U.handleByList(D.Renderer, Th);

function rf(e) {
    for (const t of Th)
        if (t.test(e)) return new t(e);
    throw new Error("Unable to auto-detect a suitable renderer.")
}
var nf = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,
    of = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`;
const af = nf,
    wh = of;
class Sh {
    constructor(t) {
        this.renderer = t
    }
    contextChange(t) {
        let i;
        if (this.renderer.context.webGLVersion === 1) {
            const s = t.getParameter(t.FRAMEBUFFER_BINDING);
            t.bindFramebuffer(t.FRAMEBUFFER, null), i = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, s)
        } else {
            const s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
            t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), i = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s)
        }
        i >= ct.HIGH ? this.multisample = ct.HIGH : i >= ct.MEDIUM ? this.multisample = ct.MEDIUM : i >= ct.LOW ? this.multisample = ct.LOW : this.multisample = ct.NONE
    }
    destroy() {}
}
Sh.extension = {
    type: D.RendererSystem,
    name: "_multisample"
};
U.add(Sh);
class hf {
    constructor(t) {
        this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
    }
}
class Ah {
    constructor(t) {
        this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
    }
    destroy() {
        this.renderer = null
    }
    contextChange() {
        this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
    }
    bind(t) {
        const {
            gl: i,
            CONTEXT_UID: s
        } = this, r = t._glBuffers[s] || this.createGLBuffer(t);
        i.bindBuffer(t.type, r.buffer)
    }
    unbind(t) {
        const {
            gl: i
        } = this;
        i.bindBuffer(t, null)
    }
    bindBufferBase(t, i) {
        const {
            gl: s,
            CONTEXT_UID: r
        } = this;
        if (this.boundBufferBases[i] !== t) {
            const n = t._glBuffers[r] || this.createGLBuffer(t);
            this.boundBufferBases[i] = t, s.bindBufferBase(s.UNIFORM_BUFFER, i, n.buffer)
        }
    }
    bindBufferRange(t, i, s) {
        const {
            gl: r,
            CONTEXT_UID: n
        } = this;
        s = s || 0;
        const o = t._glBuffers[n] || this.createGLBuffer(t);
        r.bindBufferRange(r.UNIFORM_BUFFER, i || 0, o.buffer, s * 256, 256)
    }
    update(t) {
        const {
            gl: i,
            CONTEXT_UID: s
        } = this, r = t._glBuffers[s] || this.createGLBuffer(t);
        if (t._updateID !== r.updateID)
            if (r.updateID = t._updateID, i.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength) i.bufferSubData(t.type, 0, t.data);
            else {
                const n = t.static ? i.STATIC_DRAW : i.DYNAMIC_DRAW;
                r.byteLength = t.data.byteLength, i.bufferData(t.type, t.data, n)
            }
    }
    dispose(t, i) {
        if (!this.managedBuffers[t.id]) return;
        delete this.managedBuffers[t.id];
        const s = t._glBuffers[this.CONTEXT_UID],
            r = this.gl;
        t.disposeRunner.remove(this), s && (i || r.deleteBuffer(s.buffer), delete t._glBuffers[this.CONTEXT_UID])
    }
    disposeAll(t) {
        const i = Object.keys(this.managedBuffers);
        for (let s = 0; s < i.length; s++) this.dispose(this.managedBuffers[i[s]], t)
    }
    createGLBuffer(t) {
        const {
            CONTEXT_UID: i,
            gl: s
        } = this;
        return t._glBuffers[i] = new hf(s.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[i]
    }
}
Ah.extension = {
    type: D.RendererSystem,
    name: "buffer"
};
U.add(Ah);
class Ch {
    constructor(t) {
        this.renderer = t
    }
    render(t, i) {
        const s = this.renderer;
        let r, n, o, a;
        if (i && (r = i.renderTexture, n = i.clear, o = i.transform, a = i.skipUpdateTransform), this.renderingToScreen = !r, s.runners.prerender.emit(), s.emit("prerender"), s.projection.transform = o, !s.context.isLost) {
            if (r || (this.lastObjectRendered = t), !a) {
                const h = t.enableTempParent();
                t.updateTransform(), t.disableTempParent(h)
            }
            s.renderTexture.bind(r), s.batch.currentRenderer.start(), (n ?? s.background.clearBeforeRender) && s.renderTexture.clear(), t.render(s), s.batch.currentRenderer.flush(), r && (i.blit && s.framebuffer.blit(), r.baseTexture.update()), s.runners.postrender.emit(), s.projection.transform = null, s.emit("postrender")
        }
    }
    destroy() {
        this.renderer = null, this.lastObjectRendered = null
    }
}
Ch.extension = {
    type: D.RendererSystem,
    name: "objectRenderer"
};
U.add(Ch);
const cn = class extends ef {
    constructor(e) {
        super(), this.type = _a.WEBGL, e = Object.assign({}, R.RENDER_OPTIONS, e), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Wt({
            projectionMatrix: new it
        }, !0);
        const t = {
            runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
            systems: cn.__systems,
            priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
        };
        this.setup(t), "useContextAlpha" in e && (Y("7.0.0", "options.useContextAlpha is deprecated, use options.premultipliedAlpha and options.backgroundAlpha instead"), e.premultipliedAlpha = e.useContextAlpha && e.useContextAlpha !== "notMultiplied", e.backgroundAlpha = e.useContextAlpha === !1 ? 1 : e.backgroundAlpha), this._plugin.rendererPlugins = cn.__plugins, this.options = e, this.startup.run(this.options)
    }
    static test(e) {
        return e != null && e.forceCanvas ? !1 : Du()
    }
    render(e, t) {
        this.objectRenderer.render(e, t)
    }
    resize(e, t) {
        this._view.resizeView(e, t)
    }
    reset() {
        return this.runners.reset.emit(), this
    }
    clear() {
        this.renderTexture.bind(), this.renderTexture.clear()
    }
    destroy(e = !1) {
        this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
            _view: e
        }), super.destroy()
    }
    get plugins() {
        return this._plugin.plugins
    }
    get multisample() {
        return this._multisample.multisample
    }
    get width() {
        return this._view.element.width
    }
    get height() {
        return this._view.element.height
    }
    get resolution() {
        return this._view.resolution
    }
    set resolution(e) {
        this._view.resolution = e, this.runners.resolutionChange.emit(e)
    }
    get autoDensity() {
        return this._view.autoDensity
    }
    get view() {
        return this._view.element
    }
    get screen() {
        return this._view.screen
    }
    get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered
    }
    get renderingToScreen() {
        return this.objectRenderer.renderingToScreen
    }
    get rendererLogId() {
        return `WebGL ${this.context.webGLVersion}`
    }
    get clearBeforeRender() {
        return Y("7.0.0", "renderer.clearBeforeRender has been deprecated, please use renderer.background.clearBeforeRender instead."), this.background.clearBeforeRender
    }
    get useContextAlpha() {
        return Y("7.0.0", "renderer.useContextAlpha has been deprecated, please use renderer.context.premultipliedAlpha instead."), this.context.useContextAlpha
    }
    get preserveDrawingBuffer() {
        return Y("7.0.0", "renderer.preserveDrawingBuffer has been deprecated, we cannot truly know this unless pixi created the context"), this.context.preserveDrawingBuffer
    }
    get backgroundColor() {
        return Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color
    }
    set backgroundColor(e) {
        Y("7.0.0", "renderer.backgroundColor has been deprecated, use renderer.background.color instead."), this.background.color = e
    }
    get backgroundAlpha() {
        return Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha
    }
    set backgroundAlpha(e) {
        Y("7.0.0", "renderer.backgroundAlpha has been deprecated, use renderer.background.alpha instead."), this.background.alpha = e
    }
    get powerPreference() {
        return Y("7.0.0", "renderer.powerPreference has been deprecated, we can only know this if pixi creates the context"), this.context.powerPreference
    }
    generateTexture(e, t) {
        return this.textureGenerator.generateTexture(e, t)
    }
};
let _i = cn;
_i.extension = {
    type: D.Renderer,
    priority: 1
};
_i.__plugins = {};
_i.__systems = {};
U.handleByMap(D.RendererPlugin, _i.__plugins);
U.handleByMap(D.RendererSystem, _i.__systems);
U.add(_i);
class Ih extends Ui {
    constructor(t, i) {
        const {
            width: s,
            height: r
        } = i || {};
        super(s, r), this.items = [], this.itemDirtyIds = [];
        for (let n = 0; n < t; n++) {
            const o = new V;
            this.items.push(o), this.itemDirtyIds.push(-2)
        }
        this.length = t, this._load = null, this.baseTexture = null
    }
    initFromArray(t, i) {
        for (let s = 0; s < this.length; s++) t[s] && (t[s].castToBaseTexture ? this.addBaseTextureAt(t[s].castToBaseTexture(), s) : t[s] instanceof Ui ? this.addResourceAt(t[s], s) : this.addResourceAt(za(t[s], i), s))
    }
    dispose() {
        for (let t = 0, i = this.length; t < i; t++) this.items[t].destroy();
        this.items = null, this.itemDirtyIds = null, this._load = null
    }
    addResourceAt(t, i) {
        if (!this.items[i]) throw new Error(`Index ${i} is out of bounds`);
        return t.valid && !this.valid && this.resize(t.width, t.height), this.items[i].setResource(t), this
    }
    bind(t) {
        if (this.baseTexture !== null) throw new Error("Only one base texture per TextureArray is allowed");
        super.bind(t);
        for (let i = 0; i < this.length; i++) this.items[i].parentTextureArray = t, this.items[i].on("update", t.update, t)
    }
    unbind(t) {
        super.unbind(t);
        for (let i = 0; i < this.length; i++) this.items[i].parentTextureArray = null, this.items[i].off("update", t.update, t)
    }
    load() {
        if (this._load) return this._load;
        const i = this.items.map(s => s.resource).filter(s => s).map(s => s.load());
        return this._load = Promise.all(i).then(() => {
            const {
                realWidth: s,
                realHeight: r
            } = this.items[0];
            return this.resize(s, r), Promise.resolve(this)
        }), this._load
    }
}
class lf extends Ih {
    constructor(t, i) {
        const {
            width: s,
            height: r
        } = i || {};
        let n, o;
        Array.isArray(t) ? (n = t, o = t.length) : o = t, super(o, {
            width: s,
            height: r
        }), n && this.initFromArray(n, i)
    }
    addBaseTextureAt(t, i) {
        if (t.resource) this.addResourceAt(t.resource, i);
        else throw new Error("ArrayResource does not support RenderTexture");
        return this
    }
    bind(t) {
        super.bind(t), t.target = ri.TEXTURE_2D_ARRAY
    }
    upload(t, i, s) {
        const {
            length: r,
            itemDirtyIds: n,
            items: o
        } = this, {
            gl: a
        } = t;
        s.dirtyId < 0 && a.texImage3D(a.TEXTURE_2D_ARRAY, 0, s.internalFormat, this._width, this._height, r, 0, i.format, s.type, null);
        for (let h = 0; h < r; h++) {
            const l = o[h];
            n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && a.texSubImage3D(a.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, i.format, s.type, l.resource.source))
        }
        return !0
    }
}
class cf extends Se {
    constructor(t) {
        super(t)
    }
    static test(t) {
        const {
            OffscreenCanvas: i
        } = globalThis;
        return i && t instanceof i ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
    }
}
const Ai = class extends Ih {
    constructor(e, t) {
        const {
            width: i,
            height: s,
            autoLoad: r,
            linkBaseTexture: n
        } = t || {};
        if (e && e.length !== Ai.SIDES) throw new Error(`Invalid length. Got ${e.length}, expected 6`);
        super(6, {
            width: i,
            height: s
        });
        for (let o = 0; o < Ai.SIDES; o++) this.items[o].target = ri.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        this.linkBaseTexture = n !== !1, e && this.initFromArray(e, t), r !== !1 && this.load()
    }
    bind(e) {
        super.bind(e), e.target = ri.TEXTURE_CUBE_MAP
    }
    addBaseTextureAt(e, t, i) {
        if (i === void 0 && (i = this.linkBaseTexture), !this.items[t]) throw new Error(`Index ${t} is out of bounds`);
        if (!this.linkBaseTexture || e.parentTextureArray || Object.keys(e._glTextures).length > 0)
            if (e.resource) this.addResourceAt(e.resource, t);
            else throw new Error("CubeResource does not support copying of renderTexture.");
        else e.target = ri.TEXTURE_CUBE_MAP_POSITIVE_X + t, e.parentTextureArray = this.baseTexture, this.items[t] = e;
        return e.valid && !this.valid && this.resize(e.realWidth, e.realHeight), this.items[t] = e, this
    }
    upload(e, t, i) {
        const s = this.itemDirtyIds;
        for (let r = 0; r < Ai.SIDES; r++) {
            const n = this.items[r];
            (s[r] < n.dirtyId || i.dirtyId < t.dirtyId) && (n.valid && n.resource ? (n.resource.upload(e, n, i), s[r] = n.dirtyId) : s[r] < -1 && (e.gl.texImage2D(n.target, 0, i.internalFormat, t.realWidth, t.realHeight, 0, t.format, i.type, null), s[r] = -1))
        }
        return !0
    }
    static test(e) {
        return Array.isArray(e) && e.length === Ai.SIDES
    }
};
let Ph = Ai;
Ph.SIDES = 6;
class si extends Se {
    constructor(t, i) {
        i = i || {};
        let s, r;
        typeof t == "string" ? (s = si.EMPTY, r = t) : (s = t, r = null), super(s), this.url = r, this.crossOrigin = i.crossOrigin ?? !0, this.alphaMode = typeof i.alphaMode == "number" ? i.alphaMode : null, this._load = null, i.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load ? this._load : (this._load = new Promise(async (t, i) => {
            if (this.url === null) {
                t(this);
                return
            }
            try {
                const s = await R.ADAPTER.fetch(this.url, {
                    mode: this.crossOrigin ? "cors" : "no-cors"
                });
                if (this.destroyed) return;
                const r = await s.blob();
                if (this.destroyed) return;
                const n = await createImageBitmap(r, {
                    premultiplyAlpha: this.alphaMode === null || this.alphaMode === jt.UNPACK ? "premultiply" : "none"
                });
                if (this.destroyed) return;
                this.source = n, this.update(), t(this)
            } catch (s) {
                if (this.destroyed) return;
                i(s), this.onError.emit(s)
            }
        }), this._load)
    }
    upload(t, i, s) {
        return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (i.alphaMode = this.alphaMode), super.upload(t, i, s)) : (this.load(), !1)
    }
    dispose() {
        this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null
    }
    static test(t) {
        return !!globalThis.createImageBitmap && typeof ImageBitmap < "u" && (typeof t == "string" || t instanceof ImageBitmap)
    }
    static get EMPTY() {
        return si._EMPTY = si._EMPTY ?? R.ADAPTER.createCanvas(0, 0), si._EMPTY
    }
}
const xs = class extends Se {
    constructor(e, t) {
        t = t || {}, super(R.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = e, this.scale = t.scale || 1, this._overrideWidth = t.width, this._overrideHeight = t.height, this._resolve = null, this._crossorigin = t.crossorigin, this._load = null, t.autoLoad !== !1 && this.load()
    }
    load() {
        return this._load ? this._load : (this._load = new Promise(e => {
            if (this._resolve = () => {
                    this.resize(this.source.width, this.source.height), e(this)
                }, xs.SVG_XML.test(this.svg.trim())) {
                if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
                this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`
            }
            this._loadSvg()
        }), this._load)
    }
    _loadSvg() {
        const e = new Image;
        Se.crossOrigin(e, this.svg, this._crossorigin), e.src = this.svg, e.onerror = t => {
            this._resolve && (e.onerror = null, this.onError.emit(t))
        }, e.onload = () => {
            if (!this._resolve) return;
            const t = e.width,
                i = e.height;
            if (!t || !i) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
            let s = t * this.scale,
                r = i * this.scale;
            (this._overrideWidth || this._overrideHeight) && (s = this._overrideWidth || this._overrideHeight / i * t, r = this._overrideHeight || this._overrideWidth / t * i), s = Math.round(s), r = Math.round(r);
            const n = this.source;
            n.width = s, n.height = r, n._pixiId = `canvas_${Ge()}`, n.getContext("2d").drawImage(e, 0, 0, t, i, 0, 0, s, r), this._resolve(), this._resolve = null
        }
    }
    static getSize(e) {
        const t = xs.SVG_SIZE.exec(e),
            i = {};
        return t && (i[t[1]] = Math.round(parseFloat(t[3])), i[t[5]] = Math.round(parseFloat(t[7]))), i
    }
    dispose() {
        super.dispose(), this._resolve = null, this._crossorigin = null
    }
    static test(e, t) {
        return t === "svg" || typeof e == "string" && e.startsWith("data:image/svg+xml") || typeof e == "string" && xs.SVG_XML.test(e)
    }
};
let ki = xs;
ki.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m;
ki.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
const un = class extends Se {
    constructor(e, t) {
        if (t = t || {}, !(e instanceof HTMLVideoElement)) {
            const i = document.createElement("video");
            i.setAttribute("preload", "auto"), i.setAttribute("webkit-playsinline", ""), i.setAttribute("playsinline", ""), typeof e == "string" && (e = [e]);
            const s = e[0].src || e[0];
            Se.crossOrigin(i, s, t.crossorigin);
            for (let r = 0; r < e.length; ++r) {
                const n = document.createElement("source");
                let {
                    src: o,
                    mime: a
                } = e[r];
                o = o || e[r];
                const h = o.split("?").shift().toLowerCase(),
                    l = h.slice(h.lastIndexOf(".") + 1);
                a = a || un.MIME_TYPES[l] || `video/${l}`, n.src = o, n.type = a, i.appendChild(n)
            }
            e = i
        }
        super(e), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = t.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = t.autoPlay !== !1, this._load = null, this._resolve = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), t.autoLoad !== !1 && this.load()
    }
    update(e = 0) {
        if (!this.destroyed) {
            const t = St.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - t), (!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
        }
    }
    load() {
        if (this._load) return this._load;
        const e = this.source;
        return (e.readyState === e.HAVE_ENOUGH_DATA || e.readyState === e.HAVE_FUTURE_DATA) && e.width && e.height && (e.complete = !0), e.addEventListener("play", this._onPlayStart.bind(this)), e.addEventListener("pause", this._onPlayStop.bind(this)), this._isSourceReady() ? this._onCanPlay() : (e.addEventListener("canplay", this._onCanPlay), e.addEventListener("canplaythrough", this._onCanPlay), e.addEventListener("error", this._onError, !0)), this._load = new Promise(t => {
            this.valid ? t(this) : (this._resolve = t, e.load())
        }), this._load
    }
    _onError(e) {
        this.source.removeEventListener("error", this._onError, !0), this.onError.emit(e)
    }
    _isSourcePlaying() {
        const e = this.source;
        return !e.paused && !e.ended && this._isSourceReady()
    }
    _isSourceReady() {
        return this.source.readyState > 2
    }
    _onPlayStart() {
        this.valid || this._onCanPlay(), this.autoUpdate && !this._isConnectedToTicker && (St.shared.add(this.update, this), this._isConnectedToTicker = !0)
    }
    _onPlayStop() {
        this._isConnectedToTicker && (St.shared.remove(this.update, this), this._isConnectedToTicker = !1)
    }
    _onCanPlay() {
        const e = this.source;
        e.removeEventListener("canplay", this._onCanPlay), e.removeEventListener("canplaythrough", this._onCanPlay);
        const t = this.valid;
        this.resize(e.videoWidth, e.videoHeight), !t && this._resolve && (this._resolve(this), this._resolve = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && e.play()
    }
    dispose() {
        this._isConnectedToTicker && (St.shared.remove(this.update, this), this._isConnectedToTicker = !1);
        const e = this.source;
        e && (e.removeEventListener("error", this._onError, !0), e.pause(), e.src = "", e.load()), super.dispose()
    }
    get autoUpdate() {
        return this._autoUpdate
    }
    set autoUpdate(e) {
        e !== this._autoUpdate && (this._autoUpdate = e, !this._autoUpdate && this._isConnectedToTicker ? (St.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._isSourcePlaying() && (St.shared.add(this.update, this), this._isConnectedToTicker = !0))
    }
    get updateFPS() {
        return this._updateFPS
    }
    set updateFPS(e) {
        e !== this._updateFPS && (this._updateFPS = e)
    }
    static test(e, t) {
        return globalThis.HTMLVideoElement && e instanceof HTMLVideoElement || un.TYPES.includes(t)
    }
};
let Nn = un;
Nn.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"];
Nn.MIME_TYPES = {
    ogv: "video/ogg",
    mov: "video/quicktime",
    m4v: "video/mp4"
};
rn.push(si, eh, cf, Nn, ki, Vi, Ph, lf);
class Ds {
    constructor() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
    }
    isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY
    }
    clear() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
    }
    getRectangle(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? z.EMPTY : (t = t || new z(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
    }
    addPoint(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
    }
    addPointMatrix(t, i) {
        const {
            a: s,
            b: r,
            c: n,
            d: o,
            tx: a,
            ty: h
        } = t, l = s * i.x + n * i.y + a, c = r * i.x + o * i.y + h;
        this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, c), this.maxY = Math.max(this.maxY, c)
    }
    addQuad(t) {
        let i = this.minX,
            s = this.minY,
            r = this.maxX,
            n = this.maxY,
            o = t[0],
            a = t[1];
        i = o < i ? o : i, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[2], a = t[3], i = o < i ? o : i, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[4], a = t[5], i = o < i ? o : i, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, o = t[6], a = t[7], i = o < i ? o : i, s = a < s ? a : s, r = o > r ? o : r, n = a > n ? a : n, this.minX = i, this.minY = s, this.maxX = r, this.maxY = n
    }
    addFrame(t, i, s, r, n) {
        this.addFrameMatrix(t.worldTransform, i, s, r, n)
    }
    addFrameMatrix(t, i, s, r, n) {
        const o = t.a,
            a = t.b,
            h = t.c,
            l = t.d,
            c = t.tx,
            u = t.ty;
        let d = this.minX,
            f = this.minY,
            p = this.maxX,
            g = this.maxY,
            m = o * i + h * s + c,
            y = a * i + l * s + u;
        d = m < d ? m : d, f = y < f ? y : f, p = m > p ? m : p, g = y > g ? y : g, m = o * r + h * s + c, y = a * r + l * s + u, d = m < d ? m : d, f = y < f ? y : f, p = m > p ? m : p, g = y > g ? y : g, m = o * i + h * n + c, y = a * i + l * n + u, d = m < d ? m : d, f = y < f ? y : f, p = m > p ? m : p, g = y > g ? y : g, m = o * r + h * n + c, y = a * r + l * n + u, d = m < d ? m : d, f = y < f ? y : f, p = m > p ? m : p, g = y > g ? y : g, this.minX = d, this.minY = f, this.maxX = p, this.maxY = g
    }
    addVertexData(t, i, s) {
        let r = this.minX,
            n = this.minY,
            o = this.maxX,
            a = this.maxY;
        for (let h = i; h < s; h += 2) {
            const l = t[h],
                c = t[h + 1];
            r = l < r ? l : r, n = c < n ? c : n, o = l > o ? l : o, a = c > a ? c : a
        }
        this.minX = r, this.minY = n, this.maxX = o, this.maxY = a
    }
    addVertices(t, i, s, r) {
        this.addVerticesMatrix(t.worldTransform, i, s, r)
    }
    addVerticesMatrix(t, i, s, r, n = 0, o = n) {
        const a = t.a,
            h = t.b,
            l = t.c,
            c = t.d,
            u = t.tx,
            d = t.ty;
        let f = this.minX,
            p = this.minY,
            g = this.maxX,
            m = this.maxY;
        for (let y = s; y < r; y += 2) {
            const v = i[y],
                _ = i[y + 1],
                x = a * v + l * _ + u,
                T = c * _ + h * v + d;
            f = Math.min(f, x - n), g = Math.max(g, x + n), p = Math.min(p, T - o), m = Math.max(m, T + o)
        }
        this.minX = f, this.minY = p, this.maxX = g, this.maxY = m
    }
    addBounds(t) {
        const i = this.minX,
            s = this.minY,
            r = this.maxX,
            n = this.maxY;
        this.minX = t.minX < i ? t.minX : i, this.minY = t.minY < s ? t.minY : s, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
    }
    addBoundsMask(t, i) {
        const s = t.minX > i.minX ? t.minX : i.minX,
            r = t.minY > i.minY ? t.minY : i.minY,
            n = t.maxX < i.maxX ? t.maxX : i.maxX,
            o = t.maxY < i.maxY ? t.maxY : i.maxY;
        if (s <= n && r <= o) {
            const a = this.minX,
                h = this.minY,
                l = this.maxX,
                c = this.maxY;
            this.minX = s < a ? s : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c
        }
    }
    addBoundsMatrix(t, i) {
        this.addFrameMatrix(i, t.minX, t.minY, t.maxX, t.maxY)
    }
    addBoundsArea(t, i) {
        const s = t.minX > i.x ? t.minX : i.x,
            r = t.minY > i.y ? t.minY : i.y,
            n = t.maxX < i.x + i.width ? t.maxX : i.x + i.width,
            o = t.maxY < i.y + i.height ? t.maxY : i.y + i.height;
        if (s <= n && r <= o) {
            const a = this.minX,
                h = this.minY,
                l = this.maxX,
                c = this.maxY;
            this.minX = s < a ? s : a, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = o > c ? o : c
        }
    }
    pad(t = 0, i = t) {
        this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= i, this.maxY += i)
    }
    addFramePad(t, i, s, r, n, o) {
        t -= n, i -= o, s += n, r += o, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > s ? this.maxX : s, this.minY = this.minY < i ? this.minY : i, this.maxY = this.maxY > r ? this.maxY : r
    }
}
class nt extends Hi {
    constructor() {
        super(), this.tempDisplayObjectParent = null, this.transform = new Ln, this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Ds, this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
    }
    static mixin(t) {
        const i = Object.keys(t);
        for (let s = 0; s < i.length; ++s) {
            const r = i[s];
            Object.defineProperty(nt.prototype, r, Object.getOwnPropertyDescriptor(t, r))
        }
    }
    get destroyed() {
        return this._destroyed
    }
    _recursivePostUpdateTransform() {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
    }
    updateTransform() {
        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
    }
    getBounds(t, i) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), i || (this._boundsRect || (this._boundsRect = new z), i = this._boundsRect), this._bounds.getRectangle(i)
    }
    getLocalBounds(t) {
        t || (this._localBoundsRect || (this._localBoundsRect = new z), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Ds);
        const i = this.transform,
            s = this.parent;
        this.parent = null, this.transform = this._tempDisplayObjectParent.transform;
        const r = this._bounds,
            n = this._boundsID;
        this._bounds = this._localBounds;
        const o = this.getBounds(!1, t);
        return this.parent = s, this.transform = i, this._bounds = r, this._bounds.updateID += this._boundsID - n, o
    }
    toGlobal(t, i, s = !1) {
        return s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, i)
    }
    toLocal(t, i, s, r) {
        return i && (t = i.toGlobal(t, s, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, s)
    }
    setParent(t) {
        if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
        return t.addChild(this), t
    }
    removeFromParent() {
        var t;
        (t = this.parent) == null || t.removeChild(this)
    }
    setTransform(t = 0, i = 0, s = 1, r = 1, n = 0, o = 0, a = 0, h = 0, l = 0) {
        return this.position.x = t, this.position.y = i, this.scale.x = s || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = a, this.pivot.x = h, this.pivot.y = l, this
    }
    destroy(t) {
        this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners()
    }
    get _tempDisplayObjectParent() {
        return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new uf), this.tempDisplayObjectParent
    }
    enableTempParent() {
        const t = this.parent;
        return this.parent = this._tempDisplayObjectParent, t
    }
    disableTempParent(t) {
        this.parent = t
    }
    get x() {
        return this.position.x
    }
    set x(t) {
        this.transform.position.x = t
    }
    get y() {
        return this.position.y
    }
    set y(t) {
        this.transform.position.y = t
    }
    get worldTransform() {
        return this.transform.worldTransform
    }
    get localTransform() {
        return this.transform.localTransform
    }
    get position() {
        return this.transform.position
    }
    set position(t) {
        this.transform.position.copyFrom(t)
    }
    get scale() {
        return this.transform.scale
    }
    set scale(t) {
        this.transform.scale.copyFrom(t)
    }
    get pivot() {
        return this.transform.pivot
    }
    set pivot(t) {
        this.transform.pivot.copyFrom(t)
    }
    get skew() {
        return this.transform.skew
    }
    set skew(t) {
        this.transform.skew.copyFrom(t)
    }
    get rotation() {
        return this.transform.rotation
    }
    set rotation(t) {
        this.transform.rotation = t
    }
    get angle() {
        return this.transform.rotation * od
    }
    set angle(t) {
        this.transform.rotation = t * ad
    }
    get zIndex() {
        return this._zIndex
    }
    set zIndex(t) {
        this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
    }
    get worldVisible() {
        let t = this;
        do {
            if (!t.visible) return !1;
            t = t.parent
        } while (t);
        return !0
    }
    get mask() {
        return this._mask
    }
    set mask(t) {
        if (this._mask !== t) {
            if (this._mask) {
                const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                i && (i._maskRefCount--, i._maskRefCount === 0 && (i.renderable = !0, i.isMask = !1))
            }
            if (this._mask = t, this._mask) {
                const i = this._mask.isMaskData ? this._mask.maskObject : this._mask;
                i && (i._maskRefCount === 0 && (i.renderable = !1, i.isMask = !0), i._maskRefCount++)
            }
        }
    }
}
class uf extends nt {
    constructor() {
        super(...arguments), this.sortDirty = null
    }
}
nt.prototype.displayObjectUpdateTransform = nt.prototype.updateTransform;
const df = new it;

function ff(e, t) {
    return e.zIndex === t.zIndex ? e._lastSortedIndex - t._lastSortedIndex : e.zIndex - t.zIndex
}
const dn = class extends nt {
    constructor() {
        super(), this.children = [], this.sortableChildren = dn.defaultSortableChildren, this.sortDirty = !1
    }
    onChildrenChange(e) {}
    addChild(...e) {
        if (e.length > 1)
            for (let t = 0; t < e.length; t++) this.addChild(e[t]);
        else {
            const t = e[0];
            t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", t, this, this.children.length - 1), t.emit("added", this)
        }
        return e[0]
    }
    addChildAt(e, t) {
        if (t < 0 || t > this.children.length) throw new Error(`${e}addChildAt: The index ${t} supplied is out of bounds ${this.children.length}`);
        return e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.splice(t, 0, e), this._boundsID++, this.onChildrenChange(t), e.emit("added", this), this.emit("childAdded", e, this, t), e
    }
    swapChildren(e, t) {
        if (e === t) return;
        const i = this.getChildIndex(e),
            s = this.getChildIndex(t);
        this.children[i] = t, this.children[s] = e, this.onChildrenChange(i < s ? i : s)
    }
    getChildIndex(e) {
        const t = this.children.indexOf(e);
        if (t === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
        return t
    }
    setChildIndex(e, t) {
        if (t < 0 || t >= this.children.length) throw new Error(`The index ${t} supplied is out of bounds ${this.children.length}`);
        const i = this.getChildIndex(e);
        hi(this.children, i, 1), this.children.splice(t, 0, e), this.onChildrenChange(t)
    }
    getChildAt(e) {
        if (e < 0 || e >= this.children.length) throw new Error(`getChildAt: Index (${e}) does not exist.`);
        return this.children[e]
    }
    removeChild(...e) {
        if (e.length > 1)
            for (let t = 0; t < e.length; t++) this.removeChild(e[t]);
        else {
            const t = e[0],
                i = this.children.indexOf(t);
            if (i === -1) return null;
            t.parent = null, t.transform._parentID = -1, hi(this.children, i, 1), this._boundsID++, this.onChildrenChange(i), t.emit("removed", this), this.emit("childRemoved", t, this, i)
        }
        return e[0]
    }
    removeChildAt(e) {
        const t = this.getChildAt(e);
        return t.parent = null, t.transform._parentID = -1, hi(this.children, e, 1), this._boundsID++, this.onChildrenChange(e), t.emit("removed", this), this.emit("childRemoved", t, this, e), t
    }
    removeChildren(e = 0, t = this.children.length) {
        const i = e,
            s = t,
            r = s - i;
        let n;
        if (r > 0 && r <= s) {
            n = this.children.splice(i, r);
            for (let o = 0; o < n.length; ++o) n[o].parent = null, n[o].transform && (n[o].transform._parentID = -1);
            this._boundsID++, this.onChildrenChange(e);
            for (let o = 0; o < n.length; ++o) n[o].emit("removed", this), this.emit("childRemoved", n[o], this, o);
            return n
        } else if (r === 0 && this.children.length === 0) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
    }
    sortChildren() {
        let e = !1;
        for (let t = 0, i = this.children.length; t < i; ++t) {
            const s = this.children[t];
            s._lastSortedIndex = t, !e && s.zIndex !== 0 && (e = !0)
        }
        e && this.children.length > 1 && this.children.sort(ff), this.sortDirty = !1
    }
    updateTransform() {
        this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (let e = 0, t = this.children.length; e < t; ++e) {
            const i = this.children[e];
            i.visible && i.updateTransform()
        }
    }
    calculateBounds() {
        this._bounds.clear(), this._calculateBounds();
        for (let e = 0; e < this.children.length; e++) {
            const t = this.children[e];
            if (!(!t.visible || !t.renderable))
                if (t.calculateBounds(), t._mask) {
                    const i = t._mask.isMaskData ? t._mask.maskObject : t._mask;
                    i ? (i.calculateBounds(), this._bounds.addBoundsMask(t._bounds, i._bounds)) : this._bounds.addBounds(t._bounds)
                } else t.filterArea ? this._bounds.addBoundsArea(t._bounds, t.filterArea) : this._bounds.addBounds(t._bounds)
        }
        this._bounds.updateID = this._boundsID
    }
    getLocalBounds(e, t = !1) {
        const i = super.getLocalBounds(e);
        if (!t)
            for (let s = 0, r = this.children.length; s < r; ++s) {
                const n = this.children[s];
                n.visible && n.updateTransform()
            }
        return i
    }
    _calculateBounds() {}
    _renderWithCulling(e) {
        const t = e.renderTexture.sourceFrame;
        if (!(t.width > 0 && t.height > 0)) return;
        let i, s;
        this.cullArea ? (i = this.cullArea, s = this.worldTransform) : this._render !== dn.prototype._render && (i = this.getBounds(!0));
        const r = e.projection.transform;
        if (r && (s ? (s = df.copyFrom(s), s.prepend(r)) : s = r), i && t.intersects(i, s)) this._render(e);
        else if (this.cullArea) return;
        for (let n = 0, o = this.children.length; n < o; ++n) {
            const a = this.children[n],
                h = a.cullable;
            a.cullable = h || !this.cullArea, a.render(e), a.cullable = h
        }
    }
    render(e) {
        var t;
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
            if (this._mask || (t = this.filters) != null && t.length) this.renderAdvanced(e);
            else if (this.cullable) this._renderWithCulling(e);
        else {
            this._render(e);
            for (let i = 0, s = this.children.length; i < s; ++i) this.children[i].render(e)
        }
    }
    renderAdvanced(e) {
        var r, n, o;
        const t = this.filters,
            i = this._mask;
        if (t) {
            this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
            for (let a = 0; a < t.length; a++) t[a].enabled && this._enabledFilters.push(t[a])
        }
        const s = t && ((r = this._enabledFilters) == null ? void 0 : r.length) || i && (!i.isMaskData || i.enabled && (i.autoDetect || i.type !== dt.NONE));
        if (s && e.batch.flush(), t && ((n = this._enabledFilters) != null && n.length) && e.filter.push(this, this._enabledFilters), i && e.mask.push(this, this._mask), this.cullable) this._renderWithCulling(e);
        else {
            this._render(e);
            for (let a = 0, h = this.children.length; a < h; ++a) this.children[a].render(e)
        }
        s && e.batch.flush(), i && e.mask.pop(this), t && ((o = this._enabledFilters) != null && o.length) && e.filter.pop()
    }
    _render(e) {}
    destroy(e) {
        super.destroy(), this.sortDirty = !1;
        const t = typeof e == "boolean" ? e : e == null ? void 0 : e.children,
            i = this.removeChildren(0, this.children.length);
        if (t)
            for (let s = 0; s < i.length; ++s) i[s].destroy(e)
    }
    get width() {
        return this.scale.x * this.getLocalBounds().width
    }
    set width(e) {
        const t = this.getLocalBounds().width;
        t !== 0 ? this.scale.x = e / t : this.scale.x = 1, this._width = e
    }
    get height() {
        return this.scale.y * this.getLocalBounds().height
    }
    set height(e) {
        const t = this.getLocalBounds().height;
        t !== 0 ? this.scale.y = e / t : this.scale.y = 1, this._height = e
    }
};
let Et = dn;
Et.defaultSortableChildren = !1;
Et.prototype.containerUpdateTransform = Et.prototype.updateTransform;
Object.defineProperties(R, {
    SORTABLE_CHILDREN: {
        get() {
            return Et.defaultSortableChildren
        },
        set(e) {
            Y("7.1.0", "settings.SORTABLE_CHILDREN is deprecated, use Container.defaultSortableChildren"), Et.defaultSortableChildren = e
        }
    }
});
const Ti = new K,
    pf = new Uint16Array([0, 1, 2, 0, 2, 3]);
class Xe extends Et {
    constructor(t) {
        super(), this._anchor = new xe(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new J(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = G.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || O.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = pf, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = R.ROUND_PIXELS
    }
    _onTextureUpdate() {
        this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = ve(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = ve(this.scale.y) * this._height / this._texture.orig.height)
    }
    _onAnchorUpdate() {
        this._transformID = -1, this._transformTrimmedID = -1
    }
    calculateVertices() {
        const t = this._texture;
        if (this._transformID === this.transform._worldID && this._textureID === t._updateID) return;
        this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
        const i = this.transform.worldTransform,
            s = i.a,
            r = i.b,
            n = i.c,
            o = i.d,
            a = i.tx,
            h = i.ty,
            l = this.vertexData,
            c = t.trim,
            u = t.orig,
            d = this._anchor;
        let f = 0,
            p = 0,
            g = 0,
            m = 0;
        if (c ? (p = c.x - d._x * u.width, f = p + c.width, m = c.y - d._y * u.height, g = m + c.height) : (p = -d._x * u.width, f = p + u.width, m = -d._y * u.height, g = m + u.height), l[0] = s * p + n * m + a, l[1] = o * m + r * p + h, l[2] = s * f + n * m + a, l[3] = o * m + r * f + h, l[4] = s * f + n * g + a, l[5] = o * g + r * f + h, l[6] = s * p + n * g + a, l[7] = o * g + r * p + h, this._roundPixels) {
            const y = R.RESOLUTION;
            for (let v = 0; v < l.length; ++v) l[v] = Math.round(l[v] * y) / y
        }
    }
    calculateTrimmedVertices() {
        if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
        const t = this._texture,
            i = this.vertexTrimmedData,
            s = t.orig,
            r = this._anchor,
            n = this.transform.worldTransform,
            o = n.a,
            a = n.b,
            h = n.c,
            l = n.d,
            c = n.tx,
            u = n.ty,
            d = -r._x * s.width,
            f = d + s.width,
            p = -r._y * s.height,
            g = p + s.height;
        i[0] = o * d + h * p + c, i[1] = l * p + a * d + u, i[2] = o * f + h * p + c, i[3] = l * p + a * f + u, i[4] = o * f + h * g + c, i[5] = l * g + a * f + u, i[6] = o * d + h * g + c, i[7] = l * g + a * d + u
    }
    _render(t) {
        this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
    }
    _calculateBounds() {
        const t = this._texture.trim,
            i = this._texture.orig;
        !t || t.width === i.width && t.height === i.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
    }
    getLocalBounds(t) {
        return this.children.length === 0 ? (this._localBounds || (this._localBounds = new Ds), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new z), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
    }
    containsPoint(t) {
        this.worldTransform.applyInverse(t, Ti);
        const i = this._texture.orig.width,
            s = this._texture.orig.height,
            r = -i * this.anchor.x;
        let n = 0;
        return Ti.x >= r && Ti.x < r + i && (n = -s * this.anchor.y, Ti.y >= n && Ti.y < n + s)
    }
    destroy(t) {
        if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
            const s = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
            this._texture.destroy(!!s)
        }
        this._texture = null
    }
    static from(t, i) {
        const s = t instanceof O ? t : O.from(t, i);
        return new Xe(s)
    }
    set roundPixels(t) {
        this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
    }
    get roundPixels() {
        return this._roundPixels
    }
    get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width
    }
    set width(t) {
        const i = ve(this.scale.x) || 1;
        this.scale.x = i * t / this._texture.orig.width, this._width = t
    }
    get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
    }
    set height(t) {
        const i = ve(this.scale.y) || 1;
        this.scale.y = i * t / this._texture.orig.height, this._height = t
    }
    get anchor() {
        return this._anchor
    }
    set anchor(t) {
        this._anchor.copyFrom(t)
    }
    get tint() {
        return this._tintColor.value
    }
    set tint(t) {
        this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber()
    }
    get tintValue() {
        return this._tintColor.toNumber()
    }
    get texture() {
        return this._texture
    }
    set texture(t) {
        this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || O.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
    }
}
const Rh = new it;
nt.prototype._cacheAsBitmap = !1;
nt.prototype._cacheData = null;
nt.prototype._cacheAsBitmapResolution = null;
nt.prototype._cacheAsBitmapMultisample = null;
class mf {
    constructor() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null
    }
}
Object.defineProperties(nt.prototype, {
    cacheAsBitmapResolution: {
        get() {
            return this._cacheAsBitmapResolution
        },
        set(e) {
            e !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
        }
    },
    cacheAsBitmapMultisample: {
        get() {
            return this._cacheAsBitmapMultisample
        },
        set(e) {
            e !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = e, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
        }
    },
    cacheAsBitmap: {
        get() {
            return this._cacheAsBitmap
        },
        set(e) {
            if (this._cacheAsBitmap === e) return;
            this._cacheAsBitmap = e;
            let t;
            e ? (this._cacheData || (this._cacheData = new mf), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea)
        }
    }
});
nt.prototype._renderCached = function(t) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(t))
};
nt.prototype._initCachedDisplayObject = function(t) {
    var d, f;
    if ((d = this._cacheData) != null && d.sprite) return;
    const i = this.alpha;
    this.alpha = 1, t.batch.flush();
    const s = this.getLocalBounds(null, !0).clone();
    if ((f = this.filters) != null && f.length) {
        const p = this.filters[0].padding;
        s.pad(p)
    }
    s.ceil(R.RESOLUTION);
    const r = t.renderTexture.current,
        n = t.renderTexture.sourceFrame.clone(),
        o = t.renderTexture.destinationFrame.clone(),
        a = t.projection.transform,
        h = Ve.create({
            width: s.width,
            height: s.height,
            resolution: this.cacheAsBitmapResolution || t.resolution,
            multisample: this.cacheAsBitmapMultisample ?? t.multisample
        }),
        l = `cacheAsBitmap_${Ge()}`;
    this._cacheData.textureCacheId = l, V.addToCache(h.baseTexture, l), O.addToCache(h, l);
    const c = this.transform.localTransform.copyTo(Rh).invert().translate(-s.x, -s.y);
    this.render = this._cacheData.originalRender, t.render(this, {
        renderTexture: h,
        clear: !0,
        transform: c,
        skipUpdateTransform: !1
    }), t.framebuffer.blit(), t.projection.transform = a, t.renderTexture.bind(r, n, o), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = i;
    const u = new Xe(h);
    u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(s.x / s.width), u.anchor.y = -(s.y / s.height), u.alpha = i, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = u.containsPoint.bind(u)
};
nt.prototype._renderCachedCanvas = function(t) {
    !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
};
nt.prototype._initCachedDisplayObjectCanvas = function(t) {
    var c;
    if ((c = this._cacheData) != null && c.sprite) return;
    const i = this.getLocalBounds(null, !0),
        s = this.alpha;
    this.alpha = 1;
    const r = t.canvasContext.activeContext,
        n = t._projTransform;
    i.ceil(R.RESOLUTION);
    const o = Ve.create({
            width: i.width,
            height: i.height
        }),
        a = `cacheAsBitmap_${Ge()}`;
    this._cacheData.textureCacheId = a, V.addToCache(o.baseTexture, a), O.addToCache(o, a);
    const h = Rh;
    this.transform.localTransform.copyTo(h), h.invert(), h.tx -= i.x, h.ty -= i.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, {
        renderTexture: o,
        clear: !0,
        transform: h,
        skipUpdateTransform: !1
    }), t.canvasContext.activeContext = r, t._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = s;
    const l = new Xe(o);
    l.transform.worldTransform = this.transform.worldTransform, l.anchor.x = -(i.x / i.width), l.anchor.y = -(i.y / i.height), l.alpha = s, l._bounds = this._bounds, this._cacheData.sprite = l, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = l.containsPoint.bind(l)
};
nt.prototype._calculateCachedBounds = function() {
    this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID
};
nt.prototype._getCachedLocalBounds = function() {
    return this._cacheData.sprite.getLocalBounds(null)
};
nt.prototype._destroyCachedDisplayObject = function() {
    this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, V.removeFromCache(this._cacheData.textureCacheId), O.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
};
nt.prototype._cacheAsBitmapDestroy = function(t) {
    this.cacheAsBitmap = !1, this.destroy(t)
};
nt.prototype.name = null;
Et.prototype.getChildByName = function(t, i) {
    for (let s = 0, r = this.children.length; s < r; s++)
        if (this.children[s].name === t) return this.children[s];
    if (i)
        for (let s = 0, r = this.children.length; s < r; s++) {
            const n = this.children[s];
            if (!n.getChildByName) continue;
            const o = n.getChildByName(t, !0);
            if (o) return o
        }
    return null
};
nt.prototype.getGlobalPosition = function(t = new K, i = !1) {
    return this.parent ? this.parent.toGlobal(this.position, t, i) : (t.x = this.position.x, t.y = this.position.y), t
};
var gf = `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`;
class _f extends bt {
    constructor(t = 1) {
        super(af, gf, {
            uAlpha: 1
        }), this.alpha = t
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
const yf = {
        5: [.153388, .221461, .250301],
        7: [.071303, .131514, .189879, .214607],
        9: [.028532, .067234, .124009, .179044, .20236],
        11: [.0093, .028002, .065984, .121703, .175713, .198596],
        13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
        15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
    },
    vf = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`);

function xf(e) {
    const t = yf[e],
        i = t.length;
    let s = vf,
        r = "";
    const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
    let o;
    for (let a = 0; a < e; a++) {
        let h = n.replace("%index%", a.toString());
        o = a, a >= i && (o = e - a - 1), h = h.replace("%value%", t[o].toString()), r += h, r += `
`
    }
    return s = s.replace("%blur%", r), s = s.replace("%size%", e.toString()), s
}
const bf = `
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;

function Ef(e, t) {
    const i = Math.ceil(e / 2);
    let s = bf,
        r = "",
        n;
    t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
    for (let o = 0; o < e; o++) {
        let a = n.replace("%index%", o.toString());
        a = a.replace("%sampleIndex%", `${o-(i-1)}.0`), r += a, r += `
`
    }
    return s = s.replace("%blur%", r), s = s.replace("%size%", e.toString()), s
}
class fn extends bt {
    constructor(t, i = 8, s = 4, r = bt.defaultResolution, n = 5) {
        const o = Ef(n, t),
            a = xf(n);
        super(o, a), this.horizontal = t, this.resolution = r, this._quality = 0, this.quality = s, this.blur = i
    }
    apply(t, i, s, r) {
        if (s ? this.horizontal ? this.uniforms.strength = 1 / s.width * (s.width / i.width) : this.uniforms.strength = 1 / s.height * (s.height / i.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / i.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / i.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) t.applyFilter(this, i, s, r);
        else {
            const n = t.getFilterTexture(),
                o = t.renderer;
            let a = i,
                h = n;
            this.state.blend = !1, t.applyFilter(this, a, h, Jt.CLEAR);
            for (let l = 1; l < this.passes - 1; l++) {
                t.bindAndClear(a, Jt.BLIT), this.uniforms.uSampler = h;
                const c = h;
                h = a, a = c, o.shader.bind(this), o.geometry.draw(5)
            }
            this.state.blend = !0, t.applyFilter(this, h, s, r), t.returnFilterTexture(n)
        }
    }
    get blur() {
        return this.strength
    }
    set blur(t) {
        this.padding = 1 + Math.abs(t) * 2, this.strength = t
    }
    get quality() {
        return this._quality
    }
    set quality(t) {
        this._quality = t, this.passes = t
    }
}
class Tf extends bt {
    constructor(t = 8, i = 4, s = bt.defaultResolution, r = 5) {
        super(), this._repeatEdgePixels = !1, this.blurXFilter = new fn(!0, t, i, s, r), this.blurYFilter = new fn(!1, t, i, s, r), this.resolution = s, this.quality = i, this.blur = t, this.repeatEdgePixels = !1
    }
    apply(t, i, s, r) {
        const n = Math.abs(this.blurXFilter.strength),
            o = Math.abs(this.blurYFilter.strength);
        if (n && o) {
            const a = t.getFilterTexture();
            this.blurXFilter.apply(t, i, a, Jt.CLEAR), this.blurYFilter.apply(t, a, s, r), t.returnFilterTexture(a)
        } else o ? this.blurYFilter.apply(t, i, s, r) : this.blurXFilter.apply(t, i, s, r)
    }
    updatePadding() {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2
    }
    get blur() {
        return this.blurXFilter.blur
    }
    set blur(t) {
        this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
    }
    get quality() {
        return this.blurXFilter.quality
    }
    set quality(t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t
    }
    get blurX() {
        return this.blurXFilter.blur
    }
    set blurX(t) {
        this.blurXFilter.blur = t, this.updatePadding()
    }
    get blurY() {
        return this.blurYFilter.blur
    }
    set blurY(t) {
        this.blurYFilter.blur = t, this.updatePadding()
    }
    get blendMode() {
        return this.blurYFilter.blendMode
    }
    set blendMode(t) {
        this.blurYFilter.blendMode = t
    }
    get repeatEdgePixels() {
        return this._repeatEdgePixels
    }
    set repeatEdgePixels(t) {
        this._repeatEdgePixels = t, this.updatePadding()
    }
}
var wf = `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`;
class pn extends bt {
    constructor() {
        const t = {
            m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
            uAlpha: 1
        };
        super(wh, wf, t), this.alpha = 1
    }
    _loadMatrix(t, i = !1) {
        let s = t;
        i && (this._multiply(s, this.uniforms.m, t), s = this._colorMatrix(s)), this.uniforms.m = s
    }
    _multiply(t, i, s) {
        return t[0] = i[0] * s[0] + i[1] * s[5] + i[2] * s[10] + i[3] * s[15], t[1] = i[0] * s[1] + i[1] * s[6] + i[2] * s[11] + i[3] * s[16], t[2] = i[0] * s[2] + i[1] * s[7] + i[2] * s[12] + i[3] * s[17], t[3] = i[0] * s[3] + i[1] * s[8] + i[2] * s[13] + i[3] * s[18], t[4] = i[0] * s[4] + i[1] * s[9] + i[2] * s[14] + i[3] * s[19] + i[4], t[5] = i[5] * s[0] + i[6] * s[5] + i[7] * s[10] + i[8] * s[15], t[6] = i[5] * s[1] + i[6] * s[6] + i[7] * s[11] + i[8] * s[16], t[7] = i[5] * s[2] + i[6] * s[7] + i[7] * s[12] + i[8] * s[17], t[8] = i[5] * s[3] + i[6] * s[8] + i[7] * s[13] + i[8] * s[18], t[9] = i[5] * s[4] + i[6] * s[9] + i[7] * s[14] + i[8] * s[19] + i[9], t[10] = i[10] * s[0] + i[11] * s[5] + i[12] * s[10] + i[13] * s[15], t[11] = i[10] * s[1] + i[11] * s[6] + i[12] * s[11] + i[13] * s[16], t[12] = i[10] * s[2] + i[11] * s[7] + i[12] * s[12] + i[13] * s[17], t[13] = i[10] * s[3] + i[11] * s[8] + i[12] * s[13] + i[13] * s[18], t[14] = i[10] * s[4] + i[11] * s[9] + i[12] * s[14] + i[13] * s[19] + i[14], t[15] = i[15] * s[0] + i[16] * s[5] + i[17] * s[10] + i[18] * s[15], t[16] = i[15] * s[1] + i[16] * s[6] + i[17] * s[11] + i[18] * s[16], t[17] = i[15] * s[2] + i[16] * s[7] + i[17] * s[12] + i[18] * s[17], t[18] = i[15] * s[3] + i[16] * s[8] + i[17] * s[13] + i[18] * s[18], t[19] = i[15] * s[4] + i[16] * s[9] + i[17] * s[14] + i[18] * s[19] + i[19], t
    }
    _colorMatrix(t) {
        const i = new Float32Array(t);
        return i[4] /= 255, i[9] /= 255, i[14] /= 255, i[19] /= 255, i
    }
    brightness(t, i) {
        const s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, i)
    }
    tint(t, i) {
        const [s, r, n] = J.shared.setValue(t).toArray(), o = [s, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(o, i)
    }
    greyscale(t, i) {
        const s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, i)
    }
    blackAndWhite(t) {
        const i = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    hue(t, i) {
        t = (t || 0) / 180 * Math.PI;
        const s = Math.cos(t),
            r = Math.sin(t),
            n = Math.sqrt,
            o = 1 / 3,
            a = n(o),
            h = s + (1 - s) * o,
            l = o * (1 - s) - a * r,
            c = o * (1 - s) + a * r,
            u = o * (1 - s) + a * r,
            d = s + o * (1 - s),
            f = o * (1 - s) - a * r,
            p = o * (1 - s) - a * r,
            g = o * (1 - s) + a * r,
            m = s + o * (1 - s),
            y = [h, l, c, 0, 0, u, d, f, 0, 0, p, g, m, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(y, i)
    }
    contrast(t, i) {
        const s = (t || 0) + 1,
            r = -.5 * (s - 1),
            n = [s, 0, 0, 0, r, 0, s, 0, 0, r, 0, 0, s, 0, r, 0, 0, 0, 1, 0];
        this._loadMatrix(n, i)
    }
    saturate(t = 0, i) {
        const s = t * 2 / 3 + 1,
            r = (s - 1) * -.5,
            n = [s, r, r, 0, 0, r, s, r, 0, 0, r, r, s, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, i)
    }
    desaturate() {
        this.saturate(-1)
    }
    negative(t) {
        const i = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    sepia(t) {
        const i = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    technicolor(t) {
        const i = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    polaroid(t) {
        const i = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    toBGR(t) {
        const i = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    kodachrome(t) {
        const i = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    browni(t) {
        const i = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    vintage(t) {
        const i = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    colorTone(t, i, s, r, n) {
        t = t || .2, i = i || .15, s = s || 16770432, r = r || 3375104;
        const o = J.shared,
            [a, h, l] = o.setValue(s).toArray(),
            [c, u, d] = o.setValue(r).toArray(),
            f = [.3, .59, .11, 0, 0, a, h, l, t, 0, c, u, d, i, 0, a - c, h - u, l - d, 0, 0];
        this._loadMatrix(f, n)
    }
    night(t, i) {
        t = t || .1;
        const s = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, i)
    }
    predator(t, i) {
        const s = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(s, i)
    }
    lsd(t) {
        const i = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(i, t)
    }
    reset() {
        const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1)
    }
    get matrix() {
        return this.uniforms.m
    }
    set matrix(t) {
        this.uniforms.m = t
    }
    get alpha() {
        return this.uniforms.uAlpha
    }
    set alpha(t) {
        this.uniforms.uAlpha = t
    }
}
pn.prototype.grayscale = pn.prototype.greyscale;
var Sf = `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,
    Af = `attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`;
class Cf extends bt {
    constructor(t, i) {
        const s = new it;
        t.renderable = !1, super(Af, Sf, {
            mapSampler: t._texture,
            filterMatrix: s,
            scale: {
                x: 1,
                y: 1
            },
            rotation: new Float32Array([1, 0, 0, 1])
        }), this.maskSprite = t, this.maskMatrix = s, i == null && (i = 20), this.scale = new K(i, i)
    }
    apply(t, i, s, r) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
        const n = this.maskSprite.worldTransform,
            o = Math.sqrt(n.a * n.a + n.b * n.b),
            a = Math.sqrt(n.c * n.c + n.d * n.d);
        o !== 0 && a !== 0 && (this.uniforms.rotation[0] = n.a / o, this.uniforms.rotation[1] = n.b / o, this.uniforms.rotation[2] = n.c / a, this.uniforms.rotation[3] = n.d / a), t.applyFilter(this, i, s, r)
    }
    get map() {
        return this.uniforms.mapSampler
    }
    set map(t) {
        this.uniforms.mapSampler = t
    }
}
var If = `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,
    Pf = `
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`;
class Rf extends bt {
    constructor() {
        super(Pf, If)
    }
}
var Mf = `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`;
class Df extends bt {
    constructor(t = .5, i = Math.random()) {
        super(wh, Mf, {
            uNoise: 0,
            uSeed: 0
        }), this.noise = t, this.seed = i
    }
    get noise() {
        return this.uniforms.uNoise
    }
    set noise(t) {
        this.uniforms.uNoise = t
    }
    get seed() {
        return this.uniforms.uSeed
    }
    set seed(t) {
        this.uniforms.uSeed = t
    }
}
const jo = {
    AlphaFilter: _f,
    BlurFilter: Tf,
    BlurFilterPass: fn,
    ColorMatrixFilter: pn,
    DisplacementFilter: Cf,
    FXAAFilter: Rf,
    NoiseFilter: Df
};
Object.entries(jo).forEach(([e, t]) => {
    Object.defineProperty(jo, e, {
        get() {
            return Y("7.1.0", `filters.${e} has moved to ${e}`), t
        }
    })
});
class Bf {
    constructor() {
        this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0
    }
    init(t) {
        this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0
    }
    get pauseUpdate() {
        return this._pauseUpdate
    }
    set pauseUpdate(t) {
        this._pauseUpdate = t
    }
    addTickerListener() {
        this.tickerAdded || !this.domElement || (St.system.add(this.tickerUpdate, this, He.INTERACTION), this.tickerAdded = !0)
    }
    removeTickerListener() {
        this.tickerAdded && (St.system.remove(this.tickerUpdate, this), this.tickerAdded = !1)
    }
    pointerMoved() {
        this._didMove = !0
    }
    update() {
        if (!this.domElement || this._pauseUpdate) return;
        if (this._didMove) {
            this._didMove = !1;
            return
        }
        const t = this.events.rootPointerEvent;
        this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
            clientX: t.clientX,
            clientY: t.clientY
        }))
    }
    tickerUpdate(t) {
        this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update())
    }
}
const _e = new Bf;
class Xi {
    constructor(t) {
        this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = Xi.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new K, this.page = new K, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t
    }
    get layerX() {
        return this.layer.x
    }
    get layerY() {
        return this.layer.y
    }
    get pageX() {
        return this.page.x
    }
    get pageY() {
        return this.page.y
    }
    get data() {
        return this
    }
    composedPath() {
        return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path
    }
    initEvent(t, i, s) {
        throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
    }
    initUIEvent(t, i, s, r, n) {
        throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
    }
    preventDefault() {
        this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0
    }
    stopImmediatePropagation() {
        this.propagationImmediatelyStopped = !0
    }
    stopPropagation() {
        this.propagationStopped = !0
    }
}
class Bs extends Xi {
    constructor() {
        super(...arguments), this.client = new K, this.movement = new K, this.offset = new K, this.global = new K, this.screen = new K
    }
    get clientX() {
        return this.client.x
    }
    get clientY() {
        return this.client.y
    }
    get x() {
        return this.clientX
    }
    get y() {
        return this.clientY
    }
    get movementX() {
        return this.movement.x
    }
    get movementY() {
        return this.movement.y
    }
    get offsetX() {
        return this.offset.x
    }
    get offsetY() {
        return this.offset.y
    }
    get globalX() {
        return this.global.x
    }
    get globalY() {
        return this.global.y
    }
    get screenX() {
        return this.screen.x
    }
    get screenY() {
        return this.screen.y
    }
    getLocalPosition(t, i, s) {
        return t.worldTransform.applyInverse(s || this.global, i)
    }
    getModifierState(t) {
        return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t)
    }
    initMouseEvent(t, i, s, r, n, o, a, h, l, c, u, d, f, p, g) {
        throw new Error("Method not implemented.")
    }
}
class Ut extends Bs {
    constructor() {
        super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1
    }
    getCoalescedEvents() {
        return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []
    }
    getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!")
    }
}
class pi extends Bs {
    constructor() {
        super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2
    }
}
pi.DOM_DELTA_PIXEL = 0;
pi.DOM_DELTA_LINE = 1;
pi.DOM_DELTA_PAGE = 2;
const Ff = 2048,
    Of = new K,
    Ir = new K;
class Lf {
    constructor(t) {
        this.dispatch = new Hi, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
            trackingData: {}
        }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel)
    }
    addEventMapping(t, i) {
        this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
            fn: i,
            priority: 0
        }), this.mappingTable[t].sort((s, r) => s.priority - r.priority)
    }
    dispatchEvent(t, i) {
        t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, i), this.dispatch.emit(i || t.type, t)
    }
    mapEvent(t) {
        if (!this.rootTarget) return;
        const i = this.mappingTable[t.type];
        if (i)
            for (let s = 0, r = i.length; s < r; s++) i[s].fn(t);
        else console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)
    }
    hitTest(t, i) {
        _e.pauseUpdate = !0;
        const r = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive",
            n = this[r](this.rootTarget, this.rootTarget.eventMode, Of.set(t, i), this.hitTestFn, this.hitPruneFn);
        return n && n[0]
    }
    propagate(t, i) {
        if (!t.target) return;
        const s = t.composedPath();
        t.eventPhase = t.CAPTURING_PHASE;
        for (let r = 0, n = s.length - 1; r < n; r++)
            if (t.currentTarget = s[r], this.notifyTarget(t, i), t.propagationStopped || t.propagationImmediatelyStopped) return;
        if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, i), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
            t.eventPhase = t.BUBBLING_PHASE;
            for (let r = s.length - 2; r >= 0; r--)
                if (t.currentTarget = s[r], this.notifyTarget(t, i), t.propagationStopped || t.propagationImmediatelyStopped) return
        }
    }
    all(t, i, s = this._allInteractiveElements) {
        if (s.length === 0) return;
        t.eventPhase = t.BUBBLING_PHASE;
        const r = Array.isArray(i) ? i : [i];
        for (let n = s.length - 1; n >= 0; n--) r.forEach(o => {
            t.currentTarget = s[n], this.notifyTarget(t, o)
        })
    }
    propagationPath(t) {
        const i = [t];
        for (let s = 0; s < Ff && t !== this.rootTarget; s++) {
            if (!t.parent) throw new Error("Cannot find propagation path to disconnected target");
            i.push(t.parent), t = t.parent
        }
        return i.reverse(), i
    }
    hitTestMoveRecursive(t, i, s, r, n, o = !1) {
        let a = !1;
        if (this._interactivePrune(t)) return null;
        if ((t.eventMode === "dynamic" || i === "dynamic") && (_e.pauseUpdate = !1), t.interactiveChildren && t.children) {
            const c = t.children;
            for (let u = c.length - 1; u >= 0; u--) {
                const d = c[u],
                    f = this.hitTestMoveRecursive(d, this._isInteractive(i) ? i : d.eventMode, s, r, n, o || n(t, s));
                if (f) {
                    if (f.length > 0 && !f[f.length - 1].parent) continue;
                    const p = t.isInteractive();
                    (f.length > 0 || p) && (p && this._allInteractiveElements.push(t), f.push(t)), this._hitElements.length === 0 && (this._hitElements = f), a = !0
                }
            }
        }
        const h = this._isInteractive(i),
            l = t.isInteractive();
        return l && l && this._allInteractiveElements.push(t), o || this._hitElements.length > 0 ? null : a ? this._hitElements : h && !n(t, s) && r(t, s) ? l ? [t] : [] : null
    }
    hitTestRecursive(t, i, s, r, n) {
        if (this._interactivePrune(t) || n(t, s)) return null;
        if ((t.eventMode === "dynamic" || i === "dynamic") && (_e.pauseUpdate = !1), t.interactiveChildren && t.children) {
            const h = t.children;
            for (let l = h.length - 1; l >= 0; l--) {
                const c = h[l],
                    u = this.hitTestRecursive(c, this._isInteractive(i) ? i : c.eventMode, s, r, n);
                if (u) {
                    if (u.length > 0 && !u[u.length - 1].parent) continue;
                    const d = t.isInteractive();
                    return (u.length > 0 || d) && u.push(t), u
                }
            }
        }
        const o = this._isInteractive(i),
            a = t.isInteractive();
        return o && r(t, s) ? a ? [t] : [] : null
    }
    _isInteractive(t) {
        return t === "static" || t === "dynamic"
    }
    _interactivePrune(t) {
        return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask)
    }
    hitPruneFn(t, i) {
        var s;
        if (t.hitArea && (t.worldTransform.applyInverse(i, Ir), !t.hitArea.contains(Ir.x, Ir.y))) return !0;
        if (t._mask) {
            const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
            if (r && !((s = r.containsPoint) != null && s.call(r, i))) return !0
        }
        return !1
    }
    hitTestFn(t, i) {
        return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(i) : !1
    }
    notifyTarget(t, i) {
        var n, o;
        i = i ?? t.type;
        const s = `on${i}`;
        (o = (n = t.currentTarget)[s]) == null || o.call(n, t);
        const r = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${i}capture` : i;
        this.notifyListeners(t, r), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, i)
    }
    mapPointerDown(t) {
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const i = this.createPointerEvent(t);
        if (this.dispatchEvent(i, "pointerdown"), i.pointerType === "touch") this.dispatchEvent(i, "touchstart");
        else if (i.pointerType === "mouse" || i.pointerType === "pen") {
            const r = i.button === 2;
            this.dispatchEvent(i, r ? "rightdown" : "mousedown")
        }
        const s = this.trackingData(t.pointerId);
        s.pressTargetsByButton[t.button] = i.composedPath(), this.freeEvent(i)
    }
    mapPointerMove(t) {
        var h, l;
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
        const i = this.createPointerEvent(t);
        this._isPointerMoveEvent = !1;
        const s = i.pointerType === "mouse" || i.pointerType === "pen",
            r = this.trackingData(t.pointerId),
            n = this.findMountedTarget(r.overTargets);
        if (((h = r.overTargets) == null ? void 0 : h.length) > 0 && n !== i.target) {
            const c = t.type === "mousemove" ? "mouseout" : "pointerout",
                u = this.createPointerEvent(t, c, n);
            if (this.dispatchEvent(u, "pointerout"), s && this.dispatchEvent(u, "mouseout"), !i.composedPath().includes(n)) {
                const d = this.createPointerEvent(t, "pointerleave", n);
                for (d.eventPhase = d.AT_TARGET; d.target && !i.composedPath().includes(d.target);) d.currentTarget = d.target, this.notifyTarget(d), s && this.notifyTarget(d, "mouseleave"), d.target = d.target.parent;
                this.freeEvent(d)
            }
            this.freeEvent(u)
        }
        if (n !== i.target) {
            const c = t.type === "mousemove" ? "mouseover" : "pointerover",
                u = this.clonePointerEvent(i, c);
            this.dispatchEvent(u, "pointerover"), s && this.dispatchEvent(u, "mouseover");
            let d = n == null ? void 0 : n.parent;
            for (; d && d !== this.rootTarget.parent && d !== i.target;) d = d.parent;
            if (!d || d === this.rootTarget.parent) {
                const p = this.clonePointerEvent(i, "pointerenter");
                for (p.eventPhase = p.AT_TARGET; p.target && p.target !== n && p.target !== this.rootTarget.parent;) p.currentTarget = p.target, this.notifyTarget(p), s && this.notifyTarget(p, "mouseenter"), p.target = p.target.parent;
                this.freeEvent(p)
            }
            this.freeEvent(u)
        }
        const o = [],
            a = this.enableGlobalMoveEvents ?? !0;
        this.moveOnAll ? o.push("pointermove") : this.dispatchEvent(i, "pointermove"), a && o.push("globalpointermove"), i.pointerType === "touch" && (this.moveOnAll ? o.splice(1, 0, "touchmove") : this.dispatchEvent(i, "touchmove"), a && o.push("globaltouchmove")), s && (this.moveOnAll ? o.splice(1, 0, "mousemove") : this.dispatchEvent(i, "mousemove"), a && o.push("globalmousemove"), this.cursor = (l = i.target) == null ? void 0 : l.cursor), o.length > 0 && this.all(i, o), this._allInteractiveElements.length = 0, this._hitElements.length = 0, r.overTargets = i.composedPath(), this.freeEvent(i)
    }
    mapPointerOver(t) {
        var o;
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const i = this.trackingData(t.pointerId),
            s = this.createPointerEvent(t),
            r = s.pointerType === "mouse" || s.pointerType === "pen";
        this.dispatchEvent(s, "pointerover"), r && this.dispatchEvent(s, "mouseover"), s.pointerType === "mouse" && (this.cursor = (o = s.target) == null ? void 0 : o.cursor);
        const n = this.clonePointerEvent(s, "pointerenter");
        for (n.eventPhase = n.AT_TARGET; n.target && n.target !== this.rootTarget.parent;) n.currentTarget = n.target, this.notifyTarget(n), r && this.notifyTarget(n, "mouseenter"), n.target = n.target.parent;
        i.overTargets = s.composedPath(), this.freeEvent(s), this.freeEvent(n)
    }
    mapPointerOut(t) {
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const i = this.trackingData(t.pointerId);
        if (i.overTargets) {
            const s = t.pointerType === "mouse" || t.pointerType === "pen",
                r = this.findMountedTarget(i.overTargets),
                n = this.createPointerEvent(t, "pointerout", r);
            this.dispatchEvent(n), s && this.dispatchEvent(n, "mouseout");
            const o = this.createPointerEvent(t, "pointerleave", r);
            for (o.eventPhase = o.AT_TARGET; o.target && o.target !== this.rootTarget.parent;) o.currentTarget = o.target, this.notifyTarget(o), s && this.notifyTarget(o, "mouseleave"), o.target = o.target.parent;
            i.overTargets = null, this.freeEvent(n), this.freeEvent(o)
        }
        this.cursor = null
    }
    mapPointerUp(t) {
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const i = performance.now(),
            s = this.createPointerEvent(t);
        if (this.dispatchEvent(s, "pointerup"), s.pointerType === "touch") this.dispatchEvent(s, "touchend");
        else if (s.pointerType === "mouse" || s.pointerType === "pen") {
            const a = s.button === 2;
            this.dispatchEvent(s, a ? "rightup" : "mouseup")
        }
        const r = this.trackingData(t.pointerId),
            n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
        let o = n;
        if (n && !s.composedPath().includes(n)) {
            let a = n;
            for (; a && !s.composedPath().includes(a);) {
                if (s.currentTarget = a, this.notifyTarget(s, "pointerupoutside"), s.pointerType === "touch") this.notifyTarget(s, "touchendoutside");
                else if (s.pointerType === "mouse" || s.pointerType === "pen") {
                    const h = s.button === 2;
                    this.notifyTarget(s, h ? "rightupoutside" : "mouseupoutside")
                }
                a = a.parent
            }
            delete r.pressTargetsByButton[t.button], o = a
        }
        if (o) {
            const a = this.clonePointerEvent(s, "click");
            a.target = o, a.path = null, r.clicksByButton[t.button] || (r.clicksByButton[t.button] = {
                clickCount: 0,
                target: a.target,
                timeStamp: i
            });
            const h = r.clicksByButton[t.button];
            if (h.target === a.target && i - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = a.target, h.timeStamp = i, a.detail = h.clickCount, a.pointerType === "mouse") {
                const l = a.button === 2;
                this.dispatchEvent(a, l ? "rightclick" : "click")
            } else a.pointerType === "touch" && this.dispatchEvent(a, "tap");
            this.dispatchEvent(a, "pointertap"), this.freeEvent(a)
        }
        this.freeEvent(s)
    }
    mapPointerUpOutside(t) {
        if (!(t instanceof Ut)) {
            console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
            return
        }
        const i = this.trackingData(t.pointerId),
            s = this.findMountedTarget(i.pressTargetsByButton[t.button]),
            r = this.createPointerEvent(t);
        if (s) {
            let n = s;
            for (; n;) r.currentTarget = n, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch" ? this.notifyTarget(r, "touchendoutside") : (r.pointerType === "mouse" || r.pointerType === "pen") && this.notifyTarget(r, r.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
            delete i.pressTargetsByButton[t.button]
        }
        this.freeEvent(r)
    }
    mapWheel(t) {
        if (!(t instanceof pi)) {
            console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
            return
        }
        const i = this.createWheelEvent(t);
        this.dispatchEvent(i), this.freeEvent(i)
    }
    findMountedTarget(t) {
        if (!t) return null;
        let i = t[0];
        for (let s = 1; s < t.length && t[s].parent === i; s++) i = t[s];
        return i
    }
    createPointerEvent(t, i, s) {
        const r = this.allocateEvent(Ut);
        return this.copyPointerData(t, r), this.copyMouseData(t, r), this.copyData(t, r), r.nativeEvent = t.nativeEvent, r.originalEvent = t, r.target = s ?? this.hitTest(r.global.x, r.global.y) ?? this._hitElements[0], typeof i == "string" && (r.type = i), r
    }
    createWheelEvent(t) {
        const i = this.allocateEvent(pi);
        return this.copyWheelData(t, i), this.copyMouseData(t, i), this.copyData(t, i), i.nativeEvent = t.nativeEvent, i.originalEvent = t, i.target = this.hitTest(i.global.x, i.global.y), i
    }
    clonePointerEvent(t, i) {
        const s = this.allocateEvent(Ut);
        return s.nativeEvent = t.nativeEvent, s.originalEvent = t.originalEvent, this.copyPointerData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.target = t.target, s.path = t.composedPath().slice(), s.type = i ?? s.type, s
    }
    copyWheelData(t, i) {
        i.deltaMode = t.deltaMode, i.deltaX = t.deltaX, i.deltaY = t.deltaY, i.deltaZ = t.deltaZ
    }
    copyPointerData(t, i) {
        t instanceof Ut && i instanceof Ut && (i.pointerId = t.pointerId, i.width = t.width, i.height = t.height, i.isPrimary = t.isPrimary, i.pointerType = t.pointerType, i.pressure = t.pressure, i.tangentialPressure = t.tangentialPressure, i.tiltX = t.tiltX, i.tiltY = t.tiltY, i.twist = t.twist)
    }
    copyMouseData(t, i) {
        t instanceof Bs && i instanceof Bs && (i.altKey = t.altKey, i.button = t.button, i.buttons = t.buttons, i.client.copyFrom(t.client), i.ctrlKey = t.ctrlKey, i.metaKey = t.metaKey, i.movement.copyFrom(t.movement), i.screen.copyFrom(t.screen), i.shiftKey = t.shiftKey, i.global.copyFrom(t.global))
    }
    copyData(t, i) {
        i.isTrusted = t.isTrusted, i.srcElement = t.srcElement, i.timeStamp = performance.now(), i.type = t.type, i.detail = t.detail, i.view = t.view, i.which = t.which, i.layer.copyFrom(t.layer), i.page.copyFrom(t.page)
    }
    trackingData(t) {
        return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
            pressTargetsByButton: {},
            clicksByButton: {},
            overTarget: null
        }), this.mappingState.trackingData[t]
    }
    allocateEvent(t) {
        this.eventPool.has(t) || this.eventPool.set(t, []);
        const i = this.eventPool.get(t).pop() || new t(this);
        return i.eventPhase = i.NONE, i.currentTarget = null, i.path = null, i.target = null, i
    }
    freeEvent(t) {
        if (t.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
        const i = t.constructor;
        this.eventPool.has(i) || this.eventPool.set(i, []), this.eventPool.get(i).push(t)
    }
    notifyListeners(t, i) {
        const s = t.currentTarget._events[i];
        if (s && t.currentTarget.isInteractive())
            if ("fn" in s) s.once && t.currentTarget.removeListener(i, s.fn, void 0, !0), s.fn.call(s.context, t);
            else
                for (let r = 0, n = s.length; r < n && !t.propagationImmediatelyStopped; r++) s[r].once && t.currentTarget.removeListener(i, s[r].fn, void 0, !0), s[r].fn.call(s[r].context, t)
    }
}
const Nf = 1,
    Uf = {
        touchstart: "pointerdown",
        touchend: "pointerup",
        touchendoutside: "pointerupoutside",
        touchmove: "pointermove",
        touchcancel: "pointercancel"
    },
    mn = class {
        constructor(e) {
            this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = e, this.rootBoundary = new Lf(null), _e.init(this), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Ut(null), this.rootWheelEvent = new pi(null), this.cursorStyles = {
                default: "inherit",
                pointer: "pointer"
            }, this.features = new Proxy({
                ...mn.defaultEventFeatures
            }, {
                set: (t, i, s) => (i === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = s), t[i] = s, !0)
            }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this)
        }
        static get defaultEventMode() {
            return this._defaultEventMode
        }
        init(e) {
            const {
                view: t,
                resolution: i
            } = this.renderer;
            this.setTargetElement(t), this.resolution = i, mn._defaultEventMode = e.eventMode ?? "auto", Object.assign(this.features, e.eventFeatures ?? {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove
        }
        resolutionChange(e) {
            this.resolution = e
        }
        destroy() {
            this.setTargetElement(null), this.renderer = null
        }
        setCursor(e) {
            e = e || "default";
            let t = !0;
            if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (t = !1), this.currentCursor === e) return;
            this.currentCursor = e;
            const i = this.cursorStyles[e];
            if (i) switch (typeof i) {
                case "string":
                    t && (this.domElement.style.cursor = i);
                    break;
                case "function":
                    i(e);
                    break;
                case "object":
                    t && Object.assign(this.domElement.style, i);
                    break
            } else t && typeof e == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, e) && (this.domElement.style.cursor = e)
        }
        get pointer() {
            return this.rootPointerEvent
        }
        onPointerDown(e) {
            if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch")) return;
            const t = this.normalizeToPointerData(e);
            this.autoPreventDefault && t[0].isNormalized && (e.cancelable || !("cancelable" in e)) && e.preventDefault();
            for (let i = 0, s = t.length; i < s; i++) {
                const r = t[i],
                    n = this.bootstrapEvent(this.rootPointerEvent, r);
                this.rootBoundary.mapEvent(n)
            }
            this.setCursor(this.rootBoundary.cursor)
        }
        onPointerMove(e) {
            if (!this.features.move || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch")) return;
            _e.pointerMoved();
            const t = this.normalizeToPointerData(e);
            for (let i = 0, s = t.length; i < s; i++) {
                const r = this.bootstrapEvent(this.rootPointerEvent, t[i]);
                this.rootBoundary.mapEvent(r)
            }
            this.setCursor(this.rootBoundary.cursor)
        }
        onPointerUp(e) {
            if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch")) return;
            let t = e.target;
            e.composedPath && e.composedPath().length > 0 && (t = e.composedPath()[0]);
            const i = t !== this.domElement ? "outside" : "",
                s = this.normalizeToPointerData(e);
            for (let r = 0, n = s.length; r < n; r++) {
                const o = this.bootstrapEvent(this.rootPointerEvent, s[r]);
                o.type += i, this.rootBoundary.mapEvent(o)
            }
            this.setCursor(this.rootBoundary.cursor)
        }
        onPointerOverOut(e) {
            if (!this.features.click || (this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.supportsTouchEvents && e.pointerType === "touch")) return;
            const t = this.normalizeToPointerData(e);
            for (let i = 0, s = t.length; i < s; i++) {
                const r = this.bootstrapEvent(this.rootPointerEvent, t[i]);
                this.rootBoundary.mapEvent(r)
            }
            this.setCursor(this.rootBoundary.cursor)
        }
        onWheel(e) {
            if (!this.features.wheel) return;
            const t = this.normalizeWheelEvent(e);
            this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(t)
        }
        setTargetElement(e) {
            this.removeEvents(), this.domElement = e, _e.domElement = e, this.addEvents()
        }
        addEvents() {
            if (this.eventsAdded || !this.domElement) return;
            _e.addTickerListener();
            const e = this.domElement.style;
            e && (globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "none", e.msTouchAction = "none") : this.supportsPointerEvents && (e.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0)), this.domElement.addEventListener("wheel", this.onWheel, {
                passive: !0,
                capture: !0
            }), this.eventsAdded = !0
        }
        removeEvents() {
            if (!this.eventsAdded || !this.domElement) return;
            _e.removeTickerListener();
            const e = this.domElement.style;
            globalThis.navigator.msPointerEnabled ? (e.msContentZooming = "", e.msTouchAction = "") : this.supportsPointerEvents && (e.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1
        }
        mapPositionToPoint(e, t, i) {
            let s;
            this.domElement.parentElement ? s = this.domElement.getBoundingClientRect() : s = {
                x: 0,
                y: 0,
                width: this.domElement.width,
                height: this.domElement.height,
                left: 0,
                top: 0
            };
            const r = 1 / this.resolution;
            e.x = (t - s.left) * (this.domElement.width / s.width) * r, e.y = (i - s.top) * (this.domElement.height / s.height) * r
        }
        normalizeToPointerData(e) {
            const t = [];
            if (this.supportsTouchEvents && e instanceof TouchEvent)
                for (let i = 0, s = e.changedTouches.length; i < s; i++) {
                    const r = e.changedTouches[i];
                    typeof r.button > "u" && (r.button = 0), typeof r.buttons > "u" && (r.buttons = 1), typeof r.isPrimary > "u" && (r.isPrimary = e.touches.length === 1 && e.type === "touchstart"), typeof r.width > "u" && (r.width = r.radiusX || 1), typeof r.height > "u" && (r.height = r.radiusY || 1), typeof r.tiltX > "u" && (r.tiltX = 0), typeof r.tiltY > "u" && (r.tiltY = 0), typeof r.pointerType > "u" && (r.pointerType = "touch"), typeof r.pointerId > "u" && (r.pointerId = r.identifier || 0), typeof r.pressure > "u" && (r.pressure = r.force || .5), typeof r.twist > "u" && (r.twist = 0), typeof r.tangentialPressure > "u" && (r.tangentialPressure = 0), typeof r.layerX > "u" && (r.layerX = r.offsetX = r.clientX), typeof r.layerY > "u" && (r.layerY = r.offsetY = r.clientY), r.isNormalized = !0, r.type = e.type, t.push(r)
                } else if (!globalThis.MouseEvent || e instanceof MouseEvent && (!this.supportsPointerEvents || !(e instanceof globalThis.PointerEvent))) {
                    const i = e;
                    typeof i.isPrimary > "u" && (i.isPrimary = !0), typeof i.width > "u" && (i.width = 1), typeof i.height > "u" && (i.height = 1), typeof i.tiltX > "u" && (i.tiltX = 0), typeof i.tiltY > "u" && (i.tiltY = 0), typeof i.pointerType > "u" && (i.pointerType = "mouse"), typeof i.pointerId > "u" && (i.pointerId = Nf), typeof i.pressure > "u" && (i.pressure = .5), typeof i.twist > "u" && (i.twist = 0), typeof i.tangentialPressure > "u" && (i.tangentialPressure = 0), i.isNormalized = !0, t.push(i)
                } else t.push(e);
            return t
        }
        normalizeWheelEvent(e) {
            const t = this.rootWheelEvent;
            return this.transferMouseData(t, e), t.deltaX = e.deltaX, t.deltaY = e.deltaY, t.deltaZ = e.deltaZ, t.deltaMode = e.deltaMode, this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.nativeEvent = e, t.type = e.type, t
        }
        bootstrapEvent(e, t) {
            return e.originalEvent = null, e.nativeEvent = t, e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist, this.transferMouseData(e, t), this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.isTrusted = t.isTrusted, e.type === "pointerleave" && (e.type = "pointerout"), e.type.startsWith("mouse") && (e.type = e.type.replace("mouse", "pointer")), e.type.startsWith("touch") && (e.type = Uf[e.type] || e.type), e
        }
        transferMouseData(e, t) {
            e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.x = t.clientX, e.client.y = t.clientY, e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.x = t.movementX, e.movement.y = t.movementY, e.page.x = t.pageX, e.page.y = t.pageY, e.relatedTarget = null, e.shiftKey = t.shiftKey
        }
    };
let Gi = mn;
Gi.extension = {
    name: "events",
    type: [D.RendererSystem, D.CanvasRendererSystem]
};
Gi.defaultEventFeatures = {
    move: !0,
    globalMove: !0,
    click: !0,
    wheel: !0
};
U.add(Gi);

function Yo(e) {
    return e === "dynamic" || e === "static"
}
const kf = {
    onclick: null,
    onmousedown: null,
    onmouseenter: null,
    onmouseleave: null,
    onmousemove: null,
    onglobalmousemove: null,
    onmouseout: null,
    onmouseover: null,
    onmouseup: null,
    onmouseupoutside: null,
    onpointercancel: null,
    onpointerdown: null,
    onpointerenter: null,
    onpointerleave: null,
    onpointermove: null,
    onglobalpointermove: null,
    onpointerout: null,
    onpointerover: null,
    onpointertap: null,
    onpointerup: null,
    onpointerupoutside: null,
    onrightclick: null,
    onrightdown: null,
    onrightup: null,
    onrightupoutside: null,
    ontap: null,
    ontouchcancel: null,
    ontouchend: null,
    ontouchendoutside: null,
    ontouchmove: null,
    onglobaltouchmove: null,
    ontouchstart: null,
    onwheel: null,
    _internalInteractive: void 0,
    get interactive() {
        return this._internalInteractive ?? Yo(Gi.defaultEventMode)
    },
    set interactive(e) {
        Y("7.2.0", "Setting interactive is deprecated, use eventMode = 'none'/'passive'/'auto'/'static'/'dynamic' instead."), this._internalInteractive = e, this.eventMode = e ? "static" : "auto"
    },
    _internalEventMode: void 0,
    get eventMode() {
        return this._internalEventMode ?? Gi.defaultEventMode
    },
    set eventMode(e) {
        this._internalInteractive = Yo(e), this._internalEventMode = e
    },
    isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic"
    },
    interactiveChildren: !0,
    hitArea: null,
    addEventListener(e, t, i) {
        const s = typeof i == "boolean" && i || typeof i == "object" && i.capture,
            r = typeof t == "function" ? void 0 : t;
        e = s ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.on(e, t, r)
    },
    removeEventListener(e, t, i) {
        const s = typeof i == "boolean" && i || typeof i == "object" && i.capture,
            r = typeof t == "function" ? void 0 : t;
        e = s ? `${e}capture` : e, t = typeof t == "function" ? t : t.handleEvent, this.off(e, t, r)
    },
    dispatchEvent(e) {
        if (!(e instanceof Xi)) throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
        return e.defaultPrevented = !1, e.path = null, e.target = this, e.manager.dispatchEvent(e), !e.defaultPrevented
    }
};
nt.mixin(kf);
const Gf = {
    accessible: !1,
    accessibleTitle: null,
    accessibleHint: null,
    tabIndex: 0,
    _accessibleActive: !1,
    _accessibleDiv: null,
    accessibleType: "button",
    accessiblePointerEvents: "auto",
    accessibleChildren: !0,
    renderId: -1
};
nt.mixin(Gf);
const Hf = 9,
    ls = 100,
    $f = 0,
    Vf = 0,
    qo = 2,
    Ko = 1,
    Xf = -1e3,
    zf = -1e3,
    Wf = 2;
class Mh {
    constructor(t) {
        this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, (ue.tablet || ue.phone) && this.createTouchHook();
        const i = document.createElement("div");
        i.style.width = `${ls}px`, i.style.height = `${ls}px`, i.style.position = "absolute", i.style.top = `${$f}px`, i.style.left = `${Vf}px`, i.style.zIndex = qo.toString(), this.div = i, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1)
    }
    get isActive() {
        return this._isActive
    }
    get isMobileAccessibility() {
        return this._isMobileAccessibility
    }
    createTouchHook() {
        const t = document.createElement("button");
        t.style.width = `${Ko}px`, t.style.height = `${Ko}px`, t.style.position = "absolute", t.style.top = `${Xf}px`, t.style.left = `${zf}px`, t.style.zIndex = Wf.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
            this._isMobileAccessibility = !0, this.activate(), this.destroyTouchHook()
        }), document.body.appendChild(t), this._hookDiv = t
    }
    destroyTouchHook() {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
    }
    activate() {
        var t;
        this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div))
    }
    deactivate() {
        var t;
        !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div))
    }
    updateAccessibleObjects(t) {
        if (!t.visible || !t.accessibleChildren) return;
        t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
        const i = t.children;
        if (i)
            for (let s = 0; s < i.length; s++) this.updateAccessibleObjects(i[s])
    }
    update() {
        const t = performance.now();
        if (ue.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen)) return;
        this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
        const {
            x: i,
            y: s,
            width: r,
            height: n
        } = this.renderer.view.getBoundingClientRect(), {
            width: o,
            height: a,
            resolution: h
        } = this.renderer, l = r / o * h, c = n / a * h;
        let u = this.div;
        u.style.left = `${i}px`, u.style.top = `${s}px`, u.style.width = `${o}px`, u.style.height = `${a}px`;
        for (let d = 0; d < this.children.length; d++) {
            const f = this.children[d];
            if (f.renderId !== this.renderId) f._accessibleActive = !1, hi(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
            else {
                u = f._accessibleDiv;
                let p = f.hitArea;
                const g = f.worldTransform;
                f.hitArea ? (u.style.left = `${(g.tx+p.x*g.a)*l}px`, u.style.top = `${(g.ty+p.y*g.d)*c}px`, u.style.width = `${p.width*g.a*l}px`, u.style.height = `${p.height*g.d*c}px`) : (p = f.getBounds(), this.capHitArea(p), u.style.left = `${p.x*l}px`, u.style.top = `${p.y*c}px`, u.style.width = `${p.width*l}px`, u.style.height = `${p.height*c}px`, u.title !== f.accessibleTitle && f.accessibleTitle !== null && (u.title = f.accessibleTitle), u.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && u.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== u.title || f.tabIndex !== u.tabIndex) && (u.title = f.accessibleTitle, u.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(u))
            }
        }
        this.renderId++
    }
    updateDebugHTML(t) {
        t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`
    }
    capHitArea(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
        const {
            width: i,
            height: s
        } = this.renderer;
        t.x + t.width > i && (t.width = i - t.x), t.y + t.height > s && (t.height = s - t.y)
    }
    addChild(t) {
        let i = this.pool.pop();
        i || (i = document.createElement("button"), i.style.width = `${ls}px`, i.style.height = `${ls}px`, i.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", i.style.position = "absolute", i.style.zIndex = qo.toString(), i.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? i.setAttribute("aria-live", "off") : i.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? i.setAttribute("aria-relevant", "additions") : i.setAttribute("aria-relevant", "text"), i.addEventListener("click", this._onClick.bind(this)), i.addEventListener("focus", this._onFocus.bind(this)), i.addEventListener("focusout", this._onFocusOut.bind(this))), i.style.pointerEvents = t.accessiblePointerEvents, i.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? i.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (i.title = `displayObject ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && i.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(i), t._accessibleActive = !0, t._accessibleDiv = i, i.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
    }
    _dispatchEvent(t, i) {
        const {
            displayObject: s
        } = t.target, r = this.renderer.events.rootBoundary, n = Object.assign(new Xi(r), {
            target: s
        });
        r.rootTarget = this.renderer.lastObjectRendered, i.forEach(o => r.dispatchEvent(n, o))
    }
    _onClick(t) {
        this._dispatchEvent(t, ["click", "pointertap", "tap"])
    }
    _onFocus(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"])
    }
    _onFocusOut(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"])
    }
    _onKeyDown(t) {
        t.keyCode === Hf && this.activate()
    }
    _onMouseMove(t) {
        t.movementX === 0 && t.movementY === 0 || this.deactivate()
    }
    destroy() {
        this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
    }
}
Mh.extension = {
    name: "accessibility",
    type: [D.RendererPlugin, D.CanvasRendererPlugin]
};
U.add(Mh);
const gn = class {
    constructor(e) {
        this.stage = new Et, e = Object.assign({
            forceCanvas: !1
        }, e), this.renderer = rf(e), gn._plugins.forEach(t => {
            t.init.call(this, e)
        })
    }
    render() {
        this.renderer.render(this.stage)
    }
    get view() {
        return this.renderer.view
    }
    get screen() {
        return this.renderer.screen
    }
    destroy(e, t) {
        const i = gn._plugins.slice(0);
        i.reverse(), i.forEach(s => {
            s.destroy.call(this)
        }), this.stage.destroy(t), this.stage = null, this.renderer.destroy(e), this.renderer = null
    }
};
let Un = gn;
Un._plugins = [];
U.handleByList(D.Application, Un._plugins);
class Dh {
    static init(t) {
        Object.defineProperty(this, "resizeTo", {
            set(i) {
                globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = i, i && (globalThis.addEventListener("resize", this.queueResize), this.resize())
            },
            get() {
                return this._resizeTo
            }
        }), this.queueResize = () => {
            this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()))
        }, this.cancelResize = () => {
            this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null)
        }, this.resize = () => {
            if (!this._resizeTo) return;
            this.cancelResize();
            let i, s;
            if (this._resizeTo === globalThis.window) i = globalThis.innerWidth, s = globalThis.innerHeight;
            else {
                const {
                    clientWidth: r,
                    clientHeight: n
                } = this._resizeTo;
                i = r, s = n
            }
            this.renderer.resize(i, s), this.render()
        }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
    }
    static destroy() {
        globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
    }
}
Dh.extension = D.Application;
U.add(Dh);
const Zo = {
    loader: D.LoadParser,
    resolver: D.ResolveParser,
    cache: D.CacheParser,
    detection: D.DetectionParser
};
U.handle(D.Asset, e => {
    const t = e.ref;
    Object.entries(Zo).filter(([i]) => !!t[i]).forEach(([i, s]) => U.add(Object.assign(t[i], {
        extension: t[i].extension ?? s
    })))
}, e => {
    const t = e.ref;
    Object.keys(Zo).filter(i => !!t[i]).forEach(i => U.remove(t[i]))
});
class jf {
    constructor(t, i = !1) {
        this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = i
    }
    add(t) {
        t.forEach(i => {
            this._assetList.push(i)
        }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next()
    }
    async _next() {
        if (this._assetList.length && this._isActive) {
            this._isLoading = !0;
            const t = [],
                i = Math.min(this._assetList.length, this._maxConcurrent);
            for (let s = 0; s < i; s++) t.push(this._assetList.pop());
            await this._loader.load(t), this._isLoading = !1, this._next()
        }
    }
    get active() {
        return this._isActive
    }
    set active(t) {
        this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next())
    }
}

function zi(e, t) {
    if (Array.isArray(t)) {
        for (const i of t)
            if (e.startsWith(`data:${i}`)) return !0;
        return !1
    }
    return e.startsWith(`data:${t}`)
}

function ze(e, t) {
    const i = e.split("?")[0],
        s = At.extname(i).toLowerCase();
    return Array.isArray(t) ? t.includes(s) : s === t
}
const de = (e, t) => (Array.isArray(e) || (e = [e]), t ? e.map(i => typeof i == "string" ? t(i) : i) : e),
    _n = (e, t) => {
        const i = t.split("?")[1];
        return i && (e += `?${i}`), e
    };

function Bh(e, t, i, s, r) {
    const n = t[i];
    for (let o = 0; o < n.length; o++) {
        const a = n[o];
        i < t.length - 1 ? Bh(e.replace(s[i], a), t, i + 1, s, r) : r.push(e.replace(s[i], a))
    }
}

function Yf(e) {
    const t = /\{(.*?)\}/g,
        i = e.match(t),
        s = [];
    if (i) {
        const r = [];
        i.forEach(n => {
            const o = n.substring(1, n.length - 1).split(",");
            r.push(o)
        }), Bh(e, r, 0, i, s)
    } else s.push(e);
    return s
}
const Fs = e => !Array.isArray(e);
class qf {
    constructor() {
        this._parsers = [], this._cache = new Map, this._cacheMap = new Map
    }
    reset() {
        this._cacheMap.clear(), this._cache.clear()
    }
    has(t) {
        return this._cache.has(t)
    }
    get(t) {
        const i = this._cache.get(t);
        return i || console.warn(`[Assets] Asset id ${t} was not found in the Cache`), i
    }
    set(t, i) {
        const s = de(t);
        let r;
        for (let a = 0; a < this.parsers.length; a++) {
            const h = this.parsers[a];
            if (h.test(i)) {
                r = h.getCacheableAssets(s, i);
                break
            }
        }
        r || (r = {}, s.forEach(a => {
            r[a] = i
        }));
        const n = Object.keys(r),
            o = {
                cacheKeys: n,
                keys: s
            };
        if (s.forEach(a => {
                this._cacheMap.set(a, o)
            }), n.forEach(a => {
                this._cache.has(a) && this._cache.get(a) !== i && console.warn("[Cache] already has key:", a), this._cache.set(a, r[a])
            }), i instanceof O) {
            const a = i;
            s.forEach(h => {
                a.baseTexture !== O.EMPTY.baseTexture && V.addToCache(a.baseTexture, h), O.addToCache(a, h)
            })
        }
    }
    remove(t) {
        if (this._cacheMap.get(t), !this._cacheMap.has(t)) {
            console.warn(`[Assets] Asset id ${t} was not found in the Cache`);
            return
        }
        const i = this._cacheMap.get(t);
        i.cacheKeys.forEach(r => {
            this._cache.delete(r)
        }), i.keys.forEach(r => {
            this._cacheMap.delete(r)
        })
    }
    get parsers() {
        return this._parsers
    }
}
const wi = new qf;
class Kf {
    constructor() {
        this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
            set: (t, i, s) => (this._parsersValidated = !1, t[i] = s, !0)
        }), this.promiseCache = {}
    }
    reset() {
        this._parsersValidated = !1, this.promiseCache = {}
    }
    _getLoadPromiseAndParser(t, i) {
        const s = {
            promise: null,
            parser: null
        };
        return s.promise = (async () => {
            var o, a;
            let r = null,
                n = null;
            if (i.loadParser && (n = this._parserHash[i.loadParser], n || console.warn(`[Assets] specified load parser "${i.loadParser}" not found while loading ${t}`)), !n) {
                for (let h = 0; h < this.parsers.length; h++) {
                    const l = this.parsers[h];
                    if (l.load && ((o = l.test) != null && o.call(l, t, i, this))) {
                        n = l;
                        break
                    }
                }
                if (!n) return console.warn(`[Assets] ${t} could not be loaded as we don't know how to parse it, ensure the correct parser has been added`), null
            }
            r = await n.load(t, i, this), s.parser = n;
            for (let h = 0; h < this.parsers.length; h++) {
                const l = this.parsers[h];
                l.parse && l.parse && await ((a = l.testParse) == null ? void 0 : a.call(l, r, i, this)) && (r = await l.parse(r, i, this) || r, s.parser = l)
            }
            return r
        })(), s
    }
    async load(t, i) {
        this._parsersValidated || this._validateParsers();
        let s = 0;
        const r = {},
            n = Fs(t),
            o = de(t, l => ({
                src: l
            })),
            a = o.length,
            h = o.map(async l => {
                const c = At.toAbsolute(l.src);
                if (!r[l.src]) try {
                    this.promiseCache[c] || (this.promiseCache[c] = this._getLoadPromiseAndParser(c, l)), r[l.src] = await this.promiseCache[c].promise, i && i(++s / a)
                } catch (u) {
                    throw delete this.promiseCache[c], delete r[l.src], new Error(`[Loader.load] Failed to load ${c}.
${u}`)
                }
            });
        return await Promise.all(h), n ? r[o[0].src] : r
    }
    async unload(t) {
        const s = de(t, r => ({
            src: r
        })).map(async r => {
            var a, h;
            const n = At.toAbsolute(r.src),
                o = this.promiseCache[n];
            if (o) {
                const l = await o.promise;
                (h = (a = o.parser) == null ? void 0 : a.unload) == null || h.call(a, l, r, this), delete this.promiseCache[n]
            }
        });
        await Promise.all(s)
    }
    _validateParsers() {
        this._parsersValidated = !0, this._parserHash = this._parsers.filter(t => t.name).reduce((t, i) => (t[i.name] && console.warn(`[Assets] loadParser name conflict "${i.name}"`), {
            ...t,
            [i.name]: i
        }), {})
    }
}
var ne = (e => (e[e.Low = 0] = "Low", e[e.Normal = 1] = "Normal", e[e.High = 2] = "High", e))(ne || {});
const Zf = ".json",
    Qf = "application/json",
    Jf = {
        extension: {
            type: D.LoadParser,
            priority: ne.Low
        },
        name: "loadJson",
        test(e) {
            return zi(e, Qf) || ze(e, Zf)
        },
        async load(e) {
            return await (await R.ADAPTER.fetch(e)).json()
        }
    };
U.add(Jf);
const tp = ".txt",
    ep = "text/plain",
    ip = {
        name: "loadTxt",
        extension: {
            type: D.LoadParser,
            priority: ne.Low
        },
        test(e) {
            return zi(e, ep) || ze(e, tp)
        },
        async load(e) {
            return await (await R.ADAPTER.fetch(e)).text()
        }
    };
U.add(ip);
const sp = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
    rp = [".ttf", ".otf", ".woff", ".woff2"],
    np = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
    op = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;

function ap(e) {
    const t = At.extname(e),
        r = At.basename(e, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(a => a.charAt(0).toUpperCase() + a.slice(1));
    let n = r.length > 0;
    for (const a of r)
        if (!a.match(op)) {
            n = !1;
            break
        } let o = r.join(" ");
    return n || (o = `"${o.replace(/[\\"]/g,"\\$&")}"`), o
}
const hp = {
    extension: {
        type: D.LoadParser,
        priority: ne.Low
    },
    name: "loadWebFont",
    test(e) {
        return zi(e, np) || ze(e, rp)
    },
    async load(e, t) {
        var s, r, n;
        const i = R.ADAPTER.getFontFaceSet();
        if (i) {
            const o = [],
                a = ((s = t.data) == null ? void 0 : s.family) ?? ap(e),
                h = ((n = (r = t.data) == null ? void 0 : r.weights) == null ? void 0 : n.filter(c => sp.includes(c))) ?? ["normal"],
                l = t.data ?? {};
            for (let c = 0; c < h.length; c++) {
                const u = h[c],
                    d = new FontFace(a, `url(${encodeURI(e)})`, {
                        ...l,
                        weight: u
                    });
                await d.load(), i.add(d), o.push(d)
            }
            return o.length === 1 ? o[0] : o
        }
        return console.warn("[loadWebFont] FontFace API is not supported. Skipping loading font"), null
    },
    unload(e) {
        (Array.isArray(e) ? e : [e]).forEach(t => R.ADAPTER.getFontFaceSet().delete(t))
    }
};
U.add(hp);
let Qo = 0,
    Pr;
const lp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
    cp = {
        id: "checkImageBitmap",
        code: `
    async function checkImageBitmap()
    {
        try
        {
            if (typeof createImageBitmap !== 'function') return false;

            const response = await fetch('${lp}');
            const imageBlob =  await response.blob();
            const imageBitmap = await createImageBitmap(imageBlob);

            return imageBitmap.width === 1 && imageBitmap.height === 1;
        }
        catch (e)
        {
            return false;
        }
    }
    checkImageBitmap().then((result) => { self.postMessage(result); });
    `
    },
    up = {
        id: "loadImageBitmap",
        code: `
    async function loadImageBitmap(url)
    {
        const response = await fetch(url);

        if (!response.ok)
        {
            throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                + \`\${response.status} \${response.statusText}\`);
        }

        const imageBlob =  await response.blob();
        const imageBitmap = await createImageBitmap(imageBlob);

        return imageBitmap;
    }
    self.onmessage = async (event) =>
    {
        try
        {
            const imageBitmap = await loadImageBitmap(event.data.data[0]);

            self.postMessage({
                data: imageBitmap,
                uuid: event.data.uuid,
                id: event.data.id,
            }, [imageBitmap]);
        }
        catch(e)
        {
            self.postMessage({
                error: e,
                uuid: event.data.uuid,
                id: event.data.id,
            });
        }
    };`
    };
let Rr;
class dp {
    constructor() {
        this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {}
    }
    isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => {
            const i = URL.createObjectURL(new Blob([cp.code], {
                    type: "application/javascript"
                })),
                s = new Worker(i);
            s.addEventListener("message", r => {
                s.terminate(), URL.revokeObjectURL(i), t(r.data)
            })
        }), this._isImageBitmapSupported)
    }
    loadImageBitmap(t) {
        return this._run("loadImageBitmap", [t])
    }
    async _initWorkers() {
        this._initialized || (this._initialized = !0)
    }
    getWorker() {
        Pr === void 0 && (Pr = navigator.hardwareConcurrency || 4);
        let t = this.workerPool.pop();
        return !t && this._createdWorkers < Pr && (Rr || (Rr = URL.createObjectURL(new Blob([up.code], {
            type: "application/javascript"
        }))), this._createdWorkers++, t = new Worker(Rr), t.addEventListener("message", i => {
            this.complete(i.data), this.returnWorker(i.target), this.next()
        })), t
    }
    returnWorker(t) {
        this.workerPool.push(t)
    }
    complete(t) {
        t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null
    }
    async _run(t, i) {
        await this._initWorkers();
        const s = new Promise((r, n) => {
            this.queue.push({
                id: t,
                arguments: i,
                resolve: r,
                reject: n
            })
        });
        return this.next(), s
    }
    next() {
        if (!this.queue.length) return;
        const t = this.getWorker();
        if (!t) return;
        const i = this.queue.pop(),
            s = i.id;
        this.resolveHash[Qo] = {
            resolve: i.resolve,
            reject: i.reject
        }, t.postMessage({
            data: i.arguments,
            uuid: Qo++,
            id: s
        })
    }
}
const Jo = new dp;

function qs(e, t, i) {
    const s = new O(e);
    return s.baseTexture.on("dispose", () => {
        delete t.promiseCache[i]
    }), s
}
const fp = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
    pp = ["image/jpeg", "image/png", "image/webp", "image/avif"];
async function mp(e) {
    const t = await R.ADAPTER.fetch(e);
    if (!t.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${e}: ${t.status} ${t.statusText}`);
    const i = await t.blob();
    return await createImageBitmap(i)
}
const Ks = {
    name: "loadTextures",
    extension: {
        type: D.LoadParser,
        priority: ne.High
    },
    config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous"
    },
    test(e) {
        return zi(e, pp) || ze(e, fp)
    },
    async load(e, t, i) {
        let s = null;
        globalThis.createImageBitmap && this.config.preferCreateImageBitmap ? this.config.preferWorkers && await Jo.isImageBitmapSupported() ? s = await Jo.loadImageBitmap(e) : s = await mp(e) : s = await new Promise(n => {
            s = new Image, s.crossOrigin = this.config.crossOrigin, s.src = e, s.complete ? n(s) : s.onload = () => {
                n(s)
            }
        });
        const r = new V(s, {
            resolution: Te(e),
            ...t.data
        });
        return r.resource.src = e, qs(r, i, e)
    },
    unload(e) {
        e.destroy(!0)
    }
};
U.add(Ks);
const gp = ".svg",
    _p = "image/svg+xml",
    yp = {
        extension: {
            type: D.LoadParser,
            priority: ne.High
        },
        name: "loadSVG",
        test(e) {
            return zi(e, _p) || ze(e, gp)
        },
        async testParse(e) {
            return ki.test(e)
        },
        async parse(e, t, i) {
            var o;
            const s = new ki(e, (o = t == null ? void 0 : t.data) == null ? void 0 : o.resourceOptions);
            await s.load();
            const r = new V(s, {
                resolution: Te(e),
                ...t == null ? void 0 : t.data
            });
            return r.resource.src = e, qs(r, i, e)
        },
        async load(e, t) {
            return (await R.ADAPTER.fetch(e)).text()
        },
        unload: Ks.unload
    };
U.add(yp);
class vp {
    constructor() {
        this._defaultBundleIdentifierOptions = {
            connector: "-",
            createBundleAssetId: (t, i) => `${t}${this._bundleIdConnector}${i}`,
            extractAssetIdFromBundle: (t, i) => i.replace(`${t}${this._bundleIdConnector}`, "")
        }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {}
    }
    setBundleIdentifier(t) {
        if (this._bundleIdConnector = t.connector ?? this._bundleIdConnector, this._createBundleAssetId = t.createBundleAssetId ?? this._createBundleAssetId, this._extractAssetIdFromBundle = t.extractAssetIdFromBundle ?? this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
    }
    prefer(...t) {
        t.forEach(i => {
            this._preferredOrder.push(i), i.priority || (i.priority = Object.keys(i.params))
        }), this._resolverHash = {}
    }
    set basePath(t) {
        this._basePath = t
    }
    get basePath() {
        return this._basePath
    }
    set rootPath(t) {
        this._rootPath = t
    }
    get rootPath() {
        return this._rootPath
    }
    get parsers() {
        return this._parsers
    }
    reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null
    }
    setDefaultSearchParams(t) {
        if (typeof t == "string") this._defaultSearchParams = t;
        else {
            const i = t;
            this._defaultSearchParams = Object.keys(i).map(s => `${encodeURIComponent(s)}=${encodeURIComponent(i[s])}`).join("&")
        }
    }
    addManifest(t) {
        this._manifest && console.warn("[Resolver] Manifest already exists, this will be overwritten"), this._manifest = t, t.bundles.forEach(i => {
            this.addBundle(i.name, i.assets)
        })
    }
    addBundle(t, i) {
        const s = [];
        Array.isArray(i) ? i.forEach(r => {
            if (typeof r.name == "string") {
                const n = this._createBundleAssetId(t, r.name);
                s.push(n), this.add([r.name, n], r.srcs, r.data)
            } else {
                const n = r.name.map(o => this._createBundleAssetId(t, o));
                n.forEach(o => {
                    s.push(o)
                }), this.add([...r.name, ...n], r.srcs)
            }
        }) : Object.keys(i).forEach(r => {
            s.push(this._createBundleAssetId(t, r)), this.add([r, this._createBundleAssetId(t, r)], i[r])
        }), this._bundles[t] = s
    }
    add(t, i, s) {
        const r = de(t);
        r.forEach(o => {
            this.hasKey(o) && console.warn(`[Resolver] already has key: ${o} overwriting`)
        }), Array.isArray(i) || (typeof i == "string" ? i = Yf(i) : i = [i]);
        const n = i.map(o => {
            let a = o;
            if (typeof o == "string") {
                let h = !1;
                for (let l = 0; l < this._parsers.length; l++) {
                    const c = this._parsers[l];
                    if (c.test(o)) {
                        a = c.parse(o), h = !0;
                        break
                    }
                }
                h || (a = {
                    src: o
                })
            }
            return a.format || (a.format = a.src.split(".").pop()), a.alias || (a.alias = r), (this._basePath || this._rootPath) && (a.src = At.toAbsolute(a.src, this._basePath, this._rootPath)), a.src = this._appendDefaultSearchParams(a.src), a.data = a.data ?? s, a
        });
        r.forEach(o => {
            this._assetMap[o] = n
        })
    }
    resolveBundle(t) {
        const i = Fs(t);
        t = de(t);
        const s = {};
        return t.forEach(r => {
            const n = this._bundles[r];
            if (n) {
                const o = this.resolve(n),
                    a = {};
                for (const h in o) {
                    const l = o[h];
                    a[this._extractAssetIdFromBundle(r, h)] = l
                }
                s[r] = a
            }
        }), i ? s[t[0]] : s
    }
    resolveUrl(t) {
        const i = this.resolve(t);
        if (typeof t != "string") {
            const s = {};
            for (const r in i) s[r] = i[r].src;
            return s
        }
        return i.src
    }
    resolve(t) {
        const i = Fs(t);
        t = de(t);
        const s = {};
        return t.forEach(r => {
            if (!this._resolverHash[r])
                if (this._assetMap[r]) {
                    let n = this._assetMap[r];
                    const o = this._getPreferredOrder(n),
                        a = n[0];
                    o == null || o.priority.forEach(h => {
                        o.params[h].forEach(l => {
                            const c = n.filter(u => u[h] ? u[h] === l : !1);
                            c.length && (n = c)
                        })
                    }), this._resolverHash[r] = n[0] ?? a
                } else {
                    let n = r;
                    (this._basePath || this._rootPath) && (n = At.toAbsolute(n, this._basePath, this._rootPath)), n = this._appendDefaultSearchParams(n), this._resolverHash[r] = {
                        src: n
                    }
                } s[r] = this._resolverHash[r]
        }), i ? s[t[0]] : s
    }
    hasKey(t) {
        return !!this._assetMap[t]
    }
    hasBundle(t) {
        return !!this._bundles[t]
    }
    _getPreferredOrder(t) {
        for (let i = 0; i < t.length; i++) {
            const s = t[0],
                r = this._preferredOrder.find(n => n.params.format.includes(s.format));
            if (r) return r
        }
        return this._preferredOrder[0]
    }
    _appendDefaultSearchParams(t) {
        if (!this._defaultSearchParams) return t;
        const i = /\?/.test(t) ? "&" : "?";
        return `${t}${i}${this._defaultSearchParams}`
    }
}
class xp {
    constructor() {
        this._detections = [], this._initialized = !1, this.resolver = new vp, this.loader = new Kf, this.cache = wi, this._backgroundLoader = new jf(this.loader), this._backgroundLoader.active = !0, this.reset()
    }
    async init(t = {}) {
        var n, o, a;
        if (this._initialized) {
            console.warn("[Assets]AssetManager already initialized, did you load before calling this Asset.init()?");
            return
        }
        if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
            let h = t.manifest;
            typeof h == "string" && (h = await this.load(h)), this.resolver.addManifest(h)
        }
        const i = ((n = t.texturePreference) == null ? void 0 : n.resolution) ?? 1,
            s = typeof i == "number" ? [i] : i;
        let r = [];
        if ((o = t.texturePreference) != null && o.format) {
            const h = (a = t.texturePreference) == null ? void 0 : a.format;
            r = typeof h == "string" ? [h] : h;
            for (const l of this._detections) await l.test() || (r = await l.remove(r))
        } else
            for (const h of this._detections) await h.test() && (r = await h.add(r));
        this.resolver.prefer({
            params: {
                format: r,
                resolution: s
            }
        }), t.preferences && this.setPreferences(t.preferences)
    }
    add(t, i, s) {
        this.resolver.add(t, i, s)
    }
    async load(t, i) {
        this._initialized || await this.init();
        const s = Fs(t),
            r = de(t).map(a => typeof a != "string" ? (this.resolver.add(a.src, a), a.src) : (this.resolver.hasKey(a) || this.resolver.add(a, a), a)),
            n = this.resolver.resolve(r),
            o = await this._mapLoadToResolve(n, i);
        return s ? o[r[0]] : o
    }
    addBundle(t, i) {
        this.resolver.addBundle(t, i)
    }
    async loadBundle(t, i) {
        this._initialized || await this.init();
        let s = !1;
        typeof t == "string" && (s = !0, t = [t]);
        const r = this.resolver.resolveBundle(t),
            n = {},
            o = Object.keys(r);
        let a = 0,
            h = 0;
        const l = () => {
                i == null || i(++a / h)
            },
            c = o.map(u => {
                const d = r[u];
                return h += Object.keys(d).length, this._mapLoadToResolve(d, l).then(f => {
                    n[u] = f
                })
            });
        return await Promise.all(c), s ? n[t[0]] : n
    }
    async backgroundLoad(t) {
        this._initialized || await this.init(), typeof t == "string" && (t = [t]);
        const i = this.resolver.resolve(t);
        this._backgroundLoader.add(Object.values(i))
    }
    async backgroundLoadBundle(t) {
        this._initialized || await this.init(), typeof t == "string" && (t = [t]);
        const i = this.resolver.resolveBundle(t);
        Object.values(i).forEach(s => {
            this._backgroundLoader.add(Object.values(s))
        })
    }
    reset() {
        this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1
    }
    get(t) {
        if (typeof t == "string") return wi.get(t);
        const i = {};
        for (let s = 0; s < t.length; s++) i[s] = wi.get(t[s]);
        return i
    }
    async _mapLoadToResolve(t, i) {
        const s = Object.values(t),
            r = Object.keys(t);
        this._backgroundLoader.active = !1;
        const n = await this.loader.load(s, i);
        this._backgroundLoader.active = !0;
        const o = {};
        return s.forEach((a, h) => {
            const l = n[a.src],
                c = [a.src];
            a.alias && c.push(...a.alias), o[r[h]] = l, wi.set(c, l)
        }), o
    }
    async unload(t) {
        this._initialized || await this.init();
        const i = de(t).map(r => typeof r != "string" ? r.src : r),
            s = this.resolver.resolve(i);
        await this._unloadFromResolved(s)
    }
    async unloadBundle(t) {
        this._initialized || await this.init(), t = de(t);
        const i = this.resolver.resolveBundle(t),
            s = Object.keys(i).map(r => this._unloadFromResolved(i[r]));
        await Promise.all(s)
    }
    async _unloadFromResolved(t) {
        const i = Object.values(t);
        i.forEach(s => {
            wi.remove(s.src)
        }), await this.loader.unload(i)
    }
    get detections() {
        return this._detections
    }
    get preferWorkers() {
        return Ks.config.preferWorkers
    }
    set preferWorkers(t) {
        Y("7.2.0", "Assets.prefersWorkers is deprecated, use Assets.setPreferences({ preferWorkers: true }) instead."), this.setPreferences({
            preferWorkers: t
        })
    }
    setPreferences(t) {
        this.loader.parsers.forEach(i => {
            i.config && Object.keys(i.config).filter(s => s in t).forEach(s => {
                i.config[s] = t[s]
            })
        })
    }
}
const cs = new xp;
U.handleByList(D.LoadParser, cs.loader.parsers).handleByList(D.ResolveParser, cs.resolver.parsers).handleByList(D.CacheParser, cs.cache.parsers).handleByList(D.DetectionParser, cs.detections);
const bp = {
    extension: D.CacheParser,
    test: e => Array.isArray(e) && e.every(t => t instanceof O),
    getCacheableAssets: (e, t) => {
        const i = {};
        return e.forEach(s => {
            t.forEach((r, n) => {
                i[s + (n === 0 ? "" : n + 1)] = r
            })
        }), i
    }
};
U.add(bp);
const Ep = {
    extension: {
        type: D.DetectionParser,
        priority: 1
    },
    test: async () => {
        if (!globalThis.createImageBitmap) return !1;
        const e = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=",
            t = await R.ADAPTER.fetch(e).then(i => i.blob());
        return createImageBitmap(t).then(() => !0, () => !1)
    },
    add: async e => [...e, "avif"],
    remove: async e => e.filter(t => t !== "avif")
};
U.add(Ep);
const Tp = {
    extension: {
        type: D.DetectionParser,
        priority: 0
    },
    test: async () => {
        if (!globalThis.createImageBitmap) return !1;
        const e = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
            t = await R.ADAPTER.fetch(e).then(i => i.blob());
        return createImageBitmap(t).then(() => !0, () => !1)
    },
    add: async e => [...e, "webp"],
    remove: async e => e.filter(t => t !== "webp")
};
U.add(Tp);
const ta = ["png", "jpg", "jpeg"],
    wp = {
        extension: {
            type: D.DetectionParser,
            priority: -1
        },
        test: () => Promise.resolve(!0),
        add: async e => [...e, ...ta],
        remove: async e => e.filter(t => !ta.includes(t))
    };
U.add(wp);
const Sp = {
    extension: D.ResolveParser,
    test: Ks.test,
    parse: e => {
        var t;
        return {
            resolution: parseFloat(((t = R.RETINA_PREFIX.exec(e)) == null ? void 0 : t[1]) ?? "1"),
            format: e.split(".").pop(),
            src: e
        }
    }
};
U.add(Sp);
var Dt = (e => (e[e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", e[e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", e[e.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", e[e.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", e[e.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", e[e.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", e[e.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", e[e.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", e[e.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", e[e.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", e[e.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", e[e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", e[e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", e[e.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", e[e.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", e[e.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", e[e.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", e[e.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", e[e.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", e))(Dt || {});
const Os = {
    33776: .5,
    33777: .5,
    33778: 1,
    33779: 1,
    35916: .5,
    35917: .5,
    35918: 1,
    35919: 1,
    37488: .5,
    37489: .5,
    37490: 1,
    37491: 1,
    37492: .5,
    37496: 1,
    37493: .5,
    37497: 1,
    37494: .5,
    37495: .5,
    35840: .5,
    35842: .5,
    35841: .25,
    35843: .25,
    36196: .5,
    35986: .5,
    35986: 1,
    34798: 1,
    37808: 1
};
let he, Je;

function ea() {
    Je = {
        s3tc: he.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: he.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: he.getExtension("WEBGL_compressed_texture_etc"),
        etc1: he.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc: he.getExtension("WEBGL_compressed_texture_pvrtc") || he.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: he.getExtension("WEBGL_compressed_texture_atc"),
        astc: he.getExtension("WEBGL_compressed_texture_astc")
    }
}
const Ap = {
    extension: {
        type: D.DetectionParser,
        priority: 2
    },
    test: async () => {
        const t = R.ADAPTER.createCanvas().getContext("webgl");
        return t ? (he = t, !0) : (console.warn("WebGL not available for compressed textures."), !1)
    },
    add: async e => {
        Je || ea();
        const t = [];
        for (const i in Je) Je[i] && t.push(i);
        return [...t, ...e]
    },
    remove: async e => (Je || ea(), e.filter(t => !(t in Je)))
};
U.add(Ap);
class Cp extends Vi {
    constructor(t, i = {
        width: 1,
        height: 1,
        autoLoad: !0
    }) {
        let s, r;
        typeof t == "string" ? (s = t, r = new Uint8Array) : (s = null, r = t), super(r, i), this.origin = s, this.buffer = r ? new sn(r) : null, this._load = null, this.loaded = !1, this.origin !== null && i.autoLoad !== !1 && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = !0, this.onBlobLoaded(this.buffer.rawBinaryData))
    }
    onBlobLoaded(t) {}
    load() {
        return this._load ? this._load : (this._load = fetch(this.origin).then(t => t.blob()).then(t => t.arrayBuffer()).then(t => (this.data = new Uint32Array(t), this.buffer = new sn(t), this.loaded = !0, this.onBlobLoaded(t), this.update(), this)), this._load)
    }
}
class Ue extends Cp {
    constructor(t, i) {
        super(t, i), this.format = i.format, this.levels = i.levels || 1, this._width = i.width, this._height = i.height, this._extension = Ue._formatToExtension(this.format), (i.levelBuffers || this.buffer) && (this._levelBuffers = i.levelBuffers || Ue._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height))
    }
    upload(t, i, s) {
        const r = t.gl;
        if (!t.context.extensions[this._extension]) throw new Error(`${this._extension} textures are not supported on the current machine`);
        if (!this._levelBuffers) return !1;
        for (let o = 0, a = this.levels; o < a; o++) {
            const {
                levelID: h,
                levelWidth: l,
                levelHeight: c,
                levelBuffer: u
            } = this._levelBuffers[o];
            r.compressedTexImage2D(r.TEXTURE_2D, h, this.format, l, c, 0, u)
        }
        return !0
    }
    onBlobLoaded() {
        this._levelBuffers = Ue._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
    }
    static _formatToExtension(t) {
        if (t >= 33776 && t <= 33779) return "s3tc";
        if (t >= 37488 && t <= 37497) return "etc";
        if (t >= 35840 && t <= 35843) return "pvrtc";
        if (t >= 36196) return "etc1";
        if (t >= 35986 && t <= 34798) return "atc";
        throw new Error("Invalid (compressed) texture format given!")
    }
    static _createLevelBuffers(t, i, s, r, n, o, a) {
        const h = new Array(s);
        let l = t.byteOffset,
            c = o,
            u = a,
            d = c + r - 1 & ~(r - 1),
            f = u + n - 1 & ~(n - 1),
            p = d * f * Os[i];
        for (let g = 0; g < s; g++) h[g] = {
            levelID: g,
            levelWidth: s > 1 ? c : d,
            levelHeight: s > 1 ? u : f,
            levelBuffer: new Uint8Array(t.buffer, l, p)
        }, l += p, c = c >> 1 || 1, u = u >> 1 || 1, d = c + r - 1 & ~(r - 1), f = u + n - 1 & ~(n - 1), p = d * f * Os[i];
        return h
    }
}
const Mr = 4,
    us = 124,
    Ip = 32,
    ia = 20,
    Pp = 542327876,
    ds = {
        SIZE: 1,
        FLAGS: 2,
        HEIGHT: 3,
        WIDTH: 4,
        MIPMAP_COUNT: 7,
        PIXEL_FORMAT: 19
    },
    Rp = {
        SIZE: 0,
        FLAGS: 1,
        FOURCC: 2,
        RGB_BITCOUNT: 3,
        R_BIT_MASK: 4,
        G_BIT_MASK: 5,
        B_BIT_MASK: 6,
        A_BIT_MASK: 7
    },
    fs = {
        DXGI_FORMAT: 0,
        RESOURCE_DIMENSION: 1,
        MISC_FLAG: 2,
        ARRAY_SIZE: 3,
        MISC_FLAGS2: 4
    },
    Mp = 1,
    Dp = 2,
    Bp = 4,
    Fp = 64,
    Op = 512,
    Lp = 131072,
    Np = 827611204,
    Up = 861165636,
    kp = 894720068,
    Gp = 808540228,
    Hp = 4,
    $p = {
        [Np]: Dt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        [Up]: Dt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        [kp]: Dt.COMPRESSED_RGBA_S3TC_DXT5_EXT
    },
    Vp = {
        70: Dt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        71: Dt.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        73: Dt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        74: Dt.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        76: Dt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        77: Dt.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        72: Dt.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        75: Dt.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        78: Dt.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
    };

function Xp(e) {
    const t = new Uint32Array(e);
    if (t[0] !== Pp) throw new Error("Invalid DDS file magic word");
    const s = new Uint32Array(e, 0, us / Uint32Array.BYTES_PER_ELEMENT),
        r = s[ds.HEIGHT],
        n = s[ds.WIDTH],
        o = s[ds.MIPMAP_COUNT],
        a = new Uint32Array(e, ds.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, Ip / Uint32Array.BYTES_PER_ELEMENT),
        h = a[Mp];
    if (h & Bp) {
        const l = a[Rp.FOURCC];
        if (l !== Gp) {
            const _ = $p[l],
                x = Mr + us,
                T = new Uint8Array(e, x);
            return [new Ue(T, {
                format: _,
                width: n,
                height: r,
                levels: o
            })]
        }
        const c = Mr + us,
            u = new Uint32Array(t.buffer, c, ia / Uint32Array.BYTES_PER_ELEMENT),
            d = u[fs.DXGI_FORMAT],
            f = u[fs.RESOURCE_DIMENSION],
            p = u[fs.MISC_FLAG],
            g = u[fs.ARRAY_SIZE],
            m = Vp[d];
        if (m === void 0) throw new Error(`DDSParser cannot parse texture data with DXGI format ${d}`);
        if (p === Hp) throw new Error("DDSParser does not support cubemap textures");
        if (f === 6) throw new Error("DDSParser does not supported 3D texture data");
        const y = new Array,
            v = Mr + us + ia;
        if (g === 1) y.push(new Uint8Array(e, v));
        else {
            const _ = Os[m];
            let x = 0,
                T = n,
                P = r;
            for (let E = 0; E < o; E++) {
                const B = Math.max(1, T + 3 & -4),
                    N = Math.max(1, P + 3 & -4),
                    I = B * N * _;
                x += I, T = T >>> 1, P = P >>> 1
            }
            let S = v;
            for (let E = 0; E < g; E++) y.push(new Uint8Array(e, S, x)), S += x
        }
        return y.map(_ => new Ue(_, {
            format: m,
            width: n,
            height: r,
            levels: o
        }))
    }
    throw h & Fp ? new Error("DDSParser does not support uncompressed texture data.") : h & Op ? new Error("DDSParser does not supported YUV uncompressed texture data.") : h & Lp ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : h & Dp ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!")
}
const sa = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
    zp = 67305985,
    Lt = {
        FILE_IDENTIFIER: 0,
        ENDIANNESS: 12,
        GL_TYPE: 16,
        GL_TYPE_SIZE: 20,
        GL_FORMAT: 24,
        GL_INTERNAL_FORMAT: 28,
        GL_BASE_INTERNAL_FORMAT: 32,
        PIXEL_WIDTH: 36,
        PIXEL_HEIGHT: 40,
        PIXEL_DEPTH: 44,
        NUMBER_OF_ARRAY_ELEMENTS: 48,
        NUMBER_OF_FACES: 52,
        NUMBER_OF_MIPMAP_LEVELS: 56,
        BYTES_OF_KEY_VALUE_DATA: 60
    },
    yn = 64,
    ra = {
        [k.UNSIGNED_BYTE]: 1,
        [k.UNSIGNED_SHORT]: 2,
        [k.INT]: 4,
        [k.UNSIGNED_INT]: 4,
        [k.FLOAT]: 4,
        [k.HALF_FLOAT]: 8
    },
    Wp = {
        [C.RGBA]: 4,
        [C.RGB]: 3,
        [C.RG]: 2,
        [C.RED]: 1,
        [C.LUMINANCE]: 1,
        [C.LUMINANCE_ALPHA]: 2,
        [C.ALPHA]: 1
    },
    jp = {
        [k.UNSIGNED_SHORT_4_4_4_4]: 2,
        [k.UNSIGNED_SHORT_5_5_5_1]: 2,
        [k.UNSIGNED_SHORT_5_6_5]: 2
    };

function Yp(e, t, i = !1) {
    const s = new DataView(t);
    if (!qp(e, s)) return null;
    const r = s.getUint32(Lt.ENDIANNESS, !0) === zp,
        n = s.getUint32(Lt.GL_TYPE, r),
        o = s.getUint32(Lt.GL_FORMAT, r),
        a = s.getUint32(Lt.GL_INTERNAL_FORMAT, r),
        h = s.getUint32(Lt.PIXEL_WIDTH, r),
        l = s.getUint32(Lt.PIXEL_HEIGHT, r) || 1,
        c = s.getUint32(Lt.PIXEL_DEPTH, r) || 1,
        u = s.getUint32(Lt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1,
        d = s.getUint32(Lt.NUMBER_OF_FACES, r),
        f = s.getUint32(Lt.NUMBER_OF_MIPMAP_LEVELS, r),
        p = s.getUint32(Lt.BYTES_OF_KEY_VALUE_DATA, r);
    if (l === 0 || c !== 1) throw new Error("Only 2D textures are supported");
    if (d !== 1) throw new Error("CubeTextures are not supported by KTXLoader yet!");
    if (u !== 1) throw new Error("WebGL does not support array textures");
    const g = 4,
        m = 4,
        y = h + 3 & -4,
        v = l + 3 & -4,
        _ = new Array(u);
    let x = h * l;
    n === 0 && (x = y * v);
    let T;
    if (n !== 0 ? ra[n] ? T = ra[n] * Wp[o] : T = jp[n] : T = Os[a], T === void 0) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
    const P = i ? Zp(s, p, r) : null;
    let E = x * T,
        B = h,
        N = l,
        I = y,
        M = v,
        w = yn + p;
    for (let b = 0; b < f; b++) {
        const $ = s.getUint32(w, r);
        let X = w + 4;
        for (let F = 0; F < u; F++) {
            let Z = _[F];
            Z || (Z = _[F] = new Array(f)), Z[b] = {
                levelID: b,
                levelWidth: f > 1 || n !== 0 ? B : I,
                levelHeight: f > 1 || n !== 0 ? N : M,
                levelBuffer: new Uint8Array(t, X, E)
            }, X += E
        }
        w += $ + 4, w = w % 4 !== 0 ? w + 4 - w % 4 : w, B = B >> 1 || 1, N = N >> 1 || 1, I = B + g - 1 & ~(g - 1), M = N + m - 1 & ~(m - 1), E = I * M * T
    }
    return n !== 0 ? {
        uncompressed: _.map(b => {
            let $ = b[0].levelBuffer,
                X = !1;
            return n === k.FLOAT ? $ = new Float32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4) : n === k.UNSIGNED_INT ? (X = !0, $ = new Uint32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)) : n === k.INT && (X = !0, $ = new Int32Array(b[0].levelBuffer.buffer, b[0].levelBuffer.byteOffset, b[0].levelBuffer.byteLength / 4)), {
                resource: new Vi($, {
                    width: b[0].levelWidth,
                    height: b[0].levelHeight
                }),
                type: n,
                format: X ? Kp(o) : o
            }
        }),
        kvData: P
    } : {
        compressed: _.map(b => new Ue(null, {
            format: a,
            width: h,
            height: l,
            levels: f,
            levelBuffers: b
        })),
        kvData: P
    }
}

function qp(e, t) {
    for (let i = 0; i < sa.length; i++)
        if (t.getUint8(i) !== sa[i]) return console.error(`${e} is not a valid *.ktx file!`), !1;
    return !0
}

function Kp(e) {
    switch (e) {
        case C.RGBA:
            return C.RGBA_INTEGER;
        case C.RGB:
            return C.RGB_INTEGER;
        case C.RG:
            return C.RG_INTEGER;
        case C.RED:
            return C.RED_INTEGER;
        default:
            return e
    }
}

function Zp(e, t, i) {
    const s = new Map;
    let r = 0;
    for (; r < t;) {
        const n = e.getUint32(yn + r, i),
            o = yn + r + 4,
            a = 3 - (n + 3) % 4;
        if (n === 0 || n > t - r) {
            console.error("KTXLoader: keyAndValueByteSize out of bounds");
            break
        }
        let h = 0;
        for (; h < n && e.getUint8(o + h) !== 0; h++);
        if (h === -1) {
            console.error("KTXLoader: Failed to find null byte terminating kvData key");
            break
        }
        const l = new TextDecoder().decode(new Uint8Array(e.buffer, o, h)),
            c = new DataView(e.buffer, o + h + 1, n - h - 1);
        s.set(l, c), r += 4 + n + a
    }
    return s
}
const Qp = {
    extension: {
        type: D.LoadParser,
        priority: ne.High
    },
    name: "loadDDS",
    test(e) {
        return ze(e, ".dds")
    },
    async load(e, t, i) {
        const r = await (await R.ADAPTER.fetch(e)).arrayBuffer(),
            o = Xp(r).map(a => {
                const h = new V(a, {
                    mipmap: re.OFF,
                    alphaMode: jt.NO_PREMULTIPLIED_ALPHA,
                    resolution: Te(e),
                    ...t.data
                });
                return qs(h, i, e)
            });
        return o.length === 1 ? o[0] : o
    },
    unload(e) {
        Array.isArray(e) ? e.forEach(t => t.destroy(!0)) : e.destroy(!0)
    }
};
U.add(Qp);
const Jp = {
    extension: {
        type: D.LoadParser,
        priority: ne.High
    },
    name: "loadKTX",
    test(e) {
        return ze(e, ".ktx")
    },
    async load(e, t, i) {
        const r = await (await R.ADAPTER.fetch(e)).arrayBuffer(),
            {
                compressed: n,
                uncompressed: o,
                kvData: a
            } = Yp(e, r),
            h = n ?? o,
            l = {
                mipmap: re.OFF,
                alphaMode: jt.NO_PREMULTIPLIED_ALPHA,
                resolution: Te(e),
                ...t.data
            },
            c = h.map(u => {
                h === o && Object.assign(l, {
                    type: u.type,
                    format: u.format
                });
                const d = new V(u, l);
                return d.ktxKeyValueData = a, qs(d, i, e)
            });
        return c.length === 1 ? c[0] : c
    },
    unload(e) {
        Array.isArray(e) ? e.forEach(t => t.destroy(!0)) : e.destroy(!0)
    }
};
U.add(Jp);
const tm = {
    extension: D.ResolveParser,
    test: e => {
        const i = e.split("?")[0].split(".").pop();
        return ["basis", "ktx", "dds"].includes(i)
    },
    parse: e => {
        var s, r;
        if (e.split("?")[0].split(".").pop() === "ktx") {
            const n = [".s3tc.ktx", ".s3tc_sRGB.ktx", ".etc.ktx", ".etc1.ktx", ".pvrt.ktx", ".atc.ktx", ".astc.ktx"];
            if (n.some(o => e.endsWith(o))) return {
                resolution: parseFloat(((s = R.RETINA_PREFIX.exec(e)) == null ? void 0 : s[1]) ?? "1"),
                format: n.find(o => e.endsWith(o)),
                src: e
            }
        }
        return {
            resolution: parseFloat(((r = R.RETINA_PREFIX.exec(e)) == null ? void 0 : r[1]) ?? "1"),
            format: e.split(".").pop(),
            src: e
        }
    }
};
U.add(tm);
const em = new z,
    im = 4,
    Ci = class {
        constructor(e) {
            this.renderer = e
        }
        async image(e, t, i) {
            const s = new Image;
            return s.src = await this.base64(e, t, i), s
        }
        async base64(e, t, i) {
            const s = this.canvas(e);
            if (s.toBlob !== void 0) return new Promise((r, n) => {
                s.toBlob(o => {
                    if (!o) {
                        n(new Error("ICanvas.toBlob failed!"));
                        return
                    }
                    const a = new FileReader;
                    a.onload = () => r(a.result), a.onerror = n, a.readAsDataURL(o)
                }, t, i)
            });
            if (s.toDataURL !== void 0) return s.toDataURL(t, i);
            if (s.convertToBlob !== void 0) {
                const r = await s.convertToBlob({
                    type: t,
                    quality: i
                });
                return new Promise((n, o) => {
                    const a = new FileReader;
                    a.onload = () => n(a.result), a.onerror = o, a.readAsDataURL(r)
                })
            }
            throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")
        }
        canvas(e, t) {
            const {
                pixels: i,
                width: s,
                height: r,
                flipY: n
            } = this._rawPixels(e, t);
            n && Ci._flipY(i, s, r), Ci._unpremultiplyAlpha(i);
            const o = new ju(s, r, 1),
                a = new ImageData(new Uint8ClampedArray(i.buffer), s, r);
            return o.context.putImageData(a, 0, 0), o.canvas
        }
        pixels(e, t) {
            const {
                pixels: i,
                width: s,
                height: r,
                flipY: n
            } = this._rawPixels(e, t);
            return n && Ci._flipY(i, s, r), Ci._unpremultiplyAlpha(i), i
        }
        _rawPixels(e, t) {
            const i = this.renderer;
            if (!i) throw new Error("The Extract has already been destroyed");
            let s, r = !1,
                n, o = !1;
            if (e && (e instanceof Ve ? n = e : (n = i.generateTexture(e, {
                    resolution: i.resolution,
                    multisample: i.multisample
                }), o = !0)), n) {
                if (s = n.baseTexture.resolution, t = t ?? n.frame, r = !1, !o) {
                    i.renderTexture.bind(n);
                    const u = n.framebuffer.glFramebuffers[i.CONTEXT_UID];
                    u.blitFramebuffer && i.framebuffer.bind(u.blitFramebuffer)
                }
            } else s = i.resolution, t || (t = em, t.width = i.width / s, t.height = i.height / s), r = !0, i.renderTexture.bind();
            const a = Math.round(t.width * s),
                h = Math.round(t.height * s),
                l = new Uint8Array(im * a * h),
                c = i.gl;
            return c.readPixels(Math.round(t.x * s), Math.round(t.y * s), a, h, c.RGBA, c.UNSIGNED_BYTE, l), o && (n == null || n.destroy(!0)), {
                pixels: l,
                width: a,
                height: h,
                flipY: r
            }
        }
        destroy() {
            this.renderer = null
        }
        static _flipY(e, t, i) {
            const s = t << 2,
                r = i >> 1,
                n = new Uint8Array(s);
            for (let o = 0; o < r; o++) {
                const a = o * s,
                    h = (i - o - 1) * s;
                n.set(e.subarray(a, a + s)), e.copyWithin(a, h, h + s), e.set(n, h)
            }
        }
        static _unpremultiplyAlpha(e) {
            e instanceof Uint8ClampedArray && (e = new Uint8Array(e.buffer));
            const t = e.length;
            for (let i = 0; i < t; i += 4) {
                const s = e[i + 3];
                if (s !== 0) {
                    const r = 255.001 / s;
                    e[i] = e[i] * r + .5, e[i + 1] = e[i + 1] * r + .5, e[i + 2] = e[i + 2] * r + .5
                }
            }
        }
    };
let Fh = Ci;
Fh.extension = {
    name: "extract",
    type: D.RendererSystem
};
U.add(Fh);
const Ls = {
    build(e) {
        const t = e.points;
        let i, s, r, n, o, a;
        if (e.type === xt.CIRC) {
            const p = e.shape;
            i = p.x, s = p.y, o = a = p.radius, r = n = 0
        } else if (e.type === xt.ELIP) {
            const p = e.shape;
            i = p.x, s = p.y, o = p.width, a = p.height, r = n = 0
        } else {
            const p = e.shape,
                g = p.width / 2,
                m = p.height / 2;
            i = p.x + g, s = p.y + m, o = a = Math.max(0, Math.min(p.radius, Math.min(g, m))), r = g - o, n = m - a
        }
        if (!(o >= 0 && a >= 0 && r >= 0 && n >= 0)) {
            t.length = 0;
            return
        }
        const h = Math.ceil(2.3 * Math.sqrt(o + a)),
            l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
        if (t.length = l, l === 0) return;
        if (h === 0) {
            t.length = 8, t[0] = t[6] = i + r, t[1] = t[3] = s + n, t[2] = t[4] = i - r, t[5] = t[7] = s - n;
            return
        }
        let c = 0,
            u = h * 4 + (r ? 2 : 0) + 2,
            d = u,
            f = l;
        {
            const p = r + o,
                g = n,
                m = i + p,
                y = i - p,
                v = s + g;
            if (t[c++] = m, t[c++] = v, t[--u] = v, t[--u] = y, n) {
                const _ = s - g;
                t[d++] = y, t[d++] = _, t[--f] = _, t[--f] = m
            }
        }
        for (let p = 1; p < h; p++) {
            const g = Math.PI / 2 * (p / h),
                m = r + Math.cos(g) * o,
                y = n + Math.sin(g) * a,
                v = i + m,
                _ = i - m,
                x = s + y,
                T = s - y;
            t[c++] = v, t[c++] = x, t[--u] = x, t[--u] = _, t[d++] = _, t[d++] = T, t[--f] = T, t[--f] = v
        } {
            const p = r,
                g = n + a,
                m = i + p,
                y = i - p,
                v = s + g,
                _ = s - g;
            t[c++] = m, t[c++] = v, t[--f] = _, t[--f] = m, r && (t[c++] = y, t[c++] = v, t[--f] = _, t[--f] = y)
        }
    },
    triangulate(e, t) {
        const i = e.points,
            s = t.points,
            r = t.indices;
        if (i.length === 0) return;
        let n = s.length / 2;
        const o = n;
        let a, h;
        if (e.type !== xt.RREC) {
            const c = e.shape;
            a = c.x, h = c.y
        } else {
            const c = e.shape;
            a = c.x + c.width / 2, h = c.y + c.height / 2
        }
        const l = e.matrix;
        s.push(e.matrix ? l.a * a + l.c * h + l.tx : a, e.matrix ? l.b * a + l.d * h + l.ty : h), n++, s.push(i[0], i[1]);
        for (let c = 2; c < i.length; c += 2) s.push(i[c], i[c + 1]), r.push(n++, o, n);
        r.push(o + 1, o, n)
    }
};

function na(e, t = !1) {
    const i = e.length;
    if (i < 6) return;
    let s = 0;
    for (let r = 0, n = e[i - 2], o = e[i - 1]; r < i; r += 2) {
        const a = e[r],
            h = e[r + 1];
        s += (a - n) * (h + o), n = a, o = h
    }
    if (!t && s > 0 || t && s <= 0) {
        const r = i / 2;
        for (let n = r + r % 2; n < i; n += 2) {
            const o = i - n - 2,
                a = i - n - 1,
                h = n,
                l = n + 1;
            [e[o], e[h]] = [e[h], e[o]], [e[a], e[l]] = [e[l], e[a]]
        }
    }
}
const Oh = {
        build(e) {
            e.points = e.shape.points.slice()
        },
        triangulate(e, t) {
            let i = e.points;
            const s = e.holes,
                r = t.points,
                n = t.indices;
            if (i.length >= 6) {
                na(i, !1);
                const o = [];
                for (let l = 0; l < s.length; l++) {
                    const c = s[l];
                    na(c.points, !0), o.push(i.length / 2), i = i.concat(c.points)
                }
                const a = _l(i, o, 2);
                if (!a) return;
                const h = r.length / 2;
                for (let l = 0; l < a.length; l += 3) n.push(a[l] + h), n.push(a[l + 1] + h), n.push(a[l + 2] + h);
                for (let l = 0; l < i.length; l++) r.push(i[l])
            }
        }
    },
    sm = {
        build(e) {
            const t = e.shape,
                i = t.x,
                s = t.y,
                r = t.width,
                n = t.height,
                o = e.points;
            o.length = 0, r >= 0 && n >= 0 && o.push(i, s, i + r, s, i + r, s + n, i, s + n)
        },
        triangulate(e, t) {
            const i = e.points,
                s = t.points;
            if (i.length === 0) return;
            const r = s.length / 2;
            s.push(i[0], i[1], i[2], i[3], i[6], i[7], i[4], i[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3)
        }
    },
    rm = {
        build(e) {
            Ls.build(e)
        },
        triangulate(e, t) {
            Ls.triangulate(e, t)
        }
    };
var Gt = (e => (e.MITER = "miter", e.BEVEL = "bevel", e.ROUND = "round", e))(Gt || {}),
    Oe = (e => (e.BUTT = "butt", e.ROUND = "round", e.SQUARE = "square", e))(Oe || {});
const mi = {
    adaptive: !0,
    maxLength: 10,
    minSegments: 8,
    maxSegments: 2048,
    epsilon: 1e-4,
    _segmentsCount(e, t = 20) {
        if (!this.adaptive || !e || isNaN(e)) return t;
        let i = Math.ceil(e / this.maxLength);
        return i < this.minSegments ? i = this.minSegments : i > this.maxSegments && (i = this.maxSegments), i
    }
};
class oa {
    static curveTo(t, i, s, r, n, o) {
        const a = o[o.length - 2],
            l = o[o.length - 1] - i,
            c = a - t,
            u = r - i,
            d = s - t,
            f = Math.abs(l * d - c * u);
        if (f < 1e-8 || n === 0) return (o[o.length - 2] !== t || o[o.length - 1] !== i) && o.push(t, i), null;
        const p = l * l + c * c,
            g = u * u + d * d,
            m = l * u + c * d,
            y = n * Math.sqrt(p) / f,
            v = n * Math.sqrt(g) / f,
            _ = y * m / p,
            x = v * m / g,
            T = y * d + v * c,
            P = y * u + v * l,
            S = c * (v + _),
            E = l * (v + _),
            B = d * (y + x),
            N = u * (y + x),
            I = Math.atan2(E - P, S - T),
            M = Math.atan2(N - P, B - T);
        return {
            cx: T + t,
            cy: P + i,
            radius: n,
            startAngle: I,
            endAngle: M,
            anticlockwise: c * u > d * l
        }
    }
    static arc(t, i, s, r, n, o, a, h, l) {
        const c = a - o,
            u = mi._segmentsCount(Math.abs(c) * n, Math.ceil(Math.abs(c) / Ms) * 40),
            d = c / (u * 2),
            f = d * 2,
            p = Math.cos(d),
            g = Math.sin(d),
            m = u - 1,
            y = m % 1 / m;
        for (let v = 0; v <= m; ++v) {
            const _ = v + y * v,
                x = d + o + f * _,
                T = Math.cos(x),
                P = -Math.sin(x);
            l.push((p * T + g * P) * n + s, (p * -P + g * T) * n + r)
        }
    }
}
class nm {
    constructor() {
        this.reset()
    }
    begin(t, i, s) {
        this.reset(), this.style = t, this.start = i, this.attribStart = s
    }
    end(t, i) {
        this.attribSize = i - this.attribStart, this.size = t - this.start
    }
    reset() {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
    }
}
class kn {
    static curveLength(t, i, s, r, n, o, a, h) {
        let c = 0,
            u = 0,
            d = 0,
            f = 0,
            p = 0,
            g = 0,
            m = 0,
            y = 0,
            v = 0,
            _ = 0,
            x = 0,
            T = t,
            P = i;
        for (let S = 1; S <= 10; ++S) u = S / 10, d = u * u, f = d * u, p = 1 - u, g = p * p, m = g * p, y = m * t + 3 * g * u * s + 3 * p * d * n + f * a, v = m * i + 3 * g * u * r + 3 * p * d * o + f * h, _ = T - y, x = P - v, T = y, P = v, c += Math.sqrt(_ * _ + x * x);
        return c
    }
    static curveTo(t, i, s, r, n, o, a) {
        const h = a[a.length - 2],
            l = a[a.length - 1];
        a.length -= 2;
        const c = mi._segmentsCount(kn.curveLength(h, l, t, i, s, r, n, o));
        let u = 0,
            d = 0,
            f = 0,
            p = 0,
            g = 0;
        a.push(h, l);
        for (let m = 1, y = 0; m <= c; ++m) y = m / c, u = 1 - y, d = u * u, f = d * u, p = y * y, g = p * y, a.push(f * h + 3 * d * y * t + 3 * u * p * s + g * n, f * l + 3 * d * y * i + 3 * u * p * r + g * o)
    }
}

function aa(e, t, i, s, r, n, o, a) {
    const h = e - i * r,
        l = t - s * r,
        c = e + i * n,
        u = t + s * n;
    let d, f;
    o ? (d = s, f = -i) : (d = -s, f = i);
    const p = h + d,
        g = l + f,
        m = c + d,
        y = u + f;
    return a.push(p, g, m, y), 2
}

function Pe(e, t, i, s, r, n, o, a) {
    const h = i - e,
        l = s - t;
    let c = Math.atan2(h, l),
        u = Math.atan2(r - e, n - t);
    a && c < u ? c += Math.PI * 2 : !a && c > u && (u += Math.PI * 2);
    let d = c;
    const f = u - c,
        p = Math.abs(f),
        g = Math.sqrt(h * h + l * l),
        m = (15 * p * Math.sqrt(g) / Math.PI >> 0) + 1,
        y = f / m;
    if (d += y, a) {
        o.push(e, t, i, s);
        for (let v = 1, _ = d; v < m; v++, _ += y) o.push(e, t, e + Math.sin(_) * g, t + Math.cos(_) * g);
        o.push(e, t, r, n)
    } else {
        o.push(i, s, e, t);
        for (let v = 1, _ = d; v < m; v++, _ += y) o.push(e + Math.sin(_) * g, t + Math.cos(_) * g, e, t);
        o.push(r, n, e, t)
    }
    return m * 2
}

function om(e, t) {
    const i = e.shape;
    let s = e.points || i.points.slice();
    const r = t.closePointEps;
    if (s.length === 0) return;
    const n = e.lineStyle,
        o = new K(s[0], s[1]),
        a = new K(s[s.length - 2], s[s.length - 1]),
        h = i.type !== xt.POLY || i.closeStroke,
        l = Math.abs(o.x - a.x) < r && Math.abs(o.y - a.y) < r;
    if (h) {
        s = s.slice(), l && (s.pop(), s.pop(), a.set(s[s.length - 2], s[s.length - 1]));
        const F = (o.x + a.x) * .5,
            Z = (a.y + o.y) * .5;
        s.unshift(F, Z), s.push(F, Z)
    }
    const c = t.points,
        u = s.length / 2;
    let d = s.length;
    const f = c.length / 2,
        p = n.width / 2,
        g = p * p,
        m = n.miterLimit * n.miterLimit;
    let y = s[0],
        v = s[1],
        _ = s[2],
        x = s[3],
        T = 0,
        P = 0,
        S = -(v - x),
        E = y - _,
        B = 0,
        N = 0,
        I = Math.sqrt(S * S + E * E);
    S /= I, E /= I, S *= p, E *= p;
    const M = n.alignment,
        w = (1 - M) * 2,
        b = M * 2;
    h || (n.cap === Oe.ROUND ? d += Pe(y - S * (w - b) * .5, v - E * (w - b) * .5, y - S * w, v - E * w, y + S * b, v + E * b, c, !0) + 2 : n.cap === Oe.SQUARE && (d += aa(y, v, S, E, w, b, !0, c))), c.push(y - S * w, v - E * w, y + S * b, v + E * b);
    for (let F = 1; F < u - 1; ++F) {
        y = s[(F - 1) * 2], v = s[(F - 1) * 2 + 1], _ = s[F * 2], x = s[F * 2 + 1], T = s[(F + 1) * 2], P = s[(F + 1) * 2 + 1], S = -(v - x), E = y - _, I = Math.sqrt(S * S + E * E), S /= I, E /= I, S *= p, E *= p, B = -(x - P), N = _ - T, I = Math.sqrt(B * B + N * N), B /= I, N /= I, B *= p, N *= p;
        const Z = _ - y,
            ot = v - x,
            A = _ - T,
            H = P - x,
            q = Z * A + ot * H,
            Q = ot * A - H * Z,
            tt = Q < 0;
        if (Math.abs(Q) < .001 * Math.abs(q)) {
            c.push(_ - S * w, x - E * w, _ + S * b, x + E * b), q >= 0 && (n.join === Gt.ROUND ? d += Pe(_, x, _ - S * w, x - E * w, _ - B * w, x - N * w, c, !1) + 4 : d += 2, c.push(_ - B * b, x - N * b, _ + B * w, x + N * w));
            continue
        }
        const ft = (-S + y) * (-E + x) - (-S + _) * (-E + v),
            ht = (-B + T) * (-N + x) - (-B + _) * (-N + P),
            pt = (Z * ht - A * ft) / Q,
            Tt = (H * ft - ot * ht) / Q,
            Rt = (pt - _) * (pt - _) + (Tt - x) * (Tt - x),
            yt = _ + (pt - _) * w,
            et = x + (Tt - x) * w,
            lt = _ - (pt - _) * b,
            ut = x - (Tt - x) * b,
            Yt = Math.min(Z * Z + ot * ot, A * A + H * H),
            qt = tt ? w : b,
            yi = Yt + qt * qt * g,
            jh = Rt <= yi;
        let Wi = n.join;
        if (Wi === Gt.MITER && Rt / g > m && (Wi = Gt.BEVEL), jh) switch (Wi) {
            case Gt.MITER: {
                c.push(yt, et, lt, ut);
                break
            }
            case Gt.BEVEL: {
                tt ? c.push(yt, et, _ + S * b, x + E * b, yt, et, _ + B * b, x + N * b) : c.push(_ - S * w, x - E * w, lt, ut, _ - B * w, x - N * w, lt, ut), d += 2;
                break
            }
            case Gt.ROUND: {
                tt ? (c.push(yt, et, _ + S * b, x + E * b), d += Pe(_, x, _ + S * b, x + E * b, _ + B * b, x + N * b, c, !0) + 4, c.push(yt, et, _ + B * b, x + N * b)) : (c.push(_ - S * w, x - E * w, lt, ut), d += Pe(_, x, _ - S * w, x - E * w, _ - B * w, x - N * w, c, !1) + 4, c.push(_ - B * w, x - N * w, lt, ut));
                break
            }
        } else {
            switch (c.push(_ - S * w, x - E * w, _ + S * b, x + E * b), Wi) {
                case Gt.MITER: {
                    tt ? c.push(lt, ut, lt, ut) : c.push(yt, et, yt, et), d += 2;
                    break
                }
                case Gt.ROUND: {
                    tt ? d += Pe(_, x, _ + S * b, x + E * b, _ + B * b, x + N * b, c, !0) + 2 : d += Pe(_, x, _ - S * w, x - E * w, _ - B * w, x - N * w, c, !1) + 2;
                    break
                }
            }
            c.push(_ - B * w, x - N * w, _ + B * b, x + N * b), d += 2
        }
    }
    y = s[(u - 2) * 2], v = s[(u - 2) * 2 + 1], _ = s[(u - 1) * 2], x = s[(u - 1) * 2 + 1], S = -(v - x), E = y - _, I = Math.sqrt(S * S + E * E), S /= I, E /= I, S *= p, E *= p, c.push(_ - S * w, x - E * w, _ + S * b, x + E * b), h || (n.cap === Oe.ROUND ? d += Pe(_ - S * (w - b) * .5, x - E * (w - b) * .5, _ - S * w, x - E * w, _ + S * b, x + E * b, c, !1) + 2 : n.cap === Oe.SQUARE && (d += aa(_, x, S, E, w, b, !1, c)));
    const $ = t.indices,
        X = mi.epsilon * mi.epsilon;
    for (let F = f; F < d + f - 2; ++F) y = c[F * 2], v = c[F * 2 + 1], _ = c[(F + 1) * 2], x = c[(F + 1) * 2 + 1], T = c[(F + 2) * 2], P = c[(F + 2) * 2 + 1], !(Math.abs(y * (x - P) + _ * (P - v) + T * (v - x)) < X) && $.push(F, F + 1, F + 2)
}

function am(e, t) {
    let i = 0;
    const s = e.shape,
        r = e.points || s.points,
        n = s.type !== xt.POLY || s.closeStroke;
    if (r.length === 0) return;
    const o = t.points,
        a = t.indices,
        h = r.length / 2,
        l = o.length / 2;
    let c = l;
    for (o.push(r[0], r[1]), i = 1; i < h; i++) o.push(r[i * 2], r[i * 2 + 1]), a.push(c, c + 1), c++;
    n && a.push(c, l)
}

function ha(e, t) {
    e.lineStyle.native ? am(e, t) : om(e, t)
}
class Gn {
    static curveLength(t, i, s, r, n, o) {
        const a = t - 2 * s + n,
            h = i - 2 * r + o,
            l = 2 * s - 2 * t,
            c = 2 * r - 2 * i,
            u = 4 * (a * a + h * h),
            d = 4 * (a * l + h * c),
            f = l * l + c * c,
            p = 2 * Math.sqrt(u + d + f),
            g = Math.sqrt(u),
            m = 2 * u * g,
            y = 2 * Math.sqrt(f),
            v = d / g;
        return (m * p + g * d * (p - y) + (4 * f * u - d * d) * Math.log((2 * g + v + p) / (v + y))) / (4 * m)
    }
    static curveTo(t, i, s, r, n) {
        const o = n[n.length - 2],
            a = n[n.length - 1],
            h = mi._segmentsCount(Gn.curveLength(o, a, t, i, s, r));
        let l = 0,
            c = 0;
        for (let u = 1; u <= h; ++u) {
            const d = u / h;
            l = o + (t - o) * d, c = a + (i - a) * d, n.push(l + (t + (s - t) * d - l) * d, c + (i + (r - i) * d - c) * d)
        }
    }
}
const Dr = {
        [xt.POLY]: Oh,
        [xt.CIRC]: Ls,
        [xt.ELIP]: Ls,
        [xt.RECT]: sm,
        [xt.RREC]: rm
    },
    la = [],
    ps = [];
class Ns {
    constructor(t, i = null, s = null, r = null) {
        this.points = [], this.holes = [], this.shape = t, this.lineStyle = s, this.fillStyle = i, this.matrix = r, this.type = t.type
    }
    clone() {
        return new Ns(this.shape, this.fillStyle, this.lineStyle, this.matrix)
    }
    destroy() {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
    }
}
const qe = new K,
    Lh = class extends Wa {
        constructor() {
            super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new Ds, this.boundsDirty = -1
        }
        get bounds() {
            return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
        }
        invalidate() {
            this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
            for (let e = 0; e < this.drawCalls.length; e++) this.drawCalls[e].texArray.clear(), ps.push(this.drawCalls[e]);
            this.drawCalls.length = 0;
            for (let e = 0; e < this.batches.length; e++) {
                const t = this.batches[e];
                t.reset(), la.push(t)
            }
            this.batches.length = 0
        }
        clear() {
            return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
        }
        drawShape(e, t = null, i = null, s = null) {
            const r = new Ns(e, t, i, s);
            return this.graphicsData.push(r), this.dirty++, this
        }
        drawHole(e, t = null) {
            if (!this.graphicsData.length) return null;
            const i = new Ns(e, null, null, t),
                s = this.graphicsData[this.graphicsData.length - 1];
            return i.lineStyle = s.lineStyle, s.holes.push(i), this.dirty++, this
        }
        destroy() {
            super.destroy();
            for (let e = 0; e < this.graphicsData.length; ++e) this.graphicsData[e].destroy();
            this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
        }
        containsPoint(e) {
            const t = this.graphicsData;
            for (let i = 0; i < t.length; ++i) {
                const s = t[i];
                if (s.fillStyle.visible && s.shape && (s.matrix ? s.matrix.applyInverse(e, qe) : qe.copyFrom(e), s.shape.contains(qe.x, qe.y))) {
                    let r = !1;
                    if (s.holes) {
                        for (let n = 0; n < s.holes.length; n++)
                            if (s.holes[n].shape.contains(qe.x, qe.y)) {
                                r = !0;
                                break
                            }
                    }
                    if (!r) return !0
                }
            }
            return !1
        }
        updateBatches() {
            if (!this.graphicsData.length) {
                this.batchable = !0;
                return
            }
            if (!this.validateBatching()) return;
            this.cacheDirty = this.dirty;
            const e = this.uvs,
                t = this.graphicsData;
            let i = null,
                s = null;
            this.batches.length > 0 && (i = this.batches[this.batches.length - 1], s = i.style);
            for (let a = this.shapeIndex; a < t.length; a++) {
                this.shapeIndex++;
                const h = t[a],
                    l = h.fillStyle,
                    c = h.lineStyle;
                Dr[h.type].build(h), h.matrix && this.transformPoints(h.points, h.matrix), (l.visible || c.visible) && this.processHoles(h.holes);
                for (let d = 0; d < 2; d++) {
                    const f = d === 0 ? l : c;
                    if (!f.visible) continue;
                    const p = f.texture.baseTexture,
                        g = this.indices.length,
                        m = this.points.length / 2;
                    p.wrapMode = be.REPEAT, d === 0 ? this.processFill(h) : this.processLine(h);
                    const y = this.points.length / 2 - m;
                    y !== 0 && (i && !this._compareStyles(s, f) && (i.end(g, m), i = null), i || (i = la.pop() || new nm, i.begin(f, g, m), this.batches.push(i), s = f), this.addUvs(this.points, e, f.texture, m, y, f.matrix))
                }
            }
            const r = this.indices.length,
                n = this.points.length / 2;
            if (i && i.end(r, n), this.batches.length === 0) {
                this.batchable = !0;
                return
            }
            const o = n > 65535;
            this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
        }
        _compareStyles(e, t) {
            return !(!e || !t || e.texture.baseTexture !== t.texture.baseTexture || e.color + e.alpha !== t.color + t.alpha || !!e.native != !!t.native)
        }
        validateBatching() {
            if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
            for (let e = 0, t = this.graphicsData.length; e < t; e++) {
                const i = this.graphicsData[e],
                    s = i.fillStyle,
                    r = i.lineStyle;
                if (s && !s.texture.baseTexture.valid || r && !r.texture.baseTexture.valid) return !1
            }
            return !0
        }
        packBatches() {
            this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
            const e = this.batches;
            for (let t = 0, i = e.length; t < i; t++) {
                const s = e[t];
                for (let r = 0; r < s.size; r++) {
                    const n = s.start + r;
                    this.indicesUint16[n] = this.indicesUint16[n] - s.attribStart
                }
            }
        }
        isBatchable() {
            if (this.points.length > 65535 * 2) return !1;
            const e = this.batches;
            for (let t = 0; t < e.length; t++)
                if (e[t].style.native) return !1;
            return this.points.length < Lh.BATCHABLE_SIZE * 2
        }
        buildDrawCalls() {
            let e = ++V._globalBatch;
            for (let c = 0; c < this.drawCalls.length; c++) this.drawCalls[c].texArray.clear(), ps.push(this.drawCalls[c]);
            this.drawCalls.length = 0;
            const t = this.colors,
                i = this.textureIds;
            let s = ps.pop();
            s || (s = new nn, s.texArray = new an), s.texArray.count = 0, s.start = 0, s.size = 0, s.type = ee.TRIANGLES;
            let r = 0,
                n = null,
                o = 0,
                a = !1,
                h = ee.TRIANGLES,
                l = 0;
            this.drawCalls.push(s);
            for (let c = 0; c < this.batches.length; c++) {
                const u = this.batches[c],
                    d = 8,
                    f = u.style,
                    p = f.texture.baseTexture;
                a !== !!f.native && (a = !!f.native, h = a ? ee.LINES : ee.TRIANGLES, n = null, r = d, e++), n !== p && (n = p, p._batchEnabled !== e && (r === d && (e++, r = 0, s.size > 0 && (s = ps.pop(), s || (s = new nn, s.texArray = new an), this.drawCalls.push(s)), s.start = l, s.size = 0, s.texArray.count = 0, s.type = h), p.touched = 1, p._batchEnabled = e, p._batchLocation = r, p.wrapMode = be.REPEAT, s.texArray.elements[s.texArray.count++] = p, r++)), s.size += u.size, l += u.size, o = p._batchLocation, this.addColors(t, f.color, f.alpha, u.attribSize, u.attribStart), this.addTextureIds(i, o, u.attribSize, u.attribStart)
            }
            V._globalBatch = e, this.packAttributes()
        }
        packAttributes() {
            const e = this.points,
                t = this.uvs,
                i = this.colors,
                s = this.textureIds,
                r = new ArrayBuffer(e.length * 3 * 4),
                n = new Float32Array(r),
                o = new Uint32Array(r);
            let a = 0;
            for (let h = 0; h < e.length / 2; h++) n[a++] = e[h * 2], n[a++] = e[h * 2 + 1], n[a++] = t[h * 2], n[a++] = t[h * 2 + 1], o[a++] = i[h], n[a++] = s[h];
            this._buffer.update(r), this._indexBuffer.update(this.indicesUint16)
        }
        processFill(e) {
            e.holes.length ? Oh.triangulate(e, this) : Dr[e.type].triangulate(e, this)
        }
        processLine(e) {
            ha(e, this);
            for (let t = 0; t < e.holes.length; t++) ha(e.holes[t], this)
        }
        processHoles(e) {
            for (let t = 0; t < e.length; t++) {
                const i = e[t];
                Dr[i.type].build(i), i.matrix && this.transformPoints(i.points, i.matrix)
            }
        }
        calculateBounds() {
            const e = this._bounds;
            e.clear(), e.addVertexData(this.points, 0, this.points.length), e.pad(this.boundsPadding, this.boundsPadding)
        }
        transformPoints(e, t) {
            for (let i = 0; i < e.length / 2; i++) {
                const s = e[i * 2],
                    r = e[i * 2 + 1];
                e[i * 2] = t.a * s + t.c * r + t.tx, e[i * 2 + 1] = t.b * s + t.d * r + t.ty
            }
        }
        addColors(e, t, i, s, r = 0) {
            const n = J.shared.setValue(t).toLittleEndianNumber(),
                o = J.shared.setValue(n).toPremultiplied(i);
            e.length = Math.max(e.length, r + s);
            for (let a = 0; a < s; a++) e[r + a] = o
        }
        addTextureIds(e, t, i, s = 0) {
            e.length = Math.max(e.length, s + i);
            for (let r = 0; r < i; r++) e[s + r] = t
        }
        addUvs(e, t, i, s, r, n = null) {
            let o = 0;
            const a = t.length,
                h = i.frame;
            for (; o < r;) {
                let c = e[(s + o) * 2],
                    u = e[(s + o) * 2 + 1];
                if (n) {
                    const d = n.a * c + n.c * u + n.tx;
                    u = n.b * c + n.d * u + n.ty, c = d
                }
                o++, t.push(c / h.width, u / h.height)
            }
            const l = i.baseTexture;
            (h.width < l.width || h.height < l.height) && this.adjustUvs(t, i, a, r)
        }
        adjustUvs(e, t, i, s) {
            const r = t.baseTexture,
                n = 1e-6,
                o = i + s * 2,
                a = t.frame,
                h = a.width / r.width,
                l = a.height / r.height;
            let c = a.x / a.width,
                u = a.y / a.height,
                d = Math.floor(e[i] + n),
                f = Math.floor(e[i + 1] + n);
            for (let p = i + 2; p < o; p += 2) d = Math.min(d, Math.floor(e[p] + n)), f = Math.min(f, Math.floor(e[p + 1] + n));
            c -= d, u -= f;
            for (let p = i; p < o; p += 2) e[p] = (e[p] + c) * h, e[p + 1] = (e[p + 1] + u) * l
        }
    };
let Nh = Lh;
Nh.BATCHABLE_SIZE = 100;
class Zs {
    constructor() {
        this.color = 16777215, this.alpha = 1, this.texture = O.WHITE, this.matrix = null, this.visible = !1, this.reset()
    }
    clone() {
        const t = new Zs;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
    }
    reset() {
        this.color = 16777215, this.alpha = 1, this.texture = O.WHITE, this.matrix = null, this.visible = !1
    }
    destroy() {
        this.texture = null, this.matrix = null
    }
}
class Hn extends Zs {
    constructor() {
        super(...arguments), this.width = 0, this.alignment = .5, this.native = !1, this.cap = Oe.BUTT, this.join = Gt.MITER, this.miterLimit = 10
    }
    clone() {
        const t = new Hn;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
    }
    reset() {
        super.reset(), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1
    }
}
const Br = {},
    bs = class extends Et {
        constructor(e = null) {
            super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new Zs, this._lineStyle = new Hn, this._matrix = null, this._holeMode = !1, this.state = pe.for2d(), this._geometry = e || new Nh, this._geometry.refCount++, this._transformID = -1, this._tintColor = new J(16777215), this.blendMode = G.NORMAL
        }
        get geometry() {
            return this._geometry
        }
        clone() {
            return this.finishPoly(), new bs(this._geometry)
        }
        set blendMode(e) {
            this.state.blendMode = e
        }
        get blendMode() {
            return this.state.blendMode
        }
        get tint() {
            return this._tintColor.value
        }
        set tint(e) {
            this._tintColor.setValue(e)
        }
        get fill() {
            return this._fillStyle
        }
        get line() {
            return this._lineStyle
        }
        lineStyle(e = null, t = 0, i, s = .5, r = !1) {
            return typeof e == "number" && (e = {
                width: e,
                color: t,
                alpha: i,
                alignment: s,
                native: r
            }), this.lineTextureStyle(e)
        }
        lineTextureStyle(e) {
            const t = {
                width: 0,
                texture: O.WHITE,
                color: e != null && e.texture ? 16777215 : 0,
                matrix: null,
                alignment: .5,
                native: !1,
                cap: Oe.BUTT,
                join: Gt.MITER,
                miterLimit: 10
            };
            e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
            const i = e.width > 0 && e.alpha > 0;
            return i ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._lineStyle, {
                visible: i
            }, e)) : this._lineStyle.reset(), this
        }
        startPoly() {
            if (this.currentPath) {
                const e = this.currentPath.points,
                    t = this.currentPath.points.length;
                t > 2 && (this.drawShape(this.currentPath), this.currentPath = new li, this.currentPath.closeStroke = !1, this.currentPath.points.push(e[t - 2], e[t - 1]))
            } else this.currentPath = new li, this.currentPath.closeStroke = !1
        }
        finishPoly() {
            this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
        }
        moveTo(e, t) {
            return this.startPoly(), this.currentPath.points[0] = e, this.currentPath.points[1] = t, this
        }
        lineTo(e, t) {
            this.currentPath || this.moveTo(0, 0);
            const i = this.currentPath.points,
                s = i[i.length - 2],
                r = i[i.length - 1];
            return (s !== e || r !== t) && i.push(e, t), this
        }
        _initCurve(e = 0, t = 0) {
            this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [e, t]) : this.moveTo(e, t)
        }
        quadraticCurveTo(e, t, i, s) {
            this._initCurve();
            const r = this.currentPath.points;
            return r.length === 0 && this.moveTo(0, 0), Gn.curveTo(e, t, i, s, r), this
        }
        bezierCurveTo(e, t, i, s, r, n) {
            return this._initCurve(), kn.curveTo(e, t, i, s, r, n, this.currentPath.points), this
        }
        arcTo(e, t, i, s, r) {
            this._initCurve(e, t);
            const n = this.currentPath.points,
                o = oa.curveTo(e, t, i, s, r, n);
            if (o) {
                const {
                    cx: a,
                    cy: h,
                    radius: l,
                    startAngle: c,
                    endAngle: u,
                    anticlockwise: d
                } = o;
                this.arc(a, h, l, c, u, d)
            }
            return this
        }
        arc(e, t, i, s, r, n = !1) {
            if (s === r) return this;
            if (!n && r <= s ? r += Ms : n && s <= r && (s += Ms), r - s === 0) return this;
            const a = e + Math.cos(s) * i,
                h = t + Math.sin(s) * i,
                l = this._geometry.closePointEps;
            let c = this.currentPath ? this.currentPath.points : null;
            if (c) {
                const u = Math.abs(c[c.length - 2] - a),
                    d = Math.abs(c[c.length - 1] - h);
                u < l && d < l || c.push(a, h)
            } else this.moveTo(a, h), c = this.currentPath.points;
            return oa.arc(a, h, e, t, i, s, r, n, c), this
        }
        beginFill(e = 0, t) {
            return this.beginTextureFill({
                texture: O.WHITE,
                color: e,
                alpha: t
            })
        }
        normalizeColor(e) {
            const t = J.shared.setValue(e.color ?? 0);
            e.color = t.toNumber(), e.alpha ?? (e.alpha = t.alpha)
        }
        beginTextureFill(e) {
            const t = {
                texture: O.WHITE,
                color: 16777215,
                matrix: null
            };
            e = Object.assign(t, e), this.normalizeColor(e), this.currentPath && this.startPoly();
            const i = e.alpha > 0;
            return i ? (e.matrix && (e.matrix = e.matrix.clone(), e.matrix.invert()), Object.assign(this._fillStyle, {
                visible: i
            }, e)) : this._fillStyle.reset(), this
        }
        endFill() {
            return this.finishPoly(), this._fillStyle.reset(), this
        }
        drawRect(e, t, i, s) {
            return this.drawShape(new z(e, t, i, s))
        }
        drawRoundedRect(e, t, i, s, r) {
            return this.drawShape(new On(e, t, i, s, r))
        }
        drawCircle(e, t, i) {
            return this.drawShape(new Vs(e, t, i))
        }
        drawEllipse(e, t, i, s) {
            return this.drawShape(new Fn(e, t, i, s))
        }
        drawPolygon(...e) {
            let t, i = !0;
            const s = e[0];
            s.points ? (i = s.closeStroke, t = s.points) : Array.isArray(e[0]) ? t = e[0] : t = e;
            const r = new li(t);
            return r.closeStroke = i, this.drawShape(r), this
        }
        drawShape(e) {
            return this._holeMode ? this._geometry.drawHole(e, this._matrix) : this._geometry.drawShape(e, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
        }
        clear() {
            return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
        }
        isFastRect() {
            const e = this._geometry.graphicsData;
            return e.length === 1 && e[0].shape.type === xt.RECT && !e[0].matrix && !e[0].holes.length && !(e[0].lineStyle.visible && e[0].lineStyle.width)
        }
        _render(e) {
            this.finishPoly();
            const t = this._geometry;
            t.updateBatches(), t.batchable ? (this.batchDirty !== t.batchDirty && this._populateBatches(), this._renderBatched(e)) : (e.batch.flush(), this._renderDirect(e))
        }
        _populateBatches() {
            const e = this._geometry,
                t = this.blendMode,
                i = e.batches.length;
            this.batchTint = -1, this._transformID = -1, this.batchDirty = e.batchDirty, this.batches.length = i, this.vertexData = new Float32Array(e.points);
            for (let s = 0; s < i; s++) {
                const r = e.batches[s],
                    n = r.style.color,
                    o = new Float32Array(this.vertexData.buffer, r.attribStart * 4 * 2, r.attribSize * 2),
                    a = new Float32Array(e.uvsFloat32.buffer, r.attribStart * 4 * 2, r.attribSize * 2),
                    h = new Uint16Array(e.indicesUint16.buffer, r.start * 2, r.size),
                    l = {
                        vertexData: o,
                        blendMode: t,
                        indices: h,
                        uvs: a,
                        _batchRGB: J.shared.setValue(n).toRgbArray(),
                        _tintRGB: n,
                        _texture: r.style.texture,
                        alpha: r.style.alpha,
                        worldAlpha: 1
                    };
                this.batches[s] = l
            }
        }
        _renderBatched(e) {
            if (this.batches.length) {
                e.batch.setObjectRenderer(e.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
                for (let t = 0, i = this.batches.length; t < i; t++) {
                    const s = this.batches[t];
                    s.worldAlpha = this.worldAlpha * s.alpha, e.plugins[this.pluginName].render(s)
                }
            }
        }
        _renderDirect(e) {
            const t = this._resolveDirectShader(e),
                i = this._geometry,
                s = this.worldAlpha,
                r = t.uniforms,
                n = i.drawCalls;
            r.translationMatrix = this.transform.worldTransform, J.shared.setValue(this._tintColor).premultiply(s).toArray(r.tint), e.shader.bind(t), e.geometry.bind(i, t), e.state.set(this.state);
            for (let o = 0, a = n.length; o < a; o++) this._renderDrawCallDirect(e, i.drawCalls[o])
        }
        _renderDrawCallDirect(e, t) {
            const {
                texArray: i,
                type: s,
                size: r,
                start: n
            } = t, o = i.count;
            for (let a = 0; a < o; a++) e.texture.bind(i.elements[a], a);
            e.geometry.draw(s, r, n)
        }
        _resolveDirectShader(e) {
            let t = this.shader;
            const i = this.pluginName;
            if (!t) {
                if (!Br[i]) {
                    const {
                        maxTextures: s
                    } = e.plugins[i], r = new Int32Array(s);
                    for (let a = 0; a < s; a++) r[a] = a;
                    const n = {
                            tint: new Float32Array([1, 1, 1, 1]),
                            translationMatrix: new it,
                            default: Wt.from({
                                uSamplers: r
                            }, !0)
                        },
                        o = e.plugins[i]._shader.program;
                    Br[i] = new se(o, n)
                }
                t = Br[i]
            }
            return t
        }
        _calculateBounds() {
            this.finishPoly();
            const e = this._geometry;
            if (!e.graphicsData.length) return;
            const {
                minX: t,
                minY: i,
                maxX: s,
                maxY: r
            } = e.bounds;
            this._bounds.addFrame(this.transform, t, i, s, r)
        }
        containsPoint(e) {
            return this.worldTransform.applyInverse(e, bs._TEMP_POINT), this._geometry.containsPoint(bs._TEMP_POINT)
        }
        calculateTints() {
            if (this.batchTint !== this.tint) {
                this.batchTint = this._tintColor.toNumber();
                for (let e = 0; e < this.batches.length; e++) {
                    const t = this.batches[e];
                    t._tintRGB = J.shared.setValue(this._tintColor).multiply(t._batchRGB).toLittleEndianNumber()
                }
            }
        }
        calculateVertices() {
            const e = this.transform._worldID;
            if (this._transformID === e) return;
            this._transformID = e;
            const t = this.transform.worldTransform,
                i = t.a,
                s = t.b,
                r = t.c,
                n = t.d,
                o = t.tx,
                a = t.ty,
                h = this._geometry.points,
                l = this.vertexData;
            let c = 0;
            for (let u = 0; u < h.length; u += 2) {
                const d = h[u],
                    f = h[u + 1];
                l[c++] = i * d + r * f + o, l[c++] = n * f + s * d + a
            }
        }
        closePath() {
            const e = this.currentPath;
            return e && (e.closeStroke = !0, this.finishPoly()), this
        }
        setMatrix(e) {
            return this._matrix = e, this
        }
        beginHole() {
            return this.finishPoly(), this._holeMode = !0, this
        }
        endHole() {
            return this.finishPoly(), this._holeMode = !1, this
        }
        destroy(e) {
            this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(e)
        }
    };
let Ee = bs;
Ee.curves = mi;
Ee._TEMP_POINT = new K;
class hm {
    constructor(t, i) {
        this.uvBuffer = t, this.uvMatrix = i, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
    }
    update(t) {
        if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) return;
        this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
        const i = this.uvBuffer.data;
        (!this.data || this.data.length !== i.length) && (this.data = new Float32Array(i.length)), this.uvMatrix.multiplyUvs(i, this.data), this._updateID++
    }
}
const Fr = new K,
    ca = new li,
    Uh = class extends Et {
        constructor(e, t, i, s = ee.TRIANGLES) {
            super(), this.geometry = e, this.shader = t, this.state = i || pe.for2d(), this.drawMode = s, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = R.ROUND_PIXELS, this.batchUvs = null
        }
        get geometry() {
            return this._geometry
        }
        set geometry(e) {
            this._geometry !== e && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = e, this._geometry && this._geometry.refCount++, this.vertexDirty = -1)
        }
        get uvBuffer() {
            return this.geometry.buffers[1]
        }
        get verticesBuffer() {
            return this.geometry.buffers[0]
        }
        set material(e) {
            this.shader = e
        }
        get material() {
            return this.shader
        }
        set blendMode(e) {
            this.state.blendMode = e
        }
        get blendMode() {
            return this.state.blendMode
        }
        set roundPixels(e) {
            this._roundPixels !== e && (this._transformID = -1), this._roundPixels = e
        }
        get roundPixels() {
            return this._roundPixels
        }
        get tint() {
            return "tint" in this.shader ? this.shader.tint : null
        }
        set tint(e) {
            this.shader.tint = e
        }
        get tintValue() {
            return this.shader.tintValue
        }
        get texture() {
            return "texture" in this.shader ? this.shader.texture : null
        }
        set texture(e) {
            this.shader.texture = e
        }
        _render(e) {
            const t = this.geometry.buffers[0].data;
            this.shader.batchable && this.drawMode === ee.TRIANGLES && t.length < Uh.BATCHABLE_SIZE * 2 ? this._renderToBatch(e) : this._renderDefault(e)
        }
        _renderDefault(e) {
            const t = this.shader;
            t.alpha = this.worldAlpha, t.update && t.update(), e.batch.flush(), t.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), e.shader.bind(t), e.state.set(this.state), e.geometry.bind(this.geometry, t), e.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
        }
        _renderToBatch(e) {
            const t = this.geometry,
                i = this.shader;
            i.uvMatrix && (i.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = t.indexBuffer.data, this._tintRGB = i._tintRGB, this._texture = i.texture;
            const s = this.material.pluginName;
            e.batch.setObjectRenderer(e.plugins[s]), e.plugins[s].render(this)
        }
        calculateVertices() {
            const t = this.geometry.buffers[0],
                i = t.data,
                s = t._updateID;
            if (s === this.vertexDirty && this._transformID === this.transform._worldID) return;
            this._transformID = this.transform._worldID, this.vertexData.length !== i.length && (this.vertexData = new Float32Array(i.length));
            const r = this.transform.worldTransform,
                n = r.a,
                o = r.b,
                a = r.c,
                h = r.d,
                l = r.tx,
                c = r.ty,
                u = this.vertexData;
            for (let d = 0; d < u.length / 2; d++) {
                const f = i[d * 2],
                    p = i[d * 2 + 1];
                u[d * 2] = n * f + a * p + l, u[d * 2 + 1] = o * f + h * p + c
            }
            if (this._roundPixels) {
                const d = R.RESOLUTION;
                for (let f = 0; f < u.length; ++f) u[f] = Math.round(u[f] * d) / d
            }
            this.vertexDirty = s
        }
        calculateUvs() {
            const e = this.geometry.buffers[1],
                t = this.shader;
            t.uvMatrix.isSimple ? this.uvs = e.data : (this.batchUvs || (this.batchUvs = new hm(e, t.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
        }
        _calculateBounds() {
            this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
        }
        containsPoint(e) {
            if (!this.getBounds().contains(e.x, e.y)) return !1;
            this.worldTransform.applyInverse(e, Fr);
            const t = this.geometry.getBuffer("aVertexPosition").data,
                i = ca.points,
                s = this.geometry.getIndex().data,
                r = s.length,
                n = this.drawMode === 4 ? 3 : 1;
            for (let o = 0; o + 2 < r; o += n) {
                const a = s[o] * 2,
                    h = s[o + 1] * 2,
                    l = s[o + 2] * 2;
                if (i[0] = t[a], i[1] = t[a + 1], i[2] = t[h], i[3] = t[h + 1], i[4] = t[l], i[5] = t[l + 1], ca.contains(Fr.x, Fr.y)) return !0
            }
            return !1
        }
        destroy(e) {
            super.destroy(e), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
        }
    };
let vn = Uh;
vn.BATCHABLE_SIZE = 100;
class lm extends we {
    constructor(t, i, s) {
        super();
        const r = new at(t),
            n = new at(i, !0),
            o = new at(s, !0, !0);
        this.addAttribute("aVertexPosition", r, 2, !1, k.FLOAT).addAttribute("aTextureCoord", n, 2, !1, k.FLOAT).addIndex(o), this._updateId = -1
    }
    get vertexDirtyId() {
        return this.buffers[0]._updateID
    }
}
var cm = `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,
    um = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`;
class ua extends se {
    constructor(t, i) {
        const s = {
            uSampler: t,
            alpha: 1,
            uTextureMatrix: it.IDENTITY,
            uColor: new Float32Array([1, 1, 1, 1])
        };
        i = Object.assign({
            tint: 16777215,
            alpha: 1,
            pluginName: "batch"
        }, i), i.uniforms && Object.assign(s, i.uniforms), super(i.program || Vt.from(um, cm), s), this._colorDirty = !1, this.uvMatrix = new hh(t), this.batchable = i.program === void 0, this.pluginName = i.pluginName, this._tintColor = new J(i.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0, this.alpha = i.alpha
    }
    get texture() {
        return this.uniforms.uSampler
    }
    set texture(t) {
        this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t)
    }
    set alpha(t) {
        t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
    }
    get alpha() {
        return this._alpha
    }
    set tint(t) {
        t !== this.tint && (this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0)
    }
    get tint() {
        return this._tintColor.value
    }
    get tintValue() {
        return this._tintColor.toNumber()
    }
    update() {
        if (this._colorDirty) {
            this._colorDirty = !1;
            const i = this.texture.baseTexture.alphaMode;
            J.shared.setValue(this._tintColor).premultiply(this._alpha, i).toArray(this.uniforms.uColor)
        }
        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
    }
}
class da {
    constructor(t, i, s) {
        this.geometry = new we, this.indexBuffer = null, this.size = s, this.dynamicProperties = [], this.staticProperties = [];
        for (let r = 0; r < t.length; ++r) {
            let n = t[r];
            n = {
                attributeName: n.attributeName,
                size: n.size,
                uploadFunction: n.uploadFunction,
                type: n.type || k.FLOAT,
                offset: n.offset
            }, i[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
    }
    initBuffers() {
        const t = this.geometry;
        let i = 0;
        this.indexBuffer = new at(zu(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
        for (let o = 0; o < this.dynamicProperties.length; ++o) {
            const a = this.dynamicProperties[o];
            a.offset = i, i += a.size, this.dynamicStride += a.size
        }
        const s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(s), this.dynamicDataUint32 = new Uint32Array(s), this.dynamicBuffer = new at(this.dynamicData, !1, !1);
        let r = 0;
        this.staticStride = 0;
        for (let o = 0; o < this.staticProperties.length; ++o) {
            const a = this.staticProperties[o];
            a.offset = r, r += a.size, this.staticStride += a.size
        }
        const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new at(this.staticData, !0, !1);
        for (let o = 0; o < this.dynamicProperties.length; ++o) {
            const a = this.dynamicProperties[o];
            t.addAttribute(a.attributeName, this.dynamicBuffer, 0, a.type === k.UNSIGNED_BYTE, a.type, this.dynamicStride * 4, a.offset * 4)
        }
        for (let o = 0; o < this.staticProperties.length; ++o) {
            const a = this.staticProperties[o];
            t.addAttribute(a.attributeName, this.staticBuffer, 0, a.type === k.UNSIGNED_BYTE, a.type, this.staticStride * 4, a.offset * 4)
        }
    }
    uploadDynamic(t, i, s) {
        for (let r = 0; r < this.dynamicProperties.length; r++) {
            const n = this.dynamicProperties[r];
            n.uploadFunction(t, i, s, n.type === k.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer._updateID++
    }
    uploadStatic(t, i, s) {
        for (let r = 0; r < this.staticProperties.length; r++) {
            const n = this.staticProperties[r];
            n.uploadFunction(t, i, s, n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer._updateID++
    }
    destroy() {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
    }
}
var dm = `varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,
    fm = `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`;
class kh extends Xs {
    constructor(t) {
        super(t), this.shader = null, this.properties = null, this.tempMatrix = new it, this.properties = [{
            attributeName: "aVertexPosition",
            size: 2,
            uploadFunction: this.uploadVertices,
            offset: 0
        }, {
            attributeName: "aPositionCoord",
            size: 2,
            uploadFunction: this.uploadPosition,
            offset: 0
        }, {
            attributeName: "aRotation",
            size: 1,
            uploadFunction: this.uploadRotation,
            offset: 0
        }, {
            attributeName: "aTextureCoord",
            size: 2,
            uploadFunction: this.uploadUvs,
            offset: 0
        }, {
            attributeName: "aColor",
            size: 1,
            type: k.UNSIGNED_BYTE,
            uploadFunction: this.uploadTint,
            offset: 0
        }], this.shader = se.from(fm, dm, {}), this.state = pe.for2d()
    }
    render(t) {
        const i = t.children,
            s = t._maxSize,
            r = t._batchSize,
            n = this.renderer;
        let o = i.length;
        if (o === 0) return;
        o > s && !t.autoResize && (o = s);
        let a = t._buffers;
        a || (a = t._buffers = this.generateBuffers(t));
        const h = i[0]._texture.baseTexture,
            l = h.alphaMode > 0;
        this.state.blendMode = $a(t.blendMode, l), n.state.set(this.state);
        const c = n.gl,
            u = t.worldTransform.copyTo(this.tempMatrix);
        u.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = u.toArray(!0), this.shader.uniforms.uColor = J.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, l).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
        let d = !1;
        for (let f = 0, p = 0; f < o; f += r, p += 1) {
            let g = o - f;
            g > r && (g = r), p >= a.length && a.push(this._generateOneMoreBuffer(t));
            const m = a[p];
            m.uploadDynamic(i, f, g);
            const y = t._bufferUpdateIDs[p] || 0;
            d = d || m._updateID < y, d && (m._updateID = t._updateID, m.uploadStatic(i, f, g)), n.geometry.bind(m.geometry), c.drawElements(c.TRIANGLES, g * 6, c.UNSIGNED_SHORT, 0)
        }
    }
    generateBuffers(t) {
        const i = [],
            s = t._maxSize,
            r = t._batchSize,
            n = t._properties;
        for (let o = 0; o < s; o += r) i.push(new da(this.properties, n, r));
        return i
    }
    _generateOneMoreBuffer(t) {
        const i = t._batchSize,
            s = t._properties;
        return new da(this.properties, s, i)
    }
    uploadVertices(t, i, s, r, n, o) {
        let a = 0,
            h = 0,
            l = 0,
            c = 0;
        for (let u = 0; u < s; ++u) {
            const d = t[i + u],
                f = d._texture,
                p = d.scale.x,
                g = d.scale.y,
                m = f.trim,
                y = f.orig;
            m ? (h = m.x - d.anchor.x * y.width, a = h + m.width, c = m.y - d.anchor.y * y.height, l = c + m.height) : (a = y.width * (1 - d.anchor.x), h = y.width * -d.anchor.x, l = y.height * (1 - d.anchor.y), c = y.height * -d.anchor.y), r[o] = h * p, r[o + 1] = c * g, r[o + n] = a * p, r[o + n + 1] = c * g, r[o + n * 2] = a * p, r[o + n * 2 + 1] = l * g, r[o + n * 3] = h * p, r[o + n * 3 + 1] = l * g, o += n * 4
        }
    }
    uploadPosition(t, i, s, r, n, o) {
        for (let a = 0; a < s; a++) {
            const h = t[i + a].position;
            r[o] = h.x, r[o + 1] = h.y, r[o + n] = h.x, r[o + n + 1] = h.y, r[o + n * 2] = h.x, r[o + n * 2 + 1] = h.y, r[o + n * 3] = h.x, r[o + n * 3 + 1] = h.y, o += n * 4
        }
    }
    uploadRotation(t, i, s, r, n, o) {
        for (let a = 0; a < s; a++) {
            const h = t[i + a].rotation;
            r[o] = h, r[o + n] = h, r[o + n * 2] = h, r[o + n * 3] = h, o += n * 4
        }
    }
    uploadUvs(t, i, s, r, n, o) {
        for (let a = 0; a < s; ++a) {
            const h = t[i + a]._texture._uvs;
            h ? (r[o] = h.x0, r[o + 1] = h.y0, r[o + n] = h.x1, r[o + n + 1] = h.y1, r[o + n * 2] = h.x2, r[o + n * 2 + 1] = h.y2, r[o + n * 3] = h.x3, r[o + n * 3 + 1] = h.y3, o += n * 4) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + n * 2] = 0, r[o + n * 2 + 1] = 0, r[o + n * 3] = 0, r[o + n * 3 + 1] = 0, o += n * 4)
        }
    }
    uploadTint(t, i, s, r, n, o) {
        for (let a = 0; a < s; ++a) {
            const h = t[i + a],
                l = J.shared.setValue(h._tintRGB).toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
            r[o] = l, r[o + n] = l, r[o + n * 2] = l, r[o + n * 3] = l, o += n * 4
        }
    }
    destroy() {
        super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
    }
}
kh.extension = {
    name: "particle",
    type: D.RendererPlugin
};
U.add(kh);
var Qs = (e => (e[e.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", e[e.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", e))(Qs || {});
const ms = {
        willReadFrequently: !0
    },
    L = class {
        static get experimentalLetterSpacingSupported() {
            let e = L._experimentalLetterSpacingSupported;
            if (e !== void 0) {
                const t = R.ADAPTER.getCanvasRenderingContext2D().prototype;
                e = L._experimentalLetterSpacingSupported = "letterSpacing" in t || "textLetterSpacing" in t
            }
            return e
        }
        constructor(e, t, i, s, r, n, o, a, h) {
            this.text = e, this.style = t, this.width = i, this.height = s, this.lines = r, this.lineWidths = n, this.lineHeight = o, this.maxLineWidth = a, this.fontProperties = h
        }
        static measureText(e, t, i, s = L._canvas) {
            i = i ?? t.wordWrap;
            const r = t.toFontString(),
                n = L.measureFont(r);
            n.fontSize === 0 && (n.fontSize = t.fontSize, n.ascent = t.fontSize);
            const o = s.getContext("2d", ms);
            o.font = r;
            const h = (i ? L.wordWrap(e, t, s) : e).split(/(?:\r\n|\r|\n)/),
                l = new Array(h.length);
            let c = 0;
            for (let p = 0; p < h.length; p++) {
                const g = L._measureText(h[p], t.letterSpacing, o);
                l[p] = g, c = Math.max(c, g)
            }
            let u = c + t.strokeThickness;
            t.dropShadow && (u += t.dropShadowDistance);
            const d = t.lineHeight || n.fontSize + t.strokeThickness;
            let f = Math.max(d, n.fontSize + t.strokeThickness * 2) + (h.length - 1) * (d + t.leading);
            return t.dropShadow && (f += t.dropShadowDistance), new L(e, t, u, f, h, l, d + t.leading, c, n)
        }
        static _measureText(e, t, i) {
            let s = !1;
            L.experimentalLetterSpacingSupported && (L.experimentalLetterSpacing ? (i.letterSpacing = `${t}px`, i.textLetterSpacing = `${t}px`, s = !0) : (i.letterSpacing = "0px", i.textLetterSpacing = "0px"));
            let r = i.measureText(e).width;
            return r > 0 && (s ? r -= t : r += (L.graphemeSegmenter(e).length - 1) * t), r
        }
        static wordWrap(e, t, i = L._canvas) {
            const s = i.getContext("2d", ms);
            let r = 0,
                n = "",
                o = "";
            const a = Object.create(null),
                {
                    letterSpacing: h,
                    whiteSpace: l
                } = t,
                c = L.collapseSpaces(l),
                u = L.collapseNewlines(l);
            let d = !c;
            const f = t.wordWrapWidth + h,
                p = L.tokenize(e);
            for (let g = 0; g < p.length; g++) {
                let m = p[g];
                if (L.isNewline(m)) {
                    if (!u) {
                        o += L.addLine(n), d = !c, n = "", r = 0;
                        continue
                    }
                    m = " "
                }
                if (c) {
                    const v = L.isBreakingSpace(m),
                        _ = L.isBreakingSpace(n[n.length - 1]);
                    if (v && _) continue
                }
                const y = L.getFromCache(m, h, a, s);
                if (y > f)
                    if (n !== "" && (o += L.addLine(n), n = "", r = 0), L.canBreakWords(m, t.breakWords)) {
                        const v = L.wordWrapSplit(m);
                        for (let _ = 0; _ < v.length; _++) {
                            let x = v[_],
                                T = x,
                                P = 1;
                            for (; v[_ + P];) {
                                const E = v[_ + P];
                                if (!L.canBreakChars(T, E, m, _, t.breakWords)) x += E;
                                else break;
                                T = E, P++
                            }
                            _ += P - 1;
                            const S = L.getFromCache(x, h, a, s);
                            S + r > f && (o += L.addLine(n), d = !1, n = "", r = 0), n += x, r += S
                        }
                    } else {
                        n.length > 0 && (o += L.addLine(n), n = "", r = 0);
                        const v = g === p.length - 1;
                        o += L.addLine(m, !v), d = !1, n = "", r = 0
                    }
                else y + r > f && (d = !1, o += L.addLine(n), n = "", r = 0), (n.length > 0 || !L.isBreakingSpace(m) || d) && (n += m, r += y)
            }
            return o += L.addLine(n, !1), o
        }
        static addLine(e, t = !0) {
            return e = L.trimRight(e), e = t ? `${e}
` : e, e
        }
        static getFromCache(e, t, i, s) {
            let r = i[e];
            return typeof r != "number" && (r = L._measureText(e, t, s) + t, i[e] = r), r
        }
        static collapseSpaces(e) {
            return e === "normal" || e === "pre-line"
        }
        static collapseNewlines(e) {
            return e === "normal"
        }
        static trimRight(e) {
            if (typeof e != "string") return "";
            for (let t = e.length - 1; t >= 0; t--) {
                const i = e[t];
                if (!L.isBreakingSpace(i)) break;
                e = e.slice(0, -1)
            }
            return e
        }
        static isNewline(e) {
            return typeof e != "string" ? !1 : L._newlines.includes(e.charCodeAt(0))
        }
        static isBreakingSpace(e, t) {
            return typeof e != "string" ? !1 : L._breakingSpaces.includes(e.charCodeAt(0))
        }
        static tokenize(e) {
            const t = [];
            let i = "";
            if (typeof e != "string") return t;
            for (let s = 0; s < e.length; s++) {
                const r = e[s],
                    n = e[s + 1];
                if (L.isBreakingSpace(r, n) || L.isNewline(r)) {
                    i !== "" && (t.push(i), i = ""), t.push(r);
                    continue
                }
                i += r
            }
            return i !== "" && t.push(i), t
        }
        static canBreakWords(e, t) {
            return t
        }
        static canBreakChars(e, t, i, s, r) {
            return !0
        }
        static wordWrapSplit(e) {
            return L.graphemeSegmenter(e)
        }
        static measureFont(e) {
            if (L._fonts[e]) return L._fonts[e];
            const t = {
                    ascent: 0,
                    descent: 0,
                    fontSize: 0
                },
                i = L._canvas,
                s = L._context;
            s.font = e;
            const r = L.METRICS_STRING + L.BASELINE_SYMBOL,
                n = Math.ceil(s.measureText(r).width);
            let o = Math.ceil(s.measureText(L.BASELINE_SYMBOL).width);
            const a = Math.ceil(L.HEIGHT_MULTIPLIER * o);
            if (o = o * L.BASELINE_MULTIPLIER | 0, n === 0 || a === 0) return L._fonts[e] = t, t;
            i.width = n, i.height = a, s.fillStyle = "#f00", s.fillRect(0, 0, n, a), s.font = e, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText(r, 0, o);
            const h = s.getImageData(0, 0, n, a).data,
                l = h.length,
                c = n * 4;
            let u = 0,
                d = 0,
                f = !1;
            for (u = 0; u < o; ++u) {
                for (let p = 0; p < c; p += 4)
                    if (h[d + p] !== 255) {
                        f = !0;
                        break
                    } if (!f) d += c;
                else break
            }
            for (t.ascent = o - u, d = l - c, f = !1, u = a; u > o; --u) {
                for (let p = 0; p < c; p += 4)
                    if (h[d + p] !== 255) {
                        f = !0;
                        break
                    } if (!f) d -= c;
                else break
            }
            return t.descent = u - o, t.fontSize = t.ascent + t.descent, L._fonts[e] = t, t
        }
        static clearMetrics(e = "") {
            e ? delete L._fonts[e] : L._fonts = {}
        }
        static get _canvas() {
            if (!L.__canvas) {
                let e;
                try {
                    const t = new OffscreenCanvas(0, 0),
                        i = t.getContext("2d", ms);
                    if (i != null && i.measureText) return L.__canvas = t, t;
                    e = R.ADAPTER.createCanvas()
                } catch {
                    e = R.ADAPTER.createCanvas()
                }
                e.width = e.height = 10, L.__canvas = e
            }
            return L.__canvas
        }
        static get _context() {
            return L.__context || (L.__context = L._canvas.getContext("2d", ms)), L.__context
        }
    };
let vt = L;
vt.METRICS_STRING = "|ÉqÅ";
vt.BASELINE_SYMBOL = "M";
vt.BASELINE_MULTIPLIER = 1.4;
vt.HEIGHT_MULTIPLIER = 2;
vt.graphemeSegmenter = (() => {
    if (typeof(Intl == null ? void 0 : Intl.Segmenter) == "function") {
        const e = new Intl.Segmenter;
        return t => [...e.segment(t)].map(i => i.segment)
    }
    return e => [...e]
})();
vt.experimentalLetterSpacing = !1;
vt._fonts = {};
vt._newlines = [10, 13];
vt._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
const pm = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
    Ii = class {
        constructor(e) {
            this.styleID = 0, this.reset(), Lr(this, e, e)
        }
        clone() {
            const e = {};
            return Lr(e, this, Ii.defaultStyle), new Ii(e)
        }
        reset() {
            Lr(this, Ii.defaultStyle, Ii.defaultStyle)
        }
        get align() {
            return this._align
        }
        set align(e) {
            this._align !== e && (this._align = e, this.styleID++)
        }
        get breakWords() {
            return this._breakWords
        }
        set breakWords(e) {
            this._breakWords !== e && (this._breakWords = e, this.styleID++)
        }
        get dropShadow() {
            return this._dropShadow
        }
        set dropShadow(e) {
            this._dropShadow !== e && (this._dropShadow = e, this.styleID++)
        }
        get dropShadowAlpha() {
            return this._dropShadowAlpha
        }
        set dropShadowAlpha(e) {
            this._dropShadowAlpha !== e && (this._dropShadowAlpha = e, this.styleID++)
        }
        get dropShadowAngle() {
            return this._dropShadowAngle
        }
        set dropShadowAngle(e) {
            this._dropShadowAngle !== e && (this._dropShadowAngle = e, this.styleID++)
        }
        get dropShadowBlur() {
            return this._dropShadowBlur
        }
        set dropShadowBlur(e) {
            this._dropShadowBlur !== e && (this._dropShadowBlur = e, this.styleID++)
        }
        get dropShadowColor() {
            return this._dropShadowColor
        }
        set dropShadowColor(e) {
            const t = Or(e);
            this._dropShadowColor !== t && (this._dropShadowColor = t, this.styleID++)
        }
        get dropShadowDistance() {
            return this._dropShadowDistance
        }
        set dropShadowDistance(e) {
            this._dropShadowDistance !== e && (this._dropShadowDistance = e, this.styleID++)
        }
        get fill() {
            return this._fill
        }
        set fill(e) {
            const t = Or(e);
            this._fill !== t && (this._fill = t, this.styleID++)
        }
        get fillGradientType() {
            return this._fillGradientType
        }
        set fillGradientType(e) {
            this._fillGradientType !== e && (this._fillGradientType = e, this.styleID++)
        }
        get fillGradientStops() {
            return this._fillGradientStops
        }
        set fillGradientStops(e) {
            mm(this._fillGradientStops, e) || (this._fillGradientStops = e, this.styleID++)
        }
        get fontFamily() {
            return this._fontFamily
        }
        set fontFamily(e) {
            this.fontFamily !== e && (this._fontFamily = e, this.styleID++)
        }
        get fontSize() {
            return this._fontSize
        }
        set fontSize(e) {
            this._fontSize !== e && (this._fontSize = e, this.styleID++)
        }
        get fontStyle() {
            return this._fontStyle
        }
        set fontStyle(e) {
            this._fontStyle !== e && (this._fontStyle = e, this.styleID++)
        }
        get fontVariant() {
            return this._fontVariant
        }
        set fontVariant(e) {
            this._fontVariant !== e && (this._fontVariant = e, this.styleID++)
        }
        get fontWeight() {
            return this._fontWeight
        }
        set fontWeight(e) {
            this._fontWeight !== e && (this._fontWeight = e, this.styleID++)
        }
        get letterSpacing() {
            return this._letterSpacing
        }
        set letterSpacing(e) {
            this._letterSpacing !== e && (this._letterSpacing = e, this.styleID++)
        }
        get lineHeight() {
            return this._lineHeight
        }
        set lineHeight(e) {
            this._lineHeight !== e && (this._lineHeight = e, this.styleID++)
        }
        get leading() {
            return this._leading
        }
        set leading(e) {
            this._leading !== e && (this._leading = e, this.styleID++)
        }
        get lineJoin() {
            return this._lineJoin
        }
        set lineJoin(e) {
            this._lineJoin !== e && (this._lineJoin = e, this.styleID++)
        }
        get miterLimit() {
            return this._miterLimit
        }
        set miterLimit(e) {
            this._miterLimit !== e && (this._miterLimit = e, this.styleID++)
        }
        get padding() {
            return this._padding
        }
        set padding(e) {
            this._padding !== e && (this._padding = e, this.styleID++)
        }
        get stroke() {
            return this._stroke
        }
        set stroke(e) {
            const t = Or(e);
            this._stroke !== t && (this._stroke = t, this.styleID++)
        }
        get strokeThickness() {
            return this._strokeThickness
        }
        set strokeThickness(e) {
            this._strokeThickness !== e && (this._strokeThickness = e, this.styleID++)
        }
        get textBaseline() {
            return this._textBaseline
        }
        set textBaseline(e) {
            this._textBaseline !== e && (this._textBaseline = e, this.styleID++)
        }
        get trim() {
            return this._trim
        }
        set trim(e) {
            this._trim !== e && (this._trim = e, this.styleID++)
        }
        get whiteSpace() {
            return this._whiteSpace
        }
        set whiteSpace(e) {
            this._whiteSpace !== e && (this._whiteSpace = e, this.styleID++)
        }
        get wordWrap() {
            return this._wordWrap
        }
        set wordWrap(e) {
            this._wordWrap !== e && (this._wordWrap = e, this.styleID++)
        }
        get wordWrapWidth() {
            return this._wordWrapWidth
        }
        set wordWrapWidth(e) {
            this._wordWrapWidth !== e && (this._wordWrapWidth = e, this.styleID++)
        }
        toFontString() {
            const e = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
            let t = this.fontFamily;
            Array.isArray(this.fontFamily) || (t = this.fontFamily.split(","));
            for (let i = t.length - 1; i >= 0; i--) {
                let s = t[i].trim();
                !/([\"\'])[^\'\"]+\1/.test(s) && !pm.includes(s) && (s = `"${s}"`), t[i] = s
            }
            return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${e} ${t.join(",")}`
        }
    };
let fe = Ii;
fe.defaultStyle = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fillGradientType: Qs.LINEAR_VERTICAL,
    fillGradientStops: [],
    fontFamily: "monospace",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    leading: 0,
    letterSpacing: 0,
    lineHeight: 0,
    lineJoin: "miter",
    miterLimit: 10,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    textBaseline: "alphabetic",
    trim: !1,
    whiteSpace: "pre",
    wordWrap: !1,
    wordWrapWidth: 100
};

function Or(e) {
    const t = J.shared;
    return Array.isArray(e) ? e.map(i => t.setValue(i).toHex()) : t.setValue(e).toHex()
}

function mm(e, t) {
    if (!Array.isArray(e) || !Array.isArray(t) || e.length !== t.length) return !1;
    for (let i = 0; i < e.length; ++i)
        if (e[i] !== t[i]) return !1;
    return !0
}

function Lr(e, t, i) {
    for (const s in i) Array.isArray(t[s]) ? e[s] = t[s].slice() : e[s] = t[s]
}
const gm = {
        texture: !0,
        children: !1,
        baseTexture: !0
    },
    xn = class extends Xe {
        constructor(e, t, i) {
            let s = !1;
            i || (i = R.ADAPTER.createCanvas(), s = !0), i.width = 3, i.height = 3;
            const r = O.from(i);
            r.orig = new z, r.trim = new z, super(r), this._ownCanvas = s, this.canvas = i, this.context = i.getContext("2d", {
                willReadFrequently: !0
            }), this._resolution = xn.defaultResolution ?? R.RESOLUTION, this._autoResolution = xn.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = e, this.style = t, this.localStyleID = -1
        }
        static get experimentalLetterSpacing() {
            return vt.experimentalLetterSpacing
        }
        static set experimentalLetterSpacing(e) {
            Y("7.1.0", "Text.experimentalLetterSpacing is deprecated, use TextMetrics.experimentalLetterSpacing"), vt.experimentalLetterSpacing = e
        }
        updateText(e) {
            const t = this._style;
            if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && e) return;
            this._font = this._style.toFontString();
            const i = this.context,
                s = vt.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
                r = s.width,
                n = s.height,
                o = s.lines,
                a = s.lineHeight,
                h = s.lineWidths,
                l = s.maxLineWidth,
                c = s.fontProperties;
            this.canvas.width = Math.ceil(Math.ceil(Math.max(1, r) + t.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, n) + t.padding * 2) * this._resolution), i.scale(this._resolution, this._resolution), i.clearRect(0, 0, this.canvas.width, this.canvas.height), i.font = this._font, i.lineWidth = t.strokeThickness, i.textBaseline = t.textBaseline, i.lineJoin = t.lineJoin, i.miterLimit = t.miterLimit;
            let u, d;
            const f = t.dropShadow ? 2 : 1;
            for (let p = 0; p < f; ++p) {
                const g = t.dropShadow && p === 0,
                    m = g ? Math.ceil(Math.max(1, n) + t.padding * 2) : 0,
                    y = m * this._resolution;
                if (g) {
                    i.fillStyle = "black", i.strokeStyle = "black";
                    const _ = t.dropShadowColor,
                        x = t.dropShadowBlur * this._resolution,
                        T = t.dropShadowDistance * this._resolution;
                    i.shadowColor = J.shared.setValue(_).setAlpha(t.dropShadowAlpha).toRgbaString(), i.shadowBlur = x, i.shadowOffsetX = Math.cos(t.dropShadowAngle) * T, i.shadowOffsetY = Math.sin(t.dropShadowAngle) * T + y
                } else i.fillStyle = this._generateFillStyle(t, o, s), i.strokeStyle = t.stroke, i.shadowColor = "black", i.shadowBlur = 0, i.shadowOffsetX = 0, i.shadowOffsetY = 0;
                let v = (a - c.fontSize) / 2;
                a - c.fontSize < 0 && (v = 0);
                for (let _ = 0; _ < o.length; _++) u = t.strokeThickness / 2, d = t.strokeThickness / 2 + _ * a + c.ascent + v, t.align === "right" ? u += l - h[_] : t.align === "center" && (u += (l - h[_]) / 2), t.stroke && t.strokeThickness && this.drawLetterSpacing(o[_], u + t.padding, d + t.padding - m, !0), t.fill && this.drawLetterSpacing(o[_], u + t.padding, d + t.padding - m)
            }
            this.updateTexture()
        }
        drawLetterSpacing(e, t, i, s = !1) {
            const n = this._style.letterSpacing;
            let o = !1;
            if (vt.experimentalLetterSpacingSupported && (vt.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`, this.context.textLetterSpacing = `${n}px`, o = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), n === 0 || o) {
                s ? this.context.strokeText(e, t, i) : this.context.fillText(e, t, i);
                return
            }
            let a = t;
            const h = vt.graphemeSegmenter(e);
            let l = this.context.measureText(e).width,
                c = 0;
            for (let u = 0; u < h.length; ++u) {
                const d = h[u];
                s ? this.context.strokeText(d, a, i) : this.context.fillText(d, a, i);
                let f = "";
                for (let p = u + 1; p < h.length; ++p) f += h[p];
                c = this.context.measureText(f).width, a += l - c + n, l = c
            }
        }
        updateTexture() {
            const e = this.canvas;
            if (this._style.trim) {
                const n = qu(e);
                n.data && (e.width = n.width, e.height = n.height, this.context.putImageData(n.data, 0, 0))
            }
            const t = this._texture,
                i = this._style,
                s = i.trim ? 0 : i.padding,
                r = t.baseTexture;
            t.trim.width = t._frame.width = e.width / this._resolution, t.trim.height = t._frame.height = e.height / this._resolution, t.trim.x = -s, t.trim.y = -s, t.orig.width = t._frame.width - s * 2, t.orig.height = t._frame.height - s * 2, this._onTextureUpdate(), r.setRealSize(e.width, e.height, this._resolution), t.updateUvs(), this.dirty = !1
        }
        _render(e) {
            this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._render(e)
        }
        updateTransform() {
            this.updateText(!0), super.updateTransform()
        }
        getBounds(e, t) {
            return this.updateText(!0), this._textureID === -1 && (e = !1), super.getBounds(e, t)
        }
        getLocalBounds(e) {
            return this.updateText(!0), super.getLocalBounds.call(this, e)
        }
        _calculateBounds() {
            this.calculateVertices(), this._bounds.addQuad(this.vertexData)
        }
        _generateFillStyle(e, t, i) {
            const s = e.fill;
            if (Array.isArray(s)) {
                if (s.length === 1) return s[0]
            } else return s;
            let r;
            const n = e.dropShadow ? e.dropShadowDistance : 0,
                o = e.padding || 0,
                a = this.canvas.width / this._resolution - n - o * 2,
                h = this.canvas.height / this._resolution - n - o * 2,
                l = s.slice(),
                c = e.fillGradientStops.slice();
            if (!c.length) {
                const u = l.length + 1;
                for (let d = 1; d < u; ++d) c.push(d / u)
            }
            if (l.unshift(s[0]), c.unshift(0), l.push(s[s.length - 1]), c.push(1), e.fillGradientType === Qs.LINEAR_VERTICAL) {
                r = this.context.createLinearGradient(a / 2, o, a / 2, h + o);
                const u = i.fontProperties.fontSize + e.strokeThickness;
                for (let d = 0; d < t.length; d++) {
                    const f = i.lineHeight * (d - 1) + u,
                        p = i.lineHeight * d;
                    let g = p;
                    d > 0 && f > p && (g = (p + f) / 2);
                    const m = p + u,
                        y = i.lineHeight * (d + 1);
                    let v = m;
                    d + 1 < t.length && y < m && (v = (m + y) / 2);
                    const _ = (v - g) / h;
                    for (let x = 0; x < l.length; x++) {
                        let T = 0;
                        typeof c[x] == "number" ? T = c[x] : T = x / l.length;
                        let P = Math.min(1, Math.max(0, g / h + T * _));
                        P = Number(P.toFixed(5)), r.addColorStop(P, l[x])
                    }
                }
            } else {
                r = this.context.createLinearGradient(o, h / 2, a + o, h / 2);
                const u = l.length + 1;
                let d = 1;
                for (let f = 0; f < l.length; f++) {
                    let p;
                    typeof c[f] == "number" ? p = c[f] : p = d / u, r.addColorStop(p, l[f]), d++
                }
            }
            return r
        }
        destroy(e) {
            typeof e == "boolean" && (e = {
                children: e
            }), e = Object.assign({}, gm, e), super.destroy(e), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
        }
        get width() {
            return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
        }
        set width(e) {
            this.updateText(!0);
            const t = ve(this.scale.x) || 1;
            this.scale.x = t * e / this._texture.orig.width, this._width = e
        }
        get height() {
            return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
        }
        set height(e) {
            this.updateText(!0);
            const t = ve(this.scale.y) || 1;
            this.scale.y = t * e / this._texture.orig.height, this._height = e
        }
        get style() {
            return this._style
        }
        set style(e) {
            e = e || {}, e instanceof fe ? this._style = e : this._style = new fe(e), this.localStyleID = -1, this.dirty = !0
        }
        get text() {
            return this._text
        }
        set text(e) {
            e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0)
        }
        get resolution() {
            return this._resolution
        }
        set resolution(e) {
            this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0)
        }
    };
let Ae = xn;
Ae.defaultAutoResolution = !0;
class _m {
    constructor(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0
    }
    beginFrame() {
        this.itemsLeft = this.maxItemsPerFrame
    }
    allowedToUpload() {
        return this.itemsLeft-- > 0
    }
}

function ym(e, t) {
    var s;
    let i = !1;
    if ((s = e == null ? void 0 : e._textures) != null && s.length) {
        for (let r = 0; r < e._textures.length; r++)
            if (e._textures[r] instanceof O) {
                const n = e._textures[r].baseTexture;
                t.includes(n) || (t.push(n), i = !0)
            }
    }
    return i
}

function vm(e, t) {
    if (e.baseTexture instanceof V) {
        const i = e.baseTexture;
        return t.includes(i) || t.push(i), !0
    }
    return !1
}

function xm(e, t) {
    if (e._texture && e._texture instanceof O) {
        const i = e._texture.baseTexture;
        return t.includes(i) || t.push(i), !0
    }
    return !1
}

function bm(e, t) {
    return t instanceof Ae ? (t.updateText(!0), !0) : !1
}

function Em(e, t) {
    if (t instanceof fe) {
        const i = t.toFontString();
        return vt.measureFont(i), !0
    }
    return !1
}

function Tm(e, t) {
    if (e instanceof Ae) {
        t.includes(e.style) || t.push(e.style), t.includes(e) || t.push(e);
        const i = e._texture.baseTexture;
        return t.includes(i) || t.push(i), !0
    }
    return !1
}

function wm(e, t) {
    return e instanceof fe ? (t.includes(e) || t.push(e), !0) : !1
}
const Gh = class {
    constructor(e) {
        this.limiter = new _m(Gh.uploadsPerFrame), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = () => {
            this.queue && this.prepareItems()
        }, this.registerFindHook(Tm), this.registerFindHook(wm), this.registerFindHook(ym), this.registerFindHook(vm), this.registerFindHook(xm), this.registerUploadHook(bm), this.registerUploadHook(Em)
    }
    upload(e) {
        return new Promise(t => {
            e && this.add(e), this.queue.length ? (this.completes.push(t), this.ticking || (this.ticking = !0, St.system.addOnce(this.tick, this, He.UTILITY))) : t()
        })
    }
    tick() {
        setTimeout(this.delayedTick, 0)
    }
    prepareItems() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
            const e = this.queue[0];
            let t = !1;
            if (e && !e._destroyed) {
                for (let i = 0, s = this.uploadHooks.length; i < s; i++)
                    if (this.uploadHooks[i](this.uploadHookHelper, e)) {
                        this.queue.shift(), t = !0;
                        break
                    }
            }
            t || this.queue.shift()
        }
        if (this.queue.length) St.system.addOnce(this.tick, this, He.UTILITY);
        else {
            this.ticking = !1;
            const e = this.completes.slice(0);
            this.completes.length = 0;
            for (let t = 0, i = e.length; t < i; t++) e[t]()
        }
    }
    registerFindHook(e) {
        return e && this.addHooks.push(e), this
    }
    registerUploadHook(e) {
        return e && this.uploadHooks.push(e), this
    }
    add(e) {
        for (let t = 0, i = this.addHooks.length; t < i && !this.addHooks[t](e, this.queue); t++);
        if (e instanceof Et)
            for (let t = e.children.length - 1; t >= 0; t--) this.add(e.children[t]);
        return this
    }
    destroy() {
        this.ticking && St.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
    }
};
let Us = Gh;
Us.uploadsPerFrame = 4;
Object.defineProperties(R, {
    UPLOADS_PER_FRAME: {
        get() {
            return Us.uploadsPerFrame
        },
        set(e) {
            Y("7.1.0", "settings.UPLOADS_PER_FRAME is deprecated, use prepare.BasePrepare.uploadsPerFrame"), Us.uploadsPerFrame = e
        }
    }
});

function Hh(e, t) {
    return t instanceof V ? (t._glTextures[e.CONTEXT_UID] || e.texture.bind(t), !0) : !1
}

function Sm(e, t) {
    if (!(t instanceof Ee)) return !1;
    const {
        geometry: i
    } = t;
    t.finishPoly(), i.updateBatches();
    const {
        batches: s
    } = i;
    for (let r = 0; r < s.length; r++) {
        const {
            texture: n
        } = s[r].style;
        n && Hh(e, n.baseTexture)
    }
    return i.batchable || e.geometry.bind(i, t._resolveDirectShader(e)), !0
}

function Am(e, t) {
    return e instanceof Ee ? (t.push(e), !0) : !1
}
class $h extends Us {
    constructor(t) {
        super(t), this.uploadHookHelper = this.renderer, this.registerFindHook(Am), this.registerUploadHook(Hh), this.registerUploadHook(Sm)
    }
}
$h.extension = {
    name: "prepare",
    type: D.RendererSystem
};
U.add($h);
var Cm = `#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,
    Im = `#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
    Pm = `#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,
    fa = `#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,
    Rm = `#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`;
const gs = new it;
class Vh extends Xs {
    constructor(t) {
        super(t), t.runners.contextChange.add(this), this.quad = new rh, this.state = pe.for2d()
    }
    contextChange() {
        const t = this.renderer,
            i = {
                globals: t.globalUniforms
            };
        this.simpleShader = se.from(fa, Rm, i), this.shader = t.context.webGLVersion > 1 ? se.from(Im, Cm, i) : se.from(fa, Pm, i)
    }
    render(t) {
        const i = this.renderer,
            s = this.quad;
        let r = s.vertices;
        r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
        const n = t.uvRespectAnchor ? t.anchor.x : 0,
            o = t.uvRespectAnchor ? t.anchor.y : 0;
        r = s.uvs, r[0] = r[6] = -n, r[1] = r[3] = -o, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - o, s.invalidate();
        const a = t._texture,
            h = a.baseTexture,
            l = h.alphaMode > 0,
            c = t.tileTransform.localTransform,
            u = t.uvMatrix;
        let d = h.isPowerOfTwo && a.frame.width === h.width && a.frame.height === h.height;
        d && (h._glTextures[i.CONTEXT_UID] ? d = h.wrapMode !== be.CLAMP : h.wrapMode === be.CLAMP && (h.wrapMode = be.REPEAT));
        const f = d ? this.simpleShader : this.shader,
            p = a.width,
            g = a.height,
            m = t._width,
            y = t._height;
        gs.set(c.a * p / m, c.b * p / y, c.c * g / m, c.d * g / y, c.tx / m, c.ty / y), gs.invert(), d ? gs.prepend(u.mapCoord) : (f.uniforms.uMapCoord = u.mapCoord.toArray(!0), f.uniforms.uClampFrame = u.uClampFrame, f.uniforms.uClampOffset = u.uClampOffset), f.uniforms.uTransform = gs.toArray(!0), f.uniforms.uColor = J.shared.setValue(t.tint).premultiply(t.worldAlpha, l).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = a, i.shader.bind(f), i.geometry.bind(s), this.state.blendMode = $a(t.blendMode, l), i.state.set(this.state), i.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
    }
}
Vh.extension = {
    name: "tilingSprite",
    type: D.RendererPlugin
};
U.add(Vh);
const Pi = class {
    constructor(e, t, i = null) {
        this.linkedSheets = [], this._texture = e instanceof O ? e : null, this.baseTexture = e instanceof V ? e : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = t;
        const s = this.baseTexture.resource;
        this.resolution = this._updateResolution(i || (s ? s.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
    }
    _updateResolution(e = null) {
        const {
            scale: t
        } = this.data.meta;
        let i = Te(e, null);
        return i === null && (i = parseFloat(t ?? "1")), i !== 1 && this.baseTexture.setResolution(i), i
    }
    parse() {
        return new Promise(e => {
            this._callback = e, this._batchIndex = 0, this._frameKeys.length <= Pi.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
        })
    }
    _processFrames(e) {
        let t = e;
        const i = Pi.BATCH_SIZE;
        for (; t - e < i && t < this._frameKeys.length;) {
            const s = this._frameKeys[t],
                r = this._frames[s],
                n = r.frame;
            if (n) {
                let o = null,
                    a = null;
                const h = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame,
                    l = new z(0, 0, Math.floor(h.w) / this.resolution, Math.floor(h.h) / this.resolution);
                r.rotated ? o = new z(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.h) / this.resolution, Math.floor(n.w) / this.resolution) : o = new z(Math.floor(n.x) / this.resolution, Math.floor(n.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution), r.trimmed !== !1 && r.spriteSourceSize && (a = new z(Math.floor(r.spriteSourceSize.x) / this.resolution, Math.floor(r.spriteSourceSize.y) / this.resolution, Math.floor(n.w) / this.resolution, Math.floor(n.h) / this.resolution)), this.textures[s] = new O(this.baseTexture, o, l, a, r.rotated ? 2 : 0, r.anchor, r.borders), O.addToCache(this.textures[s], s)
            }
            t++
        }
    }
    _processAnimations() {
        const e = this.data.animations || {};
        for (const t in e) {
            this.animations[t] = [];
            for (let i = 0; i < e[t].length; i++) {
                const s = e[t][i];
                this.animations[t].push(this.textures[s])
            }
        }
    }
    _parseComplete() {
        const e = this._callback;
        this._callback = null, this._batchIndex = 0, e.call(this, this.textures)
    }
    _nextBatch() {
        this._processFrames(this._batchIndex * Pi.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
            this._batchIndex * Pi.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete())
        }, 0)
    }
    destroy(e = !1) {
        var t;
        for (const i in this.textures) this.textures[i].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, e && ((t = this._texture) == null || t.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = []
    }
};
let bn = Pi;
bn.BATCH_SIZE = 1e3;
const Mm = ["jpg", "png", "jpeg", "avif", "webp"];

function Xh(e, t, i) {
    const s = {};
    if (e.forEach(r => {
            s[r] = t
        }), Object.keys(t.textures).forEach(r => {
            s[r] = t.textures[r]
        }), !i) {
        const r = At.dirname(e[0]);
        t.linkedSheets.forEach((n, o) => {
            const a = Xh([`${r}/${t.data.meta.related_multi_packs[o]}`], n, !0);
            Object.assign(s, a)
        })
    }
    return s
}
const Dm = {
    extension: D.Asset,
    cache: {
        test: e => e instanceof bn,
        getCacheableAssets: (e, t) => Xh(e, t, !1)
    },
    resolver: {
        test: e => {
            const i = e.split("?")[0].split("."),
                s = i.pop(),
                r = i.pop();
            return s === "json" && Mm.includes(r)
        },
        parse: e => {
            var i;
            const t = e.split(".");
            return {
                resolution: parseFloat(((i = R.RETINA_PREFIX.exec(e)) == null ? void 0 : i[1]) ?? "1"),
                format: t[t.length - 2],
                src: e
            }
        }
    },
    loader: {
        name: "spritesheetLoader",
        extension: {
            type: D.LoadParser,
            priority: ne.Normal
        },
        async testParse(e, t) {
            return At.extname(t.src).toLowerCase() === ".json" && !!e.frames
        },
        async parse(e, t, i) {
            var l, c;
            let s = At.dirname(t.src);
            s && s.lastIndexOf("/") !== s.length - 1 && (s += "/");
            let r = s + e.meta.image;
            r = _n(r, t.src);
            const o = (await i.load([r]))[r],
                a = new bn(o.baseTexture, e, t.src);
            await a.parse();
            const h = (l = e == null ? void 0 : e.meta) == null ? void 0 : l.related_multi_packs;
            if (Array.isArray(h)) {
                const u = [];
                for (const f of h) {
                    if (typeof f != "string") continue;
                    let p = s + f;
                    (c = t.data) != null && c.ignoreMultiPack || (p = _n(p, t.src), u.push(i.load({
                        src: p,
                        data: {
                            ignoreMultiPack: !0
                        }
                    })))
                }
                const d = await Promise.all(u);
                a.linkedSheets = d, d.forEach(f => {
                    f.linkedSheets = [a].concat(a.linkedSheets.filter(p => p !== f))
                })
            }
            return a
        },
        unload(e) {
            e.destroy(!0)
        }
    }
};
U.add(Dm);
class ks {
    constructor() {
        this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = []
    }
}
class Es {
    static test(t) {
        return typeof t == "string" && t.startsWith("info face=")
    }
    static parse(t) {
        const i = t.match(/^[a-z]+\s+.+$/gm),
            s = {
                info: [],
                common: [],
                page: [],
                char: [],
                chars: [],
                kerning: [],
                kernings: [],
                distanceField: []
            };
        for (const n in i) {
            const o = i[n].match(/^[a-z]+/gm)[0],
                a = i[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
                h = {};
            for (const l in a) {
                const c = a[l].split("="),
                    u = c[0],
                    d = c[1].replace(/"/gm, ""),
                    f = parseFloat(d),
                    p = isNaN(f) ? d : f;
                h[u] = p
            }
            s[o].push(h)
        }
        const r = new ks;
        return s.info.forEach(n => r.info.push({
            face: n.face,
            size: parseInt(n.size, 10)
        })), s.common.forEach(n => r.common.push({
            lineHeight: parseInt(n.lineHeight, 10)
        })), s.page.forEach(n => r.page.push({
            id: parseInt(n.id, 10),
            file: n.file
        })), s.char.forEach(n => r.char.push({
            id: parseInt(n.id, 10),
            page: parseInt(n.page, 10),
            x: parseInt(n.x, 10),
            y: parseInt(n.y, 10),
            width: parseInt(n.width, 10),
            height: parseInt(n.height, 10),
            xoffset: parseInt(n.xoffset, 10),
            yoffset: parseInt(n.yoffset, 10),
            xadvance: parseInt(n.xadvance, 10)
        })), s.kerning.forEach(n => r.kerning.push({
            first: parseInt(n.first, 10),
            second: parseInt(n.second, 10),
            amount: parseInt(n.amount, 10)
        })), s.distanceField.forEach(n => r.distanceField.push({
            distanceRange: parseInt(n.distanceRange, 10),
            fieldType: n.fieldType
        })), r
    }
}
class En {
    static test(t) {
        const i = t;
        return "getElementsByTagName" in i && i.getElementsByTagName("page").length && i.getElementsByTagName("info")[0].getAttribute("face") !== null
    }
    static parse(t) {
        const i = new ks,
            s = t.getElementsByTagName("info"),
            r = t.getElementsByTagName("common"),
            n = t.getElementsByTagName("page"),
            o = t.getElementsByTagName("char"),
            a = t.getElementsByTagName("kerning"),
            h = t.getElementsByTagName("distanceField");
        for (let l = 0; l < s.length; l++) i.info.push({
            face: s[l].getAttribute("face"),
            size: parseInt(s[l].getAttribute("size"), 10)
        });
        for (let l = 0; l < r.length; l++) i.common.push({
            lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10)
        });
        for (let l = 0; l < n.length; l++) i.page.push({
            id: parseInt(n[l].getAttribute("id"), 10) || 0,
            file: n[l].getAttribute("file")
        });
        for (let l = 0; l < o.length; l++) {
            const c = o[l];
            i.char.push({
                id: parseInt(c.getAttribute("id"), 10),
                page: parseInt(c.getAttribute("page"), 10) || 0,
                x: parseInt(c.getAttribute("x"), 10),
                y: parseInt(c.getAttribute("y"), 10),
                width: parseInt(c.getAttribute("width"), 10),
                height: parseInt(c.getAttribute("height"), 10),
                xoffset: parseInt(c.getAttribute("xoffset"), 10),
                yoffset: parseInt(c.getAttribute("yoffset"), 10),
                xadvance: parseInt(c.getAttribute("xadvance"), 10)
            })
        }
        for (let l = 0; l < a.length; l++) i.kerning.push({
            first: parseInt(a[l].getAttribute("first"), 10),
            second: parseInt(a[l].getAttribute("second"), 10),
            amount: parseInt(a[l].getAttribute("amount"), 10)
        });
        for (let l = 0; l < h.length; l++) i.distanceField.push({
            fieldType: h[l].getAttribute("fieldType"),
            distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10)
        });
        return i
    }
}
class Tn {
    static test(t) {
        return typeof t == "string" && t.includes("<font>") ? En.test(R.ADAPTER.parseXML(t)) : !1
    }
    static parse(t) {
        return En.parse(R.ADAPTER.parseXML(t))
    }
}
const Nr = [Es, En, Tn];

function Bm(e) {
    for (let t = 0; t < Nr.length; t++)
        if (Nr[t].test(e)) return Nr[t];
    return null
}

function Fm(e, t, i, s, r, n) {
    const o = i.fill;
    if (Array.isArray(o)) {
        if (o.length === 1) return o[0]
    } else return o;
    let a;
    const h = i.dropShadow ? i.dropShadowDistance : 0,
        l = i.padding || 0,
        c = e.width / s - h - l * 2,
        u = e.height / s - h - l * 2,
        d = o.slice(),
        f = i.fillGradientStops.slice();
    if (!f.length) {
        const p = d.length + 1;
        for (let g = 1; g < p; ++g) f.push(g / p)
    }
    if (d.unshift(o[0]), f.unshift(0), d.push(o[o.length - 1]), f.push(1), i.fillGradientType === Qs.LINEAR_VERTICAL) {
        a = t.createLinearGradient(c / 2, l, c / 2, u + l);
        let p = 0;
        const m = (n.fontProperties.fontSize + i.strokeThickness) / u;
        for (let y = 0; y < r.length; y++) {
            const v = n.lineHeight * y;
            for (let _ = 0; _ < d.length; _++) {
                let x = 0;
                typeof f[_] == "number" ? x = f[_] : x = _ / d.length;
                const T = v / u + x * m;
                let P = Math.max(p, T);
                P = Math.min(P, 1), a.addColorStop(P, d[_]), p = P
            }
        }
    } else {
        a = t.createLinearGradient(l, u / 2, c + l, u / 2);
        const p = d.length + 1;
        let g = 1;
        for (let m = 0; m < d.length; m++) {
            let y;
            typeof f[m] == "number" ? y = f[m] : y = g / p, a.addColorStop(y, d[m]), g++
        }
    }
    return a
}

function Om(e, t, i, s, r, n, o) {
    const a = i.text,
        h = i.fontProperties;
    t.translate(s, r), t.scale(n, n);
    const l = o.strokeThickness / 2,
        c = -(o.strokeThickness / 2);
    if (t.font = o.toFontString(), t.lineWidth = o.strokeThickness, t.textBaseline = o.textBaseline, t.lineJoin = o.lineJoin, t.miterLimit = o.miterLimit, t.fillStyle = Fm(e, t, o, n, [a], i), t.strokeStyle = o.stroke, o.dropShadow) {
        const u = o.dropShadowColor,
            d = o.dropShadowBlur * n,
            f = o.dropShadowDistance * n;
        t.shadowColor = J.shared.setValue(u).setAlpha(o.dropShadowAlpha).toRgbaString(), t.shadowBlur = d, t.shadowOffsetX = Math.cos(o.dropShadowAngle) * f, t.shadowOffsetY = Math.sin(o.dropShadowAngle) * f
    } else t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
    o.stroke && o.strokeThickness && t.strokeText(a, l, c + i.lineHeight - h.descent), o.fill && t.fillText(a, l, c + i.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)"
}

function Ts(e) {
    return e.codePointAt ? e.codePointAt(0) : e.charCodeAt(0)
}

function zh(e) {
    return Array.from ? Array.from(e) : e.split("")
}

function Lm(e) {
    typeof e == "string" && (e = [e]);
    const t = [];
    for (let i = 0, s = e.length; i < s; i++) {
        const r = e[i];
        if (Array.isArray(r)) {
            if (r.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
            const n = r[0].charCodeAt(0),
                o = r[1].charCodeAt(0);
            if (o < n) throw new Error("[BitmapFont]: Invalid character range.");
            for (let a = n, h = o; a <= h; a++) t.push(String.fromCharCode(a))
        } else t.push(...zh(r))
    }
    if (t.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
    return t
}
const kt = class {
    constructor(e, t, i) {
        var l;
        const [s] = e.info, [r] = e.common, [n] = e.page, [o] = e.distanceField, a = Te(n.file), h = {};
        this._ownsTextures = i, this.font = s.face, this.size = s.size, this.lineHeight = r.lineHeight / a, this.chars = {}, this.pageTextures = h;
        for (let c = 0; c < e.page.length; c++) {
            const {
                id: u,
                file: d
            } = e.page[c];
            h[u] = t instanceof Array ? t[c] : t[d], o != null && o.fieldType && o.fieldType !== "none" && (h[u].baseTexture.alphaMode = jt.NO_PREMULTIPLIED_ALPHA, h[u].baseTexture.mipmap = re.OFF)
        }
        for (let c = 0; c < e.char.length; c++) {
            const {
                id: u,
                page: d
            } = e.char[c];
            let {
                x: f,
                y: p,
                width: g,
                height: m,
                xoffset: y,
                yoffset: v,
                xadvance: _
            } = e.char[c];
            f /= a, p /= a, g /= a, m /= a, y /= a, v /= a, _ /= a;
            const x = new z(f + h[d].frame.x / a, p + h[d].frame.y / a, g, m);
            this.chars[u] = {
                xOffset: y,
                yOffset: v,
                xAdvance: _,
                kerning: {},
                texture: new O(h[d].baseTexture, x),
                page: d
            }
        }
        for (let c = 0; c < e.kerning.length; c++) {
            let {
                first: u,
                second: d,
                amount: f
            } = e.kerning[c];
            u /= a, d /= a, f /= a, this.chars[d] && (this.chars[d].kerning[u] = f)
        }
        this.distanceFieldRange = o == null ? void 0 : o.distanceRange, this.distanceFieldType = ((l = o == null ? void 0 : o.fieldType) == null ? void 0 : l.toLowerCase()) ?? "none"
    }
    destroy() {
        for (const e in this.chars) this.chars[e].texture.destroy(), this.chars[e].texture = null;
        for (const e in this.pageTextures) this._ownsTextures && this.pageTextures[e].destroy(!0), this.pageTextures[e] = null;
        this.chars = null, this.pageTextures = null
    }
    static install(e, t, i) {
        let s;
        if (e instanceof ks) s = e;
        else {
            const n = Bm(e);
            if (!n) throw new Error("Unrecognized data format for font.");
            s = n.parse(e)
        }
        t instanceof O && (t = [t]);
        const r = new kt(s, t, i);
        return kt.available[r.font] = r, r
    }
    static uninstall(e) {
        const t = kt.available[e];
        if (!t) throw new Error(`No font found named '${e}'`);
        t.destroy(), delete kt.available[e]
    }
    static from(e, t, i) {
        if (!e) throw new Error("[BitmapFont] Property `name` is required.");
        const {
            chars: s,
            padding: r,
            resolution: n,
            textureWidth: o,
            textureHeight: a,
            ...h
        } = Object.assign({}, kt.defaultOptions, i), l = Lm(s), c = t instanceof fe ? t : new fe(t), u = o, d = new ks;
        d.info[0] = {
            face: c.fontFamily,
            size: c.fontSize
        }, d.common[0] = {
            lineHeight: c.fontSize
        };
        let f = 0,
            p = 0,
            g, m, y, v = 0;
        const _ = [];
        for (let T = 0; T < l.length; T++) {
            g || (g = R.ADAPTER.createCanvas(), g.width = o, g.height = a, m = g.getContext("2d"), y = new V(g, {
                resolution: n,
                ...h
            }), _.push(new O(y)), d.page.push({
                id: _.length - 1,
                file: ""
            }));
            const P = l[T],
                S = vt.measureText(P, c, !1, g),
                E = S.width,
                B = Math.ceil(S.height),
                N = Math.ceil((c.fontStyle === "italic" ? 2 : 1) * E);
            if (p >= a - B * n) {
                if (p === 0) throw new Error(`[BitmapFont] textureHeight ${a}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${P}')`);
                --T, g = null, m = null, y = null, p = 0, f = 0, v = 0;
                continue
            }
            if (v = Math.max(B + S.fontProperties.descent, v), N * n + f >= u) {
                if (f === 0) throw new Error(`[BitmapFont] textureWidth ${o}px is too small (fontFamily: '${c.fontFamily}', fontSize: ${c.fontSize}px, char: '${P}')`);
                --T, p += v * n, p = Math.ceil(p), f = 0, v = 0;
                continue
            }
            Om(g, m, S, f, p, n, c);
            const I = Ts(S.text);
            d.char.push({
                id: I,
                page: _.length - 1,
                x: f / n,
                y: p / n,
                width: N,
                height: B,
                xoffset: 0,
                yoffset: 0,
                xadvance: E - (c.dropShadow ? c.dropShadowDistance : 0) - (c.stroke ? c.strokeThickness : 0)
            }), f += (N + 2 * r) * n, f = Math.ceil(f)
        }
        for (let T = 0, P = l.length; T < P; T++) {
            const S = l[T];
            for (let E = 0; E < P; E++) {
                const B = l[E],
                    N = m.measureText(S).width,
                    I = m.measureText(B).width,
                    w = m.measureText(S + B).width - (N + I);
                w && d.kerning.push({
                    first: Ts(S),
                    second: Ts(B),
                    amount: w
                })
            }
        }
        const x = new kt(d, _, !0);
        return kt.available[e] !== void 0 && kt.uninstall(e), kt.available[e] = x, x
    }
};
let Pt = kt;
Pt.ALPHA = [
    ["a", "z"],
    ["A", "Z"], " "
];
Pt.NUMERIC = [
    ["0", "9"]
];
Pt.ALPHANUMERIC = [
    ["a", "z"],
    ["A", "Z"],
    ["0", "9"], " "
];
Pt.ASCII = [
    [" ", "~"]
];
Pt.defaultOptions = {
    resolution: 1,
    textureWidth: 512,
    textureHeight: 512,
    padding: 4,
    chars: kt.ALPHANUMERIC
};
Pt.available = {};
var Nm = `// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
  if (median < 0.01) {\r
    alpha = 0.0;\r
  } else if (median > 0.99) {\r
    alpha = 1.0;\r
  }\r
\r
  // Gamma correction for coverage-like alpha\r
  float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
  float gamma = mix(1.0, 1.0 / 2.2, luma);\r
  float coverage = pow(uColor.a * alpha, gamma);  \r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, coverage);\r
}\r
`,
    Um = `// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`;
const pa = [],
    ma = [],
    ga = [],
    Wh = class extends Et {
        constructor(e, t = {}) {
            super();
            const {
                align: i,
                tint: s,
                maxWidth: r,
                letterSpacing: n,
                fontName: o,
                fontSize: a
            } = Object.assign({}, Wh.styleDefaults, t);
            if (!Pt.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
            this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = i, this._tintColor = new J(s), this._font = void 0, this._fontName = o, this._fontSize = a, this.text = e, this._maxWidth = r, this._maxLineHeight = 0, this._letterSpacing = n, this._anchor = new xe(() => {
                this.dirty = !0
            }, this, 0, 0), this._roundPixels = R.ROUND_PIXELS, this.dirty = !0, this._resolution = R.RESOLUTION, this._autoResolution = !0, this._textureCache = {}
        }
        updateText() {
            var N;
            const e = Pt.available[this._fontName],
                t = this.fontSize,
                i = t / e.size,
                s = new K,
                r = [],
                n = [],
                o = [],
                a = this._text.replace(/(?:\r\n|\r)/g, `
`) || " ",
                h = zh(a),
                l = this._maxWidth * e.size / t,
                c = e.distanceFieldType === "none" ? pa : ma;
            let u = null,
                d = 0,
                f = 0,
                p = 0,
                g = -1,
                m = 0,
                y = 0,
                v = 0,
                _ = 0;
            for (let I = 0; I < h.length; I++) {
                const M = h[I],
                    w = Ts(M);
                if (/(?:\s)/.test(M) && (g = I, m = d, _++), M === "\r" || M === `
`) {
                    n.push(d), o.push(-1), f = Math.max(f, d), ++p, ++y, s.x = 0, s.y += e.lineHeight, u = null, _ = 0;
                    continue
                }
                const b = e.chars[w];
                if (!b) continue;
                u && b.kerning[u] && (s.x += b.kerning[u]);
                const $ = ga.pop() || {
                    texture: O.EMPTY,
                    line: 0,
                    charCode: 0,
                    prevSpaces: 0,
                    position: new K
                };
                $.texture = b.texture, $.line = p, $.charCode = w, $.position.x = Math.round(s.x + b.xOffset + this._letterSpacing / 2), $.position.y = Math.round(s.y + b.yOffset), $.prevSpaces = _, r.push($), d = $.position.x + Math.max(b.xAdvance - b.xOffset, b.texture.orig.width), s.x += b.xAdvance + this._letterSpacing, v = Math.max(v, b.yOffset + b.texture.height), u = w, g !== -1 && l > 0 && s.x > l && (++y, hi(r, 1 + g - y, 1 + I - g), I = g, g = -1, n.push(m), o.push(r.length > 0 ? r[r.length - 1].prevSpaces : 0), f = Math.max(f, m), p++, s.x = 0, s.y += e.lineHeight, u = null, _ = 0)
            }
            const x = h[h.length - 1];
            x !== "\r" && x !== `
` && (/(?:\s)/.test(x) && (d = m), n.push(d), f = Math.max(f, d), o.push(-1));
            const T = [];
            for (let I = 0; I <= p; I++) {
                let M = 0;
                this._align === "right" ? M = f - n[I] : this._align === "center" ? M = (f - n[I]) / 2 : this._align === "justify" && (M = o[I] < 0 ? 0 : (f - n[I]) / o[I]), T.push(M)
            }
            const P = r.length,
                S = {},
                E = [],
                B = this._activePagesMeshData;
            c.push(...B);
            for (let I = 0; I < P; I++) {
                const M = r[I].texture,
                    w = M.baseTexture.uid;
                if (!S[w]) {
                    let b = c.pop();
                    if (!b) {
                        const X = new lm;
                        let F, Z;
                        e.distanceFieldType === "none" ? (F = new ua(O.EMPTY), Z = G.NORMAL) : (F = new ua(O.EMPTY, {
                            program: Vt.from(Um, Nm),
                            uniforms: {
                                uFWidth: 0
                            }
                        }), Z = G.NORMAL_NPM);
                        const ot = new vn(X, F);
                        ot.blendMode = Z, b = {
                            index: 0,
                            indexCount: 0,
                            vertexCount: 0,
                            uvsCount: 0,
                            total: 0,
                            mesh: ot,
                            vertices: null,
                            uvs: null,
                            indices: null
                        }
                    }
                    b.index = 0, b.indexCount = 0, b.vertexCount = 0, b.uvsCount = 0, b.total = 0;
                    const {
                        _textureCache: $
                    } = this;
                    $[w] = $[w] || new O(M.baseTexture), b.mesh.texture = $[w], b.mesh.tint = this._tintColor.value, E.push(b), S[w] = b
                }
                S[w].total++
            }
            for (let I = 0; I < B.length; I++) E.includes(B[I]) || this.removeChild(B[I].mesh);
            for (let I = 0; I < E.length; I++) E[I].mesh.parent !== this && this.addChild(E[I].mesh);
            this._activePagesMeshData = E;
            for (const I in S) {
                const M = S[I],
                    w = M.total;
                if (!(((N = M.indices) == null ? void 0 : N.length) > 6 * w) || M.vertices.length < vn.BATCHABLE_SIZE * 2) M.vertices = new Float32Array(4 * 2 * w), M.uvs = new Float32Array(4 * 2 * w), M.indices = new Uint16Array(6 * w);
                else {
                    const b = M.total,
                        $ = M.vertices;
                    for (let X = b * 4 * 2; X < $.length; X++) $[X] = 0
                }
                M.mesh.size = 6 * w
            }
            for (let I = 0; I < P; I++) {
                const M = r[I];
                let w = M.position.x + T[M.line] * (this._align === "justify" ? M.prevSpaces : 1);
                this._roundPixels && (w = Math.round(w));
                const b = w * i,
                    $ = M.position.y * i,
                    X = M.texture,
                    F = S[X.baseTexture.uid],
                    Z = X.frame,
                    ot = X._uvs,
                    A = F.index++;
                F.indices[A * 6 + 0] = 0 + A * 4, F.indices[A * 6 + 1] = 1 + A * 4, F.indices[A * 6 + 2] = 2 + A * 4, F.indices[A * 6 + 3] = 0 + A * 4, F.indices[A * 6 + 4] = 2 + A * 4, F.indices[A * 6 + 5] = 3 + A * 4, F.vertices[A * 8 + 0] = b, F.vertices[A * 8 + 1] = $, F.vertices[A * 8 + 2] = b + Z.width * i, F.vertices[A * 8 + 3] = $, F.vertices[A * 8 + 4] = b + Z.width * i, F.vertices[A * 8 + 5] = $ + Z.height * i, F.vertices[A * 8 + 6] = b, F.vertices[A * 8 + 7] = $ + Z.height * i, F.uvs[A * 8 + 0] = ot.x0, F.uvs[A * 8 + 1] = ot.y0, F.uvs[A * 8 + 2] = ot.x1, F.uvs[A * 8 + 3] = ot.y1, F.uvs[A * 8 + 4] = ot.x2, F.uvs[A * 8 + 5] = ot.y2, F.uvs[A * 8 + 6] = ot.x3, F.uvs[A * 8 + 7] = ot.y3
            }
            this._textWidth = f * i, this._textHeight = (s.y + e.lineHeight) * i;
            for (const I in S) {
                const M = S[I];
                if (this.anchor.x !== 0 || this.anchor.y !== 0) {
                    let X = 0;
                    const F = this._textWidth * this.anchor.x,
                        Z = this._textHeight * this.anchor.y;
                    for (let ot = 0; ot < M.total; ot++) M.vertices[X++] -= F, M.vertices[X++] -= Z, M.vertices[X++] -= F, M.vertices[X++] -= Z, M.vertices[X++] -= F, M.vertices[X++] -= Z, M.vertices[X++] -= F, M.vertices[X++] -= Z
                }
                this._maxLineHeight = v * i;
                const w = M.mesh.geometry.getBuffer("aVertexPosition"),
                    b = M.mesh.geometry.getBuffer("aTextureCoord"),
                    $ = M.mesh.geometry.getIndex();
                w.data = M.vertices, b.data = M.uvs, $.data = M.indices, w.update(), b.update(), $.update()
            }
            for (let I = 0; I < r.length; I++) ga.push(r[I]);
            this._font = e, this.dirty = !1
        }
        updateTransform() {
            this.validate(), this.containerUpdateTransform()
        }
        _render(e) {
            this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0);
            const {
                distanceFieldRange: t,
                distanceFieldType: i,
                size: s
            } = Pt.available[this._fontName];
            if (i !== "none") {
                const {
                    a: r,
                    b: n,
                    c: o,
                    d: a
                } = this.worldTransform, h = Math.sqrt(r * r + n * n), l = Math.sqrt(o * o + a * a), c = (Math.abs(h) + Math.abs(l)) / 2, u = this.fontSize / s, d = e._view.resolution;
                for (const f of this._activePagesMeshData) f.mesh.shader.uniforms.uFWidth = c * t * u * d
            }
            super._render(e)
        }
        getLocalBounds() {
            return this.validate(), super.getLocalBounds()
        }
        validate() {
            const e = Pt.available[this._fontName];
            if (!e) throw new Error(`Missing BitmapFont "${this._fontName}"`);
            this._font !== e && (this.dirty = !0), this.dirty && this.updateText()
        }
        get tint() {
            return this._tintColor.value
        }
        set tint(e) {
            if (this.tint !== e) {
                this._tintColor.setValue(e);
                for (let t = 0; t < this._activePagesMeshData.length; t++) this._activePagesMeshData[t].mesh.tint = e
            }
        }
        get align() {
            return this._align
        }
        set align(e) {
            this._align !== e && (this._align = e, this.dirty = !0)
        }
        get fontName() {
            return this._fontName
        }
        set fontName(e) {
            if (!Pt.available[e]) throw new Error(`Missing BitmapFont "${e}"`);
            this._fontName !== e && (this._fontName = e, this.dirty = !0)
        }
        get fontSize() {
            return this._fontSize ?? Pt.available[this._fontName].size
        }
        set fontSize(e) {
            this._fontSize !== e && (this._fontSize = e, this.dirty = !0)
        }
        get anchor() {
            return this._anchor
        }
        set anchor(e) {
            typeof e == "number" ? this._anchor.set(e) : this._anchor.copyFrom(e)
        }
        get text() {
            return this._text
        }
        set text(e) {
            e = String(e ?? ""), this._text !== e && (this._text = e, this.dirty = !0)
        }
        get maxWidth() {
            return this._maxWidth
        }
        set maxWidth(e) {
            this._maxWidth !== e && (this._maxWidth = e, this.dirty = !0)
        }
        get maxLineHeight() {
            return this.validate(), this._maxLineHeight
        }
        get textWidth() {
            return this.validate(), this._textWidth
        }
        get letterSpacing() {
            return this._letterSpacing
        }
        set letterSpacing(e) {
            this._letterSpacing !== e && (this._letterSpacing = e, this.dirty = !0)
        }
        get roundPixels() {
            return this._roundPixels
        }
        set roundPixels(e) {
            e !== this._roundPixels && (this._roundPixels = e, this.dirty = !0)
        }
        get textHeight() {
            return this.validate(), this._textHeight
        }
        get resolution() {
            return this._resolution
        }
        set resolution(e) {
            this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0)
        }
        destroy(e) {
            const {
                _textureCache: t
            } = this, s = Pt.available[this._fontName].distanceFieldType === "none" ? pa : ma;
            s.push(...this._activePagesMeshData);
            for (const r of this._activePagesMeshData) this.removeChild(r.mesh);
            this._activePagesMeshData = [], s.filter(r => t[r.mesh.texture.baseTexture.uid]).forEach(r => {
                r.mesh.texture = O.EMPTY
            });
            for (const r in t) t[r].destroy(), delete t[r];
            this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(e)
        }
    };
let km = Wh;
km.styleDefaults = {
    align: "left",
    tint: 16777215,
    maxWidth: 0,
    letterSpacing: 0
};
const Gm = [".xml", ".fnt"],
    Hm = {
        extension: {
            type: D.LoadParser,
            priority: ne.Normal
        },
        name: "loadBitmapFont",
        test(e) {
            return Gm.includes(At.extname(e).toLowerCase())
        },
        async testParse(e) {
            return Es.test(e) || Tn.test(e)
        },
        async parse(e, t, i) {
            const s = Es.test(e) ? Es.parse(e) : Tn.parse(e),
                {
                    src: r
                } = t,
                {
                    page: n
                } = s,
                o = [];
            for (let l = 0; l < n.length; ++l) {
                const c = n[l].file;
                let u = At.join(At.dirname(r), c);
                u = _n(u, r), o.push(u)
            }
            const a = await i.load(o),
                h = o.map(l => a[l]);
            return Pt.install(s, h, !0)
        },
        async load(e, t) {
            return (await R.ADAPTER.fetch(e)).text()
        },
        unload(e) {
            e.destroy()
        }
    };
U.add(Hm);
const ti = class extends fe {
    constructor() {
        super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = !1
    }
    static from(e) {
        return new ti(Object.keys(ti.defaultOptions).reduce((t, i) => ({
            ...t,
            [i]: e[i]
        }), {}))
    }
    cleanFonts() {
        this._fonts.length > 0 && (this._fonts.forEach(e => {
            URL.revokeObjectURL(e.src), e.refs--, e.refs === 0 && (e.fontFace && document.fonts.delete(e.fontFace), delete ti.availableFonts[e.originalUrl])
        }), this.fontFamily = "monospace", this._fonts.length = 0, this.styleID++, this.fontsDirty = !0)
    }
    loadFont(e, t = {}) {
        const {
            availableFonts: i
        } = ti;
        if (i[e]) {
            const s = i[e];
            return this._fonts.push(s), s.refs++, this.styleID++, this.fontsDirty = !0, Promise.resolve()
        }
        return R.ADAPTER.fetch(e).then(s => s.blob()).then(async s => new Promise((r, n) => {
            const o = URL.createObjectURL(s),
                a = new FileReader;
            a.onload = () => r([o, a.result]), a.onerror = n, a.readAsDataURL(s)
        })).then(async ([s, r]) => {
            const n = Object.assign({
                family: At.basename(e, At.extname(e)),
                weight: "normal",
                style: "normal",
                src: s,
                dataSrc: r,
                refs: 1,
                originalUrl: e,
                fontFace: null
            }, t);
            i[e] = n, this._fonts.push(n), this.styleID++;
            const o = new FontFace(n.family, `url(${n.src})`, {
                weight: n.weight,
                style: n.style
            });
            n.fontFace = o, await o.load(), document.fonts.add(o), await document.fonts.ready, this.styleID++, this.fontsDirty = !0
        })
    }
    addOverride(...e) {
        const t = e.filter(i => !this._overrides.includes(i));
        t.length > 0 && (this._overrides.push(...t), this.styleID++)
    }
    removeOverride(...e) {
        const t = e.filter(i => this._overrides.includes(i));
        t.length > 0 && (this._overrides = this._overrides.filter(i => !t.includes(i)), this.styleID++)
    }
    toCSS(e) {
        return [`transform: scale(${e})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [], ...this.wordWrap ? [`word-wrap: ${this.breakWords?"break-all":"break-word"}`, `max-width: ${this.wordWrapWidth}px`] : [], ...this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : [], ...this.dropShadow ? [this.dropShadowToCSS()] : [], ...this._overrides].join(";")
    }
    toGlobalCSS() {
        return this._fonts.reduce((e, t) => `${e}
            @font-face {
                font-family: "${t.family}";
                src: url('${t.dataSrc}');
                font-weight: ${t.weight};
                font-style: ${t.style}; 
            }`, this._stylesheet)
    }
    get stylesheet() {
        return this._stylesheet
    }
    set stylesheet(e) {
        this._stylesheet !== e && (this._stylesheet = e, this.styleID++)
    }
    normalizeColor(e) {
        return Array.isArray(e) && (e = Vu(e)), typeof e == "number" ? $u(e) : e
    }
    dropShadowToCSS() {
        let e = this.normalizeColor(this.dropShadowColor);
        const t = this.dropShadowAlpha,
            i = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance),
            s = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
        e.startsWith("#") && t < 1 && (e += (t * 255 | 0).toString(16).padStart(2, "0"));
        const r = `${i}px ${s}px`;
        return this.dropShadowBlur > 0 ? `text-shadow: ${r} ${this.dropShadowBlur}px ${e}` : `text-shadow: ${r} ${e}`
    }
    reset() {
        Object.assign(this, ti.defaultOptions)
    }
    onBeforeDraw() {
        const {
            fontsDirty: e
        } = this;
        return this.fontsDirty = !1, this.isSafari && this._fonts.length > 0 && e ? new Promise(t => setTimeout(t, 100)) : Promise.resolve()
    }
    get isSafari() {
        const {
            userAgent: e
        } = R.ADAPTER.getNavigator();
        return /^((?!chrome|android).)*safari/i.test(e)
    }
    set fillGradientStops(e) {
        console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")
    }
    get fillGradientStops() {
        return super.fillGradientStops
    }
    set fillGradientType(e) {
        console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")
    }
    get fillGradientType() {
        return super.fillGradientType
    }
    set miterLimit(e) {
        console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")
    }
    get miterLimit() {
        return super.miterLimit
    }
    set trim(e) {
        console.warn("[HTMLTextStyle] trim is not supported by HTMLText")
    }
    get trim() {
        return super.trim
    }
    set textBaseline(e) {
        console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")
    }
    get textBaseline() {
        return super.textBaseline
    }
    set leading(e) {
        console.warn("[HTMLTextStyle] leading is not supported by HTMLText")
    }
    get leading() {
        return super.leading
    }
    set lineJoin(e) {
        console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")
    }
    get lineJoin() {
        return super.lineJoin
    }
};
let Fi = ti;
Fi.availableFonts = {};
Fi.defaultOptions = {
    align: "left",
    breakWords: !1,
    dropShadow: !1,
    dropShadowAlpha: 1,
    dropShadowAngle: Math.PI / 6,
    dropShadowBlur: 0,
    dropShadowColor: "black",
    dropShadowDistance: 5,
    fill: "black",
    fontFamily: "monospace",
    fontSize: 26,
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: 0,
    padding: 0,
    stroke: "black",
    strokeThickness: 0,
    whiteSpace: "normal",
    wordWrap: !1,
    wordWrapWidth: 100
};
const ei = class extends Xe {
    constructor(e = "", t = {}) {
        super(O.EMPTY), this._text = null, this._style = null, this._autoResolution = !0, this._loading = !1, this.localStyleID = -1, this.dirty = !1, this.ownsStyle = !1;
        const i = new Image,
            s = O.from(i, {
                scaleMode: R.SCALE_MODE,
                resourceOptions: {
                    autoLoad: !1
                }
            });
        s.orig = new z, s.trim = new z, this.texture = s;
        const r = "http://www.w3.org/2000/svg",
            n = "http://www.w3.org/1999/xhtml",
            o = document.createElementNS(r, "svg"),
            a = document.createElementNS(r, "foreignObject"),
            h = document.createElementNS(n, "div"),
            l = document.createElementNS(n, "style");
        a.setAttribute("width", "10000"), a.setAttribute("height", "10000"), a.style.overflow = "hidden", o.appendChild(a), this.maxWidth = ei.defaultMaxWidth, this.maxHeight = ei.defaultMaxHeight, this._domElement = h, this._styleElement = l, this._svgRoot = o, this._foreignObject = a, this._foreignObject.appendChild(l), this._foreignObject.appendChild(h), this._image = i, this._loadImage = new Image, this._autoResolution = ei.defaultAutoResolution, this._resolution = ei.defaultResolution ?? R.RESOLUTION, this.text = e, this.style = t
    }
    measureText(e) {
        var a, h;
        const {
            text: t,
            style: i,
            resolution: s
        } = Object.assign({
            text: this._text,
            style: this._style,
            resolution: this._resolution
        }, e);
        Object.assign(this._domElement, {
            innerHTML: t,
            style: i.toCSS(s)
        }), this._styleElement.textContent = i.toGlobalCSS(), document.body.appendChild(this._svgRoot);
        const r = this._domElement.getBoundingClientRect();
        this._svgRoot.remove();
        const n = Math.min(this.maxWidth, Math.ceil(r.width)),
            o = Math.min(this.maxHeight, Math.ceil(r.height));
        return this._svgRoot.setAttribute("width", n.toString()), this._svgRoot.setAttribute("height", o.toString()), t !== this._text && (this._domElement.innerHTML = this._text), i !== this._style && (Object.assign(this._domElement, {
            style: (a = this._style) == null ? void 0 : a.toCSS(s)
        }), this._styleElement.textContent = (h = this._style) == null ? void 0 : h.toGlobalCSS()), {
            width: n + i.padding * 2,
            height: o + i.padding * 2
        }
    }
    async updateText(e = !0) {
        const {
            style: t,
            _image: i,
            _loadImage: s
        } = this;
        if (this.localStyleID !== t.styleID && (this.dirty = !0, this.localStyleID = t.styleID), !this.dirty && e) return;
        const {
            width: r,
            height: n
        } = this.measureText();
        i.width = s.width = Math.ceil(Math.max(1, r)), i.height = s.height = Math.ceil(Math.max(1, n)), this._loading || (this._loading = !0, await new Promise(o => {
            s.onload = async () => {
                await t.onBeforeDraw(), this._loading = !1, i.src = s.src, s.onload = null, s.src = "", this.updateTexture(), o()
            };
            const a = new XMLSerializer().serializeToString(this._svgRoot);
            s.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(a)}`
        }))
    }
    get source() {
        return this._image
    }
    updateTexture() {
        const {
            style: e,
            texture: t,
            _image: i,
            resolution: s
        } = this, {
            padding: r
        } = e, {
            baseTexture: n
        } = t;
        t.trim.width = t._frame.width = i.width / s, t.trim.height = t._frame.height = i.height / s, t.trim.x = -r, t.trim.y = -r, t.orig.width = t._frame.width - r * 2, t.orig.height = t._frame.height - r * 2, this._onTextureUpdate(), n.setRealSize(i.width, i.height, s), this.dirty = !1
    }
    _render(e) {
        this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._render(e)
    }
    _renderCanvas(e) {
        this._autoResolution && this._resolution !== e.resolution && (this._resolution = e.resolution, this.dirty = !0), this.updateText(!0), super._renderCanvas(e)
    }
    getLocalBounds(e) {
        return this.updateText(!0), super.getLocalBounds(e)
    }
    _calculateBounds() {
        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
    }
    _onStyleChange() {
        this.dirty = !0
    }
    destroy(e) {
        var i, s, r, n, o;
        typeof e == "boolean" && (e = {
            children: e
        }), e = Object.assign({}, ei.defaultDestroyOptions, e), super.destroy(e);
        const t = null;
        this.ownsStyle && ((i = this._style) == null || i.cleanFonts()), this._style = t, (s = this._svgRoot) == null || s.remove(), this._svgRoot = t, (r = this._domElement) == null || r.remove(), this._domElement = t, (n = this._foreignObject) == null || n.remove(), this._foreignObject = t, (o = this._styleElement) == null || o.remove(), this._styleElement = t, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = t, this._image.src = "", this._image = t
    }
    get width() {
        return this.updateText(!0), Math.abs(this.scale.x) * this._image.width / this.resolution
    }
    set width(e) {
        this.updateText(!0);
        const t = ve(this.scale.x) || 1;
        this.scale.x = t * e / this._image.width / this.resolution, this._width = e
    }
    get height() {
        return this.updateText(!0), Math.abs(this.scale.y) * this._image.height / this.resolution
    }
    set height(e) {
        this.updateText(!0);
        const t = ve(this.scale.y) || 1;
        this.scale.y = t * e / this._image.height / this.resolution, this._height = e
    }
    get style() {
        return this._style
    }
    set style(e) {
        this._style !== e && (e = e || {}, e instanceof Fi ? (this.ownsStyle = !1, this._style = e) : e instanceof fe ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = !0, this._style = Fi.from(e)) : (this.ownsStyle = !0, this._style = new Fi(e)), this.localStyleID = -1, this.dirty = !0)
    }
    get text() {
        return this._text
    }
    set text(e) {
        e = String(e === "" || e === null || e === void 0 ? " " : e), e = this.sanitiseText(e), this._text !== e && (this._text = e, this.dirty = !0)
    }
    get resolution() {
        return this._resolution
    }
    set resolution(e) {
        this._autoResolution = !1, this._resolution !== e && (this._resolution = e, this.dirty = !0)
    }
    sanitiseText(e) {
        return e.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;")
    }
};
let Js = ei;
Js.defaultDestroyOptions = {
    texture: !0,
    children: !1,
    baseTexture: !0
};
Js.defaultMaxWidth = 2024;
Js.defaultMaxHeight = 2024;
Js.defaultAutoResolution = !0;
class $m extends Et {
    constructor(i) {
        super();
        W(this, "img");
        W(this, "caption");
        W(this, "circle");
        W(this, "onDragStart", () => {});
        W(this, "onDragOver", () => {});
        W(this, "onDragEnd", () => {});
        W(this, "onDragCancel", () => {});
        W(this, "config", {
            bottom: {
                caption: 30,
                circle: 70,
                anchor: 1
            },
            top: {
                caption: -35,
                circle: -73,
                anchor: 0
            }
        });
        const {
            img: s,
            caption: r,
            x: n,
            y: o,
            captionPos: a,
            width: h,
            height: l
        } = i;
        this.x = n, 
        this.y = o, 
        this.img = this.addChild(new Xe(O.from(s))), 
        this.img.anchor.set(.5, this.config[a].anchor), 
        this.img.width = h, 
        this.img.height = l, 
        // this.img.eventMode = 'static',
        // this.img.cursor = 'pointer',
        // this.img.on('pointerdown', function(){
        //     console.log('abc')
        // }),
        this.caption = this.addChild(new Ae(r, {
            fontFamily: "monospace",
            fontSize: 36,
            fill: 3355443,
            align: "center"
        })), this.caption.anchor.set(.5), this.caption.y = this.config[a].caption, this.circle = new Ee, this.circle.beginFill(35442), this.circle.drawCircle(0, 0, 7), this.circle.endFill(), this.circle.position.set(0, this.config[a].circle), this.circle.cursor = "pointer", this.circle.interactive = !0, this.circle.hitArea = new Vs(0, 0, 60), this.circle.on("pointerdown", () => {
            this.onDragStart(this.circle.getGlobalPosition())
        }), this.circle.on("pointerup", () => {
            this.onDragEnd(this.circle.getGlobalPosition())
        }), this.circle.on("pointerupoutside", () => {
            this.onDragCancel()
        }), this.circle.on("pointerover", () => {
            this.onDragOver(this.circle.getGlobalPosition())
        }), this.addChild(this.circle)
    }
}
const It = {
    APP_WIDTH: 1920,
    APP_HEIGHT: 1080,
    APP_BG_COLOR: 16777215
};
class Vm extends Et {
    constructor(i) {
        super();
        W(this, "openingWords");
        W(this, "text");
        W(this, "onStart", () => {});
        this.position.set(It.APP_WIDTH / 2, It.APP_HEIGHT / 2), this.openingWords = new Ae(i, {
            fontFamily: "monospace",
            fontSize: 72,
            fill: 3355443,
            align: "center"
        }), this.openingWords.anchor.set(.5), this.addChild(this.openingWords), this.text = new Ae("開始", {
            fontFamily: "monospace",
            fontSize: 48,
            fontWeight: "bolder",
            fill: 16711680
        }), this.text.anchor.set(.5), this.text.interactive = !0, this.text.cursor = "pointer", this.text.y = 400, this.text.on("pointerup", () => {
            this.onStart()
        }), this.addChild(this.text)
    }
}
class Xm extends Et {
    constructor(i) {
        super();
        W(this, "next");
        W(this, "onNext", () => {});
        this.next = new Ae(i, {
            fontFamily: "monospace",
            fontSize: 72,
            fill: 3355443,
            align: "center"
        }), this.next.anchor.set(1, .5), this.next.interactive = !0, this.next.cursor = "pointer", this.next.x = 1900, this.next.y = 540, this.next.on("pointerup", () => {
            this.onNext()
        }), this.addChild(this.next)
    }
}
class zm extends Et {
    constructor(i) {
        super();
        W(this, "restart");
        W(this, "onRestart", () => {});
        this.restart = new Ae(i, {
            fontFamily: "monospace",
            fontSize: 72,
            fill: 3355443,
            align: "center"
        }), this.restart.anchor.set(1, .5), this.restart.interactive = !0, this.restart.cursor = "pointer", this.restart.x = 1900, this.restart.y = 540, this.restart.on("pointerup", () => {
            this.onRestart()
        }), this.addChild(this.restart)
    }
}
class Wm {
    constructor(t, i) {
        W(this, "config");
        W(this, "cellWidth", [480, 480, 480, 480, 384, 320]);
        W(this, "gapX", 6);
        W(this, "gapY", 410);
        W(this, "app");
        W(this, "ratio", 1);
        W(this, "background");
        W(this, "tempLine");
        W(this, "dragging", []);
        W(this, "doneMap", new Map);
        W(this, "pointMap", new Map);
        W(this, "menuView");
        W(this, "questionView", new Et);
        W(this, "endView");
        W(this, "modalView");
        W(this, "currentQuestionIndex", 0);
        W(this, "currentQuestion", []);
        // W(this, "onResize", () => {
        //     if (document.documentElement.style.setProperty("--vh", `${window.innerHeight-1}px`), window.innerWidth / window.innerHeight > It.APP_WIDTH / It.APP_HEIGHT) {
        //         const t = window.innerHeight - 1;
        //         this.app.view.style.width = t * 16 / 9 + "px", this.app.view.style.height = t + "px", this.ratio = window.innerHeight / It.APP_HEIGHT, this.app.stage.scale.set(this.ratio)
        //     } else this.app.view.style.width = "100vw", this.app.view.style.height = "56.25vw", this.ratio = window.innerWidth / It.APP_WIDTH, this.app.stage.scale.set(this.ratio)
        // });
        W(this, "onResize", () => {
            this.app.view.style.width = $("#app").width(), this.ratio =  $("#app").width() / It.APP_WIDTH , this.app.stage.scale.set(this.ratio)
        });
        W(this, "tempLineTo", (t, i) => {
            this.dragging.length !== 0 && (this.tempLine.clear(), this.tempLine.lineStyle(5, 0xf97316), this.tempLine.moveTo(this.dragging[2] / this.ratio, this.dragging[3] / this.ratio), this.tempLine.lineTo(t / this.ratio, i / this.ratio))
        });
        W(this, "initQuestion", () => {
            this.currentQuestion = this.parseQuestion(this.config.questions[this.currentQuestionIndex]);
            const t = this.cellWidth[this.currentQuestion.length - 1],
                i = It.APP_WIDTH / 2 - t * (this.currentQuestion.length / 2 + .5),
                s = It.APP_HEIGHT / 2;
            for (let r = 0; r < this.currentQuestion.length; r++)
                for (let n = 0; n < this.currentQuestion[r].length; n++) {

                    const {
                        img: o,
                        caption: a
                    } = this.currentQuestion[r][n], h = this.questionView.addChild(new $m({
                        img: o,
                        caption: a.trim(),
                        x: i + this.currentQuestion[r][n].order * t,
                        y: n === 0 ? s - this.gapY / 2 : s + this.gapY / 2,
                        captionPos: n === 0 ? "bottom" : "top",
                        width: t - this.config.gapX / 2,
                        height: t * .69
                    }));
                    h.onDragStart = l => {
                        this.dragging.length === 0 && !this.pointMap.has(r + "_" + n) && (this.dragging = [r, n, l.x, l.y])
                    }, h.onDragOver = l => {
                        this.dragging.length !== 0 && this.tempLineTo(l.x, l.y)
                    }, h.onDragEnd = l => {
                        if (this.dragging.length !== 0) {
                            const c = this.dragging[0] + "_" + this.dragging[1],
                                u = r + "_" + n;
                            if (this.dragging[1] !== n && !this.pointMap.has(u)) {
                                const d = this.dragging[2] / this.ratio,
                                    f = this.dragging[3] / this.ratio,
                                    p = l.x / this.ratio,
                                    g = l.y / this.ratio,
                                    m = new Ee;
                                if (m.lineStyle(5, 35442), m.moveTo(d, f), m.lineTo(p, g), this.questionView.addChild(m), this.pointMap.set(u, this.dragging[0] === r), this.pointMap.set(c, this.dragging[0] === r), this.doneMap.set(d + "_" + f + "_" + p + "_" + g, {
                                        line: m,
                                        right: this.dragging[0] === r
                                    }), this.currentQuestion.length === this.doneMap.size) {
                                    let y = !0;
                                    this.doneMap.forEach(v => {
                                        y = y && v.right
                                    }), y ? this.currentQuestionIndex === this.config.questions.length - 1 ? this.endView.visible = !0 : this.modalView.visible = !0 : this.doneMap.forEach((v, _) => {
                                        if (!v.right) {
                                            const [x, T, P, S] = _.split("_");
                                            v.line.clear(), v.line.lineStyle(3, 16711680), v.line.moveTo(+x, +T), v.line.lineTo(+P, +S), setTimeout(() => {
                                                v.line.clear(), this.questionView.removeChild(v.line), this.doneMap.delete(_), this.pointMap.forEach((E, B) => {
                                                    E || this.pointMap.delete(B)
                                                })
                                            }, this.config.errorDuration)
                                        }
                                    })
                                    if(y){
                                        config.onFinish();
                                    }else{
                                        config.onError();
                                    }
                                }
                            }
                            this.dragging = [], this.tempLine.clear()
                        }
                    }, h.onDragCancel = () => {
                        this.dragging = [], this.tempLine.clear()
                    }
                }
        });
        W(this, "parseQuestion", t => t.map(i => {
            const s = i.split(",");
            return [{
                img: s[0],
                caption: s[1],
                order: +s[2]
            }, {
                img: s[3],
                caption: s[4],
                order: +s[5]
            }]
        }));
        this.config = i, this.app = new Un({
            width: It.APP_WIDTH,
            height: It.APP_HEIGHT,
            backgroundColor: It.APP_BG_COLOR,
            resolution: window.devicePixelRatio
        });
        const s = document.getElementById(t) ?? document.body;
        s.appendChild(this.app.view), this.app.resizeTo = s, window.__PIXI_APP__ = this.app, document.body.style.backgroundColor = It.BG_COLOR, this.background = new Ee, this.background.beginFill(It.APP_BG_COLOR), this.background.drawRect(0, 0, It.APP_WIDTH, It.APP_HEIGHT), this.background.endFill(), this.background.interactive = !0, this.background.on("pointermove", r => {
            this.tempLineTo(r.x - s.offsetLeft, r.y - s.offsetTop)
        }), this.app.stage.addChild(this.background), this.tempLine = new Ee, this.app.stage.addChild(this.tempLine), window.addEventListener("resize", this.onResize), this.onResize(), this.app.resize(), this.menuView = new Vm(this.config.prologue), this.app.stage.addChild(this.menuView), this.questionView.visible = !1, this.app.stage.addChild(this.questionView), this.modalView = new Xm(this.config.next), this.modalView.visible = !1, this.modalView.onNext = () => {
            this.modalView.visible = !1, this.doneMap.clear(), this.pointMap.clear(), this.currentQuestionIndex++, this.questionView.removeChildren(), this.initQuestion()
        }, this.app.stage.addChild(this.modalView), this.endView = new zm(this.config.restart), this.endView.visible = !1, this.endView.onRestart = () => {
            this.endView.visible = !1, this.doneMap.clear(), this.pointMap.clear(), this.currentQuestionIndex = 0, this.questionView.removeChildren(), this.initQuestion()
        }, this.app.stage.addChild(this.endView)
    }
}

const t = new Wm("app", config);
t.menuView.visible = !1, t.initQuestion(), t.questionView.visible = !0