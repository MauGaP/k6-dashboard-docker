// Creator: Grafana k6 Browser Recorder 1.0.1

import { sleep, group } from 'k6'
import http from 'k6/http'

export default function main() {
  let response

  group('page_1 - https://www.demoblaze.com/', function () {
    response = http.get('https://www.demoblaze.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(Math.random() * 6);

    response = http.get('https://api.demoblaze.com/entries', {
      headers: {
        accept: '*/*',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })
    sleep(Math.random() * 6);

    response = http.post(
      'https://api.demoblaze.com/login',
      '{"username":"maugap-perf","password":"bWF1Z2FwLXBlcmY="}',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.options('https://api.demoblaze.com/login', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.demoblaze.com',
        'sec-fetch-mode': 'cors',
      },
    })
    sleep(Math.random() * 6);

    response = http.get('https://www.demoblaze.com/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.post(
      'https://api.demoblaze.com/check',
      '{"token":"bWF1Z2FwLXBlcmYxNzA5MTI4"}',
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/json',
          'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
        },
      }
    )

    response = http.get('https://api.demoblaze.com/entries', {
      headers: {
        accept: '*/*',
        'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
      },
    })

    response = http.options('https://api.demoblaze.com/check', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers': 'content-type',
        'access-control-request-method': 'POST',
        origin: 'https://www.demoblaze.com',
        'sec-fetch-mode': 'cors',
      },
    })
  })
}