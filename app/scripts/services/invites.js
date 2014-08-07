'use strict';

var sc = angular.module('stellarClient');

sc.service('invites', function($http, session) {
    return {
        send: function (email) {
            var data = {
                username: session.get('username'),
                updateToken: session.get('wallet').keychainData.updateToken,
                email: email
            };

            return $http.post(Options.API_SERVER + "/invites/send", data);
        },
        cancel: function (invite) {
            var data = {
                username: session.get('username'),
                updateToken: session.get('wallet').keychainData.updateToken,
                inviteId: invite.inviteId
            };

            return $http.post(Options.API_SERVER + "/invites/cancel", data);
        },
        resend: function (invite) {
            var data = {
                username: session.get('username'),
                updateToken: session.get('wallet').keychainData.updateToken,
                inviteId: invite.inviteId
            };

            return $http.post(Options.API_SERVER + "/invites/resend", data);
        }
    }
});