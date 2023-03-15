var Students = [
    {
        id: 101,
        name: 'Anisul Islam',
        gpa: 2.50
    },
    {
        id: 102,
        name: 'Bijoy Islam',
        gpa: 3.40
    },
    {
        id: 103,
        name: 'Rokeya',
        gpa: 3.80
    },
    {
        id: 104,
        name: 'Mamun',
        gpa: 2.90,
    },

]

// Traditional Function
function StudentName1(){
   return Students.filter(function(x){
      return  x.gpa > 3;
    }).map(function(y){
        return y.name
    });
}
// Arrow funtion
    const StudentName2 = ()=>{
       return Students.filter((x) => x.gpa >3).map((y) => y.name);
    }
console.log(StudentName1())
console.log(StudentName2())