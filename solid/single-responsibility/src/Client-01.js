class Client {
 
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  print() {
    console.log(`${this.firstName} - ${this.lastName}`);
    if (this.phoneNumber) {
      console.log(`Phone number: ${this.phoneNumber}`);
    }
  }

  validatePhoneNumber(phoneNumber) {
    const regex = new RegExp('^[(]?[0-9]{3}[)]?[ ,-]?[0-9]{3}[ ,-]?[0-9]{4}$');
    return regex.test(phoneNumber);
  }

  setPhoneNumber(phoneNumber) {
    if (this.validatePhoneNumber(phoneNumber)) {
      this.phoneNumber = phoneNumber;
      return true;
    } else {
      return false;
    }
  }
}

const client = new Client('Jo', 'Wong');
client.setPhoneNumber('(416)222-2222');
client.print();