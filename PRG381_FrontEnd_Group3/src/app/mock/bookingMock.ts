import { IBrowsedBooking } from "../models/browsed-booking";


const getDefaults = () : IBrowsedBooking => ({
    id: 1,
    bookingDateTime: new Date(),
    clientName: "Foo",
    type: "wedding",
    confirmed: true
  });
  
  export const getBrowsedBookingMock = (p?: Partial<IBrowsedBooking>): IBrowsedBooking => ({
    ...getDefaults(),
    ...p
  });