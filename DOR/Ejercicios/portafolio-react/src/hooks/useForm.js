import { useState } from "react";

export const useForm = (initialForm = {}) => {
  // manejamos el estado del formulario
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // usando las propiedades computadas de los objetos
      [name]: value,
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