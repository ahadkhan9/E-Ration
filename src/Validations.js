export const mobileValitaion = (number) => {
  if (number.length < 10 || number.length > 10 || number === "") {
    return false;
  } else {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return re.test(number);
  }
};

export const aadhaarCardValidation = (number) => {
  if (number.length < 12 || number.length > 12 || number === "") {
    return false;
  } else {
    // var re = /^[2-9]{1}[0-9]{3}\s[0-9]{4}\s[0-9]{4}$/;
    // return re.test(number);
    return true;
  }
};
