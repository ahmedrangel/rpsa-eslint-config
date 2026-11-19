/**
 * @NApiVersion 3.0
 * @NScriptType UserEventScript
 */
define(["N/log"], (log) => {
  const beforeSubmit = (context) => {
    log.debug("beforeSubmit", context.type);
  };
  return { beforeSubmit };
});
