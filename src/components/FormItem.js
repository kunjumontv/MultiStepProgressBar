import { useState } from "react";
import { Form } from "react-bootstrap";

const FormItem = ({ item, onChange, answer }) => {
  const [currentValue, setCurrentValue] = useState(answer || null);
  switch (item.type) {
    case "text":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="text"
            id={item.label}
            placeholder={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "password":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="password"
            id="inputPassword5"
            placeholder={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "select":
      return (
        <div className="mt-2">
          <Form.Label>{item.label}</Form.Label>
          <Form.Select
            aria-label={item.label}
            placeholder={item.label}
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          >
            {/* <option></option> */}
            {item.options.map((opt, index) => {
              return <option value={opt}>{opt}</option>;
            })}
          </Form.Select>
        </div>
      );
      break;
    case "file":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="file"
            id="profilePicture"
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "email":
      return (
        <>
          <Form.Label>{item.label}</Form.Label>
          <Form.Control
            type="email"
            id="email"
            onChange={(e) => onChange(e.target.value, item.value)}
            value={currentValue}
          />
        </>
      );
      break;
    case "button":
      return (
        <>
          <Form.Control
            placeholder={item.label}
            type="button"
            id="educationBtn"
          />
        </>
      );
      break;
    case "information":
      return <p>{item.label}</p>;
      break;
  }
};

export default FormItem;
