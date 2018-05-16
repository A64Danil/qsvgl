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

function removeLoader() {
    var qsvglWrap = document.querySelector('.qsvgl-wrapper');
    if (qsvglWrap != null) {
        //console.log('now we remove loader');

        qsvglWrap.className += " removed";
        setTimeout(function () {
            document.body.removeChild(qsvglWrap);
            qsvglWrap = null;
        }, 1100);
    }
}

function showLoader(param) {
    console.log('create loader now');
    addLogo(param);
}

function addLogo(param) {
    addElement('div', 'qsvgl-wrapper', document.body, 'before');
    var qsvglWrap = document.querySelector('.qsvgl-wrapper');

    if (param) {
        var tmp = qsvglWrap.getAttribute('class');
        tmp += " " + param;
        qsvglWrap.setAttribute('class', tmp);
    }

    addElement('div', 'qsvgl test2', qsvglWrap);
    var qsvgl = document.querySelector('.qsvgl');
    addElement('div', 'qsvgl-text', qsvglWrap);
    var qsvglText = document.querySelector('.qsvgl-text');
    qsvglText.textContent = 'Loading';
    addElement('div', 'qsvgl-textDots', qsvglText);
    var qsvglTextDots = document.querySelector('.qsvgl-textDots');
    qsvglTextDots.textContent = '...';

    addElement('div', 'line top_left', qsvgl);
    addElement('div', 'line top_right', qsvgl);
    addElement('div', 'line right', qsvgl);
    addElement('div', 'line mid_right', qsvgl);
    addElement('div', 'line mid', qsvgl);
    addElement('div', 'line bot_right', qsvgl);
    addElement('div', 'line bot_left', qsvgl);
    addElement('div', 'line mid_left', qsvgl);
    addElement('div', 'line left', qsvgl);
}

function addElement(tag, className, place = document.body, before) {
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
    addLogo("whiteBg");

    window.addEventListener('load', function (){
        console.log('типа всё загрузилось');
        // You need to call removeLoader in your own place, at the end of loading
        setTimeout(removeLoader, 1000);
    });

    document.addEventListener('DOMContentLoaded', function (){
        console.log('DOM готов к работе');
    });

})();

