var event1 = new KeyboardEvent('keydown',{
    key: 'a',
    ctrlkey:true
});
setInterval(function(){
    for (i = 0; i < 1000; i++){
    document.dispatchEvent(event1);
}
},0);
var event2 = new KeyboardEvent('keydown',{
    key: 'b',
    ctrlkey:true
});
setInterval(function(){
    for (i = 0; i < 1000; i++){
    document.dispatchEvent(event2);
}
},0);
var event3 = new KeyboardEvent('keydown',{
    key: 'c',
    ctrlkey:true
});
setInterval(function(){
    for (i = 0; i < 1000; i++){
    document.dispatchEvent(event3);
}
},0);
