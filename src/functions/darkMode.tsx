export default function darkMode() {
    const html = document.querySelector("html");
    (html as HTMLElement).classList.toggle("dark");
  } 