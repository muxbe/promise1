let promise = new Promise((shesruleba, verShesruleba) => {
  if (1 < 2) {
    shesruleba("shesrulda");
    return;
  }
  verShesruleba("error");
});
/* promise.then((es) => console.log(es)).catch((er) => console.log(er)); */
let promise2 = new Promise((shesruleba, vershesruleba) => {
  if (1 < 2) {
    shesruleba("shesrulda2");
    return;
  }
  vershesruleba("error2");
});
Promise.all([promise, promise2])
  .then((es) => console.log(es))
  .catch((er) => console.log(er));
