import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/users/list',
    method: 'get',
    params
  })
}

export function getUserDetail(params) {
  return request({
    url: '/users/detail',
    method: 'get',
    params
  })
}
