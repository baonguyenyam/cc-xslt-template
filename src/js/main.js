var editor;
var ModuleChoose = ''
var App = {
	note: '\nCác bước tạo file XSLT\n=====================\n\n1) Chọn Modules\n2) Thêm/bớt các attribute hoặc elements\n\nPhím tắt\n=====================\nCommand + Left: Di chuyển tới đầu dòng code\nCommand + Ctrl + Up: Di chuyển dòng code lên trên\nCommand + D: Chọn cùng giá trị',
	xslt_top: '<?xml version="1.0" encoding="utf-8"?>\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">\n<xsl:output method="html" indent="yes"/>\n\n',
	xslt_bottom: '</xsl:stylesheet>',
	xslt_module_top: '<!--Begin XXX-->\n<xsl:template match="/">\n',
	xslt_module_top_section: '<section class="canhcam-YYY-1">\n',
	xslt_module_top_article: '<article class="list-items">\n',
	xslt_module_middle: '<!--Call XXX Child-->\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>',
	xslt_module_zone_middle: '<!--Call XXX Child-->\n<nav>\n<ul>\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>\n</ul>\n</nav>',
	xslt_module_news_middle: '<!--Call XXX Child-->\n<xsl:apply-templates select="/XXXDetail/XXXOther"></xsl:apply-templates>',
	xslt_module_bottom: '</xsl:template>\n\n',
	xslt_module_bottom_section: '</section>\n',
	xslt_module_bottom_article: '</article>\n',
	xslt_module_top_child: '<!--Begin XXX Child-->\n<xsl:template match="XXX">\n',
	xslt_module_top_news_child: '<!--Begin XXX Other Child-->\n<xsl:template match="XXXOther">\n',
	xslt_module_child_middle: '<!--item-->\n<div class="item">\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n<!--link-->\n<xsl:if test="Url != \'\'">\n<a>\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="/XXXList/ViewMore"></xsl:value-of>\n</a>\n</xsl:if>\n</div>\n',
	xslt_module_child_zone_details_middle: '<!--item-->\n<li class="item">\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>item active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<!-- URL -->\n<a>\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</a>\n</li>\n',
	xslt_module_child_news_details_middle: '<!--item-->\n<a class="item">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n<figure>\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n</img>\n<figcaption>\n<time>\n<i class="fa fa-calendar mr-2"></i>\n<xsl:value-of select="CreatedDate"></xsl:value-of>\n</time>\n<h3>\n<xsl:attribute name="title">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="Title"></xsl:value-of>\n</h3>\n<p>\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n</figcaption>\n</figure>\n</a>\n',
	xslt_module_child_news_advanced_middle: '<!-- item 1 -->\n<xsl:if test="position() = 1 ">\n<xsl:text disable-output-escaping="yes">&lt;div class="col-lg-6 hot-item"&gt;</xsl:text>\n<xsl:apply-templates select="XXX" mode="XXXItem"></xsl:apply-templates>\n</xsl:if>\n<!-- item 2,3 -->\n<xsl:if test="position() = 2 ">\n<xsl:text disable-output-escaping="yes">&lt;/div&gt;</xsl:text>\n<xsl:text disable-output-escaping="yes">&lt;div class="col-lg-6 child-hot-item"&gt;</xsl:text>\n<xsl:apply-templates select="XXX" mode="XXXItem"></xsl:apply-templates>\n</xsl:if>\n<!-- item 3 -->\n<xsl:if test="position() = 3 ">\n<xsl:apply-templates select="XXX" mode="XXXItem"></xsl:apply-templates>\n<xsl:text disable-output-escaping="yes">&lt;/div&gt;</xsl:text>\n<xsl:text disable-output-escaping="yes">&lt;div class="other-news"&gt;</xsl:text>\n</xsl:if>\n<!-- item 4,5,6,7... -->\n<xsl:if test="position() > 3 ">\n<div class="col-sm-6 col-lg-3">\n<xsl:apply-templates select="XXX" mode="XXXItem"></xsl:apply-templates>\n</div>\n</xsl:if>\n<!-- item last -->\n<xsl:if test="position() = last() ">\n<xsl:text disable-output-escaping="yes">&lt;/div&gt;</xsl:text>\n</xsl:if>\n</xsl:template>\n\n<!--Begin XXX Items-->\n<xsl:template match="XXX" mode="XXXItem">\n<!--item-->\n<div class="item">\n<!--target-->\n<xsl:attribute name="id">\n<xsl:text>YYY-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<figure>\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<a class="thumb">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n</a>\n<!--title-->\n<figcaption>\n<a class="titlelink">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<h2><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></h2>\n<p class="sub"><xsl:value-of select="SubTitle" disable-output-escaping="yes"></xsl:value-of></p>\n</a>\n<time><em class="fa fa-calendar"></em><xsl:value-of select="CreatedDate"></xsl:value-of></time>\n<p>\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n<a class="readmore">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="/XXXList/ViewMore" disable-output-escaping="yes"></xsl:value-of>\n</a>\n</figcaption>\n</figure>\n</div>\n<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>\n',
	xslt_module_child_news_middle: '<!--item-->\n<div class="item">\n<!--album target-->\n<xsl:attribute name="id">\n<xsl:text>news-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<figure>\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<a class="thumb">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n</a>\n<!--title-->\n<figcaption>\n<a class="titlelink">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<h2><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></h2>\n<p class="sub"><xsl:value-of select="SubTitle" disable-output-escaping="yes"></xsl:value-of></p>\n</a>\n<time><xsl:value-of select="CreatedDate"></xsl:value-of></time>\n<p>\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n<a class="readmore">\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="/XXXList/ViewMore" disable-output-escaping="yes"></xsl:value-of>\n</a>\n</figcaption>\n</figure>\n</div>\n<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>\n',
	xslt_module_child_gallery_middle: '<!--item-->\n<div class="item">\n<!--album target-->\n<xsl:attribute name="data-target">\n<xsl:text>#YYY-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<a class="thumb">\n<xsl:attribute name="href">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<figure>\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Image/Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n<!--title-->\n<figcaption>\n<h2><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></h2>\n</figcaption>\n</figure>\n</a>\n<!--album list-->\n<div class="d-none imagesinalbum">\n<!--album id-->\n<xsl:attribute name="id">\n<xsl:text>YYY-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<xsl:apply-templates select="Images" mode="ImageByAlbum"></xsl:apply-templates>\n</div>\n</div>\n<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>\n',
	xslt_module_child_video_middle: '<!--item-->\n<div class="item">\n<!--album target-->\n<xsl:attribute name="id">\n<xsl:text>YYY-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<a class="thumb">\n<xsl:attribute name="href">\n<xsl:value-of select="VideoUrl"></xsl:value-of>\n</xsl:attribute>\n<figure>\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Image/Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n<!--title-->\n<figcaption>\n<h2><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></h2>\n</figcaption>\n</figure>\n</a>\n</div>\n<xsl:value-of select="EditLink" disable-output-escaping="yes"></xsl:value-of>\n',
	xslt_module_bottom_child: '</xsl:template>\n\n',
	xslt_attr_top: '<!--Attribute XXX-->\n<xsl:attribute name="XXX">\n',
	xslt_attr_bottom: '\n</xsl:attribute>',
	xslt_alt: '<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>',
	xslt_title: '<xsl:value-of select="Title"></xsl:value-of>',
	xslt_target: '<xsl:value-of select="Target"></xsl:value-of>',
	xslt_url: '<xsl:value-of select="Url"></xsl:value-of>',
	xslt_src: '<xsl:value-of select="ImageUrl"></xsl:value-of>',
	xslt_id: '<xsl:text>item-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>',
	xslt_class: '<xsl:text>classname</xsl:text>',
	xslt_class_active: '<xsl:text>classname active</xsl:text>'
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
	'a',
	'div',
	'p',
	'section',
	'article',
	'ul',
	'li',
	'hr'
];
var attributes = [
	'alt',
	'src',
	'title',
	'class',
	'class-active',
	'href',
	'target',
	'id'
];
var addnew = [
];

var alldortag = {
	attrs: {
		"src": [""],
		"alt": [""],
		"title": [""],
		"class": [""],
		"href": [""],
		"id": [""],
		"target": [""]
	}
}
var tags = {
	"xsl:template": {
		attrs: {
			"match": ["/", "News"],
			"mode": ["ABCmode"]
		}
	},
	"xsl:apply-templates" : {
		attrs: {
			"select": ["/", "/NewsList/News", "/NewsDetail/FullContent"],
			"mode": ["ABCmode"]
		}
	},
	"xsl:if" : {
		attrs: {
			"test": ["position()", "position() = last()", "Title != ''", "count(/NewsList/News) > 0", "IsActive='true'"]
		}
	},
	"xsl:attribute": {
		attrs: {
			"name": ["src", "alt", "title", "class", "id", "href", "target"],
		}
	},
	"xsl:value-of" : {
		attrs: {
			"select": ["ImageUrl", "Title", "Url", "Target", "CreatedDate", "BriefContent", "SubTitle", "EditLink", "VideoUrl", "position()", "Description", "FullContent"],
			"disable-output-escaping": ["yes", "no"]
		}
	},
	"xsl:text": {
		attrs: {
			"disable-output-escaping": ["yes", "no"]
		}
	},
	"article": alldortag,
	"img": alldortag,
	"a": alldortag,
	"div": alldortag,
	"p": alldortag,
	"section": alldortag,
	"article": alldortag,
	"ul": alldortag,
	"li": alldortag,
	"hr": alldortag
};

function __buildModule(e) {
	// Reset 
	var before_prefix = ''
	var after_prefix = ''
	var before_prefix_all = ''
	var after_prefix_all = ''
	var cm = ''
	var OldApp = App
	var repM = new RegExp('News-Details', 'g');
	var repX = new RegExp('News-Advanced', 'g');
	var rep = new RegExp('XXX', 'g');
	var repY = new RegExp('YYY', 'g');
	// Apply
	before_prefix_all = '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + App.xslt_module_top_section + before_prefix + App.xslt_module_top_article
	after_prefix_all = '\n' + App.xslt_module_bottom_article + App.xslt_module_bottom_section + '</xsl:if>\n' 

	if (e.toLowerCase() === 'gallery') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXList/ModuleTitle"></xsl:value-of>\n</h1>\n<p class="lead">\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n</caption>\n'
		after_prefix = '<!--Begin XXX Album-->\n<xsl:template match="Images" mode="ImageByAlbum">\n<xsl:if test="position() > 1">\n<a>\n<xsl:attribute name="href">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n</a>\n</xsl:if>\n</xsl:template>\n\n'
		OldApp.xslt_module_child_middle = App.xslt_module_child_gallery_middle
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + OldApp.xslt_module_top_article 
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section 
	} else if (e.toLowerCase() === 'video') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXList/ModuleTitle"></xsl:value-of>\n</h1>\n<p class="lead">\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n</caption>\n'
		OldApp.xslt_module_child_middle = App.xslt_module_child_video_middle
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + OldApp.xslt_module_top_article 
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section 
	} else if (e.toLowerCase() === 'news') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXList/ZoneTitle"></xsl:value-of>\n</h1>\n<p class="lead">\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n</caption>\n'
		OldApp.xslt_module_child_middle = App.xslt_module_child_news_middle
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + OldApp.xslt_module_top_article 
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section
	} else if (e.toLowerCase() === 'news-advanced') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXList/ZoneTitle"></xsl:value-of>\n</h1>\n<p class="lead">\n<xsl:value-of select="BriefContent" disable-output-escaping="yes"></xsl:value-of>\n</p>\n</caption>\n'
		OldApp.xslt_module_child_middle = App.xslt_module_child_news_advanced_middle
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + OldApp.xslt_module_top_article 
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section
	} else if (e.toLowerCase() === 'news-details') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXDetail/Title"></xsl:value-of>\n</h1>\n<time>\n<i class="fa fa-calendar mr-2"></i>\n<xsl:value-of select="/XXXDetail/CreatedDate"></xsl:value-of>\n</time>\n<xsl:value-of select="/XXXDetail/EditLink" disable-output-escaping="yes"></xsl:value-of>\n</caption>\n<!--Content-->\n<article class="content">\n<xsl:value-of select="/XXXDetail/FullContent" disable-output-escaping="yes"></xsl:value-of>\n</article>\n<!--Social Networks-->\n<div class="social-networks nav">\n</div>\n<!--Other XXX-->\n'
		OldApp.xslt_module_child_middle = App.xslt_module_child_news_details_middle
		OldApp.xslt_module_top_child = App.xslt_module_top_news_child
		OldApp.xslt_module_middle = App.xslt_module_news_middle 
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'Detail/' + e + 'Other) > 0">\n' + OldApp.xslt_module_top_article
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section
	} else if (e.toLowerCase() === 'zone') {
		before_prefix = '<!--Title-->\n<caption>\n<h1 class="title">\n<xsl:value-of select="/XXXList/ModuleTitle"></xsl:value-of>\n</h1>\n</caption>\n'
		OldApp.xslt_module_middle = App.xslt_module_zone_middle 
		OldApp.xslt_module_child_middle = App.xslt_module_child_zone_details_middle
		before_prefix_all = OldApp.xslt_module_top_section + before_prefix + '<xsl:if test="count(/' + e + 'List/' + e + ') > 0">\n' + OldApp.xslt_module_top_article
		after_prefix_all = '\n' + OldApp.xslt_module_bottom_article + '</xsl:if>' + '\n' + OldApp.xslt_module_bottom_section
	} 
	// Begin build
	cm = OldApp.xslt_top + OldApp.xslt_module_top + before_prefix_all + OldApp.xslt_module_middle + after_prefix_all + OldApp.xslt_module_bottom + OldApp.xslt_module_top_child + OldApp.xslt_module_child_middle + OldApp.xslt_module_bottom_child + after_prefix + OldApp.xslt_bottom;
	editor.setValue(cm.replace(rep, e).replace(repY, e.toLowerCase()).replace(repX, 'News').replace(repM, 'News'));
	editor.refresh();
	inDents() 
	$('#modules').attr('disabled', 'disabled')
}
function __insertTemplateNewValue(e, m, n) {
	var cm = ''
	var rep = new RegExp('XXX', 'g');
	var repX = new RegExp('News-Advanced', 'g');
	if (n === '') {
		cm = '<!--Value of '+m+'-->\n' + e
	} else {
		cm = '<!--' + n.replace(rep, ModuleChoose.replace(repX, 'News')) +'-->\n' + e
	}
	insertText(cm.replace(rep, ModuleChoose.replace(repX, 'News')) + '\n')
}
function __insertTemplateElms(e) {
	var cm = ''
	var rep = new RegExp('XXX', 'g');
	cm = '<!--Elements XXX-->\n<' + e + '></' + e + '>'
	insertText(cm.replace(rep, e))
}

function __insertTemplateAttr(e) {
	var cm = ''
	var rep = new RegExp('XXX', 'g');
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
	} else if (e === 'class') {
		cm = App.xslt_attr_top + App.xslt_class + App.xslt_attr_bottom
	} else if (e === 'id') {
		cm = App.xslt_attr_top + App.xslt_id + App.xslt_attr_bottom
	} else if (e === 'class-active') {
		cm = '<xsl:if test="IsActive=\'true\'">\n' + App.xslt_attr_top + App.xslt_class_active + App.xslt_attr_bottom +'\n</xsl:if>'
		e = 'class'
	}
	insertText(cm.replace(rep, e) + '\n')
}

function convertHTML(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
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
	$('#code').html(App.note)
	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode: "text/x-markdown",
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
		styleActiveLine: true,
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
		lint: true,
		hintOptions: { schemaInfo: tags }
	});
	$('#modules').on('change', function (e) {
		var repY = new RegExp('News-Details', 'g');
		var repX = new RegExp('News-Advanced', 'g');
		ModuleChoose = e.target.value
		editor.setOption("mode", 'xml');
		changeX(ModuleChoose.replace(repX, 'News').replace(repY, 'News'))
		__buildModule(ModuleChoose)
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
		var od = $(this).parents('.cnt')
		var data = escapeHtml($(od).find('.dropdown-item').attr('data-set'))
		$(od).find('.dropdown-item').html(data)
		$(od).find('.dropdown-menu').toggleClass('active')
	})
	$('.dropdown-item').click(function(){
		$(this).parents('.dropdown-menu').toggleClass('active')
	})
});

function ___ReadyAdd() {
	$('.d-none').removeClass('d-none')
	$(window).bind('beforeunload', function () {
		return 'Bạn có muốn thoát trang ngay bây giờ?';
	});
	$('.body-control').addClass('active')
}

$('.dropdown-item').on('click', function (e) {
	var getval = $(this).attr('data-set')
	var getcomment = $(this).attr('data-comment')
	var m = $(this).parents('.cnt').find('.val').text()
	__insertTemplateNewValue(getval, m, getcomment)
})

$('#indent').on('click', function (e) {
	e.preventDefault();
	inDents() 
})
$('#convert').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('is-warning')
	$('#box-convert').toggleClass('active')
	$('#outputdata').val(convertHTML($('#inputdata').val().trim()))
	$('#outputdataurl').val(encodeURIComponent($('#inputdataurl').val().trim()))
})
$('#doconvert').on('click', function (e) {
	e.preventDefault();
	$('#outputdata').val(convertHTML($('#inputdata').val().trim()))
})
$('#doconverturl').on('click', function (e) {
	e.preventDefault();
	$('#outputdataurl').val(encodeURIComponent($('#inputdataurl').val().trim()))
})

$("#charInfoButton").click(function () {

	var character = $("#character").val().trim();
	if (!character) {
		return;
	}
	var decimal = character.charCodeAt(0);
	var octal = decimal.toString(8);
	var hex = decimal.toString(16);
	$("#decValue").val(decimal);
	$("#octValue").val(octal);
	$("#hexValue").val("0x" + hex);
	$("#uniValue").val("U+" + hex);
	var escUni = "" + hex;
	while (escUni.length < 4) {
		escUni = "0" + escUni;
	}
	$("#escUniValue").val("\\u" + escUni);
	$("#htmlValue").val("&#" + decimal + ";");

});

function changeX(u) {
	$('.dropdown-item').each(function () {
		var old = $(this).attr('old-data-set')
		var elm = $(this).attr('data-set')
		var rep = new RegExp('XXX', 'g');
		var re = new RegExp(old, 'g');
		if (old === '') {
			$(this).attr('old-data-set', u)
			$(this).attr('data-set', elm.replace(rep, u))
		} else {
			$(this).attr('old-data-set', u)
			$(this).attr('data-set', elm.replace(re, u))
		}
	})
}
function inDents() {
	var cm = $(".CodeMirror")[0].CodeMirror;
	var doc = cm.getDoc();
	editor.operation(function () {
		for (var i = 0; i < doc.size; ++i) {
			editor.indentLine(i, "smart");
		}
	});
}