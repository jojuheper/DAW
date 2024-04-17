import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // manejamos el estado del formulario
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value, type, checked } = target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState({
      ...formState,
      // usando las propiedades computadas de los objetos
      [name]: newValue,
    })
  }

  const onResetForm = () => {
    setFormState(initialForm);
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  }
}