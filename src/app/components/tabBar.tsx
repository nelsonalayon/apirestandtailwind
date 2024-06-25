export default function TabBar() {
  return (
    // text default by copilot 
    <div className="flex justify-center bg-tertiary">
      <div className="flex justify-between w-1/2">
        <div className="flex">
          <a href="#home" className="text-white p-4">
            Home
          </a>
          <a href="#about" className="text-white p-4">
            About
          </a>
          <a href="#services" className="text-white p-4">
            Services
          </a>
          <a href="#contact" className="text-white p-4">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}