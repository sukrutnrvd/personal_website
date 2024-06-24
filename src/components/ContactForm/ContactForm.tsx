"use client";

import { useFormik } from "formik";
import { Button, FormInput } from "../UI";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const { handleBlur, handleChange, errors, values, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit} className={styles["contact-form"]}>
      <FormInput
        name="name"
        placeholder="Name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.name}
      />

      <FormInput
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.lastName}
      />

      <FormInput
        name="email"
        placeholder="Email Address"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email}
      />

      <textarea
        name="message"
        placeholder="Message"
        onChange={handleChange}
        onBlur={handleBlur}
        value={errors.message || values.message}
      />

      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
