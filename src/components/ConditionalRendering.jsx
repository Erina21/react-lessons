import React from 'react'

function ConditionalRendering() {
    const isLoggedIn = false;
    const isAdmin = true;
    if (isLoggedIn) {
        return <div>Welcome!</div>
    } else {
        return <div>Please log in.</div>
        return (
            <div>
                
                isAdmin?(<h2>Admin</h2>):(<h2>Not Admin</h2>)
                
            </div>
        )
    }   
    
}

export default ConditionalRendering