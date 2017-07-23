/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {

        var websites = [
            {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
            {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
            {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
            {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
            {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
            {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
            {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
        ];


        var api = {
            "createWebsite": createWebsite,
            "findWebsitesByUser": findWebsitesByUser,
            "findWebsiteById": findWebsiteById,
            "updateWebsite": updateWebsite,
            "deleteWebsite": deleteWebsite
        };
        return api;

        function createWebsite(userId, website) {
            website._id = (new Date()).getTime() + "";
            website.developerId = userId;
            websites.push(website);
            return website;
        }

        function findWebsitesByUser(userId) {
            var userSites = [];
            for (var w in websites) {
                if (websites[w].developerId === userId) {
                    userSites.push(websites[w]);
                }
            }
            return userSites;
        }

        function findWebsiteById(websiteId) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    return websites[w];
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website) {
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    websites[w] = website;
                    return;
                }
            }
            return null;
        }

        function deleteWebsite(websiteId) {
            var i = 0;
            var index = -1;
            for (var w in websites) {
                if (websites[w]._id === websiteId) {
                    index = i;
                }
            }
            if (index > -1) {
                websites.splice(index, 1);
            }
            return;
        }

    }
})();
