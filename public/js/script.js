// script.js

function populateFields() {
    var selectedModel = document.getElementById('model').value;
    //const rawData = JSON.parse(campgroundsData.features);
    modelData = JSON.parse(modelData.droneData);

    var selectedModelObject = modelData.find(function(model) {
        return model.MODEL === selectedModel;
    });

    document.getElementById('launch').value = selectedModelObject.LAUNCH_DATE;
    document.getElementById('version').value = selectedModelObject.VERSION;
    document.getElementById('price-new').value = selectedModelObject.PRICE_OF_NEW;
    document.getElementById('elasped-months').value = selectedModelObject.ELAPSED_MONTHS;
    // ...populate other fields as needed
}
