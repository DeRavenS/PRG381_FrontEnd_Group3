import { IDetialedStudent } from "../models/student-interface";

//Generates default values if a property is not specified when called
const getDefaults = () : IDetialedStudent => ({
    studentID:'1',
    studentAddress:"50 Tamatie Street, Pretoria",
    studentEmail: "Temp@gmail.com",
    studentName:"Suuuuueee Renaalldo",
    courses:["Math","Gool","Foo","BAR"]
    
  });
  //Used to get mock values
  export const getDetailedStudentMock = (p?: Partial<IDetialedStudent>): IDetialedStudent => ({
    ...getDefaults(),
    ...p
  });