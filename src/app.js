import React from 'react'
import './app.less'
import background from './images/logo192.png'
function App() {
  //按需加载第三方库
  const sayTime = function (){
    import('moment').then((module) => {
      const moment = module.default
      alert(`${moment().format('YYYY-MM-DD HH:mm:ss')}`)
    })
  }
  
  return (
    <div className='App'>
      <div>Hello,React!</div>
      <img className='background' src={background} />
      <div onClick={sayTime}>moment</div>
    </div>
  )
}


export default App