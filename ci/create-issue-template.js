Object.keys(process.env).forEach((key) => {
    console.log(`Variable: ${key} with value ${process.env[key]}`)
})