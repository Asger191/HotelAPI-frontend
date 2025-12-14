import { useState, useEffect } from 'react'
import facade from '../apiFacade'

function LoggedIn( { loggedIn, username, roles }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(() => { 
    const promise = facade.fetchData('protected/user_demo')
    promise.then((data) => {
        setDataFromServer(data)
    })
  }, [])

  return (
    <>
    </>
  )
}
export default LoggedIn