// Styling
// http://localhost:3000/isolated/exercise/05.js

import React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`

//EX 1
// const smallBox = (
//   <div
//     style={{fontStyle: 'italic', backgroundColor: 'lightblue'}}
//     className="box box--small"
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     style={{fontStyle: 'italic', backgroundColor: 'pink'}}
//     className="box box--medium"
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     style={{fontStyle: 'italic', backgroundColor: 'orange'}}
//     className="box box--large"
//   >
//     large orange box
//   </div>

//EX 2
// function Box({className = '', style, ...otherProps}) {
//   return (
//     <div
//       className={`box ${className}`.trim()}
//       style={{fontStyle: 'italic', ...style}}
//       {...otherProps}
//     />
//   )
// }
// const smallBox = (
//   <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//     small lightblue box
//   </Box>
// )

// const mediumBox = (
//   <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//     medium pink box
//   </Box>
// )

// const largeBox = (
//   <Box className="box--large" id="large" style={{backgroundColor: 'orange'}}>
//     large orange box
//   </Box>
// )

//EX 3
function Box({size, style, children}) {
  const finalClassName = `box box--${size}`
  const finalStyle = {fontStyle: 'italic', ...style}
  return (
    <div className={finalClassName} style={finalStyle}>
      {children}
    </div>
  )
}
const smallBox = (
  <Box size="small" style={{backgroundColor: 'lightblue'}}>
    small lightblue box
  </Box>
)

const mediumBox = (
  <Box size="medium" style={{backgroundColor: 'pink'}}>
    medium pink box
  </Box>
)

const largeBox = (
  <Box size="large" style={{backgroundColor: 'orange'}}>
    large orange box
  </Box>
)

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  )
}

export default App
