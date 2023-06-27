'use client'

import React, {useEffect, useState} from 'react';
import {AiOutlineClose, AiOutlinePlus} from 'react-icons/ai'
import {BsImage} from 'react-icons/bs'

const Imperative = ({style, setImages, images, filesContent, setFilesContent, formData}) => {
  
  function handleImages(e){
    let sources = [...e.target.files].map((file) =>({content:URL.createObjectURL(file), name:file.name}))
    console.log(e.target.files, sources)
    
    setImages(e.target.files)
    setFilesContent(sources)
  }

  return (
    <label htmlFor='unit--images' style={{display:'flex', gap:'1rem', height:'100px', padding:'10px', paddingLeft:'0'}}>
      {filesContent?.map((file, i) => (
        <div key={i} style={{height:'100%', width:'auto', borderRadius:'15px', overflow:'hidden'}}>
          <div style={{ display: 'flex', alignItems: 'center', position:'relative', height:'100%', width:'auto' }} key={file.name}>
            <img src={file.content} alt={file.name} style={{objectFit:'cover', height:'80px', aspectRatio:'1/1'}}/>
            <button 
              style={{position:'absolute', top:'5px', right:'5px', borderRadius:'50%', border:'none', cursor:'pointer', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center'}}
              onClick={() => {}}
            >
              <AiOutlineClose color={'darkslategray'} fontSize={14} />
            </button>
          </div>
        </div>
      ))}
      <input id='unit--images' type={'file'} hidden onChange={(e)=>handleImages(e)} multiple/>

      <button style={{width:'100px', height:'100%',outline:'none', background:'transparent', border:'1px solid whitesmoke', ...style}}>
        <BsImage style={{}} color='white' fontSize='1rem'/>
        <p style={{fontSize:'0.6rem'}}>Upload or drag photo here</p>
      </button>
    </label>
  );
};

export default Imperative