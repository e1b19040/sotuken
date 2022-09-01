import {Server} from 'socket.io'

const ioHandler =  (req,res) => {
    if(!res.socket.server.io){
        console.log('*First use,starting socket.io')

        const io = new Server(res.socket.server)
        const gameNS = io.of('/game');


        gameNS.on('connection',socket =>{
            console.log('connect')
            socket.on('test',(msg) => {socket.emit("test",msg);console.log("zyusin.ok")})
            socket.on('hello',msg =>{
                socket.emit('hello','world!')
            })
            socket.on('disconnect',()=>{
                console.log('disconnect');
            }
            )
        })
        res.socket.server.io = gameNS;
    }
    res.end();
}

export default ioHandler;