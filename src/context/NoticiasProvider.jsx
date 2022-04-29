import axios from 'axios'
import { useState, useEffect, createContext } from 'react'



const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [categoria,setCategoria] = useState('general')

    const handleChangeCategoria = e => {
        setCategoria(e.target.value)
    }


    useEffect( () => {
        const consultarApi = async () => {
            const url = `https://newsapi.org/v2/top-headlines?
            country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url)

            console.log(data)
        }
        consultarApi()
    },[categoria])

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleChangeCategoria
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )

}

export {
    NoticiasProvider
}

export default NoticiasContext