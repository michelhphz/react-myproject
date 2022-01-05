
import './valuation.css'

export default function Valuation() {
    return (
      <div className="valuation">
        <div className="inputCard">
          <label>Valuation: </label>
          <input type="text"></input>
          <label>Date: </label>
          <input type="text"></input> 
          <label>Comment: </label>
          <input type="text"></input>                                                                     
        </div>
        <div className="buttonsInputCard">
          <button>Enviar</button>
          <button>Limpar</button>
        </div>
      </div>
    );
  }