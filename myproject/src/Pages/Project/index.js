
import './project.css'

export default function Project() {
    return (
      <div className="project">
        <div className="inputCard">
          <label>Name: </label>
          <input type="text"></input>
          <label>Description: </label>
          <input type="text"></input> 
          <label>Date: </label>
          <input type="text"></input>   
          <label>URL: </label>
          <input type="text"></input>
          <label>Type: </label>
          <input type="text"></input> 
          <label>Hits: </label>
          <input type="text"></input>                                                                   
        </div>
        <div className="buttonsInputCard">
          <button>Enviar</button>
          <button>Limpar</button>
        </div>
      </div>
    );
  }