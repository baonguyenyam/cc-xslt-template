var editor;
var ModuleChoose = ''
var elmught = '' +
	'\n' +
	'.$$$$$$\\...$$$$$$\\..$$\\...$$\\.$$\\...$$\\..$$$$$$\\...$$$$$$\\..$$\\......$$\\\n' +
	'$$..__$$\\.$$..__$$\\.$$$\\..$$.|$$.|..$$.|$$..__$$\\.$$..__$$\\.$$$\\....$$$.|\n' +
	'$$./..\\__|$$./..$$.|$$$$\\.$$.|$$.|..$$.|$$./..\\__|$$./..$$.|$$$$\\..$$$$.|\n' +
	'$$.|......$$$$$$$$.|$$.$$\\$$.|$$$$$$$$.|$$.|......$$$$$$$$.|$$\\$$\\$$.$$.|\n' +
	'$$.|......$$..__$$.|$$.\\$$$$.|$$..__$$.|$$.|......$$..__$$.|$$.\\$$$..$$.|\n' +
	'$$.|..$$\\.$$.|..$$.|$$.|\\$$$.|$$.|..$$.|$$.|..$$\\.$$.|..$$.|$$.|\\$../$$.|\n' +
	'\\$$$$$$..|$$.|..$$.|$$.|.\\$$.|$$.|..$$.|\\$$$$$$..|$$.|..$$.|$$.|.\\_/.$$.|\n' +
	'.\\______/.\\__|..\\__|\\__|..\\__|\\__|..\\__|.\\______/.\\__|..\\__|\\__|.....\\__|\n' +
	'';
var App = {
	master: '&lt;%@ Master Language="C#" AutoEventWireup="true" CodeBehind="~/App_MasterPages/layout.Master.cs" Inherits="CanhCam.Web.layout" %&gt;\n&lt;!--\n/////////////////////////////////////////////////////////////////////////\n'+
		elmught
	+'\nCanh Cam - the best Web Solutions Provider - http://www.canhcam.vn\n156 Nguyen Van Thu, District 1, Ho Chi Minh City, Viet Nam.\nPhone: (+84) 8 38238364 – Fax: (+84) 8 38238365 - Email: info@canhcam.vn\nFacebook: https://fb.com/canhcam.vn\n\n/////////////////////////////////////////////////////////////////////////\n--&gt;\n&lt;!DOCTYPE html&gt;\n&lt;html id="Html1" runat="server"&gt;\n\n&lt;head id="Head1" runat="server"&gt;\n&lt;title&gt;&lt;/title&gt;\n&lt;portal:MetaContent ID="MetaContent" runat="server" /&gt;\n&lt;!-- ////////////// Favicon ////////////// --&gt;\n&lt;link rel="apple-touch-icon" sizes="57x57" href="favicon/apple-icon-57x57.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="76x76" href="favicon/apple-icon-76x76.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="120x120" href="favicon/apple-icon-120x120.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="144x144" href="favicon/apple-icon-144x144.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png"&gt;\n&lt;link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png"&gt;\n&lt;link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png"&gt;\n&lt;link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"&gt;\n&lt;link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png"&gt;\n&lt;link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"&gt;\n&lt;link rel="manifest" href="favicon/manifest.json"&gt;\n&lt;meta name="msapplication-TileColor"&gt;\n&lt;meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png"&gt;\n&lt;meta name="theme-color"&gt;\n&lt;!-- ////////////// Mobile title color ////////////// --&gt;\n&lt;meta name="theme-color" content="#000000"&gt;\n&lt;meta name="msapplication-navbutton-color" content="#000000"&gt;\n&lt;meta name="apple-mobile-web-app-status-bar-style" content="#000000"&gt;\n&lt;!-- ////////////// Responsive Config ////////////// --&gt;\n&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"&gt;\n&lt;meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"&gt;\n&lt;meta name="format-detection" content="telephone=no"&gt;\n&lt;meta name="msapplication-tap-highlight" content="no"&gt;\n&lt;meta name="apple-mobile-web-app-capable" content="yes"&gt;\n&lt;!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries--&gt;\n&lt;!-- WARNING: Respond.js doesn\'t work if you view the page via file://--&gt;\n&lt;!--if lt IE 9\nscript(src=\'//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js\')\nscript(src=\'//oss.maxcdn.com/respond/1.4.2/respond.min.js\')\n--&gt;\n&lt;style&gt;.fancybox-type-iframe{min-height:560px;z-index:9999;background:#fff;box-shadow:0 0 6px rgba(0,0,0,.5);border-radius:3px}.fancybox-type-iframe .fancybox-skin, .fancybox-outer, .fancybox-inner{min-height:560px;}.fancybox-type-iframe iframe{width:100%;min-height:560px}.cmsadminpanel .canhcamcmslistmenu{margin:0;padding:0;display:flex;align-items:center;justify-content:center;}.cmsadminpanel .canhcamcmslistmenu li{list-style-type:none}.cmsadminpanel .canhcamcmslistmenu li a{border:0;text-decoration:none}.cmsadminpanel .canhcamcmslistmenu li a:hover,.cmsadminpanel .canhcamcmslistmenu li a:focus{background:none}.cmsadminpanel .canhcamcmslistmenu .ddviewmode{margin-top:0}@media only screen and (max-width:700px) {.cmsadminpanel .canhcamcmslistmenu{flex-direction:column}}&lt;/style&gt;\n&lt;portal:ScriptLoader ID="ScriptLoader1" runat="server" IncludejQueryUICore="true" IncludeFancyBox="false" /&gt;\n&lt;portal:StyleSheetCombiner ID="StyleSheetCombiner" runat="server" IncludejQueryUI="false" JQueryUIThemeName="smoothness"/&gt;\n&lt;portal:GoogleAnalyticsScript ID="GoogleAnalyticsScript1" runat="server" /&gt;\n&lt;/head&gt;\n&lt;body id="Body" runat="server" class="canhcam"&gt;\n&lt;div id="top-page"&gt;&lt;/div&gt;\n&lt;portal:FacebookSdk ID="fbsdk" runat="server" /&gt;\n&lt;portal:LayoutDisplaySettings ID="LayoutDisplaySettings1" runat="server" /&gt;\n&lt;form id="frmMain" runat="server"&gt;\n&lt;asp:SiteMapDataSource ID="SiteMapData" runat="server" ShowStartingNode="false" /&gt;\n&lt;asp:SiteMapDataSource ID="PageMapDataSource" runat="server" ShowStartingNode="false" /&gt;\n&lt;asp:SiteMapDataSource ID="ChildPageSiteMapData" runat="server" ShowStartingNode="false" /&gt;\n&lt;asp:ScriptManager ID="ScriptManager1" EnablePageMethods="true" runat="server" /&gt;\n&lt;!-- ////////////// Header ////////////// --&gt;\n&lt;div id="wrapper"&gt;\n&lt;header&gt;\n&lt;portal:SiteLogo ID="SiteLogo1" runat="server" /&gt;\n&lt;portal:SearchInput ID="SearchInput1" CssClass="search" runat="server" /&gt;\n&lt;portal:LanguageSelector ID="LanguageSelector1" XsltFileName="Language.xslt" ShowActive="true" runat="server" /&gt;\n&lt;asp:Panel ID="divAlt1" runat="server" CssClass="altcontent1"&gt;\n&lt;asp:ContentPlaceHolder ID="altContent1" runat="server"&gt;\n&lt;/asp:ContentPlaceHolder&gt;\n&lt;/asp:Panel&gt;\n&lt;/header&gt;\n&lt;!-- ////////////// End Header ////////////// --&gt;\n&lt;!-- ////////////// Main ////////////// --&gt;\n&lt;main&gt;\n&lt;asp:Panel ID="divLeft" runat="server" CssClass="leftside" Visible="True" SkinID="pnlPlain"&gt;\n&lt;asp:ContentPlaceHolder ID="leftContent" runat="server"&gt;\n&lt;/asp:ContentPlaceHolder&gt;\n&lt;/asp:Panel&gt;\n&lt;asp:Panel ID="divCenter" runat="server" Visible="True" CssClass="center-rightandleftmargins" SkinID="pnlPlain"&gt;\n&lt;asp:ContentPlaceHolder ID="mainContent" runat="server"&gt;\n&lt;/asp:ContentPlaceHolder&gt;\n&lt;/asp:Panel&gt;\n&lt;asp:Panel ID="divRight" runat="server" Visible="True" CssClass="rightside" SkinID="pnlPlain"&gt;\n&lt;asp:ContentPlaceHolder ID="rightContent" runat="server"&gt;\n&lt;/asp:ContentPlaceHolder&gt;\n&lt;/asp:Panel&gt;\n&lt;/main&gt;\n&lt;!-- ////////////// End Main ////////////// --&gt;\n&lt;!-- ////////////// Footer ////////////// --&gt;\n&lt;footer&gt;\n&lt;asp:Panel ID="divAltContent2" runat="server" CssClass="altcontent2"&gt;\n&lt;asp:ContentPlaceHolder ID="altContent2" runat="server"&gt;&lt;/asp:ContentPlaceHolder&gt;\n&lt;/asp:Panel&gt;\n&lt;/footer&gt;\n&lt;/div&gt;\n&lt;!-- ////////////// End Footer ////////////// --&gt;\n&lt;portal:AutoHidePanel ID="ah1" CssClass="cmsadminpanel" runat="server"&gt;\n&lt;div class="row"&gt;\n&lt;div class="col-lg-12"&gt;\n&lt;nav&gt;\n&lt;ul class="canhcamcmslistmenu listmenu"&gt;\n&lt;portal:AdminMenuLink ID="lnkDashboard" IconCssClass="fa fa-key" RenderAsListItem="true" runat="server" /&gt;\n&lt;portal:FileManagerLink ID="lnkFileManager" IconCssClass="fa fa-folder-open" RenderAsListItem="true" runat="server" /&gt;\n&lt;portal:PageEditFeaturesLink ID="lnkPageContent" IconCssClass="fa fa-cog" RenderAsListItem="true" runat="server" /&gt;\n&lt;portal:PageEditSettingsLink ID="lnkPageSettings" IconCssClass="fa fa-edit" RenderAsListItem="true" runat="server" /&gt;\n&lt;portal:NewZoneLink ID="lnkNewZone" IconCssClass="fa fa-file" RenderAsListItem="true" runat="server" /&gt;\n&lt;portal:ZoneEditSettingsLink ID="lnkZoneSettings" IconCssClass="fa fa-edit" RenderAsListItem="true" runat="server" /&gt;\n&lt;li&gt;&lt;asp:ContentPlaceHolder ID="pageEditContent" runat="server"&gt;\n&lt;/asp:ContentPlaceHolder&gt;&lt;/li&gt;\n&lt;/ul&gt;\n&lt;ul class="canhcamcmslistmenu"&gt;\n&lt;li&gt;\n&lt;a href="#" id="pullmenucms"&gt;\n&lt;i class="fa fa-chevron-circle-right"&gt;&lt;/i&gt;\n&lt;/a&gt;\n&lt;/li&gt;\n&lt;/ul&gt;\n&lt;/nav&gt;\n&lt;/div&gt;\n&lt;/div&gt;\n&lt;/portal:AutoHidePanel&gt;\n&lt;portal:Woopra ID="woopra11" runat="server" /&gt;\n&lt;/form&gt;\n&lt;!-- ////////////// Back to Top ////////////// --&gt;\n&lt;a href="#top-page" id="back-to-top" title="Back to top"&gt;\n&lt;span&gt;TOP&lt;/span&gt;\n&lt;i class="fa fa-angle-up"&gt;&lt;/i&gt;\n&lt;/a&gt;\n&lt;!-- ////////////// Javascript Include ////////////// --&gt;\n&lt;script src="/Data/Sites/1/skins/default/js/core.js?v=1.0.0"&gt;&lt;/script&gt;\n&lt;script src="/Data/Sites/1/skins/default/js/plugins.js?v=1.0.0"&gt;&lt;/script&gt;\n&lt;script src="/Data/Sites/1/skins/default/js/app.js?v=1.0.0"&gt;&lt;/script&gt;\n&lt;script type="text/javascript"&gt;\nfunction HideToolbar() { $(".cmsadminpanel").addClass("toggled"), $(".fa-chevron-circle-right").addClass("fa-rotate-180") } function ShowToolbar() { $(".cmsadminpanel").removeClass("toggled"), $(".fa-chevron-circle-right").removeClass("fa-rotate-180") } $(document).ready(function () { $("#pullmenucms").click(function (o) { o.preventDefault(), $(this).parents(".cmsadminpanel").hasClass("toggled") ? (ShowToolbar(), Set_Cookie("toolbarOpenState", "open")) : (HideToolbar(), Set_Cookie("toolbarOpenState", "closed")) }); var o = Get_Cookie("toolbarOpenState"); null != o && ("closed" == o && HideToolbar(), "open" == o && ShowToolbar()) });\n&lt;/script&gt;\n&lt;/body&gt;\n\n&lt;/html&gt;',
	xslt_top: '<?xml version="1.0" encoding="utf-8"?>\n<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" exclude-result-prefixes="msxsl">\n<xsl:output method="html" indent="yes"/>\n\n',
	xslt_bottom: '</xsl:stylesheet>',
	xslt_module_top: '<!--Begin XXX-->\n<xsl:template match="/">\n',
	xslt_module_top_section: '<section class="canhcam-YYY-1">\n',
	xslt_module_top_article: '<article class="list-items">\n',
	xslt_module_middle: '<!--Call XXX Child-->\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>',
	xslt_module_zone_middle: '<!--Call XXX Child-->\n<nav>\n<ul>\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>\n</ul>\n</nav>',
	xslt_module_language_middle: '<!--Call XXX Child-->\n<ul>\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>\n</ul>',
	xslt_module_menu_middle: '<!-- Call Menu Items -->\n<ul class="navbar-nav">\n<xsl:apply-templates select="/XXXList/XXX"></xsl:apply-templates>\n</ul>',
	xslt_module_news_middle: '<!--Call XXX Child-->\n<xsl:apply-templates select="/XXXDetail/XXXOther"></xsl:apply-templates>',
	xslt_module_bottom: '</xsl:template>\n\n',
	xslt_module_bottom_section: '</section>\n',
	xslt_module_bottom_article: '</article>\n',
	xslt_module_top_child: '<!--Begin XXX Child-->\n<xsl:template match="XXX">\n',
	xslt_module_top_news_child: '<!--Begin XXX Other Child-->\n<xsl:template match="XXXOther">\n',
	xslt_module_child_middle: '<!--item-->\n<div class="item">\n<xsl:attribute name="bg-img">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<!--image-->\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</xsl:attribute>\n</img>\n<!--link-->\n<xsl:if test="Url != \'\'">\n<a>\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="/XXXList/ViewMore"></xsl:value-of>\n</a>\n</xsl:if>\n</div>\n',
	xslt_module_child_menu_details_middle: '<!--item-->\n<li class="nav-item">\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>nav-item active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:if test="count(XXX) > 0">\n<xsl:attribute name="class">\n<xsl:text>nav-item dropdown</xsl:text>\n</xsl:attribute>\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>nav-item dropdown active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n</xsl:if>\n<a class="nav-link">\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>nav-link active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<!-- Dropdown -->\n<xsl:if test="count(XXX) > 0">\n<!-- Nếu trang được chọn mở với thuộc tính target thì sẽ bật menu khi hover -->\n<xsl:if test="Url != \'#\'">\n<xsl:attribute name="dropdown-type">\n<xsl:text>hover</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:if test="Url = \'#\'">\n<xsl:attribute name="data-toggle">\n<xsl:text>dropdown</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:attribute name="class">\n<xsl:text>nav-link dropdown-toggle</xsl:text>\n</xsl:attribute>\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>nav-link dropdown-toggle active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:attribute name="id">\n<xsl:text>itemMenuDropdown-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="role">\n<xsl:text>button</xsl:text>\n</xsl:attribute>\n<xsl:attribute name="aria-haspopup">\n<xsl:text>true</xsl:text>\n</xsl:attribute>\n<xsl:attribute name="aria-expanded">\n<xsl:text>false</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<!-- URL -->\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</a>\n<!--Call Sub Menu-->\n<xsl:if test="count(XXX) > 0">\n<div class="dropdown-menu">\n<xsl:apply-templates select="XXX" mode="Child"></xsl:apply-templates>\n</div>\n</xsl:if>\n</li>\n',
	xslt_module_child_language_details_middle: '<!--item-->\n<li class="item">\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>item active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<!-- URL -->\n<a>\n<!-- Active -->\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="title">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n<img>\n<xsl:attribute name="src">\n<xsl:value-of select="ImageUrl"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="alt">\n<xsl:value-of select="Title"></xsl:value-of>\n</xsl:attribute>\n</img>\n<span><xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of></span>\n</a>\n</li>\n',
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
	var repU = new RegExp('Menu-Header', 'g');
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
	} else if (e.toLowerCase() === 'language') {
		OldApp.xslt_module_middle = App.xslt_module_language_middle
		OldApp.xslt_module_child_middle = App.xslt_module_child_language_details_middle
		before_prefix_all = ''
		after_prefix_all = '\n'
	} else if (e.toLowerCase() === 'menu-header') {
		after_prefix = '<!-- Child -->\n<xsl:template match="XXX" mode="Child">\n<a class="dropdown-item">\n<xsl:if test="IsActive=\'true\'">\n<xsl:attribute name="class">\n<xsl:text>dropdown-item active</xsl:text>\n</xsl:attribute>\n</xsl:if>\n<xsl:attribute name="aria-labelledby">\n<xsl:text>itemMenuDropdown-</xsl:text>\n<xsl:value-of select="position()"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="href">\n<xsl:value-of select="Url"></xsl:value-of>\n</xsl:attribute>\n<xsl:attribute name="target">\n<xsl:value-of select="Target"></xsl:value-of>\n</xsl:attribute>\n<xsl:value-of select="Title" disable-output-escaping="yes"></xsl:value-of>\n</a>\n</xsl:template>\n\n'
		OldApp.xslt_module_middle = App.xslt_module_menu_middle
		OldApp.xslt_module_child_middle = App.xslt_module_child_menu_details_middle
		before_prefix_all = ''
		after_prefix_all = '\n'
	}
	// Begin build
	cm = OldApp.xslt_top + OldApp.xslt_module_top + before_prefix_all + OldApp.xslt_module_middle + after_prefix_all + OldApp.xslt_module_bottom + OldApp.xslt_module_top_child + OldApp.xslt_module_child_middle + OldApp.xslt_module_bottom_child + after_prefix + OldApp.xslt_bottom;
	editor.setValue(cm.replace(rep, e).replace(repY, e.toLowerCase()).replace(repX, 'News').replace(repM, 'News').replace(repU, 'Zone'));
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
	$('#code').html(App.master)
	editor = CodeMirror.fromTextArea(document.getElementById("code"), {
		mode: "application/x-ejs",
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
	inDents()
	$('#modules').on('change', function (e) {
		var repY = new RegExp('News-Details', 'g');
		var repX = new RegExp('News-Advanced', 'g');
		var repU = new RegExp('Menu-Header', 'g');
		ModuleChoose = e.target.value
		editor.setOption("mode", 'xml');
		changeX(ModuleChoose.replace(repX, 'News').replace(repY, 'News').replace(repU, 'Zone'))
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