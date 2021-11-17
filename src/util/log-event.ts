/** Log a CustomEvent with details */
export function logEvent(ev: CustomEvent): void {
  console.log(ev.type, ev.detail);
}
