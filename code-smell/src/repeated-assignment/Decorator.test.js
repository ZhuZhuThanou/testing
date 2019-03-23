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
});