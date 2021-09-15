var str = "AAAAABBCCDD";
var len = str.length-1;

var arr = [];
var couT = 1;
if(str != ""){
    for (var i=0; i <= len; i++){ 
        if(str[i] == str[i+1]){
            couT += 1;}
        else if(str[i] != str[i+1]){
                arr = arr + couT; couT = 1
               arr = arr + str[i];
        }
        else{
            couT = 1;
        }
    }
} console.log(arr);
// Output - 5A2B2C2D