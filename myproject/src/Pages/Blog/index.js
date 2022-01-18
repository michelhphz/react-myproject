import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';
import { Fieldset } from 'primereact/fieldset';
import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Tooltip } from 'primereact/tooltip';

import 'primereact/resources/themes/arya-blue/theme.css'

import imagem from '../../Media/NewTux.svg'
import "./blog.css";

import DialogPost from './dialogPost'
import API from '../../API/api.js';

export default function Blog() {
  const [category, setCategory] = useState([]);
  const [photo, setPhoto] = useState();
  const [description, setDescription] = useState();
  const [newPostDialog, setNewPostDialog] = useState(false);
  const [postDialog, setPostDialog] = useState(false);
  const [categoryDialog, setCategoryDialog] = useState(false);
  const [messageDialog, setMessageDialog] = useState(false);

  const [post, setPost] = useState([]);

  useEffect(() => {
    setCategory([
      "All"
    ]);
    setDescription(
        "Welcome to my blog!"
    )
    setPhoto(imagem)

    findPosts()

  }, []);

  function onClick(param){

    if(param === 'postDialog'){
        setPostDialog(true);
    }

    if(param === 'newPostDialog'){
      setNewPostDialog(true);
    }        

    if(param === 'categoryDialog'){
      setCategoryDialog(true);
    }   
        
    if(param === 'messageDialog'){
      setMessageDialog(true);
    }          

  };

  function onHide(param){

    if(param === 'postDialog'){
        setPostDialog(false);
    }  

    if(param === 'newPostDialog'){
      setNewPostDialog(false);
    }          
        
    if(param === 'categoryDialog'){
      setCategoryDialog(false);
    }      
        
    if(param === 'messageDialog'){
      setMessageDialog(false);
    }           

  };

  function findPosts(){

    setPost([])

    API.get('/post/')
    .then((response) => {
      var data = response.data
      console.log(data)

      data.forEach(element => {
        
        if(element.publish === true){
          setPost([ ...post, {
            id: element.id,
            title: element.title,
            subject: element.subject,
            text: element.text,
            date: element.date,
          }]) 
        }       
      });

    })
    .catch((error) => {
      console.log(error)
      alert("Error to find posts!")
    })

    if(post.length === 0){
      setPost([{
        text: "Not found posts!"
      }])
    }

  }


  return (
    <div className="blog">
      <div className="blog-menu">
        <div className="blog-menu-profile">
            <img src={photo} width="100px"></img>
        </div>
        <div className="blog-menu-person-description">          
      
        </div>
        <div className="blog-menu-post-categories">
          {category.map((cat) => (
            <Button label={cat} 
                    icon="pi pi-angle-right" 
                    className="category-button"/>
          ))}
        </div>
      </div>
      <div className="blog-body">

        {post.map((p) => (
          <div key={p.id} className="blog-post">            
            <Fieldset className="blog-post-text">
              <p>{p.text}</p>
            </Fieldset>            
            <div className="blog-post-resume">
              <h1>{p.title}</h1>
              <h4 className="blog-post-resume-subject">
                {p.subject}
              </h4>
              <div className="blog-post-resume-icons">
                <Button icon="pi pi-heart" className="blog-post-resume-icon"/>
                <Button icon="pi pi-comment" className="blog-post-resume-icon"/>
                <Button icon="pi pi-share-alt" className="blog-post-resume-icon"/>
              </div>
            </div>
          </div> 
        ))}  
                   
      </div>
      <div className="blog-options">
        <div className="blog-option">
          <Button tooltip="All Posts"
                  tooltipOptions={{position: 'left'}}
                  icon="pi pi-th-large" 
                  className="blog-option-button"
                  onClick={() => onClick('postDialog')}/> 
          <Dialog
            header="All Posts"
            visible={postDialog}
            style={{ width: "50vw" }}
            onHide={() => onHide("postDialog")}
          >
            <DataTable scrollable responsiveLayout="scroll">
              <Column field="code" header="Title"></Column>
              <Column field="name" header="Date"></Column>
              <Column field="category" header="Category"></Column>
              <Column field="quantity" header="Actions"/>
            </DataTable>             
          </Dialog>                    
        </div>      
        <div className="blog-option">
        <Button tooltip="New Post"
                tooltipOptions={{position: 'left'}}
                icon="pi pi-plus-circle"
                className="blog-option-button"
                onClick={() => onClick('newPostDialog')} />
          <Dialog
            header="Post"
            visible={newPostDialog}
            style={{ width: "50vw" }}
            onHide={() => onHide("newPostDialog")}
          >
            <DialogPost/>
          </Dialog>
        </div>
        <div className="blog-option">
          <Button tooltip="Categories"
                  tooltipOptions={{position: 'left'}}
                  icon="pi pi-list"
                  className="blog-option-button" 
                  onClick={() => onClick('categoryDialog')} />        
          <Dialog
            header="Categories"
            visible={categoryDialog}
            style={{ width: "50vw" }}
            onHide={() => onHide("categoryDialog")}
          >                       
            <form className="blog-post-form">
                <h2>New Category</h2>
                <span className="blog-post-form-field">
                  <label htmlFor="name">Name</label>
                  <InputText id="name" /> 
                </span>
            </form>
            <div className="blog-post-button">
              <Button label="Add" icon="pi pi-check-circle" className="p-button-success" /> 
            </div> 
            <DataTable responsiveLayout="scroll">
              <Column field="name" header="Name"></Column>
              <Column field="actions" header="Actions"></Column>
            </DataTable>             
          </Dialog>
        </div> 
        <div className="blog-option">
          <Button tooltip="Message"
                  tooltipOptions={{position: 'left'}}
                  icon="pi pi-inbox" 
                  className="blog-option-button"
                  onClick={() => onClick('messageDialog')} />
          <Dialog
            header="Send Message"
            visible={messageDialog}
            style={{ width: "50vw" }}
            onHide={() => onHide("messageDialog")}
          >
            <form className="blog-post-form">
              <InputTextarea id="text" rows={5} cols={80} />
            </form>              
            <div className="blog-post-button">
              <Button label="Submit" icon="pi pi-check-circle" className="p-button-success" /> 
            </div>
          </Dialog>
        </div>               
      </div>
    </div>
  );
}
