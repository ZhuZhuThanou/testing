import Decorator from './Decorator';

describe('Decorator', () => {
 it('should flatten the data', () => {
   let decorator = new Decorator();
   let data = {};
    data = decorator.addUserData(data);
    data = decorator.addOrderData(data);
    data = decorator.addAnalyticData(data);
    data = decorator.flatten(data);
    expect(data.userId).toEqual('userId322');
    expect(data.items.length).toEqual(2);
    expect(data.clickCount).toEqual(10);
 });

 it('should flatten the data', () => {
  let decorator = new Decorator();
  let data = {};
   data = decorator.flatten(
     decorator.addUserData(
     decorator.addOrderData(
       decorator.addAnalyticData(data)))
   );
   expect(data.userId).toEqual('userId322');
   expect(data.items.length).toEqual(2);
   expect(data.clickCount).toEqual(10);
});

 // how can we make this better?

});