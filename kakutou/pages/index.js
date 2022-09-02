import Link from "next/link"
import { useRouter } from "next/router";
import { useRef } from "react";
import BlocklyComponent,{Block,Value,Field,Shadow} from "../component/Blockly"
import blocklycss from "../styles/blockcss.module.css"
import "../component/blocks/customblocks"
import "../component/generator/generator"
import blocklyjs from "blockly/javascript"


export default function Home(){
  const router = useRouter()
  const blocklyref = useRef()
  return (
    
    <>
    <BlocklyComponent ref={blocklyref} id={blocklycss.blocklyDiv} >
      <Block type = "go_left"/>
    </BlocklyComponent>
    <button onClick={()=>{router.push(`window?block=${blocklyjs.workspaceToCode(blocklyref.current.workspace)}`)}}>
    ブロック送信
    </button>
    </>
  )

  return (
    <>
    
    <button onClick={()=>{router.push(`window?block=${'test'}`)}}>
    ブロック送信
    </button>
    </>
  )
}