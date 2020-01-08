/*
 * @Descripttion: 单个翻牌实现
 * @Company: 
 * @Date: 2019-12-03 17:11:52
 */
import React, { useState } from 'react';
import './flip.css'; 

const Flip = (props) =>{

  const { num } = props;
  const [ oldNum, setOldNum] = useState(num); // 记录上一次的数字

  let isChange = false; // 判断当前是否处于翻牌状态
  let showNum = Number(num);
  if(oldNum !== num){  // 当前的数字变化时进行翻牌操作
    isChange = true;
    showNum = Number(oldNum);
    setTimeout(()=>{   // 翻牌结束后重新记录当前数字并改变翻牌状态
      setOldNum(num);
      isChange = false;
    },500)
  } 


  return (
    <div className={"flip down" + (isChange ? " go" : '')}>
      {/* 位于前面的纸牌 */}
      <div className={"digital before numDiv" + showNum}></div>
      {/* 位于后面的纸牌 */}
      <div className={"digital after numDiv" + (showNum<9 ? (showNum+1) : 0 ) }></div>
    </div>
  )
} 


export default Flip;