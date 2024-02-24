#!/bin/sh

# Define a timestamp function
NOW=$(date +"%Y-%m-%d-%T")

# Ensure the reports directory exists
mkdir -p /workdir/reports

# Execute the tests and report the html
k6 run --config /workdir/options.json --out web-dashboard=report=workdir/reports/perf-report_${TEST_SCRIPT}_${NOW}.html "/workdir/test-scripts/${TEST_SCRIPT}"
