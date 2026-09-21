import { ShieldAlert, X } from "lucide-react";

export default function CaptchaModal({ onContinue, onCancel }: { onContinue: () => void; onCancel: () => void }) {
  return <div className="modal-backdrop">
    <div className="modal captcha-modal">
      <div className="captcha-icon"><ShieldAlert size={34}/></div>
      <h2>Intervenção necessária</h2>
      <p>O portal solicitou uma verificação humana.</p>
      <div className="alert warning"><p>Realize a verificação no navegador e depois clique em <b>Continuar</b>.</p></div>
      <div className="modal-actions"><button onClick={onCancel}><X size={17}/> Cancelar</button><button className="primary" onClick={onContinue}>Continuar</button></div>
    </div>
  </div>;
}