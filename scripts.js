var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinosaur = "triceratops";
var dinosaurUpperCase = dinosaur.toUpperCase();
var dinosaurSwap = text.replace('Velociraptor', dinosaurUpperCase);
console.log(dinosaurSwap.substr(0,dinosaurSwap.length/2));