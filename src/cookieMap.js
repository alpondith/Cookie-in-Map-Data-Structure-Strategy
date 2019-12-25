/*
* Available Methods Are given Below:
*
* addObjectToCookie(key, object);
* deleteObjectFromCookie(key);
* updateObjectOfCookie(key, newObject);
* resetCookie();
*
* To read the all the cookie data call 'cookieMap' and for deep data reading use Javascript Map default functions.
* for example:
*
* cookieMap.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
* cookieMap.has(key) – returns true if the key exists, false otherwise.
* cookieMap.size – returns the current element count.
* other reading strategy is give below part of the code as example.
*
*
*
* important Links:
* https://javascript.info/map-set
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
* https://www.w3schools.com/js/js_cookies.asp
* https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username
* */




let cookieMap = new Map();
let cookieName = 'ecommerceCookie';
let cookieExpireDays = 7;


/*methods started from w3schools*/
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*methods ended from w3schools*/



function addObjectToCookie(key , obj) {
    if (typeof(key) == "number"){
        key = key.toString()
    }
    cookieMap.set(key,obj);
    updateCookieFromMap();
    reloadMapFromCookie();
}

function deleteObjectFromCookie(key) {
    if (typeof(key) == "number"){
        key = key.toString()
    }
    if (cookieMap.has(key)){
        cookieMap.delete(key);
        updateCookieFromMap();
        reloadMapFromCookie();
    }
}

function updateObjectOfCookie(key, newObject){
    if (typeof(key) == "number"){
        key = key.toString()
    }
    if (cookieMap.has(key)){
        cookieMap.delete(key);
        cookieMap.set(key,newObject);
        updateCookieFromMap();
        reloadMapFromCookie();
    }
}

function resetCookie () {
    cookieMap.clear();
    updateCookieFromMap();
    reloadMapFromCookie();
}

function updateCookieFromMap() {
    if (cookieMap.size !== 0){
        var convertedObjects = Object.fromEntries(cookieMap);
        var convertedString= JSON.stringify(convertedObjects);
        setCookie(cookieName, convertedString ,cookieExpireDays);
    }
    else {
        setCookie(cookieName, '' , cookieExpireDays);
    }
}



function reloadMapFromCookie() {
    var stringValueOfMap = getCookie(cookieName)
    //if length is 0 that means initial stage. so no need to json parse.
    if (stringValueOfMap.length!==0){
        var objectValueOfMap = JSON.parse(stringValueOfMap);
        cookieMap = new Map( (Object.entries(objectValueOfMap) ) );
    }
}


function checkCookie() {
    //cookieStatus holds -1 or 0. if cookieName exists then it returns 0. if cookieName Does not exists then it returns -1;
    var cookieStatus = document.cookie.indexOf(cookieName);
    if ( cookieStatus === -1 ){
        //no cookie found
        setCookie(cookieName ,  '', cookieExpireDays );
    }
    else {
        //cookie found
        reloadMapFromCookie();
    }
}

checkCookie();


/*you can test from your own here*/





/*Here is some Practice Example*/

/*add
while reading always use key in String format
while adding object key is always converted to string internally
*/
/*resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
var person2 ={"firstName":"B", "lastName":"BB", "age":20};
var person3 ={"firstName":"C", "lastName":"CC", "age":30};
var person4 ={"firstName":"D", "lastName":"DD", "age":40};
addObjectToCookie(1, person1);
addObjectToCookie("2", person2);
addObjectToCookie(33, person3);
addObjectToCookie('player', person4);
console. log("After adding object : ");
console. log(cookieMap);*/


/*read
while reading always use key in String format
while adding object key is always converted to string internally
*/
/*console.log('Get Object specific value against a key : firstName is ' + cookieMap.get("33").firstName);

console.log("reading all keys and Objects in array format");
for (var person of cookieMap.entries()) {
    console.log(person);
}

console.log("reading all keys");
for (var person of cookieMap.entries()) {
    console.log(person[0]);
}

console.log("reading all objects");
for (var person of cookieMap.entries()) {
    console.log(person[1]);
}

console.log("reading all objects instances ");
for (var person of cookieMap.entries()) {
    console.log("retrieving age from objects  " + person[1].age);
}*/


/*update*/
/*while reading always use key in String format */
/*while updating object key is always converted to string internally*/

/*
resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
addObjectToCookie("2", person1);
var person3 ={"firstName":"B", "lastName":"GGG", "age":60};
updateObjectOfCookie("2", person3);
console.log("After updating object : ");
console.log(cookieMap);
*/


/*Delete*/
/*while deleting always use key in String format */
/*while deleting object key is always converted to string internally*/

/*resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
addObjectToCookie("2", person1);
deleteObjectFromCookie("2");
console.log("After deleting object : ");
console.log(cookieMap);*/


/*reset*/
//resetCookie();
