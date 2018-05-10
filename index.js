var katzDeli = [1,2];
var servedCustomer = 0;

function takeANumber(line) {
  line.push(`${servedCustomer + 1}`);
  return `Welcome, you are number ${line.length} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  servedCustomer++;
  return `Currently serving ${servedCustomer + 1}.`;
}

function currentLine(line) {
  if (!line.length || (line.length === servedCustomer + 1)) {
    return "The line is currently empty.";
  }
  return `The line is currently: ${line.length}`;
}

//test
takeANumber(katzDeli);
