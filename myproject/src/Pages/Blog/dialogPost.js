import { useEffect, useState } from "react";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';

import API from '../../API/api.js';

export default function DialogPost(){
    
    const [title, setTitle] = useState('');
    const [subject, setSubject] = useState('');
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [publish, setPublish] = useState(false);
    const [clear, setClear] = useState('');
    const [done, setDone] = useState('');

    useEffect(() => {
      
      setClear(false);
      setDone(false);

    }, [clear, done]);

    function clearAll(){
      setTitle("");
      setSubject("");
      setText("");
      setDate("");
      setPublish(false);

      setClear(true);
    }

    function includePost(){        

      if(title === '' || title === null){
        alert('Title is required!');
        return;
      };

      if(subject === '' || subject === null){
        alert('Subject is required!');
        return;
      };    
      
      if(text === '' || text === null){
        alert('Text is required!');
        return;
      };    
      
      if(date === '' || date === null){
        setDate(new Date())
      };       

      var data = {
        id: null,
        title: title,
        subject: subject,
        text: text,
        date: date,
        publish: publish
      }

      API.post('/post', data)
      .then((response) => {
        console.log(response.data)
        alert("Post criado com sucesso!")
      })
      .catch((err) => {
        console.log(err)
        alert("Erro ao inserir post!")
      });
         
      setClear(true);
    }

    return(
      <div>
        <form className="blog-post-form">
            <span className="blog-post-form-field">
              <label htmlFor="title">Title</label>
              <InputText id="title" 
                         value={title}
                         onChange={(e) => setTitle(e.target.value)} /> 
            </span>
            <span className="blog-post-form-field">
              <label htmlFor="subject">Subject</label>
              <InputTextarea id="subject" 
                             rows={3} 
                             cols={30} 
                             value={subject}
                             onChange={(e) => setSubject(e.target.value)} />
            </span>
            <span className="blog-post-form-field">
              <label htmlFor="text">Text</label>
              <InputTextarea id="text" 
                             rows={10} 
                             cols={30}
                             value={text} 
                             onChange={(e) => setText(e.target.value)} />
            </span>
            <span className="blog-post-form-field">
              <label htmlFor="date">Date</label>
              <Calendar id="date" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        dateFormat="dd/mm/yy"
                        monthNavigator 
                        yearNavigator                         
                        yearRange="1900:2099"/>
            </span>
            <span className="blog-post-form-field">
              <label htmlFor="publish">Publish</label>
              <SelectButton options={[{label: 'Yes', value: true}, {label: 'No', value: false}, ]}
                            onChange={(e) => setPublish(e.target.value)}
                            value={publish}
              />
            </span>
        </form>
        <div className="blog-post-button">
          <Button label="Done" 
                  icon="pi pi-check-circle" 
                  className="p-button-success"
                  onClick={() => includePost()} /> 
          <Button label="Clear" 
                  icon="pi pi-minus-circle" 
                  className="p-button-danger"
                  onClick={() => clearAll()} /> 
        </div>
      </div>                  
    )
}