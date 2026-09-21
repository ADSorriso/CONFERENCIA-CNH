import { NavLink } from "react-router-dom";
import { BarChart3, Users, FileSpreadsheet, Activity, CheckCircle2, ScrollText, Settings, ShieldCheck } from "lucide-react";

const items = [
  ["/", "Dashboard", BarChart3],
  ["/motoristas", "Motoristas", Users],
  ["/importar", "Importar Excel", FileSpreadsheet],
  ["/processamento", "Processamento", Activity],
  ["/resultados", "Resultados", CheckCircle2],
  ["/logs", "Logs", ScrollText],
  ["/configuracoes", "Configurações", Settings]
] as const;

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark"><ShieldCheck size={22}/></div>
        <div><strong>CNH CHECKER</strong><small>DETRAN-MT</small></div>
      </div>
      <nav>
        {items.map(([to, label, Icon]) => (
          <NavLink key={to} to={to} end={to === "/"} className={({isActive}) => isActive ? "nav-item active" : "nav-item"}>
            <Icon size={18}/><span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer"><span className="online-dot"/> Sistema local <small>v1.0.0</small></div>
    </aside>
  );
}