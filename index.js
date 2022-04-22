const nemo = ['nemo'];
function find(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log("Found NEMO!")
    }
    let t1 = performance.now();
    console.log("Calling nemo took " + (t1 - t0) + " ms time")
  }
}
find(nemo);