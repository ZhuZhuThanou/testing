class Decorator {

  addAnalyticData(data) {
    data.analytic = { userClickCount: 10};
    return data;
  } 

  addOrderData(data) {
    data.order = { items: [ 'item1', 'item2' ]  };
    return data;
  }

  addUserData(data) {
    data.user = {userId: 'userId322'};
    return data;
  }

  flatten(data) {
    let newData = { userId: data.user.userId, 
      items: data.order.items,
      clickCount: data.analytic.userClickCount};
    return newData; 
  }
}

export default Decorator;