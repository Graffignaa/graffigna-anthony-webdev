/**
 * Created by Anthony on 7/23/2017.
 */

(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {

        var pages = [
            {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
            {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
            {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}
        ];


        var api = {
            "createPage": createPage,
            "findPagesByWebsiteId": findPagesByWebsiteId,
            "findPageById": findPageById,
            "updatePage": updatePage,
            "deletePage": deletePage
        };
        return api;

        function createPage(websiteId, page) {
            page._id = (new Date()).getTime() + "";
            page.websiteId = websiteId;
            pages.push(page);
            return page;
        }

        function findPagesByWebsiteId(websiteId) {
            var sitePages = [];
            for (var p in pages) {
                if (pages[p].websiteId === websiteId) {
                    sitePages.push(pages[p]);
                }
            }
            return sitePages;
        }

        function findPageById(pageId) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    return pages[p];
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            for (var p in pages) {
                if (pages[p]._id === pageId) {
                    pages[p] = page;
                    return;
                }
            }
            return null;
        }

        function deletePage(pageId) {
            var i = 0;
            var index = -1;
            for (var p in pages) {
                if (pages[p]._id == pageId) {
                    index = i;
                }
            }
            if (index > -1) {
                pages.splice(index, 1);
            }
            return;
        }

    }
})();
