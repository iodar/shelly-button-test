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

These urls must be configured as the actions url in the configuration
of the `Shelly Button1`:

| ACTION URL | URL TO SET TO |
| ---- | ---- |
| Short url 1 | `http://<your host url>/button/short/1` |
| Short url 2 | `http://<your host url>/button/short/2` |
| Short url 3 | `http://<your host url>/button/short/3` |
| Long url 1 | `http://<your host url>/button/long/1` |

When an url is called the server will respond with `HTTP/1.1 200 OK` and a small message.
It will also log the following information:
- Url which was called (short, long, which one)
- Ip address of the caller
- Battery status of the button (is retrieved in a separate call to the button)

The log will look like this:

```bash
2021-02-07T09:13:28.533Z SERVER: 'short url 1' was called from 101.10.23.7
2021-02-07T09:13:28.533Z SERVER: Shelly status (101.10.23.7) => Battery 100% and 4.19 Volts
```