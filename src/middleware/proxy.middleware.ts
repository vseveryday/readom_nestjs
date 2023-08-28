import { NestMiddleware } from '@nestjs/common';
import { createProxyMiddleware } from 'http-proxy-middleware';

export class ReverseProxyMiddleware implements NestMiddleware {
  private proxy = createProxyMiddleware({
    target: 'http://localhost:80/datasnap/rest/TReadom/test',
    pathRewrite: {
      '/api/v1': '',
    },
    secure: false,
    onProxyReq: (proxyReq, req, res) => {
      console.log(
        `[NestMiddleware]: Proxying ${req.method} request originally made to '${req.originalUrl}'...`,
      );
    },
  });
  constructor() {}

  use(req: any, res: any, next: (error?: any) => void) {
    this.proxy(req, res, next);
  }
}
