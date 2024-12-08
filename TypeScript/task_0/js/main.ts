interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: 'Camille',
    lastName: 'Sanchez',
    age: 34,
    location: 'Moca',
  };
  
  const student2: Student = {
    firstName: 'Elizabeth',
    lastName: 'Mendez',
    age: 21,
    location: 'Aguadilla',
  };
  
  const studentList = [student1, student2];
  
  const table = document.createElement('table');
  
  studentList.forEach(student => {
    const row = table.insertRow();
    const cellFirstName = row.insertCell();
    const cellLocation = row.insertCell();
  
    cellFirstName.appendChild(
      document.createTextNode(student.firstName)
    );
  
    cellLocation.appendChild(
      document.createTextNode(student.location)
    );
  });
  
  document.body.appendChild(table);