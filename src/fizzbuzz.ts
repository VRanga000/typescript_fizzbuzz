export function fizzbuzz(n: number) : string {
  var output : string = "";
  if(n / 3 == 0) {
    output += "fizz";
  } else if(n / 5 == 0) {
    output += "buzz";
  }
  return output;
}
