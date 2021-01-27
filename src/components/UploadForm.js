import React,{useState} from 'react'
import Progressbar from '../components/Progressbar';

export default function UploadForm() {
    const [ file,setFile ] = useState();
    const [ error,setError ]  = useState()
    const types = ['image/png','image/jpeg','image/jpg'];


    const handleChange = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
        
            setError(null)
            console.log(selected)
        }
        else{
            setFile(null)
            setError("choose proper image formate (.png / .jpeg/ .jpg)")
        }
        
    }
    return (
        <>
          <div className="addform"> 
            <form>
                <input onChange={handleChange} type="file" />
                { file ? <div> {file.name} </div> : <div> {error}</div>}
            </form>
          </div>
           
            { file && <Progressbar file={file} setFile={setFile} />}
        </>
    )
}
