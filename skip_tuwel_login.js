// ==UserScript==
// @name        Skip TUWEL
// @namespace   Violentmonkey Scripts
// @match       https://tuwel.tuwien.ac.at/
// @include     https://tuwel.tuwien.ac.at/auth/zid/index.php*
// @match       https://tuwel.tuwien.ac.at/theme/university_boost/login/index.php*
// @grant       none
// @version     1.0
// @author      Dominik Eitler
// @description skips TUWEL landing page and redirects to TU SSO if not signed in
// ==/UserScript==


(() => {
    'use strict';
    setTimeout(() => {
        document.querySelector('[href="https://tuwel.tuwien.ac.at/auth/saml2/login.php"]').click();
    }, 200);
})();