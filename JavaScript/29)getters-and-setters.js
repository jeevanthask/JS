const person = {
  firstName: "nandika",
  lastName: "jeevantha",
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

person.fullName = "john smith";
console.log(person.fullName);
console.log(person.firstName);
