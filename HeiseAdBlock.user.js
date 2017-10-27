// ==UserScript==
// @name        Heise Adblocker
// @namespace   https://github.com/zyrill/HeiseAdBlock
// @description Adjusts design of Heise when using Adblock Plus
// @author      zyrill
// @include     https://www.heise.de/*
// @include     http://www.heise.de/*
// @encoding    utf-8
// @description Remove some leftover ads that the adblocker doesn't catch
// @grant       none
// @run-at      document-idle
// @version     1.0.2
// ==/UserScript==

document.getElementById("container_content").style.top="0px";
document.getElementById("mitte_links").style.width="100%";
