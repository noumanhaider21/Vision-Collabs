class loginPage{

    login: string
    email: string
    password: string
    submit: string

    constructor(){
        
        this.login= '//a[@href="/login"]'
        this.email='//input[@name="email"]'
        this.password='//input[@name="password"]'
        this.submit= '//button[@type="submit"]'
        


    }

}
export default loginPage;