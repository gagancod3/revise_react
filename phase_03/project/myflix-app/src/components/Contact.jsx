import * as React from "react";
import "../styles/Conatct.css";
import axios from "axios";

export default function Contact() {
  const [users, setUsers] = React.useState([]);
  const API_KEY = "reqres-free-v1"; // ← your real key

  const f = async () => {
    try{
    const res = await axios.get(
      "https://reqres.in/api/users?page=1", // or any endpoint you need
      {
        headers: {
          "x-api-key": API_KEY,
          Accept: "application/json",
        }
      }
    );
      // console.log(res.data, 'RES');
        // const json = await res.json();
    setUsers(res.data.data); // [{ id, first_name, … }]
  }
    // const res = await fetch(
    //   'https://reqres.in/api/users?page=1',     // or any endpoint you need
    //   {
    //     headers: {
    //       'x-api-key': API_KEY,
    //       'Accept': 'application/json'
    //     }
    //   }
    // );

  
    catch(error){
    // if (!res.ok) {
    console.error(`Error occured fetching data, ${error}`);
      throw new Error(`Request failed`);
    // }
  }

  
  };
  React.useEffect(() => {
    f();
  }, []);
  return (
    <div className="App">
      <h1>Hello ReqRes users!</h1>
      <div className="flex">
        {users.length &&
          users.map((user) => {
            return (
              <div key={user.id}>
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
