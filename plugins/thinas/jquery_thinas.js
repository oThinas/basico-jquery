// Declaração do plug-in
$.fn.thinas = function (options) {
    var defaults = {
        'corDeFundo' : 'aqua'
    };

    var settings = $.extend( {}, defaults, options);

    this.css({
        backgroundColor: settings.corDeFundo
    });

    return this;
};