// ==UserScript==
// @name        Skip TISS
// @namespace   Violentmonkey Scripts
// @match       https://tiss.tuwien.ac.at/*
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description skips TISS landing page and redirects to TU SSO if not signed in
// ==/UserScript==

(() => {
    'use strict';

    const x = document.getElementsByClassName("toolLogin")[0];
    if (!!x) x.click();
})();