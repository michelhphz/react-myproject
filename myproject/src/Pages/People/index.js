
import "./people.css";

export default function People() {
  return (
    <div className="people">
      <div className="inputCard">
        <label>Email: </label>
        <input type="email"></input>
        <label>Password: </label>
        <input type="password"></input>        
        <label>Name: </label>
        <input type="text"></input>
        <label>Birth: </label>
        <input type="date"></input>
        <label>Phone: </label>
        <input type="number"></input>
      </div>
      <div className="buttonsInputCard">
        <button>Submit</button>
        <button>Clear</button>
      </div>
    </div>
  );
}