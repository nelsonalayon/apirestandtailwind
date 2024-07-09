const items = [
  "about us",
  "contact us",
  "terms and conditions",
  "privacy policy",
  "faqs",
  "thanks for Platzi and for visiting this page",
];

export default function Footer() {
  return (
    // text default by copilot
    <footer className="w-full h-auto bg-slate-400 p-6 space-y-2">
      <div>
        {items.map((item, index) => (
          <p key={index} className="text-sm text-gray-300">
            {item}
          </p>
        ))}
      </div>
    </footer>
  );
}
