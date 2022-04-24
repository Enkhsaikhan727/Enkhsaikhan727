import axios from 'axios'
import { write } from 'fs'
import { arch } from 'os'
import { toUnicode } from 'punycode'
import { useState } from 'react'
import { NavigationType, Router, useNavigate } from 'react-router-dom'
import { getLinkWord, sendCreate } from '../../lib/words'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

type State = {
  text: string ;
};
let test : string;
let Settest:string
const testWord: string = "ЗҮСЭЛТ" 
export const AddWord = ({ isOpen, handleClose  }: Props) => {
  const [link , setlink] = useState("")
  const navigate = useNavigate()
  const [text, setText] = useState('');

  return (
    
    <BaseModal  title="Үг таалгах" isOpen={isOpen} handleClose={handleClose}>
       <div>
      <p  className="text-sm text-gray-500 dark:text-gray-300">
        Таалгах үгээ доор оруулна уу.
      </p>
      <label>
      <input className='mt-2 w-full' type="text" name="input"  placeholder="Үгээ оруулна" value={text} onChange={(e) =>setText(e.target.value)}/>
      <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={async() =>{
              await sendCreate(text).then(result=>{
                setlink(result)
              })
              navigator.clipboard.writeText("http://localhost:3000/"+link)
            }
            
          }
            
          >
            Линк авах
          </button>
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            // onClick={event =>  window.location.href='/play=newGame'}
            onClick={() => {
              getLinkWord("random").then(result=>{
                setlink(result)
                sendCreate(link).then(result=>{setText(result)})
                console.log(link)
              })
            }}
            >
            Шинээр Тоглох
          </button>
      </label>
      </div>
    </BaseModal>
  )
}
