
/*
import express from 'express'
import { WebSocketServer } from 'ws'
import { setupWSConnection } from 'y-websocket/server.js'  // <-- FIX HERE

const app = express()
const server = app.listen(1234, () => console.log('Server running on port 1234'))

const wss = new WebSocketServer({ server })

wss.on('connection', (conn, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`)
  const docName = url.searchParams.get('doc') || 'default'
  setupWSConnection(conn, req, { docName })
})
*/

import express from "express";
import { WebSocketServer } from "ws";
import { setupWSConnection } from "y-websocket/bin/utils.js"; // ✅ correct import

const app = express();
const port = process.env.PORT || 1234;

const server = app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on("connection", (conn, req) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const docName = url.searchParams.get("doc") || "default";
  setupWSConnection(conn, req, { docName });
});
