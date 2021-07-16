import xhr from './xhr';

export default {
    regionList(params) {
        return xhr.post('/region/query', params);
    }
};
