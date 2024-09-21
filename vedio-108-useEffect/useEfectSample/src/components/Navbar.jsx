import{ useEffect } from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({ color }) => {
  // Case 1: Run on every render 
  useEffect(() => {
    alert("Hey I will run on every render")
  })

  // Case 2: Run only on first render 
  useEffect(() => {
    alert("Hey welcome to my page. This is the first render")
  }, [])

  // Case 3: Run only when certain values change
  useEffect(() => {
    alert("Hey I am running because color was changed")
  }, [color])

  // Example of Cleanup function
  // useEffect(() => {
  //   alert("Hey welcome to my page. This is the last effect")

  //   return () => {
  //     alert("component was unmounted")
  //   }
  // }, [])

  return (
    <div>
      I am navbar of {color} color hehe..
    </div>
  )
}

export default Navbar
