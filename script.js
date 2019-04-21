let arr = [];
for (let i = 0;i<100;i++){
    arr[arr.length] = Math.floor(Math.random()*101);
}
arr.sort(function (a, b) {
    return a - b;

});
let a ='';
for (let i = 0,j=1;i<arr.length && j<=10;i++,j++){
    a+=arr[i]+' ';
    if (j===10) {
        a+='</br>';
        j=1
    }
}
document.getElementById('arr').innerHTML = a;
function timkiemtuyentinh() {
    let b = Number(document.getElementById('number').value);
    for (let i = 0; i < arr.length; i++) {
        if (b === arr[i]) {
            alert(b + ' Có trong mảng ');
        }
    }
 }
function timkiemnhiphan() {
    let c = parseInt(document.getElementById('number').value);
    let min  = 0;
    let max = arr.length -  1;
    let r = parseInt((min + max)/2);
    while (c !== arr[r] ) {
        if (c < arr[min] || c > arr[max] )
        {
            alert(c + " Số bạn nhập không có trong mảng") ;
            break;
        }
        if (c > arr[r]){
            min = r + 1 ;
            r = parseInt((max + min)/2);
        }if (c<arr[r]) {
            max = r -1;
            r = parseInt((max + min)/2);
        }
    }
    if (c === arr[r]) {
        alert(c + ' Có trong mảng');
    }
    return arr;
}







