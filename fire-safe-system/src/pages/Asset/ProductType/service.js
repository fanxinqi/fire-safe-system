import request from '@/utils/request';

export async function query(params) {
  params.limit = params.pageSize;
  params.page = params.current;
  const res = await request('/api/productType/list', {
    method: 'POST',
    data: params,
  });
  return {
    data: res.data.list,
    success: true,
    current: parseInt(`${params.currentPage}`, 10) || 1,
    total: res.data.totalCount,
  };
}
export async function remove(params) {
  return request('/api/productType/delete', {
    method: 'POST',
    data: { ...params, method: 'delete' },
  });
}
export async function add(params) {
  return request('/api/productType/add', {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function update(params) {
  return request('/api/productType/edit', {
    method: 'POST',
    data: { ...params, method: 'update' },
  });
}
