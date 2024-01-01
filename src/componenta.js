import { setScript, setState, states } from "./Kori/Kori.js";

async function getData() {
   const response = await fetch('https://ebextractor-v1.vercel.app/api/extract/using_keyword?q=slippers');
   const data = await response.json();
   return data;
}


//initialize the states
setState('componentA', {
   arr: [1, 2, 3, 4, 5, 6],
   b: 1,
   inputValue: '',
   z: (async () => {
      return await getData()
   })()
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
   return `<div cName='aw' class='aw'>
             Welcome to Component A
             ${states.componentA.b}
             <div>
             <button if-click='componentA-handleClick2'>Decrease</button>
             <button if-click='componentA-handleClick'>Increase</button>
             <a href='/'>Go to Home</a>
             </div>
          </div>
`
}

export default componentA