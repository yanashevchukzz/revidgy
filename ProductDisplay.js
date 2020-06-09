//-----------------------------------------------------------------
// Licensed Materials - Property of IBM
//
// WebSphere Commerce
//
// (C) Copyright IBM Corp. 2013, 2014 All Rights Reserved.
//
// US Government Users Restricted Rights - Use, duplication or
// disclosure restricted by GSA ADP Schedule Contract with
// IBM Corp.
//-----------------------------------------------------------------

productDisplayJS = {

    moto: false,
    /** The language ID currently in use **/
    langId: "-1",

    /** The store ID currently in use **/
    storeId: "",

    /** The catalog ID currently in use **/
    catalogId: "",

    /** Holds the current user type such as guest or registered user. Allowed values are 'G' for guest and 'R' for registered.**/
    userType: "",

    /** A boolean used in a variety of the add to cart methods to tell whether or not the base item was added to the cart. **/
    baseItemAddedToCart: false,

    /** An array of entitled items which is used in various methods throughout ShoppingActions.js **/
    entitledItems: [],

    /** a JSON object that holds attributes of an entitled item **/
    entitledItemJsonObject: null,

    /** A map of attribute name value pairs for the currently selected attribute values **/
    selectedAttributesList: new Object(),

    /** A map of currently selected attribute values for a catalog entry **/
    selectedAttributeValues: new Object(),

    /** A map of HTML element ids associated with an attribute name **/
    registeredAttributeIds: new Object(),

    /** A variable used to form the url dynamically for the more info link in the Quickinfo popup */
    moreInfoUrl: "",

    /**
     * A boolean used to to determine is it from a Qick info popup or not. 
     **/
    isPopup: false,

    /**
     * A boolean used to to determine whether or not to display the price range when the catEntry is selected. 
     **/
    displayPriceRange: true,

    /**
     * This array holds the json object returned from the service, holding the price information of the catEntry.
     **/
    itemPriceJsonOject: [],

    /** 
     * stores all name and value of all swatches 
     * this is a 2 dimension array and each record i contains the following information:
     * allSwatchesArray[i][0] - attribute name of the swatch
     * allSwatchesArray[i][1] - attribute value of the swatch
     * allSwatchesArray[i][2] - image1 of swatch (image to use for enabled state)
     * allSwatchesArray[i][3] - image2 of swatch (image to use for disabled state)
     * allSwatchesArray[i][4] - onclick action of the swatch when enabled
     **/
    allSwatchesArrayList: new Object(),

    /**
     * Holds the ID of the image used for swatch
     **/
    skuImageId: "",

    /**
     * The prefix of the cookie key that is used to store item IDs. 
     */
    cookieKeyPrefix: "CompareItems_",

    /**
     * The delimiter used to separate item IDs in the cookie.
     */
    cookieDelimiter: ";",

    /**
     * The maximum number of items allowed in the compare zone. 
     */
    maxNumberProductsAllowedToCompare: 4,

    /**
     * The minimum number of items allowed in the compare zone. 
     */
    minNumberProductsAllowedToCompare: 2,

    /**
     * Id of the base catalog entry. 
     */
    baseCatalogEntryId: 0,

    /**
     * An map which holds the attributes of a set of products
     */
    selectedProducts: new Object(),

    /**
     * An array to keep the quantity of the products in a list (bundle)
     */
    productList: new Object(),

    /**
     * stores the currency symbol
     */
    currencySymbol: "",

    /**
     * stores the compare return page name
     */
    compareReturnName: "",
    /**
     * stores the search term
     */
    searchTerm: "",

    search01: "'",

    search02: '"',

    replaceStr01: /\\\'/g,

    replaceStr02: /\\\"/g,

    ampersandChar: /&/g,

    ampersandEntityName: "&amp;",

    cityIdBusqueda: "",

    setCommonParameters: function(langId, storeId, catalogId, userType, currencySymbol) {
        productDisplayJS.langId = langId;
        productDisplayJS.storeId = storeId;
        productDisplayJS.catalogId = catalogId;
        productDisplayJS.userType = userType;
        productDisplayJS.currencySymbol = currencySymbol;
    },

    setEntitledItems: function(entitledItemArray) {
        productDisplayJS.entitledItems = entitledItemArray;
    },

    getCatalogEntryId: function(entitledItemId) {
        var attributeArray = [];
        var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
        for (attribute in selectedAttributes) {
            attributeArray.push(attribute + "_" + selectedAttributes[attribute]);
        }
        return productDisplayJS.resolveSKU(attributeArray);
    },

    /**
     * getCatalogEntryIdforProduct Returns the catalog entry ID for a catalog entry that has the same attribute values as a specified product's selected attributes as passed in via the selectedAttributes parameter.
     *
     * @param {String[]} selectedAttributes The array of selected attributes upon which to resolve the SKU.
     *
     * @return {String} catalog entry ID of the SKU.
     *
     **/
    getCatalogEntryIdforProduct: function(selectedAttributes) {
        var attributeArray = [];
        for (attribute in selectedAttributes) {
            attributeArray.push(attribute + "_" + selectedAttributes[attribute]);
        }
        return productDisplayJS.resolveSKU(attributeArray);
    },

    /**
     * retrieves the entitledItemJsonObject
     */
    getEntitledItemJsonObject: function() {
        return productDisplayJS.entitledItemJsonObject;
    },

    /**
     * resolveSKU Resolves a SKU using an array of defining attributes.
     *
     * @param {String[]} attributeArray An array of defining attributes upon which to resolve a SKU.
     *
     * @return {String} catentry_id The catalog entry ID of the SKU.
     *
     **/
    resolveSKU: function(attributeArray) {
        console.debug("Resolving SKU >> " + attributeArray + ">>" + this.entitledItems);
        var catentry_id = "";
        var attributeArrayCount = attributeArray.length;

        // if there is only one item, no need to check the attributes to resolve the sku
        if (this.entitledItems.length == 1) {
            return this.entitledItems[0].catentry_id;
        }
        for (x in this.entitledItems) {
            var catentry_id = this.entitledItems[x].catentry_id;
            var Attributes = this.entitledItems[x].Attributes;
            var attributeCount = 0;
            for (index in Attributes) {
                attributeCount++;
            }

            // Handle special case where a catalog entry has one sku with no attributes
            if (attributeArrayCount == 0 && attributeCount == 0) {
                return catentry_id;
            }
            if (attributeCount != 0 && attributeArrayCount >= attributeCount) {
                var matchedAttributeCount = 0;

                for (attributeName in attributeArray) {
                    var attributeValue = attributeArray[attributeName];
                    if (attributeValue in Attributes) {
                        matchedAttributeCount++;
                    }
                }

                if (attributeCount == matchedAttributeCount) {
                    console.debug("CatEntryId:" + catentry_id + " for Attribute: " + attributeArray);
                    return catentry_id;
                }
            }
        }
        return null;
    },

    /**
     * registerAttributeIds Register the ids of HTML attributes that are associated with the specified attribute.
     *
     * @param {String} attributeName The name of the attribute.
     * @param {String} entitledItemId The element id where the json object of the sku is stored
     * @param {Object} ids Map of named HTML element ids
     *
     **/
    registerAttributeIds: function(attributeName, entitledItemId, ids) {
        var attributeIds = productDisplayJS.registeredAttributeIds[entitledItemId];
        if (attributeIds == null) {
            attributeIds = new Object();
            productDisplayJS.registeredAttributeIds[entitledItemId] = attributeIds;
        }
        attributeIds[attributeName] = ids;
    },

    /**
     * getAttributeIds Get the map of ids of HTML attributes that are associated with the specified attribute.
     *
     * @param {String} attributeName The name of the attribute.
     * @param {String} entitledItemId The element id where the json object of the sku is stored
     *
     * @return {Object} ids Map of named HTML element ids
     *
     **/
    getAttributeIds: function(attributeName, entitledItemId) {
        var ids = null;
        var attributeIds = productDisplayJS.registeredAttributeIds[entitledItemId];
        if (attributeIds != null) {
            ids = attributeIds[attributeName];
        }
        return ids;
    },

    /**
     * setSelectedAttribute Sets the selected attribute value for a particular attribute not in reference to any catalog entry.
     *                     One place this function is used is on CachedProductOnlyDisplay.jsp where there is a drop down box of attributes.
     *                     When an attribute is selected from that drop down this method is called to update the selected value for that attribute.
     *
     * @param {String} selectedAttributeName The name of the attribute.
     * @param {String} selectedAttributeValue The value of the selected attribute.
     * @param {String} entitledItemId The element id where the json object of the sku is stored
     * @param {String} skuImageId This is optional. The element id of the product image - image element id is different in product page and category list view. Product page need not pass it because it is set separately
     * @param {String} imageField This is optional. The json field from which image should be picked. Pass value if a different size image need to be picked
     *
     **/
    setSelectedAttribute: function(selectedAttributeName, selectedAttributeValue, entitledItemId, skuImageId, imageField) {
        var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
        if (selectedAttributes == null) {
            selectedAttributes = new Object();
        }
        selectedAttributeValue = selectedAttributeValue.replace(productDisplayJS.replaceStr01, productDisplayJS.search01);
        selectedAttributeValue = selectedAttributeValue.replace(productDisplayJS.replaceStr02, productDisplayJS.search02);
        selectedAttributeValue = selectedAttributeValue.replace(productDisplayJS.ampersandChar, productDisplayJS.ampersandEntityName);
        selectedAttributes[selectedAttributeName] = selectedAttributeValue;
        productDisplayJS.moreInfoUrl = productDisplayJS.moreInfoUrl + '&' + selectedAttributeName + '=' + selectedAttributeValue;
        productDisplayJS.selectedAttributesList[entitledItemId] = selectedAttributes;
        if (skuImageId != undefined) {
            productDisplayJS.setSKUImageId(skuImageId);
        }
        var entitledItemJSON;
        if (dojo.byId(entitledItemId) != null && !productDisplayJS.isPopup) {
            //the json object for entitled items are already in the HTML. 
            entitledItemJSON = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
        } else {
            //if dojo.byId(entitledItemId) is null, that means there's no <div> in the HTML that contains the JSON object. 
            //in this case, it must have been set in catalogentryThumbnailDisplay.js when the quick info
            entitledItemJSON = productDisplayJS.getEntitledItemJsonObject();
        }
        productDisplayJS.setEntitledItems(entitledItemJSON);
        var attributeIds = productDisplayJS.getAttributeIds(selectedAttributeName, entitledItemId);
        if (attributeIds != null) {
            var usedFilterValue = dojo.byId(attributeIds.usedFilterValueId);
            if (usedFilterValue != null) {
                usedFilterValue.innerHTML = selectedAttributeValue;
            }
            if (selectedAttributeValue == "") {
                dojo.removeClass(attributeIds.usedFilterId, "visible");
                var hideCurrentUsedFilters = true;
                for (var attributeName in selectedAttributes) {
                    if (selectedAttributes[attributeName] != "") {
                        hideCurrentUsedFilters = false;
                        break;
                    }
                }
                if (hideCurrentUsedFilters) {
                    dojo.addClass("currentUsedFilters_" + entitledItemId, "hidden");
                }
            } else {
                dojo.addClass(attributeIds.usedFilterId, "visible");
                dojo.removeClass("currentUsedFilters_" + entitledItemId, "hidden");
            }
        }
    },

    /**
     * resetSelectedAttribute Resets the the selected attribute value for the specified attribute.
     *
     * @param {String} attributeName The name of the attribute.
     * @param {String} entitledItemId The element id where the json object of the sku is stored
     *
     **/
    resetSelectedAttribute: function(attributeName, entitledItemId) {
        var attributeIds = productDisplayJS.getAttributeIds(attributeName, entitledItemId);
        if (attributeIds != null) {
            var selectWidget = dijit.byId(attributeIds.selectAttributeValueId);
            if (selectWidget != null) {
                selectWidget.set("value", "");
            }
        }
    },

    /**
     * setSelectedAttributeName Set the selected attribute name and make the drop-down associated with the attribute visible.
     *
     * @param {String} attributeName The name of the attribute.
     * @param {String} entitledItemId The element id where the json object of the sku is stored
     *
     **/
    setSelectedAttributeName: function(attributeName, entitledItemId) {
        var oldSelectedAttributeValuesId = productDisplayJS.selectedAttributeValues[entitledItemId];
        if (oldSelectedAttributeValuesId != null && oldSelectedAttributeValuesId != "") {
            dojo.addClass(oldSelectedAttributeValuesId, "mobileHidden");
        }
        var selectedAttributeValuesId = null;
        var attributeIds = productDisplayJS.getAttributeIds(attributeName, entitledItemId);
        if (attributeIds != null) {
            selectedAttributeValuesId = attributeIds.attributeValuesId;
        }
        if (selectedAttributeValuesId != null && selectedAttributeValuesId != "") {
            dojo.removeClass(selectedAttributeValuesId, "mobileHidden");
        }
        productDisplayJS.selectedAttributeValues[entitledItemId] = selectedAttributeValuesId;
    },

    /**
     * Add2ShopCartAjax This function is used to add a catalog entry to the shopping cart using an AJAX call. This will resolve the catentryId using entitledItemId and adds the item to the cart.
     *              This function will resolve the SKU based on the entitledItemId passed in and call {@link fastFinderJS.AddItem2ShopCartAjax}.
     * @param {String} entitledItemId A DIV containing a JSON object which holds information about a catalog entry. You can reference CachedProductOnlyDisplay.jsp to see how that div is constructed.
     * @param {int} quantity The quantity of the item to add to the cart.
     * @param {String} isPopup If the value is true, then this implies that the function was called from a quick info pop-up.   
     * @param {Object} customParams - Any additional parameters that needs to be passed during service invocation.
     *
     **/
    Add2ShopCartAjax: function(entitledItemId, quantity, isPopup, customParams, isMoto, field2, productSku) {

        if(quantity < 1){
            MessageHelper.displayErrorMessage("Solo números enteros.");
            return;
        }

        this.moto = isMoto;

        if (isMoto) {

            if (document.readyState !== "complete") return false;

            var motosInShoppingCart = $('#listOfMotosSku').val();

            if (motosInShoppingCart == null)
                    motosInShoppingCart = "";

            if(motosInShoppingCart.includes(productSku)) {
                localStorage.setItem("messageMoto", 'theSameMoto');
                window.location.href = $('.minishopcart_contents').attr('href');
                return;
            }
        } else {

            var atLeastOneMotoInShoppingCart = $('#thereIsAtLeastOneMotoInCart').val();

            if (atLeastOneMotoInShoppingCart == "false" || atLeastOneMotoInShoppingCart == undefined)
                atLeastOneMotoInShoppingCart = false

            if (atLeastOneMotoInShoppingCart) {
                $('#divMotoInCart').show();
                $('#add2CartBtn').removeAttr("href");
                $("#add2CartBtn").addClass("disabled");
                return;
            }
        }

        var errorAdd = "";

        var lineaActivo = $("#lineaApartadoActivo").val();
        var entitledItemJSON;

        if (validateMaxQuantityItemsAddToCart(quantity)) {
            return;
        }
        if (dojo.byId(entitledItemId) != null) {
            //the json object for entitled items are already in the HTML. 
            entitledItemJSON = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
        } else {
            //if dojo.byId(entitledItemId) is null, that means there's no <div> in the HTML that contains the JSON object. 
            //in this case, it must have been set in catalogentryThumbnailDisplay.js when the quick info
            entitledItemJSON = this.getEntitledItemJsonObject();
        }
        productDisplayJS.setEntitledItems(entitledItemJSON);
        var catalogEntryId = productDisplayJS.getCatalogEntryId(entitledItemId);

        if (catalogEntryId != null) {
            var productId = entitledItemId.substring(entitledItemId.indexOf("_") + 1);
            var itemQty = parseInt(dojo.byId("availableQuantityValue_" + productId).value, 10);
            if (lineaActivo == "1" && $('#partNmb').val().indexOf("PM") == 0) {

                if ($('#newStore').length === 0){
                    var store = this.storeId;
                } else {
                    var store = $('#newStore').val();
                }

                var params = [];
                params["storeId"] = store;
                params["catEntryId"] = catalogEntryId;
                params["iCiudad"] = $('#cityID').val();
                params["quantity"] = quantity;
                params["partNmb"] = $('#partNmb').val();
                params["field2"] = field2;
                displayProgressBar();

                dojo.xhrGet({
                    url: 'AddingToOrderView',
                    content: params,
                    handleAs: 'text',
                    services: this,
                    sync: true,
                    load: function(result) {
                        var res = result;
                        res = res.replace("*/", "");
                        res = res.replace("/*", "");
                        var obj = $.parseJSON(res);
                        var flgPage = $("#flgPage").val();
                        var catEntryId = obj.catEntryId;
                        var errorAdd = obj.errorAdd;

                        if (errorAdd == "2") {
                            if (flgPage == "1") {
                                var catEntry = entitledItemId.replace('entitledItem_', '');
                                $("#shopperActionsAvailable_" + catEntry).css("display", "none");
                                $("#shopperActionsUnavailable_" + catEntry).css("display", "block");
                            } else if (flgPage == "2") {
                                $("#shopperActionsAvailable").css("display", "none");
                                $("#shopperActionsUnavailable").css("display", "block");
                            } else if (flgPage == "3")
                                $("#WC_QuickInfo_Link_addtocart").addClass("disabled");
                            else if (flgPage == "4") {
                                $("#" + idDv).empty();
                                $("#dvAdd2Cart_1").prepend($('<p>El c&oacute;digo de art&iacute;culo no se puede adquirir en este momento.</p>').fadeIn('slow'));
                            }
                            $("#errorMsg").val(obj.message);
                            $("#errorAdd").val(errorAdd);
                        } else if (errorAdd == "1") {
                            $("#errorMsg").val(obj.message);
                            $("#errorAdd").val(errorAdd);
                        } else if (errorAdd == "0") {
                            $("#errorMsg").val("");
                            $("#errorAdd").val(errorAdd);
                        }
                    },
                    error: function(e) {
                        console.log("error: " + e);
                    }
                });

                var errorAdd = $("#errorAdd").val();
                if (errorAdd != "0") {
                    $("#errorAdd").val("");
                    cursor_clear();
                    MessageHelper.displayErrorMessage($("#errorMsg").val());
                    return
                }
            } else {
                if (itemQty < quantity) {
                    var tempString = storeNLS["QUANTITY_INPUT_ERROR_NO_INVETORY"];
                    tempString = dojo.string.substitute(tempString, {
                        0: itemQty
                    });
                    MessageHelper.displayErrorMessage(tempString);
                    return;
                }
            }
            if (isTellCelProduct()) { // this function verify if product is telcel phone
                document.getElementById("checkboxDescriptionLada").checked = true;
                if (document.getElementById('checkboxDescriptionLada').checked) {
                    //getStateCoppelByCityLada(document.getElementById('cityNAME').value);
                    this.callAddItem2ShopCartAjax(catalogEntryId, quantity, customParams, productId);
                    document.getElementById("checkboxDescriptionLada").checked = false;
                    MessageHelper.hideMessageAreaPopUp('MessageAreaPopUP');
                } else {
                    showIframeLadaTelcel(productId);
                    //TODO Add script to update ladaNumberId and city/state 
                    if (document.getElementById('stateNAME') != null && document.getElementById('stateNAME') != 'undefined') {
                        document.getElementById('ladaNumberId').innerHTML = document.getElementById('cityID').value;
                        var name = document.getElementById('stateNAME').value.split(",");
                        document.getElementById('cityNameLada').innerHTML = name[1];
                    }

                    var el = document.getElementById("alert_msg_lada");
                    if (document.getElementById('checkboxDescriptionLada').checked) {
                        el.style.display = 'none';
                    } else {
                        el.style.display = 'block';
                    }

                }
            } else {
                this.callAddItem2ShopCartAjax(catalogEntryId, quantity, customParams, productId);
            }
        } else if (isPopup == true) {
            dojo.byId('second_level_category_popup').style.zIndex = '1';
            MessageHelper.formErrorHandleClient('addToCartLinkAjax', storeNLS['ERR_RESOLVING_SKU']);
        } else {
            MessageHelper.displayErrorMessage(storeNLS['ERR_RESOLVING_SKU_CATEGORY_PAGE']);
            productDisplayJS.baseItemAddedToCart = false;
        }

        if (this.moto && errorAdd != "2") {
            window.location.href = $('.minishopcart_contents').attr('href');
        }
    },
    /* Compra con un clic */
    Add2ShopCartAjax2: function(entitledItemId, quantity, isPopup, customParams, url_carrito) {
        var lineaActivo = $("#lineaApartadoActivo").val();
        var entitledItemJSON;

        if (validateMaxQuantityItemsAddToCart(quantity)) {
            return;
        }

        if (dojo.byId(entitledItemId) != null) {
            //the json object for entitled items are already in the HTML. 
            entitledItemJSON = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
        } else {
            //if dojo.byId(entitledItemId) is null, that means there's no <div> in the HTML that contains the JSON object. 
            //in this case, it must have been set in catalogentryThumbnailDisplay.js when the quick info
            entitledItemJSON = this.getEntitledItemJsonObject();
        }

        productDisplayJS.setEntitledItems(entitledItemJSON);
        var catalogEntryId = productDisplayJS.getCatalogEntryId(entitledItemId);

        if (catalogEntryId != null) {
            var productId = entitledItemId.substring(entitledItemId.indexOf("_") + 1);
            var itemQty = parseInt(dojo.byId("availableQuantityValue_" + productId).value, 10);
            if (lineaActivo == "1" && $('#partNmb').val().indexOf("PM") == 0) {
                var params = [];
                params["storeId"] = this.storeId;
                params["catEntryId"] = catalogEntryId;
                params["iCiudad"] = $('#cityID').val();
                params["quantity"] = quantity;
                params["partNmb"] = $('#partNmb').val();
                displayProgressBar();

                dojo.xhrGet({
                    url: 'AddingToOrderView',
                    content: params,
                    handleAs: 'text',
                    services: this,
                    sync: true,
                    load: function(result) {
                        var res = result;
                        res = res.replace("*/", "");
                        res = res.replace("/*", "");
                        var obj = $.parseJSON(res);
                        var flgPage = $("#flgPage").val();
                        var catEntryId = obj.catEntryId;
                        var errorAdd = obj.errorAdd;

                        if (errorAdd == "2") {
                            if (flgPage == "1") {
                                var catEntry = entitledItemId.replace('entitledItem_', '');
                                $("#shopperActionsAvailable_" + catEntry).css("display", "none");
                                $("#shopperActionsUnavailable_" + catEntry).css("display", "block");
                            } else if (flgPage == "2") {
                                $("#shopperActionsAvailable").css("display", "none");
                                $("#shopperActionsUnavailable").css("display", "block");
                            } else if (flgPage == "3")
                                $("#WC_QuickInfo_Link_addtocart").addClass("disabled");
                            else if (flgPage == "4") {
                                $("#" + idDv).empty();
                                $("#dvAdd2Cart_1").prepend($('<p>El c&oacute;digo de art&iacute;culo no se puede adquirir en este momento.</p>').fadeIn('slow'));
                            }
                            $("#errorMsg").val(obj.message);
                            $("#errorAdd").val(errorAdd);
                        } else if (errorAdd == "1") {
                            $("#errorMsg").val(obj.message);
                            $("#errorAdd").val(errorAdd);
                        } else if (errorAdd == "0") {
                            $("#errorMsg").val("");
                            $("#errorAdd").val(errorAdd);
                        }
                    },
                    error: function(e) {
                        console.log("error: " + e);
                    }
                });

                var errorAdd = $("#errorAdd").val();
                if (errorAdd != "0") {
                    $("#errorAdd").val("");
                    cursor_clear();
                    MessageHelper.displayErrorMessage($("#errorMsg").val());
                    return
                }
            } else {
                if (itemQty < quantity) {
                    var tempString = storeNLS["QUANTITY_INPUT_ERROR_NO_INVETORY"];
                    tempString = dojo.string.substitute(tempString, {
                        0: itemQty
                    });
                    MessageHelper.displayErrorMessage(tempString);
                    return;
                }
            }
            if (isTellCelProduct()) { // this function verify if product is telcel phone
                document.getElementById("checkboxDescriptionLada").checked = true;
                if (document.getElementById('checkboxDescriptionLada').checked) {
                    //getStateCoppelByCityLada(document.getElementById('cityNAME').value);
                    this.callAddItem2ShopCartAjax2(catalogEntryId, quantity, customParams, productId, url_carrito);
                    document.getElementById("checkboxDescriptionLada").checked = false;
                    MessageHelper.hideMessageAreaPopUp('MessageAreaPopUP');
                } else {
                    showIframeLadaTelcel(productId);
                    //TODO Add script to update ladaNumberId and city/state 
                    if (document.getElementById('stateNAME') != null && document.getElementById('stateNAME') != 'undefined') {
                        document.getElementById('ladaNumberId').innerHTML = document.getElementById('cityID').value;
                        var name = document.getElementById('stateNAME').value.split(",");
                        document.getElementById('cityNameLada').innerHTML = name[1];
                    }

                    var el = document.getElementById("alert_msg_lada");
                    if (document.getElementById('checkboxDescriptionLada').checked) {
                        el.style.display = 'none';
                    } else {
                        el.style.display = 'block';
                    }

                }
            } else {
                this.callAddItem2ShopCartAjax2(catalogEntryId, quantity, customParams, productId, url_carrito);
            }
        } else if (isPopup == true) {
            dojo.byId('second_level_category_popup').style.zIndex = '1';
            MessageHelper.formErrorHandleClient('addToCartLinkAjax', storeNLS['ERR_RESOLVING_SKU']);
        } else {
            MessageHelper.displayErrorMessage(storeNLS['ERR_RESOLVING_SKU_CATEGORY_PAGE']);
            productDisplayJS.baseItemAddedToCart = false;
        }
    },
    /**
     * sets the entitledItemJsonObject
     * @param (object) jsonObject the entitled item JSON objects
     */
    callAddItem2ShopCartAjax: function(catalogEntryId, quantity, customParams, productId) {
        productDisplayJS.AddItem2ShopCartAjax(catalogEntryId, quantity, customParams, productId);
        productDisplayJS.baseItemAddedToCart = true;
        if (dijit.byId('second_level_category_popup') != null) {
            hidePopup('second_level_category_popup');
        }
    },

    callAddItem2ShopCartAjax2: function(catalogEntryId, quantity, customParams, productId, url_carrito) {
        productDisplayJS.AddItem2ShopCartAjax(catalogEntryId, quantity, customParams, productId);
        productDisplayJS.baseItemAddedToCart = true;
        if (dijit.byId('second_level_category_popup') != null) {
            hidePopup('second_level_category_popup');
        }
        window.location = url_carrito;
    },

    /**
     * sets the entitledItemJsonObject
     * @param (object) jsonObject the entitled item JSON objects
     */


    displayPopUPMessage: function(msg) {

        //this.setMessageAreaStyle('error_icon');
        dojo.byId('showCotentBody').innerHTML = msg; //showCotentBody
        productDisplayJS.showPopUpMessage();
        dojo.byId('clickClosedMessageIcon').focus();
        setTimeout(function() {
            if (dojo.byId('showCotentBody') != null) {
                dojo.byId('showCotentBody').focus();
            }
        }, 1000);
    },

    showEstateCity: function(id) {
        var e = document.getElementById(id);
        if (e.style.display == 'block') {
            e.style.display = 'none';
        } else {
            e.style.display = 'block';
        }
    },

    hideMessageLada: function(cb) {

        if (cb.checked) {
            var el = document.getElementById("alert_msg_lada");
            el.style.display = 'none';
        }
    },

    showPopUpMessage: function() {

        var node = dojo.byId("MessageAreaPopUP");

        var fadeInAnimArgsArray = new Array();
        fadeInAnimArgsArray["node"] = node;
        fadeInAnimArgsArray["duration"] = 200;
        fadeInAnimArgsArray["delay"] = 0;

        //  var fadeOutAnimArgsArray = new Array();
        //  fadeOutAnimArgsArray["node"] = node;
        //  fadeOutAnimArgsArray["duration"] = 500;
        //  fadeOutAnimArgsArray["delay"] = 7000;
        //  fadeOutAnimArgsArray["onEnd"] = function(){
        //      dojo.style(node, "display", "none");
        //      if(dijit.byId("MessageArea_ACCE_Title") != null) {
        //          dijit.byId("MessageArea_ACCE_Title").style.display = "none";
        //      }
        //      dojo.style(node, "opacity", 100);   
        //  };

        // set message area to alpha and then make it display block
        dojo.style(node, "opacity", 0);
        if (dijit.byId("MessageArea_ACCE_Title") != null) {
            dijit.byId("MessageArea_ACCE_Title").style.display = "block";
        }
        dojo.style(node, "display", "block");
        dojo.style("background_shadow", "display", "block");
        // fade in
        var fadeInAnim = dojo.fadeIn(fadeInAnimArgsArray);

        // fade out and when end the display set to none and opacity set to 100
        //  var fadeOutAnim = dojo.fadeOut(fadeOutAnimArgsArray);

        // sequence run fade in and out
        //dojo.fx.chain([fadeInAnim, fadeOutAnim]).play();  
        //run fade in.
        fadeInAnim.play();
    },

    showPopUpMessageSearchInStore: function() {

        var node = dojo.byId("searchInStorePopup");

        var fadeInAnimArgsArray = new Array();
        fadeInAnimArgsArray["node"] = node;
        fadeInAnimArgsArray["duration"] = 200;
        fadeInAnimArgsArray["delay"] = 0;


        dojo.style(node, "opacity", 0);
        if (dijit.byId("MessageArea_ACCE_Title") != null) {
            dijit.byId("MessageArea_ACCE_Title").style.display = "block";
        }
        dojo.style(node, "display", "block");
        dojo.style("background_shadow", "display", "block");

        var fadeInAnim = dojo.fadeIn(fadeInAnimArgsArray);


        fadeInAnim.play();
    },

    look4StoreAjax : function(entitledItemId, partNumber, city, size, isBuyable){   
            var params = [];  
            var entitledItemJSON;
            
            var stateID = null;
            var cityID = null;
            var itemId = null;
            var addCart = null;
            var hiddenStateId = document.getElementById('stateID');
            
            stateID = hiddenStateId.value;
            
            var cmbAttibuteSize = document.getElementById('attibuteSize');
            cmbAttibuteSize.attributes.onchange.value = "productDisplayJS.look4StoreAjax("+"'"+entitledItemId+"'"+", "+"'"+partNumber+"'"+", "+city+", this.value, "+isBuyable+")";
            var cmbCityBusTiendaObj = document.getElementById("cmbCityBusTienda");
                    cmbCityBusTiendaObj.attributes.onchange.value = "productDisplayJS.look4StoreAjax("+"'"+entitledItemId+"'"+", "+"'"+partNumber+"'"+", this.value, "+city+", "+isBuyable+")";
            
            if(city == true){ 
                document.getElementById('addCartInvent').style.display='block';
                window.scrollTo(0,0);
                dojo.style("background_shadow", "background-color", "rgba(0, 0, 0, 0.8)");
                city=null;
        } else {
                if (document.getElementById("addCartInvent")!=null){
                    document.getElementById('addCartInvent').style.display='none';
                }
            }
            if(city == null || city == ""){

                if(size == null || size == "" || size == undefined){
                    
                    var hiddenCityId = document.getElementById('cityID');
                    cityID = hiddenCityId.value;
                    
                    if(cityID == null || cityID == "" || cityID == undefined){
                        
                        var COPPEL_CITY = getCookie("COPPEL_CITY");
                        
                        if(COPPEL_CITY != null && COPPEL_CITY != undefined  && COPPEL_CITY != ""){
                            
                            COPPEL_CITY = decodeURIComponent(COPPEL_CITY);
                            
                            
                            var listCoppelCity = COPPEL_CITY.split(";");
                            
                            for(var i=0; i<listCoppelCity.length; i++) {
                                var c = listCoppelCity[i];
                                if (i == 3){
                                    cityID = c;
                                }else if(i == 2){
                                    stateID = c;
                                }
                            }
                        }else{
                            var netAcuity = document.getElementById('netAcuity');
                            
                            if(netAcuity != null && netAcuity != undefined){
                                netAcuityValue = netAcuity.value;
                                
                                if(netAcuityValue != null && netAcuityValue != ""){
                                    
                                    var listNetAcuityValue = netAcuityValue.split(";");
                                    
                                    for(var i=0; i<listNetAcuityValue.length; i++) {
                                        var currentVal = listNetAcuityValue[i];
                                        if (i == 2){
                                            stateID = currentVal;
                                        }
                                        
                                        if(i == 3){
                                            cityID = currentVal;
                                        }
                                    }
                                }
                            }else{
                                cityID = 84;
                                stateId = 25;
                            }       
                        }
                    }else{
                        console.log("header hidden cityID:" + cityID + " stateID:" + stateID);
                    }   
                }else{
                    itemId = cmbAttibuteSize.value;
                    
                    if(itemId == 0){
                        if(size == null || size == "" || size == undefined){
                            alert("Favor de seleccionar la Talla"); 
                            return;
                        }
                    }
                    
                    var cmbStateBusTienda = document.getElementById('cmbStateBusTienda');
                    var cmbStateBusTiendaValue = cmbStateBusTienda.value;
                    
                    if(cmbStateBusTiendaValue == 0){
                        alert("Favor de seleccionar el Estado");    
                        return;
                    }else{
                        stateID = cmbStateBusTiendaValue;
                    }
                    
                    var cmbCityBusTienda = document.getElementById("cmbCityBusTienda");
                    var cmbCityBusTiendaValue = cmbCityBusTienda.value;
                    
                    if(cmbCityBusTiendaValue == 0){
                        alert("Favor de seleccionar la Ciudad");    
                        return;
                    }else{
                        var arrayCityID = cmbCityBusTiendaValue.split("|");
                        cityID = arrayCityID[0];
                    }
                    
                }
            }else{
                var arrayCityID = city.split("|");
                cityID = arrayCityID[0];
                
                var divSize = document.getElementById("WC_size_div_1");
                
                if(divSize.style.display != "none"){
                    var cmbAttibuteSizeValue = cmbAttibuteSize.value;
                    if(cmbAttibuteSizeValue == 0){
                        alert("Favor de seleccionar la talla"); 
                        return;
                    }else{
                        itemId = cmbAttibuteSizeValue;
                    }
                }
            }
            
            
            if (dojo.byId(entitledItemId)!=null) {
                //the json object for entitled items are already in the HTML. 
                 entitledItemJSON = eval('('+ dojo.byId(entitledItemId).innerHTML +')');
            }
            productDisplayJS.setEntitledItems(entitledItemJSON);
            var catalogEntryId = productDisplayJS.getCatalogEntryId(entitledItemId); 
            
            if (catalogEntryId == null){
                catalogEntryId = this.entitledItems[0].catentry_id;
                
                if(this.entitledItems.length != 1 && cmbAttibuteSize.options.length <= 1){
                    var sizeSelectedValue = "";
                    removeOptions(cmbAttibuteSize);
                    
                    var divSize = document.getElementById("WC_size_div_1");
                    divSize.style.display = "block";
                    
                    for(x in this.entitledItems){
                        var catentry_id = this.entitledItems[x].catentry_id;
                        var Attributes = this.entitledItems[x].Attributes;
                        
                        for(attri in Attributes){
                            var size = attri;
                            selectedCmbValue = "0";
                            var newOption = document.createElement("option");
                            newOption.value    = catentry_id;
                            
                            var arraySize = size.split("_");
                            size = arraySize[1];
                            
                            newOption.text     = size;
                            
                            //console.log("newOption.value:" + newOption.value + " newOption.text:" + newOption.text);
                            
                            if(newOption.text == value){
                                sizeSelectedValue = newOption.value;
                                console.log("value:" + value);
                            }
                            cmbAttibuteSize.add(newOption);
                        }
                    }
                    cmbAttibuteSize.value  = sizeSelectedValue;
                    itemId = sizeSelectedValue;
                    //console.log("in load itemId:" + itemId);
                    
                    document.getElementById('attibuteSize').value=0;
                }else{
                    itemId = cmbAttibuteSize.value;
                }
            }
            
            var isResolveSku = false;
            if(catalogEntryId != null && isBuyable == false){
                isResolveSku = true;
            }else if(catalogEntryId == null && isBuyable == false){
                isResolveSku = true;
            }else if(catalogEntryId != null && isBuyable == true){
                isResolveSku = true;
            }
            
            if(isResolveSku){
                var productId = entitledItemId.substring(entitledItemId.indexOf("_")+1);
                var priceJsonOject = productDisplayJS.itemPriceJsonOject[catalogEntryId]; 
                var selectedAttrList = [];
                for(attr in productDisplayJS.selectedAttributesList['entitledItem_'+productId]){
                    value = productDisplayJS.selectedAttributesList['entitledItem_'+productId][attr];
                selectedAttrList.push({
                    "id": attr,
                    "value": value
                });
                    if(size == undefined && city == undefined){
                        if(id= "Talla"){
                            if(this.entitledItems.length != 1){
                                var sizeSelectedValue = "";
                                removeOptions(cmbAttibuteSize);
                                
                                var divSize = document.getElementById("WC_size_div_1");
                                divSize.style.display = "block";
                                
                                for(x in this.entitledItems){
                                    var catentry_id = this.entitledItems[x].catentry_id;
                                    var Attributes = this.entitledItems[x].Attributes;
                                    
                                    for(attri in Attributes){
                                        var size = attri;
                                        selectedCmbValue = "0";
                                        var newOption = document.createElement("option");
                                        newOption.value    = catentry_id;
                                        
                                        var arraySize = size.split("_");
                                        size = arraySize[1];
                                        
                                        newOption.text     = size;
                                        
                                        if(newOption.text == value){
                                            sizeSelectedValue = newOption.value;
                                            console.log("value:" + value);
                                        }
                                        cmbAttibuteSize.add(newOption);
                                    }
                                }
                                cmbAttibuteSize.value  = sizeSelectedValue;
                                itemId = sizeSelectedValue;
                            }
                        }
                    }
                }
                
                if(itemId == null || itemId == ""){
                    itemId = productDisplayJS.getCatalogEntryId(entitledItemId);
                }
                
                if(itemId == null || itemId == "" || itemId == undefined || itemId=="0"){
                    itemId = catalogEntryId;
                    }
                
                stateID = stateID.trim();
                
                var obJson = {
                        operation   :   "lookforDetailStore",
                        storeId     :   this.storeId,   
                        productId   :   productId, 
                        attrList    :   selectedAttrList,
                        cityID      :   cityID,
                        stateID     :   stateID,
                        partNumber  :   partNumber,
						itemId		: 	itemId
                };
                params.obJson       =   JSON.stringify(obJson);
                wc.service.invoke("look4Store",params);
                
                if(city == null || city == "" || cityID == undefined){
                    productDisplayJS.showPopUpMessageSearchInStore();
                    var productImg    =  document.getElementById('ProductInfoImage_'+productId).value;
                    var productName   =  document.getElementById('ProductInfoName_'+productId).value;
                    
                    try {
                        var productPartNumber    =  document.getElementById('ProductInfoPartNumber_'+productId).value;
                } catch (err) {
                        var productPartNumber    =  "";
                    }
                    
                    try {
                        var productLongDescription   =  document.getElementById('ProductInfoLongDescription_'+productId).value;
                } catch (err) {
                        var productLongDescription   =  "";
                    }
                    
                    document.getElementById('quickInfoMainImage').innerHTML = '<img src="'+productImg+'" alt="'+productName+'" title="'+productName+'">';
                    document.getElementById('main_header_name').innerHTML = productName;
                    if(productPartNumber != "")
                    document.getElementById('SearchInStorePopup_Sku').innerHTML = 'SKU:'+productPartNumber;
                    if(productLongDescription != "")
                    document.getElementById('SearchInStorePopup_LongDescription').innerHTML = productLongDescription;
                    
                    
                    document.getElementById("cmbStateBusTienda").value = stateID;
                    
                    var cmbCityBusTienda = document.getElementById("cmbCityBusTienda");
                    
                    removeOptions(cmbCityBusTienda);
                    
                    productDisplayJS.cityIdBusqueda = cityID;
                    
                setTimeout(function() {
                    getCityCoppelByStateBusTienda(stateID)
                    }, 2000);
                }
            } else{
                MessageHelper.displayErrorMessage(storeNLS['ERR_RESOLVING_SKU_CATEGORY_PAGE']);
                productDisplayJS.baseItemAddedToCart=false;
            }
        
    },

    validateForm: function(form) {
        if (form.value == null || form.value == "") {
            //MessageHelper.formErrorHandleClient(form.id, MessageHelper.messages["ERROR_CustomerNumberCoppelEmpty"]);
            alert('El campo de numero de cliente coppel no puede estar vac�o.');
            return false;
        }
        if (!MessageHelper.IsValidCustomerNumberCoppel(form.value)) {
            //MessageHelper.formErrorHandleClient(form.id, MessageHelper.messages["ERROR_CustomerNumberCoppelSize"]);
            alert('El n�mero de cliente Coppel debe tener al menos 6 digitos.');
            return false;
        }
        if (!MessageHelper.IsValidPhone(form.value)) {
            //MessageHelper.formErrorHandleClient(form.id, MessageHelper.messages["ERROR_CustomerNumberCoppel"]);
            alert('El n�mero de cliente Coppel no esta en un formato valido');
            return false;
        }
        return true;
    },

    productCardAjax: function(sku, familyId, departmentId, areaId, precioProducto, pagoInicial) {
        if (this.validateForm(customerNumberCoppel)) {
            var params = [];
            var numberCoppel = dojo.byId("customerNumberCoppel").value;
            params["sku"] = sku;
            params["customerNumberCoppel"] = numberCoppel;
            params["precioProducto"] = precioProducto;
            params["areaId"] = areaId;
            params["departmentId"] = departmentId;
            params["familyId"] = familyId;
            params["pagoInicial"] = pagoInicial;
            wc.service.invoke("productCard", params);
        }
    },

    downPaymentAjax: function(orderId) {
        //if (this.validateForm(coppel_cliente_number)) {
        var params = [];
        var numeroClienteCoppel = dojo.byId("coppel_cliente_number").value;
        params["numeroClienteCoppel"] = numeroClienteCoppel;
        params["orderId"] = orderId;

        wc.service.invoke("downPayment", params);
        //}
    },

    downPayment: function() {
        var htmlTable = [];
        htmlTable.push("<style>.tabla th {padding: 5px;font-size: 14px;background-color: #83aec0;background-image: linear-gradient(#FBBB0B, #EE9505);background-repeat: repeat-x;color: #FFFFFF;border-right-width: 1px;border-bottom-width: 1px;border-right-style: solid;border-bottom-style: solid;border-right-color: #558FA6;border-bottom-color: #558FA6;font-family: Ã¢â‚¬Å“Trebuchet MSÃ¢â‚¬ï¿½, Arial;text-transform: uppercase;}");
        htmlTable.push(" .tabla .modo1 { font-size: 12px; font-weight:bold;  background-color: #e2ebef;  background-image: linear-gradient(#FBBB0B, #EE9505);  background-repeat: repeat-x;  color: #34484E; font-family: Ã¢â‚¬Å“Trebuchet MSÃ¢â‚¬ï¿½, Arial; }");
        htmlTable.push(" .tabla .modo2 { font-size: 12px; font-weight:bold;  background-repeat: repeat-x;  color: #34484E; font-family: Ã¢â‚¬Å“Trebuchet MSÃ¢â‚¬ï¿½, Arial; }");
        htmlTable.push(" .tabla .modo1 td {  padding: 5px;    border-right-width: 1px;  border-bottom-width: 1px;  border-right-style: solid;     border-bottom-style: solid;  border-right-color: #A4C4D0;  border-bottom-color: #A4C4D0;    text-align:right;  } ");
        htmlTable.push(" .tabla .modo2 td {  padding: 5px;    border-right-width: 1px;  border-bottom-width: 1px;  border-right-style: solid;     border-bottom-style: solid;  border-right-color: #A4C4D0;  border-bottom-color: #A4C4D0;    text-align:right;  } ");
        htmlTable.push(" </style>");
        htmlTable.push("<tr class='modo2'>");
        htmlTable.push("Numero de cliente Coppel: ");
        htmlTable.push("<br>");
        htmlTable.push("<input id='customerNumberCoppel' name='customerNumberCoppel' type='text' maxlength='40' size='35' aria-required='true'  class='form_input'/>    ");
        htmlTable.push("</tr>");

        document.getElementById("show_customerNumberCoppel").innerHTML = htmlTable.join("");
        dijit.byId("customerNumberCoppelPupup").show();
    },



    AddItem2ShopCartAjax: function(catEntryIdentifier, quantity, customParams, productId) {
        var params = [];
        params.storeId = this.storeId;
        params.catalogId = this.catalogId;
        params.langId = this.langId;
        params.orderId = ".";
        params.calculationUsage = "-1,-2,-5,-6,-7";
        params.inventoryValidation = "true";
        params.calculateOrder = "0";
        var ajaxShopCartService = "AddOrderItem";

        shoppingActionsJS.productAddedList = new Object();
        if (dojo.isArray(catEntryIdentifier) && dojo.isArray(quantity)) {
            for (var i = 0; i < catEntryIdentifier.length; i++) {
                if (!isPositiveInteger(quantity[i])) {
                    MessageHelper.displayErrorMessage(storeNLS['QUANTITY_INPUT_ERROR']);
                    return;
                }
                params["catEntryId_" + (i + 1)] = catEntryIdentifier[i];
                params["quantity_" + (i + 1)] = quantity[i];
            }
        } else {
            if (!isPositiveInteger(quantity)) {
                MessageHelper.displayErrorMessage(storeNLS['QUANTITY_INPUT_ERROR']);
                return;
            }
            params.catEntryId = catEntryIdentifier;
            params.quantity = quantity;

            var selectedAttrList = new Object();
            for (attr in productDisplayJS.selectedAttributesList['entitledItem_' + productId]) {
                selectedAttrList[attr] = productDisplayJS.selectedAttributesList['entitledItem_' + productId][attr];
            }

            if (productId == undefined) {
                shoppingActionsJS.saveAddedProductInfo(quantity, catEntryIdentifier, catEntryIdentifier, selectedAttrList);
            } else {
                shoppingActionsJS.saveAddedProductInfo(quantity, productId, catEntryIdentifier, selectedAttrList);
            }
        }

        //Pass any other customParams set by other add on features
        if (customParams != null && customParams != 'undefined') {
            for (i in customParams) {
                params[i] = customParams[i];
            }
            if (customParams['catalogEntryType'] == 'dynamicKit') {
                ajaxShopCartService = "AddPreConfigurationToCart";
            }
        }

        var contractIdElements = document.getElementsByName('contractSelectForm_contractId');
        if (contractIdElements != null && contractIdElements != "undefined") {
            for (i = 0; i < contractIdElements.length; i++) {
                if (contractIdElements[i].checked) {
                    params.contractId = contractIdElements[i].value;
                    break;
                }
            }
        }

        //For Handling multiple clicks
        if (!submitRequest()) {
            return;
        }
        cursor_wait();

        wc.service.invoke(ajaxShopCartService, params);
        productDisplayJS.baseItemAddedToCart = true;

        if (document.getElementById("headerShopCartLink") && document.getElementById("headerShopCartLink").style.display != "none") {
            document.getElementById("headerShopCart").focus();
        } else {
            if (document.getElementById("headerShopCart1")) {
                document.getElementById("headerShopCart1").focus();
            }
        }
    },

    /* SwatchCode start */

    /**
     * Sets the ID of the image to use for swatch.
     * @param {String} skuImageId The ID of the full image element.
     **/
    setSKUImageId: function(skuImageId) {
        productDisplayJS.skuImageId = skuImageId;
    },

    /**
     * getImageForSKU Returns the full image of the catalog entry with the selected attributes as specified in the {@link fastFinderJS.selectedAttributes} value.
     *                  This method uses resolveImageForSKU to find the SKU image with the selected attributes values.
     *
     * @param {String} imageField, the field name from which the image should be picked
     * @return {String} path to the SKU image.
     * 
     *
     **/
    getImageForSKU: function(entitledItemId, imageField) {
        var attributeArray = [];
        var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
        for (attribute in selectedAttributes) {
            attributeArray.push(attribute + "_" + selectedAttributes[attribute]);
        }
        return productDisplayJS.resolveImageForSKU(attributeArray, imageField);
    },

    /**
     * resolveImageForSKU Resolves image of a SKU using an array of defining attributes.
     *
     * @param {String[]} attributeArray An array of defining attributes upon which to resolve a SKU.
     * @param {String} imageField, the field name from which the image should be picked
     *
     * @return {String} imagePath The location of SKU image.
     *
     **/
    resolveImageForSKU: function(attributeArray, imageField) {
        console.debug("Resolving SKU >> " + attributeArray + ">>" + this.entitledItems);
        var imagePath = "";
        var attributeArrayCount = attributeArray.length;

        for (x in this.entitledItems) {
            if (null != imageField) {
                var imagePath = this.entitledItems[x][imageField];
            } else {
                var imagePath = this.entitledItems[x].ItemImage467;
            }

            var Attributes = this.entitledItems[x].Attributes;
            var attributeCount = 0;
            for (index in Attributes) {
                attributeCount++;
            }

            // Handle special case where a catalog entry has one sku with no attributes
            if (attributeArrayCount == 0 && attributeCount == 0) {
                return imagePath;
            }
            if (attributeCount != 0 && attributeArrayCount >= attributeCount) {
                var matchedAttributeCount = 0;

                for (attributeName in attributeArray) {
                    var attributeValue = attributeArray[attributeName];
                    if (attributeValue in Attributes) {
                        matchedAttributeCount++;
                    }
                }

                if (attributeCount == matchedAttributeCount) {
                    console.debug("ItemImage:" + imagePath + " for Attribute: " + attributeArray);
                    var imageArray = [];
                    imageArray.push(imagePath);
                    imageArray.push(this.entitledItems[x].ItemThumbnailImage);
                    if (this.entitledItems[x].ItemAngleThumbnail != null && this.entitledItems[x].ItemAngleThumbnail != undefined) {
                        imageArray.push(this.entitledItems[x].ItemAngleThumbnail);
                        imageArray.push(this.entitledItems[x].ItemAngleFullImage);
                        imageArray.push(this.entitledItems[x].ItemAngleThumbnailShortDesc);
                    }
                    return imageArray;
                }
            }
        }
        return null;
    },


    /**
     * changeViewImages Updates the angle views of the SKU.
     *
     * @param {String[]} itemAngleThumbnail An array of SKU view thumbnails.
     * @param {String[]} itemAngleFullImage An array of SKU view full images.
     * @param {String[]} itemAngleThumbnailShortDesc An array of short description for the SKU view thumbnails.
     **/
    changeViewImages: function(itemAngleThumbnail, itemAngleFullImage, itemAngleThumbnailShortDesc) {
    	var textoAlternativoList=undefined;
        var mainImage=$('a#Zoomer img.product_main_image');
        var imageCount = 0;
        var keys = Object.keys(itemAngleFullImage);
        var cont = 0;
        
        if(undefined!=$("div[id^='textoAlternativoList_']") && jQuery.trim($("div[id^='textoAlternativoList_']").html()).length > 0){
          try {
            textoAlternativoList=JSON.parse($("div[id^='textoAlternativoList_']").html());
          } catch (e) {
            textoAlternativoList=undefined;
          }

          if(undefined!=textoAlternativoList){
            if(undefined!=mainImage && mainImage.length>0){
              mainImage[0].setAttribute("alt",textoAlternativoList[0]['image_1']);
              mainImage[0].setAttribute("title",textoAlternativoList[0]['image_1']);
            }
          }
        }else if(undefined!=mainImage && mainImage.length>0){
          mainImage[0].setAttribute("alt", "Foto 1|"+itemAngleThumbnailShortDesc.replace(/&amp;/g, "&"));
          mainImage[0].setAttribute("title", "Foto 1|"+itemAngleThumbnailShortDesc.replace(/&amp;/g, "&"));
        }

        if( typeof window.swiperProductFullImage != 'undefined' && window.swiperProductFullImage.swipeDirection != undefined ){
            window.swiperProductFullImage.destroy();
            $('#product-image-swiper-mobile .swiper-wrapper').html('');
        }

        for (x in itemAngleThumbnail) {
            var key = keys[cont];
            var prodAngleCount = imageCount;
            imageCount++;
            var thumbnailWidgets = dojo.query("ul[id^='ProductAngleImagesAreaList']");
            if (thumbnailWidgets != null) {
                for (var i = 0; i < thumbnailWidgets.length; i++) {
                    if (null != thumbnailWidgets[i]) {
                        var angleThumbnail = document.createElement("li");
                        var angleThumbnailLink = document.createElement("a");
                        var angleThumbnailImg = productDisplayJS.loadThumbnails(itemAngleThumbnail[x], angleThumbnail);
                        angleThumbnail.id = "productAngleLi" + prodAngleCount;
                        angleThumbnailLink.id = "WC_CachedProductOnlyDisplay_links_1_" + imageCount;
                        // MagicZoom at_modify                      
                        angleThumbnailLink.rel = "zoom-id: Zoomer;";
                        angleThumbnailLink.href = itemAngleFullImage[key];
                        angleThumbnailLink.rev = itemAngleFullImage[key];
                        // MagicZoom                            
                        angleThumbnail.id = "productAngleLi" + prodAngleCount;
                        /**
                            if(itemAngleThumbnailShortDesc != 'undefined' && itemAngleThumbnailShortDesc != null){
                            angleThumbnailLink.title = itemAngleThumbnailShortDesc[x];
                        }
                        **/
                        angleThumbnailImg.id = "WC_CachedProductOnlyDisplay_images_1_" + imageCount;
                        //if(itemAngleThumbnailShortDesc != 'undefined' && itemAngleThumbnailShortDesc != null){
                        if(undefined!=textoAlternativoList && undefined!=textoAlternativoList[0]['image_'+imageCount]){
                          angleThumbnailImg.alt=textoAlternativoList[0]['image_'+imageCount].replace(/&amp;/g, "&");
                          angleThumbnailImg.title=textoAlternativoList[0]['image_'+imageCount].replace(/&amp;/g, "&");
                        }else{
                          angleThumbnailImg.alt="Foto "+imageCount+"|"+itemAngleThumbnailShortDesc.replace(/&amp;/g, "&");
                          angleThumbnailImg.title="Foto "+imageCount+"|"+itemAngleThumbnailShortDesc.replace(/&amp;/g, "&");
                        }
                        if (prodAngleCount == 0) {
                            dojo.empty(thumbnailWidgets[i]);
                        }
                        angleThumbnailLink.appendChild(angleThumbnailImg);
                        angleThumbnail.appendChild(angleThumbnailLink);
                        thumbnailWidgets[i].appendChild(angleThumbnail);

                        angleThumbnailLink.setAttribute('data-swiper-index',cont);
                        angleThumbnailLink.onclick = function(e){
                            if( this.getAttribute('data-swiper-index') ){
                                var swiperIndexElement = $('#product-image-swiper-mobile').find('.swiper-slide[data-swiper-index="'+ this.getAttribute('data-swiper-index') +'"]');
                                if( swiperIndexElement.length > 0 ){
                                    var clickSlide = parseInt(swiperIndexElement[0].getAttribute('data-swiper-slide-index')) + 1;
                                    window.swiperProductFullImage.slideTo(clickSlide);
                                }
                            }
                        }
                        
                        /* BEGIN SWIPER DE IMAGENES EN MOBILE */
                        var $swiperContent = $('#product-image-swiper-mobile');
                        if( $swiperContent.length > 0 ){
                            $('a#Zoomer-' + cont).remove();
                            var newZoomLink = document.createElement('A');
                            newZoomLink.className = "MagicZoomPlus";
                            newZoomLink.rel = $('#Zoomer').attr('rel');
                            newZoomLink.id = 'Zoomer-' + cont;
                            newZoomLink.href = itemAngleFullImage[key];
                            var image = new Image;
                            image.onerror = function() {
                                if( this != "" && this != null ){
                                    try{
                                        var slideIndex = this.parentElement.parentElement.hasAttribute('data-swiper-slide-index') ? this.parentElement.parentElement.getAttribute('data-swiper-slide-index') : null;
                                        if( slideIndex != null ){
                                            window.swiperProductFullImage.removeSlide(slideIndex);
                                            window.swiperProductFullImage.slideTo(1);
                                            $('#ProductAngleImagesAreaList a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index]').parent().removeClass('active');
                                            $('#ProductAngleImagesAreaList a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index="0"]').parent().addClass('active');
                                        }else{
                                            this.parentElement.parentElement.remove();
                                        }
                                    }catch(e){
                                        console.log(e);
                                    }
                                }
                            };
                            image.src = itemAngleFullImage[key];
                            var swiperSlide = document.createElement('DIV');
                            swiperSlide.setAttribute('data-swiper-index',cont);
                            swiperSlide.className = "swiper-slide";
                            
                            newZoomLink.appendChild(image);
                            swiperSlide.appendChild(newZoomLink);
    
                            $swiperContent.find('.swiper-wrapper').append(swiperSlide);
                        }
                        /* END SWIPER DE IMAGENES EN MOBILE */
                    }
                }
                /*
                                IBM - WCC Original          
                            var thumbnailWidgets = dojo.query("ul[id^='ProductAngleImagesAreaList']");
                            if(thumbnailWidgets != null){
                                for(var i = 0; i<thumbnailWidgets.length; i++){         
                                    if(null != thumbnailWidgets[i]){
                                        var angleThumbnail = document.createElement("li");                      
                                        var angleThumbnailLink = document.createElement("a");
                                        var angleThumbnailImg = document.createElement("img");
                                        
                                        angleThumbnail.id = "productAngleLi" + prodAngleCount;
                                        
                                        angleThumbnailLink.href = "JavaScript:changeThumbNail('productAngleLi" + prodAngleCount + "','" + itemAngleFullImage[x] + "');";
                                        angleThumbnailLink.id = "WC_CachedProductOnlyDisplay_links_1_" + imageCount ;
                                        if(itemAngleThumbnailShortDesc != 'undefined' && itemAngleThumbnailShortDesc != null){
                                            angleThumbnailLink.title = itemAngleThumbnailShortDesc[x];
                                        }
                                        
                                        angleThumbnailImg.src = itemAngleThumbnail[x];
                                        angleThumbnailImg.id = "WC_CachedProductOnlyDisplay_images_1_" + imageCount;
                                        if(itemAngleThumbnailShortDesc != 'undefined' && itemAngleThumbnailShortDesc != null){
                                            angleThumbnailImg.alt = itemAngleThumbnailShortDesc[x];
                                        }
                                        
                                        if(prodAngleCount == 0){
                                            dojo.empty(thumbnailWidgets[i]);                        
                                        }                       
                                        
                                        angleThumbnailLink.appendChild(angleThumbnailImg);
                                        angleThumbnail.appendChild(angleThumbnailLink);
                                        thumbnailWidgets[i].appendChild(angleThumbnail);
                                    }
                                }           */
            }
            cont++;
        }
        
        /* BEGIN SWIPER DE IMAGENES EN MOBILE */
        $('#widget_product_image_viewer').addClass('swiper_loaded');
        window.swiperProductFullImage_Timeout = setInterval(function(){
            try {
                if( $('#ProductAngleImagesAreaList a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index]').length > 0 ){
                    if( typeof window.swiperProductFullImage != 'undefined' && window.swiperProductFullImage.swipeDirection != undefined ){
                        window.swiperProductFullImage.destroy();
                        $('#product-image-swiper-mobile .swiper-wrapper').html('');
                    }
                    window.swiperProductFullImage = new Swiper('#product-image-swiper', {
                        // Optional parameters
                        direction: 'horizontal',
                        loop: true,
                        lazy: false,
                        // If we need pagination
                        pagination: false,
                        slidesPerView: 1,
                        breakpoints: {
                            768:{slidesPerView:1}
                        },
                    });

                    window.swiperProductFullImage.on('onSlideChangeEnd',function(){
                        var currentSlide = window.swiperProductFullImage.activeIndex;
                        var currentSlideIndex = window.swiperProductFullImage.slides[currentSlide].getAttribute('data-swiper-index');
                        $('#ProductAngleImagesAreaList').find('a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index]').parent().removeClass('active');
                        $('#ProductAngleImagesAreaList').find('a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index="'+currentSlideIndex+'"]').parent().addClass('active');
                    });
                    $('#widget_product_image_viewer').addClass('swiper_loaded');
                    $('#ProductAngleImagesAreaList a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index]').parent().removeClass('active');
                    $('#ProductAngleImagesAreaList a[id^="WC_CachedProductOnlyDisplay_links"][data-swiper-index="0"]').parent().addClass('active');
                    clearInterval(window.swiperProductFullImage_Timeout);
                }
            } catch (e) {

            }
        },500);
        /* END SWIPER DE IMAGENES EN MOBILE */
        
        /**
        var displayImageArea = "";
        if(imageCount > 0){
            displayImageArea = 'block';
        } else {
            displayImageArea = 'none';
        }
        var angleImageArea = dojo.query("div[id^='ProductAngleImagesArea']");
        if(angleImageArea != null){
            for(var i = 0; i<angleImageArea.length; i++){           
                if(null != angleImageArea[i]){
                    angleImageArea[i].style.display = displayImageArea;
                }
            }
        }**/
    },

    /**
     * Load Images
     */
    loadThumbnails: function(src, container) {
        var image = new Image;
        image.onerror = function() {
            image.style.display = 'none';
            //container.style.display ='none';
            container.style.cssText += ';display:none !important;';
        };
        image.src = src;
        return image;

    },

    /**
     * Updates the swatches selections on list view.
     * Sets up the swatches array and sku images, then selects a default swatch value.
     **/
    updateSwatchListView: function() {
        var swatchArray = dojo.query("a[id^='swatch_array_']");
        for (var i = 0; i < swatchArray.length; i++) {
            var swatchArrayElement = swatchArray[i];
            eval(dojo.attr(swatchArrayElement, "href"));
        }

        var swatchSkuImage = dojo.query("a[id^='swatch_setSkuImage_']");
        for (var i = 0; i < swatchSkuImage.length; i++) {
            var swatchSkuImageElement = swatchSkuImage[i];
            eval(dojo.attr(swatchSkuImageElement, "href"));
        }

        var swatchDefault = dojo.query("a[id^='swatch_selectDefault_']");
        for (var i = 0; i < swatchDefault.length; i++) {
            var swatchDefaultElement = swatchDefault[i];
            eval(dojo.attr(swatchDefaultElement, "href"));
        }
    },

    /**
     * Handles the case when a swatch is selected. Set the border of the selected swatch.
     * @param {String} selectedAttributeName The name of the selected swatch attribute.
     * @param {String} selectedAttributeValue The value of the selected swatch attribute.
     * @param {String} entitledItemId The ID of the SKU
     * @param {String} doNotDisable The name of the swatch attribute that should never be disabled.
     * @param {String} imageField, the field name from which the image should be picked
     * @return boolean Whether the swatch is available for selection
     **/
    selectSwatch: function(selectedAttributeName, selectedAttributeValue, entitledItemId, doNotDisable, skuImageId, imageField) {
        if (dojo.hasClass("swatch_" + entitledItemId + "_" + selectedAttributeValue, "color_swatch_disabled")) {
            return;
        }
        var selectedAttributes = this.selectedAttributesList[entitledItemId];
        for (attribute in selectedAttributes) {
            if (attribute == selectedAttributeName) {
                // case when the selected swatch is already selected with a value, if the value is different than
                // what's being selected, reset other swatches and deselect the previous value and update selection
                if (selectedAttributes[attribute] != selectedAttributeValue) {
                    // deselect previous value and update swatch selection
                    var swatchElement = dojo.byId("swatch_" + entitledItemId + "_" + selectedAttributes[attribute]);
                    swatchElement.className = "color_swatch";
                    swatchElement.src = swatchElement.src.replace("_disabled.png", "_enabled.png");

                    //change the title text of the swatch link
                    dojo.byId("swatch_link_" + entitledItemId + "_" + selectedAttributes[attribute]).title = swatchElement.alt;
                }
            }
            if (document.getElementById("swatch_link_" + entitledItemId + "_" + selectedAttributes[attribute]) != null) {
                document.getElementById("swatch_link_" + entitledItemId + "_" + selectedAttributes[attribute]).setAttribute("aria-checked", "false");
            }
        }
        this.makeSwatchSelection(selectedAttributeName, selectedAttributeValue, entitledItemId, doNotDisable, skuImageId, imageField);
    },

    /**
     * Make swatch selection - add to selectedAttribute, select image, and update other swatches and SKU image based on current selection.
     * @param {String} swatchAttrName The name of the selected swatch attribute.
     * @param {String} swatchAttrValue The value of the selected swatch attribute.
     * @param {String} entitledItemId The ID of the SKU.
     * @param {String} doNotDisable The name of the swatch attribute that should never be disabled. 
     * @param {String} skuImageId This is optional. The element id of the product image - image element id is different in product page and category list view. Product page need not pass it because it is set separately
     * @param {String} imageField This is optional. The json field from which image should be picked. Pass value if a different size image need to be picked
     **/
    makeSwatchSelection: function(swatchAttrName, swatchAttrValue, entitledItemId, doNotDisable, skuImageId, imageField) {
        productDisplayJS.setSelectedAttribute(swatchAttrName, swatchAttrValue, entitledItemId, skuImageId, imageField);
        document.getElementById("swatch_" + entitledItemId + "_" + swatchAttrValue).className = "color_swatch_selected";
        document.getElementById("swatch_link_" + entitledItemId + "_" + swatchAttrValue).setAttribute("aria-checked", "true");
        document.getElementById("swatch_selection_label_" + entitledItemId + "_" + swatchAttrName).className = "header color_swatch_label";
        if (document.getElementById("swatch_selection_" + entitledItemId + "_" + swatchAttrName).style.display == "none") {
            document.getElementById("swatch_selection_" + entitledItemId + "_" + swatchAttrName).style.display = "inline";
        }
        document.getElementById("swatch_selection_" + entitledItemId + "_" + swatchAttrName).innerHTML = swatchAttrValue;
        productDisplayJS.updateSwatchImages(swatchAttrName, entitledItemId, doNotDisable, imageField);
    },

    /**
     * Constructs record and add to this.allSwatchesArray.
     * @param {String} swatchName The name of the swatch attribute.
     * @param {String} swatchValue The value of the swatch attribute.   
     * @param {String} swatchImg1 The path to the swatch image.
     **/
    addToAllSwatchsArray: function(swatchName, swatchValue, swatchImg1, entitledItemId) {
        var swatchList = this.allSwatchesArrayList[entitledItemId];
        if (swatchList == null) {
            swatchList = new Array();;
        }
        if (!this.existInAllSwatchsArray(swatchName, swatchValue, swatchList)) {
            var swatchRecord = new Array();
            swatchRecord[0] = swatchName;
            swatchRecord[1] = swatchValue;
            swatchRecord[2] = swatchImg1;
            swatchRecord[4] = document.getElementById("swatch_link_" + entitledItemId + "_" + swatchValue).onclick;
            swatchList.push(swatchRecord);
            this.allSwatchesArrayList[entitledItemId] = swatchList;
        }
    },

    /**
     * Checks if a swatch is already exist in this.allSwatchesArray.
     * @param {String} swatchName The name of the swatch attribute.
     * @param {String} swatchValue The value of the swatch attribute.       
     * @return boolean Value indicating whether or not the specified swatch name and value exists in the allSwatchesArray.
     */
    existInAllSwatchsArray: function(swatchName, swatchValue, swatchList) {
        for (var i = 0; i < swatchList.length; i++) {
            var attrName = swatchList[i][0];
            var attrValue = swatchList[i][1];
            if (attrName == swatchName && attrValue == swatchValue) {
                return true;
            }
        }
        return false;
    },

    /**
     * Check the entitledItems array and pre-select the first entitled SKU as the default swatch selection.
     * @param {String} entitledItemId The ID of the SKU.
     * @param {String} doNotDisable The name of the swatch attribute that should never be disabled.     
     **/
    makeDefaultSwatchSelection: function(entitledItemId, doNotDisable) {
        if (this.entitledItems.length == 0) {
            if (dojo.byId(entitledItemId) != null) {
                entitledItemJSON = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
            }
            productDisplayJS.setEntitledItems(entitledItemJSON);
        }

        // need to make selection for every single swatch
        for (x in this.entitledItems) {
            var Attributes = this.entitledItems[x].Attributes;
            for (y in Attributes) {
                var index = y.indexOf("_");
                var swatchName = y.substring(0, index);
                var swatchValue = y.substring(index + 1);
                this.makeSwatchSelection(swatchName, swatchValue, entitledItemId, doNotDisable, imageField);
            }
            break;
        }
    },

    /**
     * Update swatch images - this is called after selection of a swatch is made, and this function checks for
     * entitlement and disable swatches that are not available
     * @param {String} selectedAttrName The attribute that is selected
     * @param {String} entitledItemId The ID of the SKU.
     * @param {String} doNotDisable The name of the swatch attribute that should never be disabled. 
     **/
    updateSwatchImages: function(selectedAttrName, entitledItemId, doNotDisable, imageField) {
        var swatchToUpdate = new Array();
        var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
        var selectedAttrValue = selectedAttributes[selectedAttrName];
        var swatchList = productDisplayJS.allSwatchesArrayList[entitledItemId];

        // finds out which swatch needs to be updated, add to swatchToUpdate array
        for (var i = 0; i < swatchList.length; i++) {
            var attrName = swatchList[i][0];
            var attrValue = swatchList[i][1];
            var attrImg1 = swatchList[i][2];
            var attrImg2 = swatchList[i][3];
            var attrOnclick = swatchList[i][4];

            if (attrName != doNotDisable && attrName != selectedAttrName) {
                var swatchRecord = new Array();
                swatchRecord[0] = attrName;
                swatchRecord[1] = attrValue;
                swatchRecord[2] = attrImg1;
                swatchRecord[4] = attrOnclick;
                swatchRecord[5] = false;
                swatchToUpdate.push(swatchRecord);
            }
        }

        // finds out which swatch is entitled, if it is, image should be set to enabled
        // go through entitledItems array and find out swatches that are entitled 
        for (x in productDisplayJS.entitledItems) {
            var Attributes = productDisplayJS.entitledItems[x].Attributes;

            for (y in Attributes) {
                var index = y.indexOf("_");
                var entitledSwatchName = y.substring(0, index);
                var entitledSwatchValue = y.substring(index + 1);

                //the current entitled item has the selected attribute value
                if (entitledSwatchName == selectedAttrName && entitledSwatchValue == selectedAttrValue) {
                    //go through the other attributes that are available to the selected attribute
                    //exclude the one that is selected
                    for (z in Attributes) {
                        var index2 = z.indexOf("_");
                        var entitledSwatchName2 = z.substring(0, index2);
                        var entitledSwatchValue2 = z.substring(index2 + 1);

                        if (y != z) { //only check the attributes that are not the one selected
                            for (i in swatchToUpdate) {
                                var swatchToUpdateName = swatchToUpdate[i][0];
                                var swatchToUpdateValue = swatchToUpdate[i][1];

                                if (entitledSwatchName2 == swatchToUpdateName && entitledSwatchValue2 == swatchToUpdateValue) {
                                    swatchToUpdate[i][5] = true;
                                }
                            }
                        }
                    }
                }
            }
        }

        // Now go through swatchToUpdate array, and update swatch images
        var disabledAttributes = [];
        for (i in swatchToUpdate) {
            var swatchToUpdateName = swatchToUpdate[i][0];
            var swatchToUpdateValue = swatchToUpdate[i][1];
            var swatchToUpdateImg1 = swatchToUpdate[i][2];
            var swatchToUpdateImg2 = swatchToUpdate[i][3];
            var swatchToUpdateOnclick = swatchToUpdate[i][4];
            var swatchToUpdateEnabled = swatchToUpdate[i][5];

            if (swatchToUpdateEnabled) {
                if (document.getElementById("swatch_" + entitledItemId + "_" + swatchToUpdateValue).className != "color_swatch_selected") {
                    var swatchElement = dojo.byId("swatch_" + entitledItemId + "_" + swatchToUpdateValue);
                    swatchElement.className = "color_swatch";
                    swatchElement.src = swatchElement.src.replace("_disabled.png", "_enabled.png");

                    //change the title text of the swatch link
                    dojo.byId("swatch_link_" + entitledItemId + "_" + swatchToUpdateValue).title = swatchElement.alt;
                }
                document.getElementById("swatch_link_" + entitledItemId + "_" + swatchToUpdateValue).setAttribute("aria-disabled", "false");
                document.getElementById("swatch_link_" + entitledItemId + "_" + swatchToUpdateValue).onclick = swatchToUpdateOnclick;
            } else {
                if (swatchToUpdateName != doNotDisable) {
                    var swatchElement = dojo.byId("swatch_" + entitledItemId + "_" + swatchToUpdateValue);
                    var swatchLinkElement = dojo.byId("swatch_link_" + entitledItemId + "_" + swatchToUpdateValue);
                    swatchElement.className = "color_swatch_disabled";
                    swatchLinkElement.onclick = null;
                    swatchElement.src = swatchElement.src.replace("_enabled.png", "_disabled.png");

                    //change the title text of the swatch link
                    var titleText = storeNLS["INV_ATTR_UNAVAILABLE"];
                    swatchLinkElement.title = dojo.string.substitute(titleText, {
                        0: swatchElement.alt
                    });

                    document.getElementById("swatch_link_" + entitledItemId + "_" + swatchToUpdateValue).setAttribute("aria-disabled", "true");

                    //The previously selected attribute is now unavailable for the new selection
                    //Need to switch the selection to an available value
                    if (selectedAttributes[swatchToUpdateName] == swatchToUpdateValue) {
                        disabledAttributes.push(swatchToUpdate[i]);
                    }
                }
            }
        }

        //If there were any previously selected attributes that are now unavailable
        //Find another available value for that attribute and update other attributes according to the new selection
        for (i in disabledAttributes) {
            var disabledAttributeName = disabledAttributes[i][0];
            var disabledAttributeValue = disabledAttributes[i][1];

            for (i in swatchToUpdate) {
                var swatchToUpdateName = swatchToUpdate[i][0];
                var swatchToUpdateValue = swatchToUpdate[i][1];
                var swatchToUpdateEnabled = swatchToUpdate[i][5];

                if (swatchToUpdateName == disabledAttributeName && swatchToUpdateValue != disabledAttributeValue && swatchToUpdateEnabled) {
                    productDisplayJS.makeSwatchSelection(swatchToUpdateName, swatchToUpdateValue, entitledItemId, doNotDisable, imageField);
                    break;
                }
            }
        }
    },
    /* SwatchCode end */

    /** 
     * Displays price of the attribute selected with the catalog entry id.
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    displayPrice: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        var tempString;
        var popup = productDisplayJS.isPopup;

        if (popup == true) {
            document.getElementById('productPrice').innerHTML = catEntry.offerPrice;
        }

        if (popup == false) {
            var innerHTML = "";
            /*
              var listPrice = dojo.currency.format(catEntry.listPrice,{symbol: this.currencySymbol});
              var offerPrice = dojo.currency.parse(catEntry.offerPrice,{symbol: this.currencySymbol});
            */

            var listPrice = parseInt(catEntry.listPrice);
            var offerPrice = parseInt(((catEntry.offerPrice).replace('$', '')).replace(',', ''));

            var dlDiscount = "<dl class='data clearfix'>";
            var auxPriceCoppel = catEntry.priceCoppel.split('/');
            /*
             *  Agregando el estilo para el precio del producto
             */

            var before = "<span class='old_price'></span>";
            var bikeely = "<spanid='twoWeeksprice_" + productDisplayJS.baseCatalogEntryId + "'></span>";
            var ccoppel = "<span id='creditCoppelPrice_" + productDisplayJS.baseCatalogEntryId + "'></span>";

            if (listPrice > offerPrice) {
                before = "<span class='old_price'>antes&nbsp;" + listPrice + "</span>";
                dlDiscount = "<dl class='data discount clearfix'>";
            }

            if (auxPriceCoppel[0] != null && auxPriceCoppel[0] != 'undefined') {
                bikeely = "<span id='twoWeeksprice_" + productDisplayJS.baseCatalogEntryId + "' >" + auxPriceCoppel[0] + "</span>"
            }

            if (auxPriceCoppel[1] != null && auxPriceCoppel[1] != 'undefined') {
                ccoppel = "<span id='creditCoppelPrice_" + productDisplayJS.baseCatalogEntryId + "'>" + auxPriceCoppel[1] + "</span>";
            }

            innerHTML = "" +
                "<div class='priceTable'>" +
                "<dl class='title clearfix'>" +
                "<h3>Contado:</h3>" +
                "<h3>Cr&eacute;dito Coppel</h3>" +
                "</dl>" + dlDiscount +
                "<div>" +
                "<dt>" + before + "</dt>" +
                "<dd>" +
                "<span id='offerPrice_" + productDisplayJS.baseCatalogEntryId + "' itemprop='price'> $" + offerPrice + "</span>" +
                "</dd>" +
                "</div>" +
                "<div>" +
                "<dt>Quincenal $" + bikeely + "</dt>" +
                "<dd>$" + ccoppel + "</dd>" +
                "</div>" +
                "</dl>" +
                "</div>";

            document.getElementById('price_display_' + productId).innerHTML = innerHTML +
                "<input type='hidden' id='ProductInfoPrice_" + catEntry.catalogEntryIdentifier.uniqueID + "' value='" + catEntry.offerPrice.replace(/"/g, "&#034;").replace(/'/g, "&#039;") + "'/>";

            innerHTML = "";
            if (productDisplayJS.displayPriceRange == true) {
                for (var i in catEntry.priceRange) {
                    if (catEntry.priceRange[i].endingNumberOfUnits == catEntry.priceRange[i].startingNumberOfUnits) {
                        tempString = storeNLS['PQ_PRICE_X'];
                        innerHTML = innerHTML + "<p>" + dojo.string.substitute(tempString, {
                            0: catEntry.priceRange[i].startingNumberOfUnits
                        });
                    } else if (catEntry.priceRange[i].endingNumberOfUnits != 'null') {
                        tempString = storeNLS['PQ_PRICE_X_TO_Y'];
                        innerHTML = innerHTML + "<p>" + dojo.string.substitute(tempString, {
                            0: catEntry.priceRange[i].startingNumberOfUnits,
                            1: catEntry.priceRange[i].endingNumberOfUnits
                        });
                    } else {
                        tempString = storeNLS['PQ_PRICE_X_OR_MORE'];
                        innerHTML = innerHTML + "<p>" + dojo.string.substitute(tempString, {
                            0: catEntry.priceRange[i].startingNumberOfUnits
                        });
                    }
                    innerHTML = innerHTML + " <span class='price'>" + catEntry.priceRange[i].localizedPrice + "</span></p>";
                }
            }
            // Append productId so that element is unique in bundle page, where there can be multiple components
            var quantityDiscount = dojo.byId("productLevelPriceRange_" + productId);
            var itemQuantityDiscount = dojo.byId("itemLevelPriceRange_" + productId);

            // if product level price exists and no section to update item level price
            if (null != quantityDiscount && null == itemQuantityDiscount) {
                dojo.style(quantityDiscount, "display", ""); //display product level price range
            }
            // if item level price range is present
            else if ("" != innerHTML && null != itemQuantityDiscount) {
                innerHTML = storeNLS['PQ_PURCHASE'] + innerHTML;
                itemQuantityDiscount.innerHTML = innerHTML;
                dojo.style(itemQuantityDiscount, "display", "");
                // hide the product level price range
                if (null != quantityDiscount) {
                    dojo.style(quantityDiscount, "display", "none");
                }
            }
            // if item level price range is not present
            else if ("" == innerHTML) {
                if (null != itemQuantityDiscount) {
                    dojo.style(itemQuantityDiscount, "display", "none"); //hide item level price range
                }
                if (null != quantityDiscount) {
                    dojo.style(quantityDiscount, "display", ""); //display product level price range
                }
            }
        }
    },

    /** 
     * Updates the product name in the NameAndPrice widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductName: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        if (productDisplayJS.isPopup == true) {
            document.getElementById('productName').innerHTML = catEntry.description[0].name;
        } else {
            if (dojo.query(".top > div[id^='PageHeading_']") != null) {
                dojo.query(".top > div[id^='PageHeading_']").forEach(function(node) {
                    if (node.childNodes != null && node.childNodes.length == 3) {
                        node.childNodes[1].innerHTML = catEntry.description[0].name;
                    }
                });
            }

            var productInfoWidgets = dojo.query("input[id^='ProductInfoName_" + productId + "']");
            if (productInfoWidgets != null) {
                for (var i = 0; i < productInfoWidgets.length; i++) {
                    if (productInfoWidgets[i] != null) {
                        productInfoWidgets[i].value = catEntry.description[0].name;
                    }
                }
            }
        }
    },

    /** 
     * Updates the product part number in the NameAndPrice widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductPartNumber: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        if (productDisplayJS.isPopup == true) {
            document.getElementById('productSKUValue').innerHTML = catEntry.catalogEntryIdentifier.externalIdentifier.partNumber;
        } else {
            var partnumWidgets = dojo.query("span[id^='product_SKU_" + productId + "']");
            if (partnumWidgets != null) {
                for (var i = 0; i < partnumWidgets.length; i++) {
                    if (partnumWidgets[i]) {
                        partnumWidgets[i].innerHTML = storeNLS['SKU'] + " " + catEntry.catalogEntryIdentifier.externalIdentifier.partNumber;
                    }
                }
            }
        }
    },

    /** 
     * Updates the product short description in the ShortDescription widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductShortDescription: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        var shortDescWidgets = dojo.query("p[id^='product_shortdescription_" + productId + "']");
        if (shortDescWidgets != null) {
            for (var i = 0; i < shortDescWidgets.length; i++) {
                if (shortDescWidgets[i]) {
                    shortDescWidgets[i].innerHTML = catEntry.description[0].shortDescription;
                }
            }
        }
    },

    /** 
     * Updates the product long description in the LongDescription widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductLongDescription: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        var longDescWidgets = dojo.query("p[id^='product_longdescription_" + productId + "']");
        if (longDescWidgets != null) {
            for (var i = 0; i < longDescWidgets.length; i++) {
                if (longDescWidgets[i]) {
                    longDescWidgets[i].innerHTML = catEntry.description[0].longDescription;
                }
            }
        }
    },

    /** 
     * Updates the product discounts in the Discounts widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductDiscount: function(catEntryId, productId) {
        var catEntry = productDisplayJS.itemPriceJsonOject[catEntryId].catalogEntry;

        var newHtml = '';
        if (typeof catEntry.discounts != 'undefined') {
            for (var i = 0; i < catEntry.discounts.length; i++) {
                if (i > 0) {
                    newHtml += '<div class="clear_float"></div><div class="item_spacer_2px"></div>';
                }
                /* catEntry.discounts[i].description comes from short description associated with the promotion.
                 * If it is blank or missing, the link text is blank, thus is not clickable or displayed.
                 */
                newHtml += '<a class="promotion" href="' + catEntry.discounts[i].url + '">' + catEntry.discounts[i].description + '</a>';
            }
        }

        var discountWidgets = dojo.query("div[id^='Discounts_']");
        if (discountWidgets != null) {
            for (var i = 0; i < discountWidgets.length; i++) {
                if (discountWidgets[i]) {
                    discountWidgets[i].innerHTML = newHtml;
                }
            }
        }
    },

    /** 
     * Updates the product full image and angle images in the FullImage widget. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    updateProductImage: function(catEntryId, productId, descriptionId) {
        var newFullImage = null;
        var newAngleThumbnail = null;
        var newAngleFullImage = null;
        var newAngleThumbnailShortDesc = null;

        var entitledItemId = "entitledItem_" + productId;
        var imageArr = productDisplayJS.getImageForSKU(entitledItemId);

        if (imageArr != null) {
            newAngleThumbnail = imageArr[2];
            newAngleFullImage = imageArr[3];
            newAngleThumbnailShortDesc = imageArr[4];
            
            if( typeof newAngleThumbnailShortDesc != "object" || typeof newAngleThumbnail != "object" || typeof newAngleThumbnailShortDesc != "object" ){
                var images = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
                if (images.length > 0) {
                    newAngleThumbnail = images[0].ItemAngleThumbnail;
                    newAngleFullImage = images[0].ItemAngleFullImage;
                    newAngleThumbnailShortDesc = images[0].ItemAngleThumbnailShortDesc;
                }
            }
        }

        /*
         * Modificacion para mostrar las thumbnails en la descripcion 
         * del producto 
         */
        else {
            var images = eval('(' + dojo.byId(entitledItemId).innerHTML + ')');
            if (images.length > 0) {
                newAngleThumbnail = images[0].ItemAngleThumbnail;
                newAngleFullImage = images[0].ItemAngleFullImage;
                newAngleThumbnailShortDesc = images[0].ItemAngleThumbnailShortDesc;
            }
        }

        if (catEntryId != null) {
            newFullImage = imageArr[0];
        } else {
            var imageFound = false;
            var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
            for (x in productDisplayJS.entitledItems) {
                var Attributes = productDisplayJS.entitledItems[x].Attributes;

                for (y in Attributes) {
                    var index = y.indexOf("_");
                    var entitledSwatchName = y.substring(0, index);
                    var entitledSwatchValue = y.substring(index + 1);

                    for (attribute in selectedAttributes) {
                        if (entitledSwatchName == attribute && entitledSwatchValue == selectedAttributes[attribute]) {
                            newFullImage = productDisplayJS.entitledItems[x].ItemImage467;
                            newAngleThumbnail = productDisplayJS.entitledItems[x].ItemAngleThumbnail;
                            newAngleFullImage = productDisplayJS.entitledItems[x].ItemAngleFullImage;
                            newAngleThumbnailShortDesc = productDisplayJS.entitledItems[x].ItemAngleThumbnailShortDesc;
                            imageFound = true;
                            break;
                        }
                    }
                    if (imageFound) {
                        break;
                    }
                }
                if (imageFound) {
                    break;
                }
            }
        }

        /*
        if(imageArr != null){
            newAngleThumbnail = imageArr[2];
            newAngleFullImage = imageArr[3];    
            newAngleThumbnailShortDesc = imageArr[4];   
        }
        
        if(catEntryId != null){
            newFullImage = imageArr[0];
        } else {
            var imageFound = false;
            var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];
            for (x in productDisplayJS.entitledItems) {
                var Attributes = productDisplayJS.entitledItems[x].Attributes;
    
                for(attribute in selectedAttributes){
                    var matchingAttributeFound = false;
                    
                    for(y in Attributes){
                        var index = y.indexOf("_");
                        var entitledSwatchName = y.substring(0, index);
                        var entitledSwatchValue = y.substring(index+1);
                        
                        if (entitledSwatchName == attribute && entitledSwatchValue == selectedAttributes[attribute]) {
                            matchingAttributeFound = true;
                            break;
                        }
                    }
                    
                    // No matching attributes found, so this is not the correct SKU
                    if (!matchingAttributeFound) {
                        imageFound = false;
                        break;
                    }
                    imageFound = true;
                }
                // imageFound will only be true if all attributes have been matched (so the first correct SKU)
                if (imageFound) {
                    newFullImage = productDisplayJS.entitledItems[x].ItemImage467;
                    newAngleThumbnail = productDisplayJS.entitledItems[x].ItemAngleThumbnail;
                    newAngleFullImage = productDisplayJS.entitledItems[x].ItemAngleFullImage;                       
                    newAngleThumbnailShortDesc = productDisplayJS.entitledItems[x].ItemAngleThumbnailShortDesc;
                    break;
                }
            }           
        }*/

        var imgWidgets = dojo.query("img[id^='" + productDisplayJS.skuImageId + "']");
        for (var i = 0; i < imgWidgets.length; i++) {
            if (imgWidgets[i] != null && newFullImage != null) {
                imgWidgets[i].src = newFullImage;
            }
        }

        var productImgWidgets = dojo.query("input[id^='ProductInfoImage_" + productId + "']");
        for (var i = 0; i < productImgWidgets.length; i++) {
            if (productImgWidgets[i] != null && newFullImage != null) {
                productImgWidgets[i].value = newFullImage;
            }
        }
        if (newAngleThumbnail != null && newAngleFullImage != null) {
            //console.log("new Angle: " + JSON.stringify(newAngleFullImage));
            productDisplayJS.changeViewImages(newAngleThumbnail, newAngleFullImage, descriptionId);
        } else {
            var angleImageArea = dojo.query("div[id^='ProductAngleImagesArea']");
            if (angleImageArea != null) {
                for (var i = 0; i < angleImageArea.length; i++) {
                    if (null != angleImageArea[i]) {
                        angleImageArea[i].style.display = 'none';
                    }
                }
            }
        }
    },

    /** 
     * To notify the change in attribute to other components that is subscribed to 'DefiningAttributes_Changed' or 'DefiningAttributes_Resolved' event.
     * 
     * @param {string} productId The identifier of the product.
     * @param {string} entitledItemId The identifier of the entitled item.
     * @param {boolean} isPopup If the value is true, then this implies that the function was called from a quick info pop-up.
     * @param {boolean} displayPriceRange A boolean used to to determine whether or not to display the price range when the catEntry is selected.   
     */
    notifyAttributeChange: function(productId, entitledItemId, isPopup, displayPriceRange) {
        productDisplayJS.baseCatalogEntryId = productId;
        var selectedAttributes = productDisplayJS.selectedAttributesList[entitledItemId];

        productDisplayJS.displayPriceRange = displayPriceRange;
        productDisplayJS.isPopup = isPopup;

        var catalogEntryId = null;
        if (productDisplayJS.selectedProducts[productId]) {
            catalogEntryId = productDisplayJS.getCatalogEntryIdforProduct(productDisplayJS.selectedProducts[productId]);
        } else {
            catalogEntryId = productDisplayJS.getCatalogEntryId(entitledItemId);
        }

        if (catalogEntryId != null) {
            dojo.topic.publish('DefiningAttributes_Resolved_' + productId, catalogEntryId, productId);

            //check if the json object is already present for the catEntry.
            var catEntry = productDisplayJS.itemPriceJsonOject[catalogEntryId];

            if (catEntry != null && catEntry != undefined) {
                productDisplayJS.publishAttributeResolvedEvent(catalogEntryId, productId);
            }
            //if json object is not present, call the service to get the details.
            else {
                var parameters = {};
                parameters.storeId = productDisplayJS.storeId;
                parameters.langId = productDisplayJS.langId;
                parameters.catalogId = productDisplayJS.catalogId;
                parameters.catalogEntryId = catalogEntryId;
                parameters.productId = productId;
                var url = getAbsoluteURL() + appendWcCommonRequestParameters("GetCatalogEntryDetailsByIDView");
                dojo.xhrPost({
                    url: url,
                    handleAs: "json-comment-filtered",
                    content: parameters,
                    service: productDisplayJS,
                    load: productDisplayJS.publishAttributeResolvedEventServiceResponse,
                    error: function(errObj, ioArgs) {
                        console.debug("productDisplayJS.notifyAttributeChange: Unexpected error occurred during an xhrPost request.");
                    }
                });
            }
        } else {
            dojo.topic.publish('DefiningAttributes_Changed', catalogEntryId, productId);
            dojo.topic.publish('DefiningAttributes_Changed_' + productId, catalogEntryId, productId);
            console.debug("Publishing event 'DefiningAttributes_Changed' with params: catEntryId=" + catalogEntryId + ", productId=" + productId);
        }
    },

    /** 
     * Publishes the 'DefiningAttributes_Resolved' event using the JSON object returned from the server.
     * 
     * @param {object} serviceRepsonse The JSON response from the service.
     * @param {object} ioArgs The arguments from the service call.
     */
    publishAttributeResolvedEventServiceResponse: function(serviceResponse, ioArgs) {
        var productId = ioArgs['args'].content['productId'];
        //stores the json object, so that the service is not called when same catEntry is selected.
        productDisplayJS.itemPriceJsonOject[serviceResponse.catalogEntry.catalogEntryIdentifier.uniqueID] = serviceResponse;

        productDisplayJS.publishAttributeResolvedEvent(serviceResponse.catalogEntry.catalogEntryIdentifier.uniqueID, productId);
    },

    /** 
     * Publishes the 'DefiningAttributes_Resolved' event with the necessary parameters. 
     * 
     * @param {string} catEntryId The identifier of the sku.
     * @param {string} productId The identifier of the product.
     */
    publishAttributeResolvedEvent: function(catEntryId, productId) {
        if (!productDisplayJS.isPopup) {
            dojo.topic.publish('DefiningAttributes_Resolved', catEntryId, productId);
            console.debug("Publishing event 'DefiningAttributes_Resolved' with params: catEntryId=" + catEntryId + ", productId=" + productId);
        }
    },

    /**
     * To notify the change in quantity to other components that is subscribed to ShopperActions_Changed event.
     */
    notifyQuantityChange: function(quantity) {
        dojo.topic.publish('ShopperActions_Changed', quantity);
        console.debug("Publishing event 'ShopperActions_Changed' with params: quantity=" + quantity);
    },

    updateQuantityChange: function(quantity) {
        var catentryId1 = document.getElementById("CurrentProductId").value;
        quantity = quantity / 100;
        document.getElementById("quantity_" + catentryId1).value = quantity;
        productDisplayJS.notifyQuantityChange(quantity);
    },

    /**
     * To display attachment page.
     */
    showAttachmentPage: function(data) {
        var pageNumber = data['pageNumber'];
        var pageSize = data['pageSize'];
        pageNumber = dojo.number.parse(pageNumber);
        pageSize = dojo.number.parse(pageSize);

        setCurrentId(data["linkId"]);

        if (!submitRequest()) {
            return;
        }

        console.debug(wc.render.getRefreshControllerById('AttachmentPagination_Controller').renderContext.properties);
        var beginIndex = pageSize * (pageNumber - 1);
        cursor_wait();
        wc.render.updateContext('AttachmentPagination_Context', {
            'beginIndex': beginIndex
        });
        MessageHelper.hideAndClearMessage();
    },

    /**
     * Register mouse down event 
     */
    registerMouseDown: function(node) {
        dojo.connect(dojo.byId(node), "onmousedown",
            function() {
                productDisplayJS.calculateScrollingHeight(node);
            }
        );
    },

    /**
     * Calculate scrolling height.
     */
    calculateScrollingHeight: function(node) {
        var domGeometry = require("dojo/dom-geometry");
        var nodePosition = domGeometry.position(dojo.byId(node));
        var windowHeight = window.innerHeight;
        if (windowHeight - nodePosition.y > nodePosition.y) {
            var newHeight = windowHeight - nodePosition.y;
        } else {
            var newHeight = nodePosition.y;
        }
        if (dojo.byId(node + "_dropdown") != null) {
            if (windowHeight - nodePosition.y > nodePosition.y) {
                var newHeight = windowHeight - nodePosition.y;
            } else {
                var newHeight = nodePosition.y;
            }
            var dropdownHeight = dojo.byId(node + "_dropdown").clientHeight;
            if (dropdownHeight > newHeight) {
                dojo.byId(node + "_dropdown").style.height = newHeight + "px";
            }
        } else {
            dojo.byId(node + "_dropdown").style.height = windowHeight + "px";
        }
    }
}
require(["dojo/on", "dojo/has", "dojo/_base/sniff", "dojo/domReady!"], function(on, has) {
    if (has("ie") < 9) {
        on(document, ".compare_target > input[type=\"checkbox\"]:click", function(event) {
            this.blur();
            this.focus();
        });
    }
});

wc.service.declare({
    id: "look4Store",
    actionId: "look4Store",
    url: "look4StoreAjaxCmd",
    formId: ""

    /**
     * Clear messages on the page.
     * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation
     */
    ,
    successHandler: function(serviceResponse) {
            cursor_clear();
            var response = serviceResponse.infoStores;
            var infoStores = response.listInventoryVOs;

            var table = document.getElementById("dataInventoryTable");
            
            if (response.code == 'SUCCESS') {
                if (infoStores.length == 0) {
                    deleteTableRows("dataInventoryTable");
                    var table = document.getElementById("dataInventoryTable");

                    var row = table.insertRow(table.rows.length);
                    var cellStoreName = row.insertCell(0);
                    var cellStoreUnits = row.insertCell(1);
                    cellStoreName.innerHTML = "Lo sentimos, este producto no est\u00E1 disponible en la ciudad que elegiste.";
                    cellStoreUnits.innerHTML = "";
                } else {
                    deleteTableRows("dataInventoryTable");

                    for (var i = 0; i < infoStores.length; i++) {
                        var store = infoStores[i];

                        var row = table.insertRow(table.rows.length);
                        var cellStoreName = row.insertCell(0);
                        var cellStoreUnits = row.insertCell(1);

                        cellStoreName.innerHTML = "<b>" + store.storeName + "</b><br> Direcci\u00F3n: " + store.storeAddressName + "<br> Horario: " + store.scheduleName + "<br> Tel: " + store.storePhoneNumber;
                        cellStoreUnits.innerHTML = "<center>" + store.storeUnits + "</center>";
                    }
                }
            } else {
                deleteTableRows("dataInventoryTable");
                var table = document.getElementById("dataInventoryTable");

                var row = table.insertRow(table.rows.length);
                var cellStoreName = row.insertCell(0);
                var cellStoreUnits = row.insertCell(1);
                cellStoreName.innerHTML = "Lo sentimos, este producto no est\u00E1 disponible en la ciudad que elegiste.";
                cellStoreUnits.innerHTML = "";
            }
            dijit.byId("searchInStorePopup").show();
        }
        /**
         * Displays an error message on the page if the request failed.
         * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation.
         */
        ,
    failureHandler: function(serviceResponse) {
        var table = document.getElementById("dataInventoryTable");

        var tableLength = table.rows.length;

        if (tableLength == 1) {

            var stateId = null;
            var cityId = null;

            var cmbState = document.getElementById("cmbState");

            if (cmbState != null || cmbState != undefined) {

                var cmbStateValue = cmbState.value;

                if (cmbStateValue != "0") {
                    stateId = cmbStateValue;
                }

            }

            var cmbCity = document.getElementById("cmbCity");

            if (cmbCity != null || cmbCity != undefined) {

                var cmbCityValue = cmbCity.value;

                if (cmbCityValue != "0") {
                    cityId = cmbCityValue;
                }

            }

            if (stateId == null || cityId == null) {
                var COPPEL_CITY = getCookie("COPPEL_CITY");

                if (COPPEL_CITY != null && COPPEL_CITY != undefined && COPPEL_CITY != "") {

                    COPPEL_CITY = decodeURIComponent(COPPEL_CITY);

                    var listCoppelCity = COPPEL_CITY.split(";");

                    for (var i = 0; i < listCoppelCity.length; i++) {
                        var c = listCoppelCity[i];
                        if (i == 3) {
                            cityId = c;
                        } else if (i == 2) {
                            stateId = c;
                        }
                    }
                }
            }

            if (stateId == null || cityId == null) {
                var netAcuity = document.getElementById('netAcuity');

                if (netAcuity != null && netAcuity != undefined) {
                    netAcuityValue = netAcuity.value;

                    if (netAcuityValue != null && netAcuityValue != "") {

                        var listNetAcuityValue = netAcuityValue.split(";");

                        for (var i = 0; i < listNetAcuityValue.length; i++) {
                            var currentVal = listNetAcuityValue[i];
                            if (i == 2) {
                                stateId = currentVal;
                            }

                            if (i == 3) {
                                cityId = currentVal;
                            }
                        }
                    }
                }
            }

            if (stateId == null || cityId == null) {
                stateId = "25";
                cityId = "84";
            }

            document.getElementById("cmbStateBusTienda").value = stateId;

            var cmbCityBusTienda = document.getElementById("cmbCityBusTienda");

            removeOptions(cmbCityBusTienda);

            productDisplayJS.cityIdBusqueda = cityId;


            var row = table.insertRow(table.rows.length);
            var cellStoreName = row.insertCell(0);
            var cellStoreUnits = row.insertCell(1);
            cellStoreName.innerHTML = "No hay existencia en su ciudad";
            cellStoreUnits.innerHTML = "";

            dijit.byId("searchInStorePopup").show();

        } else {
            for (var i = 0; i < tableLength; i++) {
                if (i != 0) {
                    table.deleteRow(i);
                    tableLength--;
                    i--;
                }
            }

            var row = table.insertRow(table.rows.length);
            var cellStoreName = row.insertCell(0);
            var cellStoreUnits = row.insertCell(1);
            cellStoreName.innerHTML = "No hay existencia en su ciudad";
            cellStoreUnits.innerHTML = "";
        }

        console.info(JSON.stringify(serviceResponse));
        cursor_clear();
    }
});
wc.service.declare({
    id: "productCard",
    actionId: "productCard",
    url: "productCardAjaxCmd",
    formId: ""

    /**
     * Clear messages on the page.
     * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation
     */
    ,
    successHandler: function(serviceResponse) {
            cursor_clear();
            var customerCoppel = serviceResponse.customerCoppel;
            var htmlTable = [];
            if (customerCoppel == null) {
                show_customerNumberCoppel
            } else {
                htmlTable.push("<div id='pagoInicial'>Pago Inicial: ");
                htmlTable.push(customerCoppel);
                htmlTable.push("</div>");
                document.getElementById("show_pagoInicial").innerHTML = htmlTable.join("");
            }
            dijit.byId("customerNumberCoppelPupup").show();
        }
        /**
         * Displays an error message on the page if the request failed.
         * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation.
         */
        ,
    failureHandler: function(serviceResponse) {
        console.info(JSON.stringify(serviceResponse));
        cursor_clear();
        alert("Hubo problemas de comunicacion, intenta de nuevo si el error persiste contacta a tu administrador");
    }
});

wc.service.declare({
    id: "downPayment",
    actionId: "downPayment",
    url: "downPaymentAjaxCmd",
    formId: ""

    /**
     * Clear messages on the page.
     * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation
     */
    ,
    successHandler: function(serviceResponse) {
            cursor_clear();
            var numeroClienteCoppel = serviceResponse.numeroClienteCoppel;
            var pagoInicial = serviceResponse.pagoInicial;
            //var response = serviceResponse.response;
            var htmlTable = [];
            var htmlTableNumberCoppel = [];
            htmlTable.push("$<input class='short' placeholder='$' name='coppel_cliente_number' value='");
            htmlTable.push(pagoInicial);
            htmlTable.push("' />");
            htmlTableNumberCoppel.push("<span>");
            htmlTableNumberCoppel.push(numeroClienteCoppel);
            htmlTableNumberCoppel.push("</span>");

            document.getElementById("show_pagoInicialCheckOut").innerHTML = htmlTable.join("");
            document.getElementById("show_numeroClienteCoppelCheckOut").innerHTML = htmlTableNumberCoppel.join("");
            dijit.byId("credit_coppel").show();
        }
        /**
         * Displays an error message on the page if the request failed.
         * @param (object) serviceResponse The service response object, which is the JSON object returned by the service invocation.
         */
        ,
    failureHandler: function(serviceResponse) {
        console.info(JSON.stringify(serviceResponse));
        cursor_clear();
        alert("Hubo problemas de comunicacion, intenta de nuevo si el error persiste contacta a tu administrador");
    }
});

window.onkeyup = getKeyWord;

function getKeyWord() {
    var e = window.event;
    var tecla = (document.all) ? e.keyCode : e.which;
    if (tecla == 27) {
        MessageHelper.hideMessageAreaPopUp('searchInStorePopup');
    }
}