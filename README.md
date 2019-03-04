Example project using Docker Compose to run Nightwatch.js tests along with a
standalone Chrome instance to run in-browser tests.

Run with:

```bash
docker-compose up --build --exit-code-from nightwatch
```

The Google-based test should pass but the Bing-based test will fail on purpose
in order to demonstrate the screenshots functionality.