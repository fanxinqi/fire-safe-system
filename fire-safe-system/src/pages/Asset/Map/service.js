import request from '@/utils/request';
import { apiUrl } from './config';

export async function queryProductType(params) {
  // params.limit = params.pageSize;
  // params.page = params.current;
  const res = await request(apiUrl.queryProductType, {
    method: 'GET',
    params: params,
  });

  return {
    data: res.data.maps,
    success: true
  };
}

export async function query(params) {
  params.limit = params.pageSize;
  params.page = params.current;
  const res = await request(apiUrl.query, {
    method: 'GET',
    params: params,
  });

  return {
    data: res.data.list,
    success: true,
    current: parseInt(`${params.currentPage}`, 10) || 1,
    total: res.data.totalCount,
  };
}
export async function remove(params) {
  return request(apiUrl.remove, {
    method: 'POST',
    data: params,
  });
}
export async function add(params) {
  return request(apiUrl.add, {
    method: 'POST',
    data: { ...params },
  });
}
export async function update(params) {
  return request(apiUrl.update, {
    method: 'POST',
    data: { ...params },
  });
}
