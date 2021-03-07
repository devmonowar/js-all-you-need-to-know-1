var studentName = { name: 'Faysal', age: 18, class: 12, code: 7232 };
console.log(studentName);

// Dot Notation
console.log(studentName.name);
console.log(studentName.code);

// Array Noation
console.log(studentName['name']);
var userResponse = 'name';
console.log(studentName[userResponse]);

// Add New Property
studentName.section = 'A boys';
console.log(studentName);

// Remove Property
delete studentName.section;
console.log(studentName);

// Update value
studentName.name = 'Fahim';
console.log(studentName.name);

studentName['name'] = 'Faysal';
console.log(studentName.name);
