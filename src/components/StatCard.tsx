import type { ReactNode } from "react";

export default function StatCard({ title, value, info, icon, tone = "" }: {
  title: string; value: string | number; info?: string; icon: ReactNode; tone?: string;
}) {
  return <div className="stat-card">
    <div className={`stat-icon ${tone}`}>{icon}</div>
    <div><span>{title}</span><strong>{value}</strong>{info && <small>{info}</small>}</div>
  </div>;
}