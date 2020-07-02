(function() {
    var run = function() {
        if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
            setTimeout(run, 100);
            return;
        }
        window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
        window.LadiPageScript.runtime.ladipage_id = '5efa0a7badd50b277e797ce3';
        window.LadiPageScript.runtime.isMobileOnly = false;
        window.LadiPageScript.runtime.DOMAIN_SET_COOKIE = ["pagedemo.me"];
        window.LadiPageScript.runtime.DOMAIN_FREE = [];
        window.LadiPageScript.runtime.bodyFontSize = 12;
        window.LadiPageScript.runtime.time_zone = 7;
        window.LadiPageScript.runtime.currency = "VND";
        window.LadiPageScript.runtime.eventData = "%7B%22POPUP377%22%3A%7B%22type%22%3A%22popup%22%2C%22option.conversion_name%22%3A%22THANHCONG%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%7D";
        window.LadiPageScript.run(true);
        window.LadiPageScript.runEventScroll();
    };
    run();
})();