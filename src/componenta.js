import { setScript, setState, states } from "./Kori/Kori.js";

// async function getData() {
//    const response = await fetch('https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=slippers');
//    const data = await response.json();
//    return data;
// }


//initialize the states
setState('componentA', {
   arr: [1, 2, 3, 4, 5, 6],
   b: 1,
   inputValue: '',
   // z: (async () => {
   //    return await getData()
   // })()
   z: 5
})


//initialize the scripts
setScript('componentA', {

   handleClick: async () => {

      setState('componentA', {
         b: states.componentA.b + 1,
      });

      setState('componentA', {
         arr: states.componentA.arr.sort((a, b) => a - b),
      });
      console.log(states.componentA.z)
   },



   handleClick2: () => {
      setState('componentA', {
         b: states.componentA.b - 1,
         arr: states.componentA.arr.sort((a, b) => b - a)
      })


   },


   handleChange: (e) => {
      setState('componentA', {
         inputValue: e.target.value
      })
   }
})



export const componentA = () => {
   return `<div cName='aw'>
             <div class='flex p-[50px] items-center flex-col justify-center gap-[50px] bg-gray-300'>
              <h1>
                Welcome to Component A
              </h1>
              <h2> ${states.componentA.b}</h2>
             </div>
             <div class='flex flex-col items-center justify-center mt-5 gap-5'>
               <div class='flex gap-5'>
                  <button if-click='componentA-handleClick'
                  class='bg-gray-500 rounded-md p-2'
                  >
                  Increase
                  </button>
                  <button if-click='componentA-handleClick2'
                  class='bg-gray-500 rounded-md p-2'
                  >
                  Decrease
                  </button>
               </div>
               <div>
                  <a href='/'>Go to Home</a>
               </div>
             </div>
          </div>
`
}

export default componentA