let storage = (function () {
    class User {
        constructor(username, password) {
            this.username = username;
            this.password = password;
        }
    }
    
    class UserStorage {
    
        constructor(){
            if(!localStorage.getItem("users")){

                this.users = [
                    new User("user","user"),
                ];

                localStorage.setItem("users",JSON.stringify(this.users));
            }
            this.users=JSON.parse(localStorage.getItem("users"));
        
            
        } 
        
        add(username,password){
            if(!this.exist(username)){
                this.users.push(new User(username,password));
                localStorage.setItem("users",JSON.stringify(this.users));
            }
    
        }
        exist(username){
            return this.users.some( u=>u.username === username);
        }
    
        validate(username,password){
            return this.users.some(u=> u.username === username && u.password===password);
        }

        getCurrentUserNumber() {

            let currentUser = login();
            let users = JSON.parse(localStorage.getItem("users"));
            let userNumber = 0;
            let usernames = [];

            users.forEach(e => {
                usernames.push(e.username);
            });

            for(let i= 0;i<usernames.length;i++){
                if(usernames[i] == currentUser){
                    userNumber = i;
                    break;
                }
            }

            return userNumber;
        }
    }
    return new UserStorage();
  })();
