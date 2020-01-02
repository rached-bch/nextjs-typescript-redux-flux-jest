export function startCounter(dispatcher: any) {
  dispatcher.dispatch("START_COUNTER");
}

export function stopCounter(dispatcher: any) {
  dispatcher.dispatch("STOP_COUNTER");
}
