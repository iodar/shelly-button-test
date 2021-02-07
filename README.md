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

# Configuration

The action urls must be set on the `Shelly Button1` device:
- Short url 1
- Short url 2
- Short url 3
- Long url 1

# Features

The server starts on `http://localhost`. The following urls have handlers
attached and can therefore be called by the `Shelly Button1`:

- `/button/short/1`
- `/button/short/2`
- `/button/short/3`
- `/button/long/1`

When an url is called the server will respond with `HTTP/1.1 200 OK` and a small message.
It will also log the following information:
- Url which was called (short, long, which one)
- Ip address of the callee
- Battery status of the button (is retrieved in a separate call to the button)

The log will look like this:

```bash
2021-02-07T09:13:28.533Z SERVER: 'short url 1' was called from 101.10.23.7
2021-02-07T09:13:28.533Z SERVER: Shelly status (101.10.23.7) => Battery 100% and 4.19 Volts
```