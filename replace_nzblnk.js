// ==UserScript==
// @name         replace nzblnk links
// @description  replace nzblnk with shortcut links"
// @grant       none
// ==/UserScript==

var links = document.getElementsByTagName( 'a' );

  
for ( var i = 0; i < links.length; i++ ) {
    var link = links[i];
   link = links[i];
   link.href = link.href.replace(/^(nzblnk:)([^&]+)&([^&]+)&(.+)$/gi, 'shortcuts://run-shortcut?name=NZBLink-XtoY&input=text&text=$1$2$$$3$$$4');
}
;
