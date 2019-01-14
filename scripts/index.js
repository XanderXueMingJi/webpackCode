// const s = () => {
//     console.log('s init');
// }

// s();


import a from './a.js'
import c from './c.js'
const s=()=>{
    a.init()
    a.cinit()
    c.init()
    console.log('s init')
}
s()