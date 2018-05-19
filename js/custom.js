/**
 * Created by Danil on 26.04.2018.
 */

console.log('Node are working. Тест русских симовлов');
__QL_simpleLoad = false;
removeLoader();

(function () {
    function inherit(child, parent) {
        var Temp = function () {};
        Temp.prototype = parent.prototype;
        child.prototype = new Temp();
        console.log(child.constructor);
        console.log(child.prototype);
    }
    
    var F = function (name) {
        this.name = name;
    };
    F.prototype.setName = function (name) {
        this.name = name;
    }

    F.prototype.getName = function () {
        return this.name;
    }
    
    F.prototype.setAge = function (age) {
        this.age = age;
    }

    F.prototype.getAge = function () {
        return this.age;
    }

    var F2 = function (name, lastName) {
        this.name = name;
        this.lastName = lastName;
    };

    //F2.prototype = F.prototype;

    F2.prototype.getLastName = function () {
        return this.lastName;
    }

    F2.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    }

    var obj1 = new F('Анна'),
        obj2 = new F2('Данил', 'Хрущев');

    F2.prototype.smeh = "haha";

    inherit(F2, F);
    // obj1.setLastName('Хрущева');
    // console.log(obj2.getName() + " " + obj2.getLastName());
    // console.log(obj1.getName() + " " + obj1.getLastName());
    // console.log(obj2.__proto__);
    //
    // obj1.setAge(20);
    // console.log(obj1.getAge());
    // console.log(obj2.smeh);
})();