import { FormStatus } from "./FormStatus";
import Form from "./Form";
import axios from "axios";
import { ChangeEventHandler, FormEventHandler, useState } from "react";

export default function FormContainer() {
  const [input, setInput] = useState({});
  const [status, setStatus] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    const innet_input = { ...input };
    // innet_input[e.target.name] = e.target.value;
    setInput(innet_input);
  };

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post(
        `https://www.enformed.io/${process.env.REACT_APP_EMAIL_TOKEN}/`,
        input,
      )
      .then((response) => {
        if (response.statusText === "OK") {
          setFormSubmitted(true);
          setStatus(true);
        } else {
          setFormSubmitted(true);
          setStatus(false);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {formSubmitted === true ? (
        <FormStatus status={status} />
      ) : (
        <Form
          handleChange={handleChange}
          formSubmitted={formSubmitted}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
}
