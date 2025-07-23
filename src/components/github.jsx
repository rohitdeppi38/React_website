import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/rohitdeppi38')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl flex justify-center rounded-[40px] '>Github followers: {data.followers?data.followers:0}
    <img className="rounded-[50%]" src={data.avatar_url} width={300} alt="" />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rohitdeppi38')
    return response.json()
}