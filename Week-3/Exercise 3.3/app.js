function createIncrement() {
  let count = 0;
  function increment() { 
    count++;
  }
  let message = `Count is ${count}`;
  function log() {
    console.log(message);
  }
  
  return [increment, log];
}
const [increment, log] = createIncrement();
increment(); 
increment(); 
increment(); 
log(); 



Output :
Count is 0


Reason:
As we see the increment is called three times so the value of count is increased to 3.
count = 3

The variable exist inside the log funciton so and its called is once.
At start of the program count value is 0, so the message stored ='Count is 0'

so there is only 1 call for log. so there is no change in the output.


Final answer : Count is 0
