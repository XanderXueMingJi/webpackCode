// 本地开发需要搭建临时的服务: npm install live-server -g

// 运行  live-server

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