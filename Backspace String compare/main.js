var backspaceCompare = function(s, t) {
    let finalS = [],finalT = [];
    for(let  i =0;i<s.length;i++){
        (s[i]=="#")? finalS.pop(): finalS.push(s[i]) ;
    }
    for(let  i =0;i<t.length;i++){
        console.log(t[i]);
        // (t[i]=="#")? finalT.pop(): finalT.push(t[i]);
        if(t[i]=="#"){
            finalT.pop();
        }else {
            finalT.push(t[i])
        }
    }
    console.log(finalS);
    console.log(finalT);
    let count = 0;
    if(finalS.length == finalT.length){
        for(let j=0;j<finalS.length;j++){
            if(finalS[j]==finalT[j]){
                count++;
                // console.log(`s => ${finalS[j]}, t => ${finalT[j]}`);
            }
        }
        return (count == finalS.length)? true : false;
    }
    else {
        return false;
    }
};
// var x = backspaceCompare("ab#c","ad#c");
// console.log(x);
// var x = backspaceCompare("ab##","c#d#");
// console.log(x);
// var x = backspaceCompare("a#c", "b");
// console.log(x);
var x = backspaceCompare("xywrrmp","xywrrmu#p");
console.log(x);

"xywrrmu#p"