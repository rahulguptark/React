Important points to remember:-

> Redux is a different thing and React-redux is a different thing. Redux is a core library and react-redux is its implementation to do the wiring so that Redux and react can talk to each other.

> Always start from creating a store
> Every application has only one store which is called single source of truth.

> Features are called slice. slice has a method called createSlice to create slice we need three things.
1. name:
2. initial state
3. reducers list

reducers is an object in which we can give any number of key function pairs. in reducers we get acces of two things state and action.

> Dispatch is used to send the reducer

> useSelector is used to get the values. we get the access of the state in the callback of selector