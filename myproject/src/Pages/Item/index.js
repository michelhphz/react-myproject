
import './item.css'

export default function Item() {
    return (
      <div className="item">
        <div className="inputCard">
          <label>Name: </label>
          <input type="email"></input>
          <label>Price: </label>
          <input type="number"></input>   
          <label>Type: </label>
          <input type="text"></input>                
        </div>
        <div className="buttonsInputCard">
          <button>Enviar</button>
          <button>Limpar</button>
        </div>
      </div>
    );
  }