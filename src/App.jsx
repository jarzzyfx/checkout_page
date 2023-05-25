
// import { CreditCard } from "lucide-react"
import Input from "./components/Input"
import Button from "./components/Button"

import Logo from "./assets/logo.jsx"
import MasterCard from "./assets/MaterCard"
import Containers from "./components/Containers.jsx"
import { Edit2, Grip } from "lucide-react"
import Badge from "./assets/Badge"
import CardDemo from "./components/CardDemo"
import AppleLogo from "./assets/AppleLogo"
import RecieptIconN from "./assets/RecieptIconN"



function App() {
  return (
    <div className="flex p-2 md:p-10 gap-2 md:gap-4 flex-col md:flex-row md:justify-between items-center w-full h-screen relative">
      <section className="w-full md:w-[60%] h-full flex flex-col">
        <header className="w-full p-1 md:p-2 flex items-center justify-between">
          {/* logo */}
          <div className="flex gap-2 items-center">
            <div className="-rotate-12"><Logo height={"40px"} width={"40px"}/> </div>
            <h3 className="text-xl font-semibold capitalize text-neutral-900">AceCoin<span className="font-light">Pay</span></h3>
          </div>

          <div className="flex items-center gap-1 font-semibold">
            <section className="gap-2 flex">
              <Containers item={0}/>
              <Containers item={1}/>
            </section>
            :
            <section className="gap-2 flex">
              <Containers item={1}/> 
              <Containers item={9}/> 
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
            <button className="bg-none text-blue-600 text-sm font-medium flex items-center gap-2"><Edit2 className="w-4 h-4"/> Edit</button>
           </div>
            <Input startIcon={<MasterCard height={"40px"} width={"40px"}/>} endIcon={<Badge height={"30px"} width={"30px"}/>} placeHolder={"2345 - 3456 - 3564 - 1234 "} inpType={"number"}/>
          </div>

          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">CCV Number</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter the 3 or 4 last digit number on the card</p>
            </div>
            <div className="w-full"><Input inpType={"number"} placeHolder={"345"} endIcon={<Grip className="w-6 h-6 text-slate-400"/>}/></div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">Expiry Date</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter the expiry date of the card</p>
            </div>
            <div className="w-full flex items-center gap-2 text-bold text-slate-600">
              <Input inpType={"number "} placeHolder={"24"}/> / <Input inpType={"number"} placeHolder={"26"} />
            </div>
          </div>
          <div className="flex justify-between w-full items-center gap-2">
            <div className="flex flex-col gap-2 w-full">
              <span className="font-semibold text-sm text-indigo-950">Password</span>
              <p className="text-xs font-light opacity-75 text-indigo-950">Enter tyour dynamic password</p>
            </div>
            <div className="w-full"><Input placeHolder={"1234"} inpType={"password"} endIcon={<Grip className="w-6 h-6 text-slate-400"/>}/></div>
          </div>
          <Button title={"Pay Now"}/>
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
          <CardDemo/>

          <div className="flex w-full h-[100px] flex-col pl-4 pr-4 pt-2 pb-2 gap-1 absolute top-[46%]">
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Company</h3>
              <div className="flex gap-2 items-center">
                <AppleLogo className={"w-4 h-4"}/>
                <span className="text-xs font-semibold">Apple</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Oder Number</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-semibold">123456</span>
              </div>
            </div>
            {/*  */}
            <div className="flex items-center justify-between w-full p-1">
              <h3 className="text-xs opacity-75">Product</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs font-semibold">MacbooK Air</span>
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
              <h3 className="font-semibold text-indigo-950 text-xl">549.<span className="font-semibold text-indigo-950 text-xs">99</span> <span className="font-light text-indigo-950 text-xs">USD</span></h3>
            </div>

            <RecieptIconN className={"w-6 h-6"}/>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
