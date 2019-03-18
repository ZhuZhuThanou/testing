const axios = require('axios');

class CarService {
  
  save(car) {
    return axios.post('/car', car)
      .then(response => {
        return Promise.resolve(response.data)}
      );
  }
}

module.exports = CarService;