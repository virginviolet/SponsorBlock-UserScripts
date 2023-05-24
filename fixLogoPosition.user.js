// ==UserScript==
// @name          SB Browser navbar logo position
// @namespace     https://sb.ltn.fi
// @description   Adjusts the position of the logo image in the SB Browser navbar on sb.ltn.fi
// @version       1.0.2
// @grant         none
// @author        ChatGPT
// @match         https://sb.ltn.fi/*
// @updateURL     https://github.com/AcesFullOfKings/SponsorBlock-UserScripts/raw/main/fixLogoPosition.user.js
// @downloadURL   https://github.com/AcesFullOfKings/SponsorBlock-UserScripts/raw/main/fixLogoPosition.user.js
// @icon          https://sb.ltn.fi/static/browser/logo.png
// ==/UserScript==

(function() {
    'use strict';

    // Get the logo image element
    const logoImg = document.querySelector('.navbar-brand');

    // Adjust the logo position
    logoImg.style.marginTop = '-8px';
})();
