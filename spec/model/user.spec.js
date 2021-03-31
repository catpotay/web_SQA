describe("User", function () {
    const User = require('C:/Users/asus/Downloads/web_SAD/src/models/user.js')
    let user
    let password = "hh9csj89js89ajf8s9"

    beforeEach(() => {
        user = new User({})
        console.log(user)
    })

    it("should encrypt the password correctly", () => {
        user.methods.encryptPassword(password)
    })



})
