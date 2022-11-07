import React,{useContext} from "react";


export const PurchasesContext = React.createContext([])
export const usePurchasesContext=(mass)=>{
    const purchases = useContext(PurchasesContext);

    if(!purchases){
        console.error('Not purchases')
        return;
    }

    return purchases;
}