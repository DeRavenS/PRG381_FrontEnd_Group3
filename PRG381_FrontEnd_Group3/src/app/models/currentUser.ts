 export class CurrentUser{
    private static admin: Boolean;
    private static _id: String;
    
    
    
    private static currentUser= new CurrentUser();
    
    private CurrentUser(){
        
    } 
    
    public static getInstance(): CurrentUser{
        return this.currentUser;
    }
    
    public static get _admin(): Boolean {
        return CurrentUser.admin;
    }
    public static set _admin(value: Boolean) {
        CurrentUser.admin = value;
    }
    public static get id(): String {
         return CurrentUser._id;
     }
     public static set id(value: String) {
         CurrentUser._id = value;
     }
}