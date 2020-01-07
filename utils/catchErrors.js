function catchErrors(error, displayError){
    let errorMsg
    if (error.response) {
        // the req was made and server res with status code that was not in the range of 2XX
        errorMsg = error.response.data
        console.error("Error Response", errorMsg)

        //for cloudinary image upload errors
        if (error.response.data.error){
            errorMsg = error.response.data.error.message
        }
    }else if (error.request) {
        //the req was made but no res was recieved.
        errorMsg = error.request
        console.error("Error Request"), errorMsg
    }else {
        //somethign else happend in making the req that I really dont know..
        errorMsg = error.message
        console.error("Error Message", errorMsg)
    }
    displayError(errorMsg)
}  

export default catchErrors;