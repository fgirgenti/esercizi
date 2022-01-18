const students = ['Paul', 'George', 'Lucas'];

function addStudent(student) {
  students.push(student);
}

addStudent('Marco');
console.log(students);

//possiamo aggiungere un elemento a students perché assegnarlo con "const" e quindi "readonly" vuol dire che non possiamo riassegnarlo, quindi se per esempio contiene l'oggetto o l'array students non possiamo assegnarli un altro array
//ma possiamo comunque modificare il contenuto dell'oggetto / array non essendo una variabile, credo sia per questo