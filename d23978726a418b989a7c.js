webpackJsonp([0,34,53,54,55,56,57,213],{685:function(e,t,n){"use strict";function u(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n);var u=i.concat(t).sort().reverse();return new RegExp("(\\[[^\\[]*\\])|(\\\\)?("+u.join("|")+"|.)","g")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=["x","ss","s","mm","m","hh","h","do","dddd","ddd","dd","d","aa","a","ZZ","Z","YYYY","YY","X","Wo","WW","W","SSS","SS","S","Qo","Q","Mo","MMMM","MMM","MM","M","HH","H","GGGG","GG","E","Do","DDDo","DDDD","DDD","DD","D","A"];e.exports=t.default},842:function(e,t,n){"use strict";function u(e,t){if(void 0!==e.one&&1===t)return e.one;var n=t%10,u=t%100;return 1===n&&11!==u?e.singularNominative.replace("{{count}}",t):n>=2&&n<=4&&(u<10||u>20)?e.singularGenitive.replace("{{count}}",t):e.pluralGenitive.replace("{{count}}",t)}function i(e){return function(t,n){return n.addSuffix?n.comparison>0?e.future?u(e.future,t):"за "+u(e.regular,t):e.past?u(e.past,t):u(e.regular,t)+" тому":u(e.regular,t)}}function a(e,t,n){return n=n||{},r[e](t,n)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r={lessThanXSeconds:i({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:i({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:function(e,t){return t.addSuffix?t.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},lessThanXMinutes:i({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:i({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:i({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:i({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:i({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} дня",pluralGenitive:"{{count}} днів"}}),aboutXMonths:i({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяця",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:i({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяця",pluralGenitive:"{{count}} місяців"}}),aboutXYears:i({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:i({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:i({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:i({regular:{singularNominative:"почти {{count}} рік",singularGenitive:"почти {{count}} роки",pluralGenitive:"почти {{count}} років"},future:{singularNominative:"почти за {{count}} рік",singularGenitive:"почти за {{count}} роки",pluralGenitive:"почти за {{count}} років"}})};e.exports=t.default},843:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(189),i=function(e){return e&&e.__esModule?e:{default:e}}(u),a=(0,i.default)({LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"});t.default=a,e.exports=t.default},844:function(e,t,n){"use strict";function u(e){var t=s[e];switch(e){case 0:case 3:case 5:case 6:return"[у минулу "+t+" о] LT";case 1:case 2:case 4:return"[у минулий "+t+" о] LT"}}function i(e){return"[у "+s[e]+" о] LT"}function a(e){var t=s[e];switch(e){case 0:case 3:case 5:case 6:return"[у наступну "+t+" о] LT";case 1:case 2:case 4:return"[у наступний "+t+" о] LT"}}function r(e,t,n,u){var i=c[e];return"function"==typeof i?i(t,n,u):i}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var o=n(899),l=function(e){return e&&e.__esModule?e:{default:e}}(o),s=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"],c={lastWeek:function(e,t,n){var a=e.getUTCDay();return(0,l.default)(e,t,n)?i(a):u(a)},yesterday:"[вчора о] LT",today:"[сьогодні о] LT",tomorrow:"[завтра о] LT",nextWeek:function(e,t,n){var u=e.getUTCDay();return(0,l.default)(e,t,n)?i(u):a(u)},other:"L"};e.exports=t.default},845:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u={},i=["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];["D","Do","DD"].forEach(function(e){u[e+" MMMM"]=function(t,n){return(0,n.formatters[e])(t,n)+" "+i[t.getUTCMonth()]}}),t.default=u,e.exports=t.default},846:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n,u=t||{},i=String(u.unit);return n="dayOfMonth"===i?3===e||23===e?"-є":"-е":"-й",e+n}Object.defineProperty(t,"__esModule",{value:!0});var a=n(191),r=u(a),o=n(190),l=u(o),s={narrow:["нд","пн","вт","ср","чт","пт","сб"],short:["нед","пон","вів","сер","чтв","птн","суб"],long:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},c={short:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],long:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},f={long:["ночі","ранку","дня","вечора"]},d={ordinalNumber:i,weekday:(0,r.default)(s,"long"),weekdays:(0,l.default)(s,"long"),month:(0,r.default)(c,"long"),months:(0,l.default)(c,"long"),timeOfDay:(0,r.default)(f,"long",function(e){return e>=17?3:e>=12?2:e>=4?1:0}),timesOfDay:(0,l.default)(f,"long")};t.default=d,e.exports=t.default},847:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(192),a=u(i),r=n(194),o=u(r),l=n(193),s=u(l),c=n(195),f=u(c),d=/^(\d+)(-?(е|є|й|а|я))?/i,v={narrow:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,short:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,long:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},g={any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},p={short:/^(січ|лют|бер|берез|кві|трав?|чер|лип|сер|вер|жов|лис(топ)?|груд)\.?/i,long:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопада?|грудень|грудня)/i},m={any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},G={long:/^(ніч|ночі|ранок|ранку|дня|день|вечір|вечора)/i},M={any:[/^(н|р)/i,/^(д|в)/i]},y={ordinalNumbers:(0,s.default)(d),ordinalNumber:f.default,weekdays:(0,a.default)(v,"long"),weekday:(0,o.default)(g,"any"),months:(0,a.default)(p,"long"),month:(0,o.default)(m,"any"),timesOfDay:(0,a.default)(G,"long"),timeOfDay:(0,o.default)(M,"any")};t.default=y,e.exports=t.default},895:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(842),a=u(i),r=n(843),o=u(r),l=n(844),s=u(l),c=n(846),f=u(c),d=n(847),v=u(d),g=n(845),p=u(g),m=n(685),G=u(m),M={formatDistance:a.default,formatLong:o.default,formatRelative:s.default,localize:f.default,match:v.default,formatters:p.default,formattingTokensRegExp:(0,G.default)(p.default),options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=M,e.exports=t.default},899:function(e,t,n){"use strict";function u(e,t,n){var u=(0,a.default)(e,n),i=(0,a.default)(t,n);return u.getTime()===i.getTime()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(900),a=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports=t.default},900:function(e,t,n){"use strict";function u(e,t){var n=t||{},u=n.locale,i=u&&u.options&&u.options.weekStartsOn,r=void 0===i?0:Number(i),o=void 0===n.weekStartsOn?r:Number(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var l=(0,a.default)(e,n),s=l.getUTCDay(),c=(s<o?7:0)+s-o;return l.setUTCDate(l.getUTCDate()-c),l.setUTCHours(0,0,0,0),l}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var i=n(38),a=function(e){return e&&e.__esModule?e:{default:e}}(i);e.exports=t.default}});
//# sourceMappingURL=d23978726a418b989a7c.js.map