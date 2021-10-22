import createDataContext from './createDataContext';

const fReducer =(state,action)=>{
    switch(action.type){
        case 'get_driver':
            return action.payload;
        default:
            return state;
    }
}

const getDriver = dispatch =>{
    return  async () =>{
        console.log("sipipipi")
    };
};

export const { Context, Provider } = createDataContext(
    fReducer, 
    {getDriver}, 
    []
);