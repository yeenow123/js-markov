var delimiter = ' ';

var text = "I walked down to the station with them, and then wandered through the streets of the little town, finally returning to the hotel, where I lay upon the sofa and tried to interest myself in a yellow-backed novel. The puny plot of the story was so thin, however, when compared to the deep mystery through which we were groping, and I found my attention wander so continually from the action to the fact, that I at last flung it across the room and gave myself up entirely to a consideration of the events of the day. Supposing that this unhappy young man’s story were absolutely true, then what hellish thing, what absolutely unforeseen and extraordinary calamity could have occurred between the time when he parted from his father, and the moment when, drawn back by his screams";

text = text.toLowerCase();

var array = text.split(delimiter);

var dict = {};
for (var i = 0; i < array.length; i++) {
    if (!(array[i] in dict)) {
        dict[array[i]] = {};
        dict[array[i]][array[i + 1]] = 1;
    } else {
        if ((i + 1) < array.length) {
            if (array[i + 1] in dict[array[i]]) {
                dict[array[i]][array[i + 1]] += 1;
            } else {
                dict[array[i]][array[i + 1]] = 1;
            }
        }
    }

}
for (var key in dict) {
    var total = 0;
    for (var word in dict[key]) {
        total += dict[key][word];
    }
    
}