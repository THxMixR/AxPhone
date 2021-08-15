var event1 = new KeyboardEvent('keydown',{
    key: 'r',
    ctrlkey:true
});
setInterval(function(){
    for (i = 0; i < 1000; i++){
    document.dispatchEvent(event1);
}
},0);
var event2 = new KeyboardEvent('keydown',{
    key: 'g',
    ctrlkey:true
});
setInterval(function(){
    for (i = 0; i < 1000; i++){
    document.dispatchEvent(event2);
}
},0);
