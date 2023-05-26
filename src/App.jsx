import Input from "./components/Input";
import Button from "./components/Button";
import Logo from './assets/Logo';
import MasterCard from "./assets/MaterCard";
import Containers from "./components/Containers";
import { Edit2, Grip } from "lucide-react";
import Badge from "./assets/Badge";
import CardDemo from "./components/CardDemo";
import AppleLogo from "./assets/AppleLogo";
import RecieptIconN from "./assets/RecieptIconN";
import { useState } from "react";
import CountDown, { formatTime, trimNumber } from "./lib/utils";

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCVVNumber] = useState('');
  const [exp1, setExp1Number] = useState('');
  const [exp2, setExp2Number] = useState('');
  const [password, setPasswordNumber] = useState('');

  const setCvv = (e) => {
    setCVVNumber(e.target.value)
   
  }
  const setexp1 = (e) => {
    setExp1Number(e.target.value)
   
  }
  const setexp2 = (e) => {
    setExp2Number(e.target.value)
   
  }
  const setpwd = (e) => {
    setPasswordNumber(e.target.value)
   
  }

  const done = () => {
   if(cardNumber, cvv,exp1,exp2,password) {
    alert(`payment successfull.
    payment details: executed without errors
    msg: details can be found in the console log`);
    console.log(  {
      cardNumber,
      cvv,
      exp1,
      exp2,
      password
    })
    setCVVNumber('')
    setCardNumber('')
    setExp1Number('')
    setExp2Number('')
    setPasswordNumber('')
   }else{
    alert(`
    msgHead: Error
    ErrorType: Empty input values
    msg: Payment Not SuccessFull
    `)
   }
  }

  const formatCardNumber = (e) => {
    let input = e.target.value.replace(/\s+/g, ''); // Remove any existing spaces
    let formattedInput = '';
  
    for (let i = 0; i < input.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedInput += ' ';
      }
      formattedInput += input[i] ;
    }
  
    setCardNumber(formattedInput.trim());
  
  };

  let {minutes, seconds} = formatTime(  CountDown(90))
  console.log(minutes, seconds)
 
  
  return (
    <div className="flex p-2 md:p-10 gap-2 md:gap-4 flex-col md:flex-row md:justify-between items-center w-full h-screen relative">
      <section className="w-full md:w-[60%] h-full flex flex-col">
        <header className="w-full p-1 md:p-2 flex items-center justify-between">
          {/* logo */}
          <div className="flex gap-2 items-center">
            <div className="-rotate-12">
              <Logo height={"40px"} width={"40px"} />
            </div>
            <h3 className="text-xl font-semibold capitalize text-neutral-900">AceCoin<span className="font-light">Pay</span></h3>
          </div>

          <div className="flex items-center gap-1 font-semibold">
            <section className="gap-2 flex">
              <Containers item={0} />
              <Containers item={minutes} />
            </section>
            :
            <section className="gap-2 flex">
              <Containers item={seconds} />
              <Containers item={seconds} />
            </section>
          </div>
        </header>
        <main className="flex flex-col gap-5 md:gap-8 p-2">
          <div className="flex  flex-col">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col gap-2">
                <label htmlFor="cardNumber" className="text-sm font-semibold text-indigo-950">Card Number</label>
                <p className="font-light text-xs opacity-75 pb-2">Enter the 16-digit card number on the card</p>
              </div>
              <button className="bg-none text-blue-600 text-sm font-medium flex items-center gap-2">
                <Edit2 className="w-4 h-4" />
                Edit
              </button>
            </div>
            <Input
              maxLength="19"
              value={cardNumber}
              onChange={formatCardNumber}
              startIcon={<MasterCard height={"40px"} width={"40px"} />}
              endIcon={<Badge height={"30px"} width={"30px"} />}
              placeHolder={"2345 - 3456 - 3564 - 1234"}
              inpType={"text"}
            />
          </div>

          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">CCV Number</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter the 3 or 4 last digit number on the card</p>
            </div>
            <div className="w-full">
              <Input maxLength={"3"} value={cvv} onChange={setCvv} inpType={"text"} placeHolder={"345"} endIcon={<Grip className="w-6 h-6 text-slate-400" />} />
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">Expiry Date</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter the expiry date of the card</p>
            </div>
            <div className="w-full flex items-center gap-2 text-bold text-slate-600">
              <Input maxLength={"2"} inpType={"text"} placeHolder={"24"} onChange={setexp1} /> / <Input onChange={setexp2} maxLength={"2"} inpType={"text"} placeHolder={"26"} />
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">Password</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter your dynamic password</p>
            </div>
            <div className="w-full">
              <Input placeHolder={"1234"} onChange={setpwd} inpType={"password"} endIcon={<Grip className="w-6 h-6 text-slate-400" />} />
            </div>
          </div>
          <Button title={"Pay Now"} onclick={done}/>
        </main>
      </section>

      <section className="w-full md:w-[40%] h-full flex flex-col p-2 gap-4">
        <div className="w-full h-[10%] flex justify-center">
          <div className="w-[60px] h-[20px] rounded-sm bg-blue-600"></div>
        </div>

        <div className="w-[70%] ml-auto relative mr-auto h-[500px] md:h-full rounded-md bg-slate-200">
          {/* styling components */}
          <span className="w-8 h-8 z-50 rounded-full bg-white absolute -right-4 top-80"></span>
          <span className="w-8 h-8 z-50 rounded-full bg-white absolute -left-4 top-80"></span>
          <span className="w-full h-[0.01rem] outline-dashed absolute outline-[1px] outline-slate-300 left-0 bottom-[20%]"></span>
          <CardDemo number = {cardNumber} date1={exp1} date2={exp2} />

          <div className="flex w-full h-[100px] flex-col pl-4 pr-4 pt-2 pb-2 gap-1 absolute top-[46%]">
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Company</h3>
              <div className="flex gap-2 items-center">
                <AppleLogo className={"w-4 h-4"} />
                <span className="text-xs font-semibold">Apple</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Order Number</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-semibold">123456</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Product</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-semibold">MacBook Air</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">VAT (20%)</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-semibold">$100.00</span>
              </div>
            </div>
          </div>
          <div className="flex w-full h-[80px] pl-4 pr-4 pt-4 justify-between items-center gap-2 absolute top-[80%]">
            <div className="flex flex-col gap-2">
              <span className="font-light text-indigo-950 text-xs">You have to pay</span>
              <h3 className="font-semibold text-indigo-950 text-xl">
                549.<span className="font-semibold text-indigo-950 text-xs">99</span>{" "}
                <span className="font-light text-indigo-950 text-xs">USD</span>
              </h3>
            </div>

            <RecieptIconN className={"w-6 h-6"} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
