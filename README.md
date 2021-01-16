# Unleash-app

## API

### GET reasons

response format:

```json
{
  "list": [{ "reason": "string", "id": 0 }]
}
```

### POST login

response format:

```bash
status 200
```

request body:

```json
{ "reason": "string", "id": 0 }
```

### GET users

response format:

```json
{
    [
        "id": 0,
        "name": "string"
    ]
}
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
