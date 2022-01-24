import { useState, useEffect, useRef } from "react"

const useFetch = (url, method = "GET") => {
    // Data state is updated by the custom fetch request which talks to the database
    const [data, setData] = useState(null)
    // IsPending handles the loader 
    const [isPending, setIsPending] = useState(false)
    // error state handles any errors
    const [error, setError] = useState(false)
    // state for options
    const [options, setOptions] = useState(null)

    const postData = (postData) => {
        setOptions({
            // The type of request 
            method: "POST",
            headers: {
                // This just tells us what data is going to be pushed (json)
                "Content-Type": "application/json"
            },
            // This turns the javascript object into a json string
            body: JSON.stringify(postData)
        })
    }


    useEffect(() => {
        // Creating a abort controller
        // which will help with any requests made then cancelled mid way. (No errors if using this)
        const controller = new AbortController()

        const fetchData = async (fetchOptions) => {
            // console.log(options)
            try {
                setIsPending(true) // set is pending to true while we wait for request
                const response = await fetch(url, { ...fetchOptions, signal: controller.signal }) // make fetch request
                // If response is not ok throw a new Error 
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                // else do this 
                const json = await response.json() // change data to json
                setIsPending(false) // set is pending to false as its been resolved
                setData(json) // set data to newly caught data
                setError(null)

            } catch (err) { 
                // if the error = AbortError, log the fetch was aborted
                if(err.name === "AbortError"){
                    console.log("fetch was aborted")
            } else {
                setIsPending(false) // no need to try to load anymore
                setError("Could not fetch data") 
                }
            }

        }

        if(method === 'GET'){
        fetchData()
        } 

        if(method === 'POST' && options) {
            fetchData(options)
        }

        return () => {
            controller.abort()
        }
    }, [url, options, method])
    return { data, isPending, error, postData }
}


export default useFetch