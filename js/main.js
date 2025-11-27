/**
 * @file
 * Intranet Megamidia - Main JavaScript
 */

(function (Drupal, once) {
  'use strict';

  /**
   * Mobile sidebar toggle functionality.
   */
  Drupal.behaviors.intranetSidebar = {
    attach: function (context, settings) {
      once('intranet-sidebar', '.js-sidebar-toggle', context).forEach(function (button) {
        const sidebar = document.querySelector('.js-sidebar');
        const overlay = document.querySelector('.js-sidebar-overlay');

        button.addEventListener('click', function () {
          sidebar.classList.toggle('-translate-x-full');
          overlay.classList.toggle('hidden');
        });

        if (overlay) {
          overlay.addEventListener('click', function () {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
          });
        }
      });
    }
  };

  /**
   * Search form behavior.
   */
  Drupal.behaviors.intranetSearch = {
    attach: function (context, settings) {
      once('intranet-search', '.js-search-form', context).forEach(function (form) {
        const input = form.querySelector('input[type="text"]');
        const icon = form.querySelector('.js-search-icon');

        if (input) {
          input.addEventListener('focus', function () {
            icon.classList.add('text-brand-500');
            icon.classList.remove('text-gray-400');
          });

          input.addEventListener('blur', function () {
            icon.classList.remove('text-brand-500');
            icon.classList.add('text-gray-400');
          });
        }
      });
    }
  };

  /**
   * Notification bell animation.
   */
  Drupal.behaviors.intranetNotifications = {
    attach: function (context, settings) {
      once('intranet-notifications', '.js-notification-bell', context).forEach(function (bell) {
        bell.addEventListener('click', function () {
          // Placeholder for future notification panel toggle
          console.log('Notifications clicked');
        });
      });
    }
  };

})(Drupal, once);

