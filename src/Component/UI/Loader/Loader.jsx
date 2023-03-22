import React from 'react'
import cl from "./Loader.module.css"
import {MutatingDots} from "react-loader-spinner"

const Loader = () => {
  return (
    <div>
      <MutatingDots
        height="100"
        width="100"
        color="black"
        secondaryColor='black'
        radius='12.5'
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader
