import type React from "react";
import { useEffect, useRef } from "react";
import { useKeyboard } from "../context/KeyboardContext";

interface KeyboardProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}


const Keyboard = ({ setText }: KeyboardProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const {
    capsLock,
    setCapsLock,
    shift,
    setShift,
    activeKey,
    setActiveKey,
    handleBG,
  } = useKeyboard();

  const keyboardLayout = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    ["Caps", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    ["Space"],
  ];

  const normalizeKey = (key: string) => {
    if (key === " ") return "Space";
    if (key === "CapsLock") return "Caps";

    return key.toUpperCase();
  };

  useEffect(() => {

    audioRef.current = new Audio(
            "/sound/soul_serenity_sounds-typing-sound-02-229861.mp3",
          );

    const handlePhysicalClick = (e: KeyboardEvent) => {
      e.preventDefault();
      setActiveKey(normalizeKey(e.key));
      console.log(e.key);

        if (audioRef.current) {
        // audioRef.current.pause();
        // audioRef.current.currentTime = 0;
        audioRef.current.play();
      }

      switch (e.key) {
        case "Backspace":
          setText((prev: string) => prev.slice(0, -1));
          break;
        case "Enter":
          setText((prev: string) => prev + "\n");
          break;
        case "CapsLock":
          setCapsLock((prev) => !prev);
          break;
        case "Shift":
          setShift((prev) => !prev);
          break;
        case "Tab":
          setText((prev: string) => prev + "\t");
          break;
        case " ":
          setText((prev: string) => prev + " ");
          break;
        default: {
          let output: string = e.key;

          if (shift) {
            output = e.key.toUpperCase();
          } else if (capsLock) {
            output = e.key.toUpperCase();
          } else {
            output = e.key.toLowerCase();
          }
          
          audioRef.current?.play()
          setText((prev: string) => prev + output);
          break;
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      setActiveKey("");
      if (e.key === "Shift") {
        setShift(false);
      }
    };

    window.addEventListener("keydown", handlePhysicalClick);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handlePhysicalClick);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setText, capsLock, setShift, shift]);

  return (
    <div
      className="h-fit w-fit p-4 flex flex-col gap-1 transition-all duration-200 bg-[#E9C1BF] rounded-2xl shadow-[0px_10px_4px_rgb(0,0,0,0.5)] selection:none "
      style={{
        backgroundColor: handleBG.keyboardBG,
        // boxShadow: `0 4px 12px ${handleBG.keyboardBG}4`,
      }}
    >
      {keyboardLayout.map((keys, index) => (
        <div
          key={index}
          className="flex gap-1 items-center w-100%  justify-between"
        >
          {keys.map((key, i) => (
            <button
              style={{
                backgroundColor:
                  key === "Space"
                    ? handleBG.spaceKey
                    : ["Shift", "Enter", "Backspace", "Tab", "Caps"].includes(
                          key,
                        )
                      ? handleBG.specialKeys
                      : handleBG.keyColor,
              }}
              key={i}
              className={`w-12 h-12
    borde
    rounded-2xl
    transition-all duration-100
    drop-shadow-[0_2px_1px_rgba(0,0,0,0.4)]
    ${key === "Enter" ? `w-25 ` : ""}
    ${key === "Space" ? "w-70 bg-[#F9BDBC] active:scale-1.1 mx-auto" : "bg-white"}
    ${key === "Shift" ? "w-30" : ""}
    ${key === "Backspace" ? "w-22" : ""}
    ${key === "Tab" ? "w-15" : ""}
    ${key === "Caps" ? "w-16" : ""}

    ${
      activeKey === normalizeKey(key)
        ? "bg-red-400 scale-95 text-black shadow-inner"
        : ""
    }
  `}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
