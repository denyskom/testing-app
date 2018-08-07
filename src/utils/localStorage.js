import jsonwebtoken from 'jsonwebtoken'


module.exports = {

    setLocalStorage: function() {
        global.localStorage = {
            getItem: function (key) {
                return this[key];
            },
            setItem: function (key, value) {
                this[key] = value;
            },
            removeItem: function (key) {
                delete this[key];
            }
        };

        const token = jsonwebtoken.sign({ user: 'Test', exp: Math.floor(Date.now() / 1000) + 3000 }, 'shhhhh');
        localStorage.setItem('jwtToken', token);
    }
};