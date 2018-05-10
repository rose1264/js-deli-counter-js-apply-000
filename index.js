var katzDeli = [];
var servedCustomer = 0;

function takeANumber(line) {
  line.push(${servedCustomer + 1});
  return `Welcome, you are number ${line.length} in line.`;
}

function nowServing(line) {
  if (!line.length) {
    return "There is nobody waiting to be served!";
  }
  servedCustomer++;
  return `Currently serving ${line.shift()}.`;
}

function currentLine(line) {
  const numbersAndNames = [];

  if (!line.length) {
    return "The line is currently empty.";
  }
  for (let i = 0; i < line.length; i++) {
    numbersAndNames.push(`${i + 1}. ${line[i]}`);
  }
  return `The line is currently: ${numbersAndNames.join(', ')}`;
}
