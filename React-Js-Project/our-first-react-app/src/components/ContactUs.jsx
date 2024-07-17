import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("asdfasdfasdfasdfasdfasdf");
  const [email, setEmail] = useState("");

  const formSubmitHandler = (event) => {
    event.preventDefault();
    console.log({ name, email });

    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <label>
        Enter your name:
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </label>
      <br />
      <label>
        Enter your email:
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <br />
      <button type="submit">Submit Form</button>
      <br />
    </form>
  );
};
export default ContactUs;
