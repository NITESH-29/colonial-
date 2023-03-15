# E2E Testing

## Running e2e tests as a developer

The e2e image set up in this repo (in `docker-compose.e2e.yml`) is setup to
run against your local angular development server running on your laptop, not a
docker image. As such it connects to your laptop, not any of the other images
that may be running. If you are running linux, you must modifiy the `.env`
file's variable `E2ETEST_LOCALHOST` to point to `localhost`. For MacOS laptops
leave as-is.

Linux
    
    E2ETEST_LOCALHOST=localhost

MAC

    E2ETEST_LOCALHOST=host.docker.internal

Run all tests:

    docker-compose -f docker-compose.e2e.yml run e2etest

Run a single directory of tests (the `headless` is important when adding
arguments)

    docker-compose -f docker-compose.e2e.yml run e2etest headless --spec 'cypress/integration/securityTests/**/*.js'

## Cypress base image

Why is there a Cypress image?

Two reasons:

  1. The cypress images published by Cypress.io don't have cypress installed.
     Installing cypress is disk intensive as it includes its own node runtime
     and other assorted junk. If we create a base image with cypress
     preinstalled then building the e2etests images could be much, much quicker
     as it'll get cypress from the image's npm cache instead of downloading.

     We're talking 3-5 minutes per image, just in I/O time.

     Since we're building e2etest per commit it makes a lot of sense to keep
     heavy lifting in a base image.

  2. Mike Rich anticipates multiple projects for cypress.

### Maintenance

This will have to be kept in rough sync with each e2etest's `package.json`.

Support for other browsers will occur here. I recommend trying to keep to a
published base image as browser requirements for headless can be daunting. See
[cypress github](https://github.com/cypress-io/cypress-docker-images/tree/master/browsers_)
for details.

### Pitfalls

I've had extensive issues with Cypress running headless against Electron. Nobody
quite knows why, there's a number of issues open in their project pointing
various fingers at a lot of potential culprits. I've tracked down the issues to
it being unable to close browsers between specs. At least the issues that I've
seen so far.

Make sure you're invoking with `--browser chrome`. If you see Electron, tests
may stall.
