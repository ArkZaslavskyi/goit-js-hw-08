function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function j(e){return l=e,f=setTimeout(T,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function T(){var e=g();if(S(e))return h(e);f=setTimeout(T,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?y(e):(r=i=void 0,a)}function w(){var e=g(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(T,t),y(u)}return void 0===f&&(f=setTimeout(T,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})};const y={},j={form:document.querySelector(".feedback-form"),mail:document.querySelector('.feedback-form input[type="email"]'),message:document.querySelector(".feedback-form textarea")};j.form.addEventListener("submit",(function(e){if(e.preventDefault(),!(j.mail.value&&j.message.value))return alert("Fill all fields");console.log("formData:",y),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),y.email="",y.message=""})),j.form.addEventListener("input",e(t)((function(e){y[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(y))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(j.mail.value=e.email?e.email:"",j.message.value=e.message?e.message:"",y.email=j.mail.value,y.message=j.message.value)}();
//# sourceMappingURL=03-feedback.ad98223e.js.map
