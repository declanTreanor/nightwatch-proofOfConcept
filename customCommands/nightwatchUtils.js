module.exports = {
    
        waitThenSetValue : function(pageObject, miliseconds, elementName, value) {
        
        pageObject.waitForElementVisible(elementName, miliseconds).setValue(elementName, value);

        return pageObjecct;
    
    }
};
