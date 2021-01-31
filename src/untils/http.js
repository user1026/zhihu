import axios from 'axios';
let baseurl='/api'
export let reqnow=()=>{
    return axios({
        url:baseurl+'/api/4/stories/latest',
        method:'get', 
    })
}
export let reqbefore=(date)=>{
    return axios({
        url:baseurl+'/api/4/stories/before/'+date,
        method:'get', 
    })
}
export let reqid=(id)=>{
    return axios({
        url:baseurl+'/api/4/story/'+id,
        method:'get', 
    })
}
export let reqlong=(id)=>{
    return axios({
        url:baseurl+'/api/4/story/'+id+'/long-comments',
        method:'get', 
    })
}
export let reqshort=(id)=>{
    return axios({
        url:baseurl+'/api/4/story/'+id+'/short-comments',
        method:'get', 
    })
}