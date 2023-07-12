function telephoneCheck(str) {
  let checkRule = /^(1|1\s)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;
  //first group: check if at the start if code is 1 with space or 1
  //second group: check if exact 3 digits in the group place inside () or not
  //(\s|-): check if between group is space or -
  //thirt group: check if exact 3 digits in the group
  //fourt group: check if exact 4 digits in the group at the end

  if (checkRule.test(str)){
    return true + "\n";
  }
  return false+ "\n";
}
//true
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("1 555 555 5555"));
console.log(telephoneCheck("1 456 789 4444"));

//false
console.log(telephoneCheck("555-5555"));
console.log(telephoneCheck("5555555"));
console.log(telephoneCheck("1 555)555-5555"));
console.log(telephoneCheck("123**&!!asdf#"));
console.log(telephoneCheck("55555555"));
console.log(telephoneCheck("(6054756961)"));
console.log(telephoneCheck("2 (757) 622-7382"));
console.log(telephoneCheck("0 (757) 622-7382"));
console.log(telephoneCheck("-1 (757) 622-7382"));
console.log(telephoneCheck("2 757 622-7382"));
console.log(telephoneCheck("10 (757) 622-7382"));
console.log(telephoneCheck("27576227382"));
console.log(telephoneCheck("(275)76227382"));
console.log(telephoneCheck("2(757)6227382"));
console.log(telephoneCheck("2(757)622-7382"));
console.log(telephoneCheck("555)-555-5555"));
console.log(telephoneCheck("(555-555-5555"));
console.log(telephoneCheck("(555)5(55?)-5555"));
console.log(telephoneCheck("55 55-55-555-5"));
console.log(telephoneCheck("11 555-555-5555"));