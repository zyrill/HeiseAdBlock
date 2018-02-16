// ==UserScript==
// @name        Heise Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/HeiseAdBlock
// @description Adjusts design of Heise when using Adblock Plus
// @author      zyrill
// @include     https://www.heise.de/*
// @include     http://www.heise.de/*
// @updateURL   https://openuserjs.org/meta/zyrill/Heise_Adblocker.meta.js
// @copyright   2017, zyrill (https://openuserjs.org/users/zyrill)
// @encoding    utf-8
// @description Remove some leftover ads that the adblocker doesn't catch
// @grant       none
// @run-at      document-idle
// @license     MIT
// @version     1.1.2
// ==/UserScript==

document.getElementById("container_content").style.top="0px";
document.getElementById("mitte_links").style.width="100%";

var target = document.getElementById("mitte");
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.addedNodes !== null) {
            for (var i = 0; i < mutation.addedNodes.length; i++) {
                mutation.addedNodes[i].remove();
            }
        }
    });
});

var config = { attributes: true, childList: true, characterData: true };
if (target !== null && typeof target === 'object') {
    observer.observe(target, config);
}
