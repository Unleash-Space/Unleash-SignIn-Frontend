# Unleash-app

## API

UPI should be interchangeable with ID and checked in the backend

### GET /reasons

response format:

```json
  [
    {
      "option": string,
      "index": int,
      "subReason": reason[]
    }
  ]
```

### POST /login

response format:

```bash
  status 200
```

request body:

```json
  {
    "option": string,
    "index": int
  }
```

### GET /users

response format:

```json
{
  [
    "id": 0,
    "name": string
  ]
}
```

### POST /logout

response format:

```bash
  status 200
```

request body:

```json
  {
    "upi": string,
  }
```

## To change

- enter the api URL into api.service.ts ln 22
- add the API key
- uncomment login.component.ts ln 43
- remove temp data login.component.ts ln21-ln36 change to an empty array
- uncomment login.component.ts ln 43
- remove temp data logout.component.ts ln10-ln22 change to an empty array

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
