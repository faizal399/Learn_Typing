import { useContext, createContext, useState } from "react";
import type { ReactNode } from "react";
interface KeyboardContextType {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;

  capsLock: boolean;
  setCapsLock: React.Dispatch<React.SetStateAction<boolean>>;

  shift: boolean;
  setShift: React.Dispatch<React.SetStateAction<boolean>>;

  activeKey: string;
  setActiveKey: React.Dispatch<React.SetStateAction<string>>;

  handleBG: Varientinterface;
  setHandleBG: React.Dispatch<React.SetStateAction<Varientinterface>>;
}

const KeyboardContext = createContext<KeyboardContextType | undefined>(
  undefined,
);

interface ProviderProps {
  children: ReactNode;
}

interface Varientinterface {
  varient: string;
  keyboardBG: string;
  specialKeys: string;
  spaceKey: string;
  keyColor: string;
  moreKeys?: string;
}

export const KeyboeardProvider = ({ children }: ProviderProps) => {
  const [text, setText] = useState("");
  const [capsLock, setCapsLock] = useState(false);
  const [shift, setShift] = useState(false);
  const [activeKey, setActiveKey] = useState("");

  const [handleBG, setHandleBG] = useState<Varientinterface>({
    varient: "pink",
    keyboardBG: "#E9C1BF",
    specialKeys: "#F9BCBB",
    spaceKey: "#F9BDBC",
    keyColor: "#FFFFFF",
  });

  return (
    <KeyboardContext.Provider
      value={{
        capsLock,
        setCapsLock,
        shift,
        setShift,
        activeKey,
        setActiveKey,
        text,
        setText,
        handleBG,
        setHandleBG,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboard must be inside KeyboardProvoder");
  }

  return context;
};
