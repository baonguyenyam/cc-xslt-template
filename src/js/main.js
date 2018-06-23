var tabCharacter = "  ";
var tabOffset = 2;
var App = {
    xslt_top: '<?xml version="1.0" encoding="utf-8"?>\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">\n<xsl:output method="html" indent="yes"/>',
    xslt_bottom: '</xsl:stylesheet>', 
    init: function () {
        $('#main').val(this.xslt_top + '\n' + this.xslt_bottom)
    }
}

function hightlightSyntax() {
    var me = $('textarea');
    var content = me.val();
    var codeHolder = $('code');
    var escaped = escapeHtml(content);
    codeHolder.html(escaped);
    $('.syntax-highight').each(function (i, block) {
        hljs.highlightBlock(block);
    });
}
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}
function correctTextareaHight(element) {
    var self = $(element),
        outerHeight = self.outerHeight(),
        innerHeight = self.prop('scrollHeight'),
        borderTop = parseFloat(self.css("borderTopWidth")),
        borderBottom = parseFloat(self.css("borderBottomWidth")),
        combinedScrollHeight = innerHeight + borderTop + borderBottom;

    if (outerHeight < combinedScrollHeight) {
        self.height(combinedScrollHeight);
    }
}

$(document).ready(function () {
    App.init()
    hightlightSyntax();
    emmet.require('textarea').setup({
        pretty_break: true,
        use_tab: true
    });
});

$('textarea').on('ready load keyup keydown change', function () {
    correctTextareaHight(this);
    hightlightSyntax();
});

$('#indent').on('click', function (e) {
    e.preventDefault();
    var self = $(this);
    self.toggleClass('active');
    if (self.hasClass('active')) {
        tabCharacter = "\t";
        tabOffset = 1;
    }
    else {
        tabCharacter = "  ";
        tabOffset = 2;
    }
})