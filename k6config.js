import { check, sleep } from 'k6';
import http from 'k6/http';

export default function() {
  const id = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://localhost:3050/api/song/${id}/comments`);
  check(res, {
    'is status 200': (r) => r.status === 200
  });
}
