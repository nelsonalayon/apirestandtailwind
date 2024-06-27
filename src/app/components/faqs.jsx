const FAQItem = ({ question, answer }) => (
    <div className="w-1/2 h-1/2 flex flex-col items-start p-6 bg-red-300">
      <p className="text-xl text-primary font-semibold mb-4">{question}</p>
      <p className="text-sm text-black font-regular">{answer}</p>
    </div>
  );
  
  export default FAQItem;