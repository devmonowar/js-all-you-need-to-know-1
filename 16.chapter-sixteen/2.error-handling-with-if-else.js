function convertToInt(num) {
  let result = Number.parseInt(num);

  if (!result) {
    throw new Error('Please Provide a Number');
  } else {
    console.log(result);
  }
}

convertToInt('a');
