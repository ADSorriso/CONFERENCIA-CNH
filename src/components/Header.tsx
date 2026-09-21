import { Bell, Moon, Sun, UserCircle } from "lucide-react";
import { useState } from "react";

export default function Header({ title, subtitle }: { title: string; subtitle?: string }) {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }
  return (
    <header className="topbar">
      <div><h1>{title}</h1>{subtitle && <p>{subtitle}</p>}</div>
      <div className="top-actions">
        <span className="system-status"><i/> Sistema operacional</span>
        <button className="icon-btn" onClick={toggle} title="Alternar tema">{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="icon-btn" title="Notificações"><Bell size={18}/></button>
        <UserCircle size={30} className="user-icon"/>
      </div>
    </header>
  );
}