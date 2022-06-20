let jj = {
  firstName: "JJ",
  lastName: "Gray",
  height: 180,
  grow() {
    this.height += 10;
  },
};

console.log(jj.height);

jj.grow();

console.log(jj.height);
