import React, { useRef, useState } from "react";

function Subscription() {
  let userRef = useRef();
  let planRef = useRef();
  const [err, setErr] = useState(false);
  let handleSubmit = (e) => {
    e.preventDefault();
    let userErr = userRef.current.value;

    if (userErr.length <= 0) {
      setErr(true);
    } else {
      setErr(false);
      alert(
        "Thank you " +
          userRef.current.value +
          " for Subscribing plan " +
          planRef.current.value +
          ". Payment link is send to registered email id"
      );
    }
  };

  return (
    <div>
      <h2>Subscription in Galaxy Flix</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "2px solid blue",
          padding: "20px",
          width: "300px",
          margin: "20px",
        }}
      >
        <label>User name:</label>
        <input type="text" ref={userRef} /> <br /> <br />
        {err && <p style={{ color: "red" }}>user name cannot be blank</p>}
        <label>Select the plan:</label>
        <select ref={planRef}>
          <option>Annual Rs.9999/year</option>
          <option>6 months Rs.499</option>
          <option>Monthly Rs.99/month</option>
        </select>{" "}
        <br /> <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Subscription;
