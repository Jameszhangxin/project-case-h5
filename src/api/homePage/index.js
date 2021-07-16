import xhr from '../xhr';

export default {
    queryList(params) {
        return xhr.post('/mf/meta/allAppIds', params);
    }
};
