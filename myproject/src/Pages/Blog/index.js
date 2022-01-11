import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import { FileUpload } from 'primereact/fileupload';

import imagem from '../../Media/NewTux.svg'
import "./blog.css";

export default function Blog() {
    const [category, setCategory] = useState([]);
    const [photo, setPhoto] = useState();
    const [description, setDescription] = useState();
    const [postDialog, setPostDialog] = useState(false);
    const [categoryDialog, setCategoryDialog] = useState(false);
    const [messageDialog, setMessageDialog] = useState(false);

    useEffect(() => {
        setCategory(["Teste"]);
        setDescription(
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
        )
        setPhoto(imagem)
    }, []);

    function onClick(param){

        if(param === 'postDialog'){
            setPostDialog(true);
        }

    };

    function onHide(param){

        if(param === 'postDialog'){
            setPostDialog(false);
        }    

  };

  return (
    <div className="blog">
      <div className="blog-menu">
        <div className="blog-menu-profile">
            <img src={photo} width="100px"></img>
        </div>
        <div className="blog-menu-person-description">{description}</div>
        <div className="blog-menu-post-categories">
          {category.map((cat) => (
            <Button label={cat} className="category-button" />
          ))}
        </div>
      </div>
      <div className="blog-body">
        <div className="blog-post">
          <div className="blog-post-image">Image</div>
          <div className="blog-post-resume">Text</div>
        </div>
      </div>
      <div className="blog-options">
        <div className="blog-option">
        <Button icon="pi pi-plus-circle" onClick={() => onClick('postDialog')} />
        <Dialog
          header="New Post"
          visible={postDialog}
          style={{ width: "50vw" }}
          onHide={() => onHide("postDialog")}
        >
            <form className="blog-post-form">
                <label htmlFor="title">Title</label>
                <InputText id="title" /> 
                <label htmlFor="subject">Subject</label>
                <InputTextarea id="subject" rows={3} cols={30} />
                <label htmlFor="text">Text</label>
                <InputTextarea id="text" rows={10} cols={30} />
                <label htmlFor="date">Date</label>
                <Calendar id="date" monthNavigator yearNavigator yearRange="1900:2099"></Calendar>
                <label htmlFor="publish">Publish</label>
                <SelectButton options={[{label: 'Yes', value: 'Y'}, {label: 'No', value: 'N'}, ]}></SelectButton>
                <label htmlFor="image">Image</label>
                <FileUpload id="image" name="demo[]" url="./upload" mode="basic" />                                                                  
            </form>
        </Dialog>
        </div>
        <div className="blog-option">
        <Button icon="pi pi-bars" onClick={() => onClick('categoryDialog')} />
        <Dialog
          header="Header"
          visible={categoryDialog}
          style={{ width: "50vw" }}
          onHide={() => onHide("postDialog")}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
        </div> 
        <div className="blog-option">
        <Button icon="pi pi-question-circle" onClick={() => onClick('helpDialog')} />
        <Dialog
          header="Header"
          visible={messageDialog}
          style={{ width: "50vw" }}
          onHide={() => onHide("postDialog")}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Dialog>
        </div>               
      </div>
    </div>
  );
}
