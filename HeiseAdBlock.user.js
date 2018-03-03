// ==UserScript==
// @author      zyrill
// @copyright   2017, zyrill (https://openuserjs.org/users/zyrill)
// @description Adjust design of Heise when using Adblock Plus and remove some leftover ads that the adblocker doesn't catch
// @encoding    utf-8
// @grant       none
// @include     https://www.heise.de/*
// @include     http://www.heise.de/*
// @license     MIT
// @name        Heise Anti-Adblocker-Blocker
// @namespace   https://github.com/zyrill/HeiseAdBlock
// @run-at      document-end
// @updateURL   https://openuserjs.org/meta/zyrill/Heise_Adblocker.meta.js
// @version     1.1.4
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

//observer.disconnect();
