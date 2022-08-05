import {Server} from 'socket.io'

const ioHandler =  (req,res) => {
    if(!res.socket.server.io){
        console.log('*First use,starting socket.io')

        const io = new Server(res.socket.server)

        io.on('connection',socket =>{
            console.log('connect')
            socket.on('hello',msg =>{
                socket.emit('hello','world!')
            })
            socket.on('disconnect',()=>{
                console.log('disconnect');
            }
            )
        })
    }
}

export default ioHandler;