import request from '@/utils/request'

export function getUserList(params) {
  return request({
    url: '/Users/',
    method: 'get',
    params
  })
}
