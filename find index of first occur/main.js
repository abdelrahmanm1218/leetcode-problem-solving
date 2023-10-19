var strStr = function(haystack, needle) {
    if(haystack.includes(needle)){
        let k = haystack.match(needle);
        // console.log(k['index']);
        return k['index'];
    }
    else {
        return -1;
    }
};


var k = strStr("sadtapsad",'sad');
console.log(k);
var k = strStr("tapsad",'sad');
console.log(k);
var k = strStr("astamasadmas",'mas');
console.log(k);
var k = strStr('abdelrahmanmahmoud','abdelrahman');
console.log(k);
var k = strStr('mahmoudabdelrahman','abdelrahman');
console.log(k);
var k = strStr('mahmoudabdelrahman','hanafi');
console.log(k);
// console.log(k);
