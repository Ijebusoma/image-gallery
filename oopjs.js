class TestClass {
  constructor() {
    this.users = [
      {
        username: 'vanessa',
        fullName: 'Vanessa'
      },
      {
        username: 'kings',
        fullName: 'Kingdom'
      }
    ];
  }
  
  getUsers() {
    // get user code here
    return this.users;
  }
  
  addUser(a, b) {
    // add user code here
    this.users.push({username: a, fullName: b});
  }
  
  deleteUser(username) {
    // delete user code here
    for(var i =0;i<this.users.length;i++){
      if (username === this.users[i].username){
        delete this.users[i];
      }
      
    }
  }
}
class Human extends TestClass{
  constructor(){
    super();
    
  }
  getUserbyUsername(username){
    //console.log(this.users);
    for (var i=0;i<this.users.length;i++){
      if (username === this.users[i].username){
        return this.users[i]; //yass it works
      }
    }
    
    
  }
  updateName(username, newname){
    
  let user = this.getUserbyUsername(username);
  user.fullName = newname;
    console.log(user);
    
    
    
  }
  
}

var nessa = new Human();
//nessa.addUser('Dora', 'Explorer');
nessa.updateName('vanessa', 'Vee');


//nessa.addUser('human!', 'Bleh');
//nessa.deleteUser('kings');
//console.log(nessa.getUsers());

/*


*/


