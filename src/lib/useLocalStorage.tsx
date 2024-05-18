export const useLocalStorage = (key:string) => {
    const addItems = (value: string) =>{
        const prev = getItems();
        let items;
        if(prev === undefined){
            items = {
                'Meat' : false,
                'Hunter' : false,
                'Tamer' : false
            }
        }else{
            items = prev;
 
        }
        items[value] = true;
        console.log(items);
        
        try {
            window.localStorage.setItem(key, JSON.stringify(items))
        }catch (error){
            console.log(error);            
        };
    }

    const getItems = () =>{
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        }catch (error){
            console.log(error);            
        };
    }

    return {addItems, getItems};
}
