import { Form } from "react-bootstrap";
import FormItem from "./FormItem";
import { useEffect, useState } from "react";

const MultiStepForm = (props) => {
  const [answers, setAnswers] = useState({ index: props.step });

  useEffect(() => {
    if (Object.keys(answers).length > 1) {
      props.onPageUpdate(answers.index, answers);
      setAnswers({ index: props.step });
    } else {
      setAnswers({ index: props.step });
    }
  }, [props.step]);

  const updateAnswers = (value, category) => {
    setAnswers({ ...answers, [category]: value });
  };

  console.log(props);
  return (
    <div className="text-left">
      {props.list[props.step - 1].items?.map((item, index) => {
        return (
          <div className="form__inputs">
            <FormItem
              key={item.label}
              item={item}
              onChange={updateAnswers}
              answer={
                props.pagesAnswers[props.step]
                  ? props.pagesAnswers[props.step][item.value]
                  : null
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default MultiStepForm;
