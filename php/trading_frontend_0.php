<?php 
    $outputMessage='';
    $inputPanel=
    '
        <div class="inputPanel">
        
            <label>City</label>
            </br>
            <input id="cityInput"></input>
            </br>
            <label>Commodity</label>
            </br>
            <input id="commodityInput"></input>
            </br>
            <label>Buying Price</label>
            </br>
            <input id="buyingPriceInput"></input>
            </br>
            <label>Selling Price</label>
            </br>
            <input id="sellingPriceInput"></input>
            </br>
            <button onclick="handleSubmitButton()">Submit</button>
        </div>
    ';
    $titleText='Trade Route Information';
    
    $citiesArea='<div id="citiesArea"></div>';
    $commoditiesArea='<div id="commoditiesArea"></div>';
    $infoArea='<div id="infoArea"></div>';
    $tradeRouteArea='<div id="tradeRouteArea"></div>';
    
    $title =
        '
            <h1>'.$titleText.'</h1>
            
            
            <script src="js/tradingScripts.js"></script>
        ';
    $outputMessage=
        $title
        .$inputPanel
        .$citiesArea
        .$commoditiesArea
        .$infoArea
        .$tradeRouteArea;
        
    echo $outputMessage;
?>