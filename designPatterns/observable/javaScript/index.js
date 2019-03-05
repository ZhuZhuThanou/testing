const prompts = require('prompts');
const Observable = require('./src/Observable');

const observable = new Observable();

const echoObserver = text => { console.log(`${text} ${text}`)};
const reverseObserver = text => {
              let reverse = text.split("").reverse().join("");
              console.log(reverse);
            };

observable.subscribe(echoObserver);
observable.subscribe(reverseObserver);

(async () =>{
  let response = await prompts({
    type: 'text',
    name: 'textValue',
    message: 'Enter some text (type q to quit):'
  });
  observable.notify(response.textValue);
})();

