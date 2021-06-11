import $ from '../core'


$.prototype.get = async function (url, responseDataType) {
    let res = await fetch(url)
    if(!res.ok){
        throw new Error('Could not fetch')
    }
    switch (responseDataType){
        case 'json':
            return await res.json()
        case 'text':
            return await res.text()
        case 'blob':
            return await res.blob()
    }

}

$.prototype.post = async function(url, data, responseDataType='text')  {
    let res = await fetch(url, {
        method:"POST",
        body:data
    })
    switch (responseDataType){
        case 'json':
            return await res.json()
        case 'text':
            return await res.text()
        case 'blob':
            return await res.blob()
    }
}
