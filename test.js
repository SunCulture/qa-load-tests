
import http from 'k6/http';
import { sleep } from 'k6';
import { group } from 'k6';
import { check } from 'k6';
export const options = { vus: 50, iterations: 100};

export default function () {
  let params;
  let resp;
  let match;
  let regex;
  let url;
  const correlation_vars = {};

  group("Default group", function () {
    params = {
      headers: {
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"Windows"`,
        "upgrade-insecure-requests": `1`,
        accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "sec-fetch-site": `none`,
        "sec-fetch-mode": `navigate`,
        "sec-fetch-user": `?1`,
        "sec-fetch-dest": `document`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=0, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.mopesa.sunculture.io/login`;
    resp = http.request("GET", url, null, params);
    http.get(url, { timeout: '120s' });
    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "content-type": `application/json`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-origin`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/login`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.mopesa.sunculture.io/api/login`;
    resp = http.request(
      "POST",
      url,
      `{"identifier":"wincasty.kariuki@sunculture.com","password":"123456789"}`,
      params,
    );

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://dev.auth.sunculture.io/o/userinfo/`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://dev.auth.sunculture.io/o/userinfo/`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/users/auth-service/21`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `21`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/users/auth-service/21`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `21`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"305-p7eNDpE9SF9mUactMaWoQ9y0LOc"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/users/auth-service/21`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 304": (r) => r.status === 304 });

    params = {
      headers: {
        rsc: `1`,
        "sec-ch-ua-platform": `"Windows"`,
        "next-url": `/login`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        "next-router-state-tree": `%5B%22%22%2C%7B%22children%22%3A%5B%22login%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2Flogin%22%2C%22refresh%22%5D%7D%5D%7D%2Cnull%2Cnull%2Ctrue%5D`,
        accept: `*/*`,
        "sec-fetch-site": `same-origin`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/login`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.mopesa.sunculture.io/?_rsc=ak96a`;
    resp = http.request("GET", url, null, params);

    params = {
      headers: {
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        "sec-ch-ua-platform": `"Windows"`,
        "upgrade-insecure-requests": `1`,
        accept: `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`,
        "sec-fetch-site": `same-origin`,
        "sec-fetch-mode": `navigate`,
        "sec-fetch-dest": `document`,
        referer: `https://test.mopesa.sunculture.io/login`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=0, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.mopesa.sunculture.io/`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://dev.auth.sunculture.io/o/userinfo/`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-approvals/pending/42`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-approvals/reviewed/42`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&status=PENDING&page=1`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses/open-advances?user_id=42&page=1&limit=10`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-approvals/pending/42`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-approvals/reviewed/42`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&status=PENDING&page=1`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses/open-advances?user_id=42&page=1&limit=10`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-types`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&limit=10&page=1`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-types`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&limit=10&page=1`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/users/42`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/currencies/get-all`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/departments/get-all`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-categories`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?page=1&limit=10`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"a46-0CXzgpQLMvdvEPXtgSXmgX1QaPo"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-types`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 304": (r) => r.status === 304 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/users/42`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/currencies/get-all`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/departments/get-all`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-categories`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?page=1&limit=10`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"485-P0AXdPR7cworiUgJV2vS1cbSuDU"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 304": (r) => r.status === 304 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `POST`,
        "access-control-request-headers": `authorization,client-id,content-type,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        "client-id": `jHLoH1onNxHFQv34h7GnOgY4pBGaokl4RVjdC0yG`,
        "content-type": `application/json`,
        accept: `*/*`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses`;
    resp = http.request(
      "POST",
      url,
      `{"status":"SUBMITTED","expenseNumber":"ADV-20250809223356-42H","payee":"Wincasty Kariuki","payeeNumber":"254717654718","payeeIdNumber":"2344234","payeeTaxPin":"","expenseDescription":"Test for Performance1","expenseType":"advance","expenseTotalAmount":6000,"expenseSubTypeId":"5eab7cf2-3a14-4ce6-95ab-5f34fc89cc6d","departmentId":6,"expenseOrigin":6,"startDate":"2025-08-09T00:00:00.000Z","endDate":"2025-08-10T00:00:00.000Z","expenseItems":[{"expenseDate":"2025-08-09T00:00:00.000Z","startDate":"2025-08-09T00:00:00.000Z","endDate":"2025-08-10T00:00:00.000Z","lineItemNumber":"1754768030-a2fo8givsm","payeeIdNumber":"2344234","expenseDescription":"Test1","expenseCategoryId":55,"amount":6000,"expenseAmount":6000,"currency":"KES","exchangeRate":1,"originalExpenseCurrency":"KES","paymentMethod":"Mobile Money","attachments":[]}]}`,
      params,
    );

    check(resp, { "status equals 201": (r) => r.status === 201 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?page=1&limit=10`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"80f5-bkfWVxtTQtkd6qxGBIq3yQBbo4Q"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?page=1&limit=10`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-types`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        accept: `*/*`,
        "access-control-request-method": `GET`,
        "access-control-request-headers": `authorization,x-user-id`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&limit=10&page=1`;
    resp = http.request("OPTIONS", url, null, params);

    check(resp, { "status equals 204": (r) => r.status === 204 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"485-P0AXdPR7cworiUgJV2vS1cbSuDU"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/regions`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 304": (r) => r.status === 304 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"a46-0CXzgpQLMvdvEPXtgSXmgX1QaPo"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expense-types`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 304": (r) => r.status === 304 });

    params = {
      headers: {
        "sec-ch-ua-platform": `"Windows"`,
        authorization: `Bearer birdP1UOMhSZT7RuMYeAuKlFqLIYJl`,
        "x-user-id": `42`,
        accept: `application/json, text/plain, */*`,
        "sec-ch-ua": `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        "sec-ch-ua-mobile": `?0`,
        origin: `https://test.mopesa.sunculture.io`,
        "sec-fetch-site": `same-site`,
        "sec-fetch-mode": `cors`,
        "sec-fetch-dest": `empty`,
        referer: `https://test.mopesa.sunculture.io/`,
        "accept-encoding": `gzip, deflate, br, zstd`,
        "accept-language": `en-US,en;q=0.9`,
        "if-none-match": `W/"bfe7-hVZBqi1C82bVJnRyztfXtF7i/OM"`,
        priority: `u=1, i`,
      },
      cookies: {},
    };

    url = http.url`https://test.api.mopesa.sunculture.io/api/v1/expenses?user_id=42&limit=10&page=1`;
    resp = http.request("GET", url, null, params);

    check(resp, { "status equals 200": (r) => r.status === 200 });
  });
  sleep(1);
}
