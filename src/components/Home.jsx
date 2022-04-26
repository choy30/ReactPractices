import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1>React Tutorial</h1>
      <ul>
        <li>
          <Link to='useref-example-1'>useRef Example 1</Link>
        </li>
        <li>
          <Link to='useref-example-2'>useRef Example 2</Link>
        </li>
        <li>
          <Link to='useref-example-3'>useRef Example 3</Link>
        </li>
        <li>
          <Link to='usememo-example-1'>useMemo Example 1</Link>
        </li>
        <li>
          <Link to='usecallback-example-1'>useCallBack Example 1</Link>
        </li>
        <li>
          <Link to='custom-hook-example-1'>
            Custom Hook Example 1 - useFetch
          </Link>
        </li>
        <li>
          <Link to='custom-hook-example-2'>
            Custom Hook Example 2 - useLocalStorage
          </Link>
        </li>
      </ul>
    </>
  )
}

export default Home
