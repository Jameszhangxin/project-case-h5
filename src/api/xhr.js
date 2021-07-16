import Axios from 'axios';
import Vue from 'vue';


const GCRM_LOCALE_LANG = 'zh-CN';
const LANG_MAP = {
    'zh-CN': 'zh-CN',
    'en': 'en-US'
};

let { BASE_URL, NODE_ENV } = process.env
switch (NODE_ENV) {
    case 'development':
        BASE_URL = ''
        break
    default : BASE_URL
}

var xhr = Axios.create({
    baseURL: `${BASE_URL}`,
    withCredentials: true,
    headers: {
        'Accept-Language': LANG_MAP[GCRM_LOCALE_LANG]
    }
});

xhr.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';

Vue.prototype.$http = xhr;

export default {
    get(url, params) {
        return new Promise((resolve, reject) => {
            xhr.get(url, {
                    params: params
                })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
    post(url, params, options) {
        if (!options) options = {};
        return new Promise((resolve, reject) => {
            xhr.post(url, params)
                .then(({
                    data
                }) => {
                    if (data.respStatus) {
                        if (data.respStatus.retCode === 200) {
                          resolve(data.retData)
                        } else {
                          console.log('失败');
                          reject(data);
                        }
                    }
                }, err => {
                    if (!options.notHandleError) {
                        console.log('error');
                    }
                    reject(err);
                })
                .catch(err => {
                    if (!options.notHandleError) {
                        console.log('error');
                    }
                    reject(err);
                });
        });
    }
};
