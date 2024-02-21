# Powerme Performance scripts

## Installation

`docker build -t powerme-dashboard .`

## execution

`docker-compose up`

Once the execution started you can see the live report at
`http://localhost:5665/`

## parametrization

to modify the execution options (aka how many virtual users to use) modify the `options.json` file

to run a different test script, modify the `docker-compose.yml`(the last line is the test script `- TEST_SCRIPT=login.js`)


### WIP
I'm working on increasing the coverage.
any questions or concerns, contact @maugap-datumsure.