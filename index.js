function takeANumber(currentLine, newPerson) {
  currentLine.push(newPerson);
  return(`Welcome, ${newPerson}. You are number ${currentLine.length} in line.`);
}



function nowServing(katzDeliLine) {
   if (katzDeliLine.length > 0) {
     return(`Currently serving ${katzDeliLine.shift([0])}.`);
   } else {
     return ("There is nobody waiting to be served!");
   }
}





function currentLine(katzDeliLine) {
  var line = [];
  for (var i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  if (katzDeliLine.length > 0) {
    return (`The line is currently:${line}`);
  } else {
     return ("The line is currently empty.");
  }
}


