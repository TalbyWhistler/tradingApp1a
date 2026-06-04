function handleTestClick()
{
    console.log("Testo clicko");
    outputArea=document.getElementById("messageOut");
    outputArea.innerHTML='testo click';
}



function tradingPageInit()
{
    console.log('tradingPageInit');
    fetchCities();
    fetchCommodities();
    //fetchCity('lisbon');
}


function handleSubmitButton()
{
    let cityInput=document.getElementById("cityInput");
    let commodityInput=document.getElementById("commodityInput");
    let buyingPriceInput=document.getElementById("buyingPriceInput");
    let sellingPriceInput=document.getElementById("sellingPriceInput")

    let city=cityInput.value;
    let commodity=commodityInput.value; 
    let buyingPrice=buyingPriceInput.value;
    let sellingPrice=sellingPriceInput.value;
    let functionParams ={city:city,commodity:commodity,buyingPrice:buyingPrice,sellingPrice:sellingPrice};

    console.log("Submit button pressed");

    let fetchTarget='php/trading_backend_0.php';
    let functionName='inputRecord';

    //let functionParams='';
    let inputPackage={function:functionName,params:functionParams};

    inputPackage=JSON.stringify(inputPackage);
    fetch(fetchTarget,
        {
            method:'POST',
            headers:
            {
                'Content-Type':'application.json'
            },
            body:inputPackage
        }
    )
    .then(response=>response.json())
    .then(data=>{console.log(data);fetchCities();fetchCommodities()});
}


function fetchCities()
{
    let functionName='fetchCities';
    let params='';
    let inputPackage={function:functionName,params:params};
    inputPackage=JSON.stringify(inputPackage);
    let fetchTarget='php/trading_backend_0.php';
    fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:inputPackage
        }
    )
    .then(response=>response.json())
    .then(data=>printCities(data));
}

function printCities(cities)
{
    console.log(cities);
    outputArea=document.getElementById("citiesArea");
    try 
    {
        if (cities.length==0)
        {
            return false;
        }
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
    let outputMessage='';
    for(let i=0;i<cities.length;i++)
    {
        console.log(cities[i]);
        outputMessage=outputMessage+
        `
            <button class="cityButton" id="cityButton${i}" onclick="handleCityButton('${cities[i]}')">${cities[i]}</button>
        `;
    }
    citiesArea.innerHTML=outputMessage; 
}



function fetchCommodities()
{
    let functionName='fetchCommodities';
    let params='';
    let inputPackage={function:functionName,params:params};
    inputPackage=JSON.stringify(inputPackage);
    let fetchTarget='php/trading_backend_0.php';
    fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:inputPackage
        }
    )
    .then(response=>response.json())
    .then(data=>printCommodities(data));
}

function printCommodities(commodities)
{
    console.log(commodities);
    //outputArea=document.getElementById("commoditiesArea");
    try 
    {
        if (commodities.length==0)
        {
            return false;
        }
    }
    catch(e)
    {
        console.log(e);
        return false;
    }
    let outputMessage='';
    for(let i=0;i<commodities.length;i++)
    {
        console.log(commodities[i]);
        outputMessage=outputMessage+
        `
            <button class="commodityButton" id="commodityButton${i}" onclick="handleCommodityButton('${commodities[i]}')">${commodities[i]}</button>
        `;
    }
    commoditiesArea.innerHTML=outputMessage; 
}

function handleCityButton(city)
{
    console.log('handle city button city is',city);
    fetchCity(city);
    fetchTradeRoutesByCity(city);
}


function printCityInfo(data)
{

    try 
    {
        if (data.length==0)
        {
            return false;
        }
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
    let tableOpener=
    `
        <table class="infoTable"><tbody>
    `;
    let tableHeader=
    `
        <tr>
            <th>Commodity</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
        </tr>
    `;
    let tableCloser=
    `
        </tbody></table>
    `;
    let tableRows='';
    for (let i=0;i<data.length;i++)
    {
        console.log(data[i].commodity);
        tableRows=tableRows+
        `
            <tr>
                <td>${data[i].commodity}</td>
                <td>${data[i].sellingPrice}</td>
                <td>${data[i].buyingPrice}</td>
            </tr>
        `;
    }
    infoArea.innerHTML=tableOpener+tableHeader+tableRows+tableCloser;
}


function printCommodityInfo(data)
{

    try 
    {
        if (data.length==0)
        {
            return false;
        }
    }
    catch(error)
    {
        console.log(error);
        return false;
    }
    let tableOpener=
    `
        <table class="infoTable"><tbody>
    `;
    let tableHeader=
    `
        <tr>
            <th>City</th>
            <th>Buying Price</th>
            <th>Selling Price</th>
        </tr>
    `;
    let tableCloser=
    `
        </tbody></table>
    `;
    let tableRows='';
    for (let i=0;i<data.length;i++)
    {
        console.log(data[i].city);
        tableRows=tableRows+
        `
            <tr>
                <td>${data[i].city}</td>
                <td>${data[i].sellingPrice}</td>
                <td>${data[i].buyingPrice}</td>
            </tr>
        `;
    }
    infoArea.innerHTML=tableOpener+tableHeader+tableRows+tableCloser;
}

function handleCommodityButton(commodity)
{
    console.log('handle commodity button commodity:',commodity);
    fetchCommodity(commodity);
    fetchTradeRoutesByCommodity(commodity);
}

function fetchCity(city)
{
     let fetchTarget='php/trading_backend_0.php';
     let functionName='fetchCity';
     let params={city:city};
     let inputPackage={function:functionName,params:params};
     inputPackage=JSON.stringify(inputPackage);
     fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:inputPackage
        }
     )
     .then(response=>response.json())
     .then(data=>printCityInfo(data));
}

function fetchCommodity(commodity)
{
     let fetchTarget='php/trading_backend_0.php';
     let functionName='fetchCommodity';
     let params={commodity:commodity};
     let inputPackage={function:functionName,params:params};
     inputPackage=JSON.stringify(inputPackage);
     fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:inputPackage
        }
     )
     .then(response=>response.json())
     .then(data=>printCommodityInfo(data));
}


function fetchTradeRoutesByCity(city)
{
    let fetchTarget='php/trading_backend_0.php';
    let functionName='tradeRoutesByCity';
    let params={city:city};
    let inputPackage={function:functionName,params:params};
    inputPackage=JSON.stringify(inputPackage);
    fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:inputPackage
        }
     )
     .then(response=>response.json())
     .then(data=>printTradeRoutesByCity(data));
}

function fetchTradeRoutesByCommodity(commodity)
{
    let fetchTarget='php/trading_backend_0.php';
    let functionName='tradeRoutesByCommodity';
    let params={commodity:commodity};
    let inputPackage={function:functionName,params:params};
    inputPackage=JSON.stringify(inputPackage);
    fetch(fetchTarget,
        {
            method:'POST',
            headers:{'Content-Type':'Application/json'},
            body:inputPackage
        }
     )
     .then(response=>response.json())
     .then(data=>printTradeRoutesByCommodity(data));
}


function printTradeRoutesByCity(data)
{
    try 
    {
        if (data.length==0)
        {
            return false;
        }
    }
    catch(e)
    {
        return false;
    }
    let outputArea=document.getElementById("tradeRouteArea");
    let tableStart=
    `
        <table class="tradeRouteTable"><tbody>
    `;
    let tableHeader=
    `
        <tr>
            <th>Commodity</th>
            <th>From</th>
            <th>To</th>
            <th>Profit</th>
        </tr>
    `;
    let tableCloser=
    `
        </tbody></table>
    `;
    let tableRows='';
    for (let i=0;i<data.length;i++)
    {
        let commodity=data[i]["commodity"];
        let from=data[i]["from"];
        let to=data[i]["to"];
        let profit=data[i]["profit"];
        tableRows=tableRows+
        `
        <tr>
            <td>
                ${commodity}
            </td>
            <td>
                ${from}
            </td>
            <td>
                ${to}
            </td>
            <td>
                ${profit}
            </td>
        <tr>
        `;
    }
    let fullOutput=tableStart+tableHeader+tableRows+tableCloser;
    outputArea.innerHTML=fullOutput;
}


function printTradeRoutesByCommodity(data)
{
    try 
    {
        if (data.length==0)
        {
            return false;
        }
    }
    catch(e)
    {
        return false;
    }
    let outputArea=document.getElementById("tradeRouteArea");
    let tableOpener=
    `
        <table class="tradeRouteTable"><tbody>
    `;
    let tableHeaders=
    `
        <tr>
            <th>From</th>
            <th>To</th>
            <th>Profit</th>
        </tr>
    `;
    let tableCloser=
    `
        </tbody>
        </table>
    `; 
    let tableRows='';
    for (let i=0;i<data.length;i++)
    {
        let from=data[i]["from"];
        let to=data[i]["to"];
        let profit=data[i]["profit"];
        tableRows=tableRows+
        `
            <tr>
                <td>${from}</td>
                <td>${to}</td>
                <td>${profit}</td>
            </tr>
        `;
    }
    let fullOutput=tableOpener+tableHeaders+tableRows+tableCloser;
    outputArea.innerHTML=fullOutput;

}

tradingPageInit();