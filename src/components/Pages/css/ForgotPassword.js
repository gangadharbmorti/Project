import React from 'react'

const ForgotPassword=()=> {
    return (
        <div>
            <h2>In Process</h2>
            <form>
                <div className="forgot-password">
                    <div className="list">
                        <label htmlFor="password">New Password</label>
                        <input type="password" name="password" id='password' />

                    </div>
                    <div></div>
                </div>
            </form>
        </div>
    )
}

export default ForgotPassword
