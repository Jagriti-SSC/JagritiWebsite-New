import { createContext, useState, useContext } from 'react';


const FormContext = createContext();


const FormProvider = ({ children }) => {
  const [isFormFilled, setIsFormFilled] = useState(false);

  const setFormFilled = () => {
    setIsFormFilled(true);
  };

  
  const contextValue = {
    isFormFilled,
    setFormFilled,
  };

  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
};


const useFormContext = () => {
  return useContext(FormContext);
};

// export { FormProvider, useFormContext };
export { FormProvider, useFormContext,FormContext };