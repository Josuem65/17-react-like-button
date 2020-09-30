import React, { useEffect, useState } from "react"
import "./App.css"

export default () => {
  const [count, setCount] = useState(0)
  const [likeText, setLikeText] = useState("likes")

  function clickCheck(e) {
    e.preventDefault()
    setCount(count + 1)
  }
  useEffect(() => {
    if (count === 1) {
      setLikeText("like")
    } else {
      setLikeText("likes")
    }
  }, [count])
  return (
    <div className="App">
      <button className="likeButton" onClick={(e) => clickCheck(e)}>
        {count} {likeText}
      </button>
    </div>
  )
}
