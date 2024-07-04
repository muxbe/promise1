let promise = new Promise((shesruleba, verShesruleba) => {
  const users = ["abo", "ilo", "petre"];
  if (false) {
    shesruleba(users);
    return;
  }
  verShesruleba("shecdoma");
});
/* promise.then((es) => console.log(es)).catch((er) => console.log(er)); */
/* let promise2 = new Promise((shesruleba, vershesruleba) => {
  if (1 < 2) {
    shesruleba("shesrulda2");
    return;
  }
  vershesruleba("error2");
});
Promise.all([promise, promise2])
  .then((es) => console.log(es))
  .catch((er) => console.log(er));
 */
const printPromise = async () => {
  try {
    const result = await promise;
    console.log(result);
  } catch (Error) {
    console.log(Error);
  }
};
printPromise();
