import {
  m as nw,
  o as sw,
  r as ow,
  s as aw,
  t as cw,
  v as uw,
  w as hw,
  x as lw,
  y as fw,
  z as dw,
  A as pw,
  B as gw,
  D as yw,
  E as mw,
  G as vw,
  H as kc,
  I as Pf,
  J as ce,
  K as Of,
  L as Lo,
  M as ww,
  N as Rf,
  O as bw,
  Q as _w,
  R as Ew,
  S as On,
  T as $r,
  U as Iw,
  V as Af,
  X as Br,
  Y as Tf,
  $ as Hc,
  _ as xw,
} from "./index-iAGWl8Bb.js";
function Bc(s) {
  return globalThis.Buffer != null
    ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength)
    : s;
}
function Cf(s = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Bc(globalThis.Buffer.allocUnsafe(s))
    : new Uint8Array(s);
}
function Rc(s, t) {
  t || (t = s.reduce((a, h) => a + h.length, 0));
  const r = Cf(t);
  let n = 0;
  for (const a of s) r.set(a, n), (n += a.length);
  return Bc(r);
}
const nl = {
  ...nw,
  ...sw,
  ...ow,
  ...aw,
  ...cw,
  ...uw,
  ...hw,
  ...lw,
  ...fw,
  ...dw,
};
function Nf(s, t, r, n) {
  return {
    name: s,
    prefix: t,
    encoder: { name: s, prefix: t, encode: r },
    decoder: { decode: n },
  };
}
const sl = Nf(
    "utf8",
    "u",
    (s) => "u" + new TextDecoder("utf8").decode(s),
    (s) => new TextEncoder().encode(s.substring(1))
  ),
  hc = Nf(
    "ascii",
    "a",
    (s) => {
      let t = "a";
      for (let r = 0; r < s.length; r++) t += String.fromCharCode(s[r]);
      return t;
    },
    (s) => {
      s = s.substring(1);
      const t = Cf(s.length);
      for (let r = 0; r < s.length; r++) t[r] = s.charCodeAt(r);
      return t;
    }
  ),
  $f = {
    utf8: sl,
    "utf-8": sl,
    hex: nl.base16,
    latin1: hc,
    ascii: hc,
    binary: hc,
    ...nl,
  };
function gr(s, t = "utf8") {
  const r = $f[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Bc(globalThis.Buffer.from(s, "utf-8"))
    : r.decoder.decode(`${r.prefix}${s}`);
}
function sr(s, t = "utf8") {
  const r = $f[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(s.buffer, s.byteOffset, s.byteLength).toString(
        "utf8"
      )
    : r.encoder.encode(s).substring(1);
}
var ol = function (s, t, r) {
    if (r || arguments.length === 2)
      for (var n = 0, a = t.length, h; n < a; n++)
        (h || !(n in t)) &&
          (h || (h = Array.prototype.slice.call(t, 0, n)), (h[n] = t[n]));
    return s.concat(h || Array.prototype.slice.call(t));
  },
  Sw = (function () {
    function s(t, r, n) {
      (this.name = t),
        (this.version = r),
        (this.os = n),
        (this.type = "browser");
    }
    return s;
  })(),
  Pw = (function () {
    function s(t) {
      (this.version = t),
        (this.type = "node"),
        (this.name = "node"),
        (this.os = process.platform);
    }
    return s;
  })(),
  Ow = (function () {
    function s(t, r, n, a) {
      (this.name = t),
        (this.version = r),
        (this.os = n),
        (this.bot = a),
        (this.type = "bot-device");
    }
    return s;
  })(),
  Rw = (function () {
    function s() {
      (this.type = "bot"),
        (this.bot = !0),
        (this.name = "bot"),
        (this.version = null),
        (this.os = null);
    }
    return s;
  })(),
  Aw = (function () {
    function s() {
      (this.type = "react-native"),
        (this.name = "react-native"),
        (this.version = null),
        (this.os = null);
    }
    return s;
  })(),
  Tw =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  Cw =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  al = 3,
  Nw = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Tw],
  ],
  cl = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function $w(s) {
  return s
    ? ul(s)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Aw()
    : typeof navigator < "u"
    ? ul(navigator.userAgent)
    : jw();
}
function Dw(s) {
  return (
    s !== "" &&
    Nw.reduce(function (t, r) {
      var n = r[0],
        a = r[1];
      if (t) return t;
      var h = a.exec(s);
      return !!h && [n, h];
    }, !1)
  );
}
function ul(s) {
  var t = Dw(s);
  if (!t) return null;
  var r = t[0],
    n = t[1];
  if (r === "searchbot") return new Rw();
  var a = n[1] && n[1].split(".").join("_").split("_").slice(0, 3);
  a
    ? a.length < al && (a = ol(ol([], a, !0), Mw(al - a.length), !0))
    : (a = []);
  var h = a.join("."),
    f = Lw(s),
    g = Cw.exec(s);
  return g && g[1] ? new Ow(r, h, f, g[1]) : new Sw(r, h, f);
}
function Lw(s) {
  for (var t = 0, r = cl.length; t < r; t++) {
    var n = cl[t],
      a = n[0],
      h = n[1],
      f = h.exec(s);
    if (f) return a;
  }
  return null;
}
function jw() {
  var s = typeof process < "u" && process.version;
  return s ? new Pw(process.version.slice(1)) : null;
}
function Mw(s) {
  for (var t = [], r = 0; r < s; r++) t.push("0");
  return t;
}
const Uw = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
  },
};
var cs = {};
(function (s) {
  const t = yw,
    r = mw,
    n = pw,
    a = gw,
    h = (T) => T == null,
    f = Symbol("encodeFragmentIdentifier");
  function g(T) {
    switch (T.arrayFormat) {
      case "index":
        return (L) => (z, q) => {
          const x = z.length;
          return q === void 0 ||
            (T.skipNull && q === null) ||
            (T.skipEmptyString && q === "")
            ? z
            : q === null
            ? [...z, [_(L, T), "[", x, "]"].join("")]
            : [...z, [_(L, T), "[", _(x, T), "]=", _(q, T)].join("")];
        };
      case "bracket":
        return (L) => (z, q) =>
          q === void 0 ||
          (T.skipNull && q === null) ||
          (T.skipEmptyString && q === "")
            ? z
            : q === null
            ? [...z, [_(L, T), "[]"].join("")]
            : [...z, [_(L, T), "[]=", _(q, T)].join("")];
      case "colon-list-separator":
        return (L) => (z, q) =>
          q === void 0 ||
          (T.skipNull && q === null) ||
          (T.skipEmptyString && q === "")
            ? z
            : q === null
            ? [...z, [_(L, T), ":list="].join("")]
            : [...z, [_(L, T), ":list=", _(q, T)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        const L = T.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (z) => (q, x) =>
          x === void 0 ||
          (T.skipNull && x === null) ||
          (T.skipEmptyString && x === "")
            ? q
            : ((x = x === null ? "" : x),
              q.length === 0
                ? [[_(z, T), L, _(x, T)].join("")]
                : [[q, _(x, T)].join(T.arrayFormatSeparator)]);
      }
      default:
        return (L) => (z, q) =>
          q === void 0 ||
          (T.skipNull && q === null) ||
          (T.skipEmptyString && q === "")
            ? z
            : q === null
            ? [...z, _(L, T)]
            : [...z, [_(L, T), "=", _(q, T)].join("")];
    }
  }
  function b(T) {
    let L;
    switch (T.arrayFormat) {
      case "index":
        return (z, q, x) => {
          if (
            ((L = /\[(\d*)\]$/.exec(z)), (z = z.replace(/\[\d*\]$/, "")), !L)
          ) {
            x[z] = q;
            return;
          }
          x[z] === void 0 && (x[z] = {}), (x[z][L[1]] = q);
        };
      case "bracket":
        return (z, q, x) => {
          if (((L = /(\[\])$/.exec(z)), (z = z.replace(/\[\]$/, "")), !L)) {
            x[z] = q;
            return;
          }
          if (x[z] === void 0) {
            x[z] = [q];
            return;
          }
          x[z] = [].concat(x[z], q);
        };
      case "colon-list-separator":
        return (z, q, x) => {
          if (((L = /(:list)$/.exec(z)), (z = z.replace(/:list$/, "")), !L)) {
            x[z] = q;
            return;
          }
          if (x[z] === void 0) {
            x[z] = [q];
            return;
          }
          x[z] = [].concat(x[z], q);
        };
      case "comma":
      case "separator":
        return (z, q, x) => {
          const M = typeof q == "string" && q.includes(T.arrayFormatSeparator),
            H =
              typeof q == "string" &&
              !M &&
              P(q, T).includes(T.arrayFormatSeparator);
          q = H ? P(q, T) : q;
          const ue =
            M || H
              ? q.split(T.arrayFormatSeparator).map((ae) => P(ae, T))
              : q === null
              ? q
              : P(q, T);
          x[z] = ue;
        };
      case "bracket-separator":
        return (z, q, x) => {
          const M = /(\[\])$/.test(z);
          if (((z = z.replace(/\[\]$/, "")), !M)) {
            x[z] = q && P(q, T);
            return;
          }
          const H =
            q === null
              ? []
              : q.split(T.arrayFormatSeparator).map((ue) => P(ue, T));
          if (x[z] === void 0) {
            x[z] = H;
            return;
          }
          x[z] = [].concat(x[z], H);
        };
      default:
        return (z, q, x) => {
          if (x[z] === void 0) {
            x[z] = q;
            return;
          }
          x[z] = [].concat(x[z], q);
        };
    }
  }
  function y(T) {
    if (typeof T != "string" || T.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function _(T, L) {
    return L.encode ? (L.strict ? t(T) : encodeURIComponent(T)) : T;
  }
  function P(T, L) {
    return L.decode ? r(T) : T;
  }
  function N(T) {
    return Array.isArray(T)
      ? T.sort()
      : typeof T == "object"
      ? N(Object.keys(T))
          .sort((L, z) => Number(L) - Number(z))
          .map((L) => T[L])
      : T;
  }
  function B(T) {
    const L = T.indexOf("#");
    return L !== -1 && (T = T.slice(0, L)), T;
  }
  function $(T) {
    let L = "";
    const z = T.indexOf("#");
    return z !== -1 && (L = T.slice(z)), L;
  }
  function Q(T) {
    T = B(T);
    const L = T.indexOf("?");
    return L === -1 ? "" : T.slice(L + 1);
  }
  function se(T, L) {
    return (
      L.parseNumbers &&
      !Number.isNaN(Number(T)) &&
      typeof T == "string" &&
      T.trim() !== ""
        ? (T = Number(T))
        : L.parseBooleans &&
          T !== null &&
          (T.toLowerCase() === "true" || T.toLowerCase() === "false") &&
          (T = T.toLowerCase() === "true"),
      T
    );
  }
  function le(T, L) {
    (L = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      L
    )),
      y(L.arrayFormatSeparator);
    const z = b(L),
      q = Object.create(null);
    if (typeof T != "string" || ((T = T.trim().replace(/^[?#&]/, "")), !T))
      return q;
    for (const x of T.split("&")) {
      if (x === "") continue;
      let [M, H] = n(L.decode ? x.replace(/\+/g, " ") : x, "=");
      (H =
        H === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(L.arrayFormat)
          ? H
          : P(H, L)),
        z(P(M, L), H, q);
    }
    for (const x of Object.keys(q)) {
      const M = q[x];
      if (typeof M == "object" && M !== null)
        for (const H of Object.keys(M)) M[H] = se(M[H], L);
      else q[x] = se(M, L);
    }
    return L.sort === !1
      ? q
      : (L.sort === !0
          ? Object.keys(q).sort()
          : Object.keys(q).sort(L.sort)
        ).reduce((x, M) => {
          const H = q[M];
          return (
            H && typeof H == "object" && !Array.isArray(H)
              ? (x[M] = N(H))
              : (x[M] = H),
            x
          );
        }, Object.create(null));
  }
  (s.extract = Q),
    (s.parse = le),
    (s.stringify = (T, L) => {
      if (!T) return "";
      (L = Object.assign(
        {
          encode: !0,
          strict: !0,
          arrayFormat: "none",
          arrayFormatSeparator: ",",
        },
        L
      )),
        y(L.arrayFormatSeparator);
      const z = (H) =>
          (L.skipNull && h(T[H])) || (L.skipEmptyString && T[H] === ""),
        q = g(L),
        x = {};
      for (const H of Object.keys(T)) z(H) || (x[H] = T[H]);
      const M = Object.keys(x);
      return (
        L.sort !== !1 && M.sort(L.sort),
        M.map((H) => {
          const ue = T[H];
          return ue === void 0
            ? ""
            : ue === null
            ? _(H, L)
            : Array.isArray(ue)
            ? ue.length === 0 && L.arrayFormat === "bracket-separator"
              ? _(H, L) + "[]"
              : ue.reduce(q(H), []).join("&")
            : _(H, L) + "=" + _(ue, L);
        })
          .filter((H) => H.length > 0)
          .join("&")
      );
    }),
    (s.parseUrl = (T, L) => {
      L = Object.assign({ decode: !0 }, L);
      const [z, q] = n(T, "#");
      return Object.assign(
        { url: z.split("?")[0] || "", query: le(Q(T), L) },
        L && L.parseFragmentIdentifier && q
          ? { fragmentIdentifier: P(q, L) }
          : {}
      );
    }),
    (s.stringifyUrl = (T, L) => {
      L = Object.assign({ encode: !0, strict: !0, [f]: !0 }, L);
      const z = B(T.url).split("?")[0] || "",
        q = s.extract(T.url),
        x = s.parse(q, { sort: !1 }),
        M = Object.assign(x, T.query);
      let H = s.stringify(M, L);
      H && (H = `?${H}`);
      let ue = $(T.url);
      return (
        T.fragmentIdentifier &&
          (ue = `#${L[f] ? _(T.fragmentIdentifier, L) : T.fragmentIdentifier}`),
        `${z}${H}${ue}`
      );
    }),
    (s.pick = (T, L, z) => {
      z = Object.assign({ parseFragmentIdentifier: !0, [f]: !1 }, z);
      const { url: q, query: x, fragmentIdentifier: M } = s.parseUrl(T, z);
      return s.stringifyUrl(
        { url: q, query: a(x, L), fragmentIdentifier: M },
        z
      );
    }),
    (s.exclude = (T, L, z) => {
      const q = Array.isArray(L) ? (x) => !L.includes(x) : (x, M) => !L(x, M);
      return s.pick(T, q, z);
    });
})(cs);
const qw = ":";
function zw(s) {
  const [t, r] = s.split(qw);
  return { namespace: t, reference: r };
}
function kw(s, t = []) {
  const r = [];
  return (
    Object.keys(s).forEach((n) => {
      if (t.length && !t.includes(n)) return;
      const a = s[n];
      r.push(...a.accounts);
    }),
    r
  );
}
function Df(s, t) {
  return s.includes(":") ? [s] : t.chains || [];
}
const Lf = "base10",
  nr = "base16",
  Ac = "base64pad",
  Kc = "utf8",
  jf = 0,
  Yi = 1,
  Hw = 0,
  hl = 1,
  Tc = 12,
  Fc = 32;
function Bw() {
  const s = Of.generateKeyPair();
  return { privateKey: sr(s.secretKey, nr), publicKey: sr(s.publicKey, nr) };
}
function Cc() {
  const s = Lo.randomBytes(Fc);
  return sr(s, nr);
}
function Kw(s, t) {
  const r = Of.sharedKey(gr(s, nr), gr(t, nr), !0),
    n = new ww(kc.SHA256, r).expand(Fc);
  return sr(n, nr);
}
function Fw(s) {
  const t = kc.hash(gr(s, nr));
  return sr(t, nr);
}
function xn(s) {
  const t = kc.hash(gr(s, Kc));
  return sr(t, nr);
}
function Vw(s) {
  return gr(`${s}`, Lf);
}
function hs(s) {
  return Number(sr(s, Lf));
}
function Gw(s) {
  const t = Vw(typeof s.type < "u" ? s.type : jf);
  if (hs(t) === Yi && typeof s.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  const r = typeof s.senderPublicKey < "u" ? gr(s.senderPublicKey, nr) : void 0,
    n = typeof s.iv < "u" ? gr(s.iv, nr) : Lo.randomBytes(Tc),
    a = new Rf.ChaCha20Poly1305(gr(s.symKey, nr)).seal(n, gr(s.message, Kc));
  return Jw({ type: t, sealed: a, iv: n, senderPublicKey: r });
}
function Ww(s) {
  const t = new Rf.ChaCha20Poly1305(gr(s.symKey, nr)),
    { sealed: r, iv: n } = To(s.encoded),
    a = t.open(n, r);
  if (a === null) throw new Error("Failed to decrypt");
  return sr(a, Kc);
}
function Jw(s) {
  if (hs(s.type) === Yi) {
    if (typeof s.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return sr(Rc([s.type, s.senderPublicKey, s.iv, s.sealed]), Ac);
  }
  return sr(Rc([s.type, s.iv, s.sealed]), Ac);
}
function To(s) {
  const t = gr(s, Ac),
    r = t.slice(Hw, hl),
    n = hl;
  if (hs(r) === Yi) {
    const g = n + Fc,
      b = g + Tc,
      y = t.slice(n, g),
      _ = t.slice(g, b),
      P = t.slice(b);
    return { type: r, sealed: P, iv: _, senderPublicKey: y };
  }
  const a = n + Tc,
    h = t.slice(n, a),
    f = t.slice(a);
  return { type: r, sealed: f, iv: h };
}
function Qw(s, t) {
  const r = To(s);
  return Mf({
    type: hs(r.type),
    senderPublicKey:
      typeof r.senderPublicKey < "u" ? sr(r.senderPublicKey, nr) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function Mf(s) {
  const t = (s == null ? void 0 : s.type) || jf;
  if (t === Yi) {
    if (typeof (s == null ? void 0 : s.senderPublicKey) > "u")
      throw new Error("missing sender public key");
    if (typeof (s == null ? void 0 : s.receiverPublicKey) > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: t,
    senderPublicKey: s == null ? void 0 : s.senderPublicKey,
    receiverPublicKey: s == null ? void 0 : s.receiverPublicKey,
  };
}
function ll(s) {
  return (
    s.type === Yi &&
    typeof s.senderPublicKey == "string" &&
    typeof s.receiverPublicKey == "string"
  );
}
var Yw = Object.defineProperty,
  fl = Object.getOwnPropertySymbols,
  Xw = Object.prototype.hasOwnProperty,
  Zw = Object.prototype.propertyIsEnumerable,
  dl = (s, t, r) =>
    t in s
      ? Yw(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  pl = (s, t) => {
    for (var r in t || (t = {})) Xw.call(t, r) && dl(s, r, t[r]);
    if (fl) for (var r of fl(t)) Zw.call(t, r) && dl(s, r, t[r]);
    return s;
  };
const eb = "ReactNative",
  Er = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  },
  tb = "js";
function Vc() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Rn() {
  return !bw() && !!Pf() && navigator.product === eb;
}
function An() {
  return !Vc() && !!Pf();
}
function ls() {
  return Rn()
    ? Er.reactNative
    : Vc()
    ? Er.node
    : An()
    ? Er.browser
    : Er.unknown;
}
function rb() {
  var s;
  try {
    return Rn() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (s = global.Application) == null
        ? void 0
        : s.applicationId
      : void 0;
  } catch {
    return;
  }
}
function ib(s, t) {
  let r = cs.parse(s);
  return (r = pl(pl({}, r), t)), (s = cs.stringify(r)), s;
}
function nb() {
  return vw() || { name: "", description: "", url: "", icons: [""] };
}
function sb() {
  if (
    ls() === Er.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    const { OS: r, Version: n } = global.Platform;
    return [r, n].join("-");
  }
  const s = $w();
  if (s === null) return "unknown";
  const t = s.os ? s.os.replace(" ", "").toLowerCase() : "unknown";
  return s.type === "browser"
    ? [t, s.name, s.version].join("-")
    : [t, s.version].join("-");
}
function ob() {
  var s;
  const t = ls();
  return t === Er.browser
    ? [t, ((s = _w()) == null ? void 0 : s.host) || "unknown"].join(":")
    : t;
}
function ab(s, t, r) {
  const n = sb(),
    a = ob();
  return [[s, t].join("-"), [tb, r].join("-"), n, a].join("/");
}
function cb({
  protocol: s,
  version: t,
  relayUrl: r,
  sdkVersion: n,
  auth: a,
  projectId: h,
  useOnCloseEvent: f,
  bundleId: g,
}) {
  const b = r.split("?"),
    y = ab(s, t, n),
    _ = {
      auth: a,
      ua: y,
      projectId: h,
      useOnCloseEvent: f || void 0,
      origin: g || void 0,
    },
    P = ib(b[1] || "", _);
  return b[0] + "?" + P;
}
function Ji(s, t) {
  return s.filter((r) => t.includes(r)).length === s.length;
}
function Uf(s) {
  return Object.fromEntries(s.entries());
}
function qf(s) {
  return new Map(Object.entries(s));
}
function En(s = ce.FIVE_MINUTES, t) {
  const r = ce.toMiliseconds(s || ce.FIVE_MINUTES);
  let n, a, h;
  return {
    resolve: (f) => {
      h && n && (clearTimeout(h), n(f));
    },
    reject: (f) => {
      h && a && (clearTimeout(h), a(f));
    },
    done: () =>
      new Promise((f, g) => {
        (h = setTimeout(() => {
          g(new Error(t));
        }, r)),
          (n = f),
          (a = g);
      }),
  };
}
function us(s, t, r) {
  return new Promise(async (n, a) => {
    const h = setTimeout(() => a(new Error(r)), t);
    try {
      const f = await s;
      n(f);
    } catch (f) {
      a(f);
    }
    clearTimeout(h);
  });
}
function zf(s, t) {
  if (typeof t == "string" && t.startsWith(`${s}:`)) return t;
  if (s.toLowerCase() === "topic") {
    if (typeof t != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (s.toLowerCase() === "id") {
    if (typeof t != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${s}`);
}
function ub(s) {
  return zf("topic", s);
}
function hb(s) {
  return zf("id", s);
}
function kf(s) {
  const [t, r] = s.split(":"),
    n = { id: void 0, topic: void 0 };
  if (t === "topic" && typeof r == "string") n.topic = r;
  else if (t === "id" && Number.isInteger(Number(r))) n.id = Number(r);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${t}:${r}`
    );
  return n;
}
function kr(s, t) {
  return ce.fromMiliseconds((t || Date.now()) + ce.toMiliseconds(s));
}
function Ai(s) {
  return Date.now() >= ce.toMiliseconds(s);
}
function Dt(s, t) {
  return `${s}${t ? `:${t}` : ""}`;
}
function lc(s = [], t = []) {
  return [...new Set([...s, ...t])];
}
async function lb({ id: s, topic: t, wcDeepLink: r }) {
  try {
    if (!r) return;
    const n = typeof r == "string" ? JSON.parse(r) : r;
    let a = n == null ? void 0 : n.href;
    if (typeof a != "string") return;
    a.endsWith("/") && (a = a.slice(0, -1));
    const h = `${a}/wc?requestId=${s}&sessionTopic=${t}`,
      f = ls();
    f === Er.browser
      ? h.startsWith("https://")
        ? window.open(h, "_blank", "noreferrer noopener")
        : window.open(h, "_self", "noreferrer noopener")
      : f === Er.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < "u" &&
        (await global.Linking.openURL(h));
  } catch (n) {
    console.error(n);
  }
}
async function fb(s, t) {
  try {
    return (await s.getItem(t)) || (An() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const db = "irn";
function Nc(s) {
  return (s == null ? void 0 : s.relay) || { protocol: db };
}
function Po(s) {
  const t = Uw[s];
  if (typeof t > "u") throw new Error(`Relay Protocol not supported: ${s}`);
  return t;
}
var pb = Object.defineProperty,
  gl = Object.getOwnPropertySymbols,
  gb = Object.prototype.hasOwnProperty,
  yb = Object.prototype.propertyIsEnumerable,
  yl = (s, t, r) =>
    t in s
      ? pb(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  mb = (s, t) => {
    for (var r in t || (t = {})) gb.call(t, r) && yl(s, r, t[r]);
    if (gl) for (var r of gl(t)) yb.call(t, r) && yl(s, r, t[r]);
    return s;
  };
function vb(s, t = "-") {
  const r = {},
    n = "relay" + t;
  return (
    Object.keys(s).forEach((a) => {
      if (a.startsWith(n)) {
        const h = a.replace(n, ""),
          f = s[a];
        r[h] = f;
      }
    }),
    r
  );
}
function ml(s) {
  (s = s.includes("wc://") ? s.replace("wc://", "") : s),
    (s = s.includes("wc:") ? s.replace("wc:", "") : s);
  const t = s.indexOf(":"),
    r = s.indexOf("?") !== -1 ? s.indexOf("?") : void 0,
    n = s.substring(0, t),
    a = s.substring(t + 1, r).split("@"),
    h = typeof r < "u" ? s.substring(r) : "",
    f = cs.parse(h);
  return {
    protocol: n,
    topic: wb(a[0]),
    version: parseInt(a[1], 10),
    symKey: f.symKey,
    relay: vb(f),
  };
}
function wb(s) {
  return s.startsWith("//") ? s.substring(2) : s;
}
function bb(s, t = "-") {
  const r = "relay",
    n = {};
  return (
    Object.keys(s).forEach((a) => {
      const h = r + t + a;
      s[a] && (n[h] = s[a]);
    }),
    n
  );
}
function _b(s) {
  return (
    `${s.protocol}:${s.topic}@${s.version}?` +
    cs.stringify(mb({ symKey: s.symKey }, bb(s.relay)))
  );
}
function Tn(s) {
  const t = [];
  return (
    s.forEach((r) => {
      const [n, a] = r.split(":");
      t.push(`${n}:${a}`);
    }),
    t
  );
}
function Eb(s) {
  const t = [];
  return (
    Object.values(s).forEach((r) => {
      t.push(...Tn(r.accounts));
    }),
    t
  );
}
function Ib(s, t) {
  const r = [];
  return (
    Object.values(s).forEach((n) => {
      Tn(n.accounts).includes(t) && r.push(...n.methods);
    }),
    r
  );
}
function xb(s, t) {
  const r = [];
  return (
    Object.values(s).forEach((n) => {
      Tn(n.accounts).includes(t) && r.push(...n.events);
    }),
    r
  );
}
function Sb(s, t) {
  const r = Oo(s, t);
  if (r) throw new Error(r.message);
  const n = {};
  for (const [a, h] of Object.entries(s))
    n[a] = {
      methods: h.methods,
      events: h.events,
      chains: h.accounts.map((f) => `${f.split(":")[0]}:${f.split(":")[1]}`),
    };
  return n;
}
function Gc(s) {
  return s.includes(":");
}
function ns(s) {
  return Gc(s) ? s.split(":")[0] : s;
}
const Pb = {
    INVALID_METHOD: { message: "Invalid method.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_METHOD: { message: "Unauthorized method.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_METHODS: { message: "User rejected methods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_METHODS: { message: "Unsupported methods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_METHOD_UNSUPPORTED: { message: "Unsupported wc_ method.", code: 10001 },
  },
  Ob = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function Z(s, t) {
  const { message: r, code: n } = Ob[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function It(s, t) {
  const { message: r, code: n } = Pb[s];
  return { message: t ? `${r} ${t}` : r, code: n };
}
function Xr(s, t) {
  return Array.isArray(s) ? (typeof t < "u" && s.length ? s.every(t) : !0) : !1;
}
function Sn(s) {
  return Object.getPrototypeOf(s) === Object.prototype && Object.keys(s).length;
}
function ir(s) {
  return typeof s > "u";
}
function Ht(s, t) {
  return t && ir(s) ? !0 : typeof s == "string" && !!s.trim().length;
}
function Wc(s, t) {
  return t && ir(s) ? !0 : typeof s == "number" && !isNaN(s);
}
function Rb(s, t) {
  const { requiredNamespaces: r } = t,
    n = Object.keys(s.namespaces),
    a = Object.keys(r);
  let h = !0;
  return Ji(a, n)
    ? (n.forEach((f) => {
        const { accounts: g, methods: b, events: y } = s.namespaces[f],
          _ = Tn(g),
          P = r[f];
        (!Ji(Df(f, P), _) || !Ji(P.methods, b) || !Ji(P.events, y)) && (h = !1);
      }),
      h)
    : !1;
}
function Co(s) {
  return Ht(s, !1) && s.includes(":") ? s.split(":").length === 2 : !1;
}
function Ab(s) {
  if (Ht(s, !1) && s.includes(":")) {
    const t = s.split(":");
    if (t.length === 3) {
      const r = t[0] + ":" + t[1];
      return !!t[2] && Co(r);
    }
  }
  return !1;
}
function Tb(s) {
  if (Ht(s, !1))
    try {
      return typeof new URL(s) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function Cb(s) {
  var t;
  return (t = s == null ? void 0 : s.proposer) == null ? void 0 : t.publicKey;
}
function Nb(s) {
  return s == null ? void 0 : s.topic;
}
function $b(s, t) {
  let r = null;
  return (
    Ht(s == null ? void 0 : s.publicKey, !1) ||
      (r = Z(
        "MISSING_OR_INVALID",
        `${t} controller public key should be a string`
      )),
    r
  );
}
function vl(s) {
  let t = !0;
  return Xr(s) ? s.length && (t = s.every((r) => Ht(r, !1))) : (t = !1), t;
}
function Db(s, t, r) {
  let n = null;
  return (
    Xr(t) && t.length
      ? t.forEach((a) => {
          n ||
            Co(a) ||
            (n = It(
              "UNSUPPORTED_CHAINS",
              `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : Co(s) ||
        (n = It(
          "UNSUPPORTED_CHAINS",
          `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    n
  );
}
function Lb(s, t, r) {
  let n = null;
  return (
    Object.entries(s).forEach(([a, h]) => {
      if (n) return;
      const f = Db(a, Df(a, h), `${t} ${r}`);
      f && (n = f);
    }),
    n
  );
}
function jb(s, t) {
  let r = null;
  return (
    Xr(s)
      ? s.forEach((n) => {
          r ||
            Ab(n) ||
            (r = It(
              "UNSUPPORTED_ACCOUNTS",
              `${t}, account ${n} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (r = It(
          "UNSUPPORTED_ACCOUNTS",
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    r
  );
}
function Mb(s, t) {
  let r = null;
  return (
    Object.values(s).forEach((n) => {
      if (r) return;
      const a = jb(n == null ? void 0 : n.accounts, `${t} namespace`);
      a && (r = a);
    }),
    r
  );
}
function Ub(s, t) {
  let r = null;
  return (
    vl(s == null ? void 0 : s.methods)
      ? vl(s == null ? void 0 : s.events) ||
        (r = It(
          "UNSUPPORTED_EVENTS",
          `${t}, events should be an array of strings or empty array for no events`
        ))
      : (r = It(
          "UNSUPPORTED_METHODS",
          `${t}, methods should be an array of strings or empty array for no methods`
        )),
    r
  );
}
function Hf(s, t) {
  let r = null;
  return (
    Object.values(s).forEach((n) => {
      if (r) return;
      const a = Ub(n, `${t}, namespace`);
      a && (r = a);
    }),
    r
  );
}
function qb(s, t, r) {
  let n = null;
  if (s && Sn(s)) {
    const a = Hf(s, t);
    a && (n = a);
    const h = Lb(s, t, r);
    h && (n = h);
  } else
    n = Z("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
  return n;
}
function Oo(s, t) {
  let r = null;
  if (s && Sn(s)) {
    const n = Hf(s, t);
    n && (r = n);
    const a = Mb(s, t);
    a && (r = a);
  } else
    r = Z(
      "MISSING_OR_INVALID",
      `${t}, namespaces should be an object with data`
    );
  return r;
}
function Bf(s) {
  return Ht(s.protocol, !0);
}
function zb(s, t) {
  let r = !1;
  return (
    t && !s
      ? (r = !0)
      : s &&
        Xr(s) &&
        s.length &&
        s.forEach((n) => {
          r = Bf(n);
        }),
    r
  );
}
function kb(s) {
  return typeof s == "number";
}
function pr(s) {
  return typeof s < "u" && typeof s !== null;
}
function Hb(s) {
  return !(
    !s ||
    typeof s != "object" ||
    !s.code ||
    !Wc(s.code, !1) ||
    !s.message ||
    !Ht(s.message, !1)
  );
}
function Bb(s) {
  return !(ir(s) || !Ht(s.method, !1));
}
function Kb(s) {
  return !(
    ir(s) ||
    (ir(s.result) && ir(s.error)) ||
    !Wc(s.id, !1) ||
    !Ht(s.jsonrpc, !1)
  );
}
function Fb(s) {
  return !(ir(s) || !Ht(s.name, !1));
}
function wl(s, t) {
  return !(!Co(t) || !Eb(s).includes(t));
}
function Vb(s, t, r) {
  return Ht(r, !1) ? Ib(s, t).includes(r) : !1;
}
function Gb(s, t, r) {
  return Ht(r, !1) ? xb(s, t).includes(r) : !1;
}
function bl(s, t, r) {
  let n = null;
  const a = Wb(s),
    h = Jb(t),
    f = Object.keys(a),
    g = Object.keys(h),
    b = _l(Object.keys(s)),
    y = _l(Object.keys(t)),
    _ = b.filter((P) => !y.includes(P));
  return (
    _.length &&
      (n = Z(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${_.toString()}
      Received: ${Object.keys(t).toString()}`
      )),
    Ji(f, g) ||
      (n = Z(
        "NON_CONFORMING_NAMESPACES",
        `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${g.toString()}`
      )),
    Object.keys(t).forEach((P) => {
      if (!P.includes(":") || n) return;
      const N = Tn(t[P].accounts);
      N.includes(P) ||
        (n = Z(
          "NON_CONFORMING_NAMESPACES",
          `${r} namespaces accounts don't satisfy namespace accounts for ${P}
        Required: ${P}
        Approved: ${N.toString()}`
        ));
    }),
    f.forEach((P) => {
      n ||
        (Ji(a[P].methods, h[P].methods)
          ? Ji(a[P].events, h[P].events) ||
            (n = Z(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces events don't satisfy namespace events for ${P}`
            ))
          : (n = Z(
              "NON_CONFORMING_NAMESPACES",
              `${r} namespaces methods don't satisfy namespace methods for ${P}`
            )));
    }),
    n
  );
}
function Wb(s) {
  const t = {};
  return (
    Object.keys(s).forEach((r) => {
      var n;
      r.includes(":")
        ? (t[r] = s[r])
        : (n = s[r].chains) == null ||
          n.forEach((a) => {
            t[a] = { methods: s[r].methods, events: s[r].events };
          });
    }),
    t
  );
}
function _l(s) {
  return [...new Set(s.map((t) => (t.includes(":") ? t.split(":")[0] : t)))];
}
function Jb(s) {
  const t = {};
  return (
    Object.keys(s).forEach((r) => {
      if (r.includes(":")) t[r] = s[r];
      else {
        const n = Tn(s[r].accounts);
        n == null ||
          n.forEach((a) => {
            t[a] = {
              accounts: s[r].accounts.filter((h) => h.includes(`${a}:`)),
              methods: s[r].methods,
              events: s[r].events,
            };
          });
      }
    }),
    t
  );
}
function Qb(s, t) {
  return Wc(s, !1) && s <= t.max && s >= t.min;
}
function El() {
  const s = ls();
  return new Promise((t) => {
    switch (s) {
      case Er.browser:
        t(Yb());
        break;
      case Er.reactNative:
        t(Xb());
        break;
      case Er.node:
        t(Zb());
        break;
      default:
        t(!0);
    }
  });
}
function Yb() {
  return An() && (navigator == null ? void 0 : navigator.onLine);
}
async function Xb() {
  if (Rn() && typeof global < "u" && global != null && global.NetInfo) {
    const s = await (global == null ? void 0 : global.NetInfo.fetch());
    return s == null ? void 0 : s.isConnected;
  }
  return !0;
}
function Zb() {
  return !0;
}
function e_(s) {
  switch (ls()) {
    case Er.browser:
      t_(s);
      break;
    case Er.reactNative:
      r_(s);
      break;
  }
}
function t_(s) {
  !Rn() &&
    An() &&
    (window.addEventListener("online", () => s(!0)),
    window.addEventListener("offline", () => s(!1)));
}
function r_(s) {
  Rn() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) =>
        s(t == null ? void 0 : t.isConnected)
      ));
}
const fc = {};
let bo = class {
  static get(t) {
    return fc[t];
  }
  static set(t, r) {
    fc[t] = r;
  }
  static delete(t) {
    delete fc[t];
  }
};
const i_ =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  n_ =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  s_ = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function o_(s, t) {
  if (
    s === "__proto__" ||
    (s === "constructor" && t && typeof t == "object" && "prototype" in t)
  ) {
    a_(s);
    return;
  }
  return t;
}
function a_(s) {
  console.warn(`[destr] Dropping "${s}" key to prevent prototype pollution.`);
}
function _o(s, t = {}) {
  if (typeof s != "string") return s;
  const r = s.trim();
  if (s[0] === '"' && s.at(-1) === '"' && !s.includes("\\"))
    return r.slice(1, -1);
  if (r.length <= 9) {
    const n = r.toLowerCase();
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === "undefined") return;
    if (n === "null") return null;
    if (n === "nan") return Number.NaN;
    if (n === "infinity") return Number.POSITIVE_INFINITY;
    if (n === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!s_.test(s)) {
    if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
    return s;
  }
  try {
    if (i_.test(s) || n_.test(s)) {
      if (t.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(s, o_);
    }
    return JSON.parse(s);
  } catch (n) {
    if (t.strict) throw n;
    return s;
  }
}
function c_(s) {
  return !s || typeof s.then != "function" ? Promise.resolve(s) : s;
}
function kt(s, ...t) {
  try {
    return c_(s(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function u_(s) {
  const t = typeof s;
  return s === null || (t !== "object" && t !== "function");
}
function h_(s) {
  const t = Object.getPrototypeOf(s);
  return !t || t.isPrototypeOf(Object);
}
function Ro(s) {
  if (u_(s)) return String(s);
  if (h_(s) || Array.isArray(s)) return JSON.stringify(s);
  if (typeof s.toJSON == "function") return Ro(s.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function Kf() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
const $c = "base64:";
function l_(s) {
  if (typeof s == "string") return s;
  Kf();
  const t = Buffer.from(s).toString("base64");
  return $c + t;
}
function f_(s) {
  return typeof s != "string" || !s.startsWith($c)
    ? s
    : (Kf(), Buffer.from(s.slice($c.length), "base64"));
}
function dr(s) {
  return s
    ? s
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function d_(...s) {
  return dr(s.join(":"));
}
function Eo(s) {
  return (s = dr(s)), s ? s + ":" : "";
}
const p_ = "memory",
  g_ = () => {
    const s = new Map();
    return {
      name: p_,
      options: {},
      hasItem(t) {
        return s.has(t);
      },
      getItem(t) {
        return s.get(t) ?? null;
      },
      getItemRaw(t) {
        return s.get(t) ?? null;
      },
      setItem(t, r) {
        s.set(t, r);
      },
      setItemRaw(t, r) {
        s.set(t, r);
      },
      removeItem(t) {
        s.delete(t);
      },
      getKeys() {
        return Array.from(s.keys());
      },
      clear() {
        s.clear();
      },
      dispose() {
        s.clear();
      },
    };
  };
function y_(s = {}) {
  const t = {
      mounts: { "": s.driver || g_() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (y) => {
      for (const _ of t.mountpoints)
        if (y.startsWith(_))
          return {
            base: _,
            relativeKey: y.slice(_.length),
            driver: t.mounts[_],
          };
      return { base: "", relativeKey: y, driver: t.mounts[""] };
    },
    n = (y, _) =>
      t.mountpoints
        .filter((P) => P.startsWith(y) || (_ && y.startsWith(P)))
        .map((P) => ({
          relativeBase: y.length > P.length ? y.slice(P.length) : void 0,
          mountpoint: P,
          driver: t.mounts[P],
        })),
    a = (y, _) => {
      if (t.watching) {
        _ = dr(_);
        for (const P of t.watchListeners) P(y, _);
      }
    },
    h = async () => {
      if (!t.watching) {
        t.watching = !0;
        for (const y in t.mounts) t.unwatch[y] = await Il(t.mounts[y], a, y);
      }
    },
    f = async () => {
      if (t.watching) {
        for (const y in t.unwatch) await t.unwatch[y]();
        (t.unwatch = {}), (t.watching = !1);
      }
    },
    g = (y, _, P) => {
      const N = new Map(),
        B = ($) => {
          let Q = N.get($.base);
          return (
            Q ||
              ((Q = { driver: $.driver, base: $.base, items: [] }),
              N.set($.base, Q)),
            Q
          );
        };
      for (const $ of y) {
        const Q = typeof $ == "string",
          se = dr(Q ? $ : $.key),
          le = Q ? void 0 : $.value,
          T = Q || !$.options ? _ : { ..._, ...$.options },
          L = r(se);
        B(L).items.push({
          key: se,
          value: le,
          relativeKey: L.relativeKey,
          options: T,
        });
      }
      return Promise.all([...N.values()].map(($) => P($))).then(($) =>
        $.flat()
      );
    },
    b = {
      hasItem(y, _ = {}) {
        y = dr(y);
        const { relativeKey: P, driver: N } = r(y);
        return kt(N.hasItem, P, _);
      },
      getItem(y, _ = {}) {
        y = dr(y);
        const { relativeKey: P, driver: N } = r(y);
        return kt(N.getItem, P, _).then((B) => _o(B));
      },
      getItems(y, _) {
        return g(y, _, (P) =>
          P.driver.getItems
            ? kt(
                P.driver.getItems,
                P.items.map((N) => ({
                  key: N.relativeKey,
                  options: N.options,
                })),
                _
              ).then((N) =>
                N.map((B) => ({ key: d_(P.base, B.key), value: _o(B.value) }))
              )
            : Promise.all(
                P.items.map((N) =>
                  kt(P.driver.getItem, N.relativeKey, N.options).then((B) => ({
                    key: N.key,
                    value: _o(B),
                  }))
                )
              )
        );
      },
      getItemRaw(y, _ = {}) {
        y = dr(y);
        const { relativeKey: P, driver: N } = r(y);
        return N.getItemRaw
          ? kt(N.getItemRaw, P, _)
          : kt(N.getItem, P, _).then((B) => f_(B));
      },
      async setItem(y, _, P = {}) {
        if (_ === void 0) return b.removeItem(y);
        y = dr(y);
        const { relativeKey: N, driver: B } = r(y);
        B.setItem &&
          (await kt(B.setItem, N, Ro(_), P), B.watch || a("update", y));
      },
      async setItems(y, _) {
        await g(y, _, async (P) => {
          P.driver.setItems &&
            (await kt(
              P.driver.setItems,
              P.items.map((N) => ({
                key: N.relativeKey,
                value: Ro(N.value),
                options: N.options,
              })),
              _
            )),
            P.driver.setItem &&
              (await Promise.all(
                P.items.map((N) =>
                  kt(P.driver.setItem, N.relativeKey, Ro(N.value), N.options)
                )
              ));
        });
      },
      async setItemRaw(y, _, P = {}) {
        if (_ === void 0) return b.removeItem(y, P);
        y = dr(y);
        const { relativeKey: N, driver: B } = r(y);
        if (B.setItemRaw) await kt(B.setItemRaw, N, _, P);
        else if (B.setItem) await kt(B.setItem, N, l_(_), P);
        else return;
        B.watch || a("update", y);
      },
      async removeItem(y, _ = {}) {
        typeof _ == "boolean" && (_ = { removeMeta: _ }), (y = dr(y));
        const { relativeKey: P, driver: N } = r(y);
        N.removeItem &&
          (await kt(N.removeItem, P, _),
          (_.removeMeta || _.removeMata) &&
            (await kt(N.removeItem, P + "$", _)),
          N.watch || a("remove", y));
      },
      async getMeta(y, _ = {}) {
        typeof _ == "boolean" && (_ = { nativeOnly: _ }), (y = dr(y));
        const { relativeKey: P, driver: N } = r(y),
          B = Object.create(null);
        if (
          (N.getMeta && Object.assign(B, await kt(N.getMeta, P, _)),
          !_.nativeOnly)
        ) {
          const $ = await kt(N.getItem, P + "$", _).then((Q) => _o(Q));
          $ &&
            typeof $ == "object" &&
            (typeof $.atime == "string" && ($.atime = new Date($.atime)),
            typeof $.mtime == "string" && ($.mtime = new Date($.mtime)),
            Object.assign(B, $));
        }
        return B;
      },
      setMeta(y, _, P = {}) {
        return this.setItem(y + "$", _, P);
      },
      removeMeta(y, _ = {}) {
        return this.removeItem(y + "$", _);
      },
      async getKeys(y, _ = {}) {
        y = Eo(y);
        const P = n(y, !0);
        let N = [];
        const B = [];
        for (const $ of P) {
          const se = (await kt($.driver.getKeys, $.relativeBase, _))
            .map((le) => $.mountpoint + dr(le))
            .filter((le) => !N.some((T) => le.startsWith(T)));
          B.push(...se),
            (N = [
              $.mountpoint,
              ...N.filter((le) => !le.startsWith($.mountpoint)),
            ]);
        }
        return y
          ? B.filter(($) => $.startsWith(y) && !$.endsWith("$"))
          : B.filter(($) => !$.endsWith("$"));
      },
      async clear(y, _ = {}) {
        (y = Eo(y)),
          await Promise.all(
            n(y, !1).map(async (P) => {
              if (P.driver.clear) return kt(P.driver.clear, P.relativeBase, _);
              if (P.driver.removeItem) {
                const N = await P.driver.getKeys(P.relativeBase || "", _);
                return Promise.all(N.map((B) => P.driver.removeItem(B, _)));
              }
            })
          );
      },
      async dispose() {
        await Promise.all(Object.values(t.mounts).map((y) => xl(y)));
      },
      async watch(y) {
        return (
          await h(),
          t.watchListeners.push(y),
          async () => {
            (t.watchListeners = t.watchListeners.filter((_) => _ !== y)),
              t.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (t.watchListeners = []), await f();
      },
      mount(y, _) {
        if (((y = Eo(y)), y && t.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (t.mountpoints.push(y),
            t.mountpoints.sort((P, N) => N.length - P.length)),
          (t.mounts[y] = _),
          t.watching &&
            Promise.resolve(Il(_, a, y))
              .then((P) => {
                t.unwatch[y] = P;
              })
              .catch(console.error),
          b
        );
      },
      async unmount(y, _ = !0) {
        (y = Eo(y)),
          !(!y || !t.mounts[y]) &&
            (t.watching &&
              y in t.unwatch &&
              (t.unwatch[y](), delete t.unwatch[y]),
            _ && (await xl(t.mounts[y])),
            (t.mountpoints = t.mountpoints.filter((P) => P !== y)),
            delete t.mounts[y]);
      },
      getMount(y = "") {
        y = dr(y) + ":";
        const _ = r(y);
        return { driver: _.driver, base: _.base };
      },
      getMounts(y = "", _ = {}) {
        return (
          (y = dr(y)),
          n(y, _.parents).map((N) => ({ driver: N.driver, base: N.mountpoint }))
        );
      },
    };
  return b;
}
function Il(s, t, r) {
  return s.watch ? s.watch((n, a) => t(n, r + a)) : () => {};
}
async function xl(s) {
  typeof s.dispose == "function" && (await kt(s.dispose));
}
function Xi(s) {
  return new Promise((t, r) => {
    (s.oncomplete = s.onsuccess = () => t(s.result)),
      (s.onabort = s.onerror = () => r(s.error));
  });
}
function Ff(s, t) {
  const r = indexedDB.open(s);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const n = Xi(r);
  return (a, h) => n.then((f) => h(f.transaction(t, a).objectStore(t)));
}
let dc;
function fs() {
  return dc || (dc = Ff("keyval-store", "keyval")), dc;
}
function Sl(s, t = fs()) {
  return t("readonly", (r) => Xi(r.get(s)));
}
function m_(s, t, r = fs()) {
  return r("readwrite", (n) => (n.put(t, s), Xi(n.transaction)));
}
function v_(s, t = fs()) {
  return t("readwrite", (r) => (r.delete(s), Xi(r.transaction)));
}
function w_(s = fs()) {
  return s("readwrite", (t) => (t.clear(), Xi(t.transaction)));
}
function b_(s, t) {
  return (
    (s.openCursor().onsuccess = function () {
      this.result && (t(this.result), this.result.continue());
    }),
    Xi(s.transaction)
  );
}
function __(s = fs()) {
  return s("readonly", (t) => {
    if (t.getAllKeys) return Xi(t.getAllKeys());
    const r = [];
    return b_(t, (n) => r.push(n.key)).then(() => r);
  });
}
const E_ = (s) =>
    JSON.stringify(s, (t, r) =>
      typeof r == "bigint" ? r.toString() + "n" : r
    ),
  I_ = (s) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = s.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (n, a) =>
      typeof a == "string" && a.match(/^\d+n$/)
        ? BigInt(a.substring(0, a.length - 1))
        : a
    );
  };
function ds(s) {
  if (typeof s != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof s}`);
  try {
    return I_(s);
  } catch {
    return s;
  }
}
function Qi(s) {
  return typeof s == "string" ? s : E_(s) || "";
}
const x_ = "idb-keyval";
var S_ = (s = {}) => {
  const t = s.base && s.base.length > 0 ? `${s.base}:` : "",
    r = (a) => t + a;
  let n;
  return (
    s.dbName && s.storeName && (n = Ff(s.dbName, s.storeName)),
    {
      name: x_,
      options: s,
      async hasItem(a) {
        return !(typeof (await Sl(r(a), n)) > "u");
      },
      async getItem(a) {
        return (await Sl(r(a), n)) ?? null;
      },
      setItem(a, h) {
        return m_(r(a), h, n);
      },
      removeItem(a) {
        return v_(r(a), n);
      },
      getKeys() {
        return __(n);
      },
      clear() {
        return w_(n);
      },
    }
  );
};
const P_ = "WALLET_CONNECT_V2_INDEXED_DB",
  O_ = "keyvaluestorage";
let R_ = class {
  constructor() {
    this.indexedDb = y_({ driver: S_({ dbName: P_, storeName: O_ }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(
      (t) => [t.key, t.value]
    );
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null) return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Qi(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var pc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Ao = { exports: {} };
(function () {
  let s;
  function t() {}
  (s = t),
    (s.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (s.prototype.setItem = function (r, n) {
      this[r] = String(n);
    }),
    (s.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (s.prototype.clear = function () {
      const r = this;
      Object.keys(r).forEach(function (n) {
        (r[n] = void 0), delete r[n];
      });
    }),
    (s.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    s.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof pc < "u" && pc.localStorage
      ? (Ao.exports = pc.localStorage)
      : typeof window < "u" && window.localStorage
      ? (Ao.exports = window.localStorage)
      : (Ao.exports = new t());
})();
function A_(s) {
  var t;
  return [s[0], ds((t = s[1]) != null ? t : "")];
}
class T_ {
  constructor() {
    this.localStorage = Ao.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(A_);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null) return ds(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Qi(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const C_ = "wc_storage_version",
  Pl = 1,
  N_ = async (s, t, r) => {
    const n = C_,
      a = await t.getItem(n);
    if (a && a >= Pl) {
      r(t);
      return;
    }
    const h = await s.getKeys();
    if (!h.length) {
      r(t);
      return;
    }
    const f = [];
    for (; h.length; ) {
      const g = h.shift();
      if (!g) continue;
      const b = g.toLowerCase();
      if (
        b.includes("wc@") ||
        b.includes("walletconnect") ||
        b.includes("wc_") ||
        b.includes("wallet_connect")
      ) {
        const y = await s.getItem(g);
        await t.setItem(g, y), f.push(g);
      }
    }
    await t.setItem(n, Pl), r(t), $_(s, f);
  },
  $_ = async (s, t) => {
    t.length &&
      t.forEach(async (r) => {
        await s.removeItem(r);
      });
  };
let D_ = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (r) => {
        (this.storage = r), (this.initialized = !0);
      });
    const t = new T_();
    this.storage = t;
    try {
      const r = new R_();
      N_(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.initialized && (clearInterval(r), t());
        }, 20);
      }));
  }
};
var Cn = {},
  Yn = {},
  gc = {},
  Xn = {};
let Zi = class {};
const L_ = Object.freeze(
    Object.defineProperty(
      { __proto__: null, IEvents: Zi },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  j_ = Ew(L_);
var Ol;
function M_() {
  if (Ol) return Xn;
  (Ol = 1),
    Object.defineProperty(Xn, "__esModule", { value: !0 }),
    (Xn.IHeartBeat = void 0);
  const s = j_;
  class t extends s.IEvents {
    constructor(n) {
      super();
    }
  }
  return (Xn.IHeartBeat = t), Xn;
}
var Rl;
function Vf() {
  return (
    Rl ||
      ((Rl = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          On.__exportStar(M_(), s);
      })(gc)),
    gc
  );
}
var yc = {},
  Gi = {},
  Al;
function U_() {
  if (Al) return Gi;
  (Al = 1),
    Object.defineProperty(Gi, "__esModule", { value: !0 }),
    (Gi.HEARTBEAT_EVENTS = Gi.HEARTBEAT_INTERVAL = void 0);
  const s = ce;
  return (
    (Gi.HEARTBEAT_INTERVAL = s.FIVE_SECONDS),
    (Gi.HEARTBEAT_EVENTS = { pulse: "heartbeat_pulse" }),
    Gi
  );
}
var Tl;
function Gf() {
  return (
    Tl ||
      ((Tl = 1),
      (function (s) {
        Object.defineProperty(s, "__esModule", { value: !0 }),
          On.__exportStar(U_(), s);
      })(yc)),
    yc
  );
}
var Cl;
function q_() {
  if (Cl) return Yn;
  (Cl = 1),
    Object.defineProperty(Yn, "__esModule", { value: !0 }),
    (Yn.HeartBeat = void 0);
  const s = On,
    t = $r,
    r = ce,
    n = Vf(),
    a = Gf();
  class h extends n.IHeartBeat {
    constructor(g) {
      super(g),
        (this.events = new t.EventEmitter()),
        (this.interval = a.HEARTBEAT_INTERVAL),
        (this.interval =
          (g == null ? void 0 : g.interval) || a.HEARTBEAT_INTERVAL);
    }
    static init(g) {
      return s.__awaiter(this, void 0, void 0, function* () {
        const b = new h(g);
        return yield b.init(), b;
      });
    }
    init() {
      return s.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(g, b) {
      this.events.on(g, b);
    }
    once(g, b) {
      this.events.once(g, b);
    }
    off(g, b) {
      this.events.off(g, b);
    }
    removeListener(g, b) {
      this.events.removeListener(g, b);
    }
    initialize() {
      return s.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          r.toMiliseconds(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (Yn.HeartBeat = h), Yn;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  const t = On;
  t.__exportStar(q_(), s), t.__exportStar(Vf(), s), t.__exportStar(Gf(), s);
})(Cn);
var Te = {},
  mc,
  Nl;
function z_() {
  if (Nl) return mc;
  Nl = 1;
  function s(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  mc = t;
  function t(r, n, a) {
    var h = (a && a.stringify) || s,
      f = 1;
    if (typeof r == "object" && r !== null) {
      var g = n.length + f;
      if (g === 1) return r;
      var b = new Array(g);
      b[0] = h(r);
      for (var y = 1; y < g; y++) b[y] = h(n[y]);
      return b.join(" ");
    }
    if (typeof r != "string") return r;
    var _ = n.length;
    if (_ === 0) return r;
    for (
      var P = "", N = 1 - f, B = -1, $ = (r && r.length) || 0, Q = 0;
      Q < $;

    ) {
      if (r.charCodeAt(Q) === 37 && Q + 1 < $) {
        switch (((B = B > -1 ? B : 0), r.charCodeAt(Q + 1))) {
          case 100:
          case 102:
            if (N >= _ || n[N] == null) break;
            B < Q && (P += r.slice(B, Q)),
              (P += Number(n[N])),
              (B = Q + 2),
              Q++;
            break;
          case 105:
            if (N >= _ || n[N] == null) break;
            B < Q && (P += r.slice(B, Q)),
              (P += Math.floor(Number(n[N]))),
              (B = Q + 2),
              Q++;
            break;
          case 79:
          case 111:
          case 106:
            if (N >= _ || n[N] === void 0) break;
            B < Q && (P += r.slice(B, Q));
            var se = typeof n[N];
            if (se === "string") {
              (P += "'" + n[N] + "'"), (B = Q + 2), Q++;
              break;
            }
            if (se === "function") {
              (P += n[N].name || "<anonymous>"), (B = Q + 2), Q++;
              break;
            }
            (P += h(n[N])), (B = Q + 2), Q++;
            break;
          case 115:
            if (N >= _) break;
            B < Q && (P += r.slice(B, Q)),
              (P += String(n[N])),
              (B = Q + 2),
              Q++;
            break;
          case 37:
            B < Q && (P += r.slice(B, Q)), (P += "%"), (B = Q + 2), Q++, N--;
            break;
        }
        ++N;
      }
      ++Q;
    }
    return B === -1 ? r : (B < $ && (P += r.slice(B)), P);
  }
  return mc;
}
var vc, $l;
function k_() {
  if ($l) return vc;
  $l = 1;
  const s = z_();
  vc = a;
  const t = q().console || {},
    r = {
      mapHttpRequest: $,
      mapHttpResponse: $,
      wrapRequestSerializer: Q,
      wrapResponseSerializer: Q,
      wrapErrorSerializer: Q,
      req: $,
      res: $,
      err: N,
    };
  function n(x, M) {
    return Array.isArray(x)
      ? x.filter(function (ue) {
          return ue !== "!stdSerializers.err";
        })
      : x === !0
      ? Object.keys(M)
      : !1;
  }
  function a(x) {
    (x = x || {}), (x.browser = x.browser || {});
    const M = x.browser.transmit;
    if (M && typeof M.send != "function")
      throw Error("pino: transmit option must have a send function");
    const H = x.browser.write || t;
    x.browser.write && (x.browser.asObject = !0);
    const ue = x.serializers || {},
      ae = n(x.browser.serialize, ue);
    let ge = x.browser.serialize;
    Array.isArray(x.browser.serialize) &&
      x.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (ge = !1);
    const Ce = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof H == "function" &&
      (H.error = H.fatal = H.warn = H.info = H.debug = H.trace = H),
      x.enabled === !1 && (x.level = "silent");
    const ze = x.level || "info",
      v = Object.create(H);
    v.log || (v.log = se),
      Object.defineProperty(v, "levelVal", { get: re }),
      Object.defineProperty(v, "level", { get: pe, set: Y });
    const S = {
      transmit: M,
      serialize: ae,
      asObject: x.browser.asObject,
      levels: Ce,
      timestamp: B(x),
    };
    (v.levels = a.levels),
      (v.level = ze),
      (v.setMaxListeners =
        v.getMaxListeners =
        v.emit =
        v.addListener =
        v.on =
        v.prependListener =
        v.once =
        v.prependOnceListener =
        v.removeListener =
        v.removeAllListeners =
        v.listeners =
        v.listenerCount =
        v.eventNames =
        v.write =
        v.flush =
          se),
      (v.serializers = ue),
      (v._serialize = ae),
      (v._stdErrSerialize = ge),
      (v.child = G),
      M && (v._logEvent = P());
    function re() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function pe() {
      return this._level;
    }
    function Y(J) {
      if (J !== "silent" && !this.levels.values[J])
        throw Error("unknown level " + J);
      (this._level = J),
        h(S, v, "error", "log"),
        h(S, v, "fatal", "error"),
        h(S, v, "warn", "error"),
        h(S, v, "info", "log"),
        h(S, v, "debug", "log"),
        h(S, v, "trace", "log");
    }
    function G(J, X) {
      if (!J) throw new Error("missing bindings for child Pino");
      (X = X || {}), ae && J.serializers && (X.serializers = J.serializers);
      const Je = X.serializers;
      if (ae && Je) {
        var Be = Object.assign({}, ue, Je),
          Kr = x.browser.serialize === !0 ? Object.keys(Be) : ae;
        delete J.serializers, b([J], Kr, Be, this._stdErrSerialize);
      }
      function Ie(xt) {
        (this._childLevel = (xt._childLevel | 0) + 1),
          (this.error = y(xt, J, "error")),
          (this.fatal = y(xt, J, "fatal")),
          (this.warn = y(xt, J, "warn")),
          (this.info = y(xt, J, "info")),
          (this.debug = y(xt, J, "debug")),
          (this.trace = y(xt, J, "trace")),
          Be && ((this.serializers = Be), (this._serialize = Kr)),
          M && (this._logEvent = P([].concat(xt._logEvent.bindings, J)));
      }
      return (Ie.prototype = this), new Ie(this);
    }
    return v;
  }
  (a.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  }),
    (a.stdSerializers = r),
    (a.stdTimeFunctions = Object.assign(
      {},
      { nullTime: le, epochTime: T, unixTime: L, isoTime: z }
    ));
  function h(x, M, H, ue) {
    const ae = Object.getPrototypeOf(M);
    (M[H] =
      M.levelVal > M.levels.values[H]
        ? se
        : ae[H]
        ? ae[H]
        : t[H] || t[ue] || se),
      f(x, M, H);
  }
  function f(x, M, H) {
    (!x.transmit && M[H] === se) ||
      (M[H] = (function (ue) {
        return function () {
          const ge = x.timestamp(),
            Ce = new Array(arguments.length),
            ze =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === t
                ? t
                : this;
          for (var v = 0; v < Ce.length; v++) Ce[v] = arguments[v];
          if (
            (x.serialize &&
              !x.asObject &&
              b(Ce, this._serialize, this.serializers, this._stdErrSerialize),
            x.asObject ? ue.call(ze, g(this, H, Ce, ge)) : ue.apply(ze, Ce),
            x.transmit)
          ) {
            const S = x.transmit.level || M.level,
              re = a.levels.values[S],
              pe = a.levels.values[H];
            if (pe < re) return;
            _(
              this,
              {
                ts: ge,
                methodLevel: H,
                methodValue: pe,
                transmitLevel: S,
                transmitValue: a.levels.values[x.transmit.level || M.level],
                send: x.transmit.send,
                val: M.levelVal,
              },
              Ce
            );
          }
        };
      })(M[H]));
  }
  function g(x, M, H, ue) {
    x._serialize && b(H, x._serialize, x.serializers, x._stdErrSerialize);
    const ae = H.slice();
    let ge = ae[0];
    const Ce = {};
    ue && (Ce.time = ue), (Ce.level = a.levels.values[M]);
    let ze = (x._childLevel | 0) + 1;
    if ((ze < 1 && (ze = 1), ge !== null && typeof ge == "object")) {
      for (; ze-- && typeof ae[0] == "object"; ) Object.assign(Ce, ae.shift());
      ge = ae.length ? s(ae.shift(), ae) : void 0;
    } else typeof ge == "string" && (ge = s(ae.shift(), ae));
    return ge !== void 0 && (Ce.msg = ge), Ce;
  }
  function b(x, M, H, ue) {
    for (const ae in x)
      if (ue && x[ae] instanceof Error) x[ae] = a.stdSerializers.err(x[ae]);
      else if (typeof x[ae] == "object" && !Array.isArray(x[ae]))
        for (const ge in x[ae])
          M && M.indexOf(ge) > -1 && ge in H && (x[ae][ge] = H[ge](x[ae][ge]));
  }
  function y(x, M, H) {
    return function () {
      const ue = new Array(1 + arguments.length);
      ue[0] = M;
      for (var ae = 1; ae < ue.length; ae++) ue[ae] = arguments[ae - 1];
      return x[H].apply(this, ue);
    };
  }
  function _(x, M, H) {
    const ue = M.send,
      ae = M.ts,
      ge = M.methodLevel,
      Ce = M.methodValue,
      ze = M.val,
      v = x._logEvent.bindings;
    b(
      H,
      x._serialize || Object.keys(x.serializers),
      x.serializers,
      x._stdErrSerialize === void 0 ? !0 : x._stdErrSerialize
    ),
      (x._logEvent.ts = ae),
      (x._logEvent.messages = H.filter(function (S) {
        return v.indexOf(S) === -1;
      })),
      (x._logEvent.level.label = ge),
      (x._logEvent.level.value = Ce),
      ue(ge, x._logEvent, ze),
      (x._logEvent = P(v));
  }
  function P(x) {
    return {
      ts: 0,
      messages: [],
      bindings: x || [],
      level: { label: "", value: 0 },
    };
  }
  function N(x) {
    const M = { type: x.constructor.name, msg: x.message, stack: x.stack };
    for (const H in x) M[H] === void 0 && (M[H] = x[H]);
    return M;
  }
  function B(x) {
    return typeof x.timestamp == "function"
      ? x.timestamp
      : x.timestamp === !1
      ? le
      : T;
  }
  function $() {
    return {};
  }
  function Q(x) {
    return x;
  }
  function se() {}
  function le() {
    return !1;
  }
  function T() {
    return Date.now();
  }
  function L() {
    return Math.round(Date.now() / 1e3);
  }
  function z() {
    return new Date(Date.now()).toISOString();
  }
  function q() {
    function x(M) {
      return typeof M < "u" && M;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return x(self) || x(window) || x(this) || {};
    }
  }
  return vc;
}
var Wi = {},
  Dl;
function Wf() {
  return (
    Dl ||
      ((Dl = 1),
      Object.defineProperty(Wi, "__esModule", { value: !0 }),
      (Wi.PINO_CUSTOM_CONTEXT_KEY = Wi.PINO_LOGGER_DEFAULTS = void 0),
      (Wi.PINO_LOGGER_DEFAULTS = { level: "info" }),
      (Wi.PINO_CUSTOM_CONTEXT_KEY = "custom_context")),
    Wi
  );
}
var rr = {},
  Ll;
function H_() {
  if (Ll) return rr;
  (Ll = 1),
    Object.defineProperty(rr, "__esModule", { value: !0 }),
    (rr.generateChildLogger =
      rr.formatChildLoggerContext =
      rr.getLoggerContext =
      rr.setBrowserLoggerContext =
      rr.getBrowserLoggerContext =
      rr.getDefaultLoggerOptions =
        void 0);
  const s = Wf();
  function t(g) {
    return Object.assign(Object.assign({}, g), {
      level: (g == null ? void 0 : g.level) || s.PINO_LOGGER_DEFAULTS.level,
    });
  }
  rr.getDefaultLoggerOptions = t;
  function r(g, b = s.PINO_CUSTOM_CONTEXT_KEY) {
    return g[b] || "";
  }
  rr.getBrowserLoggerContext = r;
  function n(g, b, y = s.PINO_CUSTOM_CONTEXT_KEY) {
    return (g[y] = b), g;
  }
  rr.setBrowserLoggerContext = n;
  function a(g, b = s.PINO_CUSTOM_CONTEXT_KEY) {
    let y = "";
    return (
      typeof g.bindings > "u"
        ? (y = r(g, b))
        : (y = g.bindings().context || ""),
      y
    );
  }
  rr.getLoggerContext = a;
  function h(g, b, y = s.PINO_CUSTOM_CONTEXT_KEY) {
    const _ = a(g, y);
    return _.trim() ? `${_}/${b}` : b;
  }
  rr.formatChildLoggerContext = h;
  function f(g, b, y = s.PINO_CUSTOM_CONTEXT_KEY) {
    const _ = h(g, b, y),
      P = g.child({ context: _ });
    return n(P, _, y);
  }
  return (rr.generateChildLogger = f), rr;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 }), (s.pino = void 0);
  const t = On,
    r = t.__importDefault(k_());
  Object.defineProperty(s, "pino", {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  }),
    t.__exportStar(Wf(), s),
    t.__exportStar(H_(), s);
})(Te);
class B_ extends Zi {
  constructor(t) {
    super(), (this.opts = t), (this.protocol = "wc"), (this.version = 2);
  }
}
let K_ = class extends Zi {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r), (this.records = new Map());
    }
  },
  F_ = class {
    constructor(t, r) {
      (this.logger = t), (this.core = r);
    }
  },
  V_ = class extends Zi {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  G_ = class extends Zi {
    constructor(t) {
      super();
    }
  },
  W_ = class {
    constructor(t, r, n, a) {
      (this.core = t), (this.logger = r), (this.name = n);
    }
  };
class J_ extends Zi {
  constructor(t, r) {
    super(), (this.relayer = t), (this.logger = r);
  }
}
let Q_ = class extends Zi {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  Y_ = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  X_ = class {
    constructor(t) {
      (this.opts = t), (this.protocol = "wc"), (this.version = 2);
    }
  },
  Z_ = class {
    constructor(t) {
      this.client = t;
    }
  };
var Jc = {},
  Jf = {};
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  var t = Iw,
    r = Af;
  (s.DIGEST_LENGTH = 64), (s.BLOCK_SIZE = 128);
  var n = (function () {
    function g() {
      (this.digestLength = s.DIGEST_LENGTH),
        (this.blockSize = s.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (g.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (g.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.clean = function () {
        r.wipe(this._buffer),
          r.wipe(this._tempHi),
          r.wipe(this._tempLo),
          this.reset();
      }),
      (g.prototype.update = function (b, y) {
        if ((y === void 0 && (y = b.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var _ = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < s.BLOCK_SIZE && y > 0; )
            (this._buffer[this._bufferLength++] = b[_++]), y--;
          this._bufferLength === this.blockSize &&
            (h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((_ = h(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            b,
            _,
            y
          )),
          (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = b[_++]), y--;
        return this;
      }),
      (g.prototype.finish = function (b) {
        if (!this._finished) {
          var y = this._bytesHashed,
            _ = this._bufferLength,
            P = (y / 536870912) | 0,
            N = y << 3,
            B = y % 128 < 112 ? 128 : 256;
          this._buffer[_] = 128;
          for (var $ = _ + 1; $ < B - 8; $++) this._buffer[$] = 0;
          t.writeUint32BE(P, this._buffer, B - 8),
            t.writeUint32BE(N, this._buffer, B - 4),
            h(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              B
            ),
            (this._finished = !0);
        }
        for (var $ = 0; $ < this.digestLength / 8; $++)
          t.writeUint32BE(this._stateHi[$], b, $ * 8),
            t.writeUint32BE(this._stateLo[$], b, $ * 8 + 4);
        return this;
      }),
      (g.prototype.digest = function () {
        var b = new Uint8Array(this.digestLength);
        return this.finish(b), b;
      }),
      (g.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (g.prototype.restoreState = function (b) {
        return (
          this._stateHi.set(b.stateHi),
          this._stateLo.set(b.stateLo),
          (this._bufferLength = b.bufferLength),
          b.buffer && this._buffer.set(b.buffer),
          (this._bytesHashed = b.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.cleanSavedState = function (b) {
        r.wipe(b.stateHi),
          r.wipe(b.stateLo),
          b.buffer && r.wipe(b.buffer),
          (b.bufferLength = 0),
          (b.bytesHashed = 0);
      }),
      g
    );
  })();
  s.SHA512 = n;
  var a = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function h(g, b, y, _, P, N, B) {
    for (
      var $ = y[0],
        Q = y[1],
        se = y[2],
        le = y[3],
        T = y[4],
        L = y[5],
        z = y[6],
        q = y[7],
        x = _[0],
        M = _[1],
        H = _[2],
        ue = _[3],
        ae = _[4],
        ge = _[5],
        Ce = _[6],
        ze = _[7],
        v,
        S,
        re,
        pe,
        Y,
        G,
        J,
        X;
      B >= 128;

    ) {
      for (var Je = 0; Je < 16; Je++) {
        var Be = 8 * Je + N;
        (g[Je] = t.readUint32BE(P, Be)), (b[Je] = t.readUint32BE(P, Be + 4));
      }
      for (var Je = 0; Je < 80; Je++) {
        var Kr = $,
          Ie = Q,
          xt = se,
          U = le,
          j = T,
          C = L,
          u = z,
          I = q,
          ne = x,
          ye = M,
          _e = H,
          Ne = ue,
          De = ae,
          Pe = ge,
          St = Ce,
          vt = ze;
        if (
          ((v = q),
          (S = ze),
          (Y = S & 65535),
          (G = S >>> 16),
          (J = v & 65535),
          (X = v >>> 16),
          (v =
            ((T >>> 14) | (ae << 18)) ^
            ((T >>> 18) | (ae << 14)) ^
            ((ae >>> 9) | (T << 23))),
          (S =
            ((ae >>> 14) | (T << 18)) ^
            ((ae >>> 18) | (T << 14)) ^
            ((T >>> 9) | (ae << 23))),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (v = (T & L) ^ (~T & z)),
          (S = (ae & ge) ^ (~ae & Ce)),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (v = a[Je * 2]),
          (S = a[Je * 2 + 1]),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (v = g[Je % 16]),
          (S = b[Je % 16]),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (G += Y >>> 16),
          (J += G >>> 16),
          (X += J >>> 16),
          (re = (J & 65535) | (X << 16)),
          (pe = (Y & 65535) | (G << 16)),
          (v = re),
          (S = pe),
          (Y = S & 65535),
          (G = S >>> 16),
          (J = v & 65535),
          (X = v >>> 16),
          (v =
            (($ >>> 28) | (x << 4)) ^
            ((x >>> 2) | ($ << 30)) ^
            ((x >>> 7) | ($ << 25))),
          (S =
            ((x >>> 28) | ($ << 4)) ^
            (($ >>> 2) | (x << 30)) ^
            (($ >>> 7) | (x << 25))),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (v = ($ & Q) ^ ($ & se) ^ (Q & se)),
          (S = (x & M) ^ (x & H) ^ (M & H)),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (G += Y >>> 16),
          (J += G >>> 16),
          (X += J >>> 16),
          (I = (J & 65535) | (X << 16)),
          (vt = (Y & 65535) | (G << 16)),
          (v = U),
          (S = Ne),
          (Y = S & 65535),
          (G = S >>> 16),
          (J = v & 65535),
          (X = v >>> 16),
          (v = re),
          (S = pe),
          (Y += S & 65535),
          (G += S >>> 16),
          (J += v & 65535),
          (X += v >>> 16),
          (G += Y >>> 16),
          (J += G >>> 16),
          (X += J >>> 16),
          (U = (J & 65535) | (X << 16)),
          (Ne = (Y & 65535) | (G << 16)),
          (Q = Kr),
          (se = Ie),
          (le = xt),
          (T = U),
          (L = j),
          (z = C),
          (q = u),
          ($ = I),
          (M = ne),
          (H = ye),
          (ue = _e),
          (ae = Ne),
          (ge = De),
          (Ce = Pe),
          (ze = St),
          (x = vt),
          Je % 16 === 15)
        )
          for (var Be = 0; Be < 16; Be++)
            (v = g[Be]),
              (S = b[Be]),
              (Y = S & 65535),
              (G = S >>> 16),
              (J = v & 65535),
              (X = v >>> 16),
              (v = g[(Be + 9) % 16]),
              (S = b[(Be + 9) % 16]),
              (Y += S & 65535),
              (G += S >>> 16),
              (J += v & 65535),
              (X += v >>> 16),
              (re = g[(Be + 1) % 16]),
              (pe = b[(Be + 1) % 16]),
              (v =
                ((re >>> 1) | (pe << 31)) ^
                ((re >>> 8) | (pe << 24)) ^
                (re >>> 7)),
              (S =
                ((pe >>> 1) | (re << 31)) ^
                ((pe >>> 8) | (re << 24)) ^
                ((pe >>> 7) | (re << 25))),
              (Y += S & 65535),
              (G += S >>> 16),
              (J += v & 65535),
              (X += v >>> 16),
              (re = g[(Be + 14) % 16]),
              (pe = b[(Be + 14) % 16]),
              (v =
                ((re >>> 19) | (pe << 13)) ^
                ((pe >>> 29) | (re << 3)) ^
                (re >>> 6)),
              (S =
                ((pe >>> 19) | (re << 13)) ^
                ((re >>> 29) | (pe << 3)) ^
                ((pe >>> 6) | (re << 26))),
              (Y += S & 65535),
              (G += S >>> 16),
              (J += v & 65535),
              (X += v >>> 16),
              (G += Y >>> 16),
              (J += G >>> 16),
              (X += J >>> 16),
              (g[Be] = (J & 65535) | (X << 16)),
              (b[Be] = (Y & 65535) | (G << 16));
      }
      (v = $),
        (S = x),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[0]),
        (S = _[0]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[0] = $ = (J & 65535) | (X << 16)),
        (_[0] = x = (Y & 65535) | (G << 16)),
        (v = Q),
        (S = M),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[1]),
        (S = _[1]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[1] = Q = (J & 65535) | (X << 16)),
        (_[1] = M = (Y & 65535) | (G << 16)),
        (v = se),
        (S = H),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[2]),
        (S = _[2]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[2] = se = (J & 65535) | (X << 16)),
        (_[2] = H = (Y & 65535) | (G << 16)),
        (v = le),
        (S = ue),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[3]),
        (S = _[3]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[3] = le = (J & 65535) | (X << 16)),
        (_[3] = ue = (Y & 65535) | (G << 16)),
        (v = T),
        (S = ae),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[4]),
        (S = _[4]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[4] = T = (J & 65535) | (X << 16)),
        (_[4] = ae = (Y & 65535) | (G << 16)),
        (v = L),
        (S = ge),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[5]),
        (S = _[5]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[5] = L = (J & 65535) | (X << 16)),
        (_[5] = ge = (Y & 65535) | (G << 16)),
        (v = z),
        (S = Ce),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[6]),
        (S = _[6]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[6] = z = (J & 65535) | (X << 16)),
        (_[6] = Ce = (Y & 65535) | (G << 16)),
        (v = q),
        (S = ze),
        (Y = S & 65535),
        (G = S >>> 16),
        (J = v & 65535),
        (X = v >>> 16),
        (v = y[7]),
        (S = _[7]),
        (Y += S & 65535),
        (G += S >>> 16),
        (J += v & 65535),
        (X += v >>> 16),
        (G += Y >>> 16),
        (J += G >>> 16),
        (X += J >>> 16),
        (y[7] = q = (J & 65535) | (X << 16)),
        (_[7] = ze = (Y & 65535) | (G << 16)),
        (N += 128),
        (B -= 128);
    }
    return N;
  }
  function f(g) {
    var b = new n();
    b.update(g);
    var y = b.digest();
    return b.clean(), y;
  }
  s.hash = f;
})(Jf);
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 }),
    (s.convertSecretKeyToX25519 =
      s.convertPublicKeyToX25519 =
      s.verify =
      s.sign =
      s.extractPublicKeyFromSecretKey =
      s.generateKeyPair =
      s.generateKeyPairFromSeed =
      s.SEED_LENGTH =
      s.SECRET_KEY_LENGTH =
      s.PUBLIC_KEY_LENGTH =
      s.SIGNATURE_LENGTH =
        void 0);
  const t = Lo,
    r = Jf,
    n = Af;
  (s.SIGNATURE_LENGTH = 64),
    (s.PUBLIC_KEY_LENGTH = 32),
    (s.SECRET_KEY_LENGTH = 64),
    (s.SEED_LENGTH = 32);
  function a(U) {
    const j = new Float64Array(16);
    if (U) for (let C = 0; C < U.length; C++) j[C] = U[C];
    return j;
  }
  const h = new Uint8Array(32);
  h[0] = 9;
  const f = a(),
    g = a([1]),
    b = a([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    y = a([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    _ = a([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    P = a([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    N = a([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function B(U, j) {
    for (let C = 0; C < 16; C++) U[C] = j[C] | 0;
  }
  function $(U) {
    let j = 1;
    for (let C = 0; C < 16; C++) {
      let u = U[C] + j + 65535;
      (j = Math.floor(u / 65536)), (U[C] = u - j * 65536);
    }
    U[0] += j - 1 + 37 * (j - 1);
  }
  function Q(U, j, C) {
    const u = ~(C - 1);
    for (let I = 0; I < 16; I++) {
      const ne = u & (U[I] ^ j[I]);
      (U[I] ^= ne), (j[I] ^= ne);
    }
  }
  function se(U, j) {
    const C = a(),
      u = a();
    for (let I = 0; I < 16; I++) u[I] = j[I];
    $(u), $(u), $(u);
    for (let I = 0; I < 2; I++) {
      C[0] = u[0] - 65517;
      for (let ye = 1; ye < 15; ye++)
        (C[ye] = u[ye] - 65535 - ((C[ye - 1] >> 16) & 1)), (C[ye - 1] &= 65535);
      C[15] = u[15] - 32767 - ((C[14] >> 16) & 1);
      const ne = (C[15] >> 16) & 1;
      (C[14] &= 65535), Q(u, C, 1 - ne);
    }
    for (let I = 0; I < 16; I++)
      (U[2 * I] = u[I] & 255), (U[2 * I + 1] = u[I] >> 8);
  }
  function le(U, j) {
    let C = 0;
    for (let u = 0; u < 32; u++) C |= U[u] ^ j[u];
    return (1 & ((C - 1) >>> 8)) - 1;
  }
  function T(U, j) {
    const C = new Uint8Array(32),
      u = new Uint8Array(32);
    return se(C, U), se(u, j), le(C, u);
  }
  function L(U) {
    const j = new Uint8Array(32);
    return se(j, U), j[0] & 1;
  }
  function z(U, j) {
    for (let C = 0; C < 16; C++) U[C] = j[2 * C] + (j[2 * C + 1] << 8);
    U[15] &= 32767;
  }
  function q(U, j, C) {
    for (let u = 0; u < 16; u++) U[u] = j[u] + C[u];
  }
  function x(U, j, C) {
    for (let u = 0; u < 16; u++) U[u] = j[u] - C[u];
  }
  function M(U, j, C) {
    let u,
      I,
      ne = 0,
      ye = 0,
      _e = 0,
      Ne = 0,
      De = 0,
      Pe = 0,
      St = 0,
      vt = 0,
      ot = 0,
      je = 0,
      Ye = 0,
      Xe = 0,
      at = 0,
      ke = 0,
      Ze = 0,
      $e = 0,
      Ke = 0,
      ht = 0,
      Ue = 0,
      Pt = 0,
      Lt = 0,
      Bt = 0,
      Kt = 0,
      Ut = 0,
      Qt = 0,
      or = 0,
      Fr = 0,
      Yt = 0,
      Zr = 0,
      vi = 0,
      $i = 0,
      lt = C[0],
      rt = C[1],
      ft = C[2],
      dt = C[3],
      ct = C[4],
      it = C[5],
      Ot = C[6],
      Rt = C[7],
      pt = C[8],
      At = C[9],
      gt = C[10],
      wt = C[11],
      yt = C[12],
      Qe = C[13],
      Tt = C[14],
      Ct = C[15];
    (u = j[0]),
      (ne += u * lt),
      (ye += u * rt),
      (_e += u * ft),
      (Ne += u * dt),
      (De += u * ct),
      (Pe += u * it),
      (St += u * Ot),
      (vt += u * Rt),
      (ot += u * pt),
      (je += u * At),
      (Ye += u * gt),
      (Xe += u * wt),
      (at += u * yt),
      (ke += u * Qe),
      (Ze += u * Tt),
      ($e += u * Ct),
      (u = j[1]),
      (ye += u * lt),
      (_e += u * rt),
      (Ne += u * ft),
      (De += u * dt),
      (Pe += u * ct),
      (St += u * it),
      (vt += u * Ot),
      (ot += u * Rt),
      (je += u * pt),
      (Ye += u * At),
      (Xe += u * gt),
      (at += u * wt),
      (ke += u * yt),
      (Ze += u * Qe),
      ($e += u * Tt),
      (Ke += u * Ct),
      (u = j[2]),
      (_e += u * lt),
      (Ne += u * rt),
      (De += u * ft),
      (Pe += u * dt),
      (St += u * ct),
      (vt += u * it),
      (ot += u * Ot),
      (je += u * Rt),
      (Ye += u * pt),
      (Xe += u * At),
      (at += u * gt),
      (ke += u * wt),
      (Ze += u * yt),
      ($e += u * Qe),
      (Ke += u * Tt),
      (ht += u * Ct),
      (u = j[3]),
      (Ne += u * lt),
      (De += u * rt),
      (Pe += u * ft),
      (St += u * dt),
      (vt += u * ct),
      (ot += u * it),
      (je += u * Ot),
      (Ye += u * Rt),
      (Xe += u * pt),
      (at += u * At),
      (ke += u * gt),
      (Ze += u * wt),
      ($e += u * yt),
      (Ke += u * Qe),
      (ht += u * Tt),
      (Ue += u * Ct),
      (u = j[4]),
      (De += u * lt),
      (Pe += u * rt),
      (St += u * ft),
      (vt += u * dt),
      (ot += u * ct),
      (je += u * it),
      (Ye += u * Ot),
      (Xe += u * Rt),
      (at += u * pt),
      (ke += u * At),
      (Ze += u * gt),
      ($e += u * wt),
      (Ke += u * yt),
      (ht += u * Qe),
      (Ue += u * Tt),
      (Pt += u * Ct),
      (u = j[5]),
      (Pe += u * lt),
      (St += u * rt),
      (vt += u * ft),
      (ot += u * dt),
      (je += u * ct),
      (Ye += u * it),
      (Xe += u * Ot),
      (at += u * Rt),
      (ke += u * pt),
      (Ze += u * At),
      ($e += u * gt),
      (Ke += u * wt),
      (ht += u * yt),
      (Ue += u * Qe),
      (Pt += u * Tt),
      (Lt += u * Ct),
      (u = j[6]),
      (St += u * lt),
      (vt += u * rt),
      (ot += u * ft),
      (je += u * dt),
      (Ye += u * ct),
      (Xe += u * it),
      (at += u * Ot),
      (ke += u * Rt),
      (Ze += u * pt),
      ($e += u * At),
      (Ke += u * gt),
      (ht += u * wt),
      (Ue += u * yt),
      (Pt += u * Qe),
      (Lt += u * Tt),
      (Bt += u * Ct),
      (u = j[7]),
      (vt += u * lt),
      (ot += u * rt),
      (je += u * ft),
      (Ye += u * dt),
      (Xe += u * ct),
      (at += u * it),
      (ke += u * Ot),
      (Ze += u * Rt),
      ($e += u * pt),
      (Ke += u * At),
      (ht += u * gt),
      (Ue += u * wt),
      (Pt += u * yt),
      (Lt += u * Qe),
      (Bt += u * Tt),
      (Kt += u * Ct),
      (u = j[8]),
      (ot += u * lt),
      (je += u * rt),
      (Ye += u * ft),
      (Xe += u * dt),
      (at += u * ct),
      (ke += u * it),
      (Ze += u * Ot),
      ($e += u * Rt),
      (Ke += u * pt),
      (ht += u * At),
      (Ue += u * gt),
      (Pt += u * wt),
      (Lt += u * yt),
      (Bt += u * Qe),
      (Kt += u * Tt),
      (Ut += u * Ct),
      (u = j[9]),
      (je += u * lt),
      (Ye += u * rt),
      (Xe += u * ft),
      (at += u * dt),
      (ke += u * ct),
      (Ze += u * it),
      ($e += u * Ot),
      (Ke += u * Rt),
      (ht += u * pt),
      (Ue += u * At),
      (Pt += u * gt),
      (Lt += u * wt),
      (Bt += u * yt),
      (Kt += u * Qe),
      (Ut += u * Tt),
      (Qt += u * Ct),
      (u = j[10]),
      (Ye += u * lt),
      (Xe += u * rt),
      (at += u * ft),
      (ke += u * dt),
      (Ze += u * ct),
      ($e += u * it),
      (Ke += u * Ot),
      (ht += u * Rt),
      (Ue += u * pt),
      (Pt += u * At),
      (Lt += u * gt),
      (Bt += u * wt),
      (Kt += u * yt),
      (Ut += u * Qe),
      (Qt += u * Tt),
      (or += u * Ct),
      (u = j[11]),
      (Xe += u * lt),
      (at += u * rt),
      (ke += u * ft),
      (Ze += u * dt),
      ($e += u * ct),
      (Ke += u * it),
      (ht += u * Ot),
      (Ue += u * Rt),
      (Pt += u * pt),
      (Lt += u * At),
      (Bt += u * gt),
      (Kt += u * wt),
      (Ut += u * yt),
      (Qt += u * Qe),
      (or += u * Tt),
      (Fr += u * Ct),
      (u = j[12]),
      (at += u * lt),
      (ke += u * rt),
      (Ze += u * ft),
      ($e += u * dt),
      (Ke += u * ct),
      (ht += u * it),
      (Ue += u * Ot),
      (Pt += u * Rt),
      (Lt += u * pt),
      (Bt += u * At),
      (Kt += u * gt),
      (Ut += u * wt),
      (Qt += u * yt),
      (or += u * Qe),
      (Fr += u * Tt),
      (Yt += u * Ct),
      (u = j[13]),
      (ke += u * lt),
      (Ze += u * rt),
      ($e += u * ft),
      (Ke += u * dt),
      (ht += u * ct),
      (Ue += u * it),
      (Pt += u * Ot),
      (Lt += u * Rt),
      (Bt += u * pt),
      (Kt += u * At),
      (Ut += u * gt),
      (Qt += u * wt),
      (or += u * yt),
      (Fr += u * Qe),
      (Yt += u * Tt),
      (Zr += u * Ct),
      (u = j[14]),
      (Ze += u * lt),
      ($e += u * rt),
      (Ke += u * ft),
      (ht += u * dt),
      (Ue += u * ct),
      (Pt += u * it),
      (Lt += u * Ot),
      (Bt += u * Rt),
      (Kt += u * pt),
      (Ut += u * At),
      (Qt += u * gt),
      (or += u * wt),
      (Fr += u * yt),
      (Yt += u * Qe),
      (Zr += u * Tt),
      (vi += u * Ct),
      (u = j[15]),
      ($e += u * lt),
      (Ke += u * rt),
      (ht += u * ft),
      (Ue += u * dt),
      (Pt += u * ct),
      (Lt += u * it),
      (Bt += u * Ot),
      (Kt += u * Rt),
      (Ut += u * pt),
      (Qt += u * At),
      (or += u * gt),
      (Fr += u * wt),
      (Yt += u * yt),
      (Zr += u * Qe),
      (vi += u * Tt),
      ($i += u * Ct),
      (ne += 38 * Ke),
      (ye += 38 * ht),
      (_e += 38 * Ue),
      (Ne += 38 * Pt),
      (De += 38 * Lt),
      (Pe += 38 * Bt),
      (St += 38 * Kt),
      (vt += 38 * Ut),
      (ot += 38 * Qt),
      (je += 38 * or),
      (Ye += 38 * Fr),
      (Xe += 38 * Yt),
      (at += 38 * Zr),
      (ke += 38 * vi),
      (Ze += 38 * $i),
      (I = 1),
      (u = ne + I + 65535),
      (I = Math.floor(u / 65536)),
      (ne = u - I * 65536),
      (u = ye + I + 65535),
      (I = Math.floor(u / 65536)),
      (ye = u - I * 65536),
      (u = _e + I + 65535),
      (I = Math.floor(u / 65536)),
      (_e = u - I * 65536),
      (u = Ne + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ne = u - I * 65536),
      (u = De + I + 65535),
      (I = Math.floor(u / 65536)),
      (De = u - I * 65536),
      (u = Pe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Pe = u - I * 65536),
      (u = St + I + 65535),
      (I = Math.floor(u / 65536)),
      (St = u - I * 65536),
      (u = vt + I + 65535),
      (I = Math.floor(u / 65536)),
      (vt = u - I * 65536),
      (u = ot + I + 65535),
      (I = Math.floor(u / 65536)),
      (ot = u - I * 65536),
      (u = je + I + 65535),
      (I = Math.floor(u / 65536)),
      (je = u - I * 65536),
      (u = Ye + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ye = u - I * 65536),
      (u = Xe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Xe = u - I * 65536),
      (u = at + I + 65535),
      (I = Math.floor(u / 65536)),
      (at = u - I * 65536),
      (u = ke + I + 65535),
      (I = Math.floor(u / 65536)),
      (ke = u - I * 65536),
      (u = Ze + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ze = u - I * 65536),
      (u = $e + I + 65535),
      (I = Math.floor(u / 65536)),
      ($e = u - I * 65536),
      (ne += I - 1 + 37 * (I - 1)),
      (I = 1),
      (u = ne + I + 65535),
      (I = Math.floor(u / 65536)),
      (ne = u - I * 65536),
      (u = ye + I + 65535),
      (I = Math.floor(u / 65536)),
      (ye = u - I * 65536),
      (u = _e + I + 65535),
      (I = Math.floor(u / 65536)),
      (_e = u - I * 65536),
      (u = Ne + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ne = u - I * 65536),
      (u = De + I + 65535),
      (I = Math.floor(u / 65536)),
      (De = u - I * 65536),
      (u = Pe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Pe = u - I * 65536),
      (u = St + I + 65535),
      (I = Math.floor(u / 65536)),
      (St = u - I * 65536),
      (u = vt + I + 65535),
      (I = Math.floor(u / 65536)),
      (vt = u - I * 65536),
      (u = ot + I + 65535),
      (I = Math.floor(u / 65536)),
      (ot = u - I * 65536),
      (u = je + I + 65535),
      (I = Math.floor(u / 65536)),
      (je = u - I * 65536),
      (u = Ye + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ye = u - I * 65536),
      (u = Xe + I + 65535),
      (I = Math.floor(u / 65536)),
      (Xe = u - I * 65536),
      (u = at + I + 65535),
      (I = Math.floor(u / 65536)),
      (at = u - I * 65536),
      (u = ke + I + 65535),
      (I = Math.floor(u / 65536)),
      (ke = u - I * 65536),
      (u = Ze + I + 65535),
      (I = Math.floor(u / 65536)),
      (Ze = u - I * 65536),
      (u = $e + I + 65535),
      (I = Math.floor(u / 65536)),
      ($e = u - I * 65536),
      (ne += I - 1 + 37 * (I - 1)),
      (U[0] = ne),
      (U[1] = ye),
      (U[2] = _e),
      (U[3] = Ne),
      (U[4] = De),
      (U[5] = Pe),
      (U[6] = St),
      (U[7] = vt),
      (U[8] = ot),
      (U[9] = je),
      (U[10] = Ye),
      (U[11] = Xe),
      (U[12] = at),
      (U[13] = ke),
      (U[14] = Ze),
      (U[15] = $e);
  }
  function H(U, j) {
    M(U, j, j);
  }
  function ue(U, j) {
    const C = a();
    let u;
    for (u = 0; u < 16; u++) C[u] = j[u];
    for (u = 253; u >= 0; u--) H(C, C), u !== 2 && u !== 4 && M(C, C, j);
    for (u = 0; u < 16; u++) U[u] = C[u];
  }
  function ae(U, j) {
    const C = a();
    let u;
    for (u = 0; u < 16; u++) C[u] = j[u];
    for (u = 250; u >= 0; u--) H(C, C), u !== 1 && M(C, C, j);
    for (u = 0; u < 16; u++) U[u] = C[u];
  }
  function ge(U, j) {
    const C = a(),
      u = a(),
      I = a(),
      ne = a(),
      ye = a(),
      _e = a(),
      Ne = a(),
      De = a(),
      Pe = a();
    x(C, U[1], U[0]),
      x(Pe, j[1], j[0]),
      M(C, C, Pe),
      q(u, U[0], U[1]),
      q(Pe, j[0], j[1]),
      M(u, u, Pe),
      M(I, U[3], j[3]),
      M(I, I, y),
      M(ne, U[2], j[2]),
      q(ne, ne, ne),
      x(ye, u, C),
      x(_e, ne, I),
      q(Ne, ne, I),
      q(De, u, C),
      M(U[0], ye, _e),
      M(U[1], De, Ne),
      M(U[2], Ne, _e),
      M(U[3], ye, De);
  }
  function Ce(U, j, C) {
    for (let u = 0; u < 4; u++) Q(U[u], j[u], C);
  }
  function ze(U, j) {
    const C = a(),
      u = a(),
      I = a();
    ue(I, j[2]), M(C, j[0], I), M(u, j[1], I), se(U, u), (U[31] ^= L(C) << 7);
  }
  function v(U, j, C) {
    B(U[0], f), B(U[1], g), B(U[2], g), B(U[3], f);
    for (let u = 255; u >= 0; --u) {
      const I = (C[(u / 8) | 0] >> (u & 7)) & 1;
      Ce(U, j, I), ge(j, U), ge(U, U), Ce(U, j, I);
    }
  }
  function S(U, j) {
    const C = [a(), a(), a(), a()];
    B(C[0], _), B(C[1], P), B(C[2], g), M(C[3], _, P), v(U, C, j);
  }
  function re(U) {
    if (U.length !== s.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${s.SEED_LENGTH} bytes`);
    const j = (0, r.hash)(U);
    (j[0] &= 248), (j[31] &= 127), (j[31] |= 64);
    const C = new Uint8Array(32),
      u = [a(), a(), a(), a()];
    S(u, j), ze(C, u);
    const I = new Uint8Array(64);
    return I.set(U), I.set(C, 32), { publicKey: C, secretKey: I };
  }
  s.generateKeyPairFromSeed = re;
  function pe(U) {
    const j = (0, t.randomBytes)(32, U),
      C = re(j);
    return (0, n.wipe)(j), C;
  }
  s.generateKeyPair = pe;
  function Y(U) {
    if (U.length !== s.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${s.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(U.subarray(32));
  }
  s.extractPublicKeyFromSecretKey = Y;
  const G = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function J(U, j) {
    let C, u, I, ne;
    for (u = 63; u >= 32; --u) {
      for (C = 0, I = u - 32, ne = u - 12; I < ne; ++I)
        (j[I] += C - 16 * j[u] * G[I - (u - 32)]),
          (C = Math.floor((j[I] + 128) / 256)),
          (j[I] -= C * 256);
      (j[I] += C), (j[u] = 0);
    }
    for (C = 0, I = 0; I < 32; I++)
      (j[I] += C - (j[31] >> 4) * G[I]), (C = j[I] >> 8), (j[I] &= 255);
    for (I = 0; I < 32; I++) j[I] -= C * G[I];
    for (u = 0; u < 32; u++) (j[u + 1] += j[u] >> 8), (U[u] = j[u] & 255);
  }
  function X(U) {
    const j = new Float64Array(64);
    for (let C = 0; C < 64; C++) j[C] = U[C];
    for (let C = 0; C < 64; C++) U[C] = 0;
    J(U, j);
  }
  function Je(U, j) {
    const C = new Float64Array(64),
      u = [a(), a(), a(), a()],
      I = (0, r.hash)(U.subarray(0, 32));
    (I[0] &= 248), (I[31] &= 127), (I[31] |= 64);
    const ne = new Uint8Array(64);
    ne.set(I.subarray(32), 32);
    const ye = new r.SHA512();
    ye.update(ne.subarray(32)), ye.update(j);
    const _e = ye.digest();
    ye.clean(),
      X(_e),
      S(u, _e),
      ze(ne, u),
      ye.reset(),
      ye.update(ne.subarray(0, 32)),
      ye.update(U.subarray(32)),
      ye.update(j);
    const Ne = ye.digest();
    X(Ne);
    for (let De = 0; De < 32; De++) C[De] = _e[De];
    for (let De = 0; De < 32; De++)
      for (let Pe = 0; Pe < 32; Pe++) C[De + Pe] += Ne[De] * I[Pe];
    return J(ne.subarray(32), C), ne;
  }
  s.sign = Je;
  function Be(U, j) {
    const C = a(),
      u = a(),
      I = a(),
      ne = a(),
      ye = a(),
      _e = a(),
      Ne = a();
    return (
      B(U[2], g),
      z(U[1], j),
      H(I, U[1]),
      M(ne, I, b),
      x(I, I, U[2]),
      q(ne, U[2], ne),
      H(ye, ne),
      H(_e, ye),
      M(Ne, _e, ye),
      M(C, Ne, I),
      M(C, C, ne),
      ae(C, C),
      M(C, C, I),
      M(C, C, ne),
      M(C, C, ne),
      M(U[0], C, ne),
      H(u, U[0]),
      M(u, u, ne),
      T(u, I) && M(U[0], U[0], N),
      H(u, U[0]),
      M(u, u, ne),
      T(u, I)
        ? -1
        : (L(U[0]) === j[31] >> 7 && x(U[0], f, U[0]), M(U[3], U[0], U[1]), 0)
    );
  }
  function Kr(U, j, C) {
    const u = new Uint8Array(32),
      I = [a(), a(), a(), a()],
      ne = [a(), a(), a(), a()];
    if (C.length !== s.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${s.SIGNATURE_LENGTH} bytes`);
    if (Be(ne, U)) return !1;
    const ye = new r.SHA512();
    ye.update(C.subarray(0, 32)), ye.update(U), ye.update(j);
    const _e = ye.digest();
    return (
      X(_e), v(I, ne, _e), S(ne, C.subarray(32)), ge(I, ne), ze(u, I), !le(C, u)
    );
  }
  s.verify = Kr;
  function Ie(U) {
    let j = [a(), a(), a(), a()];
    if (Be(j, U)) throw new Error("Ed25519: invalid public key");
    let C = a(),
      u = a(),
      I = j[1];
    q(C, g, I), x(u, g, I), ue(u, u), M(C, C, u);
    let ne = new Uint8Array(32);
    return se(ne, C), ne;
  }
  s.convertPublicKeyToX25519 = Ie;
  function xt(U) {
    const j = (0, r.hash)(U.subarray(0, 32));
    (j[0] &= 248), (j[31] &= 127), (j[31] |= 64);
    const C = new Uint8Array(j.subarray(0, 32));
    return (0, n.wipe)(j), C;
  }
  s.convertSecretKeyToX25519 = xt;
})(Jc);
const e1 = "EdDSA",
  t1 = "JWT",
  Qf = ".",
  Yf = "base64url",
  r1 = "utf8",
  i1 = "utf8",
  n1 = ":",
  s1 = "did",
  o1 = "key",
  jl = "base58btc",
  a1 = "z",
  c1 = "K36",
  u1 = 32;
function No(s) {
  return sr(gr(Qi(s), r1), Yf);
}
function Xf(s) {
  const t = gr(c1, jl),
    r = a1 + sr(Rc([t, s]), jl);
  return [s1, o1, r].join(n1);
}
function h1(s) {
  return sr(s, Yf);
}
function l1(s) {
  return gr([No(s.header), No(s.payload)].join(Qf), i1);
}
function f1(s) {
  return [No(s.header), No(s.payload), h1(s.signature)].join(Qf);
}
function Ml(s = Lo.randomBytes(u1)) {
  return Jc.generateKeyPairFromSeed(s);
}
async function d1(s, t, r, n, a = ce.fromMiliseconds(Date.now())) {
  const h = { alg: e1, typ: t1 },
    f = Xf(n.publicKey),
    g = a + r,
    b = { iss: f, sub: s, aud: t, iat: a, exp: g },
    y = l1({ header: h, payload: b }),
    _ = Jc.sign(n.secretKey, y);
  return f1({ header: h, payload: b, signature: _ });
}
const p1 = "PARSE_ERROR",
  g1 = "INVALID_REQUEST",
  y1 = "METHOD_NOT_FOUND",
  m1 = "INVALID_PARAMS",
  Zf = "INTERNAL_ERROR",
  Qc = "SERVER_ERROR",
  v1 = [-32700, -32600, -32601, -32602, -32603],
  as = {
    [p1]: { code: -32700, message: "Parse error" },
    [g1]: { code: -32600, message: "Invalid Request" },
    [y1]: { code: -32601, message: "Method not found" },
    [m1]: { code: -32602, message: "Invalid params" },
    [Zf]: { code: -32603, message: "Internal error" },
    [Qc]: { code: -32e3, message: "Server error" },
  },
  ed = Qc;
function w1(s) {
  return v1.includes(s);
}
function Ul(s) {
  return Object.keys(as).includes(s) ? as[s] : as[ed];
}
function b1(s) {
  const t = Object.values(as).find((r) => r.code === s);
  return t || as[ed];
}
function td(s, t, r) {
  return s.message.includes("getaddrinfo ENOTFOUND") ||
    s.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : s;
}
var rd = {},
  li = {},
  ql;
function _1() {
  if (ql) return li;
  (ql = 1),
    Object.defineProperty(li, "__esModule", { value: !0 }),
    (li.isBrowserCryptoAvailable =
      li.getSubtleCrypto =
      li.getBrowerCrypto =
        void 0);
  function s() {
    return (
      (Br === null || Br === void 0 ? void 0 : Br.crypto) ||
      (Br === null || Br === void 0 ? void 0 : Br.msCrypto) ||
      {}
    );
  }
  li.getBrowerCrypto = s;
  function t() {
    const n = s();
    return n.subtle || n.webkitSubtle;
  }
  li.getSubtleCrypto = t;
  function r() {
    return !!s() && !!t();
  }
  return (li.isBrowserCryptoAvailable = r), li;
}
var fi = {},
  zl;
function E1() {
  if (zl) return fi;
  (zl = 1),
    Object.defineProperty(fi, "__esModule", { value: !0 }),
    (fi.isBrowser = fi.isNode = fi.isReactNative = void 0);
  function s() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  fi.isReactNative = s;
  function t() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  fi.isNode = t;
  function r() {
    return !s() && !t();
  }
  return (fi.isBrowser = r), fi;
}
(function (s) {
  Object.defineProperty(s, "__esModule", { value: !0 });
  const t = On;
  t.__exportStar(_1(), s), t.__exportStar(E1(), s);
})(rd);
function Yc(s = 3) {
  const t = Date.now() * Math.pow(10, s),
    r = Math.floor(Math.random() * Math.pow(10, s));
  return t + r;
}
function id(s = 6) {
  return BigInt(Yc(s));
}
function Pn(s, t, r) {
  return { id: r || Yc(), jsonrpc: "2.0", method: s, params: t };
}
function Xc(s, t) {
  return { id: s, jsonrpc: "2.0", result: t };
}
function jo(s, t, r) {
  return { id: s, jsonrpc: "2.0", error: I1(t, r) };
}
function I1(s, t) {
  return typeof s > "u"
    ? Ul(Zf)
    : (typeof s == "string" &&
        (s = Object.assign(Object.assign({}, Ul(Qc)), { message: s })),
      typeof t < "u" && (s.data = t),
      w1(s.code) && (s = b1(s.code)),
      s);
}
class x1 {}
class S1 extends x1 {
  constructor() {
    super();
  }
}
class P1 extends S1 {
  constructor(t) {
    super();
  }
}
const O1 = "^https?:",
  R1 = "^wss?:";
function A1(s) {
  const t = s.match(new RegExp(/^\w+:/, "gi"));
  if (!(!t || !t.length)) return t[0];
}
function nd(s, t) {
  const r = A1(s);
  return typeof r > "u" ? !1 : new RegExp(t).test(r);
}
function kl(s) {
  return nd(s, O1);
}
function Hl(s) {
  return nd(s, R1);
}
function T1(s) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(s);
}
function sd(s) {
  return (
    typeof s == "object" && "id" in s && "jsonrpc" in s && s.jsonrpc === "2.0"
  );
}
function Zc(s) {
  return sd(s) && "method" in s;
}
function Mo(s) {
  return sd(s) && (gi(s) || Hr(s));
}
function gi(s) {
  return "result" in s;
}
function Hr(s) {
  return "error" in s;
}
class yi extends P1 {
  constructor(t) {
    super(t),
      (this.events = new $r.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(
      Pn(t.method, t.params || [], t.id || id().toString()),
      r
    );
  }
  async requestStrict(t, r) {
    return new Promise(async (n, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (h) {
          a(h);
        }
      this.events.on(`${t.id}`, (h) => {
        Hr(h) ? a(h.error) : n(h.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (h) {
        a(h);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit("payload", t),
      Mo(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit("message", { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == "string" &&
        (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit("connect"));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (t) => this.onPayload(t)),
      this.connection.on("close", (t) => this.onClose(t)),
      this.connection.on("error", (t) => this.events.emit("error", t)),
      this.connection.on("register_error", (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const C1 = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : require("ws"),
  N1 = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  Bl = (s) => s.split("?")[0],
  Kl = 10,
  $1 = C1();
let D1 = class {
  constructor(t) {
    if (
      ((this.url = t),
      (this.events = new $r.EventEmitter()),
      (this.registering = !1),
      !Hl(t))
    )
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    this.url = t;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      (this.socket.onclose = (n) => {
        this.onClose(n), t();
      }),
        this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(Qi(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!Hl(t))
      throw new Error(
        `Provided URL is not compatible with WebSocket connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((n, a) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), a(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.socket > "u"))
                return a(
                  new Error("WebSocket connection is missing or invalid")
                );
              n(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, n) => {
        const a = new URLSearchParams(t).get("origin"),
          h = rd.isReactNative()
            ? { headers: { origin: a } }
            : { rejectUnauthorized: !T1(t) },
          f = new $1(t, [], h);
        N1()
          ? (f.onerror = (g) => {
              const b = g;
              n(this.emitError(b.error));
            })
          : f.on("error", (g) => {
              n(this.emitError(g));
            }),
          (f.onopen = () => {
            this.onOpen(f), r(f);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit("open");
  }
  onClose(t) {
    (this.socket = void 0),
      (this.registering = !1),
      this.events.emit("close", t);
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? ds(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r),
      a = n.message || n.toString(),
      h = jo(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return td(t, Bl(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Kl && this.events.setMaxListeners(Kl);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        (t == null ? void 0 : t.message) ||
          `WebSocket connection failed for host: ${Bl(this.url)}`
      )
    );
    return this.events.emit("register_error", r), r;
  }
};
var $o = { exports: {} };
$o.exports;
(function (s, t) {
  var r = 200,
    n = "__lodash_hash_undefined__",
    a = 1,
    h = 2,
    f = 9007199254740991,
    g = "[object Arguments]",
    b = "[object Array]",
    y = "[object AsyncFunction]",
    _ = "[object Boolean]",
    P = "[object Date]",
    N = "[object Error]",
    B = "[object Function]",
    $ = "[object GeneratorFunction]",
    Q = "[object Map]",
    se = "[object Number]",
    le = "[object Null]",
    T = "[object Object]",
    L = "[object Promise]",
    z = "[object Proxy]",
    q = "[object RegExp]",
    x = "[object Set]",
    M = "[object String]",
    H = "[object Symbol]",
    ue = "[object Undefined]",
    ae = "[object WeakMap]",
    ge = "[object ArrayBuffer]",
    Ce = "[object DataView]",
    ze = "[object Float32Array]",
    v = "[object Float64Array]",
    S = "[object Int8Array]",
    re = "[object Int16Array]",
    pe = "[object Int32Array]",
    Y = "[object Uint8Array]",
    G = "[object Uint8ClampedArray]",
    J = "[object Uint16Array]",
    X = "[object Uint32Array]",
    Je = /[\\^$.*+?()[\]{}|]/g,
    Be = /^\[object .+?Constructor\]$/,
    Kr = /^(?:0|[1-9]\d*)$/,
    Ie = {};
  (Ie[ze] =
    Ie[v] =
    Ie[S] =
    Ie[re] =
    Ie[pe] =
    Ie[Y] =
    Ie[G] =
    Ie[J] =
    Ie[X] =
      !0),
    (Ie[g] =
      Ie[b] =
      Ie[ge] =
      Ie[_] =
      Ie[Ce] =
      Ie[P] =
      Ie[N] =
      Ie[B] =
      Ie[Q] =
      Ie[se] =
      Ie[T] =
      Ie[q] =
      Ie[x] =
      Ie[M] =
      Ie[ae] =
        !1);
  var xt = typeof Br == "object" && Br && Br.Object === Object && Br,
    U = typeof self == "object" && self && self.Object === Object && self,
    j = xt || U || Function("return this")(),
    C = t && !t.nodeType && t,
    u = C && !0 && s && !s.nodeType && s,
    I = u && u.exports === C,
    ne = I && xt.process,
    ye = (function () {
      try {
        return ne && ne.binding && ne.binding("util");
      } catch {}
    })(),
    _e = ye && ye.isTypedArray;
  function Ne(m, O) {
    for (
      var V = -1, te = m == null ? 0 : m.length, Ve = 0, ve = [];
      ++V < te;

    ) {
      var et = m[V];
      O(et, V, m) && (ve[Ve++] = et);
    }
    return ve;
  }
  function De(m, O) {
    for (var V = -1, te = O.length, Ve = m.length; ++V < te; ) m[Ve + V] = O[V];
    return m;
  }
  function Pe(m, O) {
    for (var V = -1, te = m == null ? 0 : m.length; ++V < te; )
      if (O(m[V], V, m)) return !0;
    return !1;
  }
  function St(m, O) {
    for (var V = -1, te = Array(m); ++V < m; ) te[V] = O(V);
    return te;
  }
  function vt(m) {
    return function (O) {
      return m(O);
    };
  }
  function ot(m, O) {
    return m.has(O);
  }
  function je(m, O) {
    return m == null ? void 0 : m[O];
  }
  function Ye(m) {
    var O = -1,
      V = Array(m.size);
    return (
      m.forEach(function (te, Ve) {
        V[++O] = [Ve, te];
      }),
      V
    );
  }
  function Xe(m, O) {
    return function (V) {
      return m(O(V));
    };
  }
  function at(m) {
    var O = -1,
      V = Array(m.size);
    return (
      m.forEach(function (te) {
        V[++O] = te;
      }),
      V
    );
  }
  var ke = Array.prototype,
    Ze = Function.prototype,
    $e = Object.prototype,
    Ke = j["__core-js_shared__"],
    ht = Ze.toString,
    Ue = $e.hasOwnProperty,
    Pt = (function () {
      var m = /[^.]+$/.exec((Ke && Ke.keys && Ke.keys.IE_PROTO) || "");
      return m ? "Symbol(src)_1." + m : "";
    })(),
    Lt = $e.toString,
    Bt = RegExp(
      "^" +
        ht
          .call(Ue)
          .replace(Je, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    Kt = I ? j.Buffer : void 0,
    Ut = j.Symbol,
    Qt = j.Uint8Array,
    or = $e.propertyIsEnumerable,
    Fr = ke.splice,
    Yt = Ut ? Ut.toStringTag : void 0,
    Zr = Object.getOwnPropertySymbols,
    vi = Kt ? Kt.isBuffer : void 0,
    $i = Xe(Object.keys, Object),
    lt = yr(j, "DataView"),
    rt = yr(j, "Map"),
    ft = yr(j, "Promise"),
    dt = yr(j, "Set"),
    ct = yr(j, "WeakMap"),
    it = yr(Object, "create"),
    Ot = ti(lt),
    Rt = ti(rt),
    pt = ti(ft),
    At = ti(dt),
    gt = ti(ct),
    wt = Ut ? Ut.prototype : void 0,
    yt = wt ? wt.valueOf : void 0;
  function Qe(m) {
    var O = -1,
      V = m == null ? 0 : m.length;
    for (this.clear(); ++O < V; ) {
      var te = m[O];
      this.set(te[0], te[1]);
    }
  }
  function Tt() {
    (this.__data__ = it ? it(null) : {}), (this.size = 0);
  }
  function Ct(m) {
    var O = this.has(m) && delete this.__data__[m];
    return (this.size -= O ? 1 : 0), O;
  }
  function zo(m) {
    var O = this.__data__;
    if (it) {
      var V = O[m];
      return V === n ? void 0 : V;
    }
    return Ue.call(O, m) ? O[m] : void 0;
  }
  function ko(m) {
    var O = this.__data__;
    return it ? O[m] !== void 0 : Ue.call(O, m);
  }
  function Ho(m, O) {
    var V = this.__data__;
    return (
      (this.size += this.has(m) ? 0 : 1),
      (V[m] = it && O === void 0 ? n : O),
      this
    );
  }
  (Qe.prototype.clear = Tt),
    (Qe.prototype.delete = Ct),
    (Qe.prototype.get = zo),
    (Qe.prototype.has = ko),
    (Qe.prototype.set = Ho);
  function Ir(m) {
    var O = -1,
      V = m == null ? 0 : m.length;
    for (this.clear(); ++O < V; ) {
      var te = m[O];
      this.set(te[0], te[1]);
    }
  }
  function Bo() {
    (this.__data__ = []), (this.size = 0);
  }
  function Ko(m) {
    var O = this.__data__,
      V = Di(O, m);
    if (V < 0) return !1;
    var te = O.length - 1;
    return V == te ? O.pop() : Fr.call(O, V, 1), --this.size, !0;
  }
  function Fo(m) {
    var O = this.__data__,
      V = Di(O, m);
    return V < 0 ? void 0 : O[V][1];
  }
  function Vo(m) {
    return Di(this.__data__, m) > -1;
  }
  function Go(m, O) {
    var V = this.__data__,
      te = Di(V, m);
    return te < 0 ? (++this.size, V.push([m, O])) : (V[te][1] = O), this;
  }
  (Ir.prototype.clear = Bo),
    (Ir.prototype.delete = Ko),
    (Ir.prototype.get = Fo),
    (Ir.prototype.has = Vo),
    (Ir.prototype.set = Go);
  function ei(m) {
    var O = -1,
      V = m == null ? 0 : m.length;
    for (this.clear(); ++O < V; ) {
      var te = m[O];
      this.set(te[0], te[1]);
    }
  }
  function tn() {
    (this.size = 0),
      (this.__data__ = {
        hash: new Qe(),
        map: new (rt || Ir)(),
        string: new Qe(),
      });
  }
  function Wo(m) {
    var O = wi(this, m).delete(m);
    return (this.size -= O ? 1 : 0), O;
  }
  function rn(m) {
    return wi(this, m).get(m);
  }
  function Jo(m) {
    return wi(this, m).has(m);
  }
  function Qo(m, O) {
    var V = wi(this, m),
      te = V.size;
    return V.set(m, O), (this.size += V.size == te ? 0 : 1), this;
  }
  (ei.prototype.clear = tn),
    (ei.prototype.delete = Wo),
    (ei.prototype.get = rn),
    (ei.prototype.has = Jo),
    (ei.prototype.set = Qo);
  function nn(m) {
    var O = -1,
      V = m == null ? 0 : m.length;
    for (this.__data__ = new ei(); ++O < V; ) this.add(m[O]);
  }
  function gs(m) {
    return this.__data__.set(m, n), this;
  }
  function ys(m) {
    return this.__data__.has(m);
  }
  (nn.prototype.add = nn.prototype.push = gs), (nn.prototype.has = ys);
  function Dr(m) {
    var O = (this.__data__ = new Ir(m));
    this.size = O.size;
  }
  function Yo() {
    (this.__data__ = new Ir()), (this.size = 0);
  }
  function Xo(m) {
    var O = this.__data__,
      V = O.delete(m);
    return (this.size = O.size), V;
  }
  function Zo(m) {
    return this.__data__.get(m);
  }
  function ea(m) {
    return this.__data__.has(m);
  }
  function ms(m, O) {
    var V = this.__data__;
    if (V instanceof Ir) {
      var te = V.__data__;
      if (!rt || te.length < r - 1)
        return te.push([m, O]), (this.size = ++V.size), this;
      V = this.__data__ = new ei(te);
    }
    return V.set(m, O), (this.size = V.size), this;
  }
  (Dr.prototype.clear = Yo),
    (Dr.prototype.delete = Xo),
    (Dr.prototype.get = Zo),
    (Dr.prototype.has = ea),
    (Dr.prototype.set = ms);
  function vs(m, O) {
    var V = an(m),
      te = !V && Ts(m),
      Ve = !V && !te && Dn(m),
      ve = !V && !te && !Ve && $s(m),
      et = V || te || Ve || ve,
      Nt = et ? St(m.length, String) : [],
      Re = Nt.length;
    for (var Ge in m)
      (O || Ue.call(m, Ge)) &&
        !(
          et &&
          (Ge == "length" ||
            (Ve && (Ge == "offset" || Ge == "parent")) ||
            (ve &&
              (Ge == "buffer" || Ge == "byteLength" || Ge == "byteOffset")) ||
            Ss(Ge, Re))
        ) &&
        Nt.push(Ge);
    return Nt;
  }
  function Di(m, O) {
    for (var V = m.length; V--; ) if (As(m[V][0], O)) return V;
    return -1;
  }
  function Nn(m, O, V) {
    var te = O(m);
    return an(m) ? te : De(te, V(m));
  }
  function Li(m) {
    return m == null
      ? m === void 0
        ? ue
        : le
      : Yt && Yt in Object(m)
      ? Is(m)
      : ia(m);
  }
  function $n(m) {
    return Mi(m) && Li(m) == g;
  }
  function ji(m, O, V, te, Ve) {
    return m === O
      ? !0
      : m == null || O == null || (!Mi(m) && !Mi(O))
      ? m !== m && O !== O
      : ws(m, O, V, te, ji, Ve);
  }
  function ws(m, O, V, te, Ve, ve) {
    var et = an(m),
      Nt = an(O),
      Re = et ? b : Vr(m),
      Ge = Nt ? b : Vr(O);
    (Re = Re == g ? T : Re), (Ge = Ge == g ? T : Ge);
    var bt = Re == T,
      ar = Ge == T,
      $t = Re == Ge;
    if ($t && Dn(m)) {
      if (!Dn(O)) return !1;
      (et = !0), (bt = !1);
    }
    if ($t && !bt)
      return (
        ve || (ve = new Dr()),
        et || $s(m) ? sn(m, O, V, te, Ve, ve) : ra(m, O, Re, V, te, Ve, ve)
      );
    if (!(V & a)) {
      var tt = bt && Ue.call(m, "__wrapped__"),
        Xt = ar && Ue.call(O, "__wrapped__");
      if (tt || Xt) {
        var Lr = tt ? m.value() : m,
          xr = Xt ? O.value() : O;
        return ve || (ve = new Dr()), Ve(Lr, xr, V, te, ve);
      }
    }
    return $t ? (ve || (ve = new Dr()), Es(m, O, V, te, Ve, ve)) : !1;
  }
  function ta(m) {
    if (!Ns(m) || Os(m)) return !1;
    var O = cn(m) ? Bt : Be;
    return O.test(ti(m));
  }
  function bs(m) {
    return Mi(m) && Cs(m.length) && !!Ie[Li(m)];
  }
  function _s(m) {
    if (!Rs(m)) return $i(m);
    var O = [];
    for (var V in Object(m)) Ue.call(m, V) && V != "constructor" && O.push(V);
    return O;
  }
  function sn(m, O, V, te, Ve, ve) {
    var et = V & a,
      Nt = m.length,
      Re = O.length;
    if (Nt != Re && !(et && Re > Nt)) return !1;
    var Ge = ve.get(m);
    if (Ge && ve.get(O)) return Ge == O;
    var bt = -1,
      ar = !0,
      $t = V & h ? new nn() : void 0;
    for (ve.set(m, O), ve.set(O, m); ++bt < Nt; ) {
      var tt = m[bt],
        Xt = O[bt];
      if (te) var Lr = et ? te(Xt, tt, bt, O, m, ve) : te(tt, Xt, bt, m, O, ve);
      if (Lr !== void 0) {
        if (Lr) continue;
        ar = !1;
        break;
      }
      if ($t) {
        if (
          !Pe(O, function (xr, Gr) {
            if (!ot($t, Gr) && (tt === xr || Ve(tt, xr, V, te, ve)))
              return $t.push(Gr);
          })
        ) {
          ar = !1;
          break;
        }
      } else if (!(tt === Xt || Ve(tt, Xt, V, te, ve))) {
        ar = !1;
        break;
      }
    }
    return ve.delete(m), ve.delete(O), ar;
  }
  function ra(m, O, V, te, Ve, ve, et) {
    switch (V) {
      case Ce:
        if (m.byteLength != O.byteLength || m.byteOffset != O.byteOffset)
          return !1;
        (m = m.buffer), (O = O.buffer);
      case ge:
        return !(m.byteLength != O.byteLength || !ve(new Qt(m), new Qt(O)));
      case _:
      case P:
      case se:
        return As(+m, +O);
      case N:
        return m.name == O.name && m.message == O.message;
      case q:
      case M:
        return m == O + "";
      case Q:
        var Nt = Ye;
      case x:
        var Re = te & a;
        if ((Nt || (Nt = at), m.size != O.size && !Re)) return !1;
        var Ge = et.get(m);
        if (Ge) return Ge == O;
        (te |= h), et.set(m, O);
        var bt = sn(Nt(m), Nt(O), te, Ve, ve, et);
        return et.delete(m), bt;
      case H:
        if (yt) return yt.call(m) == yt.call(O);
    }
    return !1;
  }
  function Es(m, O, V, te, Ve, ve) {
    var et = V & a,
      Nt = on(m),
      Re = Nt.length,
      Ge = on(O),
      bt = Ge.length;
    if (Re != bt && !et) return !1;
    for (var ar = Re; ar--; ) {
      var $t = Nt[ar];
      if (!(et ? $t in O : Ue.call(O, $t))) return !1;
    }
    var tt = ve.get(m);
    if (tt && ve.get(O)) return tt == O;
    var Xt = !0;
    ve.set(m, O), ve.set(O, m);
    for (var Lr = et; ++ar < Re; ) {
      $t = Nt[ar];
      var xr = m[$t],
        Gr = O[$t];
      if (te) var Ln = et ? te(Gr, xr, $t, O, m, ve) : te(xr, Gr, $t, m, O, ve);
      if (!(Ln === void 0 ? xr === Gr || Ve(xr, Gr, V, te, ve) : Ln)) {
        Xt = !1;
        break;
      }
      Lr || (Lr = $t == "constructor");
    }
    if (Xt && !Lr) {
      var Ui = m.constructor,
        qt = O.constructor;
      Ui != qt &&
        "constructor" in m &&
        "constructor" in O &&
        !(
          typeof Ui == "function" &&
          Ui instanceof Ui &&
          typeof qt == "function" &&
          qt instanceof qt
        ) &&
        (Xt = !1);
    }
    return ve.delete(m), ve.delete(O), Xt;
  }
  function on(m) {
    return Nn(m, oa, xs);
  }
  function wi(m, O) {
    var V = m.__data__;
    return Ps(O) ? V[typeof O == "string" ? "string" : "hash"] : V.map;
  }
  function yr(m, O) {
    var V = je(m, O);
    return ta(V) ? V : void 0;
  }
  function Is(m) {
    var O = Ue.call(m, Yt),
      V = m[Yt];
    try {
      m[Yt] = void 0;
      var te = !0;
    } catch {}
    var Ve = Lt.call(m);
    return te && (O ? (m[Yt] = V) : delete m[Yt]), Ve;
  }
  var xs = Zr
      ? function (m) {
          return m == null
            ? []
            : ((m = Object(m)),
              Ne(Zr(m), function (O) {
                return or.call(m, O);
              }));
        }
      : Fe,
    Vr = Li;
  ((lt && Vr(new lt(new ArrayBuffer(1))) != Ce) ||
    (rt && Vr(new rt()) != Q) ||
    (ft && Vr(ft.resolve()) != L) ||
    (dt && Vr(new dt()) != x) ||
    (ct && Vr(new ct()) != ae)) &&
    (Vr = function (m) {
      var O = Li(m),
        V = O == T ? m.constructor : void 0,
        te = V ? ti(V) : "";
      if (te)
        switch (te) {
          case Ot:
            return Ce;
          case Rt:
            return Q;
          case pt:
            return L;
          case At:
            return x;
          case gt:
            return ae;
        }
      return O;
    });
  function Ss(m, O) {
    return (
      (O = O ?? f),
      !!O &&
        (typeof m == "number" || Kr.test(m)) &&
        m > -1 &&
        m % 1 == 0 &&
        m < O
    );
  }
  function Ps(m) {
    var O = typeof m;
    return O == "string" || O == "number" || O == "symbol" || O == "boolean"
      ? m !== "__proto__"
      : m === null;
  }
  function Os(m) {
    return !!Pt && Pt in m;
  }
  function Rs(m) {
    var O = m && m.constructor,
      V = (typeof O == "function" && O.prototype) || $e;
    return m === V;
  }
  function ia(m) {
    return Lt.call(m);
  }
  function ti(m) {
    if (m != null) {
      try {
        return ht.call(m);
      } catch {}
      try {
        return m + "";
      } catch {}
    }
    return "";
  }
  function As(m, O) {
    return m === O || (m !== m && O !== O);
  }
  var Ts = $n(
      (function () {
        return arguments;
      })()
    )
      ? $n
      : function (m) {
          return Mi(m) && Ue.call(m, "callee") && !or.call(m, "callee");
        },
    an = Array.isArray;
  function na(m) {
    return m != null && Cs(m.length) && !cn(m);
  }
  var Dn = vi || He;
  function sa(m, O) {
    return ji(m, O);
  }
  function cn(m) {
    if (!Ns(m)) return !1;
    var O = Li(m);
    return O == B || O == $ || O == y || O == z;
  }
  function Cs(m) {
    return typeof m == "number" && m > -1 && m % 1 == 0 && m <= f;
  }
  function Ns(m) {
    var O = typeof m;
    return m != null && (O == "object" || O == "function");
  }
  function Mi(m) {
    return m != null && typeof m == "object";
  }
  var $s = _e ? vt(_e) : bs;
  function oa(m) {
    return na(m) ? vs(m) : _s(m);
  }
  function Fe() {
    return [];
  }
  function He() {
    return !1;
  }
  s.exports = sa;
})($o, $o.exports);
var L1 = $o.exports;
const j1 = Tf(L1);
var M1 = {};
function U1(s, t) {
  if (s.length >= 255) throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++) r[n] = 255;
  for (var a = 0; a < s.length; a++) {
    var h = s.charAt(a),
      f = h.charCodeAt(0);
    if (r[f] !== 255) throw new TypeError(h + " is ambiguous");
    r[f] = a;
  }
  var g = s.length,
    b = s.charAt(0),
    y = Math.log(g) / Math.log(256),
    _ = Math.log(256) / Math.log(g);
  function P($) {
    if (
      ($ instanceof Uint8Array ||
        (ArrayBuffer.isView($)
          ? ($ = new Uint8Array($.buffer, $.byteOffset, $.byteLength))
          : Array.isArray($) && ($ = Uint8Array.from($))),
      !($ instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if ($.length === 0) return "";
    for (var Q = 0, se = 0, le = 0, T = $.length; le !== T && $[le] === 0; )
      le++, Q++;
    for (var L = ((T - le) * _ + 1) >>> 0, z = new Uint8Array(L); le !== T; ) {
      for (
        var q = $[le], x = 0, M = L - 1;
        (q !== 0 || x < se) && M !== -1;
        M--, x++
      )
        (q += (256 * z[M]) >>> 0), (z[M] = q % g >>> 0), (q = (q / g) >>> 0);
      if (q !== 0) throw new Error("Non-zero carry");
      (se = x), le++;
    }
    for (var H = L - se; H !== L && z[H] === 0; ) H++;
    for (var ue = b.repeat(Q); H < L; ++H) ue += s.charAt(z[H]);
    return ue;
  }
  function N($) {
    if (typeof $ != "string") throw new TypeError("Expected String");
    if ($.length === 0) return new Uint8Array();
    var Q = 0;
    if ($[Q] !== " ") {
      for (var se = 0, le = 0; $[Q] === b; ) se++, Q++;
      for (
        var T = (($.length - Q) * y + 1) >>> 0, L = new Uint8Array(T);
        $[Q];

      ) {
        var z = r[$.charCodeAt(Q)];
        if (z === 255) return;
        for (var q = 0, x = T - 1; (z !== 0 || q < le) && x !== -1; x--, q++)
          (z += (g * L[x]) >>> 0),
            (L[x] = z % 256 >>> 0),
            (z = (z / 256) >>> 0);
        if (z !== 0) throw new Error("Non-zero carry");
        (le = q), Q++;
      }
      if ($[Q] !== " ") {
        for (var M = T - le; M !== T && L[M] === 0; ) M++;
        for (var H = new Uint8Array(se + (T - M)), ue = se; M !== T; )
          H[ue++] = L[M++];
        return H;
      }
    }
  }
  function B($) {
    var Q = N($);
    if (Q) return Q;
    throw new Error(`Non-${t} character`);
  }
  return { encode: P, decodeUnsafe: N, decode: B };
}
var q1 = U1,
  z1 = q1;
const od = (s) => {
    if (s instanceof Uint8Array && s.constructor.name === "Uint8Array")
      return s;
    if (s instanceof ArrayBuffer) return new Uint8Array(s);
    if (ArrayBuffer.isView(s))
      return new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  k1 = (s) => new TextEncoder().encode(s),
  H1 = (s) => new TextDecoder().decode(s);
class B1 {
  constructor(t, r, n) {
    (this.name = t), (this.prefix = r), (this.baseEncode = n);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class K1 {
  constructor(t, r, n) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error("Invalid prefix character");
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = n);
  }
  decode(t) {
    if (typeof t == "string") {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error("Can only multibase decode strings");
  }
  or(t) {
    return ad(this, t);
  }
}
let F1 = class {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return ad(this, t);
  }
  decode(t) {
    const r = t[0],
      n = this.decoders[r];
    if (n) return n.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`
    );
  }
};
const ad = (s, t) =>
  new F1({
    ...(s.decoders || { [s.prefix]: s }),
    ...(t.decoders || { [t.prefix]: t }),
  });
class V1 {
  constructor(t, r, n, a) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = n),
      (this.baseDecode = a),
      (this.encoder = new B1(t, r, n)),
      (this.decoder = new K1(t, r, a));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Uo = ({ name: s, prefix: t, encode: r, decode: n }) => new V1(s, t, r, n),
  ps = ({ prefix: s, name: t, alphabet: r }) => {
    const { encode: n, decode: a } = z1(r, t);
    return Uo({ prefix: s, name: t, encode: n, decode: (h) => od(a(h)) });
  },
  G1 = (s, t, r, n) => {
    const a = {};
    for (let _ = 0; _ < t.length; ++_) a[t[_]] = _;
    let h = s.length;
    for (; s[h - 1] === "="; ) --h;
    const f = new Uint8Array(((h * r) / 8) | 0);
    let g = 0,
      b = 0,
      y = 0;
    for (let _ = 0; _ < h; ++_) {
      const P = a[s[_]];
      if (P === void 0) throw new SyntaxError(`Non-${n} character`);
      (b = (b << r) | P),
        (g += r),
        g >= 8 && ((g -= 8), (f[y++] = 255 & (b >> g)));
    }
    if (g >= r || 255 & (b << (8 - g)))
      throw new SyntaxError("Unexpected end of data");
    return f;
  },
  W1 = (s, t, r) => {
    const n = t[t.length - 1] === "=",
      a = (1 << r) - 1;
    let h = "",
      f = 0,
      g = 0;
    for (let b = 0; b < s.length; ++b)
      for (g = (g << 8) | s[b], f += 8; f > r; )
        (f -= r), (h += t[a & (g >> f)]);
    if ((f && (h += t[a & (g << (r - f))]), n))
      for (; (h.length * r) & 7; ) h += "=";
    return h;
  },
  Vt = ({ name: s, prefix: t, bitsPerChar: r, alphabet: n }) =>
    Uo({
      prefix: t,
      name: s,
      encode(a) {
        return W1(a, n, r);
      },
      decode(a) {
        return G1(a, n, r, s);
      },
    }),
  J1 = Uo({
    prefix: "\0",
    name: "identity",
    encode: (s) => H1(s),
    decode: (s) => k1(s),
  });
var Q1 = Object.freeze({ __proto__: null, identity: J1 });
const Y1 = Vt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var X1 = Object.freeze({ __proto__: null, base2: Y1 });
const Z1 = Vt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var eE = Object.freeze({ __proto__: null, base8: Z1 });
const tE = ps({ prefix: "9", name: "base10", alphabet: "0123456789" });
var rE = Object.freeze({ __proto__: null, base10: tE });
const iE = Vt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  nE = Vt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var sE = Object.freeze({ __proto__: null, base16: iE, base16upper: nE });
const oE = Vt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  aE = Vt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  cE = Vt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  uE = Vt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  hE = Vt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  lE = Vt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  fE = Vt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  dE = Vt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  pE = Vt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var gE = Object.freeze({
  __proto__: null,
  base32: oE,
  base32upper: aE,
  base32pad: cE,
  base32padupper: uE,
  base32hex: hE,
  base32hexupper: lE,
  base32hexpad: fE,
  base32hexpadupper: dE,
  base32z: pE,
});
const yE = ps({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  mE = ps({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var vE = Object.freeze({ __proto__: null, base36: yE, base36upper: mE });
const wE = ps({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  bE = ps({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var _E = Object.freeze({ __proto__: null, base58btc: wE, base58flickr: bE });
const EE = Vt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  IE = Vt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  xE = Vt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  SE = Vt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var PE = Object.freeze({
  __proto__: null,
  base64: EE,
  base64pad: IE,
  base64url: xE,
  base64urlpad: SE,
});
const cd = Array.from(
    "🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"
  ),
  OE = cd.reduce((s, t, r) => ((s[r] = t), s), []),
  RE = cd.reduce((s, t, r) => ((s[t.codePointAt(0)] = r), s), []);
function AE(s) {
  return s.reduce((t, r) => ((t += OE[r]), t), "");
}
function TE(s) {
  const t = [];
  for (const r of s) {
    const n = RE[r.codePointAt(0)];
    if (n === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(n);
  }
  return new Uint8Array(t);
}
const CE = Uo({ prefix: "🚀", name: "base256emoji", encode: AE, decode: TE });
var NE = Object.freeze({ __proto__: null, base256emoji: CE }),
  $E = ud,
  Fl = 128,
  DE = 127,
  LE = ~DE,
  jE = Math.pow(2, 31);
function ud(s, t, r) {
  (t = t || []), (r = r || 0);
  for (var n = r; s >= jE; ) (t[r++] = (s & 255) | Fl), (s /= 128);
  for (; s & LE; ) (t[r++] = (s & 255) | Fl), (s >>>= 7);
  return (t[r] = s | 0), (ud.bytes = r - n + 1), t;
}
var ME = Dc,
  UE = 128,
  Vl = 127;
function Dc(s, n) {
  var r = 0,
    n = n || 0,
    a = 0,
    h = n,
    f,
    g = s.length;
  do {
    if (h >= g)
      throw ((Dc.bytes = 0), new RangeError("Could not decode varint"));
    (f = s[h++]),
      (r += a < 28 ? (f & Vl) << a : (f & Vl) * Math.pow(2, a)),
      (a += 7);
  } while (f >= UE);
  return (Dc.bytes = h - n), r;
}
var qE = Math.pow(2, 7),
  zE = Math.pow(2, 14),
  kE = Math.pow(2, 21),
  HE = Math.pow(2, 28),
  BE = Math.pow(2, 35),
  KE = Math.pow(2, 42),
  FE = Math.pow(2, 49),
  VE = Math.pow(2, 56),
  GE = Math.pow(2, 63),
  WE = function (s) {
    return s < qE
      ? 1
      : s < zE
      ? 2
      : s < kE
      ? 3
      : s < HE
      ? 4
      : s < BE
      ? 5
      : s < KE
      ? 6
      : s < FE
      ? 7
      : s < VE
      ? 8
      : s < GE
      ? 9
      : 10;
  },
  JE = { encode: $E, decode: ME, encodingLength: WE },
  hd = JE;
const Gl = (s, t, r = 0) => (hd.encode(s, t, r), t),
  Wl = (s) => hd.encodingLength(s),
  Lc = (s, t) => {
    const r = t.byteLength,
      n = Wl(s),
      a = n + Wl(r),
      h = new Uint8Array(a + r);
    return Gl(s, h, 0), Gl(r, h, n), h.set(t, a), new QE(s, r, t, h);
  };
class QE {
  constructor(t, r, n, a) {
    (this.code = t), (this.size = r), (this.digest = n), (this.bytes = a);
  }
}
const ld = ({ name: s, code: t, encode: r }) => new YE(s, t, r);
class YE {
  constructor(t, r, n) {
    (this.name = t), (this.code = r), (this.encode = n);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array
        ? Lc(this.code, r)
        : r.then((n) => Lc(this.code, n));
    } else throw Error("Unknown type, must be binary type");
  }
}
const fd = (s) => async (t) => new Uint8Array(await crypto.subtle.digest(s, t)),
  XE = ld({ name: "sha2-256", code: 18, encode: fd("SHA-256") }),
  ZE = ld({ name: "sha2-512", code: 19, encode: fd("SHA-512") });
var eI = Object.freeze({ __proto__: null, sha256: XE, sha512: ZE });
const dd = 0,
  tI = "identity",
  pd = od,
  rI = (s) => Lc(dd, pd(s)),
  iI = { code: dd, name: tI, encode: pd, digest: rI };
var nI = Object.freeze({ __proto__: null, identity: iI });
new TextEncoder(), new TextDecoder();
const Jl = {
  ...Q1,
  ...X1,
  ...eE,
  ...rE,
  ...sE,
  ...gE,
  ...vE,
  ..._E,
  ...PE,
  ...NE,
};
({ ...eI, ...nI });
function gd(s) {
  return globalThis.Buffer != null
    ? new Uint8Array(s.buffer, s.byteOffset, s.byteLength)
    : s;
}
function sI(s = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? gd(globalThis.Buffer.allocUnsafe(s))
    : new Uint8Array(s);
}
function yd(s, t, r, n) {
  return {
    name: s,
    prefix: t,
    encoder: { name: s, prefix: t, encode: r },
    decoder: { decode: n },
  };
}
const Ql = yd(
    "utf8",
    "u",
    (s) => "u" + new TextDecoder("utf8").decode(s),
    (s) => new TextEncoder().encode(s.substring(1))
  ),
  wc = yd(
    "ascii",
    "a",
    (s) => {
      let t = "a";
      for (let r = 0; r < s.length; r++) t += String.fromCharCode(s[r]);
      return t;
    },
    (s) => {
      s = s.substring(1);
      const t = sI(s.length);
      for (let r = 0; r < s.length; r++) t[r] = s.charCodeAt(r);
      return t;
    }
  ),
  oI = {
    utf8: Ql,
    "utf-8": Ql,
    hex: Jl.base16,
    latin1: wc,
    ascii: wc,
    binary: wc,
    ...Jl,
  };
function aI(s, t = "utf8") {
  const r = oI[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === "utf8" || t === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? gd(globalThis.Buffer.from(s, "utf-8"))
    : r.decoder.decode(`${r.prefix}${s}`);
}
const md = "wc",
  cI = 2,
  eu = "core",
  Ti = `${md}@2:${eu}:`,
  uI = { name: eu, logger: "error" },
  hI = { database: ":memory:" },
  lI = "crypto",
  Yl = "client_ed25519_seed",
  fI = ce.ONE_DAY,
  dI = "keychain",
  pI = "0.3",
  gI = "messages",
  yI = "0.3",
  mI = ce.SIX_HOURS,
  vI = "publisher",
  vd = "irn",
  wI = "error",
  wd = "wss://relay.walletconnect.com",
  Xl = "wss://relay.walletconnect.org",
  bI = "relayer",
  Jt = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  _I = "_subscription",
  di = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  EI = ce.ONE_SECOND,
  II = "2.10.6",
  xI = 1e4,
  SI = "0.3",
  PI = "WALLETCONNECT_CLIENT_ID",
  zr = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  },
  OI = "subscription",
  RI = "0.3",
  AI = ce.FIVE_SECONDS * 1e3,
  TI = "pairing",
  CI = "0.3",
  Zn = {
    wc_pairingDelete: {
      req: { ttl: ce.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: ce.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: ce.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: ce.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: ce.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: ce.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  ss = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Yr = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  NI = "history",
  $I = "0.3",
  DI = "expirer",
  Nr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  LI = "0.3",
  bc = "verify-api",
  In = "https://verify.walletconnect.com",
  jc = "https://verify.walletconnect.org",
  jI = [In, jc];
class MI {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = dI),
      (this.version = pI),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        if (!this.initialized) {
          const n = await this.getKeyChain();
          typeof n < "u" && (this.keychain = n), (this.initialized = !0);
        }
      }),
      (this.has = (n) => (this.isInitialized(), this.keychain.has(n))),
      (this.set = async (n, a) => {
        this.isInitialized(), this.keychain.set(n, a), await this.persist();
      }),
      (this.get = (n) => {
        this.isInitialized();
        const a = this.keychain.get(n);
        if (typeof a > "u") {
          const { message: h } = Z("NO_MATCHING_KEY", `${this.name}: ${n}`);
          throw new Error(h);
        }
        return a;
      }),
      (this.del = async (n) => {
        this.isInitialized(), this.keychain.delete(n), await this.persist();
      }),
      (this.core = t),
      (this.logger = Te.generateChildLogger(r, this.name));
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, Uf(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? qf(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class UI {
  constructor(t, r, n) {
    (this.core = t),
      (this.logger = r),
      (this.name = lI),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized ||
          (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a))),
      (this.getClientId = async () => {
        this.isInitialized();
        const a = await this.getClientSeed(),
          h = Ml(a);
        return Xf(h.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const a = Bw();
        return this.setPrivateKey(a.publicKey, a.privateKey);
      }),
      (this.signJWT = async (a) => {
        this.isInitialized();
        const h = await this.getClientSeed(),
          f = Ml(h),
          g = Cc();
        return await d1(g, a, fI, f);
      }),
      (this.generateSharedKey = (a, h, f) => {
        this.isInitialized();
        const g = this.getPrivateKey(a),
          b = Kw(g, h);
        return this.setSymKey(b, f);
      }),
      (this.setSymKey = async (a, h) => {
        this.isInitialized();
        const f = h || Fw(a);
        return await this.keychain.set(f, a), f;
      }),
      (this.deleteKeyPair = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.deleteSymKey = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.encode = async (a, h, f) => {
        this.isInitialized();
        const g = Mf(f),
          b = Qi(h);
        if (ll(g)) {
          const N = g.senderPublicKey,
            B = g.receiverPublicKey;
          a = await this.generateSharedKey(N, B);
        }
        const y = this.getSymKey(a),
          { type: _, senderPublicKey: P } = g;
        return Gw({ type: _, symKey: y, message: b, senderPublicKey: P });
      }),
      (this.decode = async (a, h, f) => {
        this.isInitialized();
        const g = Qw(h, f);
        if (ll(g)) {
          const b = g.receiverPublicKey,
            y = g.senderPublicKey;
          a = await this.generateSharedKey(b, y);
        }
        try {
          const b = this.getSymKey(a),
            y = Ww({ symKey: b, encoded: h });
          return ds(y);
        } catch (b) {
          this.logger.error(
            `Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`
          ),
            this.logger.error(b);
        }
      }),
      (this.getPayloadType = (a) => {
        const h = To(a);
        return hs(h.type);
      }),
      (this.getPayloadSenderPublicKey = (a) => {
        const h = To(a);
        return h.senderPublicKey ? sr(h.senderPublicKey, nr) : void 0;
      }),
      (this.core = t),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.keychain = n || new MI(this.core, this.logger));
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = "";
    try {
      t = this.keychain.get(Yl);
    } catch {
      (t = Cc()), await this.keychain.set(Yl, t);
    }
    return aI(t, "base16");
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class qI extends F_ {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = gI),
      (this.version = yI),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace("Initialized");
          try {
            const n = await this.getRelayerMessages();
            typeof n < "u" && (this.messages = n),
              this.logger.debug(
                `Successfully Restored records for ${this.name}`
              ),
              this.logger.trace({
                type: "method",
                method: "restore",
                size: this.messages.size,
              });
          } catch (n) {
            this.logger.debug(`Failed to Restore records for ${this.name}`),
              this.logger.error(n);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (n, a) => {
        this.isInitialized();
        const h = xn(a);
        let f = this.messages.get(n);
        return (
          typeof f > "u" && (f = {}),
          typeof f[h] < "u" ||
            ((f[h] = a), this.messages.set(n, f), await this.persist()),
          h
        );
      }),
      (this.get = (n) => {
        this.isInitialized();
        let a = this.messages.get(n);
        return typeof a > "u" && (a = {}), a;
      }),
      (this.has = (n, a) => {
        this.isInitialized();
        const h = this.get(n),
          f = xn(a);
        return typeof h[f] < "u";
      }),
      (this.del = async (n) => {
        this.isInitialized(), this.messages.delete(n), await this.persist();
      }),
      (this.logger = Te.generateChildLogger(t, this.name)),
      (this.core = r);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, Uf(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < "u" ? qf(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class zI extends V_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new $r.EventEmitter()),
      (this.name = vI),
      (this.queue = new Map()),
      (this.publishTimeout = ce.toMiliseconds(ce.TEN_SECONDS)),
      (this.needsTransportRestart = !1),
      (this.publish = async (n, a, h) => {
        var f;
        this.logger.debug("Publishing Payload"),
          this.logger.trace({
            type: "method",
            method: "publish",
            params: { topic: n, message: a, opts: h },
          });
        try {
          const g = (h == null ? void 0 : h.ttl) || mI,
            b = Nc(h),
            y = (h == null ? void 0 : h.prompt) || !1,
            _ = (h == null ? void 0 : h.tag) || 0,
            P = (h == null ? void 0 : h.id) || id().toString(),
            N = {
              topic: n,
              message: a,
              opts: { ttl: g, relay: b, prompt: y, tag: _, id: P },
            },
            B = setTimeout(() => this.queue.set(P, N), this.publishTimeout);
          try {
            await await us(
              this.rpcPublish(n, a, g, b, y, _, P),
              this.publishTimeout,
              "Failed to publish payload, please try again."
            ),
              this.removeRequestFromQueue(P),
              this.relayer.events.emit(Jt.publish, N);
          } catch ($) {
            if (
              (this.logger.debug("Publishing Payload stalled"),
              (this.needsTransportRestart = !0),
              (f = h == null ? void 0 : h.internal) != null &&
                f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(P), $);
            return;
          } finally {
            clearTimeout(B);
          }
          this.logger.debug("Successfully Published Payload"),
            this.logger.trace({
              type: "method",
              method: "publish",
              params: { topic: n, message: a, opts: h },
            });
        } catch (g) {
          throw (
            (this.logger.debug("Failed to Publish Payload"),
            this.logger.error(g),
            g)
          );
        }
      }),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.relayer = t),
      (this.logger = Te.generateChildLogger(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, n, a, h, f, g) {
    var b, y, _, P;
    const N = {
      method: Po(a.protocol).publish,
      params: { topic: t, message: r, ttl: n, prompt: h, tag: f },
      id: g,
    };
    return (
      ir((b = N.params) == null ? void 0 : b.prompt) &&
        ((y = N.params) == null || delete y.prompt),
      ir((_ = N.params) == null ? void 0 : _.tag) &&
        ((P = N.params) == null || delete P.tag),
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "message", direction: "outgoing", request: N }),
      this.relayer.request(N)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: n, opts: a } = t;
      await this.publish(r, n, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Cn.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1),
          this.relayer.events.emit(Jt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(Jt.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class kI {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const n = this.get(t);
        this.exists(t, r) || this.map.set(t, [...n, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > "u") {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const n = this.get(t);
        if (!this.exists(t, r)) return;
        const a = n.filter((h) => h !== r);
        if (!a.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, a);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var HI = Object.defineProperty,
  BI = Object.defineProperties,
  KI = Object.getOwnPropertyDescriptors,
  Zl = Object.getOwnPropertySymbols,
  FI = Object.prototype.hasOwnProperty,
  VI = Object.prototype.propertyIsEnumerable,
  ef = (s, t, r) =>
    t in s
      ? HI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  es = (s, t) => {
    for (var r in t || (t = {})) FI.call(t, r) && ef(s, r, t[r]);
    if (Zl) for (var r of Zl(t)) VI.call(t, r) && ef(s, r, t[r]);
    return s;
  },
  _c = (s, t) => BI(s, KI(t));
class GI extends J_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new kI()),
      (this.events = new $r.EventEmitter()),
      (this.name = OI),
      (this.version = RI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
      (this.pollingInterval = 20),
      (this.storagePrefix = Ti),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (n, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug("Subscribing Topic"),
          this.logger.trace({
            type: "method",
            method: "subscribe",
            params: { topic: n, opts: a },
          });
        try {
          const h = Nc(a),
            f = { topic: n, relay: h };
          this.pending.set(n, f);
          const g = await this.rpcSubscribe(n, h);
          return (
            this.onSubscribe(g, f),
            this.logger.debug("Successfully Subscribed Topic"),
            this.logger.trace({
              type: "method",
              method: "subscribe",
              params: { topic: n, opts: a },
            }),
            g
          );
        } catch (h) {
          throw (
            (this.logger.debug("Failed to Subscribe Topic"),
            this.logger.error(h),
            h)
          );
        }
      }),
      (this.unsubscribe = async (n, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (a == null ? void 0 : a.id) < "u"
            ? await this.unsubscribeById(n, a.id, a)
            : await this.unsubscribeByTopic(n, a);
      }),
      (this.isSubscribed = async (n) =>
        this.topics.includes(n)
          ? !0
          : await new Promise((a, h) => {
              const f = new ce.Watch();
              f.start(this.pendingSubscriptionWatchLabel);
              const g = setInterval(() => {
                !this.pending.has(n) &&
                  this.topics.includes(n) &&
                  (clearInterval(g),
                  f.stop(this.pendingSubscriptionWatchLabel),
                  a(!0)),
                  f.elapsed(this.pendingSubscriptionWatchLabel) >= AI &&
                    (clearInterval(g),
                    f.stop(this.pendingSubscriptionWatchLabel),
                    h(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1)),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = t),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.clientId = "");
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.relayer.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let n = !1;
    try {
      n = this.getSubscription(t).topic === r;
    } catch {}
    return n;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values),
      this.subscriptions.clear(),
      this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const n = this.topicMap.get(t);
    await Promise.all(n.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, n) {
    this.logger.debug("Unsubscribing Topic"),
      this.logger.trace({
        type: "method",
        method: "unsubscribe",
        params: { topic: t, id: r, opts: n },
      });
    try {
      const a = Nc(n);
      await this.rpcUnsubscribe(t, r, a);
      const h = It("USER_DISCONNECTED", `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, h),
        this.logger.debug("Successfully Unsubscribed Topic"),
        this.logger.trace({
          type: "method",
          method: "unsubscribe",
          params: { topic: t, id: r, opts: n },
        });
    } catch (a) {
      throw (
        (this.logger.debug("Failed to Unsubscribe Topic"),
        this.logger.error(a),
        a)
      );
    }
  }
  async rpcSubscribe(t, r) {
    const n = { method: Po(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await us(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
        this.relayer.events.emit(Jt.connection_stalled);
    }
    return xn(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay,
      n = {
        method: Po(r.protocol).batchSubscribe,
        params: { topics: t.map((a) => a.topic) },
      };
    this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await us(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"),
        this.relayer.events.emit(Jt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, n) {
    const a = {
      method: Po(n.protocol).unsubscribe,
      params: { topic: t, id: r },
    };
    return (
      this.logger.debug("Outgoing Relay Payload"),
      this.logger.trace({ type: "payload", direction: "outgoing", request: a }),
      this.relayer.request(a)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, _c(es({}, r), { id: t })),
      this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, es({}, r)), this.pending.delete(r.topic);
      });
  }
  async onUnsubscribe(t, r, n) {
    this.events.removeAllListeners(r),
      this.hasSubscription(r, t) && this.deleteSubscription(r, n),
      await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) ||
      (this.logger.debug("Setting subscription"),
      this.logger.trace({
        type: "method",
        method: "setSubscription",
        id: t,
        subscription: r,
      }),
      this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, es({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(zr.created, r);
  }
  getSubscription(t) {
    this.logger.debug("Getting subscription"),
      this.logger.trace({ type: "method", method: "getSubscription", id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug("Deleting subscription"),
      this.logger.trace({
        type: "method",
        method: "deleteSubscription",
        id: t,
        reason: r,
      });
    const n = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(n.topic, t),
      this.events.emit(zr.deleted, _c(es({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(zr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(zr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > "u" || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw (
          (this.logger.error(r),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(r))
        );
      }
      (this.cached = t),
        this.logger.debug(
          `Successfully Restored subscriptions for ${this.name}`
        ),
        this.logger.trace({
          type: "method",
          method: "restore",
          subscriptions: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
        this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    Xr(r) &&
      this.onBatchSubscribe(r.map((n, a) => _c(es({}, t[a]), { id: n })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }),
      await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(Cn.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(Jt.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(Jt.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(zr.created, async (t) => {
        const r = zr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      }),
      this.events.on(zr.deleted, async (t) => {
        const r = zr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.restartInProgress || (clearInterval(r), t());
        }, this.pollingInterval);
      }));
  }
}
var WI = Object.defineProperty,
  tf = Object.getOwnPropertySymbols,
  JI = Object.prototype.hasOwnProperty,
  QI = Object.prototype.propertyIsEnumerable,
  rf = (s, t, r) =>
    t in s
      ? WI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  YI = (s, t) => {
    for (var r in t || (t = {})) JI.call(t, r) && rf(s, r, t[r]);
    if (tf) for (var r of tf(t)) QI.call(t, r) && rf(s, r, t[r]);
    return s;
  };
class XI extends G_ {
  constructor(t) {
    super(t),
      (this.protocol = "wc"),
      (this.version = 2),
      (this.events = new $r.EventEmitter()),
      (this.name = bI),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ["socket hang up", "socket stalled"]),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.request = async (r) => {
        this.logger.debug("Publishing Request Payload");
        try {
          return (
            await this.toEstablishConnection(), await this.provider.request(r)
          );
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Publish Request"),
            this.logger.error(n),
            n)
          );
        }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(Jt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(Jt.error, r),
          this.logger.info("Fatal socket error received, closing transport"),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(di.payload, this.onPayloadHandler),
          this.provider.on(di.connect, this.onConnectHandler),
          this.provider.on(di.disconnect, this.onDisconnectHandler),
          this.provider.on(di.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < "u" && typeof t.logger != "string"
          ? Te.generateChildLogger(t.logger, this.name)
          : Te.pino(Te.getDefaultLoggerOptions({ level: t.logger || wI }))),
      (this.messages = new qI(this.logger, t.core)),
      (this.subscriber = new GI(this, this.logger)),
      (this.publisher = new zI(this, this.logger)),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || wd),
      (this.projectId = t.projectId),
      (this.bundleId = rb()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace("Initialized"),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Xl}...`
      ),
        await this.restartTransport(Xl);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info(
            "No topics subscribed to after init, closing transport"
          ),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, xI);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, n) {
    this.isInitialized(),
      await this.publisher.publish(t, r, n),
      await this.recordMessageEvent({
        topic: t,
        message: r,
        publishedAt: Date.now(),
      });
  }
  async subscribe(t, r) {
    var n;
    this.isInitialized();
    let a =
      ((n = this.subscriber.topicMap.get(t)) == null ? void 0 : n[0]) || "";
    if (a) return a;
    let h;
    const f = (g) => {
      g.topic === t && (this.subscriber.off(zr.created, f), h());
    };
    return (
      await Promise.all([
        new Promise((g) => {
          (h = g), this.subscriber.on(zr.created, f);
        }),
        new Promise(async (g) => {
          (a = await this.subscriber.subscribe(t, r)), g();
        }),
      ]),
      a
    );
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await us(
            this.provider.disconnect(),
            1e3,
            "provider.disconnect()"
          ).catch(() => this.onProviderDisconnect())
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(t) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      t &&
        t !== this.relayUrl &&
        ((this.relayUrl = t),
        await this.transportClose(),
        await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((r) => {
            if (!this.initialized) return r();
            this.subscriber.once(zr.resubscribed, () => {
              r();
            });
          }),
          new Promise(async (r, n) => {
            try {
              await us(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`
              );
            } catch (a) {
              n(a);
              return;
            }
            r();
          }),
        ]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message)) throw r;
        this.provider.events.emit(di.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1),
          (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = t || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await El()))
      throw new Error(
        "No internet connection detected. Please restart your network and try again."
      );
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new yi(
      new D1(
        cb({
          sdkVersion: II,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        })
      )
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: n } = t;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: n } = t;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!(await this.subscriber.isSubscribed(r)))
      return (
        this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0
      );
    const a = this.messages.has(r, n);
    return a && this.logger.debug(`Ignoring duplicate message: ${n}`), a;
  }
  async onProviderPayload(t) {
    if (
      (this.logger.debug("Incoming Relay Payload"),
      this.logger.trace({ type: "payload", direction: "incoming", payload: t }),
      Zc(t))
    ) {
      if (!t.method.endsWith(_I)) return;
      const r = t.params,
        { topic: n, message: a, publishedAt: h } = r.data,
        f = { topic: n, message: a, publishedAt: h };
      this.logger.debug("Emitting Relayer Payload"),
        this.logger.trace(YI({ type: "event", event: r.id }, f)),
        this.events.emit(r.id, f),
        await this.acknowledgePayload(t),
        await this.onMessageEvent(f);
    } else Mo(t) && this.events.emit(Jt.message_ack, t);
  }
  async onMessageEvent(t) {
    (await this.shouldIgnoreMessageEvent(t)) ||
      (this.events.emit(Jt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = Xc(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(di.payload, this.onPayloadHandler),
      this.provider.off(di.connect, this.onConnectHandler),
      this.provider.off(di.disconnect, this.onDisconnectHandler),
      this.provider.off(di.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Jt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await El();
    e_(async (r) => {
      this.initialized &&
        t !== r &&
        ((t = r),
        r
          ? await this.restartTransport().catch((n) => this.logger.error(n))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Jt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info("attemptToReconnect called. Connecting..."),
      setTimeout(async () => {
        await this.restartTransport().catch((t) => this.logger.error(t));
      }, ce.toMiliseconds(EI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var ZI = Object.defineProperty,
  nf = Object.getOwnPropertySymbols,
  ex = Object.prototype.hasOwnProperty,
  tx = Object.prototype.propertyIsEnumerable,
  sf = (s, t, r) =>
    t in s
      ? ZI(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  of = (s, t) => {
    for (var r in t || (t = {})) ex.call(t, r) && sf(s, r, t[r]);
    if (nf) for (var r of nf(t)) tx.call(t, r) && sf(s, r, t[r]);
    return s;
  };
class qo extends W_ {
  constructor(t, r, n, a = Ti, h = void 0) {
    super(t, r, n, a),
      (this.core = t),
      (this.logger = r),
      (this.name = n),
      (this.map = new Map()),
      (this.version = SI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !ir(f)
              ? this.map.set(this.getKey(f), f)
              : Cb(f)
              ? this.map.set(f.id, f)
              : Nb(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, g) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, g)
            : (this.logger.debug("Setting value"),
              this.logger.trace({
                type: "method",
                method: "set",
                key: f,
                value: g,
              }),
              this.map.set(f, g),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug("Getting value"),
        this.logger.trace({ type: "method", method: "get", key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f
          ? this.values.filter((g) =>
              Object.keys(f).every((b) => j1(g[b], f[b]))
            )
          : this.values
      )),
      (this.update = async (f, g) => {
        this.isInitialized(),
          this.logger.debug("Updating value"),
          this.logger.trace({
            type: "method",
            method: "update",
            key: f,
            update: g,
          });
        const b = of(of({}, this.getData(f)), g);
        this.map.set(f, b), await this.persist();
      }),
      (this.delete = async (f, g) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug("Deleting value"),
            this.logger.trace({
              type: "method",
              method: "delete",
              key: f,
              reason: g,
            }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.storagePrefix = a),
      (this.getKey = h);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(n), new Error(n));
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > "u" || !t.length) return;
      if (this.map.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          value: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`),
        this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class rx {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = TI),
      (this.version = CI),
      (this.events = new Hc()),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.ignoredPayloadTypes = [Yi]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace("Initialized"));
      }),
      (this.register = ({ methods: n }) => {
        this.isInitialized(),
          (this.registeredMethods = [
            ...new Set([...this.registeredMethods, ...n]),
          ]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const n = Cc(),
          a = await this.core.crypto.setSymKey(n),
          h = kr(ce.FIVE_MINUTES),
          f = { protocol: vd },
          g = { topic: a, expiry: h, relay: f, active: !1 },
          b = _b({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: a,
            symKey: n,
            relay: f,
          });
        return (
          await this.pairings.set(a, g),
          await this.core.relayer.subscribe(a),
          this.core.expirer.set(a, h),
          { topic: a, uri: b }
        );
      }),
      (this.pair = async (n) => {
        this.isInitialized(), this.isValidPair(n);
        const { topic: a, symKey: h, relay: f } = ml(n.uri);
        let g;
        if (
          this.pairings.keys.includes(a) &&
          ((g = this.pairings.get(a)), g.active)
        )
          throw new Error(
            `Pairing already exists: ${a}. Please try again with a new connection URI.`
          );
        const b = kr(ce.FIVE_MINUTES),
          y = { topic: a, relay: f, expiry: b, active: !1 };
        return (
          await this.pairings.set(a, y),
          this.core.expirer.set(a, b),
          n.activatePairing && (await this.activate({ topic: a })),
          this.events.emit(ss.create, y),
          this.core.crypto.keychain.has(a) ||
            (await this.core.crypto.setSymKey(h, a),
            await this.core.relayer.subscribe(a, { relay: f })),
          y
        );
      }),
      (this.activate = async ({ topic: n }) => {
        this.isInitialized();
        const a = kr(ce.THIRTY_DAYS);
        await this.pairings.update(n, { active: !0, expiry: a }),
          this.core.expirer.set(n, a);
      }),
      (this.ping = async (n) => {
        this.isInitialized(), await this.isValidPing(n);
        const { topic: a } = n;
        if (this.pairings.keys.includes(a)) {
          const h = await this.sendRequest(a, "wc_pairingPing", {}),
            { done: f, resolve: g, reject: b } = En();
          this.events.once(Dt("pairing_ping", h), ({ error: y }) => {
            y ? b(y) : g();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: n, expiry: a }) => {
        this.isInitialized(), await this.pairings.update(n, { expiry: a });
      }),
      (this.updateMetadata = async ({ topic: n, metadata: a }) => {
        this.isInitialized(),
          await this.pairings.update(n, { peerMetadata: a });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (n) => {
        this.isInitialized(), await this.isValidDisconnect(n);
        const { topic: a } = n;
        this.pairings.keys.includes(a) &&
          (await this.sendRequest(
            a,
            "wc_pairingDelete",
            It("USER_DISCONNECTED")
          ),
          await this.deletePairing(a));
      }),
      (this.sendRequest = async (n, a, h) => {
        const f = Pn(a, h),
          g = await this.core.crypto.encode(n, f),
          b = Zn[a].req;
        return (
          this.core.history.set(n, f), this.core.relayer.publish(n, g, b), f.id
        );
      }),
      (this.sendResult = async (n, a, h) => {
        const f = Xc(n, h),
          g = await this.core.crypto.encode(a, f),
          b = await this.core.history.get(a, n),
          y = Zn[b.request.method].res;
        await this.core.relayer.publish(a, g, y),
          await this.core.history.resolve(f);
      }),
      (this.sendError = async (n, a, h) => {
        const f = jo(n, h),
          g = await this.core.crypto.encode(a, f),
          b = await this.core.history.get(a, n),
          y = Zn[b.request.method]
            ? Zn[b.request.method].res
            : Zn.unregistered_method.res;
        await this.core.relayer.publish(a, g, y),
          await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (n, a) => {
        await this.core.relayer.unsubscribe(n),
          await Promise.all([
            this.pairings.delete(n, It("USER_DISCONNECTED")),
            this.core.crypto.deleteSymKey(n),
            a ? Promise.resolve() : this.core.expirer.del(n),
          ]);
      }),
      (this.cleanup = async () => {
        const n = this.pairings.getAll().filter((a) => Ai(a.expiry));
        await Promise.all(n.map((a) => this.deletePairing(a.topic)));
      }),
      (this.onRelayEventRequest = (n) => {
        const { topic: a, payload: h } = n;
        switch (h.method) {
          case "wc_pairingPing":
            return this.onPairingPingRequest(a, h);
          case "wc_pairingDelete":
            return this.onPairingDeleteRequest(a, h);
          default:
            return this.onUnknownRpcMethodRequest(a, h);
        }
      }),
      (this.onRelayEventResponse = async (n) => {
        const { topic: a, payload: h } = n,
          f = (await this.core.history.get(a, h.id)).request.method;
        switch (f) {
          case "wc_pairingPing":
            return this.onPairingPingResponse(a, h);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (n, a) => {
        const { id: h } = a;
        try {
          this.isValidPing({ topic: n }),
            await this.sendResult(h, n, !0),
            this.events.emit(ss.ping, { id: h, topic: n });
        } catch (f) {
          await this.sendError(h, n, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (n, a) => {
        const { id: h } = a;
        setTimeout(() => {
          gi(a)
            ? this.events.emit(Dt("pairing_ping", h), {})
            : Hr(a) &&
              this.events.emit(Dt("pairing_ping", h), { error: a.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (n, a) => {
        const { id: h } = a;
        try {
          this.isValidDisconnect({ topic: n }),
            await this.deletePairing(n),
            this.events.emit(ss.delete, { id: h, topic: n });
        } catch (f) {
          await this.sendError(h, n, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (n, a) => {
        const { id: h, method: f } = a;
        try {
          if (this.registeredMethods.includes(f)) return;
          const g = It("WC_METHOD_UNSUPPORTED", f);
          await this.sendError(h, n, g), this.logger.error(g);
        } catch (g) {
          await this.sendError(h, n, g), this.logger.error(g);
        }
      }),
      (this.onUnknownRpcMethodResponse = (n) => {
        this.registeredMethods.includes(n) ||
          this.logger.error(It("WC_METHOD_UNSUPPORTED", n));
      }),
      (this.isValidPair = (n) => {
        var a;
        if (!pr(n)) {
          const { message: f } = Z("MISSING_OR_INVALID", `pair() params: ${n}`);
          throw new Error(f);
        }
        if (!Tb(n.uri)) {
          const { message: f } = Z(
            "MISSING_OR_INVALID",
            `pair() uri: ${n.uri}`
          );
          throw new Error(f);
        }
        const h = ml(n.uri);
        if (!((a = h == null ? void 0 : h.relay) != null && a.protocol)) {
          const { message: f } = Z(
            "MISSING_OR_INVALID",
            "pair() uri#relay-protocol"
          );
          throw new Error(f);
        }
        if (!(h != null && h.symKey)) {
          const { message: f } = Z("MISSING_OR_INVALID", "pair() uri#symKey");
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (n) => {
        if (!pr(n)) {
          const { message: h } = Z("MISSING_OR_INVALID", `ping() params: ${n}`);
          throw new Error(h);
        }
        const { topic: a } = n;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidDisconnect = async (n) => {
        if (!pr(n)) {
          const { message: h } = Z(
            "MISSING_OR_INVALID",
            `disconnect() params: ${n}`
          );
          throw new Error(h);
        }
        const { topic: a } = n;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidPairingTopic = async (n) => {
        if (!Ht(n, !1)) {
          const { message: a } = Z(
            "MISSING_OR_INVALID",
            `pairing topic should be a string: ${n}`
          );
          throw new Error(a);
        }
        if (!this.pairings.keys.includes(n)) {
          const { message: a } = Z(
            "NO_MATCHING_KEY",
            `pairing topic doesn't exist: ${n}`
          );
          throw new Error(a);
        }
        if (Ai(this.pairings.get(n).expiry)) {
          await this.deletePairing(n);
          const { message: a } = Z("EXPIRED", `pairing topic: ${n}`);
          throw new Error(a);
        }
      }),
      (this.core = t),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.pairings = new qo(
        this.core,
        this.logger,
        this.name,
        this.storagePrefix
      ));
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Jt.message, async (t) => {
      const { topic: r, message: n } = t;
      if (
        !this.pairings.keys.includes(r) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n))
      )
        return;
      const a = await this.core.crypto.decode(r, n);
      try {
        Zc(a)
          ? (this.core.history.set(r, a),
            this.onRelayEventRequest({ topic: r, payload: a }))
          : Mo(a) &&
            (await this.core.history.resolve(a),
            await this.onRelayEventResponse({ topic: r, payload: a }),
            this.core.history.delete(r, a.id));
      } catch (h) {
        this.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Nr.expired, async (t) => {
      const { topic: r } = kf(t.target);
      r &&
        this.pairings.keys.includes(r) &&
        (await this.deletePairing(r, !0),
        this.events.emit(ss.expire, { topic: r }));
    });
  }
}
class ix extends K_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new $r.EventEmitter()),
      (this.name = NI),
      (this.version = $I),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((n) => this.records.set(n.id, n)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (n, a, h) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Setting JSON-RPC request history record"),
          this.logger.trace({
            type: "method",
            method: "set",
            topic: n,
            request: a,
            chainId: h,
          }),
          this.records.has(a.id))
        )
          return;
        const f = {
          id: a.id,
          topic: n,
          request: { method: a.method, params: a.params || null },
          chainId: h,
          expiry: kr(ce.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(Yr.created, f);
      }),
      (this.resolve = async (n) => {
        if (
          (this.isInitialized(),
          this.logger.debug("Updating JSON-RPC response history record"),
          this.logger.trace({ type: "method", method: "update", response: n }),
          !this.records.has(n.id))
        )
          return;
        const a = await this.getRecord(n.id);
        typeof a.response > "u" &&
          ((a.response = Hr(n) ? { error: n.error } : { result: n.result }),
          this.records.set(a.id, a),
          this.events.emit(Yr.updated, a));
      }),
      (this.get = async (n, a) => (
        this.isInitialized(),
        this.logger.debug("Getting record"),
        this.logger.trace({ type: "method", method: "get", topic: n, id: a }),
        await this.getRecord(a)
      )),
      (this.delete = (n, a) => {
        this.isInitialized(),
          this.logger.debug("Deleting record"),
          this.logger.trace({ type: "method", method: "delete", id: a }),
          this.values.forEach((h) => {
            if (h.topic === n) {
              if (typeof a < "u" && h.id !== a) return;
              this.records.delete(h.id), this.events.emit(Yr.deleted, h);
            }
          });
      }),
      (this.exists = async (n, a) => (
        this.isInitialized(),
        this.records.has(a) ? (await this.getRecord(a)).topic === n : !1
      )),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.logger = Te.generateChildLogger(r, this.name));
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < "u") return;
        const n = {
          topic: r.topic,
          request: Pn(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(n);
      }),
      t
    );
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Yr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > "u" || !t.length) return;
      if (this.records.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          records: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`),
        this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Yr.created, (t) => {
      const r = Yr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: "event", event: r, record: t }),
        this.persist();
    }),
      this.events.on(Yr.updated, (t) => {
        const r = Yr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.events.on(Yr.deleted, (t) => {
        const r = Yr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, record: t }),
          this.persist();
      }),
      this.core.heartbeat.on(Cn.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        ce.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`),
          this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class nx extends Q_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new $r.EventEmitter()),
      (this.name = DI),
      (this.version = LI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace("Initialized"),
          await this.restore(),
          this.cached.forEach((n) => this.expirations.set(n.target, n)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (n) => {
        try {
          const a = this.formatTarget(n);
          return typeof this.getExpiration(a) < "u";
        } catch {
          return !1;
        }
      }),
      (this.set = (n, a) => {
        this.isInitialized();
        const h = this.formatTarget(n),
          f = { target: h, expiry: a };
        this.expirations.set(h, f),
          this.checkExpiry(h, f),
          this.events.emit(Nr.created, { target: h, expiration: f });
      }),
      (this.get = (n) => {
        this.isInitialized();
        const a = this.formatTarget(n);
        return this.getExpiration(a);
      }),
      (this.del = (n) => {
        if ((this.isInitialized(), this.has(n))) {
          const a = this.formatTarget(n),
            h = this.getExpiration(a);
          this.expirations.delete(a),
            this.events.emit(Nr.deleted, { target: a, expiration: h });
        }
      }),
      (this.on = (n, a) => {
        this.events.on(n, a);
      }),
      (this.once = (n, a) => {
        this.events.once(n, a);
      }),
      (this.off = (n, a) => {
        this.events.off(n, a);
      }),
      (this.removeListener = (n, a) => {
        this.events.removeListener(n, a);
      }),
      (this.logger = Te.generateChildLogger(r, this.name));
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix +
      this.version +
      this.core.customStoragePrefix +
      "//" +
      this.name
    );
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == "string") return ub(t);
    if (typeof t == "number") return hb(t);
    const { message: r } = Z("UNKNOWN_TYPE", `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Nr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > "u" || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({
          type: "method",
          method: "restore",
          expirations: this.values,
        });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`),
        this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${t}`);
      throw (this.logger.error(n), new Error(n));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: n } = r;
    ce.toMiliseconds(n) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t),
      this.events.emit(Nr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected &&
      this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on(Cn.HEARTBEAT_EVENTS.pulse, () =>
      this.checkExpirations()
    ),
      this.events.on(Nr.created, (t) => {
        const r = Nr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Nr.expired, (t) => {
        const r = Nr.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      }),
      this.events.on(Nr.deleted, (t) => {
        const r = Nr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: "event", event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
  }
}
class sx extends Y_ {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = bc),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (n) => {
        if (this.verifyDisabled || Rn() || !An()) return;
        const a = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
        this.verifyUrl !== a && this.removeIframe(), (this.verifyUrl = a);
        try {
          await this.createIframe();
        } catch (h) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
            this.logger.info(h);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = jc);
          try {
            await this.createIframe();
          } catch (h) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(h),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (n) => {
        this.initialized
          ? this.sendPost(n.attestationId)
          : (this.addToQueue(n.attestationId), await this.init());
      }),
      (this.resolve = async (n) => {
        if (this.isDevEnv) return "";
        const a = this.getVerifyUrl(n == null ? void 0 : n.verifyUrl);
        let h;
        try {
          h = await this.fetchAttestation(n.attestationId, a);
        } catch (f) {
          this.logger.info(
            `failed to resolve attestation: ${n.attestationId} from url: ${a}`
          ),
            this.logger.info(f),
            (h = await this.fetchAttestation(n.attestationId, jc));
        }
        return h;
      }),
      (this.fetchAttestation = async (n, a) => {
        this.logger.info(`resolving attestation: ${n} from url: ${a}`);
        const h = this.startAbortTimer(ce.ONE_SECOND * 2),
          f = await fetch(`${a}/attestation/${n}`, {
            signal: this.abortController.signal,
          });
        return clearTimeout(h), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (n) => {
        this.queue.push(n);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 &&
          (this.queue.forEach((n) => this.sendPost(n)), (this.queue = []));
      }),
      (this.sendPost = (n) => {
        var a;
        try {
          if (!this.iframe) return;
          (a = this.iframe.contentWindow) == null || a.postMessage(n, "*"),
            this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let n;
        const a = (h) => {
          h.data === "verify_ready" &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener("message", a),
            n());
        };
        await Promise.race([
          new Promise((h) => {
            if (document.getElementById(bc)) return h();
            window.addEventListener("message", a);
            const f = document.createElement("iframe");
            (f.id = bc),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = "none"),
              document.body.append(f),
              (this.iframe = f),
              (n = h);
          }),
          new Promise((h, f) =>
            setTimeout(() => {
              window.removeEventListener("message", a),
                f("verify iframe load timeout");
            }, ce.toMiliseconds(ce.FIVE_SECONDS))
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe &&
          (this.iframe.remove(),
          (this.iframe = void 0),
          (this.initialized = !1));
      }),
      (this.getVerifyUrl = (n) => {
        let a = n || In;
        return (
          jI.includes(a) ||
            (this.logger.info(
              `verify url: ${a}, not included in trusted list, assigning default: ${In}`
            ),
            (a = In)),
          a
        );
      }),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.verifyUrl = In),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Vc() && M1.IS_VITEST);
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), ce.toMiliseconds(t))
    );
  }
}
var ox = Object.defineProperty,
  af = Object.getOwnPropertySymbols,
  ax = Object.prototype.hasOwnProperty,
  cx = Object.prototype.propertyIsEnumerable,
  cf = (s, t, r) =>
    t in s
      ? ox(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  uf = (s, t) => {
    for (var r in t || (t = {})) ax.call(t, r) && cf(s, r, t[r]);
    if (af) for (var r of af(t)) cx.call(t, r) && cf(s, r, t[r]);
    return s;
  };
class tu extends B_ {
  constructor(t) {
    super(t),
      (this.protocol = md),
      (this.version = cI),
      (this.name = eu),
      (this.events = new $r.EventEmitter()),
      (this.initialized = !1),
      (this.on = (n, a) => this.events.on(n, a)),
      (this.once = (n, a) => this.events.once(n, a)),
      (this.off = (n, a) => this.events.off(n, a)),
      (this.removeListener = (n, a) => this.events.removeListener(n, a)),
      (this.projectId = t == null ? void 0 : t.projectId),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || wd),
      (this.customStoragePrefix =
        t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : "");
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Te.pino(
            Te.getDefaultLoggerOptions({
              level: (t == null ? void 0 : t.logger) || uI.logger,
            })
          );
    (this.logger = Te.generateChildLogger(r, this.name)),
      (this.heartbeat = new Cn.HeartBeat()),
      (this.crypto = new UI(
        this,
        this.logger,
        t == null ? void 0 : t.keychain
      )),
      (this.history = new ix(this, this.logger)),
      (this.expirer = new nx(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new D_(uf(uf({}, hI), t == null ? void 0 : t.storageOptions))),
      (this.relayer = new XI({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new rx(this, this.logger)),
      (this.verify = new sx(this.projectId || "", this.logger));
  }
  static async init(t) {
    const r = new tu(t);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(PI, n), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info("Core Initialization Success");
    } catch (t) {
      throw (
        (this.logger.warn(
          `Core Initialization Failure at epoch ${Date.now()}`,
          t
        ),
        this.logger.error(t.message),
        t)
      );
    }
  }
}
const ux = tu,
  bd = "wc",
  _d = 2,
  Ed = "client",
  ru = `${bd}@${_d}:${Ed}:`,
  Ec = {
    name: Ed,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  },
  hf = "WALLETCONNECT_DEEPLINK_CHOICE",
  hx = "proposal",
  Id = "Proposal expired",
  lx = "session",
  Io = ce.SEVEN_DAYS,
  fx = "engine",
  ts = {
    wc_sessionPropose: {
      req: { ttl: ce.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: ce.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: ce.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: ce.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: ce.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: ce.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: ce.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: ce.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: ce.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: ce.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: ce.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: ce.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: ce.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: ce.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: ce.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: ce.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  Ic = { min: ce.FIVE_MINUTES, max: ce.SEVEN_DAYS },
  pi = { idle: "IDLE", active: "ACTIVE" },
  dx = "request",
  px = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var gx = Object.defineProperty,
  yx = Object.defineProperties,
  mx = Object.getOwnPropertyDescriptors,
  lf = Object.getOwnPropertySymbols,
  vx = Object.prototype.hasOwnProperty,
  wx = Object.prototype.propertyIsEnumerable,
  ff = (s, t, r) =>
    t in s
      ? gx(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  fr = (s, t) => {
    for (var r in t || (t = {})) vx.call(t, r) && ff(s, r, t[r]);
    if (lf) for (var r of lf(t)) wx.call(t, r) && ff(s, r, t[r]);
    return s;
  },
  rs = (s, t) => yx(s, mx(t));
class bx extends Z_ {
  constructor(t) {
    super(t),
      (this.name = fx),
      (this.events = new Hc()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [Yi]),
      (this.requestQueue = { state: pi.idle, queue: [] }),
      (this.sessionRequestQueue = { state: pi.idle, queue: [] }),
      (this.requestQueueDelay = ce.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(ts) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, ce.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (r) => {
        await this.isInitialized();
        const n = rs(fr({}, r), {
          requiredNamespaces: r.requiredNamespaces || {},
          optionalNamespaces: r.optionalNamespaces || {},
        });
        await this.isValidConnect(n);
        const {
          pairingTopic: a,
          requiredNamespaces: h,
          optionalNamespaces: f,
          sessionProperties: g,
          relays: b,
        } = n;
        let y = a,
          _,
          P = !1;
        if (
          (y && (P = this.client.core.pairing.pairings.get(y).active), !y || !P)
        ) {
          const { topic: L, uri: z } = await this.client.core.pairing.create();
          (y = L), (_ = z);
        }
        const N = await this.client.core.crypto.generateKeyPair(),
          B = fr(
            {
              requiredNamespaces: h,
              optionalNamespaces: f,
              relays: b ?? [{ protocol: vd }],
              proposer: { publicKey: N, metadata: this.client.metadata },
            },
            g && { sessionProperties: g }
          ),
          { reject: $, resolve: Q, done: se } = En(ce.FIVE_MINUTES, Id);
        if (
          (this.events.once(
            Dt("session_connect"),
            async ({ error: L, session: z }) => {
              if (L) $(L);
              else if (z) {
                z.self.publicKey = N;
                const q = rs(fr({}, z), {
                  requiredNamespaces: z.requiredNamespaces,
                  optionalNamespaces: z.optionalNamespaces,
                });
                await this.client.session.set(z.topic, q),
                  await this.setExpiry(z.topic, z.expiry),
                  y &&
                    (await this.client.core.pairing.updateMetadata({
                      topic: y,
                      metadata: z.peer.metadata,
                    })),
                  Q(q);
              }
            }
          ),
          !y)
        ) {
          const { message: L } = Z(
            "NO_MATCHING_KEY",
            `connect() pairing topic: ${y}`
          );
          throw new Error(L);
        }
        const le = await this.sendRequest({
            topic: y,
            method: "wc_sessionPropose",
            params: B,
          }),
          T = kr(ce.FIVE_MINUTES);
        return (
          await this.setProposal(le, fr({ id: le, expiry: T }, B)),
          { uri: _, approval: se }
        );
      }),
      (this.pair = async (r) => (
        await this.isInitialized(), await this.client.core.pairing.pair(r)
      )),
      (this.approve = async (r) => {
        await this.isInitialized(), await this.isValidApprove(r);
        const {
            id: n,
            relayProtocol: a,
            namespaces: h,
            sessionProperties: f,
          } = r,
          g = this.client.proposal.get(n);
        let {
          pairingTopic: b,
          proposer: y,
          requiredNamespaces: _,
          optionalNamespaces: P,
        } = g;
        (b = b || ""), Sn(_) || (_ = Sb(h, "approve()"));
        const N = await this.client.core.crypto.generateKeyPair(),
          B = y.publicKey,
          $ = await this.client.core.crypto.generateSharedKey(N, B);
        b &&
          n &&
          (await this.client.core.pairing.updateMetadata({
            topic: b,
            metadata: y.metadata,
          }),
          await this.sendResult({
            id: n,
            topic: b,
            result: { relay: { protocol: a ?? "irn" }, responderPublicKey: N },
          }),
          await this.client.proposal.delete(n, It("USER_DISCONNECTED")),
          await this.client.core.pairing.activate({ topic: b }));
        const Q = fr(
          {
            relay: { protocol: a ?? "irn" },
            namespaces: h,
            requiredNamespaces: _,
            optionalNamespaces: P,
            pairingTopic: b,
            controller: { publicKey: N, metadata: this.client.metadata },
            expiry: kr(Io),
          },
          f && { sessionProperties: f }
        );
        await this.client.core.relayer.subscribe($),
          await this.sendRequest({
            topic: $,
            method: "wc_sessionSettle",
            params: Q,
            throwOnFailedPublish: !0,
          });
        const se = rs(fr({}, Q), {
          topic: $,
          pairingTopic: b,
          acknowledged: !1,
          self: Q.controller,
          peer: { publicKey: y.publicKey, metadata: y.metadata },
          controller: N,
        });
        return (
          await this.client.session.set($, se),
          await this.setExpiry($, kr(Io)),
          {
            topic: $,
            acknowledged: () =>
              new Promise((le) =>
                setTimeout(() => le(this.client.session.get($)), 500)
              ),
          }
        );
      }),
      (this.reject = async (r) => {
        await this.isInitialized(), await this.isValidReject(r);
        const { id: n, reason: a } = r,
          { pairingTopic: h } = this.client.proposal.get(n);
        h &&
          (await this.sendError(n, h, a),
          await this.client.proposal.delete(n, It("USER_DISCONNECTED")));
      }),
      (this.update = async (r) => {
        await this.isInitialized(), await this.isValidUpdate(r);
        const { topic: n, namespaces: a } = r,
          h = await this.sendRequest({
            topic: n,
            method: "wc_sessionUpdate",
            params: { namespaces: a },
          }),
          { done: f, resolve: g, reject: b } = En();
        return (
          this.events.once(Dt("session_update", h), ({ error: y }) => {
            y ? b(y) : g();
          }),
          await this.client.session.update(n, { namespaces: a }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (r) => {
        await this.isInitialized(), await this.isValidExtend(r);
        const { topic: n } = r,
          a = await this.sendRequest({
            topic: n,
            method: "wc_sessionExtend",
            params: {},
          }),
          { done: h, resolve: f, reject: g } = En();
        return (
          this.events.once(Dt("session_extend", a), ({ error: b }) => {
            b ? g(b) : f();
          }),
          await this.setExpiry(n, kr(Io)),
          { acknowledged: h }
        );
      }),
      (this.request = async (r) => {
        await this.isInitialized(), await this.isValidRequest(r);
        const { chainId: n, request: a, topic: h, expiry: f } = r,
          g = Yc(),
          {
            done: b,
            resolve: y,
            reject: _,
          } = En(f, "Request expired. Please try again.");
        return (
          this.events.once(
            Dt("session_request", g),
            ({ error: P, result: N }) => {
              P ? _(P) : y(N);
            }
          ),
          await Promise.all([
            new Promise(async (P) => {
              await this.sendRequest({
                clientRpcId: g,
                topic: h,
                method: "wc_sessionRequest",
                params: { request: a, chainId: n },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch((N) => _(N)),
                this.client.events.emit("session_request_sent", {
                  topic: h,
                  request: a,
                  chainId: n,
                  id: g,
                }),
                P();
            }),
            new Promise(async (P) => {
              const N = await fb(this.client.core.storage, hf);
              lb({ id: g, topic: h, wcDeepLink: N }), P();
            }),
            b(),
          ]).then((P) => P[2])
        );
      }),
      (this.respond = async (r) => {
        await this.isInitialized(), await this.isValidRespond(r);
        const { topic: n, response: a } = r,
          { id: h } = a;
        gi(a)
          ? await this.sendResult({
              id: h,
              topic: n,
              result: a.result,
              throwOnFailedPublish: !0,
            })
          : Hr(a) && (await this.sendError(h, n, a.error)),
          this.cleanupAfterResponse(r);
      }),
      (this.ping = async (r) => {
        await this.isInitialized(), await this.isValidPing(r);
        const { topic: n } = r;
        if (this.client.session.keys.includes(n)) {
          const a = await this.sendRequest({
              topic: n,
              method: "wc_sessionPing",
              params: {},
            }),
            { done: h, resolve: f, reject: g } = En();
          this.events.once(Dt("session_ping", a), ({ error: b }) => {
            b ? g(b) : f();
          }),
            await h();
        } else
          this.client.core.pairing.pairings.keys.includes(n) &&
            (await this.client.core.pairing.ping({ topic: n }));
      }),
      (this.emit = async (r) => {
        await this.isInitialized(), await this.isValidEmit(r);
        const { topic: n, event: a, chainId: h } = r;
        await this.sendRequest({
          topic: n,
          method: "wc_sessionEvent",
          params: { event: a, chainId: h },
        });
      }),
      (this.disconnect = async (r) => {
        await this.isInitialized(), await this.isValidDisconnect(r);
        const { topic: n } = r;
        this.client.session.keys.includes(n)
          ? (await this.sendRequest({
              topic: n,
              method: "wc_sessionDelete",
              params: It("USER_DISCONNECTED"),
              throwOnFailedPublish: !0,
            }),
            await this.deleteSession(n))
          : await this.client.core.pairing.disconnect({ topic: n });
      }),
      (this.find = (r) => (
        this.isInitialized(),
        this.client.session.getAll().filter((n) => Rb(n, r))
      )),
      (this.getPendingSessionRequests = () => (
        this.isInitialized(), this.client.pendingRequest.getAll()
      )),
      (this.cleanupDuplicatePairings = async (r) => {
        if (r.pairingTopic)
          try {
            const n = this.client.core.pairing.pairings.get(r.pairingTopic),
              a = this.client.core.pairing.pairings.getAll().filter((h) => {
                var f, g;
                return (
                  ((f = h.peerMetadata) == null ? void 0 : f.url) &&
                  ((g = h.peerMetadata) == null ? void 0 : g.url) ===
                    r.peer.metadata.url &&
                  h.topic &&
                  h.topic !== n.topic
                );
              });
            if (a.length === 0) return;
            this.client.logger.info(
              `Cleaning up ${a.length} duplicate pairing(s)`
            ),
              await Promise.all(
                a.map((h) =>
                  this.client.core.pairing.disconnect({ topic: h.topic })
                )
              ),
              this.client.logger.info("Duplicate pairings clean up finished");
          } catch (n) {
            this.client.logger.error(n);
          }
      }),
      (this.deleteSession = async (r, n) => {
        const { self: a } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r),
          this.client.session.delete(r, It("USER_DISCONNECTED")),
          this.client.core.crypto.keychain.has(a.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
          this.client.core.crypto.keychain.has(r) &&
            (await this.client.core.crypto.deleteSymKey(r)),
          n || this.client.core.expirer.del(r),
          this.client.core.storage
            .removeItem(hf)
            .catch((h) => this.client.logger.warn(h));
      }),
      (this.deleteProposal = async (r, n) => {
        await Promise.all([
          this.client.proposal.delete(r, It("USER_DISCONNECTED")),
          n ? Promise.resolve() : this.client.core.expirer.del(r),
        ]);
      }),
      (this.deletePendingSessionRequest = async (r, n, a = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(r, n),
          a ? Promise.resolve() : this.client.core.expirer.del(r),
        ]),
          (this.sessionRequestQueue.queue =
            this.sessionRequestQueue.queue.filter((h) => h.id !== r)),
          a && (this.sessionRequestQueue.state = pi.idle);
      }),
      (this.setExpiry = async (r, n) => {
        this.client.session.keys.includes(r) &&
          (await this.client.session.update(r, { expiry: n })),
          this.client.core.expirer.set(r, n);
      }),
      (this.setProposal = async (r, n) => {
        await this.client.proposal.set(r, n),
          this.client.core.expirer.set(r, n.expiry);
      }),
      (this.setPendingSessionRequest = async (r) => {
        const n = ts.wc_sessionRequest.req.ttl,
          { id: a, topic: h, params: f, verifyContext: g } = r;
        await this.client.pendingRequest.set(a, {
          id: a,
          topic: h,
          params: f,
          verifyContext: g,
        }),
          n && this.client.core.expirer.set(a, kr(n));
      }),
      (this.sendRequest = async (r) => {
        const {
            topic: n,
            method: a,
            params: h,
            expiry: f,
            relayRpcId: g,
            clientRpcId: b,
            throwOnFailedPublish: y,
          } = r,
          _ = Pn(a, h, b);
        if (An() && px.includes(a)) {
          const B = xn(JSON.stringify(_));
          this.client.core.verify.register({ attestationId: B });
        }
        const P = await this.client.core.crypto.encode(n, _),
          N = ts[a].req;
        return (
          f && (N.ttl = f),
          g && (N.id = g),
          this.client.core.history.set(n, _),
          y
            ? ((N.internal = rs(fr({}, N.internal), {
                throwOnFailedPublish: !0,
              })),
              await this.client.core.relayer.publish(n, P, N))
            : this.client.core.relayer
                .publish(n, P, N)
                .catch((B) => this.client.logger.error(B)),
          _.id
        );
      }),
      (this.sendResult = async (r) => {
        const { id: n, topic: a, result: h, throwOnFailedPublish: f } = r,
          g = Xc(n, h),
          b = await this.client.core.crypto.encode(a, g),
          y = await this.client.core.history.get(a, n),
          _ = ts[y.request.method].res;
        f
          ? ((_.internal = rs(fr({}, _.internal), {
              throwOnFailedPublish: !0,
            })),
            await this.client.core.relayer.publish(a, b, _))
          : this.client.core.relayer
              .publish(a, b, _)
              .catch((P) => this.client.logger.error(P)),
          await this.client.core.history.resolve(g);
      }),
      (this.sendError = async (r, n, a) => {
        const h = jo(r, a),
          f = await this.client.core.crypto.encode(n, h),
          g = await this.client.core.history.get(n, r),
          b = ts[g.request.method].res;
        this.client.core.relayer.publish(n, f, b),
          await this.client.core.history.resolve(h);
      }),
      (this.cleanup = async () => {
        const r = [],
          n = [];
        this.client.session.getAll().forEach((a) => {
          Ai(a.expiry) && r.push(a.topic);
        }),
          this.client.proposal.getAll().forEach((a) => {
            Ai(a.expiry) && n.push(a.id);
          }),
          await Promise.all([
            ...r.map((a) => this.deleteSession(a)),
            ...n.map((a) => this.deleteProposal(a)),
          ]);
      }),
      (this.onRelayEventRequest = async (r) => {
        this.requestQueue.queue.push(r), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === pi.active) {
          this.client.logger.info("Request queue already active, skipping...");
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = pi.active;
          const r = this.requestQueue.queue.shift();
          if (r)
            try {
              this.processRequest(r),
                await new Promise((n) => setTimeout(n, 300));
            } catch (n) {
              this.client.logger.warn(n);
            }
        }
        this.requestQueue.state = pi.idle;
      }),
      (this.processRequest = (r) => {
        const { topic: n, payload: a } = r,
          h = a.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeRequest(n, a);
          case "wc_sessionSettle":
            return this.onSessionSettleRequest(n, a);
          case "wc_sessionUpdate":
            return this.onSessionUpdateRequest(n, a);
          case "wc_sessionExtend":
            return this.onSessionExtendRequest(n, a);
          case "wc_sessionPing":
            return this.onSessionPingRequest(n, a);
          case "wc_sessionDelete":
            return this.onSessionDeleteRequest(n, a);
          case "wc_sessionRequest":
            return this.onSessionRequest(n, a);
          case "wc_sessionEvent":
            return this.onSessionEventRequest(n, a);
          default:
            return this.client.logger.info(`Unsupported request method ${h}`);
        }
      }),
      (this.onRelayEventResponse = async (r) => {
        const { topic: n, payload: a } = r,
          h = (await this.client.core.history.get(n, a.id)).request.method;
        switch (h) {
          case "wc_sessionPropose":
            return this.onSessionProposeResponse(n, a);
          case "wc_sessionSettle":
            return this.onSessionSettleResponse(n, a);
          case "wc_sessionUpdate":
            return this.onSessionUpdateResponse(n, a);
          case "wc_sessionExtend":
            return this.onSessionExtendResponse(n, a);
          case "wc_sessionPing":
            return this.onSessionPingResponse(n, a);
          case "wc_sessionRequest":
            return this.onSessionRequestResponse(n, a);
          default:
            return this.client.logger.info(`Unsupported response method ${h}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: n } = r,
          { message: a } = Z(
            "MISSING_OR_INVALID",
            `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`
          );
        throw new Error(a);
      }),
      (this.onSessionProposeRequest = async (r, n) => {
        const { params: a, id: h } = n;
        try {
          this.isValidConnect(fr({}, n.params));
          const f = kr(ce.FIVE_MINUTES),
            g = fr({ id: h, pairingTopic: r, expiry: f }, a);
          await this.setProposal(h, g);
          const b = xn(JSON.stringify(n)),
            y = await this.getVerifyContext(b, g.proposer.metadata);
          this.client.events.emit("session_proposal", {
            id: h,
            params: g,
            verifyContext: y,
          });
        } catch (f) {
          await this.sendError(h, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (r, n) => {
        const { id: a } = n;
        if (gi(n)) {
          const { result: h } = n;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            result: h,
          });
          const f = this.client.proposal.get(a);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            proposal: f,
          });
          const g = f.proposer.publicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            selfPublicKey: g,
          });
          const b = h.responderPublicKey;
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            peerPublicKey: b,
          });
          const y = await this.client.core.crypto.generateSharedKey(g, b);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            sessionTopic: y,
          });
          const _ = await this.client.core.relayer.subscribe(y);
          this.client.logger.trace({
            type: "method",
            method: "onSessionProposeResponse",
            subscriptionId: _,
          }),
            await this.client.core.pairing.activate({ topic: r });
        } else
          Hr(n) &&
            (await this.client.proposal.delete(a, It("USER_DISCONNECTED")),
            this.events.emit(Dt("session_connect"), { error: n.error }));
      }),
      (this.onSessionSettleRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          this.isValidSessionSettleRequest(h);
          const {
              relay: f,
              controller: g,
              expiry: b,
              namespaces: y,
              requiredNamespaces: _,
              optionalNamespaces: P,
              sessionProperties: N,
              pairingTopic: B,
            } = n.params,
            $ = fr(
              {
                topic: r,
                relay: f,
                expiry: b,
                namespaces: y,
                acknowledged: !0,
                pairingTopic: B,
                requiredNamespaces: _,
                optionalNamespaces: P,
                controller: g.publicKey,
                self: { publicKey: "", metadata: this.client.metadata },
                peer: { publicKey: g.publicKey, metadata: g.metadata },
              },
              N && { sessionProperties: N }
            );
          await this.sendResult({ id: n.id, topic: r, result: !0 }),
            this.events.emit(Dt("session_connect"), { session: $ }),
            this.cleanupDuplicatePairings($);
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (r, n) => {
        const { id: a } = n;
        gi(n)
          ? (await this.client.session.update(r, { acknowledged: !0 }),
            this.events.emit(Dt("session_approve", a), {}))
          : Hr(n) &&
            (await this.client.session.delete(r, It("USER_DISCONNECTED")),
            this.events.emit(Dt("session_approve", a), { error: n.error }));
      }),
      (this.onSessionUpdateRequest = async (r, n) => {
        const { params: a, id: h } = n;
        try {
          const f = `${r}_session_update`,
            g = bo.get(f);
          if (g && this.isRequestOutOfSync(g, h)) {
            this.client.logger.info(`Discarding out of sync request - ${h}`);
            return;
          }
          this.isValidUpdate(fr({ topic: r }, a)),
            await this.client.session.update(r, { namespaces: a.namespaces }),
            await this.sendResult({ id: h, topic: r, result: !0 }),
            this.client.events.emit("session_update", {
              id: h,
              topic: r,
              params: a,
            }),
            bo.set(f, h);
        } catch (f) {
          await this.sendError(h, r, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (r, n) =>
        parseInt(n.toString().slice(0, -3)) <=
        parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, n) => {
        const { id: a } = n;
        gi(n)
          ? this.events.emit(Dt("session_update", a), {})
          : Hr(n) &&
            this.events.emit(Dt("session_update", a), { error: n.error });
      }),
      (this.onSessionExtendRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidExtend({ topic: r }),
            await this.setExpiry(r, kr(Io)),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit("session_extend", { id: a, topic: r });
        } catch (h) {
          await this.sendError(a, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionExtendResponse = (r, n) => {
        const { id: a } = n;
        gi(n)
          ? this.events.emit(Dt("session_extend", a), {})
          : Hr(n) &&
            this.events.emit(Dt("session_extend", a), { error: n.error });
      }),
      (this.onSessionPingRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidPing({ topic: r }),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit("session_ping", { id: a, topic: r });
        } catch (h) {
          await this.sendError(a, r, h), this.client.logger.error(h);
        }
      }),
      (this.onSessionPingResponse = (r, n) => {
        const { id: a } = n;
        setTimeout(() => {
          gi(n)
            ? this.events.emit(Dt("session_ping", a), {})
            : Hr(n) &&
              this.events.emit(Dt("session_ping", a), { error: n.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (r, n) => {
        const { id: a } = n;
        try {
          this.isValidDisconnect({ topic: r, reason: n.params }),
            await Promise.all([
              new Promise((h) => {
                this.client.core.relayer.once(Jt.publish, async () => {
                  h(await this.deleteSession(r));
                });
              }),
              this.sendResult({ id: a, topic: r, result: !0 }),
            ]),
            this.client.events.emit("session_delete", { id: a, topic: r });
        } catch (h) {
          this.client.logger.error(h);
        }
      }),
      (this.onSessionRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          this.isValidRequest(fr({ topic: r }, h));
          const f = xn(JSON.stringify(Pn("wc_sessionRequest", h, a))),
            g = this.client.session.get(r),
            b = await this.getVerifyContext(f, g.peer.metadata),
            y = { id: a, topic: r, params: h, verifyContext: b };
          await this.setPendingSessionRequest(y),
            this.addSessionRequestToSessionRequestQueue(y),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (r, n) => {
        const { id: a } = n;
        gi(n)
          ? this.events.emit(Dt("session_request", a), { result: n.result })
          : Hr(n) &&
            this.events.emit(Dt("session_request", a), { error: n.error });
      }),
      (this.onSessionEventRequest = async (r, n) => {
        const { id: a, params: h } = n;
        try {
          const f = `${r}_session_event_${h.event.name}`,
            g = bo.get(f);
          if (g && this.isRequestOutOfSync(g, a)) {
            this.client.logger.info(`Discarding out of sync request - ${a}`);
            return;
          }
          this.isValidEmit(fr({ topic: r }, h)),
            this.client.events.emit("session_event", {
              id: a,
              topic: r,
              params: h,
            }),
            bo.set(f, a);
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, {
          message: "fulfilled",
          code: 0,
        }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = pi.idle),
              this.processSessionRequestQueue();
          }, ce.toMiliseconds(this.requestQueueDelay));
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === pi.active) {
          this.client.logger.info("session request queue is already active.");
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info("session request queue is empty.");
          return;
        }
        try {
          (this.sessionRequestQueue.state = pi.active),
            this.client.events.emit("session_request", r);
        } catch (n) {
          this.client.logger.error(n);
        }
      }),
      (this.onPairingCreated = (r) => {
        if (r.active) return;
        const n = this.client.proposal
          .getAll()
          .find((a) => a.pairingTopic === r.topic);
        n &&
          this.onSessionProposeRequest(
            r.topic,
            Pn(
              "wc_sessionPropose",
              {
                requiredNamespaces: n.requiredNamespaces,
                optionalNamespaces: n.optionalNamespaces,
                relays: n.relays,
                proposer: n.proposer,
                sessionProperties: n.sessionProperties,
              },
              n.id
            )
          );
      }),
      (this.isValidConnect = async (r) => {
        if (!pr(r)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `connect() params: ${JSON.stringify(r)}`
          );
          throw new Error(b);
        }
        const {
          pairingTopic: n,
          requiredNamespaces: a,
          optionalNamespaces: h,
          sessionProperties: f,
          relays: g,
        } = r;
        if ((ir(n) || (await this.isValidPairingTopic(n)), !zb(g, !0))) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `connect() relays: ${g}`
          );
          throw new Error(b);
        }
        !ir(a) &&
          Sn(a) !== 0 &&
          this.validateNamespaces(a, "requiredNamespaces"),
          !ir(h) &&
            Sn(h) !== 0 &&
            this.validateNamespaces(h, "optionalNamespaces"),
          ir(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.validateNamespaces = (r, n) => {
        const a = qb(r, "connect()", n);
        if (a) throw new Error(a.message);
      }),
      (this.isValidApprove = async (r) => {
        if (!pr(r))
          throw new Error(
            Z("MISSING_OR_INVALID", `approve() params: ${r}`).message
          );
        const {
          id: n,
          namespaces: a,
          relayProtocol: h,
          sessionProperties: f,
        } = r;
        await this.isValidProposalId(n);
        const g = this.client.proposal.get(n),
          b = Oo(a, "approve()");
        if (b) throw new Error(b.message);
        const y = bl(g.requiredNamespaces, a, "approve()");
        if (y) throw new Error(y.message);
        if (!Ht(h, !0)) {
          const { message: _ } = Z(
            "MISSING_OR_INVALID",
            `approve() relayProtocol: ${h}`
          );
          throw new Error(_);
        }
        ir(f) || this.validateSessionProps(f, "sessionProperties");
      }),
      (this.isValidReject = async (r) => {
        if (!pr(r)) {
          const { message: h } = Z(
            "MISSING_OR_INVALID",
            `reject() params: ${r}`
          );
          throw new Error(h);
        }
        const { id: n, reason: a } = r;
        if ((await this.isValidProposalId(n), !Hb(a))) {
          const { message: h } = Z(
            "MISSING_OR_INVALID",
            `reject() reason: ${JSON.stringify(a)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidSessionSettleRequest = (r) => {
        if (!pr(r)) {
          const { message: y } = Z(
            "MISSING_OR_INVALID",
            `onSessionSettleRequest() params: ${r}`
          );
          throw new Error(y);
        }
        const { relay: n, controller: a, namespaces: h, expiry: f } = r;
        if (!Bf(n)) {
          const { message: y } = Z(
            "MISSING_OR_INVALID",
            "onSessionSettleRequest() relay protocol should be a string"
          );
          throw new Error(y);
        }
        const g = $b(a, "onSessionSettleRequest()");
        if (g) throw new Error(g.message);
        const b = Oo(h, "onSessionSettleRequest()");
        if (b) throw new Error(b.message);
        if (Ai(f)) {
          const { message: y } = Z("EXPIRED", "onSessionSettleRequest()");
          throw new Error(y);
        }
      }),
      (this.isValidUpdate = async (r) => {
        if (!pr(r)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `update() params: ${r}`
          );
          throw new Error(b);
        }
        const { topic: n, namespaces: a } = r;
        await this.isValidSessionTopic(n);
        const h = this.client.session.get(n),
          f = Oo(a, "update()");
        if (f) throw new Error(f.message);
        const g = bl(h.requiredNamespaces, a, "update()");
        if (g) throw new Error(g.message);
      }),
      (this.isValidExtend = async (r) => {
        if (!pr(r)) {
          const { message: a } = Z(
            "MISSING_OR_INVALID",
            `extend() params: ${r}`
          );
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionTopic(n);
      }),
      (this.isValidRequest = async (r) => {
        if (!pr(r)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `request() params: ${r}`
          );
          throw new Error(b);
        }
        const { topic: n, request: a, chainId: h, expiry: f } = r;
        await this.isValidSessionTopic(n);
        const { namespaces: g } = this.client.session.get(n);
        if (!wl(g, h)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `request() chainId: ${h}`
          );
          throw new Error(b);
        }
        if (!Bb(a)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `request() ${JSON.stringify(a)}`
          );
          throw new Error(b);
        }
        if (!Vb(g, h, a.method)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `request() method: ${a.method}`
          );
          throw new Error(b);
        }
        if (f && !Qb(f, Ic)) {
          const { message: b } = Z(
            "MISSING_OR_INVALID",
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Ic.min} and ${Ic.max}`
          );
          throw new Error(b);
        }
      }),
      (this.isValidRespond = async (r) => {
        if (!pr(r)) {
          const { message: h } = Z(
            "MISSING_OR_INVALID",
            `respond() params: ${r}`
          );
          throw new Error(h);
        }
        const { topic: n, response: a } = r;
        if ((await this.isValidSessionTopic(n), !Kb(a))) {
          const { message: h } = Z(
            "MISSING_OR_INVALID",
            `respond() response: ${JSON.stringify(a)}`
          );
          throw new Error(h);
        }
      }),
      (this.isValidPing = async (r) => {
        if (!pr(r)) {
          const { message: a } = Z("MISSING_OR_INVALID", `ping() params: ${r}`);
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionOrPairingTopic(n);
      }),
      (this.isValidEmit = async (r) => {
        if (!pr(r)) {
          const { message: g } = Z("MISSING_OR_INVALID", `emit() params: ${r}`);
          throw new Error(g);
        }
        const { topic: n, event: a, chainId: h } = r;
        await this.isValidSessionTopic(n);
        const { namespaces: f } = this.client.session.get(n);
        if (!wl(f, h)) {
          const { message: g } = Z(
            "MISSING_OR_INVALID",
            `emit() chainId: ${h}`
          );
          throw new Error(g);
        }
        if (!Fb(a)) {
          const { message: g } = Z(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(a)}`
          );
          throw new Error(g);
        }
        if (!Gb(f, h, a.name)) {
          const { message: g } = Z(
            "MISSING_OR_INVALID",
            `emit() event: ${JSON.stringify(a)}`
          );
          throw new Error(g);
        }
      }),
      (this.isValidDisconnect = async (r) => {
        if (!pr(r)) {
          const { message: a } = Z(
            "MISSING_OR_INVALID",
            `disconnect() params: ${r}`
          );
          throw new Error(a);
        }
        const { topic: n } = r;
        await this.isValidSessionOrPairingTopic(n);
      }),
      (this.getVerifyContext = async (r, n) => {
        const a = {
          verified: {
            verifyUrl: n.verifyUrl || In,
            validation: "UNKNOWN",
            origin: n.url || "",
          },
        };
        try {
          const h = await this.client.core.verify.resolve({
            attestationId: r,
            verifyUrl: n.verifyUrl,
          });
          h &&
            ((a.verified.origin = h.origin),
            (a.verified.isScam = h.isScam),
            (a.verified.validation =
              h.origin === new URL(n.url).origin ? "VALID" : "INVALID"));
        } catch (h) {
          this.client.logger.info(h);
        }
        return (
          this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a
        );
      }),
      (this.validateSessionProps = (r, n) => {
        Object.values(r).forEach((a) => {
          if (!Ht(a, !1)) {
            const { message: h } = Z(
              "MISSING_OR_INVALID",
              `${n} must be in Record<string, string> format. Received: ${JSON.stringify(
                a
              )}`
            );
            throw new Error(h);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = Z("NOT_INITIALIZED", this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Jt.message, async (t) => {
      const { topic: r, message: n } = t;
      if (
        this.ignoredPayloadTypes.includes(
          this.client.core.crypto.getPayloadType(n)
        )
      )
        return;
      const a = await this.client.core.crypto.decode(r, n);
      try {
        Zc(a)
          ? (this.client.core.history.set(r, a),
            this.onRelayEventRequest({ topic: r, payload: a }))
          : Mo(a)
          ? (await this.client.core.history.resolve(a),
            await this.onRelayEventResponse({ topic: r, payload: a }),
            this.client.core.history.delete(r, a.id))
          : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (h) {
        this.client.logger.error(h);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Nr.expired, async (t) => {
      const { topic: r, id: n } = kf(t.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Z("EXPIRED"), !0);
      r
        ? this.client.session.keys.includes(r) &&
          (await this.deleteSession(r, !0),
          this.client.events.emit("session_expire", { topic: r }))
        : n &&
          (await this.deleteProposal(n, !0),
          this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(ss.create, (t) =>
      this.onPairingCreated(t)
    );
  }
  isValidPairingTopic(t) {
    if (!Ht(t, !1)) {
      const { message: r } = Z(
        "MISSING_OR_INVALID",
        `pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = Z(
        "NO_MATCHING_KEY",
        `pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ai(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = Z("EXPIRED", `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!Ht(t, !1)) {
      const { message: r } = Z(
        "MISSING_OR_INVALID",
        `session topic should be a string: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = Z(
        "NO_MATCHING_KEY",
        `session topic doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ai(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = Z("EXPIRED", `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t))
      this.isValidPairingTopic(t);
    else if (Ht(t, !1)) {
      const { message: r } = Z(
        "NO_MATCHING_KEY",
        `session or pairing topic doesn't exist: ${t}`
      );
      throw new Error(r);
    } else {
      const { message: r } = Z(
        "MISSING_OR_INVALID",
        `session or pairing topic should be a string: ${t}`
      );
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!kb(t)) {
      const { message: r } = Z(
        "MISSING_OR_INVALID",
        `proposal id should be a number: ${t}`
      );
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = Z(
        "NO_MATCHING_KEY",
        `proposal id doesn't exist: ${t}`
      );
      throw new Error(r);
    }
    if (Ai(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = Z("EXPIRED", `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class _x extends qo {
  constructor(t, r) {
    super(t, r, hx, ru), (this.core = t), (this.logger = r);
  }
}
class Ex extends qo {
  constructor(t, r) {
    super(t, r, lx, ru), (this.core = t), (this.logger = r);
  }
}
class Ix extends qo {
  constructor(t, r) {
    super(t, r, dx, ru, (n) => n.id), (this.core = t), (this.logger = r);
  }
}
let xx = class xd extends X_ {
  constructor(t) {
    super(t),
      (this.protocol = bd),
      (this.version = _d),
      (this.name = Ec.name),
      (this.events = new $r.EventEmitter()),
      (this.on = (n, a) => this.events.on(n, a)),
      (this.once = (n, a) => this.events.once(n, a)),
      (this.off = (n, a) => this.events.off(n, a)),
      (this.removeListener = (n, a) => this.events.removeListener(n, a)),
      (this.removeAllListeners = (n) => this.events.removeAllListeners(n)),
      (this.connect = async (n) => {
        try {
          return await this.engine.connect(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.pair = async (n) => {
        try {
          return await this.engine.pair(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.approve = async (n) => {
        try {
          return await this.engine.approve(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.reject = async (n) => {
        try {
          return await this.engine.reject(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.update = async (n) => {
        try {
          return await this.engine.update(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.extend = async (n) => {
        try {
          return await this.engine.extend(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.request = async (n) => {
        try {
          return await this.engine.request(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.respond = async (n) => {
        try {
          return await this.engine.respond(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.ping = async (n) => {
        try {
          return await this.engine.ping(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.emit = async (n) => {
        try {
          return await this.engine.emit(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.disconnect = async (n) => {
        try {
          return await this.engine.disconnect(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.find = (n) => {
        try {
          return this.engine.find(n);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (n) {
          throw (this.logger.error(n.message), n);
        }
      }),
      (this.name = (t == null ? void 0 : t.name) || Ec.name),
      (this.metadata = (t == null ? void 0 : t.metadata) || nb());
    const r =
      typeof (t == null ? void 0 : t.logger) < "u" &&
      typeof (t == null ? void 0 : t.logger) != "string"
        ? t.logger
        : Te.pino(
            Te.getDefaultLoggerOptions({
              level: (t == null ? void 0 : t.logger) || Ec.logger,
            })
          );
    (this.core = (t == null ? void 0 : t.core) || new ux(t)),
      (this.logger = Te.generateChildLogger(r, this.name)),
      (this.session = new Ex(this.core, this.logger)),
      (this.proposal = new _x(this.core, this.logger)),
      (this.pendingRequest = new Ix(this.core, this.logger)),
      (this.engine = new bx(this));
  }
  static async init(t) {
    const r = new xd(t);
    return await r.initialize(), r;
  }
  get context() {
    return Te.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info("SignClient Initialization Success");
    } catch (t) {
      throw (
        (this.logger.info("SignClient Initialization Failure"),
        this.logger.error(t.message),
        t)
      );
    }
  }
};
var Mc = { exports: {} };
(function (s, t) {
  var r = typeof self < "u" ? self : Br,
    n = (function () {
      function h() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (h.prototype = r), new h();
    })();
  (function (h) {
    (function (f) {
      var g = {
        searchParams: "URLSearchParams" in h,
        iterable: "Symbol" in h && "iterator" in Symbol,
        blob:
          "FileReader" in h &&
          "Blob" in h &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in h,
        arrayBuffer: "ArrayBuffer" in h,
      };
      function b(v) {
        return v && DataView.prototype.isPrototypeOf(v);
      }
      if (g.arrayBuffer)
        var y = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          _ =
            ArrayBuffer.isView ||
            function (v) {
              return v && y.indexOf(Object.prototype.toString.call(v)) > -1;
            };
      function P(v) {
        if (
          (typeof v != "string" && (v = String(v)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(v))
        )
          throw new TypeError("Invalid character in header field name");
        return v.toLowerCase();
      }
      function N(v) {
        return typeof v != "string" && (v = String(v)), v;
      }
      function B(v) {
        var S = {
          next: function () {
            var re = v.shift();
            return { done: re === void 0, value: re };
          },
        };
        return (
          g.iterable &&
            (S[Symbol.iterator] = function () {
              return S;
            }),
          S
        );
      }
      function $(v) {
        (this.map = {}),
          v instanceof $
            ? v.forEach(function (S, re) {
                this.append(re, S);
              }, this)
            : Array.isArray(v)
            ? v.forEach(function (S) {
                this.append(S[0], S[1]);
              }, this)
            : v &&
              Object.getOwnPropertyNames(v).forEach(function (S) {
                this.append(S, v[S]);
              }, this);
      }
      ($.prototype.append = function (v, S) {
        (v = P(v)), (S = N(S));
        var re = this.map[v];
        this.map[v] = re ? re + ", " + S : S;
      }),
        ($.prototype.delete = function (v) {
          delete this.map[P(v)];
        }),
        ($.prototype.get = function (v) {
          return (v = P(v)), this.has(v) ? this.map[v] : null;
        }),
        ($.prototype.has = function (v) {
          return this.map.hasOwnProperty(P(v));
        }),
        ($.prototype.set = function (v, S) {
          this.map[P(v)] = N(S);
        }),
        ($.prototype.forEach = function (v, S) {
          for (var re in this.map)
            this.map.hasOwnProperty(re) && v.call(S, this.map[re], re, this);
        }),
        ($.prototype.keys = function () {
          var v = [];
          return (
            this.forEach(function (S, re) {
              v.push(re);
            }),
            B(v)
          );
        }),
        ($.prototype.values = function () {
          var v = [];
          return (
            this.forEach(function (S) {
              v.push(S);
            }),
            B(v)
          );
        }),
        ($.prototype.entries = function () {
          var v = [];
          return (
            this.forEach(function (S, re) {
              v.push([re, S]);
            }),
            B(v)
          );
        }),
        g.iterable && ($.prototype[Symbol.iterator] = $.prototype.entries);
      function Q(v) {
        if (v.bodyUsed) return Promise.reject(new TypeError("Already read"));
        v.bodyUsed = !0;
      }
      function se(v) {
        return new Promise(function (S, re) {
          (v.onload = function () {
            S(v.result);
          }),
            (v.onerror = function () {
              re(v.error);
            });
        });
      }
      function le(v) {
        var S = new FileReader(),
          re = se(S);
        return S.readAsArrayBuffer(v), re;
      }
      function T(v) {
        var S = new FileReader(),
          re = se(S);
        return S.readAsText(v), re;
      }
      function L(v) {
        for (
          var S = new Uint8Array(v), re = new Array(S.length), pe = 0;
          pe < S.length;
          pe++
        )
          re[pe] = String.fromCharCode(S[pe]);
        return re.join("");
      }
      function z(v) {
        if (v.slice) return v.slice(0);
        var S = new Uint8Array(v.byteLength);
        return S.set(new Uint8Array(v)), S.buffer;
      }
      function q() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (v) {
            (this._bodyInit = v),
              v
                ? typeof v == "string"
                  ? (this._bodyText = v)
                  : g.blob && Blob.prototype.isPrototypeOf(v)
                  ? (this._bodyBlob = v)
                  : g.formData && FormData.prototype.isPrototypeOf(v)
                  ? (this._bodyFormData = v)
                  : g.searchParams && URLSearchParams.prototype.isPrototypeOf(v)
                  ? (this._bodyText = v.toString())
                  : g.arrayBuffer && g.blob && b(v)
                  ? ((this._bodyArrayBuffer = z(v.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : g.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(v) || _(v))
                  ? (this._bodyArrayBuffer = z(v))
                  : (this._bodyText = v = Object.prototype.toString.call(v))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof v == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : g.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(v) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          g.blob &&
            ((this.blob = function () {
              var v = Q(this);
              if (v) return v;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? Q(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(le);
            })),
          (this.text = function () {
            var v = Q(this);
            if (v) return v;
            if (this._bodyBlob) return T(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(L(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          g.formData &&
            (this.formData = function () {
              return this.text().then(ue);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var x = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function M(v) {
        var S = v.toUpperCase();
        return x.indexOf(S) > -1 ? S : v;
      }
      function H(v, S) {
        S = S || {};
        var re = S.body;
        if (v instanceof H) {
          if (v.bodyUsed) throw new TypeError("Already read");
          (this.url = v.url),
            (this.credentials = v.credentials),
            S.headers || (this.headers = new $(v.headers)),
            (this.method = v.method),
            (this.mode = v.mode),
            (this.signal = v.signal),
            !re &&
              v._bodyInit != null &&
              ((re = v._bodyInit), (v.bodyUsed = !0));
        } else this.url = String(v);
        if (
          ((this.credentials =
            S.credentials || this.credentials || "same-origin"),
          (S.headers || !this.headers) && (this.headers = new $(S.headers)),
          (this.method = M(S.method || this.method || "GET")),
          (this.mode = S.mode || this.mode || null),
          (this.signal = S.signal || this.signal),
          (this.referrer = null),
          (this.method === "GET" || this.method === "HEAD") && re)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(re);
      }
      H.prototype.clone = function () {
        return new H(this, { body: this._bodyInit });
      };
      function ue(v) {
        var S = new FormData();
        return (
          v
            .trim()
            .split("&")
            .forEach(function (re) {
              if (re) {
                var pe = re.split("="),
                  Y = pe.shift().replace(/\+/g, " "),
                  G = pe.join("=").replace(/\+/g, " ");
                S.append(decodeURIComponent(Y), decodeURIComponent(G));
              }
            }),
          S
        );
      }
      function ae(v) {
        var S = new $(),
          re = v.replace(/\r?\n[\t ]+/g, " ");
        return (
          re.split(/\r?\n/).forEach(function (pe) {
            var Y = pe.split(":"),
              G = Y.shift().trim();
            if (G) {
              var J = Y.join(":").trim();
              S.append(G, J);
            }
          }),
          S
        );
      }
      q.call(H.prototype);
      function ge(v, S) {
        S || (S = {}),
          (this.type = "default"),
          (this.status = S.status === void 0 ? 200 : S.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in S ? S.statusText : "OK"),
          (this.headers = new $(S.headers)),
          (this.url = S.url || ""),
          this._initBody(v);
      }
      q.call(ge.prototype),
        (ge.prototype.clone = function () {
          return new ge(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new $(this.headers),
            url: this.url,
          });
        }),
        (ge.error = function () {
          var v = new ge(null, { status: 0, statusText: "" });
          return (v.type = "error"), v;
        });
      var Ce = [301, 302, 303, 307, 308];
      (ge.redirect = function (v, S) {
        if (Ce.indexOf(S) === -1) throw new RangeError("Invalid status code");
        return new ge(null, { status: S, headers: { location: v } });
      }),
        (f.DOMException = h.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (S, re) {
          (this.message = S), (this.name = re);
          var pe = Error(S);
          this.stack = pe.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function ze(v, S) {
        return new Promise(function (re, pe) {
          var Y = new H(v, S);
          if (Y.signal && Y.signal.aborted)
            return pe(new f.DOMException("Aborted", "AbortError"));
          var G = new XMLHttpRequest();
          function J() {
            G.abort();
          }
          (G.onload = function () {
            var X = {
              status: G.status,
              statusText: G.statusText,
              headers: ae(G.getAllResponseHeaders() || ""),
            };
            X.url =
              "responseURL" in G
                ? G.responseURL
                : X.headers.get("X-Request-URL");
            var Je = "response" in G ? G.response : G.responseText;
            re(new ge(Je, X));
          }),
            (G.onerror = function () {
              pe(new TypeError("Network request failed"));
            }),
            (G.ontimeout = function () {
              pe(new TypeError("Network request failed"));
            }),
            (G.onabort = function () {
              pe(new f.DOMException("Aborted", "AbortError"));
            }),
            G.open(Y.method, Y.url, !0),
            Y.credentials === "include"
              ? (G.withCredentials = !0)
              : Y.credentials === "omit" && (G.withCredentials = !1),
            "responseType" in G && g.blob && (G.responseType = "blob"),
            Y.headers.forEach(function (X, Je) {
              G.setRequestHeader(Je, X);
            }),
            Y.signal &&
              (Y.signal.addEventListener("abort", J),
              (G.onreadystatechange = function () {
                G.readyState === 4 && Y.signal.removeEventListener("abort", J);
              })),
            G.send(typeof Y._bodyInit > "u" ? null : Y._bodyInit);
        });
      }
      return (
        (ze.polyfill = !0),
        h.fetch ||
          ((h.fetch = ze), (h.Headers = $), (h.Request = H), (h.Response = ge)),
        (f.Headers = $),
        (f.Request = H),
        (f.Response = ge),
        (f.fetch = ze),
        Object.defineProperty(f, "__esModule", { value: !0 }),
        f
      );
    })({});
  })(n),
    (n.fetch.ponyfill = !0),
    delete n.fetch.polyfill;
  var a = n;
  (t = a.fetch),
    (t.default = a.fetch),
    (t.fetch = a.fetch),
    (t.Headers = a.Headers),
    (t.Request = a.Request),
    (t.Response = a.Response),
    (s.exports = t);
})(Mc, Mc.exports);
var Sx = Mc.exports;
const df = Tf(Sx),
  Px = { Accept: "application/json", "Content-Type": "application/json" },
  Ox = "POST",
  pf = { headers: Px, method: Ox },
  gf = 10;
class Ni {
  constructor(t, r = !1) {
    if (
      ((this.url = t),
      (this.disableProviderPing = r),
      (this.events = new $r.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !kl(t))
    )
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    (this.url = t), (this.disableProviderPing = r);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error("Connection already closed");
    this.onClose();
  }
  async send(t, r) {
    this.isAvailable || (await this.register());
    try {
      const n = Qi(t),
        h = await (
          await df(this.url, Object.assign(Object.assign({}, pf), { body: n }))
        ).json();
      this.onPayload({ data: h });
    } catch (n) {
      this.onError(t.id, n);
    }
  }
  async register(t = this.url) {
    if (!kl(t))
      throw new Error(
        `Provided URL is not compatible with HTTP connection: ${t}`
      );
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount("register_error") >= r ||
          this.events.listenerCount("open") >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((n, a) => {
          this.events.once("register_error", (h) => {
            this.resetMaxListeners(), a(h);
          }),
            this.events.once("open", () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                return a(new Error("HTTP connection is missing or invalid"));
              n();
            });
        })
      );
    }
    (this.url = t), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const r = Qi({ id: 1, jsonrpc: "2.0", method: "test", params: [] });
        await df(t, Object.assign(Object.assign({}, pf), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const n = this.parseError(r);
      throw (this.events.emit("register_error", n), this.onClose(), n);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit("open");
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit("close");
  }
  onPayload(t) {
    if (typeof t.data > "u") return;
    const r = typeof t.data == "string" ? ds(t.data) : t.data;
    this.events.emit("payload", r);
  }
  onError(t, r) {
    const n = this.parseError(r),
      a = n.message || n.toString(),
      h = jo(t, a);
    this.events.emit("payload", h);
  }
  parseError(t, r = this.url) {
    return td(t, r, "HTTP");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > gf && this.events.setMaxListeners(gf);
  }
}
const yf = "error",
  Rx = "wss://relay.walletconnect.com",
  Ax = "wc",
  Tx = "universal_provider",
  mf = `${Ax}@2:${Tx}:`,
  Cx = "https://rpc.walletconnect.com/v1/",
  mi = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var is =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Uc = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ (function (s, t) {
  (function () {
    var r,
      n = "4.17.21",
      a = 200,
      h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      f = "Expected a function",
      g = "Invalid `variable` option passed into `_.template`",
      b = "__lodash_hash_undefined__",
      y = 500,
      _ = "__lodash_placeholder__",
      P = 1,
      N = 2,
      B = 4,
      $ = 1,
      Q = 2,
      se = 1,
      le = 2,
      T = 4,
      L = 8,
      z = 16,
      q = 32,
      x = 64,
      M = 128,
      H = 256,
      ue = 512,
      ae = 30,
      ge = "...",
      Ce = 800,
      ze = 16,
      v = 1,
      S = 2,
      re = 3,
      pe = 1 / 0,
      Y = 9007199254740991,
      G = 17976931348623157e292,
      J = NaN,
      X = 4294967295,
      Je = X - 1,
      Be = X >>> 1,
      Kr = [
        ["ary", M],
        ["bind", se],
        ["bindKey", le],
        ["curry", L],
        ["curryRight", z],
        ["flip", ue],
        ["partial", q],
        ["partialRight", x],
        ["rearg", H],
      ],
      Ie = "[object Arguments]",
      xt = "[object Array]",
      U = "[object AsyncFunction]",
      j = "[object Boolean]",
      C = "[object Date]",
      u = "[object DOMException]",
      I = "[object Error]",
      ne = "[object Function]",
      ye = "[object GeneratorFunction]",
      _e = "[object Map]",
      Ne = "[object Number]",
      De = "[object Null]",
      Pe = "[object Object]",
      St = "[object Promise]",
      vt = "[object Proxy]",
      ot = "[object RegExp]",
      je = "[object Set]",
      Ye = "[object String]",
      Xe = "[object Symbol]",
      at = "[object Undefined]",
      ke = "[object WeakMap]",
      Ze = "[object WeakSet]",
      $e = "[object ArrayBuffer]",
      Ke = "[object DataView]",
      ht = "[object Float32Array]",
      Ue = "[object Float64Array]",
      Pt = "[object Int8Array]",
      Lt = "[object Int16Array]",
      Bt = "[object Int32Array]",
      Kt = "[object Uint8Array]",
      Ut = "[object Uint8ClampedArray]",
      Qt = "[object Uint16Array]",
      or = "[object Uint32Array]",
      Fr = /\b__p \+= '';/g,
      Yt = /\b(__p \+=) '' \+/g,
      Zr = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      vi = /&(?:amp|lt|gt|quot|#39);/g,
      $i = /[&<>"']/g,
      lt = RegExp(vi.source),
      rt = RegExp($i.source),
      ft = /<%-([\s\S]+?)%>/g,
      dt = /<%([\s\S]+?)%>/g,
      ct = /<%=([\s\S]+?)%>/g,
      it = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      Ot = /^\w*$/,
      Rt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      pt = /[\\^$.*+?()[\]{}|]/g,
      At = RegExp(pt.source),
      gt = /^\s+/,
      wt = /\s/,
      yt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Qe = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Tt = /,? & /,
      Ct = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      zo = /[()=,{}\[\]\/\s]/,
      ko = /\\(\\)?/g,
      Ho = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Ir = /\w*$/,
      Bo = /^[-+]0x[0-9a-f]+$/i,
      Ko = /^0b[01]+$/i,
      Fo = /^\[object .+?Constructor\]$/,
      Vo = /^0o[0-7]+$/i,
      Go = /^(?:0|[1-9]\d*)$/,
      ei = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      tn = /($^)/,
      Wo = /['\n\r\u2028\u2029\\]/g,
      rn = "\\ud800-\\udfff",
      Jo = "\\u0300-\\u036f",
      Qo = "\\ufe20-\\ufe2f",
      nn = "\\u20d0-\\u20ff",
      gs = Jo + Qo + nn,
      ys = "\\u2700-\\u27bf",
      Dr = "a-z\\xdf-\\xf6\\xf8-\\xff",
      Yo = "\\xac\\xb1\\xd7\\xf7",
      Xo = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      Zo = "\\u2000-\\u206f",
      ea =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      ms = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      vs = "\\ufe0e\\ufe0f",
      Di = Yo + Xo + Zo + ea,
      Nn = "['’]",
      Li = "[" + rn + "]",
      $n = "[" + Di + "]",
      ji = "[" + gs + "]",
      ws = "\\d+",
      ta = "[" + ys + "]",
      bs = "[" + Dr + "]",
      _s = "[^" + rn + Di + ws + ys + Dr + ms + "]",
      sn = "\\ud83c[\\udffb-\\udfff]",
      ra = "(?:" + ji + "|" + sn + ")",
      Es = "[^" + rn + "]",
      on = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      wi = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      yr = "[" + ms + "]",
      Is = "\\u200d",
      xs = "(?:" + bs + "|" + _s + ")",
      Vr = "(?:" + yr + "|" + _s + ")",
      Ss = "(?:" + Nn + "(?:d|ll|m|re|s|t|ve))?",
      Ps = "(?:" + Nn + "(?:D|LL|M|RE|S|T|VE))?",
      Os = ra + "?",
      Rs = "[" + vs + "]?",
      ia = "(?:" + Is + "(?:" + [Es, on, wi].join("|") + ")" + Rs + Os + ")*",
      ti = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      As = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      Ts = Rs + Os + ia,
      an = "(?:" + [ta, on, wi].join("|") + ")" + Ts,
      na = "(?:" + [Es + ji + "?", ji, on, wi, Li].join("|") + ")",
      Dn = RegExp(Nn, "g"),
      sa = RegExp(ji, "g"),
      cn = RegExp(sn + "(?=" + sn + ")|" + na + Ts, "g"),
      Cs = RegExp(
        [
          yr + "?" + bs + "+" + Ss + "(?=" + [$n, yr, "$"].join("|") + ")",
          Vr + "+" + Ps + "(?=" + [$n, yr + xs, "$"].join("|") + ")",
          yr + "?" + xs + "+" + Ss,
          yr + "+" + Ps,
          As,
          ti,
          ws,
          an,
        ].join("|"),
        "g"
      ),
      Ns = RegExp("[" + Is + rn + gs + vs + "]"),
      Mi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      $s = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      oa = -1,
      Fe = {};
    (Fe[ht] =
      Fe[Ue] =
      Fe[Pt] =
      Fe[Lt] =
      Fe[Bt] =
      Fe[Kt] =
      Fe[Ut] =
      Fe[Qt] =
      Fe[or] =
        !0),
      (Fe[Ie] =
        Fe[xt] =
        Fe[$e] =
        Fe[j] =
        Fe[Ke] =
        Fe[C] =
        Fe[I] =
        Fe[ne] =
        Fe[_e] =
        Fe[Ne] =
        Fe[Pe] =
        Fe[ot] =
        Fe[je] =
        Fe[Ye] =
        Fe[ke] =
          !1);
    var He = {};
    (He[Ie] =
      He[xt] =
      He[$e] =
      He[Ke] =
      He[j] =
      He[C] =
      He[ht] =
      He[Ue] =
      He[Pt] =
      He[Lt] =
      He[Bt] =
      He[_e] =
      He[Ne] =
      He[Pe] =
      He[ot] =
      He[je] =
      He[Ye] =
      He[Xe] =
      He[Kt] =
      He[Ut] =
      He[Qt] =
      He[or] =
        !0),
      (He[I] = He[ne] = He[ke] = !1);
    var m = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      O = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      V = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      te = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Ve = parseFloat,
      ve = parseInt,
      et = typeof is == "object" && is && is.Object === Object && is,
      Nt = typeof self == "object" && self && self.Object === Object && self,
      Re = et || Nt || Function("return this")(),
      Ge = t && !t.nodeType && t,
      bt = Ge && !0 && s && !s.nodeType && s,
      ar = bt && bt.exports === Ge,
      $t = ar && et.process,
      tt = (function () {
        try {
          var R = bt && bt.require && bt.require("util").types;
          return R || ($t && $t.binding && $t.binding("util"));
        } catch {}
      })(),
      Xt = tt && tt.isArrayBuffer,
      Lr = tt && tt.isDate,
      xr = tt && tt.isMap,
      Gr = tt && tt.isRegExp,
      Ln = tt && tt.isSet,
      Ui = tt && tt.isTypedArray;
    function qt(R, k, D) {
      switch (D.length) {
        case 0:
          return R.call(k);
        case 1:
          return R.call(k, D[0]);
        case 2:
          return R.call(k, D[0], D[1]);
        case 3:
          return R.call(k, D[0], D[1], D[2]);
      }
      return R.apply(k, D);
    }
    function Od(R, k, D, ie) {
      for (var me = -1, Le = R == null ? 0 : R.length; ++me < Le; ) {
        var jt = R[me];
        k(ie, jt, D(jt), R);
      }
      return ie;
    }
    function Sr(R, k) {
      for (
        var D = -1, ie = R == null ? 0 : R.length;
        ++D < ie && k(R[D], D, R) !== !1;

      );
      return R;
    }
    function Rd(R, k) {
      for (var D = R == null ? 0 : R.length; D-- && k(R[D], D, R) !== !1; );
      return R;
    }
    function su(R, k) {
      for (var D = -1, ie = R == null ? 0 : R.length; ++D < ie; )
        if (!k(R[D], D, R)) return !1;
      return !0;
    }
    function bi(R, k) {
      for (
        var D = -1, ie = R == null ? 0 : R.length, me = 0, Le = [];
        ++D < ie;

      ) {
        var jt = R[D];
        k(jt, D, R) && (Le[me++] = jt);
      }
      return Le;
    }
    function Ds(R, k) {
      var D = R == null ? 0 : R.length;
      return !!D && un(R, k, 0) > -1;
    }
    function aa(R, k, D) {
      for (var ie = -1, me = R == null ? 0 : R.length; ++ie < me; )
        if (D(k, R[ie])) return !0;
      return !1;
    }
    function nt(R, k) {
      for (
        var D = -1, ie = R == null ? 0 : R.length, me = Array(ie);
        ++D < ie;

      )
        me[D] = k(R[D], D, R);
      return me;
    }
    function _i(R, k) {
      for (var D = -1, ie = k.length, me = R.length; ++D < ie; )
        R[me + D] = k[D];
      return R;
    }
    function ca(R, k, D, ie) {
      var me = -1,
        Le = R == null ? 0 : R.length;
      for (ie && Le && (D = R[++me]); ++me < Le; ) D = k(D, R[me], me, R);
      return D;
    }
    function Ad(R, k, D, ie) {
      var me = R == null ? 0 : R.length;
      for (ie && me && (D = R[--me]); me--; ) D = k(D, R[me], me, R);
      return D;
    }
    function ua(R, k) {
      for (var D = -1, ie = R == null ? 0 : R.length; ++D < ie; )
        if (k(R[D], D, R)) return !0;
      return !1;
    }
    var Td = ha("length");
    function Cd(R) {
      return R.split("");
    }
    function Nd(R) {
      return R.match(Ct) || [];
    }
    function ou(R, k, D) {
      var ie;
      return (
        D(R, function (me, Le, jt) {
          if (k(me, Le, jt)) return (ie = Le), !1;
        }),
        ie
      );
    }
    function Ls(R, k, D, ie) {
      for (var me = R.length, Le = D + (ie ? 1 : -1); ie ? Le-- : ++Le < me; )
        if (k(R[Le], Le, R)) return Le;
      return -1;
    }
    function un(R, k, D) {
      return k === k ? Kd(R, k, D) : Ls(R, au, D);
    }
    function $d(R, k, D, ie) {
      for (var me = D - 1, Le = R.length; ++me < Le; )
        if (ie(R[me], k)) return me;
      return -1;
    }
    function au(R) {
      return R !== R;
    }
    function cu(R, k) {
      var D = R == null ? 0 : R.length;
      return D ? fa(R, k) / D : J;
    }
    function ha(R) {
      return function (k) {
        return k == null ? r : k[R];
      };
    }
    function la(R) {
      return function (k) {
        return R == null ? r : R[k];
      };
    }
    function uu(R, k, D, ie, me) {
      return (
        me(R, function (Le, jt, We) {
          D = ie ? ((ie = !1), Le) : k(D, Le, jt, We);
        }),
        D
      );
    }
    function Dd(R, k) {
      var D = R.length;
      for (R.sort(k); D--; ) R[D] = R[D].value;
      return R;
    }
    function fa(R, k) {
      for (var D, ie = -1, me = R.length; ++ie < me; ) {
        var Le = k(R[ie]);
        Le !== r && (D = D === r ? Le : D + Le);
      }
      return D;
    }
    function da(R, k) {
      for (var D = -1, ie = Array(R); ++D < R; ) ie[D] = k(D);
      return ie;
    }
    function Ld(R, k) {
      return nt(k, function (D) {
        return [D, R[D]];
      });
    }
    function hu(R) {
      return R && R.slice(0, pu(R) + 1).replace(gt, "");
    }
    function mr(R) {
      return function (k) {
        return R(k);
      };
    }
    function pa(R, k) {
      return nt(k, function (D) {
        return R[D];
      });
    }
    function jn(R, k) {
      return R.has(k);
    }
    function lu(R, k) {
      for (var D = -1, ie = R.length; ++D < ie && un(k, R[D], 0) > -1; );
      return D;
    }
    function fu(R, k) {
      for (var D = R.length; D-- && un(k, R[D], 0) > -1; );
      return D;
    }
    function jd(R, k) {
      for (var D = R.length, ie = 0; D--; ) R[D] === k && ++ie;
      return ie;
    }
    var Md = la(m),
      Ud = la(O);
    function qd(R) {
      return "\\" + te[R];
    }
    function zd(R, k) {
      return R == null ? r : R[k];
    }
    function hn(R) {
      return Ns.test(R);
    }
    function kd(R) {
      return Mi.test(R);
    }
    function Hd(R) {
      for (var k, D = []; !(k = R.next()).done; ) D.push(k.value);
      return D;
    }
    function ga(R) {
      var k = -1,
        D = Array(R.size);
      return (
        R.forEach(function (ie, me) {
          D[++k] = [me, ie];
        }),
        D
      );
    }
    function du(R, k) {
      return function (D) {
        return R(k(D));
      };
    }
    function Ei(R, k) {
      for (var D = -1, ie = R.length, me = 0, Le = []; ++D < ie; ) {
        var jt = R[D];
        (jt === k || jt === _) && ((R[D] = _), (Le[me++] = D));
      }
      return Le;
    }
    function js(R) {
      var k = -1,
        D = Array(R.size);
      return (
        R.forEach(function (ie) {
          D[++k] = ie;
        }),
        D
      );
    }
    function Bd(R) {
      var k = -1,
        D = Array(R.size);
      return (
        R.forEach(function (ie) {
          D[++k] = [ie, ie];
        }),
        D
      );
    }
    function Kd(R, k, D) {
      for (var ie = D - 1, me = R.length; ++ie < me; )
        if (R[ie] === k) return ie;
      return -1;
    }
    function Fd(R, k, D) {
      for (var ie = D + 1; ie--; ) if (R[ie] === k) return ie;
      return ie;
    }
    function ln(R) {
      return hn(R) ? Gd(R) : Td(R);
    }
    function jr(R) {
      return hn(R) ? Wd(R) : Cd(R);
    }
    function pu(R) {
      for (var k = R.length; k-- && wt.test(R.charAt(k)); );
      return k;
    }
    var Vd = la(V);
    function Gd(R) {
      for (var k = (cn.lastIndex = 0); cn.test(R); ) ++k;
      return k;
    }
    function Wd(R) {
      return R.match(cn) || [];
    }
    function Jd(R) {
      return R.match(Cs) || [];
    }
    var Qd = function R(k) {
        k = k == null ? Re : fn.defaults(Re.Object(), k, fn.pick(Re, $s));
        var D = k.Array,
          ie = k.Date,
          me = k.Error,
          Le = k.Function,
          jt = k.Math,
          We = k.Object,
          ya = k.RegExp,
          Yd = k.String,
          Pr = k.TypeError,
          Ms = D.prototype,
          Xd = Le.prototype,
          dn = We.prototype,
          Us = k["__core-js_shared__"],
          qs = Xd.toString,
          qe = dn.hasOwnProperty,
          Zd = 0,
          gu = (function () {
            var e = /[^.]+$/.exec((Us && Us.keys && Us.keys.IE_PROTO) || "");
            return e ? "Symbol(src)_1." + e : "";
          })(),
          zs = dn.toString,
          ep = qs.call(We),
          tp = Re._,
          rp = ya(
            "^" +
              qs
                .call(qe)
                .replace(pt, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          ks = ar ? k.Buffer : r,
          Ii = k.Symbol,
          Hs = k.Uint8Array,
          yu = ks ? ks.allocUnsafe : r,
          Bs = du(We.getPrototypeOf, We),
          mu = We.create,
          vu = dn.propertyIsEnumerable,
          Ks = Ms.splice,
          wu = Ii ? Ii.isConcatSpreadable : r,
          Mn = Ii ? Ii.iterator : r,
          qi = Ii ? Ii.toStringTag : r,
          Fs = (function () {
            try {
              var e = Ki(We, "defineProperty");
              return e({}, "", {}), e;
            } catch {}
          })(),
          ip = k.clearTimeout !== Re.clearTimeout && k.clearTimeout,
          np = ie && ie.now !== Re.Date.now && ie.now,
          sp = k.setTimeout !== Re.setTimeout && k.setTimeout,
          Vs = jt.ceil,
          Gs = jt.floor,
          ma = We.getOwnPropertySymbols,
          op = ks ? ks.isBuffer : r,
          bu = k.isFinite,
          ap = Ms.join,
          cp = du(We.keys, We),
          Mt = jt.max,
          Gt = jt.min,
          up = ie.now,
          hp = k.parseInt,
          _u = jt.random,
          lp = Ms.reverse,
          va = Ki(k, "DataView"),
          Un = Ki(k, "Map"),
          wa = Ki(k, "Promise"),
          pn = Ki(k, "Set"),
          qn = Ki(k, "WeakMap"),
          zn = Ki(We, "create"),
          Ws = qn && new qn(),
          gn = {},
          fp = Fi(va),
          dp = Fi(Un),
          pp = Fi(wa),
          gp = Fi(pn),
          yp = Fi(qn),
          Js = Ii ? Ii.prototype : r,
          kn = Js ? Js.valueOf : r,
          Eu = Js ? Js.toString : r;
        function d(e) {
          if (mt(e) && !we(e) && !(e instanceof Oe)) {
            if (e instanceof Or) return e;
            if (qe.call(e, "__wrapped__")) return Ih(e);
          }
          return new Or(e);
        }
        var yn = (function () {
          function e() {}
          return function (i) {
            if (!ut(i)) return {};
            if (mu) return mu(i);
            e.prototype = i;
            var o = new e();
            return (e.prototype = r), o;
          };
        })();
        function Qs() {}
        function Or(e, i) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!i),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (d.templateSettings = {
          escape: ft,
          evaluate: dt,
          interpolate: ct,
          variable: "",
          imports: { _: d },
        }),
          (d.prototype = Qs.prototype),
          (d.prototype.constructor = d),
          (Or.prototype = yn(Qs.prototype)),
          (Or.prototype.constructor = Or);
        function Oe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = X),
            (this.__views__ = []);
        }
        function mp() {
          var e = new Oe(this.__wrapped__);
          return (
            (e.__actions__ = cr(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = cr(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = cr(this.__views__)),
            e
          );
        }
        function vp() {
          if (this.__filtered__) {
            var e = new Oe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function wp() {
          var e = this.__wrapped__.value(),
            i = this.__dir__,
            o = we(e),
            c = i < 0,
            l = o ? e.length : 0,
            p = Cg(0, l, this.__views__),
            w = p.start,
            E = p.end,
            A = E - w,
            K = c ? E : w - 1,
            F = this.__iteratees__,
            W = F.length,
            ee = 0,
            oe = Gt(A, this.__takeCount__);
          if (!o || (!c && l == A && oe == A)) return Vu(e, this.__actions__);
          var fe = [];
          e: for (; A-- && ee < oe; ) {
            K += i;
            for (var Ee = -1, de = e[K]; ++Ee < W; ) {
              var Se = F[Ee],
                Ae = Se.iteratee,
                br = Se.type,
                tr = Ae(de);
              if (br == S) de = tr;
              else if (!tr) {
                if (br == v) continue e;
                break e;
              }
            }
            fe[ee++] = de;
          }
          return fe;
        }
        (Oe.prototype = yn(Qs.prototype)), (Oe.prototype.constructor = Oe);
        function zi(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function bp() {
          (this.__data__ = zn ? zn(null) : {}), (this.size = 0);
        }
        function _p(e) {
          var i = this.has(e) && delete this.__data__[e];
          return (this.size -= i ? 1 : 0), i;
        }
        function Ep(e) {
          var i = this.__data__;
          if (zn) {
            var o = i[e];
            return o === b ? r : o;
          }
          return qe.call(i, e) ? i[e] : r;
        }
        function Ip(e) {
          var i = this.__data__;
          return zn ? i[e] !== r : qe.call(i, e);
        }
        function xp(e, i) {
          var o = this.__data__;
          return (
            (this.size += this.has(e) ? 0 : 1),
            (o[e] = zn && i === r ? b : i),
            this
          );
        }
        (zi.prototype.clear = bp),
          (zi.prototype.delete = _p),
          (zi.prototype.get = Ep),
          (zi.prototype.has = Ip),
          (zi.prototype.set = xp);
        function ri(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Sp() {
          (this.__data__ = []), (this.size = 0);
        }
        function Pp(e) {
          var i = this.__data__,
            o = Ys(i, e);
          if (o < 0) return !1;
          var c = i.length - 1;
          return o == c ? i.pop() : Ks.call(i, o, 1), --this.size, !0;
        }
        function Op(e) {
          var i = this.__data__,
            o = Ys(i, e);
          return o < 0 ? r : i[o][1];
        }
        function Rp(e) {
          return Ys(this.__data__, e) > -1;
        }
        function Ap(e, i) {
          var o = this.__data__,
            c = Ys(o, e);
          return c < 0 ? (++this.size, o.push([e, i])) : (o[c][1] = i), this;
        }
        (ri.prototype.clear = Sp),
          (ri.prototype.delete = Pp),
          (ri.prototype.get = Op),
          (ri.prototype.has = Rp),
          (ri.prototype.set = Ap);
        function ii(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Tp() {
          (this.size = 0),
            (this.__data__ = {
              hash: new zi(),
              map: new (Un || ri)(),
              string: new zi(),
            });
        }
        function Cp(e) {
          var i = uo(this, e).delete(e);
          return (this.size -= i ? 1 : 0), i;
        }
        function Np(e) {
          return uo(this, e).get(e);
        }
        function $p(e) {
          return uo(this, e).has(e);
        }
        function Dp(e, i) {
          var o = uo(this, e),
            c = o.size;
          return o.set(e, i), (this.size += o.size == c ? 0 : 1), this;
        }
        (ii.prototype.clear = Tp),
          (ii.prototype.delete = Cp),
          (ii.prototype.get = Np),
          (ii.prototype.has = $p),
          (ii.prototype.set = Dp);
        function ki(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.__data__ = new ii(); ++i < o; ) this.add(e[i]);
        }
        function Lp(e) {
          return this.__data__.set(e, b), this;
        }
        function jp(e) {
          return this.__data__.has(e);
        }
        (ki.prototype.add = ki.prototype.push = Lp), (ki.prototype.has = jp);
        function Mr(e) {
          var i = (this.__data__ = new ri(e));
          this.size = i.size;
        }
        function Mp() {
          (this.__data__ = new ri()), (this.size = 0);
        }
        function Up(e) {
          var i = this.__data__,
            o = i.delete(e);
          return (this.size = i.size), o;
        }
        function qp(e) {
          return this.__data__.get(e);
        }
        function zp(e) {
          return this.__data__.has(e);
        }
        function kp(e, i) {
          var o = this.__data__;
          if (o instanceof ri) {
            var c = o.__data__;
            if (!Un || c.length < a - 1)
              return c.push([e, i]), (this.size = ++o.size), this;
            o = this.__data__ = new ii(c);
          }
          return o.set(e, i), (this.size = o.size), this;
        }
        (Mr.prototype.clear = Mp),
          (Mr.prototype.delete = Up),
          (Mr.prototype.get = qp),
          (Mr.prototype.has = zp),
          (Mr.prototype.set = kp);
        function Iu(e, i) {
          var o = we(e),
            c = !o && Vi(e),
            l = !o && !c && Ri(e),
            p = !o && !c && !l && bn(e),
            w = o || c || l || p,
            E = w ? da(e.length, Yd) : [],
            A = E.length;
          for (var K in e)
            (i || qe.call(e, K)) &&
              !(
                w &&
                (K == "length" ||
                  (l && (K == "offset" || K == "parent")) ||
                  (p &&
                    (K == "buffer" ||
                      K == "byteLength" ||
                      K == "byteOffset")) ||
                  ai(K, A))
              ) &&
              E.push(K);
          return E;
        }
        function xu(e) {
          var i = e.length;
          return i ? e[Ta(0, i - 1)] : r;
        }
        function Hp(e, i) {
          return ho(cr(e), Hi(i, 0, e.length));
        }
        function Bp(e) {
          return ho(cr(e));
        }
        function ba(e, i, o) {
          ((o !== r && !Ur(e[i], o)) || (o === r && !(i in e))) && ni(e, i, o);
        }
        function Hn(e, i, o) {
          var c = e[i];
          (!(qe.call(e, i) && Ur(c, o)) || (o === r && !(i in e))) &&
            ni(e, i, o);
        }
        function Ys(e, i) {
          for (var o = e.length; o--; ) if (Ur(e[o][0], i)) return o;
          return -1;
        }
        function Kp(e, i, o, c) {
          return (
            xi(e, function (l, p, w) {
              i(c, l, o(l), w);
            }),
            c
          );
        }
        function Su(e, i) {
          return e && Jr(i, zt(i), e);
        }
        function Fp(e, i) {
          return e && Jr(i, hr(i), e);
        }
        function ni(e, i, o) {
          i == "__proto__" && Fs
            ? Fs(e, i, {
                configurable: !0,
                enumerable: !0,
                value: o,
                writable: !0,
              })
            : (e[i] = o);
        }
        function _a(e, i) {
          for (var o = -1, c = i.length, l = D(c), p = e == null; ++o < c; )
            l[o] = p ? r : tc(e, i[o]);
          return l;
        }
        function Hi(e, i, o) {
          return (
            e === e &&
              (o !== r && (e = e <= o ? e : o),
              i !== r && (e = e >= i ? e : i)),
            e
          );
        }
        function Rr(e, i, o, c, l, p) {
          var w,
            E = i & P,
            A = i & N,
            K = i & B;
          if ((o && (w = l ? o(e, c, l, p) : o(e)), w !== r)) return w;
          if (!ut(e)) return e;
          var F = we(e);
          if (F) {
            if (((w = $g(e)), !E)) return cr(e, w);
          } else {
            var W = Wt(e),
              ee = W == ne || W == ye;
            if (Ri(e)) return Ju(e, E);
            if (W == Pe || W == Ie || (ee && !l)) {
              if (((w = A || ee ? {} : ph(e)), !E))
                return A ? Eg(e, Fp(w, e)) : _g(e, Su(w, e));
            } else {
              if (!He[W]) return l ? e : {};
              w = Dg(e, W, E);
            }
          }
          p || (p = new Mr());
          var oe = p.get(e);
          if (oe) return oe;
          p.set(e, w),
            Bh(e)
              ? e.forEach(function (de) {
                  w.add(Rr(de, i, o, de, e, p));
                })
              : kh(e) &&
                e.forEach(function (de, Se) {
                  w.set(Se, Rr(de, i, o, Se, e, p));
                });
          var fe = K ? (A ? ka : za) : A ? hr : zt,
            Ee = F ? r : fe(e);
          return (
            Sr(Ee || e, function (de, Se) {
              Ee && ((Se = de), (de = e[Se])),
                Hn(w, Se, Rr(de, i, o, Se, e, p));
            }),
            w
          );
        }
        function Vp(e) {
          var i = zt(e);
          return function (o) {
            return Pu(o, e, i);
          };
        }
        function Pu(e, i, o) {
          var c = o.length;
          if (e == null) return !c;
          for (e = We(e); c--; ) {
            var l = o[c],
              p = i[l],
              w = e[l];
            if ((w === r && !(l in e)) || !p(w)) return !1;
          }
          return !0;
        }
        function Ou(e, i, o) {
          if (typeof e != "function") throw new Pr(f);
          return Jn(function () {
            e.apply(r, o);
          }, i);
        }
        function Bn(e, i, o, c) {
          var l = -1,
            p = Ds,
            w = !0,
            E = e.length,
            A = [],
            K = i.length;
          if (!E) return A;
          o && (i = nt(i, mr(o))),
            c
              ? ((p = aa), (w = !1))
              : i.length >= a && ((p = jn), (w = !1), (i = new ki(i)));
          e: for (; ++l < E; ) {
            var F = e[l],
              W = o == null ? F : o(F);
            if (((F = c || F !== 0 ? F : 0), w && W === W)) {
              for (var ee = K; ee--; ) if (i[ee] === W) continue e;
              A.push(F);
            } else p(i, W, c) || A.push(F);
          }
          return A;
        }
        var xi = eh(Wr),
          Ru = eh(Ia, !0);
        function Gp(e, i) {
          var o = !0;
          return (
            xi(e, function (c, l, p) {
              return (o = !!i(c, l, p)), o;
            }),
            o
          );
        }
        function Xs(e, i, o) {
          for (var c = -1, l = e.length; ++c < l; ) {
            var p = e[c],
              w = i(p);
            if (w != null && (E === r ? w === w && !wr(w) : o(w, E)))
              var E = w,
                A = p;
          }
          return A;
        }
        function Wp(e, i, o, c) {
          var l = e.length;
          for (
            o = be(o),
              o < 0 && (o = -o > l ? 0 : l + o),
              c = c === r || c > l ? l : be(c),
              c < 0 && (c += l),
              c = o > c ? 0 : Fh(c);
            o < c;

          )
            e[o++] = i;
          return e;
        }
        function Au(e, i) {
          var o = [];
          return (
            xi(e, function (c, l, p) {
              i(c, l, p) && o.push(c);
            }),
            o
          );
        }
        function Ft(e, i, o, c, l) {
          var p = -1,
            w = e.length;
          for (o || (o = jg), l || (l = []); ++p < w; ) {
            var E = e[p];
            i > 0 && o(E)
              ? i > 1
                ? Ft(E, i - 1, o, c, l)
                : _i(l, E)
              : c || (l[l.length] = E);
          }
          return l;
        }
        var Ea = th(),
          Tu = th(!0);
        function Wr(e, i) {
          return e && Ea(e, i, zt);
        }
        function Ia(e, i) {
          return e && Tu(e, i, zt);
        }
        function Zs(e, i) {
          return bi(i, function (o) {
            return ci(e[o]);
          });
        }
        function Bi(e, i) {
          i = Pi(i, e);
          for (var o = 0, c = i.length; e != null && o < c; ) e = e[Qr(i[o++])];
          return o && o == c ? e : r;
        }
        function Cu(e, i, o) {
          var c = i(e);
          return we(e) ? c : _i(c, o(e));
        }
        function Zt(e) {
          return e == null
            ? e === r
              ? at
              : De
            : qi && qi in We(e)
            ? Tg(e)
            : Bg(e);
        }
        function xa(e, i) {
          return e > i;
        }
        function Jp(e, i) {
          return e != null && qe.call(e, i);
        }
        function Qp(e, i) {
          return e != null && i in We(e);
        }
        function Yp(e, i, o) {
          return e >= Gt(i, o) && e < Mt(i, o);
        }
        function Sa(e, i, o) {
          for (
            var c = o ? aa : Ds,
              l = e[0].length,
              p = e.length,
              w = p,
              E = D(p),
              A = 1 / 0,
              K = [];
            w--;

          ) {
            var F = e[w];
            w && i && (F = nt(F, mr(i))),
              (A = Gt(F.length, A)),
              (E[w] =
                !o && (i || (l >= 120 && F.length >= 120))
                  ? new ki(w && F)
                  : r);
          }
          F = e[0];
          var W = -1,
            ee = E[0];
          e: for (; ++W < l && K.length < A; ) {
            var oe = F[W],
              fe = i ? i(oe) : oe;
            if (
              ((oe = o || oe !== 0 ? oe : 0), !(ee ? jn(ee, fe) : c(K, fe, o)))
            ) {
              for (w = p; --w; ) {
                var Ee = E[w];
                if (!(Ee ? jn(Ee, fe) : c(e[w], fe, o))) continue e;
              }
              ee && ee.push(fe), K.push(oe);
            }
          }
          return K;
        }
        function Xp(e, i, o, c) {
          return (
            Wr(e, function (l, p, w) {
              i(c, o(l), p, w);
            }),
            c
          );
        }
        function Kn(e, i, o) {
          (i = Pi(i, e)), (e = vh(e, i));
          var c = e == null ? e : e[Qr(Tr(i))];
          return c == null ? r : qt(c, e, o);
        }
        function Nu(e) {
          return mt(e) && Zt(e) == Ie;
        }
        function Zp(e) {
          return mt(e) && Zt(e) == $e;
        }
        function eg(e) {
          return mt(e) && Zt(e) == C;
        }
        function Fn(e, i, o, c, l) {
          return e === i
            ? !0
            : e == null || i == null || (!mt(e) && !mt(i))
            ? e !== e && i !== i
            : tg(e, i, o, c, Fn, l);
        }
        function tg(e, i, o, c, l, p) {
          var w = we(e),
            E = we(i),
            A = w ? xt : Wt(e),
            K = E ? xt : Wt(i);
          (A = A == Ie ? Pe : A), (K = K == Ie ? Pe : K);
          var F = A == Pe,
            W = K == Pe,
            ee = A == K;
          if (ee && Ri(e)) {
            if (!Ri(i)) return !1;
            (w = !0), (F = !1);
          }
          if (ee && !F)
            return (
              p || (p = new Mr()),
              w || bn(e) ? lh(e, i, o, c, l, p) : Rg(e, i, A, o, c, l, p)
            );
          if (!(o & $)) {
            var oe = F && qe.call(e, "__wrapped__"),
              fe = W && qe.call(i, "__wrapped__");
            if (oe || fe) {
              var Ee = oe ? e.value() : e,
                de = fe ? i.value() : i;
              return p || (p = new Mr()), l(Ee, de, o, c, p);
            }
          }
          return ee ? (p || (p = new Mr()), Ag(e, i, o, c, l, p)) : !1;
        }
        function rg(e) {
          return mt(e) && Wt(e) == _e;
        }
        function Pa(e, i, o, c) {
          var l = o.length,
            p = l,
            w = !c;
          if (e == null) return !p;
          for (e = We(e); l--; ) {
            var E = o[l];
            if (w && E[2] ? E[1] !== e[E[0]] : !(E[0] in e)) return !1;
          }
          for (; ++l < p; ) {
            E = o[l];
            var A = E[0],
              K = e[A],
              F = E[1];
            if (w && E[2]) {
              if (K === r && !(A in e)) return !1;
            } else {
              var W = new Mr();
              if (c) var ee = c(K, F, A, e, i, W);
              if (!(ee === r ? Fn(F, K, $ | Q, c, W) : ee)) return !1;
            }
          }
          return !0;
        }
        function $u(e) {
          if (!ut(e) || Ug(e)) return !1;
          var i = ci(e) ? rp : Fo;
          return i.test(Fi(e));
        }
        function ig(e) {
          return mt(e) && Zt(e) == ot;
        }
        function ng(e) {
          return mt(e) && Wt(e) == je;
        }
        function sg(e) {
          return mt(e) && mo(e.length) && !!Fe[Zt(e)];
        }
        function Du(e) {
          return typeof e == "function"
            ? e
            : e == null
            ? lr
            : typeof e == "object"
            ? we(e)
              ? Mu(e[0], e[1])
              : ju(e)
            : rl(e);
        }
        function Oa(e) {
          if (!Wn(e)) return cp(e);
          var i = [];
          for (var o in We(e)) qe.call(e, o) && o != "constructor" && i.push(o);
          return i;
        }
        function og(e) {
          if (!ut(e)) return Hg(e);
          var i = Wn(e),
            o = [];
          for (var c in e)
            (c == "constructor" && (i || !qe.call(e, c))) || o.push(c);
          return o;
        }
        function Ra(e, i) {
          return e < i;
        }
        function Lu(e, i) {
          var o = -1,
            c = ur(e) ? D(e.length) : [];
          return (
            xi(e, function (l, p, w) {
              c[++o] = i(l, p, w);
            }),
            c
          );
        }
        function ju(e) {
          var i = Ba(e);
          return i.length == 1 && i[0][2]
            ? yh(i[0][0], i[0][1])
            : function (o) {
                return o === e || Pa(o, e, i);
              };
        }
        function Mu(e, i) {
          return Fa(e) && gh(i)
            ? yh(Qr(e), i)
            : function (o) {
                var c = tc(o, e);
                return c === r && c === i ? rc(o, e) : Fn(i, c, $ | Q);
              };
        }
        function eo(e, i, o, c, l) {
          e !== i &&
            Ea(
              i,
              function (p, w) {
                if ((l || (l = new Mr()), ut(p))) ag(e, i, w, o, eo, c, l);
                else {
                  var E = c ? c(Ga(e, w), p, w + "", e, i, l) : r;
                  E === r && (E = p), ba(e, w, E);
                }
              },
              hr
            );
        }
        function ag(e, i, o, c, l, p, w) {
          var E = Ga(e, o),
            A = Ga(i, o),
            K = w.get(A);
          if (K) {
            ba(e, o, K);
            return;
          }
          var F = p ? p(E, A, o + "", e, i, w) : r,
            W = F === r;
          if (W) {
            var ee = we(A),
              oe = !ee && Ri(A),
              fe = !ee && !oe && bn(A);
            (F = A),
              ee || oe || fe
                ? we(E)
                  ? (F = E)
                  : _t(E)
                  ? (F = cr(E))
                  : oe
                  ? ((W = !1), (F = Ju(A, !0)))
                  : fe
                  ? ((W = !1), (F = Qu(A, !0)))
                  : (F = [])
                : Qn(A) || Vi(A)
                ? ((F = E),
                  Vi(E) ? (F = Vh(E)) : (!ut(E) || ci(E)) && (F = ph(A)))
                : (W = !1);
          }
          W && (w.set(A, F), l(F, A, c, p, w), w.delete(A)), ba(e, o, F);
        }
        function Uu(e, i) {
          var o = e.length;
          if (o) return (i += i < 0 ? o : 0), ai(i, o) ? e[i] : r;
        }
        function qu(e, i, o) {
          i.length
            ? (i = nt(i, function (p) {
                return we(p)
                  ? function (w) {
                      return Bi(w, p.length === 1 ? p[0] : p);
                    }
                  : p;
              }))
            : (i = [lr]);
          var c = -1;
          i = nt(i, mr(he()));
          var l = Lu(e, function (p, w, E) {
            var A = nt(i, function (K) {
              return K(p);
            });
            return { criteria: A, index: ++c, value: p };
          });
          return Dd(l, function (p, w) {
            return bg(p, w, o);
          });
        }
        function cg(e, i) {
          return zu(e, i, function (o, c) {
            return rc(e, c);
          });
        }
        function zu(e, i, o) {
          for (var c = -1, l = i.length, p = {}; ++c < l; ) {
            var w = i[c],
              E = Bi(e, w);
            o(E, w) && Vn(p, Pi(w, e), E);
          }
          return p;
        }
        function ug(e) {
          return function (i) {
            return Bi(i, e);
          };
        }
        function Aa(e, i, o, c) {
          var l = c ? $d : un,
            p = -1,
            w = i.length,
            E = e;
          for (e === i && (i = cr(i)), o && (E = nt(e, mr(o))); ++p < w; )
            for (
              var A = 0, K = i[p], F = o ? o(K) : K;
              (A = l(E, F, A, c)) > -1;

            )
              E !== e && Ks.call(E, A, 1), Ks.call(e, A, 1);
          return e;
        }
        function ku(e, i) {
          for (var o = e ? i.length : 0, c = o - 1; o--; ) {
            var l = i[o];
            if (o == c || l !== p) {
              var p = l;
              ai(l) ? Ks.call(e, l, 1) : $a(e, l);
            }
          }
          return e;
        }
        function Ta(e, i) {
          return e + Gs(_u() * (i - e + 1));
        }
        function hg(e, i, o, c) {
          for (var l = -1, p = Mt(Vs((i - e) / (o || 1)), 0), w = D(p); p--; )
            (w[c ? p : ++l] = e), (e += o);
          return w;
        }
        function Ca(e, i) {
          var o = "";
          if (!e || i < 1 || i > Y) return o;
          do i % 2 && (o += e), (i = Gs(i / 2)), i && (e += e);
          while (i);
          return o;
        }
        function xe(e, i) {
          return Wa(mh(e, i, lr), e + "");
        }
        function lg(e) {
          return xu(_n(e));
        }
        function fg(e, i) {
          var o = _n(e);
          return ho(o, Hi(i, 0, o.length));
        }
        function Vn(e, i, o, c) {
          if (!ut(e)) return e;
          i = Pi(i, e);
          for (
            var l = -1, p = i.length, w = p - 1, E = e;
            E != null && ++l < p;

          ) {
            var A = Qr(i[l]),
              K = o;
            if (A === "__proto__" || A === "constructor" || A === "prototype")
              return e;
            if (l != w) {
              var F = E[A];
              (K = c ? c(F, A, E) : r),
                K === r && (K = ut(F) ? F : ai(i[l + 1]) ? [] : {});
            }
            Hn(E, A, K), (E = E[A]);
          }
          return e;
        }
        var Hu = Ws
            ? function (e, i) {
                return Ws.set(e, i), e;
              }
            : lr,
          dg = Fs
            ? function (e, i) {
                return Fs(e, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: nc(i),
                  writable: !0,
                });
              }
            : lr;
        function pg(e) {
          return ho(_n(e));
        }
        function Ar(e, i, o) {
          var c = -1,
            l = e.length;
          i < 0 && (i = -i > l ? 0 : l + i),
            (o = o > l ? l : o),
            o < 0 && (o += l),
            (l = i > o ? 0 : (o - i) >>> 0),
            (i >>>= 0);
          for (var p = D(l); ++c < l; ) p[c] = e[c + i];
          return p;
        }
        function gg(e, i) {
          var o;
          return (
            xi(e, function (c, l, p) {
              return (o = i(c, l, p)), !o;
            }),
            !!o
          );
        }
        function to(e, i, o) {
          var c = 0,
            l = e == null ? c : e.length;
          if (typeof i == "number" && i === i && l <= Be) {
            for (; c < l; ) {
              var p = (c + l) >>> 1,
                w = e[p];
              w !== null && !wr(w) && (o ? w <= i : w < i)
                ? (c = p + 1)
                : (l = p);
            }
            return l;
          }
          return Na(e, i, lr, o);
        }
        function Na(e, i, o, c) {
          var l = 0,
            p = e == null ? 0 : e.length;
          if (p === 0) return 0;
          i = o(i);
          for (
            var w = i !== i, E = i === null, A = wr(i), K = i === r;
            l < p;

          ) {
            var F = Gs((l + p) / 2),
              W = o(e[F]),
              ee = W !== r,
              oe = W === null,
              fe = W === W,
              Ee = wr(W);
            if (w) var de = c || fe;
            else
              K
                ? (de = fe && (c || ee))
                : E
                ? (de = fe && ee && (c || !oe))
                : A
                ? (de = fe && ee && !oe && (c || !Ee))
                : oe || Ee
                ? (de = !1)
                : (de = c ? W <= i : W < i);
            de ? (l = F + 1) : (p = F);
          }
          return Gt(p, Je);
        }
        function Bu(e, i) {
          for (var o = -1, c = e.length, l = 0, p = []; ++o < c; ) {
            var w = e[o],
              E = i ? i(w) : w;
            if (!o || !Ur(E, A)) {
              var A = E;
              p[l++] = w === 0 ? 0 : w;
            }
          }
          return p;
        }
        function Ku(e) {
          return typeof e == "number" ? e : wr(e) ? J : +e;
        }
        function vr(e) {
          if (typeof e == "string") return e;
          if (we(e)) return nt(e, vr) + "";
          if (wr(e)) return Eu ? Eu.call(e) : "";
          var i = e + "";
          return i == "0" && 1 / e == -pe ? "-0" : i;
        }
        function Si(e, i, o) {
          var c = -1,
            l = Ds,
            p = e.length,
            w = !0,
            E = [],
            A = E;
          if (o) (w = !1), (l = aa);
          else if (p >= a) {
            var K = i ? null : Pg(e);
            if (K) return js(K);
            (w = !1), (l = jn), (A = new ki());
          } else A = i ? [] : E;
          e: for (; ++c < p; ) {
            var F = e[c],
              W = i ? i(F) : F;
            if (((F = o || F !== 0 ? F : 0), w && W === W)) {
              for (var ee = A.length; ee--; ) if (A[ee] === W) continue e;
              i && A.push(W), E.push(F);
            } else l(A, W, o) || (A !== E && A.push(W), E.push(F));
          }
          return E;
        }
        function $a(e, i) {
          return (
            (i = Pi(i, e)), (e = vh(e, i)), e == null || delete e[Qr(Tr(i))]
          );
        }
        function Fu(e, i, o, c) {
          return Vn(e, i, o(Bi(e, i)), c);
        }
        function ro(e, i, o, c) {
          for (
            var l = e.length, p = c ? l : -1;
            (c ? p-- : ++p < l) && i(e[p], p, e);

          );
          return o
            ? Ar(e, c ? 0 : p, c ? p + 1 : l)
            : Ar(e, c ? p + 1 : 0, c ? l : p);
        }
        function Vu(e, i) {
          var o = e;
          return (
            o instanceof Oe && (o = o.value()),
            ca(
              i,
              function (c, l) {
                return l.func.apply(l.thisArg, _i([c], l.args));
              },
              o
            )
          );
        }
        function Da(e, i, o) {
          var c = e.length;
          if (c < 2) return c ? Si(e[0]) : [];
          for (var l = -1, p = D(c); ++l < c; )
            for (var w = e[l], E = -1; ++E < c; )
              E != l && (p[l] = Bn(p[l] || w, e[E], i, o));
          return Si(Ft(p, 1), i, o);
        }
        function Gu(e, i, o) {
          for (var c = -1, l = e.length, p = i.length, w = {}; ++c < l; ) {
            var E = c < p ? i[c] : r;
            o(w, e[c], E);
          }
          return w;
        }
        function La(e) {
          return _t(e) ? e : [];
        }
        function ja(e) {
          return typeof e == "function" ? e : lr;
        }
        function Pi(e, i) {
          return we(e) ? e : Fa(e, i) ? [e] : Eh(Me(e));
        }
        var yg = xe;
        function Oi(e, i, o) {
          var c = e.length;
          return (o = o === r ? c : o), !i && o >= c ? e : Ar(e, i, o);
        }
        var Wu =
          ip ||
          function (e) {
            return Re.clearTimeout(e);
          };
        function Ju(e, i) {
          if (i) return e.slice();
          var o = e.length,
            c = yu ? yu(o) : new e.constructor(o);
          return e.copy(c), c;
        }
        function Ma(e) {
          var i = new e.constructor(e.byteLength);
          return new Hs(i).set(new Hs(e)), i;
        }
        function mg(e, i) {
          var o = i ? Ma(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.byteLength);
        }
        function vg(e) {
          var i = new e.constructor(e.source, Ir.exec(e));
          return (i.lastIndex = e.lastIndex), i;
        }
        function wg(e) {
          return kn ? We(kn.call(e)) : {};
        }
        function Qu(e, i) {
          var o = i ? Ma(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.length);
        }
        function Yu(e, i) {
          if (e !== i) {
            var o = e !== r,
              c = e === null,
              l = e === e,
              p = wr(e),
              w = i !== r,
              E = i === null,
              A = i === i,
              K = wr(i);
            if (
              (!E && !K && !p && e > i) ||
              (p && w && A && !E && !K) ||
              (c && w && A) ||
              (!o && A) ||
              !l
            )
              return 1;
            if (
              (!c && !p && !K && e < i) ||
              (K && o && l && !c && !p) ||
              (E && o && l) ||
              (!w && l) ||
              !A
            )
              return -1;
          }
          return 0;
        }
        function bg(e, i, o) {
          for (
            var c = -1,
              l = e.criteria,
              p = i.criteria,
              w = l.length,
              E = o.length;
            ++c < w;

          ) {
            var A = Yu(l[c], p[c]);
            if (A) {
              if (c >= E) return A;
              var K = o[c];
              return A * (K == "desc" ? -1 : 1);
            }
          }
          return e.index - i.index;
        }
        function Xu(e, i, o, c) {
          for (
            var l = -1,
              p = e.length,
              w = o.length,
              E = -1,
              A = i.length,
              K = Mt(p - w, 0),
              F = D(A + K),
              W = !c;
            ++E < A;

          )
            F[E] = i[E];
          for (; ++l < w; ) (W || l < p) && (F[o[l]] = e[l]);
          for (; K--; ) F[E++] = e[l++];
          return F;
        }
        function Zu(e, i, o, c) {
          for (
            var l = -1,
              p = e.length,
              w = -1,
              E = o.length,
              A = -1,
              K = i.length,
              F = Mt(p - E, 0),
              W = D(F + K),
              ee = !c;
            ++l < F;

          )
            W[l] = e[l];
          for (var oe = l; ++A < K; ) W[oe + A] = i[A];
          for (; ++w < E; ) (ee || l < p) && (W[oe + o[w]] = e[l++]);
          return W;
        }
        function cr(e, i) {
          var o = -1,
            c = e.length;
          for (i || (i = D(c)); ++o < c; ) i[o] = e[o];
          return i;
        }
        function Jr(e, i, o, c) {
          var l = !o;
          o || (o = {});
          for (var p = -1, w = i.length; ++p < w; ) {
            var E = i[p],
              A = c ? c(o[E], e[E], E, o, e) : r;
            A === r && (A = e[E]), l ? ni(o, E, A) : Hn(o, E, A);
          }
          return o;
        }
        function _g(e, i) {
          return Jr(e, Ka(e), i);
        }
        function Eg(e, i) {
          return Jr(e, fh(e), i);
        }
        function io(e, i) {
          return function (o, c) {
            var l = we(o) ? Od : Kp,
              p = i ? i() : {};
            return l(o, e, he(c, 2), p);
          };
        }
        function mn(e) {
          return xe(function (i, o) {
            var c = -1,
              l = o.length,
              p = l > 1 ? o[l - 1] : r,
              w = l > 2 ? o[2] : r;
            for (
              p = e.length > 3 && typeof p == "function" ? (l--, p) : r,
                w && er(o[0], o[1], w) && ((p = l < 3 ? r : p), (l = 1)),
                i = We(i);
              ++c < l;

            ) {
              var E = o[c];
              E && e(i, E, c, p);
            }
            return i;
          });
        }
        function eh(e, i) {
          return function (o, c) {
            if (o == null) return o;
            if (!ur(o)) return e(o, c);
            for (
              var l = o.length, p = i ? l : -1, w = We(o);
              (i ? p-- : ++p < l) && c(w[p], p, w) !== !1;

            );
            return o;
          };
        }
        function th(e) {
          return function (i, o, c) {
            for (var l = -1, p = We(i), w = c(i), E = w.length; E--; ) {
              var A = w[e ? E : ++l];
              if (o(p[A], A, p) === !1) break;
            }
            return i;
          };
        }
        function Ig(e, i, o) {
          var c = i & se,
            l = Gn(e);
          function p() {
            var w = this && this !== Re && this instanceof p ? l : e;
            return w.apply(c ? o : this, arguments);
          }
          return p;
        }
        function rh(e) {
          return function (i) {
            i = Me(i);
            var o = hn(i) ? jr(i) : r,
              c = o ? o[0] : i.charAt(0),
              l = o ? Oi(o, 1).join("") : i.slice(1);
            return c[e]() + l;
          };
        }
        function vn(e) {
          return function (i) {
            return ca(el(Zh(i).replace(Dn, "")), e, "");
          };
        }
        function Gn(e) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new e();
              case 1:
                return new e(i[0]);
              case 2:
                return new e(i[0], i[1]);
              case 3:
                return new e(i[0], i[1], i[2]);
              case 4:
                return new e(i[0], i[1], i[2], i[3]);
              case 5:
                return new e(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var o = yn(e.prototype),
              c = e.apply(o, i);
            return ut(c) ? c : o;
          };
        }
        function xg(e, i, o) {
          var c = Gn(e);
          function l() {
            for (var p = arguments.length, w = D(p), E = p, A = wn(l); E--; )
              w[E] = arguments[E];
            var K = p < 3 && w[0] !== A && w[p - 1] !== A ? [] : Ei(w, A);
            if (((p -= K.length), p < o))
              return ah(e, i, no, l.placeholder, r, w, K, r, r, o - p);
            var F = this && this !== Re && this instanceof l ? c : e;
            return qt(F, this, w);
          }
          return l;
        }
        function ih(e) {
          return function (i, o, c) {
            var l = We(i);
            if (!ur(i)) {
              var p = he(o, 3);
              (i = zt(i)),
                (o = function (E) {
                  return p(l[E], E, l);
                });
            }
            var w = e(i, o, c);
            return w > -1 ? l[p ? i[w] : w] : r;
          };
        }
        function nh(e) {
          return oi(function (i) {
            var o = i.length,
              c = o,
              l = Or.prototype.thru;
            for (e && i.reverse(); c--; ) {
              var p = i[c];
              if (typeof p != "function") throw new Pr(f);
              if (l && !w && co(p) == "wrapper") var w = new Or([], !0);
            }
            for (c = w ? c : o; ++c < o; ) {
              p = i[c];
              var E = co(p),
                A = E == "wrapper" ? Ha(p) : r;
              A &&
              Va(A[0]) &&
              A[1] == (M | L | q | H) &&
              !A[4].length &&
              A[9] == 1
                ? (w = w[co(A[0])].apply(w, A[3]))
                : (w = p.length == 1 && Va(p) ? w[E]() : w.thru(p));
            }
            return function () {
              var K = arguments,
                F = K[0];
              if (w && K.length == 1 && we(F)) return w.plant(F).value();
              for (var W = 0, ee = o ? i[W].apply(this, K) : F; ++W < o; )
                ee = i[W].call(this, ee);
              return ee;
            };
          });
        }
        function no(e, i, o, c, l, p, w, E, A, K) {
          var F = i & M,
            W = i & se,
            ee = i & le,
            oe = i & (L | z),
            fe = i & ue,
            Ee = ee ? r : Gn(e);
          function de() {
            for (var Se = arguments.length, Ae = D(Se), br = Se; br--; )
              Ae[br] = arguments[br];
            if (oe)
              var tr = wn(de),
                _r = jd(Ae, tr);
            if (
              (c && (Ae = Xu(Ae, c, l, oe)),
              p && (Ae = Zu(Ae, p, w, oe)),
              (Se -= _r),
              oe && Se < K)
            ) {
              var Et = Ei(Ae, tr);
              return ah(e, i, no, de.placeholder, o, Ae, Et, E, A, K - Se);
            }
            var qr = W ? o : this,
              hi = ee ? qr[e] : e;
            return (
              (Se = Ae.length),
              E ? (Ae = Kg(Ae, E)) : fe && Se > 1 && Ae.reverse(),
              F && A < Se && (Ae.length = A),
              this && this !== Re && this instanceof de && (hi = Ee || Gn(hi)),
              hi.apply(qr, Ae)
            );
          }
          return de;
        }
        function sh(e, i) {
          return function (o, c) {
            return Xp(o, e, i(c), {});
          };
        }
        function so(e, i) {
          return function (o, c) {
            var l;
            if (o === r && c === r) return i;
            if ((o !== r && (l = o), c !== r)) {
              if (l === r) return c;
              typeof o == "string" || typeof c == "string"
                ? ((o = vr(o)), (c = vr(c)))
                : ((o = Ku(o)), (c = Ku(c))),
                (l = e(o, c));
            }
            return l;
          };
        }
        function Ua(e) {
          return oi(function (i) {
            return (
              (i = nt(i, mr(he()))),
              xe(function (o) {
                var c = this;
                return e(i, function (l) {
                  return qt(l, c, o);
                });
              })
            );
          });
        }
        function oo(e, i) {
          i = i === r ? " " : vr(i);
          var o = i.length;
          if (o < 2) return o ? Ca(i, e) : i;
          var c = Ca(i, Vs(e / ln(i)));
          return hn(i) ? Oi(jr(c), 0, e).join("") : c.slice(0, e);
        }
        function Sg(e, i, o, c) {
          var l = i & se,
            p = Gn(e);
          function w() {
            for (
              var E = -1,
                A = arguments.length,
                K = -1,
                F = c.length,
                W = D(F + A),
                ee = this && this !== Re && this instanceof w ? p : e;
              ++K < F;

            )
              W[K] = c[K];
            for (; A--; ) W[K++] = arguments[++E];
            return qt(ee, l ? o : this, W);
          }
          return w;
        }
        function oh(e) {
          return function (i, o, c) {
            return (
              c && typeof c != "number" && er(i, o, c) && (o = c = r),
              (i = ui(i)),
              o === r ? ((o = i), (i = 0)) : (o = ui(o)),
              (c = c === r ? (i < o ? 1 : -1) : ui(c)),
              hg(i, o, c, e)
            );
          };
        }
        function ao(e) {
          return function (i, o) {
            return (
              (typeof i == "string" && typeof o == "string") ||
                ((i = Cr(i)), (o = Cr(o))),
              e(i, o)
            );
          };
        }
        function ah(e, i, o, c, l, p, w, E, A, K) {
          var F = i & L,
            W = F ? w : r,
            ee = F ? r : w,
            oe = F ? p : r,
            fe = F ? r : p;
          (i |= F ? q : x), (i &= ~(F ? x : q)), i & T || (i &= ~(se | le));
          var Ee = [e, i, l, oe, W, fe, ee, E, A, K],
            de = o.apply(r, Ee);
          return Va(e) && wh(de, Ee), (de.placeholder = c), bh(de, e, i);
        }
        function qa(e) {
          var i = jt[e];
          return function (o, c) {
            if (
              ((o = Cr(o)), (c = c == null ? 0 : Gt(be(c), 292)), c && bu(o))
            ) {
              var l = (Me(o) + "e").split("e"),
                p = i(l[0] + "e" + (+l[1] + c));
              return (
                (l = (Me(p) + "e").split("e")), +(l[0] + "e" + (+l[1] - c))
              );
            }
            return i(o);
          };
        }
        var Pg =
          pn && 1 / js(new pn([, -0]))[1] == pe
            ? function (e) {
                return new pn(e);
              }
            : ac;
        function ch(e) {
          return function (i) {
            var o = Wt(i);
            return o == _e ? ga(i) : o == je ? Bd(i) : Ld(i, e(i));
          };
        }
        function si(e, i, o, c, l, p, w, E) {
          var A = i & le;
          if (!A && typeof e != "function") throw new Pr(f);
          var K = c ? c.length : 0;
          if (
            (K || ((i &= ~(q | x)), (c = l = r)),
            (w = w === r ? w : Mt(be(w), 0)),
            (E = E === r ? E : be(E)),
            (K -= l ? l.length : 0),
            i & x)
          ) {
            var F = c,
              W = l;
            c = l = r;
          }
          var ee = A ? r : Ha(e),
            oe = [e, i, o, c, l, F, W, p, w, E];
          if (
            (ee && kg(oe, ee),
            (e = oe[0]),
            (i = oe[1]),
            (o = oe[2]),
            (c = oe[3]),
            (l = oe[4]),
            (E = oe[9] = oe[9] === r ? (A ? 0 : e.length) : Mt(oe[9] - K, 0)),
            !E && i & (L | z) && (i &= ~(L | z)),
            !i || i == se)
          )
            var fe = Ig(e, i, o);
          else
            i == L || i == z
              ? (fe = xg(e, i, E))
              : (i == q || i == (se | q)) && !l.length
              ? (fe = Sg(e, i, o, c))
              : (fe = no.apply(r, oe));
          var Ee = ee ? Hu : wh;
          return bh(Ee(fe, oe), e, i);
        }
        function uh(e, i, o, c) {
          return e === r || (Ur(e, dn[o]) && !qe.call(c, o)) ? i : e;
        }
        function hh(e, i, o, c, l, p) {
          return (
            ut(e) && ut(i) && (p.set(i, e), eo(e, i, r, hh, p), p.delete(i)), e
          );
        }
        function Og(e) {
          return Qn(e) ? r : e;
        }
        function lh(e, i, o, c, l, p) {
          var w = o & $,
            E = e.length,
            A = i.length;
          if (E != A && !(w && A > E)) return !1;
          var K = p.get(e),
            F = p.get(i);
          if (K && F) return K == i && F == e;
          var W = -1,
            ee = !0,
            oe = o & Q ? new ki() : r;
          for (p.set(e, i), p.set(i, e); ++W < E; ) {
            var fe = e[W],
              Ee = i[W];
            if (c) var de = w ? c(Ee, fe, W, i, e, p) : c(fe, Ee, W, e, i, p);
            if (de !== r) {
              if (de) continue;
              ee = !1;
              break;
            }
            if (oe) {
              if (
                !ua(i, function (Se, Ae) {
                  if (!jn(oe, Ae) && (fe === Se || l(fe, Se, o, c, p)))
                    return oe.push(Ae);
                })
              ) {
                ee = !1;
                break;
              }
            } else if (!(fe === Ee || l(fe, Ee, o, c, p))) {
              ee = !1;
              break;
            }
          }
          return p.delete(e), p.delete(i), ee;
        }
        function Rg(e, i, o, c, l, p, w) {
          switch (o) {
            case Ke:
              if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset)
                return !1;
              (e = e.buffer), (i = i.buffer);
            case $e:
              return !(
                e.byteLength != i.byteLength || !p(new Hs(e), new Hs(i))
              );
            case j:
            case C:
            case Ne:
              return Ur(+e, +i);
            case I:
              return e.name == i.name && e.message == i.message;
            case ot:
            case Ye:
              return e == i + "";
            case _e:
              var E = ga;
            case je:
              var A = c & $;
              if ((E || (E = js), e.size != i.size && !A)) return !1;
              var K = w.get(e);
              if (K) return K == i;
              (c |= Q), w.set(e, i);
              var F = lh(E(e), E(i), c, l, p, w);
              return w.delete(e), F;
            case Xe:
              if (kn) return kn.call(e) == kn.call(i);
          }
          return !1;
        }
        function Ag(e, i, o, c, l, p) {
          var w = o & $,
            E = za(e),
            A = E.length,
            K = za(i),
            F = K.length;
          if (A != F && !w) return !1;
          for (var W = A; W--; ) {
            var ee = E[W];
            if (!(w ? ee in i : qe.call(i, ee))) return !1;
          }
          var oe = p.get(e),
            fe = p.get(i);
          if (oe && fe) return oe == i && fe == e;
          var Ee = !0;
          p.set(e, i), p.set(i, e);
          for (var de = w; ++W < A; ) {
            ee = E[W];
            var Se = e[ee],
              Ae = i[ee];
            if (c) var br = w ? c(Ae, Se, ee, i, e, p) : c(Se, Ae, ee, e, i, p);
            if (!(br === r ? Se === Ae || l(Se, Ae, o, c, p) : br)) {
              Ee = !1;
              break;
            }
            de || (de = ee == "constructor");
          }
          if (Ee && !de) {
            var tr = e.constructor,
              _r = i.constructor;
            tr != _r &&
              "constructor" in e &&
              "constructor" in i &&
              !(
                typeof tr == "function" &&
                tr instanceof tr &&
                typeof _r == "function" &&
                _r instanceof _r
              ) &&
              (Ee = !1);
          }
          return p.delete(e), p.delete(i), Ee;
        }
        function oi(e) {
          return Wa(mh(e, r, Ph), e + "");
        }
        function za(e) {
          return Cu(e, zt, Ka);
        }
        function ka(e) {
          return Cu(e, hr, fh);
        }
        var Ha = Ws
          ? function (e) {
              return Ws.get(e);
            }
          : ac;
        function co(e) {
          for (
            var i = e.name + "", o = gn[i], c = qe.call(gn, i) ? o.length : 0;
            c--;

          ) {
            var l = o[c],
              p = l.func;
            if (p == null || p == e) return l.name;
          }
          return i;
        }
        function wn(e) {
          var i = qe.call(d, "placeholder") ? d : e;
          return i.placeholder;
        }
        function he() {
          var e = d.iteratee || sc;
          return (
            (e = e === sc ? Du : e),
            arguments.length ? e(arguments[0], arguments[1]) : e
          );
        }
        function uo(e, i) {
          var o = e.__data__;
          return Mg(i) ? o[typeof i == "string" ? "string" : "hash"] : o.map;
        }
        function Ba(e) {
          for (var i = zt(e), o = i.length; o--; ) {
            var c = i[o],
              l = e[c];
            i[o] = [c, l, gh(l)];
          }
          return i;
        }
        function Ki(e, i) {
          var o = zd(e, i);
          return $u(o) ? o : r;
        }
        function Tg(e) {
          var i = qe.call(e, qi),
            o = e[qi];
          try {
            e[qi] = r;
            var c = !0;
          } catch {}
          var l = zs.call(e);
          return c && (i ? (e[qi] = o) : delete e[qi]), l;
        }
        var Ka = ma
            ? function (e) {
                return e == null
                  ? []
                  : ((e = We(e)),
                    bi(ma(e), function (i) {
                      return vu.call(e, i);
                    }));
              }
            : cc,
          fh = ma
            ? function (e) {
                for (var i = []; e; ) _i(i, Ka(e)), (e = Bs(e));
                return i;
              }
            : cc,
          Wt = Zt;
        ((va && Wt(new va(new ArrayBuffer(1))) != Ke) ||
          (Un && Wt(new Un()) != _e) ||
          (wa && Wt(wa.resolve()) != St) ||
          (pn && Wt(new pn()) != je) ||
          (qn && Wt(new qn()) != ke)) &&
          (Wt = function (e) {
            var i = Zt(e),
              o = i == Pe ? e.constructor : r,
              c = o ? Fi(o) : "";
            if (c)
              switch (c) {
                case fp:
                  return Ke;
                case dp:
                  return _e;
                case pp:
                  return St;
                case gp:
                  return je;
                case yp:
                  return ke;
              }
            return i;
          });
        function Cg(e, i, o) {
          for (var c = -1, l = o.length; ++c < l; ) {
            var p = o[c],
              w = p.size;
            switch (p.type) {
              case "drop":
                e += w;
                break;
              case "dropRight":
                i -= w;
                break;
              case "take":
                i = Gt(i, e + w);
                break;
              case "takeRight":
                e = Mt(e, i - w);
                break;
            }
          }
          return { start: e, end: i };
        }
        function Ng(e) {
          var i = e.match(Qe);
          return i ? i[1].split(Tt) : [];
        }
        function dh(e, i, o) {
          i = Pi(i, e);
          for (var c = -1, l = i.length, p = !1; ++c < l; ) {
            var w = Qr(i[c]);
            if (!(p = e != null && o(e, w))) break;
            e = e[w];
          }
          return p || ++c != l
            ? p
            : ((l = e == null ? 0 : e.length),
              !!l && mo(l) && ai(w, l) && (we(e) || Vi(e)));
        }
        function $g(e) {
          var i = e.length,
            o = new e.constructor(i);
          return (
            i &&
              typeof e[0] == "string" &&
              qe.call(e, "index") &&
              ((o.index = e.index), (o.input = e.input)),
            o
          );
        }
        function ph(e) {
          return typeof e.constructor == "function" && !Wn(e) ? yn(Bs(e)) : {};
        }
        function Dg(e, i, o) {
          var c = e.constructor;
          switch (i) {
            case $e:
              return Ma(e);
            case j:
            case C:
              return new c(+e);
            case Ke:
              return mg(e, o);
            case ht:
            case Ue:
            case Pt:
            case Lt:
            case Bt:
            case Kt:
            case Ut:
            case Qt:
            case or:
              return Qu(e, o);
            case _e:
              return new c();
            case Ne:
            case Ye:
              return new c(e);
            case ot:
              return vg(e);
            case je:
              return new c();
            case Xe:
              return wg(e);
          }
        }
        function Lg(e, i) {
          var o = i.length;
          if (!o) return e;
          var c = o - 1;
          return (
            (i[c] = (o > 1 ? "& " : "") + i[c]),
            (i = i.join(o > 2 ? ", " : " ")),
            e.replace(
              yt,
              `{
/* [wrapped with ` +
                i +
                `] */
`
            )
          );
        }
        function jg(e) {
          return we(e) || Vi(e) || !!(wu && e && e[wu]);
        }
        function ai(e, i) {
          var o = typeof e;
          return (
            (i = i ?? Y),
            !!i &&
              (o == "number" || (o != "symbol" && Go.test(e))) &&
              e > -1 &&
              e % 1 == 0 &&
              e < i
          );
        }
        function er(e, i, o) {
          if (!ut(o)) return !1;
          var c = typeof i;
          return (
            c == "number" ? ur(o) && ai(i, o.length) : c == "string" && i in o
          )
            ? Ur(o[i], e)
            : !1;
        }
        function Fa(e, i) {
          if (we(e)) return !1;
          var o = typeof e;
          return o == "number" ||
            o == "symbol" ||
            o == "boolean" ||
            e == null ||
            wr(e)
            ? !0
            : Ot.test(e) || !it.test(e) || (i != null && e in We(i));
        }
        function Mg(e) {
          var i = typeof e;
          return i == "string" ||
            i == "number" ||
            i == "symbol" ||
            i == "boolean"
            ? e !== "__proto__"
            : e === null;
        }
        function Va(e) {
          var i = co(e),
            o = d[i];
          if (typeof o != "function" || !(i in Oe.prototype)) return !1;
          if (e === o) return !0;
          var c = Ha(o);
          return !!c && e === c[0];
        }
        function Ug(e) {
          return !!gu && gu in e;
        }
        var qg = Us ? ci : uc;
        function Wn(e) {
          var i = e && e.constructor,
            o = (typeof i == "function" && i.prototype) || dn;
          return e === o;
        }
        function gh(e) {
          return e === e && !ut(e);
        }
        function yh(e, i) {
          return function (o) {
            return o == null ? !1 : o[e] === i && (i !== r || e in We(o));
          };
        }
        function zg(e) {
          var i = go(e, function (c) {
              return o.size === y && o.clear(), c;
            }),
            o = i.cache;
          return i;
        }
        function kg(e, i) {
          var o = e[1],
            c = i[1],
            l = o | c,
            p = l < (se | le | M),
            w =
              (c == M && o == L) ||
              (c == M && o == H && e[7].length <= i[8]) ||
              (c == (M | H) && i[7].length <= i[8] && o == L);
          if (!(p || w)) return e;
          c & se && ((e[2] = i[2]), (l |= o & se ? 0 : T));
          var E = i[3];
          if (E) {
            var A = e[3];
            (e[3] = A ? Xu(A, E, i[4]) : E), (e[4] = A ? Ei(e[3], _) : i[4]);
          }
          return (
            (E = i[5]),
            E &&
              ((A = e[5]),
              (e[5] = A ? Zu(A, E, i[6]) : E),
              (e[6] = A ? Ei(e[5], _) : i[6])),
            (E = i[7]),
            E && (e[7] = E),
            c & M && (e[8] = e[8] == null ? i[8] : Gt(e[8], i[8])),
            e[9] == null && (e[9] = i[9]),
            (e[0] = i[0]),
            (e[1] = l),
            e
          );
        }
        function Hg(e) {
          var i = [];
          if (e != null) for (var o in We(e)) i.push(o);
          return i;
        }
        function Bg(e) {
          return zs.call(e);
        }
        function mh(e, i, o) {
          return (
            (i = Mt(i === r ? e.length - 1 : i, 0)),
            function () {
              for (
                var c = arguments, l = -1, p = Mt(c.length - i, 0), w = D(p);
                ++l < p;

              )
                w[l] = c[i + l];
              l = -1;
              for (var E = D(i + 1); ++l < i; ) E[l] = c[l];
              return (E[i] = o(w)), qt(e, this, E);
            }
          );
        }
        function vh(e, i) {
          return i.length < 2 ? e : Bi(e, Ar(i, 0, -1));
        }
        function Kg(e, i) {
          for (var o = e.length, c = Gt(i.length, o), l = cr(e); c--; ) {
            var p = i[c];
            e[c] = ai(p, o) ? l[p] : r;
          }
          return e;
        }
        function Ga(e, i) {
          if (
            !(i === "constructor" && typeof e[i] == "function") &&
            i != "__proto__"
          )
            return e[i];
        }
        var wh = _h(Hu),
          Jn =
            sp ||
            function (e, i) {
              return Re.setTimeout(e, i);
            },
          Wa = _h(dg);
        function bh(e, i, o) {
          var c = i + "";
          return Wa(e, Lg(c, Fg(Ng(c), o)));
        }
        function _h(e) {
          var i = 0,
            o = 0;
          return function () {
            var c = up(),
              l = ze - (c - o);
            if (((o = c), l > 0)) {
              if (++i >= Ce) return arguments[0];
            } else i = 0;
            return e.apply(r, arguments);
          };
        }
        function ho(e, i) {
          var o = -1,
            c = e.length,
            l = c - 1;
          for (i = i === r ? c : i; ++o < i; ) {
            var p = Ta(o, l),
              w = e[p];
            (e[p] = e[o]), (e[o] = w);
          }
          return (e.length = i), e;
        }
        var Eh = zg(function (e) {
          var i = [];
          return (
            e.charCodeAt(0) === 46 && i.push(""),
            e.replace(Rt, function (o, c, l, p) {
              i.push(l ? p.replace(ko, "$1") : c || o);
            }),
            i
          );
        });
        function Qr(e) {
          if (typeof e == "string" || wr(e)) return e;
          var i = e + "";
          return i == "0" && 1 / e == -pe ? "-0" : i;
        }
        function Fi(e) {
          if (e != null) {
            try {
              return qs.call(e);
            } catch {}
            try {
              return e + "";
            } catch {}
          }
          return "";
        }
        function Fg(e, i) {
          return (
            Sr(Kr, function (o) {
              var c = "_." + o[0];
              i & o[1] && !Ds(e, c) && e.push(c);
            }),
            e.sort()
          );
        }
        function Ih(e) {
          if (e instanceof Oe) return e.clone();
          var i = new Or(e.__wrapped__, e.__chain__);
          return (
            (i.__actions__ = cr(e.__actions__)),
            (i.__index__ = e.__index__),
            (i.__values__ = e.__values__),
            i
          );
        }
        function Vg(e, i, o) {
          (o ? er(e, i, o) : i === r) ? (i = 1) : (i = Mt(be(i), 0));
          var c = e == null ? 0 : e.length;
          if (!c || i < 1) return [];
          for (var l = 0, p = 0, w = D(Vs(c / i)); l < c; )
            w[p++] = Ar(e, l, (l += i));
          return w;
        }
        function Gg(e) {
          for (
            var i = -1, o = e == null ? 0 : e.length, c = 0, l = [];
            ++i < o;

          ) {
            var p = e[i];
            p && (l[c++] = p);
          }
          return l;
        }
        function Wg() {
          var e = arguments.length;
          if (!e) return [];
          for (var i = D(e - 1), o = arguments[0], c = e; c--; )
            i[c - 1] = arguments[c];
          return _i(we(o) ? cr(o) : [o], Ft(i, 1));
        }
        var Jg = xe(function (e, i) {
            return _t(e) ? Bn(e, Ft(i, 1, _t, !0)) : [];
          }),
          Qg = xe(function (e, i) {
            var o = Tr(i);
            return (
              _t(o) && (o = r), _t(e) ? Bn(e, Ft(i, 1, _t, !0), he(o, 2)) : []
            );
          }),
          Yg = xe(function (e, i) {
            var o = Tr(i);
            return _t(o) && (o = r), _t(e) ? Bn(e, Ft(i, 1, _t, !0), r, o) : [];
          });
        function Xg(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : be(i)), Ar(e, i < 0 ? 0 : i, c))
            : [];
        }
        function Zg(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : be(i)),
              (i = c - i),
              Ar(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function ey(e, i) {
          return e && e.length ? ro(e, he(i, 3), !0, !0) : [];
        }
        function ty(e, i) {
          return e && e.length ? ro(e, he(i, 3), !0) : [];
        }
        function ry(e, i, o, c) {
          var l = e == null ? 0 : e.length;
          return l
            ? (o && typeof o != "number" && er(e, i, o) && ((o = 0), (c = l)),
              Wp(e, i, o, c))
            : [];
        }
        function xh(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : be(o);
          return l < 0 && (l = Mt(c + l, 0)), Ls(e, he(i, 3), l);
        }
        function Sh(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c - 1;
          return (
            o !== r && ((l = be(o)), (l = o < 0 ? Mt(c + l, 0) : Gt(l, c - 1))),
            Ls(e, he(i, 3), l, !0)
          );
        }
        function Ph(e) {
          var i = e == null ? 0 : e.length;
          return i ? Ft(e, 1) : [];
        }
        function iy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Ft(e, pe) : [];
        }
        function ny(e, i) {
          var o = e == null ? 0 : e.length;
          return o ? ((i = i === r ? 1 : be(i)), Ft(e, i)) : [];
        }
        function sy(e) {
          for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
            var l = e[i];
            c[l[0]] = l[1];
          }
          return c;
        }
        function Oh(e) {
          return e && e.length ? e[0] : r;
        }
        function oy(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : be(o);
          return l < 0 && (l = Mt(c + l, 0)), un(e, i, l);
        }
        function ay(e) {
          var i = e == null ? 0 : e.length;
          return i ? Ar(e, 0, -1) : [];
        }
        var cy = xe(function (e) {
            var i = nt(e, La);
            return i.length && i[0] === e[0] ? Sa(i) : [];
          }),
          uy = xe(function (e) {
            var i = Tr(e),
              o = nt(e, La);
            return (
              i === Tr(o) ? (i = r) : o.pop(),
              o.length && o[0] === e[0] ? Sa(o, he(i, 2)) : []
            );
          }),
          hy = xe(function (e) {
            var i = Tr(e),
              o = nt(e, La);
            return (
              (i = typeof i == "function" ? i : r),
              i && o.pop(),
              o.length && o[0] === e[0] ? Sa(o, r, i) : []
            );
          });
        function ly(e, i) {
          return e == null ? "" : ap.call(e, i);
        }
        function Tr(e) {
          var i = e == null ? 0 : e.length;
          return i ? e[i - 1] : r;
        }
        function fy(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c;
          return (
            o !== r && ((l = be(o)), (l = l < 0 ? Mt(c + l, 0) : Gt(l, c - 1))),
            i === i ? Fd(e, i, l) : Ls(e, au, l, !0)
          );
        }
        function dy(e, i) {
          return e && e.length ? Uu(e, be(i)) : r;
        }
        var py = xe(Rh);
        function Rh(e, i) {
          return e && e.length && i && i.length ? Aa(e, i) : e;
        }
        function gy(e, i, o) {
          return e && e.length && i && i.length ? Aa(e, i, he(o, 2)) : e;
        }
        function yy(e, i, o) {
          return e && e.length && i && i.length ? Aa(e, i, r, o) : e;
        }
        var my = oi(function (e, i) {
          var o = e == null ? 0 : e.length,
            c = _a(e, i);
          return (
            ku(
              e,
              nt(i, function (l) {
                return ai(l, o) ? +l : l;
              }).sort(Yu)
            ),
            c
          );
        });
        function vy(e, i) {
          var o = [];
          if (!(e && e.length)) return o;
          var c = -1,
            l = [],
            p = e.length;
          for (i = he(i, 3); ++c < p; ) {
            var w = e[c];
            i(w, c, e) && (o.push(w), l.push(c));
          }
          return ku(e, l), o;
        }
        function Ja(e) {
          return e == null ? e : lp.call(e);
        }
        function wy(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? (o && typeof o != "number" && er(e, i, o)
                ? ((i = 0), (o = c))
                : ((i = i == null ? 0 : be(i)), (o = o === r ? c : be(o))),
              Ar(e, i, o))
            : [];
        }
        function by(e, i) {
          return to(e, i);
        }
        function _y(e, i, o) {
          return Na(e, i, he(o, 2));
        }
        function Ey(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = to(e, i);
            if (c < o && Ur(e[c], i)) return c;
          }
          return -1;
        }
        function Iy(e, i) {
          return to(e, i, !0);
        }
        function xy(e, i, o) {
          return Na(e, i, he(o, 2), !0);
        }
        function Sy(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = to(e, i, !0) - 1;
            if (Ur(e[c], i)) return c;
          }
          return -1;
        }
        function Py(e) {
          return e && e.length ? Bu(e) : [];
        }
        function Oy(e, i) {
          return e && e.length ? Bu(e, he(i, 2)) : [];
        }
        function Ry(e) {
          var i = e == null ? 0 : e.length;
          return i ? Ar(e, 1, i) : [];
        }
        function Ay(e, i, o) {
          return e && e.length
            ? ((i = o || i === r ? 1 : be(i)), Ar(e, 0, i < 0 ? 0 : i))
            : [];
        }
        function Ty(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? ((i = o || i === r ? 1 : be(i)),
              (i = c - i),
              Ar(e, i < 0 ? 0 : i, c))
            : [];
        }
        function Cy(e, i) {
          return e && e.length ? ro(e, he(i, 3), !1, !0) : [];
        }
        function Ny(e, i) {
          return e && e.length ? ro(e, he(i, 3)) : [];
        }
        var $y = xe(function (e) {
            return Si(Ft(e, 1, _t, !0));
          }),
          Dy = xe(function (e) {
            var i = Tr(e);
            return _t(i) && (i = r), Si(Ft(e, 1, _t, !0), he(i, 2));
          }),
          Ly = xe(function (e) {
            var i = Tr(e);
            return (
              (i = typeof i == "function" ? i : r), Si(Ft(e, 1, _t, !0), r, i)
            );
          });
        function jy(e) {
          return e && e.length ? Si(e) : [];
        }
        function My(e, i) {
          return e && e.length ? Si(e, he(i, 2)) : [];
        }
        function Uy(e, i) {
          return (
            (i = typeof i == "function" ? i : r),
            e && e.length ? Si(e, r, i) : []
          );
        }
        function Qa(e) {
          if (!(e && e.length)) return [];
          var i = 0;
          return (
            (e = bi(e, function (o) {
              if (_t(o)) return (i = Mt(o.length, i)), !0;
            })),
            da(i, function (o) {
              return nt(e, ha(o));
            })
          );
        }
        function Ah(e, i) {
          if (!(e && e.length)) return [];
          var o = Qa(e);
          return i == null
            ? o
            : nt(o, function (c) {
                return qt(i, r, c);
              });
        }
        var qy = xe(function (e, i) {
            return _t(e) ? Bn(e, i) : [];
          }),
          zy = xe(function (e) {
            return Da(bi(e, _t));
          }),
          ky = xe(function (e) {
            var i = Tr(e);
            return _t(i) && (i = r), Da(bi(e, _t), he(i, 2));
          }),
          Hy = xe(function (e) {
            var i = Tr(e);
            return (i = typeof i == "function" ? i : r), Da(bi(e, _t), r, i);
          }),
          By = xe(Qa);
        function Ky(e, i) {
          return Gu(e || [], i || [], Hn);
        }
        function Fy(e, i) {
          return Gu(e || [], i || [], Vn);
        }
        var Vy = xe(function (e) {
          var i = e.length,
            o = i > 1 ? e[i - 1] : r;
          return (o = typeof o == "function" ? (e.pop(), o) : r), Ah(e, o);
        });
        function Th(e) {
          var i = d(e);
          return (i.__chain__ = !0), i;
        }
        function Gy(e, i) {
          return i(e), e;
        }
        function lo(e, i) {
          return i(e);
        }
        var Wy = oi(function (e) {
          var i = e.length,
            o = i ? e[0] : 0,
            c = this.__wrapped__,
            l = function (p) {
              return _a(p, e);
            };
          return i > 1 ||
            this.__actions__.length ||
            !(c instanceof Oe) ||
            !ai(o)
            ? this.thru(l)
            : ((c = c.slice(o, +o + (i ? 1 : 0))),
              c.__actions__.push({ func: lo, args: [l], thisArg: r }),
              new Or(c, this.__chain__).thru(function (p) {
                return i && !p.length && p.push(r), p;
              }));
        });
        function Jy() {
          return Th(this);
        }
        function Qy() {
          return new Or(this.value(), this.__chain__);
        }
        function Yy() {
          this.__values__ === r && (this.__values__ = Kh(this.value()));
          var e = this.__index__ >= this.__values__.length,
            i = e ? r : this.__values__[this.__index__++];
          return { done: e, value: i };
        }
        function Xy() {
          return this;
        }
        function Zy(e) {
          for (var i, o = this; o instanceof Qs; ) {
            var c = Ih(o);
            (c.__index__ = 0),
              (c.__values__ = r),
              i ? (l.__wrapped__ = c) : (i = c);
            var l = c;
            o = o.__wrapped__;
          }
          return (l.__wrapped__ = e), i;
        }
        function em() {
          var e = this.__wrapped__;
          if (e instanceof Oe) {
            var i = e;
            return (
              this.__actions__.length && (i = new Oe(this)),
              (i = i.reverse()),
              i.__actions__.push({ func: lo, args: [Ja], thisArg: r }),
              new Or(i, this.__chain__)
            );
          }
          return this.thru(Ja);
        }
        function tm() {
          return Vu(this.__wrapped__, this.__actions__);
        }
        var rm = io(function (e, i, o) {
          qe.call(e, o) ? ++e[o] : ni(e, o, 1);
        });
        function im(e, i, o) {
          var c = we(e) ? su : Gp;
          return o && er(e, i, o) && (i = r), c(e, he(i, 3));
        }
        function nm(e, i) {
          var o = we(e) ? bi : Au;
          return o(e, he(i, 3));
        }
        var sm = ih(xh),
          om = ih(Sh);
        function am(e, i) {
          return Ft(fo(e, i), 1);
        }
        function cm(e, i) {
          return Ft(fo(e, i), pe);
        }
        function um(e, i, o) {
          return (o = o === r ? 1 : be(o)), Ft(fo(e, i), o);
        }
        function Ch(e, i) {
          var o = we(e) ? Sr : xi;
          return o(e, he(i, 3));
        }
        function Nh(e, i) {
          var o = we(e) ? Rd : Ru;
          return o(e, he(i, 3));
        }
        var hm = io(function (e, i, o) {
          qe.call(e, o) ? e[o].push(i) : ni(e, o, [i]);
        });
        function lm(e, i, o, c) {
          (e = ur(e) ? e : _n(e)), (o = o && !c ? be(o) : 0);
          var l = e.length;
          return (
            o < 0 && (o = Mt(l + o, 0)),
            vo(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && un(e, i, o) > -1
          );
        }
        var fm = xe(function (e, i, o) {
            var c = -1,
              l = typeof i == "function",
              p = ur(e) ? D(e.length) : [];
            return (
              xi(e, function (w) {
                p[++c] = l ? qt(i, w, o) : Kn(w, i, o);
              }),
              p
            );
          }),
          dm = io(function (e, i, o) {
            ni(e, o, i);
          });
        function fo(e, i) {
          var o = we(e) ? nt : Lu;
          return o(e, he(i, 3));
        }
        function pm(e, i, o, c) {
          return e == null
            ? []
            : (we(i) || (i = i == null ? [] : [i]),
              (o = c ? r : o),
              we(o) || (o = o == null ? [] : [o]),
              qu(e, i, o));
        }
        var gm = io(
          function (e, i, o) {
            e[o ? 0 : 1].push(i);
          },
          function () {
            return [[], []];
          }
        );
        function ym(e, i, o) {
          var c = we(e) ? ca : uu,
            l = arguments.length < 3;
          return c(e, he(i, 4), o, l, xi);
        }
        function mm(e, i, o) {
          var c = we(e) ? Ad : uu,
            l = arguments.length < 3;
          return c(e, he(i, 4), o, l, Ru);
        }
        function vm(e, i) {
          var o = we(e) ? bi : Au;
          return o(e, yo(he(i, 3)));
        }
        function wm(e) {
          var i = we(e) ? xu : lg;
          return i(e);
        }
        function bm(e, i, o) {
          (o ? er(e, i, o) : i === r) ? (i = 1) : (i = be(i));
          var c = we(e) ? Hp : fg;
          return c(e, i);
        }
        function _m(e) {
          var i = we(e) ? Bp : pg;
          return i(e);
        }
        function Em(e) {
          if (e == null) return 0;
          if (ur(e)) return vo(e) ? ln(e) : e.length;
          var i = Wt(e);
          return i == _e || i == je ? e.size : Oa(e).length;
        }
        function Im(e, i, o) {
          var c = we(e) ? ua : gg;
          return o && er(e, i, o) && (i = r), c(e, he(i, 3));
        }
        var xm = xe(function (e, i) {
            if (e == null) return [];
            var o = i.length;
            return (
              o > 1 && er(e, i[0], i[1])
                ? (i = [])
                : o > 2 && er(i[0], i[1], i[2]) && (i = [i[0]]),
              qu(e, Ft(i, 1), [])
            );
          }),
          po =
            np ||
            function () {
              return Re.Date.now();
            };
        function Sm(e, i) {
          if (typeof i != "function") throw new Pr(f);
          return (
            (e = be(e)),
            function () {
              if (--e < 1) return i.apply(this, arguments);
            }
          );
        }
        function $h(e, i, o) {
          return (
            (i = o ? r : i),
            (i = e && i == null ? e.length : i),
            si(e, M, r, r, r, r, i)
          );
        }
        function Dh(e, i) {
          var o;
          if (typeof i != "function") throw new Pr(f);
          return (
            (e = be(e)),
            function () {
              return (
                --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o
              );
            }
          );
        }
        var Ya = xe(function (e, i, o) {
            var c = se;
            if (o.length) {
              var l = Ei(o, wn(Ya));
              c |= q;
            }
            return si(e, c, i, o, l);
          }),
          Lh = xe(function (e, i, o) {
            var c = se | le;
            if (o.length) {
              var l = Ei(o, wn(Lh));
              c |= q;
            }
            return si(i, c, e, o, l);
          });
        function jh(e, i, o) {
          i = o ? r : i;
          var c = si(e, L, r, r, r, r, r, i);
          return (c.placeholder = jh.placeholder), c;
        }
        function Mh(e, i, o) {
          i = o ? r : i;
          var c = si(e, z, r, r, r, r, r, i);
          return (c.placeholder = Mh.placeholder), c;
        }
        function Uh(e, i, o) {
          var c,
            l,
            p,
            w,
            E,
            A,
            K = 0,
            F = !1,
            W = !1,
            ee = !0;
          if (typeof e != "function") throw new Pr(f);
          (i = Cr(i) || 0),
            ut(o) &&
              ((F = !!o.leading),
              (W = "maxWait" in o),
              (p = W ? Mt(Cr(o.maxWait) || 0, i) : p),
              (ee = "trailing" in o ? !!o.trailing : ee));
          function oe(Et) {
            var qr = c,
              hi = l;
            return (c = l = r), (K = Et), (w = e.apply(hi, qr)), w;
          }
          function fe(Et) {
            return (K = Et), (E = Jn(Se, i)), F ? oe(Et) : w;
          }
          function Ee(Et) {
            var qr = Et - A,
              hi = Et - K,
              il = i - qr;
            return W ? Gt(il, p - hi) : il;
          }
          function de(Et) {
            var qr = Et - A,
              hi = Et - K;
            return A === r || qr >= i || qr < 0 || (W && hi >= p);
          }
          function Se() {
            var Et = po();
            if (de(Et)) return Ae(Et);
            E = Jn(Se, Ee(Et));
          }
          function Ae(Et) {
            return (E = r), ee && c ? oe(Et) : ((c = l = r), w);
          }
          function br() {
            E !== r && Wu(E), (K = 0), (c = A = l = E = r);
          }
          function tr() {
            return E === r ? w : Ae(po());
          }
          function _r() {
            var Et = po(),
              qr = de(Et);
            if (((c = arguments), (l = this), (A = Et), qr)) {
              if (E === r) return fe(A);
              if (W) return Wu(E), (E = Jn(Se, i)), oe(A);
            }
            return E === r && (E = Jn(Se, i)), w;
          }
          return (_r.cancel = br), (_r.flush = tr), _r;
        }
        var Pm = xe(function (e, i) {
            return Ou(e, 1, i);
          }),
          Om = xe(function (e, i, o) {
            return Ou(e, Cr(i) || 0, o);
          });
        function Rm(e) {
          return si(e, ue);
        }
        function go(e, i) {
          if (typeof e != "function" || (i != null && typeof i != "function"))
            throw new Pr(f);
          var o = function () {
            var c = arguments,
              l = i ? i.apply(this, c) : c[0],
              p = o.cache;
            if (p.has(l)) return p.get(l);
            var w = e.apply(this, c);
            return (o.cache = p.set(l, w) || p), w;
          };
          return (o.cache = new (go.Cache || ii)()), o;
        }
        go.Cache = ii;
        function yo(e) {
          if (typeof e != "function") throw new Pr(f);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, i[0]);
              case 2:
                return !e.call(this, i[0], i[1]);
              case 3:
                return !e.call(this, i[0], i[1], i[2]);
            }
            return !e.apply(this, i);
          };
        }
        function Am(e) {
          return Dh(2, e);
        }
        var Tm = yg(function (e, i) {
            i =
              i.length == 1 && we(i[0])
                ? nt(i[0], mr(he()))
                : nt(Ft(i, 1), mr(he()));
            var o = i.length;
            return xe(function (c) {
              for (var l = -1, p = Gt(c.length, o); ++l < p; )
                c[l] = i[l].call(this, c[l]);
              return qt(e, this, c);
            });
          }),
          Xa = xe(function (e, i) {
            var o = Ei(i, wn(Xa));
            return si(e, q, r, i, o);
          }),
          qh = xe(function (e, i) {
            var o = Ei(i, wn(qh));
            return si(e, x, r, i, o);
          }),
          Cm = oi(function (e, i) {
            return si(e, H, r, r, r, i);
          });
        function Nm(e, i) {
          if (typeof e != "function") throw new Pr(f);
          return (i = i === r ? i : be(i)), xe(e, i);
        }
        function $m(e, i) {
          if (typeof e != "function") throw new Pr(f);
          return (
            (i = i == null ? 0 : Mt(be(i), 0)),
            xe(function (o) {
              var c = o[i],
                l = Oi(o, 0, i);
              return c && _i(l, c), qt(e, this, l);
            })
          );
        }
        function Dm(e, i, o) {
          var c = !0,
            l = !0;
          if (typeof e != "function") throw new Pr(f);
          return (
            ut(o) &&
              ((c = "leading" in o ? !!o.leading : c),
              (l = "trailing" in o ? !!o.trailing : l)),
            Uh(e, i, { leading: c, maxWait: i, trailing: l })
          );
        }
        function Lm(e) {
          return $h(e, 1);
        }
        function jm(e, i) {
          return Xa(ja(i), e);
        }
        function Mm() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return we(e) ? e : [e];
        }
        function Um(e) {
          return Rr(e, B);
        }
        function qm(e, i) {
          return (i = typeof i == "function" ? i : r), Rr(e, B, i);
        }
        function zm(e) {
          return Rr(e, P | B);
        }
        function km(e, i) {
          return (i = typeof i == "function" ? i : r), Rr(e, P | B, i);
        }
        function Hm(e, i) {
          return i == null || Pu(e, i, zt(i));
        }
        function Ur(e, i) {
          return e === i || (e !== e && i !== i);
        }
        var Bm = ao(xa),
          Km = ao(function (e, i) {
            return e >= i;
          }),
          Vi = Nu(
            (function () {
              return arguments;
            })()
          )
            ? Nu
            : function (e) {
                return mt(e) && qe.call(e, "callee") && !vu.call(e, "callee");
              },
          we = D.isArray,
          Fm = Xt ? mr(Xt) : Zp;
        function ur(e) {
          return e != null && mo(e.length) && !ci(e);
        }
        function _t(e) {
          return mt(e) && ur(e);
        }
        function Vm(e) {
          return e === !0 || e === !1 || (mt(e) && Zt(e) == j);
        }
        var Ri = op || uc,
          Gm = Lr ? mr(Lr) : eg;
        function Wm(e) {
          return mt(e) && e.nodeType === 1 && !Qn(e);
        }
        function Jm(e) {
          if (e == null) return !0;
          if (
            ur(e) &&
            (we(e) ||
              typeof e == "string" ||
              typeof e.splice == "function" ||
              Ri(e) ||
              bn(e) ||
              Vi(e))
          )
            return !e.length;
          var i = Wt(e);
          if (i == _e || i == je) return !e.size;
          if (Wn(e)) return !Oa(e).length;
          for (var o in e) if (qe.call(e, o)) return !1;
          return !0;
        }
        function Qm(e, i) {
          return Fn(e, i);
        }
        function Ym(e, i, o) {
          o = typeof o == "function" ? o : r;
          var c = o ? o(e, i) : r;
          return c === r ? Fn(e, i, r, o) : !!c;
        }
        function Za(e) {
          if (!mt(e)) return !1;
          var i = Zt(e);
          return (
            i == I ||
            i == u ||
            (typeof e.message == "string" &&
              typeof e.name == "string" &&
              !Qn(e))
          );
        }
        function Xm(e) {
          return typeof e == "number" && bu(e);
        }
        function ci(e) {
          if (!ut(e)) return !1;
          var i = Zt(e);
          return i == ne || i == ye || i == U || i == vt;
        }
        function zh(e) {
          return typeof e == "number" && e == be(e);
        }
        function mo(e) {
          return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Y;
        }
        function ut(e) {
          var i = typeof e;
          return e != null && (i == "object" || i == "function");
        }
        function mt(e) {
          return e != null && typeof e == "object";
        }
        var kh = xr ? mr(xr) : rg;
        function Zm(e, i) {
          return e === i || Pa(e, i, Ba(i));
        }
        function ev(e, i, o) {
          return (o = typeof o == "function" ? o : r), Pa(e, i, Ba(i), o);
        }
        function tv(e) {
          return Hh(e) && e != +e;
        }
        function rv(e) {
          if (qg(e)) throw new me(h);
          return $u(e);
        }
        function iv(e) {
          return e === null;
        }
        function nv(e) {
          return e == null;
        }
        function Hh(e) {
          return typeof e == "number" || (mt(e) && Zt(e) == Ne);
        }
        function Qn(e) {
          if (!mt(e) || Zt(e) != Pe) return !1;
          var i = Bs(e);
          if (i === null) return !0;
          var o = qe.call(i, "constructor") && i.constructor;
          return typeof o == "function" && o instanceof o && qs.call(o) == ep;
        }
        var ec = Gr ? mr(Gr) : ig;
        function sv(e) {
          return zh(e) && e >= -Y && e <= Y;
        }
        var Bh = Ln ? mr(Ln) : ng;
        function vo(e) {
          return typeof e == "string" || (!we(e) && mt(e) && Zt(e) == Ye);
        }
        function wr(e) {
          return typeof e == "symbol" || (mt(e) && Zt(e) == Xe);
        }
        var bn = Ui ? mr(Ui) : sg;
        function ov(e) {
          return e === r;
        }
        function av(e) {
          return mt(e) && Wt(e) == ke;
        }
        function cv(e) {
          return mt(e) && Zt(e) == Ze;
        }
        var uv = ao(Ra),
          hv = ao(function (e, i) {
            return e <= i;
          });
        function Kh(e) {
          if (!e) return [];
          if (ur(e)) return vo(e) ? jr(e) : cr(e);
          if (Mn && e[Mn]) return Hd(e[Mn]());
          var i = Wt(e),
            o = i == _e ? ga : i == je ? js : _n;
          return o(e);
        }
        function ui(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = Cr(e)), e === pe || e === -pe)) {
            var i = e < 0 ? -1 : 1;
            return i * G;
          }
          return e === e ? e : 0;
        }
        function be(e) {
          var i = ui(e),
            o = i % 1;
          return i === i ? (o ? i - o : i) : 0;
        }
        function Fh(e) {
          return e ? Hi(be(e), 0, X) : 0;
        }
        function Cr(e) {
          if (typeof e == "number") return e;
          if (wr(e)) return J;
          if (ut(e)) {
            var i = typeof e.valueOf == "function" ? e.valueOf() : e;
            e = ut(i) ? i + "" : i;
          }
          if (typeof e != "string") return e === 0 ? e : +e;
          e = hu(e);
          var o = Ko.test(e);
          return o || Vo.test(e)
            ? ve(e.slice(2), o ? 2 : 8)
            : Bo.test(e)
            ? J
            : +e;
        }
        function Vh(e) {
          return Jr(e, hr(e));
        }
        function lv(e) {
          return e ? Hi(be(e), -Y, Y) : e === 0 ? e : 0;
        }
        function Me(e) {
          return e == null ? "" : vr(e);
        }
        var fv = mn(function (e, i) {
            if (Wn(i) || ur(i)) {
              Jr(i, zt(i), e);
              return;
            }
            for (var o in i) qe.call(i, o) && Hn(e, o, i[o]);
          }),
          Gh = mn(function (e, i) {
            Jr(i, hr(i), e);
          }),
          wo = mn(function (e, i, o, c) {
            Jr(i, hr(i), e, c);
          }),
          dv = mn(function (e, i, o, c) {
            Jr(i, zt(i), e, c);
          }),
          pv = oi(_a);
        function gv(e, i) {
          var o = yn(e);
          return i == null ? o : Su(o, i);
        }
        var yv = xe(function (e, i) {
            e = We(e);
            var o = -1,
              c = i.length,
              l = c > 2 ? i[2] : r;
            for (l && er(i[0], i[1], l) && (c = 1); ++o < c; )
              for (var p = i[o], w = hr(p), E = -1, A = w.length; ++E < A; ) {
                var K = w[E],
                  F = e[K];
                (F === r || (Ur(F, dn[K]) && !qe.call(e, K))) && (e[K] = p[K]);
              }
            return e;
          }),
          mv = xe(function (e) {
            return e.push(r, hh), qt(Wh, r, e);
          });
        function vv(e, i) {
          return ou(e, he(i, 3), Wr);
        }
        function wv(e, i) {
          return ou(e, he(i, 3), Ia);
        }
        function bv(e, i) {
          return e == null ? e : Ea(e, he(i, 3), hr);
        }
        function _v(e, i) {
          return e == null ? e : Tu(e, he(i, 3), hr);
        }
        function Ev(e, i) {
          return e && Wr(e, he(i, 3));
        }
        function Iv(e, i) {
          return e && Ia(e, he(i, 3));
        }
        function xv(e) {
          return e == null ? [] : Zs(e, zt(e));
        }
        function Sv(e) {
          return e == null ? [] : Zs(e, hr(e));
        }
        function tc(e, i, o) {
          var c = e == null ? r : Bi(e, i);
          return c === r ? o : c;
        }
        function Pv(e, i) {
          return e != null && dh(e, i, Jp);
        }
        function rc(e, i) {
          return e != null && dh(e, i, Qp);
        }
        var Ov = sh(function (e, i, o) {
            i != null && typeof i.toString != "function" && (i = zs.call(i)),
              (e[i] = o);
          }, nc(lr)),
          Rv = sh(function (e, i, o) {
            i != null && typeof i.toString != "function" && (i = zs.call(i)),
              qe.call(e, i) ? e[i].push(o) : (e[i] = [o]);
          }, he),
          Av = xe(Kn);
        function zt(e) {
          return ur(e) ? Iu(e) : Oa(e);
        }
        function hr(e) {
          return ur(e) ? Iu(e, !0) : og(e);
        }
        function Tv(e, i) {
          var o = {};
          return (
            (i = he(i, 3)),
            Wr(e, function (c, l, p) {
              ni(o, i(c, l, p), c);
            }),
            o
          );
        }
        function Cv(e, i) {
          var o = {};
          return (
            (i = he(i, 3)),
            Wr(e, function (c, l, p) {
              ni(o, l, i(c, l, p));
            }),
            o
          );
        }
        var Nv = mn(function (e, i, o) {
            eo(e, i, o);
          }),
          Wh = mn(function (e, i, o, c) {
            eo(e, i, o, c);
          }),
          $v = oi(function (e, i) {
            var o = {};
            if (e == null) return o;
            var c = !1;
            (i = nt(i, function (p) {
              return (p = Pi(p, e)), c || (c = p.length > 1), p;
            })),
              Jr(e, ka(e), o),
              c && (o = Rr(o, P | N | B, Og));
            for (var l = i.length; l--; ) $a(o, i[l]);
            return o;
          });
        function Dv(e, i) {
          return Jh(e, yo(he(i)));
        }
        var Lv = oi(function (e, i) {
          return e == null ? {} : cg(e, i);
        });
        function Jh(e, i) {
          if (e == null) return {};
          var o = nt(ka(e), function (c) {
            return [c];
          });
          return (
            (i = he(i)),
            zu(e, o, function (c, l) {
              return i(c, l[0]);
            })
          );
        }
        function jv(e, i, o) {
          i = Pi(i, e);
          var c = -1,
            l = i.length;
          for (l || ((l = 1), (e = r)); ++c < l; ) {
            var p = e == null ? r : e[Qr(i[c])];
            p === r && ((c = l), (p = o)), (e = ci(p) ? p.call(e) : p);
          }
          return e;
        }
        function Mv(e, i, o) {
          return e == null ? e : Vn(e, i, o);
        }
        function Uv(e, i, o, c) {
          return (
            (c = typeof c == "function" ? c : r), e == null ? e : Vn(e, i, o, c)
          );
        }
        var Qh = ch(zt),
          Yh = ch(hr);
        function qv(e, i, o) {
          var c = we(e),
            l = c || Ri(e) || bn(e);
          if (((i = he(i, 4)), o == null)) {
            var p = e && e.constructor;
            l
              ? (o = c ? new p() : [])
              : ut(e)
              ? (o = ci(p) ? yn(Bs(e)) : {})
              : (o = {});
          }
          return (
            (l ? Sr : Wr)(e, function (w, E, A) {
              return i(o, w, E, A);
            }),
            o
          );
        }
        function zv(e, i) {
          return e == null ? !0 : $a(e, i);
        }
        function kv(e, i, o) {
          return e == null ? e : Fu(e, i, ja(o));
        }
        function Hv(e, i, o, c) {
          return (
            (c = typeof c == "function" ? c : r),
            e == null ? e : Fu(e, i, ja(o), c)
          );
        }
        function _n(e) {
          return e == null ? [] : pa(e, zt(e));
        }
        function Bv(e) {
          return e == null ? [] : pa(e, hr(e));
        }
        function Kv(e, i, o) {
          return (
            o === r && ((o = i), (i = r)),
            o !== r && ((o = Cr(o)), (o = o === o ? o : 0)),
            i !== r && ((i = Cr(i)), (i = i === i ? i : 0)),
            Hi(Cr(e), i, o)
          );
        }
        function Fv(e, i, o) {
          return (
            (i = ui(i)),
            o === r ? ((o = i), (i = 0)) : (o = ui(o)),
            (e = Cr(e)),
            Yp(e, i, o)
          );
        }
        function Vv(e, i, o) {
          if (
            (o && typeof o != "boolean" && er(e, i, o) && (i = o = r),
            o === r &&
              (typeof i == "boolean"
                ? ((o = i), (i = r))
                : typeof e == "boolean" && ((o = e), (e = r))),
            e === r && i === r
              ? ((e = 0), (i = 1))
              : ((e = ui(e)), i === r ? ((i = e), (e = 0)) : (i = ui(i))),
            e > i)
          ) {
            var c = e;
            (e = i), (i = c);
          }
          if (o || e % 1 || i % 1) {
            var l = _u();
            return Gt(e + l * (i - e + Ve("1e-" + ((l + "").length - 1))), i);
          }
          return Ta(e, i);
        }
        var Gv = vn(function (e, i, o) {
          return (i = i.toLowerCase()), e + (o ? Xh(i) : i);
        });
        function Xh(e) {
          return ic(Me(e).toLowerCase());
        }
        function Zh(e) {
          return (e = Me(e)), e && e.replace(ei, Md).replace(sa, "");
        }
        function Wv(e, i, o) {
          (e = Me(e)), (i = vr(i));
          var c = e.length;
          o = o === r ? c : Hi(be(o), 0, c);
          var l = o;
          return (o -= i.length), o >= 0 && e.slice(o, l) == i;
        }
        function Jv(e) {
          return (e = Me(e)), e && rt.test(e) ? e.replace($i, Ud) : e;
        }
        function Qv(e) {
          return (e = Me(e)), e && At.test(e) ? e.replace(pt, "\\$&") : e;
        }
        var Yv = vn(function (e, i, o) {
            return e + (o ? "-" : "") + i.toLowerCase();
          }),
          Xv = vn(function (e, i, o) {
            return e + (o ? " " : "") + i.toLowerCase();
          }),
          Zv = rh("toLowerCase");
        function e0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? ln(e) : 0;
          if (!i || c >= i) return e;
          var l = (i - c) / 2;
          return oo(Gs(l), o) + e + oo(Vs(l), o);
        }
        function t0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? ln(e) : 0;
          return i && c < i ? e + oo(i - c, o) : e;
        }
        function r0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? ln(e) : 0;
          return i && c < i ? oo(i - c, o) + e : e;
        }
        function i0(e, i, o) {
          return (
            o || i == null ? (i = 0) : i && (i = +i),
            hp(Me(e).replace(gt, ""), i || 0)
          );
        }
        function n0(e, i, o) {
          return (
            (o ? er(e, i, o) : i === r) ? (i = 1) : (i = be(i)), Ca(Me(e), i)
          );
        }
        function s0() {
          var e = arguments,
            i = Me(e[0]);
          return e.length < 3 ? i : i.replace(e[1], e[2]);
        }
        var o0 = vn(function (e, i, o) {
          return e + (o ? "_" : "") + i.toLowerCase();
        });
        function a0(e, i, o) {
          return (
            o && typeof o != "number" && er(e, i, o) && (i = o = r),
            (o = o === r ? X : o >>> 0),
            o
              ? ((e = Me(e)),
                e &&
                (typeof i == "string" || (i != null && !ec(i))) &&
                ((i = vr(i)), !i && hn(e))
                  ? Oi(jr(e), 0, o)
                  : e.split(i, o))
              : []
          );
        }
        var c0 = vn(function (e, i, o) {
          return e + (o ? " " : "") + ic(i);
        });
        function u0(e, i, o) {
          return (
            (e = Me(e)),
            (o = o == null ? 0 : Hi(be(o), 0, e.length)),
            (i = vr(i)),
            e.slice(o, o + i.length) == i
          );
        }
        function h0(e, i, o) {
          var c = d.templateSettings;
          o && er(e, i, o) && (i = r), (e = Me(e)), (i = wo({}, i, c, uh));
          var l = wo({}, i.imports, c.imports, uh),
            p = zt(l),
            w = pa(l, p),
            E,
            A,
            K = 0,
            F = i.interpolate || tn,
            W = "__p += '",
            ee = ya(
              (i.escape || tn).source +
                "|" +
                F.source +
                "|" +
                (F === ct ? Ho : tn).source +
                "|" +
                (i.evaluate || tn).source +
                "|$",
              "g"
            ),
            oe =
              "//# sourceURL=" +
              (qe.call(i, "sourceURL")
                ? (i.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++oa + "]") +
              `
`;
          e.replace(ee, function (de, Se, Ae, br, tr, _r) {
            return (
              Ae || (Ae = br),
              (W += e.slice(K, _r).replace(Wo, qd)),
              Se &&
                ((E = !0),
                (W +=
                  `' +
__e(` +
                  Se +
                  `) +
'`)),
              tr &&
                ((A = !0),
                (W +=
                  `';
` +
                  tr +
                  `;
__p += '`)),
              Ae &&
                (W +=
                  `' +
((__t = (` +
                  Ae +
                  `)) == null ? '' : __t) +
'`),
              (K = _r + de.length),
              de
            );
          }),
            (W += `';
`);
          var fe = qe.call(i, "variable") && i.variable;
          if (!fe)
            W =
              `with (obj) {
` +
              W +
              `
}
`;
          else if (zo.test(fe)) throw new me(g);
          (W = (A ? W.replace(Fr, "") : W)
            .replace(Yt, "$1")
            .replace(Zr, "$1;")),
            (W =
              "function(" +
              (fe || "obj") +
              `) {
` +
              (fe
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (E ? ", __e = _.escape" : "") +
              (A
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              W +
              `return __p
}`);
          var Ee = tl(function () {
            return Le(p, oe + "return " + W).apply(r, w);
          });
          if (((Ee.source = W), Za(Ee))) throw Ee;
          return Ee;
        }
        function l0(e) {
          return Me(e).toLowerCase();
        }
        function f0(e) {
          return Me(e).toUpperCase();
        }
        function d0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return hu(e);
          if (!e || !(i = vr(i))) return e;
          var c = jr(e),
            l = jr(i),
            p = lu(c, l),
            w = fu(c, l) + 1;
          return Oi(c, p, w).join("");
        }
        function p0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return e.slice(0, pu(e) + 1);
          if (!e || !(i = vr(i))) return e;
          var c = jr(e),
            l = fu(c, jr(i)) + 1;
          return Oi(c, 0, l).join("");
        }
        function g0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return e.replace(gt, "");
          if (!e || !(i = vr(i))) return e;
          var c = jr(e),
            l = lu(c, jr(i));
          return Oi(c, l).join("");
        }
        function y0(e, i) {
          var o = ae,
            c = ge;
          if (ut(i)) {
            var l = "separator" in i ? i.separator : l;
            (o = "length" in i ? be(i.length) : o),
              (c = "omission" in i ? vr(i.omission) : c);
          }
          e = Me(e);
          var p = e.length;
          if (hn(e)) {
            var w = jr(e);
            p = w.length;
          }
          if (o >= p) return e;
          var E = o - ln(c);
          if (E < 1) return c;
          var A = w ? Oi(w, 0, E).join("") : e.slice(0, E);
          if (l === r) return A + c;
          if ((w && (E += A.length - E), ec(l))) {
            if (e.slice(E).search(l)) {
              var K,
                F = A;
              for (
                l.global || (l = ya(l.source, Me(Ir.exec(l)) + "g")),
                  l.lastIndex = 0;
                (K = l.exec(F));

              )
                var W = K.index;
              A = A.slice(0, W === r ? E : W);
            }
          } else if (e.indexOf(vr(l), E) != E) {
            var ee = A.lastIndexOf(l);
            ee > -1 && (A = A.slice(0, ee));
          }
          return A + c;
        }
        function m0(e) {
          return (e = Me(e)), e && lt.test(e) ? e.replace(vi, Vd) : e;
        }
        var v0 = vn(function (e, i, o) {
            return e + (o ? " " : "") + i.toUpperCase();
          }),
          ic = rh("toUpperCase");
        function el(e, i, o) {
          return (
            (e = Me(e)),
            (i = o ? r : i),
            i === r ? (kd(e) ? Jd(e) : Nd(e)) : e.match(i) || []
          );
        }
        var tl = xe(function (e, i) {
            try {
              return qt(e, r, i);
            } catch (o) {
              return Za(o) ? o : new me(o);
            }
          }),
          w0 = oi(function (e, i) {
            return (
              Sr(i, function (o) {
                (o = Qr(o)), ni(e, o, Ya(e[o], e));
              }),
              e
            );
          });
        function b0(e) {
          var i = e == null ? 0 : e.length,
            o = he();
          return (
            (e = i
              ? nt(e, function (c) {
                  if (typeof c[1] != "function") throw new Pr(f);
                  return [o(c[0]), c[1]];
                })
              : []),
            xe(function (c) {
              for (var l = -1; ++l < i; ) {
                var p = e[l];
                if (qt(p[0], this, c)) return qt(p[1], this, c);
              }
            })
          );
        }
        function _0(e) {
          return Vp(Rr(e, P));
        }
        function nc(e) {
          return function () {
            return e;
          };
        }
        function E0(e, i) {
          return e == null || e !== e ? i : e;
        }
        var I0 = nh(),
          x0 = nh(!0);
        function lr(e) {
          return e;
        }
        function sc(e) {
          return Du(typeof e == "function" ? e : Rr(e, P));
        }
        function S0(e) {
          return ju(Rr(e, P));
        }
        function P0(e, i) {
          return Mu(e, Rr(i, P));
        }
        var O0 = xe(function (e, i) {
            return function (o) {
              return Kn(o, e, i);
            };
          }),
          R0 = xe(function (e, i) {
            return function (o) {
              return Kn(e, o, i);
            };
          });
        function oc(e, i, o) {
          var c = zt(i),
            l = Zs(i, c);
          o == null &&
            !(ut(i) && (l.length || !c.length)) &&
            ((o = i), (i = e), (e = this), (l = Zs(i, zt(i))));
          var p = !(ut(o) && "chain" in o) || !!o.chain,
            w = ci(e);
          return (
            Sr(l, function (E) {
              var A = i[E];
              (e[E] = A),
                w &&
                  (e.prototype[E] = function () {
                    var K = this.__chain__;
                    if (p || K) {
                      var F = e(this.__wrapped__),
                        W = (F.__actions__ = cr(this.__actions__));
                      return (
                        W.push({ func: A, args: arguments, thisArg: e }),
                        (F.__chain__ = K),
                        F
                      );
                    }
                    return A.apply(e, _i([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function A0() {
          return Re._ === this && (Re._ = tp), this;
        }
        function ac() {}
        function T0(e) {
          return (
            (e = be(e)),
            xe(function (i) {
              return Uu(i, e);
            })
          );
        }
        var C0 = Ua(nt),
          N0 = Ua(su),
          $0 = Ua(ua);
        function rl(e) {
          return Fa(e) ? ha(Qr(e)) : ug(e);
        }
        function D0(e) {
          return function (i) {
            return e == null ? r : Bi(e, i);
          };
        }
        var L0 = oh(),
          j0 = oh(!0);
        function cc() {
          return [];
        }
        function uc() {
          return !1;
        }
        function M0() {
          return {};
        }
        function U0() {
          return "";
        }
        function q0() {
          return !0;
        }
        function z0(e, i) {
          if (((e = be(e)), e < 1 || e > Y)) return [];
          var o = X,
            c = Gt(e, X);
          (i = he(i)), (e -= X);
          for (var l = da(c, i); ++o < e; ) i(o);
          return l;
        }
        function k0(e) {
          return we(e) ? nt(e, Qr) : wr(e) ? [e] : cr(Eh(Me(e)));
        }
        function H0(e) {
          var i = ++Zd;
          return Me(e) + i;
        }
        var B0 = so(function (e, i) {
            return e + i;
          }, 0),
          K0 = qa("ceil"),
          F0 = so(function (e, i) {
            return e / i;
          }, 1),
          V0 = qa("floor");
        function G0(e) {
          return e && e.length ? Xs(e, lr, xa) : r;
        }
        function W0(e, i) {
          return e && e.length ? Xs(e, he(i, 2), xa) : r;
        }
        function J0(e) {
          return cu(e, lr);
        }
        function Q0(e, i) {
          return cu(e, he(i, 2));
        }
        function Y0(e) {
          return e && e.length ? Xs(e, lr, Ra) : r;
        }
        function X0(e, i) {
          return e && e.length ? Xs(e, he(i, 2), Ra) : r;
        }
        var Z0 = so(function (e, i) {
            return e * i;
          }, 1),
          ew = qa("round"),
          tw = so(function (e, i) {
            return e - i;
          }, 0);
        function rw(e) {
          return e && e.length ? fa(e, lr) : 0;
        }
        function iw(e, i) {
          return e && e.length ? fa(e, he(i, 2)) : 0;
        }
        return (
          (d.after = Sm),
          (d.ary = $h),
          (d.assign = fv),
          (d.assignIn = Gh),
          (d.assignInWith = wo),
          (d.assignWith = dv),
          (d.at = pv),
          (d.before = Dh),
          (d.bind = Ya),
          (d.bindAll = w0),
          (d.bindKey = Lh),
          (d.castArray = Mm),
          (d.chain = Th),
          (d.chunk = Vg),
          (d.compact = Gg),
          (d.concat = Wg),
          (d.cond = b0),
          (d.conforms = _0),
          (d.constant = nc),
          (d.countBy = rm),
          (d.create = gv),
          (d.curry = jh),
          (d.curryRight = Mh),
          (d.debounce = Uh),
          (d.defaults = yv),
          (d.defaultsDeep = mv),
          (d.defer = Pm),
          (d.delay = Om),
          (d.difference = Jg),
          (d.differenceBy = Qg),
          (d.differenceWith = Yg),
          (d.drop = Xg),
          (d.dropRight = Zg),
          (d.dropRightWhile = ey),
          (d.dropWhile = ty),
          (d.fill = ry),
          (d.filter = nm),
          (d.flatMap = am),
          (d.flatMapDeep = cm),
          (d.flatMapDepth = um),
          (d.flatten = Ph),
          (d.flattenDeep = iy),
          (d.flattenDepth = ny),
          (d.flip = Rm),
          (d.flow = I0),
          (d.flowRight = x0),
          (d.fromPairs = sy),
          (d.functions = xv),
          (d.functionsIn = Sv),
          (d.groupBy = hm),
          (d.initial = ay),
          (d.intersection = cy),
          (d.intersectionBy = uy),
          (d.intersectionWith = hy),
          (d.invert = Ov),
          (d.invertBy = Rv),
          (d.invokeMap = fm),
          (d.iteratee = sc),
          (d.keyBy = dm),
          (d.keys = zt),
          (d.keysIn = hr),
          (d.map = fo),
          (d.mapKeys = Tv),
          (d.mapValues = Cv),
          (d.matches = S0),
          (d.matchesProperty = P0),
          (d.memoize = go),
          (d.merge = Nv),
          (d.mergeWith = Wh),
          (d.method = O0),
          (d.methodOf = R0),
          (d.mixin = oc),
          (d.negate = yo),
          (d.nthArg = T0),
          (d.omit = $v),
          (d.omitBy = Dv),
          (d.once = Am),
          (d.orderBy = pm),
          (d.over = C0),
          (d.overArgs = Tm),
          (d.overEvery = N0),
          (d.overSome = $0),
          (d.partial = Xa),
          (d.partialRight = qh),
          (d.partition = gm),
          (d.pick = Lv),
          (d.pickBy = Jh),
          (d.property = rl),
          (d.propertyOf = D0),
          (d.pull = py),
          (d.pullAll = Rh),
          (d.pullAllBy = gy),
          (d.pullAllWith = yy),
          (d.pullAt = my),
          (d.range = L0),
          (d.rangeRight = j0),
          (d.rearg = Cm),
          (d.reject = vm),
          (d.remove = vy),
          (d.rest = Nm),
          (d.reverse = Ja),
          (d.sampleSize = bm),
          (d.set = Mv),
          (d.setWith = Uv),
          (d.shuffle = _m),
          (d.slice = wy),
          (d.sortBy = xm),
          (d.sortedUniq = Py),
          (d.sortedUniqBy = Oy),
          (d.split = a0),
          (d.spread = $m),
          (d.tail = Ry),
          (d.take = Ay),
          (d.takeRight = Ty),
          (d.takeRightWhile = Cy),
          (d.takeWhile = Ny),
          (d.tap = Gy),
          (d.throttle = Dm),
          (d.thru = lo),
          (d.toArray = Kh),
          (d.toPairs = Qh),
          (d.toPairsIn = Yh),
          (d.toPath = k0),
          (d.toPlainObject = Vh),
          (d.transform = qv),
          (d.unary = Lm),
          (d.union = $y),
          (d.unionBy = Dy),
          (d.unionWith = Ly),
          (d.uniq = jy),
          (d.uniqBy = My),
          (d.uniqWith = Uy),
          (d.unset = zv),
          (d.unzip = Qa),
          (d.unzipWith = Ah),
          (d.update = kv),
          (d.updateWith = Hv),
          (d.values = _n),
          (d.valuesIn = Bv),
          (d.without = qy),
          (d.words = el),
          (d.wrap = jm),
          (d.xor = zy),
          (d.xorBy = ky),
          (d.xorWith = Hy),
          (d.zip = By),
          (d.zipObject = Ky),
          (d.zipObjectDeep = Fy),
          (d.zipWith = Vy),
          (d.entries = Qh),
          (d.entriesIn = Yh),
          (d.extend = Gh),
          (d.extendWith = wo),
          oc(d, d),
          (d.add = B0),
          (d.attempt = tl),
          (d.camelCase = Gv),
          (d.capitalize = Xh),
          (d.ceil = K0),
          (d.clamp = Kv),
          (d.clone = Um),
          (d.cloneDeep = zm),
          (d.cloneDeepWith = km),
          (d.cloneWith = qm),
          (d.conformsTo = Hm),
          (d.deburr = Zh),
          (d.defaultTo = E0),
          (d.divide = F0),
          (d.endsWith = Wv),
          (d.eq = Ur),
          (d.escape = Jv),
          (d.escapeRegExp = Qv),
          (d.every = im),
          (d.find = sm),
          (d.findIndex = xh),
          (d.findKey = vv),
          (d.findLast = om),
          (d.findLastIndex = Sh),
          (d.findLastKey = wv),
          (d.floor = V0),
          (d.forEach = Ch),
          (d.forEachRight = Nh),
          (d.forIn = bv),
          (d.forInRight = _v),
          (d.forOwn = Ev),
          (d.forOwnRight = Iv),
          (d.get = tc),
          (d.gt = Bm),
          (d.gte = Km),
          (d.has = Pv),
          (d.hasIn = rc),
          (d.head = Oh),
          (d.identity = lr),
          (d.includes = lm),
          (d.indexOf = oy),
          (d.inRange = Fv),
          (d.invoke = Av),
          (d.isArguments = Vi),
          (d.isArray = we),
          (d.isArrayBuffer = Fm),
          (d.isArrayLike = ur),
          (d.isArrayLikeObject = _t),
          (d.isBoolean = Vm),
          (d.isBuffer = Ri),
          (d.isDate = Gm),
          (d.isElement = Wm),
          (d.isEmpty = Jm),
          (d.isEqual = Qm),
          (d.isEqualWith = Ym),
          (d.isError = Za),
          (d.isFinite = Xm),
          (d.isFunction = ci),
          (d.isInteger = zh),
          (d.isLength = mo),
          (d.isMap = kh),
          (d.isMatch = Zm),
          (d.isMatchWith = ev),
          (d.isNaN = tv),
          (d.isNative = rv),
          (d.isNil = nv),
          (d.isNull = iv),
          (d.isNumber = Hh),
          (d.isObject = ut),
          (d.isObjectLike = mt),
          (d.isPlainObject = Qn),
          (d.isRegExp = ec),
          (d.isSafeInteger = sv),
          (d.isSet = Bh),
          (d.isString = vo),
          (d.isSymbol = wr),
          (d.isTypedArray = bn),
          (d.isUndefined = ov),
          (d.isWeakMap = av),
          (d.isWeakSet = cv),
          (d.join = ly),
          (d.kebabCase = Yv),
          (d.last = Tr),
          (d.lastIndexOf = fy),
          (d.lowerCase = Xv),
          (d.lowerFirst = Zv),
          (d.lt = uv),
          (d.lte = hv),
          (d.max = G0),
          (d.maxBy = W0),
          (d.mean = J0),
          (d.meanBy = Q0),
          (d.min = Y0),
          (d.minBy = X0),
          (d.stubArray = cc),
          (d.stubFalse = uc),
          (d.stubObject = M0),
          (d.stubString = U0),
          (d.stubTrue = q0),
          (d.multiply = Z0),
          (d.nth = dy),
          (d.noConflict = A0),
          (d.noop = ac),
          (d.now = po),
          (d.pad = e0),
          (d.padEnd = t0),
          (d.padStart = r0),
          (d.parseInt = i0),
          (d.random = Vv),
          (d.reduce = ym),
          (d.reduceRight = mm),
          (d.repeat = n0),
          (d.replace = s0),
          (d.result = jv),
          (d.round = ew),
          (d.runInContext = R),
          (d.sample = wm),
          (d.size = Em),
          (d.snakeCase = o0),
          (d.some = Im),
          (d.sortedIndex = by),
          (d.sortedIndexBy = _y),
          (d.sortedIndexOf = Ey),
          (d.sortedLastIndex = Iy),
          (d.sortedLastIndexBy = xy),
          (d.sortedLastIndexOf = Sy),
          (d.startCase = c0),
          (d.startsWith = u0),
          (d.subtract = tw),
          (d.sum = rw),
          (d.sumBy = iw),
          (d.template = h0),
          (d.times = z0),
          (d.toFinite = ui),
          (d.toInteger = be),
          (d.toLength = Fh),
          (d.toLower = l0),
          (d.toNumber = Cr),
          (d.toSafeInteger = lv),
          (d.toString = Me),
          (d.toUpper = f0),
          (d.trim = d0),
          (d.trimEnd = p0),
          (d.trimStart = g0),
          (d.truncate = y0),
          (d.unescape = m0),
          (d.uniqueId = H0),
          (d.upperCase = v0),
          (d.upperFirst = ic),
          (d.each = Ch),
          (d.eachRight = Nh),
          (d.first = Oh),
          oc(
            d,
            (function () {
              var e = {};
              return (
                Wr(d, function (i, o) {
                  qe.call(d.prototype, o) || (e[o] = i);
                }),
                e
              );
            })(),
            { chain: !1 }
          ),
          (d.VERSION = n),
          Sr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (e) {
              d[e].placeholder = d;
            }
          ),
          Sr(["drop", "take"], function (e, i) {
            (Oe.prototype[e] = function (o) {
              o = o === r ? 1 : Mt(be(o), 0);
              var c = this.__filtered__ && !i ? new Oe(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Gt(o, c.__takeCount__))
                  : c.__views__.push({
                      size: Gt(o, X),
                      type: e + (c.__dir__ < 0 ? "Right" : ""),
                    }),
                c
              );
            }),
              (Oe.prototype[e + "Right"] = function (o) {
                return this.reverse()[e](o).reverse();
              });
          }),
          Sr(["filter", "map", "takeWhile"], function (e, i) {
            var o = i + 1,
              c = o == v || o == re;
            Oe.prototype[e] = function (l) {
              var p = this.clone();
              return (
                p.__iteratees__.push({ iteratee: he(l, 3), type: o }),
                (p.__filtered__ = p.__filtered__ || c),
                p
              );
            };
          }),
          Sr(["head", "last"], function (e, i) {
            var o = "take" + (i ? "Right" : "");
            Oe.prototype[e] = function () {
              return this[o](1).value()[0];
            };
          }),
          Sr(["initial", "tail"], function (e, i) {
            var o = "drop" + (i ? "" : "Right");
            Oe.prototype[e] = function () {
              return this.__filtered__ ? new Oe(this) : this[o](1);
            };
          }),
          (Oe.prototype.compact = function () {
            return this.filter(lr);
          }),
          (Oe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (Oe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (Oe.prototype.invokeMap = xe(function (e, i) {
            return typeof e == "function"
              ? new Oe(this)
              : this.map(function (o) {
                  return Kn(o, e, i);
                });
          })),
          (Oe.prototype.reject = function (e) {
            return this.filter(yo(he(e)));
          }),
          (Oe.prototype.slice = function (e, i) {
            e = be(e);
            var o = this;
            return o.__filtered__ && (e > 0 || i < 0)
              ? new Oe(o)
              : (e < 0 ? (o = o.takeRight(-e)) : e && (o = o.drop(e)),
                i !== r &&
                  ((i = be(i)), (o = i < 0 ? o.dropRight(-i) : o.take(i - e))),
                o);
          }),
          (Oe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (Oe.prototype.toArray = function () {
            return this.take(X);
          }),
          Wr(Oe.prototype, function (e, i) {
            var o = /^(?:filter|find|map|reject)|While$/.test(i),
              c = /^(?:head|last)$/.test(i),
              l = d[c ? "take" + (i == "last" ? "Right" : "") : i],
              p = c || /^find/.test(i);
            l &&
              (d.prototype[i] = function () {
                var w = this.__wrapped__,
                  E = c ? [1] : arguments,
                  A = w instanceof Oe,
                  K = E[0],
                  F = A || we(w),
                  W = function (Se) {
                    var Ae = l.apply(d, _i([Se], E));
                    return c && ee ? Ae[0] : Ae;
                  };
                F &&
                  o &&
                  typeof K == "function" &&
                  K.length != 1 &&
                  (A = F = !1);
                var ee = this.__chain__,
                  oe = !!this.__actions__.length,
                  fe = p && !ee,
                  Ee = A && !oe;
                if (!p && F) {
                  w = Ee ? w : new Oe(this);
                  var de = e.apply(w, E);
                  return (
                    de.__actions__.push({ func: lo, args: [W], thisArg: r }),
                    new Or(de, ee)
                  );
                }
                return fe && Ee
                  ? e.apply(this, E)
                  : ((de = this.thru(W)),
                    fe ? (c ? de.value()[0] : de.value()) : de);
              });
          }),
          Sr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (e) {
              var i = Ms[e],
                o = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                c = /^(?:pop|shift)$/.test(e);
              d.prototype[e] = function () {
                var l = arguments;
                if (c && !this.__chain__) {
                  var p = this.value();
                  return i.apply(we(p) ? p : [], l);
                }
                return this[o](function (w) {
                  return i.apply(we(w) ? w : [], l);
                });
              };
            }
          ),
          Wr(Oe.prototype, function (e, i) {
            var o = d[i];
            if (o) {
              var c = o.name + "";
              qe.call(gn, c) || (gn[c] = []), gn[c].push({ name: i, func: o });
            }
          }),
          (gn[no(r, le).name] = [{ name: "wrapper", func: r }]),
          (Oe.prototype.clone = mp),
          (Oe.prototype.reverse = vp),
          (Oe.prototype.value = wp),
          (d.prototype.at = Wy),
          (d.prototype.chain = Jy),
          (d.prototype.commit = Qy),
          (d.prototype.next = Yy),
          (d.prototype.plant = Zy),
          (d.prototype.reverse = em),
          (d.prototype.toJSON = d.prototype.valueOf = d.prototype.value = tm),
          (d.prototype.first = d.prototype.head),
          Mn && (d.prototype[Mn] = Xy),
          d
        );
      },
      fn = Qd();
    bt ? (((bt.exports = fn)._ = fn), (Ge._ = fn)) : (Re._ = fn);
  }.call(is));
})(Uc, Uc.exports);
var Nx = Object.defineProperty,
  $x = Object.defineProperties,
  Dx = Object.getOwnPropertyDescriptors,
  vf = Object.getOwnPropertySymbols,
  Lx = Object.prototype.hasOwnProperty,
  jx = Object.prototype.propertyIsEnumerable,
  wf = (s, t, r) =>
    t in s
      ? Nx(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  xo = (s, t) => {
    for (var r in t || (t = {})) Lx.call(t, r) && wf(s, r, t[r]);
    if (vf) for (var r of vf(t)) jx.call(t, r) && wf(s, r, t[r]);
    return s;
  },
  Mx = (s, t) => $x(s, Dx(t));
function Ci(s, t, r) {
  var n;
  const a = zw(s);
  return (
    ((n = t.rpcMap) == null ? void 0 : n[a.reference]) ||
    `${Cx}?chainId=${a.namespace}:${a.reference}&projectId=${r}`
  );
}
function en(s) {
  return s.includes(":") ? s.split(":")[1] : s;
}
function Sd(s) {
  return s.map((t) => `${t.split(":")[0]}:${t.split(":")[1]}`);
}
function Ux(s, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(s));
  if (!r.length) return [];
  const n = [];
  return (
    r.forEach((a) => {
      const h = t.namespaces[a].accounts;
      n.push(...h);
    }),
    n
  );
}
function qx(s = {}, t = {}) {
  const r = bf(s),
    n = bf(t);
  return Uc.exports.merge(r, n);
}
function bf(s) {
  var t, r, n, a;
  const h = {};
  if (!Sn(s)) return h;
  for (const [f, g] of Object.entries(s)) {
    const b = Gc(f) ? [f] : g.chains,
      y = g.methods || [],
      _ = g.events || [],
      P = g.rpcMap || {},
      N = ns(f);
    h[N] = Mx(xo(xo({}, h[N]), g), {
      chains: lc(b, (t = h[N]) == null ? void 0 : t.chains),
      methods: lc(y, (r = h[N]) == null ? void 0 : r.methods),
      events: lc(_, (n = h[N]) == null ? void 0 : n.events),
      rpcMap: xo(xo({}, P), (a = h[N]) == null ? void 0 : a.rpcMap),
    });
  }
  return h;
}
function zx(s) {
  return s.includes(":") ? s.split(":")[2] : s;
}
function kx(s) {
  const t = {};
  for (const [r, n] of Object.entries(s)) {
    const a = n.methods || [],
      h = n.events || [],
      f = n.accounts || [],
      g = Gc(r) ? [r] : n.chains ? n.chains : Sd(n.accounts);
    t[r] = { chains: g, methods: a, events: h, accounts: f };
  }
  return t;
}
function xc(s) {
  return typeof s == "number"
    ? s
    : s.includes("0x")
    ? parseInt(s, 16)
    : s.includes(":")
    ? Number(s.split(":")[1])
    : Number(s);
}
const Pd = {},
  st = (s) => Pd[s],
  Sc = (s, t) => {
    Pd[s] = t;
  };
class Hx {
  constructor(t) {
    (this.name = "polkadot"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = en(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Bx {
  constructor(t) {
    (this.name = "eip155"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(t) {
    switch (t.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(t);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method)
      ? await this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
      (this.chainId = parseInt(t)),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  createHttpProvider(t, r) {
    const n =
      r || Ci(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = parseInt(en(r));
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const t = this.chainId,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, n;
    let a = t.request.params
      ? (r = t.request.params[0]) == null
        ? void 0
        : r.chainId
      : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const h = parseInt(a, 16);
    if (this.isChainApproved(h)) this.setDefaultChain(`${h}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({
        topic: t.topic,
        request: { method: t.request.method, params: [{ chainId: a }] },
        chainId: (n = this.namespace.chains) == null ? void 0 : n[0],
      }),
        this.setDefaultChain(`${h}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${h}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`
      );
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class Kx {
  constructor(t) {
    (this.name = "solana"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = en(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Fx {
  constructor(t) {
    (this.name = "cosmos"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        mi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = en(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Vx {
  constructor(t) {
    (this.name = "cip34"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(
        mi.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        const n = this.getCardanoRPCUrl(r),
          a = en(r);
        t[a] = this.createHttpProvider(a, n);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || this.getCardanoRPCUrl(t);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Gx {
  constructor(t) {
    (this.name = "elrond"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = en(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Wx {
  constructor(t) {
    (this.name = "multiversx"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(":")[1] === this.chainId.toString())
              .map((r) => r.split(":")[2])
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        const a = en(r);
        t[a] = this.createHttpProvider(
          a,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace, this.client.core.projectId);
    if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new yi(new Ni(n, st("disableProviderPing")));
  }
}
class Jx {
  constructor(t) {
    (this.name = "near"),
      (this.namespace = t.namespace),
      (this.events = st("events")),
      (this.client = st("client")),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error("ChainId not found");
    return t.split(":")[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (((this.chainId = t), !this.httpProviders[t])) {
      const n = r || Ci(`${this.name}:${t}`, this.namespace);
      if (!n) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, n);
    }
    this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t
          .filter((r) => r.split(":")[1] === this.chainId.toString())
          .map((r) => r.split(":")[2]) || []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var n;
        t[r] = this.createHttpProvider(
          r,
          (n = this.namespace.rpcMap) == null ? void 0 : n[r]
        );
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > "u") throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const n = this.createHttpProvider(t, r);
    n && (this.httpProviders[t] = n);
  }
  createHttpProvider(t, r) {
    const n = r || Ci(t, this.namespace);
    return typeof n > "u"
      ? void 0
      : new yi(new Ni(n, st("disableProviderPing")));
  }
}
var Qx = Object.defineProperty,
  Yx = Object.defineProperties,
  Xx = Object.getOwnPropertyDescriptors,
  _f = Object.getOwnPropertySymbols,
  Zx = Object.prototype.hasOwnProperty,
  eS = Object.prototype.propertyIsEnumerable,
  Ef = (s, t, r) =>
    t in s
      ? Qx(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  So = (s, t) => {
    for (var r in t || (t = {})) Zx.call(t, r) && Ef(s, r, t[r]);
    if (_f) for (var r of _f(t)) eS.call(t, r) && Ef(s, r, t[r]);
    return s;
  },
  Pc = (s, t) => Yx(s, Xx(t));
class iu {
  constructor(t) {
    (this.events = new Hc()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = t),
      (this.logger =
        typeof (t == null ? void 0 : t.logger) < "u" &&
        typeof (t == null ? void 0 : t.logger) != "string"
          ? t.logger
          : Te.pino(
              Te.getDefaultLoggerOptions({
                level: (t == null ? void 0 : t.logger) || yf,
              })
            )),
      (this.disableProviderPing =
        (t == null ? void 0 : t.disableProviderPing) || !1);
  }
  static async init(t) {
    const r = new iu(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [n, a] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(n).request({
      request: So({}, t),
      chainId: `${n}:${a}`,
      topic: this.session.topic,
    });
  }
  sendAsync(t, r, n) {
    this.request(t, n)
      .then((a) => r(null, a))
      .catch((a) => r(a, void 0));
  }
  async enable() {
    if (!this.client) throw new Error("Sign Client not initialized");
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error("Please call connect() before enable()");
    await this.client.disconnect({
      topic: (t = this.session) == null ? void 0 : t.topic,
      reason: It("USER_DISCONNECTED"),
    }),
      await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (
      (this.setNamespaces(t),
      await this.cleanupPendingPairings(),
      !t.skipPairing)
    )
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: n, approval: a } = await this.client.connect({
        pairingTopic: t,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      n && ((this.uri = n), this.events.emit("display_uri", n)),
        await a()
          .then((h) => {
            (this.session = h),
              this.namespaces ||
                ((this.namespaces = kx(h.namespaces)),
                this.persist("namespaces", this.namespaces));
          })
          .catch((h) => {
            if (h.message !== Id) throw h;
            r++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [n, a] = this.validateChain(t);
      this.getProvider(n).setDefaultChain(a, r);
    } catch (n) {
      if (!/Please call connect/.test(n.message)) throw n;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (Xr(r)) {
      for (const n of r)
        t.deletePairings
          ? this.client.core.expirer.set(n.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore("namespaces")),
      (this.optionalNamespaces =
        (await this.getFromStore("optionalNamespaces")) || {}),
      this.client.session.length)
    ) {
      const t = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[t])),
        this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await xx.init({
        logger: this.providerOpts.logger || yf,
        relayUrl: this.providerOpts.relayUrl || Rx,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client) throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error(
        "Session not initialized. Please call connect() before enable()"
      );
    const t = [
      ...new Set(Object.keys(this.session.namespaces).map((r) => ns(r))),
    ];
    Sc("client", this.client),
      Sc("events", this.events),
      Sc("disableProviderPing", this.disableProviderPing),
      t.forEach((r) => {
        if (!this.session) return;
        const n = Ux(r, this.session),
          a = Sd(n),
          h = qx(this.namespaces, this.optionalNamespaces),
          f = Pc(So({}, h[r]), { accounts: n, chains: a });
        switch (r) {
          case "eip155":
            this.rpcProviders[r] = new Bx({ namespace: f });
            break;
          case "solana":
            this.rpcProviders[r] = new Kx({ namespace: f });
            break;
          case "cosmos":
            this.rpcProviders[r] = new Fx({ namespace: f });
            break;
          case "polkadot":
            this.rpcProviders[r] = new Hx({ namespace: f });
            break;
          case "cip34":
            this.rpcProviders[r] = new Vx({ namespace: f });
            break;
          case "elrond":
            this.rpcProviders[r] = new Gx({ namespace: f });
            break;
          case "multiversx":
            this.rpcProviders[r] = new Wx({ namespace: f });
            break;
          case "near":
            this.rpcProviders[r] = new Jx({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (t) => {
      this.events.emit("session_ping", t);
    }),
      this.client.on("session_event", (t) => {
        const { params: r } = t,
          { event: n } = r;
        if (n.name === "accountsChanged") {
          const a = n.data;
          a && Xr(a) && this.events.emit("accountsChanged", a.map(zx));
        } else if (n.name === "chainChanged") {
          const a = r.chainId,
            h = r.event.data,
            f = ns(a),
            g = xc(a) !== xc(h) ? `${f}:${xc(h)}` : a;
          this.onChainChanged(g);
        } else this.events.emit(n.name, n.data);
        this.events.emit("session_event", t);
      }),
      this.client.on("session_update", ({ topic: t, params: r }) => {
        var n;
        const { namespaces: a } = r,
          h = (n = this.client) == null ? void 0 : n.session.get(t);
        (this.session = Pc(So({}, h), { namespaces: a })),
          this.onSessionUpdate(),
          this.events.emit("session_update", { topic: t, params: r });
      }),
      this.client.on("session_delete", async (t) => {
        await this.cleanup(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            Pc(So({}, It("USER_DISCONNECTED")), { data: t.topic })
          );
      }),
      this.on(mi.DEFAULT_CHAIN_CHANGED, (t) => {
        this.onChainChanged(t, !0);
      });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace(
        (r = this.session) == null ? void 0 : r.namespaces[t]
      );
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: n, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r),
      n && Object.keys(n).length && (this.optionalNamespaces = n),
      (this.sessionProperties = a),
      this.persist("namespaces", r),
      this.persist("optionalNamespaces", n);
  }
  validateChain(t) {
    const [r, n] = (t == null ? void 0 : t.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, n];
    if (
      r &&
      !Object.keys(this.namespaces || {})
        .map((f) => ns(f))
        .includes(r)
    )
      throw new Error(
        `Namespace '${r}' is not configured. Please call connect() first with namespace config.`
      );
    if (r && n) return [r, n];
    const a = ns(Object.keys(this.namespaces)[0]),
      h = this.rpcProviders[a].getDefaultChain();
    return [a, h];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var n;
    if (!this.namespaces) return;
    const [a, h] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(h),
      (((n = this.namespaces[a]) != null
        ? n
        : this.namespaces[`${a}:${h}`]
      ).defaultChain = h),
      this.persist("namespaces", this.namespaces),
      this.events.emit("chainChanged", h);
  }
  onConnect() {
    this.createProviders(),
      this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist("namespaces", void 0),
      this.persist("optionalNamespaces", void 0),
      this.persist("sessionProperties", void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${mf}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${mf}/${t}`);
  }
}
const tS = iu,
  rS = "wc",
  iS = "ethereum_provider",
  nS = `${rS}@2:${iS}:`,
  sS = "https://rpc.walletconnect.com/v1/",
  qc = ["eth_sendTransaction", "personal_sign"],
  oS = [
    "eth_accounts",
    "eth_requestAccounts",
    "eth_sendRawTransaction",
    "eth_sign",
    "eth_signTransaction",
    "eth_signTypedData",
    "eth_signTypedData_v3",
    "eth_signTypedData_v4",
    "eth_sendTransaction",
    "personal_sign",
    "wallet_switchEthereumChain",
    "wallet_addEthereumChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
  ],
  zc = ["chainChanged", "accountsChanged"],
  aS = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var cS = Object.defineProperty,
  uS = Object.defineProperties,
  hS = Object.getOwnPropertyDescriptors,
  If = Object.getOwnPropertySymbols,
  lS = Object.prototype.hasOwnProperty,
  fS = Object.prototype.propertyIsEnumerable,
  xf = (s, t, r) =>
    t in s
      ? cS(s, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (s[t] = r),
  os = (s, t) => {
    for (var r in t || (t = {})) lS.call(t, r) && xf(s, r, t[r]);
    if (If) for (var r of If(t)) fS.call(t, r) && xf(s, r, t[r]);
    return s;
  },
  Sf = (s, t) => uS(s, hS(t));
function Do(s) {
  return Number(s[0].split(":")[1]);
}
function Oc(s) {
  return `0x${s.toString(16)}`;
}
function dS(s) {
  const {
    chains: t,
    optionalChains: r,
    methods: n,
    optionalMethods: a,
    events: h,
    optionalEvents: f,
    rpcMap: g,
  } = s;
  if (!Xr(t)) throw new Error("Invalid chains");
  const b = {
      chains: t,
      methods: n || qc,
      events: h || zc,
      rpcMap: os({}, t.length ? { [Do(t)]: g[Do(t)] } : {}),
    },
    y = h == null ? void 0 : h.filter((B) => !zc.includes(B)),
    _ = n == null ? void 0 : n.filter((B) => !qc.includes(B));
  if (!r && !f && !a && !(y != null && y.length) && !(_ != null && _.length))
    return { required: t.length ? b : void 0 };
  const P =
      ((y == null ? void 0 : y.length) && (_ == null ? void 0 : _.length)) ||
      !r,
    N = {
      chains: [...new Set(P ? b.chains.concat(r || []) : r)],
      methods: [...new Set(b.methods.concat(a != null && a.length ? a : oS))],
      events: [...new Set(b.events.concat(f != null && f.length ? f : aS))],
      rpcMap: g,
    };
  return { required: t.length ? b : void 0, optional: r.length ? N : void 0 };
}
class nu {
  constructor() {
    (this.events = new $r.EventEmitter()),
      (this.namespace = "eip155"),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = nS),
      (this.on = (t, r) => (this.events.on(t, r), this)),
      (this.once = (t, r) => (this.events.once(t, r), this)),
      (this.removeListener = (t, r) => (
        this.events.removeListener(t, r), this
      )),
      (this.off = (t, r) => (this.events.off(t, r), this)),
      (this.parseAccount = (t) =>
        this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(t) {
    const r = new nu();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()),
      await this.request({ method: "eth_requestAccounts" })
    );
  }
  async connect(t) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(t);
    const { required: r, optional: n } = dS(this.rpc);
    try {
      const a = await new Promise(async (f, g) => {
        var b;
        this.rpc.showQrModal &&
          ((b = this.modal) == null ||
            b.subscribeModal((y) => {
              !y.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                g(new Error("Connection request reset. Please try again.")));
            })),
          await this.signer
            .connect(
              Sf(
                os(
                  { namespaces: os({}, r && { [this.namespace]: r }) },
                  n && { optionalNamespaces: { [this.namespace]: n } }
                ),
                { pairingTopic: t == null ? void 0 : t.pairingTopic }
              )
            )
            .then((y) => {
              f(y);
            })
            .catch((y) => {
              g(new Error(y.message));
            });
      });
      if (!a) return;
      const h = kw(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : h),
        this.setAccounts(h),
        this.events.emit("connect", { chainId: Oc(this.chainId) });
    } catch (a) {
      throw (this.signer.logger.error(a), a);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (t) => {
      const { params: r } = t,
        { event: n } = r;
      n.name === "accountsChanged"
        ? ((this.accounts = this.parseAccounts(n.data)),
          this.events.emit("accountsChanged", this.accounts))
        : n.name === "chainChanged"
        ? this.setChainId(this.formatChainId(n.data))
        : this.events.emit(n.name, n.data),
        this.events.emit("session_event", t);
    }),
      this.signer.on("chainChanged", (t) => {
        const r = parseInt(t);
        (this.chainId = r),
          this.events.emit("chainChanged", Oc(this.chainId)),
          this.persist();
      }),
      this.signer.on("session_update", (t) => {
        this.events.emit("session_update", t);
      }),
      this.signer.on("session_delete", (t) => {
        this.reset(),
          this.events.emit("session_delete", t),
          this.events.emit(
            "disconnect",
            Sf(os({}, It("USER_DISCONNECTED")), {
              data: t.topic,
              name: "USER_DISCONNECTED",
            })
          );
      }),
      this.signer.on("display_uri", (t) => {
        var r, n;
        this.rpc.showQrModal &&
          ((r = this.modal) == null || r.closeModal(),
          (n = this.modal) == null || n.openModal({ uri: t })),
          this.events.emit("display_uri", t);
      });
  }
  switchEthereumChain(t) {
    this.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId: t.toString(16) }],
    });
  }
  isCompatibleChainId(t) {
    return typeof t == "string" ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(":")[1]);
  }
  setChainIds(t) {
    const r = t
      .filter((n) => this.isCompatibleChainId(n))
      .map((n) => this.parseChainId(n));
    r.length &&
      ((this.chainId = r[0]),
      this.events.emit("chainChanged", Oc(this.chainId)),
      this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      (this.chainId = r), this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, n, a] = t.split(":");
    return { chainId: `${r}:${n}`, address: a };
  }
  setAccounts(t) {
    (this.accounts = t
      .filter(
        (r) =>
          this.parseChainId(this.parseAccountId(r).chainId) === this.chainId
      )
      .map((r) => this.parseAccountId(r).address)),
      this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(t) {
    var r, n;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [],
      h = (n = t == null ? void 0 : t.optionalChains) != null ? n : [],
      f = a.concat(h);
    if (!f.length)
      throw new Error(
        "No chains specified in either `chains` or `optionalChains`"
      );
    const g = a.length ? (t == null ? void 0 : t.methods) || qc : [],
      b = a.length ? (t == null ? void 0 : t.events) || zc : [],
      y = (t == null ? void 0 : t.optionalMethods) || [],
      _ = (t == null ? void 0 : t.optionalEvents) || [],
      P = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId),
      N = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return {
      chains: a == null ? void 0 : a.map((B) => this.formatChainId(B)),
      optionalChains: h.map((B) => this.formatChainId(B)),
      methods: g,
      events: b,
      optionalMethods: y,
      optionalEvents: _,
      rpcMap: P,
      showQrModal: !!(t != null && t.showQrModal),
      qrModalOptions: N,
      projectId: t.projectId,
      metadata: t.metadata,
    };
  }
  buildRpcMap(t, r) {
    const n = {};
    return (
      t.forEach((a) => {
        n[a] = this.getRpcUrl(a, r);
      }),
      n
    );
  }
  async initialize(t) {
    if (
      ((this.rpc = this.getRpcConfig(t)),
      (this.chainId = this.rpc.chains.length
        ? Do(this.rpc.chains)
        : Do(this.rpc.optionalChains)),
      (this.signer = await tS.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: t.disableProviderPing,
        relayUrl: t.relayUrl,
        storageOptions: t.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let r;
      try {
        const { WalletConnectModal: n } = await xw(
          () => import("./index-q5RFt_4r.js").then((a) => a.i),
          __vite__mapDeps([0, 1, 2])
        );
        r = n;
      } catch {
        throw new Error(
          "To use QR modal, please install @walletconnect/modal package"
        );
      }
      if (r)
        try {
          this.modal = new r(
            os(
              {
                walletConnectVersion: 2,
                projectId: this.rpc.projectId,
                standaloneChains: this.rpc.chains,
              },
              this.rpc.qrModalOptions
            )
          );
        } catch (n) {
          throw (
            (this.signer.logger.error(n),
            new Error("Could not generate WalletConnectModal Instance"))
          );
        }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: n, rpcMap: a } = t;
    r &&
      Xr(r) &&
      ((this.rpc.chains = r.map((h) => this.formatChainId(h))),
      r.forEach((h) => {
        this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
      })),
      n &&
        Xr(n) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains =
          n == null ? void 0 : n.map((h) => this.formatChainId(h))),
        n.forEach((h) => {
          this.rpc.rpcMap[h] = (a == null ? void 0 : a[h]) || this.getRpcUrl(h);
        }));
  }
  getRpcUrl(t, r) {
    var n;
    return (
      ((n = this.rpc.rpcMap) == null ? void 0 : n[t]) ||
      `${sS}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(
        `${this.STORAGE_KEY}/chainId`
      ),
      r = this.session.namespaces[`${this.namespace}:${t}`]
        ? this.session.namespaces[`${this.namespace}:${t}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(
      t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts
    ),
      this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(
        `${this.STORAGE_KEY}/chainId`,
        this.chainId
      );
  }
  parseAccounts(t) {
    return typeof t == "string" || t instanceof String
      ? [this.parseAccount(t)]
      : t.map((r) => this.parseAccount(r));
  }
}
const TS = nu;
export {
  TS as EthereumProvider,
  aS as OPTIONAL_EVENTS,
  oS as OPTIONAL_METHODS,
  zc as REQUIRED_EVENTS,
  qc as REQUIRED_METHODS,
  nu as default,
};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = [
      "assets/index-q5RFt_4r.js",
      "assets/index-iAGWl8Bb.js",
      "assets/index-aSg3iFvO.css",
    ];
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i]);
}
