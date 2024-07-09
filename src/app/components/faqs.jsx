const FAQItem = ({ question, answer }) => (
    <div className="w-full h-full flex flex-col items-start p-6">
      <p className="text-xl text-primary font-semibold mb-4">{question}</p>
      <p className="text-sm text-black font-regular">{answer}</p>
    </div>
  );
  
  export default FAQItem;