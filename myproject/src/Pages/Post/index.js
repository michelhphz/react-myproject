import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'

import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="post-panel">
        <div className="post-panel-list">
          <div className="post-panel-list-body">
            <DataTable responsiveLayout="scroll" className='table-post'>
              <Column field="code" header="Title"></Column>
              <Column field="name" header="Date"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Actions"></Column>
            </DataTable>            
          </div>
        </div>
      </div>
    </div>
  );
  /*  
  return (
    <div className="post">   
      <div className="post-input-card">
        <div className="post-input-fields">
          <label>Title: </label>
          <input type="text"></input>
          <label>Subject: </label>
          <input type="text"></input>
          <label>Text: </label>
          <input type="text"></input>
          <label>Date: </label>
          <input type="text"></input>
          <label>Publish: </label>
          <input type="text"></input>
          <label>Image: </label>
          <input type="text"></input>
        </div>
        <div className="post-buttons-input-card">
          <button>Enviar</button>
          <button>Limpar</button>
        </div>
      </div>
    </div>
  );
*/
}
