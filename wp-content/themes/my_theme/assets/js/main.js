! function(i) {
  var o = {};

  function n(t) {
    if (o[t]) return o[t].exports;
    var e = o[t] = {
      i: t,
      l: !1,
      exports: {}
    };
    return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
  }
  n.m = i, n.c = o, n.d = function(t, e, i) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: i
    })
  }, n.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, n.t = function(e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e)
      for (var o in e) n.d(i, o, function(t) {
        return e[t]
      }.bind(null, o));
    return i
  }, n.n = function(t) {
    var e = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return n.d(e, "a", e), e
  }, n.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, n.p = "", n(n.s = 0)
}([function(t, e, i) {
  "use strict";
  i.r(e);
  i(1);
  var o = i(2),
    n = i(4),
    r = i(7),
    s = i(9),
    a = i(10),
    l = i(11);
  window.addEventListener("DOMContentLoaded", function() {
    Object(o.default)(), Object(n.default)(), Object(s.default)(), Object(a.default)(), Object(r.default)(), Object(l.default)()
  })
}, function(t, e) {}, function(t, e, i) {
  "use strict";
  i.r(e);
  var o = i(3),
    n = i.n(o);
  e.default = function() {
    try {
      t(new n.a(".mainslider", {
        type: "carousel",
        gap: 0,
        autoplay: 6e3,
        dragThreshold: !1,
        animationDuration: 1500
      }).mount(), ".mainslider .glide__arrow--left", ".mainslider .glide__arrow--right")
    } catch (t) {}
    try {
      e(".newsslider"), t(new n.a(".newsslider", {
        type: "carousel",
        perView: 3,
        gap: 10,
        autoplay: 6e3,
        dragThreshold: !1,
        animationDuration: 600,
        breakpoints: {
          769: {
            perView: 2
          },
          576: {
            perView: 1
          }
        }
      }).mount(), ".newsslider .glide__arrow--left", ".newsslider .glide__arrow--right")
    } catch (t) {}
    try {
      e(".feedslider");
      new n.a(".feedslider", {
        type: "carousel",
        perView: 1,
        gap: 10,
        dragThreshold: !1,
        animationDuration: 600
      }).mount()
    } catch (t) {}

    function t(e, t, i) {
      document.querySelectorAll(t).forEach(function(t) {
        t.addEventListener("click", function() {
          e.go("<")
        })
      }), document.querySelectorAll(i).forEach(function(t) {
        t.addEventListener("click", function() {
          e.go(">")
        })
      })
    }

    function e(t) {
      var e = document.querySelector(t),
        i = e.querySelectorAll(".glide__track > .glide__slides > li:not(.glide__slide--clone)").length,
        o = document.createElement("div");
      o.classList.add("glide__bullets"), o.setAttribute("data-glide-el", "controls[nav]");
      for (var n = "", r = 0; r < i; r++) n += '<button class="glide__bullet" data-glide-dir="='.concat(r, '"></button>');
      o.innerHTML = n, e.appendChild(o)
    }
  }
}, function(t, e, i) {
  var o, n, r;

  function H(t) {
    return (H = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
      return typeof t
    } : function(t) {
      return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    })(t)
  }
  r = function() {
    "use strict";

    function i(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perTouch: !1,
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        throttle: 10,
        direction: "ltr",
        peek: 0,
        breakpoints: {},
        classes: {
          direction: {
            ltr: "glide--ltr",
            rtl: "glide--rtl"
          },
          slider: "glide--slider",
          carousel: "glide--carousel",
          swipeable: "glide--swipeable",
          dragging: "glide--dragging",
          cloneSlide: "glide__slide--clone",
          activeNav: "glide__bullet--active",
          activeSlide: "glide__slide--active",
          disabledArrow: "glide__arrow--disabled"
        }
      },
      n = "function" == typeof Symbol && "symbol" == H(Symbol.iterator) ? function(t) {
        return H(t)
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : H(t)
      },
      t = function(t, e, i) {
        return e && r(t.prototype, e), i && r(t, i), t
      },
      l = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = arguments[e];
          for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (t[o] = i[o])
        }
        return t
      };

    function r(t, e) {
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    function y(t) {
      return parseInt(t)
    }

    function s(t) {
      return "string" == typeof t
    }

    function u(t) {
      var e = void 0 === t ? "undefined" : n(t);
      return "function" === e || "object" === e && !!t
    }

    function c(t) {
      return "function" == typeof t
    }

    function a(t) {
      return void 0 === t
    }

    function h(t) {
      return t.constructor === Array
    }

    function d(t, e, i) {
      Object.defineProperty(t, e, i)
    }

    function p(t, e) {
      var i = l({}, t, e);
      return e.hasOwnProperty("classes") && (i.classes = l({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (i.classes.direction = l({}, t.classes.direction, e.classes.direction))), e.hasOwnProperty("breakpoints") && (i.breakpoints = l({}, t.breakpoints, e.breakpoints)), i
    }
    var _ = (t(f, [{
        key: "on",
        value: function(t, e) {
          if (h(t))
            for (var i = 0; i < t.length; i++) this.on(t[i], e);
          this.hop.call(this.events, t) || (this.events[t] = []);
          var o = this.events[t].push(e) - 1;
          return {
            remove: function() {
              delete this.events[t][o]
            }
          }
        }
      }, {
        key: "emit",
        value: function(t, e) {
          if (h(t))
            for (var i = 0; i < t.length; i++) this.emit(t[i], e);
          this.hop.call(this.events, t) && this.events[t].forEach(function(t) {
            t(e || {})
          })
        }
      }]), f),
      e = (t(m, [{
        key: "mount",
        value: function(t) {
          var e = 0 < arguments.length && void 0 !== t ? t : {};
          return this._e.emit("mount.before"), u(e) && (this._c = function(t, e, i) {
            var o = {};
            for (var n in e) c(e[n]) && (o[n] = e[n](t, o, i));
            for (var r in o) c(o[r].mount) && o[r].mount();
            return o
          }(this, e, this._e)), this._e.emit("mount.after"), this
        }
      }, {
        key: "mutate",
        value: function(t) {
          var e = 0 < arguments.length && void 0 !== t ? t : [];
          return h(e) && (this._t = e), this
        }
      }, {
        key: "update",
        value: function(t) {
          var e = 0 < arguments.length && void 0 !== t ? t : {};
          return this.settings = p(this.settings, e), e.hasOwnProperty("startAt") && (this.index = e.startAt), this._e.emit("update"), this
        }
      }, {
        key: "go",
        value: function(t) {
          return this._c.Run.make(t), this
        }
      }, {
        key: "move",
        value: function(t) {
          return this._c.Transition.disable(), this._c.Move.make(t), this
        }
      }, {
        key: "destroy",
        value: function() {
          return this._e.emit("destroy"), this
        }
      }, {
        key: "play",
        value: function(t) {
          var e = 0 < arguments.length && void 0 !== t && t;
          return e && (this.settings.autoplay = e), this._e.emit("play"), this
        }
      }, {
        key: "pause",
        value: function() {
          return this._e.emit("pause"), this
        }
      }, {
        key: "disable",
        value: function() {
          return this.disabled = !0, this
        }
      }, {
        key: "enable",
        value: function() {
          return this.disabled = !1, this
        }
      }, {
        key: "on",
        value: function(t, e) {
          return this._e.on(t, e), this
        }
      }, {
        key: "isType",
        value: function(t) {
          return this.settings.type === t
        }
      }, {
        key: "settings",
        get: function() {
          return this._o
        },
        set: function(t) {
          u(t) && (this._o = t)
        }
      }, {
        key: "index",
        get: function() {
          return this._i
        },
        set: function(t) {
          this._i = y(t)
        }
      }, {
        key: "type",
        get: function() {
          return this.settings.type
        }
      }, {
        key: "disabled",
        get: function() {
          return this._d
        },
        set: function(t) {
          this._d = !!t
        }
      }]), m);

    function m(t) {
      var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      i(this, m), this._c = {}, this._t = [], this._e = new _, this.disabled = !1, this.selector = t, this.settings = p(o, e), this.index = this.settings.startAt
    }

    function f() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, f), this.events = t, this.hop = t.hasOwnProperty
    }

    function g() {
      return (new Date).getTime()
    }

    function b(i, o, n) {
      var r = void 0,
        s = void 0,
        a = void 0,
        l = void 0,
        u = 0;
      n = n || {};

      function c() {
        u = !1 === n.leading ? 0 : g(), r = null, l = i.apply(s, a), r || (s = a = null)
      }

      function t() {
        var t = g();
        u || !1 !== n.leading || (u = t);
        var e = o - (t - u);
        return s = this, a = arguments, e <= 0 || o < e ? (r && (clearTimeout(r), r = null), u = t, l = i.apply(s, a), r || (s = a = null)) : r || !1 === n.trailing || (r = setTimeout(c, e)), l
      }
      return t.cancel = function() {
        clearTimeout(r), u = 0, r = s = a = null
      }, t
    }
    var v = {
      ltr: ["marginLeft", "marginRight"],
      rtl: ["marginRight", "marginLeft"]
    };

    function C(t) {
      if (t && t.parentNode) {
        for (var e = t.parentNode.firstChild, i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
      }
      return []
    }

    function w(t) {
      return !!(t && t instanceof window.HTMLElement)
    }
    var x = (t(k, [{
      key: "on",
      value: function(t, e, i, o) {
        var n = 3 < arguments.length && void 0 !== o && o;
        s(t) && (t = [t]);
        for (var r = 0; r < t.length; r++) this.listeners[t[r]] = i, e.addEventListener(t[r], this.listeners[t[r]], n)
      }
    }, {
      key: "off",
      value: function(t, e, i) {
        var o = 2 < arguments.length && void 0 !== i && i;
        s(t) && (t = [t]);
        for (var n = 0; n < t.length; n++) e.removeEventListener(t[n], this.listeners[t[n]], o)
      }
    }, {
      key: "destroy",
      value: function() {
        delete this.listeners
      }
    }]), k);

    function k() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      i(this, k), this.listeners = t
    }
    var D = ["ltr", "rtl"],
      L = {
        ">": "<",
        "<": ">",
        "=": "="
      };

    function z(t, e) {
      return {
        modify: function(t) {
          return e.Direction.is("rtl") ? -t : t
        }
      }
    }
    var P = !1;
    try {
      var E = Object.defineProperty({}, "passive", {
        get: function() {
          P = !0
        }
      });
      window.addEventListener("testPassive", null, E), window.removeEventListener("testPassive", null, E)
    } catch (z) {}
    var T = P,
      G = ["touchstart", "mousedown"],
      A = ["touchmove", "mousemove"],
      M = ["touchend", "touchcancel", "mouseup", "mouseleave"],
      O = ["mousedown", "mousemove", "mouseup", "mouseleave"];

    function S(t) {
      return u(t) ? (i = t, Object.keys(i).sort().reduce(function(t, e) {
        return t[e] = i[e], t[e], t
      }, {})) : {};
      var i
    }
    var B = {
      Html: function(e, t) {
        var i = {
          mount: function() {
            this.root = e.selector, this.track = this.root.querySelector('[data-glide-el="track"]'), this.slides = Array.prototype.slice.call(this.wrapper.children).filter(function(t) {
              return !t.classList.contains(e.settings.classes.cloneSlide)
            })
          }
        };
        return d(i, "root", {
          get: function() {
            return i._r
          },
          set: function(t) {
            s(t) && (t = document.querySelector(t)), w(t) && (i._r = t)
          }
        }), d(i, "track", {
          get: function() {
            return i._t
          },
          set: function(t) {
            w(t) && (i._t = t)
          }
        }), d(i, "wrapper", {
          get: function() {
            return i.track.children[0]
          }
        }), i
      },
      Translate: function(n, r, s) {
        var a = {
          set: function(t) {
            var e = function(o, n, r) {
              var s = [function(e, i) {
                return {
                  modify: function(t) {
                    return t + i.Gaps.value * e.index
                  }
                }
              }, function(t, e) {
                return {
                  modify: function(t) {
                    return t + e.Clones.grow / 2
                  }
                }
              }, function(i, o) {
                return {
                  modify: function(t) {
                    if (0 <= i.settings.focusAt) {
                      var e = o.Peek.value;
                      return u(e) ? t - e.before : t - e
                    }
                    return t
                  }
                }
              }, function(r, s) {
                return {
                  modify: function(t) {
                    var e = s.Gaps.value,
                      i = s.Sizes.width,
                      o = r.settings.focusAt,
                      n = s.Sizes.slideWidth;
                    return "center" === o ? t - (i / 2 - n / 2) : t - n * o - e * o
                  }
                }
              }].concat(o._t, [z]);
              return {
                mutate: function(t) {
                  for (var e = 0; e < s.length; e++) {
                    var i = s[e];
                    c(i) && c(i().modify) && (t = i(o, n, r).modify(t))
                  }
                  return t
                }
              }
            }(n, r).mutate(t);
            r.Html.wrapper.style.transform = "translate3d(" + -1 * e + "px, 0px, 0px)"
          },
          remove: function() {
            r.Html.wrapper.style.transform = ""
          }
        };
        return s.on("move", function(t) {
          var e = r.Gaps.value,
            i = r.Sizes.length,
            o = r.Sizes.slideWidth;
          return n.isType("carousel") && r.Run.isOffset("<") ? (r.Transition.after(function() {
            s.emit("translate.jump"), a.set(o * (i - 1))
          }), a.set(-o - e * i)) : n.isType("carousel") && r.Run.isOffset(">") ? (r.Transition.after(function() {
            s.emit("translate.jump"), a.set(0)
          }), a.set(o * i + e * i)) : a.set(t.movement)
        }), s.on("destroy", function() {
          a.remove()
        }), a
      },
      Transition: function(i, o, t) {
        var n = !1,
          e = {
            compose: function(t) {
              var e = i.settings;
              return n ? t + " 0ms " + e.animationTimingFunc : t + " " + this.duration + "ms " + e.animationTimingFunc
            },
            set: function(t) {
              var e = 0 < arguments.length && void 0 !== t ? t : "transform";
              o.Html.wrapper.style.transition = this.compose(e)
            },
            remove: function() {
              o.Html.wrapper.style.transition = ""
            },
            after: function(t) {
              setTimeout(function() {
                t()
              }, this.duration)
            },
            enable: function() {
              n = !1, this.set()
            },
            disable: function() {
              n = !0, this.set()
            }
          };
        return d(e, "duration", {
          get: function() {
            var t = i.settings;
            return i.isType("slider") && o.Run.offset ? t.rewindDuration : t.animationDuration
          }
        }), t.on("move", function() {
          e.set()
        }), t.on(["build.before", "resize", "translate.jump"], function() {
          e.disable()
        }), t.on("run", function() {
          e.enable()
        }), t.on("destroy", function() {
          e.remove()
        }), e
      },
      Direction: function(t, e, i) {
        var o = {
          mount: function() {
            this.value = t.settings.direction
          },
          resolve: function(t) {
            var e = t.slice(0, 1);
            return this.is("rtl") ? t.split(e).join(L[e]) : t
          },
          is: function(t) {
            return this.value === t
          },
          addClass: function() {
            e.Html.root.classList.add(t.settings.classes.direction[this.value])
          },
          removeClass: function() {
            e.Html.root.classList.remove(t.settings.classes.direction[this.value])
          }
        };
        return d(o, "value", {
          get: function() {
            return o._v
          },
          set: function(t) {
            -1 < D.indexOf(t) && (o._v = t)
          }
        }), i.on(["destroy", "update"], function() {
          o.removeClass()
        }), i.on("update", function() {
          o.mount()
        }), i.on(["build.before", "update"], function() {
          o.addClass()
        }), o
      },
      Peek: function(i, t, e) {
        var o = {
          mount: function() {
            this.value = i.settings.peek
          }
        };
        return d(o, "value", {
          get: function() {
            return o._v
          },
          set: function(t) {
            u(t) ? (t.before = y(t.before), t.after = y(t.after)) : t = y(t), o._v = t
          }
        }), d(o, "reductor", {
          get: function() {
            var t = o.value,
              e = i.settings.perView;
            return u(t) ? t.before / e + t.after / e : 2 * t / e
          }
        }), e.on(["resize", "update"], function() {
          o.mount()
        }), o
      },
      Sizes: function(t, o, e) {
        var i = {
          setupSlides: function() {
            for (var t = this.slideWidth + "px", e = o.Html.slides, i = 0; i < e.length; i++) e[i].style.width = t
          },
          setupWrapper: function(t) {
            o.Html.wrapper.style.width = this.wrapperSize + "px"
          },
          remove: function() {
            for (var t = o.Html.slides, e = 0; e < t.length; e++) t[e].style.width = "";
            o.Html.wrapper.style.width = ""
          }
        };
        return d(i, "length", {
          get: function() {
            return o.Html.slides.length
          }
        }), d(i, "width", {
          get: function() {
            return o.Html.root.offsetWidth
          }
        }), d(i, "wrapperSize", {
          get: function() {
            return i.slideWidth * i.length + o.Gaps.grow + o.Clones.grow
          }
        }), d(i, "slideWidth", {
          get: function() {
            return i.width / t.settings.perView - o.Peek.reductor - o.Gaps.reductor
          }
        }), e.on(["build.before", "resize", "update"], function() {
          i.setupSlides(), i.setupWrapper()
        }), e.on("destroy", function() {
          i.remove()
        }), i
      },
      Gaps: function(e, r, t) {
        var i = {
          apply: function(t) {
            for (var e = 0, i = t.length; e < i; e++) {
              var o = t[e].style,
                n = r.Direction.value;
              o[v[n][0]] = 0 !== e ? this.value / 2 + "px" : "", e !== t.length - 1 ? o[v[n][1]] = this.value / 2 + "px" : o[v[n][1]] = ""
            }
          },
          remove: function(t) {
            for (var e = 0, i = t.length; e < i; e++) {
              var o = t[e].style;
              o.marginLeft = "", o.marginRight = ""
            }
          }
        };
        return d(i, "value", {
          get: function() {
            return y(e.settings.gap)
          }
        }), d(i, "grow", {
          get: function() {
            return i.value * (r.Sizes.length - 1)
          }
        }), d(i, "reductor", {
          get: function() {
            var t = e.settings.perView;
            return i.value * (t - 1) / t
          }
        }), t.on(["build.after", "update"], b(function() {
          i.apply(r.Html.wrapper.children)
        }, 30)), t.on("destroy", function() {
          i.remove(r.Html.wrapper.children)
        }), i
      },
      Move: function(t, o, n) {
        var e = {
          mount: function() {
            this._o = 0
          },
          make: function(t) {
            var e = this,
              i = 0 < arguments.length && void 0 !== t ? t : 0;
            this.offset = i, n.emit("move", {
              movement: this.value
            }), o.Transition.after(function() {
              n.emit("move.after", {
                movement: e.value
              })
            })
          }
        };
        return d(e, "offset", {
          get: function() {
            return e._o
          },
          set: function(t) {
            e._o = a(t) ? 0 : y(t)
          }
        }), d(e, "translate", {
          get: function() {
            return o.Sizes.slideWidth * t.index
          }
        }), d(e, "value", {
          get: function() {
            var t = this.offset,
              e = this.translate;
            return o.Direction.is("rtl") ? e + t : e - t
          }
        }), n.on(["build.before", "run"], function() {
          e.make()
        }), e
      },
      Clones: function(_, m, t) {
        var e = {
          mount: function() {
            this.items = [], _.isType("carousel") && (this.items = this.collect())
          },
          collect: function(t) {
            for (var e = 0 < arguments.length && void 0 !== t ? t : [], i = m.Html.slides, o = _.settings, n = o.perView, r = o.classes, s = n + +!!_.settings.peek, a = i.slice(0, s), l = i.slice(-s), u = 0; u < Math.max(1, Math.floor(n / i.length)); u++) {
              for (var c = 0; c < a.length; c++) {
                var h = a[c].cloneNode(!0);
                h.classList.add(r.cloneSlide), e.push(h)
              }
              for (var d = 0; d < l.length; d++) {
                var p = l[d].cloneNode(!0);
                p.classList.add(r.cloneSlide), e.unshift(p)
              }
            }
            return e
          },
          append: function() {
            for (var t = this.items, e = m.Html, i = e.wrapper, o = e.slides, n = Math.floor(t.length / 2), r = t.slice(0, n).reverse(), s = t.slice(n, t.length), a = m.Sizes.slideWidth + "px", l = 0; l < s.length; l++) i.appendChild(s[l]);
            for (var u = 0; u < r.length; u++) i.insertBefore(r[u], o[0]);
            for (var c = 0; c < t.length; c++) t[c].style.width = a
          },
          remove: function() {
            for (var t = this.items, e = 0; e < t.length; e++) m.Html.wrapper.removeChild(t[e])
          }
        };
        return d(e, "grow", {
          get: function() {
            return (m.Sizes.slideWidth + m.Gaps.value) * e.items.length
          }
        }), t.on("update", function() {
          e.remove(), e.mount(), e.append()
        }), t.on("build.before", function() {
          _.isType("carousel") && e.append()
        }), t.on("destroy", function() {
          e.remove()
        }), e
      },
      Resize: function(t, e, i) {
        var o = new x,
          n = {
            mount: function() {
              this.bind()
            },
            bind: function() {
              o.on("resize", window, b(function() {
                i.emit("resize")
              }, t.settings.throttle))
            },
            unbind: function() {
              o.off("resize", window)
            }
          };
        return i.on("destroy", function() {
          n.unbind(), o.destroy()
        }), n
      },
      Build: function(i, o, t) {
        var e = {
          mount: function() {
            t.emit("build.before"), this.typeClass(), this.activeClass(), t.emit("build.after")
          },
          typeClass: function() {
            o.Html.root.classList.add(i.settings.classes[i.settings.type])
          },
          activeClass: function() {
            var e = i.settings.classes,
              t = o.Html.slides[i.index];
            t && (t.classList.add(e.activeSlide), C(t).forEach(function(t) {
              t.classList.remove(e.activeSlide)
            }))
          },
          removeClasses: function() {
            var e = i.settings.classes;
            o.Html.root.classList.remove(e[i.settings.type]), o.Html.slides.forEach(function(t) {
              t.classList.remove(e.activeSlide)
            })
          }
        };
        return t.on(["destroy", "update"], function() {
          e.removeClasses()
        }), t.on(["resize", "update"], function() {
          e.mount()
        }), t.on("move.after", function() {
          e.activeClass()
        }), e
      },
      Run: function(r, i, s) {
        var t = {
          mount: function() {
            this._o = !1
          },
          make: function(t) {
            var e = this;
            r.disabled || (r.disable(), this.move = t, s.emit("run.before", this.move), this.calculate(), s.emit("run", this.move), i.Transition.after(function() {
              (e.isOffset("<") || e.isOffset(">")) && (e._o = !1, s.emit("run.offset", e.move)), s.emit("run.after", e.move), r.enable()
            }))
          },
          calculate: function() {
            var t = this.move,
              e = this.length,
              i = t.steps,
              o = t.direction,
              n = "number" == typeof y(i) && 0 !== y(i);
            switch (o) {
              case ">":
                ">" === i ? r.index = e : this.isEnd() ? (r.isType("slider") && !r.settings.rewind || (this._o = !0, r.index = 0), s.emit("run.end", t)) : n ? r.index += Math.min(e - r.index, -y(i)) : r.index++;
                break;
              case "<":
                "<" === i ? r.index = 0 : this.isStart() ? (r.isType("slider") && !r.settings.rewind || (this._o = !0, r.index = e), s.emit("run.start", t)) : n ? r.index -= Math.min(r.index, y(i)) : r.index--;
                break;
              case "=":
                r.index = i
            }
          },
          isStart: function() {
            return 0 === r.index
          },
          isEnd: function() {
            return r.index === this.length
          },
          isOffset: function(t) {
            return this._o && this.move.direction === t
          }
        };
        return d(t, "move", {
          get: function() {
            return this._m
          },
          set: function(t) {
            this._m = {
              direction: t.substr(0, 1),
              steps: t.substr(1) ? t.substr(1) : 0
            }
          }
        }), d(t, "length", {
          get: function() {
            var t = r.settings,
              e = i.Html.slides.length;
            return r.isType("slider") && "center" !== t.focusAt && t.bound ? e - 1 - (y(t.perView) - 1) + y(t.focusAt) : e - 1
          }
        }), d(t, "offset", {
          get: function() {
            return this._o
          }
        }), t
      },
      Swipe: function(d, p, _) {
        var i = new x,
          m = 0,
          f = 0,
          g = 0,
          o = !1,
          v = !0,
          n = !!T && {
            passive: !0
          },
          t = {
            mount: function() {
              this.bindSwipeStart()
            },
            start: function(t) {
              if (!o && !d.disabled) {
                this.disable();
                var e = this.touches(t);
                v = !0, m = null, f = y(e.pageX), g = y(e.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), _.emit("swipe.start")
              }
            },
            move: function(t) {
              if (!d.disabled) {
                var e = d.settings,
                  i = e.touchAngle,
                  o = e.touchRatio,
                  n = e.classes,
                  r = this.touches(t),
                  s = y(r.pageX) - f,
                  a = y(r.pageY) - g,
                  l = Math.abs(s << 2),
                  u = Math.abs(a << 2),
                  c = Math.sqrt(l + u),
                  h = Math.sqrt(u);
                if (m = Math.asin(h / c), !(v && 180 * m / Math.PI < i)) return v = !1;
                t.stopPropagation(), p.Move.make(s * parseFloat(o)), p.Html.root.classList.add(n.dragging), _.emit("swipe.move")
              }
            },
            end: function(t) {
              if (!d.disabled) {
                var e = d.settings,
                  i = this.touches(t),
                  o = this.threshold(t),
                  n = i.pageX - f,
                  r = 180 * m / Math.PI,
                  s = Math.round(n / p.Sizes.slideWidth);
                this.enable(), v && (o < n && r < e.touchAngle ? (e.perTouch && (s = Math.min(s, y(e.perTouch))), p.Direction.is("rtl") && (s = -s), p.Run.make(p.Direction.resolve("<" + s))) : n < -o && r < e.touchAngle ? (e.perTouch && (s = Math.max(s, -y(e.perTouch))), p.Direction.is("rtl") && (s = -s), p.Run.make(p.Direction.resolve(">" + s))) : p.Move.make()), p.Html.root.classList.remove(e.classes.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), _.emit("swipe.end")
              }
            },
            bindSwipeStart: function() {
              var e = this,
                t = d.settings;
              t.swipeThreshold && i.on(G[0], p.Html.wrapper, function(t) {
                e.start(t)
              }, n), t.dragThreshold && i.on(G[1], p.Html.wrapper, function(t) {
                e.start(t)
              }, n)
            },
            unbindSwipeStart: function() {
              i.off(G[0], p.Html.wrapper, n), i.off(G[1], p.Html.wrapper, n)
            },
            bindSwipeMove: function() {
              var e = this;
              i.on(A, p.Html.wrapper, b(function(t) {
                e.move(t)
              }, d.settings.throttle), n)
            },
            unbindSwipeMove: function() {
              i.off(A, p.Html.wrapper, n)
            },
            bindSwipeEnd: function() {
              var e = this;
              i.on(M, p.Html.wrapper, function(t) {
                e.end(t)
              })
            },
            unbindSwipeEnd: function() {
              i.off(M, p.Html.wrapper)
            },
            touches: function(t) {
              return -1 < O.indexOf(t.type) ? t : t.touches[0] || t.changedTouches[0]
            },
            threshold: function(t) {
              var e = d.settings;
              return -1 < O.indexOf(t.type) ? e.dragThreshold : e.swipeThreshold
            },
            enable: function() {
              return o = !1, p.Transition.enable(), this
            },
            disable: function() {
              return o = !0, p.Transition.disable(), this
            }
          };
        return _.on("build.after", function() {
          p.Html.root.classList.add(d.settings.classes.swipeable)
        }), _.on("destroy", function() {
          t.unbindSwipeStart(), t.unbindSwipeMove(), t.unbindSwipeEnd(), i.destroy()
        }), t
      },
      Images: function(t, e, i) {
        var o = new x,
          n = {
            mount: function() {
              this.bind()
            },
            bind: function() {
              o.on("dragstart", e.Html.wrapper, this.dragstart)
            },
            unbind: function() {
              o.off("dragstart", e.Html.wrapper)
            },
            dragstart: function(t) {
              t.preventDefault()
            }
          };
        return i.on("destroy", function() {
          n.unbind(), o.destroy()
        }), n
      },
      Anchors: function(t, e, i) {
        var o = new x,
          n = !1,
          r = !1,
          s = {
            mount: function() {
              this._a = e.Html.wrapper.querySelectorAll("a"), this.bind()
            },
            bind: function() {
              o.on("click", e.Html.wrapper, this.click)
            },
            unbind: function() {
              o.off("click", e.Html.wrapper)
            },
            click: function(t) {
              r && (t.stopPropagation(), t.preventDefault())
            },
            detach: function() {
              if (r = !0, !n) {
                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !1, this.items[t].setAttribute("data-href", this.items[t].getAttribute("href")), this.items[t].removeAttribute("href");
                n = !0
              }
              return this
            },
            attach: function() {
              if (r = !1, n) {
                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !0, this.items[t].setAttribute("href", this.items[t].getAttribute("data-href"));
                n = !1
              }
              return this
            }
          };
        return d(s, "items", {
          get: function() {
            return s._a
          }
        }), i.on("swipe.move", function() {
          s.detach()
        }), i.on("swipe.end", function() {
          e.Transition.after(function() {
            s.attach()
          })
        }), i.on("destroy", function() {
          s.attach(), s.unbind(), o.destroy()
        }), s
      },
      Controls: function(o, e, t) {
        var i = new x,
          n = {
            mount: function() {
              this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll('[data-glide-el^="controls"]'), this.addBindings()
            },
            setActive: function() {
              for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children)
            },
            removeActive: function() {
              for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children)
            },
            addClass: function(t) {
              var e = o.settings,
                i = t[o.index];
              i.classList.add(e.classes.activeNav), C(i).forEach(function(t) {
                t.classList.remove(e.classes.activeNav)
              })
            },
            removeClass: function(t) {
              t[o.index].classList.remove(o.settings.classes.activeNav)
            },
            addBindings: function() {
              for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children)
            },
            removeBindings: function() {
              for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children)
            },
            bind: function(t) {
              for (var e = 0; e < t.length; e++) i.on(["click", "touchstart"], t[e], this.click)
            },
            unbind: function(t) {
              for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e])
            },
            click: function(t) {
              t.preventDefault(), e.Run.make(e.Direction.resolve(t.currentTarget.getAttribute("data-glide-dir")))
            }
          };
        return d(n, "items", {
          get: function() {
            return n._c
          }
        }), t.on(["mount.after", "move.after"], function() {
          n.setActive()
        }), t.on("destroy", function() {
          n.removeBindings(), n.removeActive(), i.destroy()
        }), n
      },
      Keyboard: function(t, e, i) {
        var o = new x,
          n = {
            mount: function() {
              t.settings.keyboard && this.bind()
            },
            bind: function() {
              o.on("keyup", document, this.press)
            },
            unbind: function() {
              o.off("keyup", document)
            },
            press: function(t) {
              39 === t.keyCode && e.Run.make(e.Direction.resolve(">")), 37 === t.keyCode && e.Run.make(e.Direction.resolve("<"))
            }
          };
        return i.on(["destroy", "update"], function() {
          n.unbind()
        }), i.on("update", function() {
          n.mount()
        }), i.on("destroy", function() {
          o.destroy()
        }), n
      },
      Autoplay: function(e, i, t) {
        var o = new x,
          n = {
            mount: function() {
              this.start(), e.settings.hoverpause && this.bind()
            },
            start: function() {
              var t = this;
              e.settings.autoplay && a(this._i) && (this._i = setInterval(function() {
                t.stop(), i.Run.make(">"), t.start()
              }, this.time))
            },
            stop: function() {
              this._i = clearInterval(this._i)
            },
            bind: function() {
              var t = this;
              o.on("mouseover", i.Html.root, function() {
                t.stop()
              }), o.on("mouseout", i.Html.root, function() {
                t.start()
              })
            },
            unbind: function() {
              o.off(["mouseover", "mouseout"], i.Html.root)
            }
          };
        return d(n, "time", {
          get: function() {
            return y(i.Html.slides[e.index].getAttribute("data-glide-autoplay") || e.settings.autoplay)
          }
        }), t.on(["destroy", "update"], function() {
          n.unbind()
        }), t.on(["run.before", "pause", "destroy", "swipe.start", "update"], function() {
          n.stop()
        }), t.on(["run.after", "play", "swipe.end"], function() {
          n.start()
        }), t.on("update", function() {
          n.mount()
        }), t.on("destroy", function() {
          o.destroy()
        }), n
      },
      Breakpoints: function(t, e, i) {
        var o = new x,
          n = t.settings,
          r = S(n.breakpoints),
          s = l({}, n),
          a = {
            match: function(t) {
              if (void 0 !== window.matchMedia)
                for (var e in t)
                  if (t.hasOwnProperty(e) && window.matchMedia("(max-width: " + e + "px)").matches) return t[e];
              return s
            }
          };
        return l(n, a.match(r)), o.on("resize", window, b(function() {
          t.settings = p(n, a.match(r))
        }, t.settings.throttle)), i.on("update", function() {
          r = S(r), s = l({}, n)
        }), i.on("destroy", function() {
          o.off("resize", window)
        }), a
      }
    };
    return function(t, e) {
      if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + H(e));
      t.prototype = Object.create(e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e
    }(F, e), t(F, [{
      key: "mount",
      value: function(t) {
        var e = 0 < arguments.length && void 0 !== t ? t : {};
        return function t(e, i, o) {
          null === e && (e = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(e, i);
          if (void 0 === n) {
            var r = Object.getPrototypeOf(e);
            return null === r ? void 0 : t(r, i, o)
          }
          if ("value" in n) return n.value;
          var s = n.get;
          return void 0 !== s ? s.call(o) : void 0
        }(F.prototype.__proto__ || Object.getPrototypeOf(F.prototype), "mount", this).call(this, l({}, B, e))
      }
    }]), F;

    function F() {
      return i(this, F),
        function(t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != H(e) && "function" != typeof e ? t : e
        }(this, (F.__proto__ || Object.getPrototypeOf(F)).apply(this, arguments))
    }
  }, "object" == H(e) && void 0 !== t ? t.exports = r() : void 0 === (n = "function" == typeof(o = r) ? o.call(e, i, e, t) : o) || (t.exports = n)
}, function(t, e, i) {
  "use strict";
  i.r(e);
  var c = i(5);
  e.default = function() {
    try {
      t = document.querySelector(".question__close"), e = document.querySelector(".question"), t.addEventListener("click", function() {
        e.classList.remove("question-active")
      }), setTimeout(function() {
        var t = document.querySelector(".question");
        null != t && t.classList.add("question-active")
      }, 3e3)
    } catch (t) {}
    var t, e;

    function i(t, e, i, o, n) {
      try {
        var r = document.querySelectorAll(t),
          s = document.querySelector(e),
          a = document.querySelector(i),
          l = function() {
            var t = document.createElement("div");
            t.style.overflowY = "scroll", t.style.width = "50px", t.style.height = "50px", t.style.visibility = "hidden", document.body.appendChild(t);
            var e = t.offsetWidth - t.clientWidth;
            return document.body.removeChild(t), e
          }();
        r.forEach(function(t) {
          t.addEventListener("click", function(t) {
            t.preventDefault(),
              function(t, e) {
                document.body.style.marginRight = "".concat(e, "px"), document.querySelector("footer").style.width = "100vw", document.querySelector("header").style.width = "100vw";
                try {
                  document.querySelector(".selection").style.width = "100vw"
                } catch (t) {}
                document.body.style.overflow = "hidden", c.default.fadeIn(t, 500)
              }(s, l)
          })
        }), s.addEventListener("click", function(t) {
          a.contains(t.target) || !t.target.classList.contains("modal") && !t.target.classList.contains("reply") || u(s), t.target.classList.contains(o) && u(s)
        }), n()
      } catch (t) {}
    }

    function u(t) {
      c.default.fadeOut(t, 500, function() {
        document.body.style.marginRight = "0px", document.body.style.overflow = "", document.querySelector("header").style.width = "inherit", document.querySelector("footer").style.width = "inherit";
        try {
          document.querySelector(".selection").style.width = "inherit"
        } catch (t) {}
      })
    }
    i(".specialistpage__item-more", ".modal", ".modal__body", "modal__close"), i(".newsslider__slide", ".modal", ".modal__body", "modal__close"), i("#reply", ".reply", ".reply__body", "reply__close", function() {
      var t = document.querySelector(".question");
      document.querySelector("#reply").addEventListener("click", function() {
        t.classList.remove("question-active")
      })
    }), i(".diseasepage__trigger", ".modal", ".modal__body", "modal__close")
  }
}, function(t, e, i) {
  "use strict";
  i.r(e);
  i(6);
  var o, n = ((o = {}).fadeOut = function(e, t, i) {
    var o = r(t, function(t) {
      e.style.opacity = 1 - t, 1 === t && (e.style.display = "none")
    }, i);
    requestAnimationFrame(o)
  }, o.fadeIn = function(e, t, i, o) {
    e.style.display = i || "block";
    var n = r(t, function(t) {
      e.style.opacity = t
    }, o);
    requestAnimationFrame(n)
  }, o);

  function r(n, r, s) {
    var a;
    return function t(e) {
      var i = e - (a = a || e),
        o = Math.min(i / n, 1);
      r(o), i < n ? requestAnimationFrame(t) : "function" == typeof s && s()
    }
  }
  e.default = n
}, function(t, e) {
  e.endianness = function() {
    return "LE"
  }, e.hostname = function() {
    return "undefined" != typeof location ? location.hostname : ""
  }, e.loadavg = function() {
    return []
  }, e.uptime = function() {
    return 0
  }, e.freemem = function() {
    return Number.MAX_VALUE
  }, e.totalmem = function() {
    return Number.MAX_VALUE
  }, e.cpus = function() {
    return []
  }, e.type = function() {
    return "Browser"
  }, e.release = function() {
    return "undefined" != typeof navigator ? navigator.appVersion : ""
  }, e.networkInterfaces = e.getNetworkInterfaces = function() {
    return {}
  }, e.arch = function() {
    return "javascript"
  }, e.platform = function() {
    return "browser"
  }, e.tmpdir = e.tmpDir = function() {
    return "/tmp"
  }, e.EOL = "\n", e.homedir = function() {
    return "/"
  }
}, function(t, e, i) {
  "use strict";
  i.r(e);
  var o = i(8);
  e.default = function() {
    o.then(function() {
      try {
        var t = o.map("map", {
          center: [62.241600, 25.759190],
          zoom: 16
        });
        o.marker([62.241600, 25.759190]).addTo(t)
      } catch (t) {}
    })
  }
}, function(module, exports, __webpack_require__) {
  var require, require, zm;
  zm = function() {
    var define, module, exports;
    return function n(r, s, a) {
      function l(e, t) {
        if (!s[e]) {
          if (!r[e]) {
            if (!t && "function" == typeof require && require) return require(e, !0);
            if (u) return u(e, !0);
            var i = new Error("Cannot find module '" + e + "'");
            throw i.code = "MODULE_NOT_FOUND", i
          }
          var o = s[e] = {
            exports: {}
          };
          r[e][0].call(o.exports, function(t) {
            return l(r[e][1][t] || t)
          }, o, o.exports, n, r, s, a)
        }
        return s[e].exports
      }
      for (var u = "function" == typeof require && require, t = 0; t < a.length; t++) l(a[t]);
      return l
    }({
      1: [function(t, e, i) {
        var o = ".dg-firm-card__link,.dg-firm-card__phone,.dg-schedule__today-inner{text-overflow:ellipsis}.dg-popup__link,.dg-ruler__label{-webkit-tap-highlight-color:transparent}.leaflet-image-layer,.leaflet-layer,.leaflet-map-pane canvas,.leaflet-map-pane svg,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-pane,.leaflet-tile,.leaflet-tile-container,.leaflet-zoom-box{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden;outline:0;font:12px/1.5 \"Helvetica Neue\",Arial,Helvetica,sans-serif}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-overlay-pane svg,.leaflet-tooltip{-moz-user-select:none}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-overlay-pane svg,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer{max-width:none!important}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-drag{-ms-touch-action:none;touch-action:none}.leaflet-tile{-webkit-filter:inherit;filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.dg-scroller_hidden_true .dg-scroller__bar-wrapper,.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-zoom-box{width:0;height:0;-webkit-box-sizing:border-box;box-sizing:border-box;z-index:800;border:2px dotted #38f;background:rgba(255,255,255,.5)}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto;float:left;clear:both}.leaflet-bottom,.leaflet-top{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-right .leaflet-control{float:right;margin-right:10px}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-fade-anim .leaflet-tile{will-change:opacity}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}.leaflet-zoom-anim .leaflet-zoom-animated{will-change:transform;-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1),-webkit-transform .25s cubic-bezier(0,0,.25,1)}.leaflet-pan-anim .leaflet-tile,.leaflet-zoom-anim .leaflet-tile{-webkit-transition:none;transition:none}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-control,.leaflet-popup-pane{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing}.leaflet-image-layer,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-image-layer.leaflet-interactive,.leaflet-marker-icon.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container a{color:#0078A8}.leaflet-container a.leaflet-active{outline:orange solid 2px}.leaflet-bar{-webkit-box-shadow:0 1px 5px rgba(0,0,0,.65);box-shadow:0 1px 5px rgba(0,0,0,.65);border-radius:4px}.leaflet-bar a,.leaflet-bar a:hover{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px 'Lucida Console',Monaco,monospace;text-indent:1px}.leaflet-control-zoom-out{font-size:20px}.leaflet-touch .leaflet-control-zoom-in{font-size:22px}.leaflet-touch .leaflet-control-zoom-out{font-size:24px}.leaflet-control-layers{-webkit-box-shadow:0 1px 5px rgba(0,0,0,.4);box-shadow:0 1px 5px rgba(0,0,0,.4);background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(dist/css/images/layers.png);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(dist/css/images/layers-2x.png);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(dist/css/images/marker-icon.png)}.leaflet-container .leaflet-control-attribution{background:#fff;background:rgba(255,255,255,.7);margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover{text-decoration:underline}.leaflet-container .leaflet-control-attribution,.leaflet-container .leaflet-control-scale{font-size:11px}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;font-size:11px;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff;background:rgba(255,255,255,.5)}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-bar,.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers{-webkit-box-shadow:none;box-shadow:none}.leaflet-touch .leaflet-bar,.leaflet-touch .leaflet-control-layers{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center}.leaflet-popup-content-wrapper,[class^=dg-] caption,[class^=dg-] th{text-align:left}.leaflet-popup-tip-container{width:40px;position:absolute;left:50%;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;-webkit-box-shadow:0 3px 14px rgba(0,0,0,.4);box-shadow:0 3px 14px rgba(0,0,0,.4)}.leaflet-container a.leaflet-popup-close-button{border:none;font:16px/14px Tahoma,Verdana,sans-serif;color:#c3c3c3;text-decoration:none;background:0 0}.leaflet-container a.leaflet-popup-close-button:hover{color:#999}.leaflet-oldie .leaflet-popup-content-wrapper{zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678, M12=.70710678, M21=-.70710678, M22=.70710678)}.leaflet-oldie .leaflet-popup-tip-container{margin-top:-1px}.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.4);box-shadow:0 1px 3px rgba(0,0,0,.4)}.leaflet-tooltip.leaflet-clickable{cursor:pointer;pointer-events:auto}.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before,.leaflet-tooltip-top:before{position:absolute;pointer-events:none;border:6px solid transparent;background:0 0;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-popup,[class^=dg-]>[class^=dg-]:last-child{margin-bottom:0}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}[class^=dg-],[class^=dg-]:after,[class^=dg-]:before{-webkit-box-sizing:content-box;box-sizing:content-box;margin:0;padding:0;vertical-align:baseline;font-weight:inherit;font-style:inherit;font-size:1em;font-family:inherit;line-height:1.2}[class^=dg-] abbr,[class^=dg-] fieldset,[class^=dg-] img{border:0}[class^=dg-] blockquote,[class^=dg-] q{quotes:none}[class^=dg-] blockquote:after,[class^=dg-] blockquote:before,[class^=dg-] q:after,[class^=dg-] q:before{content:'';content:none}[class^=dg-] ol,[class^=dg-] ul{list-style:none}[class^=dg-] table{border-spacing:0;border-collapse:collapse}[class^=dg-] td,[class^=dg-] th{vertical-align:middle}[class^=dg-] button::-moz-focus-inner,[class^=dg-] input::-moz-focus-inner{padding:0;border:0}.dg-label{position:absolute;top:0;left:0;max-width:none;max-height:none;width:300px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dg-label__content{display:inline-block;overflow:hidden;padding:3px 7px;min-width:30px;max-width:300px;width:auto;border-width:1px;border-style:solid;border-radius:2px;vertical-align:top;font-size:12px;border-color:#323232;border-color:rgba(50,50,50,.85);background:#323232;background:rgba(50,50,50,.85);color:#ffd26e}.leaflet-top .dg-label_name_location-error{top:5px}.leaflet-right .dg-label_name_location-error{right:40px;left:auto;text-align:right}.leaflet-bottom .dg-label_name_location-error{top:4px}.leaflet-left .dg-label_name_location-error{left:40px}.leaflet-popup-tip-container{height:0}.leaflet-popup-content-wrapper{overflow:hidden;padding:0;min-width:60px;min-height:50px;border:0;border-radius:3px;-webkit-box-shadow:none;box-shadow:none;color:#e6e6e6;font-size:14px;-webkit-transition:opacity ease-out .2s,max-height ease-out .2s,height ease-out .2s;transition:opacity ease-out .2s,max-height ease-out .2s,height ease-out .2s;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;background:rgba(50,50,50,.9)}.leaflet-popup-content-wrapper:before{float:right;width:30px;height:17px;content:''}.leaflet-popup-content{position:relative;margin:16px;width:auto;line-height:1.4}.leaflet-popup a{outline:0}.leaflet-popup-content p{margin:0}.leaflet-popup-scrolled{overflow:visible;border:0}.leaflet-popup-inner{position:relative;z-index:0}.leaflet-popup_show_true{-webkit-transition:opacity ease-in-out .2s,height ease-out .2s,-webkit-transform ease-in-out .2s;transition:opacity ease-in-out .2s,height ease-out .2s,-webkit-transform ease-in-out .2s;transition:transform ease-in-out .2s,opacity ease-in-out .2s,height ease-out .2s;transition:transform ease-in-out .2s,opacity ease-in-out .2s,height ease-out .2s,-webkit-transform ease-in-out .2s;-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.leaflet-popup_show_false{opacity:0!important;-webkit-transition:all ease-in-out .1s;transition:all ease-in-out .1s;-webkit-transform:scale(.2);-ms-transform:scale(.2);transform:scale(.2)}.leaflet-popup_preloader_true{width:384px;height:52px}.leaflet-map-pane .leaflet-popup-tip-container{position:absolute;top:auto;bottom:0;left:50%;margin-left:-29px;width:58px;height:47px;background-repeat:no-repeat;-webkit-transform:translateY(47px);-ms-transform:translateY(47px);transform:translateY(47px);pointer-events:none}.leaflet-popup-tip{display:none}.leaflet-popup-tip-container_svg{background-repeat:no-repeat;background-image:url(https://maps.api.2gis.ru/2.0/img/DGPopup__popupShadow.png);background-position:50% 95%;background-size:36px 12px}.leaflet-retina .leaflet-popup-tip-container_svg{background-image:url(https://maps.api.2gis.ru/2.0/img/DGPopup__popupShadow@2x.png)}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:3px;right:3px;z-index:1;overflow:hidden;padding:0;width:30px;height:30px;text-align:center;font-weight:400;font-size:18px;line-height:30px;cursor:pointer}.no-touch .leaflet-container a.leaflet-popup-close-button:hover{border-radius:2px;-webkit-transition:all .2s;transition:all .2s;background-color:#222;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 1px 3px rgba(0,0,0,.5)}.leaflet-container a.leaflet-popup-close-button:active{color:#777}.leaflet-container a.leaflet-popup-close-button:after{position:absolute;z-index:2;content:'';top:-3px;right:-5px;width:40px;height:40px}.leaflet-popup-tip-container_image{background-repeat:no-repeat;background-image:url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2258%22%20height%3D%2247%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M0%200c12.643%200%2028%207.115%2028%2044h2c0-36.885%2015.358-44%2028-44h-58z%22%20fill%3D%22rgba(50%2C50%2C50%2C.9)%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E%0A')}.leaflet-map-pane .leaflet-popup-tip-container_svg{fill:rgba(50,50,50,.9)}.dg-wrapper{position:relative;overflow:hidden}.dg-scroller{height:100%;overflow-y:scroll;border:0}.dg-scroller::-webkit-scrollbar{width:0}.dg-scroller__bar{z-index:1;right:0;background:#999}.dg-scroller__bar_h{bottom:2px;height:8px}.dg-header__title{width:100%;margin:0;-webkit-box-sizing:border-box;box-sizing:border-box;background:#999}.dg-header__title_state_fixed{position:absolute;z-index:1}.dg-scroller_hidden_true{overflow:auto}.dg-scroller__wrapper{position:relative;overflow:hidden}.dg-scroller__bar-wrapper{position:absolute;top:18px;right:3px;bottom:4px;width:7px;border-radius:5px}.dg-popup__header+.dg-popup__container-wrapper .dg-scroller__bar-wrapper{top:4px}.dg-scroller__bar{position:absolute;min-height:20px;width:7px;border-radius:3px;pointer-events:auto}.leaflet-popup-scrolled .dg-popup__footer:before,.leaflet-popup-scrolled .dg-popup__header:after{display:block;width:100%;height:1px;content:''}.scroller__bar-wrapper .scroller__bar{background-color:#665b4f}.scroller__bar-wrapper:hover .scroller__bar{background-color:#897a6b}.dg-popup__container{margin:0}.leaflet-popup-scrolled .dg-popup__container{padding:8px 14px 8px 0}.dg-popup__header{position:relative;padding-bottom:12px}.leaflet-popup-scrolled .dg-popup__header:after{position:relative;top:12px}.dg-popup__footer{position:relative;bottom:0;overflow:hidden}.dg-control-round,.dg-control-round__icon{position:relative;width:30px;height:30px;border-radius:50%}.dg-popup_hidden_true{display:none}.leaflet-popup-scrolled .dg-popup__footer:before,.leaflet-popup-scrolled .dg-popup__header:after{border-bottom:1px solid #636363;background-color:#494949}.dg-control-round{padding:5px;cursor:default}.dg-control-round__icon{display:block;background-color:#f0f0f0;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#fff),to(#e0e0e0));background-image:-webkit-linear-gradient(top,#fff 0,#e0e0e0 100%);background-image:linear-gradient(to bottom,#fff 0,#e0e0e0 100%);color:#2b2a29;text-align:center;text-decoration:none;text-shadow:0 1px 0 #fff;font-size:22px;line-height:30px;cursor:pointer}.no-touch .dg-control-round__icon:hover{background-color:#f5f5f5;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#ebebeb),to(#fff));background-image:-webkit-linear-gradient(top,#ebebeb 0,#fff 100%);background-image:linear-gradient(to bottom,#ebebeb 0,#fff 100%)}.dg-control-round__icon:active,.dg-control-round__icon_state_active,.no-touch .dg-control-round__icon:active{background-color:#ebebeb;background-image:-webkit-gradient(linear,left top,left bottom,color-stop(0,#d6d6d6),to(#fff));background-image:-webkit-linear-gradient(top,#d6d6d6 0,#fff 100%);background-image:linear-gradient(to bottom,#d6d6d6 0,#fff 100%)}.leaflet-touch .dg-control-round__icon:before{position:absolute;top:-10px;right:-15px;bottom:-10px;left:-15px;content:''}.dg-control-round_is-hidden_true{display:none}.dg-control-round{background-color:#3d3d3d;-webkit-box-shadow:0 3px 5px 0 rgba(0,0,0,.3);box-shadow:0 3px 5px 0 rgba(0,0,0,.3)}.dg-control-round__icon{-webkit-box-shadow:0 2px 2px 0 rgba(0,0,0,.4);box-shadow:0 2px 2px 0 rgba(0,0,0,.4)}.no-touch .dg-control-round__icon:hover{-webkit-box-shadow:inset 0 1px #fff,0 0 0 1px rgba(0,0,0,.3),0 1px 0 1px rgba(0,0,0,.4);box-shadow:inset 0 1px #fff,0 0 0 1px rgba(0,0,0,.3),0 1px 0 1px rgba(0,0,0,.4)}.dg-control-round__icon:active,.dg-control-round__icon_state_active,.no-touch .dg-control-round__icon:active{-webkit-box-shadow:inset 0 1px 1px 1px rgba(0,0,0,.2),0 0 0 1px rgba(0,0,0,.3),0 -1px 1px 0 #000;box-shadow:inset 0 1px 1px 1px rgba(0,0,0,.2),0 0 0 1px rgba(0,0,0,.3),0 -1px 1px 0 #000}.leaflet-disabled .dg-control-round__icon,.leaflet-disabled .dg-control-round__icon:active,.no-touch .leaflet-disabled .dg-control-round__icon:hover{background-image:none;cursor:default;background-color:#b8b8b8;-webkit-box-shadow:none;box-shadow:none}.dg-museum{position:absolute;top:0;left:0;right:0;z-index:1500;padding:4px 5px 8px;background:#333;color:#fff;opacity:.97;text-align:center}.dg-museum-browser{position:relative;top:4px;display:inline-block;width:16px;height:16px;margin:0 4px;background:url(https://maps.api.2gis.ru/2.0/img/DGMuseum.jpg) left top no-repeat}.dg-museum__chrome{background-position:0 0}.dg-museum__chrome:hover{background-position:0 -16px}.dg-museum__firefox{background-position:-16px 0}.dg-museum__firefox:hover{background-position:-16px -16px}.dg-museum__safari{background-position:-32px 0}.dg-museum__safari:hover{background-position:-32px -16px}.dg-museum__opera{width:15px;background-position:-48px 0}.dg-museum__opera:hover{background-position:-48px -16px}.dg-museum__ie{width:17px;background-position:-63px 0}.dg-museum__ie:hover{background-position:-63px -16px}.dg-museum__close{display:inline-block;margin:0 4px;width:9px;height:9px;background:url(https://maps.api.2gis.ru/2.0/img/DGMuseum_close.gif) top left no-repeat;cursor:pointer}.dg-museum__close:hover{opacity:.6}.leaflet-container{z-index:0;background:#f7f3df;cursor:default}.leaflet-container:-webkit-full-screen{width:100%!important;height:100%!important}.leaflet-container:-ms-fullscreen{width:100%!important;height:100%!important}.leaflet-container:fullscreen{width:100%!important;height:100%!important}.leaflet-dragging,.leaflet-dragging .leaflet-clickable,.leaflet-dragging .leaflet-container{cursor:move}.leaflet-control a,.leaflet-control a:focus{outline:0!important}.leaflet-container .leaflet-control-attribution{background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.dg-customization__marker{background-repeat:no-repeat}.dg-customization__marker:before{position:absolute;top:0;left:0;width:100%;height:100%;background-image:inherit;background-size:contain;background-repeat:no-repeat;-webkit-transition:opacity ease-in-out .2s,-webkit-transform ease-in-out .2s;transition:opacity ease-in-out .2s,-webkit-transform ease-in-out .2s;transition:opacity ease-in-out .2s,transform ease-in-out .2s;transition:opacity ease-in-out .2s,transform ease-in-out .2s,-webkit-transform ease-in-out .2s;-webkit-transform:scale(1,1);-ms-transform:scale(1,1);transform:scale(1,1);-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%}.dg-customization__marker_type_mushroom{background-repeat:no-repeat;background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__marker.png);background-size:22px 34px;width:22px;height:34px;-webkit-transform-origin:50% 100%;-ms-transform-origin:50% 100%;transform-origin:50% 100%;-webkit-animation:dg-customization__show-marker .2s;animation:dg-customization__show-marker .2s}.leaflet-retina .dg-customization__marker_type_mushroom{background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__marker@2x.png)}.dg-customization__marker_type_mushroom:focus{outline:0}.no-touch .dg-customization__marker_type_mushroom:hover{background-repeat:no-repeat;background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__markerHover.png);background-size:22px 34px}.leaflet-retina .no-touch .dg-customization__marker_type_mushroom:hover{background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__markerHover@2x.png)}.dg-customization__marker_type_mushroom:active,.no-touch .dg-customization__marker_type_mushroom:active{background-repeat:no-repeat;background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__markerActive.png);background-size:22px 34px}.leaflet-retina .dg-customization__marker_type_mushroom:active,.leaflet-retina .no-touch .dg-customization__marker_type_mushroom:active{background-image:url(https://maps.api.2gis.ru/2.0/img/DGCustomization__markerActive@2x.png)}@-webkit-keyframes dg-customization__show-marker{from{opacity:0}to{opacity:1}}@keyframes dg-customization__show-marker{from{opacity:0}to{opacity:1}}.dg-customization__marker_appear{background-position:999px}.dg-customization__marker_appear:before{content:''}.dg-customization__marker_disappear{background-position:999px;pointer-events:none}.dg-customization__marker_disappear:before{visibility:hidden;content:'';opacity:0;-webkit-transform:scale(1.2,1.8);-ms-transform:scale(1.2,1.8);transform:scale(1.2,1.8);-webkit-animation:dg-customization__marker-to-callout .2s;animation:dg-customization__marker-to-callout .2s}@-webkit-keyframes dg-customization__marker-to-callout{0%{visibility:visible;opacity:1;-webkit-transform:scale(1,1);transform:scale(1,1)}100%{visibility:visible;opacity:0;-webkit-transform:scale(1.2,1.8);transform:scale(1.2,1.8)}}@keyframes dg-customization__marker-to-callout{0%{visibility:visible;opacity:1;-webkit-transform:scale(1,1);transform:scale(1,1)}100%{visibility:visible;opacity:0;-webkit-transform:scale(1.2,1.8);transform:scale(1.2,1.8)}}.dg-dragging-false{touch-action:auto;-ms-touch-action:auto}.dg-zoom{width:40px;height:74px}.dg-zoom__in{position:absolute;top:0;left:0}.leaflet-touch .dg-zoom__in:before{position:absolute;top:-5px;right:-10px;bottom:0;left:-10px;content:''}.dg-zoom__in:after,.dg-zoom__out,.dg-zoom__out:after{right:0;left:0;margin:auto;position:absolute}.dg-zoom__in:after{bottom:-1px;z-index:-1;width:12px;height:2px;-webkit-box-shadow:0 0 3px 2px rgba(0,0,0,.3);box-shadow:0 0 3px 2px rgba(0,0,0,.3);content:''}.dg-zoom__button_type_in:after,.dg-zoom__button_type_in:before,.leaflet-touch .dg-zoom__button_type_in:before{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:14px;height:2px;background-color:#7a7a7a;-webkit-box-shadow:0 1px #fff;box-shadow:0 1px #fff;content:''}.dg-zoom__button_type_in:after{width:2px;height:14px}.no-touch .dg-zoom__button_type_in:hover:after,.no-touch .dg-zoom__button_type_in:hover:before{background-color:#616161}.dg-zoom__button_type_in:active:after,.dg-zoom__button_type_in:active:before,.no-touch .dg-zoom__button_type_in:active:after,.no-touch .dg-zoom__button_type_in:active:before{background-color:#575757}.leaflet-disabled .dg-zoom__button_type_in:active:after,.leaflet-disabled .dg-zoom__button_type_in:active:before,.leaflet-disabled .dg-zoom__button_type_in:after,.leaflet-disabled .dg-zoom__button_type_in:before,.no-touch .leaflet-disabled .dg-zoom__button_type_in:hover:after,.no-touch .leaflet-disabled .dg-zoom__button_type_in:hover:before{-webkit-box-shadow:none;box-shadow:none}.dg-zoom__out{top:40px;width:22px;height:22px}.dg-zoom__out:after{top:-1px;width:12px;height:2px;content:''}.dg-zoom__button_type_out{width:22px;height:22px}.leaflet-touch .dg-zoom__button_type_out:before{top:-5px;right:-19px;bottom:-19px;left:-19px}.dg-zoom__button_type_out:after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:10px;height:2px;background:#7a7a7a;-webkit-box-shadow:0 1px #fff;box-shadow:0 1px #fff;content:''}.no-touch .dg-zoom__button_type_out:hover:after{background:#616161}.dg-zoom__button_type_out:active:after,.no-touch .dg-zoom__button_type_out:active:after{background:#575757}.leaflet-disabled .dg-zoom__button_type_out:active:after,.leaflet-disabled .dg-zoom__button_type_out:after,.no-touch .leaflet-disabled .dg-zoom__button_type_out:hover:after{-webkit-box-shadow:none;box-shadow:none}.dg-zoom__out{-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.3);box-shadow:0 2px 3px 0 rgba(0,0,0,.3)}.dg-zoom__out:after{background-color:#3d3d3d}.leaflet-disabled .dg-zoom__button_type_in:active:after,.leaflet-disabled .dg-zoom__button_type_in:active:before,.leaflet-disabled .dg-zoom__button_type_in:after,.leaflet-disabled .dg-zoom__button_type_in:before,.leaflet-disabled .dg-zoom__button_type_out:active:after,.leaflet-disabled .dg-zoom__button_type_out:after,.no-touch .leaflet-disabled .dg-zoom__button_type_in:hover:after,.no-touch .leaflet-disabled .dg-zoom__button_type_in:hover:before,.no-touch .leaflet-disabled .dg-zoom__button_type_out:hover:after{background-color:#707070}.dg-attribution{background-color:transparent!important}.dg-attribution__copyright{margin:0 55px 5px 0;text-align:right;white-space:nowrap;font-size:9px;font-family:Helvetica,Arial,sans-serif}.dg-attribution__links{display:inline-block;margin:0;padding:0 5px 0 0}.dg-attribution__link-item{padding:0;list-style-type:none}.leaflet-container .dg-attribution__link{background:-webkit-gradient(linear,left top,right top,from(rgba(8,8,8,.3)),to(rgba(8,8,8,.3))) 0 95%/10px 1px repeat-x;background:-webkit-linear-gradient(left,rgba(8,8,8,.3),rgba(8,8,8,.3) 100%) 0 95%/10px 1px repeat-x;background:linear-gradient(to right,rgba(8,8,8,.3),rgba(8,8,8,.3) 100%) 0 95%/10px 1px repeat-x;color:#333;text-decoration:none;font-size:9px;font-family:Helvetica,Arial,sans-serif;cursor:pointer}.leaflet-container .dg-attribution__link:hover{background-image:-webkit-gradient(linear,left top,right top,from(#080808),to(#080808));background-image:-webkit-linear-gradient(left,#080808,#080808 100%);background-image:linear-gradient(to right,#080808,#080808 100%);color:#333;text-decoration:none}.dg-attribution__logo-url{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2224%22%20width%3D%2255%22%3E%0A%20%3Cpath%20fill%3D%22%23a2c124%22%20d%3D%22m24.395%2012c0-1.4545-0.22177-2.6545-0.66532-4-0.14785%204.2545-4.879%207.8182-7.4664%2010h6.7641c0.70229-2%201.3676-3.9273%201.3676-6m-4.731-9.3455c-2.033-1.6-4.62-2.6545-7.466-2.6545-6.7276%200-12.198%205.4182-12.198%2012s5.4704%2012%2012.198%2012c3.1048%200%205.9509-1.4545%208.1317-3.3455h-8.797v-2.6545c5.3595-4.5455%208.797-7.3455%208.797-10%200-1.1273-0.81317-2.6545-2.6983-2.6545-1.4785%200-2.6983%201.3455-2.6983%204.6545h-3.4005c-0.73925-4.2182%201.8481-7.6727%206.2466-7.6727%200.66532%200%201.2567%200.21818%201.8851%200.32727%22%2F%3E%0A%20%3Cpath%20fill%3D%22%233c4347%22%20d%3D%22m36.593%209.3455h1.3676c0-2-0.66532-5.1273-4.7312-5.2727-4.732-0.2183-6.1%202.6181-6.1%205.9272v5.3455c0%204.4%203.4375%205.3455%206.0988%205.3455%201.5524%200%203.4005-0.87273%204.7312-2v-6.6909h-5.4335v2.6545h2.6983v2.6545c-1.3676%201.3455-5.4335%201.3455-5.4335-2.6545v-5.3091c0-4%205.9509-4.1455%205.6183%200h1.1828zm18.296%206.6545c0-5.8182-6.9859-4.0727-6.9859-7.6%200-1.2%200.81317-2%202.1808-2%201.4415%200%202.2547%201.0182%202.2547%202.9818h2.5874c0-2-0.66532-5.3455-4.7312-5.3455-2.7722%200-4.879%201.4182-4.879%204.3273%200%206.0727%207.1707%204.0727%207.0598%207.6727-0.07392%201.4545-1.1458%202.0727-2.3656%202.0727-1.4415%200-2.6983-0.72727-2.4395-3.3818h-2.6613c-0.25874%203.3455%201.4415%206%205.3595%206%202.699%200%204.732-2.145%204.732-5.345l-0.111%200.618zm-12.198%204h-2.6983v-16h2.6983v16z%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:55px;height:24px;background-size:55px 24px;position:absolute;margin:0 3px 0 0}.dg-control-round__icon_name_fullscreen:after,.dg-control-round__icon_name_locate:after{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;content:'';background-repeat:no-repeat}.dg-location__pin{background-repeat:no-repeat;width:20px;height:20px;background-image:url(https://maps.api.2gis.ru/2.0/img/sprite.basic.png);background-position:-55px 0;background-size:87px 74px}.leaflet-retina .dg-location__pin{background-image:url(https://maps.api.2gis.ru/2.0/img/sprite@2x.basic.png);background-position:-55px 0;background-size:91px 71.5px}.dg-location__pin_state_following{background-repeat:no-repeat;width:20px;height:20px;background-image:url(https://maps.api.2gis.ru/2.0/img/sprite.basic.png);background-position:-22px -24px;background-size:87px 74px}.leaflet-retina .dg-location__pin_state_following{background-image:url(https://maps.api.2gis.ru/2.0/img/sprite@2x.basic.png);background-position:-21px -24px;background-size:91px 71.5px}.dg-control-round__icon_state_active.dg-control-round__icon_name_locate:active:after,.dg-control-round__icon_state_active.dg-control-round__icon_name_locate:after,.no-touch .dg-control-round__icon_state_active.dg-control-round__icon_name_locate:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%3E%0A%20%20%20%20%3Cg%20fill%3D%22%2323a5d4%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.553%200.447%2C10%201%2C10%20H%202.08%20C%202.52%2C13.063%204.936%2C15.48%208%2C15.92%20V%2017%20c%200%2C0.553%200.447%2C1%201%2C1%200.553%2C0%201%2C-0.447%201%2C-1%20V%2015.92%20C%2013.064%2C15.481%2015.48%2C13.064%2015.92%2C10%20H%2017%20C%2017.553%2C10%2018%2C9.553%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20z%20M%209%2C14%20C%206.24%2C14%204%2C11.762%204%2C9%204%2C6.238%206.24%2C4%209%2C4%20c%202.761%2C0%205%2C2.238%205%2C5%200%2C2.762%20-2.239%2C5%20-5%2C5%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%229%22%20cy%3D%229%22%20r%3D%223%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2014%2C10.004%20C%2014%2C9.834%2013.991%2C9.667%2013.975%2C9.502%2013.723%2C12.027%2011.592%2C14%209%2C14%206.408%2C14%204.277%2C12.027%204.025%2C9.502%204.009%2C9.667%204%2C9.834%204%2C10.004%20c%200%2C2.762%202.24%2C5%205%2C5%202.761%2C0%205%2C-2.238%205%2C-5%20z%20M%2010%2C3.083%20c%203.064%2C0.439%205.48%2C2.856%205.92%2C5.921%20H%2017%20c%200.369%2C0%200.688%2C0.201%200.86%2C0.498%20C%2017.947%2C9.354%2018%2C9.184%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%203.083%20z%20M%201%2C9.004%20H%202.08%20C%202.52%2C5.939%204.936%2C3.522%208%2C3.083%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.184%200.053%2C9.354%200.14%2C9.502%200.312%2C9.205%200.631%2C9.004%201%2C9.004%20z%20m%208%2C-8%20c%200.553%2C0%201%2C0.447%201%2C1%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20v%201.004%20c%200%2C-0.553%200.447%2C-1%201%2C-1%20z%22%20fill%3D%22%232685aa%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%209%2C7%20c%201.486%2C0%202.717%2C1.082%202.955%2C2.5%20C%2011.982%2C9.337%2012%2C9.171%2012%2C9%2012%2C7.344%2010.656%2C6%209%2C6%207.344%2C6%206%2C7.344%206%2C9%206%2C9.171%206.018%2C9.337%206.045%2C9.5%206.283%2C8.082%207.514%2C7%209%2C7%20z%22%20fill%3D%22%231c85ab%22%2F%3E%0A%3C%2Fsvg%3E%0A)}@-webkit-keyframes DGLocation__locateIconRequestingAnim{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes DGLocation__locateIconRequestingAnim{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.dg-control-round__icon_name_locate:after{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23616161%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.553%200.447%2C10%201%2C10%20H%202.08%20C%202.52%2C13.063%204.936%2C15.48%208%2C15.92%20V%2017%20c%200%2C0.553%200.447%2C1%201%2C1%200.553%2C0%201%2C-0.447%201%2C-1%20V%2015.92%20C%2013.064%2C15.481%2015.48%2C13.064%2015.92%2C10%20H%2017%20C%2017.553%2C10%2018%2C9.553%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20z%20M%209%2C14%20C%206.24%2C14%204%2C11.762%204%2C9%204%2C6.238%206.24%2C4%209%2C4%20c%202.761%2C0%205%2C2.238%205%2C5%200%2C2.762%20-2.239%2C5%20-5%2C5%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%229%22%20cy%3D%229%22%20r%3D%223%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23444%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2014%2C10.004%20C%2014%2C9.834%2013.991%2C9.667%2013.975%2C9.502%2013.723%2C12.027%2011.592%2C14%209%2C14%206.408%2C14%204.277%2C12.027%204.025%2C9.502%204.009%2C9.667%204%2C9.834%204%2C10.004%20c%200%2C2.762%202.24%2C5%205%2C5%202.761%2C0%205%2C-2.238%205%2C-5%20z%20M%2010%2C3.083%20c%203.064%2C0.439%205.48%2C2.856%205.92%2C5.921%20H%2017%20c%200.369%2C0%200.688%2C0.201%200.86%2C0.498%20C%2017.947%2C9.354%2018%2C9.184%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%203.083%20z%20M%201%2C9.004%20H%202.08%20C%202.52%2C5.939%204.936%2C3.522%208%2C3.083%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.184%200.053%2C9.354%200.14%2C9.502%200.312%2C9.205%200.631%2C9.004%201%2C9.004%20z%20m%208%2C-8%20c%200.553%2C0%201%2C0.447%201%2C1%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20v%201.004%20c%200%2C-0.553%200.447%2C-1%201%2C-1%20z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%209%2C7%20c%201.486%2C0%202.717%2C1.082%202.955%2C2.5%20C%2011.982%2C9.337%2012%2C9.171%2012%2C9%2012%2C7.344%2010.656%2C6%209%2C6%207.344%2C6%206%2C7.344%206%2C9%206%2C9.171%206.018%2C9.337%206.045%2C9.5%206.283%2C8.082%207.514%2C7%209%2C7%20z%22%20fill%3D%22%23444%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:18px;height:18px;background-size:18px 18px}.dg-control-round__icon_name_locate:active:after,.no-touch .dg-control-round__icon_name_locate:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2218%22%20height%3D%2218%22%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23424242%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.553%200.447%2C10%201%2C10%20H%202.08%20C%202.52%2C13.063%204.936%2C15.48%208%2C15.92%20V%2017%20c%200%2C0.553%200.447%2C1%201%2C1%200.553%2C0%201%2C-0.447%201%2C-1%20V%2015.92%20C%2013.064%2C15.481%2015.48%2C13.064%2015.92%2C10%20H%2017%20C%2017.553%2C10%2018%2C9.553%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20z%20M%209%2C14%20C%206.24%2C14%204%2C11.762%204%2C9%204%2C6.238%206.24%2C4%209%2C4%20c%202.761%2C0%205%2C2.238%205%2C5%200%2C2.762%20-2.239%2C5%20-5%2C5%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Ccircle%20cx%3D%229%22%20cy%3D%229%22%20r%3D%223%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22%232e2e2e%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2014%2C10.004%20C%2014%2C9.834%2013.991%2C9.667%2013.975%2C9.502%2013.723%2C12.027%2011.592%2C14%209%2C14%206.408%2C14%204.277%2C12.027%204.025%2C9.502%204.009%2C9.667%204%2C9.834%204%2C10.004%20c%200%2C2.762%202.24%2C5%205%2C5%202.761%2C0%205%2C-2.238%205%2C-5%20z%20M%2010%2C3.083%20c%203.064%2C0.439%205.48%2C2.856%205.92%2C5.921%20H%2017%20c%200.369%2C0%200.688%2C0.201%200.86%2C0.498%20C%2017.947%2C9.354%2018%2C9.184%2018%2C9%2018%2C8.448%2017.553%2C8%2017%2C8%20H%2015.92%20C%2015.48%2C4.937%2013.064%2C2.52%2010%2C2.08%20V%203.083%20z%20M%201%2C9.004%20H%202.08%20C%202.52%2C5.939%204.936%2C3.522%208%2C3.083%20V%202.08%20C%204.936%2C2.52%202.52%2C4.937%202.08%2C8%20H%201%20C%200.447%2C8%200%2C8.448%200%2C9%200%2C9.184%200.053%2C9.354%200.14%2C9.502%200.312%2C9.205%200.631%2C9.004%201%2C9.004%20z%20m%208%2C-8%20c%200.553%2C0%201%2C0.447%201%2C1%20V%201%20C%2010%2C0.448%209.553%2C0%209%2C0%208.447%2C0%208%2C0.448%208%2C1%20v%201.004%20c%200%2C-0.553%200.447%2C-1%201%2C-1%20z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%209%2C7%20c%201.486%2C0%202.717%2C1.082%202.955%2C2.5%20C%2011.982%2C9.337%2012%2C9.171%2012%2C9%2012%2C7.344%2010.656%2C6%209%2C6%207.344%2C6%206%2C7.344%206%2C9%206%2C9.171%206.018%2C9.337%206.045%2C9.5%206.283%2C8.082%207.514%2C7%209%2C7%20z%22%20fill%3D%22%232e2e2e%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:active:after,.dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:after,.no-touch .dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:hover:after{background-repeat:no-repeat;width:24px;height:24px;background-image:url(https://maps.api.2gis.ru/2.0/img/sprite.dark.png);background-position:0 0;background-size:78px 65px;-webkit-animation:DGLocation__locateIconRequestingAnim 1s linear infinite;animation:DGLocation__locateIconRequestingAnim 1s linear infinite;image-rendering:optimizeQuality}.leaflet-retina .dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:active:after,.leaflet-retina .dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:after,.leaflet-retina .no-touch .dg-control-round__icon_state_requesting.dg-control-round__icon_name_locate:hover:after{background-image:url(https://maps.api.2gis.ru/2.0/img/sprite@2x.dark.png);background-position:0 0;background-size:78px 65px}.dg-control-round__icon_state_active.dg-control-round__icon_name_fullscreen:active:after,.dg-control-round__icon_state_active.dg-control-round__icon_name_fullscreen:after,.no-touch .dg-control-round__icon_state_active.dg-control-round__icon_name_fullscreen:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206%2C1%20H%201%20V%206%20H%203%20V%203%20h%203%20z%20m%204%2C14%20h%205%20v%20-5%20h%20-2%20v%203%20H%2010%20z%20M%2015%2C6%20V%201%20h%20-5%20v%202%20h%203%20V%206%20z%20M%201%2C10%20v%205%20H%206%20V%2013%20H%203%20v%20-3%20z%22%20fill%3D%22%230da4d4%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%201%2C1%20H%206%20V%202%20H%201%20z%20m%209%2C0%20h%205%20v%201%20h%20-5%20z%20m%203%2C9%20h%202%20v%201%20h%20-2%20z%20m%20-3%2C3%20h%203%20v%201%20h%20-3%20z%20m%20-7%2C0%20h%203%20v%201%20H%203%20z%20M%201%2C10%20h%202%20v%201%20H%201%20z%22%20fill%3D%22%230a84ab%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%201%2C6%20H%203%20V%207%20H%201%20z%20m%2012%2C0%20h%202%20V%207%20H%2013%20z%20M%201%2C15%20h%205%20v%201%20H%201%20z%20m%209%2C0%20h%205%20v%201%20h%20-5%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-control-round__icon_name_fullscreen:after{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%201%2C3%20H%206%20V%204%20H%201%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206%2C1%20H%201%20V%206%20H%203%20V%203%20h%203%20z%20m%204%2C14%20h%205%20v%20-5%20h%20-2%20v%203%20h%20-3%20z%22%20fill%3D%22%236c6c6c%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2010%2C3%20h%205%20v%201%20h%20-5%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2015%2C6%20V%201%20h%20-5%20v%202%20h%203%20V%206%20z%20M%201%2C10%20v%205%20H%206%20V%2013%20H%203%20v%20-3%20z%22%20fill%3D%22%236c6c6c%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%201%2C1%20H%206%20V%202%20H%201%20z%20m%209%2C0%20h%205%20v%201%20h%20-5%20z%20m%203%2C9%20h%202%20v%201%20h%20-2%20z%20m%20-3%2C3%20h%203%20v%201%20h%20-3%20z%20m%20-7%2C0%20h%203%20v%201%20H%203%20z%20M%201%2C10%20h%202%20v%201%20H%201%20z%22%20fill%3D%22%234b4b4b%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%201%2C6%20H%203%20V%207%20H%201%20z%20m%2012%2C0%20h%202%20V%207%20H%2013%20z%20M%201%2C15%20h%205%20v%201%20H%201%20z%20m%209%2C0%20h%205%20v%201%20h%20-5%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;height:16px;background-size:16px 16px}.dg-map-geoclicker__address+.dg-map-geoclicker__purpose,.dg-map-geoclicker__purpose+.dg-map-geoclicker__address{margin-top:-6px}.dg-control-round__icon_name_fullscreen:active:after,.no-touch .dg-control-round__icon_name_fullscreen:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2012%2C9%20h%204%20v%207%20h%20-4%20z%20m%20-3%2C3%20h%205%20v%204%20H%209%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2010%2C15%20h%205%20v%20-5%20h%20-2%20v%203%20h%20-3%20z%22%20fill%3D%22%23282828%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%200%2C9%20h%204%20v%207%20H%200%20z%20m%202%2C3%20h%205%20v%204%20H%202%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%201%2C10%20v%205%20H%206%20V%2013%20H%203%20v%20-3%20z%22%20fill%3D%22%23282828%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C0%20H%204%20V%207%20H%200%20z%20m%209%2C0%20h%205%20V%204%20H%209%20z%20m%203%2C0%20h%204%20v%207%20h%20-4%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2015%2C6%20V%201%20h%20-5%20v%202%20h%203%20v%203%20z%22%20fill%3D%22%23282828%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%202%2C0%20H%207%20V%204%20H%202%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206%2C1%20H%201%20V%206%20H%203%20V%203%20h%203%20z%22%20fill%3D%22%23282828%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-building-callout__body{position:relative}.dg-building-callout__list{margin-bottom:8px;padding-left:24px;color:#ffe6aa;list-style:none}.dg-building-callout__list-item{position:relative;margin-bottom:4px;font-size:12px}.dg-building-callout__list-item:before{position:absolute;top:5px;left:-21px;content:'';background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226%22%20height%3D%226%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%203%2C-0.002%20C%204.654%2C-0.002%205.994%2C1.342%205.994%2C3%205.994%2C4.658%204.655%2C6.002%203%2C6.002%201.345%2C6.002%200.005%2C4.658%200.005%2C3%200.005%2C1.342%201.346%2C-0.002%203%2C-0.002%20z%22%20fill%3D%22%23aaa%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:6px;height:6px;background-size:6px 6px}.dg-map-geoclicker__address{margin-bottom:10px;font-size:16px}.dg-map-geoclicker__address-header{position:relative;margin-bottom:4px;padding-left:24px}.dg-map-geoclicker__address-header:first-child:before{position:absolute;top:5px;left:1px;content:''}.dg-map-geoclicker__address-drilldown{position:relative;margin-bottom:4px;padding-left:24px;color:#aaa;font-size:12px}.dg-map-geoclicker__address-drilldown:first-child:before{position:absolute;top:2px;left:1px;content:''}.dg-map-geoclicker__purpose{position:relative;margin-bottom:10px;padding-left:24px;font-size:16px}.dg-map-geoclicker__purpose:before{position:absolute;top:4px;left:2px;content:''}.dg-map-geoclicker__sight-description{overflow:hidden;padding:.5em 0 0 24px;max-height:3.6em}a.dg-map-geoclicker__show-more-sights-link{position:relative;margin-left:24px;border-bottom:1px dotted;text-decoration:none;color:#ffe6aa}a.dg-map-geoclicker__show-more-sights-link:after{position:absolute;top:4px;margin-left:5px;width:6px;height:10px;content:'';font-weight:700}.dg-map-geoclicker__clamped-line{display:block;white-space:nowrap}.dg-map-geoclicker__clamped-line_last{overflow:hidden;width:100%;text-overflow:ellipsis}.dg-map-geoclicker__preloader-wrapper{display:table-cell;vertical-align:middle;text-align:center}.dg-map-geoclicker__address-drilldown:first-child:before,.dg-map-geoclicker__address-header:first-child:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%204.958%2C11%20C%204.958%2C9.036%206.756%2C6.751%208.719%2C6.751%208.885%2C6.223%209%2C5.656%209%2C5.063%209%2C2.267%206.985%2C0%204.5%2C0%202.015%2C0%200%2C2.267%200%2C5.063%200%2C5.656%200.114%2C6.222%200.28%2C6.751%202.243%2C6.751%204.018%2C9.012%204.018%2C11%20h%200.94%20z%22%20fill%3D%22%23a0a0a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:9px;height:11px;background-size:9px 11px}.dg-map-geoclicker__purpose:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%203.582%2C8%20c%200.211%2C0%200.798%2C0.035%201%2C0%20v%204%20l%20-2%2C-1%20V%208%20c%200.372%2C0.066%200.861%2C0%201%2C0%20z%20M%200.44%2C5.384%20C%200.163%2C4.866%200%2C4.276%200%2C3.646%200%2C1.633%201.604%2C0.002%203.582%2C0.002%20c%201.978%2C0%203.582%2C1.631%203.582%2C3.644%200%2C0.647%20-0.169%2C1.254%20-0.461%2C1.781%20L%206.641%2C5.495%206.618%2C5.567%20C%205.954%2C6.549%204.844%2C7.192%203.584%2C7.192%202.25%2C7.192%201.084%2C6.467%200.44%2C5.384%20z%20M%202.613%2C1.276%20c%20-0.549%2C0%20-0.995%2C0.453%20-0.995%2C1.013%200%2C0.559%200.446%2C1.013%200.995%2C1.013%200.551%2C0%200.996%2C-0.454%200.996%2C-1.013%200%2C-0.56%20-0.445%2C-1.013%20-0.996%2C-1.013%20z%22%20fill%3D%22%23a0a0a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:8px;height:12px;background-size:8px 12px}.dg-map-geoclicker__purpose_type_street:before{top:4px;background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%208.8%2C0%20H%203.199%20L%200%2C12%20H%2012%20L%208.8%2C0%20z%20M%207%2C12%20H%205%20V%209%20h%202%20v%203%20z%20M%207%2C8%20H%205%20V%206%20H%207%20V%208%20z%20M%207%2C5%20H%205%20V%203%20H%207%20V%205%20z%20M%207%2C2%20H%205%20V%200%20h%202%20v%202%20z%22%20fill%3D%22%23a0a0a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:12px;height:12px;background-size:12px 12px}.dg-map-geoclicker__purpose_type_sight:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%228%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%207%2C0%20H%202.547%20C%200.547%2C0%200%2C0.828%200%2C2.5%200%2C3.734%200.5%2C5%202%2C5%203.359%2C5%204%2C3.844%204%2C3%204%2C2.281%202.859%2C2%202%2C2%202%2C2.766%202.234%2C3%203%2C3%203%2C3.69%202.48%2C4%202%2C4%201.234%2C4%201%2C3.329%201%2C2.5%201%2C1.693%201.375%2C1%202.5%2C1%204.391%2C1%205%2C1.656%205%2C3%205%2C4.6%204.338%2C5.119%203%2C6%20v%204%20H%202%20v%202%20H%208%20V%201%20L%207%2C0%20z%20M%204%2C10%20V%206%20l%201%2C1%20v%203%20H%204%20z%20m%202%2C0%20V%206%20l%201%2C1%20v%203%20H%206%20z%22%20fill%3D%22%23aaa%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:8px;height:12px;background-size:8px 12px}.dg-map-geoclicker__purpose_type_settlement:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%209%2C9%20C%208.235%2C9%207.762%2C9.522%207.259%2C10.022%207.795%2C10.38%208.051%2C11.05%207.879%2C12%20H%2012%20C%2012%2C10.46%2010.535%2C9%209%2C9%20z%20m%20-2.868%2C1.248%20c%20-0.965%2C0%20-1.747%2C0.784%20-1.747%2C1.751%20h%203.494%20c%200%2C-0.967%20-0.782%2C-1.751%20-1.747%2C-1.751%20z%20M%2010%2C1%20V%200%20H%207%20V%201%20H%205%20V%206%20L%206%2C7%20V%202%20H%207%20V%207%20L%208%2C8%20V%202%20h%201%20v%206%20h%201%20V%202%20h%201%20v%207%20l%201%2C0.607%20V%201%20H%2010%20z%20M%206.66%2C9.539%206.721%2C9.479%20C%206.903%2C9.297%207.104%2C9.14%207.314%2C9.004%20V%208.414%20L%206.131%2C7.187%203%2C8%20v%204%20H%203.62%20C%203.62%2C10.612%204.747%2C9.483%206.132%2C9.483%206.312%2C9.482%206.49%2C9.502%206.66%2C9.539%20z%20M%202%2C12%20z%20M%201%2C2%200%2C5%20v%207%20H%202%20V%205%20L%201%2C2%20z%20M%201.111%2C6.955%20C%200.804%2C6.955%200.556%2C6.706%200.556%2C6.4%20c%200%2C-0.307%200.248%2C-0.555%200.555%2C-0.555%200.307%2C0%200.554%2C0.248%200.554%2C0.555%200%2C0.306%20-0.247%2C0.555%20-0.554%2C0.555%20z%22%20fill%3D%22%23a0a0a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:12px;height:12px;background-size:12px 12px}.no-touch a.dg-map-geoclicker__show-more-sights-link:hover{color:#9cd}a.dg-map-geoclicker__show-more-sights-link:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%226%22%20height%3D%2210%22%20viewBox%3D%220%200%206%2010%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206%2C5%20V%205.4%20L%201.4%2C10%20H%200%20L%200%2C8.6%203.6%2C5%200%2C1.4%200%2C0%201.4%2C0%206%2C4.6%20V%205%20l%200%2C0%200%2C0%200%2C0%200%2C0%200%2C0%20z%22%20fill%3D%22%23aaa%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-map-geoclicker__drilldown{margin-bottom:10px;color:#aaa}.dg-preloader{position:relative;margin:0 auto;width:200px;height:44px;vertical-align:middle}.dg-preloader_animation_true:after,.dg-preloader_animation_true:before{position:absolute;top:50%;left:50%;outline:transparent solid 1px;image-rendering:optimizeQuality;content:''}.dg-preloader_animation_false{background-repeat:no-repeat;background-image:url(https://maps.api.2gis.ru/2.0/img/DGPreloader__preloader.gif);background-size:100px 26px;background-attachment:scroll;background-position:50% 50%}.dg-preloader_animation_true:before{margin:-22px 0 0 -22px;width:44px;height:44px;-webkit-animation:dg-preloader__outer 5s linear infinite;animation:dg-preloader__outer 5s linear infinite}.dg-preloader_animation_true.dg-preloader_size_small:before{margin:-12px 0 0 -12px;width:24px;height:24px}.dg-preloader_animation_true.dg-preloader_scheme_regular:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2244%22%20height%3D%2244%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2035.68%2C10.32%20C%2038.368%2C13.465%2040%2C17.539%2040%2C22%2040%2C31.941%2031.941%2C40%2022%2C40%2012.059%2C40%204%2C31.941%204%2C22%204%2C17.539%205.632%2C13.465%208.32%2C10.32%20L%205.48%2C7.48%20C%202.07%2C11.354%200%2C16.434%200%2C22%200%2C34.15%209.85%2C44%2022%2C44%2034.15%2C44%2044%2C34.15%2044%2C22%2044%2C16.434%2041.93%2C11.354%2038.52%2C7.48%20l%20-2.84%2C2.84%20z%22%20fill%3D%22%230da5d5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%209.271%2C9.272%20C%2012.529%2C6.015%2017.029%2C4%2022%2C4%2026.971%2C4%2031.471%2C6.015%2034.729%2C9.272%20L%2037.557%2C6.444%20C%2033.575%2C2.462%2028.075%2C0%2022%2C0%2015.925%2C0%2010.425%2C2.462%206.443%2C6.444%20l%202.828%2C2.828%20z%22%20fill%3D%22%23a6cd2a%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:44px 44px}.dg-preloader_animation_true.dg-preloader_scheme_regular.dg-preloader_size_small:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2018.564%2C7.435%20C%2019.467%2C8.73%2020%2C10.302%2020%2C12%2020%2C16.418%2016.418%2C20%2012%2C20%207.582%2C20%204%2C16.418%204%2C12%204%2C10.302%204.533%2C8.73%205.436%2C7.435%20L%202.581%2C4.581%20C%200.969%2C6.623%200%2C9.195%200%2C12%200%2C18.627%205.373%2C24%2012%2C24%2018.627%2C24%2024%2C18.627%2024%2C12%2024%2C9.195%2023.031%2C6.623%2021.419%2C4.581%20l%20-2.855%2C2.854%20z%22%20fill%3D%22%230da5d5%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2012%2C0%20C%208.686%2C0%205.686%2C1.343%203.516%2C3.515%20L%206.343%2C6.343%20C%207.791%2C4.895%209.791%2C4%2012%2C4%20c%202.209%2C0%204.209%2C0.895%205.657%2C2.343%20L%2020.484%2C3.515%20C%2018.314%2C1.343%2015.314%2C0%2012%2C0%20z%22%20fill%3D%22%23a6cd2a%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:24px 24px}.dg-preloader_animation_true:after{margin:-16px 0 0 -16px;width:32px;height:32px;-webkit-animation:dg-preloader__inner 4s linear infinite;animation:dg-preloader__inner 4s linear infinite}.dg-preloader_animation_true.dg-preloader_size_small:after{margin:-6px 0 0 -6px;width:12px;height:12px}.dg-preloader_animation_true.dg-preloader_scheme_regular:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206.581%2C23.419%20C%204.969%2C21.377%204%2C18.804%204%2C16%204%2C9.373%209.373%2C4%2016%2C4%20c%206.627%2C0%2012%2C5.373%2012%2C12%200%2C2.804%20-0.969%2C5.377%20-2.581%2C7.419%20l%202.847%2C2.847%20C%2030.594%2C23.487%2032%2C19.909%2032%2C16%2032%2C7.163%2024.837%2C0%2016%2C0%207.163%2C0%200%2C7.163%200%2C16%20c%200%2C3.909%201.406%2C7.487%203.734%2C10.266%20l%202.847%2C-2.847%20z%22%20fill%3D%22%23a6cd2a%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2027.314%2C27.314%2024.486%2C24.486%20C%2022.314%2C26.657%2019.314%2C28%2016%2C28%2012.686%2C28%209.686%2C26.657%207.516%2C24.485%20L%204.688%2C27.313%20C%207.582%2C30.209%2011.582%2C32%2016%2C32%20c%204.418%2C0%208.418%2C-1.791%2011.314%2C-4.686%20z%22%20fill%3D%22%230da5d5%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:32px 32px}.dg-preloader_animation_true.dg-preloader_scheme_regular.dg-preloader_size_small:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%203.141%2C6.86%20C%203.059%2C6.586%203%2C6.301%203%2C6%203%2C4.343%204.343%2C3%206%2C3%207.657%2C3%209%2C4.343%209%2C6%209%2C6.301%208.941%2C6.586%208.859%2C6.86%20l%202.26%2C2.259%20C%2011.674%2C8.209%2012%2C7.144%2012%2C6%2012%2C2.686%209.314%2C0%206%2C0%202.686%2C0%200%2C2.686%200%2C6%200%2C7.144%200.326%2C8.209%200.881%2C9.119%20L%203.141%2C6.86%20z%22%20fill%3D%22%23a6cd2a%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%206%2C12%20c%201.657%2C0%203.157%2C-0.672%204.243%2C-1.757%20L%208.122%2C8.122%20C%207.578%2C8.664%206.828%2C9%206%2C9%205.172%2C9%204.422%2C8.664%203.879%2C8.121%20L%201.758%2C10.242%20C%202.843%2C11.328%204.343%2C12%206%2C12%20z%22%20fill%3D%22%230da5d5%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:12px 12px}@-webkit-keyframes dg-preloader__outer{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes dg-preloader__outer{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dg-preloader__inner{to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}@keyframes dg-preloader__inner{to{-webkit-transform:rotate(-360deg);transform:rotate(-360deg)}}.dg-popup__footer-buttons{display:table;margin-top:10px;width:100%}.dg-popup__footer-button-wrapper{display:table-cell}.dg-popup__footer-button{position:relative;display:inline-block;-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:5%;width:95%;border-radius:2px;text-align:center;text-decoration:none;font:12px/24px Arial,sans-serif;cursor:pointer;-webkit-transition:all .1s;transition:all .1s}.dg-popup__footer-button-wrapper:first-child .dg-popup__footer-button{margin:0;width:100%}.dg-popup__footer-icon-button:before{display:inline-block;margin:-2px 5px 0 0;width:12px;height:12px;background-size:contain;background-repeat:no-repeat;content:'';vertical-align:middle}.dg-popup__button_name_back:before,.dg-popup__button_name_firm-card-back:before,.dg-popup__button_name_firm-list-back:before{width:9px;height:6px}.dg-popup__show-less-house-link{position:relative;top:6px;margin:0 15px 10px;color:#0070c0;text-decoration:none;font-size:12px;line-height:24px}.dg-popup__header-links{margin:8px 18px 0 0}.dg-popup__header-title_for_firmcard{position:relative;overflow:hidden;max-height:3.4em}.dg-popup__header-teaser{display:-webkit-box;height:3.3em;-webkit-line-clamp:3;-webkit-box-orient:vertical}.dg-popup__header-title{display:block;white-space:normal;font:22px/24px 'Arial narrow',Arial,sans-serif}.dg-popup__header-link,.dg-popup__rating{display:inline-block;vertical-align:middle}.dg-firm-card__link,.dg-popup__header-link,.dg-schedule__string-time,.dg-schedule__table-cell-group{white-space:nowrap}.dg-popup__header-link{margin-left:2.6em}.dg-popup__header-link:first-child{margin-left:1.2em}.dg-popup__rating{margin:0 .4em 3px 0;width:70px;height:14px}.dg-popup__rating-stars{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206.999%2C0%208.748%2C4.989%2013.997%2C4.991%209.83%2C8.708%2011.324%2C14.002%206.999%2C10.871%202.674%2C14.002%204.168%2C8.708%200%2C4.991%205.249%2C4.989%206.999%2C0%20z%22%20fill%3D%22%23ffc84b%22%2F%3E%0A%3C%2Fsvg%3E%0A);float:left;height:100%}.dg-popup__link{position:relative;background-position:center bottom;background-size:10px 1px;background-repeat:repeat-x;text-decoration:none}.dg-popup__link_type_booklet:before,.dg-popup__link_type_photos:before{position:absolute;top:2px;left:-18px;display:inherit;content:'';background-repeat:no-repeat;width:12px;height:10px}.dg-popup__link_type_flamp_reviews{margin-left:.1em}.dg-popup__link_type_booklet:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2210%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%200%2C8%203%2C2%20V%202%20L%200%2C0%20V%208%20z%20M%204%2C10%208%2C8%20V%200%20L%204%2C2%20v%208%20z%20M%209%2C0%20v%208%20l%203%2C2%20V%202%20L%209%2C0%20z%22%20fill%3D%22%237dc814%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:12px 10px}a.dg-popup__link{background-image:-webkit-gradient(linear,left top,right top,from(rgba(255,230,170,.3)),to(rgba(255,230,170,.3)));background-image:-webkit-linear-gradient(left,rgba(255,230,170,.3),rgba(255,230,170,.3) 100%);background-image:linear-gradient(to right,rgba(255,230,170,.3),rgba(255,230,170,.3) 100%);color:#ffe6aa}.no-touch a.dg-popup__link:hover{background-image:-webkit-gradient(linear,left top,right top,from(rgba(153,204,221,.3)),to(rgba(153,204,221,.3)));background-image:-webkit-linear-gradient(left,rgba(153,204,221,.3),rgba(153,204,221,.3) 100%);background-image:linear-gradient(to right,rgba(153,204,221,.3),rgba(153,204,221,.3) 100%);color:#9cd}.dg-popup__header-title{color:#ffc84b}.dg-popup__footer-button-wrapper .dg-popup__footer-button,.dg-popup__footer-button-wrapper .dg-popup__footer-button:hover{color:#e6e6e6}.dg-popup__footer-button{background:rgba(0,0,0,.2);-webkit-box-shadow:0 1px rgba(0,0,0,.1);box-shadow:0 1px rgba(0,0,0,.1)}.no-touch .dg-popup__footer-button:hover{-webkit-transition:all .2s;transition:all .2s;background:#222;-webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);box-shadow:0 1px 3px rgba(0,0,0,.5)}.dg-popup__rating{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2214%22%20height%3D%2214%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%207.002%2C0%208.751%2C4.989%2014%2C4.991%209.833%2C8.708%2011.327%2C14.002%207.002%2C10.871%202.677%2C14.002%204.171%2C8.708%200.003%2C4.991%205.252%2C4.989%207.002%2C0%20z%22%20fill%3D%22%23aaa%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-popup__link_type_photos:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2210%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2011%2C1%20H%2010%20L%209%2C0%20H%206%20L%205%2C1%20H%201%20L%200%2C2%20v%207%20l%201%2C1%20H%2011%20L%2012%2C9%20V%202%20L%2011%2C1%20z%20M%203%2C4%20H%202%20V%203%20h%201%20v%201%20z%20m%204.518%2C3.992%20c%20-1.381%2C0%20-2.5%2C-1.119%20-2.5%2C-2.5%200%2C-1.38%201.119%2C-2.5%202.5%2C-2.5%201.38%2C0%202.5%2C1.12%202.5%2C2.5%200%2C1.381%20-1.121%2C2.5%20-2.5%2C2.5%20z%22%20fill%3D%22%2379b0bc%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-size:12px 10px}.dg-popup__button_name_back:before,.dg-popup__button_name_firm-card-back:before,.dg-popup__button_name_firm-list-back:before{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%226%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C3%204%2C6%20V%204%20H%209%20V%202%20H%204%20V%200%20z%22%20fill%3D%22%239f9f9f%22%2F%3E%0A%3C%2Fsvg%3E%0A);background-repeat:no-repeat}.dg-popup__button_name_back:before{width:9px;height:6px;background-size:9px 6px}.dg-popup__button_name_goto:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%227%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2016.5%2C0%20C%2014.738%2C0%2013.295%2C1.306%2013.051%2C3%20H%204.949%20C%204.718%2C1.858%203.71%2C1%202.5%2C1%201.119%2C1%200%2C2.119%200%2C3.5%200%2C4.881%201.119%2C6%202.5%2C6%203.71%2C6%204.718%2C5.142%204.949%2C4%20h%208.102%20C%2013.295%2C5.693%2014.739%2C7%2016.5%2C7%2018.433%2C7%2020%2C5.433%2020%2C3.5%2020%2C1.566%2018.433%2C0%2016.5%2C0%20z%22%20fill%3D%22%239f9f9f%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:20px;height:7px;background-size:20px 7px}.dg-popup__button_name_show-entrance:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205%2C9%209%2C6%205%2C3%20V%205%20H%200%20V%207%20H%205%20V%209%20z%20M%209.6%2C0%20H%202.4%20C%201.074%2C0%200%2C1.074%200%2C2.4%20V%204%20H%202%20V%203.6%20C%202%2C2.716%202.716%2C2%203.6%2C2%20H%208.4%20C%209.283%2C2%2010%2C2.716%2010%2C3.6%20V%208.4%20C%2010%2C9.284%209.283%2C10%208.4%2C10%20H%203.6%20C%202.716%2C10%202%2C9.284%202%2C8.4%20V%208%20H%200%20V%209.6%20C%200%2C10.925%201.074%2C12%202.4%2C12%20H%209.6%20C%2010.926%2C12%2012%2C10.925%2012%2C9.6%20V%202.4%20C%2012%2C1.074%2010.926%2C0%209.6%2C0%20z%22%20fill%3D%22%23a0a0a0%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-firm-card__icon{position:relative;padding-left:24px}.dg-firm-card__address:before,.dg-firm-card__icon:before{position:absolute;content:''}.dg-firm-card__icon:before{top:0;left:0;margin:auto;background-position:0 50%;background-repeat:no-repeat}.dg-firm-card__link{overflow:hidden;margin-bottom:4px;word-wrap:normal;line-height:16px}.dg-firm-card__link a{background-position:center bottom;background-size:10px 1px;background-repeat:repeat-x;text-decoration:none;background-image:-webkit-gradient(linear,left top,right top,from(rgba(255,230,170,.3)),to(rgba(255,230,170,.3)));background-image:-webkit-linear-gradient(left,rgba(255,230,170,.3),rgba(255,230,170,.3) 100%);background-image:linear-gradient(to right,rgba(255,230,170,.3),rgba(255,230,170,.3) 100%);color:#ffe6aa}.dg-firm-card__address{margin-bottom:10px;font-size:16px}.dg-firm-card__phone,.dg-firm-card__rubrics{margin-bottom:4px;line-height:16px;overflow:hidden}.dg-firm-card__address:before{top:5px;left:1px}.dg-firm-card__comment{position:relative;margin-left:5px;font-size:12px}.dg-firm-card__phone:before{top:3px;left:1px}.dg-firm-card__site:before{top:3px}.dg-firm-card__rubrics{font-size:12px}.dg-firm-card__rubrics-list{margin:0;padding:0;list-style:none}.dg-firm-card__rubrics-list-item{display:inline;cursor:default}.dg-firm-card__rubrics-list-item:before{display:inline-block;margin:0 4px;content:'•'}.dg-firm-card__rubrics-list-item:first-child:before{margin:0;content:''}.dg-firm-card__aa{margin:0 0 4px;padding:0 0 0 24px;font-size:12px}.dg-firm-card__aa-list{display:inline;margin:0;padding:0;list-style:none;line-height:16px}.dg-firm-card__aa-list-item{display:inline;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;cursor:default}.dg-firm-card__aa-list-item:before{display:inline-block;margin:0 4px;content:'•'}.dg-control-round__icon_name_ruler:after,.dg-control-round__icon_name_traffic:after,.dg-schedule__today:after,.dg-schedule__today:before{content:''}.dg-firm-card__aa-list-item:first-child:before{margin:0;content:''}.dg-firm-card__aa-list-additional{display:inline;margin:0;padding:0;list-style:none;line-height:16px}.dg-firm-card__schedule{margin-bottom:10px}.no-touch .dg-firm-card__link a:hover{background-image:-webkit-gradient(linear,left top,right top,from(rgba(153,204,221,.3)),to(rgba(153,204,221,.3)));background-image:-webkit-linear-gradient(left,rgba(153,204,221,.3),rgba(153,204,221,.3) 100%);background-image:linear-gradient(to right,rgba(153,204,221,.3),rgba(153,204,221,.3) 100%);color:#9cd}.dg-firm-card__comment,.dg-firm-card__rubrics{color:#aaa}.dg-firm-card__rubrics-list-item:after{color:#6e6964}.dg-firm-card__aa-list-item:after{color:#e6e6e6}.dg-firm-card__address:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%204.958%2C11%20C%204.958%2C9.036%206.756%2C6.751%208.719%2C6.751%208.885%2C6.223%209%2C5.656%209%2C5.063%209%2C2.267%206.985%2C0%204.5%2C0%202.015%2C0%200%2C2.267%200%2C5.063%200%2C5.656%200.114%2C6.222%200.28%2C6.751%202.243%2C6.751%204.018%2C9.012%204.018%2C11%20h%200.94%20z%22%20fill%3D%22%23a0a0a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:9px;height:11px;background-size:9px 11px}.dg-firm-card__phone:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%2210%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%209.181%2C9.05%20C%208.673%2C9.556%208.047%2C9.873%207.391%2C10%206.156%2C9.841%205.008%2C9.417%203.998%2C8.788%20L%201.293%2C6.092%20C%200.639%2C5.053%200.203%2C3.865%200.052%2C2.589%200.19%2C1.964%200.494%2C1.368%200.983%2C0.882%20L%201.803%2C0.065%203.987%2C2.241%20V%202.79%20L%203.441%2C3.332%20c%20-0.452%2C0.451%20-0.453%2C1.183%200%2C1.634%20L%205.082%2C6.6%20c%200.452%2C0.451%201.187%2C0.451%201.639%2C0%20L%207.244%2C6.079%20H%207.838%20L%2010%2C8.233%209.181%2C9.05%20z%22%20fill%3D%22%23a0a0a0%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:10px;height:10px;background-size:10px 10px}.dg-firm-card__site:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205.5%2C11%20C%202.463%2C11%200%2C8.538%200%2C5.5%200%2C2.462%202.463%2C0%205.5%2C0%208.537%2C0%2011%2C2.462%2011%2C5.5%2011%2C8.538%208.537%2C11%205.5%2C11%20z%20m%200%2C-9%20C%203.566%2C2%202%2C3.567%202%2C5.5%202%2C7.433%203.566%2C9%205.5%2C9%205.655%2C9%205.804%2C8.974%205.954%2C8.954%20L%203%2C6%20V%205%20L%205.571%2C3.286%205.984%2C2.049%20C%205.824%2C2.026%205.666%2C2%205.5%2C2%20z%20M%208.949%2C5%20H%207.375%20C%207.021%2C5.505%206.545%2C6.082%206%2C6.497%20V%208.95%20C%207.693%2C8.705%209%2C7.262%209%2C5.5%209%2C5.329%208.974%2C5.165%208.949%2C5%20z%22%20fill%3D%22%23a0a0a0%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:11px;height:11px;background-size:11px 11px}.dg-firm-card__email:before{top:5px;background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%227%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2011%2C1.555%20v%203.89%20C%2011%2C6.303%2010.242%2C7%209.309%2C7%20H%201.692%20C%200.758%2C7%200%2C6.303%200%2C5.444%20V%201.554%20L%205.5%2C4.826%2011%2C1.555%20z%20M%200.191%2C0%20H%2010.808%20L%205.5%2C3.111%200.191%2C0%20z%22%20fill%3D%22%23aaa%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:11px;height:7px;background-size:11px 7px}.dg-schedule__today{position:relative;display:inline-block;margin-left:24px;max-width:84%;background-position:center bottom;background-size:2px 1px;background-repeat:repeat-x;font-size:14px;line-height:16px;cursor:pointer}.dg-schedule__today:before{position:absolute;top:3px;left:-24px}.dg-schedule__today-inner{overflow:hidden;width:100%;white-space:nowrap}.dg-schedule_works-everyday_true .dg-schedule__today{background-image:none;cursor:default}.dg-schedule_works-everyday_true .dg-schedule__today:after{background-image:none}.dg-schedule_open_true .dg-schedule__today:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205.5%2C11%20C%202.463%2C11%200%2C8.537%200%2C5.5%200%2C2.462%202.463%2C0%205.5%2C0%208.537%2C0%2011%2C2.462%2011%2C5.5%2011%2C8.537%208.537%2C11%205.5%2C11%20z%20M%206%2C5.293%20V%202%20H%205%20V%205.707%20L%207.646%2C8.353%208.353%2C7.646%206%2C5.293%20z%22%20fill%3D%22%2370bf00%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:11px;height:11px;background-size:11px 11px}.dg-schedule__now{margin:2px 7px 0 36px;font-size:12px}.dg-schedule__string{padding:3px 16px 3px 24px;text-align:left;font-size:14px}.dg-schedule__table{display:none;text-align:center;font-size:0}.dg-schedule__tc{display:inline-block;padding:2px 0 15px;width:44px;vertical-align:top;white-space:normal;font-size:14px}.dg-schedule__tc_pre{width:19px}.dg-schedule__day-name{margin:0;color:#8c8782;text-transform:capitalize}.dg-schedule__td{margin:10px 0 0}.dg-schedule_state_expanded .dg-schedule__popup{display:block;visibility:visible;max-height:1000px;opacity:1}.dg-schedule__table-clock{margin:13px 0 0}.dg-schedule__today{background-image:-webkit-gradient(linear,left top,right top,from(rgba(230,230,230,.55)),color-stop(50%,rgba(230,230,230,.55)),color-stop(51%,rgba(0,0,0,0)),to(rgba(0,0,0,0)));background-image:-webkit-linear-gradient(left,rgba(230,230,230,.55),rgba(230,230,230,.55) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0) 100%);background-image:linear-gradient(to right,rgba(230,230,230,.55),rgba(230,230,230,.55) 50%,rgba(0,0,0,0) 51%,rgba(0,0,0,0) 100%)}.dg-schedule__now{color:#aaa}.dg-schedule__string-time,.dg-schedule__td{color:#e6e6e6}.dg-schedule__tc_active_true{background:rgba(255,255,255,.1)}.dg-schedule__table-clock{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205.5%2C11%20C%202.463%2C11%200%2C8.537%200%2C5.5%200%2C2.462%202.463%2C0%205.5%2C0%208.537%2C0%2011%2C2.462%2011%2C5.5%2011%2C8.537%208.537%2C11%205.5%2C11%20z%20M%206%2C5.293%20V%202%20H%205%20V%205.707%20L%207.646%2C8.353%208.353%2C7.646%206%2C5.293%20z%22%20fill%3D%22%23a0a0a0%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:11px;height:11px;background-size:11px 11px}.dg-schedule__table-lunch{margin:31px 0 0;background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%204%2C7%20H%208%20C%208.58%2C7%209.461%2C6.084%209.826%2C4.977%20V%205%20C%2011.047%2C5%2012%2C3.453%2012%2C2.031%2012%2C1.453%2011.531%2C1%2011.016%2C1%20H%2010%20C%2010%2C0.188%209.781%2C0%209%2C0%20H%203%20C%202.297%2C0%202%2C0.188%202%2C1%20v%203%20c%200%2C1.49%201.137%2C3%202%2C3%20z%20m%206%2C-5%20h%200.5%20C%2010.875%2C2%2011%2C2.219%2011%2C2.5%2011%2C3.625%2010.562%2C4%2010%2C4%20V%202%20z%20M%200%2C9%20c%200%2C0.448%201.791%2C1%203%2C1%200%2C0.405%200.646%2C1%201%2C1%20h%204%20c%200.354%2C0%201%2C-0.595%201%2C-1%201.208%2C0%203%2C-0.552%203%2C-1%20V%208%20H%200%20v%201%20z%22%20fill%3D%22%23aaa5a0%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:12px;height:11px;background-size:12px 11px}.dg-schedule_open_false .dg-schedule__today:before{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2211%22%20height%3D%2211%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205.5%2C11%20C%202.463%2C11%200%2C8.537%200%2C5.5%200%2C2.462%202.463%2C0%205.5%2C0%208.537%2C0%2011%2C2.462%2011%2C5.5%2011%2C8.537%208.537%2C11%205.5%2C11%20z%20M%206%2C5.293%20V%202%20H%205%20V%205.707%20L%207.646%2C8.353%208.353%2C7.646%206%2C5.293%20z%22%20fill%3D%22%23a0a0a0%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:11px;height:11px;background-size:11px 11px}.dg-schedule__today:after,.dg-schedule__today_shown_true:after{background-repeat:no-repeat;width:10px;height:6px;background-size:10px 6px}.dg-schedule__today:after{position:absolute;right:-15px;bottom:4px;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205%2C6%20H%204.586%20L%200%2C1.414%20V%200%20H%201.414%20L%205%2C3.586%208.586%2C0%20H%2010%20V%201.414%20L%205.414%2C6%20H%205%20z%22%20fill%3D%22%23a5a09c%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-schedule__today_shown_true:after{background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2210%22%20height%3D%226%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%205%2C0%20H%205.414%20L%2010%2C4.586%20V%206%20H%208.586%20L%205%2C2.414%201.414%2C6%20H%200%20V%204.586%20L%204.586%2C0%20H%205%20z%22%20fill%3D%22%23a5a09c%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-link,.dg-link:hover{background-position:0 95%;background-size:10px 1px;background-repeat:repeat-x}.dg-link_type_local{background:-webkit-gradient(linear,left top,right top,from(#9cd),color-stop(50%,#9cd),color-stop(50%,transparent));background:-webkit-linear-gradient(left,#9cd,#9cd 50%,transparent 50%);background:linear-gradient(to right,#9cd,#9cd 50%,transparent 50%)}.no-touch .dg-link_type_local:hover{background:-webkit-gradient(linear,left top,right top,from(#9bc),color-stop(50%,#9bc),color-stop(50%,transparent));background:-webkit-linear-gradient(left,#9bc,#9bc 50%,transparent 50%);background:linear-gradient(to right,#9bc,#9bc 50%,transparent 50%)}.dg-link.dg-link_type_local,.dg-link.dg-link_type_local:hover{background-size:6px 1px}.dg-control-round__icon_name_traffic:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2214%22%20viewBox%3D%220%200%2020%2014%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2018%2C5%20C%2018%2C4%2017%2C1%2015%2C1%20H%2012%2010%20C%208%2C1%207%2C4%207%2C5%20H%205%20v%202%20h%201%20v%204%20c%200%2C0.6%200%2C1%201%2C1%20v%202%20h%202%20v%20-2%20h%207%20v%202%20h%202%20v%20-2%20c%201%2C0%201%2C-0.4%201%2C-1%20V%207%20h%201%20V%205%20H%2018%20z%20M%2010%2C3%20h%202%203%20c%202%2C0%202%2C1%202%2C3%20H%208%20C%208%2C4%208%2C3%2010%2C3%20z%20M%209%2C10%20H%208%20C%207.4%2C10%207%2C9.6%207%2C9%207%2C8.4%207.4%2C8%208%2C8%20h%201%20c%200.6%2C0%201%2C0.4%201%2C1%200%2C0.6%20-0.4%2C1%20-1%2C1%20z%20m%208%2C0%20H%2016%20C%2015.4%2C10%2015%2C9.6%2015%2C9%2015%2C8.4%2015.4%2C8%2016%2C8%20h%201%20c%200.6%2C0%201%2C0.4%201%2C1%200%2C0.6%20-0.4%2C1%20-1%2C1%20z%20M%204%2C4%20H%206%20V%203%20H%204%20C%201%2C3%201%2C6%201%2C7%20H%200%20v%201%20h%201%20v%204%20H%203%20V%2011%20H%205%20V%207%20H%202%20C%202%2C6%202%2C4%204%2C4%20z%20M%203%2C9%204%2C10%20H%202%20V%209%20h%201%20z%22%20fill%3D%22%23616161%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23fff%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m%2016%2C8%20h%201%20c%200.4%2C0%200.7%2C0.2%200.8%2C0.5%20C%2017.9%2C8.4%2018%2C8.2%2018%2C8%2018%2C7.4%2017.6%2C7%2017%2C7%20h%20-1%20c%20-0.6%2C0%20-1%2C0.4%20-1%2C1%200%2C0.2%200.1%2C0.4%200.2%2C0.5%20C%2015.3%2C8.2%2015.6%2C8%2016%2C8%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%208%2C8%20H%209%20C%209.4%2C8%209.7%2C8.2%209.8%2C8.5%209.9%2C8.4%2010%2C8.2%2010%2C8%2010%2C7.4%209.6%2C7%209%2C7%20H%208%20C%207.4%2C7%207%2C7.4%207%2C8%207%2C8.2%207.1%2C8.4%207.2%2C8.5%207.3%2C8.2%207.6%2C8%208%2C8%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%206%2C3%20H%204%20C%204%2C3%204%2C3%204%2C3%202%2C3%202%2C5%202%2C6%20H%202%20C%202.1%2C5%202.5%2C4%204%2C4%20H%205%206%20V%203%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%207H1V8H0z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2015%2C2%20H%2012%2010%20C%208%2C2%208%2C3%208%2C5%20H%208%20C%208%2C3.7%208.3%2C3%2010%2C3%20h%202%203%20c%201.7%2C0%201.9%2C0.7%202%2C2%20h%200%20C%2017%2C3%2017%2C2%2015%2C2%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%209L4%209%203%208%202%208%202%209%202%209%202%209%203%209z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%207%2C11%20C%206%2C11%206%2C10.6%206%2C10%20v%201%20c%200%2C0.6%200%2C1%201%2C1%20v%20-1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m%2018%2C11%20v%201%20c%201%2C0%201%2C-0.4%201%2C-1%20v%20-1%20c%200%2C0.6%200%2C1%20-1%2C1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M19%206H20V7H19z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%2011L1%2011%201%2012%203%2012%203%2011%205%2011%205%207%205%207%205%2010%203%2010z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2013H18V14H16z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5%206H6V7H5z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9%2013L7%2013%207%2014%209%2014%209%2012%2016%2012%2016%2011%209%2011z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23444%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%202%2C6%20C%202%2C6.4%202%2C6.7%202%2C7%20H%205%20V%206%20H%202%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M2%209L2%2010%204%2010%203%209z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%204%2C3%20H%206%20V%202%20H%204%20C%201%2C2%201%2C5%201%2C6%20H%200%20V%207%20H%201%20C%201%2C6%201%2C3%204%2C3%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2018%2C4%20C%2018%2C3%2017%2C0%2015%2C0%20H%2012%2010%20C%208%2C0%207%2C3%207%2C4%20H%206%205%20V%205%20H%207%20C%207%2C4%208%2C1%2010%2C1%20h%202%203%20c%202%2C0%203%2C3%203%2C4%20h%202%20V%204%20h%20-2%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%208%2C10%20H%209%20C%209.6%2C10%2010%2C9.6%2010%2C9%2010%2C8.8%209.9%2C8.6%209.8%2C8.5%209.7%2C8.8%209.4%2C9%209%2C9%20H%208%20C%207.6%2C9%207.3%2C8.8%207.2%2C8.5%207.1%2C8.6%207%2C8.8%207%2C9%20c%200%2C0.6%200.4%2C1%201%2C1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017%2C6%20C%2017%2C5.6%2017%2C5.3%2017%2C5%20H%208%20c%200%2C0.3%200%2C0.6%200%2C1%20h%209%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017.8%2C8.5%20C%2017.7%2C8.8%2017.4%2C9%2017%2C9%20H%2016%20C%2015.6%2C9%2015.3%2C8.8%2015.2%2C8.5%2015.1%2C8.6%2015%2C8.8%2015%2C9%20c%200%2C0.6%200.4%2C1%201%2C1%20h%201%20c%200.6%2C0%201%2C-0.4%201%2C-1%200%2C-0.2%20-0.1%2C-0.4%20-0.2%2C-0.5%20z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A);width:20px;height:14px;background-size:20px 14px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.dg-control-round__icon_name_traffic:active:after,.no-touch .dg-control-round__icon_name_traffic:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2220%22%20height%3D%2214%22%20viewBox%3D%220%200%2020%2014%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%2018%2C5%20C%2018%2C4%2017%2C1%2015%2C1%20H%2012%2010%20C%208%2C1%207%2C4%207%2C5%20H%205%20v%202%20h%201%20v%204%20c%200%2C0.6%200%2C1%201%2C1%20v%202%20h%202%20v%20-2%20h%207%20v%202%20h%202%20v%20-2%20c%201%2C0%201%2C-0.4%201%2C-1%20V%207%20h%201%20V%205%20H%2018%20z%20M%2010%2C3%20h%202%203%20c%202%2C0%202%2C1%202%2C3%20H%208%20C%208%2C4%208%2C3%2010%2C3%20z%20M%209%2C10%20H%208%20C%207.4%2C10%207%2C9.6%207%2C9%207%2C8.4%207.4%2C8%208%2C8%20h%201%20c%200.6%2C0%201%2C0.4%201%2C1%200%2C0.6%20-0.4%2C1%20-1%2C1%20z%20m%208%2C0%20H%2016%20C%2015.4%2C10%2015%2C9.6%2015%2C9%2015%2C8.4%2015.4%2C8%2016%2C8%20h%201%20c%200.6%2C0%201%2C0.4%201%2C1%200%2C0.6%20-0.4%2C1%20-1%2C1%20z%20M%204%2C4%20H%206%20V%203%20H%204%20C%201%2C3%201%2C6%201%2C7%20H%200%20v%201%20h%201%20v%204%20H%203%20V%2011%20H%205%20V%207%20H%202%20C%202%2C6%202%2C4%204%2C4%20z%20M%203%2C9%204%2C10%20H%202%20V%209%20h%201%20z%22%20fill%3D%22%23424242%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%20%20%20%20%3Cg%20fill%3D%22%23fff%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m%2016%2C8%20h%201%20c%200.4%2C0%200.7%2C0.2%200.8%2C0.5%20C%2017.9%2C8.4%2018%2C8.2%2018%2C8%2018%2C7.4%2017.6%2C7%2017%2C7%20h%20-1%20c%20-0.6%2C0%20-1%2C0.4%20-1%2C1%200%2C0.2%200.1%2C0.4%200.2%2C0.5%20C%2015.3%2C8.2%2015.6%2C8%2016%2C8%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%208%2C8%20H%209%20C%209.4%2C8%209.7%2C8.2%209.8%2C8.5%209.9%2C8.4%2010%2C8.2%2010%2C8%2010%2C7.4%209.6%2C7%209%2C7%20H%208%20C%207.4%2C7%207%2C7.4%207%2C8%207%2C8.2%207.1%2C8.4%207.2%2C8.5%207.3%2C8.2%207.6%2C8%208%2C8%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%206%2C3%20H%204%20C%204%2C3%204%2C3%204%2C3%202%2C3%202%2C5%202%2C6%20H%202%20C%202.1%2C5%202.5%2C4%204%2C4%20H%205%206%20V%203%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M0%207H1V8H0z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2015%2C2%20H%2012%2010%20C%208%2C2%208%2C3%208%2C5%20H%208%20C%208%2C3.7%208.3%2C3%2010%2C3%20h%202%203%20c%201.7%2C0%201.9%2C0.7%202%2C2%20h%200%20C%2017%2C3%2017%2C2%2015%2C2%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%209L4%209%203%208%202%208%202%209%202%209%202%209%203%209z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%207%2C11%20C%206%2C11%206%2C10.6%206%2C10%20v%201%20c%200%2C0.6%200%2C1%201%2C1%20v%20-1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22m%2018%2C11%20v%201%20c%201%2C0%201%2C-0.4%201%2C-1%20v%20-1%20c%200%2C0.6%200%2C1%20-1%2C1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M19%206H20V7H19z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M3%2011L1%2011%201%2012%203%2012%203%2011%205%2011%205%207%205%207%205%2010%203%2010z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M16%2013H18V14H16z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M5%206H6V7H5z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M9%2013L7%2013%207%2014%209%2014%209%2012%2016%2012%2016%2011%209%2011z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cg%20fill%3D%22%232e2e2e%22%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%202%2C6%20C%202%2C6.4%202%2C6.7%202%2C7%20H%205%20V%206%20H%202%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M2%209L2%2010%204%2010%203%209z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%204%2C3%20H%206%20V%202%20H%204%20C%201%2C2%201%2C5%201%2C6%20H%200%20V%207%20H%201%20C%201%2C6%201%2C3%204%2C3%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2018%2C4%20C%2018%2C3%2017%2C0%2015%2C0%20H%2012%2010%20C%208%2C0%207%2C3%207%2C4%20H%206%205%20V%205%20H%207%20C%207%2C4%208%2C1%2010%2C1%20h%202%203%20c%202%2C0%203%2C3%203%2C4%20h%202%20V%204%20h%20-2%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%208%2C10%20H%209%20C%209.6%2C10%2010%2C9.6%2010%2C9%2010%2C8.8%209.9%2C8.6%209.8%2C8.5%209.7%2C8.8%209.4%2C9%209%2C9%20H%208%20C%207.6%2C9%207.3%2C8.8%207.2%2C8.5%207.1%2C8.6%207%2C8.8%207%2C9%20c%200%2C0.6%200.4%2C1%201%2C1%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017%2C6%20C%2017%2C5.6%2017%2C5.3%2017%2C5%20H%208%20c%200%2C0.3%200%2C0.6%200%2C1%20h%209%20z%22%2F%3E%0A%20%20%20%20%20%20%20%20%3Cpath%20d%3D%22M%2017.8%2C8.5%20C%2017.7%2C8.8%2017.4%2C9%2017%2C9%20H%2016%20C%2015.6%2C9%2015.3%2C8.8%2015.2%2C8.5%2015.1%2C8.6%2015%2C8.8%2015%2C9%20c%200%2C0.6%200.4%2C1%201%2C1%20h%201%20c%200.6%2C0%201%2C-0.4%201%2C-1%200%2C-0.2%20-0.1%2C-0.4%20-0.2%2C-0.5%20z%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A)}.dg-control-round__icon_state_active.dg-control-round__icon_name_traffic:active:after,.dg-control-round__icon_state_active.dg-control-round__icon_name_traffic:after,.no-touch .dg-control-round__icon_state_active.dg-control-round__icon_name_traffic:hover:after{background-image:none}a.dg-traffic-control{z-index:0;color:#f2f2f2;text-decoration:none;text-shadow:0 1px 2px rgba(0,0,0,.3);font:400 15px/32px 'Arial narrow',Arial,sans-serif}a.dg-traffic-control_color_green:after,a.dg-traffic-control_color_red:after,a.dg-traffic-control_color_yellow:after{position:absolute;top:0;right:0;bottom:0;left:0;z-index:-1;margin:auto;width:22px;height:22px;border-radius:50%;-webkit-box-shadow:inset 0 1px 0 0 rgba(0,0,0,.2),0 1px 0 0 #fff;box-shadow:inset 0 1px 0 0 rgba(0,0,0,.2),0 1px 0 0 #fff}.no-touch a.dg-traffic-control:hover{color:#f2f2f2}.no-touch a.dg-traffic-control_color_green:hover:after,.no-touch a.dg-traffic-control_color_red:hover:after,.no-touch a.dg-traffic-control_color_yellow:hover:after{width:22px;height:22px}a.dg-traffic-control_color_green:after{background:#3fc03b}.no-touch a.dg-traffic-control_color_green:hover:after,a.dg-traffic-control_color_green:active:after{background:-webkit-gradient(linear,left bottom,left top,from(#2aa731),to(#53e13a)) #3ec435;background:-webkit-linear-gradient(bottom,#2aa731,#53e13a) #3ec435;background:linear-gradient(to top,#2aa731,#53e13a) #3ec435}a.dg-traffic-control_color_yellow:after{background:#f3b223}.no-touch a.dg-traffic-control_color_yellow:hover:after,a.dg-traffic-control_color_yellow:active:after{background:-webkit-gradient(linear,left bottom,left top,from(#ef931b),to(#f7be26)) #f4a820;background:-webkit-linear-gradient(bottom,#ef931b,#f7be26) #f4a820;background:linear-gradient(to top,#ef931b,#f7be26) #f4a820}a.dg-traffic-control_color_red:after{background:#eb240c}.no-touch a.dg-traffic-control_color_red:hover:after,a.dg-traffic-control_color_red:active:after{background:-webkit-gradient(linear,left bottom,left top,from(#c01c0a),to(#f73416)) #db2811;background:-webkit-linear-gradient(bottom,#c01c0a,#f73416) #db2811;background:linear-gradient(to top,#c01c0a,#f73416) #db2811}.leaflet-rulerMarker-pane{z-index:600}.dg-ruler__label{position:absolute;top:0;left:0;z-index:200}.dg-ruler__label-spacer{display:block}.dg-ruler__label-container{display:none;padding:2px 4px;border:4px solid #fff;border-radius:13px;background:#0da5d5;background-clip:padding-box;color:#fff;white-space:nowrap;font-size:12px}.dg-ruler__point{display:inline-block;margin:2px 4px 0 0;width:10px;height:10px;border-radius:5px;background:#fff}.dg-ruler__label-remove-link{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%206%2C0%20C%202.687%2C0%200%2C2.687%200%2C6%200%2C9.313%202.687%2C12%206%2C12%209.313%2C12%2012%2C9.313%2012%2C6%2012%2C2.687%209.313%2C0%206%2C0%20z%20M%209.401%2C9.398%208.8%2C9.6%206%2C6.8%203.199%2C9.6%202.59%2C9.415%202.375%2C8.774%205.199%2C6%202.399%2C3.175%202.62%2C2.591%203.175%2C2.375%205.949%2C5.225%208.774%2C2.375%209.415%2C2.605%209.566%2C3.196%206.824%2C6%209.6%2C8.8%209.401%2C9.398%20z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:12px;height:12px;background-size:12px 12px;display:none;margin:1px 0 0 4px;vertical-align:top;-webkit-transition:all .2s ease;transition:all .2s ease}.no-touch .dg-ruler__label-remove-link:hover{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.dg-ruler__remove-link-overlay{position:absolute;top:-7px;right:-7px;bottom:-7px;width:40px}.no-touch .dg-ruler__remove-link-overlay{display:none}.dg-control-round__icon_name_ruler:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%229%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2012.999%2C0%20v%204.001%20h%20-1%20V%200%20h%20-2%20v%202%20h%20-1%20V%200%20h%20-2%20V%202%20H%206%20V%200%20H%203.998%20v%204.001%20h%20-1%20V%200%20h%20-3%20V%208%20H%2016%20V%200%20z%22%20fill%3D%22%23616161%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%202.999%2C4%20h%201%20v%201%20h%20-1%20z%20m%203%2C-2%20h%201%20v%201%20h%20-1%20z%20m%203%2C0%20h%201%20v%201%20h%20-1%20z%20m%203%2C2%20h%201%20v%201%20h%20-1%20z%22%20fill%3D%22%23444%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C8%20H%2016%20V%209%20H%200%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C0%20H%203%20V%201%20H%200%20z%20m%2013%2C0%20h%203%20v%201%20h%20-3%20z%20m%20-3%2C0%20h%202%20V%201%20H%2010%20z%20M%207%2C0%20H%209%20V%201%20H%207%20z%20M%204%2C0%20H%206%20V%201%20H%204%20z%22%20fill%3D%22%23444%22%2F%3E%0A%3C%2Fsvg%3E%0A);width:16px;height:9px;background-size:16px 9px;position:absolute;top:0;right:0;bottom:0;left:0;margin:auto}.dg-control-round__icon_name_ruler:active:after,.no-touch .dg-control-round__icon_name_ruler:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%229%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2012.999%2C0%20v%204.001%20h%20-1%20V%200%20h%20-2%20v%202%20h%20-1%20V%200%20h%20-2%20V%202%20H%206%20V%200%20H%203.998%20v%204.001%20h%20-1%20V%200%20h%20-3%20V%208%20H%2016%20V%200%20z%22%20fill%3D%22%23424242%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%202.999%2C4%20h%201%20v%201%20h%20-1%20z%20m%203%2C-2%20h%201%20v%201%20h%20-1%20z%20m%203%2C0%20h%201%20v%201%20h%20-1%20z%20m%203%2C2%20h%201%20v%201%20h%20-1%20z%22%20fill%3D%22%232e2e2e%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C8%20H%2016%20V%209%20H%200%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C0%20H%203%20V%201%20H%200%20z%20m%2013%2C0%20h%203%20v%201%20h%20-3%20z%20m%20-3%2C0%20h%202%20V%201%20H%2010%20z%20M%207%2C0%20H%209%20V%201%20H%207%20z%20M%204%2C0%20H%206%20V%201%20H%204%20z%22%20fill%3D%22%232e2e2e%22%2F%3E%0A%3C%2Fsvg%3E%0A)}.dg-control-round__icon_state_active.dg-control-round__icon_name_ruler:active:after,.dg-control-round__icon_state_active.dg-control-round__icon_name_ruler:after,.no-touch .dg-control-round__icon_state_active.dg-control-round__icon_name_ruler:hover:after{background-repeat:no-repeat;background-image:url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%229%22%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%2012.999%2C0%20v%204.001%20h%20-1%20V%200%20h%20-2%20v%202%20h%20-1%20V%200%20h%20-2%20V%202%20H%206%20V%200%20H%203.999%20v%204.001%20h%20-1%20V%200%20h%20-3%20V%208%20H%2016%20V%200%20z%22%20fill%3D%22%2321a7d6%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22m%202.999%2C4%20h%201%20v%201%20h%20-1%20z%20m%203%2C-2%20h%201%20v%201%20h%20-1%20z%20m%203%2C0%20h%201%20v%201%20h%20-1%20z%20m%203%2C2%20h%201%20v%201%20h%20-1%20z%22%20fill%3D%22%23147596%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C8%20H%2016%20V%209%20H%200%20z%22%20fill%3D%22%23fff%22%2F%3E%0A%20%20%20%20%3Cpath%20d%3D%22M%200%2C0%20H%203%20V%201%20H%200%20z%20m%2013%2C0%20h%203%20v%201%20h%20-3%20z%20m%20-3%2C0%20h%202%20V%201%20H%2010%20z%20M%207%2C0%20H%209%20V%201%20H%207%20z%20M%204%2C0%20H%206%20V%201%20H%204%20z%22%20fill%3D%22%23147596%22%2F%3E%0A%3C%2Fsvg%3E%0A)}";
        t("browserify-css").createStyle(o, {
          href: "dist/css/styles.full.dark.css"
        }, {
          insertAt: "bottom"
        }), e.exports = o
      }, {
        "browserify-css": 3
      }],
      2: [function(_dereq_, module, exports) {
        (function(process) {
          var Nn, On, Qn, Rn, Sn;
          "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function(t, e) {
            "use strict";
            if (null == this) throw new TypeError("Array.prototype.reduce called on null or undefined");
            if ("function" != typeof t) throw new TypeError(t + " is not a function");
            var i, o, n = this.length >>> 0,
              r = !1;
            for (1 < arguments.length && (o = e, r = !0), i = 0; i < n; ++i) this.hasOwnProperty(i) && (r ? o = t(o, this[i], i, this) : (o = this[i], r = !0));
            if (!r) throw new TypeError("Reduce of empty array with no initial value");
            return o
          }), Array.prototype.forEach || (Array.prototype.forEach = function(t, e) {
            "use strict";
            var i, o;
            if (null == this) throw new TypeError("this is null or not defined");
            var n, r = Object(this),
              s = r.length >>> 0;
            if ("[object Function]" !== {}.toString.call(t)) throw new TypeError(t + " is not a function");
            for (2 <= arguments.length && (i = e), o = 0; o < s;) o in r && (n = r[o], t.call(i, n, o, r)), o++
          }), Object.keys || (Object.keys = function() {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
              r = !{
                toString: null
              }.propertyIsEnumerable("toString"),
              s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
              a = s.length;
            return function(t) {
              if ("object" != typeof t && ("function" != typeof t || null === t)) throw new TypeError("Object.keys called on non-object");
              var e, i, o = [];
              for (e in t) n.call(t, e) && o.push(e);
              if (r)
                for (i = 0; i < a; i++) n.call(t, s[i]) && o.push(s[i]);
              return o
            }
          }()), Array.prototype.some || (Array.prototype.some = function(t) {
            "use strict";
            if (null == this) throw new TypeError;
            var e = Object(this),
              i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var o = 2 <= arguments.length ? arguments[1] : void 0, n = 0; n < i; n++)
              if (n in e && t.call(o, e[n], n, e)) return !0;
            return !1
          }), Array.prototype.map || (Array.prototype.map = function(t) {
            "use strict";
            if (null == this) throw new TypeError;
            var e = Object(this),
              i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var o = new Array(i), n = 2 <= arguments.length ? arguments[1] : void 0, r = 0; r < i; r++) r in e && (o[r] = t.call(n, e[r], r, e));
            return o
          }), Array.prototype.filter || (Array.prototype.filter = function(t) {
            "use strict";
            if (null == this) throw new TypeError;
            var e = Object(this),
              i = e.length >>> 0;
            if ("function" != typeof t) throw new TypeError;
            for (var o = [], n = 2 <= arguments.length ? arguments[1] : void 0, r = 0; r < i; r++)
              if (r in e) {
                var s = e[r];
                t.call(n, s, r, e) && o.push(s)
              } return o
          }), Function.prototype.bind || (Function.prototype.bind = function(t) {
            if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");

            function e() {}

            function i() {
              return n.apply(this instanceof e && t ? this : t, o.concat(Array.prototype.slice.call(arguments)))
            }
            var o = Array.prototype.slice.call(arguments, 1),
              n = this;
            return e.prototype = this.prototype, i.prototype = new e, i
          }), Array.prototype.indexOf || (Array.prototype.indexOf = function(t, e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var i = this.length >>> 0;
            for (e = +e || 0, Math.abs(e) === 1 / 0 && (e = 0), e < 0 && ((e += i) < 0 && (e = 0)); e < i; e++)
              if (this[e] === t) return e;
            return -1
          }), "function" != typeof Promise && (Rn = {}, Sn = {}, Qn = On = function(s) {
            function t(t) {
              if ("." !== t.charAt(0)) return t;
              for (var e = t.split("/"), i = s.split("/").slice(0, -1), o = 0, n = e.length; o < n; o++) {
                var r = e[o];
                if (".." === r) i.pop();
                else {
                  if ("." === r) continue;
                  i.push(r)
                }
              }
              return i.join("/")
            }
            if (Qn._eak_seen = Rn, Sn[s]) return Sn[s];
            if (Sn[s] = {}, !Rn[s]) throw new Error("Could not find module " + s);
            for (var e, i = Rn[s], o = i.deps, n = i.callback, r = [], a = 0, l = o.length; a < l; a++) "exports" === o[a] ? r.push(e = {}) : r.push(On(t(o[a])));
            var u = n.apply(this, r);
            return Sn[s] = e || u
          }, (Nn = function(t, e, i) {
            Rn[t] = {
              deps: e,
              callback: i
            }
          })("promise/all", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray,
              u = t.isFunction;
            e.all = function(l) {
              if (!i(l)) throw new TypeError("You must pass an array to all.");
              return new this(function(i, t) {
                function e(e) {
                  return function(t) {
                    o(e, t)
                  }
                }

                function o(t, e) {
                  r[t] = e, 0 == --s && i(r)
                }
                var n, r = [],
                  s = l.length;
                0 === s && i([]);
                for (var a = 0; a < l.length; a++)(n = l[a]) && u(n.then) ? n.then(e(a), t) : o(a, n)
              })
            }
          }), Nn("promise/asap", ["exports"], function(t) {
            "use strict";

            function e() {
              for (var t = 0; t < u.length; t++) {
                var e = u[t];
                (0, e[0])(e[1])
              }
              u = []
            }
            var i, o, n, r, s = "undefined" != typeof window ? window : {},
              a = s.MutationObserver || s.WebKitMutationObserver,
              l = window,
              u = [];
            i = void 0 !== process && "[object process]" === {}.toString.call(process) ? function() {
              process.nextTick(e)
            } : a ? (o = 0, n = new a(e), r = document.createTextNode(""), n.observe(r, {
              characterData: !0
            }), function() {
              r.data = o = ++o % 2
            }) : function() {
              l.setTimeout(e, 1)
            }, t.asap = function(t, e) {
              1 === u.push([t, e]) && i()
            }
          }), Nn("promise/config", ["exports"], function(t) {
            "use strict";
            var i = {
              instrument: !1
            };
            t.config = i, t.configure = function(t, e) {
              return 2 !== arguments.length ? i[t] : void(i[t] = e)
            }
          }), Nn("promise/polyfill", ["./promise", "./utils", "exports"], function(t, e, i) {
            "use strict";
            var o = t.Promise,
              n = e.isFunction;
            i.polyfill = function() {
              var t, e;
              "Promise" in (t = "undefined" != typeof window && window.document ? window : self) && "resolve" in t.Promise && "reject" in t.Promise && "all" in t.Promise && "race" in t.Promise && (new t.Promise(function(t) {
                e = t
              }), n(e)) || (t.Promise = o)
            }
          }), Nn("promise/promise", ["./config", "./utils", "./all", "./race", "./resolve", "./reject", "./asap", "exports"], function(t, e, i, o, n, r, s, a) {
            "use strict";

            function l(t) {
              if (!y(t)) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              if (!(this instanceof l)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              this._subscribers = [],
                function(t, e) {
                  function i(t) {
                    _(e, t)
                  }
                  try {
                    t(function(t) {
                      d(e, t)
                    }, i)
                  } catch (t) {
                    i(t)
                  }
                }(t, this)
            }

            function u(t, e, i, o) {
              var n, r, s, a, l = y(i);
              if (l) try {
                n = i(o), s = !0
              } catch (t) {
                a = !0, r = t
              } else n = o, s = !0;
              h(e, n) || (l && s ? d(e, n) : a ? _(e, r) : t === z ? d(e, n) : t === P && _(e, n))
            }

            function c(t, e) {
              for (var i = t._subscribers, o = t._detail, n = 0; n < i.length; n += 3) u(e, i[n], i[n + e], o);
              t._subscribers = null
            }

            function h(e, i) {
              var o, t = null;
              try {
                if (e === i) throw new TypeError("A promises callback cannot return that same promise.");
                if (v(i) && (t = i.then, y(t))) return t.call(i, function(t) {
                  return !!o || (o = !0, void(i !== t ? d(e, t) : p(e, t)))
                }, function(t) {
                  return !!o || (o = !0, void _(e, t))
                }), !0
              } catch (t) {
                return !!o || (_(e, t), !0)
              }
              return !1
            }

            function d(t, e) {
              t === e ? p(t, e) : h(t, e) || p(t, e)
            }

            function p(t, e) {
              t._state === D && (t._state = L, t._detail = e, g.async(m, t))
            }

            function _(t, e) {
              t._state === D && (t._state = L, t._detail = e, g.async(f, t))
            }

            function m(t) {
              c(t, t._state = z)
            }

            function f(t) {
              c(t, t._state = P)
            }
            var g = t.config,
              v = (t.configure, e.objectOrFunction),
              y = e.isFunction,
              b = (e.now, i.all),
              C = o.race,
              w = n.resolve,
              x = r.reject,
              k = s.asap;
            g.async = k;
            var D = void 0,
              L = 0,
              z = 1,
              P = 2;
            l.prototype = {
              constructor: l,
              _state: void 0,
              _detail: void 0,
              _subscribers: void 0,
              then: function(t, e) {
                var i = this,
                  o = new this.constructor(function() {});
                if (this._state) {
                  var n = arguments;
                  g.async(function() {
                    u(i._state, o, n[i._state - 1], i._detail)
                  })
                } else ! function(t, e, i, o) {
                  var n = t._subscribers,
                    r = n.length;
                  n[r] = e, n[r + z] = i, n[r + P] = o
                }(this, o, t, e);
                return o
              },
              catch: function(t) {
                return this.then(null, t)
              }
            }, l.all = b, l.race = C, l.resolve = w, l.reject = x, a.Promise = l
          }), Nn("promise/race", ["./utils", "exports"], function(t, e) {
            "use strict";
            var i = t.isArray;
            e.race = function(n) {
              if (!i(n)) throw new TypeError("You must pass an array to race.");
              return new this(function(t, e) {
                for (var i, o = 0; o < n.length; o++)(i = n[o]) && "function" == typeof i.then ? i.then(t, e) : t(i)
              })
            }
          }), Nn("promise/reject", ["exports"], function(t) {
            "use strict";
            t.reject = function(i) {
              return new this(function(t, e) {
                e(i)
              })
            }
          }), Nn("promise/resolve", ["exports"], function(t) {
            "use strict";
            t.resolve = function(e) {
              return e && "object" == typeof e && e.constructor === this ? e : new this(function(t) {
                t(e)
              })
            }
          }), Nn("promise/utils", ["exports"], function(t) {
            "use strict";

            function e(t) {
              return "function" == typeof t
            }
            var i = Date.now || function() {
              return (new Date).getTime()
            };
            t.objectOrFunction = function(t) {
              return e(t) || "object" == typeof t && null !== t
            }, t.isFunction = e, t.isArray = function(t) {
              return "[object Array]" === Object.prototype.toString.call(t)
            }, t.now = i
          }), On("promise/polyfill").polyfill()), _dereq_("leaflet"), _dereq_("html5shiv");
          var oldDG = window.DG,
            DG = (rr.prototype = L, qr.prototype = new rr, new qr),
            sr;

          function qr() {}

          function rr() {}
          for (var prop in oldDG) oldDG.hasOwnProperty(prop) && void 0 === DG[prop] && (DG[prop] = oldDG[prop]);
          window.__dgApi__ = window.__dgApi__ || {}, DG.version = window.__dgApi__.version, DG.Icon.Default.imagePath = "../img/vendors/leaflet", DG.Map.addInitHook((sr = !1, function() {
            var t, e, i, o, n, r;
            sr || (t = window, e = document, i = DG.config.googleAnalytics, o = "ga", t.GoogleAnalyticsObject = o, t.ga = t.ga || function() {
              (t.ga.q = t.ga.q || []).push(arguments)
            }, t.ga.l = 1 * new Date, n = e.createElement("script"), r = e.getElementsByTagName("script")[0], n.async = 1, n.src = i, r.parentNode.insertBefore(n, r), sr = !0), ga("create", DG.config.gaCode, {
              storage: "none",
              name: DG.config.gaName,
              sampleRate: 50
            }), ga(DG.config.gaName + ".set", "anonymizeIp", !0), ga(DG.config.gaName + ".send", "pageview")
          })), DG.Map.include({
            addHandler: function(t, e) {
              if (!e) return this;
              var i = this.options[t],
                o = i === Object(i) ? i : null,
                n = this[t] = new e(this, o);
              return this._handlers.push(n), i && n.enable(), this
            }
          }), DG.Map.addInitHook(function() {
            DG.Browser.touchEnabled || DG.DomUtil.addClass(this._container, "no-touch")
          }), window.DG = DG, module.exports = DG;
          var handlers = window.__dgApi__.callbacks || [],
            chain = Promise.resolve(),
            MC, NC, OC, PC, QC, RC;

          function SC(t) {
            this[0] = t, this.length = 1
          }
          handlers.forEach(function(t) {
              chain = chain.then(t[0], t[1])
            }), DG.then = function(t, e) {
              return chain.then(t, e)
            }, chain.catch(function(t) {
              console.error(t)
            }), DG.plugin = function(o) {
              var n, r = new RegExp(/.js$/i),
                s = new RegExp(/.css$/i);
              return new Promise(function(t) {
                function i() {
                  0 === --n && t()
                }

                function e(t) {
                  ! function(t) {
                    return r.test(t)
                  }(t) ? function(t) {
                    return s.test(t)
                  }(t) ? function(t) {
                    var e = document.createElement("link");
                    e.setAttribute("rel", "stylesheet"), e.setAttribute("type", "text/css"), e.setAttribute("href", t), document.getElementsByTagName("head")[0].appendChild(e), i()
                  }(t) : n-- : function(t) {
                    var e = document.createElement("script");
                    e.setAttribute("type", "text/javascript"), e.setAttribute("src", t), e.onload = function() {
                      i()
                    }, e.onerror = function() {
                      i()
                    }, e.onreadystatechange = function() {
                      "complete" !== e.readyState && "loaded" !== e.readyState || i()
                    }, document.getElementsByTagName("head")[0].appendChild(e)
                  }(t)
                }
                DG.Util.isArray(o) && (n = o.length, o.forEach(function(t) {
                  e(t)
                })), "string" == typeof o && (n = 1, e(o))
              })
            }, DG.ajax = function() {
              function handleReadyState(t, e, i) {
                return function() {
                  return t._aborted ? i(t.request) : void(t.request && 4 === t.request[readyState] && (t.request.onreadystatechange = noop, twoHundo.test(t.request.status) ? e(t.request) : i(t.request)))
                }
              }

              function setHeaders(t, e) {
                var i, o = e.headers || {};
                for (i in o.Accept = o.Accept || defaultHeaders.accept[e.dataType] || defaultHeaders.accept["*"], e.crossDomain || o[requestedWith] || (o[requestedWith] = defaultHeaders.requestedWith), o[contentType] || (o[contentType] = e.contentType || defaultHeaders.contentType), o) o.hasOwnProperty(i) && "setRequestHeader" in t && t.setRequestHeader(i, o[i])
              }

              function setCredentials(t, e) {
                void 0 !== e.withCredentials && void 0 !== t.withCredentials && (t.withCredentials = !!e.withCredentials)
              }

              function generalCallback(t) {
                lastValue = t
              }

              function urlappend(t, e) {
                return t + (/\?/.test(t) ? "&" : "?") + e
              }

              function handleJsonp(t, e, i, o) {
                var n = uniqid++,
                  r = t.jsonpCallback || "callback",
                  s = t.jsonpCallbackName || callbackPrefix,
                  a = new RegExp("((^|\\?|&)" + r + ")=([^&]+)"),
                  l = o.match(a),
                  u = doc.createElement("script"),
                  c = 0,
                  h = -1 !== navigator.userAgent.indexOf("MSIE 10.0");
                return l ? "?" === l[3] ? o = o.replace(a, "$1=" + s) : s = l[3] : o = urlappend(o, r + "=" + s), win[s] = generalCallback, u.type = "text/javascript", u.src = o, u.async = !0, void 0 === u.onreadystatechange || h || (u.event = "onclick", u.htmlFor = u.id = "_request_" + n), u.onerror = function() {
                  u.onerror = u.onload = u.onreadystatechange = null, i({}, "Request unknown error", {}), lastValue = void 0, head.removeChild(u), c = 1
                }, u.onload = u.onreadystatechange = function() {
                  return !(u[readyState] && "complete" !== u[readyState] && "loaded" !== u[readyState] || c) && (u.onerror = u.onload = u.onreadystatechange = null, u.onclick && u.onclick(), e(lastValue), lastValue = void 0, head.removeChild(u), void(c = 1))
                }, head.appendChild(u), {
                  abort: function() {
                    u.onerror = u.onload = u.onreadystatechange = null, i({}, "Request is aborted: timeout", {}), lastValue = void 0, head.removeChild(u), c = 1
                  }
                }
              }

              function getRequest(t, e) {
                var i, o = this.options,
                  n = (o.type || "GET").toUpperCase(),
                  r = "string" == typeof o ? o : o.url,
                  s = !1 !== o.processData && o.data && "string" != typeof o.data ? Ajax.toQueryString(o.data) : o.data || null,
                  a = !1;
                return "jsonp" !== o.type && "GET" !== n || !s || (r = urlappend(r, s), s = null), "jsonp" === o.type ? handleJsonp(o, t, e, r) : ((i = xhr(o)).open(n, r, !1 !== o.async), setHeaders(i, o), setCredentials(i, o), win[xDomainRequest] && i instanceof win[xDomainRequest] ? (i.onload = t, i.onprogress = function() {}, i.ontimeout = function() {}, i.onerror = e, a = !0) : i.onreadystatechange = handleReadyState(this, t, e), a ? setTimeout(function() {
                  i.send(s)
                }, 200) : i.send(s), i)
              }

              function buildParams(t, e, i, o) {
                var n, r, s, a = /\[\]$/;
                if (DG.Util.isArray(e))
                  for (r = 0; e && r < e.length; r++) s = e[r], i || a.test(t) ? o(t, s) : buildParams(t + "[" + ("object" == typeof s ? r : "") + "]", s, i, o);
                else if (e && "[object Object]" === e.toString())
                  for (n in e) e.hasOwnProperty(n) && buildParams(t + "[" + n + "]", e[n], i, o);
                else o(t, e)
              }

              function setType(t) {
                var e = t.match(/\.(json|jsonp|html|xml)(\?|$)/);
                return e ? e[1] : "js"
              }

              function isCrossDomain(t) {
                var e = rurl.exec(t.toLowerCase());
                return !(!e || e[1] === ajaxLocParts[1] && e[2] === ajaxLocParts[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (ajaxLocParts[3] || ("http:" === ajaxLocParts[1] ? "80" : "443")))
              }

              function doRequest(o) {
                "crossDomain" in o || (o.crossDomain = isCrossDomain(o.url));
                var self = {};
                return self.promise = new Promise(function(resolve, reject) {
                  function complete(t) {
                    o.timeout && clearTimeout(self.timeout), self.timeout = null, self._erred ? reject(t) : resolve(t)
                  }

                  function success(resp) {
                    resp = "jsonp" !== type ? self.request : resp;
                    var filteredResponse = globalSetupOptions.dataFilter(resp.responseText, type),
                      r = filteredResponse;
                    try {
                      resp.responseText = r
                    } catch (t) {}
                    if (r) switch (type) {
                      case "json":
                        try {
                          resp = win.JSON.parse(r)
                        } catch (t) {
                          return error(resp, "Could not parse JSON in response", t)
                        }
                        break;
                      case "js":
                        resp = eval("(" + r + ")");
                        break;
                      case "html":
                        resp = r;
                        break;
                      case "xml":
                        resp = resp.responseXML && resp.responseXML.parseError && resp.responseXML.parseError.errorCode && resp.responseXML.parseError.reason ? null : resp.responseXML
                    }
                    self._responseArgs.resp = resp, complete(resp)
                  }

                  function error(t, e, i) {
                    t = self.request, self._responseArgs.resp = t, self._responseArgs.msg = e, self._responseArgs.t = i, self._erred = !0, complete(t)
                  }
                  self.abort = function() {
                    self._aborted = !0, reject("aborted")
                  }, self.url = o.url, self.timeout = null, self.options = o, self._aborted = !1, self._erred = !1, self._responseArgs = {};
                  var type = "jsonp" === o.type ? o.type : o.dataType || setType(self.url);
                  o.timeout && (self.timeout = setTimeout(function() {
                    self.abort()
                  }, o.timeout)), self.request = getRequest.call(self, success, error)
                }), self
              }

              function Ajax(t, e) {
                "[object Object]" === Object.prototype.toString.call(t) && (e = t, t = void 0), (e = e || {}).url = t || e.url;
                var i = doRequest(e),
                  o = i.promise;
                return (e.success || e.error || e.complete) && o.then(e.success, e.error), o.abort = i.abort, o
              }
              var win = window,
                doc = document,
                rurl = /^([\w.+-]+:)?(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
                twoHundo = /^20\d$/,
                ajaxLocParts, ajaxLocation, byTag = "getElementsByTagName",
                readyState = "readyState",
                contentType = "Content-Type",
                requestedWith = "X-Requested-With",
                head = doc[byTag]("head")[0],
                uniqid = 0,
                callbackPrefix = "l_dg_ajax_callback_" + +new Date,
                lastValue, xmlHttpRequest = "XMLHttpRequest",
                xDomainRequest = "XDomainRequest",
                noop = function() {},
                defaultHeaders = {
                  contentType: "application/x-www-form-urlencoded",
                  requestedWith: xmlHttpRequest,
                  accept: {
                    "*": "text/javascript, text/html, application/xml, text/xml, */*",
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    js: "application/javascript, text/javascript"
                  }
                },
                xhr = function(t) {
                  if (!0 !== t.crossDomain) return new XMLHttpRequest;
                  var e = win[xmlHttpRequest] ? new XMLHttpRequest : null;
                  if (e && "withCredentials" in e) return e;
                  if (win[xDomainRequest]) return new XDomainRequest;
                  throw new Error("Browser does not support cross-origin requests")
                },
                globalSetupOptions = {
                  dataFilter: function(t) {
                    return t
                  }
                };
              try {
                ajaxLocation = location.href
              } catch (t) {
                ajaxLocation = document.createElement("a"), ajaxLocation.href = "", ajaxLocation = ajaxLocation.href
              }
              ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [], Ajax.setup = function(t) {
                for (var e in t = t || {}) t.hasOwnProperty(e) && (globalSetupOptions[e] = t[e])
              }, Ajax.toQueryString = function(t, e) {
                function i(t, e) {
                  e = "function" == typeof e ? e() : e || "", s[s.length] = a(t) + "=" + a(e)
                }
                var o, n, r = e || !1,
                  s = [],
                  a = encodeURIComponent;
                if (DG.Util.isArray(t))
                  for (n = 0; t && n < t.length; n++) i(t[n].name, t[n].value);
                else
                  for (o in t) t.hasOwnProperty(o) && buildParams(o, t[o], r, i);
                return s.join("&").replace(/%20/g, "+")
              };
              var testxhr = win[xmlHttpRequest] ? new XMLHttpRequest : null;
              return Ajax.corsSupport = !(!(testxhr && "withCredentials" in testxhr || win[xDomainRequest]) || DG.Browser.ie && -1 != document.location.host.toLowerCase().search(/[а-я]/)), Ajax
            }(), DG.Wkt = {}, DG.Wkt.toGeoJSON = function(i) {
              function r(t) {
                var e = i.substring(l).match(t);
                return e ? (l += e[0].length, e[0]) : null
              }

              function s() {
                r(/^\s*/)
              }

              function e() {
                s();
                for (var t, e = 0, i = [], o = [i], n = i; t = r(/^(\()/) || r(/^(\))/) || r(/^(\,)/) || r(/^[-+]?([0-9]*\.[0-9]+|[0-9]+)/);) {
                  if ("(" === t) o.push(n), n = [], o[o.length - 1].push(n), e++;
                  else if (")" === t) {
                    if (n = o.pop(), 0 === --e) break
                  } else "," === t ? (n = [], o[o.length - 1].push(n)) : n.push(parseFloat(t));
                  s()
                }
                return (o.length = 0) !== e ? null : i
              }

              function o() {
                for (var t, e, i = []; e = r(/^[-+]?([0-9]*\.[0-9]+|[0-9]+)/) || r(/^(\,)/);) "," === e ? (i.push(t), t = []) : (t = t || []).push(parseFloat(e)), s();
                return t && i.push(t), i.length ? i : null
              }

              function n() {
                return function() {
                  if (!r(/^(point)/i)) return null;
                  if (s(), !r(/^(\()/)) return null;
                  var t = o();
                  return s(), r(/^(\))/) ? {
                    type: "Point",
                    coordinates: t[0]
                  } : null
                }() || function() {
                  if (!r(/^(linestring)/i)) return null;
                  if (s(), !r(/^(\()/)) return null;
                  var t = o();
                  return r(/^(\))/) ? {
                    type: "LineString",
                    coordinates: t
                  } : null
                }() || (r(/^(polygon)/i) ? (s(), {
                  type: "Polygon",
                  coordinates: e()
                }) : null) || function() {
                  if (!r(/^(multipoint)/i)) return null;
                  s();
                  var t = e();
                  return s(), {
                    type: "MultiPoint",
                    coordinates: t
                  }
                }() || function() {
                  if (!r(/^(multilinestring)/i)) return null;
                  s();
                  var t = e();
                  return s(), {
                    type: "MultiLineString",
                    coordinates: t
                  }
                }() || (r(/^(multipolygon)/i) ? (s(), {
                  type: "MultiPolygon",
                  coordinates: e()
                }) : null) || function() {
                  var t, e = [];
                  if (!r(/^(geometrycollection)/i)) return null;
                  if (s(), !r(/^(\()/)) return null;
                  for (; t = n();) e.push(t), s(), r(/^(\,)/), s();
                  return r(/^(\))/) ? {
                    type: "GeometryCollection",
                    geometries: e
                  } : null
                }()
              }
              DG.Util.isArray(i) && (i = i[0]);
              var t = i.split(";");
              i = t.pop();
              var a, l = 0,
                u = (t.shift() || "").split("=").pop();
              return (a = n()) && u.match(/\d+/) && (a.crs = {
                type: "name",
                properties: {
                  name: "urn:ogc:def:crs:EPSG::" + u
                }
              }), a
            }, DG.Wkt.geoJsonLayer = function(t, e) {
              return DG.geoJson(DG.Wkt.toGeoJSON(t), e)
            }, DG.Wkt._coordsToLatLngs = function(t) {
              return DG.Util.isArray(t) && !DG.Util.isArray(t[0]) ? [DG.GeoJSON.coordsToLatLng(t)] : t.map(function(t) {
                return DG.Wkt._coordsToLatLngs(t)
              }).reduce(function(t, e) {
                return t.concat(e)
              })
            }, DG.Wkt.toLatLngs = function(t) {
              return DG.Util.isArray(t) || (t = [t]), t.map(function(t) {
                var e = DG.Wkt.toGeoJSON(t).coordinates;
                return DG.Wkt._coordsToLatLngs(e)
              }).reduce(function(t, e) {
                return t.concat(e)
              })
            }, DG.Wkt.toPoints = function(t) {
              return DG.Wkt.toGeoJSON(t).coordinates
            }, DG.Wkt.pointsToLatLngOnMap = function(t, i) {
              return function t(e) {
                return Array.isArray(e) && Array.isArray(e[0]) ? e.map(t) : i.containerPointToLatLng(e)
              }(DG.Wkt.toPoints(t))
            }, DG.ProjectDetector = DG.Handler.extend({
              initialize: function(t) {
                this._map = t, this._osmViewport = !1, this._project = void 0, this._loadProjectList()
              },
              addHooks: function() {
                this._projectWatch(), this._map.on("move", this._projectWatch, this)
              },
              removeHooks: function() {
                this._map.off("move", this._projectWatch, this)
              },
              getProject: function() {
                return !!this._project && DG.Util.extend({}, this._project)
              },
              getProjectsList: function() {
                return this._projectList.slice(0)
              },
              isProjectHere: function(t, e, i) {
                if (!t) return null;
                t instanceof DG.LatLng || t instanceof DG.LatLngBounds || (t = DG.latLng(t)), t = t instanceof DG.LatLngBounds ? DG.latLngBounds(t.getSouthWest().wrap(), t.getNorthEast().wrap()) : t.wrap();
                var o = "intersects" == (i = i || (t instanceof DG.LatLngBounds ? "intersects" : "contains")) ? this._testProjectIntersects : this._testProjectContains;
                return o = o.bind(this, t), e ? o(e) : this._projectList.filter(o)[0]
              },
              _projectWatch: function() {
                this._map._loaded && (this._osmViewport === (this._project && this._centerInProject(this._project, "contains")) && (this._osmViewport = !this._osmViewport, this._map.attributionControl._update(null, this._osmViewport)), this._project && this._zoomInProject(this._project) && this._centerInProject(this._project) || (this._searchProject(), this._project && (this._osmViewport === (this._project && this._centerInProject(this._project, "contains")) && (this._osmViewport = !this._osmViewport), this._map.attributionControl._update(null, this._osmViewport, this._project.country_code))))
              },
              _checkProjectData: function(t) {
                function e(t) {
                  return null != t
                }
                return t && t.bounds && e(t.code) && e(t.domain) && e(t.country_code) && e(t.flags) && t.zoom_level && e(t.zoom_level.min) && e(t.zoom_level.max) && t.time_zone && e(t.time_zone.offset)
              },
              _loadProjectList: function() {
                DG.fallbackProjectsList = DG.fallbackProjectsList || [], DG.projectsList || (DG.projectsList = DG.fallbackProjectsList), delete DG.fallbackProjectsList, this._projectList = DG.projectsList.filter(this._checkProjectData).map(function(t) {
                  var e = DG.Wkt.toGeoJSON(t.bounds),
                    i = DG.geoJSON(e).getBounds(),
                    o = t.default_pos ? DG.latLng(t.default_pos.lat, t.default_pos.lon) : null;
                  return {
                    id: t.id,
                    code: t.code,
                    minZoom: t.zoom_level.min,
                    maxZoom: t.zoom_level.max,
                    timeOffset: t.time_zone.offset,
                    bound: e,
                    latLngBounds: i,
                    traffic: !!t.flags.traffic,
                    transport: !!t.flags.public_transport,
                    roads: !!t.flags.road_network,
                    country_code: t.country_code,
                    domain: t.domain,
                    defaultPos: o
                  }
                })
              },
              _searchProject: function() {
                var t = this._projectList.filter(this._zoomInProject, this),
                  e = t.filter(this._centerInProject, this);
                if (0 === e.length) {
                  var i = this._map.getBounds();
                  if (1 < (e = t.filter(DG.bind(this._testProjectIntersects, this, i))).length) {
                    for (var o = this._map.getCenter(), n = e[0], r = 1; r < e.length; r++) {
                      var s = e[r];
                      s.defaultPos && o.distanceTo(n.defaultPos) > o.distanceTo(s.defaultPos) && (n = s)
                    }
                    e = [n]
                  }
                }
                var a = e[0] || null;
                if (this._project !== a) {
                  var l = this;
                  null !== this._project && (this._project = null, setTimeout(function() {
                    l._map.fire("projectleave")
                  }, 1)), a && (this._project = a, setTimeout(function() {
                    l._map.fire("projectchange", {
                      getProject: l.getProject.bind(l)
                    })
                  }, 1))
                }
              },
              _testProjectIntersects: function(t, e) {
                return e.latLngBounds.intersects(t)
              },
              _testProjectContains: function(t, e) {
                return DG.PolyUtil.inside([t.lng, t.lat], e.bound)
              },
              _centerInProject: function(t, e) {
                return this.isProjectHere(this._map.getCenter(), t, e)
              },
              _zoomInProject: function(t) {
                return this._map.getZoom() >= t.minZoom
              }
            }), DG.Map.mergeOptions({
              projectDetector: !0
            }), DG.Map.addInitHook("addHandler", "projectDetector", DG.ProjectDetector), DG.Metric = function() {}, DG.Metric.Segments = function() {
              this.length = 0
            }, DG.Metric.Segments.prototype = {
              push: function(t) {
                return this[this.length] = 0 < this.length ? this[this.length - 1] + t : t, this.length += 1, this
              },
              getLength: function() {
                return this[this.length - 1]
              },
              getReverse: function() {
                var t = new DG.Metric.Segments,
                  e = this.length - 1;
                if (e < 0) return t;
                for (; e--;) t.push(this[e + 1] - this[e]);
                return t.push(this[0])
              },
              getIndex: function(t) {
                var e = this.length - 1;
                if (e < 0) return e;
                for (; e-- && !(this[e] <= t););
                return e + 1
              },
              getSegRatio: function(t) {
                var e = this.getIndex(t),
                  i = 0 < e ? this[e - 1] : 0;
                return (t - i) / (this[e] - i)
              },
              getSegLength: function(t) {
                var e = this.getIndex(t);
                return t - (0 < e ? this[e - 1] : 0)
              }
            }, DG.VertexTransform = DG.Class.extend({
              initialize: function(t) {
                this._vertices = t, this._scale = null, this._angle = null, this._trans = null, this._matrix = null, this.load()
              },
              load: function() {
                return this.vertices = this._vertices.map(function(t) {
                  return t.clone()
                }), this.vertices.clone = DG.VertexTransform.clone, this
              },
              save: function() {
                return this._vertices = this.vertices.map(function(t) {
                  return t.clone()
                }), this
              },
              setScale: function(t) {
                return this._scale = t, this
              },
              getScale: function() {
                return this._scale
              },
              setAngle: function(t) {
                return this._angle = t, this
              },
              getAngle: function() {
                return this._angle
              },
              setTranslation: function(t) {
                return this._trans = t, this
              },
              getTranslation: function() {
                return this._trans
              },
              setMatrix: function(t) {
                return this._matrix = t, this
              },
              getMatrix: function() {
                return this._matrix
              },
              scale: function(t) {
                var e = this.vertices,
                  i = e.length;
                for (t = t || this._scale || 1; i--;) e[i].x *= t, e[i].y *= t;
                return this
              },
              unScale: function(t) {
                return t = t || this._scale || 1, this.scale(1 / t)
              },
              rotate: function(t) {
                for (var e, i, o = t ? t.cos : this._angle ? this._angle.cos : 1, n = t ? t.sin : this._angle ? this._angle.sin : 0, r = this.vertices, s = r.length; s--;) e = r[s].x, i = r[s].y, r[s].x = e * o - i * n, r[s].y = e * n + i * o;
                return this
              },
              unRotate: function(t) {
                var e = t ? t.cos : this._angle ? this._angle.cos : 1,
                  i = t ? t.sin : this._angle ? this._angle.sin : 0;
                return this.rotate({
                  cos: e,
                  sin: -i
                })
              },
              translate: function(t) {
                for (var e = t ? t.x : this._trans ? this._trans.x : 0, i = t ? t.y : this._trans ? this._trans.y : 0, o = this.vertices, n = o.length; n--;) o[n].x += e, o[n].y += i;
                return this
              },
              unTranslate: function(t) {
                var e = t ? t.x : this._trans ? this._trans.x : 0,
                  i = t ? t.y : this._trans ? this._trans.y : 0;
                return this.translate({
                  x: -e,
                  y: -i
                })
              },
              transform: function(t) {
                var e, i, o, n, r, s, a, l, u = this.vertices,
                  c = u.length;
                for (s = t ? (e = t[0], i = t[1], r = t[2], o = t[3], n = t[4], t[5]) : this._matrix ? (e = this._matrix[0], i = this._matrix[1], r = this._matrix[2], o = this._matrix[3], n = this._matrix[4], this._matrix[5]) : (n = e = 1, o = r = i = 0); c--;) a = u[c].x, l = u[c].y, u[c].x = a * e + l * i + r, u[c].y = a * o + l * n + s;
                return this
              },
              statics: {
                scale: function(t, e) {
                  var i, o, n = t.vertices,
                    r = [];
                  e = e || 1;
                  for (var s = 0; s < n.length; s++) i = n[s].x * e, o = n[s].y * e, r.push(new DG.Point(i, o));
                  return r.clone = DG.VertexTransform.clone, r
                },
                unScale: function(t, e) {
                  return e = e || 1, DG.VertexTransform.scale(t, 1 / e)
                },
                rotate: function(t, e) {
                  for (var i, o, n, r, s = e ? e.cos : 1, a = e ? e.sin : 0, l = t.vertices, u = [], c = 0; c < l.length; c++) i = (n = l[c].x) * s - (r = l[c].y) * a, o = n * a + r * s, u.push(new DG.Point(i, o));
                  return u.clone = DG.VertexTransform.clone, u
                },
                unRotate: function(t, e) {
                  var i = e ? e.cos : 1,
                    o = e ? e.sin : 0;
                  return DG.VertexTransform.rotate(t, {
                    cos: i,
                    sin: -o
                  })
                },
                translate: function(t, e) {
                  for (var i, o, n = e ? e.x : 0, r = e ? e.y : 0, s = t.vertices, a = [], l = 0; l < s.length; l++) i = s[l].x + n, o = s[l].y + r, a.push(new DG.Point(i, o));
                  return a.clone = DG.VertexTransform.clone, a
                },
                unTranslate: function(t, e) {
                  var i = e ? e.x : 0,
                    o = e ? e.y : 0;
                  return DG.VertexTransform.translate(t, {
                    x: -i,
                    y: -o
                  })
                },
                clone: function() {
                  return new DG.VertexTransform(this).save()
                },
                getLength: function(t, e) {
                  var i, o;
                  return "number" == typeof t ? Math.sqrt(t * t + e * e) : (i = e.x - t.x, o = e.y - t.y, Math.sqrt(i * i + o * o))
                },
                getScaled: function(t, e, i) {
                  var o, n;
                  return "number" == typeof t ? new DG.Point(t * i, e * i) : (o = (e.x - t.x) * i, n = (e.y - t.y) * i, new DG.Point(t.x + o, t.y + n))
                },
                getAngle: function(t, e, i) {
                  var o, n, r, s, a, l;
                  return "number" == typeof t ? 0 < (o = Math.sqrt(t * t + e * e)) ? {
                    cos: t / o,
                    sin: e / o
                  } : {
                    cos: 1,
                    sin: 0
                  } : (r = t.x, s = t.y, a = e.x, l = e.y, i && (r -= i.x, s -= i.y, a -= i.x, l -= i.y), {
                    cos: (r * a + s * l) / (n = Math.sqrt(r * r + s * s) * Math.sqrt(a * a + l * l)),
                    sin: (r * l - a * s) / n
                  })
                },
                getAnglesSum: function(t, e) {
                  return {
                    cos: t.cos * e.cos - t.sin * e.sin,
                    sin: t.sin * e.cos + t.cos * e.sin
                  }
                },
                getAnglesDif: function(t, e) {
                  return {
                    cos: t.cos * e.cos + t.sin * e.sin,
                    sin: t.sin * e.cos - t.cos * e.sin
                  }
                }
              }
            }), DG.ArrowPathTransform = DG.VertexTransform.extend({
              initialize: function(t) {
                this._lengths = new DG.Metric.Segments, this._vertices = [
                  [],
                  []
                ], this._drawings = [
                  [],
                  []
                ], this._setPath(t), this.subPath(1)
              },
              load: function() {
                return this.subPath(1)
              },
              save: function() {
                return this
              },
              _setPath: function(t) {
                var e, i, o, n, r, s, a, l = DG.ArrowPathTransform.transform,
                  u = this._vertices,
                  c = this._drawings,
                  h = DG.Point,
                  d = t.width,
                  p = [
                    [],
                    [],
                    []
                  ],
                  _ = [];
                for (u.push(t.vertices), u[0].push(new DG.Point(t.offset, +d)), u[1].push(new DG.Point(t.offset, -d)), s = DG.ArrowPathTransform.getAngles(t), r = -t.offset, e = 0; e < s.length; e++) i = t.vertices[e + 1].x, o = d * s[e].cot, n = s[e].tan * d * 8 / 3, r = 0 < o ? (u[0].push(new h(i + o, +d)), c[0].push("L"), p[2].push(1), p[1].push(u[1].length), u[1].push(new h(i + o, -d)), u[1].push(new h(i + o - n, -d)), l(u, s[e], {
                  x: i,
                  y: 0
                }), u[1].push(new h(0 - o + n, -d)), u[1].push(new h(0 - o, -d)), c[1].push("L", "C"), _.push(Math.abs(i + o) - r), +o) : (u[1].push(new h(i - o, -d)), c[1].push("L"), p[2].push(0), p[0].push(u[0].length), u[0].push(new h(i - o, +d)), u[0].push(new h(i - o + n, +d)), l(u, s[e], {
                  x: i,
                  y: 0
                }), u[0].push(new h(0 + o - n, +d)), u[0].push(new h(0 + o, +d)), c[0].push("L", "C"), _.push(Math.abs(i - o) - r), -o);
                o = t.vertices[e + 1].x, n = 4 * d / 3, u[0].push(new h(o, +d)), u[1].push(new h(o, -d)), u[0].push(new h(o - n, +d)), u[1].push(new h(o - n, -d)), c[0].push("L"), c[1].push("L"), _.push(Math.abs(o) - r), u[1].reverse(), c[1].reverse(), a = DG.VertexTransform.getAnglesSum(s.fullAngle, t.getAngle()), l(u, a, u.pop()[0]), o = u[0].length, n = u[1].length, this._arcs = p[2].map(function(t) {
                  return r = p[t].shift(), 0 < t ? new DG.ArcBezier(u[1].slice(n - r - 4, n - r)) : new DG.ArcBezier(u[0].slice(r, r + 4).reverse())
                }).reverse(), this._lengths.push(_.pop()), _.reverse().forEach(function(t, e) {
                  this._lengths.push(this._arcs[e].getLength()).push(t)
                }, this), this[0] = {
                  vertices: [u[0][o - 2], u[0][o - 1], u[1][0], u[1][1]],
                  drawings: ["M", "C"]
                }, this[1] = {
                  vertices: u[0].concat(u[1]),
                  drawings: ["M"].concat(c[0], "C", c[1])
                }
              },
              _setAngleAndDisplacement: function(t, e) {
                this.angle = DG.VertexTransform.getAngle({
                  x: t.x - e.x,
                  y: t.y - e.y
                }, {
                  x: 0,
                  y: 1
                }), this.displ = e.clone()
              },
              subPath: function(t) {
                if (0 === (t = 1 < t ? 1 : t) || 1 === t) return this.vertices = this[t].vertices.map(function(t) {
                  return t.clone()
                }), this.drawings = this[t].drawings, this._setAngleAndDisplacement(this.vertices[0], this.vertices[this.vertices.length - 1]), this;
                for (var e, i, o = DG.VertexTransform.getScaled, n = this._vertices, r = this._drawings, s = this._lengths, a = s.getLength() * t, l = s.getIndex(a), u = s.getSegRatio(a), c = n[0].length - 2, h = 1, d = r[0].length - 1, p = 0, _ = 0, m = 0; m++ < l;) m % 2 == 1 ? (c--, d--, h++, p++) : ("C" === r[0][d] ? (c -= 3, d -= 1) : (h += 3, p += 1), _++);
                return l % 2 == 1 ? (_ = this._arcs[_], "C" === r[0][d] ? (e = (_ = _.getCurveBefore(_.getTbyL(s.getSegLength(a)))).points[3], i = n[1][h], this.vertices = _.points.slice(1).reverse().concat(n[0].slice(c), n[1].slice(0, h + 1)).map(function(t) {
                  return t.clone()
                }), this.drawings = ["M"].concat(r[0].slice(d), "C", r[1].slice(0, p))) : (_ = _.getCurveBefore(_.getTbyL(s.getSegLength(a))), e = n[0][c], i = _.points[3], this.vertices = n[0].slice(c).concat(n[1].slice(0, h + 1), _.points.slice(1)).map(function(t) {
                  return t.clone()
                }), this.drawings = ["M"].concat(r[0].slice(d + 1), "C", r[1].slice(0, p + 1)))) : (e = o(n[0][c], n[0][c - 1], u), i = o(n[1][h], n[1][h + 1], u), this.vertices = [e].concat(n[0].slice(c), n[1].slice(0, h + 1), i).map(function(t) {
                  return t.clone()
                }), this.drawings = ["M"].concat(r[0].slice(d), "C", r[1].slice(0, p + 1))), this._setAngleAndDisplacement(e, i), this
              },
              statics: {
                getAngles: function(t) {
                  for (var e, i, o, n = DG.VertexTransform.getAngle, r = {
                      cos: 1,
                      sin: 0
                    }, s = t.vertices, a = [], l = 1, u = s.length - 1; l < u; l++) e = n(s[l - 1], s[l + 1], s[l]), Math.abs(e.sin) < 1e-6 ? (s.splice(s.length - l - 1, 1), u--, l--) : (e.cot = (1 + e.cos) / e.sin, e.cos = -e.cos, o = ((i = (1 + e.cos) / e.sin) < 0 ? -1 : 1) * Math.sqrt(4 * i * i + 4), e.tan = -.5 * (i + i - o), a.push(e), r = {
                    cos: r.cos * e.cos - r.sin * e.sin,
                    sin: r.sin * e.cos + r.cos * e.sin
                  });
                  return a.fullAngle = {
                    cos: r.cos,
                    sin: -r.sin
                  }, a
                },
                getTranslatedPath: function(t, e) {
                  var i = new DG.VertexTransform([]),
                    o = e.length - 1,
                    n = t.project(e[o]),
                    r = n.x,
                    s = n.y;
                  for (i.vertices.push(new DG.Point(0, 0)); o--;) n = t.project(e[o]), i.vertices.push(new DG.Point(n.x - r, n.y - s));
                  return i.setAngle(DG.VertexTransform.getAngle(-i.vertices[1].x, -i.vertices[1].y)).unRotate()
                },
                transform: function(t, e, i) {
                  for (var o, n, r, s, a = t.length, l = e.cos, u = e.sin, c = i.x, h = i.y; a--;)
                    for (s = (o = t[a]).length; s--;) n = o[s].x - c, r = o[s].y - h, o[s].x = n * l - r * u, o[s].y = n * u + r * l
                }
              }
            }), DG.ArrowTipTransform = DG.VertexTransform.extend({
              initialize: function(t, e) {
                this.drawings = e.drawings, this._vertices = e.vertices, this._setShape(t, e)
              },
              _setShape: function(t, e) {
                var i = e.vertices[0],
                  o = Math.abs(i.y),
                  n = t.vertices[1].x,
                  r = i.x,
                  s = n - r + o + o;
                t.width = o, t.offset = r + (0 < s ? s : 0), t.vertices.length < 3 && -10 < r && (t.offset += 2.5), this._vertices = this.load().unTranslate(i).vertices
              },
              subShape: function(t) {
                return this.load().unRotate(t.angle).translate(t.displ), this
              }
            }), DG.ComplexPath = DG.Path.extend({
              options: {
                fill: !0,
                fillOpacity: 1,
                interactive: !1
              },
              initialize: function(t) {
                DG.setOptions(this, t), this._empty = [], this._pxEmpty = DG.bounds(DG.point(0, 0), DG.point(0, 0)), this._pxBounds = this._pxEmpty, this._vertices = [this._empty], this._drawings = [this._empty]
              },
              getEvents: function() {
                return {}
              },
              _project: function() {
                var t, e, i = this.options;
                this._map && (t = this._map.getZoom(), i.visibility.isShown && i.transform[t] ? (e = 2.2 - .2 * (19 - t), i.weight !== e && this.setStyle({
                  weight: +e.toFixed(2)
                }), this._vertices[0] = i.transform[t].vertices, this._drawings[0] = i.transform[t].drawings, this._pxBounds = i.transform[t]._pxBounds) : (this._vertices[0] = this._empty, this._drawings[0] = this._empty, this._pxBounds = this._pxEmpty))
              },
              _update: function() {
                this._map && this._updatePath()
              },
              _updatePath: function() {
                this._renderer._updateComplexPath(this)
              }
            }), DG.extend(L.Canvas.prototype, {
              _updateComplexPath: function(t, e) {
                var i, o, n, r, s, a, l, u, c, h, d = t._drawings,
                  p = t._vertices,
                  _ = this._ctx;
                for (this._drawnLayers[t._leaflet_id] = t, _.beginPath(), i = 0; i < p.length; i++) {
                  for (h = p[i], r = s = 0, o = n = 0; o < h.length;) switch (d[i][n++]) {
                    case "M":
                      r = h[o].x, s = h[o].y, o += 1, _.moveTo(r, s);
                      break;
                    case "m":
                      r += h[o].x, s += h[o].y, o += 1, _.moveTo(r, s);
                      break;
                    case "L":
                      r = h[o].x, s = h[o].y, o += 1, _.lineTo(r, s);
                      break;
                    case "l":
                      r += h[o].x, s += h[o].y, o += 1, _.lineTo(r, s);
                      break;
                    case "C":
                      a = h[o].x, l = h[o].y, u = h[o += 1].x, c = h[o].y, r = h[o += 1].x, s = h[o].y, o += 1, _.bezierCurveTo(a, l, u, c, r, s);
                      break;
                    case "c":
                      a = r + h[o].x, l = s + h[o].y, u = r + h[o += 1].x, c = s + h[o].y, r += h[o += 1].x, s += h[o].y, o += 1, _.bezierCurveTo(a, l, u, c, r, s);
                      break;
                    case "Q":
                      a = h[o].x, l = h[o].y, r = h[o += 1].x, s = h[o].y, o += 1, _.quadraticCurveTo(a, l, r, s);
                      break;
                    case "q":
                      a = r + h[o].x, l = s + h[o].y, r += h[o += 1].x, s += h[o].y, o += 1, _.quadraticCurveTo(a, l, r, s)
                  }
                  e && _.closePath()
                }
                this._fillStroke(_, t)
              }
            }), DG.extend(L.SVG.prototype, {
              _updateComplexPath: function(t, e) {
                this._setPath(t, L.SVG.complexPointsToPath(t._vertices, t._drawings, e))
              }
            }), DG.extend(L.SVG, {
              complexPointsToPath: function(t, e, i) {
                var o, n, r, s, a, l, u = "",
                  c = DG.Browser.svg;
                for (o = 0; o < t.length; o++) {
                  if (l = t[o], c)
                    for (n = r = 0; n < l.length;) {
                      switch (a = e[o][r++]) {
                        case "C":
                        case "c":
                          s = 3;
                          break;
                        case "Q":
                        case "q":
                          s = 2;
                          break;
                        default:
                          s = 1
                      }
                      for (u += a; s--;) u += l[n].x.toFixed(4) + "," + l[n].y.toFixed(4) + " ", n += 1
                    } else
                      for (n = r = 0; n < l.length;) {
                        switch (a = e[o][r++]) {
                          case "M":
                            a = "m", s = 1;
                            break;
                          case "m":
                            a = "t", s = 1;
                            break;
                          case "L":
                            a = "l", s = 1;
                            break;
                          case "l":
                            a = "r", s = 1;
                            break;
                          case "C":
                            a = "c", s = 3;
                            break;
                          case "c":
                            a = "v", s = 3;
                            break;
                          case "Q":
                            u += "C" + l[n].x.toFixed(0) + "," + l[n].y.toFixed(0) + " " + l[n].x.toFixed(0) + "," + l[n].y.toFixed(0) + " " + l[n + 1].x.toFixed(0) + "," + l[n + 1].y.toFixed(0) + " ", n += 2, a = "", s = 0;
                            break;
                          case "q":
                            u += "c" + l[n].x.toFixed(0) + "," + l[n].y.toFixed(0) + " " + l[n].x.toFixed(0) + "," + l[n].y.toFixed(0) + " " + l[n + 1].x.toFixed(0) + "," + l[n + 1].y.toFixed(0) + " ", n += 2, a = "", s = 0;
                            break;
                          default:
                            s = 1
                        }
                        for (u += a; s--;) u += l[n].x.toFixed(0) + "," + l[n].y.toFixed(0) + " ", n += 1
                      }
                  u += i ? c ? "z" : "x" : ""
                }
                return u || "m0,0"
              }
            }), DG.Bezier = DG.Class.extend({
              initialize: function(t, e) {
                this.points = e ? t.map(function(t) {
                  return t.clone()
                }) : t, this.dpoints = this._getDerivatives(), this.order = this.points.length - 1, this._lut = []
              },
              getPoint: function(t) {
                var e, i, o, n, r, s, a, l = this.points;
                return 0 === t ? l[0] : 1 === t ? l[this.order] : (i = (e = 1 - t) * e, o = t * t, a = 2 < this.order ? (n = i * e, r = i * t * 3, s = e * o * 3, t * o) : (l = [l[0], l[1], l[2], {
                  x: 0,
                  y: 0
                }], n = i, r = e * t * 2, s = o, 0), new DG.Point(n * l[0].x + r * l[1].x + s * l[2].x + a * l[3].x, n * l[0].y + r * l[1].y + s * l[2].y + a * l[3].y))
              },
              derivative: function(t) {
                var e, i, o, n = this.dpoints[0],
                  r = 1 - t;
                return o = 2 < this.order ? (e = r * r, i = r * t * 2, t * t) : (n = [n[0], n[1], {
                  x: 0,
                  y: 0
                }], e = r, i = t, 0), new DG.Point(e * n[0].x + i * n[1].x + o * n[2].x, e * n[0].y + i * n[1].y + o * n[2].y)
              },
              getLength: function() {
                for (var t, e, i, o = DG.Bezier.WEIGHT, n = DG.Bezier.ABSCISSA, r = 0, s = 0; s < n.length; s++) i = .5 * n[s] + .5, e = (t = this.derivative(i)).x * t.x + t.y * t.y, r += o[s] * Math.sqrt(e);
                return .5 * r
              },
              getCurveBefore: function(t) {
                var e, i, o, n, r, s, a, l, u, c = this.points;
                return 1 === t ? this.clone() : (e = t * t, n = (o = t - 1) * o, (u = [])[0] = new DG.Point(c[0].x, c[0].y), u[1] = new DG.Point(t * c[1].x - o * c[0].x, t * c[1].y - o * c[0].y), s = t * o * 2, u[2] = new DG.Point(e * c[2].x - s * c[1].x + n * c[0].x, e * c[2].y - s * c[1].y + n * c[0].y), 2 < this.order && (i = e * t, r = n * o, a = e * o * 3, l = t * n * 3, u[3] = new DG.Point(i * c[3].x - a * c[2].x + l * c[1].x - r * c[0].x, i * c[3].y - a * c[2].y + l * c[1].y - r * c[0].y)), new DG.Bezier(u))
              },
              getCurveAfter: function(t) {
                var e, i, o, n, r, s, a, l, u, c = this.points,
                  h = this.order;
                return 1 === t ? this.clone() : (e = t * t, n = (o = t - 1) * o, (u = [])[h] = new DG.Point(c[h].x, c[h].y), u[--h] = new DG.Point(t * c[h + 1].x - o * c[h].x, t * c[h + 1].y - o * c[h].y), s = t * o * 2, u[--h] = new DG.Point(e * c[h + 2].x - s * c[h + 1].x + n * c[h].x, e * c[h + 2].y - s * c[h + 1].y + n * c[h].y), 2 < this.order && (i = e * t, r = n * o, a = e * o * 3, l = t * n * 3, u[--h] = new DG.Point(i * c[h + 3].x - a * c[h + 2].x + l * c[h + 1].x - r * c[h].x, i * c[h + 3].y - a * c[h + 2].y + l * c[h + 1].y - r * c[h].y)), new DG.Bezier(u))
              },
              _getDerivatives: function() {
                var t, e, i, o, n = this.points,
                  r = [];
                for (e = (t = n.length) - 1; 1 < t; t--, e--) {
                  for (o = [], i = 0; i < e; i++) o.push(new DG.Point(e * (n[i + 1].x - n[i].x), e * (n[i + 1].y - n[i].y)));
                  r.push(o), n = o
                }
                return r
              },
              getLUT: function(t) {
                return t = t || 125, this._lut.length !== t + 1 && (2 < this.order ? this._setLUT3(t) : this._setLUT2(t)), this._lut
              },
              _setLUT2: function(t) {
                var e, i, o, n, r, s = this._lut = [],
                  a = this.points;
                s.push({
                  x: a[0].x,
                  y: a[0].y,
                  l: 0
                });
                for (var l = 1; l < t; l++) o = (i = 1 - (e = l / t)) * i, n = i * e * 2, r = e * e, s.push({
                  x: o * a[0].x + n * a[1].x + r * a[2].x,
                  y: o * a[0].y + n * a[1].y + r * a[2].y
                });
                s.push({
                  x: a[2].x,
                  y: a[2].y,
                  l: 0
                })
              },
              _setLUT3: function(t) {
                var e, i, o, n, r, s, a, l, u = this._lut = [],
                  c = this.points;
                u.push({
                  x: c[0].x,
                  y: c[0].y,
                  l: 0
                });
                for (var h = 1; h < t; h++) r = (n = (o = 1 - (e = h / t)) * o) * o, s = n * e * 3, a = o * (i = e * e) * 3, l = e * i, u.push({
                  x: r * c[0].x + s * c[1].x + a * c[2].x + l * c[3].x,
                  y: r * c[0].y + s * c[1].y + a * c[2].y + l * c[3].y
                });
                u.push({
                  x: c[3].x,
                  y: c[3].y,
                  l: 0
                })
              },
              clone: function() {
                return new DG.Bezier(this.points, !0)
              }
            }), DG.bezier = function(t) {
              return ("number" == typeof t || t instanceof DG.Point) && (t = Array.prototype.slice.call(arguments)), "number" == typeof t[0] ? (t = t.length < 7 ? [new DG.Point(t[0], t[1]), new DG.Point(t[2], t[3]), new DG.Point(t[4], t[5])] : [new DG.Point(t[0], t[1]), new DG.Point(t[2], t[3]), new DG.Point(t[4], t[5]), new DG.Point(t[6], t[7])], new DG.Bezier(t)) : new DG.Bezier(t, !0)
            }, DG.Bezier.WEIGHT = [.362683783378362, .362683783378362, .3137066458778873, .3137066458778873, .2223810344533745, .2223810344533745, .1012285362903763, .1012285362903763], DG.Bezier.ABSCISSA = [-.1834346424956498, .1834346424956498, -.525532409916329, .525532409916329, -.7966664774136267, .7966664774136267, -.9602898564975363, .9602898564975363], DG.TimeBezier = DG.Bezier.extend({
              initialize: function(t, e, i) {
                DG.Bezier.prototype.initialize.call(this, [DG.TimeBezier.START, t, e, DG.TimeBezier.END], i)
              },
              getYbyX: function(t) {
                var e, i = this.getLUT(),
                  o = i.length - 1,
                  n = 0;
                if (t <= 0) return 0;
                if (1 <= t) return 1;
                for (; t < i[e = n + (o - n >> 1)].x ? o = e : n = e, !(o - n < 2););
                return t = (t - i[n].x) / (i[o].x - i[n].x), i[n].y + (i[o].y - i[n].y) * t
              },
              getLUT: function(t) {
                var e, i, o, n, r, s, a, l = this.points;
                if (t = t || 240, this._lut.length === t + 1) return this._lut;
                this._lut = a = [], a.push({
                  x: 0,
                  y: 0
                });
                for (var u = 1; u < t; u++) n = (o = 1 - (e = u / t)) * o * e * 3, r = o * (i = e * e) * 3, s = e * i, a.push({
                  x: n * l[1].x + r * l[2].x + s,
                  y: n * l[1].y + r * l[2].y + s
                });
                return a.push({
                  x: 1,
                  y: 1
                }), a
              },
              clone: function() {
                return new DG.TimeBezier(this.points, !0)
              }
            }), DG.TimeBezier.START = DG.point(0, 0), DG.TimeBezier.END = DG.point(1, 1), DG.ArcBezier = DG.Bezier.extend({
              initialize: function(t, e) {
                DG.Bezier.prototype.initialize.call(this, t, e), this.getLUT(), this._setLutLengths()
              },
              getTbyL: function(t) {
                var e, i, o, n = this.getLUT(),
                  r = n.length - 1,
                  s = 0;
                if (t <= 0) return 0;
                if (t >= n[r].l) return 1;
                for (; t < n[e = s + (r - s >> 1)].l ? r = e : s = e, !(r - s < 2););
                t = (t - n[s].l) / (n[r].l - n[s].l), i = n[s].x + (n[r].x - n[s].x) * t, o = n[s].y + (n[r].y - n[s].y) * t;
                var a, l, u, c, h = r / n.length,
                  d = s / n.length,
                  p = 1 / n.length / 10,
                  _ = Math.pow(2, 53) - 1;
                for (c = d; d < h; d += p) l = (a = this.getPoint(d)).x - i, u = a.y - o, (t = Math.sqrt(l * l + u * u)) < _ && (_ = t, c = d);
                return c
              },
              _setLutLengths: function() {
                var t, e, i = this._lut;
                i[0].l = 0;
                for (var o = 1; o < i.length; o++) t = i[o].x - i[o - 1].x, e = i[o].y - i[o - 1].y, i[o].l = i[o - 1].l + Math.sqrt(t * t + e * e)
              },
              getLength: function() {
                return this._lut[this._lut.length - 1].l
              },
              clone: function() {
                return new DG.ArcBezier(this.points, !0)
              }
            }), DG.Animation = DG.Evented.extend({
              options: {},
              initialize: function(t) {
                DG.setOptions(this, t), this._animID = -1, this._startTime = 0, this._running = !1, this._animation = null, this._durations = null
              },
              start: function() {
                this.stop(), this._prepare(), this._running = !0, this.fire("start"), this._startTime = (new Date).getTime(), this._animate()
              },
              stop: function() {
                this._running && this._run(this._durations.getLength())
              },
              _prepare: function() {
                this._animation = DG.Util.isArray(this.options.animation) ? this.options.animation : [this.options.animation], this._durations = new DG.Metric.Segments, this._animation.forEach(function(t) {
                  this.push(t.duration)
                }, this._durations)
              },
              _animate: function() {
                this._animID = DG.Util.requestAnimFrame(this._animate, this), this._run()
              },
              _run: function(t) {
                var e, i, o;
                (t = t || (new Date).getTime() - this._startTime) < this._durations.getLength() ? (i = this._durations.getIndex(t), e = this._durations.getSegRatio(t), o = this._animation[i].function.getYbyX(e), this._step(this._getFrameValues(i, o))) : (i = this._durations.length - 1, this._step(this._getFrameValues(i, 1)), this._complete())
              },
              _step: function(t) {
                this.fire("step", t)
              },
              _complete: function() {
                DG.Util.cancelAnimFrame(this._animID), this._durations = null, this._animation = null, this._running = !1, this.fire("end")
              },
              _getFrameValues: function(t, e) {
                var i, o, n = this._animation[t].frames,
                  r = {
                    progress: e
                  };
                if (n)
                  for (var s in n) n[s].progress ? r[s] = n[s].progress(e) : (i = n[s].from, o = n[s].to, r[s] = i + (o - i) * e);
                return r
              }
            }), DG.animation = function(t) {
              return new DG.Animation(t)
            }, DG.Animation.LINEAR = new DG.TimeBezier(DG.point(0, 0), DG.point(1, 1)), DG.Animation.EASE = new DG.TimeBezier(DG.point(.25, .1), DG.point(.25, 1)), DG.Animation.EASE_IN = new DG.TimeBezier(DG.point(.42, 0), DG.point(1, 1)), DG.Animation.EASE_IN_OUT = new DG.TimeBezier(DG.point(.42, 0), DG.point(.58, 1)), DG.Animation.EASE_OUT = new DG.TimeBezier(DG.point(0, 0), DG.point(.58, 1)), DG.Entrance = DG.FeatureGroup.extend({
              options: {
                vectors: [],
                fillColor: "#0085a0",
                strokeColor: "#fff",
                enableAnimation: !0,
                interactive: !1,
                autoClose: !0
              },
              initialize: function(t) {
                DG.LayerGroup.prototype.initialize.call(this), DG.setOptions(this, t), this._bounds = new DG.LatLngBounds, this._animations = {
                  bounce: DG.animation(DG.Entrance.BOUNCE_ANIMATION),
                  path: DG.animation(DG.Entrance.PATH_ANIMATION)
                }, this._initArrows(), this._isShown = !1
              },
              onAdd: function(t) {
                DG.LayerGroup.prototype.onAdd.call(this, t), this.show()
              },
              onRemove: function(t) {
                this.hide(), DG.LayerGroup.prototype.onRemove.call(this, t)
              },
              getEvents: function() {
                var t = {};
                return this.options.autoClose && (t.layeradd = this._removeEntrance), this.options.enableAnimation && (t.zoomend = this._animate), t
              },
              show: function(t) {
                return this._layers && (t && this.fitBounds(), this._isShown || (this._isShown = !0, this.eachLayer(function(t) {
                  t.setVisibility(!0)
                }), this.options.enableAnimation && this._animate(), this._map.fire("entranceshow"))), this
              },
              hide: function() {
                return this._layers && this._isShown && (this._isShown = !1, this.eachLayer(function(t) {
                  t.setVisibility(!1)
                }), this._map.fire("entrancehide")), this
              },
              isShown: function() {
                return this._isShown
              },
              getBounds: function() {
                return this._bounds
              },
              setFillColor: function(e) {
                this.eachLayer(function(t) {
                  t.setStyle({
                    fillColor: e
                  })
                })
              },
              setStrokeColor: function(e) {
                this.eachLayer(function(t) {
                  t.setStyle({
                    color: e
                  })
                })
              },
              _initArrows: function() {
                var o = {
                  color: this.options.strokeColor,
                  fillColor: this.options.fillColor,
                  interactive: this.options.interactive
                };
                this.options.vectors.map(function(t) {
                  return DG.Wkt.toLatLngs(t)
                }).forEach(function(t) {
                  var e = DG.Util.create(o),
                    i = DG.latLngBounds(t);
                  this._bounds.extend(i), e.latlngs = t, e.bounds = i, this.options.enableAnimation && (2 < t.length ? e.animation = this._animations.path : (e.animation = this._animations.bounce, e.distance = !0)), this.addLayer(DG.entrance.arrow(e))
                }, this)
              },
              _animate: function() {
                this._isShown && (this._animations.bounce.start(), this._animations.path.start())
              },
              fitBounds: function() {
                var t, e = this._map,
                  i = this.getBounds();
                return e.getBounds().contains(i) && this._isAllowedZoom() || (t = this._getFitZoom(), e.projectDetector.getProject() || e.once("moveend", function() {
                  e.setZoom(this._getFitZoom())
                }, this), e.setView(i.getCenter(), t, {
                  animate: !0
                })), this
              },
              _getFitZoom: function() {
                return this._map.projectDetector.getProject().maxZoom || DG.Entrance.SHOW_FROM_ZOOM
              },
              _isAllowedZoom: function() {
                return this._map.getZoom() >= DG.Entrance.SHOW_FROM_ZOOM
              },
              _removeEntrance: function(t) {
                (t.layer instanceof DG.Popup || t.layer instanceof DG.Entrance && t.layer !== this) && this.remove()
              }
            }), DG.entrance = function(t) {
              return new DG.Entrance(t)
            }, DG.Entrance.SHOW_FROM_ZOOM = 16, DG.Entrance.PATH_ANIMATION = {
              animation: {
                function: DG.Animation.EASE_IN_OUT,
                duration: 750
              }
            }, DG.Entrance.BOUNCE_ANIMATION = {
              animation: [{
                function: DG.Animation.EASE_IN_OUT,
                duration: 250,
                frames: {
                  distance: {
                    from: 0,
                    to: .6
                  }
                }
              }, {
                function: DG.Animation.EASE_IN,
                duration: 135,
                frames: {
                  distance: {
                    from: .6,
                    to: 0
                  }
                }
              }, {
                function: DG.Animation.EASE_OUT,
                duration: 135,
                frames: {
                  distance: {
                    from: 0,
                    to: .16
                  }
                }
              }, {
                function: DG.Animation.EASE_IN,
                duration: 90,
                frames: {
                  distance: {
                    from: .16,
                    to: 0
                  }
                }
              }, {
                function: DG.Animation.EASE_OUT,
                duration: 90,
                frames: {
                  distance: {
                    from: 0,
                    to: .06
                  }
                }
              }, {
                function: DG.Animation.EASE_IN,
                duration: 50,
                frames: {
                  distance: {
                    from: .06,
                    to: 0
                  }
                }
              }]
            }, DG.Entrance.Arrow = DG.FeatureGroup.extend({
              initialize: function(t) {
                DG.LayerGroup.prototype.initialize.call(this), DG.setOptions(this, t), this._progress = 1, this._distance = 0, this._visibility = {
                  isShown: !1
                }, this._position = t.latlngs[t.latlngs.length - 1], this._shape = this.options.shape || DG.Entrance.Arrow.SHAPE, this._apt = {}, this._att = {}
              },
              beforeAdd: function(t) {
                var e = this.options;
                !e.animation || t.options.preferCanvas || DG.Browser.ielt9 ? e.animation = null : e.animation.on("step", this._animation, this), this.projection(), this.addLayer(new DG.ComplexPath({
                  lineCap: "butt",
                  color: e.color,
                  fillColor: e.fillColor,
                  interactive: e.interactive,
                  visibility: this._visibility,
                  transform: this._apt
                })), this.addLayer(new DG.ComplexPath({
                  lineJoin: "miter",
                  color: e.color,
                  fillColor: e.fillColor,
                  interactive: e.interactive,
                  visibility: this._visibility,
                  transform: this._att
                }))
              },
              getEvents: function() {
                return {
                  zoomend: this._project,
                  moveend: this._update,
                  viewreset: this._reset
                }
              },
              setVisibility: function(t) {
                this._visibility.isShown !== t && ((this._visibility.isShown = t) && this.options.animation || this._reset())
              },
              getBounds: function() {
                return this.options.bounds
              },
              projection: function() {
                var t, e, i, o, n = this._map || this._mapToAdd,
                  r = n ? n.getZoom() : 0,
                  s = this._shape.vertices[r],
                  a = this._shape.drawings[r],
                  l = this.options.latlngs;
                return r && s && a && (this._att[r] || (e = DG.ArrowPathTransform.getTranslatedPath(n, l), t = {
                  vertices: s,
                  drawings: a
                }, this._att[r] = new DG.ArrowTipTransform(e, t), this._apt[r] = new DG.ArrowPathTransform(e)), i = n.latLngToLayerPoint(this._position), o = n.latLngToLayerPoint(l[l.length - 2]), this._apt[r]._pxBounds || this._setBounds(i, o, this._apt[r], this._att[r]), this.options.distance && (i = DG.VertexTransform.getScaled(i, o, this._distance)), this._apt[r].subPath(this._progress).translate(i), this._att[r].subShape(this._apt[r]).translate(i)), this
              },
              _animation: function(t) {
                null != t.distance ? this._distance = t.distance : this._progress = t.progress, this._visibility.isShown && (this._project(), this._update())
              },
              _project: function() {
                this.projection().invoke("_project")
              },
              _update: function() {
                this.invoke("_update")
              },
              _reset: function() {
                this._resetBounds(), this._project(), this._update()
              },
              _resetBounds: function() {
                var t;
                for (t in this._apt) this._apt[t]._pxBounds = null;
                for (t in this._att) this._att[t]._pxBounds = null
              },
              _setBounds: function(t, e, i, o) {
                var n = i.subPath(1).translate(t).vertices,
                  r = o.subShape(i).translate(t).vertices;
                i._pxBounds = new DG.Bounds(n), o._pxBounds = new DG.Bounds(r)
              }
            }), DG.entrance.arrow = function(t) {
              return new DG.Entrance.Arrow(t)
            }, DG.Entrance.Arrow.SHAPE = {
              vertices: {
                16: [
                  [-6.5, -1.8],
                  [-6.0522, -1.8],
                  [-7.0975, -5.2537],
                  [-6.6619, -6.2565],
                  [-6.598, -6.355],
                  [-6.1757, -6.147],
                  [.8371, -.3552],
                  [.9275, -.1764],
                  [.9275, .1764],
                  [.8371, .3552],
                  [-6.1757, 6.147],
                  [-6.598, 6.355],
                  [-6.6619, 6.2565],
                  [-7.0975, 5.2537],
                  [-6.0522, 1.8],
                  [-6.5, 1.8]
                ],
                17: [
                  [-9, -2.4],
                  [-7.889, -2.4],
                  [-9.9245, -7.2548],
                  [-9.3363, -8.6404],
                  [-9.3448, -8.6448],
                  [-8.8717, -8.3508],
                  [1.0285, -.3552],
                  [1.119, -.1764],
                  [1.119, .1764],
                  [1.0285, .3552],
                  [-8.8717, 8.3508],
                  [-9.3448, 8.6448],
                  [-9.3363, 8.6404],
                  [-9.9245, 7.2548],
                  [-7.889, 2.4],
                  [-9, 2.4]
                ],
                18: [
                  [-11.5, -3],
                  [-10.0795, -3],
                  [-12.4909, -9.3173],
                  [-11.8402, -10.7654],
                  [-11.5986, -10.7073],
                  [-10.938, -10.2258],
                  [1.1497, -.3552],
                  [1.2402, -.1764],
                  [1.2402, .1764],
                  [1.1497, .3552],
                  [-10.938, 10.2258],
                  [-11.5986, 10.7073],
                  [-11.8402, 10.7654],
                  [-12.4909, 9.3173],
                  [-10.0795, 3],
                  [-11.5, 3]
                ],
                19: [
                  [-13, -3.6],
                  [-11.66, -3.6],
                  [-14.1696, -10.8351],
                  [-13.5189, -12.2832],
                  [-13.2773, -12.2251],
                  [-12.6167, -11.7436],
                  [1.3061, -.3552],
                  [1.3966, -.1764],
                  [1.3966, .1764],
                  [1.3061, .3552],
                  [-12.6167, 11.7436],
                  [-13.2773, 12.2251],
                  [-13.5189, 12.2832],
                  [-14.1696, 10.8351],
                  [-11.66, 3.6],
                  [-13, 3.6]
                ]
              },
              drawings: {
                16: ["M", "L", "L", "C", "L", "C", "L", "C", "L", "L"],
                17: ["M", "L", "L", "C", "L", "C", "L", "C", "L", "L"],
                18: ["M", "L", "L", "C", "L", "C", "L", "C", "L", "L"],
                19: ["M", "L", "L", "C", "L", "C", "L", "C", "L", "L"]
              }
            },
            function(t) {
              for (var e in t) t[e] = t[e].map(function(t) {
                return DG.point(t)
              })
            }(DG.Entrance.Arrow.SHAPE.vertices), DG.Label = DG.Layer.extend({
              options: {
                offset: new DG.Point(12, 15),
                className: "dg-label",
                zIndexOffset: 0,
                textDirection: "auto"
              },
              _typeOfString: Object.prototype.toString.call("s"),
              _defaultZIndex: 100,
              initialize: function(t, e) {
                DG.Util.setOptions(this, e), this._animated = DG.Browser.any3d, this._content = t
              },
              onAdd: function(t) {
                this._map = t, this._el || this._initDOM(), this._visible = !0, this.setContent(this._content)._onViewReset(), t.on("viewreset", this._onViewReset, this).on("zoomanim", this._onZoomAnimation, this)
              },
              onRemove: function(t) {
                t.off("viewreset", this._onViewReset, this).off("zoomanim", this._onZoomAnimation, this), this._visible = !1, this._el.removeChild(this._container), DG.Util.falseFn(this._container.offsetWidth), this._container = null, t.getPanes().tooltipPane.removeChild(this._el), this._el = null
              },
              _initDOM: function() {
                this._el = DG.DomUtil.create("div", this.options.className + " leaflet-zoom-" + (this._animated ? "animated" : "hide"), this._map.getPanes().tooltipPane), this._el.style.zIndex = this._defaultZIndex + this.options.zIndexOffset, this._container = DG.DomUtil.create("div", this.options.className + "__content", this._el), this._container.setAttribute("dir", this.options.textDirection), DG.DomEvent.disableClickPropagation(this._el).on(this._container, "mousewheel", DG.DomEvent.stopPropagation).on(this._container, "contextmenu", DG.DomEvent.stopPropagation)
              },
              _onViewReset: function() {
                this._visible && this._latlng && DG.DomUtil.setPosition(this._el, this._map.latLngToLayerPoint(this._latlng).add(this.options.offset), DG.Browser.ie)
              },
              _onZoomAnimation: function(t) {
                this._latlng && DG.DomUtil.setPosition(this._el, this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).add(this.options.offset))
              },
              setOffset: function(t) {
                return t instanceof DG.Point && (this.options.offset = t, this._onViewReset()), this
              },
              setZIndexOffset: function(t) {
                return isNaN(+t) || (this.options.zIndexOffset = +t, this._visible && (this._el.style.zIndex = this._defaultZIndex + this.options.zIndexOffset)), this
              },
              setContent: function(t) {
                return Object.prototype.toString.call(t) !== this._typeOfString || (this._content = t, this._visible && (this._container.innerHTML = t)), this
              },
              setPosition: function(t) {
                return t instanceof DG.LatLng && (this._latlng = t, this._onViewReset()), this
              }
            }), DG.label = function(t, e) {
              return new DG.Label(t, e)
            }, DG.Marker.include({
              bindLabel: function(t, e) {
                return this._label ? (this._label.setContent(t), e && (this.options.offset !== e.offset && this._label.setOffset(this.options.offset = e.offset), this.options.static !== e.static && this.unbindLabel().bindLabel(t, e))) : (e = DG.extend({
                  offset: new DG.Point(5, 5)
                }, e), this._label = DG.label(t, e), this.once("remove", this._onMarkerRemove), e.static ? this.showLabel() : this.on("mouseover", this._mouseOverLabel).on("mouseout", this._mouseOutLabel).on("dragstart", this._dragStartLabel).on("dragend", this._dragEndLabel), void 0 !== this._map ? this._updateLabelZIndex() : this.once("add", this._updateLabelZIndex)), this
              },
              unbindLabel: function() {
                return this._label && (this.hideLabel().off("remove", this.unbindLabel).off("mouseover", this._mouseOverLabel).off("mouseout", this._mouseOutLabel).off("dragstart", this._dragStartLabel).off("dragend", this._dragEndLabel).off("move", this._updatePosition).off("add", this._updateLabelZIndex), this._label = null), this
              },
              _onMarkerRemove: function() {
                if (this._label) {
                  var t = this._label._content;
                  this.once("add", function() {
                    this._label || this.bindLabel(t)
                  }), this.unbindLabel()
                }
              },
              getLabel: function() {
                return this._label ? this._label : null
              },
              _originalUpdateZIndex: DG.Marker.prototype._updateZIndex,
              _updateZIndex: function(t) {
                return this._zIndex || (this._zIndex = 0), this._originalUpdateZIndex(t), this._updateLabelZIndex(), this
              },
              _updateLabelZIndex: function() {
                return this._label && this._icon && this._label.setZIndexOffset(this._icon.style.zIndex), this
              },
              showLabel: function() {
                return this._label && this.on("move", this._updatePosition)._map.addLayer(this._label.setPosition(this.getLatLng())), this
              },
              hideLabel: function() {
                return this._label && this.off("move", this._updatePosition)._map.removeLayer(this._label), this
              },
              _updatePosition: function() {
                this._label.setPosition(this.getLatLng())
              },
              _dragStartLabel: function() {
                this._label.isMarkerDragging = !0, this.hideLabel()
              },
              _dragEndLabel: function() {
                this._label.isMarkerDragging = !1, this._label.isMouseOverMarker && this.showLabel()
              },
              _mouseOverLabel: function() {
                this._label.isMouseOverMarker = !0, this._label.isMarkerDragging || this.showLabel()
              },
              _mouseOutLabel: function() {
                this._label.isMouseOverMarker = !1, this.hideLabel()
              }
            }), DG.Marker.addInitHook(function() {
              void 0 !== this.options.label && this.bindLabel(this.options.label)
            }), DG.Path.include({
              bindLabel: function(t, e) {
                return this._label ? (this._label.setContent(t), this._label.options.offset !== e.offset && this._label.setOffset(e.offset)) : (this._label = DG.label(t, e), this.on(this._labelEvents, this)), this
              },
              unbindLabel: function() {
                return this._label && (this.off(this._labelEvents, this), this._map.removeLayer(this._label), this._label = null), this
              },
              getLabel: function() {
                return this._label ? this._label : null
              },
              _labelEvents: {
                mouseover: function(t) {
                  this._map.addLayer(this._label.setPosition(t.latlng)), DG.DomEvent.stop(t)
                },
                mousemove: function(t) {
                  this._label.setPosition(t.latlng), DG.DomEvent.stop(t)
                },
                mouseout: function(t) {
                  this._map.removeLayer(this._label), DG.DomEvent.stop(t)
                },
                remove: function() {
                  this._map.removeLayer(this._label)
                }
              }
            }), DG.Path.addInitHook(function() {
              void 0 !== this.options.label && this.bindLabel(this.options.label)
            }), DG.Entrance.include({
              bindLabel: function(t, e) {
                return this._label ? (this._label.setContent(t), this._label.options.offset !== e.offset && this._label.setOffset(e.offset)) : (this._label = DG.label(t, e), this.on(this._labelEvents, this)), this
              },
              unbindLabel: function() {
                return this._label && (this.off(this._labelEvents, this), this._map.removeLayer(this._label), this._label = null), this
              },
              getLabel: function() {
                return this._label ? this._label : null
              },
              _labelEvents: {
                mouseover: function(t) {
                  this._map.addLayer(this._label.setPosition(t.latlng)), DG.DomEvent.stop(t)
                },
                mousemove: function(t) {
                  this._label.setPosition(t.latlng), DG.DomEvent.stop(t)
                },
                mouseout: function() {
                  this._label.remove()
                },
                remove: function() {
                  this._label.remove()
                }
              }
            }), DG.Entrance.addInitHook(function() {
              void 0 !== this.options.label && this.bindLabel(this.options.label)
            }), DG.configTheme = DG.configTheme || {}, DG.configTheme.balloonOptions = {
              offset: {
                x: 1,
                y: -43
              }
            }, _dereq_("../../../vendors/baron"), MC = DG.configTheme.balloonOptions.offset.x, NC = DG.configTheme.balloonOptions.offset.y, OC = DG.Popup.prototype.initialize, PC = DG.Popup.prototype._initLayout, QC = DG.Popup.prototype.onAdd, RC = baron.noConflict(), SC.prototype = {
              setAttribute: function(t, e) {
                return this[0].setAttribute(t, e), this
              },
              getAttribute: function(t) {
                return this[0].getAttribute(t)
              },
              removeAttribute: function(t) {
                return this[0].removeAttribute(t), this
              },
              css: function(t, e) {
                return e ? (this[0].style[t] = e, this) : DG.DomUtil.getStyle(this[0], t)
              }
            }, DG.Popup.prototype.options.offset = DG.point(MC, NC), DG.Popup.mergeOptions({
              border: 16,
              mapControlsWidth: 60,
              textDirection: "auto"
            }), DG.Popup.include({
              _headerContent: null,
              _footerContent: null,
              _scroller: null,
              _scrollerBar: null,
              _barWrapper: null,
              _baron: null,
              _isBaronExist: !1,
              _popupShowClass: "leaflet-popup_show_true",
              _popupHideClass: "leaflet-popup_show_false",
              _popupTipClass: "leaflet-popup-tip-container",
              _tipSVGPath: "M0 0c12.643 0 28 7.115 28 44h2c0-36.885 15.358-44 28-44h-58z",
              _isAutoPanPaddingUserDefined: !1,
              initialize: function(t, e) {
                this._popupStructure = {}, this._isAutoPanPaddingUserDefined = t && t.hasOwnProperty("autoPanPadding"), OC.call(this, t, e)
              },
              onAdd: function(t) {
                t.on({
                  entranceshow: this._closePopup,
                  resize: this.resize
                }, this), QC.call(this, t), this._animateOpening()
              },
              onRemove: function(t) {
                this._animateClosing(), t.off({
                  entranceshow: this._closePopup,
                  resize: this.resize
                }, this), DG.DomUtil.TRANSITION ? this._removeTimeout = setTimeout(L.bind(L.DomUtil.remove, L.DomUtil, this._container), 200) : L.DomUtil.remove(this._container), t.fire("popupclose", {
                  popup: this
                }), this._source && this._source.fire("popupclose", {
                  popup: this
                }, !0)
              },
              setContent: function(e) {
                return this._isNode(e) || "object" != typeof e ? this._bodyContent = e : Object.keys(e).forEach(function(t) {
                  this["_" + t + "Content"] = e[t]
                }, this), this.update(), this
              },
              setHeaderContent: function(t) {
                return this._headerContent = t, this.update(), this
              },
              setFooterContent: function(t) {
                return this._footerContent = t, this.update(), this
              },
              getContent: function() {
                return this._bodyContent
              },
              getHeaderContent: function() {
                return this._headerContent
              },
              getFooterContent: function() {
                return this._footerContent
              },
              clear: function() {
                return Object.keys(this._popupStructure).forEach(this._clearElement, this), this._isBaronExist = !1, this
              },
              clearHeader: function() {
                return this._clearElement("header")
              },
              clearFooter: function() {
                return this._clearElement("footer")
              },
              findElement: function(t) {
                return this._contentNode.querySelector(t)
              },
              _animateOpening: function() {
                DG.DomUtil.addClass(this._innerContainer, this._popupShowClass), DG.DomUtil.removeClass(this._innerContainer, this._popupHideClass)
              },
              _animateClosing: function() {
                DG.DomUtil.addClass(this._innerContainer, this._popupHideClass), DG.DomUtil.removeClass(this._innerContainer, this._popupShowClass)
              },
              _closePopup: function() {
                this._map.closePopup(this)
              },
              _isNode: function(t) {
                return !!t.nodeName
              },
              _onCloseButtonClick: function(t) {
                this._map && this._map.closePopup(this), L.DomEvent.stop(t)
              },
              _close: function() {
                this._map && (DG.Browser.mobile && this._map.geoclicker && (this.options.closeOnClick || this._map.options.closePopupOnClick) && (this._map.geoclicker.popupWasOpen = !0), this._map.closePopup(this))
              },
              _initLayout: function() {
                PC.call(this), DG.DomEvent.on(this._contentNode, "wheel", function(t) {
                  var e;
                  if (t.composedPath) e = t.composedPath();
                  else {
                    var i = t.target;
                    for (e = []; i.parentNode;) e.push(i), i = i.parentNode
                  } - 1 !== e.indexOf(this._scroller) && -1 === e.indexOf(this._barWrapper) || t.preventDefault()
                }, this), this._innerContainer = DG.DomUtil.create("div", "leaflet-popup-inner " + this._popupHideClass, this._container), DG.DomEvent.disableClickPropagation(this._innerContainer), this.options.closeButton && this._innerContainer.appendChild(this._detachEl(this._closeButton)), this._innerContainer.appendChild(this._detachEl(this._wrapper));
                var t = this._detachEl(this._tipContainer);
                if (DG.Browser.svg) {
                  var e = DG.SVG.create("path"),
                    i = this._popupTipClass + " " + this._popupTipClass + "_svg";
                  e.setAttribute("d", this._tipSVGPath), (t = DG.SVG.create("svg")).setAttribute("class", i), t.appendChild(e), DG.DomEvent.disableClickPropagation(e)
                } else DG.DomUtil.addClass(t, this._popupTipClass + "_image"), DG.DomEvent.disableClickPropagation(t);
                this._innerContainer.appendChild(t)
              },
              _clearElement: function(t) {
                return this["_" + t + "Content"] = null, this._detachEl(this._popupStructure[t]), delete this._popupStructure[t], this
              },
              _updateScrollPosition: function() {
                this._baron && this._baron.update()
              },
              resize: function() {
                var t = this._updateLayout();
                if (this._updatePosition(), t)
                  if (this._isBaronExist) {
                    DG.DomUtil.removeClass(this._scroller, "dg-scroller_hidden_true"), DG.DomUtil.addClass(this._scroller, "dg-scroller");
                    var e = !!this._isBaronExist && this._scroller.scrollTop;
                    e && (this._scroller.scrollTop = e);
                    var i = this.options.maxHeight - 2 * this.options.border - this._getDelta();
                    this._scrollerWrapper.style.height = i + "px", this._updateScrollPosition()
                  } else this._isContentHeightEnough() || (this._initBaronScroller(), this._initBaron());
                else this._isBaronExist && (this._scrollerWrapper.style.height = "", DG.DomUtil.removeClass(this._scroller, "dg-scroller"), DG.DomUtil.addClass(this._scroller, "dg-scroller_hidden_true"), DG.DomUtil.removeClass(this._scroller, "dg-scroller"), DG.DomEvent.off(this._scroller, "scroll", this._onScroll));
                this._adjustPan(), this._bindAdjustPanOnTransitionEnd()
              },
              _adjustPan: function(t) {
                if (this._map) {
                  if (t) {
                    if ("max-height" !== t.propertyName) return;
                    DG.DomEvent.off(this._wrapper, DG.DomUtil.TRANSITION_END, this._adjustPan)
                  }
                  var e = this.options;
                  if (e.autoPan) {
                    var i = this._map,
                      o = this._container.offsetHeight,
                      n = this._containerWidth,
                      r = new L.Point(this._containerLeft, -o - this._containerBottom);
                    this._zoomAnimated && r._add(L.DomUtil.getPosition(this._container));
                    var s = [e.autoPanPadding[0], e.autoPanPadding[1]];
                    !this._isAutoPanPaddingUserDefined && this._map._container.offsetWidth >= e.maxWidth + 2 * e.mapControlsWidth && (s[0] = e.mapControlsWidth);
                    var a = i.layerPointToContainerPoint(r),
                      l = L.point(s),
                      u = L.point(e.autoPanPaddingTopLeft || l),
                      c = L.point(e.autoPanPaddingBottomRight || l),
                      h = i.getSize(),
                      d = 0,
                      p = 0;
                    0 !== h.x && 0 !== h.y && (a.x + n + c.x > h.x && (d = a.x + n - h.x + c.x), a.x - d - u.x < 0 && (d = a.x - u.x), a.y + o + c.y > h.y && (p = a.y + o - h.y + c.y), a.y - p - u.y < 0 && (p = a.y - u.y), (d || p) && i.fire("autopanstart").panBy([d, p]))
                  }
                }
              },
              _bindAdjustPanOnTransitionEnd: function() {
                DG.DomUtil.TRANSITION ? DG.DomEvent.on(this._wrapper, DG.DomUtil.TRANSITION_END, this._adjustPan, this) : this._adjustPan()
              },
              _isContentHeightEnough: function() {
                var t = this.options;
                if (!t.maxHeight) return !0;
                var e = this._popupStructure.body ? this._popupStructure.body.offsetHeight + this._getDelta() : this._contentNode.offsetHeight;
                return (e += 2 * t.border) <= t.maxHeight
              },
              _initBaronScroller: function() {
                var t = this._popupStructure.body.parentNode,
                  e = this._scrollerWrapper = DG.DomUtil.create("div", "dg-scroller__wrapper", t),
                  i = this._scroller = DG.DomUtil.create("div", "dg-scroller", e),
                  o = this._barWrapper = DG.DomUtil.create("div", "dg-scroller__bar-wrapper", i),
                  n = this.options.maxHeight - 2 * this.options.border;
                this._scrollerBar = DG.DomUtil.create("div", "dg-scroller__bar", o), i.appendChild(this._detachEl(this._popupStructure.body)), n -= this._getDelta(), e.style.height = Math.max(18, n) + "px", e.style.width = t.offsetWidth + 5 + "px", this._isBaronExist = !0, this._switchEvents()
              },
              _onScroll: function(t) {
                this.fire("scroll", {
                  originalEvent: t
                })
              },
              _onClick: function(t) {
                t.target = t.target || t.srcElement, this._moving || this.fire("click", {
                  originalEvent: t
                })
              },
              _onStart: function(t) {
                if (this._moved = !1, !this._moving) {
                  var e = t.touches ? t.touches[0] : t;
                  this._startPoint = new DG.Point(e.clientX, e.clientY), this._toggleTouchEvents()
                }
              },
              _onEnd: function(t) {
                this._toggleTouchEvents(!0), this._onClick(t), this._moving = !1
              },
              _onMove: function(t) {
                if (t.touches && 1 < t.touches.length) this._moved = !0;
                else {
                  var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                    i = DG.point(e.clientX, e.clientY),
                    o = Math.abs(i.subtract(this._startPoint).y);
                  !o || o < 10 || (this._moving = this._moved = !0)
                }
              },
              _initBaron: function() {
                var i = this._scrollerWrapper;
                this._baron = RC({
                  scroller: ".dg-scroller",
                  bar: ".dg-scroller__bar",
                  track: ".dg-scroller__bar-wrapper",
                  $: function(t) {
                    var e = "[object String]" === {}.toString.call(t) ? i.querySelector(t) : t;
                    return new SC(e)
                  },
                  event: function(e, t, i, o) {
                    t.split(" ").forEach(function(t) {
                      DG.DomEvent[o || "on"](e, t, i)
                    })
                  }
                })
              },
              _initHeader: function() {
                this._popupStructure.header = DG.DomUtil.create("header", "dg-popup__header", this._contentNode), this._popupStructure.header.setAttribute("dir", this.options.textDirection)
              },
              _initFooter: function() {
                this._popupStructure.footer = DG.DomUtil.create("footer", "dg-popup__footer", this._contentNode), this._popupStructure.footer.setAttribute("dir", this.options.textDirection)
              },
              _initBodyContainer: function() {
                this._popupStructure.wrapper = DG.DomUtil.create("div", "dg-popup__container-wrapper", this._contentNode), this._popupStructure.body = DG.DomUtil.create("div", "dg-popup__container", this._popupStructure.wrapper), this._popupStructure.body.setAttribute("dir", this.options.textDirection)
              },
              update: function() {
                if (this._map) {
                  if (DG.Browser.ielt9 || (this._container.style.visibility = "hidden"), this._switchEvents(!0), this._clearNode(this._contentNode), this._isBaronExist = !1, this._headerContent && this._initHeader(), this._bodyContent && this._initBodyContainer(), this._footerContent && this._initFooter(), this._updatePopupStructure(), this.resize(), DG.DomEvent.on(this._wrapper, "click", DG.DomEvent.stopPropagation), this._switchEvents(), DG.Browser.ielt9) {
                    var t = this._popupStructure.footer;
                    t && (t.className += " ie8")
                  }
                  DG.Browser.ielt9 || (this._container.style.visibility = "")
                }
              },
              _getDelta: function() {
                var t = 0,
                  e = this._popupStructure;
                return e.header && (t += e.header.offsetHeight), e.footer && (t += e.footer.offsetHeight), t
              },
              _updateLayout: function() {
                var t, e = this.options,
                  i = this._contentNode,
                  o = this._wrapper,
                  n = i.style,
                  r = o.style,
                  s = "leaflet-popup-scrolled",
                  a = !1;
                n.margin = e.border + "px", DG.DomUtil.removeClass(i, s), this._isContentHeightEnough() ? r.maxHeight = i.offsetHeight + 2 * e.border + "px" : (r.maxHeight = e.maxHeight + "px", DG.DomUtil.addClass(i, s), a = !0);
                var l = 2 * e.autoPanPadding[0];
                return t = e.sprawling ? (t = e.maxWidth, t = Math.min(t, this._map._container.offsetWidth - l), Math.max(t, e.minWidth)) : (r.width = "", n.whiteSpace = "nowrap", t = o.offsetWidth, n.whiteSpace = "", t = Math.min(t, this._map._container.offsetWidth - l), Math.min(Math.max(t, e.minWidth), e.maxWidth)), r.width = t + "px", this._containerWidth = this._container.offsetWidth, a
              },
              _updatePopupStructure: function() {
                Object.keys(this._popupStructure).forEach(function(t) {
                  this._insertContent(this["_" + t + "Content"], this._popupStructure[t])
                }, this), this.fire("contentupdate")
              },
              _insertContent: function(t, e) {
                t && e && ("string" == typeof(t = "function" == typeof t ? t(this._source || this) : t) ? e.innerHTML = t : (this._clearNode(e), e.appendChild(t)))
              },
              _clearNode: function(t) {
                for (; t.hasChildNodes();) t.removeChild(t.firstChild)
              },
              _detachEl: function(t) {
                return t.parentNode && t.parentNode.removeChild(t), t
              },
              _switchEvents: function(t) {
                var e = t ? "off" : "on";
                DG.Browser.touch ? DG.DomEvent[e](this._contentNode, "touchstart mousedown mousemove", this._onStart, this) : DG.DomEvent[e](this._contentNode, "click", this._onClick, this), this._isBaronExist && DG.DomEvent[e](this._scroller, "scroll", this._onScroll, this)
              },
              _toggleTouchEvents: function(t) {
                var e = t ? "off" : "on";
                DG.DomEvent[e](this._contentNode, "touchmove", this._onMove, this), DG.DomEvent[e](this._contentNode, "touchend", this._onEnd, this)
              }
            }), DG.Map.include({
              _markerClass: "dg-customization__marker_type_mushroom",
              _markerShowClass: "dg-customization__marker_appear",
              _markerHideClass: "dg-customization__marker_disappear",
              _dgHideClass: "dg-popup_hidden_true",
              openPopup: function(t, e, i) {
                if (!(t instanceof L.Popup)) {
                  var o = t;
                  t = new L.Popup(i).setContent(o)
                }
                return e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), (this._popup = t)._source && t._source._icon && (-1 !== t._source._icon.className.indexOf(this._markerClass) ? (DG.DomUtil.removeClass(t._source._icon, this._markerShowClass), DG.DomUtil.addClass(t._source._icon, this._markerHideClass)) : (DG.DomUtil.addClass(t._source._icon, this._dgHideClass), t._source._shadow && DG.DomUtil.addClass(t._source._shadow, this._dgHideClass))), this.addLayer(t))
              },
              closePopup: function(t) {
                return t && t !== this._popup || (t = this._popup, this._popup = null), t && (t._source && t._source._icon && (-1 !== t._source._icon.className.indexOf(this._markerClass) ? (DG.DomUtil.removeClass(t._source._icon, this._markerHideClass), DG.DomUtil.addClass(t._source._icon, this._markerShowClass)) : (DG.DomUtil.removeClass(t._source._icon, this._dgHideClass), t._source._shadow && DG.DomUtil.removeClass(t._source._shadow, this._dgHideClass))), this.removeLayer(t)), this
              }
            }), DG.Dictionary = {}, DG.Dictionary.ru = {
              pluralRules: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && t % 10 % 1 == 0 && (t % 100 < 12 || 14 < t % 100) ? 1 : t % 10 == 0 || 5 <= t % 10 && t % 10 <= 9 && t % 10 % 1 == 0 || 11 <= t % 100 && t % 100 <= 14 && t % 100 % 1 == 0 ? 2 : void 0
              }
            }, DG.Dictionary.en = {
              pluralRules: function(t) {
                return 1 === t ? 0 : 1
              }
            }, DG.Dictionary.it = {
              pluralRules: function(t) {
                return 1 === t ? 0 : 1
              }
            }, DG.Dictionary.cs = {
              pluralRules: function(t) {
                return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
              }
            }, DG.Dictionary.es = {
              pluralRules: function(t) {
                return 2 <= t ? 1 : 0
              }
            }, DG.Dictionary.ar = {
              pluralRules: function() {
                return 0
              }
            }, DG.Locale = {
              t: function(t, e) {
                var i, o, n, r = this._map.getLang();
                return void 0 === this.constructor.Dictionary[r] && (r = "ar" === r ? "en" : DG.config.defaultLang), (n = void 0 !== (o = this.constructor.Dictionary[r][t])) ? (i = n ? o : t, void 0 !== e && (e = parseInt(e, 10), e = isNaN(e) ? 0 : e, i = o[this.constructor.Dictionary[r].pluralRules(e)]), i = DG.Util.template(i, {
                  n: e
                })) : t
              }
            }, DG.Map.include({
              setLang: function(t) {
                t && "[object String]" === Object.prototype.toString.call(t) && (this.options.currentLang = t, this.fire("langchange", {
                  lang: t
                }))
              },
              getLang: function() {
                if (!this.options.currentLang) {
                  var t = document.documentElement,
                    e = t.lang || t.getAttributeNS && t.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang") || DG.config.defaultLang;
                  this.options.currentLang = e
                }
                return this.options.currentLang
              }
            }), DG.RoundControl = DG.Control.extend({
              includes: DG.Mixin.Events,
              options: {
                position: "topright",
                iconClass: "default"
              },
              onAdd: function(t) {
                var e = this._controlCLass = "dg-control-round",
                  i = this._controlIconCLass = this._controlCLass + "__icon",
                  o = DG.DomUtil.create("div", "");
                if (this._disable) return o;
                DG.DomUtil.addClass(o, e);
                var n = this._link = DG.DomUtil.create("a", i + " " + i + "_name_" + this.options.iconClass, o);
                return n.href = "#", this._renderTranslation(), this._map = t, DG.DomEvent.on(o, "click", this._toggleControl, this).on(o, "dblclick", DG.DomEvent.stopPropagation).on(n, "mousedown", DG.DomEvent.stopPropagation), this.fireEvent("add"), o
              },
              onRemove: function() {
                this.fireEvent("remove"), DG.DomEvent.off(this._link, "click", this._toggleControl)
              },
              setState: function(t) {
                return this._link && this._container && (this._state && (DG.DomUtil.removeClass(this._container, this._controlCLass + "_state_" + this._state), DG.DomUtil.removeClass(this._link, this._controlIconCLass + "_state_" + this._state), this._state = null), t && (this._state = t, DG.DomUtil.addClass(this._container, this._controlCLass + "_state_" + this._state), DG.DomUtil.addClass(this._link, this._controlIconCLass + "_state_" + this._state))), this
              },
              _toggleControl: function(t) {
                DG.DomEvent.stop(t), this.fireEvent("click")
              }
            }), DG.RoundControl.include(DG.Locale), DG.roundControl = function(t) {
              return new DG.RoundControl(t)
            };
          var ie9 = ($E = document.createElement("div"), _E = $E.getElementsByTagName("i"), $E.innerHTML = "\x3c!--[if IE 9]><i></i><![endif]--\x3e", Boolean(_E[0])),
            safari51 = DG.Browser.safari && -1 !== navigator.userAgent.indexOf("Version/5.1"),
            wasPreviouslyDisabled = !1,
            $E, _E;
          try {
            wasPreviouslyDisabled = "false" === localStorage.getItem("DGMuseum")
          } catch (t) {}
          DG.Map.mergeOptions({
            museum: !wasPreviouslyDisabled && (DG.Browser.ielt9 || ie9 || DG.Browser.opera12 || safari51)
          }), DG.Map.Museum = DG.Handler.extend({
            statics: {
              Dictionary: {
                ar: {
                  wearesorry: "لا نضمن لك تشغيل ثابت للتطبيق على متصفحك. حاول التحديث:"
                },
                cs: {
                  wearesorry: "Nezaručujeme stabilní fungování aplikace ve Vašem prohlížeči. Zkuste provést aktualizaci:"
                },
                en: {
                  wearesorry: "We do not guarantee stable operation of the application in your browser. Try updating:"
                },
                es: {
                  wearesorry: "No garantizamos un funcionamiento estable de la aplicación en su buscador. Intente actualizarlo:"
                },
                it: {
                  wearesorry: "Non garantiamo il funzionamento stabile dell'applicazione nel tuo browser. Prova ad aggiornare:"
                },
                ru: {
                  wearesorry: "Мы не гарантируем стабильную работу приложения в вашем браузере. Попробуйте обновиться:"
                }
              }
            },
            includes: [DG.Locale],
            initialize: function(t) {
              this._map = t, this._element = document.createElement("div"), this._element.className = "dg-museum", this._element.innerHTML = '<span></span><a class="dg-museum-browser dg-museum__chrome" target="_blank" href="https://www.google.com/chrome/"></a><a class="dg-museum-browser dg-museum__firefox" target="_blank" href="https://www.mozilla.org/firefox/new/"></a><a class="dg-museum-browser dg-museum__safari" target="_blank" href="https://support.apple.com/downloads/safari"></a><a class="dg-museum-browser dg-museum__opera" target="_blank" href="https://www.opera.com/"></a><a class="dg-museum-browser dg-museum__ie" target="_blank" href="https://windows.microsoft.com/internet-explorer/download-ie"></a>', this._text = this._element.children[0], this._closeButton = document.createElement("span"), this._closeButton.className = "dg-museum__close", this._element.appendChild(this._closeButton), this._renderTranslation()
            },
            addHooks: function() {
              this._map.getContainer().appendChild(this._element), this._map.on("langchange", this._renderTranslation, this), DG.DomEvent.on(this._closeButton, "click", this._onCloseButtonClick, this)
            },
            removeHooks: function() {
              this._map.getContainer().removeChild(this._element), this._map.off("langchange", this._renderTranslation, this), DG.DomEvent.off(this._closeButton, "click", this._onCloseButtonClick, this)
            },
            _onCloseButtonClick: function(t) {
              DG.DomEvent.stop(t);
              try {
                localStorage.setItem("DGMuseum", "false")
              } catch (t) {}
              this.disable()
            },
            _renderTranslation: function() {
              var t = this._map.getLang();
              this._text.innerHTML = this.t("wearesorry"), this._element.setAttribute("dir", "ar" === t ? "rtl" : "ltr")
            }
          }), DG.Map.addInitHook("addHandler", "museum", DG.Map.Museum), DG.configTheme = DG.configTheme || {}, DG.configTheme.markersData = {
            iconSize: [22, 34],
            className: "dg-customization__marker dg-customization__marker_type_mushroom",
            iconAnchor: [10, 32]
          }, DG.Map.mergeOptions({
            bounceAtZoomLimits: !1
          });
          var controlAddTo = DG.Control.prototype.addTo;
          DG.Control.include({
            addTo: function(t) {
              return t.on("langchange", this._renderTranslation, this), controlAddTo.call(this, t)
            },
            _renderTranslation: function() {}
          }), DG.Browser.safari51 = DG.Browser.safari && -1 !== navigator.userAgent.indexOf("Version/5.1");
          var msPointer = navigator.msPointerEnabled && navigator.msMaxTouchPoints && !window.PointerEvent,
            pointer = window.PointerEvent && navigator.pointerEnabled && navigator.maxTouchPoints || msPointer,
            documentTouch = window.DocumentTouch && document instanceof window.DocumentTouch;
          DG.Browser.touchEnabled = pointer || "ontouchstart" in window || documentTouch, DG.Marker.prototype.options.icon = DG.divIcon(DG.configTheme.markersData);
          var utilSetOptions = DG.Util.setOptions;
          DG.setOptions = L.setOptions = DG.Util.setOptions = function(t, e) {
            return e && void 0 !== e.clickable && (e.interactive = e.clickable), utilSetOptions.call(this, t, e)
          }, DG.Layer.mergeOptions({
            nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
          }), L.Canvas.include({
            _initContainer: function() {
              var t = this._container = document.createElement("canvas");
              L.DomEvent.on(t, "mousemove", this._onMouseMove, this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            }
          });
          var initMap = DG.Map.prototype.initialize,
            panBy = DG.Map.prototype.panBy,
            getBoundsZoom = DG.Map.prototype.getBoundsZoom,
            setMaxZoom = DG.Map.prototype.setMaxZoom;
          DG.Map.include({
            _tileLayersNumber: 0,
            _mapMaxZoomCache: null,
            initialize: function(t, e) {
              e = DG.extend({
                wheelPxPerZoomLevel: 1e4
              }, e), this.metaLayers = [], initMap.call(this, t, e), this.options.center && void 0 !== this.options.zoom && this.setView(DG.latLng(this.options.center), this.options.zoom, {
                reset: !0
              }), this._lastMetalayer = {
                layer: void 0,
                entity: void 0
              }
            },
            setView: function(t, e, i) {
              if ((this._restrictZoom(t, e), e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(DG.latLng(t), e, this.options.maxBounds), (i = i || {}).animate && (i.animate = this._testAnimation(t)), this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = DG.extend({
                  animate: i.animate,
                  duration: i.duration
                }, i.zoom), i.pan = DG.extend({
                  animate: i.animate,
                  duration: i.duration
                }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), this;
              return this._resetView(t, e), this
            },
            panBy: function(t, e) {
              var i = panBy.call(this, t, e),
                o = this._restrictZoom(this.getCenter());
              return this.getZoom() > o && this.setZoom(o), i
            },
            getBoundsZoom: function(t, e, i) {
              return t = DG.latLngBounds(t), this._restrictZoom(t), getBoundsZoom.call(this, t, e, i)
            },
            getTileLayersNumber: function() {
              return this._tileLayersNumber
            },
            setMaxZoom: function(t) {
              return this._mapMaxZoomCache = null, setMaxZoom.call(this, t)
            },
            _testAnimation: function(t) {
              if (this.projectDetector.enabled()) {
                var e = this.projectDetector.getProject(),
                  i = this.projectDetector.isProjectHere(t);
                if (e && i) return e.code === i.code
              }
              return !0
            },
            _updateTileLayers: function(t) {
              t.layer instanceof DG.TileLayer && !t.layer._isDg && ("layeradd" === t.type ? this._tileLayersNumber++ : this._tileLayersNumber--)
            },
            _getNewBounds: function(t, e) {
              if (t instanceof DG.LatLngBounds) return t;
              var i = this.project(t, e),
                o = this.getSize().divideBy(2),
                n = this.unproject(i.subtract(o), e),
                r = this.unproject(i.add(o), e);
              return DG.latLngBounds(n, r)
            },
            _restrictZoom: function(t, e) {
              if (this._layers && this.projectDetector.enabled() && 0 === this._tileLayersNumber) {
                var i = this.options,
                  o = !!i.maxZoom,
                  n = this.baseLayer,
                  r = this._getNewBounds(t, e),
                  s = this.projectDetector.isProjectHere(r);
                return o ? (this._mapMaxZoomCache || (this.baseLayer.options.detectRetina && DG.Browser.retina && 0 < i.maxZoom && i.maxZoom--, this._mapMaxZoomCache = i.maxZoom), i.maxZoom = this._mapMaxZoomCache && s ? this._mapMaxZoomCache : DG.config.projectLeaveMaxZoom, s && (this._mapMaxZoomCache = i.maxZoom), i.maxZoom) : (s ? n.options.detectRetina && DG.Browser.retina && 0 < s.maxZoom ? n.options.maxZoom = s.maxZoom - 1 : n.options.maxZoom = s.maxZoom : n.options.maxZoom = DG.config.projectLeaveMaxZoom, n.options.maxNativeZoom = n.options.maxZoom, this._updateZoomLevels(), n.options.maxZoom)
              }
            },
            _fireDOMEvent: function(t, e, i) {
              if (13 !== t.keyCode) {
                if ("click" === t.type) {
                  var o = L.Util.extend({}, t);
                  o.type = "preclick", this._fireDOMEvent(o, o.type, i)
                }
                if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                  var n = i[0];
                  "contextmenu" === e && n.listens(e, !0) && L.DomEvent.preventDefault(t);
                  var r = {
                    originalEvent: t,
                    eventTargets: i,
                    eventTargetsMapIndex: i.indexOf(this)
                  };
                  if ("keypress" !== t.type) {
                    var s = n instanceof L.Marker;
                    r.containerPoint = s ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = s ? n.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                  }
                  for (var a = 0; a < i.length; a++) {
                    if (i[a] === this) {
                      var l = this._getCurrentMetaLayer(r);
                      "mousemove" === e ? this._lastMetalayer.entity && l.entity && this._lastMetalayer.entity.id === l.entity.id ? this._fireMetalayerEvent("mousemove", l, r) : (this._fireMetalayerEvent("mouseout", this._lastMetalayer, r), this._fireMetalayerEvent("mouseover", l, r), this._fireMetalayerEvent("mousemove", l, r), this._lastMetalayer = l) : this._fireMetalayerEvent(e, l, r), r.originalEvent._stopped || i[a].fire(e, r, !0)
                    } else i[a].fire(e, r, !0), this._lastMetalayer.entity && r.originalEvent._stopped && (this._fireMetalayerEvent("mouseout", this._lastMetalayer, r), this._lastMetalayer = {
                      layer: void 0,
                      entity: void 0
                    });
                    if (r.originalEvent._stopped || i[a].options.nonBubblingEvents && -1 !== L.Util.indexOf(i[a].options.nonBubblingEvents, e)) return
                  }
                }
              }
            },
            _getCurrentMetaLayer: function(t) {
              var e = t.originalEvent.target || t.originalEvent.srcElement,
                i = "click" === t.originalEvent.type;
              if (e === this._container || DG.Browser.ie && "leaflet-tile leaflet-tile-loaded" === e.className || "CANVAS" === e.tagName)
                for (var o = this.metaLayers.length - 1; 0 <= o; o--) {
                  var n = this.metaLayers[o].getHoveredObject(t);
                  if (n) return {
                    layer: this.metaLayers[o],
                    entity: n
                  };
                  if (i) return {
                    layer: this.metaLayers[o],
                    entity: void 0
                  }
                }
              return {
                layer: void 0,
                entity: void 0
              }
            },
            _fireMetalayerEvent: function(t, e, i) {
              if ((e.entity || "click" === t) && e.layer) {
                var o = e.layer.mapEvents[t];
                o && (i.entity = e.entity, o.call(e.layer, i))
              }
            }
          }), DG.Map.addInitHook(function() {
            this.on("layeradd layerremove", this._updateTileLayers)
          }), DG.Map.addInitHook(function() {
            0 == this.options.dragging && 0 == this.options.tap && DG.DomUtil.addClass(this._container, "dg-dragging-false")
          }), DG.Map.addInitHook(function() {
            function t() {
              var t = this.getLang(),
                e = this.projectDetector && this.projectDetector.getProject();
              this.baseLayer.options.errorTileUrl = "ru" !== t || e ? i : o, "" === u && "ar" === t && e && "ae" === e.country_code ? (u = "ar", this.baseLayer.setUrl(s), this.baseLayer.setPreviewUrl && this.baseLayer.setPreviewUrl(l)) : "ar" !== u || "ar" === t && e && "ae" === e.country_code || (u = "", this.baseLayer.setUrl(r), this.baseLayer.setPreviewUrl && this.baseLayer.setPreviewUrl(a))
            }
            var i = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEAAQMAAABmvDolAAAAA1BMVEX28t5R0k5UAAAAH0lEQVR4Xu3AAQkAAADCMPunNsdhWxwAAAAAAAAAwAEhAAABg2UP5AAAAABJRU5ErkJggg==",
              o = DG.config.protocol + DG.config.baseUrl + "/img/nomap_ru.png",
              n = DG.Browser.mobile ? DG.MobileTileLayer : DG.TileLayer,
              e = n.extend({
                initialize: function(t, e) {
                  this._isDg = !0, n.prototype.initialize.call(this, t, e)
                },
                getTiles: function() {
                  return this._tiles
                }
              }),
              r = DG.config.protocol + (DG.Browser.retina ? DG.config.retinaTileServer : DG.config.tileServer),
              s = DG.config.protocol + (DG.Browser.retina ? DG.config.arabicRetinaTileServer : DG.config.arabicTileServer),
              a = DG.config.protocol + (DG.Browser.retina ? DG.config.previewRetinaTileServer : DG.config.previewTileServer),
              l = DG.config.protocol + (DG.Browser.retina ? DG.config.arabicPreviewRetinaTileServer : DG.config.arabicPreviewTileServer);
            this.baseLayer = new e(r, {
              subdomains: "0123",
              errorTileUrl: "ru" === this.getLang() ? o : i,
              detectRetina: DG.config.detectRetina,
              maxZoom: 19,
              maxNativeZoom: 19,
              zIndex: 0,
              updateWhenIdle: !1,
              previewUrl: a
            });
            var u = "";
            t.call(this), this.baseLayer.addTo(this), this.on({
              langchange: t,
              projectchange: t,
              projectleave: t
            }, this)
          }), DG.Map.mergeOptions({
            tilesCheck: !0
          }), DG.Map.TilesCheck = DG.Handler.extend({
            initialize: function(t) {
              this._map = t, this._layer = t.baseLayer, this._moveStartEventCounter = 0, this._moveEndEventCounter = 0, this._loadingEventCounter = 0, this._loadEventCounter = 0
            },
            addHooks: function() {
              this._map.on(this._mapEvents, this), this._layer.on(this._layerEvents, this)
            },
            removeHooks: function() {
              this._map.off(this._mapEvents, this), this._layer.off(this._layerEvents, this)
            },
            _mapEvents: {
              layeradd: function(t) {
                t.layer == this._layer && this.enable()
              },
              layerremove: function(t) {
                t.layer == this._layer && this.disable()
              },
              movestart: function() {
                this._stopWaiting(), this._moveStartEventCounter++, this._isWaiting = !0
              },
              moveend: function() {
                this._moveEndEventCounter++, !this._isWaiting && this._moveStartEventCounter !== this._moveEndEventCounter || (this._isMoveEnd = !0, this._checkWaiting())
              }
            },
            _layerEvents: {
              loading: function() {
                this._loadingEventCounter++
              },
              load: function() {
                this._loadEventCounter++, !this._isWaiting && this._loadingEventCounter !== this._loadEventCounter || (this._isLoad = !0, this._checkWaiting())
              }
            },
            _stopWaiting: function() {
              this._isWaiting = !1, this._isMoveEnd = !1, this._isLoad = !1
            },
            _checkWaiting: function() {
              this._isWaiting && this._isLoad && this._isMoveEnd && (this._stopWaiting(), this._resetCounters(), this._checkTiles())
            },
            _checkTiles: function() {
              if (0 === this._map.getTileLayersNumber() && this._map._loaded) {
                var t = this._layer._tileZoom,
                  e = this._layer.options.errorTileUrl,
                  i = this._layer.getTiles();
                for (var o in i)
                  if (i[o].coords.z === t && i[o].el.src !== e) return;
                this._map.zoomOut()
              }
            },
            _resetCounters: function() {
              this._moveStartEventCounter = 0, this._moveEndEventCounter = 0, this._loadingEventCounter = 0, this._loadEventCounter = 0
            }
          }), DG.Map.addInitHook("addHandler", "tilesCheck", DG.Map.TilesCheck);
          var onDragEnd = DG.Map.Drag.prototype._onDragEnd;
          DG.Map.Drag.include({
            _rememberTimeAndPosition: function() {
              var t = this._lastTime = +new Date,
                e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
              for (this._positions.push(e), this._times.push(t); 50 < t - this._times[0];) this._positions.shift(), this._times.shift()
            },
            _onDrag: function(t) {
              this._map.options.inertia && this._rememberTimeAndPosition(), this._map.fire("move", t).fire("drag", t)
            },
            _onDragEnd: function() {
              this._map.options.inertia && !DG.Browser.touch && this._rememberTimeAndPosition(), onDragEnd.call(this)
            }
          }), DG.PolyUtil.inside = function(t, e, i) {
            i = i || DG.PolyUtil._defaultPointReduce;
            var o = e.coordinates,
              n = i(t);
            "Polygon" === e.type && (o = [o]);
            for (var r = !1, s = 0; s < o.length && !r;) {
              if (this._inRing(n, o[s][0], i)) {
                for (var a = !1, l = 1; l < o[s].length && !a;) this._inRing(n, o[s][l], i) && (a = !0), l++;
                a || (r = !0)
              }
              s++
            }
            return r
          }, DG.PolyUtil._inRing = function(t, e, i) {
            for (var o = !1, n = 0, r = e.length - 1; n < e.length; r = n++) {
              var s = i(e[n]),
                a = i(e[r]),
                l = s[0],
                u = s[1],
                c = a[0],
                h = a[1];
              u > t[1] != h > t[1] && t[0] < (c - l) * (t[1] - u) / (h - u) + l && (o = !o)
            }
            return o
          }, DG.PolyUtil._defaultPointReduce = function(t) {
            return t
          }, DG.Browser.mobile && function() {
            var i = L.DomUtil.addClass;
            L.DomUtil.addClass = function(t, e) {
              "leaflet-dragging" !== e && "leaflet-drag-target" !== e && i(t, e)
            };
            var o = L.DomUtil.removeClass;
            L.DomUtil.removeClass = function(t, e) {
              "leaflet-dragging" !== e && "leaflet-drag-target" !== e && o(t, e)
            }, L.Draggable.include({
              _onMove: function(t) {
                if (!t._simulated && this._enabled) {
                  if (t.touches && 1 < t.touches.length) return void(this._moved = !0);
                  var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                    i = new L.Point(e.clientX, e.clientY).subtract(this._startPoint);
                  if ((i.x || i.y) && !(Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance)) {
                    L.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = L.DomUtil.getPosition(this._element).subtract(i), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement));
                    var o = this._startPos.add(i)._round();
                    this._moving = !0, L.Util.cancelAnimFrame(this._animRequest), this._lastEvent = t, this._newPos && this._newPos.x == o.x && this._newPos.y == o.y || (this._newPos = o, this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, !0))
                  }
                }
              }
            }), L.Map.Drag.include({
              _onDragEnd: function(t) {
                var e = this._map,
                  i = e.options,
                  o = !i.inertia || this._times.length < 2;
                if (e.fire("dragend", t), o) e.fire("moveend");
                else {
                  var n = this._lastPos.subtract(this._positions[0]),
                    r = (this._lastTime - this._times[0]) / 1e3,
                    s = i.easeLinearity,
                    a = n.multiplyBy(s / r),
                    l = a.distanceTo([0, 0]),
                    u = Math.min(i.inertiaMaxSpeed, l),
                    c = a.multiplyBy(u / l),
                    h = c.multiplyBy(-.5).round();
                  h.x || h.y ? (h = e._limitOffset(h, e.options.maxBounds), L.Util.requestAnimFrame(function() {
                    e.panBy(h, {
                      duration: 1,
                      easeLinearity: s,
                      noMoveStart: !0,
                      animate: !0
                    })
                  })) : e.fire("moveend")
                }
              }
            })
          }(), L.MobileTileLayer = L.TileLayer.extend({
            initialize: function(t, e) {
              L.TileLayer.prototype.initialize.call(this, t, e), this._previewUrl = e.previewUrl
            },
            setPreviewUrl: function(t) {
              this._previewUrl = t, this.redraw()
            },
            createTile: function(t, e, i) {
              var o = document.createElement("img");
              return o.onload = L.bind(this._tileOnLoad, this, e, o), o.onerror = L.bind(this._tileOnError, this, e, o), this.options.crossOrigin && (o.crossOrigin = ""), o.alt = "", o.src = this.getTileUrl(t, i), o
            },
            _initTile: function(t) {
              t.style.position = "absolute";
              var e = this.getTileSize();
              return t.style.width = e.x + "px", t.style.height = e.y + "px", t.style.visibility = "hidden", t.style.pointerEvents = "none", t.onselectstart = L.Util.falseFn, t.onmousemove = L.Util.falseFn, L.Browser.android && !L.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden"), t
            },
            _updateLevels: function() {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var i in this._levels) this._levels[i].el.children.length || i === t ? this._levels[i].el.style.zIndex = e - Math.abs(t - i) : (L.DomUtil.remove(this._levels[i].el), this._removeTilesAtZoom(i), delete this._levels[i]);
                var o = this._levels[t],
                  n = this._map;
                return o || ((o = this._levels[t] = {}).el = L.DomUtil.create("div", "leaflet-zoom-animated", this._container), o.el.style.zIndex = e, o.origin = n.project(n.unproject(n.getPixelOrigin()), t).round(), o.zoom = t, this._setZoomTransform(o, n.getCenter(), n.getZoom()), L.Util.falseFn(o.el.offsetWidth)), this._level = o
              }
            },
            _update: function(t) {
              var e = this._map;
              if (e) {
                var i = e.getZoom();
                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                  var o = this._getTiledPixelBounds(t),
                    n = this._pxBoundsToTileRange(o),
                    r = n.getCenter(),
                    s = [],
                    a = this.options.keepBuffer,
                    l = new L.Bounds(n.getBottomLeft().subtract([a, -a]), n.getTopRight().add([a, -a]));
                  for (var u in this._tiles) {
                    var c = this._tiles[u].coords;
                    c.z === this._tileZoom && l.contains(L.point(c.x, c.y)) || (this._tiles[u].current = !1)
                  }
                  if (1 < Math.abs(i - this._tileZoom)) return void this._setView(t, i);
                  for (var h = n.min.y; h <= n.max.y; h++)
                    for (var d = n.min.x; d <= n.max.x; d++) {
                      var p = new L.Point(d, h);
                      if (p.z = this._tileZoom, this._isValidTile(p)) {
                        var _ = this._tiles[this._tileCoordsToKey(p)];
                        _ ? _.current = !0 : s.push(p)
                      }
                    }
                  if (s.sort(function(t, e) {
                      return t.distanceTo(r) - e.distanceTo(r)
                    }), 0 !== s.length)
                    for (this._loading || (this._loading = !0, this.fire("loading")), d = 0; d < s.length; d++) this._addTile(s[d], this._level.el)
                }
              }
            },
            _needPreviewTile: function(t) {
              return 0 < this._tileZoom - this._map.getZoom() ? !this._existTileFromLowerZoom(t) : !this._existTilesFromHigherZoom(t)
            },
            _existTileFromLowerZoom: function(t) {
              var e = L.point(t.x / 2, t.y / 2)._floor();
              e.z = t.z - 1;
              var i = this._tileCoordsToKey(e),
                o = this._tiles[i];
              return o && !o.preview
            },
            _existTilesFromHigherZoom: function(t) {
              for (var e = t.x, i = t.y, o = 2 * e; o < 2 * e + 2; o++)
                for (var n = 2 * i; n < 2 * i + 2; n++) {
                  var r = new L.Point(o, n);
                  r.z = t.z + 1;
                  var s = this._tileCoordsToKey(r);
                  if (!this._tiles[s]) return !1
                }
              return !0
            },
            _addTile: function(t, e) {
              var i = this._getTilePos(t),
                o = this._tileCoordsToKey(t),
                n = this._wrapCoords(t),
                r = this._needPreviewTile(n),
                s = r ? this._previewUrl : this._url,
                a = this.createTile(n, L.bind(this._tileReady, this, t), s);
              this._initTile(a), L.DomUtil.setPosition(a, i), this._tiles[o] = {
                el: a,
                preview: r,
                coords: t,
                current: !0
              }, e.appendChild(a), this.fire("tileloadstart", {
                tile: a,
                coords: t
              })
            },
            _tileReady: function(t, e, i) {
              if (this._map) {
                e && this.fire("tileerror", {
                  error: e,
                  tile: i,
                  coords: t
                });
                var o = this._tileCoordsToKey(t);
                (i = this._tiles[o]) && (i.originalEl && i.el.parentNode ? (i.el.parentNode.replaceChild(i.originalEl, i.el), i.el = i.originalEl, i.originalEl = null, i.preview = !1) : i.preview && (i.originalEl = this.createTile(this._wrapCoords(t), L.bind(this._tileReady, this, t), this._url), this._initTile(i.originalEl), L.DomUtil.setPosition(i.originalEl, this._getTilePos(t))), i.loaded = +new Date, i.active = !0, this._pruneTiles(), e || (i.el.style.visibility = "", this.fire("tileload", {
                  tile: i.el,
                  preview: i.preview,
                  coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), L.Browser.ielt9 || !this._map._fadeAnimated ? L.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(L.bind(this._pruneTiles, this), 250)))
              }
            },
            getTileUrl: function(t, e) {
              var i = {
                r: L.Browser.retina ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
              };
              if (this._map && !this._map.options.crs.infinite) {
                var o = this._globalTileRange.max.y - t.y;
                this.options.tms && (i.y = o), i["-y"] = o
              }
              return L.Util.template(e, L.extend(i, this.options))
            }
          }), DG.Control.Zoom.include(DG.Locale), DG.Control.Zoom.Dictionary = {}, DG.Control.Zoom.include({
            onAdd: function(t) {
              var e = "dg-zoom",
                i = '<div class="dg-control-round__icon ' + e + "__control " + e + "__button " + e + '__button_type_{type}"></div>',
                o = DG.DomUtil.create("div", e);
              return this._map = t, this._zoomInButton = this._createButton(DG.Util.template(i, {
                type: "in"
              }), this.t("zoom_in"), "dg-control-round " + e + "__in", o, this._zoomIn, this), this._zoomOutButton = this._createButton(DG.Util.template(i, {
                type: "out"
              }), this.t("zoom_out"), "dg-control-round " + e + "__out", o, this._zoomOut, this), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), o
            },
            _originalCreateButton: DG.Control.Zoom.prototype._createButton,
            _createButton: function() {
              var t = Array.prototype.slice.call(arguments),
                e = this._originalCreateButton.apply(this, t),
                i = e.children[0],
                o = "dg-control-round_state_active",
                n = "dg-control-round__icon_state_active";
              return DG.DomEvent.on(e, "touchstart", function() {
                DG.DomUtil.addClass(e, o), DG.DomUtil.addClass(i, n)
              }).on(e, "touchend touchcancel", function() {
                DG.DomUtil.removeClass(e, o), DG.DomUtil.removeClass(i, n)
              }), e
            },
            _renderTranslation: function() {
              this._zoomInButton && this._zoomOutButton && (this._zoomInButton.title = this.t("zoom_in"), this._zoomOutButton.title = this.t("zoom_out"))
            }
          }), DG.Control.Zoom.Dictionary.ru = {
            zoom_in: "Приблизить",
            zoom_out: "Отдалить"
          }, DG.Control.Zoom.Dictionary.it = {
            zoom_in: "Zoom avanti",
            zoom_out: "Zoom indietro"
          }, DG.Control.Zoom.Dictionary.cs = {
            zoom_in: "Přiblížit",
            zoom_out: "Oddálit"
          }, DG.Control.Zoom.Dictionary.en = {
            zoom_in: "Zoom in",
            zoom_out: "Zoom out"
          }, DG.Control.Zoom.Dictionary.es = {
            zoom_in: "Acercar",
            zoom_out: "Alejar"
          }, DG.Control.Zoom.Dictionary.ar = {
            zoom_in: "",
            zoom_out: ""
          };
          var dust = _dereq_("dustjs-linkedin");
          _dereq_("dustjs-helpers"), DG.dust = function(t, e) {
            var i;
            return dust.render(t, e, function(t, e) {
              i = e
            }), i
          }, DG.Control.Attribution.include(DG.Locale), DG.Control.Attribution.Dictionary = {}, DG.Control.Attribution.include({
            options: {
              position: "bottomright"
            },
            _getLink: function(t) {
              var e = {
                ru: {
                  copyright_logo: "http://info.2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://api.2gis.ru/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.ru/api-rules/"
                },
                it: {
                  copyright_logo: "http://2gis.it/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://2gis.it/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.it/licensing-agreement/"
                },
                cz: {
                  copyright_logo: "http://praha.2gis.cz/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://praha.2gis.cz/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.cz/api-rules/"
                },
                cl: {
                  copyright_logo: "http://santiago.2gis.cl/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://santiago.2gis.cl/?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.cl/api-rules/"
                },
                cy: {
                  copyright_logo: "http://info.2gis.com.cy/lemesos?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://info.2gis.com.cy/lemesos?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.com.cy/api-rules/"
                },
                ae: {
                  copyright_logo: "http://info.2gis.ae/dubai?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_apilink: "http://info.2gis.ae/dubai?utm_source=copyright&utm_medium=map&utm_campaign=partners",
                  copyright_license: "http://law.2gis.ae/api-rules/"
                }
              };
              return e[this._countryCode in e ? this._countryCode : "ru"][t]
            },
            onAdd: function(t) {
              for (var e in t._copyright || (t._copyright = !0, this._first = !0), (t.attributionControl = this)._container = DG.DomUtil.create("div", "dg-attribution"), DG.DomEvent.disableClickPropagation(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
              return this._update(), this._container
            },
            _update: function(t, e, i) {
              if (this._map) {
                void 0 !== e && (this._osm = e), void 0 !== i && (this._countryCode = i);
                var o = [];
                for (var n in this._attributions) this._attributions[n] && o.push(n);
                var r = [],
                  s = "";
                this._first && (s = this._getAttributionHTML(t)), this.options.prefix && r.push(this.options.prefix), o.length && r.push(o.join(", ")), this._container.innerHTML = s + r.join(" | ")
              }
            },
            _getData: function(t) {
              return t = t || this._map.getLang(), {
                osm: this._osm,
                work_on: this.t("work_on"),
                work_on_with_osm: this.t("work_on_with_osm"),
                lang: t,
                copyright_apilink: this._getLink("copyright_apilink"),
                copyright_license: this._getLink("copyright_license"),
                copyright_logo: this._getLink("copyright_logo"),
                license_agreement: this.t("license_agreement"),
                dir: "ar" !== t ? "ltr" : "rtl"
              }
            },
            _getAttributionHTML: function(t) {
              return DG.dust("DGAttribution/copyright", this._getData(t))
            },
            _renderTranslation: function(t) {
              this._update(t.lang)
            }
          }), DG.Map.addInitHook(function() {
            this._copyright || DG.control.attribution().addTo(this)
          }), DG.Control.Attribution.Dictionary.ru = {
            license_agreement: "Лицензионное соглашение",
            work_on: "Работает на API 2ГИС",
            work_on_with_osm: "API 2ГИС"
          }, DG.Control.Attribution.Dictionary.it = {
            license_agreement: "Accordo di licenza",
            work_on: "2GIS API",
            work_on_with_osm: "2GIS API"
          }, DG.Control.Attribution.Dictionary.cs = {
            license_agreement: "Licenční smlouva",
            work_on: "Pracuje na API 2GIS",
            work_on_with_osm: "API 2GIS"
          }, DG.Control.Attribution.Dictionary.en = {
            license_agreement: "License agreement",
            work_on: "Uses 2GIS API",
            work_on_with_osm: "2GIS API"
          }, DG.Control.Attribution.Dictionary.es = {
            license_agreement: "Acuerdo de licencia",
            work_on: "2GIS API",
            work_on_with_osm: "2GIS API"
          }, DG.Control.Attribution.Dictionary.ar = {
            license_agreement: "إتفاقية ترخيص",
            work_on: "يعمل بتطبيق 2GIS",
            work_on_with_osm: "API 2GIS"
          }, DG.Control.Location = DG.RoundControl.extend({
            statics: {
              Dictionary: {}
            },
            options: {
              iconClass: "locate",
              position: DG.Browser.mobile ? "bottomright" : "topleft",
              drawCircle: !0,
              follow: !0,
              stopFollowingOnDrag: !1,
              metric: !0,
              onLocationError: function() {},
              onLocationOutsideMapBounds: function() {},
              locateOptions: {}
            },
            initialize: function(t) {
              return DG.Util.setOptions(this, t), navigator.geolocation ? (this._event = void 0, this._locateOptions = {
                watch: !0,
                setView: !0,
                maximumAge: 1 / 0,
                maxZoom: 1 / 0
              }, DG.extend(this._locateOptions, this.options.locateOptions), this._resetVariables(), void this.on({
                click: this._handleLocate,
                add: this._initLocate
              })) : void(this._disable = !0)
            },
            _initLocate: function() {
              this._layer = new DG.LayerGroup, this._layer.addTo(this._map), this._map.on({
                locationfound: this._onLocationFound,
                locationerror: this._onLocationError
              }, this)
            },
            _handleLocate: function() {
              this._active && (!this._event || this._map.getBounds().contains(this._event.latlng) || this._isOutsideMapBounds()) ? this._stopLocate() : (this._locateOnNextLocationFound = !0, this._active || this._map.locate(this._locateOptions), this._active = !0, this.options.follow && this._startFollowing(), this._clearError(), this._event ? this._visualizeLocation() : this.setState("requesting"))
            },
            _onLocationFound: function(t) {
              this._event && this._event.latlng.lat === t.latlng.lat && this._event.latlng.lng === t.latlng.lng && this._event.accuracy === t.accuracy || this._active && (this._event = t, this.options.follow && this._following && (this._locateOnNextLocationFound = !0), this._visualizeLocation())
            },
            _startFollowing: function() {
              this._following = !0, this.options.stopFollowingOnDrag && this._map.on("dragstart", this._stopFollowing)
            },
            _stopFollowing: function() {
              this._following = !1, this.options.stopFollowingOnDrag && this._map.off("dragstart", this._stopFollowing), this._visualizeLocation()
            },
            _isOutsideMapBounds: function() {
              return void 0 !== this._event && this._map.options.maxBounds && !this._map.options.maxBounds.contains(this._event.latlng)
            },
            _visualizeLocation: function() {
              void 0 === this._event.accuracy && (this._event.accuracy = 0);
              var t = this._event.accuracy;
              if (this._locateOnNextLocationFound) {
                if (this._isOutsideMapBounds()) this.options.onLocationOutsideMapBounds(this);
                else if (this._locateOptions.setView) {
                  var e = this._map.projectDetector.getProject().maxZoom || DG.config.projectLeaveMaxZoom;
                  e = Math.min(this._locateOptions.maxZoom, e), this._map.setView(this._event.latlng, e)
                }
                this._locateOnNextLocationFound = !1
              }
              this.options.drawCircle && (this._circle ? this._circle.setLatLng(this._event.latlng).setRadius(t) : this._circle = DG.circle(this._event.latlng, t, {
                clickable: !1,
                color: "#FFF",
                fillColor: "#FFF",
                fillOpacity: .4,
                weight: 0,
                opacity: .3
              }).addTo(this._layer));
              var i = "dg-location__pin";
              i += this._following ? " " + i + "state_following" : "";
              var o = {
                icon: DG.divIcon({
                  className: i,
                  iconSize: [20, 20]
                })
              };
              this._marker ? this._marker.setLatLng(this._event.latlng) : this._marker = DG.marker(this._event.latlng, o).bindLabel(this.t("you_are_here")).addTo(this._layer), DG.DomEvent.on(this._marker, "click", function() {
                this._map.fireEvent("dgLocateClick")
              }, this), this._container && this.setState("active")
            },
            _resetVariables: function() {
              this._active = !1, this._following = !1
            },
            _stopLocate: function() {
              this._map.stopLocate(), this._map.off("dragstart", this._stopFollowing), this.setState(), this._resetVariables(), this._layer.clearLayers(), this._marker = void 0, this._circle = void 0, this._event = void 0
            },
            _onLocationError: function(t) {
              if (3 !== t.code || !this._locateOptions.watch) {
                this._stopLocate(), this._error = DG.DomUtil.create("div", "dg-label dg-label_name_location-error", this._container), this._errorText = DG.DomUtil.create("div", "dg-label__content", this._error), this._errorText.innerHTML = this.t("cant_find");
                var e = this;
                setTimeout(function() {
                  e._clearError()
                }, 3e3), this.options.onLocationError(t)
              }
            },
            _clearError: function() {
              this._error && (this._container.removeChild(this._error), this._error = void 0, this._errorText = void 0)
            },
            _renderTranslation: function() {
              this._link && (this._link.title = this.t("button_title")), this._marker && this._marker.bindLabel(this.t("you_are_here"))
            }
          }), DG.control.location = function(t) {
            return new DG.Control.Location(t)
          }, DG.Map.addInitHook(function() {
            this.options.locationControl && (this.locationControl = DG.control.location(this.options.locationControl), this.addControl(this.locationControl))
          }), DG.Control.Location.Dictionary.ru = {
            cant_find: "Мы не смогли Вас найти",
            you_are_here: "Вы здесь",
            button_title: "Найти Вас на карте"
          }, DG.Control.Location.Dictionary.it = {
            cant_find: "Non siamo riusciti a localizzarti",
            you_are_here: "Voi siete qui",
            button_title: "Trova la tua posizione sulla mappa"
          }, DG.Control.Location.Dictionary.cs = {
            cant_find: "Nepodařilo se nám určit Vaši polohu",
            you_are_here: "Jste tady",
            button_title: "Určit Vaši polohu na mapě"
          }, DG.Control.Location.Dictionary.en = {
            cant_find: "We can't find you",
            you_are_here: "You are here",
            button_title: "Show your location"
          }, DG.Control.Location.Dictionary.es = {
            cant_find: "No pudimos encontrarte",
            you_are_here: "Tú estás aquí",
            button_title: "Encontrarte en el mapa"
          }, DG.Control.Location.Dictionary.ar = {
            cant_find: "لم نستطع تحديد موقعك",
            you_are_here: "أنت هنا",
            button_title: "موقعي"
          }, DG.Screenfull = DG.Class.extend({
            _apiMap: [
              ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
              ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
              ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
              ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            initialize: function() {
              this.api = this._api()
            },
            request: function(t) {
              var e = this.api.requestFullscreen;
              (t = t || document.documentElement)[e](Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
              document[this.api.exitFullscreen]()
            },
            isFullscreen: function() {
              return !!document[this.api.fullscreenElement]
            },
            isAvailable: function() {
              return Boolean(this.api)
            },
            _api: function() {
              var i = {},
                o = this._apiMap;
              return o.forEach(function(t) {
                t && t[1] in document && t.forEach(function(t, e) {
                  i[o[0][e]] = t
                })
              }), !!i.requestFullscreen && i
            }
          }), DG.screenfull = new DG.Screenfull, DG.Control.Fullscreen = DG.RoundControl.extend({
            statics: {
              Dictionary: {}
            },
            options: {
              position: "topright",
              iconClass: "fullscreen"
            },
            initialize: function(t) {
              DG.Util.setOptions(this, t), this._isFullscreen = !1, this.on("click", this._toggleFullscreen)
            },
            _toggleFullscreen: function() {
              this._isFullscreen ? this._toggle(!1, "exit", "on", "cancelfullscreen") : this._toggle(!0, "request", "on", "requestfullscreen"), this._renderTranslation(), this._map.invalidateSize()
            },
            _renderTranslation: function() {
              this._link.title = this.t(this._isFullscreen ? "title_min" : "title_max")
            },
            _toggle: function(t, e, i, o) {
              var n = this._map._container;
              this._isFullscreen = t, this.setState(t ? "active" : ""), DG.screenfull[e](n), DG.DomEvent[i](document, DG.screenfull.api.fullscreenchange, this._onFullScreenStateChange, this), this._map.fire(o)
            },
            _onFullScreenStateChange: function() {
              DG.screenfull.isFullscreen() || this._toggle(!1, "exit", "on", "cancelfullscreen")
            }
          }), DG.control.fullscreen = function(t) {
            return new DG.Control.Fullscreen(t)
          }, DG.Map.mergeOptions({
            fullscreenControl: !0
          }), DG.Map.addInitHook(function() {
            this.options.fullscreenControl && (this.fullscreenControl = DG.control.fullscreen(this.options.fullscreenControl), DG.screenfull.isAvailable() && this.addControl(this.fullscreenControl))
          }), DG.Control.Fullscreen.Dictionary.ru = {
            title_max: "Развернуть",
            title_min: "Восстановить"
          }, DG.Control.Fullscreen.Dictionary.it = {
            title_max: "Espandi",
            title_min: "Ripristina"
          }, DG.Control.Fullscreen.Dictionary.cs = {
            title_max: "Rozbalit",
            title_min: "Obnovit"
          }, DG.Control.Fullscreen.Dictionary.en = {
            title_max: "Expand",
            title_min: "Restore"
          }, DG.Control.Fullscreen.Dictionary.es = {
            title_max: "Maximizar",
            title_min: "Restaurar"
          }, DG.Control.Fullscreen.Dictionary.ar = {
            title_max: "",
            title_min: ""
          }, DG.Meta = {}, DG.Meta.Layer = DG.Layer.extend({
            options: {
              tileSize: 256,
              minZoom: 0,
              maxZoom: 19,
              zoomOffset: 0,
              eventBubbling: "transparent"
            },
            initialize: function(t, e) {
              DG.TileLayer.prototype.initialize.call(this, null, e), delete this._url, this._currentTileKey = "", this._currentTileData = [], this._lastEntity = void 0, this._dispatchMouseEvents = !0, this._origin = DG.Meta.origin(t, {
                dataFilter: this.options.dataFilter
              })
            },
            getOrigin: function() {
              return this._origin
            },
            onAdd: function(t) {
              this._resetView(), t.metaLayers.push(this), t.on("rulerstart", this._disableDispatchMouseEvents, this), t.on("rulerend", this._enableDispatchMouseEvents, this);
              var i = this;
              DG.Browser.touchEnabled && this.options.isPoi && t.eachLayer(function(t) {
                if (t instanceof L.TileLayer)
                  for (var e in t.on("tileloadstart", i._onTileLoadStart, i), t._tiles) i._onTileLoadStart({
                    coords: t._tiles[e].coords
                  })
              })
            },
            onRemove: function(t) {
              var e = this;
              DG.Browser.touchEnabled && this.options.isPoi && t.eachLayer(function(t) {
                t instanceof L.TileLayer && t.off("tileloadstart", e._onTileLoadStart)
              }), this._tileZoom = null;
              var i = t.metaLayers.indexOf(this); - 1 !== i && t.metaLayers.splice(i, 1), t.off("rulerstart", this._disableDispatchMouseEvents, this), t.off("rulerend", this._enableDispatchMouseEvents, this)
            },
            getEvents: function() {
              return {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
              }
            },
            setUrl: function(t) {
              this._currentTileKey = "", this._currentTileData = [], this._lastEntity = void 0, this._dispatchMouseEvents = !0, this._origin.setURL(t, !0)
            },
            getHoveredObject: function(t) {
              var e, i = this.getTileSize(),
                o = this._map.mouseEventToLayerPoint(t.originalEvent),
                n = this._map.getPixelOrigin().add(o),
                r = n.unscaleBy(i).floor(),
                s = DG.point(n.x % i.x, n.y % i.y),
                a = this._map.getZoom(),
                l = this;
              if (!(a > this.options.maxZoom + this.options.zoomOffset || a < this.options.minZoom - this.options.zoomOffset) && this._isValidTile(r)) return this._wrapCoords(r), r.z = this._getZoomForUrl(), r.key = i.x + "x" + i.y, (e = this._origin.getTileKey(r)) === this._currentTileKey ? l._lastEntity = l._getHoveredObject(s) : this._origin.getTileData(r, function(t) {
                l._currentTileKey = e, l._currentTileData = t, l._lastEntity = l._getHoveredObject(s)
              }), this._lastEntity
            },
            _removeAllTiles: DG.GridLayer.prototype._removeAllTiles,
            _getZoomForUrl: DG.TileLayer.prototype._getZoomForUrl,
            getTileSize: DG.TileLayer.prototype.getTileSize,
            _isValidTile: DG.GridLayer.prototype._isValidTile,
            _wrapCoords: DG.GridLayer.prototype._wrapCoords,
            _resetView: DG.GridLayer.prototype._resetView,
            _resetGrid: DG.GridLayer.prototype._resetGrid,
            _invalidateAll: DG.GridLayer.prototype._invalidateAll,
            _pxBoundsToTileRange: DG.GridLayer.prototype._pxBoundsToTileRange,
            _onMoveEnd: function() {
              this._map && !this._map._animatingZoom && this._resetView()
            },
            _onTileLoadStart: function(t) {
              var e = this.getTileSize();
              t.coords.key = e.x + "x" + e.y, this._origin.getTileData(t.coords)
            },
            _enableDispatchMouseEvents: function() {
              this._dispatchMouseEvents = !0
            },
            _disableDispatchMouseEvents: function() {
              this._dispatchMouseEvents = !1
            },
            mapEvents: {
              mousemove: function(t) {
                this._fireMetalayerEvent("mousemove", t)
              },
              mouseover: function(t) {
                this._fireMetalayerEvent("mouseover", t)
              },
              mouseout: function(t) {
                this._fireMetalayerEvent("mouseout", t), this._currentTileKey = ""
              },
              click: function(i) {
                var t = this.getTileSize(),
                  e = this._map.mouseEventToLayerPoint(i.originalEvent),
                  o = this._map.getPixelOrigin().add(e),
                  n = o.unscaleBy(t).floor(),
                  r = DG.point(o.x % t.x, o.y % t.y);
                n.z = this._getZoomForUrl(), n.key = t.x + "x" + t.y;

                function s(t) {
                  l._currentTileData = t, l._currentTileKey = a, l._lastEntity = l._getHoveredObject(r), l._mouseDown = !1, l._lastEntity && (i.entity = l._lastEntity, l._fireMetalayerEvent("click", i))
                }
                var a = this._origin.getTileKey(n),
                  l = this;
                this._origin.getTileData(n, function(t) {
                  t ? s(t) : l._origin._requests[a] && (DG.DomEvent.stop(i), l._origin._requests[a].then(function() {
                    if (delete i.originalEvent._stopped, s(l._origin._tileStorage[a]), !i.originalEvent._stopped)
                      for (var t = i.eventTargets, e = i.eventTargetsMapIndex; e < t.length; e++)
                        if (t[e].fire("click", i, !0), i.originalEvent._stopped || t[e].options.nonBubblingEvents && -1 !== L.Util.indexOf(t[e].options.nonBubblingEvents, "click")) return
                  }))
                })
              },
              dblclick: function(t) {
                this._fireMetalayerEvent("dblclick", t)
              },
              mousedown: function(t) {
                this._mouseDown = !0, this._fireMetalayerEvent("mousedown", t)
              },
              contextmenu: function(t) {
                this._fireMetalayerEvent("contextmenu", t)
              }
            },
            _fireMetalayerEvent: function(t, e) {
              if (e.entity && this._dispatchMouseEvents) {
                this.fire(t, {
                  meta: e.entity,
                  latlng: this._map.mouseEventToLatLng(e.originalEvent)
                });
                var i = "mousedown" === t || this._mouseDown && "mousemove" === t;
                "layer" !== this.options.eventBubbling || i || DG.DomEvent.stop(e)
              }
            },
            _getHoveredObject: function(t) {
              if (this._currentTileData)
                for (var e = 0; e < this._currentTileData.length; e++)
                  if (DG.PolyUtil.inside(t, this._currentTileData[e].geometry, this._pointReduceHelper)) return this._currentTileData[e]
            },
            _pointReduceHelper: function(t) {
              return [t.x, t.y]
            },
            _setView: function(t, e, i, o) {
              var n = Math.round(e),
                r = this._tileZoom !== n;
              !o && r && (this._tileZoom = n, this._resetGrid())
            }
          }), DG.Meta.layer = function(t, e) {
            return new DG.Meta.Layer(t, e)
          }, DG.Meta.Origin = DG.Class.extend({
            options: {
              subdomains: "0123",
              dataFilter: null
            },
            _url: !1,
            initialize: function(t, e) {
              this._url = t, this._requests = {}, this._tileStorage = {}, "string" == typeof(e = DG.setOptions(this, e)).subdomains && (e.subdomains = e.subdomains.split(""))
            },
            getTileData: function(e, t) {
              var i = this.getTileKey(e),
                o = this,
                n = "function" == typeof t ? t : function() {};
              if (void 0 === this._tileStorage[i] && void 0 === this._requests[i]) {
                this._tileStorage[i] = !1;
                var r = this._requests[i] = this._requestData(e).then(function(t) {
                  return o._requests[i] !== r ? void n(!1) : (o.setTileData(i, o.options.dataFilter ? o.options.dataFilter(t, e) : t), delete o._requests[i], void n(o._tileStorage[i]))
                })
              } else n(this._tileStorage[i])
            },
            setTileData: function(e, t) {
              return "string" != typeof e && (e = this.getTileKey(e)), t.forEach(function(t) {
                t.geometry.constructor !== Object && (t.geometry = DG.Wkt.toGeoJSON(t.geometry)), this._tileStorage[e] || (this._tileStorage[e] = []), this._tileStorage[e].push(t)
              }, this), this
            },
            flush: function() {
              return this._tileStorage = {}, Object.keys(this._requests).forEach(function(t) {
                this[t].abort && this[t].abort()
              }, this._requests), this._requests = {}, this
            },
            setURL: function(t, e) {
              return this._url = t, e && this.flush(), this
            },
            getTileKey: function(t) {
              return [t.x, t.y, t.z, t.key].join(":")
            },
            _requestData: function(t) {
              return this._url ? this._performRequest(t) : Promise.resolve([])
            },
            _performRequest: function(t) {
              return DG.ajax(this._prepareURL(t), {
                type: "get",
                dataType: "json"
              })
            },
            _prepareURL: function(t) {
              return DG.Util.template(this._url, {
                x: t.x,
                y: t.y,
                z: t.z,
                s: this._getSubdomain(t)
              })
            },
            _getSubdomain: DG.TileLayer.prototype._getSubdomain
          }), DG.Meta.origin = function(t, e) {
            return new DG.Meta.Origin(t, e)
          }, DG.Map.mergeOptions({
            poi: !0
          }), DG.Poi = DG.Handler.extend({
            options: {
              disableLabel: !1
            },
            initialize: function(t, e) {
              this._map = t, DG.Util.setOptions(this, e);
              var i = DG.config.protocol + (DG.Browser.retina ? DG.config.retinaPoiMetaServer : DG.config.poiMetaServer);
              this._metaLayer = DG.Meta.layer(i, {
                minZoom: DG.config.poiLayerMinZoom,
                maxNativeZoom: 19,
                detectRetina: DG.config.detectRetina,
                eventBubbling: "layer",
                dataFilter: DG.bind(this._processData, this),
                isPoi: !0
              }), this._currentTilesLang = ""
            },
            addHooks: function() {
              this._map.addLayer(this._metaLayer), this.options.disableLabel || (this._labelHelper = DG.label()), this._metaLayer.on(this._layerEventsListeners, this), this._map.on("langchange", this._updateUrl, this), this._map.on("projectchange", this._updateUrl, this), this._map.on("projectleave", this._updateUrl, this)
            },
            removeHooks: function() {
              this._map.removeLayer(this._metaLayer), this.options.disableLabel || (this._map.removeLayer(this._labelHelper), this._labelHelper = null), this._metaLayer.off(this._layerEventsListeners, this), this._map.off("langchange", this._updateUrl, this), this._map.off("projectchange", this._updateUrl, this), this._map.off("projectleave", this._updateUrl, this)
            },
            getMetaLayer: function() {
              return this._metaLayer
            },
            _updateUrl: function() {
              var t = DG.config.protocol + (DG.Browser.retina ? DG.config.retinaPoiMetaServer : DG.config.poiMetaServer),
                e = DG.config.protocol + (DG.Browser.retina ? DG.config.arabicRetinaPoiMetaServer : DG.config.arabicPoiMetaServer),
                i = this._map.getLang(),
                o = this._map.projectDetector && this._map.projectDetector.getProject();
              "" === this._currentTilesLang && "ar" === i && o && "ae" === o.country_code ? (this._currentTilesLang = "ar", this._metaLayer.setUrl(e)) : "ar" !== this._currentTilesLang || "ar" === i && o && "ae" === o.country_code || (this._currentTilesLang = "", this._metaLayer.setUrl(t))
            },
            _processData: function(t, e) {
              var i = e.scaleBy(this._metaLayer.getTileSize()),
                o = DG.bind(this._polygonLngLatToPoints, this, i, e.z);
              return "" === t.responseText ? [] : t.result.poi.map(function(t) {
                var e = void 0 !== t.hovers ? t.hovers : [t.hover];
                return {
                  id: t.id,
                  hint: t.links[0].name,
                  linked: t.links[0],
                  geometry: e.map(DG.Wkt.toGeoJSON)
                }
              }).map(function(t) {
                var e = t.geometry.reduce(function(t, e) {
                  return "Polygon" === e.type ? t.push(o(e.coordinates)) : "MultiPolygon" === e.type && (t = t.concat(e.coordinates.map(o))), t
                }, []);
                return t.geometry = {
                  type: "MultiPolygon",
                  coordinates: e
                }, t
              })
            },
            _polygonLngLatToPoints: function(e, i, t) {
              var o = this._map;
              return t.map(function(t) {
                return t.map(function(t) {
                  return o.project([t[1], t[0]], i).round().subtract(e)
                })
              })
            },
            _layerEventsListeners: {
              mouseover: function(t) {
                this._setCursor("pointer"), t.meta.hint && t.meta.hint.length && !this.options.disableLabel && (this._labelHelper.setPosition(t.latlng).setContent(t.meta.hint).setZIndexOffset(300), this._map.addLayer(this._labelHelper)), this._map.fire("poihover", {
                  latlng: t.latlng,
                  meta: t.meta
                })
              },
              mouseout: function(t) {
                this._setCursor(""), this.options.disableLabel || this._map.removeLayer(this._labelHelper), this._map.fire("poileave", {
                  latlng: t.latlng,
                  meta: t.meta
                })
              },
              mousemove: function(t) {
                this.options.disableLabel || this._labelHelper.setPosition(t.latlng)
              }
            },
            _setCursor: function(t) {
              this._map.getContainer().style.cursor = t
            }
          }), DG.Map.addInitHook("addHandler", "poi", DG.Poi), DG.Map.mergeOptions({
            geoclicker: !1
          }), DG.Geoclicker = DG.Handler.extend({
            clickCount: 0,
            pendingClick: 0,
            timeout: 250,
            initialize: function(t, e) {
              this._map = t, this._controller = new DG.Geoclicker.Controller(t, e)
            },
            addHooks: function() {
              this._toggleEvents(!0), ga(DG.config.gaName + ".send", "event", "Geoclicker", "Enable"), this._map.on("rulerstart", this._pause, this).on("rulerend", this._unpause, this)
            },
            removeHooks: function() {
              this._toggleEvents(), this._map.off("rulerstart", this._pause, this).off("rulerend", this._unpause, this)
            },
            _checkOpenPopup: function() {
              DG.Browser.mobile && this._map._popup && (this._map._popup.options.closeOnClick || this._map.options.closePopupOnClick) && (this.popupWasOpen = !0)
            },
            _pause: function() {
              this._toggleEvents()
            },
            _unpause: function() {
              this.enabled() && this._toggleEvents(!0)
            },
            _toggleEvents: function(t) {
              this._map[t ? "on" : "off"](this._mapEventsListeners, this), this._map.poi && this._map.poi.getMetaLayer()[t ? "on" : "off"]("click", this._onMetaClick, this)
            },
            getController: function() {
              return this._controller
            },
            _onMetaClick: function(t) {
              this.clickCount = 0, clearTimeout(this.pendingClick), this.popupWasOpen = !1, this._mapEventsListeners.click.call(this, t)
            },
            _mapEventsListeners: {
              langchange: function() {
                this._controller.reinvokeHandler()
              },
              popupclose: function(t) {
                this._controller.handlePopupClose(t.popup)
              },
              click: function(t) {
                0 === this.clickCount ? (this.clickCount = 1, this._singleClick(t)) : (this.clickCount = 0, clearTimeout(this.pendingClick), this.popupWasOpen = !1)
              },
              dblclick: function() {
                DG.Browser.ielt9 && (this.clickCount = 0, this.popupWasOpen = !1, clearTimeout(this.pendingClick))
              }
            },
            _singleClick: function(e) {
              var i = this;
              clearTimeout(this.pendingClick), this.pendingClick = setTimeout(function() {
                if (e.meta && (i._checkOpenPopup(), i._map.closePopup()), !i.popupWasOpen) {
                  var t = i._map.getZoom();
                  i._controller.handleClick(e.latlng, t, e.meta)
                }
                i.clickCount = 0, i.popupWasOpen = !1
              }, this.timeout)
            }
          }), DG.Map.addInitHook("addHandler", "geoclicker", DG.Geoclicker), DG.Geoclicker.clampHelper = function(i, o) {
            var n, r, s, a, l, u, c, h, d, t, p = document.createElement.bind(document),
              _ = document.createTextNode.bind(document);
            if (n = p("span"), (t = n.style).position = "absolute", t.whiteSpace = "pre", t.visibility = "hidden", t.margin = "0 18px 8px 0", i.ownerDocument && i.ownerDocument === document) {
              for (a = u = 0, d = !(l = 1), s = i.clientWidth, r = (i.textContent || i.innerText).replace(/\n/g, " "); null !== i.firstChild;) i.removeChild(i.firstChild);
              i.appendChild(n), r.replace(/ |-/g, function(t, e) {
                l !== o && (n.appendChild(_(r.substr(a, e - a))), s < n.clientWidth ? (a = d ? (h = r.substr(a, e + 1 - a), e + 1) : (h = r.substr(a, u - a), u), (c = p("span")).appendChild(_(h)), i.appendChild(c), c.className = "dg-map-geoclicker__clamped-line", d = !0, l++) : d = !1, u = e + 1, n.removeChild(n.firstChild))
              }), i.removeChild(n), (c = p("span")).className = "dg-map-geoclicker__clamped-line dg-map-geoclicker__clamped-line_last", c.appendChild(_(r.substr(a))), i.appendChild(c)
            }
          }, DG.Geoclicker.Provider = {}, DG.Geoclicker.Provider.CatalogApi = DG.Class.extend({
            initialize: function(t) {
              this._map = t;
              var e = DG.config.protocol + DG.config.webApiServer + "/" + DG.config.webApiVersion + "/";
              this._urlGeoSearch = e + "geo/search", this._urlGeoGet = e + "geo/get", this._urlDetails = e + "catalog/branch/get", this._urlFirmsInHouse = e + "catalog/branch/list", this._key = DG.config.geoclickerCatalogApiKey, this._geoFields = DG.config.geoAdditionalFields, this._firmInfoFields = DG.config.firmInfoFields
            },
            getLocations: function(t) {
              var e = t.zoom,
                i = t.latlng,
                o = t.beforeRequest || function() {},
                n = this.getTypesByZoom(e),
                r = i.lng + "," + i.lat;
              return n ? (o(), this.geoSearch(r, n, e).then(DG.bind(function(t) {
                return this._filterResponse(t, n)
              }, this))) : Promise.reject("no type")
            },
            firmsInHouse: function(t, e) {
              var i = {
                building_id: t,
                page: (e = e || {}).page || 1
              };
              return this._performRequest(i, this._urlFirmsInHouse)
            },
            getFirmInfo: function(t) {
              return this._performRequest({
                type: "filial",
                id: t,
                fields: this._firmInfoFields
              }, this._urlDetails)
            },
            geoSearch: function(t, e, i) {
              var o = {
                point: t,
                type: e,
                zoom_level: i,
                fields: this._geoFields
              };
              return this._performRequest(o, this._urlGeoSearch)
            },
            geoGet: function(t) {
              var e = {
                id: t,
                fields: this._geoFields
              };
              return this._performRequest(e, this._urlGeoGet)
            },
            cancelLastRequest: function() {
              this._lastRequest && this._lastRequest.abort()
            },
            getTypesByZoom: function(e) {
              var i = {
                  "adm_div.settlement": 8,
                  "adm_div.city": 8,
                  "adm_div.division": 11,
                  "adm_div.district": 12,
                  street: 14,
                  building: 14,
                  "adm_div.place": 15,
                  poi: 15,
                  attraction: 17
                },
                o = [];
              return Object.keys(i).forEach(function(t) {
                i[t] <= e && o.push(t)
              }), o.length ? o.join(",") : null
            },
            _performRequest: function(t, e) {
              var i = DG.extend({
                  key: this._key
                }, t),
                o = "get";
              return this.cancelLastRequest(), DG.ajax.corsSupport || (o = i.format = "jsonp"), this._lastRequest = DG.ajax(e, {
                type: o,
                data: i,
                timeout: this._timeoutMs,
                withCredentials: !0
              }), this._lastRequest
            },
            _filterResponse: function(t, e) {
              var i, o, n, r, s, a = {};
              if (this._isNotFound(t)) return !1;
              for (i = (r = t.result.items).length - 1; 0 <= i; i--) s = (o = r[i]).type, o.subtype && (s += "." + o.subtype), e && -1 === e.indexOf(s) || (a[s] = o, n = !0);
              return !!n && a
            },
            _isNotFound: function(t) {
              return !(t && (!t.meta || !t.meta.error) && t.result && t.result.items && t.result.items.length)
            }
          }), DG.Geoclicker.Handler = {}, DG.Geoclicker.Handler.Default = DG.Class.extend({
            includes: DG.Locale,
            statics: {
              Dictionary: {}
            },
            _eventHandlers: {},
            initialize: function(t, e, i) {
              this._controller = t, this._view = e, this._map = i
            },
            handle: function() {
              return Promise.resolve({
                tmpl: "popupHeader",
                data: {
                  title: this.t("we_have_not")
                }
              })
            },
            addClickEvent: function() {
              this._view._popup.on("click", this._runEventHandlers, this), this._map.once("popupclose", this._removeClickEvent, this)
            },
            _removeClickEvent: function() {
              this._view._popup.off("click", this._runEventHandlers, this)
            },
            _addEventHandler: function(t, e) {
              this._eventHandlers[t] = e
            },
            _runEventHandlers: function(t) {
              var e = t.originalEvent.target;
              for (var i in this._eventHandlers)
                if (this._eventHandlers.hasOwnProperty(i) && -1 < e.className.indexOf(i)) return DG.DomEvent.preventDefault(t.originalEvent), void this._eventHandlers[i].call(this, e)
            },
            _clearEventHandlers: function() {
              this._eventHandlers = {}
            },
            _getDirectionsUrl: function(t) {
              return DG.Util.template(DG.config.ppnotLink, {
                domain: this._map.projectDetector.getProject().domain,
                projectCode: this._map.projectDetector.getProject().code,
                center: this._map.getCenter().lng + "," + this._map.getCenter().lat,
                zoom: this._map.getZoom(),
                name: encodeURIComponent(t),
                rsType: this._map.projectDetector.getProject().transport ? "bus" : "car",
                point: this._popup._latlng.lng + "," + this._popup._latlng.lat
              })
            },
            _getDrilldown: function(t) {
              var e = [];
              return t.adm_div && (e = t.adm_div.reduce(function(t, e) {
                return e.name && t.push(e.name), t
              }, []).reverse()), e.length && t.address && t.address.postcode && e.push(t.address.postcode), e.join(", ")
            }
          }), DG.Geoclicker.Handler.HandlerExample = DG.Geoclicker.Handler.Default.extend({
            handle: function(t, e) {
              return Promise.resolve({
                tmpl: e + ":<br/>" + t[e].id
              })
            }
          }), DG.Geoclicker.Handler.ApiError = DG.Geoclicker.Handler.Default.extend({
            handle: function() {
              var t = this._view.render({
                tmpl: "popupHeader",
                data: {
                  title: this.t("apiErrorTitle")
                }
              });
              return Promise.resolve({
                header: t,
                tmpl: this.t("apiErrorBody")
              })
            }
          }), DG.Geoclicker.Handler.CityArea = DG.Geoclicker.Handler.Default.extend({
            _polylineStyleDefault: {
              fillColor: "#ff9387",
              color: "#ff9387",
              noClip: !0,
              opacity: 1
            },
            _polylineStyles: {
              11: {
                fillOpacity: .18,
                weight: 1
              },
              12: {
                fillOpacity: .12,
                weight: 1
              },
              13: {
                fillOpacity: .08,
                weight: 2
              },
              18: {
                fillOpacity: 0,
                weight: 3
              }
            },
            handle: function(t, e) {
              return !!t[e] && (this._stylesInited || this._initStyles(), this._geometry && this._map.removeLayer(this._geometry), this._popup = this._view.getPopup(), this._geometryZoomStyle = this._getPolyStyleNum(), this._geometry = DG.Wkt.geoJsonLayer(t[e].geometry.selection, {
                style: this._polylineStyles[this._geometryZoomStyle],
                interactive: !1
              }).addTo(this._map), this._map.on("zoomend", this._updateGeometry, this).once("popupclose", this._clearPopup, this), Promise.resolve(this._fillCityAreaObject(t, e)))
            },
            _fillCityAreaObject: function(t, e) {
              var i = {
                name: this.t("noname"),
                drilldown: "",
                purpose: this.t(e),
                type: e.split(".").join("_")
              };
              return i.drilldown = this._getDrilldown(t[e]), t[e].name && (i.name = t[e].name), {
                tmpl: "cityarea",
                data: i,
                header: this._view.render({
                  tmpl: "popupHeader",
                  data: {
                    title: i.name
                  }
                })
              }
            },
            _initStyles: function() {
              this._stylesInited = !0, Object.keys(this._polylineStyles).forEach(function(t) {
                DG.extend(this._polylineStyles[t], this._polylineStyleDefault)
              }, this)
            },
            _getPolyStyleNum: function() {
              var e = this._map.getZoom();
              return Object.keys(this._polylineStyles).filter(function(t) {
                return e <= t
              })[0] || !1
            },
            _updateGeometry: function() {
              var t = this._getPolyStyleNum();
              t && t !== this._geometryZoomStyle && (this._geometryZoomStyle = t, this._geometry.setStyle(this._polylineStyles[t]))
            },
            _clearPopup: function() {
              this._map.removeLayer(this._geometry).off("zoomend", this._updateGeometry, this)
            }
          }), DG.Geoclicker.Handler.House = DG.Geoclicker.Handler.Default.extend({
            _firmsOnPage: 20,
            _scrollThrottleInterval: 400,
            _scrollHeightReserve: 60,
            options: {
              showBooklet: !0,
              showPhotos: !0,
              showRouteSearch: !0
            },
            handle: function(t) {
              return !!t.building && (this.firmCard = null, this._page = 1, this._houseObject = null, this._firmList = null, this._firmListObject = null, this._firmCardObject = null, this._onScroll = !1, this._isFirmlistOpen = !1, this._id = t.building.id, this._totalPages = 1, this._api = this._controller.getCatalogApi(), this._popup = this._view.getPopup(), this._initedPopupClose = !1, this._directionsUrl = this._getDirectionsUrl(t.building.name), this._firmListLoader = this._view.initLoader(!0), this._houseObject = this._fillHouseObject(t.building), Promise.resolve(this._houseObject))
            },
            _isRouteSearchAllowed: function() {
              var t = this._controller.getMap().projectDetector.getProject();
              return t.transport || t.roads
            },
            _firmCardSetup: function() {
              return {
                render: this._view.renderTemplate,
                lang: this._map.getLang(),
                domain: this._controller.getMap().projectDetector.getProject().domain,
                ajax: DG.bind(this._api.getFirmInfo, this._api),
                timezoneOffset: this._controller.getMap().projectDetector.getProject().timeOffset,
                map: this._map,
                popup: this._popup,
                isMobile: DG.Browser.mobile,
                showEntrance: DG.Entrance,
                gotoUrl: this._directionsUrl,
                onFirmReady: DG.bind(this._onFirmReady, this),
                onToggle: DG.bind(this._popup.resize, this._popup),
                showBooklet: this.options.showBooklet,
                showPhotos: this.options.showPhotos,
                showRouteSearch: this.options.showRouteSearch && this._isRouteSearchAllowed(),
                t: DG.bind(this.t, this)
              }
            },
            _fillFirmCardObject: function(t) {
              var e = this._firmCardSetup();
              return this.firmCard = new FirmCard(t, e), this._initPopupClose(), this.firmCard.getContainer()
            },
            _firmListSetup: function() {
              var t = this._firmCardSetup();
              return DG.extend(t, {
                backBtn: DG.bind(this._showHousePopup, this),
                onFirmClick: DG.bind(this._onFirmListClick, this),
                onShowLess: DG.bind(this._showHousePopup, this),
                pasteLoader: DG.bind(this._pasteLoader, this)
              }), {
                firmCard: t,
                firmlistItemTmpl: "firmlistItem",
                onListReady: DG.bind(this._renderFirmList, this)
              }
            },
            _initShortFirmList: function(t) {
              var e = this._firmListSetup();
              return this._shortFirmList = new FirmCard.List(t, e), this._shortFirmList.renderList()
            },
            _initFirmList: function(t) {
              if (!t) return !1;
              var e = t.result.items,
                i = this._firmListSetup();
              i.firmCard.backBtn = DG.bind(this._showListPopup, this), this._shortFirmList._toggleEventHandlers(!0), this._firmList = new FirmCard.List(e, i), this._firmListObject = this._fillFirmListObject(this._firmList.renderList()), this._clearAndRenderPopup(this._firmListObject)
            },
            _fillFirmListObject: function(t) {
              var e = this;
              return {
                tmpl: t,
                header: this._header,
                footer: this._view.render({
                  tmpl: "popupFooterBtns",
                  data: {
                    btns: [{
                      name: "back",
                      label: this.t("back_button"),
                      icon: !0
                    }]
                  }
                }),
                afterRender: function() {
                  e._initPopupClose(), 1 < e._totalPages && e._firmListLoader && this.tmpl.parentNode.appendChild(e._firmListLoader)
                }
              }
            },
            _onFirmReady: function(t) {
              var e = this;
              t.afterRender = function() {
                var t = e._popup._popupStructure.header.firstChild;
                DG.Browser.ielt9 || 72 < t.offsetHeight && (DG.DomUtil.addClass(t, "dg-popup__header-teaser"), DG.Browser.webkit || DG.Geoclicker.clampHelper(t, 3))
              }, this._clearAndRenderPopup(t)
            },
            _showHousePopup: function() {
              this._popup.off("scroll", this._onScroll), this._clearAndRenderPopup(this._houseObject), this._shortFirmList._toggleEventHandlers()
            },
            _onFirmListClick: function() {
              this._popup.off("scroll", this._onScroll)
            },
            _pasteLoader: function() {
              var t = DG.DomUtil.create("div", "dg-map-geoclicker__preloader-wrapper"),
                e = this._view.initLoader();
              t.insertBefore(e, t.firstChild), t.style.height = this._popup._contentNode.offsetHeight - 1 + "px", t.style.width = this._popup._contentNode.offsetWidth + "px", this._clearAndRenderPopup({
                tmpl: t
              })
            },
            _initPopupClose: function() {
              this._initedPopupClose || (this._controller.getMap().once("popupclose", DG.bind(this._onPopupClose, this)), this._initedPopupClose = !0)
            },
            _showListPopup: function() {
              var t = this._firmListObject;
              this._pasteLoader(), t ? (this._clearAndRenderPopup(t), this._firmList._toggleEventHandlers()) : t = this._api.firmsInHouse(this._id).then(DG.bind(this._initFirmList, this)), this._onScroll || (this._onScroll = DG.Util.throttle(this._handlePopupScroll, this._scrollThrottleInterval, this)), this._popup.on("scroll", this._onScroll)
            },
            _renderFirmList: function() {
              this._isFirmlistOpen || (this._popup.resize(), this._isFirmlistOpen = !0)
            },
            _onPopupClose: function() {
              this._initedPopupClose = !1, this._firmList && (this._firmList.clearList(), this._firmList = null, this._popup.off("scroll", this._onScroll)), this._firmId = null, this.firmCard && (this.firmCard._toggleEventHandlers(!0), this.firmCard = null), this._firmListLoader = null, this._page = 1, this._clearEventHandlers()
            },
            _initShowMore: function() {
              this._popup.findElement(".dg-popup__button_name_all") && this._addEventHandler("dg-popup__button_name_all", DG.bind(this._showListPopup, this))
            },
            _clearAndRenderPopup: function(t) {
              this._clearEventHandlers(), this._popup.clear("header", "footer"), this._view.renderPopup(t)
            },
            _appendFirmList: function(t) {
              this._firmList.addFirms(t.result.items), this._popup._updateScrollPosition()
            },
            _handlePopupScroll: function(t) {
              var e = t.originalEvent.target || t.target._scroller;
              DG.DomEvent.stop(t), this._totalPages <= 1 || e && e.scrollHeight <= e.scrollTop + e.offsetHeight + this._scrollHeightReserve && this._handlePaging()
            },
            _handlePaging: function() {
              if (this._page++, this._totalPages && this._page <= this._totalPages && this._api.firmsInHouse(this._id, {
                  page: this._page
                }).then(DG.bind(this._appendFirmList, this)), this._page === this._totalPages) {
                var t = this._firmListLoader;
                t && t.parentNode && t.parentNode.removeChild(t), this._popup.off("scroll", this._onScroll)
              }
            }
          }), DG.Geoclicker.Handler.House.include({
            _getAddressString: function(t) {
              return t.address && t.address.components ? t.address.components.filter(function(t) {
                return "street_number" === t.type
              }).map(function(t) {
                return t.street + ", " + t.number
              }).join(" / ") : ""
            },
            _fillBody: function(t) {
              var e = {},
                i = DG.DomUtil.create("div", "dg-building-callout__body"),
                o = t.links && t.links.branches,
                n = this._getDrilldown(t);
              return t.building_name ? e.address = {
                header: this._getAddressString(t),
                drilldown: n
              } : n && (e.address = {
                drilldown: n
              }), e.purpose = t.purpose_name + (t.floors ? ", " + this.t("n_floors", t.floors.ground_count) : ""), o && 0 < o.count && (this._totalPages = Math.ceil(t.links.branches.count / this._firmsOnPage)), t.links && t.links.attractions && t.links.attractions.length && (e.attractions = t.links.attractions.reduce(function(t, e) {
                return e.name && t.push(e.name), t
              }, [])), i.innerHTML = this._view.render({
                tmpl: "house",
                data: e
              }), o && o.items && i.appendChild(this._initShortFirmList(o.items)), i
            },
            _fillHeader: function(t) {
              var e = {};
              return t.building_name ? e.title = t.building_name : t.address && t.address.components ? e.title = this._getAddressString(t) : e.title = t.purpose_name, this._header = this._view.render({
                tmpl: "popupHeader",
                data: e
              }), this._header
            },
            _fillFooter: function(t) {
              var e = [],
                i = t.links && t.links.branches;
              return i && i.items && i.items.length && i.count > i.items.length && e.push(this._getShowAllData(i.count)), this._isRouteSearchAllowed() && e.push({
                name: "goto",
                label: this.t("go_to"),
                icon: !0,
                href: this._directionsUrl
              }), this._view.render({
                tmpl: "popupFooterBtns",
                data: {
                  btns: e
                }
              })
            },
            _getShowAllData: function(t) {
              return {
                name: "all",
                label: this.t("show_organization_in_building", t)
              }
            },
            _fillHouseObject: function(t) {
              var e = this;
              return {
                header: this._fillHeader(t),
                tmpl: this._fillBody(t),
                footer: this._fillFooter(t),
                afterRender: function() {
                  e._initShowMore(), e._initPopupClose()
                }
              }
            }
          }), DG.Geoclicker.Handler.Poi = DG.Geoclicker.Handler.House.extend({
            handle: function(t) {
              if (!t.poi) return !1;
              if (this.firmCard = null, this._page = 1, this._houseObject = null, this._firmList = null, this._firmListObject = null, this._firmCardObject = null, this._onScroll = !1, this._isFirmlistOpen = !1, this._id = t.poi.reference.id, this._totalPages = 1, this._api = this._controller.getCatalogApi(), this._popup = this._view.getPopup(), this._initedPopupClose = !1, this._directionsUrl = this._getDirectionsUrl(t.poi.reference.name), this._firmListLoader = this._view.initLoader(!0), "building" !== t.poi.reference.type) return "branch" === t.poi.reference.type && (this._fillFirmCardObject(t.poi.reference.id), !0);
              var e = this;
              return e._api.geoGet(t.poi.reference.id).then(function(t) {
                return e._houseObject = e._fillHouseObject(t.result.items[0]), Promise.resolve(e._houseObject)
              })
            }
          }), DG.Geoclicker.Handler.Sight = DG.Geoclicker.Handler.Default.extend({
            handle: function(t) {
              return !!t.attraction && (this._popup = this._view.getPopup(), this._initedPopupClose = !1, Promise.resolve(this._fillSightObject(t)))
            },
            _fillSightObject: function(t) {
              var e = t.attraction,
                i = {},
                o = this,
                n = {
                  btns: [{
                    name: "goto",
                    label: this.t("go_to"),
                    icon: !0
                  }]
                };
              return e.name ? (i.buildingName = e.name, i.purpose = e.subtype_name) : i.buildingName = e.subtype_name, i.description = e.description, i.drillDown = this._getDrilldown(e), this._checkDescFieldHeight(i.description) && (i.showMoreText = this.t("show_more_about_sight")), n.btns[0].href = this._getDirectionsUrl(i.buildingName), {
                tmpl: "sight",
                data: i,
                header: this._view.render({
                  tmpl: "popupHeader",
                  data: {
                    title: i.buildingName
                  }
                }),
                footer: this._view.render({
                  tmpl: "popupFooterBtns",
                  data: n
                }),
                afterRender: function() {
                  o._needShowMore && o._initShowMore(), o._initPopupClose()
                }
              }
            },
            _initPopupClose: function() {
              this._initedPopupClose || (this._controller.getMap().once("popupclose", DG.bind(this._clearPopup, this)), this._initedPopupClose = !0)
            },
            _clearPopup: function() {
              this._initedPopupClose = !1, this._clearEventHandlers()
            },
            _showMoreText: function() {
              this._desc.style.maxHeight = "100%", this._link.parentNode.removeChild(this._link), this._popup.resize()
            },
            _initShowMore: function() {
              this._link = this._popup.findElement(".dg-map-geoclicker__show-more-sights-link"), this._desc = this._popup.findElement(".dg-map-geoclicker__sight-description"), this._link && this._desc && this._addEventHandler("dg-map-geoclicker__show-more-sights-link", DG.bind(this._showMoreText, this))
            },
            _checkDescFieldHeight: function(t) {
              var e, i = DG.DomUtil.create("div", "");
              return i.style.visibility = "hidden", i.innerHTML = t, this._popup._contentNode.appendChild(i), e = i.offsetHeight, this._popup._contentNode.removeChild(i), this._needShowMore = 40 < e, this._needShowMore
            }
          }), DG.Geoclicker.View = DG.Class.extend({
            initialize: function(t, e) {
              this._map = t, this._popup = DG.popup({
                maxHeight: 300,
                minHeight: 50,
                maxWidth: 385,
                minWidth: 310,
                sprawling: !0,
                closeOnClick: !0
              }), e && DG.Util.setOptions(this, e)
            },
            initLoader: function(t) {
              var e = document.createElement("div");
              return e.innerHTML = DG.dust("DGGeoclicker/loader", {
                small: t,
                anim: this._detectCssAnimation()
              }), e.firstChild
            },
            showPopup: function(t, e) {
              this._popup.setContent(e).setLatLng(t).openOn(this._map)
            },
            render: function(t) {
              var e, i = {};
              return (t = t || {}).tmpl = t.tmpl || "", e = t.data ? this.renderTemplate(t.tmpl, t.data) : t.tmpl, t.beforeRender && t.beforeRender(), t.popup && (t.header && (i.header = t.header), t.footer && (i.footer = t.footer), i.body = e, this._popup.setContent(i)), t.afterRender && t.afterRender(), e
            },
            renderTemplate: function(t, e) {
              return DG.dust("DGGeoclicker/" + t, e)
            },
            renderPopup: function(t) {
              return t.popup = !0, this.render(t)
            },
            getPopup: function() {
              return this._popup
            },
            _detectCssAnimation: function() {
              var t = !1,
                e = "Webkit Moz O ms Khtml".split(" "),
                i = document.createElement("div");
              if (i.style.animationName && (t = !0), !1 === t)
                for (var o = 0; o < e.length; o++)
                  if (void 0 !== i.style[e[o] + "AnimationName"]) {
                    t = !0;
                    break
                  } return t
            }
          }), DG.Geoclicker.Controller = DG.Class.extend({
            options: {
              handlersSequence: {
                poi: DG.Geoclicker.Handler.Poi,
                attraction: DG.Geoclicker.Handler.Sight,
                building: DG.Geoclicker.Handler.House,
                street: DG.Geoclicker.Handler.CityArea,
                "adm_div.place": DG.Geoclicker.Handler.CityArea,
                "adm_div.district": DG.Geoclicker.Handler.CityArea,
                "adm_div.division": DG.Geoclicker.Handler.CityArea,
                "adm_div.settlement": DG.Geoclicker.Handler.CityArea,
                "adm_div.city": DG.Geoclicker.Handler.CityArea,
                default: DG.Geoclicker.Handler.Default,
                apiError: DG.Geoclicker.Handler.ApiError
              }
            },
            initialize: function(t, e) {
              this._options = e, this._handlers = {}, this._catalogApi = new DG.Geoclicker.Provider.CatalogApi(t), this._map = t, this._view = new DG.Geoclicker.View(t), this._renderHandlerResult = DG.bind(this._renderHandlerResult, this), this._lastHandleClickArguments = null
            },
            handlePopupClose: function(t) {
              t === this._view.getPopup() && (this._lastHandleClickArguments = null, this._catalogApi.cancelLastRequest())
            },
            handleClick: function(e, t, i) {
              function o() {
                var t = n._view.initLoader();
                n._view._popup.clear(), n._view.showPopup(e, t), n._lastHandleClickArguments = r
              }
              var n = this,
                r = Array.prototype.slice.call(arguments, 0);
              if (ga(DG.config.gaName + ".send", "event", "Geoclicker", "Use"), i && i.linked && "sight" != i.linked.type && "attraction" != i.linked.type) {
                if ("branch" != i.linked.type && "building" != i.linked.type) return;
                o(), n.handleResponse({
                  poi: {
                    reference: i.linked
                  }
                })
              } else this._catalogApi.getLocations({
                latlng: e,
                zoom: t,
                beforeRequest: o
              }).then(function(t) {
                n.handleResponse(t)
              }, function(t) {
                n.handleResponse(t)
              })
            },
            handleResponse: function(t) {
              var e;
              if (t) {
                if ("no type" !== t) {
                  if ("aborted" === t) return void this._runHandler("apiError");
                  for (e = this.findHandler(t); e;) {
                    if (this._runHandler(e, t)) return;
                    delete t[e], e = this.findHandler(t)
                  }
                  this._runHandler("default")
                }
              } else this._runHandler("default")
            },
            findHandler: function(t) {
              for (var e in this.options.handlersSequence)
                if (t[e]) return e;
              return null
            },
            getCatalogApi: function() {
              return this._catalogApi
            },
            getMap: function() {
              return this._map
            },
            reinvokeHandler: function() {
              this._lastHandleClickArguments && this.handleClick.apply(this, this._lastHandleClickArguments)
            },
            _runHandler: function(t, e) {
              e = e || {}, this._initHandlerOnce(t), this._handlers[t].addClickEvent();
              var i = this._handlers[t].handle(e, t);
              return i && i.then ? i.then(this._renderHandlerResult) : i
            },
            _renderHandlerResult: function(t) {
              this._view.renderPopup(t)
            },
            _initHandlerOnce: function(t) {
              this._handlers[t] || (this._handlers[t] = new this.options.handlersSequence[t](this, this._view, this._map, this._options))
            }
          }), DG.Geoclicker.Handler.Default.Dictionary.it = DG.extend({
            apiErrorTitle: "Oh oh, c'è&nbsp;un&nbsp;errore",
            apiErrorBody: "I nostri server si rifiutano di rispondere. Stiamo facendo del nostro meglio per convincerli a&nbsp;comportarsi bene. Ritorna tra qualche minuto.",
            we_have_not: "Non disponiamo ancora di informazioni su questo posto",
            noname: "Nome non indicato",
            "adm_div.place": "Luogo",
            "adm_div.division": "Zona",
            "adm_div.settlement": "Comune",
            street: "Via",
            "adm_div.district": "Municipalità",
            "adm_div.city": "Сittà",
            go_to: "Come arrivare",
            show_organization_in_building: ["{n} azienda in tutto", "{n} aziende in tutto"],
            show_more_about_sight: "Maggiori informazioni",
            back_button: "Indietro",
            n_floors: ["{n} piano", "{n} piani"]
          }, DG.Dictionary.it), DG.Geoclicker.Handler.Default.Dictionary.ru = DG.extend({
            apiErrorTitle: "Ошибочка вышла",
            apiErrorBody: "Наши серверы отказываются отвечать. Мы уже прикладываем все силы, чтобы вразумить их. Возвращайтесь к&nbsp;нам через&nbsp;несколько минут.",
            we_have_not: "Это место мы ещё не успели изучить",
            noname: "Без названия",
            "adm_div.place": "Место",
            "adm_div.division": "Округ",
            "adm_div.settlement": "Населенный пункт",
            street: "Улица",
            "adm_div.district": "Район",
            "adm_div.city": "Город",
            go_to: "Проехать сюда",
            show_organization_in_building: ["Всего {n} организация", "Всего {n} организации", "Всего {n} организаций"],
            show_more_about_sight: "Подробнее",
            back_button: "Назад",
            n_floors: ["{n} этаж", "{n} этажа", "{n} этажей"]
          }, DG.Dictionary.ru), DG.Geoclicker.Handler.Default.Dictionary.en = DG.extend({
            apiErrorTitle: "Oops! Error detected.",
            apiErrorBody: "Our servers are not responding. We are doing our best to straighten them out. Please return to us in a few minutes.",
            we_have_not: "We haven't collected info about this place yet",
            noname: "No name",
            "adm_div.place": "Place",
            "adm_div.division": "Area",
            "adm_div.settlement": "Village",
            street: "Street",
            "adm_div.district": "District",
            "adm_div.city": "City",
            go_to: "Directions to here",
            show_organization_in_building: ["{n} organization total", "{n} organizations total"],
            back_button: "Back",
            show_more_about_sight: "More information",
            n_floors: ["{n} floor", "{n} floors"]
          }, DG.Dictionary.en), DG.Geoclicker.Handler.Default.Dictionary.cs = DG.extend({
            apiErrorTitle: "Chybička se&nbsp;vloudila",
            apiErrorBody: "Naše servery odmítají reagovat. Již nyní vynakládáme veškeré úsilí, abychom je přivedli k rozumu. Zkuste akci opakovat za několik minut.",
            we_have_not: "O tomto místě zatím nemáme informace",
            noname: "Bez názvu",
            "adm_div.place": "Místo",
            "adm_div.division": "Správní obvod",
            "adm_div.settlement": "Obec",
            street: "Ulice",
            "adm_div.district": "Městská část",
            "adm_div.city": "Město",
            go_to: "Cesta sem",
            show_organization_in_building: ["Celkem {n} organizace", "Celkem {n} organizace", "Celkem {n} organizací"],
            back_button: "Zpět",
            show_more_about_sight: "Více",
            n_floors: ["{n} patro", "{n} patra", "{n} pater"]
          }, DG.Dictionary.cs), DG.Geoclicker.Handler.Default.Dictionary.es = DG.extend({
            apiErrorTitle: "Vaya, ha ocurrido un error",
            apiErrorBody: "Nuestros servidores se niegan a responder. Ya nos estamos esforzando por hacerlos entrar en razón. Vuelva con nosotros pasados unos minutos.",
            we_have_not: "Todavía no hemos recopilado la información sobre este lugar",
            noname: "Sin nombre",
            "adm_div.place": "Lugar",
            "adm_div.division": "Comuna",
            "adm_div.settlement": "Población",
            street: "Calle",
            "adm_div.district": "Comuna",
            "adm_div.city": "Ciudad",
            go_to: "Ir para allá",
            show_organization_in_building: ["Total {n} organización", "Total {n} organizaciones", "Total {n} organizaciones"],
            show_more_about_sight: "Read more",
            back_button: "Atrás",
            n_floors: ["{n} piso", "{n} pisos"]
          }, DG.Dictionary.es);
          var FirmCard = function(t, e) {
            this._setOptions(e), this._firmContentObject = {}, this._schedule = new FirmCard.Schedule({
              localLang: this.options.lang,
              dict: this.dict
            }), this.render(t)
          };
          FirmCard.prototype = {
            render: function(t) {
              if (t) return t !== this._firmId ? (this._firmContentObject = {}, this._renderCardById(t)) : this._toggleEventHandlers(), this._firmContentObject
            },
            getSchedule: function() {
              return this._schedule
            },
            getContainer: function() {
              return this._container
            },
            _renderCardById: function(i) {
              var o = this;
              this.options.ajax(i).then(function(t) {
                if (!t) return !1;
                var e = t.result.items;
                "undefined" !== e && (o._firmData = e[0], o._convertWebsite(), o._firmId = i, o._renderFirmCard(), o._toggleEventHandlers())
              }, function(t) {
                o._renderError()
              })
            },
            _createFirmContainer: function() {
              var t = document.createElement("div");
              return t.setAttribute("id", "dg-map-firm-full-" + this._firmId), t.setAttribute("class", "dg-map-firm-full"), t
            },
            _getPaymentTypes: function(t) {
              var e = [],
                i = "general_payment_type";
              return t.attribute_groups && t.attribute_groups.forEach(function(t) {
                t.name || t.attributes.forEach(function(t) {
                  t.tag.substring(0, i.length) === i && e.push(t.name)
                })
              }), e
            },
            _groupRubrics: function(t) {
              var e = {
                primary: [],
                additional: []
              };
              return t.rubrics && t.rubrics.length && t.rubrics.forEach(function(t) {
                e[t.kind].push(t)
              }), e
            },
            _convertWebsite: function() {
              this._firmData.contact_groups && this._firmData.contact_groups.forEach(function(t) {
                t.contacts && t.contacts.forEach(function(t) {
                  "website" == t.type && (t.url || (t.url = t.value))
                })
              })
            },
            _renderFirmCard: function() {
              var t, e, i, o, n, r, s, a = this._firmData,
                l = this._container = this._createFirmContainer();
              e = this._schedule.transform(a.schedule, {
                zoneOffset: this.options.timezoneOffset,
                apiLang: this.options.lang,
                localLang: this.options.lang
              }), i = this._schedule.forecast(e), r = this._getPaymentTypes(a), s = this._groupRubrics(a), t = this._buildFirmCardBody(this._getConfigFirmCardBody(a, e, i, r, s)), o = this._fillHeaderLinks(), n = this._fillFooterButtons(), this._firmContentObject.header = this.options.render("firmCardHeader", {
                firmName: a.name,
                links: o
              }), l.innerHTML = t, this._firmContentObject.tmpl = l, n.length && (this._footerContainer = document.createElement("div"), this._footerContainer.innerHTML = this.options.render("popupFooterBtns", {
                btns: n
              }), this._firmContentObject.footer = this._footerContainer), this.options.onFirmReady && this.options.onFirmReady(this._firmContentObject)
            },
            _renderError: function() {
              this._firmContentObject.header = this.options.render("popupHeader", {
                title: this.options.t("apiErrorTitle")
              }), this._firmContentObject.tmpl = this.options.t("apiErrorBody"), this.options.onFirmReady && this.options.onFirmReady(this._firmContentObject)
            },
            _getConfigFirmCardBody: function(t, e, i, o, n) {
              return [{
                tmpl: "firmCardAddr",
                data: {
                  address: t.address_name,
                  comment: t.address_comment
                }
              }, {
                tmpl: "firmCardContacts",
                data: {
                  groups: t.contact_groups
                }
              }, {
                tmpl: "firmCardSchedule",
                data: {
                  schedule: e,
                  forecast: i
                }
              }, {
                tmpl: "frimCardPayments",
                data: {
                  payments: o
                }
              }, {
                tmpl: "firmCardRubric",
                data: {
                  rubrics: n
                }
              }]
            },
            _buildFirmCardBody: function(t) {
              var i = this;
              return t.reduce(function(t, e) {
                return t + i.options.render(e.tmpl, e.data)
              }, "")
            },
            _fillFooterButtons: function() {
              var t = [];
              return this.options.backBtn && t.push({
                name: "firm-card-back",
                label: this.dict.t(this.options.lang, "btnBack"),
                icon: !0
              }), this.options.showRouteSearch && t.push({
                name: "goto",
                label: this.dict.t(this.options.lang, "btnFindWay"),
                icon: !0,
                href: this.options.gotoUrl
              }), this._firmData.links && this._firmData.links.entrances && this.options.showEntrance && t.push({
                name: "show-entrance",
                label: this.dict.t(this.options.lang, "btnEntrance"),
                icon: !0
              }), t
            },
            _fillHeaderLinks: function() {
              var e, t, i = [],
                o = this._firmData.reviews;
              this._firmData.external_content && this._firmData.external_content.forEach(function(t) {
                t && "booklet" == t.type && (e = t)
              }), o && o.is_reviewable && (i.push({
                name: "flamp_stars",
                width: 20 * o.rating
              }), i.push({
                name: "flamp_reviews",
                label: this.dict.t(this.options.lang, "linkReviews", o.review_count ? o.review_count : 0),
                href: FirmCard.DataHelper.getFlampUrl(this._firmId)
              }));
              for (var n, r = this._firmData.external_content, s = 0; s < r.length; s++)
                if ("photo_album" == r[s].type && "common" == r[s].subtype) {
                  n = r[s];
                  break
                } return !this.options.isMobile && n && n.count && this.options.showPhotos && (t = L.Util.template(DG.config.photosLink, {
                id: this._firmId,
                domain: this.options.domain
              }), i.push({
                name: "photos",
                href: t,
                label: this.dict.t(this.options.lang, "linkPhoto", n.count)
              })), !this.options.isMobile && e && e.url && this.options.showBooklet && i.push({
                name: "booklet",
                href: e.url,
                label: this.dict.t(this.options.lang, "linkBooklet")
              }), i
            },
            _events: {
              "dg-popup__button_name_firm-card-back": function() {
                this.options.backBtn(), this._toggleEventHandlers(!0)
              },
              "dg-popup__button_name_show-entrance": function() {
                var t = new this.options.showEntrance({
                  vectors: this._firmData.links.entrances[0].geometry.vectors
                });
                t.addTo(this.options.map), t.fitBounds(), this._toggleEventHandlers(!0)
              },
              "dg-schedule__today": function() {
                this._onToggleSchedule()
              }
            },
            _toggleEventHandlers: function(t) {
              this.options.popup[t ? "off" : "on"]("click", this._onClick, this), this.options.map[t ? "off" : "on"]("popupclose", this._onClose, this)
            },
            _onClick: function(t) {
              var e = t.originalEvent.target;
              for (var i in this._events)
                if (this._events.hasOwnProperty(i) && -1 < e.className.indexOf(i)) return DG.DomEvent.preventDefault(t.originalEvent), void this._events[i].call(this, e)
            },
            _onClose: function(t) {
              this._toggleEventHandlers(!0)
            },
            _onToggleSchedule: function() {
              var t = this._container.querySelector(".dg-schedule__table"),
                e = this._container.querySelector(".dg-schedule__now"),
                i = this._container.querySelector(".dg-schedule__today"),
                o = " dg-schedule__today_shown_true";
              t && ("block" === t.style.display ? (t.style.display = "none", e.style.display = "block", i.className = i.className.replace(o, "")) : (e.style.display = "none", t.style.display = "block", i.className += o), this.options.onToggle && this.options.onToggle())
            },
            _setOptions: function(t) {
              var e;
              t = t || {};
              for (e in (this.options = t).lang = t.lang || "ru", t) t.hasOwnProperty(e) && (this.options[e] = t[e])
            },
            _hasTouch: function() {
              return "ontouchstart" in window || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints
            }
          }, FirmCard.DataHelper = {
            payMethods: ["americanexpress", "cash", "dinersclub", "goldcrown", "internet", "mastercard", "noncash", "visa"],
            _msgs: {},
            getFlampUrl: function(t) {
              return DG.config.flampUrl.concat(t, "?", DG.config.flampGoogleAnalytics)
            },
            msg: function(t) {
              return this._msgs.hasOwnProperty(t) ? this._msgs[t] : (console && console.log("Cant't find translation for '" + t + "'."), t.toString().replace("_", " "))
            },
            getProjectTime: function(t, e) {
              var i, o;
              return i = e ? new Date(e) : new Date, t ? (o = i.getTime() + 6e4 * i.getTimezoneOffset(), new Date(o + 6e4 * t)) : i
            }
          }, FirmCard.List = function(t, e) {
            this._firms = {}, this._setOptions(e), this._container = e && e.container || document.createElement("ul"), this._container.setAttribute("class", "dg-building-callout__list"), this._eventHandlersInited = !1, this._firmCard = this._createFirm(), this.renderList(t)
          }, FirmCard.List.prototype = {
            renderList: function(t) {
              return t && (this._toggleEventHandlers(), this.addFirms(t)), this.options.onListReady && this.options.onListReady(this._container), this._container
            },
            _processFirms: function(t, e) {
              if (t) {
                var i = "_" + e + "Firm";
                if (this._isArray(t))
                  for (var o = 0, n = t.length; o < n; o++) this[i](t[o]);
                else this[i](t)
              }
            },
            addFirms: function(t) {
              this._processFirms(t, "add")
            },
            removeFirms: function(t) {
              this._processFirms(t, "remove")
            },
            setLang: function(t) {
              this.options.firmCard.lang = t
            },
            getLang: function() {
              return this.options.firmCard.lang
            },
            getContainer: function() {
              return this._container
            },
            clearList: function() {
              this._firms = {}, this._toggleEventHandlers(!0), this._clearContainer()
            },
            _removeFirm: function(t) {
              return !!this._firms[t] && (this._container.removeChild(this._firms[t]), void delete this._firms[t])
            },
            _addFirm: function(t) {
              var e, i, o, n = this.options.firmlistItemTmpl;
              (i = {
                name: t.name,
                id: t.id.split("_").slice(0, 1)
              }).id in this._firms || (e = this._createListItem(), o = n ? this.options.firmCard.render(n, {
                firm: i
              }) : i.name, e.insertAdjacentHTML("beforeend", o), this._firms[i.id] = e, this._container.appendChild(e))
            },
            _createListItem: function() {
              var t = document.createElement("li");
              return t.setAttribute("class", "dg-building-callout__list-item"), t
            },
            _isArray: function(t) {
              return "[object Array]" === {}.toString.call(t)
            },
            _createFirm: function(t) {
              return new FirmCard(t, this.options.firmCard)
            },
            _isEmptyObj: function(t) {
              for (var e in t)
                if (t.hasOwnProperty(e)) return !1;
              return !0
            },
            _events: {
              "dg-popup__link": function(t) {
                var e = this._firmCard.render(t.id);
                this.options.firmCard[this._isEmptyObj(e) ? "pasteLoader" : "onFirmReady"](e), this.options.firmCard.onFirmClick && this.options.firmCard.onFirmClick(), this._toggleEventHandlers(!0)
              },
              "dg-building-callout__list-item": function(t) {
                t = t.children[0], this._events["dg-popup__link"].call(this, t)
              },
              "dg-popup__button_name_back": function() {
                this.options.firmCard.onShowLess(), this._toggleEventHandlers(!0)
              }
            },
            _toggleEventHandlers: function(t) {
              this.options.firmCard.popup[t ? "off" : "on"]("click", this._onClick, this)
            },
            _onClick: function(t) {
              var e = t.originalEvent.target;
              for (var i in this._events)
                if (this._events.hasOwnProperty(i) && -1 < e.className.indexOf(i)) return DG.DomEvent.preventDefault(t.originalEvent), void this._events[i].call(this, e)
            },
            _clearContainer: function() {
              for (var t = this._container; t.hasChildNodes();) t.removeChild(t.firstChild)
            },
            _setOptions: function(t) {
              for (var e in t = t || {}, this.options = t, this.options.firmCard || (this.options.firmCard = {}), t.firmCard.lang || (this.options.firmCard.lang = "ru"), t) t.hasOwnProperty(e) && (this.options[e] = t[e])
            }
          }, FirmCard.Schedule = function(t) {
            return t = t || {}, this.localLang = t.localLang || "ru", this.dict = t.dict, this
          }, FirmCard.Schedule.prototype = {
            setLang: function(t) {
              return this.localLang = t || "ru", this
            },
            transform: function(v, t) {
              function y(t) {
                return t.substr(0, 2)
              }

              function b(t) {
                return t.substr(3, 2)
              }

              function C(t) {
                var e = +y(t) % 24 + "";
                return 1 === e.length && (e = "0" + e), e + ":" + b(t)
              }

              function w(t) {
                return (t + 70) % 7
              }

              function x(t, e) {
                if (null != t) return null == e ? t[t.length - 1] : slice.call(t, Math.max(t.length - e, 0))
              }

              function u(t, e) {
                if (t === e) return !0;
                if (!(t instanceof Object && e instanceof Object)) return !1;
                if (t.constructor !== e.constructor) return !1;
                for (var i in t)
                  if (t.hasOwnProperty(i)) {
                    if (!e.hasOwnProperty(i)) return !1;
                    if (t[i] !== e[i]) {
                      if ("object" != typeof t[i]) return !1;
                      if (!u(t[i], e[i])) return !1
                    }
                  } for (i in e)
                  if (e.hasOwnProperty(i) && !t.hasOwnProperty(i)) return !1;
                return !0
              }

              function k(t, o) {
                return D(t.map(function(t, e, i) {
                  return {
                    value: t,
                    index: e,
                    criteria: o.call(this, t, e, i)
                  }
                }).sort(function(t, e) {
                  var i = t.criteria,
                    o = e.criteria;
                  if (i !== o) {
                    if (o < i || void 0 === i) return 1;
                    if (i < o || void 0 === o) return -1
                  }
                  return t.index - e.index
                }), "value")
              }

              function D(t, e) {
                var i, o = [];
                for (i = 0; i < t.length; ++i) o[i] = t[i][e];
                return o
              }

              function L(t) {
                var e, i, o, n, r = [];
                if (!t || !t.working_hours) return [];
                for (var s = 0; s < t.working_hours.length; s++) e = t.working_hours[s].from, o = y(i = t.working_hours[s].to) - y(e), n = b(i) - b(e), (o < 0 || 0 == o && n <= 0) && (i = +y(i) + 24 + ":" + b(i)), r[2 * s] = {
                  time: e,
                  type: "open"
                }, r[2 * s + 1] = {
                  time: i,
                  type: t.working_hours.length - 1 === s ? "close" : "lunch"
                };
                return r
              }

              function z(t, e, i) {
                if (1 === e && r < t) return S(O, "tommorow");
                if (1 < e) switch (i) {
                  case 0:
                    return S(O, "nextSun");
                  case 1:
                    return S(O, "nextMon");
                  case 2:
                    return S(O, "nextTue");
                  case 3:
                    return S(O, "nextWed");
                  case 4:
                    return S(O, "nextThu");
                  case 5:
                    return S(O, "nextFri");
                  case 6:
                    return S(O, "nextSat")
                }
              }

              function n(n, r) {
                var i, t, s = {
                    dayList: [],
                    lunch: []
                  },
                  o = [];
                if (n && n.working_hours && n.working_hours.length) {
                  (i = D(L(n), "time")).forEach(function(t, e) {
                    0 === e ? s.from = C(t) : e === i.length - 1 ? s.to = C(t) : o.push(C(t))
                  });
                  for (var e = 0; e < o.length; e += 2) s.lunch.push({
                    from: o[e],
                    to: o[e + 1],
                    lunchStr: (t = S(O, "lunch"), t.charAt(0).toUpperCase() + t.slice(1))
                  });
                  "00:00" == s.from && "00:00" == s.to && (s.to = "24:00"), n.round_the_clock && (s.alltime = !0, s.alltimeStr = S(O, "worksAroundTheClock"))
                } else s.holiday = !0;
                var a = [0, 0, 0, 0, 0, 0, 0],
                  l = 0;
                return M.forEach(function(t, e) {
                  if (u(r[t], n) || !r[t] && null === n) s.dayList.push(c[e]), a[w(e + d)] = 1, l++;
                  else {
                    if (2 < l) {
                      for (var i = s.dayList.pop(), o = 1; o < l - 1; o++) s.dayList.pop();
                      s.dayList[s.dayList.length - 1] += " — " + i
                    }
                    l = 0
                  }
                }), s.budni = u(h, a), s.everyday = 1 === Math.min.apply(Math, a), s.holiday && (s.holidayStr = S(O, "restDay", s.dayList.length).slice(2)), s.dayList = s.dayList.join(", "), s.dayList = s.dayList.charAt(0).toUpperCase() + s.dayList.slice(1), s
              }
              if (v) {
                for (var P, E, T, e = (t = t || {}).zoneOffset || 0, G = {}, A = t.now || FirmCard.DataHelper.getProjectTime(e).getTime(), M = [], l = [], c = [], i = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], o = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"], O = t.localLang || this.localLang, h = t.localWorkingDays || [0, 1, 1, 1, 1, 1, 0], d = t.firstdayOffset || 1, r = t.minHoursToDisplayClosure || 4, S = function(t, e) {
                    var i = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
                    return function() {
                      return t.apply(e, i || arguments)
                    }
                  }(this.dict.t, this.dict), s = 0; s < 7; s++) M[s] = i[s], l[s] = this.dict.t(O, i[s].toLowerCase()), c[s] = this.dict.t(O, o[s]);
                P = i[w(new Date(A).getDay() - d)],
                  function(t) {
                    var e, i, o, n, r, s, a = [];
                    G.now = {}, (i = function(t) {
                      for (var e, o = [], i = [], n = M.indexOf(P), r = 0; r < 7; r++) e = w(n + r), L(t[M[e]]).forEach(function(t) {
                        var e = new Date(A);
                        e.setDate(e.getDate() + r), e.setHours(y(t.time)), e.setMinutes(b(t.time));
                        var i = e.getTime();
                        o.push({
                          ts: i,
                          type: t.type
                        }), o[o.length - 1] && o[o.length - 2] && o[o.length - 1].ts === o[o.length - 2].ts && (o.pop(), o.pop()), o[o.length - 1] && o[o.length - 2] && o[o.length - 1].ts <= A && o[o.length - 2].ts <= A && (o[o.length - 1].ts += 6048e5, o[o.length - 2].ts += 6048e5)
                      });
                      for (o = k(o, function(t) {
                          return t.ts
                        }), r = 0; r < o.length;) o[r + 1] && o[r].ts === o[r + 1].ts ? r++ : i.push(o[r].ts), r++;
                      return 2 === i.length && i[1] - i[0] == 6048e5 ? [] : o
                    }(v)).length || (G.always = !0, G.now.open = !0);
                    for (var l = 0; l < i.length; l++)
                      if (A >= (i[l - 1] && i[l - 1].ts || 0) && A < i[l].ts) {
                        var u = Math.floor((i[l].ts - A) / 36e5),
                          c = Math.floor((i[l].ts - A) / 6e4 - 60 * u),
                          h = new Date(A),
                          d = "open" !== i[l].type,
                          p = (o = i[l], n = h, s = r = void 0, s = new Date(o.ts), r = Math.round((s - n) / 864e5), "open" === o.type && s.getHours() < 1 && r++, r);
                        c = 10 * Math.floor(c / 10) ? 10 * Math.floor(c / 10) : 5, G.now.open = d, G.now.lunch = !!(i[l - 1] && "lunch" === i[l - 1].type || "lunch" === x(i).type), G.will = {
                          willType: i[l].type,
                          d: p,
                          h: u,
                          m: c
                        };
                        var _ = new Date(i[l].ts);
                        G.will.when = z(u, p, _.getDay());
                        var m = new Date(i[l].ts),
                          f = m.getHours(),
                          g = m.getMinutes();
                        f < 10 && (f = "0" + f), g < 10 && (g = "0" + g), G.will.till = f + ":" + g
                      } if (t) {
                      for (e = D(L(t), "time"), l = 2; l < e.length; l += 2) a.push({
                        from: e[l - 1],
                        to: e[l]
                      });
                      E = C(e[0]), T = C(e[e.length - 1]), G.today = E === T ? {
                        alltime: !0,
                        alltimeStr: S(O, "worksAroundTheClock"),
                        from: "00:00",
                        to: "24:00"
                      } : {
                        from: E,
                        to: T
                      }, 0 < a.length && (G.lunch = a, G.lunchStr = S(O, "lunch"))
                    }
                  }(v[P]);
                var a = [],
                  p = 0,
                  _ = 0,
                  m = [];
                if (Object.keys(v).forEach(function(t) {
                    v[t] && v[t].working_hours && (p++, u(v[t], x(a)) || a.push(v[t]))
                  }), _ = a.length, p < 7 && _++, 2 < _) G.week = function() {
                  for (var t = [], e = !1, i = 0; i < 7; i++) {
                    var o = M[i],
                      n = 0;
                    if (t[i] = {}, v[o]) {
                      for (var r = D(L(v[o]), "time"), s = [], a = 2; a < r.length; a += 2) e = !0, s.push({
                        from: r[a - 1],
                        to: r[a]
                      });
                      n = Math.max(r.length / 2, n), t[i] = {
                        from: C(r[0]),
                        to: C(r[r.length - 1]),
                        lunch: s
                      }
                    }
                    o === P && (t[i].active = !0), t[i].key = l[i]
                  }
                  return t.forEach(function(t) {
                    t.lunch && function(i) {
                      Array.prototype.slice.call(arguments, 1).forEach(function(t) {
                        if (t)
                          for (var e in t) void 0 === i[e] && (i[e] = t[e])
                      })
                    }(t.lunch, function(t, e, i) {
                      arguments.length <= 1 && (e = t || 0, t = 0), i = i || 1;
                      for (var o = Math.max(Math.ceil((e - t) / i), 0), n = 0, r = new Array(o); n < o;) r[n++] = t, t += i;
                      return r
                    }(1, n))
                  }), {
                    table: t,
                    hasLunch: e
                  }
                }();
                else if (1 === _) G.week = {
                  evently: [n(v[M[0]], v)]
                };
                else {
                  for (s = 0; s < _; s++)
                    if (m[s] = 0, a[s])
                      for (var f = D(L(a[s]), "time"), g = 0; g < f.length; g += 2) {
                        var B = y(f[g + 1]) + b(f[g + 1]) / 60 - (y(f[g]) + b(f[g]) / 60);
                        m[s] += B
                      } else a[s] = null;
                  var F = k(a, function(t, e) {
                    return m[e]
                  });
                  G.week = {
                    evently: function(t, e) {
                      for (var i = [], o = t.length - 1; 0 <= o; o--) i.push(n(t[o], e));
                      return i
                    }(F, v)
                  }
                }
                return G.comment = v.comment, G.week && G.week.evently && 1 === G.week.evently.length && (G.everyday = G.week.evently[0].everyday), G
              }
            },
            forecast: function(t, e) {
              var i, o, n = "",
                r = {},
                s = e && e.maxHours || 1;
              return t ? t.always ? {
                today: {
                  text: this.dict.t(this.localLang, "aroundTheClock")
                },
                open: !0
              } : (t.will && t.will.h < s && (t.will.h && (n += this.dict.t(this.localLang, "nHours", t.will.h) + " "), t.will.m && (n += this.dict.t(this.localLang, "nMins", t.will.m))), t.today ? (r.text = this.dict.t(this.localLang, "today"), t.everyday && (r.text = this.dict.t(this.localLang, "everyday")), r.from = t.today.from, r.to = t.today.to, r.lunch = t.lunch, r.lunch && (r.lunchStr = this.dict.t(this.localLang, "lunch"))) : r.text = this.dict.t(this.localLang, "todayIsRestDay"), t.always ? (r.text = this.dict.t(this.localLang, "aroundTheClock"), i = !0) : t.now && (o = (i = t.now.open) ? t.will && "lunch" === t.will.willType ? t.will && t.will.h < s ? this.dict.t(this.localLang, "_in") + " " + this.dict.t(this.localLang, "nMins", n) + this.dict.t(this.localLang, "isClosingOnDinner") : this.dict.t(this.localLang, "isOpen") : t.will.h < s ? this.dict.t(this.localLang, "closeIn") + this.dict.t(this.localLang, "nMins", n) : this.dict.t(this.localLang, "isOpen") : t.will && t.will.when ? this.dict.t(this.localLang, "open") + t.will.when : t.now && t.now.lunch ? t.will.h < s ? this.dict.t(this.localLang, "Lunch") + this.dict.t(this.localLang, "openIn") + this.dict.t(this.localLang, "nMins", n) : this.dict.t(this.localLang, "Lunch") + this.dict.t(this.localLang, "openAt") + t.will.till : t.will && t.will.h < s ? this.dict.t(this.localLang, "openIn") + this.dict.t(this.localLang, "nMins", n) : this.dict.t(this.localLang, "openAt") + t.will.till), {
                today: r,
                now: o,
                open: i,
                week: t.week,
                comment: t.comment,
                everyday: t.everyday
              }) : {}
            }
          }, FirmCard.prototype.dict = {
            t: function(t, e, i) {
              var o, n, r;
              return void 0 === this[t] && (t = "ar" === t ? "en" : "ru"), (r = void 0 !== (n = this[t][e])) ? (o = r ? n : e, void 0 !== i && (i = parseInt(i, 10), o = (i = isNaN(i) ? 0 : i) + " " + n[this[t].pluralRules(i)]), o) : e
            },
            ru: {
              pluralRules: function(t) {
                return t % 10 == 1 && t % 100 != 11 ? 0 : 2 <= t % 10 && t % 10 <= 4 && t % 10 % 1 == 0 && (t % 100 < 12 || 14 < t % 100) ? 1 : t % 10 == 0 || 5 <= t % 10 && t % 10 <= 9 && t % 10 % 1 == 0 || 11 <= t % 100 && t % 100 <= 14 && t % 100 % 1 == 0 ? 2 : void 0
              },
              btnBack: "Назад",
              btnFindWay: "Проехать сюда",
              btnEntrance: "Найти вход",
              linkReviews: ["отзыв", "отзыва", "отзывов"],
              linkPhoto: ["фото", "фото", "фото"],
              linkBooklet: "Буклет",
              tommorow: "завтра",
              afterTommorow: "послезавтра",
              afterWeek: "через неделю",
              nextSun: "в воскресенье",
              nextMon: "в понедельник",
              nextTue: "во вторник",
              nextWed: "в среду",
              nextThu: "в четверг",
              nextFri: "в пятницу",
              nextSat: "в субботу",
              willOpen: "откроется",
              willClose: "закроется",
              isOpen: "Открыто",
              openTill: "Открыто до ",
              closeIn: "Закроется через ",
              openAt: "Откроется в ",
              openIn: "Откроется через ",
              open: "Откроется ",
              nHours: ["час", "часа", "часов"],
              nMins: ["минуту", "минуты", "минут"],
              lunch: "обед",
              Lunch: "Обед. ",
              workingDays: "Рабочие дни",
              weekdays: "Будние дни",
              restDay: ["выходной", "выходные", "выходные"],
              reviewsOnFlamp: "Отзывы на Флампе",
              writeReviewOnFlamp: "Написать отзыв на Флампе",
              payment: "оплата",
              everyday: "Ежедневно c",
              worksAroundTheClock: "Работает круглосуточно",
              aroundTheClock: "Круглосуточно",
              knowMore: "узнать больше",
              toClose: "до закрытия",
              monday: "понедельник",
              tuesday: "вторник",
              wednesday: "среда",
              thursday: "четверг",
              friday: "пятница",
              saturday: "суббота",
              sunday: "воскресенье",
              mon: "пон",
              tue: "втр",
              wed: "срд",
              thu: "чтв",
              fri: "птн",
              sat: "сбт",
              sun: "вск",
              toLunch: "до обеда",
              today: "Сегодня",
              lessThenHour: "менее часа",
              youCouldLate: "вы можете не успеть",
              workingTime: "рабочее время",
              showAllOrgInRubric: "Показать все организации рубрики",
              todayIsRestDay: "Сегодня выходной",
              internet: "Оплата через Интернет",
              noncash: "Безналичный расчет",
              goldcrown: "Золотая Корона",
              dinersclub: "Diners Club",
              mastercard: "Mastercard",
              maestrocard: "MaestroCard",
              visa: "Visa",
              cash: "Наличный расчет",
              americanexpress: "American Express",
              hour: "час",
              less: "менее",
              _in: "Через",
              isClosingOnDinner: " закрывается на обед"
            },
            it: {
              pluralRules: function(t) {
                return 1 === t ? 0 : 1
              },
              btnBack: "Indietro",
              btnFindWay: "Come arrivare ",
              btnEntrance: "Trova l'ingresso",
              linkReviews: ["recensione", "recensioni"],
              linkPhoto: ["fotografia", "fotografie"],
              linkBooklet: "Sull'azienda",
              tommorow: "domani",
              afterTommorow: "dopodomani",
              afterWeek: "tra una settimana",
              nextSun: "la domenica",
              nextMon: "il lunedi",
              nextTue: "il martedì",
              nextWed: "il mercoledì",
              nextThu: "il giovedi",
              nextFri: "il venerdì",
              nextSat: "il sabato",
              willOpen: "apre",
              willClose: "ciuso",
              isOpen: "Aperto",
              openTill: "Aperto fino alle ",
              closeIn: "Chiude tra ",
              openAt: "Apre alle ",
              openIn: "Apre tra ",
              open: "Apre ",
              nHours: ["ora", "ore"],
              nMins: ["minuto", "minuti"],
              lunch: "pausa pranzo",
              Lunch: "Pausa pranzo. ",
              workingDays: "Giorni feriali",
              weekdays: "Giorni feriali",
              restDay: ["chiusura", "chiusura"],
              reviewsOnFlamp: "Recensioni su Flamp",
              writeReviewOnFlamp: "Scrivi una recensione su Flamp",
              payment: "pagamento",
              everyday: "Ogni giorno dalole",
              worksAroundTheClock: "Operativo 24 ore su 24",
              aroundTheClock: "24 ore su 24",
              knowMore: "ulteriori informazioni",
              toClose: "fino alla chiusura",
              monday: "lunedi",
              tuesday: "martedì",
              wednesday: "mercoledì",
              thursday: "giovedi",
              friday: "venerdì",
              saturday: "sabato",
              sunday: "domenica",
              mon: "lun",
              tue: "mar",
              wed: "mer",
              thu: "gio",
              fri: "ven",
              sat: "sab",
              sun: "dom",
              toLunch: "fino alla pausa pranzo",
              today: "Oggi",
              lessThenHour: "meno di un'ora",
              youCouldLate: "affrettarsi, chiusura imminente",
              workingTime: "orario di lavoro",
              showAllOrgInRubric: "Visualizza tutte le aziende della categoria",
              todayIsRestDay: "oggi chiuso",
              internet: "Pagamento on-line",
              noncash: "Pagamento non in contanti",
              goldcrown: "Zolotaja Korona",
              dinersclub: "Diners Club",
              mastercard: "MasterCard",
              maestrocard: "MaestroCard",
              visa: "Visa",
              cash: "Pagamento in contanti",
              americanexpress: "American Express",
              hour: "un'ora",
              less: "meno di",
              _in: "Tra",
              isClosingOnDinner: "chiude per pausa pranzo"
            },
            en: {
              pluralRules: function(t) {
                return 1 === t ? 0 : 1
              },
              btnBack: "Back",
              btnFindWay: "Get here",
              btnEntrance: "Find entrance",
              linkReviews: ["review", "reviews"],
              linkPhoto: ["photo", "photos"],
              linkBooklet: "About company",
              tommorow: "tomorrow",
              afterTommorow: "the day after tomorrow",
              afterWeek: "in a week",
              nextSun: "on Sunday",
              nextMon: "on Monday",
              nextTue: "on Tuesday",
              nextWed: "on Wednesday",
              nextThu: "on Thursday",
              nextFri: "on Friday",
              nextSat: "on Saturday",
              willOpen: "opens ",
              willClose: "closes",
              isOpen: "Open",
              openTill: "Open till ",
              closeIn: "Closes in ",
              openAt: "Opens at ",
              openIn: "Opens in ",
              open: "Opens ",
              nHours: ["hour", "hours"],
              nMins: ["minute", "minutes"],
              lunch: "lunch break",
              Lunch: "Lunch break. ",
              workingDays: "Working days",
              weekdays: "Weekdays",
              restDay: ["day off", "days off"],
              reviewsOnFlamp: "Reviews on Flamp",
              writeReviewOnFlamp: "Write a review on Flamp",
              payment: "payment",
              everyday: "Daily from",
              worksAroundTheClock: "Open 24 hours",
              aroundTheClock: "24h",
              knowMore: "see also",
              toClose: "until closing",
              monday: "Monday",
              tuesday: "Tuesday",
              wednesday: "Wednesday",
              thursday: "Thursday",
              friday: "Friday",
              saturday: "Saturday",
              sunday: "Sunday",
              mon: "Mon",
              tue: "Tue",
              wed: "Wed",
              thu: "Thu",
              fri: "Fri",
              sat: "Sat",
              sun: "Sun",
              toLunch: "until lunch",
              today: "Today",
              lessThenHour: "less then one hour",
              youCouldLate: "you might be late",
              workingTime: "working hours",
              showAllOrgInRubric: "Show all organizations in the category",
              todayIsRestDay: "closed today",
              internet: "Online",
              noncash: " No-cash",
              goldcrown: "Golden Crown",
              dinersclub: "Diners Club",
              mastercard: "Mastercard",
              maestrocard: "MaestroCard",
              visa: "Visa",
              cash: "Cash",
              americanexpress: "American Express",
              hour: "hour",
              less: "less",
              _in: "In",
              isClosingOnDinner: "will be closing for lunch"
            },
            cs: {
              pluralRules: function(t) {
                return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
              },
              btnBack: "Zpět",
              btnFindWay: "Jet sem",
              btnEntrance: "Hledat vstup",
              linkReviews: ["recenze", "recenze", "recenzí"],
              linkPhoto: ["fotografie", "fotografie", "fotografií"],
              linkBooklet: "Leták",
              tommorow: "zítra",
              afterTommorow: "pozítří",
              afterWeek: "za týden",
              nextSun: "v neděli",
              nextMon: "v pondělí",
              nextTue: "v úterý",
              nextWed: "ve středu",
              nextThu: "ve čtvrtek",
              nextFri: "v pátek",
              nextSat: "v sobotu",
              willOpen: "otevře se",
              willClose: "zavře se",
              isOpen: "Otevřeno",
              openTill: "Otevřeno do ",
              closeIn: "Zavře se za ",
              openAt: "Otevře se v ",
              openIn: "Otevře se za ",
              open: "Otevře se ",
              nHours: ["hodinu", "hodiny", "hodin"],
              nMins: ["minutu", "minuty", "minut"],
              lunch: "polední přestávka",
              Lunch: "Polední přestávka. ",
              workingDays: "Všední dny",
              weekdays: "Všední dny",
              restDay: ["zavřeno", "zavřeno"],
              reviewsOnFlamp: "Recenze na Flampu",
              writeReviewOnFlamp: "Napsat recenzi na Flampu",
              payment: "platba",
              everyday: "Denně od ",
              worksAroundTheClock: "Pracuje nonstop",
              aroundTheClock: "Nonstop",
              knowMore: "dozvědět se více",
              toClose: "do uzavření",
              monday: "pondělí",
              tuesday: "úterý",
              wednesday: "středa",
              thursday: "čtvrtek",
              friday: "pátek",
              saturday: "sobota",
              sunday: "neděle",
              mon: "po",
              tue: "út",
              wed: "st",
              thu: "čt",
              fri: "pá",
              sat: "so",
              sun: "ne",
              toLunch: "do polední přestávky",
              today: "Dnes",
              lessThenHour: "méně než hodinu",
              youCouldLate: "nemusíte to stihnout",
              workingTime: "pracovní doba",
              showAllOrgInRubric: "Zobrazit všechny organizace v rubrice",
              todayIsRestDay: "Dnes je zavřeno",
              internet: "Platba prostřednictvím Internetu",
              noncash: "Bezhotovostní platba",
              goldcrown: "Zolotaja Korona",
              dinersclub: "Diners Club",
              mastercard: "Mastercard",
              maestrocard: "MaestroCard",
              visa: "Visa",
              cash: "Platba hotově",
              americanexpress: "American Express",
              hour: "hodinu",
              less: "méně",
              _in: "Za",
              isClosingOnDinner: "začíná polední přestávka"
            },
            es: {
              pluralRules: function(t) {
                return 1 === t ? 0 : 2 <= t && t <= 4 ? 1 : 2
              },
              btnBack: "Atrás",
              btnFindWay: "Ir para allá",
              btnEntrance: "Buscar acceso",
              linkReviews: ["comentario", "comentarios", "comentarios"],
              linkPhoto: ["foto", "fotos", "fotos"],
              linkBooklet: "Folleto",
              tommorow: "mañana",
              afterTommorow: "pasado mañana",
              afterWeek: "en una semana más",
              nextSun: "el domingo",
              nextMon: "el lunes",
              nextTue: "el martes",
              nextWed: "el miércoles",
              nextThu: "el jueves",
              nextFri: "el viernes",
              nextSat: "el sábado",
              willOpen: "se abrirá",
              willClose: "se cerrará",
              isOpen: "Abierto",
              openTill: "Abierto hasta ",
              closeIn: "Se cerrará dentro de ",
              openAt: "Se abrirá el ",
              openIn: "Se abrirá dentro de ",
              open: "Se abrirá ",
              nHours: ["hora", "horas", "horas"],
              nMins: ["minuto", "minutos", "minutos"],
              lunch: "hora de colación",
              Lunch: "Hora de colación. ",
              workingDays: "Días laborables",
              weekdays: "Días laborables",
              restDay: ["cerrado", "cerrado"],
              reviewsOnFlamp: "Comentarios en Flamp",
              writeReviewOnFlamp: "Escribir un comentario en Flamp",
              payment: "pago",
              everyday: "Cada día desde",
              worksAroundTheClock: "Abierto las 24 horas",
              aroundTheClock: "24 horas",
              knowMore: "para saber más",
              toClose: "hasta el cierre",
              monday: "lunes",
              tuesday: "martes",
              wednesday: "miércoles",
              thursday: "jueves",
              friday: "viernes",
              saturday: "sábado",
              sunday: "domingo",
              mon: "lun",
              tue: "mar",
              wed: "mié",
              thu: "jue",
              fri: "vie",
              sat: "sáb",
              sun: "dom",
              toLunch: "antes de la hora de colación",
              today: "Hoy",
              lessThenHour: "menos de una hora",
              youCouldLate: "puede ser que no alcanzas a llegar",
              workingTime: "horario de trabajo",
              showAllOrgInRubric: "Mostrar todas las empresas de la categoría",
              todayIsRestDay: "Hoy cerrado",
              internet: "Pago por Internet",
              noncash: "Pago sin efectivo",
              goldcrown: "Zolotaya Korona",
              dinersclub: "Diners Club",
              mastercard: "Mastercard",
              maestrocard: "MaestroCard",
              visa: "Visa",
              cash: "Pago en efectivo",
              americanexpress: "American Express",
              hour: "hora",
              less: "menos de",
              _in: "Dentro de",
              isClosingOnDinner: "se cierra por hora de colación"
            }
          }, DG.Traffic = DG.TileLayer.extend({
            options: {
              period: 0,
              disableLabel: !1,
              updateWhenIdle: !1
            },
            statics: {
              Dictionary: {}
            },
            initialize: function(t) {
              this._tileUrl = DG.config.protocol + (DG.Browser.retina ? DG.config.retinaTrafficTileServer : DG.config.trafficTileServer), this._metaUrl = DG.config.protocol + (DG.Browser.retina ? DG.config.retinaTrafficMetaServer : DG.config.trafficMetaServer), this._timeUrl = DG.config.protocol + DG.config.trafficTimestampServer, this._updateInterval = DG.config.trafficLayerUpdateInterval, this._layersOptions = {
                errorTileUrl: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                subdomains: "012345679",
                maxNativeZoom: 18,
                detectRetina: DG.config.detectRetina,
                minZoom: DG.config.trafficLayerMinZoom
              }, t = DG.setOptions(this, DG.extend(t || {}, this._layersOptions)), this._metaLayer = DG.Meta.layer(null, {
                detectRetina: t.detectRetina,
                maxNativeZoom: t.maxNativeZoom,
                dataFilter: DG.bind(this._processData, this),
                minZoom: t.minZoom
              }), this._isDg = !0, this._isOnRequest = !1, this._onTimer = DG.bind(this._onTimer, this), DG.TileLayer.prototype.initialize.call(this, this._tileUrl, t)
            },
            onAdd: function(t) {
              if (this._initContainer(), this._levels = {}, this._tiles = {}, this.options.period) this.options.timestampString = "", this._onAddSetParams(t);
              else {
                var e = this;
                this._isOnRequest = !0, this._getTimestampString().then(function(t) {
                  e.options.timestampString = "?" + t
                }, function() {
                  e.options.timestampString = "?" + (new Date).getTime()
                }).then(function() {
                  e._isOnRequest = !1, e._map && e._onAddSetParams(t)
                })
              }
            },
            onRemove: function(t) {
              this._isOnRequest ? (L.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null) : (clearInterval(this._updateTimer), t.removeLayer(this._metaLayer).off("projectchange projectleave", this._onMapProjectChange, this), this.options.disableLabel || (this._metaLayer.off(this._layerEventsListeners, this), this._map.removeLayer(this._labelHelper), this._labelHelper = null, this._map.off("langchange", this._updateLang, this)), DG.TileLayer.prototype.onRemove.call(this, t))
            },
            update: function() {
              var e = this;
              this._getTimestampString().then(function(t) {
                e.options.timestampString = "?" + t
              }, function() {
                e.options.timestampString = "?" + (new Date).getTime()
              }).then(function() {
                e.fire("update", {
                  timestamp: e.options.timestampString
                }), e._layerEventsListeners.mouseout.call(e), e._metaLayer.getOrigin().setURL(e._prepareMetaURL(), e), e.redraw()
              })
            },
            getSubdomain: function() {
              return this._layersOptions.subdomains[Math.floor(Math.random() * this._layersOptions.subdomains.length)]
            },
            _updateLang: function() {
              var t = this._map.getLang();
              this._labelHelper.options.textDirection = "ar" === t ? "rtl" : "auto"
            },
            _getTimestampString: function() {
              return DG.ajax(DG.Util.template(this._timeUrl, DG.extend({
                s: this.getSubdomain(),
                projectCode: this._map.projectDetector.getProject().code
              }, this.options || {})), {
                type: "get"
              })
            },
            _onTimer: function() {
              0 === this.options.period && this.update()
            },
            _processData: function(t, e) {
              var i = e.scaleBy(this.getTileSize()),
                o = DG.bind(this._polygonLngLatToPoints, this, i),
                n = {};
              return DG.Util.isArray(t) ? (t[1].forEach(function(t) {
                this[t.graph_id] = t.speed_text
              }, n), t[0].map(function(t) {
                return {
                  id: t.graph_id,
                  speed: n[t.graph_id],
                  geometry: DG.Wkt.toGeoJSON(t.geometry[0].object[0])
                }
              }).filter(function(t) {
                return "Polygon" == t.geometry.type || "MultiPolygon" == t.geometry.type
              }).map(function(t) {
                var e = t.geometry;
                return "Polygon" == e.type ? e.coordinates = o(e.coordinates) : "MultiPolygon" == e.type && (e.coordinates = e.coordinates.map(o)), t
              })) : []
            },
            _polygonLngLatToPoints: function(e, t) {
              var i = this._map;
              return t.map(function(t) {
                return t.map(function(t) {
                  return i.project([t[1], t[0]]).round().subtract(e)
                })
              })
            },
            _prepareMetaURL: function() {
              return DG.Util.template(this._metaUrl, DG.extend({
                x: "{x}",
                y: "{y}",
                z: "{z}",
                s: "{s}"
              }, this.options))
            },
            _updateLayerProject: function() {
              var t = this._map.projectDetector.getProject();
              DG.setOptions(this, t && t.traffic ? {
                projectCode: t.code,
                bounds: t.latLngBounds,
                minZoom: Math.max(t.minZoom, this._layersOptions.minZoom),
                maxZoom: t.maxZoom
              } : {
                maxZoom: t ? t.maxZoom : DG.config.projectLeaveMaxZoom,
                minZoom: 0
              }), this._metaLayer.getOrigin().setURL(this._prepareMetaURL())
            },
            _onMapProjectChange: function() {
              this._updateLayerProject(), this.redraw()
            },
            _layerEventsListeners: {
              mouseover: function(t) {
                this._setCursor("pointer"), this._labelHelper && t.meta.speed && this._labelHelper.setPosition(t.latlng).setContent(t.meta.speed + " " + this.t("speed_unit_km_h")).addTo(this._map)
              },
              mouseout: function() {
                this._setCursor(""), this._labelHelper && this._map.removeLayer(this._labelHelper)
              },
              mousemove: function(t) {
                this._labelHelper && this._labelHelper.setPosition(t.latlng)
              }
            },
            _setCursor: function(t) {
              this._map.getContainer().style.cursor = t
            },
            _onAddSetParams: function(t) {
              this._updateLayerProject(), t.addLayer(this._metaLayer).on("projectchange projectleave", this._onMapProjectChange, this), this.options.disableLabel || (this._metaLayer.on(this._layerEventsListeners, this), this._labelHelper = DG.label(), this._map.on("langchange", this._updateLang, this)), this._updateInterval && (this._updateTimer = setInterval(this._onTimer, this._updateInterval)), this._resetView(), this._update()
            },
            _update: function(t) {
              this._isOnRequest || DG.TileLayer.prototype._update.call(this, t)
            }
          }), DG.Traffic.include(DG.Locale), DG.traffic = function(t) {
            return new DG.Traffic(t)
          }, DG.Traffic.Dictionary.ru = {
            speed_unit_km_h: "км/ч"
          }, DG.Traffic.Dictionary.it = {
            speed_unit_km_h: "km/h"
          }, DG.Traffic.Dictionary.cs = {
            speed_unit_km_h: "km/h"
          }, DG.Traffic.Dictionary.es = {
            speed_unit_km_h: "km/h"
          }, DG.Traffic.Dictionary.en = {
            speed_unit_km_h: "km/h"
          }, DG.Traffic.Dictionary.ar = {
            speed_unit_km_h: "كم/ساعة"
          }, DG.Control.Traffic = DG.RoundControl.extend({
            options: {
              position: "topright",
              iconClass: "traffic"
            },
            statics: {
              Dictionary: {}
            },
            initialize: function(t) {
              this._trafficClass = "dg-traffic-control", this._controlHideClass = "dg-control-round_is-hidden_true", DG.setOptions(this, t), DG.extend(this, {
                _active: !1,
                _trafficLayer: null
              }).on(this._controlEvents, this)
            },
            _controlEvents: {
              add: function() {
                this._trafficLayer = DG.traffic(), this._map.on("zoomend projectchange projectleave", this._updateControlVisibility, this)
              },
              click: function() {
                this._active = !this._active, this._active ? (this.setState("active"), this._showTraffic()) : (this.setState(""), this._hideTraffic())
              },
              remove: function() {
                this.off(this._controlEvents, this), this._map.off("zoomend projectchange projectleave", this._updateControlVisibility, this), this._active && (this._map.removeLayer(this._trafficLayer), this._active = !1), this._trafficLayer = null
              }
            },
            _showTraffic: function() {
              this._updateTrafficScore(), this._map.addLayer(this._trafficLayer)
            },
            _hideTraffic: function() {
              this._handleDom("remove"), this._map.removeLayer(this._trafficLayer)
            },
            _handleDom: function(t, e) {
              var i = this._link;
              i.innerHTML = isNaN(e) ? "" : e, DG.DomUtil[t + "Class"](i, this._trafficClass), DG.DomUtil[t + "Class"](i, this._trafficClass + "_color_" + this._scoreRate)
            },
            _getTrafficColor: function(t) {
              var e = "green";
              return 7 < t ? e = "red" : 4 < t && (e = "yellow"), e
            },
            _updateControlVisibility: function() {
              var t = this._map.projectDetector.getProject(),
                e = t && t.traffic,
                i = this._map.getZoom() < DG.config.trafficLayerMinZoom || !e ? "addClass" : "removeClass";
              DG.DomUtil[i](this._container, this._controlHideClass), this._active && e && this._updateTrafficScore()
            },
            _updateTrafficScore: function() {
              var e = this;
              this._getTrafficScore().then(function(t) {
                t = parseInt(t, 10), e._scoreRate = e._getTrafficColor(t), e._handleDom("add", t)
              })
            },
            _getTrafficScore: function() {
              var t = DG.Util.template(DG.config.protocol + DG.config.trafficScoreServer, {
                s: this._trafficLayer.getSubdomain(),
                projectCode: this._map.projectDetector.getProject().code
              });
              return DG.ajax(t, {
                type: "get"
              })
            },
            _renderTranslation: function() {
              this._link.title = this.t("button_title")
            }
          }), DG.control.traffic = function(t) {
            return new DG.Control.Traffic(t)
          }, DG.Map.mergeOptions({
            trafficControl: !1
          }), DG.Map.addInitHook(function() {
            this.options.trafficControl && (this.trafficControl = DG.control.traffic(this.options.trafficControl), this.addControl(this.trafficControl))
          }), DG.Control.Traffic.Dictionary.ru = {
            button_title: "Пробки"
          }, DG.Control.Traffic.Dictionary.it = {
            button_title: "Colonna"
          }, DG.Control.Traffic.Dictionary.cs = {
            button_title: "Zácpy"
          }, DG.Control.Traffic.Dictionary.es = {
            button_title: "Taco"
          }, DG.Control.Traffic.Dictionary.en = {
            button_title: "Traffic"
          }, DG.Control.Traffic.Dictionary.ar = {
            button_title: "حركة السير"
          }, DG.Ruler = DG.Layer.extend({
            options: {
              editable: !0
            },
            includes: [DG.Locale],
            statics: {
              Dictionary: {}
            },
            initialize: function(t, e) {
              DG.Util.setOptions(this, e), this._layers = {
                back: null,
                middle: null,
                front: null,
                mouse: null
              }, this._points = [], this._layersContainer = DG.featureGroup(), Object.keys(this._layers).forEach(function(t) {
                this._layersContainer.addLayer(this._layers[t] = DG.featureGroup())
              }, this), this._reset(), DG.Browser.mobile ? (delete this._lineMouseEvents.mouseover, delete this._lineMouseEvents.mouseout, delete this._lineMouseEvents.mousemove) : delete this._lineMouseEvents.click, t && t.length && this.setLatLngs(t)
            },
            onAdd: function(t) {
              this._map = t.on("langchange", this._updateDistance, this), this._map.getPane("rulerMarkerPane") || this._map.createPane("rulerMarkerPane"), this._map.getPane("rulerPane") || this._map.createPane("rulerPane"), this._layersContainer.addTo(this._map), this._points.length && (this._layers.mouse.fire("layeradd"), this._updateDistance()), this._layers.mouse.on(this._lineMouseEvents, this)
            },
            onRemove: function(t) {
              t.off("langchange", this._updateDistance, this).removeLayer(this._layersContainer), this._layers.mouse.off(this._lineMouseEvents, this), this._reset()
            },
            getTotalDistance: function() {
              return this._calcDistance()
            },
            spliceLatLngs: function(t) {
              var e = this._points.length,
                i = 0 <= t ? Math.min(t, e) : e - t,
                o = Array.prototype.splice.apply(this._points, arguments).map(function(t) {
                  return this._layers.mouse.removeLayer(t), t.off().getLatLng()
                }, this),
                n = this._points.length;
              if (n) {
                for (var r = i; r < n; r++) this._points[r] instanceof DG.Ruler.LayeredMarker || (this._points[r] = this._createPoint(this._points[r], this.options.iconStyles.large).on(this._pointEvents, this).once("add", this._addCloseHandler, this).addTo(this._layers.mouse, this._layers)), r && !this._points[r - 1]._legs && this._addLegs(this._points[r - 1]), this._points[r].setPointStyle(this.options.iconStyles[r && r < n - 1 ? "small" : "large"]), this._points[r]._pos = r;
                this._removeLegs(this._points[n - 1]), 0 < e && e < n && this._points[e - 1].collapse(), this._points[i] && this._updateLegs(this._points[i]), 1 < i && this._points[i - 1].setPointStyle(this.options.iconStyles.small), this._updateDistance(), this._normalizeRulerPoints()
              }
              return DG.Browser.touch && this._lineMarkerHelper && this._lineMarkerHelper.collapse(), this._fireChangeEvent(), o
            },
            addLatLng: function(t) {
              var e = this._points[this._points.length - 1] || null;
              return t = DG.latLng(t), e && (t = this._normalizeLatLng(t, e.getLatLng())), this.spliceLatLngs(this._points.length, 0, t), this
            },
            getLatLngs: function() {
              return this._points.map(function(t) {
                return t.getLatLng()
              })
            },
            setLatLngs: function(t) {
              var e = t.slice();
              return e.unshift(0, this._points.length), this.spliceLatLngs.apply(this, e), this
            },
            _reset: function() {
              DG.extend(this, {
                _lineMarkerHelper: null,
                _morphingNow: !1
              })
            },
            _lineMouseEvents: {
              click: function(t) {
                var e = t.layer;
                if (e instanceof DG.Marker && e._pos !== this._points.length - 1) this._lineMarkerHelper && this._lineMarkerHelper.collapse(), e.setText(this._getFormatedDistance(e)), this._lineMarkerHelper = e;
                else if (e instanceof DG.Path && this.options.editable) {
                  var i = t.latlng,
                    o = e._point._pos + 1;
                  this.spliceLatLngs(o, 0, i)
                }
              },
              mouseover: function(t) {
                var e = t.layer;
                if (e._hovered = !0, !this._morphingNow)
                  if (e instanceof DG.Marker && e._pos !== this._points.length - 1) e.setText(this._getFormatedDistance(e));
                  else if (e instanceof DG.Path && !this._lineMarkerHelper) {
                  var i = e._point;
                  this._lineMarkerHelper = this._addRunningLabel(this._nearestPoint(i._legs.middle, t.latlng), i)
                }
              },
              mouseout: function(t) {
                var e = t.layer,
                  i = t.originalEvent;
                e._hovered = !1, this._morphingNow || e._pos === this._points.length - 1 || (e instanceof DG.Marker ? i.relatedTarget && (i.relatedTarget === e.querySelector("container") || i.relatedTarget.parentNode === e.querySelector("container")) || e.collapse() : this._removeRunningLabel())
              },
              mousemove: function(t) {
                if (!this._morphingNow && this._lineMarkerHelper) {
                  var e = t.layer._point,
                    i = this._nearestPoint(e._legs.middle, t.latlng);
                  this._lineMarkerHelper.setLatLng(i).setText(this._getFormatedDistance(e, e.getLatLng().distanceTo(i)))
                }
              },
              layeradd: function() {
                Object.keys(this._layers).forEach(function(t) {
                  this._layers[t].bringToFront()
                }, this)
              }
            },
            _fireChangeEvent: function() {
              this.fire("changed", {
                latlngs: this.getLatLngs()
              })
            },
            _addRunningLabel: function(t, e) {
              var i = this._createPoint(t).addTo(this._layers.mouse, this._layers),
                o = this._map.getPane("rulerPane");
              return o.insertBefore(i._icon, o.lastElementChild), i.setText(this._getFormatedDistance(e, e.getLatLng().distanceTo(t)))
            },
            _removeRunningLabel: function() {
              this._lineMarkerHelper && (this._layers.mouse.removeLayer(this._lineMarkerHelper), this._lineMarkerHelper = null)
            },
            _insertPointInLine: function(t) {
              var e, i = this._lineMarkerHelper.getLatLng(),
                o = t.target._point._pos + 1;
              if (L.Browser.ie) {
                var n = t.originalEvent.target || t.originalEvent.srcElement;
                n.parentNode.appendChild(n)
              }
              L.DomEvent.stopPropagation(t.originalEvent), this.spliceLatLngs(o, 0, i), (e = this._points[o]).setText(this._getFormatedDistance(e)), setTimeout(function() {
                if (document.createEvent) {
                  var t = document.createEvent("MouseEvents");
                  t.initMouseEvent("mouseup", !1, !1, document.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, e._icon), document.dispatchEvent(t), (t = document.createEvent("MouseEvents")).initMouseEvent("mousedown", !1, !1, document.defaultView, 1, 0, 0, 0, 0, !1, !1, !1, !1, 1, e._icon), e._icon.dispatchEvent(t)
                } else e._icon.fireEvent("onMouseUp", DG.extend(document.createEventObject(), {
                  button: 1,
                  bubbles: !1,
                  cancelable: !1
                })), e._icon.fireEvent("onMouseDown", DG.extend(document.createEventObject(), {
                  button: 1,
                  bubbles: !1,
                  cancelable: !1
                }))
              }, 0), this._removeRunningLabel(), this._updateLegs(e)
            },
            _nearestPoint: function(t, e) {
              for (var i, o, n = this, r = this._project(e), s = t.getLatLngs().map(function(t) {
                  return n._project(t)
                }), a = 0; a < s.length - 1; a++) {
                var l = DG.LineUtil.pointToSegmentDistance(r, s[a], s[a + 1]);
                (void 0 === i || l < i) && (i = l, o = a)
              }
              var u = DG.LineUtil.closestPointOnSegment(r, s[o], s[o + 1]);
              return this._unproject(u)
            },
            _addCloseHandler: function(t) {
              t.target.on("click", this._deletePoint, this).querySelector("remove-link").style.display = "inline-block"
            },
            _createPoint: function(e, t) {
              var i = t || this.options.iconStyles.large,
                o = {};
              return Object.keys(i).forEach(function(t) {
                o[t] = DG.circleMarker(e, i[t])
              }), DG.Ruler.layeredMarker(e, {
                layers: o,
                draggable: this.options.editable,
                textDirection: "ar" !== this._map.getLang() ? "auto" : "rtl"
              })
            },
            _normalizeLatLng: function(t, e) {
              for (var i = t.lng < e.lng ? 360 : -360, o = t.lng; 180 < Math.abs(o - e.lng);) o += i;
              return DG.latLng(t.lat, o)
            },
            _normalizeRulerPoints: function(t) {
              t = t || this._points[0];
              var e, i, o, n, r, s = this,
                a = t._pos,
                l = [];
              for (e = a + 1; e < this._points.length; e++) i = this._points[e], o = this._points[e - 1], n = i.getLatLng(), (r = this._normalizeLatLng(n, o.getLatLng())).equals(n) || (i.setLatLng(r), l.push(e));
              for (e = a - 1; 0 <= e; e--) i = this._points[e], o = this._points[e + 1], n = i.getLatLng(), (r = this._normalizeLatLng(n, o.getLatLng())).equals(n) || (i.setLatLng(r), l.push(e));
              l.sort().reduce(function(t, e) {
                var i = t && t === e - 1;
                return s._updateLegs(s._points[e], i), e
              }, null)
            },
            _pointEvents: {
              drag: function(t) {
                var e = t.target;
                this._normalizeRulerPoints(e), DG.Browser.touch || e === this._points[this._points.length - 1] || e.setText(this._getFormatedDistance(e)), this._updateLegs(e), this._updateDistance()
              },
              dragend: function(t) {
                var e = t.target;
                this._morphingNow = !1, e._hovered || e === this._points[this._points.length - 1] || e.collapse(), this._fireChangeEvent()
              },
              dragstart: function() {
                DG.Browser.touch && this._lineMarkerHelper && this._lineMarkerHelper.collapse(), this._morphingNow = !0
              }
            },
            _deletePoint: function(t) {
              var e = t.originalEvent,
                i = e.target || e.srcElement;
              "dg-ruler__label-remove-link" !== i.className && "dg-ruler__remove-link-overlay" !== i.className || (DG.DomEvent.stop(t.originalEvent), this.spliceLatLngs(t.target._pos, 1))
            },
            _degToRad: function(t) {
              return Math.PI / 180 * t
            },
            _radToDeg: function(t) {
              return 180 / Math.PI * t
            },
            _project: function(t) {
              return this._map ? this._map.project(t) : DG.CRS.EPSG3857.latLngToPoint(t, 1)
            },
            _unproject: function(t) {
              return this._map ? this._map.unproject(t) : DG.CRS.EPSG3857.pointToLatLng(t, 1)
            },
            _calcAngle: function(t, e, i) {
              e = this._normalizeLatLng(e, t), i = this._normalizeLatLng(i, t), t = this._project(t), e = this._project(e), i = this._project(i);
              var o = e.x - t.x,
                n = i.x - t.x,
                r = e.y - t.y,
                s = i.y - t.y,
                a = o * n + r * s,
                l = Math.sqrt(o * o + r * r),
                u = Math.sqrt(n * n + s * s);
              return Math.acos(a / (l * u))
            },
            _calcMidPoint: function(t, e) {
              var i = this._degToRad(t.lng),
                o = this._degToRad(t.lat),
                n = this._degToRad(e.lng),
                r = this._degToRad(e.lat),
                s = Math.acos(Math.sin(o) * Math.sin(r) + Math.cos(o) * Math.cos(r) * Math.cos(i - n)),
                a = Math.sin(.5 * s) / Math.sin(s),
                l = Math.sin(.5 * s) / Math.sin(s),
                u = a * Math.cos(o) * Math.cos(i) + l * Math.cos(r) * Math.cos(n),
                c = a * Math.cos(o) * Math.sin(i) + l * Math.cos(r) * Math.sin(n),
                h = a * Math.sin(o) + l * Math.sin(r),
                d = Math.atan2(h, Math.sqrt(u * u + c * c)),
                p = Math.atan2(c, u);
              return DG.latLng(this._radToDeg(d), this._radToDeg(p))
            },
            _adaptiveSample: function(t, e, i, o) {
              if (9 < i) return [];
              o = o || this._calcMidPoint(t, e);
              var n = this._calcMidPoint(t, o),
                r = this._calcMidPoint(o, e),
                s = this._calcAngle(n, o, t),
                a = this._calcAngle(o, t, e),
                l = this._calcAngle(r, o, e);
              if (3.1 < s && 3.1 < a && 3.1 < l) return [];
              var u = [];
              return (u = u.concat(this._adaptiveSample(t, o, i + 1, n))).push(o), u.concat(this._adaptiveSample(o, e, i + 1, r))
            },
            _calcGreatCircle: function(t, e) {
              if (e = this._normalizeLatLng(e, t), t.equals(e, 1)) return [t, e];
              if (180 == Math.abs(e.lng - t.lng)) {
                var i = 0 < t.lat + e.lat ? 90 : -90;
                return [t, DG.latLng(i, t.lng), DG.latLng(i, e.lng), e]
              }
              var o = [];
              o.push(t), (o = o.concat(this._adaptiveSample(t, e, 0))).push(e);
              for (var n = 1; n < o.length; n++) o[n] = this._normalizeLatLng(o[n], o[n - 1]);
              return o
            },
            _addLegs: function(e) {
              var i = this.options.pathStyles,
                o = this._calcGreatCircle(e.getLatLng(), this._points[e._pos + 1].getLatLng());
              e._legs = {}, Object.keys(i).forEach(function(t) {
                e._legs[t] = DG.polyline(o, i[t]).addTo(this._layers[t])
              }, this), e._legs.mouse._point = e.once("remove", this._clearRemovingPointLegs, this), this.options.editable && !DG.Browser.mobile && e._legs.mouse.on("mousedown", this._insertPointInLine, this), this._map && this._layers.mouse.addLayer(e._legs.mouse)
            },
            _clearRemovingPointLegs: function(t) {
              this._removeLegs(t.target)
            },
            _removeLegs: function(e) {
              e._legs && (Object.keys(e._legs).forEach(function(t) {
                this._layers[t].removeLayer(e._legs[t])
              }, this), e._legs = null)
            },
            _updateLegs: function(e, t) {
              var i, o = e.getLatLng(),
                n = this._points[e._pos - 1],
                r = this._points[e._pos + 1];
              n && !t && (i = this._calcGreatCircle(n.getLatLng(), o), Object.keys(n._legs).forEach(function(t) {
                n._legs[t].setLatLngs(i)
              })), r && (i = this._calcGreatCircle(o, r.getLatLng()), Object.keys(e._legs).forEach(function(t) {
                e._legs[t].setLatLngs(i)
              }))
            },
            _calcDistance: function(t, e) {
              for (var i = e || 0, o = t ? t._pos : this._points.length - 1, n = 0; n < o; n++) i += this._points[n].getLatLng().distanceTo(this._points[n + 1].getLatLng());
              return i
            },
            _getFormatedDistance: function() {
              var t = this._calcDistance.apply(this, arguments),
                e = "m";
              return [(t = 1e3 < t ? (e = "km", 1e3 < (t /= 1e3) ? (t = t.toFixed()).slice(0, -3) + " " + t.slice(-3) : t.toFixed(2).split(".").join(this.t("delimiter"))) : Math.round(t)) || 0, " ", this.t(e)].join("")
            },
            _updateDistance: function() {
              this._map && this._points.length && this._points[this._points.length - 1].setText(this._getFormatedDistance())
            }
          }), DG.ruler = function(t, e) {
            return new DG.Ruler(t, e)
          }, DG.Ruler.LayeredMarker = DG.Marker.extend({
            options: {
              draggable: !1,
              keyboard: !1,
              riseOnHover: !0,
              pane: "rulerMarkerPane",
              textDirection: "auto",
              iconHTML: ['<img class="dg-ruler__label-spacer" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="26" height="26" />', '<div class="dg-ruler__label-container">', '    <div class="dg-ruler__point"></div>', '    <span class="dg-ruler__label-distance">0 км</span>', '    <span class="dg-ruler__label-remove-link"></span>', '    <div class="dg-ruler__remove-link-overlay"></div>', "</div>"].join("\n")
            },
            statics: {
              domClass: "dg-ruler__label"
            },
            addTo: function(t, e) {
              return Object.keys(this._layers).forEach(function(t) {
                e[t].addLayer(this._layers[t])
              }, this), this._viewport = e, DG.Marker.prototype.addTo.call(this.on("move", this._onMove), t)
            },
            onRemove: function(t) {
              return Object.keys(this._layers).forEach(function(t) {
                this._viewport[t].removeLayer(this._layers[t])
              }, this), this.off("move", this._onMove), this._viewport = null, this._style = null, DG.Marker.prototype.onRemove.call(this, t)
            },
            setText: function(t) {
              return this._iconCollapsed && this.expand(), this._iconNodes.label.innerHTML = t, this._iconNodes.label.setAttribute("dir", this.options.textDirection), this
            },
            setPointStyle: function(e) {
              return this._style !== e && Object.keys(this._style = e).forEach(function(t) {
                this._layers[t].setStyle(e[t])
              }, this), this
            },
            expand: function() {
              return this._iconCollapsed = !1, this._iconNodes.container.style.display = "block", this._iconNodes.spacer.style.display = "none", this
            },
            collapse: function() {
              return this._iconCollapsed = !0, this._iconNodes.container.style.display = "none", this._iconNodes.spacer.style.display = "block", this
            },
            querySelector: function(t) {
              return this._icon.querySelector("." + DG.Ruler.LayeredMarker.domClass + "-" + t)
            },
            _onMove: function(t) {
              var e = t.latlng;
              Object.keys(this._layers).forEach(function(t) {
                this._layers[t].setLatLng(e)
              }, this)
            },
            _initIcon: function() {
              DG.Marker.prototype._initIcon.call(this), this._iconCollapsed = !0, this._icon.style.width = "", this._iconNodes = {
                label: this.querySelector("distance"),
                spacer: this.querySelector("spacer"),
                container: this.querySelector("container")
              }
            },
            _setPos: function(t) {
              L.DomUtil.setPosition(this._icon, t), this._shadow && L.DomUtil.setPosition(this._shadow, t)
            },
            _afterInit: function() {
              this._layers = this.options.layers || null, this.options.icon = DG.divIcon({
                className: DG.Ruler.LayeredMarker.domClass,
                iconSize: [26, 26],
                iconAnchor: [13, 13],
                html: this.options.iconHTML
              })
            }
          }), DG.Ruler.LayeredMarker.addInitHook("_afterInit"), DG.Ruler.layeredMarker = function(t, e) {
            return new DG.Ruler.LayeredMarker(t, e)
          };
          var rulerRenderer = DG.svg({
              pane: "rulerPane"
            }),
            hoverRenderer = DG.svg({
              pane: "rulerPane"
            });

          function i1(t, e) {
            return t.s(e.get(["purpose"], !1), e, {
              block: j1
            }, {}).s(e.get(["address"], !1), e, {
              block: k1
            }, {}).s(e.get(["description"], !1), e, {
              block: n1
            }, {})
          }

          function j1(t, e) {
            return t.w('<div class="dg-map-geoclicker__purpose dg-map-geoclicker__purpose_type_sight">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function k1(t, e) {
            return t.w('<address class="dg-map-geoclicker__address">').s(e.getPath(!1, ["address", "header"]), e, {
              block: l1
            }, {}).s(e.getPath(!1, ["address", "drilldown"]), e, {
              block: m1
            }, {}).w("</address>")
          }

          function l1(t, e) {
            return t.w('<div class="dg-map-geoclicker__address-header">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function m1(t, e) {
            return t.w('<div class="dg-map-geoclicker__address-drilldown">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function n1(t, e) {
            return t.w('<div class="dg-map-geoclicker__sight-description">').f(e.getPath(!0, []), e, "h").w("</div>").s(e.get(["showMoreText"], !1), e, {
              block: o1
            }, {})
          }

          function o1(t, e) {
            return t.w('<a class="dg-map-geoclicker__show-more-sights-link" href="javascript:void(0)">').f(e.getPath(!0, []), e, "h").w("</a>")
          }

          function b1(t, e) {
            return t.s(e.get(["title"], !1), e, {
              block: c1
            }, {})
          }

          function c1(t, e) {
            return t.w('<div class="dg-popup__header-title">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function K0(t, e) {
            return t.x(e.get(["btns"], !1), e, {
              block: L0
            }, {})
          }

          function L0(t, e) {
            return t.w('<footer class="dg-popup__footer-buttons">').s(e.get(["btns"], !1), e, {
              block: M0
            }, {}).w("</footer>")
          }

          function M0(t, e) {
            return t.w('<div class="dg-popup__footer-button-wrapper"><a class="dg-popup__button_name_').f(e.get(["name"], !1), e, "h").w(" dg-popup__footer-button").x(e.get(["icon"], !1), e, {
              block: N0
            }, {}).w('"').x(e.get(["href"], !1), e, {
              else: O0,
              block: P0
            }, {}).w(">").f(e.get(["label"], !1), e, "h").w("</a></div>")
          }

          function N0(t, e) {
            return t.w(" dg-popup__footer-icon-button")
          }

          function O0(t, e) {
            return t.w('href="javascript:void(0)"')
          }

          function P0(t, e) {
            return t.w("href=").f(e.get(["href"], !1), e, "h").w(' target="_blank"')
          }

          function G0(t, e) {
            return t.w('<div class="dg-popup__footer-title"><a class="dg-popup__show-less-house-link" href="javascript:void(0)">').f(e.get(["hideFirmsText"], !1), e, "h").w("</a></div>")
          }

          function t0(t, e) {
            return t.w('<div class="dg-preloader dg-preloader_scheme_regular dg-preloader_animation_').x(e.get(["anim"], !1), e, {
              else: u0,
              block: v0
            }, {}).x(e.get(["small"], !1), e, {
              block: w0
            }, {}).w('"></div>')
          }

          function u0(t, e) {
            return t.w("false")
          }

          function v0(t, e) {
            return t.w("true")
          }

          function w0(t, e) {
            return t.w(" dg-preloader_size_small")
          }

          function a0(t, e) {
            return t.s(e.get(["address"], !1), e, {
              block: b0
            }, {}).s(e.get(["purpose"], !1), e, {
              block: e0
            }, {}).s(e.get(["attractions"], !1), e, {
              block: f0
            }, {})
          }

          function b0(t, e) {
            return t.w('<address class="dg-map-geoclicker__address">').s(e.getPath(!1, ["address", "header"]), e, {
              block: c0
            }, {}).s(e.getPath(!1, ["address", "drilldown"]), e, {
              block: d0
            }, {}).w("</address>")
          }

          function c0(t, e) {
            return t.w('<div class="dg-map-geoclicker__address-header">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function d0(t, e) {
            return t.w('<div class="dg-map-geoclicker__address-drilldown">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function e0(t, e) {
            return t.w('<div class="dg-map-geoclicker__purpose">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function f0(t, e) {
            return t.w('<div class="dg-map-geoclicker__purpose dg-map-geoclicker__purpose_type_sight">').f(e.getPath(!0, []), e, "h").w("</div>")
          }

          function S_(t, e) {
            return t.x(e.get(["payments"], !1), e, {
              block: T_
            }, {})
          }

          function T_(t, e) {
            return t.w('<section class="dg-firm-card__aa"><ul class="dg-firm-card__aa-list">').s(e.get(["payments"], !1), e, {
              block: U_
            }, {}).w("</ul></section>")
          }

          function U_(t, e) {
            return t.w('<li class="dg-firm-card__aa-list-item">').f(e.getPath(!0, []), e, "h").w("</li>")
          }

          function O_(t, e) {
            return t.w('<a id="').f(e.getPath(!1, ["firm", "id"]), e, "h").w('" class="dg-popup__link" href="#">').f(e.getPath(!1, ["firm", "name"]), e, "h").w("</a>")
          }

          function QZ(t, e) {
            return t.w('<div class="dg-firm-card__schedule dg-schedule dg-schedule_open_').x(e.getPath(!1, ["forecast", "open"]), e, {
              else: RZ,
              block: SZ
            }, {}).w(" dg-schedule_works-everyday_").x(e.getPath(!1, ["schedule", "everyday"]), e, {
              else: TZ,
              block: UZ
            }, {}).w('">').x(e.get(["schedule"], !1), e, {
              block: VZ
            }, {}).w("</div>")
          }

          function RZ(t, e) {
            return t.w("false")
          }

          function SZ(t, e) {
            return t.w("true")
          }

          function TZ(t, e) {
            return t.w("false")
          }

          function UZ(t, e) {
            return t.w("true")
          }

          function VZ(t, e) {
            return t.x(e.getPath(!1, ["forecast", "today"]), e, {
              block: WZ
            }, {}).s(e.getPath(!1, ["forecast", "now"]), e, {
              block: $Z
            }, {}).nx(e.getPath(!1, ["schedule", "everyday"]), e, {
              block: a$
            }, {})
          }

          function WZ(t, e) {
            return t.w('<div class="dg-schedule__today"><div class="dg-schedule__today-inner">').f(e.getPath(!1, ["forecast", "today", "text"]), e, "h").w("&nbsp;").x(e.getPath(!1, ["forecast", "today", "from"]), e, {
              block: XZ
            }, {}).x(e.getPath(!1, ["schedule", "lunch"]), e, {
              block: YZ
            }, {}).w("</div></div>")
          }

          function XZ(t, e) {
            return t.f(e.getPath(!1, ["forecast", "today", "from"]), e, "h").w("&ndash;").f(e.getPath(!1, ["forecast", "today", "to"]), e, "h")
          }

          function YZ(t, e) {
            return t.w(",&nbsp;").f(e.getPath(!1, ["forecast", "today", "lunchStr"]), e, "h").w("&nbsp;").s(e.getPath(!1, ["schedule", "lunch"]), e, {
              block: ZZ
            }, {})
          }

          function ZZ(t, e) {
            return t.f(e.get(["from"], !1), e, "h").w("&ndash;").f(e.get(["to"], !1), e, "h")
          }

          function $Z(t, e) {
            return t.w('<div class="dg-schedule__now"><span class="dg-schedule__now-text">').f(e.getPath(!0, []), e, "h").s(e.getPath(!1, ["schedule", "comment"]), e, {
              block: _Z
            }, {}).w("</span></div>")
          }

          function _Z(t, e) {
            return t.w(", ").f(e.getPath(!0, []), e, "h")
          }

          function a$(t, e) {
            return t.x(e.getPath(!1, ["schedule", "week"]), e, {
              block: b$
            }, {})
          }

          function b$(t, e) {
            return t.x(e.getPath(!1, ["schedule", "week", "evently"]), e, {
              block: c$
            }, {}).x(e.getPath(!1, ["schedule", "week", "table"]), e, {
              block: k$
            }, {})
          }

          function c$(t, e) {
            return t.w('<div class="dg-schedule__table">').s(e.getPath(!1, ["schedule", "week", "evently"]), e, {
              block: d$
            }, {}).w("</div>")
          }

          function d$(t, e) {
            return t.w('<div class="dg-schedule__string">').x(e.get(["alltime"], !1), e, {
              block: e$
            }, {}).x(e.get(["everyday"], !1), e, {
              else: f$,
              block: g$
            }, {}).x(e.get(["holiday"], !1), e, {
              else: h$,
              block: j$
            }, {}).w("</div>")
          }

          function e$(t, e) {
            return t.f(e.get(["alltimeStr"], !1), e, "h")
          }

          function f$(t, e) {
            return t.f(e.get(["dayList"], !1), e, "h")
          }

          function g$(t, e) {
            return t.f(e.getPath(!1, ["forecast", "today", "text"]), e, "h")
          }

          function h$(t, e) {
            return t.w('<span class="schedule__string-time">&nbsp;').f(e.get(["from"], !1), e, "h").w("&ndash;").f(e.get(["to"], !1), e, "h").w("</span>").s(e.get(["lunch"], !1), e, {
              block: i$
            }, {})
          }

          function i$(t, e) {
            return t.w("<p>").f(e.get(["lunchStr"], !1), e, "h").w('&mdash;<span class="schedule__string-time">').f(e.get(["from"], !1), e, "h").w("&ndash;").f(e.get(["to"], !1), e, "h").w("</span></p>")
          }

          function j$(t, e) {
            return t.w('&nbsp;&mdash;<span class="schedule__string-time">&nbsp;').f(e.get(["holidayStr"], !1), e, "h").w("</span>")
          }

          function k$(t, e) {
            return t.w('<div><div class="dg-schedule__table"><div class="dg-schedule__tc dg-schedule__tc_pre"><div class="dg-schedule__day-name">&nbsp;</div><div class="dg-schedule__table-clock dg-schedule__td"></div>').x(e.getPath(!1, ["schedule", "week", "hasLunch"]), e, {
              block: l$
            }, {}).w("</div>").s(e.getPath(!1, ["schedule", "week", "table"]), e, {
              block: m$
            }, {}).w("</div>  </div>")
          }

          function l$(t, e) {
            return t.w('<div class="dg-schedule__table-lunch dg-schedule__td"></div>')
          }

          function m$(t, e) {
            return t.h("if", e, {
              block: n$
            }, {
              cond: o$
            }, "h").w('<div class="dg-schedule__tc').x(e.get(["active"], !1), e, {
              block: p$
            }, {}).w('"><div class="dg-schedule__day-name">').f(e.get(["key"], !1), e, "h").w('</div><div class="dg-schedule__td">').x(e.get(["from"], !1), e, {
              else: q$,
              block: r$
            }, {}).w("</div>").s(e.get(["lunch"], !1), e, {
              block: s$
            }, {}).w("</div> ").h("if", e, {
              block: v$
            }, {
              cond: w$
            }, "h")
          }

          function n$(t, e) {
            return t.w('<span class="dg-schedule__table-cell-group">')
          }

          function o$(t, e) {
            return t.w("(").f(e.get(["$idx"], !1), e, "h").w(" == ").f(e.get(["$len"], !1), e, "h").w(" - 2)")
          }

          function p$(t, e) {
            return t.w(" dg-schedule__tc_active_true")
          }

          function q$(t, e) {
            return t.w("&ndash;")
          }

          function r$(t, e) {
            return t.f(e.get(["from"], !1), e, "h").w(" ").f(e.get(["to"], !1), e, "h")
          }

          function s$(t, e) {
            return t.w('<div class="dg-schedule__td">').x(e.get(["from"], !1), e, {
              else: t$,
              block: u$
            }, {}).w("</div>")
          }

          function t$(t, e) {
            return t.w("&ndash;")
          }

          function u$(t, e) {
            return t.f(e.get(["from"], !1), e, "h").w(" ").f(e.get(["to"], !1), e, "h")
          }

          function v$(t, e) {
            return t.w("</span>")
          }

          function w$(t, e) {
            return t.w("(").f(e.get(["$idx"], !1), e, "h").w(" == ").f(e.get(["$len"], !1), e, "h").w(")")
          }

          function xZ(t, e) {
            return t.s(e.get(["rubrics"], !1), e, {
              block: yZ
            }, {})
          }

          function yZ(t, e) {
            return t.w('<section class="dg-firm-card__rubrics">').x(e.get(["primary"], !1), e, {
              block: zZ
            }, {}).x(e.get(["additional"], !1), e, {
              block: BZ
            }, {}).w("</section>")
          }

          function zZ(t, e) {
            return t.w('<ul class="dg-firm-card__rubrics-list dg-firm-card__rubrics-list_type_primary">').s(e.get(["primary"], !1), e, {
              block: AZ
            }, {}).w("</ul>")
          }

          function AZ(t, e) {
            return t.w('<li class="dg-firm-card__rubrics-list-item">').f(e.get(["name"], !1), e, "h").w("</li>")
          }

          function BZ(t, e) {
            return t.w('<ul class="dg-firm-card__rubrics-list dg-firm-card__rubrics-list_type_additional">').s(e.get(["additional"], !1), e, {
              block: CZ
            }, {}).w("</ul>")
          }

          function CZ(t, e) {
            return t.w('<li class="dg-firm-card__rubrics-list-item">').f(e.get(["name"], !1), e, "h").w("</li>")
          }

          function $Y(t, e) {
            return t.w('<div class="dg-popup__header-title dg-popup__header-title_for_firmcard" title="').f(e.get(["firmName"], !1), e, "h").w('">').f(e.get(["firmName"], !1), e, "h").w("</div>").x(e.get(["links"], !1), e, {
              block: _Y
            }, {})
          }

          function _Y(t, e) {
            return t.w('<div class="dg-popup__header-links">').s(e.get(["links"], !1), e, {
              block: aZ
            }, {}).w("</div>")
          }

          function aZ(t, e) {
            return t.h("eq", e, {
              else: bZ,
              block: eZ
            }, {
              key: fZ,
              value: "flamp_stars",
              type: "string"
            }, "h")
          }

          function bZ(t, e) {
            return t.w('<a class="dg-popup__header-link dg-popup__link dg-popup__link_type_').f(e.get(["name"], !1), e, "h").w('"').x(e.get(["href"], !1), e, {
              else: cZ,
              block: dZ
            }, {}).w(">").f(e.get(["label"], !1), e, "h").w("</a>")
          }

          function cZ(t, e) {
            return t.w('href="javascript:void(0)"')
          }

          function dZ(t, e) {
            return t.w("href=").f(e.get(["href"], !1), e, "h").w(' target="_blank"')
          }

          function eZ(t, e) {
            return t.w('<div class="dg-popup__rating"><div class="dg-popup__rating-stars" style="width: ').f(e.get(["width"], !1), e, "h").w('%"></div></div>')
          }

          function fZ(t, e) {
            return t.f(e.get(["name"], !1), e, "h")
          }

          function vY(t, e) {
            return t.s(e.get(["groups"], !1), e, {
              block: wY
            }, {})
          }

          function wY(t, e) {
            return t.s(e.get(["contacts"], !1), e, {
              block: xY
            }, {})
          }

          function xY(t, e) {
            return t.h("select", e, {
              block: yY
            }, {
              key: e.get(["type"], !1),
              type: "string"
            }, "h")
          }

          function yY(t, e) {
            return t.h("eq", e, {
              block: zY
            }, {
              value: "phone",
              type: "string"
            }, "h").h("eq", e, {
              block: BY
            }, {
              value: "fax",
              type: "string"
            }, "h").h("eq", e, {
              block: DY
            }, {
              value: "website",
              type: "string"
            }, "h").h("eq", e, {
              block: EY
            }, {
              value: "email",
              type: "string"
            }, "h")
          }

          function zY(t, e) {
            return t.w('<div class="dg-firm-card__phone dg-firm-card__icon"><span class="dg-firm-card__phone-num">').f(e.get(["text"], !1), e, "h").s(e.get(["comment"], !1), e, {
              block: AY
            }, {}).w("</span></div>")
          }

          function AY(t, e) {
            return t.w('<span class="dg-firm-card__comment" title="').f(e.getPath(!0, []), e, "h").w('">&mdash;&nbsp;&nbsp;').f(e.getPath(!0, []), e, "h").w("</span>")
          }

          function BY(t, e) {
            return t.w('<div class="dg-firm-card__phone dg-firm-card__icon"><span class="dg-firm-card__phone-num">').f(e.get(["text"], !1), e, "h").s(e.get(["comment"], !1), e, {
              block: CY
            }, {}).w("</span></div>")
          }

          function CY(t, e) {
            return t.w('<span class="dg-firm-card__comment" title="').f(e.getPath(!0, []), e, "h").w('">&mdash;&nbsp;&nbsp;').f(e.getPath(!0, []), e, "h").w("</span>")
          }

          function DY(t, e) {
            return t.w('<div class="dg-firm-card__link dg-firm-card__site dg-firm-card__icon"><a href="').f(e.get(["url"], !1), e, "h").w('" target="_blank" class="dg-link_scheme_dark dg-firm-card__sitelink">').f(e.get(["text"], !1), e, "h").w("</a></div>")
          }

          function EY(t, e) {
            return t.w('<div class="dg-firm-card__link dg-firm-card__email dg-firm-card__icon"><a href="mailto:').f(e.get(["value"], !1), e, "h").w('">').f(e.get(["value"], !1), e, "h").w("</a></div>")
          }

          function oY(t, e) {
            return t.w('<address class="dg-firm-card__address dg-firm-card__icon">').f(e.get(["address"], !1), e, "h").s(e.get(["comment"], !1), e, {
              block: pY
            }, {}).w("</address>")
          }

          function pY(t, e) {
            return t.w('<span class="dg-firm-card__comment">&mdash; ').f(e.getPath(!0, []), e, "h").w("</span>")
          }

          function hY(t, e) {
            return t.w('<div class="dg-map-geoclicker__purpose dg-map-geoclicker__purpose_type_').f(e.get(["type"], !1), e, "h").w('">').f(e.get(["purpose"], !1), e, "h").w("</div>").s(e.get(["drilldown"], !1), e, {
              block: iY
            }, {})
          }

          function iY(t, e) {
            return t.w('<div class="dg-map-geoclicker__drilldown">').f(e.get(["drilldown"], !1), e, "h").w("</div>")
          }

          function ZX(t, e) {
            return t.w('<div class="dg-attribution__copyright"><ul class="dg-attribution__links"><li class="dg-attribution__link-item">').x(e.get(["osm"], !1), e, {
              else: $X,
              block: _X
            }, {}).w('</li><li class="dg-attribution__link-item"><a href="').f(e.get(["copyright_license"], !1), e, "h").w('" target="_blank" class="dg-attribution__link">').f(e.get(["license_agreement"], !1), e, "h").w('</a></li></ul><a href="').f(e.get(["copyright_logo"], !1), e, "h").w('" target="_blank" class="dg-attribution__logo-url"></a></div>')
          }

          function $X(t, e) {
            return t.w('<a href="').f(e.get(["copyright_apilink"], !1), e, "h").w('" target="_blank" class="dg-attribution__link" dir="').f(e.get(["dir"], !1), e, "h").w('">').f(e.get(["work_on"], !1), e, "h").w("</a>")
          }

          function _X(t, e) {
            return t.w('© <a href="http://www.openstreetmap.org/copyright" target="_blank" class="dg-attribution__link">OpenStreetMap contributors</a>, <a href="').f(e.get(["copyright_apilink"], !1), e, "h").w('" target="_blank" class="dg-attribution__link" dir="').f(e.get(["dir"], !1), e, "h").w('">').f(e.get(["work_on_with_osm"], !1), e, "h").w("</a>")
          }
          DG.Ruler.mergeOptions({
            pathStyles: {
              back: {
                color: "#fff",
                opacity: 1,
                weight: 12,
                pointerEvents: "none",
                noClip: !0,
                renderer: rulerRenderer,
                smoothFactor: 0
              },
              middle: {
                color: "#0da5d5",
                opacity: 1,
                weight: 4,
                pointerEvents: "none",
                noClip: !0,
                renderer: rulerRenderer,
                smoothFactor: 0
              },
              mouse: {
                color: "#fff",
                opacity: DG.Browser.vml ? .1 : 0,
                weight: DG.Browser.touch ? 40 : 20,
                pointerEvents: "painted",
                noClip: !0,
                renderer: hoverRenderer,
                smoothFactor: 0
              }
            },
            iconStyles: {
              large: {
                back: {
                  color: "#fff",
                  opacity: 1,
                  fillColor: "#fff",
                  fillOpacity: 1,
                  weight: 1,
                  radius: 13,
                  renderer: rulerRenderer
                },
                middle: {
                  color: "#0da5d5",
                  opacity: 1,
                  fillColor: "#0da5d5",
                  fillOpacity: 1,
                  weight: 1,
                  radius: 9,
                  renderer: rulerRenderer
                },
                front: {
                  color: "#fff",
                  opacity: 1,
                  fillColor: "#0da5d5",
                  fillOpacity: 1,
                  weight: 4,
                  radius: 5,
                  renderer: rulerRenderer
                }
              },
              small: {
                back: {
                  color: "#fff",
                  opacity: 1,
                  fillColor: "#fff",
                  fillOpacity: 1,
                  weight: 1,
                  radius: 9,
                  renderer: rulerRenderer
                },
                middle: {
                  color: "#0da5d5",
                  opacity: 1,
                  fillColor: "#0da5d5",
                  fillOpacity: 1,
                  weight: 1,
                  radius: 5,
                  renderer: rulerRenderer
                },
                front: {
                  color: "#fff",
                  opacity: 1,
                  fillColor: "#0da5d5",
                  fillOpacity: 1,
                  weight: 4,
                  radius: 2,
                  renderer: rulerRenderer
                }
              }
            }
          }), DG.Ruler.Dictionary.ru = {
            km: "км",
            m: "м",
            delimiter: ","
          }, DG.Ruler.Dictionary.it = {
            km: "km",
            m: "m",
            delimiter: ","
          }, DG.Ruler.Dictionary.cs = {
            km: "km",
            m: "m",
            delimiter: ","
          }, DG.Ruler.Dictionary.es = {
            km: "km",
            m: "m",
            delimiter: ","
          }, DG.Ruler.Dictionary.en = {
            km: "km",
            m: "m",
            delimiter: "."
          }, DG.Ruler.Dictionary.ar = {
            km: "كم",
            m: "م",
            delimiter: "."
          }, DG.Control.Ruler = DG.RoundControl.extend({
            options: {
              position: "topright",
              iconClass: "ruler"
            },
            statics: {
              Dictionary: {}
            },
            initialize: function(t) {
              DG.setOptions(this, t), DG.extend(this, {
                _active: !1,
                _drawingHelper: null,
                _geoclickerNeedRestore: !1
              }).on(this._controlEvents, this)
            },
            _controlEvents: {
              add: function() {
                this._drawingHelper = DG.ruler([])
              },
              click: function() {
                this._active = !this._active, this._active ? (this.setState("active"), this._startDrawing()) : (this.setState(""), this._finishDrawing())
              },
              remove: function() {
                this.off(this._controlEvents, this), this._active && (this._map.removeLayer(this._drawingHelper), this._active = !1), this._drawingHelper = null
              }
            },
            _startDrawing: function() {
              this._map.addLayer(this._drawingHelper).on("click", this._handleMapClick, this), this._map.fire("rulerstart")
            },
            _finishDrawing: function() {
              this._map.off("click", this._handleMapClick, this).removeLayer(this._drawingHelper), this._drawingHelper.setLatLngs([]), this._map.fire("rulerend")
            },
            _handleMapClick: function(t) {
              this._drawingHelper.addLatLng(t.latlng)
            },
            _renderTranslation: function() {
              this._link.title = this.t("button_title")
            }
          }), DG.control.ruler = function(t) {
            return new DG.Control.Ruler(t)
          }, DG.Map.mergeOptions({
            rulerControl: !1
          }), DG.Map.addInitHook(function() {
            this.options.rulerControl && (this.rulerControl = DG.control.ruler(this.options.rulerControl), this.addControl(this.rulerControl))
          }), DG.Control.Ruler.Dictionary.ru = {
            button_title: "Линейка"
          }, DG.Control.Ruler.Dictionary.it = {
            button_title: "Righello"
          }, DG.Control.Ruler.Dictionary.cs = {
            button_title: "Pravítko"
          }, DG.Control.Ruler.Dictionary.es = {
            button_title: "Regla"
          }, DG.Control.Ruler.Dictionary.en = {
            button_title: "Ruler"
          }, DG.Control.Ruler.Dictionary.ar = {
            button_title: "مسطرة"
          }, dust.register("DGAttribution/copyright", ZX), _X.__dustBody = $X.__dustBody = ZX.__dustBody = !0, dust.register("DGGeoclicker/cityarea", hY), iY.__dustBody = hY.__dustBody = !0, dust.register("DGGeoclicker/firmCardAddr", oY), pY.__dustBody = oY.__dustBody = !0, dust.register("DGGeoclicker/firmCardContacts", vY), EY.__dustBody = DY.__dustBody = CY.__dustBody = BY.__dustBody = AY.__dustBody = zY.__dustBody = yY.__dustBody = xY.__dustBody = wY.__dustBody = vY.__dustBody = !0, dust.register("DGGeoclicker/firmCardHeader", $Y), fZ.__dustBody = eZ.__dustBody = dZ.__dustBody = cZ.__dustBody = bZ.__dustBody = aZ.__dustBody = _Y.__dustBody = $Y.__dustBody = !0, dust.register("DGGeoclicker/firmCardRubric", xZ), CZ.__dustBody = BZ.__dustBody = AZ.__dustBody = zZ.__dustBody = yZ.__dustBody = xZ.__dustBody = !0, dust.register("DGGeoclicker/firmCardSchedule", QZ), w$.__dustBody = v$.__dustBody = u$.__dustBody = t$.__dustBody = s$.__dustBody = r$.__dustBody = q$.__dustBody = p$.__dustBody = o$.__dustBody = n$.__dustBody = m$.__dustBody = l$.__dustBody = k$.__dustBody = j$.__dustBody = i$.__dustBody = h$.__dustBody = g$.__dustBody = f$.__dustBody = e$.__dustBody = d$.__dustBody = c$.__dustBody = b$.__dustBody = a$.__dustBody = _Z.__dustBody = $Z.__dustBody = ZZ.__dustBody = YZ.__dustBody = XZ.__dustBody = WZ.__dustBody = VZ.__dustBody = UZ.__dustBody = TZ.__dustBody = SZ.__dustBody = RZ.__dustBody = QZ.__dustBody = !0, dust.register("DGGeoclicker/firmlistItem", O_), O_.__dustBody = !0, dust.register("DGGeoclicker/frimCardPayments", S_), U_.__dustBody = T_.__dustBody = S_.__dustBody = !0, dust.register("DGGeoclicker/house", a0), f0.__dustBody = e0.__dustBody = d0.__dustBody = c0.__dustBody = b0.__dustBody = a0.__dustBody = !0, dust.register("DGGeoclicker/loader", t0), w0.__dustBody = v0.__dustBody = u0.__dustBody = t0.__dustBody = !0, dust.register("DGGeoclicker/popupFooter", G0), G0.__dustBody = !0, dust.register("DGGeoclicker/popupFooterBtns", K0), P0.__dustBody = O0.__dustBody = N0.__dustBody = M0.__dustBody = L0.__dustBody = K0.__dustBody = !0, dust.register("DGGeoclicker/popupHeader", b1), c1.__dustBody = b1.__dustBody = !0, dust.register("DGGeoclicker/sight", i1), o1.__dustBody = n1.__dustBody = m1.__dustBody = l1.__dustBody = k1.__dustBody = j1.__dustBody = i1.__dustBody = !0, DG.fallbackProjectsList = JSON.parse('[{"bounds":"POLYGON((34.280779 35.226702,34.230518 35.176645,34.311619 35.053578,34.333255 34.94624,34.30553 34.86475,34.246532 34.802092,34.131869 34.756001,33.987598 34.764336,33.917176 34.742875,33.835702 34.739903,33.790212 34.684859,33.72822 34.642865,33.448103 34.538793,33.259541 34.501493,33.192432 34.413254,33.066976 34.363612,32.915196 34.369952,32.805837 34.40138,32.743846 34.438844,32.58024 34.461878,32.38906 34.52014,32.257081 34.592284,32.192743 34.651138,32.082486 34.819072,32.02449 35.022688,32.045537 35.17596,32.115025 35.264403,32.213492 35.309184,32.362822 35.30542,32.471669 35.368093,32.671189 35.399121,32.678969 35.453037,32.711632 35.513637,32.766439 35.562413,32.837579 35.594163,32.949971 35.603965,33.302016 35.553834,33.553453 35.562031,33.937128 35.666397,34.067997 35.744069,34.543625 35.906784,34.67294 35.905835,34.78423 35.852299,34.837429 35.785874,34.855318 35.707916,34.841183 35.642705,34.776411 35.536547,34.710709 35.47953,34.280779 35.226702))","code":"cyprus","country_code":"cy","domain":"com.cy","flags":{"2gis_reviews":true,"flamp":false,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"173","name":"Cyprus","time_zone":{"name":"Asia/Nicosia","offset":180},"type":"region","zoom_level":{"max":19,"min":9}},{"bounds":"POLYGON((14.219495 49.934897,14.215528 50.17879,14.713797 50.181086,14.715245 49.937173,14.219495 49.934897))","code":"praha","country_code":"cz","domain":"cz","flags":{"2gis_reviews":true,"flamp":false,"metro":true,"public_transport":true,"road_network":true},"id":"92","name":"Praha","time_zone":{"name":"Europe/Prague","offset":120},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((-70.483526 -33.665691,-70.857156 -33.660641,-70.849333 -33.293335,-70.477276 -33.298315,-70.483526 -33.665691))","code":"santiago","country_code":"cl","domain":"cl","flags":{"2gis_reviews":false,"flamp":false,"metro":true,"public_transport":true,"road_network":true},"id":"101","name":"Santiago","time_zone":{"name":"America/Santiago","offset":-240},"type":"region","zoom_level":{"max":19,"min":9}},{"bounds":"POLYGON((55.13142 25.544679,55.203999 25.567715,55.279599 25.566579,55.43176 25.759947,55.55436 25.811148,55.666094 25.897751,55.76817 25.925981,55.826597 26.007005,55.888369 26.151722,56.086425 26.050441,56.15912 26.062127,56.195513 25.979301,56.163975 25.946893,56.177561 25.892732,56.139167 25.8325,56.1725 25.769167,56.140833 25.735,56.143611 25.676111,56.191111 25.648056,56.201874 25.611984,56.253291 25.60219,56.266328 25.606335,56.254586 25.613159,56.264173 25.627665,56.418384 25.682657,56.549221 25.692716,56.591385 25.549234,56.602446 25.323577,56.585359 25.087633,56.594079 25.007481,56.323288 24.972644,56.348923 24.934376,56.338442 24.914535,56.259358 24.859817,56.205659 24.850507,56.201022 24.784219,56.144333 24.741556,56.060585 24.746639,56.036157 24.810922,55.978341 24.877363,55.980164 24.894492,56.062185 24.870801,56.042048 24.886589,56.058722 24.949126,56.042075 24.947686,56.045483 24.967887,56.006871 24.994727,55.960882 25.005958,55.910907 24.965663,55.851301 24.965812,55.812409 24.910874,55.836502 24.671031,55.793833 24.637012,55.816207 24.615223,55.767784 24.572526,55.764989 24.52949,55.834202 24.409554,55.833944 24.327733,55.759405 24.261142,55.752895 24.234821,55.833523 24.200902,55.954447 24.222568,55.969652 24.182449,55.960753 24.170318,56.017506 24.066605,55.902317 24.046941,55.833035 24.01459,55.801126 24.025482,55.781754 24.055948,55.731246 24.058066,55.485274 23.944384,55.533725 23.849352,55.531869 23.757286,55.569228 23.720734,55.572308 23.629646,55.452588 23.465217,55.430691 23.399593,55.416507 23.382151,55.401537 23.392525,55.232271 23.110348,55.216283 23.02621,55.227508 22.791619,55.21284 22.705686,55.137388 22.631591,52.58104 22.939203,51.590376 24.126971,51.589825 24.26588,51.529512 24.336352,51.416071 24.393194,51.466454 24.462489,51.565206 24.553035,51.589187 24.619704,51.586122 24.664189,52.02542 24.75828,52.309194 24.842176,52.378334 24.900336,52.337088 24.949252,52.345961 24.997718,52.405921 25.018775,52.450032 24.982958,52.647202 25.143128,52.894479 25.470458,54.182354 25.450646,55.13142 25.544679))","code":"dubai","country_code":"ae","domain":"ae","flags":{"2gis_reviews":true,"flamp":false,"metro":true,"public_transport":true,"road_network":true,"traffic":true},"id":"99","name":"UAE","time_zone":{"name":"Asia/Dubai","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((11.381405 45.733677,12.61199 45.701369,12.572035 45.071337,11.355023 45.102946,11.381405 45.733677))","code":"padova","country_code":"it","domain":"it","flags":{"2gis_reviews":false,"flamp":false,"metro":false,"public_transport":true,"road_network":false},"id":"66","name":"Venezia e Padova","time_zone":{"name":"Europe/Rome","offset":120},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((91.070624 53.65785,90.694431 53.829965,90.641338 53.937449,91.044722 54.011745,91.169475 54.054245,91.247741 54.10893,91.454448 54.134677,91.622967 54.067042,91.640045 53.973842,91.814639 53.94927,91.845442 53.91996,91.819053 53.85101,91.82396 53.765818,91.840532 53.753093,91.822802 53.717291,91.837259 53.573118,91.83061 53.553066,91.796923 53.549953,91.777709 53.528422,91.820605 53.472974,91.902092 53.464155,91.975795 53.380563,91.957949 53.348546,91.844535 53.29356,91.791986 53.215861,91.791488 53.190281,91.630564 53.142953,91.608241 53.066422,91.635951 52.945221,91.682944 52.871745,91.610779 52.766581,91.448948 52.715568,91.323567 52.698296,90.875829 53.015332,90.790707 53.059612,90.70189 53.141567,90.663858 53.198743,90.688715 53.225401,90.723102 53.232022,90.802796 53.311734,91.04732 53.437432,91.105621 53.481836,91.148065 53.559012,91.060276 53.614685,91.070624 53.65785))","code":"abakan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"69","name":"Абакан","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((50.989242 43.559453,50.700278 43.960347,50.548767 44.143806,50.310331 44.173939,50.159119 44.240731,50.077464 44.316906,50.050169 44.386403,50.033572 44.549467,49.924839 44.758753,49.858647 44.834275,49.815392 44.920822,49.816353 45.023361,49.847194 45.094706,49.8831 45.134367,50.017069 45.186872,50.314389 45.198264,50.4106 45.185556,50.707747 45.080803,50.871631 45.115622,51.078633 45.264022,51.269189 45.462642,51.342392 45.507019,51.730008 45.592703,52.155669 45.534531,52.290372 45.552439,52.471922 45.607825,52.541508 45.719714,53.021861 46.091373,53.191789 46.012055,53.684004 46.0156,53.895303 46.127348,53.968557 46.192437,53.971735 46.24613,54.30769 46.257033,54.504746 46.30105,54.692764 46.323051,54.832578 46.363543,55.089586 46.379528,55.270475 46.367362,55.487919 46.520131,55.602653 46.421094,55.657382 46.419648,55.698046 46.399684,55.81798 46.401193,55.824929 46.349698,55.860157 46.305272,55.820425 46.276012,55.837026 46.251191,55.90249 46.237314,55.95692 46.260008,55.981457 46.210459,56.04476 46.211476,56.121737 46.154545,56.201516 46.135755,56.286168 46.151583,56.46663 46.132189,56.516505 46.097356,56.552526 46.005868,56.605778 45.926133,56.744109 45.177249,55.998743 45.000314,56.001508 41.324124,55.876714 41.331786,55.816356 41.297155,55.811717 41.278338,55.743336 41.302058,55.721496 41.293192,55.727086 41.279493,55.63561 41.282813,55.603316 41.246392,55.600034 41.272913,55.576874 41.27195,55.567019 41.294407,55.545235 41.287966,55.557026 41.27561,55.542728 41.259293,55.499612 41.251587,55.450623 41.269299,55.442191 41.293651,55.430472 41.279495,55.398313 41.337222,55.315465 41.390882,55.119606 41.604653,55.066234 41.699339,54.949976 41.833213,54.952115 41.906308,54.928925 41.928325,54.779482 42.052549,54.21781 42.379087,53.570558 42.288924,52.984788 42.121175,52.449984 41.761967,52.335076 41.719338,52.259144 41.724447,52.229019 42.117106,52.258633 42.212153,52.440644 42.469697,52.392847 42.601758,52.195397 42.6508,51.836542 42.695872,51.737094 42.757403,51.635567 42.893483,51.557783 42.967481,51.262286 43.003889,51.132642 43.05145,51.077578 43.123231,51.071017 43.160703,51.096811 43.450783,50.989242 43.559453))","code":"aktau","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"196","name":"Актау","time_zone":{"name":"Asia/Aqtau","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((57.131233 50.565431,57.29241 50.584455,57.319324 50.522876,57.456565 50.507563,57.508771 50.537321,57.653998 50.489218,57.702377 50.502943,57.760821 50.488773,57.770117 50.410886,57.71458 50.374648,57.76243 50.353087,57.773313 50.330205,57.744175 50.275572,57.755202 50.257032,57.669871 50.241394,57.687866 50.19675,57.573892 50.188895,57.558014 50.169447,57.425888 50.121144,57.148367 50.120826,56.977926 50.152601,56.914478 50.21554,56.94188 50.275119,56.88205 50.313889,56.862849 50.343913,56.861403 50.3877,57.073194 50.556581,57.131233 50.565431))","code":"aktobe","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"167","name":"Актобе","time_zone":{"name":"Asia/Aqtobe","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((76.721521 43.311356,76.698817 43.366891,76.69697 43.442281,76.773217 43.495902,76.887808 43.478949,76.919061 43.491006,76.964974 43.461021,77.024019 43.475405,77.071052 43.468224,77.111197 43.420876,77.092545 43.384974,77.121697 43.350398,77.130764 43.288623,77.160741 43.243627,77.107785 43.073856,77.089632 43.070938,77.077184 43.034066,76.966515 43.049618,76.943479 43.033771,76.906183 43.037882,76.900697 43.083947,76.741722 43.103095,76.70909 43.167253,76.721521 43.311356))","code":"almaty","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"67","name":"Алматы","time_zone":{"name":"Asia/Almaty","offset":360},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((52.223466 54.858607,52.225581 54.896841,52.201091 54.925634,52.271902 54.972811,52.353207 54.986941,52.466983 54.87767,52.482409 54.827772,52.452724 54.803623,52.391155 54.816144,52.308586 54.807339,52.231899 54.837975,52.223466 54.858607))","code":"almetevsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"108","name":"Альметьевск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((177.442943 64.716762,177.461329 64.743255,177.548927 64.732752,177.536236 64.715542,177.442943 64.716762))","code":"anadyr","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"155","name":"Анадырь","time_zone":{"name":"Asia/Anadyr","offset":720},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((41.306107 44.718112,41.249612 44.671822,41.186821 44.715704,41.1145 44.66542,41.070272 44.69744,41.054013 44.687595,41.018874 44.743803,40.974331 44.728943,40.940735 44.766746,40.900976 44.752949,40.873061 44.793149,40.838805 44.781364,40.800459 44.857603,40.902811 44.893435,40.864347 44.961848,40.900608 44.987223,40.842616 45.033578,40.878791 45.056262,40.854148 45.076757,40.900974 45.107242,40.866832 45.134524,40.858846 45.150726,40.880047 45.165058,40.858388 45.184086,40.938913 45.241526,41.005788 45.241262,41.00537 45.229101,41.039447 45.22527,41.35348 45.223054,41.353171 45.186895,41.365911 45.186898,41.352481 45.150892,41.31891 45.15106,41.316496 45.091465,41.267332 45.056419,41.322559 45.016188,41.286438 44.991202,41.367978 44.932597,41.287273 44.860127,41.342416 44.830816,41.317765 44.793729,41.347284 44.746855,41.306107 44.718112))","code":"armawir","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"106","name":"Армавир","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.467082 64.829966,41.321175 64.812571,41.276671 64.284305,39.458118 64.301293,39.467082 64.829966))","code":"arkhangelsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"49","name":"Архангельск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((47.747405 46.794839,47.776244 46.800521,47.810135 46.761605,47.907265 46.740644,47.928378 46.720807,48.067759 46.731313,48.098791 46.712483,48.151499 46.714994,48.33634 46.663608,48.395222 46.544961,48.402786 46.492407,48.379384 46.340769,48.362235 46.327207,48.372658 46.316606,48.355751 46.22781,48.383153 46.195758,48.44409 46.171003,48.381341 46.137798,48.348806 46.057503,48.15419 46.054404,48.107321 46.033126,47.985383 46.019315,47.894663 46.029965,47.871002 46.061984,47.697541 46.053889,47.667071 46.097238,47.702048 46.117454,47.666533 46.152288,47.655593 46.258052,47.608108 46.303432,47.626158 46.340853,47.613269 46.362228,47.624706 46.701364,47.747405 46.794839))","code":"astrakhan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"8","name":"Астрахань","time_zone":{"name":"Europe/Astrakhan","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((51.81079 47.15804,51.773854 47.185327,51.783515 47.206253,51.838706 47.218498,51.861149 47.208672,51.876595 47.175483,51.983982 47.184051,52.057235 47.159303,52.067301 47.149367,52.044594 47.140455,52.046404 47.121763,52.091744 47.095943,51.972771 47.045744,51.928291 47.054367,51.917185 47.009789,51.882894 47.012164,51.873782 47.039007,51.837904 47.008341,51.823097 47.013373,51.852235 47.05764,51.819873 47.049269,51.780297 47.104107,51.81079 47.15804))","code":"atyrau","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"168","name":"Атырау","time_zone":{"name":"Asia/Atyrau","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((47.725427 52.036702,47.748714 52.060939,47.860251 52.057786,47.850971 52.029011,47.879672 52.020045,47.878343 51.997199,47.829159 51.970019,47.802026 51.964036,47.79878 51.97669,47.720913 51.954501,47.699814 52.016127,47.725427 52.036702))","code":"balakovo","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"121","name":"Балаково","time_zone":{"name":"Europe/Volgograd","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((83.928748 53.507088,83.958924 53.474057,84.085515 53.473398,84.175059 53.491398,84.244766 53.479354,84.252861 53.450982,84.212018 53.445806,84.220531 53.397514,84.153577 53.393644,84.113666 53.342338,84.065249 53.322099,84.085325 53.299145,84.007656 53.124723,83.829412 53.119967,83.841391 53.105761,83.82457 53.091551,83.752618 53.110593,83.765491 53.119643,83.743587 53.128187,83.66524 53.124648,83.62449 53.145085,83.62725 53.129512,83.597794 53.129087,83.480861 53.171378,83.447607 53.152209,83.423017 53.173034,83.440163 53.184845,83.393189 53.243041,83.420765 53.275431,83.355743 53.326489,83.417758 53.339642,83.39828 53.373223,83.359899 53.358989,83.345893 53.372393,83.4203 53.408614,83.423045 53.420274,83.385145 53.425419,83.41033 53.445014,83.401345 53.460413,83.454096 53.455281,83.510199 53.504089,83.604538 53.478418,83.69242 53.482115,83.700773 53.473259,83.686064 53.462011,83.70283 53.453045,83.773714 53.458918,83.928748 53.507088))","code":"barnaul","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"4","name":"Барнаул","time_zone":{"name":"Asia/Barnaul","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((36.408454 50.586924,36.364963 50.614887,36.375499 50.618519,36.351604 50.645128,36.360667 50.672724,36.498137 50.712983,36.5567 50.702049,36.558012 50.689755,36.58454 50.697503,36.598181 50.682437,36.660204 50.70429,36.707462 50.693417,36.800423 50.735202,36.792352 50.715029,36.80311 50.70913,36.953653 50.68767,36.916122 50.620099,36.793726 50.595649,36.791261 50.57059,36.74007 50.54822,36.707136 50.505906,36.607104 50.497135,36.610968 50.482069,36.422398 50.503675,36.407339 50.51763,36.460387 50.542201,36.458536 50.563008,36.408454 50.586924))","code":"belgorod","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"46","name":"Белгород","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((84.874519 52.630301,84.96163 52.640567,84.982697 52.620134,85.093095 52.688834,85.116926 52.689539,85.153911 52.634772,85.220059 52.615266,85.344146 52.674309,85.416886 52.616859,85.538556 52.454311,85.544664 52.424316,85.680389 52.416048,85.773647 52.385701,85.790168 52.29163,85.731543 52.277005,85.730345 52.210825,85.577013 52.212472,85.57808 52.180982,85.614329 52.140175,85.608661 52.111591,85.549344 52.104764,85.545184 52.090548,85.552467 52.04871,85.590302 52.027,85.584219 51.981935,85.544145 51.942899,85.558749 51.906102,85.415412 51.879329,85.364843 51.890686,85.252811 51.873429,85.052969 51.887588,84.909731 51.82692,84.777548 51.897267,84.763076 51.88263,84.715642 51.905948,84.678258 51.877171,84.59717 51.888289,84.558869 51.925041,84.512641 51.932725,84.500581 51.956761,84.464805 51.945612,84.450834 51.973785,84.463158 51.992048,84.504642 52.021509,84.532127 52.022362,84.553064 52.053188,84.504543 52.079354,84.473112 52.075977,84.449089 52.100058,84.573503 52.137237,84.503848 52.222385,84.483005 52.277609,84.588967 52.290758,84.612451 52.484775,84.573893 52.523347,84.680635 52.549619,84.669706 52.572998,84.874519 52.630301))","code":"biysk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"20","name":"Бийск","time_zone":{"name":"Asia/Barnaul","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((133.076389 48.722009,132.924515 48.698156,132.88111 48.731395,132.778214 48.736631,132.79836 48.781288,132.825762 48.781726,132.838483 48.89423,132.915111 48.887804,132.938004 48.851563,133.130378 48.732886,133.076389 48.722009))","code":"birobidzhan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"157","name":"Биробиджан","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((75.33643 42.85545,75.570302 42.830459,75.716812 42.797344,75.761433 42.833491,75.786311 42.899161,75.823518 42.940253,75.937224 42.955718,75.949176 42.933001,76.028275 42.911042,76.194148 42.931117,76.200932 42.91645,76.302069 42.910942,76.303927 42.874442,76.343846 42.860756,76.47828 42.884302,76.522591 42.922249,76.575247 42.906103,76.603487 42.916155,76.708886 42.904153,76.749231 42.921514,76.755876 42.949774,76.822744 42.955093,76.835842 42.982848,76.917246 42.965857,76.9719 42.986711,77.004469 42.98309,77.035094 42.947192,77.062577 42.976592,77.154973 42.972254,77.156765 42.944425,77.179907 42.946993,77.234786 42.911813,77.302013 42.916541,77.350501 42.898513,77.47156 42.939266,77.485265 42.924637,77.552523 42.941107,77.581041 42.915514,77.670445 42.917955,77.696993 42.903906,77.780651 42.914754,77.82376 42.884439,77.874056 42.888611,77.911121 42.870732,77.934015 42.881626,77.968122 42.85082,78.002178 42.870654,78.054338 42.847632,78.091759 42.849356,78.116667 42.864588,78.171543 42.860289,78.197829 42.881989,78.348808 42.854848,78.370535 42.886981,78.430884 42.878797,78.464812 42.896432,78.566261 42.511021,78.677523 42.274735,77.64754 41.928742,77.283159 41.907998,77.092381 41.914309,76.583726 41.973638,76.17608 42.104976,76.021959 42.228659,75.992606 42.278642,75.996152 42.316469,75.982604 42.334876,75.995431 42.383247,75.984839 42.390884,75.908185 42.398192,75.884981 42.362349,75.80915 42.354528,75.77166 42.393324,75.679856 42.418715,75.635548 42.448328,75.568927 42.419523,75.530117 42.424251,75.515018 42.454551,75.486241 42.434229,75.407376 42.424195,75.376071 42.450156,75.280345 42.417396,75.197902 42.435125,75.153735 42.42587,75.108622 42.4444,75.079342 42.420226,75.045402 42.419472,75.007472 42.445055,74.969555 42.423173,74.916158 42.438041,74.791378 42.409699,74.416615 42.409699,74.414462 42.78905,74.39828 42.813256,74.413494 42.891453,74.4117 43.079799,74.633389 43.080409,74.749879 42.989881,74.853304 42.999852,75.223534 42.855173,75.33643 42.85545))","code":"bishkek","country_code":"kg","domain":"kg","flags":{"2gis_reviews":true,"flamp":false,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"112","name":"Бишкек","time_zone":{"name":"Asia/Bishkek","offset":360},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((127.363676 50.403782,127.352443 50.441714,127.286463 50.467049,127.308368 50.520539,127.35453 50.542847,127.365778 50.577122,127.32975 50.625076,127.339437 50.679426,127.37608 50.702813,127.438103 50.784749,127.502736 50.82393,127.470168 50.892265,127.506464 50.931666,127.518609 51.029694,127.581071 51.042821,127.551575 51.089284,127.557909 51.128425,127.778 51.188068,127.817906 51.171164,127.921142 51.188613,127.923196 51.300574,127.944321 51.314406,127.93066 51.355243,127.985511 51.358863,128.022633 51.429539,128.070445 51.46957,128.257926 51.483286,128.329658 51.519172,128.389503 51.521946,128.395878 51.446126,128.453377 51.399746,128.451067 51.370352,128.523637 51.234533,128.522651 51.192067,128.569036 51.149161,128.599768 51.017885,128.663862 50.963103,128.657126 50.91772,128.681753 50.845115,128.566439 50.837419,128.392974 50.766518,128.36949 50.723945,128.252358 50.667232,128.175873 50.678308,128.165733 50.646583,128.132461 50.646556,128.10285 50.592973,128.007649 50.597843,127.984834 50.55919,128.031558 50.508262,128.062677 50.515051,128.059117 50.460764,128.005363 50.446487,127.957847 50.382386,127.953517 50.353369,127.911761 50.344062,127.869282 50.309829,127.900232 50.296527,127.877986 50.272908,127.83693 50.287922,127.826364 50.272383,127.768876 50.273176,127.73903 50.224478,127.612184 50.208694,127.598956 50.238392,127.37093 50.289745,127.325315 50.33611,127.363676 50.403782))","code":"blagoveshensk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"52","name":"Благовещенск","time_zone":{"name":"Asia/Yakutsk","offset":540},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((101.089619 56.502645,102.059766 56.482523,102.016041 55.92995,101.059727 55.949659,101.089619 56.502645))","code":"bratsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"51","name":"Братск","time_zone":{"name":"Asia/Irkutsk","offset":480},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((34.306993 53.164362,34.180919 53.124632,34.121062 53.140568,34.091692 53.164732,34.097431 53.204355,34.11895 53.226269,34.088316 53.250407,34.103132 53.263035,34.089647 53.278232,34.154639 53.367685,34.144788 53.411926,34.193721 53.450275,34.297092 53.452291,34.34449 53.486122,34.464258 53.473829,34.543914 53.407776,34.606363 53.270293,34.581757 53.171344,34.432761 53.148647,34.306993 53.164362))","code":"bryansk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"62","name":"Брянск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((31.211943 58.6702,31.254682 58.712294,31.34888 58.696046,31.373219 58.722165,31.419891 58.716772,31.4286 58.697627,31.518878 58.684671,31.518065 58.618393,31.642191 58.534742,31.323177 58.410328,31.255009 58.436947,31.261078 58.452358,31.18483 58.473859,31.121912 58.437613,31.055469 58.474338,31.121487 58.536682,31.143158 58.634691,31.182295 58.677821,31.211943 58.6702))","code":"v_novgorod","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"77","name":"Великий Новгород","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((132.275102 43.150151,132.21611 43.028072,132.078173 42.898095,131.953248 42.837472,131.683704 42.786249,131.556063 42.836001,131.587829 43.001127,131.576277 43.03842,131.463549 43.143762,131.411051 43.399272,131.352056 43.462375,131.469144 43.517281,131.542647 43.523577,131.624304 43.564967,131.656048 43.582531,131.684033 43.635493,131.730653 43.665958,131.972032 43.633195,132.025225 43.594097,132.144108 43.572415,132.264317 43.527039,132.291052 43.534936,132.377914 43.481564,132.356268 43.458463,132.371029 43.453495,132.343238 43.430952,132.364157 43.419062,132.349499 43.396926,132.363818 43.367117,132.337976 43.336729,132.275102 43.150151))","code":"vladivostok","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"25","name":"Владивосток","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((44.664457 42.774425,44.673451 42.752473,44.636215 42.744987,44.577743 42.745408,44.551647 42.769135,44.573402 42.819361,44.558996 42.879702,44.598999 42.937189,44.586232 42.960717,44.623482 42.987794,44.628743 43.033283,44.571988 43.080116,44.619739 43.12101,44.704355 43.117526,44.703771 43.068887,44.74241 43.055611,44.727759 43.028178,44.729312 42.964361,44.688017 42.961324,44.668556 42.940746,44.676302 42.915877,44.646184 42.91671,44.632926 42.891378,44.646862 42.844371,44.665573 42.832257,44.664457 42.774425))","code":"vladikavkaz","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"114","name":"Владикавказ","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.553697 56.016865,40.321166 56.021603,40.181044 56.034779,40.141737 56.053492,40.159347 56.071072,40.162239 56.12833,40.185872 56.155526,40.161254 56.184066,40.179205 56.210653,40.158592 56.250966,40.162371 56.288428,40.181312 56.297852,40.17218 56.344226,40.198005 56.43593,40.259638 56.467022,40.303939 56.466565,40.695168 56.461839,40.743413 56.430182,40.70655 56.397878,40.703366 56.336406,40.716351 56.326915,40.678552 56.280342,40.688775 56.179039,40.713729 56.10864,40.613067 56.009461,40.553697 56.016865))","code":"vladimir","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true},"id":"59","name":"Владимир","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((44.516273 48.264479,44.516501 48.286667,44.428333 48.293447,44.399822 48.305594,44.396745 48.328586,44.344889 48.33147,44.196749 48.239567,43.979783 48.328917,43.961466 48.345426,43.97311 48.362576,43.965729 48.407124,44.027168 48.465634,43.980829 48.472365,43.967298 48.506967,43.93733 48.506507,43.938644 48.52096,43.905835 48.519426,43.914095 48.547647,43.87482 48.582051,43.861216 48.623052,43.92897 48.621593,43.903636 48.658218,43.948472 48.707149,43.93956 48.731587,43.866099 48.764575,43.887828 48.792165,43.973955 48.851479,44.016491 48.828807,44.031502 48.841955,44.019816 48.847323,44.074949 48.89183,44.051643 48.903585,44.085706 48.932574,44.204013 48.899536,44.28802 48.924258,44.328352 48.985704,44.515948 48.948977,44.539657 48.963183,44.615677 48.950562,44.62823 48.972865,44.657701 48.955667,44.859461 48.923239,45.067555 48.808391,45.084772 48.779438,45.070885 48.765136,45.013591 48.761033,45.018099 48.743039,44.962483 48.700986,44.972802 48.677196,45.01123 48.663225,44.992745 48.646118,44.996412 48.618735,45.061759 48.574899,45.028151 48.572541,44.973857 48.454641,45.010793 48.444727,45.025871 48.383055,45.025853 48.357655,44.991761 48.3592,44.983554 48.293086,44.660355 48.266084,44.621043 48.277476,44.626912 48.258531,44.615641 48.25488,44.516273 48.264479))","code":"volgograd","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"33","name":"Волгоград","time_zone":{"name":"Europe/Volgograd","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((42.038487 47.559392,42.02831 47.573005,42.076024 47.573168,42.099772 47.613783,42.381517 47.622752,42.398058 47.600464,42.306525 47.553131,42.30273 47.462394,42.234895 47.460529,42.070756 47.505232,42.040161 47.550891,42.049593 47.560952,42.038487 47.559392))","code":"volgodonsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"122","name":"Волгодонск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.515933 59.121961,38.470498 59.099405,38.287173 59.086542,38.242049 59.06971,38.256449 59.06776,38.249376 59.060387,38.13843 59.057545,37.884693 59.011516,37.711939 59.029731,37.664721 59.081546,37.70754 59.099668,37.682968 59.118858,37.65629 59.212859,37.773079 59.211941,37.763425 59.225848,37.792745 59.234262,37.780588 59.268631,37.808478 59.305886,37.842804 59.311179,37.858537 59.336171,37.92028 59.34456,38.00095 59.328976,38.056271 59.346564,38.264175 59.320357,38.288699 59.328943,38.294461 59.306707,38.345585 59.291117,38.364161 59.312854,38.431422 59.30282,38.469535 59.318513,38.579894 59.291833,38.619833 59.303979,38.639694 59.288489,38.772389 59.30097,38.797706 59.285033,39.147462 59.305821,39.286558 59.337414,39.341859 59.330348,39.369125 59.306394,39.389929 59.335065,39.446643 59.35701,39.517848 59.358059,39.564516 59.331783,39.64683 59.350232,39.706341 59.344757,39.73792 59.371294,39.844323 59.411915,39.889432 59.392979,39.954988 59.398814,40.02458 59.371897,40.030302 59.35394,40.084607 59.349239,40.106504 59.356582,40.089706 59.374115,40.130857 59.382287,40.216618 59.391638,40.27283 59.375595,40.250158 59.354497,40.26296 59.346693,40.242702 59.342184,40.252141 59.332838,40.225744 59.336649,40.246397 59.325743,40.228672 59.316877,40.247251 59.311451,40.224826 59.310067,40.240377 59.299427,40.21765 59.300999,40.218215 59.278978,40.240547 59.266124,40.181195 59.256487,40.251511 59.213126,40.243574 59.204086,40.265573 59.213458,40.31158 59.19275,40.29853 59.186994,40.31338 59.169114,40.302155 59.15758,40.320565 59.15105,40.307792 59.141563,40.278849 59.152818,40.274394 59.132783,40.314184 59.123407,40.280647 59.101449,40.226748 59.096124,40.224546 59.077343,40.197595 59.066177,40.21457 59.039474,40.020498 59.016182,39.97751 59.031356,39.986346 59.045589,39.954664 59.067231,39.591774 59.041542,39.263641 59.061524,39.210222 59.076502,39.203899 59.063475,39.174891 59.062283,39.178316 59.072796,39.159241 59.060182,38.800039 59.068355,38.515933 59.121961))","code":"vologda","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"78","name":"Вологда","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.636447 51.797968,39.607537 51.754585,39.622517 51.734659,39.606708 51.714575,39.610185 51.660125,39.58174 51.613567,39.610219 51.594727,39.587116 51.548658,39.595572 51.472616,39.432197 51.463614,39.367228 51.482856,39.282321 51.47193,39.239086 51.494705,39.043242 51.47568,39.036446 51.460721,38.985148 51.451112,38.95836 51.467983,38.975484 51.587634,38.951825 51.601623,38.981717 51.616267,39.01502 51.668308,39.004525 51.686329,38.963301 51.685541,38.949909 51.702812,38.961571 51.744377,38.993182 51.762764,38.986398 51.78014,39.03206 51.824939,38.998914 51.869945,39.080845 51.918867,39.110392 51.906079,39.171912 51.925341,39.17323 51.913889,39.208998 51.916168,39.213598 51.938079,39.277114 51.947584,39.360584 51.926612,39.352964 51.907998,39.5571 51.903533,39.654444 51.882491,39.686652 51.855648,39.66049 51.849479,39.636447 51.797968))","code":"voronezh","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"31","name":"Воронеж","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((45.577119 43.322029,45.569157 43.338831,45.433189 43.386976,45.536872 43.389929,45.543081 43.405992,45.629672 43.419276,45.788784 43.395464,45.792415 43.376378,45.910888 43.3694,45.941572 43.352295,45.99123 43.378517,46.009982 43.422896,46.048764 43.452756,46.177622 43.450007,46.233921 43.420396,46.266297 43.442051,46.309888 43.433662,46.313981 43.466559,46.333912 43.458682,46.335194 43.400712,46.369918 43.341747,46.409527 43.324279,46.424985 43.294635,46.392708 43.186772,46.300198 43.174001,46.301016 43.143115,46.207397 43.13973,46.208392 43.088745,46.132947 43.050947,46.134143 43.068942,46.0611 43.116843,46.061504 43.198086,45.970175 43.203336,45.969563 43.22086,45.899119 43.229587,45.86719 43.225814,45.86387 43.187154,45.839586 43.154689,45.737936 43.163041,45.742157 43.178823,45.699717 43.199359,45.605135 43.215637,45.574259 43.247789,45.591963 43.30267,45.577119 43.322029))","code":"grozny","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"115","name":"Грозный","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((48.346708 42.031048,48.37332 41.961938,48.303196 41.947685,48.282269 41.926195,48.26107 41.934388,48.222667 42.044229,48.148408 42.125359,48.156477 42.137878,48.204371 42.123042,48.243518 42.142903,48.296653 42.113955,48.346708 42.031048))","code":"derbent","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":false},"id":"123","name":"Дербент","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((49.554226 54.300985,49.632743 54.297011,49.623729 54.247956,49.716905 54.230516,49.667931 54.210197,49.654807 54.176453,49.609521 54.194435,49.496141 54.161071,49.288109 54.138944,49.238025 54.180657,49.171741 54.162852,49.001212 54.192089,49.007885 54.208045,48.976294 54.215558,48.976672 54.24835,48.942332 54.283077,48.938859 54.327409,48.911705 54.332877,48.930143 54.378176,48.953981 54.3627,49.223432 54.334876,49.341397 54.354755,49.420613 54.340732,49.436668 54.320205,49.520068 54.292588,49.554226 54.300985))","code":"dimitrovgrad","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"124","name":"Димитровград","time_zone":{"name":"Europe/Samara","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((34.759612 48.586275,34.736228 48.631322,34.815791 48.680499,34.844227 48.665649,34.867387 48.680492,34.895435 48.662045,35.045173 48.689446,35.071796 48.661897,35.169567 48.648367,35.223556 48.694563,35.259655 48.677302,35.334139 48.680447,35.387332 48.665332,35.362011 48.621528,35.375749 48.60847,35.27671 48.531025,35.270174 48.501914,35.304892 48.412197,35.294232 48.397961,35.169144 48.347736,35.062569 48.346052,35.001881 48.297516,34.981502 48.309395,34.962903 48.355925,34.932853 48.370919,34.897326 48.377422,34.779704 48.345199,34.751465 48.364636,34.739059 48.383722,34.760305 48.427639,34.709615 48.46969,34.70723 48.488172,34.761707 48.520954,34.776767 48.55535,34.759612 48.586275))","code":"dnepropetrovsk","country_code":"ua","domain":"ua","flags":{"2gis_reviews":true,"flamp":false,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"105","name":"Днепр","time_zone":{"name":"Europe/Kiev","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((59.714357 57.010251,59.843218 57.01357,59.858607 57.032897,59.904726 57.03104,59.923061 57.050275,59.965298 57.054922,60.047762 57.045734,60.038449 57.016691,60.267319 56.995452,60.271682 57.013143,60.419812 57.069198,60.505544 57.043206,60.549708 57.055081,60.70108 57.03633,60.708262 57.058072,60.956449 57.021245,60.940021 56.971993,60.987937 56.928045,60.923753 56.789944,60.976652 56.751103,61.013608 56.744555,60.980369 56.72748,60.977227 56.693708,60.924551 56.702746,60.91685 56.678767,60.963803 56.613703,60.922024 56.602385,60.569054 56.588469,60.2624 56.607099,60.255886 56.591301,60.051382 56.601268,60.043108 56.579619,59.770501 56.602052,59.744221 56.627375,59.74666 56.694076,59.700893 56.827711,59.699866 56.855848,59.726605 56.870853,59.714357 57.010251))","code":"ekaterinburg","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"9","name":"Екатеринбург","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.464331 52.588624,38.425164 52.634715,38.498277 52.665741,38.584921 52.654962,38.61107 52.641374,38.624907 52.609917,38.612751 52.58612,38.552223 52.575046,38.50826 52.584209,38.466957 52.571241,38.464331 52.588624))","code":"elets","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"126","name":"Елец","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((41.197218 56.988588,41.188512 56.952433,41.209276 56.910049,41.142312 56.875722,40.950307 56.862373,40.826517 56.883451,40.832547 56.923862,40.787609 57.009888,40.794165 57.055793,40.834003 57.092259,41.203988 57.090369,41.223977 57.050149,41.197218 56.988588))","code":"ivanovo","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"65","name":"Иваново","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((52.95169 57.057889,53.495625 57.04823,53.550964 56.995238,53.679549 56.97602,53.710571 56.952482,53.757688 56.946247,53.770523 56.914248,53.729858 56.900484,53.766593 56.879291,53.751346 56.865929,53.793498 56.866158,53.790847 56.836664,53.812192 56.823012,53.756184 56.785803,53.769296 56.690065,53.812523 56.597041,53.804306 56.520944,53.697942 56.519048,53.616029 56.577276,53.379702 56.597815,53.304241 56.670729,52.93186 56.675205,52.939246 56.818944,52.922659 56.824009,52.943466 56.90041,52.95169 57.057889))","code":"izhevsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"41","name":"Ижевск","time_zone":{"name":"Europe/Samara","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((103.618853 52.641505,103.558668 52.756303,103.558686 52.82878,103.732417 52.82878,103.733328 52.754448,103.754112 52.726338,103.806039 52.685174,103.854878 52.68341,103.928989 52.644714,104.97019 52.64955,104.970807 51.718225,103.975229 51.71376,103.657739 51.697291,103.635022 51.734936,103.646101 51.753829,103.625789 52.419895,103.576145 52.430001,103.568526 52.448971,103.624012 52.476944,103.618853 52.641505))","code":"irkutsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"11","name":"Иркутск","time_zone":{"name":"Asia/Irkutsk","offset":480},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((69.410092 56.087254,69.355807 56.089424,69.351066 56.100919,69.439472 56.13218,69.516173 56.137615,69.585121 56.121264,69.580699 56.096063,69.525227 56.08951,69.530126 56.066142,69.513621 56.05274,69.410092 56.087254))","code":"ishim","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":false},"id":"205","name":"Ишим","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((47.588902 56.761482,48.153297 56.748478,48.147576 56.680101,48.161312 56.671347,48.145753 56.658248,48.133249 56.507529,47.572432 56.520416,47.588902 56.761482))","code":"yoshkarola","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"70","name":"Йошкар-Ола","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((42.578142 44.002138,42.61262 44.127676,42.580833 44.178897,42.578513 44.269256,42.844476 44.304247,42.898396 44.287205,43.109725 44.285919,43.30466 44.306366,43.370345 44.261905,43.494471 44.253583,43.551152 44.211293,43.50578 44.139313,43.558606 44.083451,43.505289 44.031903,43.547468 43.948391,43.608438 43.924491,43.608506 43.901408,43.596063 43.901416,43.589321 43.846011,43.408126 43.84147,43.320009 43.801639,43.305784 43.816049,43.109967 43.767679,42.940469 43.810721,42.895215 43.799429,42.733643 43.817514,42.68112 43.807332,42.647469 43.825702,42.62712 43.86502,42.636618 43.879133,42.586434 43.920709,42.578142 44.002138))","code":"minvody","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"89","name":"Кавказские Минеральные Воды","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((48.293219 55.785858,48.300915 55.83784,48.210824 55.87347,48.264539 55.975911,48.333619 55.987526,48.465319 55.962675,48.549971 55.968903,48.585898 55.99431,48.863615 56.001223,48.935786 56.022691,48.980327 55.999077,49.132549 56.014912,49.172108 55.997201,49.23801 55.998644,49.268193 56.018944,49.425019 55.99398,49.532486 56.012359,49.576513 55.960059,49.572622 55.90025,49.603065 55.871306,49.564515 55.850699,49.569746 55.828722,49.549902 55.803099,49.576929 55.762639,49.553998 55.746684,49.548006 55.711488,49.587559 55.691345,49.549204 55.677128,49.533053 55.652126,49.535477 55.587187,48.477911 55.569986,48.446543 55.546812,48.335021 55.542882,48.302773 55.562068,48.299046 55.576462,48.332055 55.606612,48.289505 55.669048,48.312089 55.675824,48.310374 55.700797,48.265838 55.766996,48.293219 55.785858))","code":"kazan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"21","name":"Казань","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((19.833135 54.586099,19.539731 54.713885,19.592596 54.772306,19.580491 54.890235,19.602075 54.967186,19.681958 55.065929,19.760019 55.116599,19.921503 55.158093,20.201823 55.16015,20.401084 55.18063,20.653783 55.384,20.953702 55.280833,21.137338 55.253862,21.136177 54.889236,21.196062 54.84523,21.163697 54.806789,21.1801 54.783729,21.169734 54.745675,21.143762 54.746284,21.121719 54.718137,21.179906 54.65098,21.15228 54.629143,21.173176 54.569384,21.151091 54.554846,20.822897 54.548373,20.766945 54.528812,20.516593 54.505253,20.495685 54.489603,20.400609 54.518031,20.279696 54.524275,20.205102 54.496552,20.090973 54.539175,20.018733 54.522701,19.833135 54.586099))","code":"kaliningrad","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"40","name":"Калининград","time_zone":{"name":"Europe/Kaliningrad","offset":120},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((35.894818 54.755461,36.233835 54.780396,36.305069 54.765277,36.455305 54.768523,36.469927 54.533953,36.484893 54.525984,36.470977 54.516984,36.482233 54.33388,36.210971 54.327911,36.181685 54.299591,36.116858 54.321124,35.927655 54.321024,35.919922 54.424265,35.908394 54.430411,35.909715 54.559813,35.894602 54.569411,35.905908 54.610036,35.901032 54.674135,35.886054 54.687341,35.899607 54.69282,35.894818 54.755461))","code":"kaluga","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"61","name":"Калуга","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((61.715751 56.571122,62.254705 56.57552,62.260467 56.279794,61.725677 56.275445,61.721387 56.403924,61.694523 56.412715,61.719382 56.463611,61.715751 56.571122))","code":"k_uralskiy","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"109","name":"Каменск-Уральский","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((45.305955 50.108969,45.334659 50.135989,45.379769 50.121318,45.416263 50.147737,45.50263 50.114011,45.392887 49.993251,45.312501 50.029989,45.287717 50.075894,45.305955 50.108969))","code":"kamyshin","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"127","name":"Камышин","time_zone":{"name":"Europe/Volgograd","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((72.86687 49.97048,72.864145 50.031985,72.830379 50.071579,72.835457 50.132364,72.846029 50.159294,72.930852 50.192972,73.145574 50.170885,73.166584 50.157115,73.353485 50.153223,73.413468 50.005306,73.38921 49.686854,73.2999 49.65147,73.198415 49.637712,72.861947 49.688026,72.877067 49.738372,72.86687 49.97048))","code":"karaganda","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"84","name":"Караганда","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((86.326511 55.27068,86.327501 55.212118,85.914901 55.209146,85.909911 55.391534,85.878124 55.455955,85.975237 55.53017,86.147776 55.546002,86.177738 55.53357,86.322012 55.534428,86.326511 55.27068))","code":"kemerovo","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"5","name":"Кемерово","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((49.036766 58.786454,49.936128 58.797004,49.939573 58.684007,49.959251 58.673889,49.93995 58.668113,49.941856 58.608637,49.954576 58.598196,49.934361 58.587878,49.947791 58.410879,49.279365 58.403646,49.046044 58.381452,49.013389 58.401974,49.056584 58.431236,49.044913 58.641473,49.024698 58.656477,49.042463 58.685214,49.036766 58.786454))","code":"kirov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"58","name":"Киров","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((30.22961 50.267519,30.223507 50.300093,30.25384 50.347728,30.182345 50.379717,30.215735 50.383491,30.2129 50.410805,30.233945 50.426908,30.189932 50.495419,30.184392 50.542952,30.159363 50.551394,30.195035 50.592759,30.17089 50.624591,30.231123 50.608696,30.237532 50.620663,30.533346 50.642951,30.863637 50.622122,30.879715 50.64059,30.966927 50.626768,31.024126 50.643575,31.035615 50.607792,31.060791 50.596683,31.037552 50.535067,31.050481 50.516185,31.009887 50.473547,31.033795 50.466554,31.022826 50.429117,31.037104 50.420592,30.981337 50.390454,31.028961 50.320665,31.008512 50.285742,31.021363 50.275282,30.936583 50.173499,30.827588 50.20094,30.707049 50.185771,30.693523 50.164134,30.580134 50.195841,30.535508 50.182902,30.491132 50.205966,30.426931 50.212479,30.387748 50.191182,30.395631 50.139307,30.382961 50.137256,30.28915 50.170345,30.292954 50.181097,30.217764 50.178859,30.234774 50.201299,30.207971 50.224888,30.225589 50.232737,30.22961 50.267519))","code":"kiev","country_code":"ua","domain":"ua","flags":{"2gis_reviews":true,"flamp":false,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"107","name":"Київ","time_zone":{"name":"Europe/Kiev","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((41.324341 56.41256,41.360712 56.411533,41.375763 56.391722,41.369469 56.371691,41.38204 56.364131,41.369496 56.355751,41.392262 56.297302,41.226105 56.321779,41.225754 56.349508,41.260902 56.352017,41.257121 56.375225,41.324341 56.41256))","code":"kovrov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"129","name":"Ковров","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((74.438523 62.183881,74.420135 62.270479,74.430153 62.278546,74.397794 62.298115,74.415774 62.30622,74.344315 62.334832,74.393193 62.369046,74.540709 62.360474,74.610183 62.388361,74.723418 62.39534,74.786843 62.423937,74.850658 62.409232,74.803643 62.249431,74.70658 62.252803,74.577864 62.209883,74.555755 62.197961,74.538665 62.159626,74.438523 62.183881))","code":"kogalym","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"207","name":"Когалым","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((69.004116 53.276659,68.997167 53.318062,69.167949 53.327877,69.161429 53.39313,69.274826 53.383133,69.277034 53.397231,69.315124 53.404166,69.327714 53.370948,69.426323 53.365164,69.615022 53.377566,69.762747 53.305991,69.867178 53.20418,70.039459 53.155209,70.24582 53.165043,70.368026 53.153623,70.404051 53.116561,70.478959 52.928993,70.201804 52.871445,70.179755 52.895084,70.141435 52.904612,69.911928 52.819776,69.682352 52.812507,69.557302 52.828986,69.320958 52.938954,69.146486 52.881871,69.012816 52.910955,69.147482 53.140112,69.27637 53.224041,69.012491 53.225447,69.004116 53.276659))","code":"kokshetau","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"201","name":"Кокшетау","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((136.753811 50.349972,136.732015 50.546639,136.73738 50.63626,136.77424 50.671445,136.80805 50.6719,136.854575 50.708454,137.019275 50.726093,137.047688 50.709087,137.256608 50.703973,137.300987 50.652509,137.309118 50.592302,137.281873 50.545506,137.254966 50.304488,137.178429 50.223625,137.11257 50.180152,137.020128 50.156,136.927338 50.192698,136.781474 50.184059,136.673594 50.228365,136.66226 50.244675,136.69045 50.321326,136.753811 50.349972))","code":"komsomolsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"94","name":"Комсомольск-на-Амуре","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((63.570864 53.081786,63.541088 53.060798,63.459462 53.101271,63.510712 53.125499,63.455974 53.201547,63.485376 53.216818,63.484464 53.256371,63.624834 53.31686,63.646629 53.291543,63.746165 53.288387,63.629891 53.161294,63.673836 53.157604,63.570864 53.081786))","code":"kostanay","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"203","name":"Костанай","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.788473 57.681147,40.721084 57.692701,40.692564 57.764686,40.707715 57.874069,40.735404 57.932043,40.981818 57.9303,41.147257 57.918584,41.160962 57.905824,41.137488 57.675732,40.788473 57.681147))","code":"kostroma","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"34","name":"Кострома","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.648205 45.176459,38.711098 45.219943,38.64025 45.271538,38.739748 45.340829,38.781788 45.31473,38.809501 45.327281,38.918451 45.294308,39.028441 45.284592,39.133021 45.284649,39.126668 45.316536,39.18719 45.315047,39.203489 45.300914,39.195239 45.289067,39.229994 45.265847,39.342399 45.254044,39.341222 45.278697,39.375139 45.284872,39.375049 45.305136,39.42069 45.309048,39.420767 45.33267,39.438429 45.332534,39.438452 45.305691,39.476685 45.305822,39.515106 45.314946,39.514719 45.360149,39.590516 45.360254,39.58218 45.375156,39.61652 45.377122,39.616013 45.441469,39.782302 45.441817,39.884814 45.419673,39.884766 45.432944,39.974064 45.432962,39.972445 45.45423,40.033952 45.458633,40.053085 45.413529,40.05355 45.358697,40.066274 45.359836,40.061038 45.260974,40.084628 45.256029,40.120102 45.278532,40.121369 45.245675,40.087582 45.197403,40.125426 45.184296,40.091663 45.135792,40.103098 45.131839,40.090267 45.099343,40.075233 45.109694,40.067071 45.094767,40.040236 45.102505,39.968812 45.080594,39.932968 45.095803,39.893669 45.084306,39.900028 45.096349,39.8718 45.111831,39.811315 45.113393,39.801652 45.129778,39.779674 45.123251,39.763667 45.136796,39.748665 45.128406,39.679284 45.167582,39.512034 45.037447,39.471249 45.035691,39.477936 44.987874,39.494979 44.975921,39.519018 44.987239,39.504601 44.968403,39.575083 44.942018,39.598598 44.911517,39.642513 44.894467,39.636756 44.878842,39.652507 44.87109,39.56203 44.837481,39.559578 44.806959,39.528955 44.811802,39.525045 44.789938,39.552019 44.795464,39.577078 44.765319,39.607462 44.775225,39.601502 44.742373,39.538293 44.691646,39.527854 44.65156,39.471062 44.640018,39.44626 44.575409,39.400566 44.576687,39.399677 44.556433,39.348204 44.529861,39.434926 44.505319,39.429588 44.483089,39.393221 44.455096,39.318938 44.459505,39.270371 44.426891,39.139535 44.457873,39.087526 44.448877,39.023849 44.38142,39.016852 44.409412,38.988065 44.397481,38.919437 44.421173,38.978084 44.443491,38.917879 44.495954,38.835643 44.510765,38.82169 44.500486,38.801122 44.513945,38.648179 44.489009,38.621174 44.718423,38.637552 44.732517,38.654426 44.726165,38.661505 44.828782,38.628541 44.83052,38.632211 44.886243,38.571424 44.976362,38.57103 45.038671,38.558308 45.040626,38.558543 45.053779,38.583641 45.05373,38.593846 45.138214,38.648205 45.176459))","code":"krasnodar","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"23","name":"Краснодар","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((92.113779 56.321481,92.546479 56.312921,92.686641 56.325006,92.698244 56.291704,92.880347 56.302262,92.918469 56.291319,92.944001 56.307758,92.963621 56.302029,92.967659 56.283178,92.996031 56.282857,93.02555 56.286858,93.024781 56.301334,93.089399 56.288399,93.351495 56.315506,93.353739 56.342098,93.385382 56.363574,93.483792 56.38784,93.525359 56.374674,93.77863 56.398338,93.778276 56.380571,93.821835 56.380351,93.812101 56.372773,93.825779 56.354057,93.727457 56.346694,93.733019 56.312658,93.651538 56.2072,93.676809 56.082704,93.676166 55.971304,93.645915 55.960206,93.693796 55.933158,93.663013 55.903518,93.698591 55.864907,93.668272 55.853942,93.681915 55.826012,93.654649 55.815941,93.650075 55.798052,93.344177 55.79616,93.321039 55.768104,93.279456 55.75733,92.945976 55.703893,92.906977 55.71333,92.906321 55.728977,92.823133 55.719781,92.795316 55.731038,92.781834 55.71597,92.76803 55.762376,92.720126 55.706235,92.706141 55.730738,92.545351 55.70355,92.477531 55.726778,92.405115 55.714618,92.34148 55.750768,92.272349 55.750681,92.271845 55.76861,92.227358 55.785552,92.226932 55.808601,92.118327 55.809971,92.105462 55.889204,91.850422 55.921905,91.746327 55.980599,91.291593 56.116023,91.146534 56.138309,90.665944 56.126281,90.207837 56.179432,90.201484 56.209533,90.182071 56.213938,90.210508 56.261959,90.143113 56.33793,90.479371 56.361035,90.582924 56.405539,90.676753 56.418299,90.8965 56.387376,91.040676 56.345942,91.102184 56.350933,91.305577 56.280725,91.373457 56.331809,91.535323 56.305279,91.781009 56.295613,92.113779 56.321481))","code":"krasnoyarsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"7","name":"Красноярск","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((55.632239 52.673496,55.647402 52.696432,55.705649 52.699064,55.752857 52.753508,55.765115 52.859657,55.839739 52.898032,55.966195 52.877797,55.94339 52.863599,55.863068 52.72594,55.809336 52.734984,55.766443 52.690968,55.716005 52.670173,55.632239 52.673496))","code":"kumertau","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":false},"id":"210","name":"Кумертау","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((65.113307 55.505372,65.3122 55.533618,65.467434 55.529287,65.583217 55.483367,65.594049 55.449838,65.66975 55.429862,65.617468 55.423847,65.574765 55.388161,65.627644 55.301062,65.58624 55.287247,65.576998 55.258639,65.546631 55.243932,65.340727 55.245305,65.185597 55.308037,65.132927 55.350148,65.151683 55.427834,65.119873 55.444896,65.131751 55.467184,65.113307 55.505372))","code":"kurgan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"10","name":"Курган","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((35.849262 51.606059,35.879043 51.638528,35.8626 51.657259,35.886388 51.672482,35.871927 51.686705,35.895263 51.728444,35.883312 51.751074,35.897331 51.765358,35.891286 51.788043,35.934091 51.831118,36.017808 51.855342,36.110698 51.829456,36.276347 51.856813,36.413323 51.838129,36.425002 51.820996,36.444293 51.714533,36.421006 51.691959,36.432607 51.674272,36.416084 51.660402,36.414402 51.596078,36.391361 51.577032,36.262953 51.554483,36.243018 51.569354,36.13865 51.563039,36.132669 51.548845,35.978087 51.54813,35.820868 51.567552,35.849262 51.606059))","code":"kursk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"73","name":"Курск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((94.270724 51.665494,94.315145 51.695673,94.324847 51.744437,94.34902 51.76571,94.433205 51.771844,94.463731 51.76166,94.473999 51.729721,94.541766 51.71555,94.72518 51.714792,94.735961 51.662461,94.446121 51.599531,94.434067 51.594795,94.430591 51.550679,94.319692 51.601377,94.270724 51.665494))","code":"kyzyl","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"130","name":"Кызыл","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((85.750103 54.768861,86.495701 54.774252,86.502903 54.184679,85.767947 54.179404,85.766991 54.211526,85.745419 54.22624,85.764502 54.294869,85.761107 54.407891,85.705274 54.437493,85.759129 54.473382,85.750103 54.768861))","code":"lenkuz","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"86","name":"Ленинск-Кузнецкий","time_zone":{"name":"Asia/Novokuznetsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.379824 52.626781,39.37616 52.689433,39.437992 52.71159,39.492999 52.757372,39.569775 52.721367,39.602138 52.740383,39.679225 52.720608,39.755873 52.732008,39.865104 52.702656,39.878631 52.711235,39.903903 52.688304,39.838586 52.667735,39.875348 52.630581,39.799054 52.595293,39.869859 52.538809,39.850993 52.479662,39.807101 52.503142,39.546783 52.477641,39.387742 52.513898,39.376843 52.520679,39.41612 52.57348,39.392041 52.58361,39.395286 52.600255,39.36358 52.602605,39.379824 52.626781))","code":"lipetsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"56","name":"Липецк","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((150.981148 59.477574,150.939542 59.434108,150.758137 59.418591,150.470178 59.487482,150.506553 59.514398,150.610509 59.542555,150.589885 59.663479,150.701035 59.719942,150.854744 59.743567,151.041303 59.714109,151.034671 59.674065,151.011971 59.658931,151.035755 59.575523,150.981148 59.477574))","code":"magadan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"158","name":"Магадан","time_zone":{"name":"Asia/Magadan","offset":660},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((59.504226 53.910884,59.464288 53.229865,58.523119 53.245612,58.525287 53.306553,58.507627 53.308733,58.489263 53.338765,58.528757 53.403605,58.547823 53.927025,59.12927 53.927438,59.504226 53.910884))","code":"magnitogorsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"26","name":"Магнитогорск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.089402 44.753763,40.101092 44.757209,40.124716 44.715356,40.113022 44.712041,40.123781 44.692476,40.139033 44.695048,40.134765 44.672794,40.166019 44.622423,40.149476 44.578957,40.166096 44.565791,40.09583 44.557513,40.072631 44.574347,40.042474 44.559919,39.935305 44.615197,39.915045 44.608277,39.920423 44.626134,39.904357 44.641697,39.915984 44.651078,39.896584 44.661932,39.912612 44.676425,39.901178 44.706653,39.942788 44.736295,39.987368 44.717275,40.028921 44.746893,39.994287 44.784918,40.026405 44.793709,40.042246 44.764569,40.077824 44.774653,40.089402 44.753763))","code":"maikop","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"131","name":"Майкоп","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((47.200468 43.105297,47.206434 43.159023,47.25122 43.157566,47.369732 43.200312,47.446098 43.181238,47.667854 43.183177,47.892502 42.734118,47.626102 42.670573,47.553966 42.677473,47.533198 42.703034,47.452585 42.721253,47.229907 42.714954,47.22188 42.75158,47.161086 42.796062,46.950734 42.735095,46.763845 42.843271,46.634338 42.885493,46.648901 42.916593,46.735891 42.953757,46.757967 43.000438,46.722449 43.019986,46.76681 43.046117,46.789511 43.099039,46.77783 43.148056,46.787127 43.169173,46.823701 43.166458,46.829457 43.18766,46.879266 43.175464,46.966967 43.184592,47.143842 43.103686,47.200468 43.105297))","code":"makhachkala","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"113","name":"Махачкала","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((59.545758 55.280232,60.184965 55.273894,60.46938 55.240542,60.469595 55.204122,60.500618 55.181581,60.469789 55.133977,60.471651 54.972711,60.453588 54.936386,60.464407 54.921845,60.453185 54.904964,60.271228 54.841976,60.250821 54.794839,59.944492 54.895408,59.771438 54.866503,59.729146 54.886954,59.734627 54.900317,59.522002 54.90492,59.545758 55.280232))","code":"miass","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"87","name":"Миасс и Златоуст","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((36.843932 55.391978,36.784794 55.397859,36.777835 55.41889,36.815383 55.465206,36.8162 55.507692,36.752402 55.555974,36.766606 55.578763,36.801687 55.582252,36.79972 55.645047,36.773692 55.685786,36.789344 55.74412,36.764182 55.789763,36.789031 55.849394,36.774963 55.851828,36.788479 55.861756,36.771319 55.932067,36.812267 55.953735,36.778755 55.980113,36.768954 56.033447,36.738275 56.063624,36.78088 56.105518,36.764686 56.14976,36.867981 56.193348,36.940014 56.203627,36.970816 56.222263,36.958287 56.238762,36.993291 56.2415,37.011411 56.221677,37.1412 56.186516,37.350372 56.224372,37.459617 56.200237,37.553765 56.22045,37.787512 56.230706,37.859514 56.218694,38.144384 56.237691,38.284403 56.225313,38.514408 56.244101,38.527957 56.227682,38.756502 56.230105,38.953443 56.213203,39.079952 56.240858,39.1025 56.228962,39.116844 56.127081,39.090756 56.066463,39.142483 56.020898,39.107487 55.925753,39.130746 55.864247,39.102731 55.80784,39.056191 55.775004,39.034139 55.688025,39.046769 55.638546,39.145126 55.566943,39.074506 55.526778,39.079897 55.500779,39.118629 55.481078,39.093981 55.464646,39.110068 55.373845,39.144718 55.352206,39.084704 55.23022,39.091986 55.184523,39.1251 55.151805,39.089913 55.078944,39.06333 55.066245,39.07943 55.055834,39.055515 55.022353,39.004875 55.036595,38.950345 55.004012,38.888025 55.039996,38.599576 55.020946,38.466983 55.054381,38.086314 55.012933,38.008821 55.024609,37.999858 55.042258,37.94916 55.057919,37.864935 55.020766,37.680995 55.006601,37.663283 55.022916,37.619529 55.025243,37.544039 54.989247,37.420827 54.981554,37.415807 54.962128,37.316566 54.96838,36.773438 55.138651,36.8076 55.152578,36.812302 55.214944,36.787527 55.246629,36.803125 55.284317,36.915699 55.347485,36.843932 55.391978))","code":"moscow","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"32","name":"Москва","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((33.225325 69.064731,33.265186 69.064731,33.265186 69.027421,33.286743 68.9972,33.294137 68.761176,33.566892 68.660816,33.5178 68.538753,33.75677 68.511817,33.741198 68.388309,33.751091 68.341711,33.838172 68.344937,33.99075 68.220577,34.016668 68.173774,34.087206 68.110861,33.990565 68.061996,33.952018 68.022917,33.970512 67.924501,34.17425 67.898561,34.297463 67.90726,34.355219 67.89508,34.354257 67.828489,34.385445 67.778911,34.468613 67.731858,34.597987 67.691075,34.643639 67.587172,34.63382 67.546138,34.431674 67.485337,33.571687 67.444568,32.632767 67.545538,32.211875 67.677328,31.949716 67.689008,31.734705 67.720632,31.760746 67.833984,31.738646 67.934812,31.783979 67.971397,31.892181 67.996356,32.073269 68.159487,32.23191 68.509206,32.289074 68.570651,32.174659 68.65378,32.067711 68.708298,32.347924 68.778872,32.634009 68.817618,32.679829 68.856852,32.703928 68.859229,32.701158 69.064619,33.225325 69.064731))","code":"murmansk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true},"id":"96","name":"Мурманск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((42.075511 55.619342,42.068549 55.589226,42.105556 55.523023,42.022669 55.523826,42.016003 55.504829,41.982415 55.501001,41.949284 55.512605,41.944547 55.529745,41.967243 55.550761,41.952801 55.580551,41.992303 55.616841,42.026374 55.630186,42.075511 55.619342))","code":"murom","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"132","name":"Муром","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((51.723646 55.554874,51.646247 55.574375,51.662207 55.58784,51.65101 55.6276,51.687547 55.640433,51.750524 55.710224,51.706732 55.771285,51.674603 55.784503,51.655854 55.845784,51.789333 55.84846,51.805722 55.856219,51.796582 55.868951,51.914799 55.885486,52.095047 55.849758,52.174898 55.881161,52.234244 55.881702,52.293636 55.853347,52.311799 55.877797,52.33168 55.878953,52.464703 55.858961,52.527841 55.866224,52.622474 55.830049,52.60666 55.798331,52.612551 55.769244,52.591918 55.760726,52.605917 55.756947,52.598503 55.722374,52.632144 55.713565,52.609146 55.696526,52.605417 55.632693,52.618832 55.614353,52.582857 55.607379,52.576773 55.590283,52.510541 55.555623,52.413221 55.54469,52.295177 55.563714,52.171722 55.543903,52.117172 55.555648,51.996244 55.529149,51.935327 55.546367,51.888186 55.540568,51.874118 55.567662,51.723646 55.554874))","code":"nabchelny","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"29","name":"Набережные Челны","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((44.781815 43.187166,44.824282 43.189667,44.83776 43.173946,44.831593 43.14971,44.757225 43.159379,44.747979 43.189734,44.705508 43.226212,44.728521 43.280859,44.768018 43.277796,44.795221 43.248833,44.818011 43.246919,44.781815 43.187166))","code":"nazran","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"154","name":"Назрань","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((43.478522 43.423768,43.518069 43.52891,43.560881 43.513483,43.677653 43.547885,43.747049 43.525597,43.732109 43.502325,43.682558 43.487309,43.691447 43.474771,43.665693 43.437481,43.597604 43.38447,43.478522 43.423768))","code":"nalchik","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"134","name":"Нальчик","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((53.022348 67.607263,52.888393 67.622759,52.935412 67.668792,53.120081 67.697897,53.162703 67.684555,53.158178 67.666698,53.173465 67.658365,53.159913 67.636462,53.022348 67.607263))","code":"naryanmar","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"159","name":"Нарьян-Мар","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((132.750811 42.90212,133.241339 42.910709,133.248191 42.668281,132.759571 42.659764,132.750811 42.90212))","code":"nahodka","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"82","name":"Находка","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((42.004171 44.635492,41.991175 44.580785,41.909319 44.583164,41.897376 44.611711,41.911555 44.62582,41.871447 44.658472,41.886618 44.671456,41.866398 44.698941,41.884867 44.717085,41.94802 44.699055,42.004171 44.635492))","code":"nevinnomyssk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"135","name":"Невинномысск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((54.28712 56.135492,54.377048 56.10069,54.366146 56.036602,54.206936 56.03527,54.181859 56.067069,54.185012 56.091371,54.233773 56.127646,54.260228 56.11908,54.28712 56.135492))","code":"neftekamsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"136","name":"Нефтекамск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((75.931826 61.190935,77.028582 61.178947,77.007817 60.862874,76.79989 60.811169,76.675993 60.819973,76.608242 60.866834,76.574744 60.87297,76.405904 60.85454,75.922257 60.863009,75.931826 61.190935))","code":"nizhnevartovsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"12","name":"Нижневартовск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((43.698905 55.546439,43.70569 55.558721,43.681576 55.561972,43.67454 55.578248,43.593297 55.572642,43.590418 55.602468,43.510025 55.663714,43.534796 55.689363,43.539725 55.72664,43.620532 55.727312,43.632723 55.745959,43.602127 55.74409,43.570877 55.762944,43.570502 55.781537,43.533283 55.778601,43.538975 55.806361,43.525344 55.798613,43.483009 55.820534,43.438804 55.801096,43.435333 55.823104,43.474067 55.84075,43.439979 55.895645,43.449855 55.962492,43.400646 55.983169,43.403214 56.02306,43.350545 56.011747,43.334068 56.019705,43.348812 56.028625,43.30845 56.023735,43.318973 56.03415,43.266285 56.085781,43.285191 56.135121,43.229605 56.165666,43.27404 56.176864,43.268324 56.224575,43.333095 56.277604,43.331742 56.291613,43.262507 56.288856,43.232795 56.46447,43.478804 56.50302,43.556139 56.484948,43.578748 56.436087,43.674309 56.463834,43.651633 56.489502,43.673258 56.501015,43.662704 56.510861,43.74359 56.504769,43.746049 56.537651,43.760063 56.544098,43.898733 56.56825,43.918577 56.550293,43.902015 56.531725,43.929245 56.519835,44.117989 56.489175,44.302017 56.487725,44.257758 56.303471,44.285621 56.293472,44.326035 56.18255,44.263031 56.143551,44.287549 56.109782,44.336492 56.112459,44.324849 56.089192,44.337515 56.078338,44.110198 56.038875,44.119245 56.01916,44.093979 56.002272,44.121 55.997692,44.107902 55.988437,44.123674 55.967723,44.097652 55.9638,44.08311 55.922851,44.103838 55.916349,44.054165 55.890125,44.040117 55.859208,44.110739 55.824992,44.040112 55.80138,44.064329 55.787559,44.066411 55.737674,44.026988 55.659793,44.039148 55.654767,44.011864 55.646937,44.028688 55.631216,44.001 55.611813,43.996515 55.586966,44.026632 55.537536,44.008255 55.530253,44.001105 55.495508,43.966379 55.476111,44.016565 55.438413,44.003405 55.36925,43.913842 55.332731,43.86906 55.287421,43.837718 55.292673,43.802249 55.331555,43.74567 55.33908,43.735367 55.36641,43.687526 55.356322,43.682425 55.372337,43.722341 55.438373,43.727634 55.49936,43.660456 55.500093,43.698905 55.546439))","code":"n_novgorod","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"19","name":"Нижний Новгород","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((60.386228 58.025926,60.543553 58.1012,60.591976 58.084258,60.59383 58.065848,60.629422 58.071692,60.626558 58.034145,60.588851 58.030923,60.56379 57.970664,60.525869 57.975302,60.478097 57.921059,60.322368 57.884501,60.2264 57.751651,59.763185 57.762607,59.779216 57.972882,59.753076 57.975012,59.802461 58.102842,60.216094 58.067059,60.238445 58.084283,60.309211 58.076303,60.302152 58.057252,60.33775 58.05346,60.329853 58.033965,60.386228 58.025926))","code":"ntagil","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"45","name":"Нижний Тагил","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((86.517836 53.497554,86.514138 53.82036,86.500994 53.827564,86.513934 53.838037,86.512736 53.941118,86.480362 53.944854,86.458678 53.991061,86.492783 54.018733,86.46447 54.054813,86.4792 54.065258,86.618448 54.103252,86.651443 54.130632,87.463657 54.121473,87.456823 53.497654,87.274477 53.498212,87.265593 53.487551,87.067651 53.502008,86.517836 53.497554))","code":"novokuznetsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"6","name":"Новокузнецк","time_zone":{"name":"Asia/Novokuznetsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.611788 44.334654,38.50188 44.149785,38.424852 44.176741,38.29588 44.189945,38.06936 44.261427,37.909643 44.39079,37.826166 44.417904,37.75347 44.470943,37.508447 44.490233,37.333602 44.54604,37.216533 44.607242,37.148688 44.663571,37.114741 44.747825,37.062663 44.794421,37.035232 44.845064,36.84376 44.913379,36.952521 45.139209,36.955897 45.231096,37.270595 45.252601,37.323008 45.221241,37.370325 45.225698,37.418648 45.190935,37.469267 45.200845,37.483318 45.221778,37.632022 45.195207,37.665645 45.213873,37.777513 45.211867,37.850508 45.240846,37.862296 45.226127,37.969276 45.232012,38.140004 45.188567,38.395601 45.212132,38.450284 45.20257,38.499801 45.235955,38.581237 45.224853,38.648205 45.176459,38.593846 45.138214,38.583641 45.05373,38.558543 45.053779,38.558308 45.040626,38.57103 45.038671,38.571424 44.976362,38.632211 44.886243,38.628541 44.83052,38.661505 44.828782,38.654426 44.726165,38.637552 44.732517,38.621174 44.718423,38.648179 44.489009,38.670827 44.489693,38.665686 44.474828,38.688965 44.46535,38.630156 44.366958,38.608527 44.361301,38.611788 44.334654))","code":"novorossiysk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"74","name":"Новороссийск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((85.088133 54.816411,85.002688 54.800048,85.013252 54.779662,84.964301 54.781279,84.89515 54.728577,84.980047 54.704903,85.004084 54.6799,84.986639 54.667145,85.011185 54.637544,84.934464 54.60996,85.115898 54.438163,84.824313 54.325904,84.803815 54.352028,84.694421 54.290784,84.65606 54.28607,84.575667 54.235287,84.577444 54.205114,84.536029 54.158157,84.437398 54.141003,84.423005 54.147726,84.429822 54.161854,84.397627 54.178217,84.357598 54.160274,84.282223 54.158341,84.275305 54.178281,84.223933 54.192175,83.877706 54.08136,83.857861 54.087293,83.884281 54.12064,83.830747 54.12978,83.722303 54.101173,83.553128 54.109112,83.531248 54.078262,83.474428 54.062407,83.48778 53.979297,83.439161 53.973706,83.448509 53.947246,83.349582 53.933688,83.292679 54.085893,83.274482 54.051634,83.220299 54.050249,83.196775 54.065401,83.165888 54.051188,83.049376 53.969325,83.025492 53.975652,83.021283 54.00262,82.994051 54.01605,82.76229 54.012318,82.693122 54.106213,82.693979 54.131095,82.645574 54.14543,82.634722 54.248572,82.664822 54.29484,82.68705 54.30104,82.661704 54.35505,82.61106 54.369053,82.547634 54.419858,82.470375 54.420101,82.370414 54.412567,82.371804 54.399905,82.127851 54.268898,82.118361 54.252095,82.134209 54.241847,82.083649 54.219871,82.059678 54.184372,82.068814 54.177768,82.027336 54.157662,82.00034 54.171321,81.941353 54.133285,81.823904 54.099327,81.805615 54.061834,81.756478 54.033153,81.751897 53.99627,81.661622 53.981295,81.587024 53.921394,81.542805 53.909614,81.568083 54.00842,81.613035 54.021479,81.493979 54.02924,81.482831 54.058427,81.442213 54.041825,81.342891 54.08114,81.248852 54.070884,81.216226 54.124181,81.211528 54.112355,81.137057 54.109871,81.087729 54.19626,80.98516 54.294763,80.95166 54.375446,81.015929 54.437403,81.069744 54.449125,81.206379 54.469828,81.232671 54.43442,81.349135 54.442051,81.553585 54.533401,81.510757 54.591568,81.533405 54.612019,81.619201 54.634727,81.648241 54.614816,81.697814 54.622579,81.666411 54.644833,81.719479 54.657871,81.535705 54.795751,81.525131 54.835634,81.576033 54.854323,81.569753 54.873304,81.486161 54.938744,81.457861 54.932468,81.40791 54.950068,81.360969 54.937569,81.361438 54.979388,81.414723 55.001194,81.428126 55.044341,81.472002 55.050177,81.474095 55.080272,81.397608 55.101903,81.459733 55.139028,81.446447 55.247257,81.477305 55.251991,81.330338 55.319242,81.467239 55.352554,81.500579 55.380705,82.154603 55.51402,82.046328 55.623863,81.735848 56.025943,81.553507 56.235201,81.873966 56.305406,82.3392 56.357462,82.499393 56.405493,82.56553 56.399756,82.69004 56.425818,82.774176 56.409006,82.818171 56.429882,82.796319 56.46359,82.80499 56.512522,82.862728 56.535243,82.946637 56.537902,83.02902 56.518057,83.095518 56.54937,83.285825 56.445179,83.254023 56.433978,83.273679 56.431915,83.247805 56.395426,83.143274 56.374558,83.170399 56.342775,83.163827 56.314939,83.114137 56.290972,83.131482 56.275494,83.064804 56.230587,83.108472 56.211577,83.156686 56.227959,83.211845 56.209412,83.213935 56.180724,83.169868 56.18774,83.154684 56.176784,83.183089 56.166603,83.178743 56.153147,83.12927 56.120556,83.182767 56.112253,83.22148 56.086762,83.274055 56.113913,83.301553 56.095779,83.233736 56.059526,83.245146 56.024221,83.230086 56.013203,83.340089 55.978252,83.313369 55.961143,83.403008 55.896203,83.37566 55.89601,83.392788 55.863976,83.385188 55.851263,83.318525 55.854541,83.211507 55.729573,83.314218 55.70373,83.31518 55.687675,83.338522 55.710005,83.445276 55.723903,83.444876 55.694989,83.417853 55.673155,83.428686 55.664132,83.501531 55.706658,83.585493 55.670769,83.599621 55.650771,83.590415 55.616456,83.631408 55.605505,83.597281 55.578084,83.643364 55.58456,83.74695 55.537542,83.793479 55.544837,83.835711 55.529631,83.909543 55.54795,83.926346 55.568309,83.972523 55.555768,83.939427 55.51155,83.964213 55.51613,84.042645 55.444071,84.000495 55.408305,84.150837 55.400365,84.139598 55.439327,84.161904 55.455684,84.213271 55.462875,84.284625 55.43016,84.330678 55.462837,84.456308 55.468194,84.51098 55.506032,84.541189 55.468097,84.595177 55.483997,84.660798 55.479568,84.725026 55.446609,84.620578 55.404334,84.652652 55.380482,84.754742 55.379815,84.818767 55.361752,84.858737 55.375536,84.916854 55.324764,84.915525 55.277327,84.85607 55.260773,84.815445 55.227775,84.917085 55.183553,84.927023 55.163725,84.903557 55.053879,84.837145 54.997021,84.887657 54.969707,84.887673 54.9523,84.971822 54.944968,85.038038 54.873817,85.07845 54.857497,85.046502 54.844635,85.088133 54.816411))","code":"novosibirsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"1","name":"Новосибирск","time_zone":{"name":"Asia/Novosibirsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.279946 47.428434,40.282366 47.396003,40.143212 47.344641,40.141957 47.32975,40.049015 47.326963,39.998114 47.354118,40.026464 47.37416,40.013292 47.39774,39.970354 47.400067,40.03631 47.428998,40.012236 47.457735,40.057056 47.486347,40.054334 47.511039,40.138377 47.487506,40.136878 47.453853,40.175715 47.42226,40.279946 47.428434))","code":"novocherkassk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"137","name":"Новочеркасск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.824717 47.738537,39.788042 47.749911,39.786221 47.765157,39.819184 47.76806,39.830504 47.862381,39.876304 47.863572,39.891586 47.889442,39.936437 47.879171,39.938209 47.853071,40.017472 47.832192,40.030386 47.810257,39.97941 47.806857,39.973289 47.75403,40.017849 47.739613,40.004332 47.702684,39.827083 47.724308,39.824717 47.738537))","code":"novoshakhtinsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"138","name":"Новошахтинск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((76.550608 66.176745,77.02186 66.185037,77.085372 66.076551,77.246806 66.036483,77.502758 66.038639,77.717867 66.101555,77.822187 66.070509,78.095049 66.132742,78.197085 66.137732,78.314914 66.113537,78.336981 66.071776,78.412791 66.007583,78.499318 65.98269,78.481427 65.958847,78.460859 65.962934,78.305241 65.861272,78.20881 65.777623,78.042981 65.718308,78.024399 65.691381,77.930064 65.689318,77.877699 65.659784,77.64937 65.641188,77.201953 65.800799,76.921259 65.790684,76.713723 65.823542,76.647881 65.84942,76.600136 65.89055,76.461521 65.914944,76.373292 66.091023,76.387134 66.109593,76.550608 66.176745))","code":"n_urengoy","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"139","name":"Новый Уренгой","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((88.529535 69.242435,86.000942 69.246318,85.986318 69.559455,88.551918 69.555507,88.529535 69.242435))","code":"norilsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"76","name":"Норильск","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((74.30478 63.879187,76.263372 63.875343,76.226155 63.018251,74.325265 63.021954,74.30478 63.879187))","code":"noyabrsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true},"id":"103","name":"Ноябрьск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((71.25763 50.949137,71.15911 51.015405,71.127413 51.259035,71.33122 51.306666,71.641526 51.331666,71.718671 51.378815,71.842987 51.217734,71.87991 51.02963,71.86563 50.971068,71.609524 50.928205,71.25763 50.949137))","code":"astana","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"68","name":"Нур-Султан","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((65.639774 62.289704,65.836829 62.290875,65.799189 62.263694,65.808049 62.239531,65.77183 62.218361,65.765344 62.197036,65.774669 62.175323,65.821512 62.161631,65.845589 62.136144,65.873049 62.136289,65.870532 62.045859,65.889685 62.046089,65.89304 61.970194,65.158167 62.002836,65.157159 62.061542,65.4281 62.196723,65.483196 62.285717,65.639774 62.289704))","code":"nyagan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":false},"id":"202","name":"Нягань","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((36.646351 55.086464,36.632509 55.057227,36.612321 55.051415,36.563754 55.067207,36.575797 55.076421,36.556412 55.088942,36.576812 55.098854,36.531879 55.100693,36.556018 55.139507,36.661994 55.141738,36.646351 55.086464))","code":"obninsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"140","name":"Обнинск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((30.506989 46.430705,30.518192 46.431862,30.485573 46.594299,30.513522 46.664318,30.579165 46.664532,30.608994 46.647233,30.805363 46.655465,30.807606 46.643526,30.888062 46.643435,30.914609 46.522769,30.85932 46.479501,30.797545 46.358129,30.701159 46.261262,30.605848 46.256172,30.529617 46.297192,30.506989 46.430705))","code":"odessa","country_code":"ua","domain":"ua","flags":{"2gis_reviews":true,"flamp":false,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"14","name":"Одесса","time_zone":{"name":"Europe/Kiev","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((72.9275 54.78532,72.877229 54.78445,72.844079 55.404999,73.25143 55.411503,73.27756 55.430606,73.32946 55.412594,73.75247 55.41764,73.762279 55.10337,73.7772 55.094703,73.763533 55.06273,73.771665 54.796804,73.213126 54.789864,73.074267 54.775192,73.059208 54.787499,72.9275 54.78532))","code":"omsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"2","name":"Омск","time_zone":{"name":"Asia/Omsk","offset":360},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((55.397659 51.620872,55.28373 51.637597,54.906781 51.643137,54.906756 51.728877,54.849285 51.718242,54.83241 51.765792,54.875718 51.813504,54.842325 51.851931,55.069006 51.965505,55.133556 51.92549,55.190471 51.924788,55.250638 51.947908,55.269167 51.92153,55.379206 51.921589,55.380686 51.890251,55.463369 51.890643,55.462422 51.862277,55.506478 51.820429,55.515763 51.763054,55.602497 51.740792,55.578399 51.705268,55.603926 51.693925,55.584852 51.664817,55.537511 51.664477,55.499267 51.610351,55.397659 51.620872))","code":"orenburg","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"48","name":"Оренбург","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((58.488695 51.315425,58.683778 51.321673,58.697439 51.338826,58.776011 51.329791,58.78373 51.286852,58.798574 51.279821,58.786295 51.273122,58.814319 51.25288,58.899106 51.230952,59.016141 51.233939,58.987539 51.148002,59.018013 51.142934,59.030411 51.124558,59.0638 51.125372,59.085204 51.104943,59.068243 51.088276,59.08644 51.075581,59.081675 51.044506,59.054369 51.048772,59.044033 51.01299,58.941536 51.012503,58.849571 51.043631,58.731824 51.03686,58.656259 51.058501,58.598708 51.037005,58.52222 51.084149,58.382833 51.073463,58.372624 51.113302,58.403007 51.11479,58.374864 51.171941,58.391928 51.176526,58.388383 51.191967,58.415445 51.1822,58.417958 51.200327,58.388948 51.238106,58.367131 51.241517,58.340683 51.291723,58.353263 51.295716,58.351853 51.337987,58.38256 51.337957,58.382577 51.317872,58.488695 51.315425))","code":"orsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"142","name":"Орск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((35.853124 52.882663,35.840989 52.911897,35.84926 52.994905,35.878061 53.038401,35.860952 53.047981,35.874297 53.056616,35.860656 53.072489,35.871515 53.088745,35.93747 53.082329,35.965898 53.100819,36.064945 53.105009,36.199071 53.086792,36.249337 53.100916,36.329336 53.080138,36.284661 53.059816,36.295392 53.040838,36.284711 53.027058,36.313628 53.019657,36.31769 52.992176,36.346317 52.983267,36.305475 52.952624,36.32892 52.932396,36.28261 52.885783,36.235773 52.876645,36.203546 52.846229,36.106135 52.835902,36.014244 52.859097,35.902308 52.84126,35.864119 52.857087,35.853124 52.882663))","code":"orel","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"71","name":"Орёл","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((72.880651 40.410746,72.824373 40.386391,72.716869 40.41987,72.700391 40.551882,72.71733 40.589844,72.760236 40.572754,72.74911 40.597372,72.762679 40.627708,72.791396 40.616625,72.843441 40.651018,72.875985 40.619755,72.893399 40.544166,72.880651 40.410746))","code":"osh","country_code":"kg","domain":"kg","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"171","name":"Ош","time_zone":{"name":"Asia/Bishkek","offset":360},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((77.223834 52.214201,77.241662 52.014535,76.992875 51.991758,76.9173 51.989277,76.769674 52.020351,76.660819 52.166653,76.600238 52.180226,76.645111 52.229329,76.675924 52.439188,76.992228 52.479541,77.235345 52.446979,77.223834 52.214201))","code":"pavlodar","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"111","name":"Павлодар","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((45.104058 53.066054,44.963755 53.041572,44.794662 53.061626,44.776161 53.076518,44.770048 53.262088,44.810489 53.286551,44.832085 53.335556,44.977002 53.363303,45.02642 53.389323,45.054239 53.376283,45.061104 53.348888,45.35881 53.348717,45.357781 53.225766,45.391043 53.135605,45.340927 53.030362,45.300415 53.009999,45.155505 53.031889,45.104058 53.066054))","code":"penza","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"42","name":"Пенза","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((56.921347 59.020265,56.905943 59.002546,56.972596 58.803898,56.885783 58.649364,56.849216 58.539439,56.843605 58.463639,56.899714 58.459027,56.898912 58.430923,56.921007 58.426045,56.899566 58.37942,56.872117 58.368386,56.873707 58.348237,56.909328 58.336781,56.895896 58.307611,56.912771 58.295503,56.896229 58.300431,56.853229 58.270343,56.857187 58.168006,56.825286 58.162266,56.786944 58.052761,56.831451 58.041996,56.816486 58.03891,56.829434 58.018053,56.816349 58.01115,56.824115 57.977059,56.770845 57.981386,56.71997 57.962514,56.749126 57.96009,56.734893 57.949979,56.746497 57.929909,56.815844 57.899191,56.81149 57.874553,56.759037 57.870989,56.822721 57.848471,56.831583 57.830761,56.649625 57.770252,56.606307 57.780272,56.445855 57.745008,56.436767 57.738924,56.461364 57.718418,56.438413 57.713822,56.463189 57.701114,56.454315 57.685357,56.468739 57.658593,56.254311 57.681783,56.249596 57.664133,55.976853 57.68302,55.955104 57.673509,55.983188 57.723328,55.97954 57.755518,55.900356 57.761933,55.908485 57.791562,55.814272 57.782843,55.748424 57.755537,55.716144 57.780353,55.687488 57.780003,55.709884 57.799233,55.702676 57.807087,55.591751 57.823949,55.554895 57.814259,55.589075 57.888804,55.503048 57.902516,55.648536 58.003859,55.619639 58.01355,55.520852 57.993174,55.520067 58.01337,55.504631 58.013045,55.569992 58.050236,55.575935 58.067054,55.554071 58.096959,55.572171 58.120218,55.562953 58.133018,55.648806 58.144972,55.637379 58.15999,55.686498 58.175148,55.681709 58.212463,55.742136 58.205958,55.740747 58.243583,55.788805 58.267762,55.846184 58.287641,55.955649 58.277983,55.980887 58.306921,55.961852 58.316612,55.963489 58.333627,56.007718 58.34083,56.002223 58.323261,56.028648 58.316982,56.068234 58.36527,56.124484 58.364976,56.162678 58.409374,56.148442 58.412692,56.15577 58.430813,56.122181 58.431366,56.071865 58.462076,56.103019 58.501165,56.069958 58.58524,56.260193 58.779141,56.302683 58.883024,56.253783 58.95531,56.239793 59.0072,56.199364 59.01991,56.177032 59.046108,56.221751 59.150502,56.215606 59.220063,56.252426 59.25211,56.472407 59.33059,56.460479 59.357147,56.484969 59.366504,56.39135 59.396913,56.321278 59.389305,56.323657 59.408076,56.413663 59.451677,56.525174 59.578228,56.574141 59.59962,56.643024 59.602979,56.662338 59.592683,56.65927 59.569141,56.72323 59.556509,56.798945 59.56039,56.824834 59.616743,56.87807 59.609381,56.914826 59.622718,56.988254 59.561737,57.076139 59.520211,57.178887 59.512805,57.301958 59.426418,57.268844 59.379168,57.2326 59.378983,57.199205 59.297491,57.164119 59.292824,57.178037 59.284982,57.167344 59.274844,57.192223 59.275825,57.166065 59.265167,57.187326 59.259679,57.171776 59.25297,57.179179 59.244273,57.140821 59.2268,57.16359 59.219585,57.07673 59.192596,57.076428 59.175407,57.128875 59.155157,57.054208 59.148638,57.039587 59.130936,57.057589 59.11709,57.018078 59.098206,56.97406 59.10476,56.921347 59.020265))","code":"perm","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"16","name":"Пермь","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((34.102722 61.959477,34.70885 61.953295,34.694352 61.691472,34.093364 61.697587,34.102722 61.959477))","code":"petrozavodsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"80","name":"Петрозаводск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((158.93997 52.708399,158.207589 52.869935,158.098651 52.921805,158.103729 52.978899,158.122863 53.005263,158.070474 53.123971,158.038502 53.158854,158.036961 53.18785,158.110492 53.246335,158.115759 53.275807,158.172805 53.29123,158.185568 53.360891,158.767001 53.363873,158.934418 53.326234,159.031063 53.266487,159.282336 52.942785,159.099675 52.85838,158.93997 52.708399))","code":"p_kamchatskiy","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"95","name":"Петропавловск-Камчатский","time_zone":{"name":"Asia/Kamchatka","offset":720},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((28.236627 57.893868,28.487391 57.87357,28.506529 57.852656,28.489222 57.82986,28.475856 57.739093,28.383826 57.720002,28.314786 57.730288,28.165414 57.714437,28.066706 57.753157,27.879575 57.697647,27.844135 57.700623,27.81286 57.73521,27.718068 57.752111,27.662905 57.797518,27.618062 57.782609,27.541574 57.823176,27.70805 57.848448,27.740926 57.827721,27.795637 57.841216,27.800355 57.854737,27.8879 57.839632,27.916041 57.860544,27.912105 57.876503,28.167686 57.912474,28.236627 57.893868))","code":"pskov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"90","name":"Псков","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((86.741415 52.1575,86.740159 52.171359,86.801044 52.158722,86.805639 52.187755,86.723874 52.197203,86.767102 52.243,86.783393 52.293024,86.693579 52.294799,86.68961 52.341377,86.667052 52.342734,86.642405 52.402575,86.62298 52.406021,86.62298 52.423775,86.679427 52.43683,86.676711 52.466176,86.649409 52.494794,86.661859 52.498895,86.627938 52.52683,86.722129 52.508723,86.763347 52.524257,86.794917 52.514808,86.775138 52.595801,86.821192 52.608641,86.809816 52.648098,86.844945 52.6264,86.932994 52.635155,86.936726 52.654524,86.989466 52.658492,87.012755 52.642514,87.068836 52.657448,87.099071 52.619226,87.134484 52.616339,87.11888 52.598563,87.197136 52.57321,87.218457 52.58875,87.297162 52.59237,87.33368 52.572745,87.37119 52.573691,87.371806 52.498746,87.428271 52.49947,87.494308 52.474214,87.539995 52.483464,87.583791 52.46215,87.611621 52.47148,87.623351 52.464791,87.610656 52.456439,87.617976 52.438341,87.653327 52.422416,87.700823 52.464322,87.732916 52.462713,87.755305 52.484868,87.845122 52.491026,87.864908 52.518856,87.892618 52.525854,87.891369 52.539479,88.021112 52.511055,88.123465 52.462634,88.143614 52.428852,88.231529 52.400058,88.281036 52.414455,88.310877 52.436896,88.317271 52.464244,88.445685 52.432956,88.442629 52.40601,88.406032 52.378341,88.463945 52.341503,88.403297 52.311662,88.391393 52.292277,88.402091 52.276754,88.380374 52.273215,88.396944 52.239674,88.363573 52.169065,88.374518 52.154623,88.360185 52.146284,88.378254 52.12461,88.286261 52.111732,88.248387 52.07755,88.25247 52.0458,88.178285 52.065758,88.151791 52.095988,88.126426 52.068234,88.061536 52.044389,88.057627 52.016808,88.087596 52.000021,87.97684 51.952266,88.001771 51.941712,88.001424 51.916173,87.945307 51.885704,87.934536 51.848568,87.898573 51.822291,87.882589 51.782897,87.932712 51.784547,87.991173 51.751386,88.084121 51.758335,88.110094 51.740266,88.106794 51.70856,88.076043 51.674834,88.019145 51.664388,88.00125 51.632399,88.003943 51.58927,87.959032 51.576348,87.950085 51.55133,87.900397 51.551548,87.934449 51.526312,87.945742 51.475191,88.052328 51.466461,88.141106 51.428543,88.125209 51.394057,88.143278 51.386152,88.133288 51.374165,88.156395 51.348495,88.187319 51.359006,88.315101 51.344413,88.325265 51.32452,88.401447 51.308059,88.424641 51.286255,88.590383 51.323347,88.631385 51.385349,88.700879 51.39093,88.693842 51.440444,88.680552 51.44444,88.692452 51.480816,88.658053 51.52805,88.750393 51.545358,88.763075 51.561429,88.79735 51.549455,88.814539 51.520634,88.846101 51.516319,88.863883 51.467884,88.919894 51.46392,89.004949 51.398852,89.006801 51.373922,88.985834 51.361067,88.997689 51.321504,88.960126 51.248341,88.9765 51.239932,88.960719 51.228301,88.963313 51.206481,89.031326 51.186793,89.049849 51.159806,89.036513 51.144358,89.048664 51.119576,89.022288 51.102517,89.054147 51.08231,89.054221 51.047136,89.100972 51.037486,89.123199 51.007425,89.192472 50.982957,89.241964 50.921557,89.268044 50.915982,89.267748 50.880456,89.346949 50.881253,89.348579 50.859675,89.398663 50.850525,89.375918 50.826409,89.390217 50.809925,89.453415 50.79257,89.477939 50.745449,89.528394 50.724075,89.582776 50.645801,89.639825 50.642893,89.631972 50.617147,89.649457 50.576936,89.729103 50.568638,89.85135 50.524889,89.842163 50.499885,89.865649 50.472046,89.8189 50.411201,89.735772 50.409274,89.707322 50.384121,89.664721 50.38501,89.655164 50.369729,89.613229 50.374267,89.58989 50.428129,89.50291 50.459801,89.510615 50.449948,89.4915 50.44528,89.48135 50.399919,89.501577 50.385732,89.496835 50.363912,89.381479 50.338889,89.379479 50.314921,89.406595 50.314032,89.390296 50.28636,89.343768 50.264245,89.333026 50.21668,89.308428 50.207937,89.403485 50.177932,89.440603 50.203696,89.520175 50.191731,89.532474 50.147871,89.511507 50.11931,89.58241 50.106974,89.592042 50.084192,89.533956 50.065855,89.524696 50.03935,89.543959 50.01503,89.592932 50.01553,89.598711 49.984524,89.62479 49.970855,89.608713 49.963743,89.614715 49.939182,89.591721 49.912627,89.63088 49.899345,89.611741 49.86352,89.651037 49.82644,89.624463 49.806369,89.673452 49.783475,89.711881 49.790098,89.7192 49.7283,89.6074 49.686,89.461564 49.666217,89.427352 49.619381,89.405269 49.621127,89.3846 49.6062,89.391 49.5953,89.36 49.5844,89.2506 49.6423,89.193637 49.634683,89.182398 49.622898,89.199073 49.604776,89.191469 49.58602,89.2327 49.5537,89.2009 49.5228,88.9845 49.4637,88.9326 49.5168,88.9295 49.5429,88.90009 49.558961,88.869615 49.546741,88.879675 49.513767,88.8571 49.4918,88.8801 49.4781,88.8534 49.4667,88.8628 49.4595,88.8429 49.4416,88.8022 49.4604,88.6836 49.4622,88.5992 49.5009,88.4949 49.4719,88.445 49.4726,88.4059 49.4946,88.368004 49.483846,88.3312 49.4935,88.297742 49.470898,88.221784 49.47966,88.165591 49.445452,88.184379 49.415928,88.118763 49.390801,88.124131 49.372926,88.160451 49.362761,88.170112 49.293567,88.106706 49.256569,88.054756 49.258389,88.056412 49.241085,88.017979 49.226295,87.988438 49.18302,87.805862 49.168484,87.695023 49.175738,87.670519 49.15207,87.492854 49.138516,87.503232 49.09253,87.427347 49.071318,87.28579 49.115872,87.303812 49.172181,87.291593 49.201769,87.309671 49.233885,87.198325 49.252499,87.02935 49.253989,87.006045 49.298864,86.970987 49.305851,86.926469 49.348878,86.924715 49.369818,86.9492 49.379942,86.936266 49.400195,86.947328 49.409624,86.833377 49.452247,86.82972 49.48174,86.855415 49.49914,86.814847 49.532322,86.827174 49.545425,86.739513 49.571169,86.665905 49.560272,86.618249 49.570377,86.597577 49.609524,86.615549 49.628524,86.659159 49.643789,86.665733 49.665502,86.699725 49.684973,86.72419 49.676651,86.778924 49.696016,86.752998 49.742395,86.782843 49.793792,86.735862 49.787154,86.688375 49.810899,86.590212 49.80559,86.6105 49.768929,86.582292 49.724142,86.509239 49.690951,86.488451 49.65791,86.428612 49.629352,86.420003 49.60759,86.2716 49.5827,86.267004 49.546539,86.202038 49.466113,86.17391 49.478979,86.166345 49.503304,86.112922 49.524383,86.037199 49.521846,86.024507 49.503727,85.968991 49.487116,85.929409 49.535866,85.944281 49.561326,85.883737 49.566907,85.826225 49.544254,85.809912 49.565881,85.75689 49.57715,85.677689 49.550396,85.589914 49.614381,85.553288 49.594414,85.490205 49.598129,85.38844 49.634803,85.321261 49.590847,85.257519 49.588524,85.264671 49.619788,85.210125 49.627086,85.215526 49.71853,85.203369 49.745268,85.148748 49.76791,85.144565 49.796419,85.101607 49.824213,85.100427 49.852116,85.059699 49.885036,84.985489 49.906772,84.984927 49.949919,84.972947 49.954279,84.994726 49.970128,84.978046 49.976294,85.049258 50.010397,85.035365 50.018876,85.035543 50.052494,84.974827 50.066958,84.945831 50.09661,84.8507 50.0939,84.813908 50.120772,84.825375 50.142985,84.75802 50.136943,84.692012 50.188623,84.628187 50.210679,84.567522 50.196841,84.456801 50.247256,84.409847 50.209226,84.362523 50.205465,84.251587 50.290141,84.272029 50.320659,84.269559 50.353755,84.242026 50.376855,84.241988 50.408662,84.203975 50.468975,84.232571 50.483066,84.248707 50.515566,84.230577 50.540242,84.169136 50.551745,84.144961 50.605966,84.115294 50.609194,84.080418 50.639877,84.127972 50.659636,84.343851 50.686268,84.397739 50.710053,84.42595 50.682196,84.473729 50.687078,84.514354 50.721437,84.511298 50.765456,84.557563 50.779921,84.589885 50.823992,84.539808 50.847646,84.437357 50.859917,84.438271 50.908374,84.490696 50.948059,84.34091 50.980694,84.305924 51.003878,84.222168 50.987377,84.127497 51.014216,84.101388 51.042257,84.061625 51.032231,84.02079 51.044188,84.038283 51.057608,83.943117 51.069148,83.956379 51.11019,83.932919 51.138087,84.042042 51.15374,84.096635 51.143349,84.069691 51.110609,84.120656 51.071237,84.146973 51.104134,84.153865 51.182773,84.179634 51.192381,84.200886 51.227941,84.192322 51.247157,84.234305 51.255878,84.256471 51.282613,84.331794 51.290341,84.376937 51.267314,84.412915 51.271282,84.452913 51.287731,84.458891 51.317025,84.633715 51.34705,84.641286 51.374725,84.68306 51.391487,84.716156 51.426799,84.766555 51.417022,84.849529 51.442452,84.897987 51.437753,84.923129 51.465532,84.92057 51.482868,84.989627 51.513625,85.111038 51.524095,85.166854 51.486525,85.195571 51.485502,85.244031 51.499162,85.260818 51.528716,85.29912 51.530649,85.305882 51.555556,85.449976 51.566314,85.446007 51.601769,85.479896 51.623074,85.48206 51.69047,85.582319 51.697222,85.626286 51.747247,85.623264 51.782779,85.539096 51.838252,85.536318 51.859355,85.616988 51.871872,85.544145 51.942899,85.585383 51.992331,85.682498 52.024578,85.701278 52.096576,85.74295 52.113436,85.850951 52.105479,85.869512 52.130262,85.898144 52.119127,85.914404 52.147076,86.116311 52.165694,86.114619 52.151813,86.132003 52.149228,86.172874 52.173167,86.282628 52.190286,86.4337 52.165022,86.466748 52.142065,86.456421 52.12839,86.60878 52.104938,86.648831 52.105669,86.688594 52.140995,86.725961 52.139143,86.741415 52.1575))","code":"gornoaltaysk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"27","name":"Республика Алтай","time_zone":{"name":"Asia/Barnaul","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.35785 47.239013,39.358001 47.261508,39.310916 47.264747,39.31884 47.283311,39.486713 47.328345,39.559365 47.376813,39.734563 47.385205,39.734689 47.417805,39.804088 47.425666,39.868718 47.455781,39.864309 47.46816,39.878046 47.471547,39.834574 47.516331,39.861573 47.526634,39.996426 47.5208,40.038389 47.479463,40.012236 47.457735,40.036528 47.436502,40.028784 47.420259,39.983399 47.415849,39.96051 47.363195,39.924723 47.358403,39.919436 47.053314,39.746241 47.04353,39.743526 47.06029,39.619994 47.050119,39.618758 47.062267,39.541011 47.061609,39.535676 47.040827,39.367812 47.036168,39.355318 47.048678,39.35785 47.239013))","code":"rostov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"24","name":"Ростов-на-Дону","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((81.297565 51.474847,81.250661 51.472574,81.238183 51.45736,81.168923 51.46669,81.176956 51.479149,81.128237 51.499905,81.131718 51.521494,81.215223 51.581969,81.242809 51.575603,81.326653 51.534967,81.297565 51.474847))","code":"rubtsovsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"143","name":"Рубцовск","time_zone":{"name":"Asia/Krasnoyarsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.742087 58.109103,38.947676 58.112986,38.898472 58.066256,38.953373 58.04675,38.976142 58.022331,38.913496 57.99886,38.823836 58.006161,38.648513 58.104084,38.702778 58.122775,38.742087 58.109103))","code":"rybinsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"144","name":"Рыбинск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.404406 54.733859,39.344055 54.776871,39.415177 54.839913,39.388799 54.854473,39.401008 54.870252,39.444898 54.883538,39.576876 54.908518,39.610584 54.901857,39.615095 54.881368,40.082101 54.878236,40.072595 54.486578,39.402002 54.490668,39.391534 54.582714,39.402966 54.588546,39.404406 54.733859))","code":"ryazan","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"44","name":"Рязань","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((66.673202 66.456385,66.45835 66.508525,66.479577 66.580807,66.524881 66.622681,66.581182 66.63831,66.752996 66.623089,66.708104 66.581039,66.728105 66.556098,66.783327 66.532325,66.822744 66.477071,66.673202 66.456385))","code":"salekhard","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"160","name":"Салехард","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((50.611955 53.421987,50.619539 53.39416,50.664011 53.362732,50.772367 53.333177,50.795636 53.284691,50.741778 53.204916,50.569355 53.164164,50.543375 53.056351,50.51171 53.05486,50.507699 53.037506,50.412611 53.01015,49.973323 53.005299,49.910829 53.01341,49.899516 53.033312,49.747249 53.03528,49.787691 53.052236,49.794395 53.092844,49.807912 53.096481,49.77879 53.208185,49.796888 53.215506,49.792086 53.25618,49.777904 53.256952,49.787115 53.322185,49.74678 53.316751,49.707458 53.33157,49.681209 53.442657,49.728745 53.443838,49.733939 53.534138,49.794308 53.574405,49.762931 53.605617,49.797112 53.630996,49.7745 53.644768,49.811818 53.695905,50.005342 53.741546,50.225728 53.761331,50.240908 53.787848,50.328294 53.771345,50.364095 53.787345,50.497233 53.712068,50.535737 53.662852,50.535066 53.640486,50.588739 53.573857,50.567375 53.566267,50.611955 53.421987))","code":"samara","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"18","name":"Самара","time_zone":{"name":"Europe/Samara","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((29.434359 59.946365,29.445579 59.959851,29.384119 60.174382,29.405012 60.224502,29.400164 60.252241,29.521252 60.258295,29.627703 60.278179,29.66498 60.299917,29.84095 60.308972,30.06164 60.281094,30.242995 60.303807,30.447249 60.290476,30.523715 60.320691,30.752071 60.301317,30.816189 60.315166,30.855095 60.301614,30.942787 60.325074,31.105005 60.16026,31.168335 60.018131,31.106791 59.898566,31.063075 59.885463,31.112742 59.796151,31.086122 59.724592,31.033585 59.698741,31.064892 59.563652,31.04545 59.524782,30.970836 59.485961,30.80349 59.478467,30.697059 59.506842,30.561983 59.47743,30.428788 59.490007,30.359155 59.480736,30.348887 59.463495,30.110774 59.492718,30.080227 59.491851,30.062839 59.468795,29.931194 59.489972,29.738708 59.469542,29.602223 59.489989,29.523615 59.476495,29.456031 59.535583,29.458275 59.633169,29.434451 59.70411,29.45926 59.780422,29.482875 59.793804,29.406808 59.808405,29.390717 59.828508,29.430398 59.891821,29.419245 59.945138,29.434359 59.946365))","code":"spb","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"38","name":"Санкт-Петербург","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((45.081871 54.301948,45.511721 54.300891,45.507836 53.984632,44.868027 53.985633,44.867159 54.263361,44.852386 54.305301,45.081871 54.301948))","code":"saransk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true},"id":"85","name":"Саранск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((45.856039 51.724488,45.992106 51.720064,46.06242 51.754989,46.09597 51.802026,46.136889 51.825832,46.181012 51.820402,46.208087 51.850335,46.357733 51.821791,46.430843 51.835331,46.409443 51.716977,46.433873 51.728667,46.486963 51.718232,46.493745 51.696684,46.540915 51.696023,46.588358 51.65045,46.525517 51.644371,46.496915 51.621779,46.531394 51.605031,46.510981 51.609141,46.51517 51.59486,46.418306 51.562717,46.334533 51.362232,46.364391 51.356598,46.309454 51.254999,46.280529 51.260371,46.253535 51.195964,45.636831 51.218825,45.629584 51.289772,45.675365 51.374963,45.57571 51.450277,45.542994 51.5536,45.559352 51.587834,45.534988 51.607904,45.560031 51.644779,45.527193 51.639659,45.502507 51.673286,45.531848 51.694726,45.520355 51.708246,45.581883 51.699862,45.63943 51.74748,45.71945 51.781457,45.77254 51.765501,45.81311 51.725493,45.856039 51.724488))","code":"saratov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"43","name":"Саратов","time_zone":{"name":"Europe/Saratov","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.463615 56.261756,38.496675 56.24063,38.284403 56.225313,38.191135 56.237466,38.001366 56.228403,37.925174 56.23193,37.922708 56.247703,38.068216 56.387367,38.232856 56.373681,38.234444 56.355464,38.463615 56.261756))","code":"s_posad","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"146","name":"Сергиев Посад","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((37.520885 54.880488,37.512424 54.8648,37.418341 54.880951,37.352234 54.874361,37.346587 54.923465,37.316566 54.96838,37.415807 54.962128,37.420827 54.981554,37.544039 54.989247,37.560985 54.978506,37.536971 54.966343,37.520885 54.880488))","code":"serpuhov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"147","name":"Серпухов","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((32.015394 54.690209,31.835486 54.688614,31.7783 54.707531,31.759145 54.729714,31.758252 54.779403,31.779213 54.858475,31.799064 54.879794,31.835458 54.883678,31.999494 54.881113,32.100553 54.907209,32.168106 54.944012,32.211606 54.918212,32.270858 54.815571,32.247847 54.735598,32.167074 54.698384,32.015394 54.690209))","code":"smolensk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"63","name":"Смоленск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.383094 43.821667,40.365371 43.773998,40.389201 43.76582,40.370934 43.72688,40.452068 43.724357,40.464546 43.712482,40.44948 43.671334,40.460069 43.655847,40.552923 43.623576,40.604766 43.587745,40.653978 43.584486,40.661776 43.563048,40.564559 43.519058,40.50541 43.524875,40.477821 43.549126,40.259202 43.586214,40.103393 43.568154,40.095163 43.529315,40.010289 43.425017,40.009014 43.385546,39.88448 43.224431,39.849882 43.228041,39.713913 43.282428,39.641385 43.368903,39.517373 43.438142,39.471188 43.494287,39.398814 43.537163,39.334137 43.608194,39.12771 43.776747,38.852504 43.952338,38.797372 44.002146,38.691373 44.050731,38.623879 44.118782,38.50188 44.149785,38.612587 44.335728,38.608527 44.361301,38.630156 44.366958,38.638208 44.396334,38.678873 44.431986,38.688965 44.46535,38.665686 44.474828,38.670827 44.489693,38.801122 44.513945,38.937865 44.485387,38.978084 44.443491,38.919437 44.421173,38.988065 44.397481,39.016852 44.409412,39.029765 44.392764,39.017479 44.38142,39.063696 44.409298,39.05287 44.420898,39.083895 44.44668,39.139535 44.457873,39.417834 44.381504,39.490156 44.346222,39.482191 44.324272,39.503685 44.298895,39.585877 44.276664,39.634013 44.283478,39.673372 44.314531,39.733904 44.282985,39.793339 44.332707,39.895499 44.351638,39.974611 44.338574,40.067177 44.369326,40.077202 44.320229,40.104932 44.310694,40.193777 44.355403,40.189229 44.337124,40.204925 44.326856,40.284236 44.329373,40.336778 44.304877,40.384576 44.319191,40.384083 44.284023,40.418532 44.278134,40.359829 44.246745,40.406793 44.167246,40.405546 44.132848,40.432671 44.114017,40.413294 44.063314,40.480476 43.964506,40.409687 43.938768,40.402758 43.894816,40.420424 43.882593,40.383094 43.821667))","code":"sochi","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"30","name":"Сочи","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((41.71342 44.893581,41.685529 44.896281,41.667935 44.929958,41.661667 45.008331,41.692812 45.027643,41.698853 45.060774,41.669371 45.069375,41.670132 45.103091,41.657403 45.103223,41.65798 45.130207,41.677233 45.13,41.671025 45.193197,41.697373 45.19275,41.697868 45.248583,41.812934 45.256127,41.954393 45.233953,41.994568 45.261419,42.147241 45.270428,42.304986 45.202801,42.366514 45.133954,42.317058 45.003834,42.242955 44.960936,42.11413 44.931575,42.061039 44.894863,42.040056 44.90999,41.999899 44.895762,41.944234 44.913399,41.71342 44.893581))","code":"stavropol","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"57","name":"Ставрополь","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((37.988967 51.393172,38.033751 51.338068,38.014496 51.330424,38.029978 51.322342,38.065141 51.230624,37.99364 51.155762,37.975804 51.115372,37.89047 51.137642,37.867872 51.194118,37.752363 51.240665,37.711636 51.276762,37.748802 51.303268,37.718561 51.367014,37.830964 51.42328,37.971237 51.414969,37.988967 51.393172))","code":"staroskol","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true},"id":"60","name":"Старый Оскол","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((56.141291 53.395949,56.132481 53.322821,56.107835 53.306713,55.876997 53.303411,55.850201 53.317461,55.762754 53.429216,55.710701 53.440577,55.691776 53.492937,55.796363 53.556787,55.817194 53.688315,55.940534 53.745092,56.108566 53.731209,56.140225 53.685013,56.150362 53.610702,56.128378 53.523897,56.141291 53.395949))","code":"sterlitamak","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"54","name":"Стерлитамак","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((72.38176 61.388553,73.693324 61.407472,73.718338 61.430866,73.826706 61.418172,73.782279 61.384658,73.797164 60.996565,72.41568 60.977161,72.38176 61.388553))","code":"surgut","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"39","name":"Сургут","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((50.657504 61.527715,50.636068 61.539362,50.589385 61.519683,50.584943 61.502181,50.358049 61.524635,50.374515 61.558666,50.155553 61.579157,50.192685 61.663327,50.211824 61.66137,50.219814 61.67932,50.259702 61.675254,50.297554 61.796039,50.390698 61.787261,50.470677 61.976617,50.518438 62.005444,50.658374 61.998829,50.700115 61.965373,50.831057 61.968262,51.042965 61.943237,51.023169 61.898419,51.300937 61.871537,51.285704 61.836303,51.363189 61.812802,51.439821 61.82162,51.438722 61.778192,51.451565 61.776999,51.394151 61.675321,51.254831 61.689574,51.204445 61.576752,51.047363 61.592638,51.012532 61.514285,50.742016 61.546535,50.657504 61.527715))","code":"syktyvkar","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"72","name":"Сыктывкар","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.960129 47.28818,38.973252 47.204558,38.95631 47.187762,38.765481 47.21002,38.808288 47.238429,38.799428 47.250036,38.820496 47.271938,38.960129 47.28818))","code":"taganrog","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"116","name":"Таганрог","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((41.260005 52.567998,41.268479 52.731323,41.236387 52.735174,41.271138 52.78225,41.274267 52.841987,41.459271 52.838296,41.480049 52.862206,41.51864 52.846945,41.517378 52.833462,41.638962 52.800252,41.641853 52.769172,41.602466 52.733497,41.596914 52.674708,41.615396 52.638425,41.609795 52.616906,41.625776 52.610338,41.587211 52.551951,41.481204 52.574653,41.359109 52.55523,41.260005 52.567998))","code":"tambov","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"81","name":"Тамбов","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((35.607908 56.678784,35.570898 56.695545,35.538946 56.757706,35.588963 56.772938,35.591409 56.789031,35.571466 56.851008,35.537348 56.874905,35.532145 56.924343,35.508421 56.938997,35.556666 56.956783,35.570436 56.978595,35.664379 57.00865,35.73051 57.007665,35.808084 57.041392,35.898954 57.050067,35.97844 57.037342,36.015941 57.015087,36.337513 56.974103,36.352173 56.854836,36.323448 56.787361,36.361046 56.758043,36.270183 56.694838,36.239273 56.682469,35.607908 56.678784))","code":"tver","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true},"id":"47","name":"Тверь","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((68.027461 58.334051,68.202464 58.347584,68.330932 58.333173,68.627747 58.337205,68.630591 58.064257,68.610922 58.051367,68.515642 58.063872,68.03489 58.061137,68.027461 58.334051))","code":"tobolsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"97","name":"Тобольск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((49.757851 53.315548,49.787115 53.322185,49.777904 53.256952,49.792086 53.25618,49.796888 53.215506,49.77879 53.208185,49.807912 53.096481,49.794395 53.092844,49.787691 53.052236,49.664636 53.027741,49.576552 53.034333,49.572233 53.048521,49.544847 53.040739,49.543582 53.06297,49.510492 53.066913,49.456518 53.050985,49.452008 53.035115,49.41868 53.036828,49.417156 53.018136,49.366877 53.00935,49.341312 52.985902,49.198784 53.018644,49.194897 52.941977,49.182276 52.932441,49.108312 52.935222,49.107225 52.912333,49.025792 52.908694,48.986242 52.882038,48.929584 52.908165,48.946418 52.921663,48.892282 52.946993,48.850016 52.927677,48.73638 52.978646,48.715833 52.962543,48.666568 52.986212,48.634927 52.967427,48.576346 52.99159,48.487947 52.989752,48.519065 52.958914,48.499645 52.940519,48.449405 52.952114,48.439113 52.972607,48.359834 52.957324,48.353057 52.973451,48.371755 52.99315,48.325122 52.997345,48.342014 53.058921,48.159756 53.086096,48.212202 53.137432,48.107527 53.180833,48.111779 53.204457,48.218927 53.261041,48.246979 53.305485,48.275755 53.290227,48.385685 53.315284,48.472727 53.283413,48.536172 53.325795,48.611318 53.314063,48.637623 53.320761,48.640492 53.338086,48.705562 53.336534,48.731976 53.373765,48.769055 53.382194,48.758106 53.407056,48.849668 53.39149,48.872272 53.435382,48.830441 53.465481,48.909851 53.478603,48.894586 53.491142,48.90861 53.509192,48.933523 53.515975,48.941069 53.497287,48.98353 53.533523,48.949824 53.578564,48.939025 53.648958,48.994808 53.706596,48.998043 53.871958,49.07379 53.872534,49.084687 53.89076,49.078093 53.871636,49.211523 53.872496,49.249735 53.836495,49.300351 53.831284,49.370744 53.789309,49.4156 53.784704,49.410478 53.766899,49.476604 53.760069,49.481771 53.777859,49.56319 53.782712,49.647911 53.754543,49.640868 53.72903,49.815231 53.714027,49.804274 53.670863,49.7745 53.644768,49.797836 53.632407,49.762931 53.605617,49.794308 53.574405,49.733939 53.534138,49.728745 53.443838,49.681209 53.442657,49.707458 53.33157,49.757851 53.315548))","code":"togliatti","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"22","name":"Тольятти","time_zone":{"name":"Europe/Samara","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((84.783402 56.581901,84.991724 56.591998,84.974638 56.639988,85.004481 56.687753,85.045182 56.688676,85.070721 56.678106,85.073288 56.650464,85.096105 56.650621,85.097019 56.637889,85.206565 56.608536,85.279646 56.569455,85.342194 56.524661,85.372239 56.469756,85.402749 56.459643,85.375987 56.453381,85.389566 56.411841,85.248355 56.351724,85.170078 56.345417,85.137633 56.327633,84.831578 56.323503,84.680085 56.540089,84.760897 56.558353,84.783402 56.581901))","code":"tomsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"3","name":"Томск","time_zone":{"name":"Asia/Tomsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((38.399267 54.266118,38.470992 54.193999,38.508234 54.178173,38.515886 54.160246,38.501516 54.156541,38.534027 54.123972,38.600428 54.112699,38.569552 54.063692,38.592478 54.044262,38.572731 54.016646,38.551337 54.01423,38.550516 53.995377,38.638449 53.9623,38.568617 53.959038,38.457578 53.848801,38.401631 53.820618,38.220688 53.849514,38.198672 53.864001,38.200643 53.890444,38.147397 53.902982,38.12458 53.891291,38.069076 53.910786,38.051279 53.901962,38.027663 53.918465,37.919557 53.890565,37.899904 53.90477,37.464798 53.889914,37.429616 53.899539,37.418328 54.197775,37.368526 54.228625,37.38038 54.252292,37.415747 54.265208,37.425436 54.309681,37.53468 54.311057,37.552533 54.334955,37.677493 54.300075,37.744368 54.322819,37.915046 54.315078,37.962779 54.325534,37.98144 54.352026,38.159244 54.352882,38.194297 54.365283,38.205572 54.354426,38.289137 54.372007,38.298507 54.345095,38.340918 54.328254,38.343188 54.300073,38.399267 54.266118))","code":"tula","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"36","name":"Тула","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((66.665516 57.236788,66.690851 57.236046,66.695691 57.221026,66.673562 57.06223,66.712652 57.016171,66.674961 56.962332,66.657754 56.901559,66.621048 56.52188,66.655094 56.516231,66.618862 56.498976,66.609235 56.397678,65.560375 56.416201,65.461425 56.437632,65.307668 56.400165,65.196699 56.429248,65.170515 56.463611,65.216947 56.494441,65.243024 56.934976,65.203136 57.082456,65.184508 57.090626,65.199421 57.108857,65.184607 57.113573,65.198384 57.119297,65.193532 57.136906,65.170763 57.143838,65.18333 57.151991,65.169414 57.165587,65.199666 57.186041,65.169046 57.188989,65.182515 57.232831,65.217693 57.249693,65.203272 57.271272,65.124472 57.264667,65.065351 57.290124,65.106968 57.323991,65.262697 57.284443,65.345841 57.318081,65.414268 57.316686,65.412894 57.300163,65.762215 57.307211,65.809373 57.258866,66.665516 57.236788))","code":"tyumen","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"13","name":"Тюмень","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((107.698215 51.61448,107.656415 51.609405,107.624279 51.572851,107.548805 51.555526,107.541877 51.517282,107.567665 51.508801,107.469426 51.468505,107.452452 51.446251,107.375663 51.461414,107.335109 51.452981,107.312194 51.415791,107.227579 51.449089,107.197667 51.498784,107.176147 51.487953,107.164052 51.503259,107.074201 51.467997,106.983028 51.383154,106.923413 51.391313,106.866786 51.358268,106.79604 51.373625,106.76303 51.338582,106.740467 51.35286,106.678838 51.35375,106.670929 51.331613,106.569966 51.257375,106.498137 51.240369,106.232683 51.337765,106.248455 51.395382,106.220399 51.453036,106.241276 51.48265,106.226641 51.504262,106.192484 51.507823,106.288071 51.57077,106.30722 51.608868,106.310649 51.645341,106.283352 51.667014,106.28283 51.733313,106.305681 51.758435,106.218217 51.785023,106.204013 51.835589,105.872764 52.053418,106.172533 52.361056,106.999934 52.716939,108.012655 53.233717,108.297403 53.673511,108.373418 53.764052,108.929363 54.269942,109.543217 54.137962,109.571009 54.113442,109.576767 54.085589,109.623624 54.05345,109.783346 54.037236,109.79646 54.023096,109.820289 54.032949,110.109045 53.946227,110.190087 53.942366,110.228012 53.881763,110.033421 53.822867,110.026644 53.786567,109.95741 53.769449,109.79495 53.658651,109.827281 53.640473,109.82049 53.63228,109.774956 53.628465,109.772408 53.611417,109.728834 53.582666,109.676847 53.576952,109.681191 53.513946,109.693225 53.506872,109.665725 53.503162,109.672112 53.452787,109.586413 53.447626,109.606989 53.431008,109.586024 53.413111,109.606315 53.368601,109.208361 52.884073,109.140834 52.856747,109.056377 52.847811,108.921689 52.788249,108.905273 52.758485,108.857134 52.727341,108.866852 52.705676,108.836543 52.692437,108.837103 52.654528,108.806788 52.65392,108.750081 52.613573,108.756079 52.587244,108.72445 52.553625,108.743334 52.538009,108.735983 52.524572,108.709908 52.507941,108.614333 52.500895,108.59248 52.474767,108.520384 52.453709,108.455362 52.391449,108.417289 52.327266,108.384674 52.31775,108.396699 52.298447,108.366236 52.255853,108.316805 52.246193,108.328595 52.207626,108.223087 52.173129,108.113563 51.929275,108.179722 51.914889,108.165325 51.853771,108.117598 51.837772,108.044288 51.757771,108.053087 51.744034,108.016956 51.70757,108.041837 51.704255,108.037249 51.679814,107.956945 51.625796,107.979753 51.606006,107.95509 51.588001,107.929383 51.597187,107.92106 51.573883,107.82198 51.553036,107.786141 51.604749,107.698215 51.61448))","code":"ulanude","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"37","name":"Улан-Удэ","time_zone":{"name":"Asia/Irkutsk","offset":480},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((48.634539 54.121281,48.56085 54.0901,48.552474 54.05428,48.524714 54.061226,48.519761 54.077286,48.445814 54.090836,48.408869 54.074805,48.322982 54.099049,48.179784 54.107706,48.159518 54.09732,48.069958 54.124575,48.04981 54.173416,48.00799 54.217115,48.035851 54.233839,48.022491 54.271162,48.035469 54.305415,48.056294 54.310561,48.041922 54.337865,47.965906 54.379922,47.992768 54.38293,47.984027 54.401357,48.035637 54.40986,48.011365 54.436125,48.029376 54.461865,48.08464 54.477654,48.318008 54.451123,48.336596 54.476568,48.861951 54.469107,48.860767 54.430261,48.924566 54.399153,48.914048 54.377469,48.930143 54.378176,48.929059 54.361941,48.911705 54.332877,48.938859 54.327409,48.942332 54.283077,48.976672 54.24835,48.976294 54.215558,48.93621 54.182404,48.856589 54.159136,48.634539 54.121281))","code":"ulyanovsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"55","name":"Ульяновск","time_zone":{"name":"Europe/Ulyanovsk","offset":240},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((51.568736 51.248864,51.580605 51.225437,51.56813 51.155685,51.241077 51.03227,51.217932 51.048987,51.272711 51.217896,51.258108 51.243037,51.265796 51.293382,51.323377 51.295239,51.353126 51.31411,51.446775 51.281324,51.535491 51.289132,51.568736 51.248864))","code":"uralsk","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"162","name":"Уральск","time_zone":{"name":"Asia/Oral","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((131.816747 43.70959,131.787156 43.708761,131.73639 43.752125,131.756949 43.851284,131.749195 43.962278,132.076996 43.975946,132.130901 43.964375,132.142052 43.718194,132.01259 43.703639,131.816747 43.70959))","code":"ussuriysk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"83","name":"Уссурийск","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((82.661138 49.798516,82.545707 49.841691,82.44862 49.846928,82.392522 49.92013,82.454 49.961702,82.43318 50.045936,82.450724 50.059192,82.715976 50.057306,82.806336 50.028657,82.796278 50.00252,82.911019 49.864261,82.904611 49.819293,82.95274 49.801722,82.980783 49.761077,82.834545 49.762443,82.661138 49.798516))","code":"ustkam","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"91","name":"Усть-Каменогорск","time_zone":{"name":"Asia/Qyzylorda","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((55.513299 54.50669,55.494061 54.522228,55.482358 54.499942,55.370533 54.502842,55.333781 54.478486,55.337286 54.466929,55.274856 54.490371,55.260739 54.468126,54.842509 54.456509,54.843068 54.473374,54.814564 54.483257,54.769627 54.445091,54.72315 54.443431,54.560293 54.483057,54.5318 54.466239,54.418596 54.494966,54.313238 54.485285,54.271603 54.443735,54.199599 54.436248,54.075626 54.458357,53.976709 54.41731,53.943558 54.374826,53.782489 54.397594,53.778182 54.378343,53.6907 54.386323,53.682825 54.407089,53.6494 54.40974,53.647372 54.396844,53.549588 54.40325,53.551157 54.422996,53.44346 54.416616,53.382596 54.452052,53.3771 54.502991,53.39054 54.504767,53.37469 54.540229,53.538948 54.687529,53.586984 54.678888,53.607935 54.696374,53.636725 54.686446,53.631588 54.66209,53.789475 54.637296,53.823796 54.605438,53.903618 54.607387,54.024752 54.643675,54.064318 54.60893,54.116066 54.608192,54.267083 54.620174,54.386915 54.667322,54.651514 54.672082,54.683258 54.687295,54.700007 54.717494,54.805092 54.724984,54.985053 54.786446,54.980276 54.803046,55.071891 54.802814,55.076182 54.82451,55.140601 54.829387,55.152037 54.79505,55.207401 54.802098,55.215732 54.787228,55.318581 54.78635,55.349396 54.816566,55.409092 54.807305,55.413453 54.832513,55.492898 54.819783,55.531936 54.879929,55.628156 54.866742,55.7174 55.045024,55.687956 55.06524,55.690124 55.083961,55.857773 55.122048,56.097268 55.058446,56.139163 54.955363,56.190417 54.951962,56.258965 54.975092,56.318201 54.969843,56.343234 54.922513,56.492011 54.850912,56.513835 54.781042,56.437825 54.744877,56.419164 54.698865,56.390362 54.677768,56.403507 54.630328,56.355509 54.617458,56.342237 54.597848,56.348497 54.57342,56.38673 54.581848,56.415958 54.559888,56.353748 54.527367,56.366215 54.501712,56.326085 54.49152,56.352179 54.466123,56.290272 54.435125,56.2344 54.458465,56.045708 54.41963,55.949653 54.46844,55.917946 54.44712,55.894078 54.474544,55.865215 54.467268,55.870203 54.476916,55.850475 54.4818,55.81172 54.462923,55.670207 54.520705,55.576685 54.523908,55.513299 54.50669))","code":"ufa","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"17","name":"Уфа","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((53.551092 63.592989,53.574443 63.644158,53.641697 63.680307,53.819455 63.687831,54.082849 63.642387,54.203436 63.597614,54.215629 63.566954,54.159605 63.533982,53.877096 63.524755,53.757877 63.493643,53.659685 63.50421,53.618081 63.539573,53.553547 63.556476,53.564484 63.583696,53.551092 63.592989))","code":"ukhta","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"204","name":"Ухта","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((135.258155 48.433811,135.257422 48.288578,135.064085 48.274463,134.874409 48.288797,134.873526 48.629594,135.259151 48.629372,135.275151 48.597403,135.268659 48.51501,135.229014 48.490393,135.250281 48.488475,135.233596 48.470107,135.258308 48.464082,135.258155 48.433811))","code":"khabarovsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"35","name":"Хабаровск","time_zone":{"name":"Asia/Vladivostok","offset":600},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((68.949135 61.067994,69.064458 61.116854,69.102442 61.116618,69.183856 61.081996,69.257216 61.115126,69.359066 61.080996,69.396555 61.036198,69.418585 61.034991,69.418699 61.009458,69.335942 60.960712,69.075245 60.916376,68.976026 60.950316,68.957839 61.015554,68.915346 61.051847,68.918141 61.070311,68.949135 61.067994))","code":"kh_mansiysk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":true,"road_network":true},"id":"150","name":"Ханты-Мансийск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((36.034468 50.060655,36.045996 50.115501,36.087143 50.14146,36.416935 50.127697,36.499253 50.101702,36.487564 50.080172,36.504004 50.071658,36.484201 50.060952,36.503267 50.051183,36.474218 50.04183,36.481798 49.972727,36.464678 49.942426,36.511907 49.918553,36.5113 49.883519,36.481252 49.879861,36.463851 49.838002,36.365981 49.847881,36.347059 49.833716,36.346506 49.80937,36.136868 49.852873,36.092277 49.83968,36.053934 49.849966,36.041616 49.873391,36.054222 49.88199,36.02314 49.919707,36.033015 49.932738,36.010819 49.947633,36.032366 49.979732,35.981617 49.992965,36.024417 50.011032,36.034468 50.060655))","code":"kharkov","country_code":"ua","domain":"ua","flags":{"2gis_reviews":true,"flamp":false,"metro":true,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"110","name":"Харьков","time_zone":{"name":"Europe/Kiev","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((46.648661 43.209742,46.602332 43.198957,46.562281 43.21131,46.538973 43.238001,46.542462 43.281203,46.617797 43.281587,46.648661 43.209742))","code":"khasavyurt","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":false},"id":"151","name":"Хасавюрт","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((47.003696 56.264089,47.157621 56.330593,47.604562 56.313312,47.577505 56.071351,47.599217 56.03641,47.584692 56.032973,47.57594 55.988608,47.5156 55.968684,47.423278 55.984072,47.366692 55.97116,47.307714 55.990549,47.198503 55.967518,47.167182 55.981611,46.993093 55.988177,46.96654 56.009043,46.986605 56.02278,46.984365 56.072908,46.997421 56.078488,46.939627 56.229502,47.003696 56.264089))","code":"cheboksary","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"53","name":"Чебоксары","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((61.252272 54.968614,61.203292 54.974499,61.154767 55.001658,61.045568 55.121512,61.100754 55.175448,61.084098 55.195727,61.149519 55.295912,61.284521 55.36403,61.360806 55.379536,61.385601 55.362557,61.470025 55.375552,61.600387 55.321009,61.69485 55.304482,61.756228 55.265544,61.745198 55.160898,61.779485 55.083582,61.76733 55.046807,61.746429 55.036978,61.757873 54.97934,61.70127 54.987808,61.599819 54.966064,61.54954 54.932824,61.570157 54.915237,61.501835 54.895912,61.469463 54.906971,61.470091 54.938297,61.403401 54.928846,61.368564 54.96636,61.252272 54.968614))","code":"chelyabinsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"15","name":"Челябинск","time_zone":{"name":"Asia/Yekaterinburg","offset":300},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((42.063351 44.174307,42.032856 44.157802,42.004777 44.168195,42.005763 44.256884,42.046537 44.293932,42.057868 44.263238,42.094895 44.27978,42.095012 44.263651,42.123356 44.262439,42.101315 44.222423,42.100775 44.181605,42.063351 44.174307))","code":"cherkessk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"118","name":"Черкесск","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((113.069162 52.396705,113.152477 52.452545,113.371366 52.464993,113.470022 52.356606,113.534077 52.332884,113.516717 52.31346,113.536592 52.3132,113.527842 52.29535,113.560493 52.277937,113.551234 52.264949,113.666419 52.217868,113.764267 52.222663,113.798989 52.19943,113.815862 52.148641,113.785471 51.966389,113.676566 51.862738,113.451038 51.818171,113.370101 51.78102,113.348087 51.718262,113.272946 51.744414,113.219211 51.796579,113.144941 51.825077,113.064818 51.827423,112.930694 51.886475,112.505278 51.925249,112.39496 51.950602,112.334198 51.982953,112.33115 51.996715,112.361117 52.021256,112.322516 52.033757,112.323024 52.086064,112.343848 52.109777,112.332928 52.123188,112.359593 52.18084,112.436054 52.228411,112.511075 52.249215,112.505306 52.294373,112.546581 52.346365,112.610136 52.357394,112.653274 52.340795,112.680258 52.354375,112.735469 52.326659,112.804526 52.326126,112.881217 52.351024,112.922137 52.329699,112.981963 52.376365,113.008415 52.370063,113.069162 52.396705))","code":"chita","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"64","name":"Чита","time_zone":{"name":"Asia/Chita","offset":540},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((40.196701 47.783662,40.282522 47.783729,40.387246 47.750448,40.348815 47.708697,40.325883 47.709878,40.318424 47.671348,40.243614 47.668837,40.203531 47.641568,40.186315 47.640497,40.132498 47.68707,40.073416 47.688098,40.087176 47.726971,40.080282 47.809139,40.139919 47.811535,40.15313 47.792018,40.196701 47.783662))","code":"shakhty","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"152","name":"Шахты","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((88.071027 52.880742,88.0044 52.768839,87.913372 52.715666,87.821154 52.726087,87.779438 52.751649,87.771905 52.838728,87.614726 52.916859,87.470702 52.897774,87.435344 52.912503,87.340253 53.00986,87.320082 53.062793,87.224531 53.144865,87.115495 53.210666,87.110063 53.280727,86.93067 53.471467,86.927436 53.498504,87.250459 53.498264,87.265593 53.487551,87.274477 53.498212,87.456823 53.497654,87.602184 53.410864,87.608344 53.365748,87.659453 53.306464,87.786968 53.341895,87.859751 53.303815,87.874373 53.25503,87.958889 53.265176,88.002464 53.218799,88.090335 53.216248,88.118962 53.10632,88.086288 53.074775,88.11326 53.022493,88.073015 52.961427,88.091294 52.939008,88.071027 52.880742))","code":"sheregesh","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true},"id":"206","name":"Шерегеш","time_zone":{"name":"Asia/Novokuznetsk","offset":420},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((69.416245 42.43852,69.802137 42.436468,69.799675 42.242484,69.414967 42.244521,69.416245 42.43852))","code":"shymkent","country_code":"kz","domain":"kz","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"161","name":"Шымкент","time_zone":{"name":"Asia/Almaty","offset":360},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((44.15612 46.265719,44.132718 46.263692,44.170768 46.387705,44.36002 46.37322,44.37314 46.35283,44.362824 46.338897,44.400949 46.322676,44.401341 46.31164,44.361345 46.315885,44.352137 46.279184,44.323492 46.27843,44.303645 46.23794,44.15612 46.265719))","code":"elista","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":false,"metro":false,"public_transport":false,"road_network":true},"id":"153","name":"Элиста","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((141.675118 47.669621,141.68309 47.687322,141.996815 47.620946,142.054915 47.55946,142.061898 47.524003,142.091643 47.501389,142.137566 47.497304,142.204846 47.523722,142.193993 47.575909,142.235882 47.559828,142.277984 47.599893,142.379936 47.641676,142.34477 47.668283,142.367085 47.708999,142.433038 47.712816,142.391115 47.759771,142.40718 47.802399,142.363027 47.810485,142.335671 47.859543,142.35035 47.872389,142.319167 47.908044,142.370514 47.950153,142.36785 47.967077,142.430172 48.004207,142.498338 47.965237,142.528036 47.977203,142.840258 47.976952,142.823431 47.796041,142.862919 47.705495,142.929041 47.619192,143.129518 47.50829,143.201995 47.44488,143.304514 47.297502,143.335109 47.108297,143.648645 46.992415,143.716886 46.939107,143.762274 46.870484,143.79941 46.735728,143.825875 46.545657,143.890542 46.444329,143.903581 46.350373,143.879647 46.289696,143.772449 46.143633,143.736816 46.032721,143.665992 45.923211,143.595467 45.864906,143.472308 45.824532,143.33642 45.828324,143.236326 45.864426,143.165438 45.9208,143.129995 45.983756,143.109984 46.088789,143.117793 46.22435,143.064302 46.324019,142.933805 46.40737,142.847268 46.408042,142.768372 46.398919,142.588021 46.335876,142.540337 46.242406,142.52034 46.126556,142.457837 45.977249,142.34959 45.822267,142.291767 45.656078,141.716427 45.742255,141.762841 45.852956,141.677199 45.939908,141.643665 45.996301,141.600864 46.276621,141.542085 46.432746,141.52014 46.544633,141.530207 46.654188,141.716865 46.997716,141.758166 47.128712,141.690923 47.226766,141.671864 47.284024,141.659125 47.521747,141.675118 47.669621))","code":"yuzhnosakhalinsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"88","name":"Южно-Сахалинск","time_zone":{"name":"Asia/Sakhalin","offset":660},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((129.586408 62.268402,129.881158 62.266844,129.928407 62.288252,129.931495 62.266516,129.994959 62.266076,129.994415 62.249586,130.074459 62.2591,130.106225 62.303491,130.116464 62.4261,130.034484 62.508088,129.971715 62.608182,129.87579 62.686043,129.867655 62.746745,129.834456 62.766592,129.719662 63.069852,129.903214 63.064516,130.628021 62.872738,131.10201 62.821206,131.510086 62.667691,131.809064 62.376579,132.20485 62.172118,132.605365 62.154489,132.645819 61.993152,132.538766 61.960015,132.368896 61.767607,132.307298 61.623673,132.345091 61.51414,132.901052 61.374474,132.756845 61.279243,132.733495 61.183413,132.082012 60.815271,131.543676 60.612425,131.29284 60.720121,130.760567 61.038314,130.333489 61.200906,128.596587 61.226232,128.449352 61.28631,128.385933 61.356958,128.359823 61.498674,128.278246 61.544112,128.042763 61.546686,127.859237 61.623452,127.740559 61.640124,127.469812 61.744924,127.328415 61.771858,127.231878 61.821748,127.119728 61.833251,126.621593 62.006493,126.669435 62.084154,126.626105 62.163748,126.668957 62.187302,126.756555 62.185521,126.918528 62.243751,127.121156 62.258188,127.16015 62.300908,127.635516 62.42181,128.03065 62.387201,128.061234 62.407978,128.237143 62.329893,128.549061 62.292032,128.789878 62.393458,128.856015 62.4011,129.14712 62.332013,129.303296 62.258639,129.492454 62.261807,129.519606 62.250452,129.533901 62.268614,129.586408 62.268402))","code":"yakutsk","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"pedestrian_routing":true,"public_transport":true,"road_network":true,"traffic":true},"id":"50","name":"Якутск","time_zone":{"name":"Asia/Yakutsk","offset":540},"type":"region","zoom_level":{"max":18,"min":9}},{"bounds":"POLYGON((39.707415 57.626018,39.726133 57.726358,39.696686 57.753943,39.783415 57.776164,40.004961 57.777804,40.032512 57.763814,40.010655 57.728992,40.043694 57.636403,40.130122 57.612294,40.192697 57.616615,40.1857 57.575858,40.21788 57.557747,40.215279 57.541949,40.115893 57.524251,40.096326 57.496959,39.952198 57.523612,39.71074 57.507271,39.677242 57.526629,39.675203 57.549456,39.692672 57.560453,39.664961 57.581545,39.707584 57.585252,39.707415 57.626018))","code":"yaroslavl","country_code":"ru","domain":"ru","flags":{"2gis_reviews":true,"flamp":true,"has_net_booklet":true,"metro":false,"public_transport":true,"road_network":true,"traffic":true},"id":"28","name":"Ярославль","time_zone":{"name":"Europe/Moscow","offset":180},"type":"region","zoom_level":{"max":18,"min":9}}]'), DG.config = {
            host: null,
            port: 3e3,
            defaultSkin: "dark",
            defaultLang: "ru",
            trafficLayerMinZoom: 10,
            trafficLayerUpdateInterval: 3e5,
            ppnotLink: "http://2gis.{domain}/{projectCode}/center/{center}/zoom/{zoom}/routeTab/rsType/{rsType}/to/{point}╎{name}",
            photosLink: "http://2gis.{domain}/photos/{id}",
            poiLayerMinZoom: 11,
            detectRetina: !1,
            webApiKey: "ruregt3044",
            webApiVersion: "2.0",
            regionListFields: "items.bounds,items.zoom_level,items.time_zone,items.code,items.flags,items.country_code,items.domain,items.default_pos",
            firmInfoFields: "items.reviews,items.links,items.external_content",
            geoAdditionalFields: "items.geometry.selection,items.links,items.adm_div,items.address,items.floors,items.description",
            geoclickerCatalogApiKey: "ruregt3044",
            projectLeaveMaxZoom: 13,
            flampUrl: "http://flamp.ru/r/",
            flampGoogleAnalytics: "utm_source=api2gis&utm_medium=api&utm_campaign=geoclicker",
            gaCode: "UA-38243181-2",
            gaName: "mapsapi2gis",
            protocol: "https:",
            baseUrl: "//maps.api.2gis.ru/2.0",
            tileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&ts=online_sd",
            retinaTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&ts=online_hd",
            previewTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&size=64&ts=online_sd",
            previewRetinaTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&size=64&ts=online_hd",
            arabicTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&ts=online_sd_ar",
            arabicRetinaTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&ts=online_hd_ar",
            arabicPreviewTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&size=64&ts=online_sd_ar",
            arabicPreviewRetinaTileServer: "//tile{s}.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&size=64&ts=online_hd_ar",
            trafficTileServer: "//traffic{s}.maps.2gis.com/{projectCode}/traffic/{z}/{x}/{y}/speed/{period}/{timestampString}",
            retinaTrafficTileServer: "//traffic{s}.maps.2gis.com/{projectCode}/traffic/{z}/{x}/{y}/speed/{period}/retina/{timestampString}",
            trafficMetaServer: "//meta{s}.maps.2gis.com/{projectCode}/meta/{z}/{x}/{y}/graph_speed/{period}/{timestampString}",
            retinaTrafficMetaServer: "//meta{s}.maps.2gis.com/{projectCode}/meta/{z}/{x}/{y}/graph_speed/{period}/retina/{timestampString}",
            trafficTimestampServer: "//traffic{s}.maps.2gis.com/{projectCode}/meta/speed/time/",
            trafficScoreServer: "//traffic{s}.maps.2gis.com/{projectCode}/meta/score/0/",
            poiMetaServer: "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1&ts=online_sd",
            retinaPoiMetaServer: "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1&ts=online_hd",
            arabicPoiMetaServer: "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1&ts=online_sd_ar",
            arabicRetinaPoiMetaServer: "//tile{s}.maps.2gis.com/poi?x={x}&y={y}&z={z}&v=1&ts=online_hd_ar",
            webApiServer: "//catalog.api.2gis.ru",
            googleAnalytics: "https://www.google-analytics.com/analytics.js",
            loadProjectListTimeout: 5e3
          }, _dereq_("../../../dist/css/styles.full.dark.css")
        }).call(this, _dereq_("_process"))
      }, {
        "../../../dist/css/styles.full.dark.css": 1,
        "../../../vendors/baron": 9,
        _process: 8,
        "dustjs-helpers": 4,
        "dustjs-linkedin": 5,
        html5shiv: 6,
        leaflet: 7
      }],
      3: [function(t, e, i) {
        "use strict";

        function s(t, e) {
          var i = document.head || document.getElementsByTagName("head")[0],
            o = n[n.length - 1];
          if ((e = e || {}).insertAt = e.insertAt || "bottom", "top" === e.insertAt) o ? o.nextSibling ? i.insertBefore(t, o.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild), n.push(t);
          else {
            if ("bottom" !== e.insertAt) throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
            i.appendChild(t)
          }
        }
        var n = [];
        e.exports = {
          createLink: function(t, e) {
            var i = document.head || document.getElementsByTagName("head")[0],
              o = document.createElement("link");
            for (var n in o.href = t, o.rel = "stylesheet", e)
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                o.setAttribute("data-" + n, r)
              } i.appendChild(o)
          },
          createStyle: function(t, e, i) {
            i = i || {};
            var o = document.createElement("style");
            for (var n in o.type = "text/css", e)
              if (e.hasOwnProperty(n)) {
                var r = e[n];
                o.setAttribute("data-" + n, r)
              } o.sheet ? (o.innerHTML = t, o.sheet.cssText = t, s(o, {
              insertAt: i.insertAt
            })) : o.styleSheet ? (s(o, {
              insertAt: i.insertAt
            }), o.styleSheet.cssText = t) : (o.appendChild(document.createTextNode(t)), s(o, {
              insertAt: i.insertAt
            }))
          }
        }
      }, {}],
      4: [function(t, e, i) {
        var o, n;
        o = this, n = function(a) {
          function p(t, e, i) {
            i = i || "INFO", t = t ? "{@" + t + "}: " : "", a.log(t + e, i)
          }

          function _(t) {
            return function(t) {
              return t.stack.tail && t.stack.tail.head && void 0 !== t.stack.tail.head.__select__
            }(t) && t.get("__select__")
          }

          function u(t, e) {
            var i, o = t.stack.head,
              n = t.rebase();
            t.stack && t.stack.tail && (n.stack = t.stack.tail);
            var r = {
              isPending: !1,
              isResolved: !1,
              isDeferredComplete: !1,
              deferreds: []
            };
            for (i in e) r[i] = e[i];
            return n.push({
              __select__: r
            }).push(o, t.stack.index, t.stack.of)
          }

          function c(t) {
            var e, i;
            if (t.isDeferredPending = !0, t.deferreds.length)
              for (t.isDeferredComplete = !0, e = 0, i = t.deferreds.length; e < i; e++) t.deferreds[e]();
            t.isDeferredPending = !1
          }

          function l(t, e) {
            return "function" == typeof e ? e.toString().replace(/(^\s+|\s+$)/gm, "").replace(/\n/gm, "").replace(/,\s*/gm, ", ").replace(/\)\{/gm, ") {") : e
          }

          function t(n, r) {
            return function(t, e, i, o) {
              return function(t, e, i, o, n, r) {
                var s, a, l, u, c = i.block,
                  h = i.else,
                  d = _(e) || {};
                if (d.isResolved && !d.isDeferredPending) return t;
                if (o.hasOwnProperty("key")) a = o.key;
                else {
                  if (!d.hasOwnProperty("key")) return p(n, "No key specified", "WARN"), t;
                  a = d.key
                }
                return u = o.type || d.type, a = m(e.resolve(a), u), l = m(e.resolve(o.value), u), r(a, l) ? (d.isPending || (s = !0, d.isPending = !0), c && (t = t.render(c, e)), s && (d.isResolved = !0)) : h && (t = t.render(h, e)), t
              }(t, e, i, o, n, r)
            }
          }

          function m(t, e) {
            switch (e = e && e.toLowerCase()) {
              case "number":
                return +t;
              case "string":
                return String(t);
              case "boolean":
                return t = "false" !== t && t, Boolean(t);
              case "date":
                return new Date(t)
            }
            return t
          }
          var o = {},
            e = {
              tap: function(t, e, i) {
                return function(t) {
                  o[t] || (p(t, "Deprecation warning: " + t + " is deprecated and will be removed in a future version of dustjs-helpers", "WARN"), p(null, "For help and a deprecation timeline, see https://github.com/linkedin/dustjs-helpers/wiki/Deprecated-Features#" + t.replace(/\W+/g, ""), "WARN"), o[t] = !0)
                }("tap"), i.resolve(t)
              },
              sep: function(t, e, i) {
                var o = i.block;
                return e.stack.index === e.stack.of - 1 ? t : o ? o(t, e) : t
              },
              first: function(t, e, i) {
                return 0 === e.stack.index ? i.block(t, e) : t
              },
              last: function(t, e, i) {
                return e.stack.index === e.stack.of - 1 ? i.block(t, e) : t
              },
              contextDump: function(t, e, i, o) {
                var n, r, s = e.resolve(o.to);
                switch (e.resolve(o.key)) {
                  case "full":
                    n = e.stack;
                    break;
                  default:
                    n = e.stack.head
                }
                switch (r = JSON.stringify(n, l, 2), s) {
                  case "console":
                    p("contextDump", r);
                    break;
                  default:
                    r = r.replace(/</g, "\\u003c"), t = t.write(r)
                }
                return t
              },
              math: function(t, e, i, o) {
                var n, r = o.key,
                  s = o.method,
                  a = o.operand,
                  l = o.round;
                if (!o.hasOwnProperty("key") || !o.method) return p("math", "`key` or `method` was not provided", "ERROR"), t;
                switch (r = parseFloat(e.resolve(r)), a = parseFloat(e.resolve(a)), s) {
                  case "mod":
                    0 === a && p("math", "Division by 0", "ERROR"), n = r % a;
                    break;
                  case "add":
                    n = r + a;
                    break;
                  case "subtract":
                    n = r - a;
                    break;
                  case "multiply":
                    n = r * a;
                    break;
                  case "divide":
                    0 === a && p("math", "Division by 0", "ERROR"), n = r / a;
                    break;
                  case "ceil":
                  case "floor":
                  case "round":
                  case "abs":
                    n = Math[s](r);
                    break;
                  case "toint":
                    n = parseInt(r, 10);
                    break;
                  default:
                    p("math", "Method `" + s + "` is not supported", "ERROR")
                }
                return void 0 !== n && (l && (n = Math.round(n)), i && i.block ? (e = u(e, {
                  key: n
                }), t = t.render(i.block, e), c(_(e))) : t = t.write(n)), t
              },
              select: function(t, e, i, o) {
                var n = i.block,
                  r = {};
                return o.hasOwnProperty("key") && (r.key = e.resolve(o.key)), o.hasOwnProperty("type") && (r.type = o.type), n ? (e = u(e, r), t = t.render(n, e), c(_(e))) : p("select", "Missing body block", "WARN"), t
              },
              eq: t("eq", function(t, e) {
                return t === e
              }),
              ne: t("ne", function(t, e) {
                return t !== e
              }),
              lt: t("lt", function(t, e) {
                return t < e
              }),
              lte: t("lte", function(t, e) {
                return t <= e
              }),
              gt: t("gt", function(t, e) {
                return e < t
              }),
              gte: t("gte", function(t, e) {
                return e <= t
              }),
              any: function(t, e, i, o) {
                var n = _(e);
                return n ? n.isDeferredComplete ? p("any", "Must not be nested inside {@any} or {@none} block", "ERROR") : t = t.map(function(t) {
                  n.deferreds.push(function() {
                    n.isResolved && (t = t.render(i.block, e)), t.end()
                  })
                }) : p("any", "Must be used inside a {@select} block", "ERROR"), t
              },
              none: function(t, e, i, o) {
                var n = _(e);
                return n ? n.isDeferredComplete ? p("none", "Must not be nested inside {@any} or {@none} block", "ERROR") : t = t.map(function(t) {
                  n.deferreds.push(function() {
                    n.isResolved || (t = t.render(i.block, e)), t.end()
                  })
                }) : p("none", "Must be used inside a {@select} block", "ERROR"), t
              },
              size: function(t, e, i, o) {
                var n, r, s = o.key;
                if ((s = e.resolve(o.key)) && !0 !== s)
                  if (a.isArray(s)) n = s.length;
                  else if (!isNaN(parseFloat(s)) && isFinite(s)) n = s;
                else if ("object" == typeof s)
                  for (r in n = 0, s) s.hasOwnProperty(r) && n++;
                else n = (s + "").length;
                else n = 0;
                return t.write(n)
              }
            };
          for (var i in e) a.helpers[i] = e[i];
          return a
        }, "function" == typeof define && define.amd && !0 === define.amd.dust ? define(["dust.core"], n) : "object" == typeof i ? e.exports = n(t("dustjs-linkedin")) : n(o.dust)
      }, {
        "dustjs-linkedin": 5
      }],
      5: [function(_dereq_, module, exports) {
        (function(process) {
          var m4, n4;
          m4 = this, n4 = function() {
            function getTemplate(t, e) {
              if (t) return "function" == typeof t && t.template ? t.template : dust.isTemplateFn(t) ? t : !1 !== e ? dust.cache[t] : void 0
            }

            function load(e, t, r) {
              if (!e) return t.setError(new Error("No template or template name provided to render"));
              var i = getTemplate(e, dust.config.cache);
              return i ? i(t, Context.wrap(r, i.templateName)) : dust.onLoad ? t.map(function(o) {
                function t(t, e) {
                  var i;
                  if (t) return o.setError(t);
                  if (!(i = getTemplate(e, !1) || getTemplate(n, dust.config.cache))) {
                    if (!dust.compile) return o.setError(new Error("Dust compiler not available"));
                    i = dust.loadSource(dust.compile(e, n))
                  }
                  i(o, Context.wrap(r, i.templateName)).end()
                }
                var n = e;
                3 === dust.onLoad.length ? dust.onLoad(n, r.options, t) : dust.onLoad(n, t)
              }) : t.setError(new Error("Template Not Found: " + e))
            }

            function Context(t, e, i, o, n) {
              void 0 === t || t instanceof Stack || (t = new Stack(t)), this.stack = t, this.global = e, this.options = i, this.blocks = o, this.templateName = n, this._isContext = !0
            }

            function getWithResolvedData(e, i, o) {
              return function(t) {
                return e.push(t)._get(i, o)
              }
            }

            function Stack(t, e, i, o) {
              this.tail = e, this.isObject = t && "object" == typeof t, this.head = t, this.index = i, this.of = o
            }

            function Stub(t) {
              this.head = new Chunk(this), this.callback = t, this.out = ""
            }

            function Stream() {
              this.head = new Chunk(this)
            }

            function Chunk(t, e, i) {
              this.root = t, this.next = e, this.data = [], this.flushable = !1, this.taps = i
            }

            function Tap(t, e) {
              this.head = t, this.tail = e
            }
            var dust = {
                version: "2.7.5"
              },
              NONE = "NONE",
              ERROR = "ERROR",
              WARN = "WARN",
              INFO = "INFO",
              DEBUG = "DEBUG",
              EMPTY_FUNC = function() {},
              T4, U4, V4;
            for (var f in dust.config = {
                whitespace: !1,
                amd: !1,
                cjs: !1,
                cache: !0
              }, dust._aliases = {
                write: "w",
                end: "e",
                map: "m",
                render: "r",
                reference: "f",
                section: "s",
                exists: "x",
                notexists: "nx",
                block: "b",
                partial: "p",
                helper: "h"
              }, V4 = {
                DEBUG: 0,
                INFO: 1,
                WARN: 2,
                ERROR: 3,
                NONE: 4
              }, U4 = "undefined" != typeof console && console.log ? "function" == typeof(T4 = console.log) ? function() {
                T4.apply(console, arguments)
              } : function() {
                T4(Array.prototype.slice.apply(arguments).join(" "))
              } : EMPTY_FUNC, dust.log = function(t, e) {
                V4[e = e || INFO] >= V4[dust.debugLevel] && U4("[DUST:" + e + "]", t)
              }, dust.debugLevel = NONE, void 0 !== process && process.env && /\bdust\b/.test(process.env.DEBUG) && (dust.debugLevel = DEBUG), dust.helpers = {}, dust.cache = {}, dust.register = function(t, e) {
                t && (e.templateName = t, !1 !== dust.config.cache && (dust.cache[t] = e))
              }, dust.render = function(t, e, i) {
                var o = new Stub(i).head;
                try {
                  load(t, o, e).end()
                } catch (t) {
                  o.setError(t)
                }
              }, dust.stream = function(t, e) {
                var i = new Stream,
                  o = i.head;
                return dust.nextTick(function() {
                  try {
                    load(t, o, e).end()
                  } catch (t) {
                    o.setError(t)
                  }
                }), i
              }, dust.loadSource = function(source) {
                return eval(source)
              }, Array.isArray ? dust.isArray = Array.isArray : dust.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
              }, dust.nextTick = function(t) {
                setTimeout(t, 0)
              }, dust.isEmpty = function(t) {
                return !(0 === t || (!dust.isArray(t) || t.length) && t)
              }, dust.isEmptyObject = function(t) {
                var e;
                if (null === t) return !1;
                if (void 0 === t) return !1;
                if (0 < t.length) return !1;
                for (e in t)
                  if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
              }, dust.isTemplateFn = function(t) {
                return "function" == typeof t && t.__dustBody
              }, dust.isThenable = function(t) {
                return t && "object" == typeof t && "function" == typeof t.then
              }, dust.isStreamable = function(t) {
                return t && "function" == typeof t.on && "function" == typeof t.pipe
              }, dust.filter = function(t, e, i, o) {
                var n, r, s, a;
                if (i)
                  for (n = 0, r = i.length; n < r; n++)(s = i[n]).length && (a = dust.filters[s], "s" === s ? e = null : "function" == typeof a ? t = a(t, o) : dust.log("Invalid filter `" + s + "`", WARN));
                return e && (t = dust.filters[e](t, o)), t
              }, dust.filters = {
                h: function(t) {
                  return dust.escapeHtml(t)
                },
                j: function(t) {
                  return dust.escapeJs(t)
                },
                u: encodeURI,
                uc: encodeURIComponent,
                js: function(t) {
                  return dust.escapeJSON(t)
                },
                jp: function(t) {
                  return JSON ? JSON.parse(t) : (dust.log("JSON is undefined; could not parse `" + t + "`", WARN), t)
                }
              }, dust.makeBase = dust.context = function(t, e) {
                return new Context(void 0, t, e)
              }, dust.isContext = function(t) {
                return "object" == typeof t && !0 === t._isContext
              }, Context.wrap = function(t, e) {
                return dust.isContext(t) ? t : new Context(t, {}, {}, null, e)
              }, Context.prototype.get = function(t, e) {
                return "string" == typeof t && ("." === t[0] && (e = !0, t = t.substr(1)), t = t.split(".")), this._get(e, t)
              }, Context.prototype._get = function(t, e) {
                var i, o, n, r, s, a = this.stack || {},
                  l = 1;
                if (o = e[0], n = e.length, t && 0 === n) a = (r = a).head;
                else {
                  if (t) a = a && (a.head ? a.head[o] : void 0);
                  else {
                    for (; a && (!a.isObject || (r = a.head, void 0 === (i = a.head[o])));) a = a.tail;
                    a = void 0 !== i ? i : this.global && this.global[o]
                  }
                  for (; a && l < n;) {
                    if (dust.isThenable(a)) return a.then(getWithResolvedData(this, t, e.slice(l)));
                    a = (r = a)[e[l]], l++
                  }
                }
                return "function" == typeof a ? ((s = function() {
                  try {
                    return a.apply(r, arguments)
                  } catch (t) {
                    throw dust.log(t, ERROR), t
                  }
                }).__dustBody = !!a.__dustBody, s) : (void 0 === a && dust.log("Cannot find reference `{" + e.join(".") + "}` in template `" + this.getTemplateName() + "`", INFO), a)
              }, Context.prototype.getPath = function(t, e) {
                return this._get(t, e)
              }, Context.prototype.push = function(t, e, i) {
                return void 0 === t ? (dust.log("Not pushing an undefined variable onto the context", INFO), this) : this.rebase(new Stack(t, this.stack, e, i))
              }, Context.prototype.pop = function() {
                var t = this.current();
                return this.stack = this.stack && this.stack.tail, t
              }, Context.prototype.rebase = function(t) {
                return new Context(t, this.global, this.options, this.blocks, this.getTemplateName())
              }, Context.prototype.clone = function() {
                var t = this.rebase();
                return t.stack = this.stack, t
              }, Context.prototype.current = function() {
                return this.stack && this.stack.head
              }, Context.prototype.getBlock = function(t) {
                var e, i, o;
                if ("function" == typeof t && (t = t(new Chunk, this).data.join("")), !(e = this.blocks)) return dust.log("No blocks for context `" + t + "` in template `" + this.getTemplateName() + "`", DEBUG), !1;
                for (i = e.length; i--;)
                  if (o = e[i][t]) return o;
                return dust.log("Malformed template `" + this.getTemplateName() + "` was missing one or more blocks."), !1
              }, Context.prototype.shiftBlocks = function(t) {
                var e, i = this.blocks;
                return t ? (e = i ? i.concat([t]) : [t], new Context(this.stack, this.global, this.options, e, this.getTemplateName())) : this
              }, Context.prototype.resolve = function(t) {
                var e;
                return "function" != typeof t ? t : (e = (new Chunk).render(t, this)) instanceof Chunk ? e.data.join("") : e
              }, Context.prototype.getTemplateName = function() {
                return this.templateName
              }, Stub.prototype.flush = function() {
                for (var t = this.head; t;) {
                  if (!t.flushable) return t.error ? (this.callback(t.error), dust.log("Rendering failed with error `" + t.error + "`", ERROR), void(this.flush = EMPTY_FUNC)) : void 0;
                  this.out += t.data.join(""), t = t.next, this.head = t
                }
                this.callback(null, this.out)
              }, Stream.prototype.flush = function() {
                for (var t = this.head; t;) {
                  if (!t.flushable) return t.error ? (this.emit("error", t.error), this.emit("end"), dust.log("Streaming failed with error `" + t.error + "`", ERROR), void(this.flush = EMPTY_FUNC)) : void 0;
                  this.emit("data", t.data.join("")), t = t.next, this.head = t
                }
                this.emit("end")
              }, Stream.prototype.emit = function(t, e) {
                var i, o, n = (this.events || {})[t] || [];
                if (!n.length) return dust.log("Stream broadcasting, but no listeners for `" + t + "`", DEBUG), !1;
                for (i = 0, o = (n = n.slice(0)).length; i < o; i++) n[i](e);
                return !0
              }, Stream.prototype.on = function(t, e) {
                var i = this.events = this.events || {},
                  o = i[t] = i[t] || [];
                return "function" != typeof e ? dust.log("No callback function provided for `" + t + "` event listener", WARN) : o.push(e), this
              }, Stream.prototype.pipe = function(e) {
                if ("function" != typeof e.write || "function" != typeof e.end) return dust.log("Incompatible stream passed to `pipe`", WARN), this;
                var i = !1;
                return "function" == typeof e.emit && e.emit("pipe", this), "function" == typeof e.on && e.on("error", function() {
                  i = !0
                }), this.on("data", function(t) {
                  if (!i) try {
                    e.write(t, "utf8")
                  } catch (t) {
                    dust.log(t, ERROR)
                  }
                }).on("end", function() {
                  if (!i) try {
                    e.end(), i = !0
                  } catch (t) {
                    dust.log(t, ERROR)
                  }
                })
              }, Chunk.prototype.write = function(t) {
                var e = this.taps;
                return e && (t = e.go(t)), this.data.push(t), this
              }, Chunk.prototype.end = function(t) {
                return t && this.write(t), this.flushable = !0, this.root.flush(), this
              }, Chunk.prototype.map = function(t) {
                var e = new Chunk(this.root, this.next, this.taps),
                  i = new Chunk(this.root, e, this.taps);
                this.next = i, this.flushable = !0;
                try {
                  t(i)
                } catch (t) {
                  dust.log(t, ERROR), i.setError(t)
                }
                return e
              }, Chunk.prototype.tap = function(t) {
                var e = this.taps;
                return this.taps = e ? e.push(t) : new Tap(t), this
              }, Chunk.prototype.untap = function() {
                return this.taps = this.taps.tail, this
              }, Chunk.prototype.render = function(t, e) {
                return t(this, e)
              }, Chunk.prototype.reference = function(t, e, i, o) {
                return "function" == typeof t ? (t = t.apply(e.current(), [this, e, null, {
                  auto: i,
                  filters: o
                }])) instanceof Chunk ? t : this.reference(t, e, i, o) : dust.isThenable(t) ? this.await(t, e, null, i, o) : dust.isStreamable(t) ? this.stream(t, e, null, i, o) : dust.isEmpty(t) ? this : this.write(dust.filter(t, i, o, e))
              }, Chunk.prototype.section = function(t, e, i, o) {
                var n, r, s, a = i.block,
                  l = i.else,
                  u = this;
                if ("function" == typeof t && !dust.isTemplateFn(t)) {
                  try {
                    t = t.apply(e.current(), [this, e, i, o])
                  } catch (t) {
                    return dust.log(t, ERROR), this.setError(t)
                  }
                  if (t instanceof Chunk) return t
                }
                if (dust.isEmptyObject(i)) return u;
                if (dust.isEmptyObject(o) || (e = e.push(o)), dust.isArray(t)) {
                  if (a) {
                    if (0 < (r = t.length)) {
                      for ((s = e.stack && e.stack.head || {}).$len = r, n = 0; n < r; n++) s.$idx = n, u = a(u, e.push(t[n], n, r));
                      return s.$idx = void 0, s.$len = void 0, u
                    }
                    if (l) return l(this, e)
                  }
                } else {
                  if (dust.isThenable(t)) return this.await(t, e, i);
                  if (dust.isStreamable(t)) return this.stream(t, e, i);
                  if (!0 === t) {
                    if (a) return a(this, e)
                  } else if (t || 0 === t) {
                    if (a) return a(this, e.push(t))
                  } else if (l) return l(this, e)
                }
                return dust.log("Section without corresponding key in template `" + e.getTemplateName() + "`", DEBUG), this
              }, Chunk.prototype.exists = function(t, e, i) {
                var o = i.block,
                  n = i.else;
                if (dust.isEmpty(t)) {
                  if (n) return n(this, e)
                } else {
                  if (o) return o(this, e);
                  dust.log("No block for exists check in template `" + e.getTemplateName() + "`", DEBUG)
                }
                return this
              }, Chunk.prototype.notexists = function(t, e, i) {
                var o = i.block,
                  n = i.else;
                if (dust.isEmpty(t)) {
                  if (o) return o(this, e);
                  dust.log("No block for not-exists check in template `" + e.getTemplateName() + "`", DEBUG)
                } else if (n) return n(this, e);
                return this
              }, Chunk.prototype.block = function(t, e, i) {
                var o = t || i.block;
                return o ? o(this, e) : this
              }, Chunk.prototype.partial = function(t, e, i, o) {
                var n;
                return void 0 === o && (o = i, i = e), dust.isEmptyObject(o) || (n = (i = i.clone()).pop(), i = i.push(o).push(n)), dust.isTemplateFn(t) ? this.capture(t, e, function(t, e) {
                  load(i.templateName = t, e, i).end()
                }) : load(i.templateName = t, this, i)
              }, Chunk.prototype.helper = function(e, t, i, o, n) {
                var r, s = this,
                  a = o.filters;
                if (void 0 === n && (n = "h"), !dust.helpers[e]) return dust.log("Helper `" + e + "` does not exist", WARN), s;
                try {
                  return (r = dust.helpers[e](s, t, i, o)) instanceof Chunk ? r : ("string" == typeof a && (a = a.split("|")), dust.isEmptyObject(i) ? s.reference(r, t, n, a) : s.section(r, t, i, o))
                } catch (t) {
                  return dust.log("Error in helper `" + e + "`: " + t.message, ERROR), s.setError(t)
                }
              }, Chunk.prototype.await = function(t, o, n, e, r) {
                return this.map(function(i) {
                  t.then(function(t) {
                    (i = n ? i.section(t, o, n) : i.reference(t, o, e, r)).end()
                  }, function(t) {
                    var e = n && n.error;
                    e ? i.render(e, o.push(t)).end() : (dust.log("Unhandled promise rejection in `" + o.getTemplateName() + "`", INFO), i.end())
                  })
                })
              }, Chunk.prototype.stream = function(t, n, r, s, a) {
                var l = r && r.block,
                  e = r && r.error;
                return this.map(function(i) {
                  var o = !1;
                  t.on("data", function(e) {
                    o || (l ? i = i.map(function(t) {
                      t.render(l, n.push(e)).end()
                    }) : r || (i = i.reference(e, n, s, a)))
                  }).on("error", function(t) {
                    o || (e ? i.render(e, n.push(t)) : dust.log("Unhandled stream error in `" + n.getTemplateName() + "`", INFO), o || (o = !0, i.end()))
                  }).on("end", function() {
                    o || (o = !0, i.end())
                  })
                })
              }, Chunk.prototype.capture = function(e, o, n) {
                return this.map(function(i) {
                  var t = new Stub(function(t, e) {
                    t ? i.setError(t) : n(e, i)
                  });
                  e(t.head, o).end()
                })
              }, Chunk.prototype.setError = function(t) {
                return this.error = t, this.root.flush(), this
              }, Chunk.prototype) dust._aliases[f] && (Chunk.prototype[dust._aliases[f]] = Chunk.prototype[f]);
            Tap.prototype.push = function(t) {
              return new Tap(t, this)
            }, Tap.prototype.go = function(t) {
              for (var e = this; e;) t = e.head(t), e = e.tail;
              return t
            };
            var HCHARS = /[&<>"']/,
              AMP = /&/g,
              LT = /</g,
              GT = />/g,
              QUOT = /\"/g,
              SQUOT = /\'/g;
            dust.escapeHtml = function(t) {
              return "string" == typeof t || t && "function" == typeof t.toString ? ("string" != typeof t && (t = t.toString()), HCHARS.test(t) ? t.replace(AMP, "&amp;").replace(LT, "&lt;").replace(GT, "&gt;").replace(QUOT, "&quot;").replace(SQUOT, "&#39;") : t) : t
            };
            var BS = /\\/g,
              FS = /\//g,
              CR = /\r/g,
              LS = /\u2028/g,
              PS = /\u2029/g,
              NL = /\n/g,
              LF = /\f/g,
              SQ = /'/g,
              DQ = /"/g,
              TB = /\t/g;
            return dust.escapeJs = function(t) {
              return "string" == typeof t ? t.replace(BS, "\\\\").replace(FS, "\\/").replace(DQ, '\\"').replace(SQ, "\\'").replace(CR, "\\r").replace(LS, "\\u2028").replace(PS, "\\u2029").replace(NL, "\\n").replace(LF, "\\f").replace(TB, "\\t") : t
            }, dust.escapeJSON = function(t) {
              return JSON ? JSON.stringify(t).replace(LS, "\\u2028").replace(PS, "\\u2029").replace(LT, "\\u003c") : (dust.log("JSON is undefined; could not escape `" + t + "`", WARN), t)
            }, dust
          }, "function" == typeof define && define.amd && !0 === define.amd.dust ? define("dust.core", [], n4) : "object" == typeof exports ? module.exports = n4() : m4.dust = n4()
        }).call(this, _dereq_("_process"))
      }, {
        _process: 8
      }],
      6: [function(t, m, e) {
        ! function(t, s) {
          function a() {
            var t = _.elements;
            return "string" == typeof t ? t.split(" ") : t
          }

          function l(t) {
            var e = p[t[h]];
            return e || (e = {}, d++, t[h] = d, p[d] = e), e
          }

          function o(t, e, i) {
            return e = e || s, u ? e.createElement(t) : !(o = (i = i || l(e)).cache[t] ? i.cache[t].cloneNode() : c.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || r.test(t) || o.tagUrn ? o : i.frag.appendChild(o);
            var o
          }

          function n(t) {
            var e = l(t = t || s);
            return !_.shivCSS || i || e.hasCSS || (e.hasCSS = !! function(t, e) {
              var i = t.createElement("p"),
                o = t.getElementsByTagName("head")[0] || t.documentElement;
              return i.innerHTML = "x<style>" + e + "</style>", o.insertBefore(i.lastChild, o.firstChild)
            }(t, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), u || function(e, i) {
              i.cache || (i.cache = {}, i.createElem = e.createElement, i.createFrag = e.createDocumentFragment, i.frag = i.createFrag()), e.createElement = function(t) {
                return _.shivMethods ? o(t, e, i) : i.createElem(t)
              }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/[\w\-:]+/g, function(t) {
                return i.createElem(t), i.frag.createElement(t), 'c("' + t + '")'
              }) + ");return n}")(_, i.frag)
            }(t, e), t
          }
          var i, u, e = t.html5 || {},
            r = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            h = "_html5shiv",
            d = 0,
            p = {};
          ! function() {
            try {
              var t = s.createElement("a");
              t.innerHTML = "<xyz></xyz>", i = "hidden" in t, u = 1 == t.childNodes.length || function() {
                s.createElement("a");
                var t = s.createDocumentFragment();
                return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
              }()
            } catch (t) {
              u = i = !0
            }
          }();
          var _ = {
            elements: e.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: "3.7.3-pre",
            shivCSS: !1 !== e.shivCSS,
            supportsUnknownElements: u,
            shivMethods: !1 !== e.shivMethods,
            type: "default",
            shivDocument: n,
            createElement: o,
            createDocumentFragment: function(t, e) {
              if (t = t || s, u) return t.createDocumentFragment();
              for (var i = (e = e || l(t)).frag.cloneNode(), o = 0, n = a(), r = n.length; o < r; o++) i.createElement(n[o]);
              return i
            },
            addElements: function(t, e) {
              var i = _.elements;
              "string" != typeof i && (i = i.join(" ")), "string" != typeof t && (t = t.join(" ")), _.elements = i + " " + t, n(e)
            }
          };
          t.html5 = _, n(s), "object" == typeof m && m.exports && (m.exports = _)
        }("undefined" != typeof window ? window : this, document)
      }, {}],
      7: [function(t, e, i) {
        var o, n, r, s, b = {
          version: "1.0.1"
        };

        function a(t) {
          return window["webkit" + t] || window["moz" + t] || window["ms" + t]
        }

        function l(t) {
          var e = +new Date,
            i = Math.max(0, 16 - (e - o));
          return o = e + i, window.setTimeout(t, i)
        }

        function u() {}
        "object" == typeof e && "object" == typeof e.exports ? e.exports = b : "function" == typeof define && define.amd && define(b), "undefined" != typeof window && (s = window.L, b.noConflict = function() {
          return window.L = s, this
        }, window.L = b), b.Util = {
          extend: function(t) {
            var e, i, o, n;
            for (i = 1, o = arguments.length; i < o; i++)
              for (e in n = arguments[i]) t[e] = n[e];
            return t
          },
          create: Object.create || function(t) {
            return u.prototype = t, new u
          },
          bind: function(t, e) {
            var i = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
            var o = i.call(arguments, 2);
            return function() {
              return t.apply(e, o.length ? o.concat(i.call(arguments)) : arguments)
            }
          },
          stamp: function(t) {
            return t._leaflet_id = t._leaflet_id || ++b.Util.lastId, t._leaflet_id
          },
          lastId: 0,
          throttle: function(t, e, i) {
            var o, n, r, s;
            return s = function() {
              o = !1, n && (r.apply(i, n), n = !1)
            }, r = function() {
              o ? n = arguments : (t.apply(i, arguments), setTimeout(s, e), o = !0)
            }
          },
          wrapNum: function(t, e, i) {
            var o = e[1],
              n = e[0],
              r = o - n;
            return t === o && i ? t : ((t - n) % r + r) % r + n
          },
          falseFn: function() {
            return !1
          },
          formatNum: function(t, e) {
            var i = Math.pow(10, e || 5);
            return Math.round(t * i) / i
          },
          trim: function(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
          },
          splitWords: function(t) {
            return b.Util.trim(t).split(/\s+/)
          },
          setOptions: function(t, e) {
            for (var i in t.hasOwnProperty("options") || (t.options = t.options ? b.Util.create(t.options) : {}), e) t.options[i] = e[i];
            return t.options
          },
          getParamString: function(t, e, i) {
            var o = [];
            for (var n in t) o.push(encodeURIComponent(i ? n.toUpperCase() : n) + "=" + encodeURIComponent(t[n]));
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + o.join("&")
          },
          template: function(t, o) {
            return t.replace(b.Util.templateRe, function(t, e) {
              var i = o[e];
              if (void 0 === i) throw new Error("No value provided for variable " + t);
              return "function" == typeof i && (i = i(o)), i
            })
          },
          templateRe: /\{ *([\w_\-]+) *\}/g,
          isArray: Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
          },
          indexOf: function(t, e) {
            for (var i = 0; i < t.length; i++)
              if (t[i] === e) return i;
            return -1
          },
          emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
        }, o = 0, n = window.requestAnimationFrame || a("RequestAnimationFrame") || l, r = window.cancelAnimationFrame || a("CancelAnimationFrame") || a("CancelRequestAnimationFrame") || function(t) {
          window.clearTimeout(t)
        }, b.Util.requestAnimFrame = function(t, e, i) {
          return i && n === l ? void t.call(e) : n.call(window, b.bind(t, e))
        }, b.Util.cancelAnimFrame = function(t) {
          t && r.call(window, t)
        }, b.extend = b.Util.extend, b.bind = b.Util.bind, b.stamp = b.Util.stamp, b.setOptions = b.Util.setOptions, b.Class = function() {}, b.Class.extend = function(t) {
          function e() {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
          }
          var i = e.__super__ = this.prototype,
            o = b.Util.create(i);
          for (var n in (o.constructor = e).prototype = o, this) this.hasOwnProperty(n) && "prototype" !== n && (e[n] = this[n]);
          return t.statics && (b.extend(e, t.statics), delete t.statics), t.includes && (b.Util.extend.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = b.Util.extend(b.Util.create(o.options), t.options)), b.extend(o, t), o._initHooks = [], o.callInitHooks = function() {
            if (!this._initHooksCalled) {
              i.callInitHooks && i.callInitHooks.call(this), this._initHooksCalled = !0;
              for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this)
            }
          }, e
        }, b.Class.include = function(t) {
          return b.extend(this.prototype, t), this
        }, b.Class.mergeOptions = function(t) {
          return b.extend(this.prototype.options, t), this
        }, b.Class.addInitHook = function(t) {
          var e = Array.prototype.slice.call(arguments, 1),
            i = "function" == typeof t ? t : function() {
              this[t].apply(this, e)
            };
          return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
        }, b.Evented = b.Class.extend({
          on: function(t, e, i) {
            if ("object" == typeof t)
              for (var o in t) this._on(o, t[o], e);
            else
              for (var n = 0, r = (t = b.Util.splitWords(t)).length; n < r; n++) this._on(t[n], e, i);
            return this
          },
          off: function(t, e, i) {
            if (t)
              if ("object" == typeof t)
                for (var o in t) this._off(o, t[o], e);
              else
                for (var n = 0, r = (t = b.Util.splitWords(t)).length; n < r; n++) this._off(t[n], e, i);
            else delete this._events;
            return this
          },
          _on: function(t, e, i) {
            this._events = this._events || {};
            var o = this._events[t];
            o || (o = [], this._events[t] = o), i === this && (i = void 0);
            for (var n = {
                fn: e,
                ctx: i
              }, r = o, s = 0, a = r.length; s < a; s++)
              if (r[s].fn === e && r[s].ctx === i) return;
            r.push(n), o.count++
          },
          _off: function(t, e, i) {
            var o, n, r;
            if (this._events && (o = this._events[t])) {
              if (!e) {
                for (n = 0, r = o.length; n < r; n++) o[n].fn = b.Util.falseFn;
                return void delete this._events[t]
              }
              if (i === this && (i = void 0), o)
                for (n = 0, r = o.length; n < r; n++) {
                  var s = o[n];
                  if (s.ctx === i && s.fn === e) return s.fn = b.Util.falseFn, this._firingCount && (this._events[t] = o = o.slice()), void o.splice(n, 1)
                }
            }
          },
          fire: function(t, e, i) {
            if (!this.listens(t, i)) return this;
            var o = b.Util.extend({}, e, {
              type: t,
              target: this
            });
            if (this._events) {
              var n = this._events[t];
              if (n) {
                this._firingCount = this._firingCount + 1 || 1;
                for (var r = 0, s = n.length; r < s; r++) {
                  var a = n[r];
                  a.fn.call(a.ctx || this, o)
                }
                this._firingCount--
              }
            }
            return i && this._propagateEvent(o), this
          },
          listens: function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e)
              for (var o in this._eventParents)
                if (this._eventParents[o].listens(t, e)) return !0;
            return !1
          },
          once: function(t, e, i) {
            if ("object" == typeof t) {
              for (var o in t) this.once(o, t[o], e);
              return this
            }
            var n = b.bind(function() {
              this.off(t, e, i).off(t, n, i)
            }, this);
            return this.on(t, e, i).on(t, n, i)
          },
          addEventParent: function(t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[b.stamp(t)] = t, this
          },
          removeEventParent: function(t) {
            return this._eventParents && delete this._eventParents[b.stamp(t)], this
          },
          _propagateEvent: function(t) {
            for (var e in this._eventParents) this._eventParents[e].fire(t.type, b.extend({
              layer: t.target
            }, t), !0)
          }
        });
        var c, h, d, p, _, m, f, g, v, y, C, w, x, k, D, L, z, P, E, T, G = b.Evented.prototype;
        G.addEventListener = G.on, G.removeEventListener = G.clearAllEventListeners = G.off, G.addOneTimeEventListener = G.once, G.fireEvent = G.fire, G.hasEventListeners = G.listens, b.Mixin = {
            Events: G
          }, p = navigator.userAgent.toLowerCase(), _ = document.documentElement, m = "ActiveXObject" in window, f = -1 !== p.indexOf("webkit"), g = -1 !== p.indexOf("phantom"), v = -1 !== p.search("android [23]"), y = -1 !== p.indexOf("chrome"), C = -1 !== p.indexOf("gecko") && !f && !window.opera && !m, w = 0 === navigator.platform.indexOf("Win"), x = "undefined" != typeof orientation || -1 !== p.indexOf("mobile"), k = !window.PointerEvent && window.MSPointerEvent, D = window.PointerEvent || k, L = m && "transition" in _.style, z = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !v, P = "MozPerspective" in _.style, E = "OTransition" in _.style, T = !window.L_NO_TOUCH && (D || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), b.Browser = {
            ie: m,
            ielt9: m && !document.addEventListener,
            edge: "msLaunchUri" in navigator && !("documentMode" in document),
            webkit: f,
            gecko: C,
            android: -1 !== p.indexOf("android"),
            android23: v,
            chrome: y,
            safari: !y && -1 !== p.indexOf("safari"),
            win: w,
            ie3d: L,
            webkit3d: z,
            gecko3d: P,
            opera12: E,
            any3d: !window.L_DISABLE_3D && (L || z || P) && !E && !g,
            mobile: x,
            mobileWebkit: x && f,
            mobileWebkit3d: x && z,
            mobileOpera: x && window.opera,
            mobileGecko: x && C,
            touch: !!T,
            msPointer: !!k,
            pointer: !!D,
            retina: 1 < (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI)
          }, b.Point = function(t, e, i) {
            this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
          }, b.Point.prototype = {
            clone: function() {
              return new b.Point(this.x, this.y)
            },
            add: function(t) {
              return this.clone()._add(b.point(t))
            },
            _add: function(t) {
              return this.x += t.x, this.y += t.y, this
            },
            subtract: function(t) {
              return this.clone()._subtract(b.point(t))
            },
            _subtract: function(t) {
              return this.x -= t.x, this.y -= t.y, this
            },
            divideBy: function(t) {
              return this.clone()._divideBy(t)
            },
            _divideBy: function(t) {
              return this.x /= t, this.y /= t, this
            },
            multiplyBy: function(t) {
              return this.clone()._multiplyBy(t)
            },
            _multiplyBy: function(t) {
              return this.x *= t, this.y *= t, this
            },
            scaleBy: function(t) {
              return new b.Point(this.x * t.x, this.y * t.y)
            },
            unscaleBy: function(t) {
              return new b.Point(this.x / t.x, this.y / t.y)
            },
            round: function() {
              return this.clone()._round()
            },
            _round: function() {
              return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            },
            floor: function() {
              return this.clone()._floor()
            },
            _floor: function() {
              return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
            },
            ceil: function() {
              return this.clone()._ceil()
            },
            _ceil: function() {
              return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
            },
            distanceTo: function(t) {
              var e = (t = b.point(t)).x - this.x,
                i = t.y - this.y;
              return Math.sqrt(e * e + i * i)
            },
            equals: function(t) {
              return (t = b.point(t)).x === this.x && t.y === this.y
            },
            contains: function(t) {
              return t = b.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
            },
            toString: function() {
              return "Point(" + b.Util.formatNum(this.x) + ", " + b.Util.formatNum(this.y) + ")"
            }
          }, b.point = function(t, e, i) {
            return t instanceof b.Point ? t : b.Util.isArray(t) ? new b.Point(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new b.Point(t.x, t.y) : new b.Point(t, e, i)
          }, b.Bounds = function(t, e) {
            if (t)
              for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++) this.extend(i[o])
          }, b.Bounds.prototype = {
            extend: function(t) {
              return t = b.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
            },
            getCenter: function(t) {
              return new b.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
            },
            getBottomLeft: function() {
              return new b.Point(this.min.x, this.max.y)
            },
            getTopRight: function() {
              return new b.Point(this.max.x, this.min.y)
            },
            getSize: function() {
              return this.max.subtract(this.min)
            },
            contains: function(t) {
              var e, i;
              return (t = "number" == typeof t[0] || t instanceof b.Point ? b.point(t) : b.bounds(t)) instanceof b.Bounds ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
            },
            intersects: function(t) {
              t = b.bounds(t);
              var e = this.min,
                i = this.max,
                o = t.min,
                n = t.max,
                r = n.x >= e.x && o.x <= i.x,
                s = n.y >= e.y && o.y <= i.y;
              return r && s
            },
            overlaps: function(t) {
              t = b.bounds(t);
              var e = this.min,
                i = this.max,
                o = t.min,
                n = t.max,
                r = n.x > e.x && o.x < i.x,
                s = n.y > e.y && o.y < i.y;
              return r && s
            },
            isValid: function() {
              return !(!this.min || !this.max)
            }
          }, b.bounds = function(t, e) {
            return !t || t instanceof b.Bounds ? t : new b.Bounds(t, e)
          }, b.Transformation = function(t, e, i, o) {
            this._a = t, this._b = e, this._c = i, this._d = o
          }, b.Transformation.prototype = {
            transform: function(t, e) {
              return this._transform(t.clone(), e)
            },
            _transform: function(t, e) {
              return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
            },
            untransform: function(t, e) {
              return e = e || 1, new b.Point((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
            }
          }, b.DomUtil = {
            get: function(t) {
              return "string" == typeof t ? document.getElementById(t) : t
            },
            getStyle: function(t, e) {
              var i = t.style[e] || t.currentStyle && t.currentStyle[e];
              if ((!i || "auto" === i) && document.defaultView) {
                var o = document.defaultView.getComputedStyle(t, null);
                i = o ? o[e] : null
              }
              return "auto" === i ? null : i
            },
            create: function(t, e, i) {
              var o = document.createElement(t);
              return o.className = e || "", i && i.appendChild(o), o
            },
            remove: function(t) {
              var e = t.parentNode;
              e && e.removeChild(t)
            },
            empty: function(t) {
              for (; t.firstChild;) t.removeChild(t.firstChild)
            },
            toFront: function(t) {
              t.parentNode.appendChild(t)
            },
            toBack: function(t) {
              var e = t.parentNode;
              e.insertBefore(t, e.firstChild)
            },
            hasClass: function(t, e) {
              if (void 0 !== t.classList) return t.classList.contains(e);
              var i = b.DomUtil.getClass(t);
              return 0 < i.length && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
            },
            addClass: function(t, e) {
              if (void 0 !== t.classList)
                for (var i = b.Util.splitWords(e), o = 0, n = i.length; o < n; o++) t.classList.add(i[o]);
              else if (!b.DomUtil.hasClass(t, e)) {
                var r = b.DomUtil.getClass(t);
                b.DomUtil.setClass(t, (r ? r + " " : "") + e)
              }
            },
            removeClass: function(t, e) {
              void 0 !== t.classList ? t.classList.remove(e) : b.DomUtil.setClass(t, b.Util.trim((" " + b.DomUtil.getClass(t) + " ").replace(" " + e + " ", " ")))
            },
            setClass: function(t, e) {
              void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
            },
            getClass: function(t) {
              return void 0 === t.className.baseVal ? t.className : t.className.baseVal
            },
            setOpacity: function(t, e) {
              "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && b.DomUtil._setOpacityIE(t, e)
            },
            _setOpacityIE: function(t, e) {
              var i = !1,
                o = "DXImageTransform.Microsoft.Alpha";
              try {
                i = t.filters.item(o)
              } catch (t) {
                if (1 === e) return
              }
              e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + o + "(opacity=" + e + ")"
            },
            testProp: function(t) {
              for (var e = document.documentElement.style, i = 0; i < t.length; i++)
                if (t[i] in e) return t[i];
              return !1
            },
            setTransform: function(t, e, i) {
              var o = e || new b.Point(0, 0);
              t.style[b.DomUtil.TRANSFORM] = (b.Browser.ie3d ? "translate(" + o.x + "px," + o.y + "px)" : "translate3d(" + o.x + "px," + o.y + "px,0)") + (i ? " scale(" + i + ")" : "")
            },
            setPosition: function(t, e) {
              t._leaflet_pos = e, b.Browser.any3d ? b.DomUtil.setTransform(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
            },
            getPosition: function(t) {
              return t._leaflet_pos || new b.Point(0, 0)
            }
          },
          function() {
            b.DomUtil.TRANSFORM = b.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
            var t = b.DomUtil.TRANSITION = b.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
            if (b.DomUtil.TRANSITION_END = "webkitTransition" === t || "OTransition" === t ? t + "End" : "transitionend", "onselectstart" in document) b.DomUtil.disableTextSelection = function() {
              b.DomEvent.on(window, "selectstart", b.DomEvent.preventDefault)
            }, b.DomUtil.enableTextSelection = function() {
              b.DomEvent.off(window, "selectstart", b.DomEvent.preventDefault)
            };
            else {
              var e = b.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
              b.DomUtil.disableTextSelection = function() {
                if (e) {
                  var t = document.documentElement.style;
                  this._userSelect = t[e], t[e] = "none"
                }
              }, b.DomUtil.enableTextSelection = function() {
                e && (document.documentElement.style[e] = this._userSelect, delete this._userSelect)
              }
            }
            b.DomUtil.disableImageDrag = function() {
              b.DomEvent.on(window, "dragstart", b.DomEvent.preventDefault)
            }, b.DomUtil.enableImageDrag = function() {
              b.DomEvent.off(window, "dragstart", b.DomEvent.preventDefault)
            }, b.DomUtil.preventOutline = function(t) {
              for (; - 1 === t.tabIndex;) t = t.parentNode;
              t && t.style && (b.DomUtil.restoreOutline(), this._outlineElement = t, this._outlineStyle = t.style.outline, t.style.outline = "none", b.DomEvent.on(window, "keydown", b.DomUtil.restoreOutline, this))
            }, b.DomUtil.restoreOutline = function() {
              this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, b.DomEvent.off(window, "keydown", b.DomUtil.restoreOutline, this))
            }
          }(), b.LatLng = function(t, e, i) {
            if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
          }, b.LatLng.prototype = {
            equals: function(t, e) {
              return !!t && (t = b.latLng(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
            },
            toString: function(t) {
              return "LatLng(" + b.Util.formatNum(this.lat, t) + ", " + b.Util.formatNum(this.lng, t) + ")"
            },
            distanceTo: function(t) {
              return b.CRS.Earth.distance(this, b.latLng(t))
            },
            wrap: function() {
              return b.CRS.Earth.wrapLatLng(this)
            },
            toBounds: function(t) {
              var e = 180 * t / 40075017,
                i = e / Math.cos(Math.PI / 180 * this.lat);
              return b.latLngBounds([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
            },
            clone: function() {
              return new b.LatLng(this.lat, this.lng, this.alt)
            }
          }, b.latLng = function(t, e, i) {
            return t instanceof b.LatLng ? t : b.Util.isArray(t) && "object" != typeof t[0] ? 3 === t.length ? new b.LatLng(t[0], t[1], t[2]) : 2 === t.length ? new b.LatLng(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new b.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new b.LatLng(t, e, i)
          }, b.LatLngBounds = function(t, e) {
            if (t)
              for (var i = e ? [t, e] : t, o = 0, n = i.length; o < n; o++) this.extend(i[o])
          }, b.LatLngBounds.prototype = {
            extend: function(t) {
              var e, i, o = this._southWest,
                n = this._northEast;
              if (t instanceof b.LatLng) i = e = t;
              else {
                if (!(t instanceof b.LatLngBounds)) return t ? this.extend(b.latLng(t) || b.latLngBounds(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
              }
              return o || n ? (o.lat = Math.min(e.lat, o.lat), o.lng = Math.min(e.lng, o.lng), n.lat = Math.max(i.lat, n.lat), n.lng = Math.max(i.lng, n.lng)) : (this._southWest = new b.LatLng(e.lat, e.lng), this._northEast = new b.LatLng(i.lat, i.lng)), this
            },
            pad: function(t) {
              var e = this._southWest,
                i = this._northEast,
                o = Math.abs(e.lat - i.lat) * t,
                n = Math.abs(e.lng - i.lng) * t;
              return new b.LatLngBounds(new b.LatLng(e.lat - o, e.lng - n), new b.LatLng(i.lat + o, i.lng + n))
            },
            getCenter: function() {
              return new b.LatLng((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
            },
            getSouthWest: function() {
              return this._southWest
            },
            getNorthEast: function() {
              return this._northEast
            },
            getNorthWest: function() {
              return new b.LatLng(this.getNorth(), this.getWest())
            },
            getSouthEast: function() {
              return new b.LatLng(this.getSouth(), this.getEast())
            },
            getWest: function() {
              return this._southWest.lng
            },
            getSouth: function() {
              return this._southWest.lat
            },
            getEast: function() {
              return this._northEast.lng
            },
            getNorth: function() {
              return this._northEast.lat
            },
            contains: function(t) {
              t = "number" == typeof t[0] || t instanceof b.LatLng ? b.latLng(t) : b.latLngBounds(t);
              var e, i, o = this._southWest,
                n = this._northEast;
              return t instanceof b.LatLngBounds ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= o.lat && i.lat <= n.lat && e.lng >= o.lng && i.lng <= n.lng
            },
            intersects: function(t) {
              t = b.latLngBounds(t);
              var e = this._southWest,
                i = this._northEast,
                o = t.getSouthWest(),
                n = t.getNorthEast(),
                r = n.lat >= e.lat && o.lat <= i.lat,
                s = n.lng >= e.lng && o.lng <= i.lng;
              return r && s
            },
            overlaps: function(t) {
              t = b.latLngBounds(t);
              var e = this._southWest,
                i = this._northEast,
                o = t.getSouthWest(),
                n = t.getNorthEast(),
                r = n.lat > e.lat && o.lat < i.lat,
                s = n.lng > e.lng && o.lng < i.lng;
              return r && s
            },
            toBBoxString: function() {
              return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
            },
            equals: function(t) {
              return !!t && (t = b.latLngBounds(t), this._southWest.equals(t.getSouthWest()) && this._northEast.equals(t.getNorthEast()))
            },
            isValid: function() {
              return !(!this._southWest || !this._northEast)
            }
          }, b.latLngBounds = function(t, e) {
            return t instanceof b.LatLngBounds ? t : new b.LatLngBounds(t, e)
          }, b.Projection = {}, b.Projection.LonLat = {
            project: function(t) {
              return new b.Point(t.lng, t.lat)
            },
            unproject: function(t) {
              return new b.LatLng(t.y, t.x)
            },
            bounds: b.bounds([-180, -90], [180, 90])
          }, b.Projection.SphericalMercator = {
            R: 6378137,
            MAX_LATITUDE: 85.0511287798,
            project: function(t) {
              var e = Math.PI / 180,
                i = this.MAX_LATITUDE,
                o = Math.max(Math.min(i, t.lat), -i),
                n = Math.sin(o * e);
              return new b.Point(this.R * t.lng * e, this.R * Math.log((1 + n) / (1 - n)) / 2)
            },
            unproject: function(t) {
              var e = 180 / Math.PI;
              return new b.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
            },
            bounds: (d = 6378137 * Math.PI, b.bounds([-d, -d], [d, d]))
          }, b.CRS = {
            latLngToPoint: function(t, e) {
              var i = this.projection.project(t),
                o = this.scale(e);
              return this.transformation._transform(i, o)
            },
            pointToLatLng: function(t, e) {
              var i = this.scale(e),
                o = this.transformation.untransform(t, i);
              return this.projection.unproject(o)
            },
            project: function(t) {
              return this.projection.project(t)
            },
            unproject: function(t) {
              return this.projection.unproject(t)
            },
            scale: function(t) {
              return 256 * Math.pow(2, t)
            },
            zoom: function(t) {
              return Math.log(t / 256) / Math.LN2
            },
            getProjectedBounds: function(t) {
              if (this.infinite) return null;
              var e = this.projection.bounds,
                i = this.scale(t),
                o = this.transformation.transform(e.min, i),
                n = this.transformation.transform(e.max, i);
              return b.bounds(o, n)
            },
            infinite: !1,
            wrapLatLng: function(t) {
              var e = this.wrapLng ? b.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
                i = this.wrapLat ? b.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
                o = t.alt;
              return b.latLng(i, e, o)
            }
          }, b.CRS.Simple = b.extend({}, b.CRS, {
            projection: b.Projection.LonLat,
            transformation: new b.Transformation(1, 0, -1, 0),
            scale: function(t) {
              return Math.pow(2, t)
            },
            zoom: function(t) {
              return Math.log(t) / Math.LN2
            },
            distance: function(t, e) {
              var i = e.lng - t.lng,
                o = e.lat - t.lat;
              return Math.sqrt(i * i + o * o)
            },
            infinite: !0
          }), b.CRS.Earth = b.extend({}, b.CRS, {
            wrapLng: [-180, 180],
            R: 6371e3,
            distance: function(t, e) {
              var i = Math.PI / 180,
                o = t.lat * i,
                n = e.lat * i,
                r = Math.sin(o) * Math.sin(n) + Math.cos(o) * Math.cos(n) * Math.cos((e.lng - t.lng) * i);
              return this.R * Math.acos(Math.min(r, 1))
            }
          }), b.CRS.EPSG3857 = b.extend({}, b.CRS.Earth, {
            code: "EPSG:3857",
            projection: b.Projection.SphericalMercator,
            transformation: (h = .5 / (Math.PI * b.Projection.SphericalMercator.R), new b.Transformation(h, .5, -h, .5))
          }), b.CRS.EPSG900913 = b.extend({}, b.CRS.EPSG3857, {
            code: "EPSG:900913"
          }), b.CRS.EPSG4326 = b.extend({}, b.CRS.Earth, {
            code: "EPSG:4326",
            projection: b.Projection.LonLat,
            transformation: new b.Transformation(1 / 180, 1, -1 / 180, .5)
          }), b.Map = b.Evented.extend({
            options: {
              crs: b.CRS.EPSG3857,
              center: void 0,
              zoom: void 0,
              minZoom: void 0,
              maxZoom: void 0,
              layers: [],
              maxBounds: void 0,
              renderer: void 0,
              fadeAnimation: !0,
              markerZoomAnimation: !0,
              transform3DLimit: 8388608,
              zoomSnap: 1,
              zoomDelta: 1,
              trackResize: !0
            },
            initialize: function(t, e) {
              e = b.setOptions(this, e), this._initContainer(t), this._initLayout(), this._onResize = b.bind(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(b.latLng(e.center), e.zoom, {
                reset: !0
              }), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._addLayers(this.options.layers)
            },
            setView: function(t, e) {
              return e = void 0 === e ? this.getZoom() : e, this._resetView(b.latLng(t), e), this
            },
            setZoom: function(t, e) {
              return this._loaded ? this.setView(this.getCenter(), t, {
                zoom: e
              }) : (this._zoom = t, this)
            },
            zoomIn: function(t, e) {
              return t = t || (b.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
            },
            zoomOut: function(t, e) {
              return t = t || (b.Browser.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
            },
            setZoomAround: function(t, e, i) {
              var o = this.getZoomScale(e),
                n = this.getSize().divideBy(2),
                r = (t instanceof b.Point ? t : this.latLngToContainerPoint(t)).subtract(n).multiplyBy(1 - 1 / o),
                s = this.containerPointToLatLng(n.add(r));
              return this.setView(s, e, {
                zoom: i
              })
            },
            _getBoundsCenterZoom: function(t, e) {
              e = e || {}, t = t.getBounds ? t.getBounds() : b.latLngBounds(t);
              var i = b.point(e.paddingTopLeft || e.padding || [0, 0]),
                o = b.point(e.paddingBottomRight || e.padding || [0, 0]),
                n = this.getBoundsZoom(t, !1, i.add(o));
              n = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, n) : n;
              var r = o.subtract(i).divideBy(2),
                s = this.project(t.getSouthWest(), n),
                a = this.project(t.getNorthEast(), n);
              return {
                center: this.unproject(s.add(a).divideBy(2).add(r), n),
                zoom: n
              }
            },
            fitBounds: function(t, e) {
              if (!(t = b.latLngBounds(t)).isValid()) throw new Error("Bounds are not valid.");
              var i = this._getBoundsCenterZoom(t, e);
              return this.setView(i.center, i.zoom, e)
            },
            fitWorld: function(t) {
              return this.fitBounds([
                [-90, -180],
                [90, 180]
              ], t)
            },
            panTo: function(t, e) {
              return this.setView(t, this._zoom, {
                pan: e
              })
            },
            panBy: function(t) {
              return this.fire("movestart"), this._rawPanBy(b.point(t)), this.fire("move"), this.fire("moveend")
            },
            setMaxBounds: function(t) {
              return (t = b.latLngBounds(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
            },
            setMinZoom: function(t) {
              return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this
            },
            setMaxZoom: function(t) {
              return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this
            },
            panInsideBounds: function(t, e) {
              this._enforcingBounds = !0;
              var i = this.getCenter(),
                o = this._limitCenter(i, this._zoom, b.latLngBounds(t));
              return i.equals(o) || this.panTo(o, e), this._enforcingBounds = !1, this
            },
            invalidateSize: function(t) {
              if (!this._loaded) return this;
              t = b.extend({
                animate: !1,
                pan: !0
              }, !0 === t ? {
                animate: !0
              } : t);
              var e = this.getSize();
              this._sizeChanged = !0, this._lastCenter = null;
              var i = this.getSize(),
                o = e.divideBy(2).round(),
                n = i.divideBy(2).round(),
                r = o.subtract(n);
              return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(b.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: e,
                newSize: i
              })) : this
            },
            stop: function() {
              return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
            },
            addHandler: function(t, e) {
              if (!e) return this;
              var i = this[t] = new e(this);
              return this._handlers.push(i), this.options[t] && i.enable(), this
            },
            remove: function() {
              if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
              try {
                delete this._container._leaflet_id, delete this._containerId
              } catch (t) {
                this._container._leaflet_id = void 0, this._containerId = void 0
              }
              for (var t in b.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
              return this
            },
            createPane: function(t, e) {
              var i = "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                o = b.DomUtil.create("div", i, e || this._mapPane);
              return t && (this._panes[t] = o), o
            },
            getCenter: function() {
              return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
            },
            getZoom: function() {
              return this._zoom
            },
            getBounds: function() {
              var t = this.getPixelBounds(),
                e = this.unproject(t.getBottomLeft()),
                i = this.unproject(t.getTopRight());
              return new b.LatLngBounds(e, i)
            },
            getMinZoom: function() {
              return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
            },
            getMaxZoom: function() {
              return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
            },
            getBoundsZoom: function(t, e, i) {
              t = b.latLngBounds(t), i = b.point(i || [0, 0]);
              var o = this.getZoom() || 0,
                n = this.getMinZoom(),
                r = this.getMaxZoom(),
                s = t.getNorthWest(),
                a = t.getSouthEast(),
                l = this.getSize().subtract(i),
                u = this.project(a, o).subtract(this.project(s, o)),
                c = b.Browser.any3d ? this.options.zoomSnap : 1,
                h = Math.min(l.x / u.x, l.y / u.y);
              return o = this.getScaleZoom(h, o), c && (o = Math.round(o / (c / 100)) * (c / 100), o = e ? Math.ceil(o / c) * c : Math.floor(o / c) * c), Math.max(n, Math.min(r, o))
            },
            getSize: function() {
              return this._size && !this._sizeChanged || (this._size = new b.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
            },
            getPixelBounds: function(t, e) {
              var i = this._getTopLeftPoint(t, e);
              return new b.Bounds(i, i.add(this.getSize()))
            },
            getPixelOrigin: function() {
              return this._checkIfLoaded(), this._pixelOrigin
            },
            getPixelWorldBounds: function(t) {
              return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
            },
            getPane: function(t) {
              return "string" == typeof t ? this._panes[t] : t
            },
            getPanes: function() {
              return this._panes
            },
            getContainer: function() {
              return this._container
            },
            getZoomScale: function(t, e) {
              var i = this.options.crs;
              return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
            },
            getScaleZoom: function(t, e) {
              var i = this.options.crs;
              e = void 0 === e ? this._zoom : e;
              var o = i.zoom(t * i.scale(e));
              return isNaN(o) ? 1 / 0 : o
            },
            project: function(t, e) {
              return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(b.latLng(t), e)
            },
            unproject: function(t, e) {
              return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(b.point(t), e)
            },
            layerPointToLatLng: function(t) {
              var e = b.point(t).add(this.getPixelOrigin());
              return this.unproject(e)
            },
            latLngToLayerPoint: function(t) {
              return this.project(b.latLng(t))._round()._subtract(this.getPixelOrigin())
            },
            wrapLatLng: function(t) {
              return this.options.crs.wrapLatLng(b.latLng(t))
            },
            distance: function(t, e) {
              return this.options.crs.distance(b.latLng(t), b.latLng(e))
            },
            containerPointToLayerPoint: function(t) {
              return b.point(t).subtract(this._getMapPanePos())
            },
            layerPointToContainerPoint: function(t) {
              return b.point(t).add(this._getMapPanePos())
            },
            containerPointToLatLng: function(t) {
              var e = this.containerPointToLayerPoint(b.point(t));
              return this.layerPointToLatLng(e)
            },
            latLngToContainerPoint: function(t) {
              return this.layerPointToContainerPoint(this.latLngToLayerPoint(b.latLng(t)))
            },
            mouseEventToContainerPoint: function(t) {
              return b.DomEvent.getMousePosition(t, this._container)
            },
            mouseEventToLayerPoint: function(t) {
              return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
            },
            mouseEventToLatLng: function(t) {
              return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
            },
            _initContainer: function(t) {
              var e = this._container = b.DomUtil.get(t);
              if (!e) throw new Error("Map container not found.");
              if (e._leaflet_id) throw new Error("Map container is already initialized.");
              b.DomEvent.addListener(e, "scroll", this._onScroll, this), this._containerId = b.Util.stamp(e)
            },
            _initLayout: function() {
              var t = this._container;
              this._fadeAnimated = this.options.fadeAnimation && b.Browser.any3d, b.DomUtil.addClass(t, "leaflet-container" + (b.Browser.touch ? " leaflet-touch" : "") + (b.Browser.retina ? " leaflet-retina" : "") + (b.Browser.ielt9 ? " leaflet-oldie" : "") + (b.Browser.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
              var e = b.DomUtil.getStyle(t, "position");
              "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
            },
            _initPanes: function() {
              var t = this._panes = {};
              this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), b.DomUtil.setPosition(this._mapPane, new b.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (b.DomUtil.addClass(t.markerPane, "leaflet-zoom-hide"), b.DomUtil.addClass(t.shadowPane, "leaflet-zoom-hide"))
            },
            _resetView: function(t, e) {
              b.DomUtil.setPosition(this._mapPane, new b.Point(0, 0));
              var i = !this._loaded;
              this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
              var o = this._zoom !== e;
              this._moveStart(o)._move(t, e)._moveEnd(o), this.fire("viewreset"), i && this.fire("load")
            },
            _moveStart: function(t) {
              return t && this.fire("zoomstart"), this.fire("movestart")
            },
            _move: function(t, e, i) {
              void 0 === e && (e = this._zoom);
              var o = this._zoom !== e;
              return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (o || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
            },
            _moveEnd: function(t) {
              return t && this.fire("zoomend"), this.fire("moveend")
            },
            _stop: function() {
              return b.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
            },
            _rawPanBy: function(t) {
              b.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
            },
            _getZoomSpan: function() {
              return this.getMaxZoom() - this.getMinZoom()
            },
            _panInsideMaxBounds: function() {
              this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
            },
            _checkIfLoaded: function() {
              if (!this._loaded) throw new Error("Set map center and zoom first.")
            },
            _initEvents: function(t) {
              if (b.DomEvent) {
                this._targets = {}, this._targets[b.stamp(this._container)] = this;
                var e = t ? "off" : "on";
                b.DomEvent[e](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && b.DomEvent[e](window, "resize", this._onResize, this), b.Browser.any3d && this.options.transform3DLimit && this[e]("moveend", this._onMoveEnd)
              }
            },
            _onResize: function() {
              b.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = b.Util.requestAnimFrame(function() {
                this.invalidateSize({
                  debounceMoveend: !0
                })
              }, this)
            },
            _onScroll: function() {
              this._container.scrollTop = 0, this._container.scrollLeft = 0
            },
            _onMoveEnd: function() {
              var t = this._getMapPanePos();
              Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
            },
            _findEventTargets: function(t, e) {
              for (var i, o = [], n = "mouseout" === e || "mouseover" === e, r = t.target || t.srcElement, s = !1; r;) {
                if ((i = this._targets[b.stamp(r)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                  s = !0;
                  break
                }
                if (i && i.listens(e, !0)) {
                  if (n && !b.DomEvent._isExternalTarget(r, t)) break;
                  if (o.push(i), n) break
                }
                if (r === this._container) break;
                r = r.parentNode
              }
              return o.length || s || n || !b.DomEvent._isExternalTarget(r, t) || (o = [this]), o
            },
            _handleDOMEvent: function(t) {
              if (this._loaded && !b.DomEvent._skipped(t)) {
                var e = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
                "mousedown" === e && b.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, e)
              }
            },
            _fireDOMEvent: function(t, e, i) {
              if ("click" === t.type) {
                var o = b.Util.extend({}, t);
                o.type = "preclick", this._fireDOMEvent(o, o.type, i)
              }
              if (!t._stopped && (i = (i || []).concat(this._findEventTargets(t, e))).length) {
                var n = i[0];
                "contextmenu" === e && n.listens(e, !0) && b.DomEvent.preventDefault(t);
                var r = {
                  originalEvent: t
                };
                if ("keypress" !== t.type) {
                  var s = n instanceof b.Marker;
                  r.containerPoint = s ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t), r.layerPoint = this.containerPointToLayerPoint(r.containerPoint), r.latlng = s ? n.getLatLng() : this.layerPointToLatLng(r.layerPoint)
                }
                for (var a = 0; a < i.length; a++)
                  if (i[a].fire(e, r, !0), r.originalEvent._stopped || i[a].options.nonBubblingEvents && -1 !== b.Util.indexOf(i[a].options.nonBubblingEvents, e)) return
              }
            },
            _draggableMoved: function(t) {
              return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
            },
            _clearHandlers: function() {
              for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
            },
            whenReady: function(t, e) {
              return this._loaded ? t.call(e || this, {
                target: this
              }) : this.on("load", t, e), this
            },
            _getMapPanePos: function() {
              return b.DomUtil.getPosition(this._mapPane) || new b.Point(0, 0)
            },
            _moved: function() {
              var t = this._getMapPanePos();
              return t && !t.equals([0, 0])
            },
            _getTopLeftPoint: function(t, e) {
              return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
            },
            _getNewPixelOrigin: function(t, e) {
              var i = this.getSize()._divideBy(2);
              return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
            },
            _latLngToNewLayerPoint: function(t, e, i) {
              var o = this._getNewPixelOrigin(i, e);
              return this.project(t, e)._subtract(o)
            },
            _getCenterLayerPoint: function() {
              return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
            },
            _getCenterOffset: function(t) {
              return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
            },
            _limitCenter: function(t, e, i) {
              if (!i) return t;
              var o = this.project(t, e),
                n = this.getSize().divideBy(2),
                r = new b.Bounds(o.subtract(n), o.add(n)),
                s = this._getBoundsOffset(r, i, e);
              return s.round().equals([0, 0]) ? t : this.unproject(o.add(s), e)
            },
            _limitOffset: function(t, e) {
              if (!e) return t;
              var i = this.getPixelBounds(),
                o = new b.Bounds(i.min.add(t), i.max.add(t));
              return t.add(this._getBoundsOffset(o, e))
            },
            _getBoundsOffset: function(t, e, i) {
              var o = b.bounds(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)),
                n = o.min.subtract(t.min),
                r = o.max.subtract(t.max),
                s = this._rebound(n.x, -r.x),
                a = this._rebound(n.y, -r.y);
              return new b.Point(s, a)
            },
            _rebound: function(t, e) {
              return 0 < t + e ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
            },
            _limitZoom: function(t) {
              var e = this.getMinZoom(),
                i = this.getMaxZoom(),
                o = b.Browser.any3d ? this.options.zoomSnap : 1;
              return o && (t = Math.round(t / o) * o), Math.max(e, Math.min(i, t))
            }
          }), b.map = function(t, e) {
            return new b.Map(t, e)
          }, b.Layer = b.Evented.extend({
            options: {
              pane: "overlayPane",
              nonBubblingEvents: []
            },
            addTo: function(t) {
              return t.addLayer(this), this
            },
            remove: function() {
              return this.removeFrom(this._map || this._mapToAdd)
            },
            removeFrom: function(t) {
              return t && t.removeLayer(this), this
            },
            getPane: function(t) {
              return this._map.getPane(t ? this.options[t] || t : this.options.pane)
            },
            addInteractiveTarget: function(t) {
              return this._map._targets[b.stamp(t)] = this
            },
            removeInteractiveTarget: function(t) {
              return delete this._map._targets[b.stamp(t)], this
            },
            _layerAdd: function(t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                  var i = this.getEvents();
                  e.on(i, this), this.once("remove", function() {
                    e.off(i, this)
                  }, this)
                }
                this.onAdd(e), this.getAttribution && this._map.attributionControl && this._map.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {
                  layer: this
                })
              }
            }
          }), b.Map.include({
            addLayer: function(t) {
              var e = b.stamp(t);
              return this._layers[e] || ((this._layers[e] = t)._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t)), this
            },
            removeLayer: function(t) {
              var e = b.stamp(t);
              return this._layers[e] && (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {
                layer: t
              }), t.fire("remove")), t._map = t._mapToAdd = null), this
            },
            hasLayer: function(t) {
              return !!t && b.stamp(t) in this._layers
            },
            eachLayer: function(t, e) {
              for (var i in this._layers) t.call(e, this._layers[i]);
              return this
            },
            _addLayers: function(t) {
              for (var e = 0, i = (t = t ? b.Util.isArray(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
            },
            _addZoomLimit: function(t) {
              !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[b.stamp(t)] = t, this._updateZoomLevels())
            },
            _removeZoomLimit: function(t) {
              var e = b.stamp(t);
              this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
            },
            _updateZoomLevels: function() {
              var t = 1 / 0,
                e = -1 / 0,
                i = this._getZoomSpan();
              for (var o in this._zoomBoundLayers) {
                var n = this._zoomBoundLayers[o].options;
                t = void 0 === n.minZoom ? t : Math.min(t, n.minZoom), e = void 0 === n.maxZoom ? e : Math.max(e, n.maxZoom)
              }
              this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange")
            }
          }), b.Projection.Mercator = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: b.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function(t) {
              var e = Math.PI / 180,
                i = this.R,
                o = t.lat * e,
                n = this.R_MINOR / i,
                r = Math.sqrt(1 - n * n),
                s = r * Math.sin(o),
                a = Math.tan(Math.PI / 4 - o / 2) / Math.pow((1 - s) / (1 + s), r / 2);
              return o = -i * Math.log(Math.max(a, 1e-10)), new b.Point(t.lng * e * i, o)
            },
            unproject: function(t) {
              for (var e, i = 180 / Math.PI, o = this.R, n = this.R_MINOR / o, r = Math.sqrt(1 - n * n), s = Math.exp(-t.y / o), a = Math.PI / 2 - 2 * Math.atan(s), l = 0, u = .1; l < 15 && 1e-7 < Math.abs(u); l++) e = r * Math.sin(a), e = Math.pow((1 - e) / (1 + e), r / 2), a += u = Math.PI / 2 - 2 * Math.atan(s * e) - a;
              return new b.LatLng(a * i, t.x * i / o)
            }
          }, b.CRS.EPSG3395 = b.extend({}, b.CRS.Earth, {
            code: "EPSG:3395",
            projection: b.Projection.Mercator,
            transformation: (c = .5 / (Math.PI * b.Projection.Mercator.R), new b.Transformation(c, .5, -c, .5))
          }), b.GridLayer = b.Layer.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: b.Browser.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              attribution: null,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              noWrap: !1,
              pane: "tilePane",
              className: "",
              keepBuffer: 2
            },
            initialize: function(t) {
              b.setOptions(this, t)
            },
            onAdd: function() {
              this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
            },
            beforeAdd: function(t) {
              t._addZoomLimit(this)
            },
            onRemove: function(t) {
              this._removeAllTiles(), b.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
            },
            bringToFront: function() {
              return this._map && (b.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
            },
            bringToBack: function() {
              return this._map && (b.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
            },
            getAttribution: function() {
              return this.options.attribution
            },
            getContainer: function() {
              return this._container
            },
            setOpacity: function(t) {
              return this.options.opacity = t, this._updateOpacity(), this
            },
            setZIndex: function(t) {
              return this.options.zIndex = t, this._updateZIndex(), this
            },
            isLoading: function() {
              return this._loading
            },
            redraw: function() {
              return this._map && (this._removeAllTiles(), this._update()), this
            },
            getEvents: function() {
              var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
              };
              return this.options.updateWhenIdle || (this._onMove || (this._onMove = b.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            createTile: function() {
              return document.createElement("div")
            },
            getTileSize: function() {
              var t = this.options.tileSize;
              return t instanceof b.Point ? t : new b.Point(t, t)
            },
            _updateZIndex: function() {
              this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
            },
            _setAutoZIndex: function(t) {
              for (var e, i = this.getPane().children, o = -t(-1 / 0, 1 / 0), n = 0, r = i.length; n < r; n++) e = i[n].style.zIndex, i[n] !== this._container && e && (o = t(o, +e));
              isFinite(o) && (this.options.zIndex = o + t(-1, 1), this._updateZIndex())
            },
            _updateOpacity: function() {
              if (this._map && !b.Browser.ielt9) {
                b.DomUtil.setOpacity(this._container, this.options.opacity);
                var t = +new Date,
                  e = !1,
                  i = !1;
                for (var o in this._tiles) {
                  var n = this._tiles[o];
                  if (n.current && n.loaded) {
                    var r = Math.min(1, (t - n.loaded) / 200);
                    b.DomUtil.setOpacity(n.el, r), r < 1 ? e = !0 : (n.active && (i = !0), n.active = !0)
                  }
                }
                i && !this._noPrune && this._pruneTiles(), e && (b.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = b.Util.requestAnimFrame(this._updateOpacity, this))
              }
            },
            _initContainer: function() {
              this._container || (this._container = b.DomUtil.create("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
            },
            _updateLevels: function() {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var i in this._levels) this._levels[i].el.children.length || i === t ? this._levels[i].el.style.zIndex = e - Math.abs(t - i) : (b.DomUtil.remove(this._levels[i].el), this._removeTilesAtZoom(i), delete this._levels[i]);
                var o = this._levels[t],
                  n = this._map;
                return o || ((o = this._levels[t] = {}).el = b.DomUtil.create("div", "leaflet-tile-container leaflet-zoom-animated", this._container), o.el.style.zIndex = e, o.origin = n.project(n.unproject(n.getPixelOrigin()), t).round(), o.zoom = t, this._setZoomTransform(o, n.getCenter(), n.getZoom()), b.Util.falseFn(o.el.offsetWidth)), this._level = o
              }
            },
            _pruneTiles: function() {
              if (this._map) {
                var t, e, i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) return void this._removeAllTiles();
                for (t in this._tiles)(e = this._tiles[t]).retain = e.current;
                for (t in this._tiles)
                  if ((e = this._tiles[t]).current && !e.active) {
                    var o = e.coords;
                    this._retainParent(o.x, o.y, o.z, o.z - 5) || this._retainChildren(o.x, o.y, o.z, o.z + 2)
                  } for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
              }
            },
            _removeTilesAtZoom: function(t) {
              for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
            },
            _removeAllTiles: function() {
              for (var t in this._tiles) this._removeTile(t)
            },
            _invalidateAll: function() {
              for (var t in this._levels) b.DomUtil.remove(this._levels[t].el), delete this._levels[t];
              this._removeAllTiles(), this._tileZoom = null
            },
            _retainParent: function(t, e, i, o) {
              var n = Math.floor(t / 2),
                r = Math.floor(e / 2),
                s = i - 1,
                a = new b.Point(+n, +r);
              a.z = +s;
              var l = this._tileCoordsToKey(a),
                u = this._tiles[l];
              return u && u.active ? u.retain = !0 : (u && u.loaded && (u.retain = !0), o < s && this._retainParent(n, r, s, o))
            },
            _retainChildren: function(t, e, i, o) {
              for (var n = 2 * t; n < 2 * t + 2; n++)
                for (var r = 2 * e; r < 2 * e + 2; r++) {
                  var s = new b.Point(n, r);
                  s.z = i + 1;
                  var a = this._tileCoordsToKey(s),
                    l = this._tiles[a];
                  l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < o && this._retainChildren(n, r, i + 1, o))
                }
            },
            _resetView: function(t) {
              var e = t && (t.pinch || t.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
            },
            _animateZoom: function(t) {
              this._setView(t.center, t.zoom, !0, t.noUpdate)
            },
            _setView: function(t, e, i, o) {
              var n = Math.round(e);
              (void 0 !== this.options.maxZoom && n > this.options.maxZoom || void 0 !== this.options.minZoom && n < this.options.minZoom) && (n = void 0);
              var r = this.options.updateWhenZooming && n !== this._tileZoom;
              o && !r || (this._tileZoom = n, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== n && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
            },
            _setZoomTransforms: function(t, e) {
              for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
            },
            _setZoomTransform: function(t, e, i) {
              var o = this._map.getZoomScale(i, t.zoom),
                n = t.origin.multiplyBy(o).subtract(this._map._getNewPixelOrigin(e, i)).round();
              b.Browser.any3d ? b.DomUtil.setTransform(t.el, n, o) : b.DomUtil.setPosition(t.el, n)
            },
            _resetGrid: function() {
              var t = this._map,
                e = t.options.crs,
                i = this._tileSize = this.getTileSize(),
                o = this._tileZoom,
                n = this._map.getPixelWorldBounds(this._tileZoom);
              n && (this._globalTileRange = this._pxBoundsToTileRange(n)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], o).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], o).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], o).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], o).y / i.y)]
            },
            _onMoveEnd: function() {
              this._map && !this._map._animatingZoom && this._update()
            },
            _getTiledPixelBounds: function(t) {
              var e = this._map,
                i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                o = e.getZoomScale(i, this._tileZoom),
                n = e.project(t, this._tileZoom).floor(),
                r = e.getSize().divideBy(2 * o);
              return new b.Bounds(n.subtract(r), n.add(r))
            },
            _update: function(t) {
              var e = this._map;
              if (e) {
                var i = e.getZoom();
                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                  var o = this._getTiledPixelBounds(t),
                    n = this._pxBoundsToTileRange(o),
                    r = n.getCenter(),
                    s = [],
                    a = this.options.keepBuffer,
                    l = new b.Bounds(n.getBottomLeft().subtract([a, -a]), n.getTopRight().add([a, -a]));
                  for (var u in this._tiles) {
                    var c = this._tiles[u].coords;
                    c.z === this._tileZoom && l.contains(b.point(c.x, c.y)) || (this._tiles[u].current = !1)
                  }
                  if (1 < Math.abs(i - this._tileZoom)) return void this._setView(t, i);
                  for (var h = n.min.y; h <= n.max.y; h++)
                    for (var d = n.min.x; d <= n.max.x; d++) {
                      var p = new b.Point(d, h);
                      if (p.z = this._tileZoom, this._isValidTile(p)) {
                        var _ = this._tiles[this._tileCoordsToKey(p)];
                        _ ? _.current = !0 : s.push(p)
                      }
                    }
                  if (s.sort(function(t, e) {
                      return t.distanceTo(r) - e.distanceTo(r)
                    }), 0 !== s.length) {
                    this._loading || (this._loading = !0, this.fire("loading"));
                    var m = document.createDocumentFragment();
                    for (d = 0; d < s.length; d++) this._addTile(s[d], m);
                    this._level.el.appendChild(m)
                  }
                }
              }
            },
            _isValidTile: function(t) {
              var e = this._map.options.crs;
              if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
              }
              if (!this.options.bounds) return !0;
              var o = this._tileCoordsToBounds(t);
              return b.latLngBounds(this.options.bounds).overlaps(o)
            },
            _keyToBounds: function(t) {
              return this._tileCoordsToBounds(this._keyToTileCoords(t))
            },
            _tileCoordsToBounds: function(t) {
              var e = this._map,
                i = this.getTileSize(),
                o = t.scaleBy(i),
                n = o.add(i),
                r = e.unproject(o, t.z),
                s = e.unproject(n, t.z);
              return this.options.noWrap || (r = e.wrapLatLng(r), s = e.wrapLatLng(s)), new b.LatLngBounds(r, s)
            },
            _tileCoordsToKey: function(t) {
              return t.x + ":" + t.y + ":" + t.z
            },
            _keyToTileCoords: function(t) {
              var e = t.split(":"),
                i = new b.Point(+e[0], +e[1]);
              return i.z = +e[2], i
            },
            _removeTile: function(t) {
              var e = this._tiles[t];
              e && (b.DomUtil.remove(e.el), delete this._tiles[t], this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
              }))
            },
            _initTile: function(t) {
              b.DomUtil.addClass(t, "leaflet-tile");
              var e = this.getTileSize();
              t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = b.Util.falseFn, t.onmousemove = b.Util.falseFn, b.Browser.ielt9 && this.options.opacity < 1 && b.DomUtil.setOpacity(t, this.options.opacity), b.Browser.android && !b.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden")
            },
            _addTile: function(t, e) {
              var i = this._getTilePos(t),
                o = this._tileCoordsToKey(t),
                n = this.createTile(this._wrapCoords(t), b.bind(this._tileReady, this, t));
              this._initTile(n), this.createTile.length < 2 && b.Util.requestAnimFrame(b.bind(this._tileReady, this, t, null, n)), b.DomUtil.setPosition(n, i), this._tiles[o] = {
                el: n,
                coords: t,
                current: !0
              }, e.appendChild(n), this.fire("tileloadstart", {
                tile: n,
                coords: t
              })
            },
            _tileReady: function(t, e, i) {
              if (this._map) {
                e && this.fire("tileerror", {
                  error: e,
                  tile: i,
                  coords: t
                });
                var o = this._tileCoordsToKey(t);
                (i = this._tiles[o]) && (i.loaded = +new Date, this._map._fadeAnimated ? (b.DomUtil.setOpacity(i.el, 0), b.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = b.Util.requestAnimFrame(this._updateOpacity, this)) : (i.active = !0, this._pruneTiles()), e || (b.DomUtil.addClass(i.el, "leaflet-tile-loaded"), this.fire("tileload", {
                  tile: i.el,
                  coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), b.Browser.ielt9 || !this._map._fadeAnimated ? b.Util.requestAnimFrame(this._pruneTiles, this) : setTimeout(b.bind(this._pruneTiles, this), 250)))
              }
            },
            _getTilePos: function(t) {
              return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
            },
            _wrapCoords: function(t) {
              var e = new b.Point(this._wrapX ? b.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? b.Util.wrapNum(t.y, this._wrapY) : t.y);
              return e.z = t.z, e
            },
            _pxBoundsToTileRange: function(t) {
              var e = this.getTileSize();
              return new b.Bounds(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
            },
            _noTilesToLoad: function() {
              for (var t in this._tiles)
                if (!this._tiles[t].loaded) return !1;
              return !0
            }
          }), b.gridLayer = function(t) {
            return new b.GridLayer(t)
          }, b.TileLayer = b.GridLayer.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              maxNativeZoom: null,
              subdomains: "abc",
              errorTileUrl: "",
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1
            },
            initialize: function(t, e) {
              this._url = t, (e = b.setOptions(this, e)).detectRetina && b.Browser.retina && 0 < e.maxZoom && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), b.Browser.android || this.on("tileunload", this._onTileRemove)
            },
            setUrl: function(t, e) {
              return this._url = t, e || this.redraw(), this
            },
            createTile: function(t, e) {
              var i = document.createElement("img");
              return b.DomEvent.on(i, "load", b.bind(this._tileOnLoad, this, e, i)), b.DomEvent.on(i, "error", b.bind(this._tileOnError, this, e, i)), this.options.crossOrigin && (i.crossOrigin = ""), i.alt = "", i.src = this.getTileUrl(t), i
            },
            getTileUrl: function(t) {
              var e = {
                r: b.Browser.retina ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl()
              };
              if (this._map && !this._map.options.crs.infinite) {
                var i = this._globalTileRange.max.y - t.y;
                this.options.tms && (e.y = i), e["-y"] = i
              }
              return b.Util.template(this._url, b.extend(e, this.options))
            },
            _tileOnLoad: function(t, e) {
              b.Browser.ielt9 ? setTimeout(b.bind(t, this, null, e), 0) : t(null, e)
            },
            _tileOnError: function(t, e, i) {
              var o = this.options.errorTileUrl;
              o && (e.src = o), t(i, e)
            },
            getTileSize: function() {
              var t = this._map,
                e = b.GridLayer.prototype.getTileSize.call(this),
                i = this._tileZoom + this.options.zoomOffset,
                o = this.options.maxNativeZoom;
              return null !== o && o < i ? e.divideBy(t.getZoomScale(o, i)).round() : e
            },
            _onTileRemove: function(t) {
              t.tile.onload = null
            },
            _getZoomForUrl: function() {
              var t = this.options,
                e = this._tileZoom;
              return t.zoomReverse && (e = t.maxZoom - e), e += t.zoomOffset, null !== t.maxNativeZoom ? Math.min(e, t.maxNativeZoom) : e
            },
            _getSubdomain: function(t) {
              var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
              return this.options.subdomains[e]
            },
            _abortLoading: function() {
              var t, e;
              for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = b.Util.falseFn, e.onerror = b.Util.falseFn, e.complete || (e.src = b.Util.emptyImageUrl, b.DomUtil.remove(e)))
            }
          }), b.tileLayer = function(t, e) {
            return new b.TileLayer(t, e)
          }, b.TileLayer.WMS = b.TileLayer.extend({
            defaultWmsParams: {
              service: "WMS",
              request: "GetMap",
              layers: "",
              styles: "",
              format: "image/jpeg",
              transparent: !1,
              version: "1.1.1"
            },
            options: {
              crs: null,
              uppercase: !1
            },
            initialize: function(t, e) {
              this._url = t;
              var i = b.extend({}, this.defaultWmsParams);
              for (var o in e) o in this.options || (i[o] = e[o]);
              e = b.setOptions(this, e), i.width = i.height = e.tileSize * (e.detectRetina && b.Browser.retina ? 2 : 1), this.wmsParams = i
            },
            onAdd: function(t) {
              this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
              var e = 1.3 <= this._wmsVersion ? "crs" : "srs";
              this.wmsParams[e] = this._crs.code, b.TileLayer.prototype.onAdd.call(this, t)
            },
            getTileUrl: function(t) {
              var e = this._tileCoordsToBounds(t),
                i = this._crs.project(e.getNorthWest()),
                o = this._crs.project(e.getSouthEast()),
                n = (1.3 <= this._wmsVersion && this._crs === b.CRS.EPSG4326 ? [o.y, i.x, i.y, o.x] : [i.x, o.y, o.x, i.y]).join(","),
                r = b.TileLayer.prototype.getTileUrl.call(this, t);
              return r + b.Util.getParamString(this.wmsParams, r, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + n
            },
            setParams: function(t, e) {
              return b.extend(this.wmsParams, t), e || this.redraw(), this
            }
          }), b.tileLayer.wms = function(t, e) {
            return new b.TileLayer.WMS(t, e)
          }, b.ImageOverlay = b.Layer.extend({
            options: {
              opacity: 1,
              alt: "",
              interactive: !1,
              attribution: null,
              crossOrigin: !1
            },
            initialize: function(t, e, i) {
              this._url = t, this._bounds = b.latLngBounds(e), b.setOptions(this, i)
            },
            onAdd: function() {
              this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (b.DomUtil.addClass(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
            },
            onRemove: function() {
              b.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
            },
            setOpacity: function(t) {
              return this.options.opacity = t, this._image && this._updateOpacity(), this
            },
            setStyle: function(t) {
              return t.opacity && this.setOpacity(t.opacity), this
            },
            bringToFront: function() {
              return this._map && b.DomUtil.toFront(this._image), this
            },
            bringToBack: function() {
              return this._map && b.DomUtil.toBack(this._image), this
            },
            setUrl: function(t) {
              return this._url = t, this._image && (this._image.src = t), this
            },
            setBounds: function(t) {
              return this._bounds = t, this._map && this._reset(), this
            },
            getAttribution: function() {
              return this.options.attribution
            },
            getEvents: function() {
              var t = {
                zoom: this._reset,
                viewreset: this._reset
              };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            getBounds: function() {
              return this._bounds
            },
            getElement: function() {
              return this._image
            },
            _initImage: function() {
              var t = this._image = b.DomUtil.create("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""));
              t.onselectstart = b.Util.falseFn, t.onmousemove = b.Util.falseFn, t.onload = b.bind(this.fire, this, "load"), this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt
            },
            _animateZoom: function(t) {
              var e = this._map.getZoomScale(t.zoom),
                i = this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), t.zoom, t.center);
              b.DomUtil.setTransform(this._image, i, e)
            },
            _reset: function() {
              var t = this._image,
                e = new b.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                i = e.getSize();
              b.DomUtil.setPosition(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
            },
            _updateOpacity: function() {
              b.DomUtil.setOpacity(this._image, this.options.opacity)
            }
          }), b.imageOverlay = function(t, e, i) {
            return new b.ImageOverlay(t, e, i)
          }, b.Icon = b.Class.extend({
            initialize: function(t) {
              b.setOptions(this, t)
            },
            createIcon: function(t) {
              return this._createIcon("icon", t)
            },
            createShadow: function(t) {
              return this._createIcon("shadow", t)
            },
            _createIcon: function(t, e) {
              var i = this._getIconUrl(t);
              if (!i) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
              }
              var o = this._createImg(i, e && "IMG" === e.tagName ? e : null);
              return this._setIconStyles(o, t), o
            },
            _setIconStyles: function(t, e) {
              var i = this.options,
                o = i[e + "Size"];
              "number" == typeof o && (o = [o, o]);
              var n = b.point(o),
                r = b.point("shadow" === e && i.shadowAnchor || i.iconAnchor || n && n.divideBy(2, !0));
              t.className = "leaflet-marker-" + e + " " + (i.className || ""), r && (t.style.marginLeft = -r.x + "px", t.style.marginTop = -r.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px")
            },
            _createImg: function(t, e) {
              return (e = e || document.createElement("img")).src = t, e
            },
            _getIconUrl: function(t) {
              return b.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
            }
          }), b.icon = function(t) {
            return new b.Icon(t)
          }, b.Icon.Default = b.Icon.extend({
            options: {
              iconUrl: "marker-icon.png",
              iconRetinaUrl: "marker-icon-2x.png",
              shadowUrl: "marker-shadow.png",
              iconSize: [25, 41],
              iconAnchor: [12, 41],
              popupAnchor: [1, -34],
              tooltipAnchor: [16, -28],
              shadowSize: [41, 41]
            },
            _getIconUrl: function(t) {
              return b.Icon.Default.imagePath || (b.Icon.Default.imagePath = this._detectIconPath()), (this.options.imagePath || b.Icon.Default.imagePath) + b.Icon.prototype._getIconUrl.call(this, t)
            },
            _detectIconPath: function() {
              var t = b.DomUtil.create("div", "leaflet-default-icon-path", document.body),
                e = b.DomUtil.getStyle(t, "background-image") || b.DomUtil.getStyle(t, "backgroundImage");
              return document.body.removeChild(t), 0 === e.indexOf("url") ? e.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "") : ""
            }
          }), b.Marker = b.Layer.extend({
            options: {
              icon: new b.Icon.Default,
              interactive: !0,
              draggable: !1,
              keyboard: !0,
              title: "",
              alt: "",
              zIndexOffset: 0,
              opacity: 1,
              riseOnHover: !1,
              riseOffset: 250,
              pane: "markerPane",
              nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"]
            },
            initialize: function(t, e) {
              b.setOptions(this, e), this._latlng = b.latLng(t)
            },
            onAdd: function(t) {
              this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
            },
            onRemove: function(t) {
              this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
            },
            getEvents: function() {
              return {
                zoom: this.update,
                viewreset: this.update
              }
            },
            getLatLng: function() {
              return this._latlng
            },
            setLatLng: function(t) {
              var e = this._latlng;
              return this._latlng = b.latLng(t), this.update(), this.fire("move", {
                oldLatLng: e,
                latlng: this._latlng
              })
            },
            setZIndexOffset: function(t) {
              return this.options.zIndexOffset = t, this.update()
            },
            setIcon: function(t) {
              return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
            },
            getElement: function() {
              return this._icon
            },
            update: function() {
              if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
              }
              return this
            },
            _initIcon: function() {
              var t = this.options,
                e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                i = t.icon.createIcon(this._icon),
                o = !1;
              i !== this._icon && (this._icon && this._removeIcon(), o = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), b.DomUtil.addClass(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              });
              var n = t.icon.createShadow(this._shadow),
                r = !1;
              n !== this._shadow && (this._removeShadow(), r = !0), n && b.DomUtil.addClass(n, e), this._shadow = n, t.opacity < 1 && this._updateOpacity(), o && this.getPane().appendChild(this._icon), this._initInteraction(), n && r && this.getPane("shadowPane").appendChild(this._shadow)
            },
            _removeIcon: function() {
              this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
              }), b.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
            },
            _removeShadow: function() {
              this._shadow && b.DomUtil.remove(this._shadow), this._shadow = null
            },
            _setPos: function(t) {
              b.DomUtil.setPosition(this._icon, t), this._shadow && b.DomUtil.setPosition(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
            },
            _updateZIndex: function(t) {
              this._icon.style.zIndex = this._zIndex + t
            },
            _animateZoom: function(t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
              this._setPos(e)
            },
            _initInteraction: function() {
              if (this.options.interactive && (b.DomUtil.addClass(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), b.Handler.MarkerDrag)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new b.Handler.MarkerDrag(this), t && this.dragging.enable()
              }
            },
            setOpacity: function(t) {
              return this.options.opacity = t, this._map && this._updateOpacity(), this
            },
            _updateOpacity: function() {
              var t = this.options.opacity;
              b.DomUtil.setOpacity(this._icon, t), this._shadow && b.DomUtil.setOpacity(this._shadow, t)
            },
            _bringToFront: function() {
              this._updateZIndex(this.options.riseOffset)
            },
            _resetZIndex: function() {
              this._updateZIndex(0)
            }
          }), b.marker = function(t, e) {
            return new b.Marker(t, e)
          }, b.DivIcon = b.Icon.extend({
            options: {
              iconSize: [12, 12],
              html: !1,
              bgPos: null,
              className: "leaflet-div-icon"
            },
            createIcon: function(t) {
              var e = t && "DIV" === t.tagName ? t : document.createElement("div"),
                i = this.options;
              if (e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                var o = b.point(i.bgPos);
                e.style.backgroundPosition = -o.x + "px " + -o.y + "px"
              }
              return this._setIconStyles(e, "icon"), e
            },
            createShadow: function() {
              return null
            }
          }), b.divIcon = function(t) {
            return new b.DivIcon(t)
          }, b.DivOverlay = b.Layer.extend({
            options: {
              offset: [0, 7],
              className: "",
              pane: "popupPane"
            },
            initialize: function(t, e) {
              b.setOptions(this, t), this._source = e
            },
            onAdd: function(t) {
              this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && b.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && b.DomUtil.setOpacity(this._container, 1), this.bringToFront()
            },
            onRemove: function(t) {
              t._fadeAnimated ? (b.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(b.bind(b.DomUtil.remove, b.DomUtil, this._container), 200)) : b.DomUtil.remove(this._container)
            },
            getLatLng: function() {
              return this._latlng
            },
            setLatLng: function(t) {
              return this._latlng = b.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
            },
            getContent: function() {
              return this._content
            },
            setContent: function(t) {
              return this._content = t, this.update(), this
            },
            getElement: function() {
              return this._container
            },
            update: function() {
              this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
            },
            getEvents: function() {
              var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition
              };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
            },
            isOpen: function() {
              return !!this._map && this._map.hasLayer(this)
            },
            bringToFront: function() {
              return this._map && b.DomUtil.toFront(this._container), this
            },
            bringToBack: function() {
              return this._map && b.DomUtil.toBack(this._container), this
            },
            _updateContent: function() {
              if (this._content) {
                var t = this._contentNode,
                  e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e) t.innerHTML = e;
                else {
                  for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                  t.appendChild(e)
                }
                this.fire("contentupdate")
              }
            },
            _updatePosition: function() {
              if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                  e = b.point(this.options.offset),
                  i = this._getAnchor();
                this._zoomAnimated ? b.DomUtil.setPosition(this._container, t.add(i)) : e = e.add(t).add(i);
                var o = this._containerBottom = -e.y,
                  n = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                this._container.style.bottom = o + "px", this._container.style.left = n + "px"
              }
            },
            _getAnchor: function() {
              return [0, 0]
            }
          }), b.Popup = b.DivOverlay.extend({
            options: {
              maxWidth: 300,
              minWidth: 50,
              maxHeight: null,
              autoPan: !0,
              autoPanPaddingTopLeft: null,
              autoPanPaddingBottomRight: null,
              autoPanPadding: [5, 5],
              keepInView: !1,
              closeButton: !0,
              autoClose: !0,
              className: ""
            },
            openOn: function(t) {
              return t.openPopup(this), this
            },
            onAdd: function(t) {
              b.DivOverlay.prototype.onAdd.call(this, t), t.fire("popupopen", {
                popup: this
              }), this._source && (this._source.fire("popupopen", {
                popup: this
              }, !0), this._source instanceof b.Path || this._source.on("preclick", b.DomEvent.stopPropagation))
            },
            onRemove: function(t) {
              b.DivOverlay.prototype.onRemove.call(this, t), t.fire("popupclose", {
                popup: this
              }), this._source && (this._source.fire("popupclose", {
                popup: this
              }, !0), this._source instanceof b.Path || this._source.off("preclick", b.DomEvent.stopPropagation))
            },
            getEvents: function() {
              var t = b.DivOverlay.prototype.getEvents.call(this);
              return ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
            },
            _close: function() {
              this._map && this._map.closePopup(this)
            },
            _initLayout: function() {
              var t = "leaflet-popup",
                e = this._container = b.DomUtil.create("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated");
              if (this.options.closeButton) {
                var i = this._closeButton = b.DomUtil.create("a", t + "-close-button", e);
                i.href = "#close", i.innerHTML = "&#215;", b.DomEvent.on(i, "click", this._onCloseButtonClick, this)
              }
              var o = this._wrapper = b.DomUtil.create("div", t + "-content-wrapper", e);
              this._contentNode = b.DomUtil.create("div", t + "-content", o), b.DomEvent.disableClickPropagation(o).disableScrollPropagation(this._contentNode).on(o, "contextmenu", b.DomEvent.stopPropagation), this._tipContainer = b.DomUtil.create("div", t + "-tip-container", e), this._tip = b.DomUtil.create("div", t + "-tip", this._tipContainer)
            },
            _updateLayout: function() {
              var t = this._contentNode,
                e = t.style;
              e.width = "", e.whiteSpace = "nowrap";
              var i = t.offsetWidth;
              i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
              var o = t.offsetHeight,
                n = this.options.maxHeight,
                r = "leaflet-popup-scrolled";
              n && n < o ? (e.height = n + "px", b.DomUtil.addClass(t, r)) : b.DomUtil.removeClass(t, r), this._containerWidth = this._container.offsetWidth
            },
            _animateZoom: function(t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center),
                i = this._getAnchor();
              b.DomUtil.setPosition(this._container, e.add(i))
            },
            _adjustPan: function() {
              if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map,
                  e = parseInt(b.DomUtil.getStyle(this._container, "marginBottom"), 10) || 0,
                  i = this._container.offsetHeight + e,
                  o = this._containerWidth,
                  n = new b.Point(this._containerLeft, -i - this._containerBottom);
                n._add(b.DomUtil.getPosition(this._container));
                var r = t.layerPointToContainerPoint(n),
                  s = b.point(this.options.autoPanPadding),
                  a = b.point(this.options.autoPanPaddingTopLeft || s),
                  l = b.point(this.options.autoPanPaddingBottomRight || s),
                  u = t.getSize(),
                  c = 0,
                  h = 0;
                r.x + o + l.x > u.x && (c = r.x + o - u.x + l.x), r.x - c - a.x < 0 && (c = r.x - a.x), r.y + i + l.y > u.y && (h = r.y + i - u.y + l.y), r.y - h - a.y < 0 && (h = r.y - a.y), (c || h) && t.fire("autopanstart").panBy([c, h])
              }
            },
            _onCloseButtonClick: function(t) {
              this._close(), b.DomEvent.stop(t)
            },
            _getAnchor: function() {
              return b.point(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
            }
          }), b.popup = function(t, e) {
            return new b.Popup(t, e)
          }, b.Map.mergeOptions({
            closePopupOnClick: !0
          }), b.Map.include({
            openPopup: function(t, e, i) {
              return t instanceof b.Popup || (t = new b.Popup(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
            },
            closePopup: function(t) {
              return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
            }
          }), b.Layer.include({
            bindPopup: function(t, e) {
              return t instanceof b.Popup ? (b.setOptions(t, e), (this._popup = t)._source = this) : (this._popup && !e || (this._popup = new b.Popup(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !0), this
            },
            unbindPopup: function() {
              return this._popup && (this.off({
                click: this._openPopup,
                remove: this.closePopup,
                move: this._movePopup
              }), this._popupHandlersAdded = !1, this._popup = null), this
            },
            openPopup: function(t, e) {
              if (t instanceof b.Layer || (e = t, t = this), t instanceof b.FeatureGroup)
                for (var i in this._layers) {
                  t = this._layers[i];
                  break
                }
              return e = e || (t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
            },
            closePopup: function() {
              return this._popup && this._popup._close(), this
            },
            togglePopup: function(t) {
              return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
            },
            isPopupOpen: function() {
              return this._popup.isOpen()
            },
            setPopupContent: function(t) {
              return this._popup && this._popup.setContent(t), this
            },
            getPopup: function() {
              return this._popup
            },
            _openPopup: function(t) {
              var e = t.layer || t.target;
              if (this._popup && this._map) return b.DomEvent.stop(t), e instanceof b.Path ? void this.openPopup(t.layer || t.target, t.latlng) : void(this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
            },
            _movePopup: function(t) {
              this._popup.setLatLng(t.latlng)
            }
          }), b.Marker.include({
            _getPopupAnchor: function() {
              return this.options.icon.options.popupAnchor || [0, 0]
            }
          }), b.Tooltip = b.DivOverlay.extend({
            options: {
              pane: "tooltipPane",
              offset: [0, 0],
              direction: "auto",
              permanent: !1,
              sticky: !1,
              interactive: !1,
              opacity: .9
            },
            onAdd: function(t) {
              b.DivOverlay.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {
                tooltip: this
              }), this._source && this._source.fire("tooltipopen", {
                tooltip: this
              }, !0)
            },
            onRemove: function(t) {
              b.DivOverlay.prototype.onRemove.call(this, t), t.fire("tooltipclose", {
                tooltip: this
              }), this._source && this._source.fire("tooltipclose", {
                tooltip: this
              }, !0)
            },
            getEvents: function() {
              var t = b.DivOverlay.prototype.getEvents.call(this);
              return b.Browser.touch && !this.options.permanent && (t.preclick = this._close), t
            },
            _close: function() {
              this._map && this._map.closeTooltip(this)
            },
            _initLayout: function() {
              var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
              this._contentNode = this._container = b.DomUtil.create("div", t)
            },
            _updateLayout: function() {},
            _adjustPan: function() {},
            _setPosition: function(t) {
              var e = this._map,
                i = this._container,
                o = e.latLngToContainerPoint(e.getCenter()),
                n = e.layerPointToContainerPoint(t),
                r = this.options.direction,
                s = i.offsetWidth,
                a = i.offsetHeight,
                l = b.point(this.options.offset),
                u = this._getAnchor();
              t = "top" === r ? t.add(b.point(-s / 2 + l.x, -a + l.y + u.y)) : "bottom" === r ? t.subtract(b.point(s / 2 - l.x, -l.y)) : "center" === r ? t.subtract(b.point(s / 2 + l.x, a / 2 - u.y + l.y)) : "right" === r || "auto" === r && n.x < o.x ? (r = "right", t.add([l.x + u.x, u.y - a / 2 + l.y])) : (r = "left", t.subtract(b.point(s + u.x - l.x, a / 2 - u.y - l.y))), b.DomUtil.removeClass(i, "leaflet-tooltip-right"), b.DomUtil.removeClass(i, "leaflet-tooltip-left"), b.DomUtil.removeClass(i, "leaflet-tooltip-top"), b.DomUtil.removeClass(i, "leaflet-tooltip-bottom"), b.DomUtil.addClass(i, "leaflet-tooltip-" + r), b.DomUtil.setPosition(i, t)
            },
            _updatePosition: function() {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t)
            },
            setOpacity: function(t) {
              this.options.opacity = t, this._container && b.DomUtil.setOpacity(this._container, t)
            },
            _animateZoom: function(t) {
              var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
              this._setPosition(e)
            },
            _getAnchor: function() {
              return b.point(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
            }
          }), b.tooltip = function(t, e) {
            return new b.Tooltip(t, e)
          }, b.Map.include({
            openTooltip: function(t, e, i) {
              return t instanceof b.Tooltip || (t = new b.Tooltip(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
            },
            closeTooltip: function(t) {
              return t && this.removeLayer(t), this
            }
          }), b.Layer.include({
            bindTooltip: function(t, e) {
              return t instanceof b.Tooltip ? (b.setOptions(t, e), (this._tooltip = t)._source = this) : (this._tooltip && !e || (this._tooltip = b.tooltip(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
            },
            unbindTooltip: function() {
              return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
            },
            _initTooltipInteractions: function(t) {
              if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on",
                  i = {
                    remove: this.closeTooltip,
                    move: this._moveTooltip
                  };
                this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), b.Browser.touch && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
              }
            },
            openTooltip: function(t, e) {
              if (t instanceof b.Layer || (e = t, t = this), t instanceof b.FeatureGroup)
                for (var i in this._layers) {
                  t = this._layers[i];
                  break
                }
              return e = e || (t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (b.DomUtil.addClass(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
            },
            closeTooltip: function() {
              return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (b.DomUtil.removeClass(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
            },
            toggleTooltip: function(t) {
              return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
            },
            isTooltipOpen: function() {
              return this._tooltip.isOpen()
            },
            setTooltipContent: function(t) {
              return this._tooltip && this._tooltip.setContent(t), this
            },
            getTooltip: function() {
              return this._tooltip
            },
            _openTooltip: function(t) {
              var e = t.layer || t.target;
              this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
            },
            _moveTooltip: function(t) {
              var e, i, o = t.latlng;
              this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), o = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(o)
            }
          }), b.Marker.include({
            _getTooltipAnchor: function() {
              return this.options.icon.options.tooltipAnchor || [0, 0]
            }
          }), b.LayerGroup = b.Layer.extend({
            initialize: function(t) {
              var e, i;
              if (this._layers = {}, t)
                for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
            },
            addLayer: function(t) {
              var e = this.getLayerId(t);
              return this._layers[e] = t, this._map && this._map.addLayer(t), this
            },
            removeLayer: function(t) {
              var e = t in this._layers ? t : this.getLayerId(t);
              return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
            },
            hasLayer: function(t) {
              return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
            },
            clearLayers: function() {
              for (var t in this._layers) this.removeLayer(this._layers[t]);
              return this
            },
            invoke: function(t) {
              var e, i, o = Array.prototype.slice.call(arguments, 1);
              for (e in this._layers)(i = this._layers[e])[t] && i[t].apply(i, o);
              return this
            },
            onAdd: function(t) {
              for (var e in this._layers) t.addLayer(this._layers[e])
            },
            onRemove: function(t) {
              for (var e in this._layers) t.removeLayer(this._layers[e])
            },
            eachLayer: function(t, e) {
              for (var i in this._layers) t.call(e, this._layers[i]);
              return this
            },
            getLayer: function(t) {
              return this._layers[t]
            },
            getLayers: function() {
              var t = [];
              for (var e in this._layers) t.push(this._layers[e]);
              return t
            },
            setZIndex: function(t) {
              return this.invoke("setZIndex", t)
            },
            getLayerId: function(t) {
              return b.stamp(t)
            }
          }), b.layerGroup = function(t) {
            return new b.LayerGroup(t)
          }, b.FeatureGroup = b.LayerGroup.extend({
            addLayer: function(t) {
              return this.hasLayer(t) ? this : (t.addEventParent(this), b.LayerGroup.prototype.addLayer.call(this, t), this.fire("layeradd", {
                layer: t
              }))
            },
            removeLayer: function(t) {
              return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), b.LayerGroup.prototype.removeLayer.call(this, t), this.fire("layerremove", {
                layer: t
              })) : this
            },
            setStyle: function(t) {
              return this.invoke("setStyle", t)
            },
            bringToFront: function() {
              return this.invoke("bringToFront")
            },
            bringToBack: function() {
              return this.invoke("bringToBack")
            },
            getBounds: function() {
              var t = new b.LatLngBounds;
              for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
              }
              return t
            }
          }), b.featureGroup = function(t) {
            return new b.FeatureGroup(t)
          }, b.Renderer = b.Layer.extend({
            options: {
              padding: .1
            },
            initialize: function(t) {
              b.setOptions(this, t), b.stamp(this)
            },
            onAdd: function() {
              this._container || (this._initContainer(), this._zoomAnimated && b.DomUtil.addClass(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update()
            },
            onRemove: function() {
              b.DomUtil.remove(this._container)
            },
            getEvents: function() {
              var t = {
                viewreset: this._reset,
                zoom: this._onZoom,
                moveend: this._update
              };
              return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
            },
            _onAnimZoom: function(t) {
              this._updateTransform(t.center, t.zoom)
            },
            _onZoom: function() {
              this._updateTransform(this._map.getCenter(), this._map.getZoom())
            },
            _updateTransform: function(t, e) {
              var i = this._map.getZoomScale(e, this._zoom),
                o = b.DomUtil.getPosition(this._container),
                n = this._map.getSize().multiplyBy(.5 + this.options.padding),
                r = this._map.project(this._center, e),
                s = this._map.project(t, e).subtract(r),
                a = n.multiplyBy(-i).add(o).add(n).subtract(s);
              b.Browser.any3d ? b.DomUtil.setTransform(this._container, a, i) : b.DomUtil.setPosition(this._container, a)
            },
            _reset: function() {
              this._update(), this._updateTransform(this._center, this._zoom)
            },
            _update: function() {
              var t = this.options.padding,
                e = this._map.getSize(),
                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
              this._bounds = new b.Bounds(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
            }
          }), b.Map.include({
            getRenderer: function(t) {
              var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
              return e = e || (this._renderer = this.options.preferCanvas && b.canvas() || b.svg()), this.hasLayer(e) || this.addLayer(e), e
            },
            _getPaneRenderer: function(t) {
              if ("overlayPane" === t || void 0 === t) return !1;
              var e = this._paneRenderers[t];
              return void 0 === e && (e = b.SVG && b.svg({
                pane: t
              }) || b.Canvas && b.canvas({
                pane: t
              }), this._paneRenderers[t] = e), e
            }
          }), b.Path = b.Layer.extend({
            options: {
              stroke: !0,
              color: "#3388ff",
              weight: 3,
              opacity: 1,
              lineCap: "round",
              lineJoin: "round",
              dashArray: null,
              dashOffset: null,
              fill: !1,
              fillColor: null,
              fillOpacity: .2,
              fillRule: "evenodd",
              interactive: !0
            },
            beforeAdd: function(t) {
              this._renderer = t.getRenderer(this)
            },
            onAdd: function() {
              this._renderer._initPath(this), this._reset(), this._renderer._addPath(this), this._renderer.on("update", this._update, this)
            },
            onRemove: function() {
              this._renderer._removePath(this), this._renderer.off("update", this._update, this)
            },
            getEvents: function() {
              return {
                zoomend: this._project,
                viewreset: this._reset
              }
            },
            redraw: function() {
              return this._map && this._renderer._updatePath(this), this
            },
            setStyle: function(t) {
              return b.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this
            },
            bringToFront: function() {
              return this._renderer && this._renderer._bringToFront(this), this
            },
            bringToBack: function() {
              return this._renderer && this._renderer._bringToBack(this), this
            },
            getElement: function() {
              return this._path
            },
            _reset: function() {
              this._project(), this._update()
            },
            _clickTolerance: function() {
              return (this.options.stroke ? this.options.weight / 2 : 0) + (b.Browser.touch ? 10 : 0)
            }
          }), b.LineUtil = {
            simplify: function(t, e) {
              if (!e || !t.length) return t.slice();
              var i = e * e;
              return t = this._reducePoints(t, i), this._simplifyDP(t, i)
            },
            pointToSegmentDistance: function(t, e, i) {
              return Math.sqrt(this._sqClosestPointOnSegment(t, e, i, !0))
            },
            closestPointOnSegment: function(t, e, i) {
              return this._sqClosestPointOnSegment(t, e, i)
            },
            _simplifyDP: function(t, e) {
              var i = t.length,
                o = new(typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
              o[0] = o[i - 1] = 1, this._simplifyDPStep(t, o, e, 0, i - 1);
              var n, r = [];
              for (n = 0; n < i; n++) o[n] && r.push(t[n]);
              return r
            },
            _simplifyDPStep: function(t, e, i, o, n) {
              var r, s, a, l = 0;
              for (s = o + 1; s <= n - 1; s++) l < (a = this._sqClosestPointOnSegment(t[s], t[o], t[n], !0)) && (r = s, l = a);
              i < l && (e[r] = 1, this._simplifyDPStep(t, e, i, o, r), this._simplifyDPStep(t, e, i, r, n))
            },
            _reducePoints: function(t, e) {
              for (var i = [t[0]], o = 1, n = 0, r = t.length; o < r; o++) this._sqDist(t[o], t[n]) > e && (i.push(t[o]), n = o);
              return n < r - 1 && i.push(t[r - 1]), i
            },
            clipSegment: function(t, e, i, o, n) {
              var r, s, a, l = o ? this._lastCode : this._getBitCode(t, i),
                u = this._getBitCode(e, i);
              for (this._lastCode = u;;) {
                if (!(l | u)) return [t, e];
                if (l & u) return !1;
                r = l || u, s = this._getEdgeIntersection(t, e, r, i, n), a = this._getBitCode(s, i), r === l ? (t = s, l = a) : (e = s, u = a)
              }
            },
            _getEdgeIntersection: function(t, e, i, o, n) {
              var r, s, a = e.x - t.x,
                l = e.y - t.y,
                u = o.min,
                c = o.max;
              return 8 & i ? (r = t.x + a * (c.y - t.y) / l, s = c.y) : 4 & i ? (r = t.x + a * (u.y - t.y) / l, s = u.y) : 2 & i ? (r = c.x, s = t.y + l * (c.x - t.x) / a) : 1 & i && (r = u.x, s = t.y + l * (u.x - t.x) / a), new b.Point(r, s, n)
            },
            _getBitCode: function(t, e) {
              var i = 0;
              return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
            },
            _sqDist: function(t, e) {
              var i = e.x - t.x,
                o = e.y - t.y;
              return i * i + o * o
            },
            _sqClosestPointOnSegment: function(t, e, i, o) {
              var n, r = e.x,
                s = e.y,
                a = i.x - r,
                l = i.y - s,
                u = a * a + l * l;
              return 0 < u && (1 < (n = ((t.x - r) * a + (t.y - s) * l) / u) ? (r = i.x, s = i.y) : 0 < n && (r += a * n, s += l * n)), a = t.x - r, l = t.y - s, o ? a * a + l * l : new b.Point(r, s)
            }
          }, b.Polyline = b.Path.extend({
            options: {
              smoothFactor: 1,
              noClip: !1
            },
            initialize: function(t, e) {
              b.setOptions(this, e), this._setLatLngs(t)
            },
            getLatLngs: function() {
              return this._latlngs
            },
            setLatLngs: function(t) {
              return this._setLatLngs(t), this.redraw()
            },
            isEmpty: function() {
              return !this._latlngs.length
            },
            closestLayerPoint: function(t) {
              for (var e, i, o = 1 / 0, n = null, r = b.LineUtil._sqClosestPointOnSegment, s = 0, a = this._parts.length; s < a; s++)
                for (var l = this._parts[s], u = 1, c = l.length; u < c; u++) {
                  var h = r(t, e = l[u - 1], i = l[u], !0);
                  h < o && (o = h, n = r(t, e, i))
                }
              return n && (n.distance = Math.sqrt(o)), n
            },
            getCenter: function() {
              if (!this._map) throw new Error("Must add layer to map before using getCenter()");
              var t, e, i, o, n, r, s, a = this._rings[0],
                l = a.length;
              if (!l) return null;
              for (e = t = 0; t < l - 1; t++) e += a[t].distanceTo(a[t + 1]) / 2;
              if (0 === e) return this._map.layerPointToLatLng(a[0]);
              for (o = t = 0; t < l - 1; t++)
                if (n = a[t], r = a[t + 1], e < (o += i = n.distanceTo(r))) return s = (o - e) / i, this._map.layerPointToLatLng([r.x - s * (r.x - n.x), r.y - s * (r.y - n.y)])
            },
            getBounds: function() {
              return this._bounds
            },
            addLatLng: function(t, e) {
              return e = e || this._defaultShape(), t = b.latLng(t), e.push(t), this._bounds.extend(t), this.redraw()
            },
            _setLatLngs: function(t) {
              this._bounds = new b.LatLngBounds, this._latlngs = this._convertLatLngs(t)
            },
            _defaultShape: function() {
              return b.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
            },
            _convertLatLngs: function(t) {
              for (var e = [], i = b.Polyline._flat(t), o = 0, n = t.length; o < n; o++) i ? (e[o] = b.latLng(t[o]), this._bounds.extend(e[o])) : e[o] = this._convertLatLngs(t[o]);
              return e
            },
            _project: function() {
              var t = new b.Bounds;
              this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
              var e = this._clickTolerance(),
                i = new b.Point(e, e);
              this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
            },
            _projectLatlngs: function(t, e, i) {
              var o, n, r = t[0] instanceof b.LatLng,
                s = t.length;
              if (r) {
                for (n = [], o = 0; o < s; o++) n[o] = this._map.latLngToLayerPoint(t[o]), i.extend(n[o]);
                e.push(n)
              } else
                for (o = 0; o < s; o++) this._projectLatlngs(t[o], e, i)
            },
            _clipPoints: function() {
              var t = this._renderer._bounds;
              if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                if (this.options.noClip) return void(this._parts = this._rings);
                var e, i, o, n, r, s, a, l = this._parts;
                for (o = e = 0, n = this._rings.length; e < n; e++)
                  for (i = 0, r = (a = this._rings[e]).length; i < r - 1; i++)(s = b.LineUtil.clipSegment(a[i], a[i + 1], t, i, !0)) && (l[o] = l[o] || [], l[o].push(s[0]), s[1] === a[i + 1] && i !== r - 2 || (l[o].push(s[1]), o++))
              }
            },
            _simplifyPoints: function() {
              for (var t = this._parts, e = this.options.smoothFactor, i = 0, o = t.length; i < o; i++) t[i] = b.LineUtil.simplify(t[i], e)
            },
            _update: function() {
              this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
            },
            _updatePath: function() {
              this._renderer._updatePoly(this)
            }
          }), b.polyline = function(t, e) {
            return new b.Polyline(t, e)
          }, b.Polyline._flat = function(t) {
            return !b.Util.isArray(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
          }, b.PolyUtil = {}, b.PolyUtil.clipPolygon = function(t, e, i) {
            var o, n, r, s, a, l, u, c, h, d = [1, 4, 2, 8],
              p = b.LineUtil;
            for (n = 0, u = t.length; n < u; n++) t[n]._code = p._getBitCode(t[n], e);
            for (s = 0; s < 4; s++) {
              for (c = d[s], o = [], n = 0, r = (u = t.length) - 1; n < u; r = n++) a = t[n], l = t[r], a._code & c ? l._code & c || ((h = p._getEdgeIntersection(l, a, c, e, i))._code = p._getBitCode(h, e), o.push(h)) : (l._code & c && ((h = p._getEdgeIntersection(l, a, c, e, i))._code = p._getBitCode(h, e), o.push(h)), o.push(a));
              t = o
            }
            return t
          }, b.Polygon = b.Polyline.extend({
            options: {
              fill: !0
            },
            isEmpty: function() {
              return !this._latlngs.length || !this._latlngs[0].length
            },
            getCenter: function() {
              if (!this._map) throw new Error("Must add layer to map before using getCenter()");
              var t, e, i, o, n, r, s, a, l, u = this._rings[0],
                c = u.length;
              if (!c) return null;
              for (r = s = a = 0, t = 0, e = c - 1; t < c; e = t++) i = u[t], o = u[e], n = i.y * o.x - o.y * i.x, s += (i.x + o.x) * n, a += (i.y + o.y) * n, r += 3 * n;
              return l = 0 === r ? u[0] : [s / r, a / r], this._map.layerPointToLatLng(l)
            },
            _convertLatLngs: function(t) {
              var e = b.Polyline.prototype._convertLatLngs.call(this, t),
                i = e.length;
              return 2 <= i && e[0] instanceof b.LatLng && e[0].equals(e[i - 1]) && e.pop(), e
            },
            _setLatLngs: function(t) {
              b.Polyline.prototype._setLatLngs.call(this, t), b.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs])
            },
            _defaultShape: function() {
              return b.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
            },
            _clipPoints: function() {
              var t = this._renderer._bounds,
                e = this.options.weight,
                i = new b.Point(e, e);
              if (t = new b.Bounds(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
                if (this.options.noClip) return void(this._parts = this._rings);
                for (var o, n = 0, r = this._rings.length; n < r; n++)(o = b.PolyUtil.clipPolygon(this._rings[n], t, !0)).length && this._parts.push(o)
              }
            },
            _updatePath: function() {
              this._renderer._updatePoly(this, !0)
            }
          }), b.polygon = function(t, e) {
            return new b.Polygon(t, e)
          }, b.Rectangle = b.Polygon.extend({
            initialize: function(t, e) {
              b.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
            },
            setBounds: function(t) {
              return this.setLatLngs(this._boundsToLatLngs(t))
            },
            _boundsToLatLngs: function(t) {
              return [(t = b.latLngBounds(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
            }
          }), b.rectangle = function(t, e) {
            return new b.Rectangle(t, e)
          }, b.CircleMarker = b.Path.extend({
            options: {
              fill: !0,
              radius: 10
            },
            initialize: function(t, e) {
              b.setOptions(this, e), this._latlng = b.latLng(t), this._radius = this.options.radius
            },
            setLatLng: function(t) {
              return this._latlng = b.latLng(t), this.redraw(), this.fire("move", {
                latlng: this._latlng
              })
            },
            getLatLng: function() {
              return this._latlng
            },
            setRadius: function(t) {
              return this.options.radius = this._radius = t, this.redraw()
            },
            getRadius: function() {
              return this._radius
            },
            setStyle: function(t) {
              var e = t && t.radius || this._radius;
              return b.Path.prototype.setStyle.call(this, t), this.setRadius(e), this
            },
            _project: function() {
              this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
            },
            _updateBounds: function() {
              var t = this._radius,
                e = this._radiusY || t,
                i = this._clickTolerance(),
                o = [t + i, e + i];
              this._pxBounds = new b.Bounds(this._point.subtract(o), this._point.add(o))
            },
            _update: function() {
              this._map && this._updatePath()
            },
            _updatePath: function() {
              this._renderer._updateCircle(this)
            },
            _empty: function() {
              return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
            }
          }), b.circleMarker = function(t, e) {
            return new b.CircleMarker(t, e)
          }, b.Circle = b.CircleMarker.extend({
            initialize: function(t, e, i) {
              if ("number" == typeof e && (e = b.extend({}, i, {
                  radius: e
                })), b.setOptions(this, e), this._latlng = b.latLng(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
              this._mRadius = this.options.radius
            },
            setRadius: function(t) {
              return this._mRadius = t, this.redraw()
            },
            getRadius: function() {
              return this._mRadius
            },
            getBounds: function() {
              var t = [this._radius, this._radiusY || this._radius];
              return new b.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
            },
            setStyle: b.Path.prototype.setStyle,
            _project: function() {
              var t = this._latlng.lng,
                e = this._latlng.lat,
                i = this._map,
                o = i.options.crs;
              if (o.distance === b.CRS.Earth.distance) {
                var n = Math.PI / 180,
                  r = this._mRadius / b.CRS.Earth.R / n,
                  s = i.project([e + r, t]),
                  a = i.project([e - r, t]),
                  l = s.add(a).divideBy(2),
                  u = i.unproject(l).lat,
                  c = Math.acos((Math.cos(r * n) - Math.sin(e * n) * Math.sin(u * n)) / (Math.cos(e * n) * Math.cos(u * n))) / n;
                !isNaN(c) && 0 !== c || (c = r / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()), this._radius = isNaN(c) ? 0 : Math.max(Math.round(l.x - i.project([u, t - c]).x), 1), this._radiusY = Math.max(Math.round(l.y - s.y), 1)
              } else {
                var h = o.unproject(o.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(h).x
              }
              this._updateBounds()
            }
          }), b.circle = function(t, e, i) {
            return new b.Circle(t, e, i)
          }, b.SVG = b.Renderer.extend({
            getEvents: function() {
              var t = b.Renderer.prototype.getEvents.call(this);
              return t.zoomstart = this._onZoomStart, t
            },
            _initContainer: function() {
              this._container = b.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = b.SVG.create("g"), this._container.appendChild(this._rootGroup)
            },
            _onZoomStart: function() {
              this._update()
            },
            _update: function() {
              if (!this._map._animatingZoom || !this._bounds) {
                b.Renderer.prototype._update.call(this);
                var t = this._bounds,
                  e = t.getSize(),
                  i = this._container;
                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), b.DomUtil.setPosition(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
              }
            },
            _initPath: function(t) {
              var e = t._path = b.SVG.create("path");
              t.options.className && b.DomUtil.addClass(e, t.options.className), t.options.interactive && b.DomUtil.addClass(e, "leaflet-interactive"), this._updateStyle(t)
            },
            _addPath: function(t) {
              this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
            },
            _removePath: function(t) {
              b.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path)
            },
            _updatePath: function(t) {
              t._project(), t._update()
            },
            _updateStyle: function(t) {
              var e = t._path,
                i = t.options;
              e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
            },
            _updatePoly: function(t, e) {
              this._setPath(t, b.SVG.pointsToPath(t._parts, e))
            },
            _updateCircle: function(t) {
              var e = t._point,
                i = t._radius,
                o = "a" + i + "," + (t._radiusY || i) + " 0 1,0 ",
                n = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + o + 2 * i + ",0 " + o + 2 * -i + ",0 ";
              this._setPath(t, n)
            },
            _setPath: function(t, e) {
              t._path.setAttribute("d", e)
            },
            _bringToFront: function(t) {
              b.DomUtil.toFront(t._path)
            },
            _bringToBack: function(t) {
              b.DomUtil.toBack(t._path)
            }
          }), b.extend(b.SVG, {
            create: function(t) {
              return document.createElementNS("http://www.w3.org/2000/svg", t)
            },
            pointsToPath: function(t, e) {
              var i, o, n, r, s, a, l = "";
              for (i = 0, n = t.length; i < n; i++) {
                for (o = 0, r = (s = t[i]).length; o < r; o++) l += (o ? "L" : "M") + (a = s[o]).x + " " + a.y;
                l += e ? b.Browser.svg ? "z" : "x" : ""
              }
              return l || "M0 0"
            }
          }), b.Browser.svg = !(!document.createElementNS || !b.SVG.create("svg").createSVGRect), b.svg = function(t) {
            return b.Browser.svg || b.Browser.vml ? new b.SVG(t) : null
          }, b.Browser.vml = !b.Browser.svg && function() {
            try {
              var t = document.createElement("div");
              t.innerHTML = '<v:shape adj="1"/>';
              var e = t.firstChild;
              return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (t) {
              return !1
            }
          }(), b.SVG.include(b.Browser.vml ? {
            _initContainer: function() {
              this._container = b.DomUtil.create("div", "leaflet-vml-container")
            },
            _update: function() {
              this._map._animatingZoom || (b.Renderer.prototype._update.call(this), this.fire("update"))
            },
            _initPath: function(t) {
              var e = t._container = b.SVG.create("shape");
              b.DomUtil.addClass(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = b.SVG.create("path"), e.appendChild(t._path), this._updateStyle(t)
            },
            _addPath: function(t) {
              var e = t._container;
              this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
            },
            _removePath: function(t) {
              var e = t._container;
              b.DomUtil.remove(e), t.removeInteractiveTarget(e)
            },
            _updateStyle: function(t) {
              var e = t._stroke,
                i = t._fill,
                o = t.options,
                n = t._container;
              n.stroked = !!o.stroke, n.filled = !!o.fill, o.stroke ? (e = e || (t._stroke = b.SVG.create("stroke")), n.appendChild(e), e.weight = o.weight + "px", e.color = o.color, e.opacity = o.opacity, o.dashArray ? e.dashStyle = b.Util.isArray(o.dashArray) ? o.dashArray.join(" ") : o.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = o.lineCap.replace("butt", "flat"), e.joinstyle = o.lineJoin) : e && (n.removeChild(e), t._stroke = null), o.fill ? (i = i || (t._fill = b.SVG.create("fill")), n.appendChild(i), i.color = o.fillColor || o.color, i.opacity = o.fillOpacity) : i && (n.removeChild(i), t._fill = null)
            },
            _updateCircle: function(t) {
              var e = t._point.round(),
                i = Math.round(t._radius),
                o = Math.round(t._radiusY || i);
              this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + o + " 0,23592600")
            },
            _setPath: function(t, e) {
              t._path.v = e
            },
            _bringToFront: function(t) {
              b.DomUtil.toFront(t._container)
            },
            _bringToBack: function(t) {
              b.DomUtil.toBack(t._container)
            }
          } : {}), b.Browser.vml && (b.SVG.create = function() {
            try {
              return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
                function(t) {
                  return document.createElement("<lvml:" + t + ' class="lvml">')
                }
            } catch (t) {
              return function(t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
              }
            }
          }()), b.Canvas = b.Renderer.extend({
            onAdd: function() {
              b.Renderer.prototype.onAdd.call(this), this._layers = this._layers || {}, this._draw()
            },
            _initContainer: function() {
              var t = this._container = document.createElement("canvas");
              b.DomEvent.on(t, "mousemove", b.Util.throttle(this._onMouseMove, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
            },
            _update: function() {
              if (!this._map._animatingZoom || !this._bounds) {
                this._drawnLayers = {}, b.Renderer.prototype._update.call(this);
                var t = this._bounds,
                  e = this._container,
                  i = t.getSize(),
                  o = b.Browser.retina ? 2 : 1;
                b.DomUtil.setPosition(e, t.min), e.width = o * i.x, e.height = o * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", b.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
              }
            },
            _initPath: function(t) {
              this._updateDashArray(t), this._layers[b.stamp(t)] = t
            },
            _addPath: b.Util.falseFn,
            _removePath: function(t) {
              t._removed = !0, this._requestRedraw(t)
            },
            _updatePath: function(t) {
              this._redrawBounds = t._pxBounds, this._draw(!0), t._project(), t._update(), this._draw(), this._redrawBounds = null
            },
            _updateStyle: function(t) {
              this._updateDashArray(t), this._requestRedraw(t)
            },
            _updateDashArray: function(t) {
              if (t.options.dashArray) {
                var e, i = t.options.dashArray.split(","),
                  o = [];
                for (e = 0; e < i.length; e++) o.push(Number(i[e]));
                t.options._dashArray = o
              }
            },
            _requestRedraw: function(t) {
              if (this._map) {
                var e = (t.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new b.Bounds, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e])), this._redrawRequest = this._redrawRequest || b.Util.requestAnimFrame(this._redraw, this)
              }
            },
            _redraw: function() {
              this._redrawRequest = null, this._draw(!0), this._draw(), this._redrawBounds = null
            },
            _draw: function(t) {
              this._clear = t;
              var e, i = this._redrawBounds;
              for (var o in this._ctx.save(), i && (this._ctx.beginPath(), this._ctx.rect(i.min.x, i.min.y, i.max.x - i.min.x, i.max.y - i.min.y), this._ctx.clip()), this._layers) e = this._layers[o], (!i || e._pxBounds && e._pxBounds.intersects(i)) && e._updatePath(), t && e._removed && (delete e._removed, delete this._layers[o]);
              this._ctx.restore()
            },
            _updatePoly: function(t, e) {
              var i, o, n, r, s = t._parts,
                a = s.length,
                l = this._ctx;
              if (a) {
                for (this._drawnLayers[t._leaflet_id] = t, l.beginPath(), l.setLineDash && l.setLineDash(t.options && t.options._dashArray || []), i = 0; i < a; i++) {
                  for (o = 0, n = s[i].length; o < n; o++) r = s[i][o], l[o ? "lineTo" : "moveTo"](r.x, r.y);
                  e && l.closePath()
                }
                this._fillStroke(l, t)
              }
            },
            _updateCircle: function(t) {
              if (!t._empty()) {
                var e = t._point,
                  i = this._ctx,
                  o = t._radius,
                  n = (t._radiusY || o) / o;
                this._drawnLayers[t._leaflet_id] = t, 1 != n && (i.save(), i.scale(1, n)), i.beginPath(), i.arc(e.x, e.y / n, o, 0, 2 * Math.PI, !1), 1 != n && i.restore(), this._fillStroke(i, t)
              }
            },
            _fillStroke: function(t, e) {
              var i = this._clear,
                o = e.options;
              t.globalCompositeOperation = i ? "destination-out" : "source-over", o.fill && (t.globalAlpha = i ? 1 : o.fillOpacity, t.fillStyle = o.fillColor || o.color, t.fill(o.fillRule || "evenodd")), o.stroke && 0 !== o.weight && (t.globalAlpha = i ? 1 : o.opacity, e._prevWeight = t.lineWidth = i ? e._prevWeight + 1 : o.weight, t.strokeStyle = o.color, t.lineCap = o.lineCap, t.lineJoin = o.lineJoin, t.stroke())
            },
            _onClick: function(t) {
              var e, i = this._map.mouseEventToLayerPoint(t),
                o = [];
              for (var n in this._layers)(e = this._layers[n]).options.interactive && e._containsPoint(i) && !this._map._draggableMoved(e) && (b.DomEvent._fakeStop(t), o.push(e));
              o.length && this._fireEvent(o, t)
            },
            _onMouseMove: function(t) {
              if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseOut(t, e), this._handleMouseHover(t, e)
              }
            },
            _handleMouseOut: function(t, e) {
              var i = this._hoveredLayer;
              !i || "mouseout" !== t.type && i._containsPoint(e) || (b.DomUtil.removeClass(this._container, "leaflet-interactive"), this._fireEvent([i], t, "mouseout"), this._hoveredLayer = null)
            },
            _handleMouseHover: function(t, e) {
              var i, o;
              for (i in this._drawnLayers)(o = this._drawnLayers[i]).options.interactive && o._containsPoint(e) && (b.DomUtil.addClass(this._container, "leaflet-interactive"), this._fireEvent([o], t, "mouseover"), this._hoveredLayer = o);
              this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
            },
            _fireEvent: function(t, e, i) {
              this._map._fireDOMEvent(e, i || e.type, t)
            },
            _bringToFront: b.Util.falseFn,
            _bringToBack: b.Util.falseFn
          }), b.Browser.canvas = !!document.createElement("canvas").getContext, b.canvas = function(t) {
            return b.Browser.canvas ? new b.Canvas(t) : null
          }, b.Polyline.prototype._containsPoint = function(t, e) {
            var i, o, n, r, s, a, l = this._clickTolerance();
            if (!this._pxBounds.contains(t)) return !1;
            for (i = 0, r = this._parts.length; i < r; i++)
              for (o = 0, n = (s = (a = this._parts[i]).length) - 1; o < s; n = o++)
                if ((e || 0 !== o) && b.LineUtil.pointToSegmentDistance(t, a[n], a[o]) <= l) return !0;
            return !1
          }, b.Polygon.prototype._containsPoint = function(t) {
            var e, i, o, n, r, s, a, l, u = !1;
            if (!this._pxBounds.contains(t)) return !1;
            for (n = 0, a = this._parts.length; n < a; n++)
              for (r = 0, s = (l = (e = this._parts[n]).length) - 1; r < l; s = r++) i = e[r], o = e[s], i.y > t.y != o.y > t.y && t.x < (o.x - i.x) * (t.y - i.y) / (o.y - i.y) + i.x && (u = !u);
            return u || b.Polyline.prototype._containsPoint.call(this, t, !0)
          }, b.CircleMarker.prototype._containsPoint = function(t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
          }, b.GeoJSON = b.FeatureGroup.extend({
            initialize: function(t, e) {
              b.setOptions(this, e), this._layers = {}, t && this.addData(t)
            },
            addData: function(t) {
              var e, i, o, n = b.Util.isArray(t) ? t : t.features;
              if (n) {
                for (e = 0, i = n.length; e < i; e++)((o = n[e]).geometries || o.geometry || o.features || o.coordinates) && this.addData(o);
                return this
              }
              var r = this.options;
              if (r.filter && !r.filter(t)) return this;
              var s = b.GeoJSON.geometryToLayer(t, r);
              return s ? (s.feature = b.GeoJSON.asFeature(t), s.defaultOptions = s.options, this.resetStyle(s), r.onEachFeature && r.onEachFeature(t, s), this.addLayer(s)) : this
            },
            resetStyle: function(t) {
              return t.options = b.Util.extend({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
            },
            setStyle: function(e) {
              return this.eachLayer(function(t) {
                this._setLayerStyle(t, e)
              }, this)
            },
            _setLayerStyle: function(t, e) {
              "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
            }
          }), b.extend(b.GeoJSON, {
            geometryToLayer: function(t, e) {
              var i, o, n, r, s = "Feature" === t.type ? t.geometry : t,
                a = s ? s.coordinates : null,
                l = [],
                u = e && e.pointToLayer,
                c = e && e.coordsToLatLng || this.coordsToLatLng;
              if (!a && !s) return null;
              switch (s.type) {
                case "Point":
                  return i = c(a), u ? u(t, i) : new b.Marker(i);
                case "MultiPoint":
                  for (n = 0, r = a.length; n < r; n++) i = c(a[n]), l.push(u ? u(t, i) : new b.Marker(i));
                  return new b.FeatureGroup(l);
                case "LineString":
                case "MultiLineString":
                  return o = this.coordsToLatLngs(a, "LineString" === s.type ? 0 : 1, c), new b.Polyline(o, e);
                case "Polygon":
                case "MultiPolygon":
                  return o = this.coordsToLatLngs(a, "Polygon" === s.type ? 1 : 2, c), new b.Polygon(o, e);
                case "GeometryCollection":
                  for (n = 0, r = s.geometries.length; n < r; n++) {
                    var h = this.geometryToLayer({
                      geometry: s.geometries[n],
                      type: "Feature",
                      properties: t.properties
                    }, e);
                    h && l.push(h)
                  }
                  return new b.FeatureGroup(l);
                default:
                  throw new Error("Invalid GeoJSON object.")
              }
            },
            coordsToLatLng: function(t) {
              return new b.LatLng(t[1], t[0], t[2])
            },
            coordsToLatLngs: function(t, e, i) {
              for (var o, n = [], r = 0, s = t.length; r < s; r++) o = e ? this.coordsToLatLngs(t[r], e - 1, i) : (i || this.coordsToLatLng)(t[r]), n.push(o);
              return n
            },
            latLngToCoords: function(t) {
              return void 0 !== t.alt ? [t.lng, t.lat, t.alt] : [t.lng, t.lat]
            },
            latLngsToCoords: function(t, e, i) {
              for (var o = [], n = 0, r = t.length; n < r; n++) o.push(e ? b.GeoJSON.latLngsToCoords(t[n], e - 1, i) : b.GeoJSON.latLngToCoords(t[n]));
              return !e && i && o.push(o[0]), o
            },
            getFeature: function(t, e) {
              return t.feature ? b.extend({}, t.feature, {
                geometry: e
              }) : b.GeoJSON.asFeature(e)
            },
            asFeature: function(t) {
              return "Feature" === t.type ? t : {
                type: "Feature",
                properties: {},
                geometry: t
              }
            }
          });
        var A = {
          toGeoJSON: function() {
            return b.GeoJSON.getFeature(this, {
              type: "Point",
              coordinates: b.GeoJSON.latLngToCoords(this.getLatLng())
            })
          }
        };
        b.Marker.include(A), b.Circle.include(A), b.CircleMarker.include(A), b.Polyline.prototype.toGeoJSON = function() {
          var t = !b.Polyline._flat(this._latlngs),
            e = b.GeoJSON.latLngsToCoords(this._latlngs, t ? 1 : 0);
          return b.GeoJSON.getFeature(this, {
            type: (t ? "Multi" : "") + "LineString",
            coordinates: e
          })
        }, b.Polygon.prototype.toGeoJSON = function() {
          var t = !b.Polyline._flat(this._latlngs),
            e = t && !b.Polyline._flat(this._latlngs[0]),
            i = b.GeoJSON.latLngsToCoords(this._latlngs, e ? 2 : t ? 1 : 0, !0);
          return t || (i = [i]), b.GeoJSON.getFeature(this, {
            type: (e ? "Multi" : "") + "Polygon",
            coordinates: i
          })
        }, b.LayerGroup.include({
          toMultiPoint: function() {
            var e = [];
            return this.eachLayer(function(t) {
              e.push(t.toGeoJSON().geometry.coordinates)
            }), b.GeoJSON.getFeature(this, {
              type: "MultiPoint",
              coordinates: e
            })
          },
          toGeoJSON: function() {
            var t = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === t) return this.toMultiPoint();
            var i = "GeometryCollection" === t,
              o = [];
            return this.eachLayer(function(t) {
              if (t.toGeoJSON) {
                var e = t.toGeoJSON();
                o.push(i ? e.geometry : b.GeoJSON.asFeature(e))
              }
            }), i ? b.GeoJSON.getFeature(this, {
              geometries: o,
              type: "GeometryCollection"
            }) : {
              type: "FeatureCollection",
              features: o
            }
          }
        }), b.geoJSON = function(t, e) {
          return new b.GeoJSON(t, e)
        }, b.geoJson = b.geoJSON;
        var M = "_leaflet_events";
        b.DomEvent = {
          on: function(t, e, i, o) {
            if ("object" == typeof e)
              for (var n in e) this._on(t, n, e[n], i);
            else
              for (var r = 0, s = (e = b.Util.splitWords(e)).length; r < s; r++) this._on(t, e[r], i, o);
            return this
          },
          off: function(t, e, i, o) {
            if ("object" == typeof e)
              for (var n in e) this._off(t, n, e[n], i);
            else
              for (var r = 0, s = (e = b.Util.splitWords(e)).length; r < s; r++) this._off(t, e[r], i, o);
            return this
          },
          _on: function(e, t, i, o) {
            var n = t + b.stamp(i) + (o ? "_" + b.stamp(o) : "");
            if (e[M] && e[M][n]) return this;
            var r = function(t) {
                return i.call(o || e, t || window.event)
              },
              s = r;
            return b.Browser.pointer && 0 === t.indexOf("touch") ? this.addPointerListener(e, t, r, n) : b.Browser.touch && "dblclick" === t && this.addDoubleTapListener ? this.addDoubleTapListener(e, r, n) : "addEventListener" in e ? "mousewheel" === t ? e.addEventListener("onwheel" in e ? "wheel" : "mousewheel", r, !1) : "mouseenter" === t || "mouseleave" === t ? (r = function(t) {
              t = t || window.event, b.DomEvent._isExternalTarget(e, t) && s(t)
            }, e.addEventListener("mouseenter" === t ? "mouseover" : "mouseout", r, !1)) : ("click" === t && b.Browser.android && (r = function(t) {
              return b.DomEvent._filterClick(t, s)
            }), e.addEventListener(t, r, !1)) : "attachEvent" in e && e.attachEvent("on" + t, r), e[M] = e[M] || {}, e[M][n] = r, this
          },
          _off: function(t, e, i, o) {
            var n = e + b.stamp(i) + (o ? "_" + b.stamp(o) : ""),
              r = t[M] && t[M][n];
            return r && (b.Browser.pointer && 0 === e.indexOf("touch") ? this.removePointerListener(t, e, n) : b.Browser.touch && "dblclick" === e && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, n) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", r, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, r, !1) : "detachEvent" in t && t.detachEvent("on" + e, r), t[M][n] = null), this
          },
          stopPropagation: function(t) {
            return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, b.DomEvent._skipped(t), this
          },
          disableScrollPropagation: function(t) {
            return b.DomEvent.on(t, "mousewheel", b.DomEvent.stopPropagation)
          },
          disableClickPropagation: function(t) {
            var e = b.DomEvent.stopPropagation;
            return b.DomEvent.on(t, b.Draggable.START.join(" "), e), b.DomEvent.on(t, {
              click: b.DomEvent._fakeStop,
              dblclick: e
            })
          },
          preventDefault: function(t) {
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
          },
          stop: function(t) {
            return b.DomEvent.preventDefault(t).stopPropagation(t)
          },
          getMousePosition: function(t, e) {
            if (!e) return new b.Point(t.clientX, t.clientY);
            var i = e.getBoundingClientRect();
            return new b.Point(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
          },
          _wheelPxFactor: b.Browser.win && b.Browser.chrome ? 2 : b.Browser.gecko ? window.devicePixelRatio : 1,
          getWheelDelta: function(t) {
            return b.Browser.edge ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / b.DomEvent._wheelPxFactor : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
          },
          _skipEvents: {},
          _fakeStop: function(t) {
            b.DomEvent._skipEvents[t.type] = !0
          },
          _skipped: function(t) {
            var e = this._skipEvents[t.type];
            return this._skipEvents[t.type] = !1, e
          },
          _isExternalTarget: function(t, e) {
            var i = e.relatedTarget;
            if (!i) return !0;
            try {
              for (; i && i !== t;) i = i.parentNode
            } catch (t) {
              return !1
            }
            return i !== t
          },
          _filterClick: function(t, e) {
            var i = t.timeStamp || t.originalEvent && t.originalEvent.timeStamp,
              o = b.DomEvent._lastClick && i - b.DomEvent._lastClick;
            return o && 100 < o && o < 500 || t.target._simulatedClick && !t._simulated ? void b.DomEvent.stop(t) : (b.DomEvent._lastClick = i, void e(t))
          }
        }, b.DomEvent.addListener = b.DomEvent.on, b.DomEvent.removeListener = b.DomEvent.off, b.Draggable = b.Evented.extend({
          options: {
            clickTolerance: 3
          },
          statics: {
            START: b.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
            END: {
              mousedown: "mouseup",
              touchstart: "touchend",
              pointerdown: "touchend",
              MSPointerDown: "touchend"
            },
            MOVE: {
              mousedown: "mousemove",
              touchstart: "touchmove",
              pointerdown: "touchmove",
              MSPointerDown: "touchmove"
            }
          },
          initialize: function(t, e, i) {
            this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
          },
          enable: function() {
            this._enabled || (b.DomEvent.on(this._dragStartTarget, b.Draggable.START.join(" "), this._onDown, this), this._enabled = !0)
          },
          disable: function() {
            this._enabled && (b.DomEvent.off(this._dragStartTarget, b.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1)
          },
          _onDown: function(t) {
            if (!t._simulated && this._enabled && (this._moved = !1, !b.DomUtil.hasClass(this._element, "leaflet-zoom-anim") && !(b.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches) && this._enabled && (b.Draggable._dragging = !0, this._preventOutline && b.DomUtil.preventOutline(this._element), b.DomUtil.disableImageDrag(), b.DomUtil.disableTextSelection(), !this._moving))) {
              this.fire("down");
              var e = t.touches ? t.touches[0] : t;
              this._startPoint = new b.Point(e.clientX, e.clientY), b.DomEvent.on(document, b.Draggable.MOVE[t.type], this._onMove, this).on(document, b.Draggable.END[t.type], this._onUp, this)
            }
          },
          _onMove: function(t) {
            if (!t._simulated && this._enabled) {
              if (t.touches && 1 < t.touches.length) return void(this._moved = !0);
              var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                i = new b.Point(e.clientX, e.clientY).subtract(this._startPoint);
              (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (b.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = b.DomUtil.getPosition(this._element).subtract(i), b.DomUtil.addClass(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), b.DomUtil.addClass(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, b.Util.cancelAnimFrame(this._animRequest), this._lastEvent = t, this._animRequest = b.Util.requestAnimFrame(this._updatePosition, this, !0)))
            }
          },
          _updatePosition: function() {
            var t = {
              originalEvent: this._lastEvent
            };
            this.fire("predrag", t), b.DomUtil.setPosition(this._element, this._newPos), this.fire("drag", t)
          },
          _onUp: function(t) {
            if (!t._simulated && this._enabled) {
              for (var e in b.DomUtil.removeClass(document.body, "leaflet-dragging"), this._lastTarget && (b.DomUtil.removeClass(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), b.Draggable.MOVE) b.DomEvent.off(document, b.Draggable.MOVE[e], this._onMove, this).off(document, b.Draggable.END[e], this._onUp, this);
              b.DomUtil.enableImageDrag(), b.DomUtil.enableTextSelection(), this._moved && this._moving && (b.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
                distance: this._newPos.distanceTo(this._startPos)
              })), this._moving = !1, b.Draggable._dragging = !1
            }
          }
        }), b.Handler = b.Class.extend({
          initialize: function(t) {
            this._map = t
          },
          enable: function() {
            return this._enabled || (this._enabled = !0, this.addHooks()), this
          },
          disable: function() {
            return this._enabled && (this._enabled = !1, this.removeHooks()), this
          },
          enabled: function() {
            return !!this._enabled
          }
        }), b.Map.mergeOptions({
          dragging: !0,
          inertia: !b.Browser.android23,
          inertiaDeceleration: 3400,
          inertiaMaxSpeed: 1 / 0,
          easeLinearity: .2,
          worldCopyJump: !1,
          maxBoundsViscosity: 0
        }), b.Map.Drag = b.Handler.extend({
          addHooks: function() {
            if (!this._draggable) {
              var t = this._map;
              this._draggable = new b.Draggable(t._mapPane, t._container), this._draggable.on({
                down: this._onDown,
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
              }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            b.DomUtil.addClass(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
          },
          removeHooks: function() {
            b.DomUtil.removeClass(this._map._container, "leaflet-grab"), b.DomUtil.removeClass(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
          },
          moved: function() {
            return this._draggable && this._draggable._moved
          },
          moving: function() {
            return this._draggable && this._draggable._moving
          },
          _onDown: function() {
            this._map._stop()
          },
          _onDragStart: function() {
            var t = this._map;
            if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
              var e = b.latLngBounds(this._map.options.maxBounds);
              this._offsetLimit = b.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
          },
          _onDrag: function(t) {
            if (this._map.options.inertia) {
              var e = this._lastTime = +new Date,
                i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
              this._positions.push(i), this._times.push(e), 50 < e - this._times[0] && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move", t).fire("drag", t)
          },
          _onZoomEnd: function() {
            var t = this._map.getSize().divideBy(2),
              e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
          },
          _viscousLimit: function(t, e) {
            return t - (t - e) * this._viscosity
          },
          _onPreDragLimit: function() {
            if (this._viscosity && this._offsetLimit) {
              var t = this._draggable._newPos.subtract(this._draggable._startPos),
                e = this._offsetLimit;
              t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
          },
          _onPreDragWrap: function() {
            var t = this._worldWidth,
              e = Math.round(t / 2),
              i = this._initialWorldOffset,
              o = this._draggable._newPos.x,
              n = (o - e + i) % t + e - i,
              r = (o + e + i) % t - e - i,
              s = Math.abs(n + i) < Math.abs(r + i) ? n : r;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = s
          },
          _onDragEnd: function(t) {
            var e = this._map,
              i = e.options,
              o = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), o) e.fire("moveend");
            else {
              var n = this._lastPos.subtract(this._positions[0]),
                r = (this._lastTime - this._times[0]) / 1e3,
                s = i.easeLinearity,
                a = n.multiplyBy(s / r),
                l = a.distanceTo([0, 0]),
                u = Math.min(i.inertiaMaxSpeed, l),
                c = a.multiplyBy(u / l),
                h = u / (i.inertiaDeceleration * s),
                d = c.multiplyBy(-h / 2).round();
              d.x || d.y ? (d = e._limitOffset(d, e.options.maxBounds), b.Util.requestAnimFrame(function() {
                e.panBy(d, {
                  duration: h,
                  easeLinearity: s,
                  noMoveStart: !0,
                  animate: !0
                })
              })) : e.fire("moveend")
            }
          }
        }), b.Map.addInitHook("addHandler", "dragging", b.Map.Drag), b.Map.mergeOptions({
          doubleClickZoom: !0
        }), b.Map.DoubleClickZoom = b.Handler.extend({
          addHooks: function() {
            this._map.on("dblclick", this._onDoubleClick, this)
          },
          removeHooks: function() {
            this._map.off("dblclick", this._onDoubleClick, this)
          },
          _onDoubleClick: function(t) {
            var e = this._map,
              i = e.getZoom(),
              o = e.options.zoomDelta,
              n = t.originalEvent.shiftKey ? i - o : i + o;
            "center" === e.options.doubleClickZoom ? e.setZoom(n) : e.setZoomAround(t.containerPoint, n)
          }
        }), b.Map.addInitHook("addHandler", "doubleClickZoom", b.Map.DoubleClickZoom), b.Map.mergeOptions({
          scrollWheelZoom: !0,
          wheelDebounceTime: 40,
          wheelPxPerZoomLevel: 60
        }), b.Map.ScrollWheelZoom = b.Handler.extend({
          addHooks: function() {
            b.DomEvent.on(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
          },
          removeHooks: function() {
            b.DomEvent.off(this._map._container, "mousewheel", this._onWheelScroll, this)
          },
          _onWheelScroll: function(t) {
            var e = b.DomEvent.getWheelDelta(t),
              i = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(i - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(b.bind(this._performZoom, this), o), b.DomEvent.stop(t)
          },
          _performZoom: function() {
            var t = this._map,
              e = t.getZoom(),
              i = this._map.options.zoomSnap || 0;
            t._stop();
            var o = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
              n = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(o)))) / Math.LN2,
              r = i ? Math.ceil(n / i) * i : n,
              s = t._limitZoom(e + (0 < this._delta ? r : -r)) - e;
            this._delta = 0, this._startTime = null, s && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + s) : t.setZoomAround(this._lastMousePos, e + s))
          }
        }), b.Map.addInitHook("addHandler", "scrollWheelZoom", b.Map.ScrollWheelZoom), b.PosAnimation = b.Evented.extend({
          run: function(t, e, i, o) {
            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(o || .5, .2), this._startPos = b.DomUtil.getPosition(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
          },
          stop: function() {
            this._inProgress && (this._step(!0), this._complete())
          },
          _animate: function() {
            this._animId = b.Util.requestAnimFrame(this._animate, this), this._step()
          },
          _step: function(t) {
            var e = +new Date - this._startTime,
              i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
          },
          _runFrame: function(t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(), b.DomUtil.setPosition(this._el, i), this.fire("step")
          },
          _complete: function() {
            b.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
          },
          _easeOut: function(t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
          }
        }), b.Map.include({
          setView: function(t, e, i) {
            if ((e = void 0 === e ? this._zoom : this._limitZoom(e), t = this._limitCenter(b.latLng(t), e, this.options.maxBounds), i = i || {}, this._stop(), this._loaded && !i.reset && !0 !== i) && (void 0 !== i.animate && (i.zoom = b.extend({
                animate: i.animate
              }, i.zoom), i.pan = b.extend({
                animate: i.animate,
                duration: i.duration
              }, i.pan)), this._zoom !== e ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, e, i.zoom) : this._tryAnimatedPan(t, i.pan))) return clearTimeout(this._sizeTimer), this;
            return this._resetView(t, e), this
          },
          panBy: function(t, e) {
            if (e = e || {}, !(t = b.point(t).round()).x && !t.y) return this.fire("moveend");
            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
            if (this._panAnim || (this._panAnim = new b.PosAnimation, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
              }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
              b.DomUtil.addClass(this._mapPane, "leaflet-pan-anim");
              var i = this._getMapPanePos().subtract(t).round();
              this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
          },
          _onPanTransitionStep: function() {
            this.fire("move")
          },
          _onPanTransitionEnd: function() {
            b.DomUtil.removeClass(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
          },
          _tryAnimatedPan: function(t, e) {
            var i = this._getCenterOffset(t)._floor();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
          }
        }), b.Map.mergeOptions({
          zoomAnimation: !0,
          zoomAnimationThreshold: 4
        });
        var O = b.DomUtil.TRANSITION && b.Browser.any3d && !b.Browser.mobileOpera;
        O && b.Map.addInitHook(function() {
          this._zoomAnimated = this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), b.DomEvent.on(this._proxy, b.DomUtil.TRANSITION_END, this._catchTransitionEnd, this))
        }), b.Map.include(O ? {
          _createAnimProxy: function() {
            var o = this._proxy = b.DomUtil.create("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(o), this.on("zoomanim", function(t) {
              var e = b.DomUtil.TRANSFORM,
                i = o.style[e];
              b.DomUtil.setTransform(o, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === o.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this), this.on("load moveend", function() {
              var t = this.getCenter(),
                e = this.getZoom();
              b.DomUtil.setTransform(o, this.project(t, e), this.getZoomScale(e, 1))
            }, this)
          },
          _catchTransitionEnd: function(t) {
            this._animatingZoom && 0 <= t.propertyName.indexOf("transform") && this._onZoomTransitionEnd()
          },
          _nothingToAnimate: function() {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
          },
          _tryAnimatedZoom: function(t, e, i) {
            if (this._animatingZoom) return !0;
            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
            var o = this.getZoomScale(e),
              n = this._getCenterOffset(t)._divideBy(1 - 1 / o);
            return !(!0 !== i.animate && !this.getSize().contains(n) || (b.Util.requestAnimFrame(function() {
              this._moveStart(!0)._animateZoom(t, e, !0)
            }, this), 0))
          },
          _animateZoom: function(t, e, i, o) {
            i && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, b.DomUtil.addClass(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
              center: t,
              zoom: e,
              noUpdate: o
            }), setTimeout(b.bind(this._onZoomTransitionEnd, this), 250)
          },
          _onZoomTransitionEnd: function() {
            this._animatingZoom && (b.DomUtil.removeClass(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), b.Util.requestAnimFrame(function() {
              this._moveEnd(!0)
            }, this))
          }
        } : {}), b.Map.include({
          flyTo: function(o, n, t) {
            function e(t) {
              var e = (d * d - h * h + (t ? -1 : 1) * m * m * p * p) / (2 * (t ? d : h) * m * p),
                i = Math.sqrt(e * e + 1) - e;
              return i < 1e-9 ? -18 : Math.log(i)
            }

            function i(t) {
              return (Math.exp(t) - Math.exp(-t)) / 2
            }

            function r(t) {
              return (Math.exp(t) + Math.exp(-t)) / 2
            }

            function s(t) {
              return h * (r(f) * function(t) {
                return i(t) / r(t)
              }(f + _ * t) - i(f)) / m
            }
            if (!1 === (t = t || {}).animate || !b.Browser.any3d) return this.setView(o, n, t);
            this._stop();
            var a = this.project(this.getCenter()),
              l = this.project(o),
              u = this.getSize(),
              c = this._zoom;
            o = b.latLng(o), n = void 0 === n ? c : n;
            var h = Math.max(u.x, u.y),
              d = h * this.getZoomScale(c, n),
              p = l.distanceTo(a) || 1,
              _ = 1.42,
              m = _ * _,
              f = e(0),
              g = Date.now(),
              v = (e(1) - f) / _,
              y = t.duration ? 1e3 * t.duration : 1e3 * v * .8;
            return this._moveStart(!0),
              function t() {
                var e = (Date.now() - g) / y,
                  i = function(t) {
                    return 1 - Math.pow(1 - t, 1.5)
                  }(e) * v;
                e <= 1 ? (this._flyToFrame = b.Util.requestAnimFrame(t, this), this._move(this.unproject(a.add(l.subtract(a).multiplyBy(s(i) / p)), c), this.getScaleZoom(h / function(t) {
                  return h * (r(f) / r(f + _ * t))
                }(i), c), {
                  flyTo: !0
                })) : this._move(o, n)._moveEnd(!0)
              }.call(this), this
          },
          flyToBounds: function(t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e)
          }
        }), b.extend(b.DomEvent, {
          _touchstart: b.Browser.msPointer ? "MSPointerDown" : b.Browser.pointer ? "pointerdown" : "touchstart",
          _touchend: b.Browser.msPointer ? "MSPointerUp" : b.Browser.pointer ? "pointerup" : "touchend",
          addDoubleTapListener: function(t, o, e) {
            function i(t) {
              if (!(1 < (b.Browser.pointer ? b.DomEvent._pointersCount : t.touches.length))) {
                var e = Date.now(),
                  i = e - (r || e);
                s = t.touches ? t.touches[0] : t, a = 0 < i && i <= 250, r = e
              }
            }

            function n() {
              if (a && !s.cancelBubble) {
                if (b.Browser.pointer) {
                  var t, e, i = {};
                  for (e in s) t = s[e], i[e] = t && t.bind ? t.bind(s) : t;
                  s = i
                }
                s.type = "dblclick", o(s), r = null
              }
            }
            var r, s, a = !1,
              l = "_leaflet_",
              u = this._touchstart,
              c = this._touchend;
            return t[l + u + e] = i, t[l + c + e] = n, t[l + "dblclick" + e] = o, t.addEventListener(u, i, !1), t.addEventListener(c, n, !1), b.Browser.edge || t.addEventListener("dblclick", o, !1), this
          },
          removeDoubleTapListener: function(t, e) {
            var i = "_leaflet_",
              o = t[i + this._touchstart + e],
              n = t[i + this._touchend + e],
              r = t[i + "dblclick" + e];
            return t.removeEventListener(this._touchstart, o, !1), t.removeEventListener(this._touchend, n, !1), b.Browser.edge || t.removeEventListener("dblclick", r, !1), this
          }
        }), b.extend(b.DomEvent, {
          POINTER_DOWN: b.Browser.msPointer ? "MSPointerDown" : "pointerdown",
          POINTER_MOVE: b.Browser.msPointer ? "MSPointerMove" : "pointermove",
          POINTER_UP: b.Browser.msPointer ? "MSPointerUp" : "pointerup",
          POINTER_CANCEL: b.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
          TAG_WHITE_LIST: ["INPUT", "SELECT", "OPTION"],
          _pointers: {},
          _pointersCount: 0,
          addPointerListener: function(t, e, i, o) {
            return "touchstart" === e ? this._addPointerStart(t, i, o) : "touchmove" === e ? this._addPointerMove(t, i, o) : "touchend" === e && this._addPointerEnd(t, i, o), this
          },
          removePointerListener: function(t, e, i) {
            var o = t["_leaflet_" + e + i];
            return "touchstart" === e ? t.removeEventListener(this.POINTER_DOWN, o, !1) : "touchmove" === e ? t.removeEventListener(this.POINTER_MOVE, o, !1) : "touchend" === e && (t.removeEventListener(this.POINTER_UP, o, !1), t.removeEventListener(this.POINTER_CANCEL, o, !1)), this
          },
          _addPointerStart: function(t, e, i) {
            var o = b.bind(function(t) {
              if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(this.TAG_WHITE_LIST.indexOf(t.target.tagName) < 0)) return;
                b.DomEvent.preventDefault(t)
              }
              this._handlePointer(t, e)
            }, this);
            if (t["_leaflet_touchstart" + i] = o, t.addEventListener(this.POINTER_DOWN, o, !1), !this._pointerDocListener) {
              var n = b.bind(this._globalPointerUp, this);
              document.documentElement.addEventListener(this.POINTER_DOWN, b.bind(this._globalPointerDown, this), !0), document.documentElement.addEventListener(this.POINTER_MOVE, b.bind(this._globalPointerMove, this), !0), document.documentElement.addEventListener(this.POINTER_UP, n, !0), document.documentElement.addEventListener(this.POINTER_CANCEL, n, !0), this._pointerDocListener = !0
            }
          },
          _globalPointerDown: function(t) {
            this._pointers[t.pointerId] = t, this._pointersCount++
          },
          _globalPointerMove: function(t) {
            this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t)
          },
          _globalPointerUp: function(t) {
            delete this._pointers[t.pointerId], this._pointersCount--
          },
          _handlePointer: function(t, e) {
            for (var i in t.touches = [], this._pointers) t.touches.push(this._pointers[i]);
            t.changedTouches = [t], e(t)
          },
          _addPointerMove: function(t, e, i) {
            var o = b.bind(function(t) {
              (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(t, e)
            }, this);
            t["_leaflet_touchmove" + i] = o, t.addEventListener(this.POINTER_MOVE, o, !1)
          },
          _addPointerEnd: function(t, e, i) {
            var o = b.bind(function(t) {
              this._handlePointer(t, e)
            }, this);
            t["_leaflet_touchend" + i] = o, t.addEventListener(this.POINTER_UP, o, !1), t.addEventListener(this.POINTER_CANCEL, o, !1)
          }
        }), b.Map.mergeOptions({
          touchZoom: b.Browser.touch && !b.Browser.android23,
          bounceAtZoomLimits: !0
        }), b.Map.TouchZoom = b.Handler.extend({
          addHooks: function() {
            b.DomUtil.addClass(this._map._container, "leaflet-touch-zoom"), b.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
          },
          removeHooks: function() {
            b.DomUtil.removeClass(this._map._container, "leaflet-touch-zoom"), b.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
          },
          _onTouchStart: function(t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
              var i = e.mouseEventToContainerPoint(t.touches[0]),
                o = e.mouseEventToContainerPoint(t.touches[1]);
              this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(o)._divideBy(2))), this._startDist = i.distanceTo(o), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), b.DomEvent.on(document, "touchmove", this._onTouchMove, this).on(document, "touchend", this._onTouchEnd, this), b.DomEvent.preventDefault(t)
            }
          },
          _onTouchMove: function(t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
              var e = this._map,
                i = e.mouseEventToContainerPoint(t.touches[0]),
                o = e.mouseEventToContainerPoint(t.touches[1]),
                n = i.distanceTo(o) / this._startDist;
              if (this._zoom = e.getScaleZoom(n, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && n < 1 || this._zoom > e.getMaxZoom() && 1 < n) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                if (this._center = this._startLatLng, 1 == n) return
              } else {
                var r = i._add(o)._divideBy(2)._subtract(this._centerPoint);
                if (1 == n && 0 === r.x && 0 === r.y) return;
                this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(r), this._zoom)
              }
              this._moved || (e._moveStart(!0), this._moved = !0), b.Util.cancelAnimFrame(this._animRequest);
              var s = b.bind(e._move, e, this._center, this._zoom, {
                pinch: !0,
                round: !1
              });
              this._animRequest = b.Util.requestAnimFrame(s, this, !0), b.DomEvent.preventDefault(t)
            }
          },
          _onTouchEnd: function() {
            return this._moved && this._zooming ? (this._zooming = !1, b.Util.cancelAnimFrame(this._animRequest), b.DomEvent.off(document, "touchmove", this._onTouchMove).off(document, "touchend", this._onTouchEnd), void(this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom)))) : void(this._zooming = !1)
          }
        }), b.Map.addInitHook("addHandler", "touchZoom", b.Map.TouchZoom), b.Map.mergeOptions({
          tap: !0,
          tapTolerance: 15
        }), b.Map.Tap = b.Handler.extend({
          addHooks: function() {
            b.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
          },
          removeHooks: function() {
            b.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
          },
          _onDown: function(t) {
            if (t.touches) {
              if (b.DomEvent.preventDefault(t), this._fireClick = !0, 1 < t.touches.length) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
              var e = t.touches[0],
                i = e.target;
              this._startPos = this._newPos = new b.Point(e.clientX, e.clientY), i.tagName && "a" === i.tagName.toLowerCase() && b.DomUtil.addClass(i, "leaflet-active"), this._holdTimeout = setTimeout(b.bind(function() {
                this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
              }, this), 1e3), this._simulateEvent("mousedown", e), b.DomEvent.on(document, {
                touchmove: this._onMove,
                touchend: this._onUp
              }, this)
            }
          },
          _onUp: function(t) {
            if (clearTimeout(this._holdTimeout), b.DomEvent.off(document, {
                touchmove: this._onMove,
                touchend: this._onUp
              }, this), this._fireClick && t && t.changedTouches) {
              var e = t.changedTouches[0],
                i = e.target;
              i && i.tagName && "a" === i.tagName.toLowerCase() && b.DomUtil.removeClass(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
            }
          },
          _isTapValid: function() {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
          },
          _onMove: function(t) {
            var e = t.touches[0];
            this._newPos = new b.Point(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
          },
          _simulateEvent: function(t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
          }
        }), b.Browser.touch && !b.Browser.pointer && b.Map.addInitHook("addHandler", "tap", b.Map.Tap), b.Map.mergeOptions({
          boxZoom: !0
        }), b.Map.BoxZoom = b.Handler.extend({
          initialize: function(t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
          },
          addHooks: function() {
            b.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
          },
          removeHooks: function() {
            b.DomEvent.off(this._container, "mousedown", this._onMouseDown, this)
          },
          moved: function() {
            return this._moved
          },
          _resetState: function() {
            this._moved = !1
          },
          _onMouseDown: function(t) {
            return !(!t.shiftKey || 1 !== t.which && 1 !== t.button) && (this._resetState(), b.DomUtil.disableTextSelection(), b.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), void b.DomEvent.on(document, {
              contextmenu: b.DomEvent.stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this))
          },
          _onMouseMove: function(t) {
            this._moved || (this._moved = !0, this._box = b.DomUtil.create("div", "leaflet-zoom-box", this._container), b.DomUtil.addClass(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new b.Bounds(this._point, this._startPoint),
              i = e.getSize();
            b.DomUtil.setPosition(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
          },
          _finish: function() {
            this._moved && (b.DomUtil.remove(this._box), b.DomUtil.removeClass(this._container, "leaflet-crosshair")), b.DomUtil.enableTextSelection(), b.DomUtil.enableImageDrag(), b.DomEvent.off(document, {
              contextmenu: b.DomEvent.stop,
              mousemove: this._onMouseMove,
              mouseup: this._onMouseUp,
              keydown: this._onKeyDown
            }, this)
          },
          _onMouseUp: function(t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
              setTimeout(b.bind(this._resetState, this), 0);
              var e = new b.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
              this._map.fitBounds(e).fire("boxzoomend", {
                boxZoomBounds: e
              })
            }
          },
          _onKeyDown: function(t) {
            27 === t.keyCode && this._finish()
          }
        }), b.Map.addInitHook("addHandler", "boxZoom", b.Map.BoxZoom), b.Map.mergeOptions({
          keyboard: !0,
          keyboardPanDelta: 80
        }), b.Map.Keyboard = b.Handler.extend({
          keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
          },
          initialize: function(t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
          },
          addHooks: function() {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), b.DomEvent.on(t, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this), this._map.on({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this)
          },
          removeHooks: function() {
            this._removeHooks(), b.DomEvent.off(this._map._container, {
              focus: this._onFocus,
              blur: this._onBlur,
              mousedown: this._onMouseDown
            }, this), this._map.off({
              focus: this._addHooks,
              blur: this._removeHooks
            }, this)
          },
          _onMouseDown: function() {
            if (!this._focused) {
              var t = document.body,
                e = document.documentElement,
                i = t.scrollTop || e.scrollTop,
                o = t.scrollLeft || e.scrollLeft;
              this._map._container.focus(), window.scrollTo(o, i)
            }
          },
          _onFocus: function() {
            this._focused = !0, this._map.fire("focus")
          },
          _onBlur: function() {
            this._focused = !1, this._map.fire("blur")
          },
          _setPanDelta: function(t) {
            var e, i, o = this._panKeys = {},
              n = this.keyCodes;
            for (e = 0, i = n.left.length; e < i; e++) o[n.left[e]] = [-1 * t, 0];
            for (e = 0, i = n.right.length; e < i; e++) o[n.right[e]] = [t, 0];
            for (e = 0, i = n.down.length; e < i; e++) o[n.down[e]] = [0, t];
            for (e = 0, i = n.up.length; e < i; e++) o[n.up[e]] = [0, -1 * t]
          },
          _setZoomDelta: function(t) {
            var e, i, o = this._zoomKeys = {},
              n = this.keyCodes;
            for (e = 0, i = n.zoomIn.length; e < i; e++) o[n.zoomIn[e]] = t;
            for (e = 0, i = n.zoomOut.length; e < i; e++) o[n.zoomOut[e]] = -t
          },
          _addHooks: function() {
            b.DomEvent.on(document, "keydown", this._onKeyDown, this)
          },
          _removeHooks: function() {
            b.DomEvent.off(document, "keydown", this._onKeyDown, this)
          },
          _onKeyDown: function(t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
              var e, i = t.keyCode,
                o = this._map;
              if (i in this._panKeys) {
                if (o._panAnim && o._panAnim._inProgress) return;
                e = this._panKeys[i], t.shiftKey && (e = b.point(e).multiplyBy(3)), o.panBy(e), o.options.maxBounds && o.panInsideBounds(o.options.maxBounds)
              } else if (i in this._zoomKeys) o.setZoom(o.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]);
              else {
                if (27 !== i) return;
                o.closePopup()
              }
              b.DomEvent.stop(t)
            }
          }
        }), b.Map.addInitHook("addHandler", "keyboard", b.Map.Keyboard), b.Handler.MarkerDrag = b.Handler.extend({
          initialize: function(t) {
            this._marker = t
          },
          addHooks: function() {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new b.Draggable(t, t, !0)), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).enable(), b.DomUtil.addClass(t, "leaflet-marker-draggable")
          },
          removeHooks: function() {
            this._draggable.off({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && b.DomUtil.removeClass(this._marker._icon, "leaflet-marker-draggable")
          },
          moved: function() {
            return this._draggable && this._draggable._moved
          },
          _onDragStart: function() {
            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
          },
          _onDrag: function(t) {
            var e = this._marker,
              i = e._shadow,
              o = b.DomUtil.getPosition(e._icon),
              n = e._map.layerPointToLatLng(o);
            i && b.DomUtil.setPosition(i, o), e._latlng = n, t.latlng = n, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
          },
          _onDragEnd: function(t) {
            delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
          }
        }), b.Control = b.Class.extend({
          options: {
            position: "topright"
          },
          initialize: function(t) {
            b.setOptions(this, t)
          },
          getPosition: function() {
            return this.options.position
          },
          setPosition: function(t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
          },
          getContainer: function() {
            return this._container
          },
          addTo: function(t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t),
              i = this.getPosition(),
              o = t._controlCorners[i];
            return b.DomUtil.addClass(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? o.insertBefore(e, o.firstChild) : o.appendChild(e), this
          },
          remove: function() {
            return this._map && (b.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map = null), this
          },
          _refocusOnMap: function(t) {
            this._map && t && 0 < t.screenX && 0 < t.screenY && this._map.getContainer().focus()
          }
        }), b.control = function(t) {
          return new b.Control(t)
        }, b.Map.include({
          addControl: function(t) {
            return t.addTo(this), this
          },
          removeControl: function(t) {
            return t.remove(), this
          },
          _initControlPos: function() {
            function t(t, e) {
              var i = n + t + " " + n + e;
              o[t + e] = b.DomUtil.create("div", i, r)
            }
            var o = this._controlCorners = {},
              n = "leaflet-",
              r = this._controlContainer = b.DomUtil.create("div", n + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
          },
          _clearControlPos: function() {
            b.DomUtil.remove(this._controlContainer)
          }
        }), b.Control.Zoom = b.Control.extend({
          options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "-",
            zoomOutTitle: "Zoom out"
          },
          onAdd: function(t) {
            var e = "leaflet-control-zoom",
              i = b.DomUtil.create("div", e + " leaflet-bar"),
              o = this.options;
            return this._zoomInButton = this._createButton(o.zoomInText, o.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(o.zoomOutText, o.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
          },
          onRemove: function(t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
          },
          disable: function() {
            return this._disabled = !0, this._updateDisabled(), this
          },
          enable: function() {
            return this._disabled = !1, this._updateDisabled(), this
          },
          _zoomIn: function(t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
          },
          _zoomOut: function(t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
          },
          _createButton: function(t, e, i, o, n) {
            var r = b.DomUtil.create("a", i, o);
            return r.innerHTML = t, r.href = "#", r.title = e, b.DomEvent.on(r, "mousedown dblclick", b.DomEvent.stopPropagation).on(r, "click", b.DomEvent.stop).on(r, "click", n, this).on(r, "click", this._refocusOnMap, this), r
          },
          _updateDisabled: function() {
            var t = this._map,
              e = "leaflet-disabled";
            b.DomUtil.removeClass(this._zoomInButton, e), b.DomUtil.removeClass(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMinZoom() || b.DomUtil.addClass(this._zoomOutButton, e), !this._disabled && t._zoom !== t.getMaxZoom() || b.DomUtil.addClass(this._zoomInButton, e)
          }
        }), b.Map.mergeOptions({
          zoomControl: !0
        }), b.Map.addInitHook(function() {
          this.options.zoomControl && (this.zoomControl = new b.Control.Zoom, this.addControl(this.zoomControl))
        }), b.control.zoom = function(t) {
          return new b.Control.Zoom(t)
        }, b.Control.Attribution = b.Control.extend({
          options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
          },
          initialize: function(t) {
            b.setOptions(this, t), this._attributions = {}
          },
          onAdd: function(t) {
            for (var e in (t.attributionControl = this)._container = b.DomUtil.create("div", "leaflet-control-attribution"), b.DomEvent && b.DomEvent.disableClickPropagation(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(), this._container
          },
          setPrefix: function(t) {
            return this.options.prefix = t, this._update(), this
          },
          addAttribution: function(t) {
            return t && (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update()), this
          },
          removeAttribution: function(t) {
            return t && this._attributions[t] && (this._attributions[t]--, this._update()), this
          },
          _update: function() {
            if (this._map) {
              var t = [];
              for (var e in this._attributions) this._attributions[e] && t.push(e);
              var i = [];
              this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
            }
          }
        }), b.Map.mergeOptions({
          attributionControl: !0
        }), b.Map.addInitHook(function() {
          this.options.attributionControl && (new b.Control.Attribution).addTo(this)
        }), b.control.attribution = function(t) {
          return new b.Control.Attribution(t)
        }, b.Control.Scale = b.Control.extend({
          options: {
            position: "bottomleft",
            maxWidth: 100,
            metric: !0,
            imperial: !0
          },
          onAdd: function(t) {
            var e = "leaflet-control-scale",
              i = b.DomUtil.create("div", e),
              o = this.options;
            return this._addScales(o, e + "-line", i), t.on(o.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), i
          },
          onRemove: function(t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
          },
          _addScales: function(t, e, i) {
            t.metric && (this._mScale = b.DomUtil.create("div", e, i)), t.imperial && (this._iScale = b.DomUtil.create("div", e, i))
          },
          _update: function() {
            var t = this._map,
              e = t.getSize().y / 2,
              i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i)
          },
          _updateScales: function(t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
          },
          _updateMetric: function(t) {
            var e = this._getRoundNum(t),
              i = e < 1e3 ? e + " m" : e / 1e3 + " km";
            this._updateScale(this._mScale, i, e / t)
          },
          _updateImperial: function(t) {
            var e, i, o, n = 3.2808399 * t;
            5280 < n ? (e = n / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (o = this._getRoundNum(n), this._updateScale(this._iScale, o + " ft", o / n))
          },
          _updateScale: function(t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
          },
          _getRoundNum: function(t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1),
              i = t / e;
            return e * (i = 10 <= i ? 10 : 5 <= i ? 5 : 3 <= i ? 3 : 2 <= i ? 2 : 1)
          }
        }), b.control.scale = function(t) {
          return new b.Control.Scale(t)
        }, b.Control.Layers = b.Control.extend({
          options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1
          },
          initialize: function(t, e, i) {
            for (var o in b.setOptions(this, i), this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[o], o);
            for (o in e) this._addLayer(e[o], o, !0)
          },
          onAdd: function(t) {
            return this._initLayout(), this._update(), (this._map = t).on("zoomend", this._checkDisabledLayers, this), this._container
          },
          onRemove: function() {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
          },
          addBaseLayer: function(t, e) {
            return this._addLayer(t, e), this._map ? this._update() : this
          },
          addOverlay: function(t, e) {
            return this._addLayer(t, e, !0), this._map ? this._update() : this
          },
          removeLayer: function(t) {
            t.off("add remove", this._onLayerChange, this);
            var e = this._getLayer(b.stamp(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
          },
          expand: function() {
            b.DomUtil.addClass(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._form.clientHeight ? (b.DomUtil.addClass(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : b.DomUtil.removeClass(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
          },
          collapse: function() {
            return b.DomUtil.removeClass(this._container, "leaflet-control-layers-expanded"), this
          },
          _initLayout: function() {
            var t = "leaflet-control-layers",
              e = this._container = b.DomUtil.create("div", t);
            e.setAttribute("aria-haspopup", !0), b.DomEvent.disableClickPropagation(e), b.Browser.touch || b.DomEvent.disableScrollPropagation(e);
            var i = this._form = b.DomUtil.create("form", t + "-list");
            if (this.options.collapsed) {
              b.Browser.android || b.DomEvent.on(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
              }, this);
              var o = this._layersLink = b.DomUtil.create("a", t + "-toggle", e);
              o.href = "#", o.title = "Layers", b.Browser.touch ? b.DomEvent.on(o, "click", b.DomEvent.stop).on(o, "click", this.expand, this) : b.DomEvent.on(o, "focus", this.expand, this), b.DomEvent.on(i, "click", function() {
                setTimeout(b.bind(this._onInputClick, this), 0)
              }, this), this._map.on("click", this.collapse, this)
            } else this.expand();
            this._baseLayersList = b.DomUtil.create("div", t + "-base", i), this._separator = b.DomUtil.create("div", t + "-separator", i), this._overlaysList = b.DomUtil.create("div", t + "-overlays", i), e.appendChild(i)
          },
          _getLayer: function(t) {
            for (var e = 0; e < this._layers.length; e++)
              if (this._layers[e] && b.stamp(this._layers[e].layer) === t) return this._layers[e]
          },
          _addLayer: function(t, e, i) {
            t.on("add remove", this._onLayerChange, this), this._layers.push({
              layer: t,
              name: e,
              overlay: i
            }), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
          },
          _update: function() {
            if (!this._container) return this;
            b.DomUtil.empty(this._baseLayersList), b.DomUtil.empty(this._overlaysList);
            var t, e, i, o, n = 0;
            for (i = 0; i < this._layers.length; i++) o = this._layers[i], this._addItem(o), e = e || o.overlay, t = t || !o.overlay, n += o.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && 1 < n, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
          },
          _onLayerChange: function(t) {
            this._handlingClick || this._update();
            var e = this._getLayer(b.stamp(t.target)),
              i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            i && this._map.fire(i, e)
          },
          _createRadioElement: function(t, e) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
              o = document.createElement("div");
            return o.innerHTML = i, o.firstChild
          },
          _addItem: function(t) {
            var e, i = document.createElement("label"),
              o = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), e.layerId = b.stamp(t.layer), b.DomEvent.on(e, "click", this._onInputClick, this);
            var n = document.createElement("span");
            n.innerHTML = " " + t.name;
            var r = document.createElement("div");
            return i.appendChild(r), r.appendChild(e), r.appendChild(n), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
          },
          _onInputClick: function() {
            var t, e, i, o = this._form.getElementsByTagName("input"),
              n = [],
              r = [];
            this._handlingClick = !0;
            for (var s = o.length - 1; 0 <= s; s--) t = o[s], e = this._getLayer(t.layerId).layer, i = this._map.hasLayer(e), t.checked && !i ? n.push(e) : !t.checked && i && r.push(e);
            for (s = 0; s < r.length; s++) this._map.removeLayer(r[s]);
            for (s = 0; s < n.length; s++) this._map.addLayer(n[s]);
            this._handlingClick = !1, this._refocusOnMap()
          },
          _checkDisabledLayers: function() {
            for (var t, e, i = this._form.getElementsByTagName("input"), o = this._map.getZoom(), n = i.length - 1; 0 <= n; n--) t = i[n], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && o < e.options.minZoom || void 0 !== e.options.maxZoom && o > e.options.maxZoom
          },
          _expand: function() {
            return this.expand()
          },
          _collapse: function() {
            return this.collapse()
          }
        }), b.control.layers = function(t, e, i) {
          return new b.Control.Layers(t, e, i)
        }, b.Map.include({
          _defaultLocateOptions: {
            timeout: 1e4,
            watch: !1
          },
          locate: function(t) {
            if (t = this._locateOptions = b.extend({}, this._defaultLocateOptions, t), !("geolocation" in navigator)) return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
            var e = b.bind(this._handleGeolocationResponse, this),
              i = b.bind(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(e, i, t) : navigator.geolocation.getCurrentPosition(e, i, t), this
          },
          stopLocate: function() {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
          },
          _handleGeolocationError: function(t) {
            var e = t.code,
              i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: e,
              message: "Geolocation error: " + i + "."
            })
          },
          _handleGeolocationResponse: function(t) {
            var e = t.coords.latitude,
              i = t.coords.longitude,
              o = new b.LatLng(e, i),
              n = o.toBounds(t.coords.accuracy),
              r = this._locateOptions;
            if (r.setView) {
              var s = this.getBoundsZoom(n);
              this.setView(o, r.maxZoom ? Math.min(s, r.maxZoom) : s)
            }
            var a = {
              latlng: o,
              bounds: n,
              timestamp: t.timestamp
            };
            for (var l in t.coords) "number" == typeof t.coords[l] && (a[l] = t.coords[l]);
            this.fire("locationfound", a)
          }
        })
      }, {}],
      8: [function(t, e, i) {
        function o() {
          throw new Error("setTimeout has not been defined")
        }

        function n() {
          throw new Error("clearTimeout has not been defined")
        }

        function r(e) {
          if (c === setTimeout) return setTimeout(e, 0);
          if ((c === o || !c) && setTimeout) return c = setTimeout, setTimeout(e, 0);
          try {
            return c(e, 0)
          } catch (t) {
            try {
              return c.call(null, e, 0)
            } catch (t) {
              return c.call(this, e, 0)
            }
          }
        }

        function s() {
          m && p && (m = !1, p.length ? _ = p.concat(_) : f = -1, _.length && a())
        }

        function a() {
          if (!m) {
            var t = r(s);
            m = !0;
            for (var e = _.length; e;) {
              for (p = _, _ = []; ++f < e;) p && p[f].run();
              f = -1, e = _.length
            }
            p = null, m = !1,
              function(e) {
                if (h === clearTimeout) return clearTimeout(e);
                if ((h === n || !h) && clearTimeout) return h = clearTimeout, clearTimeout(e);
                try {
                  h(e)
                } catch (t) {
                  try {
                    return h.call(null, e)
                  } catch (t) {
                    return h.call(this, e)
                  }
                }
              }(t)
          }
        }

        function l(t, e) {
          this.fun = t, this.array = e
        }

        function u() {}
        var c, h, d = e.exports = {};
        ! function() {
          try {
            c = "function" == typeof setTimeout ? setTimeout : o
          } catch (t) {
            c = o
          }
          try {
            h = "function" == typeof clearTimeout ? clearTimeout : n
          } catch (t) {
            h = n
          }
        }();
        var p, _ = [],
          m = !1,
          f = -1;
        d.nextTick = function(t) {
          var e = new Array(arguments.length - 1);
          if (1 < arguments.length)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
          _.push(new l(t, e)), 1 !== _.length || m || r(a)
        }, l.prototype.run = function() {
          this.fun.apply(null, this.array)
        }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = u, d.addListener = u, d.once = u, d.off = u, d.removeListener = u, d.removeAllListeners = u, d.emit = u, d.prependListener = u, d.prependOnceListener = u, d.listeners = function(t) {
          return []
        }, d.binding = function(t) {
          throw new Error("process.binding is not supported")
        }, d.cwd = function() {
          return "/"
        }, d.chdir = function(t) {
          throw new Error("process.chdir is not supported")
        }, d.umask = function() {
          return 0
        }
      }, {}],
      9: [function(t, e, o) {
        ! function(n, f) {
          "use strict";

          function r(e, i, o) {
            e._eventHandlers = e._eventHandlers || [{
              element: e.scroller,
              handler: function(t) {
                e.scroll(t)
              },
              type: "scroll"
            }, {
              element: e.bar,
              handler: function(t) {
                t.preventDefault ? t.preventDefault() : t.returnValue = !1, e.selection(), e.drag.now = 1
              },
              type: "touchstart mousedown"
            }, {
              element: document,
              handler: function() {
                e.selection(1), e.drag.now = 0
              },
              type: "mouseup blur touchend"
            }, {
              element: e.bar,
              handler: function(t) {
                2 != t.button && e._pos0(t)
              },
              type: "touchstart mousedown"
            }, {
              element: document,
              handler: function(t) {
                e.drag.now && e.drag(t)
              },
              type: "mousemove touchmove"
            }, {
              element: n,
              handler: function() {
                e.update()
              },
              type: "resize"
            }, {
              element: e.root,
              handler: function() {
                e.update()
              },
              type: "sizeChange"
            }], l(e._eventHandlers, function(t) {
              t.element && i(t.element, t.type, t.handler, o)
            })
          }

          function s(t, e, i) {
            var o = "data-baron-" + e;
            if ("on" == i) t.setAttribute(o, "inited");
            else {
              if ("off" != i) return t.getAttribute(o);
              t.removeAttribute(o)
            }
          }

          function a(t) {
            var e = {};
            for (var i in t = t || {}) t.hasOwnProperty(i) && (e[i] = t[i]);
            return e
          }

          function p(t) {
            if (this.events && this.events[t])
              for (var e = 0; e < this.events[t].length; e++) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.events[t][e].apply(this, i)
              }
          }
          if (n) {
            var t = n.baron,
              e = n.jQuery,
              _ = {
                v: {
                  x: "Y",
                  pos: "top",
                  crossPos: "left",
                  size: "height",
                  crossSize: "width",
                  client: "clientHeight",
                  crossClient: "clientWidth",
                  offset: "offsetHeight",
                  crossOffset: "offsetWidth",
                  offsetPos: "offsetTop",
                  scroll: "scrollTop",
                  scrollSize: "scrollHeight"
                },
                h: {
                  x: "X",
                  pos: "left",
                  crossPos: "top",
                  size: "width",
                  crossSize: "height",
                  client: "clientWidth",
                  crossClient: "clientHeight",
                  offset: "offsetWidth",
                  crossOffset: "offsetHeight",
                  offsetPos: "offsetLeft",
                  scroll: "scrollLeft",
                  scrollSize: "scrollWidth"
                }
              },
              l = function(t, e) {
                var i = 0;
                for (t.length !== f && t !== n || (t = [t]); t[i];) e.call(this, t[i], i), i++
              },
              o = function(t) {
                var e, i;
                return e = (i = (t = t || {}).$ || n.jQuery)(t.root || t.scroller), new o.fn.constructor(e, t, i)
              };
            o.fn = {
              constructor: function(t, e, i) {
                var o = function(t) {
                  var n = a(t);
                  n.direction = n.direction || "v";
                  var r = t.event || function(t, e, i, o) {
                    n.$(t)[o || "on"](e, i)
                  };
                  return n.event = function(t, e, i, o) {
                    l(t, function(t) {
                      r(t, e, i, o)
                    })
                  }, n
                }(e);
                o.$ = i, l.call(this, t, function(t, e) {
                  var i = a(o);
                  o.root && o.scroller ? (i.scroller = o.$(o.scroller, t), i.scroller.length || (i.scroller = t)) : i.scroller = t, i.root = t, this[e] = function(t) {
                    if (!s(t.root, t.direction)) {
                      var e = new u.prototype.constructor(t);
                      return r(e, t.event, "on"), s(e.root, t.direction, "on"), e.update(), e
                    }
                  }(i), this.length = e + 1
                }), this.params = o
              },
              dispose: function() {
                var e = this.params;
                l(this, function(t) {
                  t.dispose(e)
                }), this.params = null
              },
              update: function() {
                for (var t = 0; this[t];) this[t].update.apply(this[t], arguments), t++
              },
              baron: function(e) {
                return e.root = [], e.scroller = this.params.scroller, l.call(this, this, function(t) {
                  e.root.push(t.root)
                }), e.direction = "v" == this.params.direction ? "h" : "v", e._chain = !0, o(e)
              }
            };
            var u = {};
            u.prototype = {
              constructor: function(o) {
                function t(t, e) {
                  return s(t, e)[0]
                }

                function r() {
                  return l[this.origin.client] - this.barTopLimit - this.bar[this.origin.offset]
                }

                function e() {
                  return !1
                }
                var s, a, i, l, n, u, c, h, d;
                return d = h = (new Date).getTime(), s = this.$ = o.$, this.event = o.event, this.events = {}, this.root = o.root, this.scroller = t(o.scroller), this.bar = t(o.bar, this.root), l = this.track = t(o.track, this.root), !this.track && this.bar && (l = this.bar.parentNode), this.clipper = this.scroller.parentNode, this.direction = o.direction, this.origin = _[this.direction], this.barOnCls = o.barOnCls, this.barTopLimit = 0, c = 1e3 * o.pause || 0, this.cursor = function(t) {
                  return t["client" + this.origin.x] || (((t.originalEvent || t).touches || {})[0] || {})["page" + this.origin.x]
                }, this.pos = function(t) {
                  var e = "page" + this.origin.x + "Offset",
                    i = this.scroller[e] ? e : this.origin.scroll;
                  return t !== f && (this.scroller[i] = t), this.scroller[i]
                }, this.rpos = function(t) {
                  var e = this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client];
                  return (t ? this.pos(t * e) : this.pos()) / (e || 1)
                }, this.barOn = function(t) {
                  this.barOnCls && (t || this.scroller[this.origin.client] >= this.scroller[this.origin.scrollSize] ? s(this.root).removeClass(this.barOnCls) : s(this.root).addClass(this.barOnCls))
                }, this._pos0 = function(t) {
                  i = this.cursor(t) - a
                }, this.drag = function(t) {
                  this.scroller[this.origin.scroll] = function(t) {
                    return (t - this.barTopLimit) / r.call(this)
                  }.call(this, this.cursor(t) - i) * (this.scroller[this.origin.scrollSize] - this.scroller[this.origin.client])
                }, this.selection = function(t) {
                  this.event(document, "selectpos selectstart", e, t ? "off" : "on")
                }, this.resize = function() {
                  function t() {
                    var t = e.scroller[e.origin.crossOffset] - e.scroller[e.origin.crossClient];
                    o.freeze && !e.clipper.style[e.origin.crossSize] && s(e.clipper).css(e.origin.crossSize, e.clipper[e.origin.crossClient] - t + "px"), s(e.scroller).css(e.origin.crossSize, e.clipper[e.origin.crossClient] + t + "px"), Array.prototype.unshift.call(arguments, "resize"), p.apply(e, arguments), d = (new Date).getTime()
                  }
                  var e = this,
                    i = 0;
                  (new Date).getTime() - d < c && (clearTimeout(n), i = c), i ? n = setTimeout(t, i) : t()
                }, this.scroll = function() {
                  function t() {
                    n.bar && (i = (l[n.origin.client] - n.barTopLimit) * n.scroller[n.origin.client] / n.scroller[n.origin.scrollSize], e != i && (function(t) {
                      var e = this.barMinSize || 20;
                      0 < t && t < e && (t = e), this.bar && s(this.bar).css(this.origin.size, parseInt(t, 10) + "px")
                    }.call(n, i), e = i), a = function(t) {
                      return t * r.call(this) + this.barTopLimit
                    }.call(n, n.rpos()), function(t) {
                      this.bar && s(this.bar).css(this.origin.pos, +t + "px")
                    }.call(n, a)), Array.prototype.unshift.call(arguments, "scroll"), p.apply(n, arguments), h = (new Date).getTime()
                  }
                  var e, i, o = 0,
                    n = this;
                  (new Date).getTime() - h < c && (clearTimeout(u), o = c), o ? u = setTimeout(t, o) : t()
                }, this
              },
              update: function(t) {
                return p.call(this, "upd", t), this.resize(1), this.barOn(), this.scroll(), this
              },
              dispose: function(t) {
                r(this, this.event, "off"), s(this.root, t.direction, "off"), e(this.scroller).css(this.origin.crossSize, ""), this.barOn(!0), p.call(this, "dispose")
              },
              on: function(t, e, i) {
                for (var o = t.split(" "), n = 0; n < o.length; n++) "init" == o[n] ? e.call(this, i) : (this.events[o[n]] = this.events[o[n]] || [], this.events[o[n]].push(function(t) {
                  e.call(this, t || i)
                }))
              }
            }, o.fn.constructor.prototype = o.fn, u.prototype.constructor.prototype = u.prototype, o.noConflict = function() {
              return n.baron = t, o
            }, o.version = "0.6.6", e && e.fn && (e.fn.baron = o), n.baron = o;
            var c = function(t) {
              function r(t, e) {
                l < (u.minView || 0) && (e = f), e !== f ? (e += "px", this.$(a[t]).css(this.origin.pos, e).addClass(u.outside)) : this.$(a[t]).css(this.origin.pos, "").removeClass(u.outside)
              }

              function s(t) {
                try {
                  i = document.createEvent("WheelEvent"), i.initWebKitWheelEvent(t.originalEvent.wheelDeltaX, t.originalEvent.wheelDeltaY), o.dispatchEvent(i), t.preventDefault()
                } catch (t) {}
              }

              function e(t) {
                var e;
                for (var i in t) u[i] = t[i];
                if (a = this.$(u.elements, this.scroller)) {
                  l = this.scroller[this.origin.client];
                  for (var o = 0; o < a.length; o++)(e = {})[this.origin.size] = a[o][this.origin.offset], a[o].parentNode !== this.scroller && this.$(a[o].parentNode).css(e), (e = {})[this.origin.crossSize] = a[o].parentNode[this.origin.crossClient], this.$(a[o]).css(e), l -= a[o][this.origin.offset], d[o] = a[o].parentNode[this.origin.offsetPos], c[o] = c[o - 1] || 0, h[o] = h[o - 1] || Math.min(d[o], 0), a[o - 1] && (c[o] += a[o - 1][this.origin.offset], h[o] += a[o - 1][this.origin.offset]), 0 == o && 0 == d[o] || (this.event(a[o], "mousewheel", s, "off"), this.event(a[o], "mousewheel", s));
                  u.limiter && a[0] && (this.track && this.track != this.scroller ? ((e = {})[this.origin.pos] = a[0].parentNode[this.origin.offset], this.$(this.track).css(e)) : this.barTopLimit = a[0].parentNode[this.origin.offset], this.scroll()), !1 === u.limiter && (this.barTopLimit = 0)
                }
                var n = {
                  element: a,
                  handler: function() {
                    for (var t, e = _(this)[0].parentNode.offsetTop, i = 0; i < a.length; i++) a[i] === this && (t = i);
                    var o = e - c[t];
                    u.scroll ? u.scroll({
                      x1: m.scroller.scrollTop,
                      x2: o
                    }) : m.scroller.scrollTop = o
                  },
                  type: "click"
                };
                u.clickable && (this._eventHandlers.push(n), p(n.element, n.type, n.handler, "off"), p(n.element, n.type, n.handler, "on"))
              }
              var a, l, u = {
                  outside: "",
                  before: "",
                  after: "",
                  past: "",
                  future: "",
                  radius: 0,
                  minView: 0
                },
                c = [],
                h = [],
                d = [],
                o = this.scroller,
                p = this.event,
                _ = this.$,
                m = this;
              this.on("init", e, t), this.on("init scroll", function() {
                var t, e, i = [];
                if (a) {
                  for (var o, n = 0; n < a.length; n++) t = 0, e = d[n] - this.pos() < h[n] + u.radius ? (t = 1, c[n]) : d[n] - this.pos() > h[n] + l - u.radius ? (t = 2, c[n] + l) : (t = 3, f), t != i[n] && (r.call(this, n, e), i[n] = t, o = !0);
                  if (o)
                    for (n = 0; n < a.length; n++) 1 == i[n] && u.past && this.$(a[n]).addClass(u.past).removeClass(u.future), 2 == i[n] && u.future && this.$(a[n]).addClass(u.future).removeClass(u.past), 3 == i[n] && (u.future || u.past) && this.$(a[n]).removeClass(u.past).removeClass(u.future), i[n] != i[n + 1] && 1 == i[n] && u.before ? this.$(a[n]).addClass(u.before).removeClass(u.after) : i[n] != i[n - 1] && 2 == i[n] && u.after ? this.$(a[n]).addClass(u.after).removeClass(u.before) : this.$(a[n]).removeClass(u.before).removeClass(u.after)
                }
              }), this.on("resize upd", function(t) {
                e.call(this, t && t.fix)
              })
            };
            o.fn.fix = function(t) {
              for (var e = 0; this[e];) c.call(this[e], t), e++;
              return this
            };
            var h = function(e) {
              var t, i, o, r, s = this;
              r = e.screen || .9, e.forward && (t = this.$(e.forward, this.clipper), this.event(t, "click", function() {
                var t = s.pos() - e.delta || 30;
                s.pos(t)
              })), e.backward && (i = this.$(e.backward, this.clipper), this.event(i, "click", function() {
                var t = s.pos() + e.delta || 30;
                s.pos(t)
              })), !e.track || (o = !0 === e.track ? this.track : this.$(e.track, this.clipper)[0]) && this.event(o, "mousedown", function(t) {
                var e = t["offset" + s.origin.x],
                  i = s.bar[s.origin.offsetPos],
                  o = 0;
                e < i ? o = -1 : e > i + s.bar[s.origin.offset] && (o = 1);
                var n = s.pos() + o * r * s.scroller[s.origin.client];
                s.pos(n)
              })
            };
            o.fn.controls = function(t) {
              for (var e = 0; this[e];) h.call(this[e], t), e++;
              return this
            };
            var d = function(a) {
              function l() {
                return y.scroller[y.origin.scroll] + y.scroller[y.origin.offset]
              }

              function u() {
                return y.scroller[y.origin.scrollSize]
              }

              function c(t) {
                (o = t) ? (e(), i = setInterval(e, 200)) : clearInterval(i)
              }

              function e() {
                var t, e, i = {},
                  o = l(),
                  n = u(),
                  r = 1 == b;
                if ((e = 0) < b && (e = 40), t = function(t, e) {
                    var i = 5e-4 * t;
                    return Math.floor(e - i * (t + 550))
                  }(w, e), n - w <= o && -1 < b ? r && (w += t) : w = 0, w < 0 && (w = 0), i[_] = w + "px", y.scroller[y.origin.client] <= u()) {
                  y.$(p).css(i);
                  for (var s = 0; s < g.length; s++) y.$(g[s].self).css(g[s].property, Math.min(w / m * 100, 100) + "%")
                }
                v && w && y.$(y.root).addClass(v), 0 == w && a.onCollapse && a.onCollapse(), b = 0, h = setTimeout(function() {
                  b = -1
                }, x), f && m < w && !d && (f(), d = !0), 0 == w ? C++ : C = 0, 1 < C && (c(!1), d = !1, v && y.$(y.root).removeClass(v))
              }
              var i, h, d, o, p = this.$(a.block),
                _ = a.size || this.origin.size,
                m = a.limit || 80,
                f = a.onExpand,
                g = a.elements || [],
                v = a.inProgress || "",
                y = this,
                b = 0,
                C = 0,
                w = 0,
                x = a.waiting || 500;
              this.on("init", function() {
                c(!0)
              }), this.on("dispose", function() {
                c(!1)
              }), this.event(this.scroller, "mousewheel DOMMouseScroll", function(t) {
                (t.wheelDelta < 0 || t.originalEvent && t.originalEvent.wheelDelta < 0 || 0 < t.detail) && (b = 1, clearTimeout(h), !o && l() >= u() && c(!0))
              })
            };
            o.fn.pull = function(t) {
              for (var e = 0; this[e];) d.call(this[e], t), e++;
              return this
            }
          }
        }(window)
      }, {}]
    }, {}, [2])(2)
  }, module.exports = zm()
}, function(t, e, i) {
  "use strict";
  i.r(e);
  e.default = function() {
    ! function(t, e, i, o) {
      try {
        var n = {
            element: document.querySelector(t),
            active: !1
          },
          r = document.querySelector(e),
          s = document.querySelector(i);
        n.element.addEventListener("click", function() {
          !1 === n.active ? (n.active = !0, r.style.height = s.clientHeight + "px", r.classList.add(o)) : (n.active = !1, r.style.height = "0px", r.classList.remove(o))
        })
      } catch (t) {}
    }(".header__hamburger", '[data-slide="1"]', ".header__nav", "slide-active")
  }
}, function(t, e, i) {
  "use strict";
  i.r(e);
  e.default = function() {
    function t(e, i) {
      try {
        var o = document.querySelector(i);
        o.addEventListener("submit", function(t) {
          t.preventDefault(), o.querySelector(".lds-spinner").style.display = "inline-block", fetch(e, {
            method: "POST",
            body: new FormData(o)
          }).then(function() {
            o.querySelector(".lds-spinner").style.display = "none", o.querySelector(".confirm").style.display = "inline-block";
            var t = document.createElement("div");
            t.style.color = "green", t.style.marginTop = "10px", t.textContent = ".contactpage__feed" === i ? "Спасибо за отзыв и ваше доверие!" : "Спасибо, мы скоро с вами свяжемся", o.appendChild(t), o.querySelectorAll("input").forEach(function(t) {
              t.value = ""
            }), o.querySelectorAll("textarea").forEach(function(t) {
              t.value = ""
            }), setTimeout(function() {
              o.querySelector(".confirm").style.display = "none", t.remove()
            }, 1e4)
          }).catch(function() {
            var t = document.createElement("div");
            t.style.color = "red", t.style.marginTop = "10px", t.textContent = "Что-то пошло не так, попробуйте, пожалуйста, позже", o.appendChild(t), o.querySelector(".lds-spinner").style.display = "none", o.querySelector(".reject").style.display = "inline-block", setTimeout(function() {
              o.querySelector(".reject").style.display = "none", t.remove()
            }, 5e3)
          })
        })
      } catch (t) {}
    }
    t(".../reply.php", ".reply__body > form"), t("...feed.php", ".contacts__feed")
  }
}, function(t, e, i) {
  "use strict";
  i.r(e);
  e.default = function() {
    ! function() {
      try {
        var t = document.querySelectorAll(".specialistpage__item-more"),
          i = document.querySelectorAll(".specialistpage__item-title"),
          o = document.querySelectorAll(".specialistpage__item-photo"),
          n = document.querySelectorAll(".specialistpage__item-position"),
          r = document.querySelectorAll(".specialistpage__item-specialization > span"),
          s = document.querySelectorAll(".specialistpage__item-phone-1"),
          a = document.querySelectorAll(".specialistpage__item-phone-2"),
          l = document.querySelectorAll(".specialistpage__item-mail"),
          u = document.querySelectorAll(".specialistpage__item-bio"),
          c = document.querySelector(".modal__specialist-title"),
          h = document.querySelector(".modal__specialist-position"),
          d = document.querySelector(".modal__specialist-specialization"),
          p = document.querySelector(".modal__specialist-photo"),
          _ = document.querySelectorAll(".modal__specialist-phones > a"),
          m = document.querySelector(".modal__specialist-mail > a"),
          f = document.querySelector(".modal__specialist-text");
        t.forEach(function(t, e) {
          t.addEventListener("click", function() {
            c.textContent = i[e].textContent, h.innerHTML = n[e].innerHTML, d.innerHTML = "Специализация: <span>".concat(r[e].textContent, "</span>");
            var t = o[e].getAttribute("src");
            p.setAttribute("src", "".concat(t)), _[0].textContent = s[e].textContent, _[1].textContent = a[e].textContent, m.textContent = l[e].textContent, m.setAttribute("href", "mailto:".concat(l[e].textContent)), f.innerHTML = u[e].innerHTML
          })
        })
      } catch (t) {}
    }(),
    function() {
      try {
        var t = document.querySelectorAll(".diseasepage__trigger"),
          i = document.querySelectorAll(".diseasepage__item-title"),
          o = document.querySelectorAll(".diseasepage__item"),
          n = document.querySelectorAll(".diseasepage__item-text"),
          r = document.querySelector(".modal__info > .contenttitle"),
          s = document.querySelector(".modal__info-img"),
          a = document.querySelector(".modal__info-text");
        t.forEach(function(t, e) {
          t.addEventListener("click", function() {
            r.textContent = i[e].textContent;
            var t = o[e].style.backgroundImage.slice(4, -1).replace(/"/g, "");
            s.setAttribute("src", "".concat(t)), a.innerHTML = n[e].innerHTML
          })
        })
      } catch (t) {}
    }(),
    function() {
      try {
        var t = document.querySelectorAll(".newsslider__slide"),
          i = document.querySelectorAll(".newsslider__img"),
          o = document.querySelectorAll(".newsslider__title"),
          n = document.querySelectorAll(".newsslider__full"),
          r = document.querySelector(".modal__body > .modal__info-img"),
          s = document.querySelector(".modal__body > .contenttitle"),
          a = document.querySelector(".modal__body > .modal__info-text");
        t.forEach(function(t, e) {
          t.addEventListener("click", function() {
            var t = i[e].getAttribute("src");
            r.setAttribute("src", "".concat(t)), s.textContent = o[e].textContent, a.innerHTML = n[e].innerHTML
          })
        })
      } catch (t) {}
    }()
  }
}]);