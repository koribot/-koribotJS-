import componentA from "./componenta.js";
import insert from "./Kori/insert.js";
import Kori, { setScript, setState, states } from "./Kori/Kori.js";


function count() {

  return setInterval(() => {
    setState('mainApp', {
      countDown: new Date()
    })
  }, 1000)
}

//initialize the states
setState('mainApp', {
  arr: [1, 2, 3, 4, 5, 6],
  b: 1,
  inputValue: '',
  countDown: typeof (count()) !== 'number' ? count() : new Date()
  // countDown: 5
})


//initialize the scripts
setScript('mainApp', {
  handleClick: () => {
    setState('mainApp', {
      b: states.mainApp.b + 1,
      arr: states.mainApp.arr.sort((a, b) => a - b)
    });
  },



  handleClick2: () => {
    setState('mainApp', {
      b: states.mainApp.b - 1,
      arr: states.mainApp.arr.sort((a, b) => b - a)
    })
  },


  handleChange: (e) => {
    console.log(e.target.value)
    setState('mainApp', {
      inputValue: e.target.value
    })
  }
})



export const app = (count) => {
  return `<div id='awe' cName='aw' class='aw'>
            <div class='bg-[gray] p-[50px] text-center text-white font-bold text-lg'>
            ${states.mainApp.countDown}
                 <h1>Welcome to Korijs ${states.mainApp.b}</h1>
            </div>
            <div class='flex justify-center items-center flex-col'>
              <div class='flex gap-5 mt-5'>
              <a class='bg-gray-300 p-1 rounded-md' href='/componenta'>Navigate to Component A</a>
              ${window.location.pathname === '/' ? `<a  class='bg-gray-300 p-1 rounded-md' href='/'>Navigate to home page</a>` : ''}
              
              </div>
               <div class='flex gap-5 flex-col mt-[20px]'>
                   <div class='flex gap-5'>
                        <button if-click='mainApp-handleClick'
                         class="bg-gray-300 border border-gray-500 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 active:bg-gray-500"
                         >
                           Ascending
                         </button>
                         <button if-click='mainApp-handleClick2'
                         class="bg-gray-300 border border-gray-500 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 active:bg-gray-500"
                         >
                         Descending
                         </button>
                         </div>
                         <input 
                         if-change='mainApp-handleChange'
                         class="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
                         >
                         
                         <button 
                         class="bg-gray-300 border border-gray-500 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 active:bg-gray-500"
                         >
                         Add
                         </button>
                        </div>
                        ${insert(states.mainApp.inputValue)}     

                    <div class='flex justify-center'>
                  ${states.mainApp.arr.map((item) => {
    return `<p>${item}</p>`
  }).join('')}
               </div>
             </div>
          </div>
`
}

export default app