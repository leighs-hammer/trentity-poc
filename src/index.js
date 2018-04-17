import CryptoJS from "crypto-js"
import sha256 from "sha256"
import gateKey from "./gatekeeper"

const mockPreKey = "1234567890"
const mockKey = sha256(mockPreKey)
console.log(mockKey)

const data = {
	time: Date.now(),
	message: "Some string message"
}

// !!! pre message send
const encMessage = CryptoJS.AES.encrypt(JSON.stringify(data), gateKey).toString()
console.log(encMessage)

// Net work push

// !!! incoming message

const decMessage = CryptoJS.AES.decrypt(encMessage.toString(), gateKey)

const OUTPUT = decMessage.toString(CryptoJS.enc.Utf8)
console.log(OUTPUT)
