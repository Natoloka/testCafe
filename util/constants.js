class Util{
    consts = {
        email: "natoloka@ukr.net",
        url: "https://ukr.net"
    }

    getPath() {
        return './'+Date.now()+'.png'
    }
}

module.exports = new Util()