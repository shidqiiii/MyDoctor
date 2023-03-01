import {useState} from 'react';

export const useForm = initialValues => {
  const [values, setValues] = useState(initialValues);
  return [
    values,
    (formType, formValue) => {
      setValues({...values, [formType]: formValue});
    },
  ];
};
