import { useState } from "react";
import classes from "./NewPost.module.css";

const PhoneInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    // Some function to format the phone number
    const formattedNumber = formatPhoneNumber(event.target.value);
    setPhoneNumber(formattedNumber);
  };

  return (
    <input
      type="tel"
      name="phoneNumber"
      value={phoneNumber}
      onChange={handlePhoneNumberChange}
    />
  );
};

function LoginForm({ onCancel, onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
    onLogin(true)
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
        <label>Name:</label>
        <input type="text" name="name" />

        <label>Email:</label>
        <input type="email" name="email" />

        <label>Phone Number:</label>
        <PhoneInput />

        <label>Address:</label>
        <input type="text" name="address" />
        <p className={classes.actions}>
            <button type='button' onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
    </form>
  );
}

// Helper function for phone number formatting (just an example)
function formatPhoneNumber(number) {
  // Format the phone number as desired. This is just a basic example.
  return number.replace(/\D/g, "").slice(0, 10);
}

export default LoginForm;
