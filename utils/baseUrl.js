const baseUrl = process.env.NODE_ENV === 'prodcution' 
    ? 'https://deployment-url.now.sh'
    : 'http://localhost:3000'

    export default baseUrl