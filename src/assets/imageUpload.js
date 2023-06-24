'use client'

import React, { useEffect, useState, useRef } from "react"
import { AiOutlineClose } from "react-icons/ai"
export const ImageUpload = () => {
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const fileRef = useRef(null)

    //fileRef.current.files => {
    // "0":{}
    //}

    // create a preview as a side effect, whenever selected file is changed
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        console.log(typeof(selectedFile))
        const objectUrlArray = selectedFile.map((item, index)=>({id:index,url:URL.createObjectURL(item), file:item}))
        // const objectUrl = URL.createObjectURL(selectedFile)

        console.log(objectUrlArray)
        setPreview(objectUrlArray)

        // free memory when ever this component is unmounted
        return () => {
            objectUrlArray.forEach(element => {
                URL.revokeObjectURL(element.url)
            });
        }
    }, [selectedFile])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        // I've kept this example simple by using the first image instead of multiple
        let targets = fileRef.current.files
        let target = Object.values(targets)
        console.log(target, targets)
        setSelectedFile(target)
    }

    function cancelPreview(id) {
        let newPreview = preview.filter(item=>item.id !== id)
        setPreview(newPreview)
        let files = fileRef.current.files
        console.log(id, preview, newPreview, files)


        // delete(files[id])

        console.log(files)
        // let newFileRef = {}
        // console.log(Object.values(files), files)

        // let filesArray = Object.values(files)

        // for(let i=0; i<newPreview.length; i++){
        //     console.log(newFileRef)
        //     Object.assign(newFileRef, {[i]:newPreview[i].file})
        // }

        // console.log(newFileRef)
        // fileRef.current.files = newFileRef
    }

    return (
        <div style={{display:'flex',gap:'1rem',alignItems:'center',minHeight:'100px'}}>
            {selectedFile && preview?.map((item, id)=>(
                <div key={id} style={{position:'relative'}}>
                    <img src={item.url} width='100px' height={100} style={{objectFit:'cover'}} />
                    <button onClick={()=>cancelPreview(item.id)} style={{position:'absolute', top:'0px', right:'0px', width:'20px', height:'20px', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'50%', border:'none', cursor:'pointer'}} >
                        <AiOutlineClose color="white"/>
                    </button>
                </div>
            )) }
            <input type={'file'} ref={fileRef} onChange={onSelectFile} accept={'image/*'} multiple />
        </div>
    )
}
