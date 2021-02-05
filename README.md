# Shelly Button1 Test

This project provides an easy to setup simple webserver that can
be used to try out the `Shelly Button1`. It supports web handlers
and resources for each short and long push url action that the
`Shelly Button1` has.

# Prerequisites

- nodejs >= 12
- yarn / npm

# Build and Start

- Build with `yarn install` oder `npm install`
- Start server with `yarn start` or `npm start`

# Features

The server starts on `http://localhost`. The following urls have handlers
attached and can therefore be called by the `Shelly Button1`:

- `/button/short/1`
- `/button/short/2`
- `/button/short/3`
- `/button/long/1`

When an url is called the server will respond wiht `HTTP/1.1 200 OK` and a short message

```javascript
{
    message: "'short url 1' was called"
}
```