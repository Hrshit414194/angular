import { User } from "src/User";

export class poll{
     pollId:number;
     pollName:string;



     pollStatement:string;
     TotalVoteCount:number;
     upVoteCount:number;
     downVoteCount:number;
     postedBy:User;
}