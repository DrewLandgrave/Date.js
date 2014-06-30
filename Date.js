Date.prototype.getMonthName = function (lang) {
    'use strict';
    lang = lang && (Date.locale.hasOwnProperty(lang)) ? lang : 'en';
    return Date.locale[lang].month_names[this.getMonth()];
};

Date.prototype.getMonthNameAbbrev = function (lang) {
    'use strict';
    lang = lang && (Date.locale.hasOwnProperty(lang)) ? lang : 'en';
    return Date.locale[lang].month_names_short[this.getMonth()];
};

Date.prototype.getDayWithOrdinal = function () {
    'use strict';
    var i  = this.getDay(), j = i % 10;
    if (j == 1 && i != 11) {
        return i + "st";
    }
    if (j == 2 && i != 12) {
        return i + "nd";
    }
    if (j == 3 && i != 13) {
        return i + "rd";
    }
    return i + "th";

};

Date.locale = {
    en: {
        month_names:       ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        month_names_short: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
};
