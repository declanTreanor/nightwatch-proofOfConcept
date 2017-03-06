exports.command = function(pageObject, miliseconds, elementName) {
    
    pageObject.waitForElementVisible(elementName, miliseconds).click(elementName);

    return pageObjecct;
};
