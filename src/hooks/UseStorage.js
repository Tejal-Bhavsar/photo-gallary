import React, { useEffect, useState } from 'react';
import {DbStorage, DbFirestore,timestamp } from '../firebase/Config'

export default function UseStorage(file) {
    const [ progress, setProgress ] = useState()
    const [ error,setError ] = useState()
    const [ url,setUrl ] = useState()

    useEffect(() => {
        //refrence
        const storageRef = DbStorage.ref(file.name);
        const firestoreRef = DbFirestore.collection("images")
        const createdAt = timestamp
        // stored in storage as a media image storage
        storageRef.put(file).on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setProgress(percentage);
        },(err) => {
            setError(err);
        }, async () => {  // to get url downloaded for d
            const url = await storageRef.getDownloadURL();
            console.log(url,"hereis url")
            // adding images url to firestore
             firestoreRef.add({url,createdAt})  
             setUrl(url);
        }
        )
    },[file])

    return {progress,error,url}
    
}
