# Use the xk6-dashboard image from GitHub Container Registry
FROM ghcr.io/grafana/xk6-dashboard:0.7.2

# Expose the default port used by xk6-dashboard
EXPOSE 5665

# Set the entry point to the shell
ENTRYPOINT ["/bin/sh"]

# Set workdir
WORKDIR /workdir

# Make the script executable and run it
CMD ["/workdir/run-k6.sh"]
