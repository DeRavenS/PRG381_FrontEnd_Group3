import { IBRowsedStudent } from "../models/browsed-student";

//Generates default values if a property is not specified when called
const getDefaults = () : IBRowsedStudent => ({
    studentID:'1',
    studentAddress:"50 Tamatie Street, Pretoria",
    studentEmail: "Temp@gmail.com",
    studentName:"Suuuuueee Renaalldo"
    
  });
    //Used to get mock values
  export const getBrowsedBookingMock = (p?: Partial<IBRowsedStudent>): IBRowsedStudent => ({
    ...getDefaults(),
    ...p
  });