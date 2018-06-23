var editor;
var App = {
	xslt_top: '<?xml version="1.0" encoding="utf-8"?>\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">\n<xsl:output method="html" indent="yes"/>\n\n',
	xslt_bottom: '</xsl:stylesheet>',
	xslt_module_top: '<!--Begin XXX-->\n<xsl:template match="/">',
	xslt_module_middle: '\n<!--Call XXX Child-->\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>',
	xslt_module_bottom: '</xsl:template>\n',
	xslt_module_top_child: '<!--Begin XXX Child-->\n<xsl:template match="XXX">\n',
	xslt_module_bottom_child: '</xsl:template>\n\n',
	xslt_attr_top: '<!--Attribute YYY-->\n<xsl:attribute name="YYY">',
	xslt_attr_bottom: '</xsl:attribute>',
	xslt_alt: '<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>',
	xslt_title: '<xsl:value-of select="Title"></xsl:value-of>',
	xslt_target: '<xsl:value-of select="Target"></xsl:value-of>',
	xslt_url: '<xsl:value-of select="Url"></xsl:value-of>',
	xslt_src: '<xsl:value-of select="ImageUrl"></xsl:value-of>'
}
var substringMatcher = function (strs) {
	return function findMatches(q, cb) {
		var matches, substringRegex, matches = [], substrRegex = new RegExp(q, 'i');
		matches = strs
		// $.each(strs, function (i, str) {
		//     if (substrRegex.test(str)) {
		//         matches.push(str);
		//     }
		// });
		cb(matches);
	};
};
var elements = [
	'img',
	'hr'
];
var attributes = [
	'alt',
	'target',
	'href',
	'title',
	'src'
];
var addnew = [
];

function __buildModule(e) {
	var before_prefix = ''
	var after_prefix = ''
	if (e.toLowerCase() === 'banner') {
		before_prefix = '\n<xsl:if test="count(/BannerList/Banner) > 0">'
		after_prefix = '\n</xsl:if>\n'
	}
	var cm = App.xslt_top + App.xslt_module_top + before_prefix + App.xslt_module_middle + after_prefix + App.xslt_module_bottom + App.xslt_module_top_child + App.xslt_module_bottom_child + App.xslt_bottom;
	editor.setValue(cm.replace(/XXX/g, e));
	editor.refresh();
	inDents() 
}
function __insertTemplateNewValue(e) {
	var cm = ''
	cm = '<!--Elements YYY-->\n' + e.split(';')[1]
	insertText(cm.replace(/YYY/g, e.split(';')[0]) + '\n')
}
function __insertTemplateElms(e) {
	var cm = ''
	cm = '<!--Elements YYY-->\n<' + e + '>\n</' + e + '>'
	insertText(cm.replace(/YYY/g, e))
}

function __insertTemplateAttr(e) {
	var cm = ''
	if (e === 'alt') {
		cm = App.xslt_attr_top + App.xslt_alt + App.xslt_attr_bottom
	} else if (e === 'src') {
		cm = App.xslt_attr_top + App.xslt_src + App.xslt_attr_bottom
	} else if (e === 'target') {
		cm = App.xslt_attr_top + App.xslt_target + App.xslt_attr_bottom
	} else if (e === 'href') {
		cm = App.xslt_attr_top + App.xslt_url + App.xslt_attr_bottom
	} else if (e === 'title') {
		cm = App.xslt_attr_top + App.xslt_title + App.xslt_attr_bottom
	}
	insertText(cm.replace(/YYY/g, e) + '\n')
}

function escapeHtml(unsafe) {
	return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>");
}
function insertText(data) {
	var cm = $(".CodeMirror")[0].CodeMirror;
	var doc = cm.getDoc();
	var cursor = doc.getCursor();
	var line = doc.getLine(cursor.line);
	var pos = {
		line: cursor.line,
		ch: cursor.ch
	};
	if (line.length === 0) {
		doc.replaceRange(data, pos);
	} else {
		doc.replaceRange(data, pos);
	}
	inDents()
}

function completeAfter(cm, pred) {
	var cur = cm.getCursor();
	if (!pred || pred()) setTimeout(function () {
		if (!cm.state.completionActive)
			cm.showHint({ completeSingle: false });
	}, 100);
	return CodeMirror.Pass;
}

function completeIfAfterLt(cm) {
	return completeAfter(cm, function () {
		var cur = cm.getCursor();
		return cm.getRange(CodeMirror.Pos(cur.line, cur.ch - 1), cur) == "<";
	});
}

function completeIfInTag(cm) {
	return completeAfter(cm, function () {
		var tok = cm.getTokenAt(cm.getCursor());
		if (tok.type == "string" && (!/['"]/.test(tok.string.charAt(tok.string.length - 1)) || tok.string.length == 1)) return false;
		var inner = CodeMirror.innerMode(cm.getMode(), tok.state).state;
		return inner.tagName;
	});
}

$(document).ready(function () {
	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode: "xml",
		lineNumbers: true,
		keyMap: "sublime",
		autoCloseBrackets: true,
		matchBrackets: true,
		showCursorWhenSelecting: true,
		theme: "monokai",
		lineWrapping: true,
		tabSize: 4,
		indentUnit: 4,
		smartIndent: true,
		indentWithTabs: true,
		foldGutter: true,
		gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
		extraKeys: {
			"Enter": "newLineAndIndent",
			"'<'": completeAfter,
			"'/'": completeIfAfterLt,
			"' '": completeIfInTag,
			"'='": completeIfInTag,
			"Ctrl-Space": "autocomplete",
			"Ctrl-Q": function (cm) { cm.foldCode(cm.getCursor()); }
		},
		lint: true
	});
	$('#modules').on('change', function (e) {
		__buildModule(e.target.value)
		___ReadyAdd()
	});
	$('.typeahead').typeahead({
		hint: true,
		highlight: true,
		minLength: 0
	},
		{
			name: 'addnew',
			source: substringMatcher(addnew)
		});
	var iTems = [];
	for (var key in attributes) {
		if (attributes.hasOwnProperty(key)) {
			var element = attributes[key];
			var item = '<option value="' + element + '"">' + element + '</option>';
			iTems.push(item)
		}
	}
	$('#attrs').append(iTems)
	$('#attrs').select2({
		placeholder: 'Vui lòng chọn',
		allowClear: true
	}).on("select2:select", function (e) {
		__insertTemplateAttr(e.target.value)
	});
	var iTemselms = [];
	for (var key in elements) {
		if (elements.hasOwnProperty(key)) {
			var element = elements[key];
			var item = '<option value="' + element + '"">' + element + '</option>';
			iTemselms.push(item)
		}
	}
	$('#elms').append(iTemselms)
	$('#elms').select2({
		placeholder: 'Vui lòng chọn',
		allowClear: true
	}).on("select2:select", function (e) {
		__insertTemplateElms(e.target.value)
	});
	$('.dropdown').click(function(){
		var od = $(this).find('button').attr('aria-controls')
		var data = escapeHtml($('#' + od).find('.dropdown-item').attr('data'))
		$('#' + od).find('.dropdown-item').html(data)
		$('#'+od).toggleClass('active')
	})
	$('.dropdown-item').click(function(){
		$(this).parents('.dropdown-menu').toggleClass('active')
	})
});

function ___ReadyAdd() {
	$('.d-none').removeClass('d-none')
}

$('#add').on('click', function (e) {
	var getval = $('.tt-input').val()
	__insertTemplateNewValue(getval)
})

$('#indent').on('click', function (e) {
	e.preventDefault();
	inDents() 
})

function inDents() {
	var cm = $(".CodeMirror")[0].CodeMirror;
	var doc = cm.getDoc();
	editor.operation(function () {
		for (var i = 0; i < doc.size; ++i) {
			editor.indentLine(i, "smart");
		}
	});
}