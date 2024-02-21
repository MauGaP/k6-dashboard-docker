# Docker Dashboard Performance

A simple performance suite that runs on docker and uses the k6-dashboard extension to create reports live
![k6 dashboard overview dark](/k6-dashboard-overview-dark.png#gh-dark-mode-only)

## Prerequisites

- docker installed

- docker daemon running

## Installation

- run `docker build -t powerme-dashboard .`

## execution

- run `docker-compose up`

Once the execution started you can see the live report at
`http://localhost:5665/`

## parametrization

To modify the execution options (aka how many virtual users to use) modify the `options.json` file

To run a different test script, modify the `docker-compose.yml`(the last line is the test script `- TEST_SCRIPT=login.js`)

### WIP

I'm working on increasing the coverage.

Any questions or concerns, contact @maugap.
