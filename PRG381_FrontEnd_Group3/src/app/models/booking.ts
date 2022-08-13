import { ITheme } from "./theme-interface";
import { IUser } from "./user-interface";
import { IVenue } from "./venue-interface";

export interface IBooking{
    id: number;
    user: IUser,
    bookingDateTime: Date,
    bookingCost: number,
    theme: ITheme,
    adults: number,
    children: number,
    venue:IVenue
}