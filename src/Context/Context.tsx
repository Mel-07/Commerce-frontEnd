import { ReactNode, createContext } from "react"
import { useReducer} from "react"
import { productImage } from "./ProductImage"
type Resize = {
    x:number | undefined,
    y:number | undefined
}

type State ={
    cartMenu:boolean,
    lightBox:boolean,
    menu:boolean,
    resize:Resize,
    shoeNumber:number,
    homePageProductImage:{
        productNumber: string,
        checkingProduct: number
    }
    lightBoxImage:number,
    valueOfPrice:number,
    trackItem:boolean,
    trackedItemNumber:number
}
interface Props {
    children:ReactNode
}
type Action = {
    type:"previous"
} |
{
    type:"next"
} |
{

type:"cartMenu"

} | 
{
    type:"lightBox"
} |
{
    type:"minus"
} |
{
    type:'pluse'
} | 
{
    type:'add to cart'
}
| 
{
    type:'menu'
}
|
{
    type:'resize',
    payload:Resize
}|
{
    type:'home page image',
    payload:{
        productNumber:number,
    }
}|
{
    type:'light box image',
    payload:number
}|
{
    type: 'next home'
}
|
{
    type: 'previous home'
}
|
{
    type: 'delete'
}

type AppContext = State &  {
dispatch:React.Dispatch<Action>
}
const initialState = {
    cartMenu:false,
    lightBox:false,
    menu:false,
    resize:{
        x:0,
        y:0
    },
    shoeNumber:0,
    homePageProductImage:{
        productNumber:productImage[0],
        checkingProduct:0
    },
    lightBoxImage:0,
    valueOfPrice:0,
    trackItem:false,
    trackedItemNumber:0
    };
export const Context = createContext<AppContext>({
    ...initialState,
    dispatch:()=>{}

})

function reducer (state:State,action:Action){
    switch(action.type){
        case "lightBox":
            return{...state,
                lightBox: !state.lightBox
            };
        case 'cartMenu':
            if(!state.cartMenu){
                return {
                    ...state, cartMenu:true
                };
            }else{
                return {
                    ...state, cartMenu:false
                }
            }
            case 'menu':
                return {
                    ...state, menu: !state.menu
                };
            case 'resize':
                return {
                    ...state, resize:{
                        ...action.payload
                    }
                };
            case'minus':

            return {
                ...state,shoeNumber: state.shoeNumber <= 0 ? 0 : state.shoeNumber -1
            };

            case 'pluse':
                return{
                    ...state, shoeNumber: state.shoeNumber  + 1
                }
            case 'home page image':
                return{
                    ...state,homePageProductImage:{
                        productNumber:productImage[action.payload.productNumber],
                        checkingProduct:action.payload.productNumber
                    }
                }
                case 'next':{
                    return{
                        ...state,lightBoxImage: state.lightBoxImage < productImage.length-1 ? state.lightBoxImage + 1 : 0
                    }
                }
                case 'previous':{
                    return{
                        ...state,lightBoxImage:state.lightBoxImage <= 0 ? productImage.length -1 : state.lightBoxImage -1
                }
            }
                case 'light box image':{
                    return{
                        ...state,lightBoxImage:action.payload
                    }
                }
                case 'next home':{
                    return{
                        ...state,homePageProductImage:{
                            ...state.homePageProductImage,
                            checkingProduct:state.homePageProductImage.checkingProduct < productImage.length-1 ? state.homePageProductImage.checkingProduct + 1 : 0

                        }
                    }
                }
                case 'previous home':{
                    
                    return{
                        ...state,homePageProductImage:{
                            ...state.homePageProductImage,
                            checkingProduct:state.homePageProductImage.checkingProduct <= 0 ? productImage.length -1 : state.homePageProductImage.checkingProduct -1
                        }
                    }
                }

                case 'add to cart':{
                    return{
                        ...state,
                        valueOfPrice:state.shoeNumber * 125,
                        trackItem:state.shoeNumber > 0 ? true : false,
                        trackedItemNumber:state.shoeNumber,
                        shoeNumber:0
                    }
                }
                case 'delete':{

                    return{
                        ...state,
                        trackedItemNumber:0,
                        trackItem:false,

                    }
                }

        default: return state
    }

}


export function ContextProvider({children}:Props) {

    const [{cartMenu,lightBox,menu,resize,shoeNumber,homePageProductImage,lightBoxImage,valueOfPrice,trackItem,trackedItemNumber},dispatch] = useReducer(reducer,initialState)
  return (
    <Context.Provider value={{
        cartMenu,
        lightBox,
        menu,
        resize,
        shoeNumber,
        homePageProductImage,
        lightBoxImage,
        valueOfPrice,
        trackItem,
        trackedItemNumber,
        dispatch
    }}>
      {children}
    </Context.Provider>
  )
}



