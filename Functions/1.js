function fullname(address) {
  console.log(this.firstName + " " + this.lastName + " " + address);
}

let obj = {
  firstName: "vamshi",
  lastName: "bandela",
  // fullname,
};

// obj.fullname();

const getFullName = fullname.bind(obj);
console.log(getFullName("NZB"));




console.log(fullname.call(obj,"NZB"));
console.log(fullname.apply(obj,["NZB"]));