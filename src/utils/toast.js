// Simple publish-subscribe toast notification service
const listeners = new Set();

export const toast = {
  /**
   * Subscribe to toast notifications.
   * @param {Function} callback - Function called when a toast is triggered.
   * @returns {Function} Unsubscribe function.
   */
  subscribe(callback) {
    listeners.add(callback);
    return () => {
      listeners.delete(callback);
    };
  },

  /**
   * Triggers a toast alert.
   * @param {string} message - Notification text.
   * @param {'success'|'error'|'info'} [type='success'] - Alert type.
   */
  show(message, type = 'success') {
    listeners.forEach((callback) => callback(message, type));
  },

  success(message) {
    this.show(message, 'success');
  },

  error(message) {
    this.show(message, 'error');
  },

  info(message) {
    this.show(message, 'info');
  }
};
