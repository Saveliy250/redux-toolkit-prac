import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "./hooks/redux";
import {fetchUsers} from "./store/reducers/ActionCreator";
import PostContainer from "./components/PostContainer";

function App() {

    const dispatch = useAppDispatch();
    const {users, error, isLoading} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="App">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
            <PostContainer/>
        </div>
    );
}

export default App;
