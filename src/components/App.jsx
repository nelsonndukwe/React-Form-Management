import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const handleChnage = (e) => {
    const { name, value } = e.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.email,
          email: value
        };
      }
    });

    e.preventDefault();
  };

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input name="fName" placeholder="First Name" onChange={handleChnage} />
        <input name="lName" placeholder="Last Name" onChange={handleChnage} />
        <input name="email" placeholder="Email" onChange={handleChnage} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
