const url = new URL(window.location.href)
url.protocol = url.protocol.replace('http', 'ws')
url.port = 80

const socket = new WebSocket(url.href)

const recvMarioData = (marioData) => { window.extraMarios = marioData }

const initSendInterval = (id) => {
    socket.id = id
    const sendDataInterval = setInterval(() => {
        socket.send(JSON.stringify(window.myMario))
    }, 33.3)
    socket.onclose = () => { clearInterval(sendDataInterval) }
}

socket.onopen = () => {
    socket.onmessage = (msgStr) => {
        const msg = JSON.parse(msgStr.data)
        if (msg.type == "id") initSendInterval(msg.data) /// fully initialized
        if (msg.type == "allMarios") recvMarioData(msg.data)
    }
}

window.myMario = {
    pos: [0, 0, 0],
    angle: [0, 0, 0],
    animFrame: 0, animID: -1,
    skinID: 0,
    playerName: "Unnamed Player"
}