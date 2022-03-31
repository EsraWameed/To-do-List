//can require module to run all the code
module.exports = getDate;

function getDate(){
  let today = new Date();
  let options ={
    weekday:"long",
    day:"numeric",
    month:"long"
  };
  let day= today.toLocaleDateString("en-US", options);
  return day;
}
