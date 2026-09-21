import { FileSpreadsheet, UploadCloud } from "lucide-react";
import { useRef, useState } from "react";

export default function UploadArea({ onFile }: { onFile: (name: string, size: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  function accept(file?: File) {
    if (!file) return;
    if (!/\.(xlsx|xls)$/i.test(file.name)) { alert("Selecione um arquivo .xlsx ou .xls."); return; }
    onFile(file.name, `${(file.size / 1024 / 1024).toFixed(2)} MB`);
  }
  return <div className={`upload-area ${drag ? "drag" : ""}`} onDragOver={e => {e.preventDefault();setDrag(true)}} onDragLeave={() => setDrag(false)} onDrop={e => {e.preventDefault();setDrag(false);accept(e.dataTransfer.files[0])}} onClick={() => ref.current?.click()}>
    <div className="upload-icon"><UploadCloud size={34}/></div><h3>Importe sua planilha de motoristas</h3><p>Arraste seu arquivo Excel aqui ou clique para selecionar.</p><span className="file-types"><FileSpreadsheet size={16}/> .xlsx · .xls</span>
    <input ref={ref} type="file" accept=".xlsx,.xls" onChange={e => accept(e.target.files?.[0])}/>
  </div>;
}