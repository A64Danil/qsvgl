

//console.log(wrapper);

(function () {
    const wrapper = document.querySelector('.qsvgl-wrapper');
    console.log(wrapper);

    window.addEventListener('load', function (){
        console.log('типа всё загрузилось');
    });

    document.addEventListener('DOMContentLoaded', function (){
        console.log('DOM готов к работе');
    });

})();