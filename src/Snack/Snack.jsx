import React, { useEffect, useState } from 'react'

function Snack() {
    let GridLength = 15;
    let Arr = []
    for(let i = 0;i<GridLength;i++){
        let RandomArr = [];
        for(let j = 0;j<GridLength;j++){
            RandomArr.push('')
        }
        Arr.push(RandomArr)
    }
    const [snackBody,setsnackBody] = useState([
        [5,8],
        [5,6],
        [5,7],
    ])
    const SnackBodyFun = (ind,innindex)=>{
        return snackBody.some(([x,y])=>{
            return ind ===x && y===innindex
        })
    }
    useEffect(()=>{
        setInterval(()=>{
            setsnackBody((presnack)=>{
                const CopySnack = presnack.map((item)=>[...item])
                CopySnack.pop()
                const NewHead =[presnack[0][0],presnack[0][1]+1]
                CopySnack.unshift(NewHead)
                return CopySnack
            })
        },1000)
    },[])
  return (
    <div className='border-2 border-red-700 h-screen flex justify-center items-center ' >
        <div className='border-2 h-[300px] w-[300px] grid grid-cols-custom  ' >
            {
                Arr.map((item,index)=>(
                    item.map((initem,inindex)=>(
                        <div className={` border-[0.5px] ${SnackBodyFun(index,inindex)?" bg-green-600 ":""} `}></div>
                    ))
                ))
            }
        </div>
    </div>
  )
}

export default Snack