import {
  createContext,
  useContext,
  useState,
  ReactNode,
  SetStateAction,
  Dispatch,
} from "react";

type FormData = {
  name: string;
  phone: string;
  email: string;
};

type FormDataContextType = {
  formData: FormData;
  setFormData: Dispatch<SetStateAction<FormData>>;
};

const FormDataContext = createContext<FormDataContextType | undefined>(
  undefined
);

export function FormDataProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
  });

  return (
    <FormDataContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormDataContext.Provider>
  );
}

export function useFormData() {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
}
