
//Two arrays to store student names and marks
let students: string[] = ["Suresh", "Mahesh", "Naresh"];
let smarks: number[] = [75, 80, 82];

// Add 10 marks
for (let i = 0; i < smarks.length; i++) {
    smarks[i] = smarks[i] + 10; //
}

//average calculate
let totalMarks: number = 0;
for (let i = 0; i < smarks.length; i++) {
    totalMarks = totalMarks + smarks[i];
}
let average: number = totalMarks / smarks.length;

//expected result
console.log("Updated Marks:");
for (let i = 0; i < students.length; i++) {
    console.log(students[i] + ": " + smarks[i]);
}
console.log("Average Marks: " + average.toFixed(1));
