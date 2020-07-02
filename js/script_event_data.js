(function() {
    var run = function() {
        if (typeof window.LadiPageScript == "undefined" || window.LadiPageScript == undefined || typeof window.ladi == "undefined" || window.ladi == undefined) {
            setTimeout(run, 100);
            return;
        }
        window.LadiPageApp = window.LadiPageApp || new window.LadiPageAppV2();
        window.LadiPageScript.runtime.ladipage_id = '5efa0a7badd50b277e797ce3';
        window.LadiPageScript.runtime.isMobileOnly = false;
        window.LadiPageScript.runtime.DOMAIN_FREE = [];
        window.LadiPageScript.runtime.bodyFontSize = 12;
        window.LadiPageScript.runtime.time_zone = 7;
        window.LadiPageScript.runtime.currency = "VND";
        window.LadiPageScript.runtime.eventData = "%7B%22SHAPE11%22%3A%7B%22type%22%3A%22shape%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22link%22%2C%22action%22%3A%22https%3A%2F%2Fwww.facebook.com%2Fdimitrivegasandlikemike%2F%22%7D%7D%2C%22SHAPE13%22%3A%7B%22type%22%3A%22shape%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22link%22%2C%22action%22%3A%22https%3A%2F%2Ftwitter.com%2Fdvandlmindia%22%7D%7D%2C%22SHAPE14%22%3A%7B%22type%22%3A%22shape%22%2C%22option.data_action%22%3A%7B%22type%22%3A%22link%22%2C%22action%22%3A%22https%3A%2F%2Fwww.instagram.com%2Fdimitrivegasandlikemike%2F%22%7D%7D%2C%22FORM265%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_send_ladipage%22%3Atrue%2C%22option.thankyou_type%22%3A%22default%22%2C%22option.thankyou_value%22%3A%22C%C3%A1m%20%C6%A1n%20b%E1%BA%A1n%20%C4%91%C3%A3%20quan%20t%C3%A2m%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%7D%2C%22FORM_ITEM267%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22email%22%2C%22option.input_tabindex%22%3A1%7D%7D";
        window.LadiPageScript.run(true);
        window.LadiPageScript.runEventScroll();
    };
    run();
})();