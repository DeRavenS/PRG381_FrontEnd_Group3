import { IDetailedAdmin } from "../models/admin-interface";

//Generates default values if a property is not specified when called
const getDefaults = () : IDetailedAdmin => ({
    adminID:'1',
    adminContact:"0830050066",
    adminEmail: "Temp@gmail.com",
    adminName:"Suuuuueee Renaalldo"
    
  });
  //Used to get mock values
  export const getDetailedAdminMock = (p?: Partial<IDetailedAdmin>): IDetailedAdmin => ({
    ...getDefaults(),
    ...p
  });