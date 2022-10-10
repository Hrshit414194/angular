import { Department } from "./Department";
import { User } from "./User";

export class event{
   eventId:Number;
  eventName:String;
postedByUser:User;

eventBody:String;

eventLocation:String;


departmentsAllowed:Department[];


}