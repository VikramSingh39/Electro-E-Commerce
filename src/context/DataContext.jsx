import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react"

export const DataContext = createContext(null);

export const DataProvider = ({children})=>{
    const[data, setData] = useState()

    // fetch all products from API
    const fetchAllProducts = async()=>{
        try{
            const response = await axios.get('https://fakestoreapi.in/api/products?limit=150')
            const productsData = response.data.products;
            setData(productsData);
            localStorage.setItem('productsData', JSON.stringify(productsData))
        } 
        catch (error){
            console.log("Error in fetching products: ", error);
        }
    }
    
    useEffect(()=>{
        const localData = localStorage.getItem('productsData');

        if(localData){
            setData(JSON.parse(localData));
        }else{
            fetchAllProducts();
            console.log('API Call happen');
        }
    },[])

    return <DataContext.Provider value={{data, setData}} >
      {children}
    </DataContext.Provider>
    
}

export const getData = ()=> useContext(DataContext);