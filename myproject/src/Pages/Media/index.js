
import './media.css'

export default function Media() {
    return (
      <div className="media">
        <div className="inputCard">
          <label>Name: </label>
          <input type="text"></input>
          <label>Author: </label>
          <input type="text"></input> 
          <label>Type: </label>
          <input type="text"></input>   
          <label>URL: </label>
          <input type="text"></input>
          <label>Status: </label>
          <input type="text"></input> 
          <label>Description: </label>
          <input type="text"></input>                                                          
        </div>
        <div className="buttonsInputCard">
          <button>Enviar</button>
          <button>Limpar</button>
        </div>
      </div>
    );
  }