/*
 * Created by Danil on 26.04.2018.
 * Qoobeo Loader
 * Display none after loading some content
 *
 */

/*
 * 1. Creating elements
 * 2. Adding animation to page
 * 3. Adding of event listeners
 * 4. Remove animation after page load
 *
 */


var __QL_isLoad; // if true, then remove Loader
var __QL_simpleLoad; // if false, then remove Loader manualy in your own place
//__QL_simpleLoad = false;

function removeLoader() {
    var qsvglWrap = document.querySelector('.qsvgl-wrapper');
    if (qsvglWrap != null) { // if exist
        //console.log('now we remove loader');

        qsvglWrap.className += " removed";
        setTimeout(function () {
            document.body.removeChild(qsvglWrap);
            qsvglWrap = null;
        }, 800);
    }
}

function showLoader(param) {
    //console.log('create loader now');
    __QL_addLogo(param);
}

function __QL_addLogo(param) {
    __QL_addElement('div', 'qsvgl-wrapper', document.body, 'before');
    var qsvglWrap = document.querySelector('.qsvgl-wrapper');

    if (param) {
        var tmp = qsvglWrap.getAttribute('class');
        tmp += " " + param;
        qsvglWrap.setAttribute('class', tmp);
    }

    __QL_addElement('div', 'qsvgl test2', qsvglWrap);
    var qsvgl = document.querySelector('.qsvgl');
    __QL_addElement('div', 'qsvgl-text', qsvglWrap);
    var qsvglText = document.querySelector('.qsvgl-text');
    qsvglText.textContent = 'Loading';
    __QL_addElement('div', 'qsvgl-textDots', qsvglText);
    var qsvglTextDots = document.querySelector('.qsvgl-textDots');
    qsvglTextDots.textContent = '...';

    __QL_addElement('div', 'line top_left', qsvgl);
    __QL_addElement('div', 'line top_right', qsvgl);
    __QL_addElement('div', 'line right', qsvgl);
    __QL_addElement('div', 'line mid_right', qsvgl);
    __QL_addElement('div', 'line mid', qsvgl);
    __QL_addElement('div', 'line bot_right', qsvgl);
    __QL_addElement('div', 'line bot_left', qsvgl);
    __QL_addElement('div', 'line mid_left', qsvgl);
    __QL_addElement('div', 'line left', qsvgl);
}

function __QL_addElement(tag, className, place = document.body, before) {
    var el = document.createElement(tag);
    el.setAttribute('class', className);
    if (before) {
        document.body.insertBefore(el, place.firstChild);
    }
    else {
        place.appendChild(el);
    }
}

(function () {
    __QL_addLogo("whiteBg");

    window.addEventListener('load', function (){
        console.info('Window is load. If you still see loader, then you dont start remove function. The __QL_simpleLoad is: ' + __QL_simpleLoad);
        // You need to call removeLoader in your own place, at the end of loading
        if (__QL_simpleLoad !== false) {
            setTimeout(removeLoader, 400);
        }
    });

    document.addEventListener('DOMContentLoaded', function (){
        console.info('DOM готов к работе');
    });

})();

