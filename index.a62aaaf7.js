!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=r.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,r){a[e]=r},r.parcelRequired7c6=n);var o=n("bpxeT"),s=n("2TvXO"),i=n("lbRHt"),l=n("kitKc"),d="641afe219016a353adafbc0b4f44c0fe",u={form:document.querySelector(".header-form"),gallery:document.querySelector(".gallery"),errorMessage:document.querySelector("#message")};function c(){return(c=e(o)(e(s).mark((function r(t){var a,n;return e(s).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),""===(a=u.form.searchMovie.value)?u.errorMessage.classList.remove("visually-hidden"):(u.errorMessage.classList.add("visually-hidden"),n="https://api.themoviedb.org/3/search/movie?api_key=".concat(d,"&query=").concat(a,"&page=1"),(0,i.default)(n,f)),u.form.reset();case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function f(e){0===e.data.results.length?u.errorMessage.classList.remove("visually-hidden"):(u.errorMessage.classList.add("visually-hidden"),u.gallery.innerText="",(0,l.default)(e))}u.form.addEventListener("submit",(function(e){return c.apply(this,arguments)}))}();
//# sourceMappingURL=index.a62aaaf7.js.map
