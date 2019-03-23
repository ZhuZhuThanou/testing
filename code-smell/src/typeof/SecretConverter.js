class SecretConverter {
  
  createN5XProtocolKey(value1, value2) {
      if (typeof value1 === 'string') {
        value1 = parseFloat(value1);
      }
      if (typeof value2 === 'string') {
        value2 = parseFloat(value2);
      }
      return value1 + value2;
  }
}

export default SecretConverter;