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
       
    };
};

export const { Context, Provider } = createDataContext(
    fReducer, 
    {getDriver}, 
    []
);