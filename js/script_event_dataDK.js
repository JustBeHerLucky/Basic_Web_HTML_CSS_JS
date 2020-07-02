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
        window.LadiPageScript.runtime.eventData = "%7B%22FORM361%22%3A%7B%22type%22%3A%22form%22%2C%22option.form_config_id%22%3A%225efaf5a01aa0162789d36f64%22%2C%22option.form_send_ladipage%22%3Afalse%2C%22option.thankyou_type%22%3A%22popup%22%2C%22option.thankyou_value%22%3A%22POPUP377%22%2C%22option.form_conversion_name%22%3A%22CompleteRegistration%22%2C%22option.form_auto_funnel%22%3Atrue%2C%22option.form_auto_complete%22%3Atrue%7D%2C%22FORM_ITEM363%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A1%7D%2C%22FORM_ITEM364%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22email%22%2C%22option.input_tabindex%22%3A2%7D%2C%22FORM_ITEM365%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22tel%22%2C%22option.input_tabindex%22%3A3%7D%2C%22FORM_ITEM367%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22radio%22%2C%22option.input_tabindex%22%3A4%7D%2C%22FORM_ITEM369%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22checkbox%22%2C%22option.input_tabindex%22%3A6%7D%2C%22FORM_ITEM370%22%3A%7B%22type%22%3A%22form_item%22%2C%22option.input_type%22%3A%22text%22%2C%22option.input_tabindex%22%3A6%7D%2C%22POPUP377%22%3A%7B%22type%22%3A%22popup%22%2C%22option.conversion_name%22%3A%22THANHCONG%22%2C%22desktop.option.popup_position%22%3A%22default%22%2C%22desktop.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%2C%22mobile.option.popup_position%22%3A%22default%22%2C%22mobile.option.popup_backdrop%22%3A%22background-color%3A%20rgba(0%2C%200%2C%200%2C%200.5)%3B%22%7D%7D";
        window.LadiPageScript.run(true);
        window.LadiPageScript.runEventScroll();
    };
    run();
})();