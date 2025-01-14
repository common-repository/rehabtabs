jQuery(function ($) {
    var rehabtabsOptions = {};
    if (options_object.cookie) {
        rehabtabsOptions.cookie = {
            expires: 30
        }
    }
    if (options_object.collapsible) {
        rehabtabsOptions.collapsible = true,
        rehabtabsOptions.selected = -1
    }
    if (options_object.fx) {
        rehabtabsOptions.fx = {
            opacity: 'toggle'
        }
    }
    rehabtabsOptions.spinner = (options_object.spinner ? options_object.spinner : '');
    rehabtabsOptions.ajaxOptions = {
        error: function (xhr, status, index, anchor) {
            $(anchor.hash).html("Couldn't load this tab. We'll try to fix this as soon as possible.")
        }
    };
    $('.rehabtabs').tabs(rehabtabsOptions)
});