var katzDeli = [];
function takeANumber (katzDeli, otherDeli) {
  katzDeli.push (otherDeli);
  return `Welcome, ${otherDeli}. You are number ${katzDeli.length} in line.`;
}
function nowServing (katzDeli) {
  if (katzDeli.length > 0) {
    return `Currently serving ${katzDeli.shift()}.`;
  }else{return "There is nobody waiting to be served!"}
  }
function currentLine(katzDeli) {
  var line = [];
  if (katzDeli.length === 0) {
    return "The line is currently empty."
  }else{ for (var i = 0; i < katzDeli.length; i++){
      line.push (` ${i+1}. ${katzDeli[i]}`);
}
    return `The line is currently:${line}`;}
}
