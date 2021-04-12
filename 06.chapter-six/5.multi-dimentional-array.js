var studentsName, rollNo, physicsMarks, chemMarks;
var nominal = [
  (studentsName = ['Faysal', 'Fahim', 'Rahim', 'karim']),
  (rollNo = [1, 2, 3, 4]),
  (physicsMarks = [70, 71, 72, 73]),
  (chemMarks = [73, 72, 71, 70]),
];

console.log(nominal[0][0]);

for (var i = 0; i < nominal.length; i++) {
  var studentsInfo = nominal[i];
  for (var j = 0; j < studentsInfo.length; j++) {
    console.log(nominal[i][j]);
  }
}
