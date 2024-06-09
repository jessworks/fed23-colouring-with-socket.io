import { io } from "socket.io-client";
const socket = io("http://localhost:3000");

import startView from './scripts/startView';

startView();