
## Available Methods Are given Below:

* addObjectToCookie(key, object);
* deleteObjectFromCookie(key);
* updateObjectOfCookie(key, newObject);
* resetCookie();

To read the all the cookie data call 'cookieMap' and for deep data reading use Javascript Map default functions. for example:

* cookieMap.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
* cookieMap.has(key) – returns true if the key exists, false otherwise.
* cookieMap.size – returns the current element count.
* other reading strategy is give below part of the code as example.

important Links:
* https://javascript.info/map-set
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
* https://www.w3schools.com/js/js_cookies.asp
* https://www.w3schools.com/js/tryit.asp?filename=tryjs_cookie_username




###Here is some Practice Example

#add <br/>
while reading always use key in String format. <br/>
while adding object key is always converted to string internally. <br/>

```
resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
var person2 ={"firstName":"B", "lastName":"BB", "age":20};
var person3 ={"firstName":"C", "lastName":"CC", "age":30};
var person4 ={"firstName":"D", "lastName":"DD", "age":40};
addObjectToCookie(1, person1);
addObjectToCookie("2", person2);
addObjectToCookie(33, person3);
addObjectToCookie('player', person4);
console. log("After adding object : ");
console. log(cookieMap);
```

#read <br/>
while reading always use key in String format. <br/>
while adding object key is always converted to string internally. <br/>

```
console.log('Get Object specific value against a key : firstName is ' + cookieMap.get("33").firstName);

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
}
```

#update <br/>
while reading always use key in String format. <br/> 
while updating object key is always converted to string internally. <br/>

```
resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
addObjectToCookie("2", person1);
var person3 ={"firstName":"B", "lastName":"GGG", "age":60};
updateObjectOfCookie("2", person3);
console.log("After updating object : ");
console.log(cookieMap);
```

#Delete <br/>
while deleting always use key in String format. <br/>
while deleting object key is always converted to string internally. <br/>

```
resetCookie();
var person1 ={"firstName":"A", "lastName":"AA", "age":10};
addObjectToCookie("2", person1);
deleteObjectFromCookie("2");
console.log("After deleting object : ");
console.log(cookieMap);
```

#reset <br/>

```
resetCookie();
```
