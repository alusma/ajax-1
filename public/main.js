// const {
//     request

// const {
//     getMaxListeners
// } = require("process");

// } = request("http")
let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li")
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }

    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            //JSON.parse 可以把符合JSON的字符串转换成对应的对象或者其他
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }
    }
    request.send()
}

getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            //getElementTagName 是获取数组 所有要加索引
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim()) //trim函数 去掉空白的空格换行
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '3.html') //打开
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    } //监听成功
    request.onerror = () => {} //监听失败
    request.send() //发送
}
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '2.js') //打开
    request.onload = () => {
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    } //监听成功
    request.onerror = () => {} //监听失败
    request.send() //发送
}
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css")
    request.onreadystatechange = () => {
        //onreadystatechange 4= 加载完成
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const style = document.createElement("style") //创建style标签
                style.innerHTML = request.response //填写style 内容
                document.head.appendChild(style) //把style标签放到head里面

            } else {
                alert('加载css失败')
            }
        }
    }
    // ****高手都不用onload onerror方式了，用 onreadystatechange事件了****
    // request.onload = () => {
    //     console.log('request.response') //打出request.open的内容
    //     console.log(request.response)
    // }
    request.send();
}