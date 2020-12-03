import { networkData } from "./socket"

const applyEmotes = (string, isMessage) => {
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
    return string
}

const blockChatExtended = (str) => {
    return window.banPlayerList.some(blocked => blocked.charAt(blocked.length - 1) === '*' && blocked.startsWith(str))
}

export const recvChat = (chatmsg) => {
    const socket_id = chatmsg.getSocketid()
    const sender = chatmsg.getSender()
    const msg = chatmsg.getMessage()
    const isAdmin = chatmsg.getIsadmin()

    if (socket_id != networkData.mySocketID &&
        networkData.remotePlayers[socket_id] == undefined) return

    if (window.banPlayerList.includes(sender) || blockChatExtended(sender)) return

    const chatlog = document.getElementById("chatlog")
    const node = document.createElement("LI")

    let adminTag = ""

    if (isAdmin) {
        node.style.color = "blue"
        adminTag = "(Admin)"
    }

    node.innerHTML = '<strong>' + adminTag + sender + '</strong>: ' + applyEmotes(msg) + '<br/>' 
    chatlog.appendChild(node)
    chatlog.scrollTop = document.getElementById("chatlog").scrollHeight

    if (sender == "Server") {
        node.style.color = "#D3D3D3"
        return
    }

    let someobject
    if (socket_id == networkData.mySocketID)
        someobject = window.myMario
    else
        someobject = networkData.remotePlayers[socket_id]

    Object.assign(someobject, { chatData: { msg, timer: 150 } })

}


export const decrementChat = () => {
    Object.values(networkData.remotePlayers).forEach(data => {
        if (data.chatData && data.chatData.timer > 0) data.chatData.timer--
    })
    if (networkData.announcement.timer > 0) networkData.announcement.timer--

    const myChat = window.myMario.chatData
    if (myChat && myChat.timer > 0) myChat.timer--
}
