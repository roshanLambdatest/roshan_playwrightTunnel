const Tunnel = require("@lambdatest/node-tunnel");

// LambdaTest credentials
const username = "roshanK";
const accessKey = "LT_pdN9i3brrjhqvhD82BuHMGL29zUl83MBQpdartL2hae9QdE";

// Tunnel options
const tunnelOptions = {
  user: username,
  key: accessKey,
  tunnelName: "MyTunnel",
  v: true, // Enables verbose logging
};

const tunnel = new Tunnel();

// Start Tunnel
tunnel.start(tunnelOptions, function (err) {
  if (err) {
    console.error("Tunnel start failed:", err);
    return;
  }
  console.log("Tunnel started successfully!");

  // To stop the tunnel manually (for example, after tests)
  process.on("SIGINT", async () => {
    console.log("Stopping tunnel...");
    await tunnel.stop();
    console.log("Tunnel stopped.");
    process.exit();
  });
});
