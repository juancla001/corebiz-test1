export const checkRegexp = (regexp, test) => {
    const check = new RegExp(regexp);
    const checkTest = check.test(test);
  
    if (checkTest) {
      return true;
    } else {
      return false;
    }
  };
  
  export const emailRegexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  