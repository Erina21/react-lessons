import React, { useState } from "react";
import Input from "./Input";
import Heading from "./Heading";
import Button from "./Button";
import Select from "./Select";

function RegisterForm() {
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log({ name, lastName, age, email, password });
    // Handle form submission logic here
  };
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Heading text="Register" />
        <Button type="submit" text="Click" />

        <Input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
              />
              
              <Select
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                options={[
                  { value: "USA", label: "USA" },
                  { value: "Canada", label: "Canada" },
                  { value: "Mexico", label: "Mexico" },
                  { value: "Kosovo", label: "Kosovo" },
                ]}
              />
      </form>
    </div>
  );
}

export default RegisterForm;
