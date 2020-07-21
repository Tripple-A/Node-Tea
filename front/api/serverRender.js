import axios from 'axios';
import config from '../config'
import ReactDOMServer from 'react-dom/server'
import App from '../src/components/App';

const serverRender = () => { axios.get(`${config.serverUrl}/api`)
.then(resp => {
    return  ReactDOMServer.renderToString(<App data={resp.data} />)
})
}

export default serverRender;