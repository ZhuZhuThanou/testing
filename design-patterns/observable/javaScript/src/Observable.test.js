const chai = require('chai');
const { expect } = chai;

const Observable = require('./Observable');

describe('Observable', () => {

  let observable = null;
  beforeEach(() => {
    observable = new Observable();
  });

  it('a subscriber being notified of an event', () => {
    let capturedEventValue = null;
    const subscriber = text => { 
        capturedEventValue = text;
    };

    observable.subscribe(subscriber);
    observable.notify('notify text value');
    expect(capturedEventValue).to.equal('notify text value');
  });

  it('removing a subscriber then it should not be notified', () => {
    let capturedEventValue = null;
    const subscriber = text => { 
        capturedEventValue = text;
    };
    observable.subscribe(subscriber);
    observable.unsubscribe(subscriber);
    observable.notify('notify text value with no subscriber');
    expect(capturedEventValue).to.be.null;
  });
});

