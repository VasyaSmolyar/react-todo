export const required = (value) => {
  if (!value.toString().trim().length) {
    return 'This field is required';
  }
};
 
export const email = (value) => {
  const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if(!value || regex.test(value) === false){
    return `${value} is not a valid email.`
  }
};