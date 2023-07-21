//problem-1//
let s="abcadeecfb";
let set = new Set();
for(let i=0; i < s.length; i++){
    set.add(s[i]);

}
let res ="";
for(let ch of set){
    res = res+ch;
}
console.log(res);

//problem-2//
let str = "abcadeecfb"
let map = new Map();
for(let i=0; i< str.length;i++){
    if(map.has(str[i])){
        let value = map.get(str[i]);
        map.set(str[i],value+1);
    }
    else{
        map.set(str[i],1)
    }
}
for(let[k,v] of map){
    console.log(k+"="+v)
}