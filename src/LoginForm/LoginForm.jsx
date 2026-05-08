function LoginForm() {

const login = () => {
    console.log('when i click this button, admin will log in');
}
    return (
        <>
        <div>

            <form onSubmit={login}>

                <label>
                
                <br/>
                Username:
                 <input name="username"/>
                 <br/>
                 Password:
                 <input name="password"/>
                </label>

            <button>submit</button>

            </form>

             

        </div>
        </>
    )
}

export default LoginForm;