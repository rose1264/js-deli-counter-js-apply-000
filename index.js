var katzDeli = [];
var servedCustomer = 1;

function takeANumber(line) {
  line.push(`${servedCustomer + 1}`);
  console.log (`Welcome, you are number ${line.length} in line.`);
}

function nowServing(line) {
  if (!line.length) {
    console.log("There is nobody waiting to be served!");
  }
  servedCustomer++;
  console.log(`Currently serving ${servedCustomer + 1}.`);
}

function currentLine(line) {
  if (!line.length || (line.length === servedCustomer + 1)) {
    console.log("The line is currently empty.");
  }
  console.log(`The line is currently: ${line.length}`);
}

//test
//takeANumber(katzDeli);
nowServing(katzDeli);
