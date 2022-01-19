import { useEffect, useState } from "react";
import moment from 'moment'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import API from '../../API/api.js';

export default function DialogPostList(){
    
    const [post, setPost] = useState([]);

    useEffect(() => {
        findPosts()
    }, []);

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
                text:  element.text,
                publish: element.publish === true ? "Yes" : "No",
                date: moment(element.date).format('DD/MM/YYYY'),
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
    
    return(
        <div>
            <DataTable value={post}
                       scrollable 
                       responsiveLayout="scroll">
                
                <Column field="title" header="Title"/>
                <Column field="date" header="Date"/>
                <Column field="category" header="Category"/>
                <Column field="publish" header="Publish"/>
                <Column field="" header="Actions"/>

            </DataTable>             
        </div>
    )
}