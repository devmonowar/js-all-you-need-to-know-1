try {
  console.log('I am Line 1');
  throw new Error('I am Error');
  console.log('I am Line 2');
  console.log('I am Line 3');
} catch (error) {
  console.log(error.message);
} finally {
  console.log('I am Finally Block');
}
