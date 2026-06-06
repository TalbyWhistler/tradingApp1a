<?php 
    // class list 
    $panelClass="inputPanel";
    $panelInputsClass="panelInputs";
    $titleClass="tradingTitle";
    $cityButtonClass="cityButton";
    $commodityButtonClass="commodityButton";
    $submitButtonClass="tradingSubmitButton";


    $outputMessage='';
    $inputPanel=
    '
        <div class="inputPanel">
        
            <label>City</label>
            </br>
            <input class="panelInputs" id="cityInput"/>
            </br>
            <label>Commodity</label>
            </br>
            <input class="panelInputs" id="commodityInput"/>
            </br>
            <label>Buying Price</label>
            </br>
            <input class="panelInputs" id="buyingPriceInput"/>
            </br>
            <label>Selling Price</label>
            </br>
            <input class="panelInputs" id="sellingPriceInput"/>
            </br>
            <button class="'.$submitButtonClass.'" onclick="handleSubmitButton()">Submit</button>
            <div class="statusIndicatorBox" id="tradingStatusIndicatorBox"><p class="statusIndicator" id="tradingStatusIndicator">Ready</p></div>
        </div>
    ';

    
    
    $titleText='Trade Route Information';
    
    $citiesArea='<div id="citiesArea"></div>';
    $commoditiesArea='<div id="commoditiesArea"></div>';
    $infoArea='<div id="infoArea"></div>';
    $tradeRouteArea='<div id="tradeRouteArea"></div>';

    $displayRow=
    '
        <div class="row">'
        .$infoArea. 
        $tradeRouteArea.
        '</div>
    ';
    
    $title =
        '
            <h1 class="'.$titleClass.'">'.$titleText.'</h1>
            
            
            <script src="js/tradingScripts.js"></script>
        ';
    $outputMessage=
        '<div class="tradePage">'.
        $title
        .$inputPanel
        
        .$citiesArea
        .$commoditiesArea
       
        .$displayRow.'</div>';
        
    echo $outputMessage;
?>