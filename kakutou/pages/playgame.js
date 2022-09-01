import {DataContext} from '../DataContext'
import {useContext, useEffect, useState} from 'react'


export default function Playgame() {
    const [msg,setMsg]=useState(null)
    const context = useContext(DataContext)
    

return(
    <>
    <h2>hello</h2>
    {msg}
    </>
)
}