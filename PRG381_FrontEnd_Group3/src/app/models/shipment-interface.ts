import { IShipmentItems } from "./shipment-items-interface";

export interface IShipment{
    shipmentID: number,
    shipmentDT:Date,
    shipmentItems: IShipmentItems
}