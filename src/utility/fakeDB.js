// use local storage to manage cart data
const addToDb = (id) => {
  let jobList = getJobList();
  // add quantity
  const quantity = jobList[id];
  if (!quantity) {
    jobList[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    jobList[id] = newQuantity;
  }
  localStorage.setItem("job-list", JSON.stringify(jobList));
};

const removeFromDb = (id) => {
  const shoppingCart = getJobList();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("job-list", JSON.stringify(shoppingCart));
  }
};

const getJobList = () => {
  let jobList = {};

  //get the shopping cart from local storage
  const storedJob = localStorage.getItem("job-list");
  if (storedJob) {
    jobList = JSON.parse(storedJob);
  }
  return jobList;
};

export { addToDb, removeFromDb, getJobList };
