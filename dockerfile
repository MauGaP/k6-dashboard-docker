# Use the xk6-dashboard image from GitHub Container Registry
FROM ghcr.io/grafana/xk6-dashboard:0.7.2

# Expose the default port used by xk6-dashboard
EXPOSE 5665

# Copy the test script and configuration file into the container
COPY . /workspace

# Set the entry point to the shell
ENTRYPOINT ["/bin/sh"]

# Make the script executable and run it
CMD ["/workspace/run-k6.sh"]
