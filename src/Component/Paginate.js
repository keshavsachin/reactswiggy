import React from 'react'

function Paginate({postperpage,totalpost,paginate}) {
    const pagenumbers=[];
    for(let i=1;i<=Math.ceil(totalpost/postperpage);i++){
        pagenumbers.push(i)
    }
  return (
    <div>
        <div>
            {pagenumbers.map(a=>(
                <div onClick={()=>paginate(a)}>
                     {a}
                </div>
            ))}
        </div>
    </div>
  )
}

export default Paginate