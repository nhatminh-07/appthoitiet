// 1
let challenge = '30 Days Of JavaScript';

// 2
console.log(challenge);

// 3
console.log(challenge.length);

// 4
console.log(challenge.toUpperCase());

// 5
console.log(challenge.toLowerCase());

// 6
console.log(challenge.substring(1, s.length));

// 7
console.log(challenge.substring(3, s.length));

// 8
console.log(challenge.includes("Script"));

// 9
console.log(challenge.split());

// 10
console.log(challenge.split(" "));

// 11
let s1 = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(s1.split(", "));

// 12
console.log(challenge.replace('JavaScript', 'Python'));

// 13
console.log(challenge.charAt(15));

// 14
console.log(challenge.charCodeAt(challenge.indexOf("J")));

// 15
console.log(challenge.indexOf("a"));

// 16
console.log(challenge.lastIndexOf("a"));

// 17 and 18
let s2 = 'You cannot end a sentence with because because because is a conjunction';
console.log(s2.indexOf("because"));
console.log(s2.lastIndexOf("because"));

// 19
console.log(s2.search("because"));

// 20
s_with_space = "    I love JavaScript and programming!!!     "
console.log(s_with_space.trim());

// 21
console.log(challenge.startsWith("30"));

// 22
console.log(challenge.endsWith("t"));

// 23
var ns = 0;
var res = 0;
var str = "all days of javascript";
while (res != -1) {
    var res = str.match("a");
    if (res != -1) {
        console.log(ns + res);
        ns += res;
        str = str.substring(res, str.length);
    }
}

// 24
var ss1 = '30 Days of';
var ss2 = 'Javascript';

console.log(s1.concat(" ", s2));

// 25
console.log(challenge.repeat(2));
