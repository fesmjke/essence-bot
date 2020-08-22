import Config from "../src/settings/config";

describe('Config',() => {
    const config = new Config();
    it('get token that not equals undefined or \'\'',() => {
        expect(config.token).not.toBe(undefined)
        expect(config.token).not.toBe('')
    })
    it('get port number that not equals undefined or \'\'',() => {
        expect(config.port).not.toBe(undefined)
        expect(config.port).not.toBe('')
    })
})