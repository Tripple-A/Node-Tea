import axios from 'axios';
import config from '../config'
import ReactDOMServer from 'react-dom/server'
import React from 'react'
import App from '../src/components/App';

const serverRender = () => { 
    return axios.get(`${config.serverUrl}/api`)
.then(resp => {
    console.log('gey')
    return  {
        markUp: ReactDOMServer.renderToString(<App data={resp.data} />),
        data: resp.data
    }
})
.catch(err => console.log(err))
}

export default serverRender;