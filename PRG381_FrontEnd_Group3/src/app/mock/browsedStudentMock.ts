import { IBRowsedStudent } from "../models/browsed-student";


const getDefaults = () : IBRowsedStudent => ({
    studentID:'1',
    studentAddress:"50 Tamatie Street, Pretoria",
    studentEmail: "Temp@gmail.com",
    studentName:"Suuuuueee Renaalldo"
    
  });
  
  export const getBrowsedBookingMock = (p?: Partial<IBRowsedStudent>): IBRowsedStudent => ({
    ...getDefaults(),
    ...p
  });