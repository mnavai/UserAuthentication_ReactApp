import axios from "axios";

const BASE_URL = 'http://localhost:8077/api/v1'
// 


const request = (options) => {
    const headers = new Headers();
    if (options.setContentType !== false) {
        headers.append("Content-Type", "application/json");
    }

    if (localStorage.getItem("accessToken")) {
        headers.append("Authorization", `Bearer ${localStorage.getItem("accessToken")}`);
    }

    const defalts = { headers: headers };
    options = Object.assign({}, defalts, options);

    console.log("Stringifyuing the Options - in Request Methood", options)

    return fetch(options.url, options).then((response) =>
        response.json().then((json) => {
            if (!response.ok) {
                return Promise.reject(json);
            }
            return json
        }))
}
// http://localhost:8077/api/v1/user/authenticate
export function login(loginReq) {
    const options = {
        method: 'POST',
        url: BASE_URL + "/user/authenticate",// 'http://localhost:8077/api/v1/user/authenticate',
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(loginReq) //{email: 'dheeraj.singh@snva.com', password: '123456'}
    };
    return axios.request(options)
}

export function profile() {
    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    if (localStorage.getItem('accessToken')) {
        headers.append('Authorization', `Bearer ${localStorage.getItem('accessToken')}`)
    } else {

    }


    const options = {
        method: 'POST',
        url: BASE_URL + "/user/apiprofile",// 'http://localhost:8077/api/v1/user/authenticate',
        headers: {
            "Authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json'
        },
        data: {} //{email: 'dheeraj.singh@snva.com', password: '123456'}
    };

    console.log("Headers ", JSON.stringify(headers))
    console.log("Options ", JSON.stringify(options))

    return axios.request(options)
}



// import axios from "axios";

// const options = {
//   method: 'POST',
//   url: 'http://localhost:8077/api/v1/user/apiprofile',
//   headers: {
//     cookie: 'JSESSIONID=631B5AB23C5FC82EABD977C6DE5174DE',
//     'Content-Type': 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJkaGVlcmFqLnNpbmdoQHNudmEuY29tIiwicm9sZXMiOlsiUEFSVElDSVBBTlQiXSwiZXhwIjoxNjgzNDA2ODk1fQ.oFFB0OiCPIm6GsKeu6nzZ_RygjRRZM8R7sP-VAkhtV5vNbMlE_3dlyQ_SZC4QjG0iqGizwrvqeoVhpKiRUBYtw'
//   },
//   data: {email: 'dheeraj.singh@snva.com', password: '123456'}
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//   console.error(error);
// });


//.then(function (response) {
//     console.log(response.data);
//   }).catch(function (error) {
//     console.error(error);
//   });

// const options= {
//     methood:"POST",
//     headers: {        
//         'Content-Type': 'application/json'
//       },
//     url : BASE_URL+"/user/authenticate",
//     data: JSON.stringify(loginReq)
// }

// return axios.request(options)


// return request({
//     url: BASE_URL+"/user/authenticate",
//     methood: "POST",
//     body: JSON.stringify(loginReq)
// })

// export function profile(loginReq) {
//     return request({
//         url: BASE_URL,
//         methood: "POST",
//         body: JSON.stringify(loginReq)
//     })
// }

export function signup(signupReq) {
    return request({
        url: BASE_URL,
        methood: "POST",
        body: JSON.stringify(signupReq)
    })
}
export function facebookLogin(loginReq) {
    return request({
        url: BASE_URL,
        methood: "POST",
        body: JSON.stringify(loginReq)
    })
}