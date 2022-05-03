import React from 'react';
import { Navigate, Route } from 'react-router';

// const ProtectedRoute = ({auth, component:Component,authed, ...rest}) => {
//     return (
//         <div>
//             <Route {...rest} render={(props)=>{
//                 if(auth) return <Component {...props} />
//                 if(!auth) return <Navigate to={{path : '/', state : {from : props.location}}} />
//             }} />
//         </div>
//     );
// }

const ProtectedRoute = ({component: Component, auth, ...rest}) => {
    return (
        <Route {...rest} render={(props) => auth === true
        ? <Component {...props}/>
        : <Navigate to={{pathname: '/', state: {from: props.location}}}/>}/>
    );
}

export default ProtectedRoute;
