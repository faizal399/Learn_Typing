interface TextAreaProps {
  text: string;
}
const TextArea = ({ text }: TextAreaProps) => {
  return (
    <textarea
      value={text}
      className="w-[60%] outfit-Text-area focus:outline-2 focus:outline-gray-600  caret-amber-500- h-60 bg-gray-500 rounded text-white p-2 scroll-smooth scrollbar-none"
      placeholder="You can write any this here..."
    ></textarea>
  );
};

export default TextArea;
