/**
 * 
 *  separate phone number 
 */
class Client {
 
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = null;
  }

  print() {
    console.log(`${this.firstName} - ${this.lastName}`);
    if (this.phone) {
      console.log(`Phone number: ${this.phone.number}`);
    }
  }

  setPhoneNumber(phoneNumberValue) {
    let phone = new PhoneNumber();
    if (phone.setNumber(phoneNumberValue)) {
      this.phone = phone;
    }
  }
}

class PhoneNumber {
    
    validatePhoneNumber(phoneNumber) {
      const regex = new RegExp('^[(]?[0-9]{3}[)]?[ ,-]?[0-9]{3}[ ,-]?[0-9]{4}$');
      return regex.test(phoneNumber);
    }
    setNumber(phoneNumber) {
      let isValid = this.validatePhoneNumber(phoneNumber);
      if (isValid) {
        this.number = phoneNumber;
      }
      return isValid;
    }
}



const client = new Client('Jo', 'Wong');
client.setPhoneNumber('(416)222-2222');
client.print();

