import React from "react";
import { useKeyboard } from "../context/KeyboardContext";

const NavBar = () => {
  const { handleBG, setHandleBG } = useKeyboard();

  interface Varientinterface {
    varient: string;
    keyboardBG: string;
    specialKeys: string;
    spaceKey: string;
    keyColor: string;
    moreKeys?: string;
  }

  const Vairent: Varientinterface[] = [
    {
      varient: "Pink",
      keyboardBG: "#E9C1BF",
      specialKeys: "#F9BCBB",
      spaceKey: "#F9BDBC",
      keyColor: "#F3F3F5",
    },
    {
      varient: "Iridescent White",
      keyboardBG: "#E6DFD1",
      specialKeys: "#BAA88A",
      spaceKey: "#B8A484",
      moreKeys: "#CCCCCC",
      keyColor: "#F3F5F7",
    },
    {
      varient: "Rose Clay",
      keyboardBG: "#94AEA5",
      specialKeys: "#66776F",
      spaceKey: "#71857C",
      moreKeys: "#C5CCC9",
      keyColor: "#EEF6E1",
    },

    // Dark Mode
    {
      varient: "Midnight Black",
      keyboardBG: "#1E1E1E",
      specialKeys: "#2D2D2D",
      spaceKey: "#3A3A3A",
      moreKeys: "#555555",
      keyColor: "#F5F5F5",
    },

    // Blue Theme
    {
      varient: "Ocean Blue",
      keyboardBG: "#8DBCC7",
      specialKeys: "#5F99A8",
      spaceKey: "#4E8B9B",
      moreKeys: "#C7E3EA",
      keyColor: "#F8FCFD",
    },

    // Purple Theme
    {
      varient: "Lavender Purple",
      keyboardBG: "#B8A1D9",
      specialKeys: "#8C6BB1",
      spaceKey: "#9A7CC0",
      moreKeys: "#DCD1EE",
      keyColor: "#FFFFFF",
    },

    // Green Theme
    {
      varient: "Mint Green",
      keyboardBG: "#A8D5BA",
      specialKeys: "#6FA57F",
      spaceKey: "#5E9670",
      moreKeys: "#D9F0E1",
      keyColor: "#FFFFFF",
    },

    // Red Theme
    {
      varient: "Crimson Red",
      keyboardBG: "#C75C5C",
      specialKeys: "#A94444",
      spaceKey: "#913838",
      moreKeys: "#E8B4B4",
      keyColor: "#FFF5F5",
    },

    // Orange Theme
    {
      varient: "Sunset Orange",
      keyboardBG: "#F4B183",
      specialKeys: "#D98C4A",
      spaceKey: "#C97934",
      moreKeys: "#F8D5B5",
      keyColor: "#FFFDFB",
    },

    // Cyber Theme
    {
      varient: "Cyber Neon",
      keyboardBG: "#0F172A",
      specialKeys: "#06B6D4",
      spaceKey: "#14B8A6",
      moreKeys: "#1E293B",
      keyColor: "#E2E8F0",
    },

    // Soft Beige
    {
      varient: "Cream Beige",
      keyboardBG: "#EADBC8",
      specialKeys: "#C7B198",
      spaceKey: "#B89A7A",
      moreKeys: "#F5EFE6",
      keyColor: "#3E3E3E",
    },
  ];

  return (
    <div className="flex gap-2 w-full h-5 items-center justify-center overflow-hidden">
      {Vairent.map((item, i) => (
        <div className="flex gap-1 w-fit" key={i}>
          <button
            onClick={() => setHandleBG(item)}
            className={` cursor-pointer p-2 border-2 w-2 h-2  transition-all duration-150 rounded-full ${handleBG.varient === item.varient ? "border-white" : "border-black"} `}
            style={{ backgroundColor: item.keyboardBG }}
          ></button>
          <span className="text-xs">{item.varient}</span>
        </div>
      ))}
    </div>
  );
};

export default NavBar;
