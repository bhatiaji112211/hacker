let a = [
    "Initializing Hack tool....",
    "Conneting to Instagram....",
    "Connecting to server 1....",
    "Connection failed. retrying....",
    "Connecting to server 2....",
    "Connected succrssfully....",
    "Username I'm Saidshiv....",
    "Trying brute force....",
    "200k passwords tried....",
    "Match not found....",
    "200k passwords tried....",
    "Match not found....",
    "200k passwords tried....",
    "Match not found....",
    "200k passwords tried....",
    "Match not found....",
    "200k passwords tried....",
    "Match found....",
    "Accessing account....",
    "Hack Successfull...."
]
const sleep= async (seconds)=>{
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            reslove(true)
        },seconds*1000)
    })
}

const showHack = async (message)=>{
    await sleep(2)
    let text= document.getElementById("text")
    text.innerHTML=text.innerHTML+ message+"<br>"
}

(async()=>{
    for(let i = 0; i<a.length; i++){
        await showHack(a[i])
    }
})()