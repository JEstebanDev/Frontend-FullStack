async function PrintName(name) {
  setTimeout(() => {
    console.log(name);
  }, 5000);
}

PrintName("Esteban");

function job(data) {
  return new Promise((resolved, rejected) => {
    //NaN Not a Number boolean
    if (isNaN(data)) {
      rejected("Error");
    }
    if (data % 2 == 0) {
      setTimeout(resolved, 2000, "even");
    } else {
      setTimeout(resolved, 1000, "odd");
    }
  });
}
job("A").then((resp) => console.log(resp));
job(1).then((resp) => console.log(resp));
job(2).then((resp) => console.log(resp));
