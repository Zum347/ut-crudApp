import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List"
import { mergeAlias } from "vite";

const App = () => {

  const [users, setUsers] =useState([
 {
  name: 'Leyla',
  mail: 'Leyla60@gmail.com',
  age: 25,
 },
 {
  name: 'Mecnun',
  mail: 'mecnun30@gmail.com',
  age: 35,
 },


  ]);

const addUser = (newUser) =>{
  setUsers([...users, newUser]);
};

  return (
    <div className="container">
      <h2 className="text-center my-5">Kullanıcı Paneli</h2>
       <Form addUser={addUser} />
       <List users= {users} />
    </div>
  );
};

export default App;

