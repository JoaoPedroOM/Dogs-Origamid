import React, { useState } from "react";

const types = {
  senha: {
    regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    message: "A senha deve conter pelo menos 8 caracteres, com pelo menos uma letra maiúscula, um número e um dos seguintes símbolos: $*&@#",
  },
  email: {
    regex: /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
    message: "Informe um email válido"
  },
};

const useForm = (type) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("")

  function validate(value){
    if(type === false) return true;
    if(value.length === 0) {
        setError("Preencha um valor.")
        return false;
    }else if(types[type] && !types[type].regex.test(value)){
        setError(types[type].message)
        return false;
    }else{
        setError(null)
        return true;
    }
  }

  function onChange({ target }) {
    if(error) validate(target.value)
    setValue(target.value);
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
    onBlur: () => validate(value)
  };
};

export default useForm;
