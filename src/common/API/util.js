class Util {
    static get s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }

    static generateUUID() {
        return Util.s4 + Util.s4 + '-' + Util.s4 + '-' + Util.s4 + '-' +
            Util.s4 + '-' + Util.s4 + Util.s4 + Util.s4;
    }
}

export default Util;