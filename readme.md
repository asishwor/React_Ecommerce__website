npm @reduxjs/toolkit ract-redux

app--store
import configurestore from redux
export const store = configurestore({
reducer:{

    }

})

maintsx
import store
import Provider
<PRovider store ={store}>
<App/>
</PRovider>


<!-- Feature -->
feature counterSlice
import createSlice
const initialState={
    count:0;
}
const counterSlice= createSlice({
    name:'counter',
    initialstate,
    Reducer:{
        increment:(state)=>state.count+=1;
    }
})

export {increment.decrement} 