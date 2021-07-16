import xhr from '../xhr';

export default {
  //应用监控系统查询所有接口
  joggleList(params) {
    return xhr.post('/mf/application/allMethods', params);
  },
  //应用监控系统搜索
  searchList(params) {
    return xhr.post('/mf/application/methodInvokeQuery', params)
  },
  // 异常监控查询所有接口
  allException(params) {
    return xhr.post('/mf/exception/allExceptionMethods', params)
  },
  //单接口查询折线图
  singleLine(params) {
    return xhr.post('/mf/exception/exceptionQuery', params)
  },
  // 单接口查询饼图
  singlePie(params) {
    return xhr.post('/mf/exception/exceptionDistributionRate', params)
  },
  // 异常trace查询
  traceList(params) {
    return xhr.post('/mf/exception/exceptionTraceIds', params)
  },
  //数据埋点查询

  //系统监控数据
  dataQuery(params) {
    return xhr.post('/mf/system/dataQuery', params)
  },
  //全链路Trace
  traceQuery(params) {
    return xhr.post('/mf/trace/traceQuery', params)
  }
};



