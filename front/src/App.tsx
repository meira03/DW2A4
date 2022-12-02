import { MainContent } from "./components/mainContent";

export function App(){
  return (
    <>
      <MainContent />
    </>
  )
    
    
}

/*import { useState } from 'react'

interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps){
  return <button className="bg-violet-500 px-2 hover:bg-violet-700">{props.text ?? 'Esqueci'}</button>
}

function App() {
  return (
    <div>
      <Button text="Enviar"/>
      <Button text="ok"/>
      <Button />
    </div>
  )
}*/


