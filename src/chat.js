import { networkData } from "./socket"

//Valid characters for usernames.
const validCharacters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u',
    'v', 'w', 'y', 'x', 'z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W',
    'Y', 'X', 'Z', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '0', '!',
    '@', '$', '^', '*', '(', ')', '{',
    '}', '[', ']', ';', ':', `'`, '"',
    `\\`, ',', '.', '/', '?', '🙄', '😫',
    '🤔', '🔥', '😌', '😍', '🤣', '❤️', '😭',
    '😂', '⭐', '✨', '🎄', '🎃', '🔺', '🔻',
    '🎄', '🍬', '🍭', '🍫', ' ',
    '-', '_', '=', '|', '<', '>', ':', "'"
]


const applyValidCharacters = (str) => {
    let temp = ""
    str.split('').forEach(character => {
        if (validCharacters.includes(character)) { temp += character }
    })
    return temp
}


const sanitizeChat = (string, isMessage) => {
    string = string.replace(/</g, "")
    // string = string.replace(/>/g, ""); // commented out for ">:(" and "> text", should still sanitize with only <
    if (isMessage == true) {
        string = string.replace(/:doublek:/g, "<img height='20' width='20' src='emotes/doublek.png' alt=':doublek:' />")
        string = string.replace(/:facepalm:/g, "<img height='20' width='20' src='emotes/facepalm.png' alt=':facepalm:' />")
        string = string.replace(/:kappa:/g, "<img height='20' width='20' src='emotes/kappa.png' alt=':kappa:' />")
        string = string.replace(/:mariostyle:/g, "<img height='20' width='20' src='emotes/mariostyle.gif' alt=':mariostyle:' />")
        string = string.replace(/:pogchamp:/g, "<img height='20' width='20' src='emotes/pogchamp.png' alt=':pogchamp:' />")
        string = string.replace(/:strange:/g, "<img height='20' width='20' src='emotes/strange.png' alt=':strange:' />")
        string = string.replace(/:kick:/g, "<img height='20' width='20' src='emotes/kick.gif' alt=':kick:' />")
        string = string.replace(/:shock:/g, "<img height='20' width='20' src='emotes/shock.gif' alt=':shock:' />")
        string = string.replace(/:bup:/g, "<img height='20' width='20' src='emotes/bup.jpg' alt=':bup:' />")
        // string.replace any other emotes in this fashion.
    }
    return applyValidCharacters(string)
}

const blockChatExtended = (str) => {
    return window.banPlayerList.some(blocked => blocked.charAt(blocked.length - 1) === '*' && blocked.startsWith(str))
}

export const recvChat = (chatmsg) => {

    if (chatmsg.channel_id != networkData.myChannelID &&
        networkData.remotePlayers[chatmsg.channel_id] == undefined) return

    if (window.banPlayerList.includes(chatmsg.sender) || blockChatExtended(chatmsg.sender)) return

    const chatlog = document.getElementById("chatlog")
    const node = document.createElement("LI")         
    node.innerHTML = '<strong>' + sanitizeChat(chatmsg.sender, false) + '</strong>: ' + sanitizeChat(chatmsg.msg, true) + '<br/>' 

    if (window.showChatIds) node.innerHTML = `(${chatmsg.channel_id})` + node.innerHTML

    chatlog.appendChild(node)
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight

    let someobject
    if (chatmsg.channel_id == networkData.myChannelID)
        someobject = window.myMario
    else
        someobject = networkData.remotePlayers[chatmsg.channel_id]

    Object.assign(someobject, { chatData: { msg: chatmsg.msg, timer: 150 } })

}


export const decrementChat = () => {
    Object.values(networkData.remotePlayers).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })

    const myChat = window.myMario.chatData
    if (myChat && myChat.timer > 0) myChat.timer--
}
