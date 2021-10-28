import React, { useState } from "react";
import InputField from "../InputField/InputField";
import inputAttr from "../InputField/InputAttr";
import {
  fetchContacts,
  addContact,
} from "../../redux/phonebook/phonebook-operations";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../redux/phonebook/phonebook-selectors";
import styles from "./ContactForm.module.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (contacts.map((contact) => contact?.name).includes(name)) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContact(name, number));
    dispatch(fetchContacts());
    reset();
  };

  function reset() {
    setName("");
    setNumber("");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        // className={styles.input}
        {...inputAttr.name}
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        // className={styles.input}
        {...inputAttr.number}
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
