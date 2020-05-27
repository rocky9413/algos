/**
 * Part 1:
 * You are given an array of arrays.  The subarrays are first names and phone numbers.
 *
 * Example: jazbooks are not always sorted... */
const jazbook = [
  ['alex', '301-844-3421'],
  ['jae', '301-844-1211'],
  ['david', '301-844-0978'],
  ['travis', '301-844-8505'],
  ['jasmine', '1800-974-4539'],
];

/* Develop a function that takes in a jazbook and a name, searches through the jazbook and returns the persons phone number. If the person does not exists, return false.
* How efficient can you make this?

* Part 2: 
* Why are we storing names and phone numbers in an array?
* develop a function that takes in the poorly constructed jazbook and returns a proper phonebook 
* complete with methods to add new names and look up and remove existing entries
*/

//  return the number associated with the name in the jazbook
function findName(jazbook, name) {
  if (jazbook.length > 0) {
    for (let i = 0; i < jazbook.length; i++) {
      if (jazbook[i][0] === name) return jazbook[i][1];
    }
  }
  return false;
}
// console.log(findName(jazbook, 'alex'));

// return an object literal representing the jazbook
function makePhoneBookObject(book) {
  this.phoneBook = {};
  for (let i = 0; i < book.length; i++) {
    if (!this.phoneBook.hasOwnProperty(book[i][0])) {
      this.phoneBook[book[i][0]] = book[i][1];
    }
  }
  return this;
}
makePhoneBookObject.prototype.add = function(name, phoneNumber) {
  if (!this.phoneBook.hasOwnProperty(name)) {
    this.phoneBook[name] = phoneNumber;
  }
};

makePhoneBookObject.prototype.lookUp = function(name) {
  if (this.phoneBook.hasOwnProperty(name)) {
    return this.phoneBook[name];
  }
  return false;
};

makePhoneBookObject.prototype.remove = function(name) {
  if (!this.phoneBook.hasOwnProperty(name)) return;
  const deleted = [name, this.phoneBook[name]];
  delete this.phoneBook[name];
  return deleted;
};

// function makePhoneBookObject(book) {
//   let result = {};
//   for (let i = 0; i < book.length; i++) {
//     result[book[i][0]] = book[i][1];
//   }
//   result.add = (name, phoneNum) => (this[name] = phoneNum);
//   result.remove = name => {
//     let temp = this[name];
//     delete this[name];
//     return temp;
//   };
//   result.lookUp = name => {
//     if (this.hasOwnProperty(name)) return this[name];
//     return false;
//   };
//   return result;
// }

// const pb = new makePhoneBookObject(jazbook);
// console.log(pb);
// pb.add('rocky', '646-371-2036');
// console.log(pb);
// console.log(pb.lookUp('alex'));
// pb.remove('jae');
// pb.remove('travis');
// console.log(pb);

const objectToExport = {
  findName,
  makePhoneBookObject,
};

module.exports = objectToExport;
