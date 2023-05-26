import { useEffect, useRef, useState } from "react";

export const formatTime = (time) => {
    let minutes = Math.floor(time/60)
    let seconds = Math.floor(time - minutes * 60)
    return {minutes, seconds}
}

export default function CountDown ({seconds}) {
    const [countdown , setCountdown] = useState(seconds)
    const timerId = useRef()

    useEffect(()=>{
        timerId.current = setInterval(() => {
            setCountdown(prev => prev -1)
        }, 1000)
        return () => clearInterval(timerId.current)
    }, [])

    useEffect(() =>{
        if(countdown <= 0) {
            clearInterval(timerId.current)
            alert('End')
        }
    }, [countdown])
}

export function trimNumber(number, digitPosition) {
    const numberString = number.toString();
    const trimmedDigit = numberString.charAt(numberString.length - digitPosition);
    console.log(trimmedDigit)
    return parseInt(trimmedDigit);
  }