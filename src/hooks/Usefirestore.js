import React, { useEffect, useState } from 'react'
import { DbFirestore } from '../firebase/Config'

export default function Usefirestore(collection) {
    const [ documents, setdocuments ] = useState([]);

    useEffect(() => {
        DbFirestore.collection(collection).orderBy
        ('createdAt','desc').onSnapshot((snapshot) => setdocuments((snapshot.docs.map((snap) => ({id: snap.id,
        doc: snap.data()})  ))))
    },[collection])
 
    
    return { documents };
}

