#!/bin/sh
k6 run --config /workspace/options.json --out web-dashboard "/workspace/test-scripts/${TEST_SCRIPT}"
