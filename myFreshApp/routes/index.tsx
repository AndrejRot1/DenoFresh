
/** jsx h */ 
import { colors } from "$fresh/src/dev/deps.ts"
import { h } from "preact"




export default function Home() {
  return (
    <>
    <body style="background-color:khaki;">
    <div>
      <h1 style="text-align:center;">Hello Andrej search Users</h1>
      <br></br>
      <p style={"text-align:center;"}>This is my test on simple html</p>
    </div>
    <div>
      <br></br>
    </div>
    <div>
      <form style="justify-content:center; display: flex;">
        <input type="text" name="q" />
        <button type="submit">Search</button>
      </form>
      <ul>
      </ul>
    </div>
    </body>
    </>
  )
}