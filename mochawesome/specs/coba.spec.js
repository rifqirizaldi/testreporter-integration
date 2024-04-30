import {expect} from 'chai'
import { describe, it } from 'mocha'

describe("C001 - Coba test reporter",function(){
    it("F001 - Test sum", function(){
        let sum = 1+1
        expect(sum).to.equal(2)
    })

    it("F002 - Test type data", function(){
        let word = "ARIS"
        expect(word).to.be.a('string')
    })

    it("F003 - Test type data", function(){
        let word = 123
        expect(word).to.be.a('boolean')
    })
})
