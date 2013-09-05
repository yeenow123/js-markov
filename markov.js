var delimiter = ' ';

var text = "Yo how is it going how ball";

var array = text.split(delimiter);

var dict = {};
for (var i = 0; i < array.length; i++) {
    if (array[i] in dict) {
        
        dict[array[i]].push(array[i+1]);   
    }
    else {
        
        dict[array[i]] = new Array;
        dict[array[i]].push(array[i+1]);
    }
    
    
}

for (var key in dict) {
    alert(key + '\n' + dict[key]);  
}
