# K6 Dashboard Docker

A simple performance suite that runs on docker and uses the k6-dashboard extension to create reports live
![k6 dashboard overview dark](/k6-dashboard-overview-dark.png#gh-dark-mode-only)

## Prerequisites

- docker installed

- docker daemon running

## Installation

- run `docker build -t prf-dashboard .`

## Execution

- run `docker-compose up`

Once the execution started you can see the live report at
`http://localhost:5665/`

If you make modifications to the files (IE: config.json) and want to run again

- run `docker-compose down`

- then `docker-compose up --build`

## Parametrization

To modify the execution options (aka how many virtual users to use) modify the `options.json` file

To run a different test script, modify the `docker-compose.yml`(the last line is the test script `- TEST_SCRIPT=login.js`)

## Reports

The execution saves an html report of the execution with the name of the test script and a timestamp

### WIP

Any questions or concerns, contact @maugap.
