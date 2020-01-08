/*
 * @Title: 
 * @Descripttion: react数字翻牌
 * @Company: 
 * @Author: 
 * @Date: 
 */

import React, { useEffect, useState } from 'react';
import Flip from '../../component/timFlop/flip';
import './index.css';

const TimeFlop = (props) =>{

  const [ countTrue, setCountTrue] = useState(386590);  // 当前翻牌组件的真实的数值
  const [ count, setCount ] = useState(386590); // 当前翻牌组件的数值
  const [ time, setTime ] = useState(1000);    // 多长时间翻一次

  // 第一次请求数据
  useEffect(()=>{
    setCountTrue(386690);
    setTime(60000/(386690-386590))
  },[])


  // 隔一分钟请求一次数据
  useEffect(()=>{
    setTimeout(()=>{
      const newCount = count+Math.floor(Math.random()*100);
      setCountTrue(newCount);
      setTime(60000/(newCount-countTrue))
    },60000)
  },[countTrue])

  // 根据数值控制该段时间内翻牌次数及快慢
  useEffect(
    () =>{
      setTimeout(function(){
        setCount(count+1);
      },time)
    },
    [count]
  )

  return(
    <div className="flopDiv">
      <div className="flips">
        {count.toString().split('').map((num,key)=>{
          return (
            <Flip num={num} key={`num${key}`}/>
          )
        })}
      </div>
    </div>
  )
}

export default TimeFlop;