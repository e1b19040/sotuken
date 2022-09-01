import { useRouter } from 'next/dist/client/router'
import Game from '../component/game.js' 



export default function Home() {
  const router = useRouter();

  return(
    <> 
    <Game block = {router.query.block}></Game>
    </>
  )
}
