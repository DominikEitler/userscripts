// ==UserScript==
// @name        SkipTuwel
// @namespace   Violentmonkey Scripts
// @match       https://tuwel.tuwien.ac.at/login/index.php
// @grant       none
// @version     1.1
// @author      Dominik Eitler
// @description skips TUWEL landing page and redirects to TU SSO if not signed in
// ==/UserScript==

const href = "https://tuwel.tuwien.ac.at/auth/saml2/login.php";

setTimeout(() => {
  document.querySelector(`[href="${href}"]`).click();
}, 200);
