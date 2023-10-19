import React from 'react'

const App = () => {
  const arr=["ankita","shraddha","ratish"];
  let itemNo=1;
  return (
    <div id="main">
               {/* Do not remove the main div */}
        
        <ol key={"relativeList"}>
          {
             arr.map((ele)=>(
              <li key={`relativeListItem${itemNo++}`}>{ele}</li>
             ))
          }
        </ol>
    </div>
  )
}

export default App
