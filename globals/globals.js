var waitThenSetValue = function(pageObject, elementName, value) {
    return pageObject.waitForElementPresent(elementName, 3000).setValue(elementName, value);
};

var waitThenFillTextArea = function(pageObject, elementName, value) {
    return pageObject.waitForElementVisible(elementName, 4000).setValue(elementName, value);
};

var waitPresentThenClick = function(pageObject, elementName) {
    return pageObject.waitForElementPresent(elementName, 4000).click(elementName);
};

var waitVisibleThenClick = function(pageObject, elementName) {
    return pageObject.waitForElementVisible(elementName, 3000).click(elementName);
};

var selectOption = function(pageObject, dropdownName, value) {
    return waitPresentThenClick(pageObject, dropdownName).click('option[value="' + value + '"]');
};

var uploadFile = function(pageObject, elementName, url) {
    return pageObject.waitForElementPresent(elementName, 3000).setValue(elementName, require('path').resolve(url));
};

module.exports = {
    
    waitThenSetValue : waitThenSetValue,
    waitPresentThenClick : waitPresentThenClick,
    waitVisibleThenClick : waitVisibleThenClick,
    selectOption : selectOption,
    uploadFile : uploadFile,
    waitThenFillTextArea : waitThenFillTextArea
};
