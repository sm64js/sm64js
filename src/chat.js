import { networkData } from "./socket"

const emoteImg = {
    doublek: 'doublek.png', facepalm: 'facepalm.png',
    kappa: 'kappa.png', mariostyle: 'mariostyle.gif',
    pogchamp: 'pogchamp.png', strange: 'strange.png',
    kick: 'kick.gif', shock: 'shock.gif',
    bup: 'bup.jpg'
}

const createEmote = (type) => {
    const img = document.createElement('img');
    img.height = '20';
    img.width = '20';
    img.alt = `:${type}:`;
    img.src = `emotes/${emoteImg[type]}`;
    return img;
}

const createMessage = (string) => {
    const message = document.createElement('span');
    string.split(/(:\w+:)/g).forEach((token, i) => {
        if (i%2 === 1) {
            const emoteType = token.slice(1, token.length-1);
            if (emoteImg[emoteType]) {
                message.appendChild(createEmote(emoteType));
                return;
            }
        }
        message.append(token);
    });
    return message;
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
    const node = document.createElement("li")

    let adminTag = ""

    if (isAdmin) {
        node.style.color = "blue"
        adminTag = "(Admin)"
    }

    const from = document.createElement('strong');
    from.append(`${adminTag}${sender}`);
    node.appendChild(from);
    node.append(': ');
    node.appendChild(createMessage(msg));
    chatlog.appendChild(node);
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
